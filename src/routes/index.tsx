import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-croissant.jpg";
import menuImg from "@/assets/menu-spread.jpg";
import interiorImg from "@/assets/cafe-interior.jpg";
import miniImg from "@/assets/mini-croissant.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Crosaaintwala & Co. — Freshly Baked Croissants in Pune" },
      {
        name: "description",
        content:
          "Crosaaintwala & Co. — flaky, buttery, freshly baked croissants in Mohammed Wadi, Pune. Sweet & savoury flavours, warm vibes, fair prices.",
      },
      { property: "og:title", content: "Crosaaintwala & Co." },
      {
        property: "og:description",
        content: "Freshly baked, fiercely flaky. A neighbourhood croissanterie in Pune.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden text-foreground">
      {/* Floating glass nav */}
      <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4">
        <nav
          className={`glass-strong flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-3 transition-all duration-500 ${
            scrolled ? "scale-[0.98] shadow-2xl" : ""
          }`}
        >
          <a href="#top" className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--ember)] text-[var(--background)] font-display text-base font-bold">
              C
            </span>
            <span className="font-display text-base tracking-wide">
              Crosaaintwala <span className="text-muted-foreground">& Co.</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            <a href="#menu" className="transition hover:text-foreground">Menu</a>
            <a href="#story" className="transition hover:text-foreground">Story</a>
            <a href="#visit" className="transition hover:text-foreground">Visit</a>
          </div>
          <a
            href="tel:08411867595"
            className="rounded-full bg-foreground px-4 py-1.5 text-xs font-medium text-background transition hover:opacity-90"
          >
            Reserve
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section id="top" className="relative min-h-screen w-full">
        <img
          src={heroImg}
          alt="Freshly baked golden croissant"
          width={1600}
          height={1920}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-transparent to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-20 pt-32 md:justify-center md:pb-0">
          <div className="glass max-w-2xl rounded-3xl p-8 md:p-12">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--gold-soft)]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--gold)]" />
              Mohammed Wadi, Pune
            </div>
            <h1 className="font-display text-5xl font-light leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
              Fiercely flaky.
              <br />
              <span className="italic text-gradient-gold">Freshly</span> baked.
            </h1>
            <p className="mt-6 max-w-md text-base text-muted-foreground md:text-lg">
              A neighbourhood croissanterie folding butter into 81 layers, every morning,
              from a tiny shop on NIBM Road.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#menu"
                className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)] shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
              >
                See the menu
              </a>
              <a
                href="#visit"
                className="glass rounded-full px-6 py-3 text-sm font-medium text-foreground transition hover:bg-white/10"
              >
                Find the shop
              </a>
            </div>

            <div className="mt-10 flex items-center gap-6 border-t border-white/10 pt-6 text-sm text-muted-foreground">
              <div>
                <div className="font-display text-2xl text-foreground">4.7★</div>
                <div className="text-xs">109 reviews</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="font-display text-2xl text-foreground">₹200–400</div>
                <div className="text-xs">Per person</div>
              </div>
              <div className="h-8 w-px bg-white/10" />
              <div>
                <div className="font-display text-2xl text-foreground">Open</div>
                <div className="text-xs">Closes 11:30 pm</div>
              </div>
            </div>
          </div>
        </div>

        {/* Floating glass card — review */}
        <div className="absolute right-6 top-32 z-10 hidden w-72 lg:block">
          <div className="glass animate-float rounded-2xl p-5">
            <div className="mb-2 flex gap-1 text-[var(--gold)]">{"★★★★★"}</div>
            <p className="text-sm leading-relaxed text-foreground/90">
              "Perfectly flaky, buttery, and soft inside. The mini croissants were
              <span className="text-[var(--gold-soft)]"> SO GOOD</span>."
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-muted-foreground">
              Google review
            </p>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section id="story" className="relative px-6 py-32">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2 md:items-center">
          <div className="relative">
            <img
              src={interiorImg}
              alt="Inside Crosaaintwala & Co. cafe"
              width={1600}
              height={1200}
              loading="lazy"
              className="aspect-[4/5] w-full rounded-3xl object-cover"
            />
            <div className="glass absolute -bottom-8 -right-4 hidden rounded-2xl p-5 md:block">
              <div className="font-display text-3xl text-gradient-gold">81</div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Layers per croissant
              </div>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
              The story
            </p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
              A small shop with <em className="text-gradient-gold">big butter</em> energy.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We laminate, proof, and bake every croissant in-house, in small batches,
              all day. No shortcuts, no day-olds — just the slow, patient theatre of
              flour, French butter, and time.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
              Whether it's a chocolate spiral with your morning espresso or a paneer
              paprika at midnight, we built this place for the in-between hours.
            </p>
          </div>
        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="relative px-6 py-32">
        <div className="absolute inset-0 -z-10">
          <img
            src={menuImg}
            alt=""
            aria-hidden
            width={1600}
            height={1200}
            loading="lazy"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
              The menu
            </p>
            <h2 className="font-display text-5xl font-light md:text-7xl">
              Sweet, savoury, <em className="text-gradient-gold">always flaky.</em>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-sm text-muted-foreground">
              All croissants 100% eggless. Baked in small batches through the day.
            </p>
          </div>

          <div className="space-y-10">
            {MENU_SECTIONS.map((section) => (
              <div key={section.title} className="glass rounded-3xl p-8 md:p-10">
                <div className="mb-8 flex items-baseline justify-between border-b border-white/10 pb-4">
                  <h3 className="font-display text-2xl md:text-3xl">{section.title}</h3>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">
                    {section.tag}
                  </p>
                </div>
                <ul className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                  {section.items.map((item) => (
                    <li key={item.name} className="group flex items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-baseline gap-3">
                          <span className="font-display text-base text-foreground">
                            {item.name}
                          </span>
                          <span
                            className="h-px flex-1 self-center border-b border-dotted border-white/15"
                            aria-hidden
                          />
                          <span className="font-display text-sm text-gradient-gold whitespace-nowrap">
                            ₹{item.price}
                          </span>
                        </div>
                        {item.desc ? (
                          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                            {item.desc}
                          </p>
                        ) : null}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL band */}
      <section className="relative px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="glass-strong relative overflow-hidden rounded-[2.5rem] p-10 md:p-16">
            <img
              src={miniImg}
              alt=""
              aria-hidden
              width={1200}
              height={1500}
              loading="lazy"
              className="absolute -right-20 -top-10 hidden h-[140%] w-1/2 object-cover opacity-40 md:block"
              style={{ maskImage: "linear-gradient(to left, black 40%, transparent)" }}
            />
            <div className="relative max-w-xl">
              <div className="mb-4 text-2xl text-[var(--gold)]">★ ★ ★ ★ ★</div>
              <blockquote className="font-display text-3xl font-light leading-snug md:text-5xl">
                "They bake their own croissants <em className="text-gradient-gold">fresh and crispy</em> —
                rare to find. Genuinely warm service."
              </blockquote>
              <p className="mt-6 text-sm uppercase tracking-[0.25em] text-muted-foreground">
                — Diner, Google Reviews
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* VISIT */}
      <section id="visit" className="relative px-6 py-32">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <p className="mb-4 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
              Visit
            </p>
            <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
              Come for one. <br />
              <em className="text-gradient-gold">Leave with six.</em>
            </h2>
            <p className="mt-6 text-muted-foreground">
              Walk in, dial in, or reserve a table. We're open till late and we've
              probably just pulled a fresh tray.
            </p>
          </div>

          <div className="grid gap-4 md:col-span-3">
            <InfoCard
              label="Address"
              value="Shop No 9, Royal Kp Stellar, NIBM Rd, Autadwadi Handewadi, Mohammed Wadi, Pune 411060"
              href="https://maps.google.com/?q=Crosaaintwala+%26+Co+Pune"
              cta="Open in Maps"
            />
            <div className="grid gap-4 md:grid-cols-2">
              <InfoCard
                label="Call"
                value="084118 67595"
                href="tel:08411867595"
                cta="Tap to call"
              />
              <InfoCard
                label="Hours"
                value="Open daily · Closes 11:30 pm"
                href="https://www.zomato.com"
                cta="Reserve via Zomato"
              />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative border-t border-white/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="font-display text-base text-foreground">
            Crosaaintwala & Co.
          </div>
          <p>© {new Date().getFullYear()} — Folded with butter, in Pune.</p>
        </div>
      </footer>
    </div>
  );
}

function InfoCard({
  label,
  value,
  href,
  cta,
}: {
  label: string;
  value: string;
  href: string;
  cta: string;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="glass group block rounded-2xl p-6 transition hover:bg-white/10"
    >
      <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">
        {label}
      </p>
      <p className="mt-2 text-base text-foreground">{value}</p>
      <p className="mt-4 inline-flex items-center gap-1 text-xs uppercase tracking-widest text-muted-foreground transition group-hover:text-[var(--gold-soft)]">
        {cta} →
      </p>
    </a>
  );
}

const MENU = [
  {
    tag: "Signature",
    name: "Classic Croissant",
    price: 120,
    desc: "Pure French-butter lamination. Crackling shell, honeycomb crumb, golden through.",
  },
  {
    tag: "Sweet",
    name: "Dark Chocolate",
    price: 160,
    desc: "Two batons of 64% Belgian chocolate, folded into a slow-proofed dough.",
  },
  {
    tag: "Sweet",
    name: "Almond",
    price: 170,
    desc: "Rebaked with frangipane, toasted flakes, and a dust of icing sugar.",
  },
  {
    tag: "Savoury",
    name: "Cheese & Mushroom",
    price: 220,
    desc: "Sautéed button mushrooms, melted mozzarella, fresh thyme. Brunch in a bite.",
  },
  {
    tag: "Savoury",
    name: "Paneer Paprika",
    price: 230,
    desc: "Smoky paprika paneer, pickled onion, a whisper of green chilli.",
  },
  {
    tag: "Mini",
    name: "Mini Croissant Box",
    price: 280,
    desc: "Six bite-sized morsels — assorted sweet & savoury. The crowd-pleaser.",
  },
];
