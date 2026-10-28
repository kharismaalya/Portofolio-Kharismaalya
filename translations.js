// Each row contains the Indonesian and English versions of the same text.
// Product names, institutions, publication titles, and course titles stay official.
const languagePairs = [
  ["Sertifikat BNSP Business Intelligence Analyst", "BNSP Business Intelligence Analyst certificate"],
  ["Lewati ke konten", "Skip to content"],
  ["Tentang", "About"], ["Pengalaman", "Experience"], ["Proyek", "Projects"],
  ["Prestasi", "Achievements"], ["Keahlian", "Skills"], ["Kontak", "Contact"],
  ["Lulusan Teknologi Informasi", "Information Technology Graduate"],
  ["Lulusan Teknologi Informasi yang berfokus pada analisis data, pengembangan pipeline ETL, dan dukungan operasional. Terbiasa mengelola proyek kolaboratif dan menerjemahkan kebutuhan menjadi solusi digital yang terstruktur.", "Information Technology graduate focused on data analysis, ETL pipeline development, and operational support. Experienced in managing collaborative projects and translating requirements into structured digital solutions."],
  ["Lihat Proyek", "View Projects"], ["Hubungi Saya", "Contact Me"], ["Unduh CV", "Download CV"],
  ["Fokus", "Focus"], ["Data & Administrasi", "Data & Administration"], ["Domisili", "Based in"],
  ["Terbuka untuk", "Open to"], ["Pekerjaan, Magang & Freelance", "Employment, Internship & Freelance"],
  ["Portofolio teknologi", "Technology portfolio"], ["Profil berbasis proyek", "Project-oriented profile"],
  ["Tentang Saya", "About Me"],
  ["Saya lulusan S1 Teknologi Informasi Universitas 'Aisyiyah Yogyakarta dengan fokus pada analisis data. Dalam tugas akhir, saya membangun pipeline ETL otomatis berbasis Python untuk mengumpulkan dan mengolah data Twitter/X, serta menerapkan metode machine learning seperti K-Means Clustering dan Random Forest. Saya juga memiliki pengalaman dalam administrasi operasional.", "I hold a bachelor's degree in Information Technology from Universitas 'Aisyiyah Yogyakarta, with a focus on data analysis. For my final project, I built an automated Python ETL pipeline to collect and process Twitter/X data and applied machine learning methods such as K-Means Clustering and Random Forest. I also have experience in operational administration."],
  ["Saya berpengalaman mengoordinasikan proyek akademik sebagai Project Manager dan mengolah data sebagai Data Analyst. Saya juga pernah menangani administrasi operasional, layanan pelanggan, serta keuangan organisasi. Pengalaman tersebut didukung kontribusi dalam publikasi ilmiah dan pencapaian pada kompetisi tingkat nasional.", "I have experience coordinating academic projects as a Project Manager and processing data as a Data Analyst. I have also handled operational administration, customer service, and organizational finances. This experience is supported by contributions to scientific publications and achievements in national competitions."],
  ["Analisis Data & Machine Learning", "Data Analytics & Machine Learning"],
  ["Administrasi Operasional", "Operational Administration"], ["Pipeline ETL Python", "Python ETL Pipeline"],
  ["Pemantauan Jaringan", "Network Monitoring"],
  ["Layanan Pelanggan", "Customer Service"],
  ["Manajemen Proyek", "Project Management"], ["Karya Pilihan", "Selected Work"], ["Proyek Unggulan", "Featured Projects"],
  ["Empat proyek pilihan yang menunjukkan pengalaman Kharisma dalam data, sistem web, desain antarmuka, dan koordinasi proyek.", "Four focused projects that show Kharisma's work across data, web systems, UI design, and project coordination."],
  ["Capstone Presensi GPS & Kamera", "GPS & Camera Attendance Capstone"],
  ["Merancang alur sistem dan menganalisis kebutuhan untuk presensi berbasis GPS dan kamera.", "Designed system workflows and analyzed requirements for GPS and camera based attendance."],
  ["Analisis Sistem", "System Analysis"], ["Kamera", "Camera"], ["Lihat Detail", "View Details"],
  ["SIMBPA – Skrining Ibu & Anak", "SIMBPA – Maternal & Child Health Screening"],
  ["Merancang UI desktop dan mobile serta prototipe interaktif menggunakan Figma.", "Designed desktop and mobile interfaces and interactive prototypes using Figma."],
  ["Pipeline Scraping Twitter/X", "Twitter/X Scraping Pipeline"],
  ["Tugas akhir: mengembangkan pipeline ETL otomatis berbasis Python untuk data terkait studi kasus Program Makan Bergizi Gratis.", "Final project: developed an automated Python ETL pipeline for data related to Indonesia's Free Nutritious Meals Program."],
  ["Rekayasa Data", "Data Engineering"], ["Manajer Proyek", "Project Manager"],
  ["JogjaCare – Situs Wisata Medis", "JogjaCare – Medical Tourism Website"],
  ["Project gabungan beberapa mata kuliah dengan peran sebagai Project Manager untuk koordinasi tim, keputusan, komunikasi, dan problem solving.", "A project spanning several courses, serving as Project Manager for team coordination, decision making, communication, and problem solving."],
  ["Pengembangan Web", "Web Development"], ["Koordinasi Tim", "Team Coordination"],
  ["Karya Lainnya", "More Work"], ["Proyek Lainnya", "Other Projects"],
  ["Game Labirin", "Maze Game"],
  ["Project akhir Pemrograman Dasar berupa game labirin kelompok menggunakan C++.", "A team maze game built in C++ as the final project for Programming Fundamentals."],
  ["Dasar Pemrograman", "Programming Fundamentals"], ["Formulir Rekam Medis", "Medical Record Form"],
  ["Aplikasi pengelolaan data pasien untuk project Struktur Data dan Algoritma.", "A patient data management application for a Data Structures and Algorithms project."],
  ["Struktur Data", "Data Structure"], ["Proyek Pembelajaran MoodleCloud", "MoodleCloud Learning Project"],
  ["Pengembangan pembelajaran berbasis MoodleCloud untuk Inovasi Pembelajaran Jarak Jauh.", "Developed MoodleCloud learning materials for a Distance Learning Innovation course."],
  ["Pembelajaran Daring", "E-Learning"], ["Studi Kasus Bisnis - Indoned Gizi", "Business Case - Indoned Gizi"],
  ["Project kelompok untuk merancang strategi dan solusi pengembangan perusahaan.", "A team project to design strategies and solutions for company development."],
  ["Analisis Bisnis", "Business Analysis"], ["Strategi", "Strategy"],
  ["Sistem Prediksi Penyakit Jantung", "Heart Disease Prediction System"],
  ["Membangun sistem prediksi penyakit jantung menggunakan algoritma Random Forest.", "Built a heart disease prediction system using the Random Forest algorithm."],
  ["Prediksi Penjualan Coffee Shop", "Coffee Shop Sales Forecasting"],
  ["Menganalisis tren penjualan untuk menghasilkan insight pengoptimalan stok.", "Analyzed sales trends to identify opportunities for inventory optimization."],
  ["Analisis Data", "Data Analysis"], ["Peramalan", "Forecasting"],
  ["Analisis Clustering Kelulusan Mahasiswa", "Student Graduation Clustering Analysis"],
  ["Menggunakan metode K-Means untuk clustering data historis mahasiswa berdasarkan tracer study dan pola tahun kelulusan periode 2016-2020.", "Used K-Means to cluster historical student data based on tracer studies and graduation year patterns from 2016 to 2020."],
  ["Sistem Pakar Diagnosa Penyakit Asma", "Asthma Diagnosis Expert System"],
  ["Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma menggunakan rule dan data gejala yang dikumpulkan.", "A web expert system supporting preliminary asthma diagnosis using rules and collected symptom data."],
  ["Sistem Pakar", "Expert System"], ["Pengumpulan Data", "Data Collection"],
  ["Pengalaman Akademik", "Academic Experience"], ["Surveyor Tracer Study", "Tracer Study Surveyor"],
  ["Bertanggung jawab dalam pelaksanaan Tracer Study dengan menghubungi alumni melalui WhatsApp, telepon, dan grup alumni untuk menyampaikan informasi serta mengingatkan pengisian kuesioner. Melakukan pemantauan status pengisian, memperbarui data alumni, merekap progres pengisian berdasarkan program studi dan tahun kelulusan, serta menyusun laporan perkembangan untuk memastikan pengisian kuesioner berjalan dengan baik dan mencapai target yang ditetapkan.", "Supported the Tracer Study by contacting alumni through WhatsApp, phone calls, and alumni groups to share information and questionnaire reminders. Monitored responses, updated alumni records, summarized progress by study program and graduation year, and prepared progress reports to help meet response targets."],
  ["Komunikasi Alumni", "Alumni Outreach"], ["Pengelolaan Data", "Data Management"], ["Pelaporan", "Reporting"],
  ["Tim Akreditasi Program Studi & Asisten Penelitian", "Study Program Accreditation Team & Research Assistant"],
  ["Program Studi Teknologi Informasi, UNISA Yogyakarta", "Information Technology Study Program, UNISA Yogyakarta"],
  ["Terlibat dalam penyusunan, pengolahan data, dan verifikasi berkas akreditasi program studi, serta membantu riset dan penelitian internal kampus bersama dosen.", "Helped prepare, process, and verify study program accreditation documents and supported internal university research with lecturers."],
  ["Penelitian", "Research"], ["Pengolahan Data", "Data Processing"], ["Akreditasi", "Accreditation"],
  ["Magang Industri", "Industry Internship"], ["Okt 2024 – Jan 2025", "Oct 2024 – Jan 2025"],
  ["Analis Data & Administrasi Operasional", "Data Analyst & Operational Administration"],
  ["Melakukan monitoring jaringan Wi-Fi Coin Cleon secara rutin dan berkala untuk memastikan kualitas koneksi berjalan optimal.", "Regularly monitored the Coin Cleon Wi-Fi network to maintain optimal connection quality."],
  ["Mengurusi billing penjualan voucher Wi-Fi serta mendukung seluruh kebutuhan administrasi dan operasional harian kantor.", "Handled Wi-Fi voucher sales billing and supported daily office administration and operations."],
  ["Melayani pelanggan dan menangani keluhan (customer service/support) terkait masalah teknis maupun layanan Wi-Fi.", "Provided customer service and resolved complaints about technical issues and Wi-Fi services."],
  ["Melakukan analisis kelayakan layanan Wi-Fi Coin Cleon dengan metode Skala Likert dan dipublikasikan pada prosiding ilmiah nasional.", "Analyzed the feasibility of Coin Cleon Wi-Fi services using a Likert scale, with findings published in national scientific proceedings."],
  ["Pengabdian Masyarakat", "Community Service"],
  ["Digitalroots Alpha: Pelatihan Kesehatan Keluarga Berbasis Teknologi", "Digitalroots Alpha: Technology Based Family Health Training"],
  ["Desa Salam, Patuk, Gunungkidul · UNISA Yogyakarta & PT SIMS", "Salam Village, Patuk, Gunungkidul · UNISA Yogyakarta & PT SIMS"],
  ["15 Februari 2025", "15 February 2025"],
  ["Berpartisipasi dalam kegiatan pengabdian masyarakat yang membahas penggunaan internet secara positif dan pemanfaatan teknologi sebagai sumber pengetahuan kesehatan keluarga.", "Participated in a community service program on positive internet use and technology as a source of family health knowledge."],
  ["Literasi Digital", "Digital Literacy"], ["Kesehatan Keluarga", "Family Health"],
  ["Baca liputan kegiatan ↗", "Read the event coverage ↗"], ["Proyek Masyarakat", "Community Project"],
  ["Program Kreativitas Mahasiswa - TELE-UKS", "Student Creativity Program - TELE-UKS"],
  ["Berpartisipasi dalam kegiatan PKM kolaboratif yang melibatkan mahasiswa bidang kesehatan dan Teknologi Informasi. Program berfokus pada peningkatan kesehatan siswa melalui skrining anemia dan edukasi pola hidup sehat.", "Participated in a collaborative Student Creativity Program involving health and Information Technology students. The program focused on improving student health through anemia screening and healthy lifestyle education."],
  ["Kolaborasi", "Collaboration"], ["Teknologi", "Technology"], ["Kesehatan", "Health"],
  ["Program Akademik", "Academic Program"], ["Pertukaran Mahasiswa Merdeka", "Independent Student Exchange Program"],
  ["Mengikuti kegiatan akademik lintas universitas dan menyelesaikan proyek pengolahan data clustering kelulusan mahasiswa.", "Joined academic activities at another university and completed a student graduation data clustering project."],
  ["Pertukaran Mahasiswa", "Student Exchange"], ["Akademik", "Academic"],
  ["Penghargaan", "Recognition"], ["Finalis", "Finalist"],
  ["Finalis - Kompetisi Karya Tulis Ilmiah Nasional", "Finalist - National Scientific Writing Competition"],
  ["Menjadi salah satu finalis dalam kompetisi Karya Tulis Ilmiah tingkat nasional yang diselenggarakan secara online oleh Universitas Brawijaya.", "Selected as a finalist in a national scientific writing competition held online by Universitas Brawijaya."],
  ["Perunggu", "Bronze"], ["Medali Perunggu – Kompetisi Esai Nasional", "Bronze Medal – National Essay Competition"],
  ["Meraih medali perunggu dalam kompetisi esai tingkat nasional.", "Won a bronze medal in a national essay competition."],
  ["Juara 3", "3rd Place"], ["Juara 3 Capstone Project Web Presensi", "3rd Place – Attendance Web Capstone Project"],
  ["Proyek Capstone", "Capstone Project"],
  ["Meraih Juara 3 melalui pengembangan proyek web presensi.", "Won third place for developing an attendance web project."],
  ["Riset & Penulisan", "Research & Writing"], ["Publikasi Ilmiah", "Scientific Publications"],
  ["Karya ilmiah dan publikasi kolaboratif", "Scientific work and collaborative publications"],
  ["Jurnal", "Journal"], ["Prosiding", "Proceedings"], ["Terbit Januari 2026", "Published Januari 2026"],
  ["Publikasi", "Publication"], ["Pendidikan", "Education"],
  ["Teknologi Informasi", "Information Technology"], ["Teknik Komputer dan Jaringan", "Computer and Network Engineering"],
  ["Organisasi", "Organization"], ["Pengalaman Organisasi & Kepanitiaan", "Organization & Committee Experience"],
  ["Kepemimpinan", "Leadership"], ["ITech - Himpunan Mahasiswa Teknologi Informasi", "ITech - Information Technology Student Association"],
  ["Bendahara Umum", "General Treasurer"],
  ["Menyusun anggaran tahunan dan laporan keuangan berkala, serta menjaga kerapian dan kelengkapan dokumen transaksi organisasi.", "Prepared annual budgets and periodic financial reports, and maintained organized, complete transaction records."],
  ["Pengalaman Kepanitiaan", "Committee Experience"],
  ["Pengalaman dalam kegiatan kampus dan kepanitiaan.", "Experience in campus activities and event committees."],
  ["Foto kegiatan", "Event photo"], ["Kompetisi", "Competition"], ["Kompetisi Keamanan Siber", "Cybersecurity Competition"],
  ["Seminar Nasional", "National Seminar"], ["Kepanitiaan acara akademik", "Academic event committee"],
  ["Acara Kampus", "Campus Event"], ["Kegiatan kemahasiswaan", "Student activities"],
  ["Kebersamaan", "Togetherness"], ["Malam Keakraban", "Student Bonding Night"], ["Makrab", "Bonding event"],
  ["Keuangan", "Finance"], ["Pengelolaan Keuangan", "Financial Management"], ["Tanggung jawab bendahara", "Treasurer responsibilities"],
  ["Acara", "Event"], ["Perencanaan Acara", "Event Planning"], ["Koordinasi kegiatan", "Event coordination"],
  ["Komunikasi", "Communication"], ["Hubungan Masyarakat", "Public Relations"], ["Informasi dan publikasi acara", "Event information and publicity"],
  ["Keahlian & Kredensial", "Skills & Credentials"], ["Keahlian, Pelatihan & Sertifikasi", "Skills, Training & Certification"],
  ["Analitik Data", "Data Analytics"], ["Perangkat & Keahlian Lainnya", "Tools & Other Skills"],
  ["Dukungan Operasional", "Operational Support"], ["Desain UI/UX", "UI/UX Design"],
  ["Kerja Sama Tim", "Teamwork"], ["Manajemen Waktu", "Time Management"],
  ["Pelatihan", "Training"], ["Kredensial Profesional", "Professional Credential"], ["Sertifikasi", "Certification"],
  ["1 Sertifikat", "1 Certificate"], ["TERSERTIFIKASI", "CERTIFIED"], ["KOMPETENSI", "COMPETENCY"],
  ["Pipeline ETL", "ETL Pipeline"], ["Scraping Data", "Data Scraping"],
  ["Proyek lainnya", "Other projects"],
  ["Sertifikasi kompetensi dalam pengumpulan, penelaahan, validasi, konstruksi, dan integrasi data serta proses review pemodelan data.", "Competency certification in data collection, review, validation, construction, and integration, as well as data modeling review."],
  ["Mari Terhubung", "Let's Connect"],
  ["Terbuka untuk kesempatan kerja, magang, project, maupun kolaborasi di bidang teknologi.", "Open to employment, internships, freelance projects, and collaboration in technology."],
  ["Kirim Email", "Send Email"], ["Portofolio Teknologi Informasi", "Information Technology Portfolio"],
  ["Kharisma Alya Septiana | Portofolio Teknologi Informasi", "Kharisma Alya Septiana | Information Technology Portfolio"],
  ["Gambaran Umum", "Overview"], ["Masalah / Konteks", "Problem / Context"], ["Peran", "Role"],
  ["Proses", "Process"], ["Hasil / Luaran", "Result / Output"], ["Perangkat / Teknologi", "Tools / Technology"],
  ["Sistem presensi berbasis GPS dan kamera untuk proyek capstone.", "A GPS and camera based attendance system for a capstone project."],
  ["Perancangan alur presensi yang memanfaatkan lokasi GPS dan kamera.", "Designed an attendance workflow using GPS location and camera capture."],
  ["Kontributor analisis sistem", "System analysis contributor"],
  ["Menganalisis kebutuhan dan merancang alur sistem presensi berbasis GPS dan kamera.", "Analyzed requirements and designed workflows for a GPS and camera based attendance system."],
  ["Meraih Juara 3 Capstone Project Web Presensi.", "Won third place in the Attendance Web Capstone Project."],
  ["Pipeline ETL otomatis berbasis Python untuk mengumpulkan dan mengolah data Twitter/X.", "An automated Python ETL pipeline to collect and process Twitter/X data."],
  ["Tugas akhir dengan studi kasus Program Makan Bergizi Gratis.", "A final project studying Indonesia's Free Nutritious Meals Program."],
  ["Pengembangan pipeline ETL dan pengolahan data", "ETL pipeline development and data processing"],
  ["Mengembangkan alur pengumpulan, pembersihan, dan pengolahan data Twitter/X secara otomatis menggunakan Python.", "Developed automated workflows for collecting, cleaning, and processing Twitter/X data using Python."],
  ["Pipeline ETL otomatis untuk data Twitter/X.", "An automated ETL pipeline for Twitter/X data."],
  ["Analisis Clustering K-Means", "K-Means Clustering Analysis"],
  ["Hasil Klustering K-means scatter plot", "Scatter plot of K-Means clustering results"],
  ["Project ini menggunakan metode K-Means untuk melakukan clustering data historis mahasiswa berdasarkan data tracer study.", "This project uses K-Means to cluster historical student data from tracer studies."],
  ["Dikerjakan saat mengikuti program pertukaran mahasiswa, dengan fokus melihat pola tahun kelulusan mahasiswa Program Studi Sistem Informasi Universitas Brawijaya periode 2016-2020.", "Completed during a student exchange program, examining graduation year patterns for Information Systems students at Universitas Brawijaya from 2016 to 2020."],
  ["Kontributor analisis data", "Data analysis contributor"],
  ["Mengolah data historis, menerapkan metode clustering, lalu menyajikan pola hasil analisis dalam visualisasi yang mudah dibaca.", "Processed historical data, applied clustering, and presented the analysis patterns in clear visualizations."],
  ["Result / Output belum dilengkapi dengan angka atau laporan final pada PRD.", "Results and final figures have not yet been documented."],
  ["Project website Medical Tourism merupakan project gabungan beberapa mata kuliah.", "The Medical Tourism website is a project spanning several courses."],
  ["Website dirancang sebagai produk kolaboratif yang membutuhkan koordinasi lintas kebutuhan, keputusan tim, dan penyelesaian masalah selama pengembangan.", "The website was designed collaboratively, requiring coordination of requirements, team decisions, and problem solving throughout development."],
  ["Mengatur komunikasi tim, membantu pengambilan keputusan, mengoordinasi anggota, dan menjaga penyelesaian pekerjaan selama pengembangan project.", "Managed team communication, supported decisions, coordinated members, and kept tasks on track throughout development."],
  ["Result / Output belum tersedia pada PRD.", "Results have not yet been documented."],
  ["Sistem Berbasis Aturan", "Rule-Based System"],
  ["Antarmuka sistem pakar berbasis aturan untuk diagnosis asma", "Rule-based expert system interface for asthma diagnosis"],
  ["Sistem pakar berbasis website untuk membantu proses diagnosis awal penyakit asma.", "A web expert system supporting preliminary asthma diagnosis."],
  ["Project memanfaatkan rule dan data gejala yang telah dikumpulkan sebagai dasar proses diagnosis awal.", "The project uses rules and collected symptom data to support preliminary diagnosis."],
  ["Kontributor pengembangan sistem", "System development contributor"],
  ["Mengumpulkan data gejala, menyusun rule, dan mengembangkan alur website untuk proses konsultasi awal.", "Collected symptom data, defined rules, and developed website workflows for preliminary consultations."],
  ["Proyek Desain Antarmuka", "UI Design Project"],
  ["Project kolaborasi antara mahasiswa Kebidanan dan mahasiswa Teknologi Informasi.", "A collaborative project between Midwifery and Information Technology students."],
  ["Tim Teknologi Informasi mengembangkan kebutuhan skrining kesehatan ibu dan anak menjadi rancangan UI untuk versi mobile dan desktop.", "The Information Technology team translated maternal and child health screening requirements into mobile and desktop interface designs."],
  ["Kontributor desain antarmuka", "UI design contributor"],
  ["Menerjemahkan requirement skrining menjadi rancangan antarmuka yang mendukung kebutuhan pengguna pada perangkat mobile dan desktop.", "Translated screening requirements into interface designs supporting user needs on mobile and desktop devices."],
  ["Rancangan UI desktop dan mobile serta prototipe interaktif menggunakan Figma.", "Desktop and mobile interface designs and interactive prototypes using Figma."],
  ["Analisis Kebutuhan", "Requirement Analysis"], ["UI Mobile", "Mobile UI"], ["UI Desktop", "Desktop UI"],
  ["Visualisasi Data", "Data Visualization"], ["Pembersihan Data", "Data Cleaning"], ["Prapemrosesan", "Preprocessing"],
  ["Navigasi utama", "Primary navigation"], ["Beranda Kharisma Alya Septiana", "Kharisma Alya Septiana home"],
  ["Buka navigasi", "Open navigation"], ["Tutup navigasi", "Close navigation"], ["Aksi utama", "Primary actions"],
  ["Sorotan portofolio", "Portfolio highlights"], ["Sorotan utama", "Core highlights"],
  ["Kontrol carousel proyek", "Project carousel controls"], ["Geser proyek ke kiri", "Scroll projects left"], ["Geser proyek ke kanan", "Scroll projects right"],
  ["Pengalaman kepanitiaan dan acara kampus", "Committee and campus event experience"], ["Tutup dialog", "Close dialog"],
  ["Pilih bahasa", "Choose language"],
  ["Lihat sertifikat Finalist", "View finalist certificate"], ["Lihat sertifikat Bronze Medal", "View bronze medal certificate"], ["Lihat sertifikat Juara 3", "View third place certificate"],
  ["Kharisma Alya Septiana mengenakan toga dan memegang ijazah saat wisuda", "Kharisma Alya Septiana wearing a graduation gown and holding her diploma"],
  ["Tampilan aplikasi Capstone Presensi GPS dan Kamera", "GPS and camera attendance capstone application"],
  ["Tampilan SIMBPA untuk skrining kesehatan ibu dan anak", "SIMBPA maternal and child health screening interface"],
  ["Diagram alur pipeline ETL untuk data Twitter/X", "ETL pipeline workflow for Twitter/X data"],
  ["Tampilan halaman utama JogjaCare", "JogjaCare homepage"],
  ["Tampilan halaman utama JogjaCare untuk proyek Medical Tourism Website", "JogjaCare homepage for the Medical Tourism Website project"]
];

