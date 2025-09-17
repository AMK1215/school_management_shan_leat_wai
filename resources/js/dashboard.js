// Modern ES6 Dashboard Components for School Management System

/**
 * Dashboard Statistics with Real-time Updates
 */
class DashboardStats {
    #stats = new Map();
    #updateInterval = null;

    constructor(container) {
        this.container = container;
        this.init();
    }

    init() {
        this.bindEvents();
        this.startRealTimeUpdates();
    }

    bindEvents() {
        // Refresh stats on click
        document.addEventListener('click', (e) => {
            if (e.target.closest('[data-refresh-stats]')) {
                this.refreshStats();
            }
        });
    }

    async refreshStats() {
        try {
            // Simulate API call - replace with actual endpoint
            const response = await fetch('/api/dashboard/stats');
            const data = await response.json();
            this.updateStatsDisplay(data);
        } catch (error) {
            console.error('Failed to refresh stats:', error);
            window.notificationSystem?.show('Failed to refresh statistics', { type: 'error' });
        }
    }

    updateStatsDisplay(data) {
        Object.entries(data).forEach(([key, value]) => {
            const element = document.querySelector(`[data-stat="${key}"]`);
            if (element) {
                this.animateValueChange(element, value);
            }
        });
    }

    animateValueChange(element, newValue) {
        const currentValue = parseInt(element.textContent) || 0;
        const difference = newValue - currentValue;
        const steps = 20;
        const stepValue = difference / steps;
        let currentStep = 0;

        const animate = () => {
            if (currentStep < steps) {
                const value = Math.round(currentValue + (stepValue * currentStep));
                element.textContent = value.toLocaleString();
                currentStep++;
                requestAnimationFrame(animate);
            } else {
                element.textContent = newValue.toLocaleString();
            }
        };

        animate();
    }

    startRealTimeUpdates() {
        // Update every 30 seconds
        this.#updateInterval = setInterval(() => {
            this.refreshStats();
        }, 30000);
    }

    stop() {
        if (this.#updateInterval) {
            clearInterval(this.#updateInterval);
        }
    }
}

/**
 * Interactive Data Tables with ES6
 */
class DataTable {
    #data = [];
    #filteredData = [];
    #currentPage = 1;
    #itemsPerPage = 10;
    #sortColumn = null;
    #sortDirection = 'asc';

    constructor(container, options = {}) {
        this.container = container;
        this.options = { ...this.getDefaultOptions(), ...options };
        this.init();
    }

    getDefaultOptions() {
        return {
            searchable: true,
            sortable: true,
            pagination: true,
            responsive: true,
            actions: []
        };
    }

    init() {
        this.render();
        this.bindEvents();
    }

    setData(data) {
        this.#data = data;
        this.#filteredData = [...data];
        this.render();
    }

    render() {
        const { columns } = this.options;
        
        this.container.innerHTML = `
            <div class="card">
                ${this.options.searchable ? this.renderSearchBar() : ''}
                <div class="overflow-x-auto">
                    <table class="w-full">
                        <thead class="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                ${columns.map(col => `
                                    <th class="px-6 py-3 text-left text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider ${this.options.sortable ? 'cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-700' : ''}"
                                        ${this.options.sortable ? `data-sort="${col.key}"` : ''}>
                                        <div class="flex items-center space-x-1">
                                            <span>${col.label}</span>
                                            ${this.options.sortable ? this.renderSortIcon(col.key) : ''}
                                        </div>
                                    </th>
                                `).join('')}
                                ${this.options.actions.length > 0 ? '<th class="px-6 py-3 text-right text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Actions</th>' : ''}
                            </tr>
                        </thead>
                        <tbody class="bg-white dark:bg-slate-900 divide-y divide-slate-200 dark:divide-slate-700">
                            ${this.renderRows()}
                        </tbody>
                    </table>
                </div>
                ${this.options.pagination ? this.renderPagination() : ''}
            </div>
        `;
    }

    renderSearchBar() {
        return `
            <div class="p-4 border-b border-slate-200 dark:border-slate-700">
                <div class="relative">
                    <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg class="h-5 w-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                    </div>
                    <input type="text" 
                           data-search
                           class="input pl-10" 
                           placeholder="Search...">
                </div>
            </div>
        `;
    }

    renderSortIcon(column) {
        if (this.#sortColumn === column) {
            return this.#sortDirection === 'asc' 
                ? '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"></path></svg>'
                : '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>';
        }
        return '<svg class="w-4 h-4 text-slate-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"></path></svg>';
    }

