function WhiskyGallery() {
    const [currentImage, setCurrentImage] = useState("./images/alcohol/whisky-1.jpg");

    const handleMouseOver = (pic) => {
        switch (pic) {
            case '1':
                setCurrentImage("./images/alcohol/whisky-1.jpg");
                break;
            case '2':
                setCurrentImage("./images/alcohol/whisky-2.jpg");
                break;
            case '3':
                setCurrentImage("./images/alcohol/whisky-3.jpg");
                break;
            case '4':
                setCurrentImage("./images/alcohol/whisky-4.jpg");
                break;
            default:
                break;
        }
    };

    return (
        <section id="products">
            <div id="wrap">
                <img className="wrap1" src={currentImage} alt="whisky" />
            </div>
            <div className="layout-box">
                <div className="box" onMouseOver={() => handleMouseOver('1')}>
                    <img src="./images/alcohol/whisky-1.jpg" alt="whisky-1" />
                </div>
                <div className="box" onMouseOver={() => handleMouseOver('2')}>
                    <img src="./images/alcohol/whisky-2.jpg" alt="whisky-2" />
                </div>
                <div className="box" onMouseOver={() => handleMouseOver('3')}>
                    <img src="./images/alcohol/whisky-3.jpg" alt="whisky-3" />
                </div>
                <div className="box" onMouseOver={() => handleMouseOver('4')}>
                    <img src="./images/alcohol/whisky-4.jpg" alt="whisky-4" />
                </div>
            </div>
        </section>
    );
}