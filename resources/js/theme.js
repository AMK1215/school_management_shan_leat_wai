// Modern ES6 School Management System UI Components

/**
 * Theme Management with ES6 Classes and Modern Features
 */
class ThemeManager {
    #theme = localStorage.getItem('theme') || 'dark';
    #observers = new Set();

    constructor() {
        this.init();
    }

    init() {
        this.applyTheme();
        this.bindEvents();
        this.observeSystemTheme();
    }

    get theme() {
        return this.#theme;
    }

    set theme(value) {
        this.#theme = value;
        localStorage.setItem('theme', value);
        this.applyTheme();
        this.notifyObservers();
    }

    applyTheme() {
        const html = document.documentElement;
        const themeIcons = document.querySelectorAll('[data-theme-icon]');
        
        // Apply theme class with smooth transition
        html.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        
        if (this.#theme === 'dark') {
            html.classList.add('dark');
            this.updateThemeIcons('sun');
        } else {
            html.classList.remove('dark');
            this.updateThemeIcons('moon');
        }

        // Dispatch custom theme change event
        window.dispatchEvent(new CustomEvent('themeChanged', { 
            detail: { theme: this.#theme } 
        }));
    }

    updateThemeIcons(iconType) {
        const icons = document.querySelectorAll('[data-theme-icon]');
        icons.forEach(icon => {
            icon.innerHTML = iconType === 'sun' ? this.getSunIcon() : this.getMoonIcon();
        });
    }

    toggleTheme() {
        this.theme = this.#theme === 'dark' ? 'light' : 'dark';
        
        // Add visual feedback
        const toggleButtons = document.querySelectorAll('[data-theme-toggle]');
        toggleButtons.forEach(btn => {
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => btn.style.transform = '', 150);
        });
    }

    bindEvents() {
        // Use event delegation for better performance
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-theme-toggle]')) {
                e.preventDefault();
                this.toggleTheme();
            }
        });
    }

    observeSystemTheme() {
        if (window.matchMedia) {
            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            mediaQuery.addEventListener('change', (e) => {
                if (!localStorage.getItem('theme')) {
                    this.theme = e.matches ? 'dark' : 'light';
                }
            });
        }
    }

    // Observer pattern for theme changes
    subscribe(callback) {
        this.#observers.add(callback);
        return () => this.#observers.delete(callback);
    }

    notifyObservers() {
        this.#observers.forEach(callback => callback(this.#theme));
    }

    getSunIcon() {
        return `
            <svg class="w-5 h-5 transition-transform duration-200 hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
            </svg>
        `;
    }

    getMoonIcon() {
        return `
            <svg class="w-5 h-5 transition-transform duration-200 hover:-rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"></path>
            </svg>
        `;
    }
}

/**
 * Mobile Navigation with Modern ES6 Features
 */
class MobileNavigation {
    #isOpen = false;
    #menuButton = null;
    #menu = null;
    #overlay = null;

    constructor() {
        this.init();
    }

    init() {
        this.#menuButton = document.querySelector('[data-mobile-menu-toggle]');
        this.#menu = document.querySelector('[data-mobile-menu]');
        
        if (this.#menuButton && this.#menu) {
            this.createOverlay();
            this.bindEvents();
            this.setupAccessibility();
        }
    }

    createOverlay() {
        this.#overlay = document.createElement('div');
        this.#overlay.className = 'fixed inset-0 bg-black/50 z-30 hidden transition-opacity duration-300';
        this.#overlay.setAttribute('data-mobile-overlay', '');
        document.body.appendChild(this.#overlay);
    }

    bindEvents() {
        // Menu toggle
        this.#menuButton.addEventListener('click', () => this.toggle());
        
        // Overlay click to close
        this.#overlay.addEventListener('click', () => this.close());
        
        // Escape key to close
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.#isOpen) {
                this.close();
            }
        });

        // Close on window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 1024 && this.#isOpen) {
                this.close();
            }
        });
    }

    setupAccessibility() {
        this.#menuButton.setAttribute('aria-expanded', 'false');
        this.#menuButton.setAttribute('aria-controls', this.#menu.id || 'mobile-menu');
        this.#menu.setAttribute('role', 'navigation');
    }

    toggle() {
        this.#isOpen ? this.close() : this.open();
    }

    open() {
        this.#isOpen = true;
        this.#menu.classList.remove('-translate-x-full');
        this.#overlay.classList.remove('hidden');
        this.#menuButton.setAttribute('aria-expanded', 'true');
        
        // Prevent body scroll
        document.body.style.overflow = 'hidden';
        
        // Focus management
        setTimeout(() => {
            const firstFocusable = this.#menu.querySelector('a, button, input, [tabindex]');
            firstFocusable?.focus();
        }, 150);
    }

    close() {
        this.#isOpen = false;
        this.#menu.classList.add('-translate-x-full');
        this.#overlay.classList.add('hidden');
        this.#menuButton.setAttribute('aria-expanded', 'false');
        
        // Restore body scroll
        document.body.style.overflow = '';
        
        // Return focus to toggle button
        this.#menuButton.focus();
    }
}

/**
 * Modern Notification System with ES6 Features
 */
class NotificationSystem {
    #container = null;
    #notifications = new Map();
    #idCounter = 0;

    constructor() {
        this.createContainer();
    }

