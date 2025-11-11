import Link from 'next/link'
import Container from '@/components/container'

export default function LazuardiPage() {
    const base = (process.env.NEXT_PUBLIC_BASE_PATH ?? '').replace(/\/$/, '')

    return (
        <section className="py-14">
            <Container>
                <div className="grid gap-8 md:grid-cols-3">
                    {/* LEFT: Foto + kontak */}
                    <aside className="col-span-1">
                        <div className="card p-6 text-center">
                            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-white/5">
                                <img
                                    src={`${base}/avatars/lazuardi.jpg`}
                                    alt="Lazuardi"
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <h2 className="mb-1 text-2xl font-semibold">Lazuardi Dimas Prasetyo</h2>
                            <p className="text-sm text-gray-300">Management • Digital Marketing • UI/UX</p>

                            <div className="mt-4 flex flex-col gap-2 text-sm">
                                <a
                                    href={`${base}/cv/lazuardi_cv.pdf`}
                                    download="lazuardi_cv.pdf"
                                    className="rounded-md bg-brand-red px-3 py-2 text-center font-medium hover:bg-brand-red/90"
                                >
                                    Download CV (PDF)
                                </a>
                                <a href="mailto:lazuardidimas@upi.edu" className="text-gray-200 hover:text-brand-red">
                                    lazuardidimas@upi.edu
                                </a>
                                <p className="text-xs text-gray-400 mt-3">Bandung / Bogor, Jawa Barat</p>
                                <a
                                    href="https://linkedin.com/in/lazuardidimasprasetyo"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-gray-300 hover:text-brand-red"
                                >
                                    LinkedIn / Portfolio
                                </a>

                            </div>
                        </div>
                    </aside>

                    {/* RIGHT: Konten utama */}
                    <div className="col-span-2 space-y-6">
                        {/* Summary */}
                        <div className="card p-6">
                            <h3 className="text-xl font-semibold">Ringkasan</h3>
                            <p className="mt-3 text-gray-300">
                                Mahasiswa Manajemen dengan IPK tinggi (3.89/4.00) yang berfokus pada digital marketing,
                                desain grafis, dan pembuatan konten media sosial. Berpengalaman sebagai social media specialist,
                                UI/UX designer, dan pemimpin organisasi dengan kemampuan komunikasi dan pemikiran kritis.
                            </p>
                        </div>

                        {/* Experience / Projects */}
                        <div className="card p-6">
                            <h3 className="text-xl font-semibold">Proyek & Pengalaman</h3>
                            <ul className="mt-4 space-y-3 text-sm text-gray-300">
                                <li>
                                    <strong>Freelance (Jun 2024 - Sekarang)</strong><br />
                                    Graphic designer — menyelesaikan 50+ project, mahir Figma & Canva.
                                </li>
                                <li>
                                    <strong>MicroMentor — Mentor (Nov 2022 - Sekarang)</strong><br />
                                    Mentoring 3+ UMKM pada strategi bisnis & digital presence.
                                </li>
                                <li>
                                    <strong>Manifest — Senior Editor (May 2022 - May 2024)</strong><br />
                                    Mengelola e-magazine; menghasilkan engagement 10k+ dan 30+ publikasi.
                                </li>
                                <li>
                                    <strong>Daegun Mang Aip — UI/UX Designer (Sep 2022 - Dec 2022)</strong><br />
                                    Desain UI/UX aplikasi mobile & pembuatan DFD untuk penguatan UMKM digital.
                                </li>
                                <li>
                                    <strong>HappoHappySoap — Social Media Specialist (Feb 2022 - Jun 2022)</strong><br />
                                    Membuat content planner dan kampanye media sosial bersama tim sales & marketing.
                                </li>
                            </ul>
                        </div>

                        {/* Organization */}
                        <div className="card p-6">
                            <h3 className="text-xl font-semibold">Pengalaman Organisasi</h3>
                            <p className="mt-3 text-sm text-gray-300">
                                Banyak pengalaman kepanitiaan & kepemimpinan di IMAGE UPI: Manager Design Bureau Sponsorship,
                                Coordinator of Multimedia, staff komunikasi — sukses mengelola tim, proposal sponsor, dan meningkatkan
                                followers & engagement akun kampus.
                            </p>
                        </div>

                        {/* Education & Skills */}
                        <div className="card p-6 grid gap-4 md:grid-cols-2">
                            <div>
                                <h3 className="text-xl font-semibold">Pendidikan</h3>
                                <p className="mt-3 text-sm text-gray-300">
                                    Universitas Pendidikan Indonesia — S1 Manajemen (Aug 2021 – Oct 2025). IPK: 3.89/4.00.
                                </p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold">Keahlian & Prestasi</h3>
                                <ul className="mt-3 space-y-2 text-sm text-gray-300">
                                    <li>Graphic Design (Figma, Canva) • UI/UX (Intermediate)</li>
                                    <li>Social Media Strategy & Content Planning</li>
                                    <li>Photography, Video Editing (Basic)</li>
                                    <li>Pencapaian: Top 10 Finalist Business Plan, peserta Olimpiade Ekonomi, dsb.</li>
                                </ul>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex items-center gap-3">
                            <Link href="/team" className="rounded-md bg-white/10 px-4 py-2 hover:bg-white/15">Kembali ke Tim</Link>
                            <a
                href="mailto:lazuardidimas@upi.edu"
                className="rounded-md bg-brand-red px-4 py-2 hover:bg-brand-red/90"
              >
                Hubungi lazuardi
              </a>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
