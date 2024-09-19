function handleMouseOver(pic) {
    let wrap1 = document.getElementsByClassName('wrap1')[0];
    switch (pic) {
        case '1':
            wrap1.src = "./images/alcohol/whisky-1.jpg";
            break;

        case '2':
            wrap1.src = "./images/alcohol/whisky-2.jpg";
            break;

        case '3':
            wrap1.src = "./images/alcohol/whisky-3.jpg";
            break;
        case '4':
            wrap1.src = "./images/alcohol/whisky-4.jpg";
            break;
    }
}