    createContainer() {
        this.#container = document.createElement('div');
        this.#container.className = 'fixed top-4 right-4 z-50 space-y-2';
        this.#container.setAttribute('data-notifications', '');
        document.body.appendChild(this.#container);
    }

    show(message, options = {}) {
        const {
            type = 'info',
            duration = 5000,
            persistent = false,
            actions = []
        } = options;

        const id = ++this.#idCounter;
        const notification = this.createElement(id, message, type, actions);
        
        this.#notifications.set(id, notification);
        this.#container.appendChild(notification);

        // Animate in
        requestAnimationFrame(() => {
            notification.classList.remove('translate-x-full', 'opacity-0');
        });

        // Auto remove if not persistent
        if (!persistent && duration > 0) {
            setTimeout(() => this.remove(id), duration);
        }

        return id;
    }

    createElement(id, message, type, actions) {
        const notification = document.createElement('div');
        notification.className = `
            transform translate-x-full opacity-0 transition-all duration-300 ease-out
            max-w-sm w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto
            ring-1 ring-black ring-opacity-5 overflow-hidden
        `;
        notification.setAttribute('data-notification-id', id);

        const typeColors = {
            success: 'bg-green-500',
            error: 'bg-red-500',
            warning: 'bg-yellow-500',
            info: 'bg-blue-500'
        };

        notification.innerHTML = `
            <div class="p-4">
                <div class="flex items-start">
                    <div class="flex-shrink-0">
                        <div class="w-2 h-2 ${typeColors[type]} rounded-full"></div>
                    </div>
                    <div class="ml-3 w-0 flex-1">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">
                            ${message}
                        </p>
                        ${actions.length > 0 ? this.createActions(actions) : ''}
                    </div>
                    <div class="ml-4 flex-shrink-0 flex">
                        <button class="inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md"
                                onclick="window.notificationSystem.remove(${id})">
                            <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        `;

        return notification;
    }

    createActions(actions) {
        return `
            <div class="mt-2 flex space-x-2">
                ${actions.map(action => `
                    <button class="text-sm font-medium text-blue-600 hover:text-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-md px-2 py-1"
                            onclick="${action.handler}">
                        ${action.label}
                    </button>
                `).join('')}
            </div>
        `;
    }

    remove(id) {
        const notification = this.#notifications.get(id);
        if (!notification) return;

        // Animate out
        notification.classList.add('translate-x-full', 'opacity-0');
        
        setTimeout(() => {
            notification.remove();
            this.#notifications.delete(id);
        }, 300);
    }

    clear() {
        this.#notifications.forEach((_, id) => this.remove(id));
    }
}

/**
 * Enhanced Form Validation with ES6
 */
class FormValidator {
    static rules = {
        required: (value) => value.trim() !== '',
        email: (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
        min: (value, length) => value.length >= length,
        max: (value, length) => value.length <= length,
        pattern: (value, regex) => new RegExp(regex).test(value)
    };

    static validate(form) {
        const errors = new Map();
        const inputs = form.querySelectorAll('[data-validate]');

        inputs.forEach(input => {
            const rules = input.dataset.validate.split('|');
            const fieldErrors = [];

            rules.forEach(rule => {
                const [ruleName, ...params] = rule.split(':');
                const validator = this.rules[ruleName];

                if (validator && !validator(input.value, ...params)) {
                    fieldErrors.push(this.getErrorMessage(ruleName, input.name, params));
                }
            });

            if (fieldErrors.length > 0) {
                errors.set(input.name, fieldErrors);
                this.showFieldError(input, fieldErrors[0]);
            } else {
                this.clearFieldError(input);
            }
        });

        return { isValid: errors.size === 0, errors };
    }

    static getErrorMessage(rule, field, params) {
        const messages = {
            required: `${field} is required`,
            email: `${field} must be a valid email`,
            min: `${field} must be at least ${params[0]} characters`,
            max: `${field} must not exceed ${params[0]} characters`
        };
        return messages[rule] || `${field} is invalid`;
    }

    static showFieldError(input, message) {
        input.classList.add('border-red-500');
        let errorElement = input.parentNode.querySelector('.field-error');
        
        if (!errorElement) {
            errorElement = document.createElement('p');
            errorElement.className = 'field-error text-red-500 text-sm mt-1';
            input.parentNode.appendChild(errorElement);
        }
        
        errorElement.textContent = message;
    }

    static clearFieldError(input) {
        input.classList.remove('border-red-500');
        const errorElement = input.parentNode.querySelector('.field-error');
        errorElement?.remove();
    }
}

// Initialize all components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize core components
    window.themeManager = new ThemeManager();
    window.mobileNavigation = new MobileNavigation();
    window.notificationSystem = new NotificationSystem();

    // Enhanced form handling
    document.addEventListener('submit', (e) => {
        const form = e.target.closest('form[data-validate-form]');
        if (form) {
            e.preventDefault();
            const { isValid, errors } = FormValidator.validate(form);
            
            if (isValid) {
                window.notificationSystem.show('Form submitted successfully!', { type: 'success' });
                // Proceed with form submission
            } else {
                window.notificationSystem.show('Please correct the errors below', { type: 'error' });
            }
        }
    });

    // Add smooth scrolling to anchor links
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href^="#"]');
        if (link) {
            e.preventDefault();
            const target = document.querySelector(link.getAttribute('href'));
            target?.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // Enhanced button interactions
    document.addEventListener('click', (e) => {
        const button = e.target.closest('button, .btn');
        if (button && !button.disabled) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.className = 'absolute inset-0 bg-white/20 rounded-lg scale-0 animate-ping';
            button.style.position = 'relative';
            button.style.overflow = 'hidden';
            button.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        }
    });
});

// Export for global access
window.SchoolMS = {
    ThemeManager,
    MobileNavigation,
    NotificationSystem,
    FormValidator
};
