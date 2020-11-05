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
function link(txt,href) {
	let link = document.body.appendChild(document.createElement("a"))
	link.href = href
	link.innerText = txt
	return link
}
function plaintext(txt) {
	txt.replace(/</g, "&lt;")
	txt.replace(/>/g, "&gt;")
}
