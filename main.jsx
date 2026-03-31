import { useState } from 'react'

function TestApp() {
  const [count, setCount] = useState(0)
  
  console.log('✅ React is working! TestApp component rendered.')
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-emerald-800 mb-8">
          🌿 MacroBuddy
        </h1>
        <p className="text-xl text-emerald-600 mb-8">
          React is working! Click the button to test interactivity.
        </p>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-colors"
        >
          Count: {count}
        </button>
        <p className="mt-4 text-gray-600">
          If you can see this and the button works, React is running properly!
        </p>
      </div>
    </div>
  )
}

export default TestApp
