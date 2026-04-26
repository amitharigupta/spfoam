import { notFound } from "next/navigation";
import { CATEGORIES } from '../categories';
import Link from 'next/link';

export default async function BesideTablePage({
    params
}: {
    params: Promise<{ slug: string }>
}) {
    const { slug } = await params;
    const item = CATEGORIES.find((cat) => cat.href.includes(slug));

    if (!item) notFound();

    return (
        <main className="min-h-screen bg-[#fafafa] pt-20 pb-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* 🍞 BREADCRUMBS */}
                <nav className="flex mb-8 text-sm font-medium text-gray-500" aria-label="Breadcrumb">
                    <ol className="flex items-center space-x-2">
                        <li><Link href="/" className="hover:text-black transition">Home</Link></li>
                        <li className="flex items-center space-x-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
                            <Link href="/beside-table" className="hover:text-black transition">Beside Table</Link>
                        </li>
                        <li className="flex items-center space-x-2 text-black font-semibold">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" /></svg>
                            <span>{item.label}</span>
                        </li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                    {/* 🎥 LEFT: VIDEO PLAYER (Col 1-8) */}
                    <div className="lg:col-span-8">
                        <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-black group">
                            <video
                                src={item.video}
                                controls
                                autoPlay
                                muted
                                loop
                                playsInline
                                className="w-full h-full object-fit"
                            />
                        </div>
                    </div>

                    {/* 📝 RIGHT: DETAILS (Col 9-12) */}
                    <div className="lg:col-span-4 flex flex-col justify-center">
                        <div className="space-y-6">
                            <div>
                                <span className="inline-block px-3 py-1 text-xs font-bold tracking-widest text-white uppercase bg-black rounded-full mb-4">
                                    Premium Collection
                                </span>
                                <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 tracking-tight">
                                    {item.label}
                                </h1>
                            </div>

                            <p className="text-lg text-gray-600 leading-relaxed">
                                Experience unparalleled comfort with our signature {item.label} design.
                                Handcrafted with premium materials, this piece features ergonomic support
                                and a timeless aesthetic that elevates any living space.
                            </p>

                            <div className="space-y-4 pt-4">
                                {item.features.map((feat, index) => (
                                    <div key={index} className="flex items-center gap-4">
                                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">✨</div>
                                        <div>
                                            <h3 className="font-bold text-sm tex-gray-900">{feat.title}</h3>
                                            <p className="text-sm text-gray-500">{feat.desc}</p>
                                        </div>
                                    </div>
                                ))}

                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                                        🛡️
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900">2-Year Warranty</h3>
                                        <p className="text-sm text-gray-500">Quality guaranteed for your peace of mind.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8">
                                <button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-all active:scale-95 shadow-xl">
                                    Inquire Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 🏛️ SECONDARY DESCRIPTION SECTION */}
                <div className="mt-20 border-t pt-12">
                    <h2 className="text-2xl font-bold mb-6 text-gray-900">Product Features</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-gray-600">
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-black mb-2">Sustainable Materials</h4>
                            <p>Crafted using eco-friendly fabrics and responsibly sourced wood for a greener home.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-black mb-2">Custom Comfort</h4>
                            <p>High-density foam padding ensures the perfect balance of softness and durability.</p>
                        </div>
                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                            <h4 className="font-bold text-black mb-2">Easy Assembly</h4>
                            <p>Delivered with simple, clear instructions for a stress-free setup in minutes.</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}