// App State
let appState = {
  currentPage: 'home',
  userName: '',
  hasEnteredName: false,
  isLoading: true
};

// Toast System
class ToastManager {
  constructor() {
    this.container = document.getElementById('toastContainer');
  }

  show(message, type = 'success') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.textContent = message;
    
    this.container.appendChild(toast);
    
    setTimeout(() => {
      toast.remove();
    }, 5000);
  }

  success(message) {
    this.show(message, 'success');
  }

  error(message) {
    this.show(message, 'error');
  }
}

const toast = new ToastManager();

// Form Validation
class FormValidator {
  static validateName(name) {
    if (!name.trim()) return "Name is required";
    if (name.trim().length < 2) return "Name must be at least 2 characters";
    if (name.trim().length > 50) return "Name must be less than 50 characters";
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) return "Name can only contain letters and spaces";
    return null;
  }

  static validateEmail(email) {
    if (!email.trim()) return "Email is required";
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) return "Please enter a valid email address";
    if (email.length > 100) return "Email must be less than 100 characters";
    return null;
  }

  static validatePhone(phone) {
    if (!phone.trim()) return "Phone number is required";
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    const cleanPhone = phone.replace(/[\s\-\(\)]/g, "");
    if (!phoneRegex.test(cleanPhone)) return "Please enter a valid phone number";
    if (cleanPhone.length < 8 || cleanPhone.length > 15) return "Phone number must be between 8-15 digits";
    return null;
  }

  static validateMessage(message) {
    if (!message.trim()) return "Message is required";
    if (message.trim().length < 10) return "Message must be at least 10 characters";
    if (message.trim().length > 1000) return "Message must be less than 1000 characters";
    return null;
  }
}

// Router
class Router {
  constructor() {
    this.routes = {
      home: this.renderHomePage,
      profile: this.renderProfilePage,
      portfolio: this.renderPortfolioPage,
      contact: this.renderContactPage
    };
  }

  navigate(route) {
    if (this.routes[route]) {
      appState.currentPage = route;
      this.updateActiveNav(route);
      this.routes[route]();
    }
  }

