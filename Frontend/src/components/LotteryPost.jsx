import './LotteryPost.css';
function LotteryPost(props){
    const {lottery} = props;
    return(
        <div className="lottery-post">
           <div className="lottery-post-bg" />
           <div className="lottery-post-content">
                <img src={lottery.thumbnaiUrl} />
                <h4>{lottery.title}</h4>
           </div>
        </div>
    )
}

export default LotteryPost;