import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const mm = gsap.matchMedia();

  // Create GSAP Context for easy cleanup
  const ctx = gsap.context(() => {
    // -------------------------------------------------------------
    // 1. FIXED FLOATING CAPSULE HEADER ON SCROLL
    // -------------------------------------------------------------
    const header = document.querySelector<HTMLElement>('#site-header');
    if (header) {
      ScrollTrigger.create({
        start: 'top -40px',
        onUpdate: (self) => {
          if (self.direction === 1 && self.scroll() > 80) {
            header.classList.add('header-scrolled');
          } else if (self.scroll() <= 40) {
            header.classList.remove('header-scrolled');
          }
        },
      });
    }

    // Active Navigation Highlight on Scroll
    const sections = document.querySelectorAll<HTMLElement>('section[id]');
    const navLinks = document.querySelectorAll<HTMLAnchorElement>('.nav-link');

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top 40%',
        end: 'bottom 40%',
        onEnter: () => updateActiveNav(section.id),
        onEnterBack: () => updateActiveNav(section.id),
      });
    });

    function updateActiveNav(id: string) {
      navLinks.forEach((link) => {
        const href = link.getAttribute('href')?.replace('#', '');
        if (href === id) {
          link.classList.add('text-warm-50', 'bg-warm-800', 'shadow-sm');
          link.classList.remove('text-warm-400');
        } else {
          link.classList.remove('text-warm-50', 'bg-warm-800', 'shadow-sm');
          link.classList.add('text-warm-400');
        }
      });
    }

    if (prefersReducedMotion) {
      // Show elements statically without motion
      gsap.set(['.hero-animate', '.service-layer', '.portfolio-card', '.approach-animate', '.contact-animate'], {
        opacity: 1,
        y: 0,
        scale: 1,
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
      });
      return;
    }

    // -------------------------------------------------------------
    // 2. HERO ENTRANCE & PARALLAX SCROLL (SMOOTHENED)
    // -------------------------------------------------------------
    const heroTl = gsap.timeline({ defaults: { ease: 'power2.out' } });

    heroTl
      .fromTo('#site-header', { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.9 })
      .fromTo('.hero-bg-img', { scale: 1.05 }, { scale: 1, duration: 1.6, ease: 'power2.out' }, '-=0.7')
      .fromTo('.hero-label', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, '-=1.1')
      .fromTo('.hero-headline-line', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.9, stagger: 0.12 }, '-=0.5')
      .fromTo('.hero-subheadline', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.4')
      .fromTo('.hero-cta', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3');

    // Hero Scroll Parallax
    gsap.to('.hero-bg-wrapper', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: 'bottom top',
        scrub: 0.5,
      },
      y: '16%',
      scale: 1.03,
      ease: 'none',
    });

    gsap.to('.hero-content', {
      scrollTrigger: {
        trigger: '#hero',
        start: 'top top',
        end: '60% top',
        scrub: 0.5,
      },
      opacity: 0,
      y: -25,
      ease: 'none',
    });

    // -------------------------------------------------------------
    // 3. SERVICES LAYERED VERTICAL IMAGE REVEAL (ULTRA SMOOTH DESKTOP)
    // -------------------------------------------------------------
    mm.add('(min-width: 1024px)', () => {
      const serviceCards = gsap.utils.toArray<HTMLElement>('.service-card-desktop');
      const progressText = document.querySelector<HTMLElement>('#service-progress-num');

      if (serviceCards.length > 0) {
        // Pin the services section with anticipatePin & fastScrollEnd
        const servicesTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#services-pin-container',
            start: 'top top',
            end: () => `+=${serviceCards.length * 100}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            fastScrollEnd: true,
            onUpdate: (self) => {
              const activeIndex = Math.min(
                Math.floor(self.progress * serviceCards.length),
                serviceCards.length - 1
              );
              if (progressText) {
                progressText.textContent = `0${activeIndex + 1}`;
              }
            },
          },
        });

        serviceCards.forEach((card, index) => {
          if (index === 0) return; // First card is already visible

          const prevCard = serviceCards[index - 1];
          const imgWrapper = card.querySelector('.service-img-wrapper');
          const contentWrapper = card.querySelector('.service-content-wrapper');

          // Stacked reveal timeline step
          servicesTl
            .fromTo(
              card,
              { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)', yPercent: 6 },
              { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', yPercent: 0, ease: 'none' }
            )
            .to(
              prevCard.querySelector('.service-img-wrapper'),
              { scale: 0.96, opacity: 0.5, ease: 'none' },
              '<'
            )
            .fromTo(
              imgWrapper,
              { scale: 1.1 },
              { scale: 1, ease: 'none' },
              '<'
            )
            .fromTo(
              contentWrapper,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, ease: 'power2.out' },
              '<+=0.15'
            );
        });
      }
    });

    // Services Mobile Scroll Animation
    mm.add('(max-width: 1023px)', () => {
      const mobileServices = gsap.utils.toArray<HTMLElement>('.service-card-mobile');
      mobileServices.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    // -------------------------------------------------------------
    // 4. PORTFOLIO VERTICAL EDITORIAL REVEAL (ULTRA SMOOTH DESKTOP)
    // -------------------------------------------------------------
    mm.add('(min-width: 1024px)', () => {
      const portfolioCards = gsap.utils.toArray<HTMLElement>('.portfolio-card-desktop');

      if (portfolioCards.length > 0) {
        const portfolioTl = gsap.timeline({
          scrollTrigger: {
            trigger: '#portfolio-pin-container',
            start: 'top top',
            end: () => `+=${portfolioCards.length * 105}%`,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            fastScrollEnd: true,
          },
        });

        portfolioCards.forEach((card, index) => {
          if (index === 0) return;

          const prevCard = portfolioCards[index - 1];
          const img = card.querySelector('.portfolio-img');
          const meta = card.querySelector('.portfolio-meta');

          portfolioTl
            .fromTo(
              card,
              { clipPath: 'polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)' },
              { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', ease: 'none' }
            )
            .to(
              prevCard,
              { yPercent: -10, opacity: 0.4, ease: 'none' },
              '<'
            )
            .fromTo(
              img,
              { scale: 1.08 },
              { scale: 1, ease: 'none' },
              '<'
            )
            .fromTo(
              meta,
              { opacity: 0, y: 20 },
              { opacity: 1, y: 0, ease: 'power2.out' },
              '<+=0.1'
            );
        });
      }
    });

    // Portfolio Mobile Animation
    mm.add('(max-width: 1023px)', () => {
      const mobileProjects = gsap.utils.toArray<HTMLElement>('.portfolio-card-mobile');
      mobileProjects.forEach((card) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 82%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    });

    // -------------------------------------------------------------
    // 5. OUR APPROACH ANIMATION
    // -------------------------------------------------------------
    const approachImg = document.querySelector('.approach-img');
    if (approachImg) {
      gsap.fromTo(
        approachImg,
        { scale: 1.08, opacity: 0.85 },
        {
          scale: 1,
          opacity: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: '#approach',
            start: 'top 75%',
            end: 'bottom 40%',
            scrub: 0.5,
          },
        }
      );
    }

    const approachTextElements = gsap.utils.toArray<HTMLElement>('.approach-text-item');
    approachTextElements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#approach',
            start: 'top 65%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    // -------------------------------------------------------------
    // 6. CONTACT SECTION REVEAL
    // -------------------------------------------------------------
    const contactElements = gsap.utils.toArray<HTMLElement>('.contact-reveal');
    contactElements.forEach((el, i) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 25 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: i * 0.08,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: '#contact',
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  });

  // Refresh ScrollTrigger layout on window load
  window.addEventListener('load', () => {
    ScrollTrigger.refresh();
  });

  return ctx;
}
