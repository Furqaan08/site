/* BREATH FITNESS STUDIO - Static Website JavaScript */

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-in animations
const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1
};

const animateOnScroll = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
};

const observer = new IntersectionObserver(animateOnScroll, observerOptions);

// Apply scroll animations to sections
document.addEventListener('DOMContentLoaded', () => {
  // Add animation to benefit cards
  const benefitCards = document.querySelectorAll('.benefit-card');
  benefitCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add animation to program cards
  const programCards = document.querySelectorAll('.program-card');
  programCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
  });

  // Add animation to testimonial cards
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  testimonialCards.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(card);
  });

  // Add animation to feature items
  const featureItems = document.querySelectorAll('.feature-item');
  featureItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
    observer.observe(item);
  });

  // Add animation to section headers
  const sectionHeaders = document.querySelectorAll('.section-header');
  sectionHeaders.forEach(header => {
    header.style.opacity = '0';
    header.style.transform = 'translateY(30px)';
    header.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(header);
  });

  // Add animation to coach content
  const coachContent = document.querySelector('.coach-content');
  if (coachContent) {
    coachContent.style.opacity = '0';
    coachContent.style.transform = 'translateY(30px)';
    coachContent.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(coachContent);
  }

  // Add animation to coach image
  const coachImageWrapper = document.querySelector('.coach-image-wrapper');
  if (coachImageWrapper) {
    coachImageWrapper.style.opacity = '0';
    coachImageWrapper.style.transform = 'translateX(-30px)';
    coachImageWrapper.style.transition = 'opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s';
    observer.observe(coachImageWrapper);
  }

  // Add animation to CTA content
  const ctaContent = document.querySelector('.cta-content');
  if (ctaContent) {
    ctaContent.style.opacity = '0';
    ctaContent.style.transform = 'translateY(30px)';
    ctaContent.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(ctaContent);
  }

  // Add animation to atmosphere inner
  const atmosphereInner = document.querySelector('.atmosphere-inner');
  if (atmosphereInner) {
    atmosphereInner.style.opacity = '0';
    atmosphereInner.style.transform = 'translateY(30px)';
    atmosphereInner.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(atmosphereInner);
  }
});

// Dynamic year for footer (already handled in HTML with static year, but this is a fallback)
const footerCopyright = document.querySelector('.footer-copyright');
if (footerCopyright) {
  const year = new Date().getFullYear();
  footerCopyright.textContent = `${year} BREATH FITNESS STUDIO. All rights reserved.`;
}

// Console message for developers
console.log('%cBREATH FITNESS STUDIO', 'font-size: 24px; font-weight: bold; color: #C9A227;');
console.log('%cTrain with purpose. Breathe with control.', 'font-size: 14px; color: #8c8c8c;');