  updateActiveNav(route) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      if (link.dataset.route === route) {
        link.classList.add('active');
      }
    });
  }

  renderHomePage() {
    const currentTime = new Date().toLocaleString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    });

    document.getElementById('pageContent').innerHTML = `
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-bg"></div>
        <div class="hero-overlay"></div>
        
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">
              Hi ${appState.userName}, Welcome To
              <span class="hero-gradient-text">Our Website</span>
            </h1>
            
            <p class="hero-description">
              Discover innovation and excellence through our professional services and creative solutions
            </p>
            
            <div class="hero-buttons">
              <button class="btn btn-primary btn-lg gradient-cta" onclick="router.navigate('contact')">
                Get Started
              </button>
              <button class="btn btn-outline btn-lg" onclick="router.navigate('portfolio')">
                View Portfolio
              </button>
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="floating-element floating-1"></div>
          <div class="floating-element floating-2"></div>
          <div class="floating-element floating-3"></div>
        </div>
      </section>

      <!-- Our Headquarter Section -->
      <section class="section section-subtle">
        <div class="container">
          <div class="hero-content">
            <h2 class="section-title">Our Global Presence</h2>
            <p class="section-description">
              Strategically located across Indonesia's major cities to serve you better
            </p>
          </div>
          
          <div class="grid grid-md-3">
            <div class="location-card">
              <div class="location-icon location-jakarta">
                <span>🏢</span>
              </div>
              <h3 class="location-title">Jakarta</h3>
              <p class="location-description">Capital Hub</p>
            </div>
            
            <div class="location-card">
              <div class="location-icon location-bandung">
                <span>🏔️</span>
              </div>
              <h3 class="location-title">Bandung</h3>
              <p class="location-description">Creative Center</p>
            </div>
            
            <div class="location-card">
              <div class="location-icon location-surabaya">
                <span>🌊</span>
              </div>
              <h3 class="location-title">Surabaya</h3>
              <p class="location-description">Innovation Port</p>
            </div>
          </div>
        </div>
      </section>

      <!-- Contact Section -->
      <section class="section">
        <div class="container">
          <div class="hero-content">
            <h2 class="section-title">Let's Connect</h2>
            <p class="section-description">
              Ready to start your next project? We'd love to hear from you.
            </p>
          </div>
          
          <div class="grid grid-lg-2">
            <!-- Contact Form -->
            <div style="display: flex; justify-content: center;">
              ${this.renderContactForm()}
            </div>
            
            <!-- Information Panel -->
            <div>
              <div class="card info-panel">
                <div class="card-content">
                  <div class="info-section">
                    <h3 class="info-title">
                      <span class="info-dot info-dot-accent"></span>
                      Live Information
                    </h3>
                    <div class="info-item">
                      <strong class="info-label">Time:</strong>
                      <span class="info-value">${currentTime}</span>
                    </div>
                    <div class="info-item">
                      <strong class="info-label">Name:</strong>
                      <span>${appState.userName}</span>
                    </div>
                    <div class="info-item">
                      <strong class="info-label">Born:</strong>
                      <span>01/11/1995</span>
                    </div>
                    <div class="info-item">
                      <strong class="info-label">Gender:</strong>
                      <span>Male</span>
                    </div>
                    <div class="info-item">
                      <strong class="info-label">Goal:</strong>
                      <span style="font-style: italic;">Learning to create a website</span>
                    </div>
                  </div>
                  
                  <div>
                    <h4 class="info-title">
                      <span class="info-dot info-dot-primary"></span>
                      Quick Navigation
                    </h4>
                    <button class="quick-nav-btn nav-profile" onclick="router.navigate('profile')">
                      <span style="margin-right: 0.75rem; font-size: 1.125rem;">👥</span>
                      <span style="font-weight: 500;">Learn About Us</span>
                    </button>
                    <button class="quick-nav-btn nav-portfolio" onclick="router.navigate('portfolio')">
                      <span style="margin-right: 0.75rem; font-size: 1.125rem;">💼</span>
                      <span style="font-weight: 500;">View Our Work</span>
                    </button>
                    <button class="quick-nav-btn nav-contact" onclick="router.navigate('contact')">
                      <span style="margin-right: 0.75rem; font-size: 1.125rem;">📞</span>
                      <span style="font-weight: 500;">Contact Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Footer -->
      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-icon">😊</div>
            <h3 class="footer-title">My Website</h3>
            <p class="footer-description">
              Crafting exceptional digital experiences with passion and precision
            </p>
            
            <div class="footer-divider">
              <p class="footer-copyright">
                © 2024 Created By <span class="footer-brand">Revo.id</span> | All rights reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    `;
  }

  renderProfilePage() {
    document.getElementById('pageContent').innerHTML = `
      <main class="container" style="padding: 3rem 1rem;">
        <div style="max-width: 64rem; margin: 0 auto;">
          <!-- Photo Banner -->
          <div style="position: relative; margin-bottom: 3rem; border-radius: 0.5rem; overflow: hidden; box-shadow: var(--shadow-card);">
            <img 
              src="src/assets/company-banner.jpg" 
              alt="Company headquarters building" 
              style="width: 100%; height: 16rem; object-fit: cover;"
              onerror="this.style.background='var(--gradient-hero)'; this.alt='Company Banner';"
            />
            <div style="position: absolute; inset: 0; background: linear-gradient(to top, rgba(0,0,0,0.5), transparent); display: flex; align-items: flex-end;">
              <h1 style="font-size: clamp(2rem, 6vw, 4rem); font-weight: bold; color: white; padding: 2rem;">Our Profile</h1>
            </div>
          </div>
          
          <div class="grid grid-md-2">
            <div class="card" style="box-shadow: var(--shadow-card);">
              <div class="card-header">
                <h2 class="card-title" style="color: var(--navy);">About Our Company</h2>
              </div>
              <div class="card-content">
                <p style="color: var(--gray-600); line-height: 1.6;">
                  We are a leading technology company committed to delivering innovative solutions 
                  that help businesses grow and succeed in the digital age. Our team of experienced 
                  professionals brings expertise across various domains to serve our clients better.
                </p>
              </div>
            </div>

            <div class="card" style="box-shadow: var(--shadow-card);">
              <div class="card-header">
                <h2 class="card-title" style="color: var(--navy);">Our Mission</h2>
              </div>
              <div class="card-content">
                <p style="color: var(--gray-600); line-height: 1.6;">
                  To empower businesses through cutting-edge technology solutions, providing 
                  exceptional service and fostering long-term partnerships that drive mutual success 
                  and innovation in the global marketplace.
                </p>
              </div>
            </div>

            <div class="card" style="box-shadow: var(--shadow-card);">
              <div class="card-header">
                <h2 class="card-title" style="color: var(--navy);">Our Vision</h2>
              </div>
              <div class="card-content">
                <p style="color: var(--gray-600); line-height: 1.6;">
                  To be the most trusted technology partner, recognized for our commitment to 
                  excellence, innovation, and creating positive impact in the communities we serve 
                  worldwide.
                </p>
              </div>
            </div>

            <div class="card" style="box-shadow: var(--shadow-card);">
              <div class="card-header">
                <h2 class="card-title" style="color: var(--navy);">Our Values</h2>
              </div>
              <div class="card-content">
                <ul style="color: var(--gray-600); list-style: none; padding: 0;">
                  <li style="margin-bottom: 0.5rem;">• Innovation and Creativity</li>
                  <li style="margin-bottom: 0.5rem;">• Integrity and Transparency</li>
                  <li style="margin-bottom: 0.5rem;">• Customer-Centric Approach</li>
                  <li style="margin-bottom: 0.5rem;">• Continuous Learning</li>
                  <li style="margin-bottom: 0.5rem;">• Teamwork and Collaboration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    `;
  }

  renderPortfolioPage() {
    const projects = [
      {
        title: "E-Commerce Platform",
        description: "Modern e-commerce solution with advanced features for online retail businesses.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe"],
        status: "Completed"
      },
      {
        title: "Mobile Banking App",
        description: "Secure mobile banking application with biometric authentication and real-time transactions.",
        technologies: ["React Native", "Firebase", "Blockchain"],
        status: "In Progress"
      },
      {
        title: "Healthcare Management System",
        description: "Comprehensive healthcare management platform for hospitals and clinics.",
        technologies: ["Vue.js", "Python", "PostgreSQL"],
        status: "Completed"
      },
      {
        title: "AI-Powered Analytics Dashboard",
        description: "Business intelligence dashboard with machine learning insights and predictive analytics.",
        technologies: ["React", "Python", "TensorFlow", "AWS"],
        status: "Planning"
      }
    ];

    const projectsHtml = projects.map(project => `
      <div class="card project-card">
        <div class="card-header">
          <div class="project-header">
            <h3 class="project-title">${project.title}</h3>
            <span class="badge ${project.status === 'Completed' ? 'badge-default' : project.status === 'In Progress' ? 'badge-secondary' : 'badge-outline'}">
              ${project.status}
            </span>
          </div>
        </div>
        <div class="card-content">
          <p class="project-description">${project.description}</p>
          <div class="project-tags">
            ${project.technologies.map(tech => `<span class="badge badge-outline">${tech}</span>`).join('')}
          </div>
        </div>
      </div>
    `).join('');

    document.getElementById('pageContent').innerHTML = `
      <main class="container" style="padding: 3rem 1rem;">
        <div style="max-width: 72rem; margin: 0 auto;">
          <h1 class="section-title" style="margin-bottom: 2rem;">Our Portfolio</h1>
          
          <div class="portfolio-grid grid-md-2 grid-lg-3">
            ${projectsHtml}
          </div>
        </div>
      </main>
    `;
  }

  renderContactPage() {
    document.getElementById('pageContent').innerHTML = `
      <main class="container" style="padding: 3rem 1rem;">
        <div style="max-width: 72rem; margin: 0 auto;">
          <h1 class="section-title" style="margin-bottom: 3rem;">Get In Touch</h1>
          
          <div class="grid grid-lg-2">
            <!-- Contact Form -->
            <div style="display: flex; justify-content: center;">
              ${this.renderContactForm()}
            </div>
            
            <!-- Contact Information -->
            <div style="display: flex; flex-direction: column; gap: 1.5rem;">
              <div class="card" style="box-shadow: var(--shadow-card);">
                <div class="card-header">
                  <h2 class="card-title" style="color: var(--navy);">Contact Information</h2>
                </div>
                <div class="card-content">
                  <div class="contact-info-item">
                    <div class="contact-icon">📧</div>
                    <div>
                      <p class="contact-label">Email</p>
                      <p class="contact-value">contact@mywebsite.com</p>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-icon">📞</div>
                    <div>
                      <p class="contact-label">Phone</p>
                      <p class="contact-value">+62 21 1234 5678</p>
                    </div>
                  </div>
                  
                  <div class="contact-info-item">
                    <div class="contact-icon">📍</div>
                    <div>
                      <p class="contact-label">Address</p>
                      <p class="contact-value">Jakarta, Indonesia</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div class="card" style="box-shadow: var(--shadow-card);">
                <div class="card-header">
                  <h2 class="card-title" style="color: var(--navy);">Office Hours</h2>
                </div>
                <div class="card-content">
                  <div style="color: var(--gray-600);">
                    <p style="margin-bottom: 0.5rem;"><span style="font-weight: 500; color: var(--navy);">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                    <p style="margin-bottom: 0.5rem;"><span style="font-weight: 500; color: var(--navy);">Saturday:</span> 9:00 AM - 2:00 PM</p>
                    <p><span style="font-weight: 500; color: var(--navy);">Sunday:</span> Closed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    `;
  }

  renderContactForm() {
    return `
      <div class="card contact-form-card">
        <div class="card-header form-header">
          <div class="form-icon">✉️</div>
          <h2 class="form-title">Message Us</h2>
          <p class="form-description">We'd love to hear from you. Send us a message!</p>
        </div>
        <div class="card-content">
          <form id="contactForm">
            <div class="form-group">
              <label for="contactName" class="form-label">
                Name <span class="required">*</span>
              </label>
              <input
                type="text"
                id="contactName"
                name="name"
                class="input"
                placeholder="Enter your full name"
              />
              <div class="error-message" id="nameError"></div>
            </div>

            <div class="form-group">
              <label for="contactEmail" class="form-label">
                Email <span class="required">*</span>
              </label>
              <input
                type="email"
                id="contactEmail"
                name="email"
                class="input"
                placeholder="Enter your email address"
              />
              <div class="error-message" id="emailError"></div>
            </div>

            <div class="form-group">
              <label for="contactPhone" class="form-label">
                Phone Number <span class="required">*</span>
              </label>
              <input
                type="tel"
                id="contactPhone"
                name="phone"
                class="input"
                placeholder="Enter your phone number"
              />
              <div class="error-message" id="phoneError"></div>
            </div>

            <div class="form-group">
              <label for="contactMessage" class="form-label">
                Message <span class="required">*</span>
              </label>
              <textarea
                id="contactMessage"
                name="message"
                rows="4"
                class="textarea"
                placeholder="Enter your message or inquiry..."
                style="resize: none;"
              ></textarea>
              <div class="error-message" id="messageError"></div>
            </div>

            <button
              type="submit"
              id="submitBtn"
              class="btn btn-primary btn-full"
              style="font-weight: 600; padding: 1rem; border-radius: 0.75rem; box-shadow: var(--shadow-button); font-size: 1.125rem;"
            >
              <span style="display: flex; align-items: center; justify-content: center;">
                <span style="margin-right: 0.5rem;">🚀</span>
                Send Message
              </span>
            </button>
          </form>
        </div>
      </div>
    `;
  }
}

