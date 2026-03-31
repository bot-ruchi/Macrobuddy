import { useState } from 'react'
import { motion } from 'framer-motion'
import { Lock, Shield, CheckCircle, XCircle } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [vaultOpen, setVaultOpen] = useState(false)
  const navigate = useNavigate()

  const recentActivity = [
    { type: 'success', time: '2 min ago', action: 'Login successful' },
    { type: 'success', time: '1 hour ago', action: 'Login successful' },
    { type: 'error', time: '3 hours ago', action: 'Failed login attempt' },
    { type: 'success', time: 'Yesterday', action: 'Login successful' },
  ]

  const handleLogin = async (e) => {
    e.preventDefault()
    setIsLoading(true)
    
    // Simulate login process
    setTimeout(() => {
      setVaultOpen(true)
      setTimeout(() => {
        navigate('/dashboard')
      }, 1000)
    }, 1500)
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with food photography overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
        }}
      />
      
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-teal-500/20 to-green-600/20" />
      
      {/* Main content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4">
        {/* Vault Icon */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ 
            scale: vaultOpen ? 1.2 : 1, 
            opacity: 1,
            rotate: vaultOpen ? 15 : 0
          }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative">
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(16, 185, 129, 0.5)",
                  "0 0 40px rgba(16, 185, 129, 0.8)",
                  "0 0 20px rgba(16, 185, 129, 0.5)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-24 h-24 bg-gradient-to-br from-emerald-500 to-green-600 rounded-full flex items-center justify-center border-4 border-white/20 backdrop-blur-sm"
            >
              <Lock className="w-12 h-12 text-white" />
            </motion.div>
            
            {/* Glow effect */}
            <div className="absolute inset-0 w-24 h-24 bg-emerald-400/30 rounded-full blur-xl animate-pulse" />
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-6xl md:text-7xl font-bold mb-4">
            <span className="bg-gradient-to-r from-emerald-600 via-green-500 to-teal-600 bg-clip-text text-transparent">
              MacroBuddy
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-emerald-800 font-semibold">
            🔒 Smart Login Vault - Your Health Journey Starts Here
          </p>
        </motion.div>

        {/* Login Form */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="w-full max-w-md"
        >
          <div className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 border-4 border-emerald-500/20 shadow-2xl">
            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Username
                </label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your username"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="Enter your password"
                  required
                />
              </div>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={isLoading}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                    Unlocking...
                  </div>
                ) : (
                  'Unlock Your Health Journey'
                )}
              </motion.button>
            </form>
          </div>
        </motion.div>

        {/* Recent Activity Timeline */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="mt-12 w-full max-w-md"
        >
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-emerald-200/50">
            <h3 className="text-lg font-semibold text-emerald-800 mb-4 text-center">
              Recent Activity
            </h3>
            <div className="space-y-3">
              {recentActivity.map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  className="flex items-center space-x-3"
                >
                  {activity.type === 'success' ? (
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500" />
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-700">
                      {activity.action}
                    </p>
                    <p className="text-xs text-gray-500">{activity.time}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingPage
