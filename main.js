window.onload = function(){
    changeImageBorder();
    blurImage();
};


function changeImageBorder(){
    let flowerImg = document.getElementById('flowerImg');
    let selectColor = document.getElementById('colors');
    let borderSizes = document.getElementById("borderSizes");
    selectColor.addEventListener("change", function(){
        flowerImg.style.border = Number(borderSizes.value) + "px solid " + selectColor.value;
    });
    borderSizes.addEventListener("click", function(){
        flowerImg.style.border = Number(borderSizes.value) + "px solid" + selectColor.value;
    });
};

function blurImage(){
    let image = document.getElementById('image');
    let blurred = document.getElementById("blurred");
    blurred.addEventListener("click", function(){
        image.style.filter = "blur(" + Number(blurred.value) + "px)";
    });
};

