<div align="center">

# 🏥 MEDICARE PRO — HỆ THỐNG QUẢN LÝ PHÒNG KHÁM & BỆNH NHÂN TÍCH HỢP AI
### *Enterprise Healthcare Management Platform with AI Assistant & Modern SaaS UX*

[![Java 21](https://img.shields.io/badge/Java-21-orange.svg?logo=openjdk&logoColor=white)](https://openjdk.org/)
[![Spring Boot](https://img.shields.io/badge/Spring%20Boot-3.3.0-brightgreen.svg?logo=springboot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MySQL](https://img.shields.io/badge/MySQL-8.4-blue.svg?logo=mysql&logoColor=white)](https://www.mysql.com/)
[![Groq AI](https://img.shields.io/badge/AI%20Engine-Groq%20Llama%203-blueviolet.svg?logo=openai&logoColor=white)](https://groq.com/)
[![Docker](https://img.shields.io/badge/Docker-Enabled-2496ED.svg?logo=docker&logoColor=white)](https://www.docker.com/)
[![Testing](https://img.shields.io/badge/Testing-JUnit%205%20%7C%20Playwright%20%7C%20JMeter%20%7C%20ZAP-red.svg)](https://junit.org/)
[![UI Style](https://img.shields.io/badge/Design-SaaS%202026%20%7C%20Dark%20Mode-0ea5e9.svg)](#giao-diện--trải-nghiệm-người-dùng-saas-2026)

<p align="center">
  <b>Dự án Web App Full-Stack hoàn chỉnh chuẩn Enterprise</b><br>
  Quản lý hồ sơ bệnh nhân, bệnh án chuyên khoa, phòng điều trị, lịch cấp thuốc, duyệt lịch hẹn trực tuyến<br>
  kết hợp <b>Trợ lý ảo AI thông minh</b> và giao diện <b>SaaS 2026 Responsive, Dark Mode</b>.
</p>

---

</div>

## 👨‍💻 Tác giả & Nhà phát 

* **Họ và tên:** **Hà Văn Đô**
* **Vai trò:** Full-Stack Software Engineer (Thiết kế kiến trúc, Backend, Frontend, Tích hợp AI, DevOps & Kiểm thử toàn diện)
* **GitHub:** [@havando1302](https://github.com/havando1302)
* **Repository:** [He_thong_ql_phong_kham](https://github.com/havando1302/He_thong_ql_phong_kham)

> *"Dự án được tôi nghiên cứu, thiết kế kiến trúc và phát triển độc lập từ nền tảng Backend Spring Boot 3.3, tối ưu hóa cơ sở dữ liệu MySQL, xây dựng hệ thống kiểm thử tự động đa tầng (Unit, Integration, E2E, Performance, Security), đến việc thiết kế toàn bộ hệ thống giao diện chuẩn SaaS 2026 thân thiện với trải nghiệm người dùng."*

---

## 🎯 Tổng quan dự án

**MEDICARE PRO** là giải pháp phần mềm quản lý phòng khám và bệnh viện đa năng, giải quyết bài toán chuyển đổi số quy trình y tế:
1. **Phân hệ Quản trị & Nghiệp vụ Y tế (Admin & Staff):** Giúp bác sĩ, điều dưỡng và ban quản trị tiếp nhận bệnh nhân, lưu trữ bệnh án điện tử, phân phòng điều trị, quản lý lịch kê đơn cấp thuốc và phê duyệt lịch hẹn khám linh hoạt.
2. **Cổng Thông tin Bệnh nhân (Patient Portal):** Cho phép người bệnh theo dõi hồ sơ y tế cá nhân, lịch sử khám, đơn thuốc và chủ động đặt lịch khám online 24/7.
3. **Trợ lý Ảo AI Y tế (Groq Cloud LLM):** Tích hợp Chatbot AI tư vấn thông tin thủ tục khám, giải đáp thắc mắc dịch vụ y tế theo thời gian thực dựa trên kho tri thức chuẩn hóa (Knowledge Base).

---

## 🚀 Điểm nhấn kỹ thuật nổi bật (Key Technical Highlights)

### 1. Kiến trúc Backend bền vững & Hiệu năng cao
* **Spring Boot 3.3.0 & Java 21 LTS:** Tận dụng Virtual Threads, Pattern Matching và tính năng mới nhất của Java hiện đại.
* **Tối ưu tầng dữ liệu (Data Access Layer):** Sử dụng JDBC thuần kết hợp Connection Pooling, Prepared Statements chống SQL Injection và Stream API cho các tác vụ lọc/tìm kiếm trong bộ nhớ.
* **Bảo mật đa tầng (Defense in Depth):**
  * Phân quyền dựa trên vai trò nghiêm ngặt (**RBAC - Role-Based Access Control**): `ADMIN`, `STAFF`, `USER`.
  * Bộ lọc bảo vệ **CSRF Token** tự động cho toàn bộ các phương thức `POST/PUT/DELETE`.
  * Thiết lập **Security Response Headers** tiêu chuẩn quốc tế: `Content-Security-Policy`, `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`.
  * Chống giả mạo phiên làm việc với cơ chế xác thực Session bảo mật.

### 2. Thiết kế Giao diện SaaS 2026 & UX tối ưu
* **Thiết kế chuẩn SaaS hiện đại:** Phong cách thẩm mỹ tối giản, đường nét hairline sắc sảo, bảng màu y tế chuyên nghiệp Electric Cyan / Teal (`#0284c7`, `#0ea5e9`).
* **Hỗ trợ Đa nền tảng (Responsive Design):**
  * **Desktop (≥ 1024px):** Thanh Sidebar điều hướng có thể thu gọn sang chế độ icon-only (`sidebar-is-collapsed`), Topbar kính mờ với đồng hồ phòng khám thời gian thực.
  * **Tablet (768px - 1023px):** Lưới nội dung thích ứng linh hoạt.
  * **Mobile (< 768px):** Menu điều hướng dạng trượt (Off-canvas Drawer) mượt mà với lớp phủ mờ (Backdrop).
* **Bảng dữ liệu thông minh (Interactive Smart Data Table):**
  * **Phân trang Client-side:** Tùy chọn 5, 10, 25, 50 dòng/trang, đánh số trang, nút Trước/Tiếp và báo cáo tổng số bản ghi.
  * **Sắp xếp cột (Sorting):** Click tiêu đề cột để sắp xếp tăng/giảm dần (A-Z, 0-9) kèm icon nhận diện trạng thái.
  * **Lọc tức thì (Real-time Filter):** Tìm kiếm tức thời ngay khi gõ phím mà không cần reload trang.
  * **Empty State:** Thiết kế đồ họa và thông điệp trực quan khi không tìm thấy kết quả.
* **Chế độ Sáng / Tối (Dark Mode Engine):**
  * Chuyển đổi 1-click qua nút Sun/Moon trên Topbar.
  * Tự động phát hiện theo hệ điều hành (`prefers-color-scheme`) và lưu trạng thái vào `localStorage`.
  * Tối ưu bảng màu Cosmic Slate cao cấp (`#090d16`, `#0f172a`, `#1e293b`), tương phản tốt và êm dịu cho mắt.

### 3. Tích hợp AI Chatbot (Groq Cloud LLM)
* Tích hợp mô hình ngôn ngữ lớn qua **Groq API** (Llama-3 tốc độ cao).
* Truy xuất thông tin theo ngữ cảnh từ kho tri thức nội bộ (`src/main/resources/knowledge/hospital-services.md`).
* Cơ chế kiểm soát nội dung đầu vào, giới hạn độ dài ký tự và kèm thông báo miễn trừ trách nhiệm y khoa chuẩn mực.

### 4. Quy trình Đảm bảo Chất lượng & Kiểm thử toàn diện (QA & Testing)
Dự án được xây dựng với tinh thần **Production-Ready**, trang bị đầy đủ các bộ kiểm thử tự động:
* **Unit & Integration Test:** JUnit 5, Spring Boot Test, MockMvc đạt độ bao phủ cao với **JaCoCo**.
* **API Testing:** Bộ Postman Collection đầy đủ kịch bản, chạy tự động qua CLI bằng **Newman**.
* **End-to-End & UI Automation Test:** Sử dụng **Playwright** và **Selenium WebDriver** kiểm thử luồng giao diện người dùng thực tế.
* **Performance / Stress Test:** Kịch bản **Apache JMeter** giả lập tải đồng thời cho tất cả các endpoint trọng yếu.
* **Security Scanning:** Quét lỗ hổng tự động với **OWASP ZAP**, đạt báo cáo bảo mật an toàn.

---

## 🛠️ Ngăn xếp công nghệ (Tech Stack)

| Lĩnh vực | Công nghệ sử dụng |
| :--- | :--- |
| **Backend Core** | Java 21 LTS, Spring Boot 3.3.0, Spring MVC |
| **Cơ sở dữ liệu** | MySQL 8.4, JDBC, HikariCP Connection Pool |
| **Frontend & UI** | Thymeleaf, HTML5, CSS3 Variables, Vanilla JavaScript (ES6+) |
| **Thiết kế UX/UI** | Responsive Multi-device, SaaS 2026 Design System, Dark Mode Engine |
| **Trí tuệ nhân tạo (AI)** | Groq Cloud API, OkHttp 4, Knowledge-base Retrieval |
| **Container & DevOps** | Docker, Docker Compose, Multi-stage Build |
| **Build Tool** | Apache Maven 3.9+ |
| **Unit & Integration Test**| JUnit 5, Spring Boot Test, MockMvc, JaCoCo 0.8.12 |
| **API Testing** | Postman, Newman CLI |
| **E2E & UI Test** | Microsoft Playwright, Selenium WebDriver |
| **Performance Testing** | Apache JMeter 5.6.3 |
| **Security Audit** | OWASP ZAP (Baseline Vulnerability Scan) |

---

## 📐 Kiến trúc hệ thống (System Architecture)

```
                    ┌──────────────────────────────────────────────┐
                    │               CLIENT PLATFORMS               │
                    │   Desktop Browser  │  Tablet  │  Mobile App  │
                    └──────────────────────┬───────────────────────┘
                                           │ HTTP/HTTPS (REST & MVC)
                                           ▼
┌──────────────────────────────────────────────────────────────────────────────────┐
│                             SPRING BOOT APPLICATION                              │
│                                                                                  │
│  ┌────────────────────────────────────────────────────────────────────────────┐  │
│  │                            SECURITY & FILTERS                              │  │
│  │   AuthInterceptor (RBAC)  │  CsrfTokenFilter  │  SecurityHeadersFilter     │  │
│  └─────────────────────────────────────┬──────────────────────────────────────┘  │
│                                        │                                         │
│  ┌─────────────────────────────────────▼──────────────────────────────────────┐  │
│  │                            CONTROLLER LAYER                                │  │
│  │   PatientController    │  BenhanController      │  RoomController          │  │
│  │   ScheduleController   │  AppointmentController │  AdminAccountController  │  │
│  │   PortalController     │  Login/Register        │  ChatController (AI)     │  │
│  └──────────────────┬─────────────────────────────────────┬───────────────────┘  │
│                     │                                     │                      │
│  ┌──────────────────▼───────────────────┐  ┌──────────────▼───────────────────┐  │
│  │        DATA ACCESS LAYER (JDBC)      │  │        SERVICE & AI LAYER        │  │
│  │   PatientDatabase │ BenhanDatabase   │  │   AIService (Groq Cloud LLM)     │  │
│  │   RoomDatabase    │ ScheduleDatabase │  │   KnowledgeBaseService (RAG)     │  │
│  │   UserDatabase    │ ApptDatabase     │  │   Prompt Defense & Sanitizer     │  │
│  └──────────────────┬───────────────────┘  └──────────────┬───────────────────┘  │
└─────────────────────┼─────────────────────────────────────┼──────────────────────┘
                      │                                     │
                      ▼                                     ▼
        ┌───────────────────────────┐         ┌───────────────────────────┐
        │       MySQL 8.4 RDBMS     │         │      GROQ CLOUD API       │
        │   Persistent Data Storage │         │   Llama-3 LLM Inference   │
        └───────────────────────────┘         └───────────────────────────┘
```

---

## 📂 Cấu trúc thư mục dự án

```text
He_thong_ql_phong_kham/
├── Benhvien/
│   └── complete/
│       ├── docker/                             # Dockerfile và cấu hình MySQL / ZAP
│       │   ├── mysql/init.sql                  # Script khởi tạo Database mẫu
│       │   └── zap/                            # Cấu hình quét an ninh bảo mật
│       ├── performance/                        # Kịch bản kiểm thử hiệu năng JMeter
│       │   └── PT_All_Hospital.jmx
│       ├── postman/                            # Bộ API Test Postman & Newman
│       │   ├── Hospital.postman_collection.json
│       │   └── Hospital.postman_environment.json
│       ├── selenium-tests/                     # Bộ kiểm thử Selenium Java
│       ├── ui-tests/                           # Bộ kiểm thử tự động Playwright (JS)
│       │   └── tests/
│       ├── src/
│       │   ├── main/
│       │   │   ├── java/com/example/servingwebcontent/
│       │   │   │   ├── Controller/             # Xử lý Request & View Dispatching
│       │   │   │   ├── database/               # Thao tác cơ sở dữ liệu qua JDBC
│       │   │   │   ├── Model/                  # Entity Models & Enums
│       │   │   │   ├── security/               # Bộ lọc CSRF, Interceptor & Security Headers
│       │   │   │   └── service/                # Logic AI Groq & Knowledge Base Service
│       │   │   └── resources/
│       │   │       ├── knowledge/              # Kho tri thức markdown cho AI Chatbot
│       │   │       ├── static/                 # Tài nguyên CSS, JS, Asset hình ảnh
│       │   │       │   ├── admin-saas.css      # SaaS 2026 Master Design System
│       │   │       │   ├── admin-saas.js       # Universal Table, Pagination & Theme Engine
│       │   │       │   ├── chatbox.css         # Widget Chatbot giao diện Sáng/Tối
│       │   │       │   └── chatbox.js
│       │   │       ├── templates/              # View HTML Thymeleaf
│       │   │       │   ├── fragments/          # Layout Sidebar, Topbar, Footer, Chatbox
│       │   │       │   ├── dashboard.html      # Tổng quan trung tâm điều hành
│       │   │       │   ├── patients.html       # Quản lý hồ sơ bệnh nhân
│       │   │       │   ├── benhan.html         # Quản lý bệnh án điều trị
│       │   │       │   ├── phongdieutri.html   # Quản lý phòng khám chuyên khoa
│       │   │       │   ├── lichcapthuoc.html   # Quản lý lịch phát thuốc
│       │   │       │   ├── appointments_manage.html # Duyệt lịch hẹn khám
│       │   │       │   ├── admin_accounts.html # Quản trị tài khoản & phân quyền
│       │   │       │   ├── admin_staff.html    # Cấp tài khoản nhân viên y tế
│       │   │       │   ├── admin_profile.html  # Hồ sơ chi tiết & liên kết mã BN
│       │   │       │   ├── index.html          # Giao diện Đăng nhập SaaS
│       │   │       │   └── register.html       # Giao diện Đăng ký tài khoản
│       │   │       └── application.properties
│       │   └── test/                           # Bộ kiểm thử Unit & Integration (JUnit 5)
│       ├── docker-compose.yml                  # Khởi chạy toàn bộ hệ thống bằng Docker
│       └── pom.xml                             # Cấu hình phụ thuộc Maven & Build plugins
└── README.md                                   # Tài liệu dự án
```

---

## ⚡ Hướng dẫn cài đặt & Khởi chạy (Quick Start)

### Cách 1: Khởi chạy nhanh nhất qua Docker (Khuyên dùng)

Yêu cầu máy tính đã cài đặt [Docker Desktop](https://www.docker.com/). Chỉ cần 1 lệnh duy nhất:

```bash
cd Benhvien/complete
docker compose up -d --build
```

Hệ thống sẽ tự động build ứng dụng Spring Boot và khởi tạo cơ sở dữ liệu MySQL 8.4 đã nạp sẵn dữ liệu ban đầu.
* **Truy cập ứng dụng tại:** `http://localhost:8080`
* Dừng hệ thống:
  ```bash
  docker compose down
  ```

---

### Cách 2: Khởi chạy thủ công qua Maven

1. **Khởi động dịch vụ MySQL 8.4** và tạo database `hospital` từ file `Benhvien/complete/docker/mysql/init.sql`.
2. **Cấu hình thông tin kết nối** trong `src/main/resources/application.properties` (hoặc truyền qua biến môi trường):
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/hospital?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC
   spring.datasource.username=root
   spring.datasource.password=123456
   ```
3. *(Tùy chọn)* Cấu hình Groq API Key cho AI Chatbot:
   ```bash
   export GROQ_API_KEY="gsk_your_api_key_here"
   ```
4. **Khởi chạy ứng dụng:**
   ```bash
   cd Benhvien/complete
   ./mvnw spring-boot:run
   ```
   *(Trên Windows PowerShell: `.\mvnw.cmd spring-boot:run`)*

---

## 🔑 Tài khoản mẫu để kiểm thử tính năng (Demo Accounts)

| Vai trò (Role) | Tên đăng nhập | Mật khẩu | Quyền hạn chính |
| :--- | :--- | :--- | :--- |
| **Quản trị viên (ADMIN)** | `admin` | `123456` | Toàn quyền quản trị hệ thống, quản lý tài khoản, tạo nhân viên, phân quyền RBAC |
| **Nhân viên y tế (STAFF)** | `staff` | `123456` | Quản lý bệnh nhân, lập bệnh án, phòng điều trị, cấp thuốc, duyệt lịch hẹn |
| **Bệnh nhân (USER)** | `patient1` | `123456` | Cổng portal bệnh nhân, xem hồ sơ cá nhân, lịch thuốc, đặt lịch khám online |

---

## 🧪 Quy trình kiểm thử chất lượng (Testing & QA)

### 1. Unit & Integration Test (JUnit 5 + MockMvc)
Chạy toàn bộ test suite và xuất báo cáo độ bao phủ:
```bash
cd Benhvien/complete
./mvnw test
```
* Báo cáo kiểm thử: `target/surefire-reports`
* Báo cáo bao phủ mã nguồn (JaCoCo): `target/site/jacoco/index.html`

### 2. Automated API Test (Postman / Newman)
Kiểm thử tự động toàn bộ API endpoints của hệ thống qua dòng lệnh:
```bash
cd Benhvien/complete
npx newman run postman/Hospital.postman_collection.json \
  -e postman/Hospital.postman_environment.json \
  --reporters cli,json \
  --reporter-json-export postman/Hospital.postman_result.json
```

### 3. UI & End-to-End Automation Test (Playwright)
Kiểm thử tự động luồng giao diện người dùng thực tế:
```bash
cd Benhvien/complete/ui-tests
npm install
npx playwright test
```

### 4. Kiểm thử tải & Hiệu năng (Apache JMeter)
Kiểm thử khả năng chịu tải đồng thời của hệ thống:
```bash
jmeter -n -t performance/PT_All_Hospital.jmx -l performance/result-final.jtl
```

### 5. Quét bảo mật tự động (OWASP ZAP)
Báo cáo rà quét lỗ hổng ứng dụng được tạo tại:
* `Benhvien/complete/zap-report.html`

---

## 📈 Định hướng mở rộng trong tương lai (Roadmap)

- [ ] Nâng cấp mã hóa mật khẩu người dùng với thuật toán BCrypt / Argon2id.
- [ ] Tích hợp dịch vụ gửi thông báo tự động (Email thông báo lịch khám & SMS OTP).
- [ ] Xây dựng RESTful API chuẩn OpenAPI/Swagger để kết nối ứng dụng di động Flutter/React Native.
- [ ] Ứng dụng quy trình CI/CD hoàn chỉnh (GitHub Actions -> Docker Hub -> VPS Cloud Deployment).
- [ ] Nâng cấp cơ chế RAG (Retrieval-Augmented Generation) với Vector Database cho AI Chatbot chẩn đoán hỗ trợ bác sĩ.

---

## 📄 Bản quyền & Tuyên bố trách nhiệm y tế

* Dự án được xây dựng và phát triển độc lập bởi **Hà Văn Đô** phục vụ mục đích nghiên cứu, học thuật và trình diễn năng lực kỹ thuật phần mềm.
* **Tuyên bố trách nhiệm:** Thành phần Trợ lý AI trong dự án đóng vai trò hỗ trợ hướng dẫn thông tin dịch vụ và thủ tục khám, không thay thế cho chẩn đoán, tư vấn chuyên môn hay phác đồ điều trị của bác sĩ chuyên khoa.

<div align="center">
  <sub>Made with ❤️ and dedication by <b>Hà Văn Đô</b> &bull; 2026</sub>
</div>
