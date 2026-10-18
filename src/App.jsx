import { useEffect, useRef, useState } from 'react';
import PillNav from './PillNav';
import Iridescence from './Iridescence';
import InfiniteMenu from './InfiniteMenu';
import Strands from './Strands';
import FoldText from './FoldText';
import DriftWall from './DriftWall';
import PaperCrumple from './PaperCrumple';
import PixelCard from './PixelCard';
import SpecularButton from './SpecularButton';
import logo from './lotus.svg';
import resume1 from '../resumeImgs/ATS-friendly-Minimalist-Resume-Example-1778884686202.png';
import resume2 from '../resumeImgs/image-1646978280252.jpg';
import resume3 from '../resumeImgs/image-1648703459053.jpg';
import resume4 from '../resumeImgs/image.png';
import resume5 from '../resumeImgs/images (1).png';
import resume6 from '../resumeImgs/images (2).png';
import resume7 from '../resumeImgs/images (3).png';
import resume8 from '../resumeImgs/images.jpg';
import resume9 from '../resumeImgs/images.png';
import resume10 from '../resumeImgs/testvaad.png';
import './App.css';

const items = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Talent', href: '#talent' },
  { label: 'Insights', href: '#insights' },
  { label: 'Pricing', href: '#pricing' }
];

const interviewItems = [
  {
    video: '/assets/interviewer.mp4',
    title: 'A live conversation with your AI interviewer'
  }
];

const interviewSteps = [
  {
    title: 'Answer naturally',
    body: 'Respond to questions through your voice, in a real interview-style conversation.'
  },
  {
    title: 'Show your skills',
    body: 'Work through practical questions designed around the role you\u2019re targeting.'
  },
  {
    title: 'Get evaluated on ability',
    body: 'Turn your interview into a structured skills profile that goes beyond what\u2019s written on your r\u00e9sum\u00e9.'
  }
];

const resumeItems = [
  { image: resume1 },
  { image: resume2 },
  { image: resume3 },
  { image: resume4 },
  { image: resume5 },
  { image: resume6 },
  { image: resume7 },
  { image: resume8 },
  { image: resume9 },
  { image: resume10 }
];

const insightFeatures = [
  {
    title: 'Live AI Interviews',
    description:
      'Run role-specific interviews with dynamic questions that let candidates demonstrate their knowledge and explain their thinking.'
  },
  {
    title: 'Complete Interview Transcripts',
    description:
      'Review what candidates actually said, revisit individual answers, and see the reasoning behind their responses.'
  },
  {
    title: 'Structured AI Evaluation',
    description:
      'Assess answers against role-specific criteria, with clear feedback on demonstrated strengths and areas that need further assessment.'
  },
  {
    title: 'Performance Insights',
    description:
      'Turn interview responses into a readable candidate profile, highlighting relevant competencies and evaluation findings.'
  },
  {
    title: 'Candidate Ranking',
    description:
      'Compare candidates against consistent, job-relevant criteria and prioritise who deserves the next round of consideration.'
  }
];

const pixelCardColors = ['#f8fafc', '#f1f5f9', '#cbd5e1'];

const pricingPlans = [
  {
    audience: 'For candidates',
    name: 'Candidate Starter',
    price: '₹0',
    period: '/ month',
    features: [
      'Browse company-posted roles',
      'Take eligible interviews at no cost',
      'Receive basic AI feedback'
    ]
  },
  {
    audience: 'For candidates',
    name: 'Candidate Pro',
    price: '₹799',
    period: '/ month',
    features: [
      'Personalised AI learning roadmap',
      'AI learning companion',
      'Detailed interview analysis',
      'Progress tracking'
    ]
  },
  {
    audience: 'For companies',
    name: 'Company Starter',
    price: '₹0',
    period: '/ month',
    features: [
      'Up to 5 completed interviews per month',
      'One hiring manager',
      'Transcripts included',
      'Basic AI evaluations'
    ]
  },
  {
    audience: 'For companies',
    name: 'Company Pro',
    price: '₹4,999',
    period: '/ month',
    features: [
      'Up to 50 interviews per month',
      'Multiple roles',
      'Full transcripts',
      'Explainable ranking & shortlists'
    ]
  }
];

