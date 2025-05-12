import { useState } from 'react'
// import './App.css'
import ThemeToggle from './components/Togglethemae/ToggleTheme'
import Hero from './components/HeroSection/Hero'

function App() {

  return (
    <main className="min-h-screen flex flex-col items-center justify-center 
  bg-white text-black dark:bg-gray-900 dark:text-white 
  transition-colors duration-500 ease-in-out">
      <ThemeToggle />
      <Hero />
    </main>

  )
}

export default App
