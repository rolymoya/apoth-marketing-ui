import type { Metadata } from "next";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  CircleCheck,
  HeartHandshake,
  Instagram,
  Linkedin,
  MessageCircle,
  PackageCheck,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Truck,
  UserRound,
} from "lucide-react";

import { MobileMenu } from "@/components/mobile-menu";

import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Personalized GLP-1 Treatments | Apoth",
  description:
    "Provider-led weight management with personalized GLP-1 treatment options, ongoing support, and free expedited shipping.",
};

const quickFaqs = [
  {
    question: "What’s included with my plan?",
    answer:
      "Your plan includes an online health evaluation, a personalized care plan from a licensed provider, ongoing clinical messaging, and medication delivery when prescribed.",
  },
  {
    question: "What treatment options are available?",
    answer:
      "Licensed providers may consider compounded semaglutide or tirzepatide based on your health history, goals, state, and clinical eligibility.",
  },
  {
    question: "What if I need to cancel?",
    answer:
      "There are no long-term contracts. You can pause or cancel before your next renewal from your account.",
  },
];

const plans = [
  {
    title: "Personalized GLP-1\nInjections",
    price: "See which plan fits",
    featured: true,
  },
  {
    title: "Compounded Semaglutide",
    price: "$99/mo*",
    featured: false,
  },
  {
    title: "Compounded Tirzepatide",
    price: "$199/mo*",
    featured: false,
  },
];

const steps = [
  {
    title: "Tell us about your health and goals",
    copy: "Complete a short online intake so a licensed medical provider can understand your history, needs, and goals.",
    icon: Stethoscope,
  },
  {
    title: "Meet your provider online",
    copy: "Your provider reviews your information, answers questions, and determines whether treatment is appropriate for you.",
    icon: MessageCircle,
  },
  {
    title: "Receive care at your door",
    copy: "If prescribed, your medication ships free. Your care team stays available as your treatment progresses.",
    icon: Truck,
  },
];

const faqs = [
  ...quickFaqs,
  {
    question: "How do GLP-1 treatments support weight management?",
    answer:
      "GLP-1 medicines can help regulate appetite and blood sugar. A licensed provider will determine whether a treatment is appropriate for your individual health profile.",
  },
  {
    question: "What is compounded medication?",
    answer:
      "Compounded medications are prepared by licensed pharmacies for an individual patient based on a provider’s prescription. They are not reviewed or approved by the FDA for safety or effectiveness.",
  },
  {
    question: "Can my provider adjust my medication or dosage?",
    answer:
      "Yes. Your provider can review your progress and make clinically appropriate adjustments. Your care team is available for questions throughout your plan.",
  },
  {
    question: "Can I qualify if I have an existing health condition?",
    answer:
      "Eligibility is individual. A licensed provider will review your full health history and determine whether treatment is safe and appropriate for you.",
  },
  {
    question: "Is a long-term commitment necessary?",
    answer:
      "No. Apoth plans are flexible and can be paused or canceled before your next renewal. Consistency matters, so discuss any treatment changes with your care team.",
  },
];

const footerGroups = [
  ["Popular", "GLP-1 Treatments", "Weight Management", "Hair Growth", "Sexual Health"],
  ["Company", "About Apoth", "How it works", "Reviews", "FAQs", "Contact us"],
  ["Legal", "Terms & Conditions", "Privacy Policy", "Safety Information", "Your Privacy Choices"],
];

function ActionButtons({ compact = false }: { compact?: boolean }) {
  return (
    <div className={styles.actions} data-compact={compact ? "true" : "false"}>
      <a className={styles.primaryButton} href="#get-started">
        Get started
      </a>
      <a className={styles.secondaryButton} href="#how-it-works">
        See if you’re eligible
      </a>
    </div>
  );
}

