import { createFileRoute } from "@tanstack/react-router";
import { Instagram, Mail, Play, Music, Mic, Sliders } from "lucide-react";
import heroImg from "@/assets/studio-hero.jpg";
import mixingImg from "@/assets/mixing.jpg";
import recordingImg from "@/assets/recording.jpg";
import produktionImg from "@/assets/produktion.jpg";
import portraitImg from "@/assets/portrait.jpg";
import cover1 from "@/assets/covers/c1.jpg.asset.json";
import cover2 from "@/assets/covers/c2.jpg.asset.json";
import cover3 from "@/assets/covers/c3.jpg.asset.json";
import cover4 from "@/assets/covers/c4.jpg.asset.json";
import cover5 from "@/assets/covers/c5.jpg.asset.json";
import cover6 from "@/assets/covers/c6.jpg.asset.json";
import cover7 from "@/assets/covers/c7.jpg.asset.json";
import cover8 from "@/assets/covers/c8.jpg.asset.json";
import cover9 from "@/assets/covers/c9.jpg.asset.json";
import cover10 from "@/assets/covers/c10.jpg.asset.json";
import cover11 from "@/assets/covers/c11.jpg.asset.json";
import cover12 from "@/assets/covers/c12.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const productions = [
  { n: 1, title: "NEUER MANN", artist: "EBENNET", time: "03:37" },
  { n: 2, title: "frühling", artist: "Florin", time: "02:24" },
  { n: 3, title: "wie gemalt", artist: "blumn", time: "03:26" },
  { n: 4, title: "VERRÜCKT", artist: "EBENNET", time: "02:20" },
  { n: 5, title: "Monopoly", artist: "Denise Herwig", time: "02:54" },
  { n: 6, title: "The Greatest", artist: "Call Us Janis", time: "03:18" },
  { n: 7, title: "KAMMERFLIMMERN", artist: "EBENNET", time: "02:43" },
  { n: 8, title: "Drifting Apart", artist: "Call Us Janis", time: "02:57" },
  { n: 9, title: "Last Dance", artist: "Mykket Morton", time: "05:10" },
  { n: 10, title: "Sky Go", artist: "KAMANKO", time: "04:47" },
  { n: 11, title: "Michael Cera", artist: "KAMANKO", time: "04:11" },
  { n: 12, title: "POTENTIAL", artist: "BENNET", time: "03:30" },
];

