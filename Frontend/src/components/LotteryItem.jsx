import './LotteryItem.css';

function LotteryItem(props){
    const{ lottery} = props;
    return(
        <div className="lottery-item">
			<img height="220px" src={lottery.thumbnaiUrl} /> 
			<h4>{lottery.title}</h4>
		</div>
    )
}
export default LotteryItem;