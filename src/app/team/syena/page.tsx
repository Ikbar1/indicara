import Link from "next/link";
import Container from "@/components/container";
const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function SyenaPage() {
  return (
    <section className="py-14">
      <Container>
        <div className="grid gap-8 md:grid-cols-3">
          {/* LEFT: Foto + kontak */}
          <aside className="col-span-1">
            <div className="card p-6 text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-white/5">
                {/* ganti src jika sudah ada avatar */}
                <img
                  src="/avatars/syena.jpg"
                  alt="Syena"
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="mb-1 text-2xl font-semibold">Syena</h2>
              <p className="text-sm text-gray-300">
                Sastra Inggris & Copywriting
              </p>

              <div className="mt-4 flex flex-col gap-2 text-sm">
                <a
                  href={`${base}/cv/syenabani_cv.pdf`}
                  download
                  className="rounded-md bg-brand-red px-3 py-2 text-center font-medium hover:bg-brand-red/90"
                >
                  Download CV (PDF)
                </a>

                <a
                  href="mailto:msyenabani@gmail.com"
                  className="text-gray-200 hover:text-brand-red"
                >
                  msyenabani@gmail.com
                </a>
                <p className="text-xs text-gray-400 mt-3">Bogor</p>
              </div>
            </div>
          </aside>

          {/* RIGHT: Konten utama */}
          <div className="col-span-2 space-y-6">
            {/* Summary */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Ringkasan</h3>
              <p className="mt-3 text-gray-300">
                Seorang mahasiswa yang gigih, berpikiran positif, mampu bekerja
                di bawah tekanan, dan memiliki kemampuan menulis kreatif serta
                public speaking.
              </p>
            </div>

            {/* Experience */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Pengalaman</h3>
              <ul className="mt-4 space-y-3 text-sm text-gray-300">
                <li>
                  <strong>
                    MSIB — PT Permodalan Nasional Madani (Feb–Jul 2024)
                  </strong>
                  <br />
                  Teacher: membuat materi pembelajaran anak, lesson plans
                  interaktif.
                </li>
                <li>
                  <strong>
                    Pre-service Teacher — SMA Negeri 4, Malang (Jul–Sep 2024)
                  </strong>
                  <br />
                  Mengembangkan modul dan mengajar kelas Grade 10–11; memberikan
                  les privat.
                </li>
                <li>
                  <strong>KKN — Bojonegoro (Jul–Aug 2023)</strong>
                  <br />
                  Mengajar bahasa Inggris dasar & kampanye literasi digital.
                </li>
                <li>
                  <strong>Islamic Teacher — IKRIMA AL-IKHLAS (Apr 2022)</strong>
                  <br />
                  Mengajar nilai-nilai Islam, menulis & menyutradarai drama
                  religi.
                </li>
              </ul>
            </div>

            {/* Education & Achievements */}
            <div className="card p-6 grid gap-4 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-semibold">Pendidikan</h3>
                <p className="mt-3 text-sm text-gray-300">
                  Universitas Brawijaya — English Language Education (2021 –
                  sekarang).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold">Prestasi</h3>
                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                  <li>2nd Place — Poetry creation (nasional).</li>
                  <li>2nd Place — Podcast (WOW FIB UB).</li>
                  <li>3rd Place — Ruangguru Indonesia National Quiz.</li>
                  <li>
                    Juara & partisipasi lomba lain-lain (dance, LKBB, dsb.).
                  </li>
                  <li>Detail lengkap ada di CV.</li>
                </ul>
              </div>
            </div>

            {/* Skills */}
            <div className="card p-6">
              <h3 className="text-xl font-semibold">Keahlian</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                <span className="badge">Public Speaking</span>
                <span className="badge">Creative Writing</span>
                <span className="badge">Creative Thinking</span>
                <span className="badge">Japanese (Intermediate)</span>
                <span className="badge">Mandarin (Intermediate)</span>
                <span className="badge">English (Advanced)</span>
              </div>
            </div>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <Link
                href="/"
                className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15"
              >
                Kembali ke Beranda
              </Link>

              <a
                href="mailto:msyenabani@gmail.com"
                className="rounded-md bg-brand-red px-4 py-2 hover:bg-brand-red/90"
              >
                Hubungi Syena
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