const normalizeText = (text) => text.replace(/\s+/g, " ").trim();
const translationIndex = new Map();
languagePairs.forEach(([id, en]) => {
  translationIndex.set(normalizeText(id), { id, en });
  translationIndex.set(normalizeText(en), { id, en });
});
let currentLanguage = "id";
const originalText = new WeakMap();
const originalAttributes = new WeakMap();

function translateText(text) {
  return translationIndex.get(normalizeText(text))?.[currentLanguage] ?? text;
}

// Remember the source so repeated switches never translate an already translated value.
function translateContent(root = document.body) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode: (node) => node.parentElement.closest("script, style, [data-language-switch]")
      ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT
  });
  while (walker.nextNode()) {
    const node = walker.currentNode;
    if (!originalText.has(node)) originalText.set(node, node.textContent);
    const source = originalText.get(node);
    node.textContent = source.replace(/\S[\s\S]*\S|\S/, (text) => translateText(text));
  }
  [root, ...root.querySelectorAll("[alt], [aria-label]")].forEach((element) => {
    if (!originalAttributes.has(element)) originalAttributes.set(element, {});
    const originals = originalAttributes.get(element);
    ["alt", "aria-label"].forEach((attribute) => {
      if (!element.hasAttribute(attribute)) return;
      originals[attribute] ??= element.getAttribute(attribute);
      let text = translateText(originals[attribute]);
      if (attribute === "alt" && currentLanguage === "en") text = text.replace(/^Sertifikat /, "Certificate: ");
      element.setAttribute(attribute, text);
    });
  });
}

