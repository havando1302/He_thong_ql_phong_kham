/**
 * MEDICARE PRO - 2026 SaaS Modern Admin JavaScript Engine
 * Handles Dark Mode, Responsive Sidebar, Interactive Data Tables with Pagination,
 * Live Clinic Clock, Sorting, Filtering, and UI Enhancements.
 */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. THEME CONTROLLER (Dark / Light Mode)
     -------------------------------------------------------------------------- */
  const THEME_STORAGE_KEY = 'medicare_admin_theme';

  function getPreferredTheme() {
    const saved = localStorage.getItem(THEME_STORAGE_KEY);
    if (saved === 'dark' || saved === 'light') return saved;
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update icons
    const toggleBtns = document.querySelectorAll('.theme-switch-btn');
    toggleBtns.forEach(btn => {
      const icon = btn.querySelector('i');
      if (icon) {
        if (theme === 'dark') {
          icon.className = 'fas fa-sun';
          btn.setAttribute('title', 'Chuyển sang giao diện Sáng');
        } else {
          icon.className = 'fas fa-moon';
          btn.setAttribute('title', 'Chuyển sang giao diện Tối');
        }
      }
    });
  }

  // Early apply before DOM completes
  const initialTheme = getPreferredTheme();
  document.documentElement.setAttribute('data-theme', initialTheme);

  /* --------------------------------------------------------------------------
     2. DOM READY INITIALIZATION
     -------------------------------------------------------------------------- */
  document.addEventListener('DOMContentLoaded', function () {
    applyTheme(getPreferredTheme());

    // Theme toggle button click
    document.querySelectorAll('.theme-switch-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const current = document.documentElement.getAttribute('data-theme') || 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
      });
    });

    // Sidebar Collapse (Desktop)
    const collapseBtn = document.getElementById('sidebarCollapseBtn');
    if (collapseBtn) {
      const savedCollapse = localStorage.getItem('medicare_sidebar_collapsed');
      if (savedCollapse === 'true') {
        document.body.classList.add('sidebar-is-collapsed');
      }

      collapseBtn.addEventListener('click', function () {
        document.body.classList.toggle('sidebar-is-collapsed');
        localStorage.setItem(
          'medicare_sidebar_collapsed',
          document.body.classList.contains('sidebar-is-collapsed') ? 'true' : 'false'
        );
      });
    }

    // Mobile Sidebar Drawer
    const mobileTrigger = document.querySelector('.mobile-menu-trigger');
    const backdrop = document.querySelector('.mobile-backdrop');

    if (mobileTrigger) {
      mobileTrigger.addEventListener('click', function () {
        document.body.classList.toggle('mobile-nav-open');
      });
    }

    if (backdrop) {
      backdrop.addEventListener('click', function () {
        document.body.classList.remove('mobile-nav-open');
      });
    }

    // Live Clock
    initLiveClock();

    // Initialize all SaaS Data Tables
    document.querySelectorAll('.saas-data-table').forEach(table => {
      initSaasTable(table);
    });

    // Alert dismiss buttons
    document.querySelectorAll('.saas-alert-close').forEach(btn => {
      btn.addEventListener('click', function () {
        const alert = this.closest('.saas-alert');
        if (alert) {
          alert.style.opacity = '0';
          alert.style.transform = 'translateY(-8px)';
          setTimeout(() => alert.remove(), 250);
        }
      });
    });

    // Auto dismiss success alerts after 6 seconds
    setTimeout(() => {
      document.querySelectorAll('.saas-alert.alert-success').forEach(alert => {
        alert.style.opacity = '0';
        alert.style.transform = 'translateY(-8px)';
        setTimeout(() => alert.remove(), 250);
      });
    }, 6000);

    // Form button loading states on submit
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', function (e) {
        // If not cancelled by validation
        if (!e.defaultPrevented) {
          const submitBtn = form.querySelector('button[type="submit"]');
          if (submitBtn) {
            submitBtn.classList.add('is-loading');
          }
        }
      });
    });
  });

  /* --------------------------------------------------------------------------
     3. LIVE CLINIC CLOCK
     -------------------------------------------------------------------------- */
  function initLiveClock() {
    const timeEl = document.getElementById('liveClockTime');
    const dateEl = document.getElementById('liveClockDate');
    if (!timeEl && !dateEl) return;

    function update() {
      const now = new Date();
      if (timeEl) {
        const hours = String(now.getHours()).padStart(2, '0');
        const mins = String(now.getMinutes()).padStart(2, '0');
        const secs = String(now.getSeconds()).padStart(2, '0');
        timeEl.textContent = `${hours}:${mins}:${secs}`;
      }
      if (dateEl) {
        const days = ['Chủ Nhật', 'Thứ Hai', 'Thứ Ba', 'Thứ Tư', 'Thứ Năm', 'Thứ Sáu', 'Thứ Bảy'];
        const dayName = days[now.getDay()];
        const day = String(now.getDate()).padStart(2, '0');
        const month = String(now.getMonth() + 1).padStart(2, '0');
        const year = now.getFullYear();
        dateEl.textContent = `${dayName}, ${day}/${month}/${year}`;
      }
    }
    update();
    setInterval(update, 1000);
  }

  /* --------------------------------------------------------------------------
     4. UNIVERSAL DATA TABLE ENGINE (PAGINATION, SORTING, FILTERING, EMPTY STATE)
     -------------------------------------------------------------------------- */
  function initSaasTable(table) {
    const wrapper = table.closest('.saas-card') || table.parentElement;
    const tbody = table.querySelector('tbody');
    if (!tbody) return;

    const originalRows = Array.from(tbody.querySelectorAll('tr'));
    if (originalRows.length === 0) return;

    // Table state
    let filteredRows = [...originalRows];
    let currentPage = 1;
    let pageSize = 10;
    let sortColumnIndex = -1;
    let sortDirection = 'asc';

    // Elements
    const searchInput = wrapper.querySelector('.table-search-input');
    const paginationContainer = wrapper.querySelector('.table-pagination-footer');
    const infoEl = wrapper.querySelector('.pagination-info');
    const buttonsContainer = wrapper.querySelector('.pagination-buttons');
    const pageSizeSelect = wrapper.querySelector('.page-size-select');
    const emptyStateEl = wrapper.querySelector('.table-empty-state');

    // 4.1 Setup Column Sorting
    const thList = table.querySelectorAll('thead th');
    thList.forEach((th, idx) => {
      // Don't sort action column or empty
      if (th.classList.contains('no-sort') || th.textContent.trim().toLowerCase().includes('thao tác')) {
        return;
      }
      th.classList.add('sortable');
      th.addEventListener('click', function () {
        if (sortColumnIndex === idx) {
          sortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
          sortColumnIndex = idx;
          sortDirection = 'asc';
        }

        // Update headers visual state
        thList.forEach(t => t.classList.remove('sort-asc', 'sort-desc'));
        th.classList.add(sortDirection === 'asc' ? 'sort-asc' : 'sort-desc');

        // Perform sort
        sortRows();
        currentPage = 1;
        renderTable();
      });
    });

    function sortRows() {
      if (sortColumnIndex < 0) return;
      filteredRows.sort((a, b) => {
        const aCell = a.children[sortColumnIndex]?.textContent.trim() || '';
        const bCell = b.children[sortColumnIndex]?.textContent.trim() || '';

        // Check if numeric or date
        const aNum = parseFloat(aCell.replace(/[^0-9.-]/g, ''));
        const bNum = parseFloat(bCell.replace(/[^0-9.-]/g, ''));
        if (!isNaN(aNum) && !isNaN(bNum) && aCell.length < 15 && !aCell.includes('/')) {
          return sortDirection === 'asc' ? aNum - bNum : bNum - aNum;
        }

        return sortDirection === 'asc'
          ? aCell.localeCompare(bCell, 'vi', { numeric: true })
          : bCell.localeCompare(aCell, 'vi', { numeric: true });
      });
    }

    // 4.2 Setup Live Client Search
    if (searchInput) {
      searchInput.addEventListener('input', function () {
        const query = this.value.toLowerCase().trim();
        if (!query) {
          filteredRows = [...originalRows];
        } else {
          filteredRows = originalRows.filter(row => {
            return row.textContent.toLowerCase().includes(query);
          });
        }
        currentPage = 1;
        if (sortColumnIndex >= 0) sortRows();
        renderTable();
      });
    }

    // 4.3 Setup Page Size Selector
    if (pageSizeSelect) {
      pageSize = parseInt(pageSizeSelect.value, 10) || 10;
      pageSizeSelect.addEventListener('change', function () {
        pageSize = parseInt(this.value, 10) || 10;
        currentPage = 1;
        renderTable();
      });
    }

    // 4.4 Render Table with Pagination
    function renderTable() {
      const total = filteredRows.length;

      // Handle Empty State
      if (total === 0) {
        tbody.innerHTML = '';
        if (emptyStateEl) {
          emptyStateEl.style.display = 'block';
        }
        if (table) table.style.display = 'none';
        if (paginationContainer) paginationContainer.style.display = 'none';
        return;
      }

      if (emptyStateEl) emptyStateEl.style.display = 'none';
      if (table) table.style.display = 'table';
      if (paginationContainer) paginationContainer.style.display = 'flex';

      const totalPages = Math.ceil(total / pageSize);
      if (currentPage > totalPages) currentPage = totalPages;
      if (currentPage < 1) currentPage = 1;

      const startIndex = (currentPage - 1) * pageSize;
      const endIndex = Math.min(startIndex + pageSize, total);

      // Render only visible rows into tbody
      tbody.innerHTML = '';
      for (let i = startIndex; i < endIndex; i++) {
        tbody.appendChild(filteredRows[i]);
      }

      // Update info text
      if (infoEl) {
        infoEl.innerHTML = `Hiển thị <strong>${total > 0 ? startIndex + 1 : 0} - ${endIndex}</strong> trên tổng số <strong>${total}</strong> bản ghi`;
      }

      // Render Pagination Buttons
      renderPaginationButtons(totalPages);
    }

    function renderPaginationButtons(totalPages) {
      if (!buttonsContainer) return;
      buttonsContainer.innerHTML = '';

      // Prev Button
      const prevBtn = document.createElement('button');
      prevBtn.className = 'page-btn';
      prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
      prevBtn.title = 'Trang trước';
      prevBtn.disabled = currentPage === 1;
      prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
          currentPage--;
          renderTable();
        }
      });
      buttonsContainer.appendChild(prevBtn);

      // Page Number Pills
      const maxButtons = 5;
      let startPage = Math.max(1, currentPage - Math.floor(maxButtons / 2));
      let endPage = Math.min(totalPages, startPage + maxButtons - 1);
      if (endPage - startPage + 1 < maxButtons) {
        startPage = Math.max(1, endPage - maxButtons + 1);
      }

      if (startPage > 1) {
        const firstBtn = document.createElement('button');
        firstBtn.className = 'page-btn';
        firstBtn.textContent = '1';
        firstBtn.addEventListener('click', () => { currentPage = 1; renderTable(); });
        buttonsContainer.appendChild(firstBtn);

        if (startPage > 2) {
          const dots = document.createElement('span');
          dots.className = 'page-btn';
          dots.style.border = 'none';
          dots.style.cursor = 'default';
          dots.textContent = '...';
          buttonsContainer.appendChild(dots);
        }
      }

      for (let p = startPage; p <= endPage; p++) {
        const pageBtn = document.createElement('button');
        pageBtn.className = `page-btn ${p === currentPage ? 'active' : ''}`;
        pageBtn.textContent = p;
        pageBtn.addEventListener('click', () => {
          currentPage = p;
          renderTable();
        });
        buttonsContainer.appendChild(pageBtn);
      }

      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          const dots = document.createElement('span');
          dots.className = 'page-btn';
          dots.style.border = 'none';
          dots.style.cursor = 'default';
          dots.textContent = '...';
          buttonsContainer.appendChild(dots);
        }

        const lastBtn = document.createElement('button');
        lastBtn.className = 'page-btn';
        lastBtn.textContent = totalPages;
        lastBtn.addEventListener('click', () => { currentPage = totalPages; renderTable(); });
        buttonsContainer.appendChild(lastBtn);
      }

      // Next Button
      const nextBtn = document.createElement('button');
      nextBtn.className = 'page-btn';
      nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
      nextBtn.title = 'Trang tiếp theo';
      nextBtn.disabled = currentPage === totalPages || totalPages === 0;
      nextBtn.addEventListener('click', () => {
        if (currentPage < totalPages) {
          currentPage++;
          renderTable();
        }
      });
      buttonsContainer.appendChild(nextBtn);
    }

    // Initial render
    renderTable();
  }

  /* --------------------------------------------------------------------------
     5. UTILITY FUNCTIONS
     -------------------------------------------------------------------------- */
  // Date-of-birth age calculator
  window.calculateAge = function (dobInput, ageInputId) {
    if (!dobInput || !dobInput.value) return;
    const dob = new Date(dobInput.value);
    const today = new Date();
    if (dob > today) {
      const target = document.getElementById(ageInputId);
      if (target) target.value = '';
      return;
    }
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    const target = document.getElementById(ageInputId);
    if (target) target.value = age >= 0 ? age : 0;
  };

  // Toggle Collapse / Expand Element
  window.toggleCollapse = function (id) {
    const el = document.getElementById(id);
    if (!el) return;
    if (el.style.display === 'none' || el.hasAttribute('hidden')) {
      el.removeAttribute('hidden');
      el.style.display = 'block';
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
      el.style.display = 'none';
    }
  };

})();
