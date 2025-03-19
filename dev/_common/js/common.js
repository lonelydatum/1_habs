import {olg} from "./proline"
const banner = document.getElementById('banner')
const size = {w:banner.offsetWidth, h:banner.offsetHeight}

gsap.defaults({
	ease: "power3.out"
});

const {w, h} = size

const READ_PRE = {
	t1: 1.5,
	t2: 1.4,
	t3: 1,
}



const READ = READ_PRE



function init(){	
	const tl = new TimelineMax({onComplete:()=>{
		if(document.getElementById("legalBtn")){			
			TweenLite.set("#legalBtn", {display:"block"})
		}
	}})
	tl.set(".frame1", {opacity:1})
	return tl
}



function stag(vh){
	return { duration:.3, opacity:0, stagger: .1, ...vh }
}




function start(){
	const tl = init()		
	// tl.add("start")
	// tl.from(".hero", {duration:.5, x:`-=${w}`}, "start")
	// tl.from(".t1a", {duration:.5, x:`-=${w}`}, "start")
	// tl.to(".t1a", {duration:.3, opacity:0}, "+=.5")

	tl.from(".t2a", {duration:.3, opacity:0})
	tl.from(".cta", {duration:.3, opacity:0}, "+=.3")
	tl.from([".t2b"], {duration:.3, opacity:0}, "+=.3")
	
	
}


function start_bb(){
	const tl = init()		
	tl.add("start")
	tl.from(".hero", {duration:.5, x:`-=${w}`}, "start")
	tl.from(".t1a", {duration:.5, x:`-=${w}`}, "start")
	tl.from(".t1b", {duration:.5, opacity:0}, "+=2")
	tl.from(".t1c", {duration:.5, opacity:0}, "+=.5")
	tl.to(".t1", {duration:.3, opacity:0}, "+=1")

	tl.from(".t2a", {duration:.3, opacity:0})
	tl.from(".t2b", {duration:.3, opacity:0})
	tl.from(".cta", {duration:.3, opacity:0}, "+=.3")
	
}




export {size, init, start, start_bb}



