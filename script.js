function element(txt,elmnt) {
	let elt = document.body.appendChild(document.createElement(elmnt))
	elt.innerText = txt
	return elt
}
function newline() {
	document.body.appendChild(document.createElement("br"))
	return;
}
function button(txt,onclick) {
	let elt = document.body.appendChild(document.createElement("button"))
	elt.innerText = txt
	elt.addEventListener("click", (e)=>{
		onclick()
	})
	return elt
}
function img(src,width,height,alt="Made with Gear Web Engine") {
	let elt = document.body.appendChild(document.createElement("img"))
	elt.src = src
	elt.alt = alt
	elt.width = width
	elt.height = height
	return elt
}
//Test Code
// element("Hello GearWE!", "h1")
// element("Hello GearWE!", "h2")
// element("Hello GearWE!", "h3")
// element("Hello GearWE!", "h4")
// element("Hello GearWE!", "h5")
// element("Hello GearWE!", "h6")
// element("Hello GearWE!", "b")
// newline()
// element("Hello GearWE!", "i")
// newline()
// element("Hello GearWE!", "u")
// newline()
// element("Hello GearWE!", "strike")
// newline()
//  button("Insert Picture", function(){
// 	let ans = prompt("Insert Picture Code. (Remember to add https:// at the front)")
//    	let width = prompt("Width:")
// 	  let height = prompt("Height:")
//   	img(ans, width, height)
//  })