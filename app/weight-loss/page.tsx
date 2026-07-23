import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowRight,
  Check,
  ChevronDown,
  CircleCheck,
  Menu,
  MessagesSquare,
  ShieldCheck,
  Sparkles,
  Target,
  TrendingDown,
} from "lucide-react";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Tirzepatide Vial | Apoth Weight Loss",
  description:
    "Provider-guided weight loss care with a personalized tirzepatide treatment plan.",
};

const features = [
  {
    title: "Provider guided",
    copy: "Your treatment is reviewed and prescribed by a licensed healthcare provider.",
    visual: "product",
  },
  {
    title: "Targets two hormones",
    copy: "Tirzepatide works on both GLP-1 and GIP receptors, not just one.",
    visual: "molecules",
  },
  {
    title: "Built for progress",
    copy: "A personalized plan pairs treatment with ongoing clinical support.",
    visual: "progress",
  },
  {
    title: "One simple routine",
    copy: "A once-weekly injection that fits into your schedule.",
    visual: "routine",
  },
] as const;

const steps = [
  {
    title: "Tell us about yourself",
    copy: "Answer a few questions about your health, history, and weight loss goals.",
  },
  {
    title: "Provider evaluation",
    copy: "A licensed provider reviews your intake and determines what treatment may be right for you.",
  },
  {
    title: "Your personalized plan",
    copy: "If prescribed, you’ll receive a plan tailored to your goals, needs, and medical history.",
  },
  {
    title: "Start your care",
    copy: "Medication ships discreetly to your door, with provider support available along the way.",
  },
] as const;

const supportItems = [
  "A personalized treatment plan",
  "Unlimited messaging with licensed providers",
  "Ongoing progress and dosage check-ins",
  "Free, discreet medication delivery",
] as const;

const faqs = [
  {
    question: "What is tirzepatide?",
    answer:
      "Tirzepatide is a prescription medication that acts on GLP-1 and GIP receptors. A licensed provider can determine whether it is appropriate for your health needs.",
  },
  {
    question: "How do I take the medication?",
    answer:
      "Tirzepatide is generally injected under the skin once weekly. Your treatment plan includes individualized instructions from your provider.",
  },
  {
    question: "What is included in my plan?",
    answer:
      "Your plan includes provider evaluation, ongoing clinical messaging, progress check-ins, and free discreet delivery. Medication availability and pricing are shown before checkout.",
  },
  {
    question: "Can I use FSA or HSA funds?",
    answer:
      "Eligible purchases may be paid for using FSA or HSA funds. Coverage and eligibility vary by plan provider.",
  },
  {
    question: "Is a prescription required?",
    answer:
      "Yes. Treatment is only available when prescribed by a licensed provider after reviewing your medical history and eligibility.",
  },
] as const;

function ProductVisual({
  variant,
}: {
  variant: (typeof features)[number]["visual"];
}) {
  if (variant === "product") {
    return (
      <div className={styles.featureProduct}>
        <Image
          src="/images/weight-loss-card-transparent.png"
          alt=""
          fill
          sizes="(min-width: 1100px) 22vw, 80vw"
          className={styles.containImage}
        />
        <span className={styles.approvalSeal}>
          <ShieldCheck aria-hidden="true" />
          Provider
          <br />
          reviewed
        </span>
      </div>
    );
  }

  if (variant === "molecules") {
    return (
      <div className={styles.moleculeVisual} aria-hidden="true">
        <span className={styles.molecule}>
          <i />
          <i />
          <i />
          <i />
        </span>
        <span className={styles.molecule}>
          <i />
          <i />
          <i />
          <i />
        </span>
      </div>
    );
  }

  if (variant === "progress") {
    return (
      <div className={styles.progressVisual} aria-hidden="true">
        <TrendingDown />
        <div>
          <span>YOUR PLAN</span>
          <strong>On track</strong>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.routineVisual}>
      <Image
        src="/images/weight-loss-vial.png"
        alt=""
        fill
        sizes="(min-width: 1100px) 16vw, 64vw"
        className={styles.containImage}
      />
      <span className={styles.weeklyTag}>once weekly</span>
    </div>
  );
}

