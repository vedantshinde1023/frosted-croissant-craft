import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-croissant.jpg";
import menuImg from "@/assets/menu-spread.jpg";
import interiorImg from "@/assets/interior-entrance.jpg";
import storefrontImg from "@/assets/storefront.jpg";
import outdoorImg from "@/assets/outdoor-seating.jpg";
import miniImg from "@/assets/mini-croissant.jpg";
import logo from "@/assets/logo.png";

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
            <img src={logo} alt="Crosaaintwala & Co." className="h-9 w-9 object-contain drop-shadow-[0_2px_8px_rgba(212,175,55,0.4)]" />
            <span className="font-display text-base tracking-wide hidden sm:inline">
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
                href="https://www.swiggy.com/city/pune/crosaaintwala-and-co-undri-rest1353841?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[var(--gold)] px-6 py-3 text-sm font-medium text-[var(--primary-foreground)] shadow-[var(--shadow-glow)] transition hover:scale-[1.02]"
              >
                Order on Swiggy
              </a>
              <a
                href="https://www.zomato.com/pune/crosaaintwala-co-hadapsar/order"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#E23744] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_30px_-10px_rgba(226,55,68,0.6)] transition hover:scale-[1.02] hover:bg-[#cf2f3c]"
              >
                Order on Zomato
              </a>
              <a
                href="#visit"
                className="rounded-full px-6 py-3 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                Find the shop →
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
                <div className="text-xs">8:30 am — 11:30 pm</div>
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
        {/* Gallery */}
        <div className="mx-auto mb-24 max-w-6xl">
          <div className="mb-10 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
                The shop
              </p>
              <h2 className="font-display text-4xl font-light md:text-5xl">
                Tucked into <em className="text-gradient-gold">NIBM Road.</em>
              </h2>
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            <figure className="glass group relative col-span-2 overflow-hidden rounded-3xl">
              <img
                src={storefrontImg}
                alt="Crosaaintwala & Co. storefront on NIBM Road"
                width={1200}
                height={900}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-105"
              />
              <figcaption className="glass absolute bottom-4 left-4 rounded-full px-4 py-1.5 text-xs uppercase tracking-widest">
                Shop No 9 · Royal Kp Stellar
              </figcaption>
            </figure>
            <figure className="glass group overflow-hidden rounded-3xl">
              <img
                src={outdoorImg}
                alt="Outdoor seating at Crosaaintwala & Co."
                width={800}
                height={900}
                loading="lazy"
                className="aspect-[4/3] h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </figure>
          </div>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-[var(--gold-soft)]">
                Loved by the neighbourhood
              </p>
              <h2 className="font-display text-4xl font-light leading-tight md:text-6xl">
                <span className="text-gradient-gold">4.7</span> on Google
              </h2>
            </div>
            <p className="max-w-sm text-sm text-muted-foreground">
              From 109+ diners who walked in for a croissant and stayed for a second.
            </p>
          </div>

          <div className="glass-strong mb-8 rounded-3xl p-6 md:p-8">
            <div className="flex items-start gap-4">
              <div className="hidden h-12 w-12 shrink-0 place-items-center rounded-full bg-white/5 sm:grid">
                <span className="font-display text-xl text-gradient-gold">G</span>
              </div>
              <div>
                <p className="mb-2 text-[10px] uppercase tracking-[0.25em] text-[var(--gold-soft)]">
                  Google review summary
                </p>
                <p className="text-base leading-relaxed text-foreground/90 md:text-lg">
                  Diners highlight the <em className="text-gradient-gold not-italic font-medium">freshly baked croissants</em> —
                  flaky, buttery, soft — with the chocolate and mini croissants getting the most love.
                  The wide range of flavours, including savoury picks like cheese mushroom and paneer
                  paprika, gets called out often. Guests appreciate the warm welcoming vibe, attentive
                  staff, and affordable prices.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="glass flex flex-col rounded-3xl p-6 transition hover:-translate-y-1 hover:bg-white/10"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-[var(--gold-soft)] to-[var(--ember)] font-display text-base text-[var(--background)]">
                    {r.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-foreground">{r.name}</div>
                    <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                      {r.when}
                    </div>
                  </div>
                </div>
                <div className="mb-3 text-sm text-[var(--gold)]">{"★".repeat(r.stars)}<span className="text-muted-foreground">{"★".repeat(5 - r.stars)}</span></div>
                <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                  "{r.text}"
                </p>
              </article>
            ))}
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

            <div className="mt-8 grid gap-3">
              <a
                href="https://www.swiggy.com/city/pune/crosaaintwala-and-co-undri-rest1353841?utm_source=GooglePlaceOrder&utm_campaign=GoogleMap&is_retargeting=true&media_source=GooglePlaceOrder"
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 transition hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#FC8019] text-base font-bold text-white">S</span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">Order on Swiggy</span>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">30–40 min delivery</span>
                  </span>
                </span>
                <span className="text-muted-foreground transition group-hover:text-[var(--gold-soft)]">→</span>
              </a>
              <a
                href="https://www.zomato.com/pune/crosaaintwala-co-hadapsar/order"
                target="_blank"
                rel="noreferrer"
                className="glass group flex items-center justify-between rounded-2xl px-5 py-4 transition hover:bg-white/10"
              >
                <span className="flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-[#E23744] text-base font-bold text-white">Z</span>
                  <span>
                    <span className="block text-sm font-medium text-foreground">Order on Zomato</span>
                    <span className="block text-[10px] uppercase tracking-widest text-muted-foreground">Delivery & dine-in</span>
                  </span>
                </span>
                <span className="text-muted-foreground transition group-hover:text-[var(--gold-soft)]">→</span>
              </a>
            </div>
          </div>

          <div className="grid gap-4 md:col-span-3">
            <div className="glass relative overflow-hidden rounded-3xl">
              <iframe
                title="Crosaaintwala & Co. on Google Maps"
                src="https://www.google.com/maps?q=Crosaaintwala+%26+Co,+Royal+Kp+Stellar,+NIBM+Rd,+Mohammed+Wadi,+Pune+411060&output=embed"
                loading="lazy"
                className="h-72 w-full border-0 [filter:invert(0.92)_hue-rotate(180deg)_saturate(0.6)_brightness(0.95)]"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10" />
            </div>
            <InfoCard
              label="Address"
              value="Shop No 9, Royal Kp Stellar, NIBM Rd, Autadwadi Handewadi, Mohammed Wadi, Pune 411060"
              href="https://www.google.com/maps/dir/?api=1&destination=Crosaaintwala+%26+Co,+NIBM+Rd,+Pune+411060"
              cta="Get directions"
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
                value="Open daily · 8:30 am — 11:30 pm"
                href="https://www.zomato.com/pune/crosaaintwala-co-hadapsar/book"
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