// Initialize App
class App {
  constructor() {
    this.router = new Router();
    this.init();
  }

  async init() {
    // Show loading screen
    document.getElementById('loadingScreen').style.display = 'flex';
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Check if user has entered name
    const storedName = localStorage.getItem('userWelcomeName');
    if (storedName) {
      appState.userName = storedName;
      appState.hasEnteredName = true;
    }
    
    appState.isLoading = false;
    
    // Hide loading screen
    document.getElementById('loadingScreen').style.display = 'none';
    
    if (appState.hasEnteredName) {
      // Show main app
      document.getElementById('nameGateModal').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      this.router.navigate('home');
      this.setupEventListeners();
    } else {
      // Show name gate
      document.getElementById('nameGateModal').style.display = 'flex';
      this.setupNameGateListeners();
    }
  }

  setupNameGateListeners() {
    const nameInput = document.getElementById('nameInput');
    const enterBtn = document.getElementById('enterWebsiteBtn');

    nameInput.addEventListener('input', (e) => {
      const isValid = e.target.value.trim().length > 0;
      enterBtn.disabled = !isValid;
    });

    nameInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter' && !enterBtn.disabled) {
        this.handleNameSubmit();
      }
    });

    enterBtn.addEventListener('click', () => {
      this.handleNameSubmit();
    });
  }

  handleNameSubmit() {
    const nameInput = document.getElementById('nameInput');
    const name = nameInput.value.trim();
    
    if (name) {
      appState.userName = name;
      appState.hasEnteredName = true;
      localStorage.setItem('userWelcomeName', name);
      
      // Hide name gate and show main app
      document.getElementById('nameGateModal').style.display = 'none';
      document.getElementById('app').style.display = 'block';
      
      this.router.navigate('home');
      this.setupEventListeners();
    }
  }

  setupEventListeners() {
    // Navigation links
    document.querySelectorAll('[data-route]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const route = e.currentTarget.dataset.route;
        this.router.navigate(route);
      });
    });

    // Setup contact form listeners when needed
    this.setupContactFormListeners();
  }

  setupContactFormListeners() {
    // Use event delegation for dynamically created forms
    document.addEventListener('submit', (e) => {
      if (e.target.id === 'contactForm') {
        e.preventDefault();
        this.handleContactFormSubmit(e.target);
      }
    });

    document.addEventListener('input', (e) => {
      if (e.target.closest('#contactForm')) {
        this.handleContactFormInput(e);
      }
    });

    document.addEventListener('blur', (e) => {
      if (e.target.closest('#contactForm')) {
        this.handleContactFormBlur(e);
      }
    });
  }

  handleContactFormInput(e) {
    const field = e.target;
    const errorElement = document.getElementById(field.name + 'Error');
    
    // Clear error when user starts typing
    if (errorElement && errorElement.textContent) {
      errorElement.textContent = '';
      field.classList.remove('input-error');
    }
  }

  handleContactFormBlur(e) {
    const field = e.target;
    const fieldName = field.name;
    const fieldValue = field.value;
    const errorElement = document.getElementById(fieldName + 'Error');
    
    let error = null;
    
    switch (fieldName) {
      case 'name':
        error = FormValidator.validateName(fieldValue);
        break;
      case 'email':
        error = FormValidator.validateEmail(fieldValue);
        break;
      case 'phone':
        error = FormValidator.validatePhone(fieldValue);
        break;
      case 'message':
        error = FormValidator.validateMessage(fieldValue);
        break;
    }
    
    if (error && errorElement) {
      errorElement.textContent = error;
      field.classList.add('input-error');
    }
  }

  async handleContactFormSubmit(form) {
    const submitBtn = document.getElementById('submitBtn');
    const formData = new FormData(form);
    
    // Validate all fields
    const errors = {
      name: FormValidator.validateName(formData.get('name')),
      email: FormValidator.validateEmail(formData.get('email')),
      phone: FormValidator.validatePhone(formData.get('phone')),
      message: FormValidator.validateMessage(formData.get('message'))
    };

    // Display errors
    let hasErrors = false;
    Object.keys(errors).forEach(field => {
      const errorElement = document.getElementById(field + 'Error');
      const inputElement = document.getElementById('contact' + field.charAt(0).toUpperCase() + field.slice(1));
      
      if (errors[field]) {
        hasErrors = true;
        if (errorElement) errorElement.textContent = errors[field];
        if (inputElement) inputElement.classList.add('input-error');
      } else {
        if (errorElement) errorElement.textContent = '';
        if (inputElement) inputElement.classList.remove('input-error');
      }
    });

    if (hasErrors) {
      toast.error("Please fix the errors in the form");
      return;
    }

    // Submit form
    submitBtn.disabled = true;
    submitBtn.innerHTML = `
      <span style="display: flex; align-items: center; justify-content: center;">
        <span style="margin-right: 0.5rem;">⏳</span>
        Sending...
      </span>
    `;

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast.success("Message sent successfully! We'll get back to you soon.");
      
      // Reset form
      form.reset();
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      submitBtn.disabled = false;
      submitBtn.innerHTML = `
        <span style="display: flex; align-items: center; justify-content: center;">
          <span style="margin-right: 0.5rem;">🚀</span>
          Send Message
        </span>
      `;
    }
  }
}

// Global router instance
let router;

// Initialize app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  router = app.router;
});