const beats = [
  { n: 1, title: "The-Flute-Dude_Trap", time: "4:16" },
  { n: 2, title: "EmEm_HipHop", time: "2:41" },
  { n: 3, title: "Rap_Beat", time: "3:50" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="fixed top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-border">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#top" className="display text-xl tracking-widest">JULIAN BLUMNAUER</a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            <li><a href="#produktionen" className="hover:text-accent transition-colors">Produktionen</a></li>
            <li><a href="#beats" className="hover:text-accent transition-colors">Beats</a></li>
            <li><a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a></li>
            <li><a href="#impressum" className="hover:text-accent transition-colors">Impressum</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Julian Blumnauer Studio"
          className="absolute inset-0 h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/70 to-background/20" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
          <p className="text-accent text-lg mb-6 tracking-wide">hi, ich bin julian.</p>
          <h1 className="display text-6xl md:text-8xl leading-[0.9] max-w-4xl">
            MIXING<br />RECORDING<br />MUSIKPRODUKTION
          </h1>
          <a
            href="#kontakt"
            className="inline-block mt-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase transition-colors"
          >
            Kontakt
          </a>
        </div>
      </section>

      {/* Produktionen */}
      <section id="produktionen" className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-5xl md:text-6xl mb-16">Produktionen</h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="bg-card border border-border p-6 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-16 w-16 rounded bg-accent/20 flex items-center justify-center">
                  <Music className="h-8 w-8 text-accent" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground">Playlist</p>
                  <h3 className="text-xl font-semibold">Produced/Mixed by Julian Blumnauer</h3>
                  <p className="text-sm text-muted-foreground">blumnauer · Spotify</p>
                </div>
              </div>
              <a
                href="https://open.spotify.com/playlist/5419zbBnnQlrsf9RCnxGyU"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#1DB954] hover:bg-[#1ed760] text-black font-semibold px-6 py-3 rounded-full transition-colors"
              >
                <Play className="h-4 w-4 fill-current" />
                Play on Spotify
              </a>
            </div>

            <ol className="space-y-1 max-h-[500px] overflow-y-auto pr-2">
              {productions.map((t) => (
                <li key={t.n} className="flex items-center gap-4 py-3 border-b border-border/50 hover:bg-card/50 px-2 transition-colors">
                  <span className="text-muted-foreground text-sm w-6 tabular-nums">{t.n}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{t.title}</p>
                    <p className="text-sm text-muted-foreground truncate">{t.artist}</p>
                  </div>
                  <span className="text-sm text-muted-foreground tabular-nums">{t.time}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* Beats */}
      <section id="beats" className="py-24 md:py-32 px-6 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-5xl md:text-6xl mb-16">Beats</h2>
          <div className="grid gap-3 max-w-2xl">
            {beats.map((b) => (
              <div key={b.n} className="flex items-center gap-4 bg-card border border-border p-4 rounded-lg hover:border-accent transition-colors">
                <button className="h-10 w-10 rounded-full bg-primary flex items-center justify-center hover:scale-105 transition-transform">
                  <Play className="h-4 w-4 fill-current text-primary-foreground ml-0.5" />
                </button>
                <span className="text-muted-foreground text-sm w-6 tabular-nums">{b.n}</span>
                <span className="flex-1 font-medium">{b.title}</span>
                <span className="text-sm text-muted-foreground tabular-nums">{b.time}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Was ich anbiete */}
      <section className="py-24 md:py-32 px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-5xl md:text-6xl mb-16">Was ich anbiete</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: mixingImg, title: "Mixing", icon: Sliders },
              { img: recordingImg, title: "Recording", icon: Mic },
              { img: produktionImg, title: "Musikproduktion", icon: Music },
            ].map((s) => (
              <div key={s.title} className="group relative overflow-hidden rounded-lg aspect-[4/5]">
                <img
                  src={s.img}
                  alt={s.title}
                  loading="lazy"
                  width={800}
                  height={1000}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 flex items-center justify-between">
                  <h3 className="display text-3xl">{s.title}</h3>
                  <s.icon className="h-6 w-6 text-accent" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="kontakt" className="py-24 md:py-32 px-6 bg-card/30">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-5xl md:text-6xl mb-16">Kontakt</h2>
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 items-center">
            <div className="relative">
              <img
                src={portraitImg}
                alt="Julian Blumnauer"
                loading="lazy"
                width={800}
                height={1000}
                className="w-full rounded-lg object-cover aspect-[4/5]"
              />
              <p className="mt-4 display text-2xl">Julian Blumnauer</p>
            </div>
            <div>
              <h3 className="display text-3xl md:text-4xl mb-8 leading-tight">
                Du hast eine Anfrage oder willst etwas wissen? Schreib mir gerne hier:
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="https://www.instagram.com/mykkeda_mix/"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 bg-card border border-border hover:border-accent px-6 py-4 rounded-lg transition-colors"
                >
                  <Instagram className="h-5 w-5 text-accent" />
                  <span>Instagram</span>
                </a>
                <a
                  href="mailto:studio@julianblumnauer.de"
                  className="inline-flex items-center gap-3 bg-card border border-border hover:border-accent px-6 py-4 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span>studio@julianblumnauer.de</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum */}
      <footer id="impressum" className="border-t border-border py-16 px-6">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 text-sm text-muted-foreground">
          <div>
            <h3 className="display text-2xl text-foreground mb-4">Impressum</h3>
            <p>Angaben gemäß § 5 TMG:</p>
            <p className="mt-2">
              Julian Blumnauer<br />
              Produzent, Tontechniker und Musiker<br />
              c/o flexdienst – #11432<br />
              Kurt-Schumacher-Straße 76<br />
              67663 Kaiserslautern<br />
              Deutschland
            </p>
            <p className="mt-2">
              E-Mail: <a className="text-accent hover:underline" href="mailto:studio@julianblumnauer.de">studio@julianblumnauer.de</a>
            </p>
          </div>
          <div>
            <h3 className="display text-2xl text-foreground mb-4">Datenschutz</h3>
            <p>
              Diese Website verarbeitet personenbezogene Daten gemäß DSGVO, BDSG und TMG. Beim Besuch werden Server-Logfiles (IP-Adresse, Zeitpunkt, Browser, Betriebssystem) gespeichert. Anfragen über Kontaktkanäle werden ausschließlich zur Bearbeitung genutzt und nicht ohne Einwilligung weitergegeben.
            </p>
            <p className="mt-4">
              EU-Streitschlichtung: <a className="text-accent hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">ec.europa.eu/consumers/odr</a>
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-6xl mt-12 pt-8 border-t border-border text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Julian Blumnauer
        </div>
      </footer>
    </div>
  );
}
