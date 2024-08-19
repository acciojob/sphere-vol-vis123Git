function volume_sphere() {
    let v = document.getElementById("volume");
    let r = document.getElementById("radius").value;
    r = parseFloat(r);
    
    
    if (isNaN(r) || r < 0) {
        v.value = "NaN";
    } else {
        const pi = Math.PI;
        const volume = (4 / 3) * pi * Math.pow(r, 3);
        
        const roundedVolume = volume.toFixed(4);
		console.log("val===", roundedVolume)
        v.value = roundedVolume;
    }
}