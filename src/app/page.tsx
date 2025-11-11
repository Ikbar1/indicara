import Container from "@/components/container";
import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden">
        <Container>
          <div className="pt-20 pb-24">
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
              INDICARA —{" "}
              <span className="text-brand-red">Kolaborasi Lintas Bidang</span>
              <br /> untuk Solusi Digital yang Efisien
            </h1>

            <p className="mt-5 max-w-2xl text-lg text-gray-300">
              Kami adalah tim multidisiplin dengan latar belakang software
              engineering, desain, manajemen, sastra, dan komunikasi. INDICARA
              berfokus pada kolaborasi lintas bidang untuk menciptakan solusi
              digital yang kreatif, efisien, dan berdampak.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#services"
                className="rounded-lg bg-white/10 px-4 py-2 font-medium hover:bg-white/15"
              >
                Lihat Layanan
              </a>
              <a
                href="#contact"
                className="rounded-lg bg-brand-red px-4 py-2 font-medium hover:bg-brand-red/90"
              >
                Hubungi Kami
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="badge">Web Development</span>
              <span className="badge">Mobile App</span>
              <span className="badge">UI/UX Design</span>
              <span className="badge">Marketing</span>
              <span className="badge">Localization</span>
              <span className="badge">IoT</span>
            </div>
          </div>
        </Container>

        {/* background blobs */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -top-32 left-10 h-72 w-72 rounded-full bg-brand-red/30 blur-[80px]" />
          <div className="absolute -right-20 top-10 h-80 w-80 rounded-full bg-brand-red/20 blur-[100px]" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-white/5 blur-[80px]" />
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section id="services" className="py-20">
        <Container>
          <h2 className="section-title">Layanan Kami</h2>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Web Development",
                desc: "Membangun website modern dan responsif menggunakan Next.js dan teknologi terkini.",
              },
              {
                title: "Mobile App",
                desc: "Aplikasi Android/iOS menggunakan Flutter yang cepat, elegan, dan konsisten.",
              },
              {
                title: "UI/UX Design",
                desc: "Desain antarmuka dan pengalaman pengguna yang profesional dan berorientasi hasil.",
              },
              {
                title: "Marketing Strategy",
                desc: "Perencanaan konten dan kampanye digital untuk meningkatkan visibilitas brand.",
              },
              {
                title: "Localization",
                desc: "Penerjemahan & adaptasi konten Jepang/Inggris agar relevan dengan pasar global.",
              },
              {
                title: "Graphic Design",
                desc: "Komunikasi visual yang memanfaatkan elemen-elemen seperti gambar, warna, tipografi, dan tata letak untuk menyampaikan pesan secara efektif dan menarik.",
              },
              {
                title: "Project Management",
                desc: "Perencanaan, eksekusi, dan kontrol proyek lintas bidang secara efisien.",
              },
              {
                title: "Content Writing",
                desc: "Copywriting dan konten kreatif berbahasa Indonesia & Inggris.",
              },
            ].map((s) => (
              <div
                key={s.title}
                className="card p-5 hover:bg-white/10 transition-colors"
              >
                <h3 className="mb-2 font-semibold text-white">{s.title}</h3>
                <p className="text-sm text-gray-300">{s.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="py-20">
        <Container>
          <h2 className="section-title">Proyek Unggulan</h2>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                tag: "Flutter • Mobile • SQLite",
                title: "VoST (Volleyball Statistic Team)",
                desc: "Aplikasi penilaian skor bola voli berbasis Flutter dengan SQLite, mendukung pelacakan kejadian secara real-time, manajemen susunan tim, dan ekspor data ke PDF dan Excel untuk pelaporan pertandingan.",
              },
              {
                tag: "AI • Mobile",
                title: "Attendance FaceID",
                desc: "Aplikasi presensi wajah berbasis AI untuk check-in/out pegawai dengan integrasi cloud.",
              },
              {
                tag: "Design • Campaign",
                title: "Brand Awareness Campaign",
                desc: "Landing page dan kampanye digital untuk meningkatkan awareness dan engagement brand klien.",
              },
            ].map((p) => (
              <div key={p.title} className="card p-5">
                <span className="text-xs text-gray-400">{p.tag}</span>
                <h3 className="mt-2 text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{p.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ===== CONTACT CTA ===== */}
      <section id="contact" className="py-20">
        <Container>
          <div className="card flex flex-col items-start gap-4 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <h3 className="text-xl font-semibold">
                Siap Kolaborasi dengan INDICARA?
              </h3>
              <p className="text-gray-300 mt-1">
                Ceritakan ide proyekmu—kami akan bantu mewujudkannya.
              </p>
            </div>
            <Link
              href="mailto:hello@indicara.dev"
              className="rounded-lg bg-brand-red px-4 py-2 font-medium hover:bg-brand-red/90"
            >
              hello@indicara.dev
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
