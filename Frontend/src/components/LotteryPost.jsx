import './LotteryPost.css';
function LotteryPost(props){
    const {lottery, onBgClick} = props;
    return(
        <div className="lottery-post">
           <div className="lottery-post-bg" onClick ={onBgClick}/>
           <div className="lottery-post-content">
                <img src={lottery.thumbnaiUrl} />
                <h4>{lottery.title}</h4>
           </div>
        </div>
    )
}

export default LotteryPost;