function Topbar() {

    const [isMenuPopup, setIsMenuPopup] = useState(false);
    const toggle = () => {
        setIsMenuPopup(!isMenuPopup);
    };

    return (
        <header>
            <h1 className="logo">
                <a href="./index.html"><img src="./images/Whisky.svg" alt="Whisky" /></a>
            </h1>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="">酒類介紹</a></li>
                    <li><a href="">品牌故事</a></li>
                    <li><a href="">最新消息</a></li>
                    <li><a href="">聯絡我們</a></li>
                    <li>
                        <img src="./images/SVGRepo_iconCarrier.svg" alt="icon" onClick={toggle} />
                    </li>
                </ul>

            </nav>


            {isMenuPopup && (

                <div className="toggleMenu" >
                    <span id="closePopup" className="closePopup" onClick={toggle}>&times;</span>
                    <h1 className="logo2">
                        <a href=""><img src="./images/Whisky.svg" alt="whisky" /></a>
                    </h1>
                    <address className="address">
                        <p>02-1234-5678</p>
                        <p>台北市中正區一段條條大路68號</p>
                    </address>
                    <nav className="nav">
                        <ul className="menu">
                            <li><a href="">酒類介紹</a></li>
                            <li><a href="">品牌故事</a></li>
                            <li><a href="">最新消息</a></li>
                            <li><a href="">聯絡我們</a></li>
                        </ul>
                    </nav>
                    <div className="abouts">
                        <p>ABOUT US</p>
                        <div className="img">
                            <img src="./images/icon-facebook.svg" alt="fb" />
                            <img src="./images/icon-instagram.svg" alt="ig" />
                        </div>
                    </div>
                </div>
            )}
        </header>


    );
}