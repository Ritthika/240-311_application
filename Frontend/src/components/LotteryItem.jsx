import './LotteryItem.css';

function LotteryItem(props){
    const{ lottery, onLotteryClick} = props;
    return(
        <div className="lottery-item">
			<img height="220px" src={lottery.thumbnaiUrl} onClick={() => {onLotteryClick(lottery)}} />  &nbsp;
			<h2>{lottery.title}</h2>
		</div>
    )
}
export default LotteryItem;