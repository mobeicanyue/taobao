function toBig(item) {
    let i = $(item);
    i.animate({width: "+=14px", height: "+=5px"},'fast');
}

function toSmall(item) {
    let i = $(item);
    i.animate({width: "-=14px", height: "-=5px"},'fast');
}