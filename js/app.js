const hintClickArea = document.querySelector(".main-img-hint");
const hintImg = document.querySelector(".main-img");
const hintText = document.querySelector(".main-img-hint");

const test = document.querySelector(".className");

// TODO hint text show
/*
hintImg.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();

    const currentClass = this.className;

    console.log(currentClass);

    if(currentClass === "main-img-hint") {
        // alert("main-img");
        alert("main-img-hint");
        console.log(this)
    } else if (currentClass.includes("main-img")) {
        // alert(1)

    } else {
        test.focus();
        // alert(0)
    }


    // if (e.target)
    // hintImg.classList.toggle('main-img-2');
    // hintText.classList.toggle('main-img-hint-2');
})

*/

hintText.addEventListener("click", function(e) {
    e.preventDefault();
    e.stopPropagation();
    hintImg.classList.toggle('main-img-2');
    hintText.classList.toggle('main-img-hint-2');
})