const pixelCardEffect = {
  colors: pixelCardColors,
  glowColor: '#cbd5e1',
  shape: 'square',
  origin: 'center',
  gap: 5,
  pixelSize: 2,
  speed: 35,
  revealDuration: 600,
  spotlight: 0.5,
  glow: 0.5,
  opacity: 0.35,
  fade: 0.7,
  trigger: 'hover',
  radius: 24,
  clickPulse: true,
  intro: true,
  theme: 'dark'
};

function InsightAccordion() {
  const [activeIndex, setActiveIndex] = useState(0);
  const hoverTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(hoverTimer.current), []);

  const preview = index => {
    if (window.matchMedia?.('(hover: hover)').matches === false) return;
    window.clearTimeout(hoverTimer.current);
    hoverTimer.current = window.setTimeout(() => setActiveIndex(index), 80);
  };

  const activate = index => {
    window.clearTimeout(hoverTimer.current);
    setActiveIndex(index);
  };

  return (
    <div className="insights">
      <p className="insights__eyebrow">What you get</p>
      <ul className="insights__list">
        {insightFeatures.map((feature, index) => {
          const isActive = activeIndex === index;
          const panelId = `insight-panel-${index}`;
          return (
            <li
              key={feature.title}
              className={`insights__item${isActive ? ' is-active' : ''}`}
              onMouseEnter={() => preview(index)}
            >
              <div className="insights__content">
                <span className="insights__num" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="insights__vert" aria-hidden="true">
                  {feature.title}
                </span>
                <div className="insights__head">
                  <h3 className="insights__name">{feature.title}</h3>
                  <span className="insights__mark" aria-hidden="true" />
                </div>
                <p className="insights__body" id={panelId} aria-hidden={!isActive}>
                  {feature.description}
                </p>
              </div>
              <button
                type="button"
                className="insights__trigger"
                aria-label={feature.title}
                aria-expanded={isActive}
                aria-controls={panelId}
                onClick={() => activate(index)}
                onFocus={() => activate(index)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function App() {
  const headerRef = useRef(null);
  const interviewRef = useRef(null);
  const talentRef = useRef(null);
  const crumpleRef = useRef(null);
  const pricingRef = useRef(null);

  useEffect(() => {
    const mark = document.querySelector('.site-mark');
    const header = headerRef.current;
    if (!mark || !header) return undefined;
    const observer = new IntersectionObserver(
      entries => {
        mark.classList.toggle('site-mark--hidden', !entries[0].isIntersecting);
      },
      { rootMargin: '-4px 0px 0px 0px' }
    );
    observer.observe(header);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = interviewRef.current;
    if (!section) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    section.classList.add('interview--animate');
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        section.classList.add('interview--in');
        observer.disconnect();
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = talentRef.current;
    if (!section) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    section.classList.add('talent--animate');
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        section.classList.add('talent--in');
        observer.disconnect();
      },
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = crumpleRef.current;
    if (!section) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    section.classList.add('crumple--animate');
    const observer = new IntersectionObserver(
      entries => {
        if (!entries.some(entry => entry.isIntersecting)) return;
        section.classList.add('crumple--in');
        observer.disconnect();
      },
      { threshold: 0.08, rootMargin: '0px 0px -8% 0px' }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const section = pricingRef.current;
    if (!section) return undefined;
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) return undefined;

    section.classList.add('pricing--animate');
    const targets = section.querySelectorAll('[data-reveal]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('pricing-reveal--in');
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -6% 0px' }
    );
    targets.forEach(target => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="site" id="top">
      <span className="site-mark" aria-hidden="true">
        <img className="site-mark__logo" src={logo} alt="" draggable={false} />
        VaadIn
      </span>

      <header ref={headerRef} className="site-header">
        <div className="site-header__inner">
          <PillNav
            logo={logo}
            logoAlt="Testvaad"
            logoHref="#top"
            items={items}
            itemStyle="pill"
            hoverEffect="fill"
            indicator="dot"
            theme="dark"
            collapseBelow={640}
            ariaLabel="Main"
          />
        </div>
      </header>

      <main className="stage">
        <div className="intro">
          <h1 className="intro__title">Your skills deserve more than a résumé.</h1>
          <p className="intro__sub">Let your ability speak for itself.</p>
        </div>

        <section className="panel" aria-labelledby="panel-title">
          <Iridescence
            color="#8099cc"
            hueShift={0}
            saturation={1}
            brightness={1.5}
            contrast={1}
            speed={1}
            scale={1}
            detail={8}
            warp={1}
            rotation={0}
            mouseReact={true}
            amplitude={0.1}
            stir={0.5}
            sheen={0.3}
            clickSwirl={true}
            grain={0}
            fade={0}
          />
          <div className="panel__content">
            <span id="panel-title" className="panel__title">
              <FoldText
                text="VaadIn"
                foldStyle="paper"
                splitBy="char"
                hinge="top"
                trigger="scroll"
                foldAngle={92}
                duration={0.65}
                stagger={0.045}
                staggerFrom="start"
                ease="power3.out"
                loopDelay={1.4}
                hoverRefold={true}
                refoldRadius={140}
                refoldAngle={45}
                perspective={700}
                creaseShading={0.55}
                fontSize="inherit"
                fontWeight="inherit"
                className="panel__fold"
              />
            </span>
            <SpecularButton
              size="lg"
              radius={18}
              tint="#000000"
              tintOpacity={0.38}
              textColor="#f5f5f5"
              lineColor="#ffffff"
              baseColor="#525252"
              intensity={1}
              idleIntensity={0.35}
              shineSize={10}
              shineFade={34}
              thickness={1.2}
              glow={1}
              followMouse
              proximity={250}
              onClick={() => console.log('clicked')}
              className="panel__cta"
            >
              Get Started
            </SpecularButton>
          </div>
        </section>

        <section
          ref={interviewRef}
          id="how-it-works"
          className="interview"
          aria-labelledby="interview-title"
        >
          <div className="interview__media">
            <InfiniteMenu
              items={interviewItems}
              count={160}
              tileSize={0.63}
              roundness={0.2}
              zoom={1.65}
              pullBack={1}
              stretch={0.6}
              inertia={0.6}
              autoplay={3}
              grayscale={true}
              dim={0.5}
              intro={true}
              showInfo={false}
              theme="dark"
              accentColor="#ffffff"
            />
          </div>
          <div className="interview__copy">
            <div className="interview__heading">
              <h2 id="interview-title" className="interview__title">
                Meet your AI interviewer.
              </h2>
              <div className="interview__strands">
                <Strands listening energy={0.6} />
              </div>
            </div>
            <p className="interview__body">
              Answer role-specific questions, explain your thinking, and demonstrate what you can actually do &mdash;
              just like a real interview.
            </p>
            <ol className="interview__steps">
              {interviewSteps.map((step, index) => (
                <li className="interview__step" key={step.title}>
                  <span className="interview__step-num" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')} &mdash;
                  </span>
                  <div className="interview__step-copy">
                    <h3 className="interview__step-title">{step.title}</h3>
                    <p className="interview__step-body">{step.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section ref={talentRef} id="talent" className="talent" aria-labelledby="talent-title">
          <div className="talent__copy">
            <h2 id="talent-title" className="talent__title">
              <span className="talent__line">Stop hiring résumés.</span>
              <span className="talent__line talent__line--accent">Start hiring talent.</span>
            </h2>
            <p className="talent__body">
              The best candidate shouldn&rsquo;t be the one with the prettiest template. Look beyond polished PDFs and
              discover what candidates can actually do.
            </p>
          </div>
          <div className="talent__wall">
            <DriftWall
              items={resumeItems}
              columns={5}
              tileWidth={200}
              tileHeight={132}
              gap={18}
              tilt={16}
              turn={-14}
              perspective={1200}
              depth={120}
              speed={42}
              direction="up"
              variance={0.45}
              parallax={0.6}
              lift={64}
              fade={0.6}
              dim={0.55}
              overlayColor="#060010"
              ariaLabel="A drifting wall of candidate résumés"
            />
          </div>
        </section>

        <section ref={crumpleRef} id="insights" className="crumple" aria-labelledby="crumple-title">
          <div className="crumple__hero">
            <div className="crumple__intro">
              <h2 id="crumple-title" className="crumple__title">
                <span className="crumple__title-line">Crumble the résumé</span>
                <span className="crumple__title-line">
                  and get <em>actual insights.</em>
                </span>
              </h2>
            </div>
            <div className="crumple__visual">
              <PaperCrumple
                src="/assets/resume-paper.svg"
                alt="Aarav Mehta's résumé, an interactive sheet of paper"
                width={240}
                height={312}
                sceneHeight={340}
                releaseBehavior="restore"
                crumpleAmount={0.85}
                crumpleDuration={0.55}
                releaseDuration={0.4}
                foldCount={6}
                foldSharpness={0.6}
                wrinkleDepth={0.65}
                creaseStrength={0.18}
                paperColor="#eef2f7"
                paperTexture={0.06}
                lightIntensity={1.6}
                draggable
                returnToOrigin
              />
            </div>
          </div>
          <InsightAccordion />
        </section>

        <section ref={pricingRef} id="pricing" className="pricing" aria-labelledby="pricing-title">
          <h2 id="pricing-title" className="pricing__title" data-reveal>
            Pricing
          </h2>
          <div className="pricing__grid">
            {pricingPlans.map((plan, index) => (
              <div className="pricing-item" key={plan.name} data-reveal>
                <PixelCard {...pixelCardEffect} introDelay={index * 90} className="pricing-card">
                  <div className="pricing-card__inner">
                    <div className="pricing-card__meta">
                      <span className="pricing-card__audience">{plan.audience}</span>
                      <span className="pricing-card__index">{String(index + 1).padStart(2, '0')}</span>
                    </div>
                    <h3 className="pricing-card__name">{plan.name}</h3>
                    <p className="pricing-card__price">
                      {plan.price}
                      <span className="pricing-card__period">{plan.period}</span>
                    </p>
                    <ul className="pricing-card__features">
                      {plan.features.map(feature => (
                        <li className="pricing-card__feature" key={feature}>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </PixelCard>
              </div>
            ))}
          </div>
          <p className="pricing__note">
            Employer-required interviews are always free for candidates.
          </p>
        </section>
      </main>

      <footer className="site-footer">
        <div className="site-footer__inner">
          <div className="site-footer__top">
            <div className="site-footer__identity">
              <a className="site-footer__brand" href="#top" aria-label="VaadIn, back to top">
                <img className="site-footer__logo" src={logo} alt="" draggable={false} />
                <span>VaadIn</span>
              </a>
              <p className="site-footer__tagline">Your ability, on the record.</p>
            </div>
            <nav className="site-footer__nav" aria-label="Footer">
              <a href="#how-it-works">How it works</a>
              <a href="#talent">Talent</a>
              <a href="#insights">Insights</a>
              <a href="#pricing">Pricing</a>
            </nav>
          </div>
          <div className="site-footer__meta">
            <p>&copy; 2026 VaadIn. All rights reserved.</p>
            <a className="site-footer__top-link" href="#top">
              Back to top <span aria-hidden="true">&uarr;</span>
            </a>
          </div>
        </div>
        <div className="site-footer__crop" aria-hidden="true">
          <span className="site-footer__wordmark">VaadIn</span>
        </div>
      </footer>
    </div>
  );
}

export default App;
