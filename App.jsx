<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MacroBuddy - Your Smart Nutrition Companion</title>
    <meta name="description" content="MacroBuddy is your smart nutrition companion that helps you track macros, calculate nutrition targets, and maintain healthy eating habits with gamified streaks and AI-powered recommendations." />
    
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    
    <!-- Custom Tailwind Config -->
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        emerald: {
                            50: '#ecfdf5',
                            100: '#d1fae5',
                            200: '#a7f3d0',
                            300: '#6ee7b7',
                            400: '#34d399',
                            500: '#10b981',
                            600: '#059669',
                            700: '#047857',
                            800: '#065f46',
                            900: '#064e3b',
                        }
                    },
                    animation: {
                        'pulse-glow': 'pulseGlow 2s infinite',
                        'float': 'float 3s ease-in-out infinite',
                    },
                    keyframes: {
                        pulseGlow: {
                            '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
                            '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
                        },
                        float: {
                            '0%, 100%': { transform: 'translateY(0px)' },
                            '50%': { transform: 'translateY(-10px)' },
                        },
                    }
                }
            }
        }
    </script>
    
    <style>
        .glass {
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
            -webkit-backdrop-filter: blur(10px);
            border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .gradient-text {
            background: linear-gradient(135deg, #10b981, #059669, #047857);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
        }
        
        .animate-pulse-glow {
            animation: pulseGlow 2s infinite;
        }
        
        .animate-float {
            animation: float 3s ease-in-out infinite;
        }
        
        @keyframes pulseGlow {
            0%, 100% { box-shadow: 0 0 20px rgba(16, 185, 129, 0.3); }
            50% { box-shadow: 0 0 40px rgba(16, 185, 129, 0.6); }
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    </style>
</head>
<body class="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100">
    <!-- Background with food photography overlay -->
    <div class="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10" 
         style="background-image: url('./bg.jpg')">
    </div>
    
    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-500/20 to-green-600/20"></div>
    
    <!-- Main content -->
    <div class="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        <!-- Vault Icon -->
        <div class="mb-8 animate-float">
            <div class="relative">
                <div class="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm animate-pulse-glow">
                    <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                </div>
                <div class="absolute inset-0 w-24 h-24 bg-emerald-400/30 rounded-full blur-xl animate-pulse"></div>
            </div>
        </div>

        <!-- Title -->
        <div class="text-center mb-8">
            <h1 class="text-6xl md:text-7xl font-bold mb-4">
                <span class="gradient-text">MacroBuddy</span>
            </h1>
            <p class="text-xl md:text-2xl text-emerald-800 font-semibold">
                🔒 Smart Login Vault - Your Health Journey Starts Here
            </p>
        </div>

        <!-- Login Form -->
        <div class="w-full max-w-md">
            <div class="glass rounded-3xl p-8 border-4 border-emerald-500/20 shadow-2xl">
                <form class="space-y-6">
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Username</label>
                        <input type="text" 
                               class="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors" 
                               placeholder="Enter your username" required>
                    </div>
                    
                    <div>
                        <label class="block text-sm font-semibold text-gray-700 mb-2">Password</label>
                        <input type="password" 
                               class="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors" 
                               placeholder="Enter your password" required>
                    </div>
                    
                    <button type="submit" 
                            class="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                        Unlock Your Health Journey
                    </button>
                </form>
            </div>
        </div>

        <!-- Recent Activity Timeline -->
        <div class="mt-12 w-full max-w-md">
            <div class="glass rounded-2xl p-6 border border-emerald-200/50">
                <h3 class="text-lg font-semibold text-emerald-800 mb-4 text-center">Recent Activity</h3>
                <div class="space-y-3">
                    <div class="flex items-center space-x-3">
                        <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="flex-1">
                            <p class="text-sm font-medium text-gray-700">Login successful</p>
                            <p class="text-xs text-gray-500">2 min ago</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <svg class="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="flex-1">
                            <p class="text-sm font-medium text-gray-700">Login successful</p>
                            <p class="text-xs text-gray-500">1 hour ago</p>
                        </div>
                    </div>
                    <div class="flex items-center space-x-3">
                        <svg class="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd"></path>
                        </svg>
                        <div class="flex-1">
                            <p class="text-sm font-medium text-gray-700">Failed login attempt</p>
                            <p class="text-xs text-gray-500">3 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Feature Preview -->
        <div class="mt-16 w-full max-w-4xl">
            <h2 class="text-3xl font-bold text-emerald-800 mb-8 text-center">Your Health Tools</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">🔑</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Login Vault</h3>
                    <p class="text-sm text-gray-600 mt-2">Secure access to your health data</p>
                </div>

                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">🧮</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Health Blueprint</h3>
                    <p class="text-sm text-gray-600 mt-2">Calculate your personal nutrition targets</p>
                </div>

                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">🍲</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Mess Menu Magic</h3>
                    <p class="text-sm text-gray-600 mt-2">Smart food calculator and tracker</p>
                </div>

                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">📖</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Meal Diary</h3>
                    <p class="text-sm text-gray-600 mt-2">Track your daily meals and progress</p>
                </div>

                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">🚀</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Macro Doctor</h3>
                    <p class="text-sm text-gray-600 mt-2">AI-powered nutrition recommendations</p>
                </div>

                <div class="glass rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                    <div class="flex items-center space-x-4 mb-4">
                        <span class="text-4xl">🔥</span>
                        <svg class="w-8 h-8 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"></path>
                        </svg>
                    </div>
                    <h3 class="text-lg font-semibold text-emerald-800">Health Streaks</h3>
                    <p class="text-sm text-gray-600 mt-2">Gamify your health journey</p>
                </div>
            </div>
        </div>

        <!-- Health Score Card -->
        <div class="mt-16 w-full max-w-2xl">
            <div class="glass rounded-3xl p-8 text-center border border-emerald-200 shadow-xl">
                <h2 class="text-2xl font-bold text-emerald-800 mb-6">Today's Health Score</h2>
                <div class="flex items-center justify-center mb-6">
                    <div class="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl animate-float">
                        <span class="text-4xl">✅</span>
                    </div>
                </div>
                <h3 class="text-3xl font-bold text-emerald-800 mb-2">Great job! You're on track 🎉</h3>
                <p class="text-lg text-emerald-600">You've hit 85% of your daily nutrition goals</p>
            </div>
        </div>
    </div>

    <script>
        // Simple interactivity
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Welcome to MacroBuddy! 🎉\n\nNote: This is a demo version. To access the full React application, please install Node.js and run the development server.');
        });

        // Add hover effects to feature cards
        document.querySelectorAll('.glass').forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-5px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    </script>
</body>
</html>
