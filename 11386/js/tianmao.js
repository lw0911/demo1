{
	let dians = document.querySelectorAll(".dian");
	let imgs = document.querySelectorAll(".binnerbox img");
	dians.forEach(function (val,index) {
	    val.onclick = function () {
	        for(let i = 0;i < dians.length;i++){
	            dians[i].classList.remove("active");
	            imgs[i].classList.remove("active");
	        }
	        val.classList.add("active");
	        imgs[index].classList.add("active");
	        now = index;
	    }
	});
	let l = dians.length;
	let now = 0;
	st = setInterval(fn,2000);
	function fn(jt = "r") {
		    if(jt === "r"){
	        now++;
	        if(now === l){
	            now = 0;
	        }
	    }else if(jt === "l"){
	        now--;
	        if(now < 0){
	            now = l-1;
	        }
	    }
	    for(let i = 0;i < l;i++){
	        dians[i].classList.remove("active");
	        imgs[i].classList.remove("active");
	    }
	    dians[now].classList.add("active");
	    imgs[now].classList.add("active");
	}
	let b = document.querySelector(".pingmu6-1");
	b.onmouseover = function (){
	    clearInterval(st);
	};
	b.onmouseout = function(){
	     st = setInterval(fn,2000);
	};
	let left = document.querySelector(".pingmu6-1 .left");
	let right = document.querySelector(".pingmu6-1 .right");
	left.onclick = function(){
	    fn(jt = "l");
	};
	right.onclick = function(){
	    fn();
	};
}
{
    let a = document.querySelector(".dingbu");
    let b = document.querySelector(".zuoce");
    let A = document.querySelectorAll(".zcdh");
    let B = document.querySelectorAll(".zuoce li");
    let C =document.querySelector(".xzc ul");
    window.onscroll = function(){
        let Obj = document.documentElement.scrollTop === 0? document.body:document.documentElement;
        let gd = Obj.scrollTop;
        if( gd > 1800){
            a.style.top = "0";
        }
        else{
            a.style.top = "-60px";
            b.style.width = "0";
            b.style.height = "0";
        }
        if( gd > 1700){
            b.style.width = "35px";
            b.style.height = "370px";
        }
        for(let i = 0;i < B.length;i++){
            if( gd > A[i].offsetTop - 60){
                for(let i = 0;i < B.length;i++){
                    B[i].classList.remove("active");
                }
                B[i].classList.add("active");
            }
        }
        B.forEach(function(ele,index){
            ele.onclick = function(){
                let ot = A[index].offsetTop;
                animate(Obj,{scrollTop: ot - 50},500);
            }
        });
		C.onclick = function () {
			document.documentElement.scrollTop = 0;
		}
    };
}
{
	let nei = document.querySelector("");
    window.addEventListener("scroll",function () {
        let lanto = document.documentElement.scrollTop===0? document.body : document.documentElement;
        let ta1 = lanto.scrollTop;
        for(let i=0;i<nei.length;i++){
            if(ta1>nei[i].offsetTop-window.innerHeight){
                let imgs=nei[i].querySelectorAll("img");
                for(let i=0;i<imgs.length;i++){
                    imgs[i].src=imgs[i].getAttribute("tta-src");
                }
            }
        }
    });
}