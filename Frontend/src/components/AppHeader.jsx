import './AppHeader.css';

function AppHeader(){
    return (
        <header className="app-header">
		    <img className="app-header-logo"/>
            <h1>LUCKY_APPLICATION Lottery Online &nbsp; </h1>
            <div>
			    <button className="button">LOGIN</button>  &nbsp;  &nbsp;
                <button className="button" >BUY LOTTERY</button>  &nbsp;  &nbsp;
                <button className="button" >ตรวจผลฉลากกินแบ่งรัฐบาล</button>
		    </div>
	    </header>
        
    )
}
export default AppHeader;