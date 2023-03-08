import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import LotteryItem from './components/LotteryItem'
import LotteryPost from './components/LotteryPost'
import lotterys from '../data/lotterys'
import AppSearch from './components/AppSearch'
import LoginPage from './components/LoginPage'

function App() {
	const [selectedLottery, setselectedLottery] = useState(null);
	const [searchText, setSearchText] = useState('');

	function onLotteryOpenClick(theLottery){
		setselectedLottery(theLottery);
	} 

	function onLotteryCloseClick(){
		setselectedLottery(null);
	}

	const lotteryElements = lotterys.filter((lottery) => {
		return lottery.title.includes(searchText)}).map((lottery, index) => {
		return <LotteryItem key={index} lottery={lottery} onLotteryClick ={ onLotteryOpenClick}/>;
	});

	let loteryPost = null;
	if(!!selectedLottery){
		loteryPost =<LotteryPost lottery={selectedLottery} onBgClick = {onLotteryCloseClick}/>
	}

  return (
  <div className="App">
	<AppHeader /> 
	<section className="app-section">
		<div className = "app-container">
			<AppSearch value ={searchText} onValueChange={setSearchText} />
			<div className="app-grid">
				{lotteryElements}
			</div>
		</div>
	</section>
	{loteryPost}
  </div> 
   
  )
}

export default App
