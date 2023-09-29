function volume_sphere() {
	let r = document.getElementById("radius").value
	
	let v = document.getElementById("volume")
	  const pi = Math.PI;
  const volume = (4 / 3) * pi * Math.pow(r, 3);
  v.value = volume.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