function AccordionRow({ question, answer }: { question: string; answer: string }) {
  return (
    <details className={styles.accordionRow}>
      <summary>
        <span>{question}</span>
        <span className={styles.accordionIcon} aria-hidden="true" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}

export default function WeightLossPage() {
  return (
    <main className={styles.page}>
      <a className={styles.skipLink} href="#main-content">
        Skip to main content
      </a>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <a className={styles.logo} href="/" aria-label="Apoth home">
            apoth
          </a>
          <nav className={styles.nav} aria-label="Primary navigation">
            <a href="#treatments">Weight Loss</a>
            <a href="#how-it-works">How it works</a>
            <a href="#stories">Results</a>
            <a href="#faq">FAQs</a>
            <a href="#footer">More</a>
          </nav>
          <div className={styles.headerActions}>
            <a className={styles.headerCta} href="#get-started">
              Get started
            </a>
            <a className={styles.loginButton} href="#footer">
              <UserRound aria-hidden="true" /> Login
            </a>
            <MobileMenu
              links={[
                ["Weight Loss", "#treatments"],
                ["How it works", "#how-it-works"],
                ["Results", "#stories"],
                ["FAQs", "#faq"],
              ]}
              ctaHref="#get-started"
            />
          </div>
        </div>
      </header>

      <div id="main-content">
        <section className={styles.hero} id="product">
          <div className={styles.heroInner}>
            <div className={styles.heroVisual}>
              <Image
                src="/images/apoth-weight-loss-hero.png"
                alt="Unbranded weight management treatment vial and injector pens"
                fill
                priority
                sizes="(min-width: 1000px) 50vw, 94vw"
                className={styles.heroImage}
              />
              <span className={styles.stockPill}>
                <span /> In stock
              </span>
            </div>

            <div className={styles.heroDetails}>
              <h1><span>Personalized</span><span>GLP-1 Treatments</span></h1>
              <p className={styles.heroSubtitle}>A provider-led weight loss plan built around you</p>

              <div className={styles.pricingPanel}>
                <div className={styles.priceGrid}>
                  <div className={styles.priceOption}>
                    <span>Compounded<br />Semaglutide</span>
                    <strong>$99<small>/mo</small></strong>
                    <em>care included*</em>
                  </div>
                  <div className={styles.priceOption}>
                    <span>Compounded<br />Tirzepatide</span>
                    <strong>$199<small>/mo</small></strong>
                    <em>care included*</em>
                  </div>
                </div>
                <div className={styles.payLater}>
                  <span>Simple monthly pricing</span>
                </div>
                <a className={styles.wideButton} href="#get-started">Get started</a>
                <p className={styles.microcopy}>
                  *Price includes clinical care and medication only if prescribed. Eligibility is determined after an online consultation with a licensed provider. No insurance required.
                </p>
              </div>

              <div className={styles.benefitsPanel}>
                <div className={styles.segmentedControl} aria-label="Plan overview">
                  <span>Benefits</span>
                  <span>What’s included</span>
                </div>
                <ul className={styles.benefitList}>
                  <li><ShieldCheck /> Same price at every dose</li>
                  <li><PackageCheck /> Free expedited shipping</li>
                  <li><CircleCheck /> No long-term contracts</li>
                  <li><HeartHandshake /> Provider-led plans and ongoing support</li>
                </ul>
                <div className={styles.benefitFoot}>
                  <span><BadgeCheck /> Compounded in the U.S.A.</span>
                </div>
              </div>

              <div className={styles.quickFaqs}>
                {quickFaqs.map((faq) => <AccordionRow key={faq.question} {...faq} />)}
              </div>

              <div className={styles.trustRow} aria-label="Rated excellent by members">
                <strong>Excellent</strong>
                <span className={styles.trustStars} aria-hidden="true">★★★★★</span>
                <span>4.8 from verified members</span>
              </div>

              <div className={styles.heroLegal}>
                <p>The statements on this page have not been evaluated by the Food and Drug Administration. Compounded medications are not FDA-approved.</p>
                <a href="#safety">Important safety information</a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.treatments} id="treatments">
          <div className={styles.sectionInner}>
            <div className={styles.sectionHeading}>
              <h2>Medication made affordable</h2>
              <p>Without the need for insurance</p>
            </div>

            <div className={styles.treatmentGrid}>
              {plans.map((plan, index) => (
                <article
                  className={`${styles.treatmentCard} ${plan.featured ? styles.featuredTreatment : ""}`}
                  key={plan.title}
                >
                  <h3>{plan.title.split("\n").map((line) => <span key={line}>{line}</span>)}</h3>
                  <p>{plan.price}</p>
                  {plan.featured ? (
                    <Image
                      src="/images/apoth-weight-loss-hero.png"
                      alt="GLP-1 treatment options"
                      fill
                      sizes="(min-width: 900px) 30vw, 88vw"
                      className={styles.treatmentHeroImage}
                    />
                  ) : (
                    <div className={`${styles.vialWrap} ${index === 2 ? styles.vialLime : ""}`}>
                      <Image
                        src="/images/weight-loss-vial.png"
                        alt="Unbranded compounded medication vial"
                        fill
                        sizes="(min-width: 900px) 20vw, 70vw"
                        className={styles.vialImage}
                      />
                    </div>
                  )}
                  {plan.featured ? (
                    <a className={styles.cardButton} href="#get-started">See if you qualify</a>
                  ) : (
                    <a className={styles.safetyLink} href="#safety">Important safety information</a>
                  )}
                </article>
              ))}
            </div>

            <div className={styles.treatmentFinePrint}>
              <p>*Price includes medication only when prescribed. Clinical eligibility is determined by a licensed provider. Plans renew monthly and may be canceled before the next renewal.</p>
              <p>Apoth connects patients with licensed medical providers and state-licensed pharmacies. The FDA does not review compounded medications for safety or effectiveness. Results vary. Actual product packaging may differ.</p>
            </div>
            <div className={styles.carouselButtons} aria-hidden="true">
              <span><ArrowLeft /></span><span><ArrowRight /></span>
            </div>
          </div>
        </section>

        <section className={styles.howItWorks} id="how-it-works">
          <div className={styles.sectionInner}>
            <div className={styles.centerHeading}>
              <h2>Hit your health goals safely &amp; affordably in 3 simple steps</h2>
              <ActionButtons />
            </div>
            <div className={styles.stepsGrid}>
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <article className={styles.stepCard} key={step.title}>
                    <h3>{step.title}</h3>
                    <div className={styles.stepCopy}>
                      <span>Step<strong>{index + 1}</strong></span>
                      <p>{step.copy}</p>
                    </div>
                    <div className={styles.stepVisual} aria-hidden="true">
                      <span /><Icon />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className={styles.stories} id="stories">
          <div className={styles.sectionInner}>
            <div className={styles.centerHeading}>
              <h2>Real people, real<br />results, real support</h2>
              <ActionButtons />
            </div>
            <div className={styles.storyGrid}>
              <article className={styles.storyCard}>
                <span className={styles.verified}><BadgeCheck /> Verified member</span>
                <h3>Jamie lost <em>43 lbs</em> in 5 months</h3>
                <p>“I have more energy, I’m moving more with my family, and I feel confident in the routines I’m building. Having a care team there made all the difference.”</p>
                <div className={styles.progressVisual} aria-label="Illustration of steady progress over five months">
                  {["Start", "Month 1", "Month 2", "Month 3", "Month 4", "Now"].map((label, index) => (
                    <span key={label} style={{ height: `${35 + index * 11}%` }}><i>{label}</i></span>
                  ))}
                </div>
              </article>
              <article className={`${styles.storyCard} ${styles.storyCardAlt}`}>
                <div className={styles.memberPortraits} aria-hidden="true">
                  <span><UserRound /></span><span><Sparkles /></span>
                  <i>Before</i><i>After</i>
                </div>
                <span className={styles.verified}><BadgeCheck /> Verified member</span>
                <h3>Melissa lost <em>47 lbs</em> in 7 months</h3>
                <p>“This plan helped me feel in control again. The regular check-ins kept me focused, and the progress has changed how I show up every day.”</p>
              </article>
            </div>

            <article className={styles.clinicianQuote}>
              <div>
                <span className={styles.quoteMark}>“</span>
                <h3>Losing weight is an emotional, physical, and <em>personal challenge</em> that goes beyond diet and exercise</h3>
                <p>For many people, weight is connected to health factors that make traditional methods less effective. Clinician-guided treatment can help address those issues with a plan shaped around the whole person.</p>
                <strong>Dr. Maya Bennett</strong>
                <small>Medical Director, Apoth Weight Management</small>
              </div>
              <div className={styles.clinicianArt} aria-hidden="true">
                <span className={styles.clinicianHalo} />
                <Stethoscope />
                <i>Clinician-led care<br />from intake to follow-up</i>
              </div>
            </article>
          </div>
        </section>

        <section className={styles.medicalJourney}>
          <div className={styles.journeyVisual} aria-hidden="true">
            <Image src="/images/weight-loss-syringe.png" alt="" fill sizes="40vw" className={styles.journeyPen} />
            <Image src="/images/weight-loss-vial.png" alt="" fill sizes="30vw" className={styles.journeyVial} />
          </div>
          <div className={styles.journeyCopy}>
            <h2>Begin your medically-led journey today</h2>
            <ul>
              <li><Check /> 1-on-1 guidance from U.S.-licensed providers</li>
              <li><Check /> Ongoing consultations to optimize treatment</li>
              <li><Check /> Fast, discreet delivery and responsive support</li>
            </ul>
            <a className={styles.primaryButton} href="#get-started">Get started</a>
          </div>
        </section>

        <section className={styles.faqSection} id="faq">
          <div className={styles.faqInner}>
            <h2>Learn more about<br />GLP-1 Treatments</h2>
            <div className={styles.faqList}>
              {faqs.map((faq) => <AccordionRow key={faq.question} {...faq} />)}
            </div>
          </div>
        </section>

        <section className={styles.getStarted} id="get-started">
          <div className={styles.getStartedCard}>
            <div>
              <p className={styles.eyebrow}>Personalized care. Straightforward pricing.</p>
              <h2>GLP-1 Treatments</h2>
              <p className={styles.startPrice}>From $99/month*</p>
              <ul>
                <li><Check /> No long-term contracts</li>
                <li><Check /> Personalized plans</li>
                <li><Check /> On-demand medical support</li>
                <li><Check /> Free expedited shipping</li>
              </ul>
              <ActionButtons compact />
              <p className={styles.microcopy}>*Available only when prescribed after an online consultation. Medication and clinical care are included in the displayed plan price.</p>
            </div>
            <div className={styles.startArt} aria-hidden="true">
              <span>apoth</span>
              <Image src="/images/weight-loss-syringe.png" alt="" fill sizes="35vw" />
            </div>
          </div>
          <div className={styles.disclaimer} id="safety">
            <strong>Disclaimer</strong>
            <p>Only available if prescribed after an online consultation with a healthcare provider. Benefits described are based on published evidence and individual treatment plans. Plans may be canceled before the next renewal. Actual packaging may differ. The FDA does not review compounded medications for safety or effectiveness. Results vary. Contact your healthcare provider if you experience side effects.</p>
          </div>
        </section>
      </div>

      <footer className={styles.footer} id="footer">
        <div className={styles.footerInner}>
          <div className={styles.footerTop}>
            <div className={styles.footerSignup}>
              <a className={styles.footerLogo} href="/">apoth</a>
              <p>Sign up to receive practical health tips.</p>
              <form className={styles.emailForm}>
                <label className="sr-only" htmlFor="footer-email">Email address</label>
                <input id="footer-email" type="email" placeholder="Enter your email" />
                <button type="submit">Submit</button>
              </form>
              <small>By submitting your email, you agree to our Privacy Policy and consent to receive updates from Apoth.</small>
            </div>
            <div className={styles.footerLinks}>
              {footerGroups.map(([heading, ...links]) => (
                <div key={heading}>
                  <strong>{heading}</strong>
                  <ul>{links.map((link) => <li key={link}><a href="#">{link}</a></li>)}</ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.footerSocial}>
            <div><a href="#" aria-label="Apoth on Instagram"><Instagram /></a><a href="#" aria-label="Apoth on LinkedIn"><Linkedin /></a></div>
            <span><PackageCheck /> Compounded<br />in the U.S.A.</span>
          </div>

          <div className={styles.footerLegal}>
            <p><strong>Prescription process:</strong> Online evaluations with independent licensed medical professionals determine prescription appropriateness. Providers may prescribe FDA-approved or compounded medications based on patient needs and clinical judgment.</p>
            <p><strong>Medication access:</strong> If eligible after provider consultation, prescriptions may be filled by a network pharmacy. Product packaging may differ from images shown. You consent to Apoth using your information in accordance with our Privacy Policy.</p>
            <p><strong>Pricing:</strong> Displayed prices are subject to plan terms. Accessibility feedback may be sent to care@apoth.com.</p>
          </div>
        </div>
        <div className={styles.copyright}>© 2026 Apoth Health, Inc. All rights reserved.</div>
      </footer>
    </main>
  );
}
