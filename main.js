const el = document.getElementById("form");

el.addEventListener('click', function(e) {
    let stars = e.target.closest('.stars');

    if (!stars) return;


    let children = stars.children;
    for (let i=0; i < children.length; i++) {
        let child = children[i];
        child.innerHTML = "\u2606";
        child.style.color = "black";
    }

    const rating = e.srcElement;
    rating.innerHTML = "\u2605";
    rating.style.color = "gold";

    let starBefore = rating.nextElementSibling;
    while (starBefore !== null) {
        starBefore.innerHTML = "\u2605";
        starBefore.style.color = "gold";
        starBefore = starBefore.nextElementSibling;
    }

    /*
    starBefore.innerHTML = "\u2605";
    starBefore.style.color = "gold";

    let starRating = e.srcElement.id;
    let star1 = document.getElementById('star-5');
    let star2 = document.getElementById('star-4');
    let star3 = document.getElementById('star-3');

    if (starRating==="star-3") {
        star1.innerHTML = "\u2605";
        star1.style.color = "gold";
    } else if (starRating === "star-2") {
        star1.innerHTML = "\u2605";
        star2.innerHTML = "\u2605";
        star1.style.color = "gold";
        star2.style.color = "gold";
    } else if (starRating === "star-1") {
        star1.innerHTML = "\u2605";
        star1.style.color = "gold";
        star2.innerHTML = "\u2605";
        star2.style.color = "gold";
        star3.innerHTML = "\u2605";
        star3.style.color = "gold";
    }
    */

}, false);

