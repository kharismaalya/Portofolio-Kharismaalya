# PRD — Portfolio Website Kharisma Alya Septiana

**Document:** Product Requirements Document  
**Product:** Personal Portfolio Website  
**Owner:** Kharisma Alya Septiana  
**Version:** 1.0  
**Status:** Ready for Design & Development

---

## 1. Product Overview

Portfolio website ini dibuat sebagai versi digital yang lebih modern, ringkas, dan profesional dari portfolio Kharisma Alya Septiana.

Website harus menampilkan profil, pengalaman, pendidikan, proyek, pencapaian, dan kemampuan Kharisma secara terstruktur sehingga mudah dipahami oleh recruiter, HR, dosen, calon mitra, maupun pihak yang ingin melihat pengalaman dan hasil kerja.

Fokus utama portfolio bukan sekadar menampilkan seluruh aktivitas, tetapi menunjukkan **kemampuan Kharisma di bidang Teknologi Informasi, data, pengembangan sistem, UI, dan project management melalui bukti proyek nyata**.

---

## 2. Product Goals

### Primary Goals

1. Memperkenalkan Kharisma secara profesional dalam waktu kurang dari 30 detik.
2. Menampilkan proyek terbaik dengan penjelasan yang jelas dan visual yang menarik.
3. Menunjukkan pengalaman akademik, organisasi, kompetisi, dan program mahasiswa.
4. Memudahkan recruiter atau pengunjung menghubungi Kharisma.
5. Membuat portfolio dapat digunakan sebagai pendamping CV saat melamar magang atau pekerjaan.

### Secondary Goals

- Menjadi pusat link untuk CV, GitHub, LinkedIn, dan project demo.
- Menampilkan perkembangan skill secara lebih terarah.
- Mudah diperbarui ketika terdapat proyek atau pengalaman baru.

---

## 3. Target Users

### Primary User

**Recruiter / HR**

Kebutuhan:

- Mengetahui profil Kharisma dengan cepat.
- Menilai bidang yang diminati.
- Melihat project dan kontribusi secara konkret.
- Mengakses CV dan kontak.

### Secondary Users

**Dosen / Akademisi**

- Melihat aktivitas akademik, project, kompetisi, dan program mahasiswa.

**Project Partner / Collaborator**

- Melihat pengalaman bekerja dalam tim dan project management.

**Fellow Students / Professional Network**

- Melihat karya, pengalaman, dan area kompetensi.

---

## 4. Positioning

Portfolio harus memosisikan Kharisma sebagai:

> **Fresh Graduate Information Technology with experience in data analysis, system development, UI design, academic projects, and project management.**

Tone website:

- Profesional.
- Bersih.
- Tidak terlalu formal.
- Tidak menggunakan kalimat berlebihan.
- Fokus pada hasil dan kontribusi.

---

## 5. Core Message

Pesan utama pada hero section:

**Kharisma Alya Septiana**  
**Fresh Graduate Information Technology**

Supporting text:

> Mahasiswi Teknologi Informasi Universitas ‘Aisyiyah Yogyakarta yang tertarik pada data, pengembangan sistem, dan pemecahan masalah berbasis teknologi. Memiliki pengalaman dalam project akademik, organisasi, kolaborasi lintas bidang, dan project management.

CTA utama:

- **View Projects**
- **Download CV**

CTA sekunder:

- **Contact Me**

---

## 6. Information Architecture

Struktur website menggunakan **single-page portfolio** dengan navigasi menuju section.

```text
Home
├── Hero
├── About
├── Education
├── Experience
├── Featured Projects
├── Other Projects
├── Achievements
├── Organization
└── Contact
```

Navbar:

```text
Home | About | Experience | Projects | Achievements | Contact
```

Navbar bersifat sticky pada desktop dan berubah menjadi hamburger menu pada mobile.

---

# 7. Page Requirements

## 7.1 Hero Section

### Content

**Name**
Kharisma Alya Septiana

**Role**
Fresh Graduate Information Technology

**Short Description**
Mahasiswi Teknologi Informasi yang memiliki ketertarikan pada data, pengembangan sistem, UI, dan project management.

### CTA

Primary:

- View Projects

Secondary:

- Download CV

Optional:

- LinkedIn
- GitHub

Jika link LinkedIn atau GitHub belum tersedia, elemen tidak ditampilkan.

### Visual

Hero menggunakan:

- Foto profesional Kharisma.
- Background minimal.
- Dominasi warna biru.
- Layout 2 kolom pada desktop.
- Foto berada di sisi kanan.
- Konten di sisi kiri.

Mobile:

- Foto di atas.
- Konten di bawah.
- CTA tetap terlihat tanpa perlu scroll terlalu jauh.

---

# 7.2 About Section

Judul:

**About Me**

Content:

> Saya seorang Fresh Graduate Teknologi Informasi Universitas ‘Aisyiyah Yogyakarta yang memiliki ketertarikan pada data, teknologi, dan pemecahan masalah. Selama perkuliahan saya mengerjakan berbagai project mulai dari data clustering, sistem pakar, UI design, website, hingga project berbasis pembelajaran digital. Saya juga memiliki pengalaman dalam organisasi, kepanitiaan, kolaborasi lintas bidang, serta project management.

### Highlight Cards

Tampilkan maksimal 4 highlight:

- Information Technology
- Data Analysis
- UI & System Development
- Project Management

---

# 7.3 Education Section

Judul:

**Education**

### Education 1

**Universitas ‘Aisyiyah Yogyakarta**  
Teknologi Informasi  
2022 — Present

### Education 2

**SMK Negeri 1 Simpang Pematang**  
Teknik Komputer dan Jaringan  
2018 — 2021

Layout:

- Timeline vertikal atau horizontal.
- Jangan menggunakan card terlalu besar.

---

# 7.4 Experience Section

Judul:

**Experience**

Section ini tidak hanya berisi pekerjaan formal. Gunakan pengalaman program dan kegiatan yang memiliki kontribusi jelas.

---

## Experience 1 — Program Kreativitas Mahasiswa

**Program Kreativitas Mahasiswa — TELE-UKS**  
SMP Muhammadiyah 2 Godean

Description:

> Berpartisipasi dalam kegiatan PKM kolaboratif yang melibatkan mahasiswa bidang kesehatan dan Teknologi Informasi. Program berfokus pada peningkatan kesehatan siswa melalui skrining anemia dan edukasi pola hidup sehat.

Tags:

- Collaboration
- Technology
- Health
- Community Project

---

## Experience 2 — Pertukaran Mahasiswa Merdeka

**Pertukaran Mahasiswa Merdeka**  
Universitas Brawijaya  
2023

Description:

> Mengikuti program Pertukaran Mahasiswa Merdeka di Universitas Brawijaya dan memperoleh pengalaman akademik serta kolaborasi dengan lingkungan pembelajaran yang berbeda.

Tags:

- Student Exchange
- Academic
- Collaboration

---

# 7.5 Featured Projects

Judul:

**Featured Projects**

Featured project dibatasi maksimal **4 project terbaik** agar recruiter tidak kehilangan fokus.

Urutan rekomendasi:

1. Analisis Clustering Kelulusan Mahasiswa
2. Medical Tourism Website
3. Sistem Pakar Diagnosa Penyakit Asma
4. Skrining Kesehatan Ibu & Anak

---

## Project 1

### Analisis Clustering Kelulusan Mahasiswa

**Subtitle**  
K-Means Clustering Analysis

**Context**
Project dilaksanakan saat mengikuti program pertukaran mahasiswa.

**Description**

> Menggunakan metode K-Means untuk melakukan clustering data historis mahasiswa berdasarkan data tracer study. Analisis digunakan untuk melihat pola pada tahun kelulusan mahasiswa Program Studi Sistem Informasi Universitas Brawijaya periode 2016–2020.

**Skills / Technology**

- Data Analysis
- K-Means
- Clustering
- Data Visualization

**Project card requirements**

- Screenshot hasil clustering.
- Judul.
- Deskripsi maksimal 3–4 baris.
- Tags.
- Button "View Details".

Optional jika tersedia:

- GitHub Repository
- Report
- Demo

---

## Project 2

### Medical Tourism Website

**Role**
Project Manager

**Description**

> Project website Medical Tourism merupakan project gabungan beberapa mata kuliah. Dalam project ini Kharisma berperan sebagai Project Manager yang bertanggung jawab pada pengambilan keputusan, komunikasi tim, koordinasi anggota, dan penyelesaian masalah selama pengembangan project.

**Skills**

- Project Management
- Team Coordination
- Web Development
- Communication

Visual:

- Screenshot landing page.
- Screenshot destinasi.
- Screenshot medical care.

---

## Project 3