function setLanguage(language) {
  currentLanguage = language === "en" ? "en" : "id";
  document.documentElement.lang = currentLanguage;
  document.title = translateText("Kharisma Alya Septiana | Information Technology Portfolio");
  const description = currentLanguage === "id"
    ? "Portofolio Kharisma Alya Septiana, lulusan Teknologi Informasi dengan pengalaman dalam analisis data, pengembangan sistem, desain antarmuka, dan manajemen proyek."
    : "Portfolio of Kharisma Alya Septiana, an Information Technology graduate with experience in data analysis, system development, UI design, and project management.";
  document.querySelector('meta[name="description"]').content = description;
  document.querySelector('meta[property="og:description"]').content = description;
  document.querySelector('meta[property="og:title"]').content = document.title;
  translateContent();
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });
  const toggle = document.querySelector(".nav-toggle");
  toggle.setAttribute("aria-label", translateText(toggle.getAttribute("aria-expanded") === "true" ? "Close navigation" : "Open navigation"));
  try { localStorage.setItem("portfolio-language", currentLanguage); } catch { /* Storage may be disabled. */ }
}

document.querySelectorAll("[data-language]").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});
let savedLanguage = "id";
try { savedLanguage = localStorage.getItem("portfolio-language") || "id"; } catch { /* Use Indonesian. */ }
setLanguage(savedLanguage);
