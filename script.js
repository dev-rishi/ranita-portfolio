document.addEventListener('DOMContentLoaded', () => {
  // Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  /* ==========================================================================
     SCROLL EFFECTS & STICKY HEADER
     ========================================================================== */
  const header = document.getElementById('site-header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll(); // Run once on load to ensure state correctness

  /* ==========================================================================
     MOBILE DRAWER TOGGLE
     ========================================================================== */
  const mobileToggle = document.getElementById('mobile-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const menuIcon = mobileToggle.querySelector('.menu-icon');
  const closeIcon = mobileToggle.querySelector('.close-icon');
  const drawerLinks = mobileDrawer.querySelectorAll('.mobile-link, .btn-cta');

  const toggleMenu = () => {
    const isOpen = mobileDrawer.classList.toggle('open');
    
    if (isOpen) {
      menuIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Stop background scrolling
    } else {
      menuIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    }
  };

  mobileToggle.addEventListener('click', toggleMenu);

  // Close drawer when a link is clicked
  drawerLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileDrawer.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  /* ==========================================================================
     SCROLL REVEAL ENGINE
     ========================================================================== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        // Once revealed, no need to track it further
        observer.unobserve(entry.target);
      }
    });
  }, {
    root: null, // Viewport
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Offset trigger for a better feel
  });

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });

  /* ==========================================================================
     EMAIL COPY TO CLIPBOARD
     ========================================================================== */
  const emailButton = document.getElementById('btn-email');
  const emailText = document.getElementById('email-text').innerText.trim();
  const copyStatus = document.getElementById('copy-status');

  // Create Toast Element dynamically if it doesn't exist
  let toast = document.querySelector('.toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }

  const showToast = (message) => {
    toast.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  };

  emailButton.addEventListener('click', () => {
    navigator.clipboard.writeText(emailText)
      .then(() => {
        showToast('✓ Email Address Copied to Clipboard!');
        
        // Temporarily change copy indicator text
        const originalHTML = copyStatus.innerHTML;
        copyStatus.innerHTML = 'Copied! <i data-lucide="check"></i>';
        if (window.lucide) {
          window.lucide.createIcons({
            attrs: {
              class: 'copy-status-icon'
            }
          });
        }
        
        setTimeout(() => {
          copyStatus.innerHTML = originalHTML;
          if (window.lucide) {
            window.lucide.createIcons();
          }
        }, 3000);
      })
      .catch(err => {
        console.error('Failed to copy: ', err);
        showToast('Failed to copy. Please manually select the email.');
      });
  });

  // Support Keyboard Trigger for Accessibility
  emailButton.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      emailButton.click();
    }
  });

  /* ==========================================================================
     ACTIVE LINK SCROLL SYNC
     ========================================================================== */
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.desktop-nav .nav-link');

  const highlightNav = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
});
