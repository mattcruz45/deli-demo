import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Phone,
  MapPin,
  Clock,
  Star,
  Menu as MenuIcon,
  X,
  Sandwich,
  Leaf,
  Soup,
  Coffee,
  ChefHat,
  Truck,
  Heart,
  Award,
  Users,
  Sparkles,
  Instagram,
  Facebook,
  ArrowRight,
  Mail,
  Car,
} from "lucide-react";

import heroImg from "@/assets/hero-deli.jpg";
import itemItalian from "@/assets/item-italian.jpg";
import itemTurkey from "@/assets/item-turkey.jpg";
import itemPastrami from "@/assets/item-pastrami.jpg";
import itemRoastbeef from "@/assets/item-roastbeef.jpg";
import itemWrap from "@/assets/item-wrap.jpg";
import itemPotato from "@/assets/item-potato.jpg";
import aboutInterior from "@/assets/about-interior.jpg";
import catering from "@/assets/catering.jpg";
import menuBreakfast from "@/assets/menu-breakfast.jpg";
import menuSalad from "@/assets/menu-salad.jpg";
import menuSoup from "@/assets/menu-soup.jpg";
import menuSpecial from "@/assets/menu-special.jpg";
import galleryStaff from "@/assets/gallery-staff.jpg";
import galleryBread from "@/assets/gallery-bread.jpg";
import galleryCase from "@/assets/gallery-case.jpg";

