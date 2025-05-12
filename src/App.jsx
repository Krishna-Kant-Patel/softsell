import { useState } from 'react'
// import './App.css'
import ThemeToggle from './components/Togglethemae/ToggleTheme'
import Hero from './components/HeroSection/Hero'
import HowItWorks from './components/HowItWorks/HowItWorks'
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs'
import Testimonials from './components/Testimonials/Testimonials'
import ContactForm from './components/ContactForm/ContactForm'

function App() {

  return (
    <main className="min-h-screen p-4 flex flex-col items-center justify-center 
  bg-white text-black dark:bg-gray-900 dark:text-white 
  transition-colors duration-500 ease-in-out">
      <ThemeToggle />
      <Hero />
      <HowItWorks />
      <WhyChooseUs /> 
      <Testimonials/>
      <ContactForm />
    </main>

  )
}

export default App
