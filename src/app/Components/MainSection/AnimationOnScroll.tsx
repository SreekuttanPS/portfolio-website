"use client";
import { useEffect } from "react";

const AnimationOnScroll = () => {
  useEffect(() => {
    // Reveal animations on scroll
    const revealElements = document.querySelectorAll(".reveal");

    function checkReveal() {
      const windowHeight = window.innerHeight;
      const revealPoint = 200;

      revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
          element.classList.add("active");
        }
      });
    }

    // Initial check
    checkReveal();

    // Check on scroll
    window.addEventListener("scroll", checkReveal);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", checkReveal);
    };
  }, []);
  useEffect(() => {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobileMenuButton');
    const mobileMenu = document.getElementById('mobileMenu');

    const handleMenuClick = () => {
      if (mobileMenu) {
        mobileMenu.classList.toggle('hidden');
      }
    };

    mobileMenuButton?.addEventListener('click', handleMenuClick);

    // Smooth scroll for navigation links
    const anchors = document.querySelectorAll('a[href^="#"]');
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute('href');
      if (!targetId) return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: (targetElement as HTMLElement).offsetTop - 60,
          behavior: 'smooth',
        });
        // Close mobile menu if open
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
        }
      }
    };

    anchors.forEach(anchor => {
      anchor.addEventListener('click', handleAnchorClick);
    });

    // Cleanup
    return () => {
      mobileMenuButton?.removeEventListener('click', handleMenuClick);
      anchors.forEach(anchor => {
        anchor.removeEventListener('click', handleAnchorClick);
      });
    };
  }, []);



  return null;
};

export default AnimationOnScroll;
