// Fit Content
function fitTextToWidth(element, maxFontSize = 100, minFontSize = 8) {
    const parent = element.parentElement;
    if (!parent) return;

    const parentWidth = parent.clientWidth;

    let low = minFontSize;
    let high = maxFontSize;
    let best = minFontSize;

    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        element.style.fontSize = mid + "px";

        if (element.scrollWidth <= parentWidth) {
            best = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    element.style.fontSize = best + "px";
}

function fitAllMonthTexts() {
    const titleElements = document.querySelectorAll(".eventTitle");
    const monthElements = document.querySelectorAll(".campCard-Month");
    const dateElements = document.querySelectorAll(".campCard-Date");
    //const heroElements = document.querySelectorAll(".heroSection");
    
    titleElements.forEach(el => fitTextToWidth(el, 35, 8));
    monthElements.forEach(el => fitTextToWidth(el, 60, 8));
    dateElements.forEach(el => fitTextToWidth(el, 90, 10));
    //heroElements.forEach(el => fitTextToWidth(el, 35, 8));
}

function checkCollision(rect1, rect2){
    var overlap = !(rect1.right < rect2.left ||
                    rect1.left > rect2. right ||
                    rect1.bottom < rect2.top ||
                    rect1.top > rect2.bottom);

    return overlap;
}

function convertNav(){
    const navHeader = document.querySelectorAll(".headercontainer");
    const shopifyBtn = document.querySelectorAll(".shopify-btn-container");

    let navHeaderRect = new Array();
    let shopifyBtnRect = new Array();

    navHeader.forEach(el => navHeaderRect.push(el.getBoundingClientRect()));
    shopifyBtn.forEach(el => shopifyBtnRect.push(el.getBoundingClientRect()));

    for (let i = 0; i < navHeaderRect.length; i++){
        if (checkCollision(navHeaderRect[i], shopifyBtnRect['0'])){
            navHeader[i].style.display = "none";
        }
    }
    
}

window.addEventListener("load", fitAllMonthTexts);
window.addEventListener("resize", fitAllMonthTexts);
//window.addEventListener("resize", convertNav);
