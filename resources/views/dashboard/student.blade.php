@extends('layouts.dashboard')

@section('title', 'Student Dashboard')
@section('page-title', 'Student Dashboard')

@section('navigation')
    <!-- Dashboard -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z"></path>
        </svg>
        Dashboard
    </a>

    <!-- My Classes -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
        </svg>
        My Classes
    </a>

    <!-- Grades -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        My Grades
    </a>

    <!-- Attendance -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        </svg>
        Attendance
    </a>

    <!-- Schedule -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
        </svg>
        Schedule
    </a>

    <!-- Assignments -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
        </svg>
        Assignments
    </a>

    <!-- Messages -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
        </svg>
        Messages
    </a>

    <!-- Profile -->
    <a href="#" class="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg">
        <svg class="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
        </svg>
        Profile
    </a>
@endsection

@section('content')
<div class="space-y-6">
    <!-- Welcome Section -->
    <div class="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
        <div class="flex items-center justify-between">
            <div>
                <h1 class="text-2xl font-bold">Hello, {{ auth()->user()->name }}!</h1>
                <p class="text-primary-100 mt-1">Ready to learn something new today?</p>
            </div>
            <div class="hidden md:block">
                <div class="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                </div>
            </div>
        </div>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Current GPA -->
        <div class="card p-6 animate-fade-in">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-success-100 dark:bg-success-900 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Current GPA</p>
                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">3.85</p>
                    <p class="text-sm text-success-600 dark:text-success-400">+0.15 from last term</p>
                </div>
            </div>
        </div>

        <!-- Attendance Rate -->
        <div class="card p-6 animate-fade-in" style="animation-delay: 0.1s">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                        </svg>
                    </div>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Attendance Rate</p>
                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">98.5%</p>
                    <p class="text-sm text-success-600 dark:text-success-400">Excellent!</p>
                </div>
            </div>
        </div>

        <!-- Pending Assignments -->
        <div class="card p-6 animate-fade-in" style="animation-delay: 0.2s">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-warning-100 dark:bg-warning-900 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                    </div>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Pending Assignments</p>
                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">3</p>
                    <p class="text-sm text-warning-600 dark:text-warning-400">Due this week</p>
                </div>
            </div>
        </div>

        <!-- Classes Today -->
        <div class="card p-6 animate-fade-in" style="animation-delay: 0.3s">
            <div class="flex items-center">
                <div class="flex-shrink-0">
                    <div class="w-8 h-8 bg-danger-100 dark:bg-danger-900 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-danger-600 dark:text-danger-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                </div>
                <div class="ml-4">
                    <p class="text-sm font-medium text-gray-600 dark:text-gray-400">Classes Today</p>
                    <p class="text-2xl font-semibold text-gray-900 dark:text-white">5</p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">Next: Math (9:00 AM)</p>
                </div>
            </div>
        </div>
    </div>

    <!-- Today's Schedule and Recent Grades -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Today's Schedule -->
        <div class="card p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Today's Schedule</h3>
            <div class="space-y-4">
                <div class="flex items-center space-x-4 p-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-primary-600 rounded-lg flex items-center justify-center">
                            <span class="text-sm font-medium text-white">9:00</span>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Mathematics</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Room 201 • Mr. Smith</p>
                    </div>
                    <div class="flex-shrink-0">
                        <span class="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-800 dark:bg-primary-900 dark:text-primary-200">
                            Current
                        </span>
                    </div>
                </div>

                <div class="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                            <span class="text-sm font-medium text-white">10:00</span>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Physics</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Room 203 • Ms. Johnson</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                            <span class="text-sm font-medium text-white">11:00</span>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">English</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Room 105 • Mr. Brown</p>
                    </div>
                </div>

                <div class="flex items-center space-x-4 p-3 bg-gray-50 dark:bg-gray-700 rounded-lg">
                    <div class="flex-shrink-0">
                        <div class="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center">
                            <span class="text-sm font-medium text-white">14:00</span>
                        </div>
                    </div>
                    <div class="flex-1 min-w-0">
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Chemistry</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Room 301 • Dr. Wilson</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Recent Grades -->
        <div class="card p-6">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Recent Grades</h3>
            <div class="space-y-4">
                <div class="flex items-center justify-between p-3 bg-success-50 dark:bg-success-900 rounded-lg">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-success-100 dark:bg-success-800 rounded-full flex items-center justify-center">
                            <span class="text-sm font-medium text-success-600 dark:text-success-400">A</span>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-900 dark:text-white">Mathematics Quiz</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Algebra & Geometry</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-success-600 dark:text-success-400">95%</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">2 days ago</p>
                    </div>
                </div>

                <div class="flex items-center justify-between p-3 bg-primary-50 dark:bg-primary-900 rounded-lg">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-primary-100 dark:bg-primary-800 rounded-full flex items-center justify-center">
                            <span class="text-sm font-medium text-primary-600 dark:text-primary-400">B+</span>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-900 dark:text-white">Physics Lab Report</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Mechanics & Motion</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-primary-600 dark:text-primary-400">87%</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">1 week ago</p>
                    </div>
                </div>

                <div class="flex items-center justify-between p-3 bg-warning-50 dark:bg-warning-900 rounded-lg">
                    <div class="flex items-center space-x-3">
                        <div class="w-8 h-8 bg-warning-100 dark:bg-warning-800 rounded-full flex items-center justify-center">
                            <span class="text-sm font-medium text-warning-600 dark:text-warning-400">B</span>
                        </div>
                        <div>
                            <p class="text-sm font-medium text-gray-900 dark:text-white">English Essay</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">Creative Writing</p>
                        </div>
                    </div>
                    <div class="text-right">
                        <p class="text-lg font-semibold text-warning-600 dark:text-warning-400">82%</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">2 weeks ago</p>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Pending Assignments -->
    <div class="card p-6">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-4">Pending Assignments</h3>
        <div class="space-y-4">
            <div class="flex items-center justify-between p-4 border border-warning-200 dark:border-warning-700 rounded-lg bg-warning-50 dark:bg-warning-900">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-warning-100 dark:bg-warning-800 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-warning-600 dark:text-warning-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Chemistry Lab Report</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Due: Tomorrow at 11:59 PM</p>
                    </div>
                </div>
                <button class="btn btn-warning btn-sm">Submit</button>
            </div>

            <div class="flex items-center justify-between p-4 border border-primary-200 dark:border-primary-700 rounded-lg bg-primary-50 dark:bg-primary-900">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-primary-100 dark:bg-primary-800 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">Mathematics Problem Set</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Due: Friday at 3:00 PM</p>
                    </div>
                </div>
                <button class="btn btn-primary btn-sm">Start</button>
            </div>

            <div class="flex items-center justify-between p-4 border border-success-200 dark:border-success-700 rounded-lg bg-success-50 dark:bg-success-900">
                <div class="flex items-center space-x-3">
                    <div class="w-10 h-10 bg-success-100 dark:bg-success-800 rounded-lg flex items-center justify-center">
                        <svg class="w-5 h-5 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path>
                        </svg>
                    </div>
                    <div>
                        <p class="text-sm font-medium text-gray-900 dark:text-white">English Reading Assignment</p>
                        <p class="text-xs text-gray-500 dark:text-gray-400">Due: Next Monday at 9:00 AM</p>
                    </div>
                </div>
                <button class="btn btn-success btn-sm">View</button>
            </div>
        </div>
    </div>
</div>
@endsection
