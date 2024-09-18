const Stack = () => {
    const [cards, setCards] = useState([]);
    const stackRef = useRef(null);

    useEffect(() => {
        // 初始化卡片堆疊
        const stack = stackRef.current;
        const cardElements = Array.from(stack.children)
            .reverse()
            .filter((child) => child.classList.contains("card"));
        setCards(cardElements);

        // 自動播放間隔
        const autoplayInterval = setInterval(moveCard, 4000);

        // 清除計時器
        return () => clearInterval(autoplayInterval);
    }, []);

    const moveCard = () => {
        setCards((prevCards) => {
            const updatedCards = [...prevCards];
            const lastCard = updatedCards.pop();

            if (lastCard.classList.contains("card")) {
                lastCard.classList.add("swap");

                setTimeout(() => {
                    lastCard.classList.remove("swap");
                }, 1200);

                // 將最後一張卡片移動到最前面
                updatedCards.unshift(lastCard);
            }
            return updatedCards;
        });
    };

    const handleClick = (card) => {
        if (card === cards[cards.length - 1]) {
            card.classList.add("swap");

            setTimeout(() => {
                card.classList.remove("swap");
                setCards((prevCards) => {
                    const updatedCards = [...prevCards];
                    updatedCards.pop(); // 移除最後一張卡片
                    updatedCards.unshift(card); // 把它放到最前面
                    return updatedCards;
                });
            }, 1200);
        }
    };

    return (
        <div className="stack" ref={stackRef}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    className="card"
                    onClick={() => handleClick(card)}
                >
                    {card.innerHTML}
                </div>
            ))}
        </div>
    );
};