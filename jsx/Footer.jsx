function Footer() {
    return (
        <div className="footer">
            <h1 className="footer-logo2">
                <a href=""><img src="./images/Whisky-logo.svg" alt="whisky" /></a>
            </h1>
            <address className="footer-address">
                <p>02-1234-5678</p>
                <p>台北市中正區一段條條大路68號</p>
            </address>
            <nav className="footer-nav">
                <ul className="footer-menu">
                    <li><a href="products.html">PRODUCTS</a></li>
                    <li><a href="">STORY</a></li>
                    <li><a href="">NEWS</a></li>
                    <li><a href="">CONTACT</a></li>
                </ul>
            </nav>
            <div className="footer-abouts">
                <p>ABOUT US</p>
                <div className="img">
                    <a href=""><img src="./images/icon/icon-facebook.svg" alt="fb" /></a>
                    <a href=""><img src="./images/icon/icon-instagram.svg" alt="ig" /></a>
                </div>
            </div>
            <div>
                <span>Copyright © 2024 whisky</span>
            </div>
        </div>
    )
}