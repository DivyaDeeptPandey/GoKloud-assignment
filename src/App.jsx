import { useState } from 'react'
import './App.css'
import PricingPage from './components/PricingPage'
import SocialProofStats from './components/SocialProofStats'
import ComparePlans from './components/ComparePlans'

function App() {

  return (
    <>
      <PricingPage/>
      <SocialProofStats/>
      <ComparePlans/>
    </>
  )
}

export default App
