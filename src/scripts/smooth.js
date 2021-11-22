
function smooth(){
    window.scroll({
        top: 2500,
        left: 0,
        behavior: "smooth"
    });

    window.scrollBy({
        top: 100,
        left: 0,
        behavior: 'smooth'
    });

    document.getElementById("smooth").scrollIntoView({
        behavior: "smooth"
    })
}

export default smooth;