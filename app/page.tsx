import Image from "next/image";

import {
  ArrowRight,
  BadgeDollarSign,
  CalendarX2,
  Check,
  Clock3,
  FlaskConical,
  PackageCheck,
  Plane,
  Sparkles,
  Truck,
  UserRound,
} from "lucide-react";

import { ImagePlaceholder } from "@/components/image-placeholder";
import { BmiCalculator } from "@/components/bmi-calculator";
import { InteractiveCard } from "@/components/interactive-card";
import { MobileMenu } from "@/components/mobile-menu";
import { MotionObserver } from "@/components/motion-observer";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const services = [
  //   https://coolors.co/004777-a30000-ff7700
  //   alternatives: https://coolors.co/1c3144-d00000-ffba08
  {
    title: "Weight loss, built around you",
    subtitle: "Personalized care for lasting progress.",
    price: "From $99/mo*",
    tone: "from-[#002b49] via-[#004777] to-[#4b93bd]",
    textTone: "light",
    href: "/weight-loss",
    image: "Transparent product still life — injection pen and three GLP-1 medication vials, vertical 4:5 PNG",
    imageSrc: null,
    imageAlt: null,
    fullBleedImage: false,
    imagePair: {
      vial: "/images/weight-loss-vial.png",
      syringe: "/images/weight-loss-syringe.png",
    },
  },
  {
    title: "Fuller-looking hair starts here",
    subtitle: "Targeted treatments for healthier-looking growth.",
    price: "Plans from $83/mo",
    tone: "from-[#680000] via-[#A30000] to-[#df4c3c]",
    textTone: "light",
    href: "#get-started",
    image: "Transparent hair-care product still life — topical dropper, treatment bottle, and tablet pouch, vertical 4:5 PNG",
    imageSrc: "/images/hair-growth-card.png",
    imageAlt: "Person touching fuller dark hair",
    fullBleedImage: true,
    imagePair: null,
  },
  {
    title: "Sexual health, handled discreetly",
    subtitle: "Private care for confidence and connection.",
    price: "Plans from $49/mo",
    tone: "from-[#a84800] via-[#FF7700] to-[#ffbc5f]",
    textTone: "light",
    href: "#get-started",
    image: "Discreet sexual-health product still life — minimal tablet pack and unbranded prescription bottle, cool studio lighting, transparent PNG",
    imageSrc: "/images/sexual-health-card.png",
    imageAlt: "Hand holding a small blue tablet",
    fullBleedImage: true,
    imagePair: null,
  },
];

const faqs = [
  ["What states do you serve?", "Our online care programs are available across the United States, though specific treatments and medication options vary by state and clinical eligibility."],
  ["Do you take insurance?", "Insurance is not required. Programs use straightforward membership pricing, and eligible customers may use FSA or HSA funds for qualifying purchases."],
  ["What medications do your providers prescribe?", "A licensed provider reviews your health history and recommends a treatment only when appropriate. Available options vary by program, state, and individual needs."],
  ["Are prescriptions and medication included?", "Your personalized plan clearly states what is included before checkout. Provider support and expedited shipping are included with all displayed plans."],
  ["How quickly can I get started?", "Most people complete the online intake in a few minutes. A provider then reviews the information and follows up with next steps."],
];

