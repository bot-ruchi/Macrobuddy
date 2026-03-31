import { useState } from 'react'
import { motion } from 'framer-motion'
import { Calculator, Target, Zap, ArrowLeft } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const HealthBlueprint = () => {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    weight: '',
    height: '',
    age: '',
    gender: 'male',
    activityLevel: 'moderate'
  })
  const [results, setResults] = useState(null)
  const [isCalculating, setIsCalculating] = useState(false)

  const activityLevels = {
    sedentary: { label: 'Sedentary (little/no exercise)', multiplier: 1.2 },
    light: { label: 'Lightly Active (light exercise 1-3 days/week)', multiplier: 1.375 },
    moderate: { label: 'Moderately Active (moderate exercise 3-5 days/week)', multiplier: 1.55 },
    active: { label: 'Very Active (hard exercise 6-7 days/week)', multiplier: 1.725 },
    veryActive: { label: 'Extra Active (very hard exercise, physical job)', multiplier: 1.9 }
  }

  const calculateNutritionTargets = () => {
    const { weight, height, age, gender, activityLevel } = formData
    
    if (!weight || !height || !age) return

    setIsCalculating(true)
    
    // Simulate calculation delay
    setTimeout(() => {
      const weightKg = parseFloat(weight)
      const heightCm = parseFloat(height)
      const ageYears = parseFloat(age)
      
      // Calculate BMR using Mifflin-St Jeor Equation
      let bmr
      if (gender === 'male') {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears + 5
      } else {
        bmr = 10 * weightKg + 6.25 * heightCm - 5 * ageYears - 161
      }
      
      // Calculate TDEE
      const tdee = bmr * activityLevels[activityLevel].multiplier
      
      // Calculate macro targets (moderate approach)
      const calories = Math.round(tdee)
      const protein = Math.round(weightKg * 1.6) // 1.6g per kg body weight
      const carbs = Math.round((calories * 0.45) / 4) // 45% of calories from carbs
      const fats = Math.round((calories * 0.25) / 9) // 25% of calories from fats
      
      setResults({
        calories,
        protein,
        carbs,
        fats,
        bmr: Math.round(bmr),
        tdee: Math.round(tdee)
      })
      setIsCalculating(false)
    }, 2000)
  }

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background with healthy ingredients */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`
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
              🧮 Personal Health Blueprint
            </h1>
            <p className="text-lg text-emerald-600">
              Calculate Your Nutrition DNA
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Input Form */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 mb-8 border border-emerald-200 shadow-xl"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Weight */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Weight (kg)
                </label>
                <input
                  type="number"
                  value={formData.weight}
                  onChange={(e) => handleInputChange('weight', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="70"
                />
              </div>

              {/* Height */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Height (cm)
                </label>
                <input
                  type="number"
                  value={formData.height}
                  onChange={(e) => handleInputChange('height', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="175"
                />
              </div>

              {/* Age */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Age (years)
                </label>
                <input
                  type="number"
                  value={formData.age}
                  onChange={(e) => handleInputChange('age', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                  placeholder="25"
                />
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Gender
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
            </div>

            {/* Activity Level */}
            <div className="mb-6">
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Activity Level
              </label>
              <select
                value={formData.activityLevel}
                onChange={(e) => handleInputChange('activityLevel', e.target.value)}
                className="w-full px-4 py-3 rounded-xl border-2 border-emerald-200 focus:border-emerald-500 focus:outline-none transition-colors"
              >
                {Object.entries(activityLevels).map(([key, level]) => (
                  <option key={key} value={key}>
                    {level.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Calculate Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={calculateNutritionTargets}
              disabled={isCalculating || !formData.weight || !formData.height || !formData.age}
              className="w-full py-4 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center"
            >
              {isCalculating ? (
                <div className="flex items-center">
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                  Calculating Your Nutrition Fingerprint...
                </div>
              ) : (
                <div className="flex items-center">
                  <Calculator className="w-5 h-5 mr-2" />
                  Generate My Nutrition Fingerprint 🔬
                </div>
              )}
            </motion.button>
          </motion.div>

          {/* Results Card */}
          {results && (
            <motion.div
              initial={{ y: 30, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
              className="bg-gradient-to-br from-emerald-50 to-green-100 rounded-2xl p-8 border border-emerald-200 shadow-xl"
            >
              <h2 className="text-3xl font-bold text-emerald-800 mb-6 text-center flex items-center justify-center">
                <Target className="w-8 h-8 mr-3" />
                Your Personal Targets
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Calories */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-4xl mb-2">🔥</div>
                  <div className="text-3xl font-bold text-emerald-600 mb-1">
                    {results.calories}
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Daily Calories</div>
                </motion.div>

                {/* Protein */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-4xl mb-2">🥩</div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">
                    {results.protein}g
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Protein Target</div>
                </motion.div>

                {/* Carbs */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-4xl mb-2">🍞</div>
                  <div className="text-3xl font-bold text-amber-600 mb-1">
                    {results.carbs}g
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Carbs Target</div>
                </motion.div>

                {/* Fats */}
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  className="bg-white rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-4xl mb-2">🥑</div>
                  <div className="text-3xl font-bold text-rose-600 mb-1">
                    {results.fats}g
                  </div>
                  <div className="text-sm font-semibold text-gray-700">Fats Target</div>
                </motion.div>
              </div>

              {/* Additional Info */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-white/80 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-emerald-700 mb-1">
                    BMR: {results.bmr} calories
                  </div>
                  <div className="text-sm text-gray-600">Basal Metabolic Rate</div>
                </div>
                <div className="bg-white/80 rounded-xl p-4 text-center">
                  <div className="text-lg font-semibold text-emerald-700 mb-1">
                    TDEE: {results.tdee} calories
                  </div>
                  <div className="text-sm text-gray-600">Total Daily Energy Expenditure</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="mt-6 text-center"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate('/dashboard')}
                  className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Save to Dashboard
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HealthBlueprint
