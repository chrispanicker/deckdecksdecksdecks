let desc = document.querySelector("#desc");
let steps = document.querySelector("#steps");
let gallery = document.querySelector("#gallery");
let descContent = document.querySelector("#descContent");
let stepsContent = document.querySelector("#stepsContent");
let galleryContent = document.querySelector("#galleryContent");
let procParent = document.querySelector("#process .contentParent");

desc.addEventListener("click", ()=>{
	desc.classList.add("currentTab");
	steps.classList.remove("currentTab");
	gallery.classList.remove("currentTab");

	descContent.classList.remove("hide");
	stepsContent.classList.add("hide");
	galleryContent.classList.add("hide");

})

steps.addEventListener("click", ()=>{
	desc.classList.remove("currentTab");
	steps.classList.add("currentTab");
	gallery.classList.remove("currentTab");

	descContent.classList.add("hide");
	stepsContent.classList.remove("hide");
	galleryContent.classList.add("hide");
})

gallery.addEventListener("click", ()=>{
	desc.classList.remove("currentTab");
	steps.classList.remove("currentTab");
	gallery.classList.add("currentTab");

	descContent.classList.add("hide");
	stepsContent.classList.add("hide");
	galleryContent.classList.remove("hide");
})