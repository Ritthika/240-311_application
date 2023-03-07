import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  return (
  <div className="App">
	<header className="app-header">
		<img className="app-header-logo" src='/images/header.png ' />
	</header>
	<div className="app-grid">
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery01</h4>
		</div>
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery02</h4>
		</div>
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery03</h4>
		</div>
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery04</h4>
		</div>
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery05</h4>
		</div>
		<div className="lottery-item">
			<img height="200px" src="/images/demo-lottery.jpg" /> 
			<h4>Lottery06</h4>
		</div>
	</div>
  </div> 
   
  )
}

export default App