### Sistem Pakar Diagnosa Penyakit Asma

**Description**

> Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma menggunakan rule dan data gejala yang telah dikumpulkan.

**Skills**

- Expert System
- Rule-Based System
- Web Development
- Data Collection

---

## Project 4

### Skrining Kesehatan Ibu & Anak

**Type**
UI Design Project

**Description**

> Project kolaborasi antara mahasiswa Kebidanan dan mahasiswa Teknologi Informasi. Tim Teknologi Informasi mengembangkan kebutuhan skrining kesehatan ibu dan anak menjadi rancangan UI untuk versi mobile dan desktop.

**Skills**

- UI Design
- Collaboration
- Requirement Analysis
- Mobile UI
- Desktop UI

---

# 7.6 Other Projects

Judul:

**Other Projects**

Gunakan card lebih kecil dibanding Featured Projects.

---

## Game Labirin

Project akhir Pemrograman Dasar berupa game labirin yang dikembangkan secara kelompok menggunakan **C++**.

Tags:

- C++
- Programming Fundamentals

---

## Formulir Rekam Medis

Project akhir mata kuliah Struktur Data dan Algoritma berupa aplikasi pengelolaan data pasien.

Technology:

- Java

Tags:

- Java
- Data Structure
- Application Development

---

## MoodleCloud Learning Project

Project akhir mata kuliah Inovasi Pembelajaran Jarak Jauh berupa pengembangan pembelajaran berbasis **MoodleCloud**.

Tags:

- Moodle
- E-Learning
- Learning Technology

---

## Business Case — Indoned Gizi

Project kelompok untuk merancang strategi dan solusi pengembangan perusahaan Gizi / Indoned.

Tags:

- Business Analysis
- Strategy
- Collaboration

---

# 7.7 Achievements Section

Judul:

**Achievements**

### Finalist — National Scientific Writing Competition

**Universitas Brawijaya**  
2023

Description:

> Menjadi salah satu finalis dalam kompetisi Karya Tulis Ilmiah tingkat nasional yang diselenggarakan secara online oleh Universitas Brawijaya.

Tambahkan thumbnail sertifikat jika tersedia.

---

# 7.8 Organization Section

Judul:

**Organization & Committee Experience**

### ITech — Himpunan Mahasiswa Teknologi Informasi

**Role**
Treasurer / Bendahara

**Period**
2022 — Present _(periode ditampilkan berdasarkan data portfolio dan dapat diperbarui)_

Description:

> Berpengalaman mengelola keuangan organisasi sebagai bendahara serta terlibat dalam berbagai kegiatan dan kepanitiaan mahasiswa.

### Committee Experience

Pernah terlibat dalam:

- CTF
- Seminar Nasional
- Terabit
- Makrab

Roles:

- Bendahara
- Divisi Acara
- Humas

Untuk website, daftar kegiatan cukup ditampilkan ringkas agar tidak mengalahkan section project.

---

# 7.9 Contact Section

Judul:

**Let’s Connect**

Description:

> Terbuka untuk kesempatan kerja, magang, project, maupun kolaborasi di bidang teknologi.

### Contact Information

**Email**  
alyaseptia19@gmail.com

**Phone**  
0821-7941-0376

**Location**  
Yogyakarta, Indonesia

Recommendation:

- Email ditampilkan sebagai kontak utama.
- Nomor telepon dapat dibuat optional agar privasi lebih terjaga.
- Tambahkan LinkedIn dan GitHub jika tersedia.

CTA:

**Send Email**

---

# 8. Project Detail Interaction

Ketika user menekan **View Details**, tampilkan modal atau dedicated project detail section.

Isi:

```text
Project Name
Project Image / Screenshot
Overview
Problem / Context
Role
Process
Result
Tools / Technology
Gallery
Project Link
```

Jika informasi Result belum tersedia, jangan membuat hasil palsu.

Gunakan label seperti:

```text
Result / Output
```

dan isi hanya berdasarkan data yang benar-benar tersedia.

---

# 9. Design Direction

Visual portfolio lama menggunakan identitas warna biru muda, biru tua, putih, dan foto pribadi. Website mempertahankan identitas tersebut tetapi dibuat lebih modern dan minimal.

## Color Palette

Suggested:

```text
Primary Blue      #0F5F8F
Dark Blue         #0B416A
Light Blue        #C7EAF4
Very Light Blue   #EEF8FB
Text Dark         #17202A
Text Secondary    #5B6573
White             #FFFFFF
```