import { useCountUp } from "@/hooks/use-count-up";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const NAV = [
  { href: "#home", label: "Home" },
  { href: "#menu", label: "Menu" },
  { href: "#about", label: "About" },
  { href: "#catering", label: "Catering" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container-deli flex items-center justify-between py-4">
        <a href="#home" className="flex items-center gap-2">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
            <Sandwich className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-tight">
            <span
              className={`font-display text-lg font-bold ${scrolled ? "text-foreground" : "text-white"}`}
            >
              Cruz
            </span>
            <span
              className={`text-[10px] uppercase tracking-[0.2em] ${
                scrolled ? "text-muted-foreground" : "text-white/80"
              }`}
            >
              Deli · Est. 2003
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-white/90"
              }`}
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:+15551234567"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition hover:bg-[var(--deli-red-deep)] hover:shadow-md"
          >
            <Phone className="h-4 w-4" />
            (555) 123-4567
          </a>
        </div>

        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className={`lg:hidden grid h-10 w-10 place-items-center rounded-full border ${
            scrolled
              ? "border-border text-foreground"
              : "border-white/30 text-white"
          }`}
        >
          <MenuIcon className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden fixed inset-0 z-50 transition ${open ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <div
          className={`absolute inset-0 bg-charcoal/60 transition-opacity ${open ? "opacity-100" : "opacity-0"}`}
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 h-full w-[82%] max-w-sm bg-background shadow-2xl transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex items-center justify-between p-5 border-b border-border">
            <span className="font-display text-lg font-bold">Menu</span>
            <button
              onClick={() => setOpen(false)}
              className="grid h-10 w-10 place-items-center rounded-full border border-border"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="flex flex-col p-5 gap-1">
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 font-display text-xl text-foreground hover:bg-secondary"
              >
                {n.label}
              </a>
            ))}
            <a
              href="tel:+15551234567"
              className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
            >
              <Phone className="h-4 w-4" /> Call (555) 123-4567
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Fresh artisan sandwiches and deli meats on a wooden table"
        className="absolute inset-0 h-full w-full object-cover"
        width={1920}
        height={1280}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(170,40,30,0.25),transparent_55%)]" />

      <div className="relative z-10 container-deli flex min-h-[100svh] flex-col justify-end pb-16 pt-32 sm:justify-center sm:pb-24">
        <div className="max-w-3xl animate-fade-up">
          <div className="mb-6 flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white backdrop-blur border border-white/20">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" /> Open · 7am – 8pm today
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-white backdrop-blur border border-white/20">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> 4.9 · 412 reviews
            </span>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/90 px-4 py-1.5 text-primary-foreground backdrop-blur">
              <Heart className="h-3.5 w-3.5" /> Family-owned since 2003
            </span>
          </div>

          <h1 className="font-display text-5xl font-bold leading-[1.05] text-white sm:text-7xl md:text-[5.5rem]">
            Fresh Ingredients. <br />
            <span className="italic text-amber-100/95">Handmade</span> Sandwiches.{" "}
            <br />
            <span className="text-primary-foreground/95">Local Tradition.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-white/85 sm:text-lg">
            Serving the community with handcrafted sandwiches, premium deli meats, fresh
            salads, and classic deli favorites — made fresh every single day.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/30 transition hover:translate-y-[-1px] hover:bg-[var(--deli-red-deep)]"
            >
              View Menu
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>

        <div className="pointer-events-none absolute right-6 top-1/3 hidden lg:block animate-float-slow">
          <div className="rounded-2xl border border-white/15 bg-white/10 px-5 py-4 text-white backdrop-blur-md">
            <p className="font-display text-3xl">20+</p>
            <p className="text-xs uppercase tracking-widest text-white/70">Years in the neighborhood</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const CATEGORIES = [
  { icon: Sandwich, title: "Signature Sandwiches", desc: "Stacked high with premium deli meats on bakery-fresh bread.", price: "from $9.50", img: itemItalian },
  { icon: Coffee, title: "Breakfast Favorites", desc: "Egg, bacon, sausage and bagel sandwiches served all morning.", price: "from $5.95", img: menuBreakfast },
  { icon: Leaf, title: "Fresh Salads", desc: "Crisp greens, garden vegetables and house-made dressings.", price: "from $8.50", img: menuSalad },
  { icon: Soup, title: "Soups", desc: "Slow-simmered classics with rustic bread on the side.", price: "from $4.95", img: menuSoup },
  { icon: ChefHat, title: "Wraps", desc: "Grilled chicken, Caesar, Mediterranean and more.", price: "from $8.95", img: itemWrap },
  { icon: Sparkles, title: "Daily Specials", desc: "A new chef's pick every weekday — check the chalkboard.", price: "from $10.50", img: menuSpecial },
];

function MenuHighlights() {
  return (
    <section id="menu" className="py-24 sm:py-32 bg-background">
      <div className="container-deli">
        <SectionEyebrow>The Menu</SectionEyebrow>
        <SectionHeading>
          A neighborhood favorite, <em className="italic text-primary">six ways</em>.
        </SectionHeading>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          From hot breakfast sandwiches at sunrise to hearty lunch specials at noon, every
          plate is built from premium ingredients sourced as locally as we can find them.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CATEGORIES.map((c, i) => (
            <CategoryCard key={c.title} {...c} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CategoryCard({
  icon: Icon,
  title,
  desc,
  price,
  img,
  index,
}: {
  icon: typeof Sandwich;
  title: string;
  desc: string;
  price: string;
  img: string;
  index: number;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${index * 60}ms` }}
      className={`group overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all duration-700 hover:shadow-xl hover:-translate-y-1 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={img}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute left-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-background/90 backdrop-blur text-primary shadow-sm">
          <Icon className="h-5 w-5" />
        </div>
        <span className="absolute right-4 top-4 rounded-full bg-primary/95 px-3 py-1 text-xs font-semibold text-primary-foreground shadow">
          {price}
        </span>
      </div>
      <div className="p-6">
        <h3 className="font-display text-2xl font-semibold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
      </div>
    </div>
  );
}

function About() {
  const a = useCountUp(20);
  const b = useCountUp(15000);
  const c = useCountUp(100);
  const d = useCountUp(412);
  return (
    <section id="about" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container-deli grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="absolute -left-3 -top-3 hidden h-28 w-28 rounded-full bg-primary/10 sm:block" />
          <div className="absolute -bottom-4 -right-4 hidden h-40 w-40 rounded-full bg-accent/15 sm:block" />
          <img
            src={aboutInterior}
            alt="Inside Cruz Deli — counter and meat case"
            loading="lazy"
            className="relative h-[520px] w-full rounded-3xl object-cover shadow-xl"
          />
          <div className="absolute -bottom-6 left-6 right-6 sm:left-auto sm:right-6 sm:w-72 rounded-2xl border border-border bg-background p-5 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary text-primary-foreground">
                <Award className="h-6 w-6" />
              </div>
              <div>
                <p className="font-display text-lg font-semibold">Locally Loved</p>
                <p className="text-xs text-muted-foreground">Voted #1 deli, 4 years running</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <SectionEyebrow>Our Story</SectionEyebrow>
          <SectionHeading>
            A family-owned deli, <em className="italic text-primary">three generations</em> in
            the making.
          </SectionHeading>
          <p className="mt-5 text-muted-foreground">
            What started in 2003 as a small corner shop has become a true neighborhood
            anchor. Every morning, we bake fresh bread, slice premium meats by hand, and
            prepare homemade salads from recipes passed down from our grandmother.
          </p>
          <p className="mt-4 text-muted-foreground">
            We believe a great sandwich starts with great ingredients — and great
            neighbors. Whether you're grabbing a quick breakfast on your commute or
            ordering catering for the office, we treat every order like it's for family.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
            <Stat label="Years serving">
              <span ref={a.ref}>{a.value}</span>+
            </Stat>
            <Stat label="Happy customers">
              <span ref={b.ref}>{b.value.toLocaleString()}</span>+
            </Stat>
            <Stat label="Fresh daily">
              <span ref={c.ref}>{c.value}</span>%
            </Stat>
            <Stat label="5-star reviews">
              <span ref={d.ref}>{d.value}</span>
            </Stat>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-3xl font-bold text-foreground sm:text-4xl">{children}</p>
      <p className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{label}</p>
    </div>
  );
}

const FEATURES = [
  { icon: Leaf, title: "Fresh Ingredients Daily", desc: "Produce, breads and meats delivered every morning before doors open." },
  { icon: Award, title: "Premium Quality Meats", desc: "Boar's Head, Dietz & Watson, and select local butchers only." },
  { icon: ChefHat, title: "Made-To-Order Sandwiches", desc: "Built when you order — never pre-made, never sitting around." },
  { icon: Heart, title: "Friendly Local Service", desc: "We learn names and orders. You're a regular by visit three." },
  { icon: Truck, title: "Catering Available", desc: "Office lunches, parties, and platters with 24-hour notice." },
  { icon: Sparkles, title: "Fast Takeout Options", desc: "Phone-ahead and pickup ready in 10 minutes or less." },
];

function WhyChoose() {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="container-deli">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>Why Choose Us</SectionEyebrow>
          <SectionHeading center>The little things, done right every day.</SectionHeading>
        </div>
        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group bg-background p-8 transition-colors hover:bg-secondary/60"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SIGNATURE = [
  { name: "The Classic Italian", img: itemItalian, badge: "Most Popular", desc: "Genoa salami, capicola, mortadella, provolone, lettuce, tomato, onion, oil & vinegar on crusty Italian bread.", ingredients: ["Salami", "Capicola", "Provolone", "Crusty Italian"] },
  { name: "Turkey Club Deluxe", img: itemTurkey, badge: "Crowd Favorite", desc: "House-roasted turkey, thick-cut bacon, lettuce, tomato, avocado and herb mayo stacked on toasted sourdough.", ingredients: ["Roast turkey", "Thick bacon", "Avocado", "Sourdough"] },
  { name: "Pastrami Special", img: itemPastrami, badge: "Deli Classic", desc: "Hand-piled hot pastrami with spicy brown mustard and a kosher pickle on rye, the way it's meant to be.", ingredients: ["Hot pastrami", "Rye", "Spicy mustard", "Pickle"] },
  { name: "Roast Beef Supreme", img: itemRoastbeef, badge: "House Made", desc: "Slow-roasted in-house beef with horseradish cream, cheddar, lettuce and tomato on a fresh kaiser roll.", ingredients: ["Slow-roasted beef", "Cheddar", "Horseradish cream", "Kaiser roll"] },
  { name: "Chicken Caesar Wrap", img: itemWrap, badge: "Light & Fresh", desc: "Grilled chicken, crisp romaine, shaved parmesan and house Caesar dressing in a soft flour tortilla.", ingredients: ["Grilled chicken", "Romaine", "Parmesan", "House Caesar"] },
  { name: "Homemade Potato Salad", img: itemPotato, badge: "Family Recipe", desc: "Grandma's recipe — Yukon golds, fresh chives, celery, and a touch of mustard. The perfect side.", ingredients: ["Yukon golds", "Chives", "Celery", "Whole-grain mustard"] },
];

function Signature() {
  return (
    <section className="py-24 sm:py-32 bg-secondary/40">
      <div className="container-deli">
        <SectionEyebrow>Signature Items</SectionEyebrow>
        <SectionHeading>
          The plates that <em className="italic text-primary">made our name</em>.
        </SectionHeading>

        <div className="mt-16 space-y-20 lg:space-y-28">
          {SIGNATURE.map((item, i) => (
            <SignatureRow key={item.name} {...item} reverse={i % 2 === 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SignatureRow({
  name,
  img,
  badge,
  desc,
  ingredients,
  reverse,
}: {
  name: string;
  img: string;
  badge: string;
  desc: string;
  ingredients: string[];
  reverse?: boolean;
}) {
  const { ref, shown } = useReveal<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 transition-all duration-700 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${reverse ? "lg:[&>div:first-child]:order-2" : ""}`}
    >
      <div className="relative">
        <div className="absolute -inset-4 -z-10 rounded-[2rem] bg-primary/8 blur-2xl" />
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src={img}
            alt={name}
            loading="lazy"
            className="h-[420px] w-full object-cover transition-transform duration-1000 hover:scale-105"
          />
        </div>
      </div>
      <div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
          <Star className="h-3 w-3 fill-primary" /> {badge}
        </span>
        <h3 className="mt-4 font-display text-4xl font-bold sm:text-5xl">{name}</h3>
        <p className="mt-4 text-lg text-muted-foreground">{desc}</p>
        <ul className="mt-6 flex flex-wrap gap-2">
          {ingredients.map((ing) => (
            <li
              key={ing}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground"
            >
              {ing}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const GALLERY = [
  { src: galleryStaff, alt: "Staff slicing fresh meat behind the counter", h: "tall" },
  { src: itemPastrami, alt: "Hot pastrami on rye", h: "short" },
  { src: galleryBread, alt: "Fresh artisan bread loaves", h: "tall" },
  { src: catering, alt: "Catering platter of sandwiches", h: "short" },
  { src: galleryCase, alt: "Cured meats and cheese display case", h: "tall" },
  { src: menuSpecial, alt: "Daily special chalkboard and sandwich", h: "short" },
  { src: itemItalian, alt: "Italian sub", h: "tall" },
  { src: menuSalad, alt: "Fresh garden salad", h: "short" },
];

function Gallery() {
  const [open, setOpen] = useState<string | null>(null);
  return (
    <section id="gallery" className="py-24 sm:py-32 bg-background">
      <div className="container-deli">
        <SectionEyebrow>Gallery</SectionEyebrow>
        <SectionHeading>Step inside the deli.</SectionHeading>

        <div className="mt-14 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {GALLERY.map((g, i) => (
            <button
              key={i}
              onClick={() => setOpen(g.src)}
              className={`group relative overflow-hidden rounded-2xl ${
                g.h === "tall" ? "row-span-2 aspect-[3/5]" : "aspect-square"
              }`}
            >
              <img
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-charcoal/0 transition-colors group-hover:bg-charcoal/30" />
            </button>
          ))}
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] grid place-items-center bg-black/85 p-6 animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <button
            className="absolute right-6 top-6 grid h-11 w-11 place-items-center rounded-full bg-white/10 text-white backdrop-blur"
            aria-label="Close"
          >
            <X />
          </button>
          <img src={open} alt="" className="max-h-[85vh] max-w-[90vw] rounded-2xl object-contain" />
        </div>
      )}
    </section>
  );
}

