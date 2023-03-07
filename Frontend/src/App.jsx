import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import LotteryItem from './components/LotteryItem'
import LotteryPost from './components/LotteryPost'
import lotterys from '../data/lotterys'

function App() {
	const lotteryElements = lotterys.map((lottery, index) => {
		return <LotteryItem key={index} lottery={lottery}/>;
	})
  return (
  <div className="App">
	<AppHeader />
	<div className="app-grid">
		{lotteryElements}
	</div>
  </div> 
   
  )
}

export default App
