function volume_sphere() {
    let r = document.getElementById("radius").value;
    
    r = parseFloat(r);
    
    let v = document.getElementById("volume");
    let result = document.getElementById("result");
    
    if (isNaN(r) || r < 0) {
        v.value = "NaN";
        result.innerText = "NaN";
    } else {
        const pi = Math.PI;
        const volume = (4 / 3) * pi * Math.pow(r, 3);
        
        const roundedVolume = volume.toFixed(4);
        v.value = roundedVolume;
        result.innerText = roundedVolume;
    }
}