const REVIEWS = [
  { name: "Sarah M.", text: "The best Italian sub in town, hands down. I've been a regular for 8 years and they still remember my order. Pure neighborhood magic.", repeat: true },
  { name: "James T.", text: "Catered our office holiday party — platters were beautiful, hit on time, and disappeared in minutes. We've already booked them for next year.", repeat: false },
  { name: "Elena R.", text: "Their pastrami sandwich is genuinely the best I've had outside of New York. Hand-piled, perfect rye, real spicy mustard. Worth every penny.", repeat: true },
  { name: "Marcus W.", text: "Quick, friendly, and consistently excellent. Their breakfast sandwiches start my workday right at least three times a week.", repeat: true },
];

function Reviews() {
  return (
    <section id="reviews" className="py-24 sm:py-32 bg-charcoal text-white">
      <div className="container-deli">
        <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">
              Reviews
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
              Loved by the neighborhood.
            </h2>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-baseline gap-3">
                <span className="font-display text-6xl font-bold">4.9</span>
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
              <p className="mt-2 text-sm text-white/70">
                Based on 412+ reviews across Google, Yelp & Facebook
              </p>
              <div className="mt-4 grid grid-cols-3 gap-3 text-center">
                <SmallStat n="412" l="Reviews" />
                <SmallStat n="98%" l="Recommend" />
                <SmallStat n="20yr" l="In business" />
              </div>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {REVIEWS.map((r) => (
              <article
                key={r.name}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur transition hover:bg-white/[0.07]"
              >
                <div className="flex">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-white/85">"{r.text}"</p>
                <div className="mt-5 flex items-center justify-between border-t border-white/10 pt-4">
                  <p className="font-semibold">{r.name}</p>
                  {r.repeat && (
                    <span className="inline-flex items-center gap-1 rounded-full bg-primary/20 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-200">
                      <Heart className="h-3 w-3" /> Regular
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SmallStat({ n, l }: { n: string; l: string }) {
  return (
    <div className="rounded-xl bg-white/5 p-3">
      <p className="font-display text-xl font-bold">{n}</p>
      <p className="text-[10px] uppercase tracking-widest text-white/60">{l}</p>
    </div>
  );
}

const CATERING_PACKAGES = [
  { name: "Office Lunch", price: "$12 / person", items: ["Assorted sandwich platter", "Choice of 2 salads", "Cookies & chips", "Beverages"] },
  { name: "Executive Spread", price: "$18 / person", items: ["Premium sandwich selection", "Soup of the day", "Cheese & fruit board", "Dessert tray"] },
  { name: "Party Trays", price: "from $65", items: ["Serves 8-12 guests", "Custom sandwich mix", "Pickles & olives", "Bread & condiments"] },
];

function Catering() {
  return (
    <section id="catering" className="py-24 sm:py-32 bg-background">
      <div className="container-deli grid gap-14 lg:grid-cols-2 lg:items-center">
        <div className="relative overflow-hidden rounded-3xl shadow-xl">
          <img
            src={catering}
            alt="A large catering platter of assorted gourmet sandwiches"
            loading="lazy"
            className="h-[540px] w-full object-cover"
          />
          <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-background/90 p-5 backdrop-blur">
            <p className="font-display text-lg font-semibold">From boardrooms to backyards.</p>
            <p className="text-sm text-muted-foreground">
              Office lunches, corporate events, family gatherings, holiday platters & party trays.
            </p>
          </div>
        </div>

        <div>
          <SectionEyebrow>Catering Services</SectionEyebrow>
          <SectionHeading>
            We make your event <em className="italic text-primary">unforgettable</em>.
          </SectionHeading>
          <p className="mt-4 text-muted-foreground">
            Beautiful platters built by hand, delivered on time, priced fairly. We cater
            for groups of 8 to 800 — just give us 24 hours notice and we'll handle the rest.
          </p>

          <div className="mt-8 grid gap-4">
            {CATERING_PACKAGES.map((p) => (
              <div
                key={p.name}
                className="group flex items-start justify-between gap-6 rounded-2xl border border-border bg-card p-5 transition hover:border-primary/40 hover:shadow-md"
              >
                <div>
                  <p className="font-display text-xl font-semibold">{p.name}</p>
                  <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground">
                    {p.items.map((it) => (
                      <li key={it} className="before:mr-1.5 before:content-['•'] before:text-primary">
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
                <p className="shrink-0 font-display text-lg font-semibold text-primary">
                  {p.price}
                </p>
              </div>
            ))}
          </div>

          <a
            href="mailto:mattcruz4545@gmail.com"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-[var(--deli-red-deep)]"
          >
            Request Catering Quote <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const hours = [
    ["Monday – Friday", "7:00 AM – 8:00 PM"],
    ["Saturday", "8:00 AM – 8:00 PM"],
    ["Sunday", "8:00 AM – 4:00 PM"],
  ];
  return (
    <section id="contact" className="py-24 sm:py-32 bg-secondary/50">
      <div className="container-deli">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow center>Visit Us</SectionEyebrow>
          <SectionHeading center>Find us on the corner.</SectionHeading>
          <p className="mt-4 text-muted-foreground">
            Right where Maple meets Elm — across from the post office, two blocks from the
            train station. Free parking out back.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          <InfoCard
            icon={MapPin}
            title="Address"
            lines={["412 Maple Avenue", "Greenfield, NY 10001"]}
            cta={{ label: "Get Directions", href: "https://maps.google.com" }}
          />
          <InfoCard
            icon={Clock}
            title="Hours"
            lines={hours.map(([a, b]) => `${a} · ${b}`)}
          />
          <InfoCard
            icon={Phone}
            title="Contact"
            lines={["(555) 123-4567", "mattcruz4545@gmail.com"]}
            cta={{ label: "Call Now", href: "tel:+15551234567" }}
          />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[2fr_1fr]">
          <div className="relative h-[360px] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <iframe
              title="Cruz Deli map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-74.01%2C40.71%2C-73.99%2C40.72&layer=mapnik"
              className="h-full w-full"
              loading="lazy"
            />
          </div>
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm">
            <h3 className="font-display text-xl font-semibold">Good to know</h3>
            <ul className="mt-4 space-y-4 text-sm text-muted-foreground">
              <li className="flex gap-3">
                <Car className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span><strong className="text-foreground">Free parking</strong> in the lot behind the building and on Maple Ave after 9am.</span>
              </li>
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span><strong className="text-foreground">Two blocks</strong> from Greenfield Station, across from the post office.</span>
              </li>
              <li className="flex gap-3">
                <Truck className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <span><strong className="text-foreground">Local delivery</strong> within 3 miles for catering orders over $75.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon: Icon,
  title,
  lines,
  cta,
}: {
  icon: typeof MapPin;
  title: string;
  lines: string[];
  cta?: { label: string; href: string };
}) {
  return (
    <div className="rounded-3xl border border-border bg-card p-7 shadow-sm transition hover:shadow-md">
      <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="mt-5 font-display text-2xl font-semibold">{title}</h3>
      <div className="mt-3 space-y-1 text-sm text-muted-foreground">
        {lines.map((l) => (
          <p key={l}>{l}</p>
        ))}
      </div>
      {cta && (
        <a
          href={cta.href}
          className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          {cta.label} <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function CTA() {
  return (
    <section className="relative overflow-hidden">
      <img
        src={heroImg}
        alt=""
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
      <div className="relative container-deli py-24 sm:py-32 text-white">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-amber-200/80">Ready when you are</span>
          <h2 className="mt-4 font-display text-5xl font-bold leading-tight sm:text-6xl">
            Ready for Your Next <em className="italic text-amber-100">Favorite</em> Sandwich?
          </h2>
          <p className="mt-5 max-w-lg text-white/85">
            Walk in, call ahead, or order catering. Two decades of trust from neighbors
            who keep coming back — we'll make sure you do too.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition hover:bg-[var(--deli-red-deep)]"
            >
              Order Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="tel:+15551234567"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <Phone className="h-4 w-4" /> Call Us
            </a>
            <a
              href="https://maps.google.com"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/5 px-7 py-4 text-sm font-semibold text-white backdrop-blur hover:bg-white/15"
            >
              <MapPin className="h-4 w-4" /> Get Directions
            </a>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/75">
            <span className="inline-flex items-center gap-2"><Star className="h-4 w-4 fill-amber-400 text-amber-400" /> 4.9 stars · 412 reviews</span>
            <span className="inline-flex items-center gap-2"><Users className="h-4 w-4" /> 20+ years serving locally</span>
            <span className="inline-flex items-center gap-2"><Heart className="h-4 w-4" /> Family-owned</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-charcoal text-white/80">
      <div className="container-deli py-16 grid gap-12 lg:grid-cols-4">
        <div className="lg:col-span-2 max-w-md">
          <a href="#home" className="flex items-center gap-2 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-full bg-primary">
              <Sandwich className="h-5 w-5" />
            </span>
            <span className="font-display text-xl font-bold">Cruz Deli</span>
          </a>
          <p className="mt-4 text-sm">
            Your family-owned local deli, serving fresh sandwiches, premium deli meats,
            homemade salads, and full-service catering since 2003.
          </p>
          <div className="mt-6 flex gap-3">
            <SocialBtn icon={Instagram} />
            <SocialBtn icon={Facebook} />
            <SocialBtn icon={Mail} />
          </div>
        </div>

        <div>
          <p className="font-display text-white text-lg">Explore</p>
          <ul className="mt-4 space-y-2 text-sm">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">{n.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-display text-white text-lg">Visit</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>412 Maple Avenue</li>
            <li>Greenfield, NY 10001</li>
            <li>(555) 123-4567</li>
            <li className="pt-2 text-white/60">Mon–Fri · 7am – 8pm</li>
            <li className="text-white/60">Sat · 8am – 8pm</li>
            <li className="text-white/60">Sun · 8am – 4pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-deli flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/60 sm:flex-row">
          <p>© {new Date().getFullYear()} Cruz Deli. All rights reserved.</p>
          <p>Crafted with care in the neighborhood.</p>
        </div>
      </div>
    </footer>
  );
}

function SocialBtn({ icon: Icon }: { icon: typeof Instagram }) {
  return (
    <a
      href="#"
      className="grid h-10 w-10 place-items-center rounded-full border border-white/15 text-white/80 transition hover:border-white/40 hover:text-white"
    >
      <Icon className="h-4 w-4" />
    </a>
  );
}

function SectionEyebrow({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <span
      className={`text-xs font-semibold uppercase tracking-[0.3em] text-primary ${center ? "block text-center" : ""}`}
    >
      {children}
    </span>
  );
}

function SectionHeading({ children, center }: { children: React.ReactNode; center?: boolean }) {
  return (
    <h2
      className={`mt-4 font-display text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl md:text-6xl ${
        center ? "text-center" : ""
      }`}
    >
      {children}
    </h2>
  );
}

function Index() {
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <MenuHighlights />
        <About />
        <WhyChoose />
        <Signature />
        <Gallery />
        <Reviews />
        <Catering />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
