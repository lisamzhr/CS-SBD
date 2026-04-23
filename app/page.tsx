"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Home() {
  const heroImgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroImgRef.current) {
        const scrollY = window.scrollY;
        heroImgRef.current.style.transform = `translateY(${scrollY * 0.4}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`
        .fade-up { opacity:0; transform:translateY(40px); transition:opacity 0.7s ease,transform 0.7s ease; }
        .fade-up.visible { opacity:1; transform:translateY(0); }
        .marquee-track { display:flex; gap:3rem; animation:marquee 12s linear infinite; white-space:nowrap; }
        @keyframes marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        .hero-parallax { will-change:transform; transition:transform 0.05s linear; }
        .text-gradient {
          background: linear-gradient(135deg, #FFD700, #FF8C00, #FF4500);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-cream {
          background: linear-gradient(135deg, #FDF7D3, #F5C97A, #E8A040);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .text-gradient-brown {
          background: linear-gradient(135deg, #8B4513, #402320, #6B2D0F);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      <main className="bg-[#402320] min-h-screen overflow-x-hidden">

        {/* HERO */}
        <section className="relative min-h-screen overflow-hidden">
          <div ref={heroImgRef} className="hero-parallax absolute inset-0 scale-110">
            <Image src="/images/hero-bg.png" alt="Hero" fill className="object-cover object-center" priority />
          </div>
          <div className="absolute inset-0 bg-black/20 z-10" />
          <div className="absolute top-0 left-0 w-full z-20">
            <Image src="/images/hero-choco.png" alt="Choco drip" width={1440} height={200} className="w-full object-cover object-top" priority />
          </div>
          <nav className="absolute top-0 left-0 w-full z-30 flex items-center justify-between px-10 py-4">
            <Image src="/images/logo.png" alt="Logo" width={130} height={45} />
            <ul className="flex gap-10 list-none">
              <li><a href="#" className="text-white font-semibold hover:text-[#FDF7D3] transition drop-shadow">Beranda</a></li>
              <li><a href="#about" className="text-white font-semibold hover:text-[#FDF7D3] transition drop-shadow">About</a></li>
              <li><a href="#product" className="text-white font-semibold hover:text-[#FDF7D3] transition drop-shadow">Product</a></li>
            </ul>
          </nav>
          <div className="absolute bottom-16 left-0 w-full text-center z-20 px-6">
            <h1 className="text-white text-6xl font-black leading-tight drop-shadow-lg">
              Buat Kenangan Manis<br />
              <span className="text-gradient">#withsilverqueen</span>
            </h1>
            <button className="mt-8 bg-[#402320] text-[#FDF7D3] font-black text-xl px-12 py-4 rounded-full hover:bg-[#2a1510] transition shadow-lg">
              Explore Produk
            </button>
          </div>
        </section>

        {/* MARQUEE */}
        <div className="overflow-hidden bg-[#FDF7D3] py-4">
          <div className="marquee-track">
            {[...Array(8)].map((_, i) => (
              <span key={i} className="text-[#402320] font-black text-xl tracking-widest uppercase">
                SilverQueen &nbsp;•&nbsp; Cokelat Indonesia &nbsp;•&nbsp; Since 1980 &nbsp;•&nbsp;
              </span>
            ))}
          </div>
        </div>

        {/* ABOUT */}
        <section id="about" className="px-10 py-20">
          <h2 className="fade-up text-center text-6xl font-black text-gradient-cream mb-10">About</h2>
          <div className="fade-up bg-[#FDF7D3] rounded-3xl p-10 flex gap-10 items-center">
            <div className="w-1/2 flex flex-col gap-4">
              <p className="text-[#402320] text-lg leading-relaxed">
                SilverQueen adalah cokelat enak dan bergizi yang udah jadi kesukaan masyarakat Indonesia dari generasi ke generasi. 
                Dibuat dari bahan-bahan pilihan berkualitas tinggi yang bikin setiap gigitannya terasa istimewa.
              </p>
              <p className="text-[#402320] text-lg leading-relaxed">
                Varian andalannya? Tentu aja yang almond perpaduan cokelat susu lembut dengan kacang almond renyah yang bikin nagih. 
                Belum lagi greentea yang unik dan segar, serta yogurt yang creamy dan ringan. Pokoknya ada buat semua selera!
              </p>
              <p className="text-[#402320] text-lg leading-relaxed">
                Dari nemenin nonton film, hadiah buat orang tersayang, sampai camilan saat kerja lembur SilverQueen selalu ada buat bikin momen jadi lebih manis. 
              </p>
            </div>
            <div className="w-1/2 relative h-[320px]">
              <Image src="/images/about-products.png" alt="Products" fill className="object-cover rounded-2xl" />
            </div>
          </div>
        </section>

        {/* PRODUCT */}
        <section id="product" className="px-10 pb-20">
          <h2 className="fade-up text-5xl font-black text-gradient mb-12">Product</h2>
          <div className="flex flex-col gap-16">

            <div className="fade-up flex items-center gap-10">
              <div className="w-1/2 flex flex-col gap-3">
                <h3 className="text-2xl font-black text-gradient-cream">SilverQueen White & Dark</h3>
                <p className="text-[#FDF7D3] text-lg leading-relaxed">
                  Dua dunia dalam satu gigitan! Varian ini ngabungin kelembutan cokelat putih yang creamy sama intensitas cokelat dark yang bold. 
                  Cocok banget buat kamu yang ga bisa milih antara keduanya, sekarang ga perlu milih lagi! 
                </p>
              </div>
              <div className="w-1/2 relative h-[300px]">
                <Image src="/images/product-white.png" alt="Putih" fill className="object-cover rounded-2xl" />
              </div>
            </div>

            <div className="fade-up flex items-center gap-10 flex-row-reverse">
              <div className="w-1/2 flex flex-col gap-3">
                <h3 className="text-2xl font-black text-gradient-cream text-right">SilverQueen Yogurt</h3>
                <p className="text-[#FDF7D3] text-lg leading-relaxed text-right">
                  Buat kamu yang suka sesuatu yang lebih ringan dan segar, varian yogurt ini jawabannya! 
                  Perpaduan cokelat susu lembut dengan rasa yogurt yang slightly tangy bikin sensasi unik yang susah dilupain. 
                  Enak, segar, dan tetap manis! 
                </p>
              </div>
              <div className="w-1/2 relative h-[300px]">
                <Image src="/images/product-yogurt.png" alt="Yogurt" fill className="object-cover rounded-2xl" />
              </div>
            </div>

          </div>
        </section>

        {/* CTA */}
        <section className="fade-up flex flex-col items-center py-16 gap-4">
          <h2 className="text-4xl font-black text-gradient-cream">Siap Bikin Hari Makin Manis?</h2>
          <p className="text-[#FDF7D3] text-lg opacity-80">Temukan SilverQueen di minimarket atau toko online favoritmu!</p>
          <button className="mt-4 bg-[#FDF7D3] text-[#402320] font-black text-3xl px-28 py-5 rounded-full shadow-lg hover:bg-white transition">
            Buy me 
          </button>
        </section>
        {/* FOOTER */}
        <footer className="bg-[#2a1510] text-[#FDF7D3] px-10 py-12 mt-8">
          <div className="max-w-6xl mx-auto grid grid-cols-3 gap-10">

            {/* Brand */}
            <div className="flex flex-col gap-4">
              <Image src="/images/logo.png" alt="Logo" width={120} height={40} />
              <p className="text-sm opacity-70 leading-relaxed">
                Cokelat kebanggaan Indonesia yang udah menemani setiap momen manis sejak 1980
              </p>
            </div>

            {/* Navigasi */}
            <div className="flex flex-col gap-3">
              <h4 className="font-black text-lg text-gradient-cream">Navigasi</h4>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">Beranda</a>
              <a href="#about" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">About</a>
              <a href="#product" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">Product</a>
            </div>

            {/* Kontak */}
            <div className="flex flex-col gap-3">
              <h4 className="font-black text-lg text-gradient-cream">Hubungi Kami</h4>
              <p className="text-sm opacity-70">silverqueen@lisa.com</p>
              <p className="text-sm opacity-70">+62 812-3456-7890</p>
              <p className="text-sm opacity-70">Setiabudi, Indonesia</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">Instagram</a>
                <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">Twitter</a>
                <a href="#" className="text-sm opacity-70 hover:opacity-100 hover:text-[#FFD700] transition">TikTok</a>
              </div>
            </div>

          </div>

          {/* Garis bawah */}
          <div className="border-t border-[#FDF7D3]/20 mt-10 pt-6 text-center text-sm opacity-50">
            © 2025 SilverQueen. All rights reserved. Made with in Indonesia.
          </div>
        </footer>
      </main>
    </>
  );
}