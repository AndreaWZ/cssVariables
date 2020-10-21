window.onload = function(){
    changeColor();
    blurImage();
};

function changeColor(){
    let image = document.getElementById('image');
    let selectColor = document.getElementById('colors');
    selectColor.addEventListener("change", function(){
        image.style.backgroundColor = selectColor.value;
    });
};

function blurImage(){
    let image = document.getElementById("flowerImage");
    let blurred = document.getElementById("blurred");
    blurred.addEventListener("click", function(){
        image.style.filter = "blur(" + Number(blurred.value) + "px)";
    });
};