export default function WeightLossPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#product">
        Skip to product
      </a>

      <header className={styles.header}>
        <a className={styles.logo} href="/" aria-label="Apoth home">
          apoth
        </a>
        <div className={styles.headerActions}>
          <a className={styles.login} href="#get-started">
            Log in
          </a>
          <button className={styles.menuButton} type="button" aria-label="Open navigation">
            <Menu aria-hidden="true" />
          </button>
        </div>
      </header>

      <section className={styles.hero} id="product">
        <div className={styles.productStage}>
          <Image
            src="/images/weight-loss-vial.png"
            alt="Apoth tirzepatide vial"
            fill
            loading="eager"
            fetchPriority="high"
            sizes="(min-width: 900px) 66vw, 100vw"
            className={styles.heroVial}
          />
          <span className={styles.stageSeal} aria-hidden="true">
            <ShieldCheck />
            <strong>Provider reviewed</strong>
            <small>personalized care</small>
          </span>
          <span className={styles.stageShadow} aria-hidden="true" />
          <div className={styles.thumbnails} aria-hidden="true">
            <span className={styles.activeThumb}>
              <Image
                src="/images/weight-loss-vial.png"
                alt=""
                fill
                sizes="44px"
                className={styles.containImage}
              />
            </span>
            <span>
              <Sparkles />
            </span>
            <span>
              <Image
                src="/images/weight-loss-syringe.png"
                alt=""
                fill
                sizes="44px"
                className={styles.containImage}
              />
            </span>
          </div>
        </div>

        <article className={styles.productCard}>
          <p className={styles.eligible}>FSA &amp; HSA eligible</p>
          <h1>Tirzepatide Vial</h1>
          <ul className={styles.benefits}>
            <li>Provider-guided GLP-1 treatment</li>
            <li>Personalized to your weight loss goals</li>
            <li>Take once a week</li>
          </ul>
          <div className={styles.actions}>
            <a className={styles.primaryButton} href="#get-started">
              Get started
            </a>
            <a className={styles.secondaryButton} href="#eligibility">
              See if I&apos;m eligible
            </a>
          </div>
          <a className={styles.safetyLink} href="#safety">
            Important safety information
          </a>
          <div className={styles.productDetails}>
            <details>
              <summary>
                Meet tirzepatide vial <ChevronDown aria-hidden="true" />
              </summary>
              <p>
                A once-weekly prescription treatment offered as part of a
                personalized weight loss care plan.
              </p>
            </details>
            <details>
              <summary>
                About the ingredient <ChevronDown aria-hidden="true" />
              </summary>
              <p>
                Tirzepatide acts on two naturally occurring hormone pathways:
                GLP-1 and GIP.
              </p>
            </details>
            <details>
              <summary>
                How to take <ChevronDown aria-hidden="true" />
              </summary>
              <p>
                Inject under the skin once each week, exactly as directed by
                your provider.
              </p>
            </details>
          </div>
        </article>
      </section>

      <section className={styles.featureSection}>
        <div className={styles.sectionHeadingRow}>
          <h2>GLP-1 care in a vial</h2>
          <a className={styles.smallCta} href="#get-started">
            Get started
          </a>
        </div>
        <div className={styles.featureGrid}>
          {features.map((feature) => (
            <article className={styles.featureCard} key={feature.title}>
              <ProductVisual variant={feature.visual} />
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
            </article>
          ))}
        </div>
        <p className={styles.disclaimer}>
          Prescription required. Treatment is provided only when a licensed
          clinician determines it is medically appropriate.
        </p>
      </section>

      <section className={styles.howItWorks} id="eligibility">
        <div className={styles.careVisual}>
          <div className={styles.careHalo} />
          <Image
            src="/images/weight-loss-card-transparent.png"
            alt="Apoth tirzepatide vial and syringe"
            fill
            sizes="(min-width: 900px) 36vw, 86vw"
            className={styles.careImage}
          />
          <div className={styles.providerNote}>
            <CircleCheck />
            <span>
              <small>PROVIDER REVIEW</small>
              Your care plan is ready
            </span>
          </div>
        </div>
        <div className={styles.steps}>
          <h2>How it works</h2>
          <ol>
            {steps.map((step, index) => (
              <li key={step.title}>
                <span>{index + 1}</span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.copy}</p>
                </div>
              </li>
            ))}
          </ol>
          <a className={styles.smallCta} href="#get-started">
            Start my intake
          </a>
        </div>
      </section>

      <section className={styles.supportSection}>
        <div className={styles.supportTiles} aria-hidden="true">
          <div>
            <MessagesSquare />
            <span>Care team</span>
          </div>
          <div className={styles.supportProduct}>
            <Image
              src="/images/weight-loss-vial.png"
              alt=""
              fill
              sizes="200px"
              className={styles.containImage}
            />
          </div>
          <div>
            <Target />
            <span>Weekly goals</span>
          </div>
        </div>
        <h2>
          Get complete support in
          <br /> one membership
        </h2>
        <p className={styles.supportIntro}>Access a connected ecosystem of care:</p>
        <div className={styles.supportList}>
          {supportItems.map((item) => (
            <div key={item}>
              <span>{item}</span>
              <Check aria-hidden="true" />
            </div>
          ))}
        </div>
        <a className={styles.smallCta} href="#get-started">
          Get started
        </a>
      </section>

      <section className={styles.compareSection}>
        <div className={styles.compareHeading}>
          <p>Personalized treatment</p>
          <h2>
            Care that meets
            <br /> you where you are
          </h2>
          <p>
            A provider reviews your intake to determine which available option
            may fit your goals, health history, and preferences.
          </p>
        </div>
        <div className={styles.compareCards}>
          <article>
            <div className={styles.compareProduct}>
              <Image
                src="/images/weight-loss-vial.png"
                alt="Apoth tirzepatide vial"
                fill
                sizes="260px"
                className={styles.containImage}
              />
            </div>
            <p>Weekly injection</p>
            <h3>Tirzepatide vial</h3>
            <dl>
              <div>
                <dt>How to take</dt>
                <dd>Once weekly</dd>
              </div>
              <div>
                <dt>Active ingredient</dt>
                <dd>Tirzepatide</dd>
              </div>
            </dl>
          </article>
          <article>
            <div className={styles.compareProduct}>
              <Image
                src="/images/weight-loss-syringe.png"
                alt="Medication syringe"
                fill
                sizes="260px"
                className={styles.containImage}
              />
            </div>
            <p>Personalized plan</p>
            <h3>Ongoing support</h3>
            <dl>
              <div>
                <dt>Check-ins</dt>
                <dd>On your schedule</dd>
              </div>
              <div>
                <dt>Care access</dt>
                <dd>Online</dd>
              </div>
            </dl>
          </article>
        </div>
      </section>

      <section className={styles.faqSection}>
        <div className={styles.faqIntro}>
          <h2>Frequently asked questions</h2>
          <a className={styles.smallCta} href="#get-started">
            Get started today
          </a>
        </div>
        <div className={styles.faqs}>
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>
                {faq.question}
                <span>+</span>
              </summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>

      <section className={styles.finalCta} id="get-started">
        <div>
          <p>Care built around you</p>
          <h2>Ready to take the next step?</h2>
          <a href="#product">
            Start my intake <ArrowRight aria-hidden="true" />
          </a>
        </div>
        <div className={styles.finalProduct}>
          <Image
            src="/images/weight-loss-card-transparent.png"
            alt="Apoth tirzepatide vial and syringe"
            fill
            sizes="(min-width: 800px) 44vw, 90vw"
            className={styles.containImage}
          />
        </div>
      </section>

      <footer className={styles.footer} id="safety">
        <div>
          <a className={styles.footerLogo} href="/">
            apoth
          </a>
          <p>Personalized care, thoughtfully delivered.</p>
        </div>
        <p>
          Prescription products require an online consultation with a licensed
          medical provider who will determine whether treatment is appropriate.
          Results vary. Compounded medications are not FDA-approved.
          FSA/HSA eligibility varies by plan provider.
        </p>
        <nav aria-label="Footer navigation">
          <a href="/">Home</a>
          <a href="#product">Weight loss</a>
          <a href="#safety">Safety information</a>
        </nav>
      </footer>
    </main>
  );
}
