<!DOCTYPE html>
<html lang="en" class="h-full">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>School Management System - Test</title>
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=inter:400,500,600,700" rel="stylesheet" />
    @vite(['resources/css/app.css', 'resources/js/app.js'])
</head>
<body class="h-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
            <div class="text-center">
                <div class="mx-auto h-16 w-16 bg-blue-600 rounded-2xl flex items-center justify-center animate-bounce">
                    <svg class="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
                <h2 class="mt-6 text-3xl font-bold text-gray-900 dark:text-white">
                    School Management System
                </h2>
                <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Test Page - Tailwind CSS & Theme Toggle Working!
                </p>
            </div>

            <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                <div class="space-y-4">
                    <button id="theme-toggle" class="w-full btn btn-primary">
                        <span id="theme-icon" class="mr-2"></span>
                        Toggle Theme
                    </button>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <a href="/login" class="btn btn-secondary">Login Page</a>
                        <a href="/dashboard/admin" class="btn btn-success">Admin Dashboard</a>
                        <a href="/dashboard/teacher" class="btn btn-warning">Teacher Dashboard</a>
                        <a href="/dashboard/student" class="btn btn-danger">Student Dashboard</a>
                    </div>
                    
                    <div class="grid grid-cols-2 gap-4">
                        <a href="/dashboard/parent" class="btn btn-primary">Parent Dashboard</a>
                        <a href="/dashboard/guardian" class="btn btn-secondary">Guardian Dashboard</a>
                    </div>
                </div>
            </div>

            <div class="text-center">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                    &copy; {{ date('Y') }} School Management System. All rights reserved.
                </p>
            </div>
        </div>
    </div>
</body>
</html>