    renderRows() {
        const startIndex = (this.#currentPage - 1) * this.#itemsPerPage;
        const endIndex = startIndex + this.#itemsPerPage;
        const pageData = this.#filteredData.slice(startIndex, endIndex);

        return pageData.map(row => `
            <tr class="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors duration-150">
                ${this.options.columns.map(col => `
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-slate-900 dark:text-slate-100">
                        ${this.renderCell(row, col)}
                    </td>
                `).join('')}
                ${this.options.actions.length > 0 ? `
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <div class="flex items-center justify-end space-x-2">
                            ${this.options.actions.map(action => `
                                <button class="btn btn-sm ${action.class || 'btn-secondary'}" 
                                        data-action="${action.name}" 
                                        data-id="${row.id}">
                                    ${action.label}
                                </button>
                            `).join('')}
                        </div>
                    </td>
                ` : ''}
            </tr>
        `).join('');
    }

    renderCell(row, column) {
        if (column.render) {
            return column.render(row[column.key], row);
        }
        return row[column.key] || '';
    }

    renderPagination() {
        const totalPages = Math.ceil(this.#filteredData.length / this.#itemsPerPage);
        
        return `
            <div class="px-6 py-3 flex items-center justify-between border-t border-slate-200 dark:border-slate-700">
                <div class="flex-1 flex justify-between sm:hidden">
                    <button class="btn btn-sm btn-secondary" ${this.#currentPage === 1 ? 'disabled' : ''} data-page="${this.#currentPage - 1}">Previous</button>
                    <button class="btn btn-sm btn-secondary" ${this.#currentPage === totalPages ? 'disabled' : ''} data-page="${this.#currentPage + 1}">Next</button>
                </div>
                <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <p class="text-sm text-slate-700 dark:text-slate-300">
                            Showing <span class="font-medium">${(this.#currentPage - 1) * this.#itemsPerPage + 1}</span>
                            to <span class="font-medium">${Math.min(this.#currentPage * this.#itemsPerPage, this.#filteredData.length)}</span>
                            of <span class="font-medium">${this.#filteredData.length}</span> results
                        </p>
                    </div>
                    <div class="flex space-x-1">
                        ${Array.from({ length: totalPages }, (_, i) => i + 1).map(page => `
                            <button class="btn btn-sm ${page === this.#currentPage ? 'btn-primary' : 'btn-ghost'}" 
                                    data-page="${page}">
                                ${page}
                            </button>
                        `).join('')}
                    </div>
                </div>
            </div>
        `;
    }

    bindEvents() {
        // Search functionality
        this.container.addEventListener('input', (e) => {
            if (e.target.matches('[data-search]')) {
                this.handleSearch(e.target.value);
            }
        });

        // Sort functionality
        this.container.addEventListener('click', (e) => {
            const sortButton = e.target.closest('[data-sort]');
            if (sortButton) {
                this.handleSort(sortButton.dataset.sort);
            }

            const pageButton = e.target.closest('[data-page]');
            if (pageButton && !pageButton.disabled) {
                this.#currentPage = parseInt(pageButton.dataset.page);
                this.render();
            }

            const actionButton = e.target.closest('[data-action]');
            if (actionButton) {
                this.handleAction(actionButton.dataset.action, actionButton.dataset.id);
            }
        });
    }

    handleSearch(query) {
        this.#filteredData = this.#data.filter(row => 
            Object.values(row).some(value => 
                String(value).toLowerCase().includes(query.toLowerCase())
            )
        );
        this.#currentPage = 1;
        this.render();
    }

    handleSort(column) {
        if (this.#sortColumn === column) {
            this.#sortDirection = this.#sortDirection === 'asc' ? 'desc' : 'asc';
        } else {
            this.#sortColumn = column;
            this.#sortDirection = 'asc';
        }

        this.#filteredData.sort((a, b) => {
            const aVal = a[column];
            const bVal = b[column];
            
            if (aVal < bVal) return this.#sortDirection === 'asc' ? -1 : 1;
            if (aVal > bVal) return this.#sortDirection === 'asc' ? 1 : -1;
            return 0;
        });

        this.render();
    }

    handleAction(action, id) {
        // Emit custom event for action handling
        this.container.dispatchEvent(new CustomEvent('tableAction', {
            detail: { action, id }
        }));
    }
}

/**
 * Modern Chart Component using CSS and ES6
 */
class SimpleChart {
    constructor(container, data, options = {}) {
        this.container = container;
        this.data = data;
        this.options = { type: 'bar', ...options };
        this.render();
    }

    render() {
        const maxValue = Math.max(...this.data.map(d => d.value));
        
        this.container.innerHTML = `
            <div class="space-y-4">
                ${this.data.map((item, index) => `
                    <div class="flex items-center space-x-4" style="animation-delay: ${index * 0.1}s">
                        <div class="w-20 text-sm text-slate-600 dark:text-slate-400">${item.label}</div>
                        <div class="flex-1 bg-slate-200 dark:bg-slate-700 rounded-full h-6 relative overflow-hidden">
                            <div class="h-full bg-gradient-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000 ease-out animate-scale-in"
                                 style="width: ${(item.value / maxValue) * 100}%"></div>
                            <div class="absolute inset-0 flex items-center justify-end pr-2">
                                <span class="text-xs font-medium text-white">${item.value}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}

/**
 * Real-time Activity Feed
 */
class ActivityFeed {
    #activities = [];
    #container = null;

    constructor(container) {
        this.#container = container;
        this.init();
    }

    init() {
        this.render();
        this.startPolling();
    }

