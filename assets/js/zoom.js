let currentImg = document.querySelector("#preview img");
let zoomImgEl = document.querySelector("#zoom img");
let zoomEl = document.querySelector("#zoom");
zoomImgEl.src = currentImg.src;

zoomEl.addEventListener("click", ()=>{
	zoomEl.classList.add("hide");
	zoomEl.style.display = "none"
})

currentImg.addEventListener("click", ()=>{
	zoomEl.classList.remove("hide");
	zoomEl.style.display = "flex"
})

zoomImgEl.addEventListener("click", ()=>{
	zoomEl.classList.add("hide");
	zoomEl.style.display = "none"
})