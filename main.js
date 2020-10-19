window.onload = function(){
    changeColor();
    blurImage();
};

function changeColor(){
    let image = document.getElementById('image');
    let selectColor = document.getElementById('colors');
    selectColor.addEventListener("click", function(){
        console.log(selectColor.value);
    });
    // console.log(selectColor);
};

function blurImage(){
    let image = document.getElementsByTagName("img");
    let blurred = document.getElementById("blurred");
    blurred.addEventListener("click", function(){
        console.log(blurred.value);
        // image.style.filter = "blur(" + blurred.value + "px)";
    });
};

