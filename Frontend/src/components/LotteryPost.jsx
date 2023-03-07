import './LotteryPost.css';
function LotteryPost(props){
    const {lottery, onBgClick} = props;
    return(
        <div className="lottery-post">
           <div className="lottery-post-bg" onClick ={onBgClick}/>
           <div className="lottery-post-content">
                <img src={lottery.thumbnaiUrl} />
                <h3>{lottery.title}</h3>
           </div>
        </div>
    )
}

export default LotteryPost;