function ArrowLink({ label = "Learn more", light = false }: { label?: string; light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2 text-[11px] font-bold uppercase tracking-[0.15em] ${light ? "text-white" : "text-foreground"}`}>
      {label}
      <span className={`grid h-7 w-7 place-items-center rounded-full border transition-transform duration-200 group-hover:translate-x-1 group-focus-visible:translate-x-1 ${light ? "border-white/55" : "border-foreground/30"}`}>
        <ArrowRight className="h-3.5 w-3.5" />
      </span>
    </span>
  );
}

export default function Home() {
  return (
    <main className="overflow-hidden bg-[#f9f9fa]">
      <MotionObserver />
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-4 focus:py-2">
        Skip to main content
      </a>

      <div className="bg-[#4E80EE] px-4 py-2.5 text-center text-xs font-light text-white">
        Free expedited shipping on all orders
      </div>

      <header className="sticky top-0 z-50 border-b border-black/[0.04] bg-[#f9f9fa]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[58px] max-w-[1400px] items-center justify-between px-5 sm:h-[74px] lg:px-8">
          <a href="#" className="font-serif text-[30px] font-bold leading-none tracking-[-0.06em] sm:text-[36px]" aria-label="Apoth home">
            apoth
          </a>
          <nav className="hidden items-center gap-10 text-sm font-semibold lg:flex" aria-label="Primary navigation">
            <a className="transition-opacity hover:opacity-55" href="/weight-loss">Weight Loss</a>
            <a className="transition-opacity hover:opacity-55" href="#services">Strength</a>
            <a className="transition-opacity hover:opacity-55" href="#faq">More</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex"><a href="#get-started">Get started</a></Button>
            <Button asChild variant="outline" className="hidden px-5 sm:inline-flex">
              <a href="#footer"><UserRound className="h-4 w-4" /> Login</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </header>

      <div id="main-content">
        <section id="services" className="mx-auto max-w-[1270px] px-5 pb-10 pt-5 sm:pt-16 lg:px-6">
          <div className="grid items-center gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:gap-10">
            <div className="animate-fade-up">
              <h1 className="display-tight max-w-[720px] text-[42px] font-normal sm:font-normal sm:text-[40px] lg:text-[64px]">
                Better health has
                <br /> never been easier
              </h1>
              <p className="mt-2 text-base font-thin tracking-[-0.02em] text-foreground/65 sm:mt-3 sm:text-xl">Simple online care for weight management, hair loss, and sexual wellness.</p>
            </div>
            <ul className="space-y-2 pb-0 text-sm text-foreground/65 sm:space-y-3 sm:pb-2 sm:text-base lg:justify-self-end">
              <li className="flex items-center gap-3"><BadgeDollarSign className="h-4 w-4 text-foreground sm:h-5 sm:w-5" /> Transparent pricing, no membership fees</li>
              <li className="flex items-center gap-3"><Plane className="h-4 w-4 text-foreground sm:h-5 sm:w-5" /> Free shipping on all orders</li>
              <li className="flex items-center gap-3"><CalendarX2 className="h-4 w-4 text-foreground sm:h-5 sm:w-5" /> Pause or cancel anytime</li>
            </ul>
          </div>

          <div className="mt-8 grid gap-3 sm:mt-12 sm:gap-4 lg:grid-cols-3">
            {services.map((service, index) => (
              <InteractiveCard
                key={service.title}
                href={service.href}
                ariaLabel={`Explore ${service.title}`}
                glow={service.textTone === "dark" ? "dark" : "light"}
                revealDelay={index * 90}
                className={`relative min-h-[260px] overflow-hidden rounded-[22px] bg-gradient-to-br ${service.tone} p-6 sm:min-h-[380px] sm:rounded-[24px] sm:p-7 ${service.textTone === "dark" ? "text-[#191816]" : "text-white"} ${service.fullBleedImage ? "[--card-hover-scale:1.01]" : ""}`}
              >
                <div className="relative z-20 max-w-[220px]">
                  <h2 className="text-[28px] font-bold leading-[0.98] tracking-[-0.045em]">{service.title}</h2>
                  <p className={`mt-2 text-sm ${service.textTone === "dark" ? "text-[#191816]/70" : "text-white/80"}`}>{service.subtitle}</p>
                  <p className={`mt-1 text-xs ${service.textTone === "dark" ? "text-[#191816]/55" : "text-white/65"}`}>{service.price}</p>
                </div>
                {service.imagePair ? (
                  <div className="pointer-events-none absolute bottom-1 right-[-10px] z-10 h-[205px] w-[62%] sm:bottom-2 sm:right-[-18px] sm:h-[295px] sm:w-[68%]">
                    <Image
                      src={service.imagePair.vial}
                      alt="Apoth tirzepatide vial"
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 15vw, 44vw"
                      className="!left-[20%] !top-[22%] !h-[76%] !w-[58%] rotate-[-11deg] scale-[1.38] object-contain object-center transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-2 group-hover:rotate-[-16deg] group-hover:scale-[1.48] group-focus-visible:translate-x-1 group-focus-visible:-translate-y-2 group-focus-visible:rotate-[-16deg] group-focus-visible:scale-[1.48] sm:!left-[16%] sm:!top-[18%] sm:!h-[78%] sm:scale-[1.56] sm:group-hover:-translate-y-3 sm:group-hover:scale-[1.7] sm:group-focus-visible:-translate-y-3 sm:group-focus-visible:scale-[1.7] motion-reduce:transition-none"
                    />
                    <Image
                      src={service.imagePair.syringe}
                      alt="Medication syringe"
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 13vw, 38vw"
                      className="!left-[36%] !top-[8%] !h-[102%] !w-[48%] rotate-[9deg] scale-[1.38] object-contain object-center transition-transform duration-700 ease-out group-hover:translate-x-1 group-hover:-translate-y-3 group-hover:rotate-[14deg] group-hover:scale-[1.48] group-focus-visible:translate-x-1 group-focus-visible:-translate-y-3 group-focus-visible:rotate-[14deg] group-focus-visible:scale-[1.48] sm:!left-[34%] sm:!top-[2%] sm:!h-[105%] sm:scale-[1.56] sm:group-hover:-translate-y-4 sm:group-hover:scale-[1.7] sm:group-focus-visible:-translate-y-4 sm:group-focus-visible:scale-[1.7] motion-reduce:transition-none"
                    />
                  </div>
                ) : service.imageSrc && service.fullBleedImage ? (
                  <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt ?? ""}
                      fill
                      sizes="(min-width: 1024px) 31vw, 92vw"
                      className="origin-bottom-right scale-[0.82] object-contain object-right-bottom transition-transform duration-700 ease-out group-hover:scale-[0.84] group-focus-visible:scale-[0.84] sm:scale-95 sm:group-hover:scale-[0.975] sm:group-focus-visible:scale-[0.975] motion-reduce:transition-none"
                    />
                  </div>
                ) : service.imageSrc ? (
                  <div className="absolute bottom-12 right-4 z-10 h-[245px] w-[52%] overflow-hidden rounded-2xl">
                    <Image
                      src={service.imageSrc}
                      alt={service.imageAlt ?? ""}
                      fill
                      priority={index === 0}
                      sizes="(min-width: 1024px) 22vw, 56vw"
                      className="scale-125 object-contain object-center transition-transform duration-500 ease-out group-hover:scale-[1.35] group-focus-visible:scale-[1.35] motion-reduce:transition-none"
                    />
                  </div>
                ) : (
                  <ImagePlaceholder dark compact label={service.image} className="absolute bottom-12 right-4 z-10 h-[245px] w-[52%] rounded-2xl bg-white/5" />
                )}
                <div className="absolute bottom-5 left-6 z-20 sm:bottom-6 sm:left-7"><ArrowLink light={service.textTone !== "dark"} /></div>
              </InteractiveCard>
            ))}
          </div>

        </section>

        <div className="overflow-hidden border-y border-black/[0.04] bg-[#e8f2e9] py-4">
          <div className="marquee-track flex w-max animate-marquee items-center">
            {[0, 1].map((copy) => (
              <div key={copy} className="flex items-center gap-12 pr-12 text-xs text-foreground/70 md:gap-20 md:pr-20">
                <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free & discreet shipping</span>
                <span className="flex items-center gap-2"><FlaskConical className="h-4 w-4" /> Compounded in 503a pharmacies</span>
                <span className="flex items-center gap-2"><Clock3 className="h-4 w-4" /> 24/7 provider messaging</span>
                <span className="flex items-center gap-2"><Sparkles className="h-4 w-4" /> Customized to your needs</span>
              </div>
            ))}
          </div>
        </div>

        <section id="weight-loss" className="bg-[#f0f0f2] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1270px] gap-12 px-5 lg:grid-cols-2 lg:items-center lg:px-6">
            <ImagePlaceholder label="Bright editorial lifestyle photo — confident adult in motion, full-body crop, soft daylight, portrait 4:5" className="min-h-[520px] rounded-[28px] bg-[#e7e7e9] lg:min-h-[680px]" />
            <div className="lg:pl-12">
              <p className="eyebrow text-foreground/45">Weight management</p>
              <h2 className="display-tight mt-4 max-w-xl text-[47px] font-bold sm:text-[62px]">Lose weight with a plan made just for you</h2>
              <ul className="mt-9 space-y-5 text-base text-foreground/70">
                {[
                  "Same-day online provider visits",
                  "Access to leading prescription options",
                  "Ongoing clinical support and refills",
                  "FSA & HSA eligible with all plans",
                ].map((item) => <li key={item} className="flex gap-3"><Check className="mt-0.5 h-5 w-5 shrink-0" /> {item}</li>)}
              </ul>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button asChild size="lg"><a href="#get-started">Get started</a></Button>
                <Button asChild size="lg" variant="outline"><a href="#bmi">See if you&apos;re eligible</a></Button>
              </div>
              <p className="mt-8 max-w-lg text-[10px] leading-4 text-foreground/40">*Prescription treatment requires an online consultation with a licensed provider. Results vary. Compounded medications are not FDA-approved.</p>
            </div>
          </div>

          <div id="bmi" className="mx-auto mt-24 grid max-w-[1270px] gap-5 px-5 lg:grid-cols-[0.9fr_1.1fr] lg:px-6">
            <BmiCalculator />
            <div className="relative overflow-hidden rounded-[28px] bg-white p-8 shadow-soft sm:p-12">
              <div className="relative z-10 max-w-sm">
                <p className="text-sm text-foreground/50">Members with a similar starting point could lose</p>
                <p className="mt-2 text-[68px] font-bold leading-none tracking-[-0.07em]">30<span className="ml-1 text-3xl">lbs</span></p>
                <p className="mt-5 text-xs leading-5 text-foreground/45">This illustration is not a prediction or guarantee. A provider can help you choose an appropriate plan.</p>
              </div>
              <div className="mt-10 flex h-28 items-end gap-2" aria-hidden="true">
                {[44, 66, 53, 90, 63, 78, 55, 98, 75, 58, 84, 70, 49, 66, 45].map((height, i) => <span key={i} className="w-full rounded-full bg-[#a8cd83]" style={{ height: `${height}%` }} />)}
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="bg-[#ededf0] py-20 sm:py-28">
          <div className="mx-auto grid max-w-[1170px] gap-12 px-5 lg:grid-cols-[0.65fr_1fr] lg:px-6">
            <div>
              <p className="eyebrow text-foreground/45">Good to know</p>
              <h2 className="display-tight mt-4 text-[50px] font-bold sm:text-[64px]">Questions, answered</h2>
              <p className="mt-6 max-w-sm text-sm leading-6 text-foreground/55">Learn how online care works, what your plan includes, and what to expect next.</p>
            </div>
            <Accordion type="single" collapsible className="space-y-3">
              {faqs.map(([question, answer], index) => (
                <AccordionItem key={question} value={`item-${index}`}>
                  <AccordionTrigger>{question}</AccordionTrigger>
                  <AccordionContent>{answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <section id="get-started" className="bg-[#f5df75] px-5 py-20 text-center sm:py-24">
          <div className="mx-auto max-w-3xl">
            <Sparkles className="mx-auto h-8 w-8" />
            <h2 className="display-tight mt-5 text-[50px] font-bold sm:text-[68px]">Feel more like yourself</h2>
            <p className="mx-auto mt-6 max-w-xl text-lg text-foreground/65">Tell us about your goals and connect with a licensed provider online.</p>
            <Button asChild size="lg" className="mt-8"><a href="#services">Explore treatments <ArrowRight className="h-4 w-4" /></a></Button>
          </div>
        </section>
      </div>

      <footer id="footer" className="bg-[#1e1e20] px-5 py-16 text-white lg:px-8">
        <div className="mx-auto max-w-[1270px]">
          <div className="grid gap-12 md:grid-cols-[1.2fr_2fr]">
            <div>
              <div className="font-serif text-[44px] font-bold leading-none tracking-[-0.06em]">eden</div>
              <p className="mt-6 text-sm text-white/60">Sign up to receive practical health tips.</p>
              <div className="mt-4 flex max-w-sm rounded-full border border-white/15 p-1">
                <span className="flex-1 px-4 py-2 text-sm text-white/35">Enter your email</span>
                <Button variant="secondary" size="sm">Submit</Button>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-8 text-sm sm:grid-cols-3">
              {[
                ["Popular", "GLP-1 Treatments", "Weight Management", "Sermorelin", "NAD+"],
                ["Company", "About Eden", "Our Blog", "Reviews", "FAQs", "Careers"],
                ["Legal", "Terms & Conditions", "Privacy Policy", "Safety Information", "Your Privacy Choices"],
              ].map(([heading, ...links]) => (
                <div key={heading}>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/35">{heading}</p>
                  <ul className="mt-5 space-y-3 text-white/60">{links.map((link) => <li key={link}><a className="transition-colors hover:text-white" href="#">{link}</a></li>)}</ul>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-16 flex flex-col gap-5 border-t border-white/10 pt-7 text-[11px] text-white/35 sm:flex-row sm:items-center sm:justify-between">
            <span>© 2026 Eden Health International Inc. All rights reserved.</span>
            <span className="flex items-center gap-2"><PackageCheck className="h-4 w-4" /> Compounded in the U.S.A.</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
