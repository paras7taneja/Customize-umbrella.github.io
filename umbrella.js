
document.body.style.background = "#a3ddf3a6";
let yellowCol = document.getElementById("yellowCol");
let blueImg = document.getElementById("blue");
let btn = document.getElementById("btn");
blueImg.src = "Blue umbrella.png";

btn.style.background = "#36B6E5"
blueImg.style.transition = "all 0.3s"

// for yellow color
let myInterval;

yellowCol.addEventListener("click", () => {

    myInterval = setInterval(yellow = () => {
        blueImg.classList.add("yellow-loader")
        blueImg.classList.add("service-icon")
        btn.style.background = "#FED34D"
        document.body.style.background = "#fafae8"

    }, 100);

    blueImg.src = "loader_icon_yellow.png";
    blueImg.classList.add("changed-size");

    setTimeout(() => {

        blueImg.style.opacity = "1"
        blueImg.classList.remove("service-icon")
        clearInterval(myInterval)
        blueImg.classList.remove("changed-size");
        blueImg.classList.remove("yellow-loader");
        blueImg.src = "Yello umbrella.png";

    }, 1000);


})

//for blue Color

let blueCol = document.getElementById("blueCol");

blueCol.addEventListener("click", () => {

    let myInterval = setInterval(() => {
        blueImg.classList.add("blue-loader")
        blueImg.classList.add("service-icon")
        btn.style.background = "#36B6E5"
        document.body.style.background = "#a3ddf3a6";
    }, 100);

    console.log("paras")
    blueImg.src = "loader_icon1.png";
    blueImg.classList.add("changed-size");

    setTimeout(() => {
        blueImg.classList.remove("service-icon")
        clearInterval(myInterval)
        console.log("end")
        blueImg.classList.remove("changed-size");
        blueImg.classList.remove("blue-loader")
        blueImg.src = "Blue umbrella.png";
    }, 1000);

})


// for pink color

let pinkCol = document.getElementById("pinkCol");

pinkCol.addEventListener("click", () => {

    let myInterval = setInterval(() => {
        blueImg.classList.add("pink-loader")
        blueImg.classList.add("service-icon");
        btn.style.background = "#D9388E";
        document.body.style.background = "#ffc0cb85";
    }, 100);

    console.log("paras")
    blueImg.src = "loader_icon_pink.png";
    blueImg.classList.add("changed-size");

    setTimeout(() => {
        blueImg.classList.remove("service-icon")
        clearInterval(myInterval)
        console.log("end")
        blueImg.classList.remove("changed-size");
        blueImg.classList.remove("pink-loader")
        blueImg.src = "Pink umbrella.png";
    }, 1000);

})

//for upload button

let uploadImg = document.getElementById("uploadImg");


let labelBtn = document.getElementById("labelBtn");
var uploaded_image = "";

labelBtn.addEventListener('change', () => {
    const reader = new FileReader();
    reader.addEventListener("load", () => {
        uploaded_image = reader.result;
        document.getElementById("logo").style.backgroundImage = `url(${uploaded_image})`;
        uploadImg.innerHTML = labelBtn.value.split("C:\\fakepath\\")[1].toUpperCase();

    })
    reader.readAsDataURL(labelBtn.files[0]);

})
