import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, Flame, Trophy, Calendar, Target, Star, Zap } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HealthStreaks = () => {
  const navigate = useNavigate()
  const [currentStreak] = useState(12)
  const [longestStreak] = useState(28)

  // Sample badge data
  const badges = [
    { id: 1, name: 'First Week', description: '7 days streak', icon: '🥉', days: 7, unlocked: true, color: 'from-yellow-400 to-orange-500' },
    { id: 2, name: 'Monthly Master', description: '30 days streak', icon: '🥈', days: 30, unlocked: false, color: 'from-gray-300 to-gray-400' },
    { id: 3, name: 'Quarter Champion', description: '90 days streak', icon: '🥇', days: 90, unlocked: false, color: 'from-gray-300 to-gray-400' },
    { id: 4, name: 'Year Legend', description: '365 days streak', icon: '💎', days: 365, unlocked: false, color: 'from-gray-300 to-gray-400' }
  ]

  // Sample calendar data (28 days)
  const calendarData = [
    { day: 1, status: 'completed', date: '2024-01-01' },
    { day: 2, status: 'completed', date: '2024-01-02' },
    { day: 3, status: 'completed', date: '2024-01-03' },
    { day: 4, status: 'completed', date: '2024-01-04' },
    { day: 5, status: 'completed', date: '2024-01-05' },
    { day: 6, status: 'completed', date: '2024-01-06' },
    { day: 7, status: 'completed', date: '2024-01-07' },
    { day: 8, status: 'completed', date: '2024-01-08' },
    { day: 9, status: 'completed', date: '2024-01-09' },
    { day: 10, status: 'completed', date: '2024-01-10' },
    { day: 11, status: 'completed', date: '2024-01-11' },
    { day: 12, status: 'completed', date: '2024-01-12' },
    { day: 13, status: 'missed', date: '2024-01-13' },
    { day: 14, status: 'missed', date: '2024-01-14' },
    { day: 15, status: 'completed', date: '2024-01-15' },
    { day: 16, status: 'completed', date: '2024-01-16' },
    { day: 17, status: 'completed', date: '2024-01-17' },
    { day: 18, status: 'completed', date: '2024-01-18' },
    { day: 19, status: 'completed', date: '2024-01-19' },
    { day: 20, status: 'completed', date: '2024-01-20' },
    { day: 21, status: 'completed', date: '2024-01-21' },
    { day: 22, status: 'completed', date: '2024-01-22' },
    { day: 23, status: 'completed', date: '2024-01-23' },
    { day: 24, status: 'completed', date: '2024-01-24' },
    { day: 25, status: 'completed', date: '2024-01-25' },
    { day: 26, status: 'completed', date: '2024-01-26' },
    { day: 27, status: 'completed', date: '2024-01-27' },
    { day: 28, status: 'completed', date: '2024-01-28' }
  ]

  const getStatusColor = (status) => {
    const colors = {
      completed: 'bg-green-500',
      missed: 'bg-red-500',
      future: 'bg-gray-300'
    }
    return colors[status] || colors.future
  }

  const getStatusIcon = (status) => {
    const icons = {
      completed: '✅',
      missed: '❌',
      future: '⏳'
    }
    return icons[status] || icons.future
  }

  const getMotivationalMessage = (streak) => {
    if (streak >= 30) return "You're a nutrition legend! 🔥"
    if (streak >= 14) return "Two weeks strong! Keep it up! 💪"
    if (streak >= 7) return "One week down! You're on fire! 🎉"
    if (streak >= 3) return "Great start! Building momentum! ⚡"
    return "Every day counts! You've got this! 🌟"
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with motivational imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-green-100/80" />
      
      <div className="relative z-10 min-h-screen p-6">
        {/* Header */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex items-center mb-8"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/dashboard')}
            className="mr-4 p-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <ArrowLeft className="w-6 h-6" />
          </motion.button>
          <div>
            <h1 className="text-4xl font-bold text-emerald-800">
              🔥 Health Streaks
            </h1>
            <p className="text-lg text-emerald-600">
              Level Up Your Consistency
            </p>
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl p-8 mb-8 text-white shadow-2xl"
          >
            <div className="flex items-center justify-between">
              <div>
                <motion.div
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  🔥
                </motion.div>
                <h2 className="text-6xl font-bold mb-2">{currentStreak}</h2>
                <p className="text-2xl font-semibold mb-4">Day Streak!</p>
                <p className="text-lg opacity-90">
                  {getMotivationalMessage(currentStreak)}
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold mb-2">Best: {longestStreak} days</div>
                <div className="text-lg opacity-90">Personal Record</div>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Badge Collection */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Trophy className="w-6 h-6 mr-2" />
                Badge Collection
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {badges.map((badge, index) => (
                  <motion.div
                    key={badge.id}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                    whileHover={{ scale: 1.05 }}
                    className={`bg-gradient-to-br ${badge.color} rounded-2xl p-6 text-center shadow-lg ${
                      badge.unlocked ? 'ring-4 ring-yellow-300' : 'opacity-60'
                    }`}
                  >
                    <div className="text-4xl mb-3">{badge.icon}</div>
                    <h3 className="text-lg font-bold text-white mb-1">{badge.name}</h3>
                    <p className="text-sm text-white/80 mb-2">{badge.description}</p>
                    <div className="text-xs text-white/70">
                      {badge.unlocked ? '✅ Unlocked' : '🔒 Locked'}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Calendar Heatmap */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-2" />
                Activity Calendar
              </h2>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200 shadow-xl">
                <div className="grid grid-cols-7 gap-2">
                  {calendarData.map((day, index) => (
                    <motion.div
                      key={day.day}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.02, duration: 0.3 }}
                      className={`aspect-square rounded-lg flex items-center justify-center text-xs font-semibold ${
                        day.status === 'completed' 
                          ? 'bg-green-500 text-white' 
                          : day.status === 'missed'
                          ? 'bg-red-500 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      <span className="text-xs">{day.day}</span>
                    </motion.div>
                  ))}
                </div>
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-green-500 rounded"></div>
                    <span className="text-gray-600">Completed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-red-500 rounded"></div>
                    <span className="text-gray-600">Missed</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-300 rounded"></div>
                    <span className="text-gray-600">Future</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Stats Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-bold text-emerald-800 mb-6 text-center">
              📊 Your Progress Stats
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-200 shadow-xl">
                <div className="text-4xl mb-3">🔥</div>
                <div className="text-3xl font-bold text-emerald-600 mb-2">{currentStreak}</div>
                <div className="text-lg font-semibold text-emerald-800 mb-1">Current Streak</div>
                <div className="text-sm text-gray-600">Days in a row</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-200 shadow-xl">
                <div className="text-4xl mb-3">🏆</div>
                <div className="text-3xl font-bold text-blue-600 mb-2">{longestStreak}</div>
                <div className="text-lg font-semibold text-emerald-800 mb-1">Longest Streak</div>
                <div className="text-sm text-gray-600">Personal best</div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 text-center border border-emerald-200 shadow-xl">
                <div className="text-4xl mb-3">📈</div>
                <div className="text-3xl font-bold text-amber-600 mb-2">85%</div>
                <div className="text-lg font-semibold text-emerald-800 mb-1">Success Rate</div>
                <div className="text-sm text-gray-600">This month</div>
              </div>
            </div>
          </motion.div>

          {/* Motivational Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-12"
          >
            <div className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 shadow-xl">
              <div className="text-center">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-6xl mb-4"
                >
                  ⚡
                </motion.div>
                <h2 className="text-3xl font-bold text-emerald-800 mb-4">
                  Keep the Momentum Going!
                </h2>
                <p className="text-lg text-emerald-600 mb-6">
                  You're {currentStreak} days into your health journey. Every day you stay consistent, 
                  you're building a stronger, healthier version of yourself.
                </p>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    Log Today's Meals
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-white text-emerald-600 rounded-xl font-semibold border-2 border-emerald-600 hover:bg-emerald-50 transition-colors"
                  >
                    View Progress
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default HealthStreaks
