import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import LotteryItem from './components/LotteryItem'
import LotteryPost from './components/LotteryPost'
import lotterys from '../data/lotterys'

function App() {
	const [selectedLottery, setselectedLottery] = useState(null);

	function onLotteryOpenClick(theLottery){
		setselectedLottery(theLottery);
	} 

	function onLotteryCloseClick(){
		setselectedLottery(null);
	}

	const lotteryElements = lotterys.map((lottery, index) => {
		return <LotteryItem key={index} lottery={lottery} onLotteryClick ={ onLotteryOpenClick}/>;
	});

	let loteryPost = null;
	if(!!selectedLottery){
		loteryPost =<LotteryPost lottery={selectedLottery} onBgClick = {onLotteryCloseClick}/>
	}

  return (
  <div className="App">
	<AppHeader />
	<div className="app-grid">
		{lotteryElements}
	</div>
	{loteryPost}
  </div> 
   
  )
}

export default App
