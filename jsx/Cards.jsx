const Cards = () => {
    const [cards, setCards] = useState([
        { id: 1, img: "./images/alcohol/whisky-1.jpg" },
        { id: 2, img: "./images/alcohol/whisky-4.jpg" },
        { id: 3, img: "./images/alcohol/whisky-3.jpg" },
        { id: 4, img: "./images/alcohol/whisky-2.jpg" },
        { id: 5, img: "./images/alcohol/whisky-5.jpg" },
        { id: 6, img: "./images/alcohol/whisky-6.jpg" }
    ]);
    const [swapping, setSwapping] = useState(null);
    const stackRef = useRef(null);

    useEffect(() => {
        // 自動播放間隔
        const autoplayInterval = setInterval(moveCard, 2500);

        // 清除計時器
        return () => clearInterval(autoplayInterval);
    }, []);

    const moveCard = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const lastCard = updatedCards.pop();

            setSwapping(lastCard.id); // 添加 swap 類名

            setTimeout(() => {
                setSwapping(null); // 移除 swap 類名
                updatedCards.unshift(lastCard);
                setCards(updatedCards);
            }, 1200);

            return updatedCards;
        });
    };

    const handleClick = (id) => {
        if (id === cards[cards.length - 1].id) {
            setSwapping(id);

            setTimeout(() => {
                setSwapping(null);
                setCards((prevCards) => {
                    const updatedCards = [...prevCards];
                    const card = updatedCards.pop();
                    updatedCards.unshift(card);
                    return updatedCards;
                });
            }, 1200);
        }
    };

    return (
        <section id="cards">
            <div className="content">
                <h1>The Whisky Boutique</h1>
                <p>
                    Welcome to Whisky Boutique, where every sip is a journey into the
                    exquisite world of finely crafted whisky. Our whisky is dedicated
                    to bringing you the most delicious and beautifully designed whisky
                    that will delight your senses and elevate your taste experience.
                </p>
                <a href="products.html"><button className="btn">Explore More</button></a>
            </div>

            <div className="stack" ref={stackRef}>
                {cards.map((card) => (
                    <div
                        key={card.id}
                        className={`card ${swapping === card.id ? "swap" : ""}`}
                        onClick={() => handleClick(card.id)}
                    >
                        <img src={card.img} alt={`card-${card.id}`} />
                    </div>
                ))}
            </div>
        </section>
    );
};
