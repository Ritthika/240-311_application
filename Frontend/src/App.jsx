import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import AppHeader from './components/AppHeader'
import LotteryItem from './components/LotteryItem'
import LotteryPost from './components/LotteryPost'
import lotterys from '../data/lotterys'
import AppSearch from './components/AppSearch'
import LoginPage from './components/LoginPage'
import Navbar from './components/navbar'
import Amazon from './components/amazon'
import Cart from './components/cart'

function App() {
	const [selectedLottery, setselectedLottery] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [show, setShow] = useState(true);
	const [cart, setCart] = useState([]);

	const handleClick = (item) => {
		if (cart.indexOf(item) !== -1) return;
		setCart([...cart, item]);
	};
	
	const handleChange = (item, d) => {
		const ind = cart.indexOf(item);
		const arr = cart;
		arr[ind].amount += d;
	
		if (arr[ind].amount === 0) arr[ind].amount = 1;
		setCart([...arr]);
	  };

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
			<div>
			<Navbar setShow={setShow} size = {cart.length}/>
			{show ? (
					<Amazon handleClick={handleClick} />
				  ) : (
					<Cart cart={cart} setCart={setCart} handleChange={handleChange} />
			)}
			
			
			</div>
  </div> 
  )
}

export default App
