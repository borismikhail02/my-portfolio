import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SpinningCube from './components/SpinningCube'
import WireframeCube from './components/WireframeCube'
import WireframeBrain from './components/WireframeBrain'
import DeconstructedCube from './components/DeconstructedCube'
import DeconstructedBrain from './components/DeconstructedBrain'

export default function App() {
  return (
    <div className="relative h-[200vh] bg-gray-900 text-white">
      <nav className="fixed top-0 left-0 right-0 h-20 bg-gray-300 flex items-center px-4 z-50">
        <div id="logo" className="w-20 h-20 border-2 border-white bg-gray-600"/>
        <div className="flex-1 relative h-screen">
          <DeconstructedBrain />
        </div>
      </nav>
      <main className="pt-18">
        <h1 className="text-center text-4xl font-bold mb-4 mt-18">
          Scroll to Transform the Cube
        </h1>
      </main>
    </div>
  );
}