import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <nav className="flex items-center justify-between px-8 py-4 bg-fuchsia-600 text-white sticky top-0 z-10">
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="CoLive logo" width={40} height={40} />
          <span className="font-bold text-lg">CoLive</span>
        </div>
        <ul className="flex gap-4">
          <li><a href="#home" className="hover:underline">Home</a></li>
          <li><a href="#locations" className="hover:underline">Dove siamo</a></li>
          <li><a href="#about" className="hover:underline">About</a></li>
          <li><a href="#contact" className="hover:underline">Contatti</a></li>
        </ul>
      </nav>

      <section id="home" className="flex flex-col items-center justify-center gap-6 text-center bg-sky-200 text-sky-900 py-32 px-4">
        <h1 className="text-5xl font-extrabold">🏡 Vivi il coliving dei tuoi sogni</h1>
        <p className="max-w-2xl text-lg">Spazi condivisi, community vibrante e libertà di lavorare da ovunque tu voglia.</p>
        <Image src="/hero.svg" alt="Coliving illustration" width={400} height={300} priority />
      </section>

      <section id="locations" className="py-32 px-4 bg-lime-200 text-lime-900 text-center">
        <h2 className="text-4xl font-bold mb-4">🌍 Dove siamo</h2>
        <p className="max-w-2xl mx-auto">Siamo presenti nelle principali città italiane e in hub internazionali in continua crescita.</p>
      </section>

      <section id="about" className="py-32 px-4 bg-orange-200 text-orange-900 text-center">
        <h2 className="text-4xl font-bold mb-4">ℹ️ About</h2>
        <p className="max-w-2xl mx-auto">Offriamo soluzioni di coliving flessibili pensate per nomadi digitali, studenti e professionisti che cercano una casa lontano da casa.</p>
      </section>

      <section id="contact" className="py-32 px-4 bg-fuchsia-200 text-fuchsia-900 text-center">
        <h2 className="text-4xl font-bold mb-4">📬 Contatti</h2>
        <p className="max-w-xl mx-auto">Scrivici a <a href="mailto:info@colive.example" className="underline">info@colive.example</a> o chiamaci al <a href="tel:+391234567890" className="underline">+39 123 456 7890</a>.</p>
      </section>

      <footer className="py-6 text-center text-sm bg-fuchsia-600 text-white">
        © {new Date().getFullYear()} CoLive - Coliving senza confini
      </footer>
    </div>
  );
}