Catatan:

- Hindari terlalu banyak blok biru besar.
- Gunakan white space lebih banyak.
- Biru digunakan sebagai accent dan identitas utama.

---

# 10. Typography

Recommended:

### Heading

- Poppins
- Plus Jakarta Sans
- Manrope

### Body

- Inter
- Plus Jakarta Sans

Hierarchy:

```text
H1: 48–64px desktop
H2: 32–40px
H3: 22–28px
Body: 16–18px
Small text: 14px
```

Mobile size harus menyesuaikan.

---

# 11. UI Components

Required reusable components:

```text
Navbar
Hero
SectionTitle
ProjectCard
FeaturedProjectCard
ExperienceCard
EducationTimeline
AchievementCard
Tag / SkillBadge
ContactCard
Footer
Button
ProjectModal / ProjectDetail
```

---

# 12. Layout

Desktop max width:

```text
1200px
```

Spacing antar section:

```text
80px–120px
```

Card:

- Border radius 16–20px.
- Border tipis atau soft shadow.
- Jangan menggunakan shadow berat.

Images:

- `object-fit: cover`
- Rounded corner.
- Tetap tajam di desktop maupun mobile.

---

# 13. Responsive Requirements

Breakpoints recommended:

```text
Mobile       < 640px
Tablet       640–1024px
Desktop      > 1024px
```

Requirements:

### Mobile

- Single column layout.
- Hamburger navigation.
- Project cards stacked.
- Font size menyesuaikan.
- CTA tetap mudah ditekan.
- Tidak ada horizontal scrolling.

### Tablet

- Project grid 2 kolom.
- Hero tetap proporsional.

### Desktop

- Project grid 2–3 kolom.
- Hero 2 kolom.
- Featured projects dapat menggunakan alternating layout.

---

# 14. Functional Requirements

## FR-01 Navigation

Navbar harus melakukan smooth scroll menuju section yang dipilih.

## FR-02 CV Download

Button **Download CV** membuka atau mengunduh CV yang disediakan.

Jika CV belum tersedia, tombol tidak ditampilkan sampai file ditambahkan.

## FR-03 Project Detail

User dapat melihat informasi lebih lengkap dari Featured Project.

## FR-04 Contact

Button email menggunakan:

```text
mailto:
```

atau contact form sederhana.

Jika menggunakan contact form:

- Name
- Email
- Message

Harus memiliki validation.

## FR-05 External Links

Link GitHub / LinkedIn:

- dibuka di tab baru.
- menggunakan `rel="noopener noreferrer"`.

---

# 15. Non-Functional Requirements

## Performance

Target Lighthouse:

```text
Performance     >= 90
Accessibility   >= 90
Best Practices  >= 90
SEO             >= 90
```

Images:

- WebP / AVIF.
- Lazy load image di bawah hero.
- Compress image.

---

## Accessibility

Website harus:

- Menggunakan semantic HTML.
- Memiliki alt text.
- Memiliki contrast yang cukup.
- Dapat dinavigasi dengan keyboard.
- Tidak menggunakan teks terlalu kecil.

---

## SEO

Meta title:

```text
Kharisma Alya Septiana | Information Technology Portfolio
```

Meta description:

```text
Portfolio Kharisma Alya Septiana, mahasiswa Teknologi Informasi dengan pengalaman dalam data analysis, system development, UI design, dan project management.
```

Open Graph:

- name
- description
- portfolio image

---

# 16. Suggested Technology Stack

Stack tidak wajib, tetapi rekomendasi:

### Option A — Modern Frontend

```text
Next.js
TypeScript
Tailwind CSS
Framer Motion
Lucide Icons
```

Deployment:

```text
Vercel
```

### Option B — Lightweight

```text
HTML
CSS
JavaScript
```

Deployment:

- GitHub Pages
- Netlify

Jika website ditujukan sebagai portfolio profesional jangka panjang, Option A lebih disarankan.

---

# 17. Animation

Gunakan animasi ringan.

Allowed:

- Fade in.
- Slide up.
- Hover project card.
- Smooth navigation.

Avoid:

- Animasi berlebihan.
- Parallax berat.
- Loading animation panjang.
- Text typing effect yang mengganggu keterbacaan.

Durasi recommended:

```text
200ms–500ms
```

---

# 18. Content Rules

