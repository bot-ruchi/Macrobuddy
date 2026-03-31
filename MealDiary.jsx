import { motion } from 'framer-motion'
import { LogOut, Lock, Calculator, Utensils, BookOpen, Zap, Flame, TrendingUp, Target, Activity } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
  const navigate = useNavigate()

  const macroData = [
    { name: 'Calories', current: 1850, target: 2200, color: 'emerald', icon: '🔥' },
    { name: 'Protein', current: 95, target: 120, color: 'blue', icon: '🥩' },
    { name: 'Carbs', current: 180, target: 220, color: 'amber', icon: '🍞' },
    { name: 'Fats', current: 65, target: 80, color: 'rose', icon: '🥑' }
  ]

  const features = [
    { id: 'vault', name: 'Login Vault', icon: Lock, emoji: '🔑', path: '/' },
    { id: 'blueprint', name: 'Health Blueprint', icon: Calculator, emoji: '🧮', path: '/blueprint' },
    { id: 'mess-menu', name: 'Mess Menu Magic', icon: Utensils, emoji: '🍲', path: '/mess-menu' },
    { id: 'meal-diary', name: 'Meal Diary', icon: BookOpen, emoji: '📖', path: '/meal-diary' },
    { id: 'macro-doctor', name: 'Macro Doctor', icon: Zap, emoji: '🚀', path: '/macro-doctor' },
    { id: 'health-streaks', name: 'Health Streaks', icon: Flame, emoji: '🔥', path: '/health-streaks' }
  ]

  const getColorClasses = (color) => {
    const colors = {
      emerald: 'from-emerald-500 to-emerald-600',
      blue: 'from-blue-500 to-blue-600',
      amber: 'from-amber-500 to-amber-600',
      rose: 'from-rose-500 to-rose-600'
    }
    return colors[color] || colors.emerald
  }

  const getProgressColor = (current, target) => {
    const percentage = (current / target) * 100
    if (percentage >= 90) return 'bg-green-500'
    if (percentage >= 70) return 'bg-yellow-500'
    return 'bg-red-500'
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with meal prep imagery */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 to-green-100/80" />
      
      <div className="relative z-10 min-h-screen p-6">
        {/* Top Banner */}
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold text-emerald-800 mb-2">
              Welcome back, User! 👋
            </h1>
            <p className="text-lg text-emerald-600">
              Your daily nutrition command center
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate('/')}
            className="flex items-center space-x-2 px-4 py-2 bg-emerald-600 text-white rounded-xl hover:bg-emerald-700 transition-colors"
          >
            <LogOut className="w-5 h-5" />
            <span>Logout</span>
          </motion.button>
        </motion.div>

        {/* Daily Overview Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-emerald-200 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-emerald-800 mb-6 flex items-center">
            📊 Daily Nutrition Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {macroData.map((macro, index) => (
              <motion.div
                key={macro.name}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                className={`bg-gradient-to-br ${getColorClasses(macro.color)} rounded-2xl p-6 text-white relative overflow-hidden`}
              >
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl">{macro.icon}</span>
                    <TrendingUp className="w-6 h-6 opacity-80" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{macro.name}</h3>
                  <div className="text-3xl font-bold mb-2">
                    {macro.current}
                    <span className="text-lg opacity-80">/{macro.target}</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2 mb-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${Math.min((macro.current / macro.target) * 100, 100)}%` }}
                      transition={{ delay: 0.8 + index * 0.1, duration: 1 }}
                      className={`h-2 rounded-full ${getProgressColor(macro.current, macro.target)}`}
                    />
                  </div>
                  <p className="text-sm opacity-90">
                    {Math.round((macro.current / macro.target) * 100)}% of target
                  </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">
            Your Health Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(feature.path)}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border-2 border-emerald-100 hover:border-emerald-300 cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-4xl">{feature.emoji}</span>
                  <feature.icon className="w-8 h-8 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-emerald-800">
                  {feature.name}
                </h3>
                <p className="text-sm text-gray-600 mt-2">
                  {feature.id === 'vault' && 'Secure access to your health data'}
                  {feature.id === 'blueprint' && 'Calculate your personal nutrition targets'}
                  {feature.id === 'mess-menu' && 'Smart food calculator and tracker'}
                  {feature.id === 'meal-diary' && 'Track your daily meals and progress'}
                  {feature.id === 'macro-doctor' && 'AI-powered nutrition recommendations'}
                  {feature.id === 'health-streaks' && 'Gamify your health journey'}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Health Score Card */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 text-center border border-emerald-200 shadow-xl"
        >
          <h2 className="text-2xl font-bold text-emerald-800 mb-6">
            Today's Health Score
          </h2>
          <div className="flex items-center justify-center mb-6">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.4, duration: 0.8, type: "spring" }}
              className="w-24 h-24 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center shadow-2xl"
            >
              <motion.div
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✅
              </motion.div>
            </motion.div>
          </div>
          <h3 className="text-3xl font-bold text-emerald-800 mb-2">
            Great job! You're on track 🎉
          </h3>
          <p className="text-lg text-emerald-600">
            You've hit 85% of your daily nutrition goals
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
