

// let resized = window.addEventListener('resize', ()=>{
// 	let viewWidth = window.innerWidth;
// 	let viewHeight = window.innerHeight;

// 	//to convert between vh and vw, I'll probably need to
// 	//find a way to see how many VW's fit into a VH and vice versa
// 	let oneVH = viewHeight*.01;
// 	let oneVW = viewWidth*.01;

// 	if(oneVW===oneVH){
// 		svgPattern(oneVH,oneVW);
// 	}else if(oneVW>oneVH){
// 		//find out how many vh in a vw, dividing vh/vw, 
// 		let diff = oneVH/oneVW;
// 		svgPattern(oneVW, diff*oneVH);
// 	}else if(oneVW<oneVH){
// 		//find out how many vw in a vh
// 		let diff = oneVW/oneVH;
// 		svgPattern(diff*oneVW, oneVH)
// 	}




// });

// function svgPattern(w,h){
// 	let viewWidth = window.innerWidth;
// 	let viewHeight = window.innerHeight;
// 	console.log(`${w}px x ${h}px`)
// 	let svgPattern = document.querySelector("svg defs pattern");
// 	svgPattern.setAttribute("width", `${w}vw`);
// 	svgPattern.setAttribute("height", `${h}vh`);
// }