type MenuItem = { name: string; price: string; desc?: string };
type MenuSection = { title: string; tag: string; items: MenuItem[] };

const REVIEWS: { name: string; when: string; stars: number; text: string }[] = [
  {
    name: "Rashida Lakdawala",
    when: "Yesterday",
    stars: 5,
    text: "A truly wonderful experience — food was absolutely amazing and service was prompt. The croissant was notably fresh and crispy. Family thoroughly enjoyed our time.",
  },
  {
    name: "Shalini Ratwani",
    when: "2 days ago",
    stars: 5,
    text: "Really good variety and everything tastes good 💯",
  },
  {
    name: "Rukayya Kanchwala",
    when: "Yesterday",
    stars: 5,
    text: "A very nice place for a casual go-to time with friends.",
  },
  {
    name: "Nandini Chougule",
    when: "3 days ago",
    stars: 5,
    text: "Amazing food.",
  },
];

const MENU_SECTIONS: MenuSection[] = [
  {
    title: "The Croissants",
    tag: "Baked all day",
    items: [
      { name: "Classic Croissant", price: "110", desc: "Pure French-butter lamination, crackling shell, honeycomb crumb." },
      { name: "Cheese Croissant", price: "150", desc: "Aged cheddar folded through the layers." },
      { name: "Cinnamon Croissant", price: "150", desc: "Warm cinnamon sugar, glazed and golden." },
      { name: "Cheese Chilli Croissant", price: "170", desc: "Cheese, fresh chilli, a little kick." },
      { name: "Raspberry & Pistachio", price: "210", desc: "Raspberry preserve, pistachio cream." },
      { name: "Chocolate Peanut Butter", price: "210", desc: "Dark chocolate ganache, salted peanut butter." },
      { name: "Benoff Croissant", price: "220", desc: "Banana, toffee sauce, whipped cream." },
      { name: "Nutella Croissant", price: "210" },
      { name: "Mini Croissant", price: "60", desc: "Bite-sized, perfect with chai." },
      { name: "Croissant Pudding", price: "230", desc: "Bread pudding, croissant style." },
    ],
  },
  {
    title: "Special — Croissant Sandwiches",
    tag: "₹230 / 265",
    items: [
      { name: "Creamy Cheese Mushroom", price: "230", desc: "Sautéed mushrooms, creamy cheese sauce." },
      { name: "Grilled Paneer & Veggies", price: "230" },
      { name: "Paprika Paneer Sandwich", price: "230" },
      { name: "Creamy Mushroom Sandwich", price: "230" },
      { name: "Egg Salad Sandwich", price: "230" },
      { name: "Smoked Chicken Avocado", price: "265" },
      { name: "BBQ Chicken Sandwich", price: "265" },
      { name: "Grilled Chicken Sandwich", price: "265" },
      { name: "Paprika Chicken & Veggies", price: "265" },
      { name: "Scrambled Egg & Cheese", price: "230" },
      { name: "Chocolate Croissant", price: "230" },
    ],
  },
  {
    title: "Mini Pizzas",
    tag: "Wood-base, freshly baked",
    items: [
      { name: "Veg Hyderabadi Dum", price: "220" },
      { name: "Paneer Tikka", price: "220" },
      { name: "Tandoori Paneer", price: "220" },
      { name: "Chicken Hyderabadi", price: "260" },
      { name: "Butter Chicken", price: "260" },
      { name: "Margherita", price: "180" },
      { name: "Chicken Tikka", price: "260" },
    ],
  },
  {
    title: "Coffee & Chai",
    tag: "Brewed to order",
    items: [
      { name: "Filter Coffee", price: "90" },
      { name: "Cappuccino", price: "140" },
      { name: "Latte", price: "150" },
      { name: "Espresso", price: "110" },
      { name: "Hot Chocolate", price: "170" },
      { name: "Masala Chai", price: "70" },
      { name: "Bombay Cutting", price: "60" },
      { name: "Iced Americano", price: "150" },
    ],
  },
];
