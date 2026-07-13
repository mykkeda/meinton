import { createFileRoute } from "@tanstack/react-router";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { ArrowUp, ChevronDown, Instagram, Mail, Menu, Play, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import type { MouseEvent } from "react";
import { getLatestTracks } from "@/lib/spotify.functions";
import heroAsset from "@/assets/jb/hero-original.webp.asset.json";
import portraitAsset from "@/assets/jb/portrait.webp.asset.json";
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

const heroImg = heroAsset.url;
const portraitImg = portraitAsset.url;

export const Route = createFileRoute("/")({
  component: Index,
});

const productions = [
  { n: 1, title: "NEUER MANN", artist: "EBENNET", time: "03:37", cover: cover1.url },
  { n: 2, title: "frühling", artist: "Florin", time: "02:24", cover: cover2.url },
  { n: 3, title: "wie gemalt", artist: "blumn", time: "03:26", cover: cover3.url },
  { n: 4, title: "VERRÜCKT", artist: "EBENNET", time: "02:20", cover: cover4.url },
  { n: 5, title: "Monopoly", artist: "Denise Herwig", time: "02:54", cover: cover5.url },
  { n: 6, title: "The Greatest", artist: "Call Us Janis", time: "03:18", cover: cover6.url },
  { n: 7, title: "KAMMERFLIMMERN", artist: "EBENNET", time: "02:43", cover: cover7.url },
  { n: 8, title: "Drifting Apart", artist: "Call Us Janis", time: "02:57", cover: cover8.url },
  { n: 9, title: "Last Dance", artist: "Mykket Morton", time: "05:10", cover: cover9.url },
  { n: 10, title: "Sky Go", artist: "KAMANKO", time: "04:47", cover: cover10.url },
  { n: 11, title: "Michael Cera", artist: "KAMANKO", time: "04:11", cover: cover11.url },
  { n: 12, title: "POTENTIAL", artist: "BENNET", time: "03:30", cover: cover12.url },
];

const mosaicCovers = [cover1.url, cover2.url, cover3.url, cover4.url];


function Index() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const lastScrollY = useRef(0);
  const navItems = [
    { href: "#top", label: "Start" },
    { href: "#produktionen", label: "Produktionen" },
    { href: "#kontakt", label: "Kontakt" },
    { href: "#impressum", label: "Impressum" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const threshold = 120;
      // Full header only at the very top; floating pill everywhere else
      setNavHidden(currentScrollY > threshold);
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [navHidden]);

  useEffect(() => {
    if (!window.location.hash) return;

    const target = document.querySelector<HTMLElement>(window.location.hash);
    if (!target) return;

    requestAnimationFrame(() => {
      window.scrollTo({ top: target.offsetTop, left: 0, behavior: "auto" });
    });
  }, []);

  const handleAnchorClick = (event: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;

    event.preventDefault();
    setMenuOpen(false);

    const target = document.querySelector<HTMLElement>(href);
    if (!target) return;

    window.history.pushState(null, "", href);
    requestAnimationFrame(() => {
      window.scrollTo({ top: target.offsetTop, left: 0, behavior: "smooth" });
    });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header
        className={`fixed top-0 z-50 w-full bg-background/70 backdrop-blur-md border-b border-border transition-all duration-500 ease-out ${
          navHidden ? "-translate-y-full opacity-0 pointer-events-none" : "translate-y-0 opacity-100"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-[2cm] py-4">
          <a href="#top" onClick={(event) => handleAnchorClick(event, "#top")} className="display text-xl tracking-widest">JULIAN BLUMNAUER</a>
          <ul className="hidden md:flex items-center gap-8 text-sm">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={(event) => handleAnchorClick(event, item.href)} className="hover:text-accent transition-colors">{item.label}</a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md hover:bg-card transition-colors"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <div className={`mobile-menu md:hidden ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-inner">
            <div className="border-t border-border bg-background/95 backdrop-blur-md">
              <ul className="flex flex-col px-6 py-2">
                {navItems.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      onClick={(event) => handleAnchorClick(event, item.href)}
                      className="mobile-menu-link block py-3 text-lg hover:text-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </header>

      {/* Floating nav pill when header is hidden */}
      <div
        className={`fixed top-3 right-3 z-50 transition-all duration-500 ease-out ${
          navHidden ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <button
          type="button"
          aria-label="Zurück zum Anfang"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-background/40 backdrop-blur-md border border-border/50 shadow-lg hover:bg-background/60 hover:border-accent transition-colors"
        >
          <ArrowUp className="h-5 w-5" />
        </button>
      </div>


      {/* Hero */}
      <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Julian Blumnauer Studio"
          className="absolute inset-0 h-full w-full object-cover brightness-[1.45]"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/55 via-background/20 to-transparent" />
        <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-[2cm] pt-32 pb-24">
          <p className="text-accent text-lg mb-6 tracking-wide" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>hi, ich bin julian.</p>
          <h1
            className="display text-6xl md:text-8xl leading-[0.9] max-w-4xl"
            style={{ textShadow: '0 2px 28px rgba(0,0,0,0.6), 0 1px 5px rgba(0,0,0,0.45), 0 0 1px rgba(0,0,0,0.35)' }}
          >
            MIXING<br />RECORDING<br />MUSIKPRODUKTION
          </h1>
          <p className="mt-4 text-sm text-muted-foreground tracking-wide" style={{ textShadow: '0 1px 8px rgba(0,0,0,0.55)' }}>
            Pop · Indiepop · Bands · Solo Artists
          </p>
          <a
            href="#kontakt"
            onClick={(event) => handleAnchorClick(event, "#kontakt")}
            className="inline-block mt-12 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-sm tracking-widest uppercase transition-colors drop-shadow-lg"
          >
            Kontakt
          </a>
        </div>
      </section>

      {/* Produktionen */}
      <section id="produktionen" className="relative pt-12 md:pt-16 pb-24 md:pb-32 px-6 lg:px-[2cm] bg-background overflow-hidden">
        <div className="relative mx-auto max-w-6xl">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-12">
            <div>
              <h2 className="display text-5xl md:text-6xl">Produktionen</h2>
              
            </div>
            <a
              href="https://open.spotify.com/playlist/5419zbBnnQlrsf9RCnxGyU"
              target="_blank"
              rel="noreferrer"
              aria-label="Ganze Playlist auf Spotify"
              className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-[#1DB954] hover:bg-[#1ed760] transition-colors"
            >
              <Play className="h-5 w-5 fill-current text-black" />
            </a>
          </div>

          <LatestReleases />
        </div>
      </section>



      {/* Kontakt */}
      <section id="kontakt" className="pt-12 md:pt-16 pb-24 md:pb-32 px-6 lg:px-[2cm] bg-background">
        <div className="mx-auto max-w-6xl">
          <h2 className="display text-5xl md:text-6xl mb-16">Kontakt</h2>
          <div className="grid md:grid-cols-[260px_1fr] lg:grid-cols-[300px_1fr] gap-12 items-start">
            <div className="relative">
              <img
                src={portraitImg}
                alt="Julian Blumnauer"
                loading="lazy"
                width={600}
                height={800}
                className="w-full max-w-[260px] lg:max-w-[300px] rounded-lg object-cover aspect-[3/4]"
              />
              <p className="mt-4 display text-2xl">Julian Blumnauer</p>
            </div>
            <div>
              <h3 className="display text-3xl md:text-4xl mb-8 leading-tight">
                Hast du eine Idee für eine Produktion, brauchst du einen frischen Mix oder willst du Feedback zu deinem Song? Ich helfe dir gern dabei, deinen Song so klingen zu lassen, wie du ihn dir vorstellst. Schreib mir einfach ein paar Infos zu deinem Projekt – ich melde mich so schnell es geht bei dir.
              </h3>
              <div className="flex flex-wrap gap-4">
                <a
                  href="mailto:studio@julianblumnauer.de"
                  className="inline-flex items-center gap-3 bg-card border border-border hover:border-accent px-6 py-4 rounded-lg transition-colors"
                >
                  <Mail className="h-5 w-5 text-accent" />
                  <span>studio@julianblumnauer.de</span>
                </a>
                <a
                  href="https://www.instagram.com/mykkeda_prod/"
                  className="inline-flex items-center gap-3 bg-card border border-border hover:border-accent px-6 py-4 rounded-lg transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    window.top!.location.href = "https://www.instagram.com/mykkeda_prod/";
                  }}
                >
                  <Instagram className="h-5 w-5 text-accent" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impressum & Datenschutz */}
      <footer id="impressum" className="pt-12 md:pt-16 pb-16 px-6 lg:px-[2cm] bg-background">
        <div className="mx-auto max-w-4xl flex flex-col gap-4 text-sm text-muted-foreground">
          <details className="group bg-card/40 border border-border rounded-lg">
            <summary className="flex items-center justify-between px-6 py-4 select-none">
              <h3 className="display text-2xl text-foreground">Impressum</h3>
              <ChevronDown className="details-chevron h-5 w-5 text-accent" />
            </summary>
            <div className="px-6 pb-6 space-y-4 leading-relaxed">
              <p><strong className="text-foreground">Angaben gemäß § 5 TMG:</strong></p>
              <p>
                Julian Blumnauer<br />
                Produzent, Tontechniker und Musiker<br />
                c/o flexdienst – #11432<br />
                Kurt-Schumacher-Straße 76<br />
                67663 Kaiserslautern<br />
                Deutschland
              </p>
              <p>
                E-Mail: <a className="text-accent hover:underline" href="mailto:studio@julianblumnauer.de">studio@julianblumnauer.de</a>
              </p>
              <p><strong className="text-foreground">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:</strong><br />
                Julian Blumnauer<br />
                Adresse wie oben
              </p>
              <p><strong className="text-foreground">Hinweis auf EU-Streitschlichtung:</strong><br />
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
                <a className="text-accent hover:underline" href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noreferrer">
                  https://ec.europa.eu/consumers/odr/
                </a>
                <br />
                Unsere E-Mail-Adresse findest du oben im Impressum.
              </p>
              <p><strong className="text-foreground">Haftungsausschluss:</strong><br />
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
              </p>
              <p><strong className="text-foreground">Urheberrecht:</strong><br />
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Beiträge Dritter sind als solche gekennzeichnet.
              </p>
            </div>
          </details>

          <details className="group bg-card/40 border border-border rounded-lg">
            <summary className="flex items-center justify-between px-6 py-4 select-none">
              <h3 className="display text-2xl text-foreground">Datenschutz</h3>
              <ChevronDown className="details-chevron h-5 w-5 text-accent" />
            </summary>
            <div className="px-6 pb-6 space-y-4 leading-relaxed">
              <p><strong className="text-foreground">Geltungsbereich und Umgang mit personenbezogenen Daten</strong><br />
                Diese Datenschutzerklärung informiert Nutzer über die Verarbeitung personenbezogener Daten bei der Nutzung dieser Website. Die gesetzlichen Regelungen zum Datenschutz ergeben sich aus der Europäischen Datenschutzgrundverordnung (DSGVO), ergänzt durch das Bundesdatenschutzgesetz (BDSG) und das Telemediengesetz (TMG).
              </p>
              <p><strong className="text-foreground">Verantwortlicher</strong><br />
                Julian Blumnauer<br />
                Produzent, Tontechniker und Musiker<br />
                c/o flexdienst – #11432<br />
                Kurt-Schumacher-Straße 76<br />
                67663 Kaiserslautern<br />
                Deutschland
              </p>
              <p><strong className="text-foreground">Erhebung und Verarbeitung personenbezogener Daten</strong><br />
                Personenbezogene Daten sind Informationen, die sich auf eine natürliche Person beziehen (z.B. Name, Adresse, E-Mail). Diese Daten werden nur gemäß den gesetzlichen Datenschutzbestimmungen erhoben und verarbeitet.
              </p>
              <div>
                <p><strong className="text-foreground">Zugriffsdaten</strong></p>
                <p>Beim Besuch der Website werden folgende Daten in sogenannten Server-Logfiles gespeichert:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IP-Adresse</li>
                  <li>Zeitpunkt der Anfrage</li>
                  <li>Übertragene Datenmenge</li>
                  <li>Quellseite</li>
                  <li>verwendeter Browser</li>
                  <li>Betriebssystem</li>
                </ul>
              </div>
              <p><strong className="text-foreground">Cookies</strong><br />
                Unsere Website verwendet Cookies, um Ihnen eine bessere Nutzererfahrung zu bieten. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden und das Surfverhalten analysieren. Die Speicherung von Cookies kann durch Einstellungen im Browser verhindert werden.
              </p>
              <p><strong className="text-foreground">Kontaktformular</strong><br />
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p><strong className="text-foreground">Rechte der betroffenen Personen</strong><br />
                Sie haben das Recht auf Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger sowie den Zweck der Datenverarbeitung. Ferner haben Sie das Recht auf Berichtigung, Sperrung oder Löschung dieser Daten.
              </p>
              <p><strong className="text-foreground">Datensicherheit</strong><br />
                Wir setzen angemessene technische und organisatorische Maßnahmen ein, um Ihre Daten vor Verlust, Manipulation und unberechtigten Zugriff zu schützen.
              </p>
            </div>
          </details>

          <div className="mt-8 pt-6 border-t border-border text-xs text-center">
            © {new Date().getFullYear()} Julian Blumnauer
          </div>
        </div>
      </footer>
    </div>
  );
}

function LatestReleases() {
  const fetchLatest = useServerFn(getLatestTracks);
  const { data, isLoading, error } = useQuery({
    queryKey: ["spotify", "latest", "5419zbBnnQlrsf9RCnxGyU"],
    queryFn: () => fetchLatest(),
    staleTime: 1000 * 60 * 60,
    refetchOnWindowFocus: false,
  });

  if (isLoading) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="aspect-square bg-card/50 animate-pulse rounded-md"
          />
        ))}
      </div>
    );
  }

  if (error || !data?.length) {
    return (
      <p className="text-muted-foreground text-sm">
        Releases konnten nicht geladen werden.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
      {data.map((t, i) => (
        <a
          key={t.id}
          href={t.url}
          target="_blank"
          rel="noreferrer"
          className="group block"
        >
          <div className="relative aspect-square overflow-hidden rounded-xl bg-card/30 backdrop-blur-md border border-border/40 shadow-sm transition-all duration-500 group-hover:bg-card/50 group-hover:border-accent/30">
            <img
              src={t.cover}
              alt={`${t.title} – ${t.artist}`}
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:opacity-95"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 hidden md:flex flex-col justify-end p-4">
              <p className="text-sm md:text-base font-medium text-white truncate drop-shadow">{t.title}</p>
              <p className="text-xs md:text-sm text-white/80 truncate drop-shadow">{t.artist}</p>
            </div>
          </div>
          <div className="mt-3 md:hidden">
            <p className="text-sm font-medium truncate">{t.title}</p>
            <p className="text-xs text-muted-foreground truncate">{t.artist}</p>
          </div>
        </a>
      ))}
    </div>
  );
}
