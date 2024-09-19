function Topbar() {

    const [isMenuPopup, setIsMenuPopup] = useState(false);
    const toggle = () => {
        setIsMenuPopup(!isMenuPopup);
    };

    return (
        <header>
            <h1 className="logo">
                <a href="./index.html"><img src="./images/Whisky-logo.svg" alt="Whisky" /></a>
            </h1>
            <nav className="nav">
                <ul className="menu">
                    <li><a href="../products.html">PRODUCTS</a></li>
                    <li><a href="">STORY</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">CONTACT</a></li>
                    <li>
                        <img src="./images/icon/menu-white.svg" alt="icon" onClick={toggle} />
                    </li>
                </ul>

            </nav>


            {isMenuPopup && (

                <div className="toggleMenu" >
                    <span id="closePopup" className="closePopup" onClick={toggle}>&times;</span>
                    <h1 className="logo2">
                        <a href=""><img src="./images/Whisky-logo.svg" alt="whisky" /></a>
                    </h1>
                    <address className="address">
                        <p>02-1234-5678</p>
                        <p>台北市中正區一段條條大路68號</p>
                    </address>
                    <nav className="nav">
                        <ul className="menu">
                            <li><a href="../products.html">PRODUCTS</a></li>
                            <li><a href="">STORY</a></li>
                            <li><a href="">NEWS</a></li>
                            <li><a href="">CONTACT</a></li>
                        </ul>
                    </nav>
                    <div className="abouts">
                        <p>ABOUT US</p>
                        <div className="img">
                        <a href=""><img src="./images/icon/icon-facebook.svg" alt="fb" /></a>
                        <a href=""><img src="./images/icon/icon-instagram.svg" alt="ig" /></a>
                        </div>
                    </div>
                </div>
            )}
        </header>


    );
}