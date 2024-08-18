function volume_sphere(e) {
	e.preventDefault()
	let r = document.getElementById("radius").value
		let result = document.getElementById("result")

	let v = document.getElementById("volume")
	  const pi = Math.PI;
  const volume = (4 / 3) * pi * Math.pow(r, 3);
  v.value = volume.toFixed(4);
  result.innerText = volume.toFixed(4)
} 

