<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'School Management') }} - @yield('title', 'Dashboard')</title>

    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700" rel="stylesheet" />

    <!-- Scripts -->
    @vite(['resources/css/app.css', 'resources/js/app.js', 'resources/js/theme.js'])
</head>
<body class="h-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="min-h-full">
        <!-- Mobile menu button -->
        <div class="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
            <div class="flex items-center justify-between px-4 py-3">
                <button id="mobile-menu-button" class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                    </svg>
                </button>
                <h1 class="text-lg font-semibold text-gray-900 dark:text-white">@yield('page-title', 'Dashboard')</h1>
                <button id="theme-toggle" class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                    <span id="theme-icon"></span>
                </button>
            </div>
        </div>

        <!-- Sidebar -->
        <div id="mobile-menu" class="sidebar sidebar-mobile lg:translate-x-0 z-40">
            <div class="flex flex-col h-full">
                <!-- Logo -->
                <div class="flex items-center justify-center h-16 px-4 border-b border-gray-200 dark:border-gray-700">
                    <div class="flex items-center space-x-2">
                        <div class="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                            <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                            </svg>
                        </div>
                        <span class="text-xl font-bold text-gray-900 dark:text-white">SchoolMS</span>
                    </div>
                </div>

                <!-- Navigation -->
                <nav class="flex-1 px-4 py-6 space-y-2">
                    @yield('navigation')
                </nav>

                <!-- User menu -->
                <div class="p-4 border-t border-gray-200 dark:border-gray-700">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                            <span class="text-sm font-medium text-blue-600 dark:text-blue-400">
                                {{ substr(auth()->user()->name ?? 'U', 0, 1) }}
                            </span>
                        </div>
                        <div class="flex-1 min-w-0">
                            <p class="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {{ auth()->user()->name ?? 'User' }}
                            </p>
                            <p class="text-xs text-gray-500 dark:text-gray-400 truncate">
                                {{ ucfirst(auth()->user()->type ?? 'user') }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main content -->
        <div class="lg:pl-64">
            <!-- Top navigation -->
            <div class="sticky top-0 z-30 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:block hidden">
                <div class="flex items-center justify-between px-6 py-4">
                    <div class="flex items-center space-x-4">
                        <h1 class="text-2xl font-bold text-gray-900 dark:text-white">@yield('page-title', 'Dashboard')</h1>
                    </div>
                    <div class="flex items-center space-x-4">
                        <!-- Theme toggle -->
                        <button id="theme-toggle" class="text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            <span id="theme-icon"></span>
                        </button>
                        
                        <!-- Notifications -->
                        <button class="relative text-gray-500 dark:text-gray-400 hover:text-gray-600 dark:hover:text-gray-300">
                            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-5 5v-5zM9 12l2 2 4-4M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span class="absolute -top-1 -right-1 w-3 h-3 bg-danger-500 rounded-full"></span>
                        </button>

                        <!-- User menu -->
                        <div class="relative">
                            <button class="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                                <div class="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                                    <span class="text-sm font-medium text-blue-600 dark:text-blue-400">
                                        {{ substr(auth()->user()->name ?? 'U', 0, 1) }}
                                    </span>
                                </div>
                                <span class="text-sm font-medium">{{ auth()->user()->name ?? 'User' }}</span>
                                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Page content -->
            <main class="p-6">
                @yield('content')
            </main>
        </div>
    </div>

    @stack('scripts')
</body>
</html>
