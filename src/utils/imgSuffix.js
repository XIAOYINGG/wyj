let imgSuffix = '', dpr = window.devicePixelRatio;

if(dpr >= 3) {
    imgSuffix = '@3x';
} else if(dpr >= 1.5) {
    imgSuffix = '@2x';
}

window.imgSuffix = imgSuffix;