1. Deskripsi project maksimal 2–4 kalimat pada card.
2. Detail project dapat lebih panjang.
3. Gunakan istilah yang konsisten.
4. Hindari klaim kemampuan yang tidak memiliki bukti.
5. Jangan menampilkan terlalu banyak project dengan bobot yang sama.
6. Featured project harus menjadi pusat perhatian.
7. Gunakan bahasa Inggris atau Indonesia secara konsisten pada seluruh interface.

Rekomendasi:

- Interface menggunakan **English**.
- Deskripsi dapat menggunakan English jika portfolio ditujukan untuk recruitment yang lebih luas.

---

# 19. Recommended Content Priority

Urutan penting:

```text
1. Identity
2. Value Proposition
3. Featured Projects
4. Role / Contribution
5. Skills
6. Experience
7. Achievement
8. Education
9. Contact
```

Project lebih penting daripada daftar kegiatan panjang.

---

# 20. Content Improvements Needed

Sebelum production, lengkapi data berikut jika tersedia:

- Foto profil resolusi tinggi.
- CV terbaru.
- LinkedIn URL.
- GitHub URL.
- Repository untuk setiap coding project.
- Screenshot project resolusi tinggi.
- Tahun project.
- Role pada masing-masing project.
- Tools / technology yang digunakan.
- Hasil atau output project.
- Demo URL jika tersedia.

Data yang belum tersedia tidak boleh dibuat atau ditebak.

---

# 21. Acceptance Criteria

Website dianggap selesai jika:

- [ ] Hero menampilkan nama, role, foto, dan CTA.
- [ ] About section tampil dengan ringkas.
- [ ] Education tampil.
- [ ] Experience tampil.
- [ ] Minimal 4 featured projects tampil.
- [ ] Other projects tampil.
- [ ] Achievement finalis KTI tampil.
- [ ] Organization experience tampil.
- [ ] Contact dapat digunakan.
- [ ] Website responsive.
- [ ] Tidak terdapat horizontal overflow.
- [ ] Semua image memiliki alt text.
- [ ] Semua tombol berfungsi.
- [ ] CV button berfungsi jika CV tersedia.
- [ ] Tidak terdapat broken link.
- [ ] Website dapat digunakan di Chrome, Safari, dan Firefox.
- [ ] Lighthouse performance minimum 90.
- [ ] Mobile layout sudah diuji.

---

# 22. Recommended Homepage Flow

```text
Navbar

Hero
↓
About
↓
Featured Projects
↓
Experience
↓
Other Projects
↓
Achievements
↓
Education
↓
Organization
↓
Contact

Footer
```

Alasan:

Recruiter umumnya lebih membutuhkan bukti kemampuan dan project dibanding riwayat organisasi yang panjang. Karena itu **Featured Projects ditempatkan sebelum Education dan Organization**.

---

# 23. Footer

Content:

```text
Kharisma Alya Septiana
Information Technology Portfolio

Email
LinkedIn
GitHub

© [Current Year] Kharisma Alya Septiana
```

---

# 24. Future Enhancements

Tidak wajib untuk MVP.

Possible Phase 2:

- Project filtering berdasarkan kategori.
- Dark mode.
- Blog / writing.
- Certificate gallery.
- Admin / CMS.
- Analytics.
- Multilingual Indonesian / English.
- Case study page untuk project utama.

---

# 25. MVP Scope

Untuk versi pertama, cukup implementasikan:

```text
Hero
About
Featured Projects
Experience
Education
Achievement
Organization
Contact
CV Download
Responsive Design
```

Tidak perlu:

- Login.
- Backend kompleks.
- Dashboard.
- Database.
- CMS.
- Animasi kompleks.

---

# 26. Success Criteria

Portfolio berhasil jika pengunjung dapat menjawab tiga pertanyaan ini dalam kurang dari 1 menit:

1. **Siapa Kharisma?**
2. **Apa kemampuan dan pengalaman utamanya?**
3. **Project apa yang pernah dikerjakan dan apa kontribusinya?**

Jika ketiga pertanyaan tersebut belum jelas, desain atau konten harus diperbaiki.

---

## Final Product Direction

Website tidak boleh terasa seperti versi PDF yang hanya dipindahkan ke browser.

Website harus terasa seperti **professional digital portfolio** yang:

- Ringkas.
- Mudah dipindai.
- Project-oriented.
- Responsive.
- Memiliki identitas visual yang konsisten.
- Menunjukkan kemampuan melalui karya, bukan hanya klaim.
