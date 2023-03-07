import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import LotteryItem from './components/LotteryItem'

function App() {
  return (
  <div className="App">
	<AppHeader />
	<div className="app-grid">
		<LotteryItem /> <LotteryItem /> <LotteryItem /> 
		<LotteryItem /> <LotteryItem /> <LotteryItem />
		<LotteryItem /> <LotteryItem /> <LotteryItem />
		<LotteryItem /> <LotteryItem /> <LotteryItem />
	</div>
  </div> 
   
  )
}

export default App
