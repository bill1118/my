
const ScrollAnimation = () => {
    const blockquoteRef = useRef(null);
    const spanRef = useRef(null);
    const officeRef = useRef(null);
    const buildingRef = useRef(null);
    const boxRef = useRef(null);
    const controller = useRef(null);

    useEffect(() => {
        // 初始化 ScrollMagic 控制器
        controller.current = new ScrollMagic.Controller();

        // 創建 TimelineMax 動畫
        const tl = new TimelineMax({ onUpdate: updatePercentage });
        const tl2 = new TimelineMax();

        // 設置動畫
        tl.from(blockquoteRef.current, 0.5, { x: 200, opacity: 0 });
        tl.from(spanRef.current, 1, { width: 0 }, "=-.5");
        tl.from(officeRef.current, 1, { x: -200, opacity: 0, ease: Power4.easeInOut }, "=-1");
        tl.from(buildingRef.current, 1, { x: 200, opacity: 0, ease: Power4.easeInOut }, "=-.7");

        tl2.from(boxRef.current, 1, { opacity: 0, scale: 0 });
        tl2.to(boxRef.current, 0.5, { left: "20%", scale: 1.3, borderColor: 'white', borderWidth: 12, boxShadow: '1px 1px 0px 0px rgba(0,0,0,0.09)' });

        // 設置 ScrollMagic 場景
        const scene1 = new ScrollMagic.Scene({
            triggerElement: ".sticky",
            triggerHook: "onLeave",
            duration: "100%"
        })
            .setPin(".sticky")
            .setTween(tl)
            .addTo(controller.current);

        const scene2 = new ScrollMagic.Scene({
            triggerElement: blockquoteRef.current
        })
            .setTween(tl2)
            .addTo(controller.current);

        // 清理函數，當組件卸載時銷毀場景
        return () => {
            scene1.destroy();
            scene2.destroy();
            controller.current.destroy(true);
        };
    }, []);

}

function Sticky() {
    return (
        <section class="sticky">
            <blockquote>"You should totally subscribe to my channel now"<span></span></blockquote>
            <img id="office" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/office1.png" />
            <img id="building" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/2621168/sky.jpg" />
            <div id="box"></div>
        </section>
    )
}