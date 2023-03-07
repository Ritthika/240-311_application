import './LotteryItem.css';

function LotteryItem(props){
    const{ lottery, onLotteryClick} = props;
    return(
        <div className="lottery-item">
			<img height="220px" src={lottery.thumbnaiUrl} onClick={() => {onLotteryClick(lottery)}} /> 
			<h4>{lottery.title}</h4>
		</div>
    )
}
export default LotteryItem;