    async fetchActivities() {
        try {
            // Simulate API call - replace with actual endpoint
            const response = await fetch('/api/activities');
            const activities = await response.json();
            this.addActivities(activities);
        } catch (error) {
            console.error('Failed to fetch activities:', error);
        }
    }

    addActivity(activity) {
        this.#activities.unshift({
            ...activity,
            id: Date.now(),
            timestamp: new Date()
        });

        // Keep only last 50 activities
        this.#activities = this.#activities.slice(0, 50);
        this.render();
    }

    addActivities(activities) {
        activities.forEach(activity => this.addActivity(activity));
    }

    render() {
        this.#container.innerHTML = `
            <div class="space-y-3">
                ${this.#activities.map((activity, index) => `
                    <div class="flex items-start space-x-3 animate-fade-in" style="animation-delay: ${index * 0.05}s">
                        <div class="flex-shrink-0">
                            <div class="w-8 h-8 ${this.getActivityColor(activity.type)} rounded-full flex items-center justify-center">
                                ${this.getActivityIcon(activity.type)}
                            </div>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm text-slate-900 dark:text-white">${activity.message}</p>
                            <p class="text-xs text-slate-500 dark:text-slate-400">${this.formatTime(activity.timestamp)}</p>
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }

    getActivityColor(type) {
        const colors = {
            success: 'bg-green-100 dark:bg-green-900',
            warning: 'bg-amber-100 dark:bg-amber-900',
            error: 'bg-red-100 dark:bg-red-900',
            info: 'bg-blue-100 dark:bg-blue-900'
        };
        return colors[type] || colors.info;
    }

    getActivityIcon(type) {
        const icons = {
            success: '<svg class="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            warning: '<svg class="w-4 h-4 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>',
            error: '<svg class="w-4 h-4 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            info: '<svg class="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        };
        return icons[type] || icons.info;
    }

    formatTime(timestamp) {
        const now = new Date();
        const diff = now - timestamp;
        const minutes = Math.floor(diff / 60000);
        const hours = Math.floor(minutes / 60);
        const days = Math.floor(hours / 24);

        if (days > 0) return `${days} day${days > 1 ? 's' : ''} ago`;
        if (hours > 0) return `${hours} hour${hours > 1 ? 's' : ''} ago`;
        if (minutes > 0) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
        return 'Just now';
    }

    startPolling() {
        // Poll for new activities every 10 seconds
        setInterval(() => {
            this.fetchActivities();
        }, 10000);
    }
}

/**
 * Progress Tracking Component
 */
class ProgressTracker {
    constructor(container, progress, options = {}) {
        this.container = container;
        this.progress = Math.max(0, Math.min(100, progress));
        this.options = { 
            animated: true, 
            showLabel: true,
            color: 'blue',
            ...options 
        };
        this.render();
    }

    render() {
        const colorClasses = {
            blue: 'from-blue-500 to-blue-600',
            green: 'from-green-500 to-green-600',
            amber: 'from-amber-500 to-amber-600',
            red: 'from-red-500 to-red-600'
        };

        this.container.innerHTML = `
            <div class="space-y-2">
                ${this.options.showLabel ? `
                    <div class="flex justify-between text-sm">
                        <span class="text-slate-600 dark:text-slate-400">${this.options.label || 'Progress'}</span>
                        <span class="font-medium text-slate-900 dark:text-white">${this.progress}%</span>
                    </div>
                ` : ''}
                <div class="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                    <div class="h-full bg-gradient-to-r ${colorClasses[this.options.color]} rounded-full transition-all duration-1000 ease-out ${this.options.animated ? 'animate-scale-in' : ''}"
                         style="width: ${this.progress}%"></div>
                </div>
            </div>
        `;
    }

    updateProgress(newProgress) {
        this.progress = Math.max(0, Math.min(100, newProgress));
        this.render();
    }
}

// Initialize dashboard components when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize dashboard stats
    const statsContainer = document.querySelector('[data-dashboard-stats]');
    if (statsContainer) {
        window.dashboardStats = new DashboardStats(statsContainer);
    }

    // Initialize activity feeds
    document.querySelectorAll('[data-activity-feed]').forEach(container => {
        new ActivityFeed(container);
    });

    // Initialize progress trackers
    document.querySelectorAll('[data-progress-tracker]').forEach(container => {
        const progress = parseInt(container.dataset.progress) || 0;
        const options = {
            label: container.dataset.label,
            color: container.dataset.color || 'blue',
            animated: container.dataset.animated !== 'false'
        };
        new ProgressTracker(container, progress, options);
    });

    // Enhanced card interactions
    document.querySelectorAll('.card-interactive').forEach(card => {
        card.addEventListener('click', () => {
            card.classList.add('animate-pulse-glow');
            setTimeout(() => card.classList.remove('animate-pulse-glow'), 2000);
        });
    });
});

// Export for global access
window.SchoolMS = {
    ...window.SchoolMS,
    DashboardStats,
    DataTable,
    SimpleChart,
    ActivityFeed,
    ProgressTracker
};
