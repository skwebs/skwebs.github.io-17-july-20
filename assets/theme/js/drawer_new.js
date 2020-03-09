//drawer.js
//variables declaration
		    function elem(e){return document.querySelector(e);}
		    var touchSurface = elem("body");
		    var drawer = elem(".drawer");
		    var drawerWidth = drawer.offsetWidth;
		    var startX = "";
		    var change = "";
		    var drawerOpened = false;
		    var minTouchLeft =30;
		    var navbarToggler = elem(".navbar-toggler");
		    var overlay = elem(".overlay");
		    //CSS related variables
		    const __SETTING = {
		    dTrans : "transform 500ms ",
		    oTrans : "all 1s ease-in 500ms",
		    navExpandClass : "md",
		    dIndex : 1033 //1029 for under nav or, 1032 for above nav (don't use 1030/1031)
		    };
		    //drawer opening time
		    function handleStart(e){
		        if(!drawerOpened){
		            startX = e.changedTouches[0].clientX;
		        
			        if(startX<minTouchLeft){
				        overlay.style.opacity=0;
				        overlay.style.display="block";
				        drawer.style.transition="none";
				        overlay.style.transition="none";
			        }
		        }
		    }
		    function handleMove(e){
		        if(!drawerOpened){
		            if(startX<minTouchLeft){
		                change = e.changedTouches[0].clientX - startX;
		                if((change-drawerWidth) < 0){
		                    drawer.style.transform="translateX("+(change-drawerWidth)+"px)";
			                overlay.style.opacity=change/drawerWidth;
		                }
		            }
		        }
		    }
		    function handleEnd(e){
		        if(!drawerOpened){
		            if(startX<minTouchLeft){
		                if(change<(drawerWidth/3)){
		                drawerClose();
		                }else{
		                drawerOpen();
		                }
		            }
		        }
		    }
		    
		    // drawer closing time
		    function drawerHandlerStart(e){
		        overlay.style.display="block";
		        drawer.style.transition="none";
		        overlay.style.transition="none";
		        if(drawerOpened){
		            startX = e.changedTouches[0].clientX;
		        }
		    }
		    function drawerHandlerMove(e){
		        if(drawerOpened){
		            change = e.changedTouches[0].clientX - startX;
		            if(change<0){
		                drawer.style.transform="translateX("+change+"px)";
			            overlay.style.opacity=(drawerWidth+change)/drawerWidth;
		            }
		        }
		    }
		    function drawerHandlerEnd(e){
		        if(drawerOpened){
		            if(change<0){
		                if(change<(0-drawerWidth/3)){
		                    drawerClose();
		                }else{
		                    drawerOpen();
		                }
		            }
		        }
		    }
		    
		    
		    function handleCancel(e){}
		   
		    function drawerOpen(){
			    overlay.style.display="block";
		        drawer.style.transform="translateX(0px)";
		        drawer.style.transition=__SETTING.dTrans;
		        overlay.style.transition=__SETTING.oTrans;
		        drawerOpened = true;
		    }
		    function drawerClose(){
		        overlay.style.display="none";
		        drawer.style.transform="translateX(-"+drawerWidth+"px)";
		        drawer.style.transition=__SETTING.dTrans;
		        overlay.style.transition=__SETTING.oTrans;
		        drawerOpened = false;
		    }
		    
		    function drawerToggle(){
			    if(drawerOpened){
				    drawerClose();
			    }else{
				    drawerOpen();
			    }
		    }
		    document.addEventListener("DOMContentLoaded", ()=>{
			    touchSurface.addEventListener("touchstart", handleStart, false);
			    touchSurface.addEventListener("touchend", handleEnd, false);
			    touchSurface.addEventListener("touchmove", handleMove, false);
			    //for drawer
			    drawer.addEventListener("touchstart",drawerHandlerStart,false);
			    drawer.addEventListener("touchmove",drawerHandlerMove,false);
			    drawer.addEventListener("touchend",drawerHandlerEnd,false);
		    });
		    
		    overlay.addEventListener("click",()=>{drawerClose();})
		    navbarToggler.addEventListener("click",()=>{drawerToggle();})
		   
		    //jquery code here
		    $(()=>{
			    $(".sk-nav").addClass("navbar-expand-"+__SETTING.navExpandClass)
			    $('<div class="drawer__profile bg-primary text-light" ></div><div class="drawer__nav" ></div>').appendTo(".drawer");
			    $('<p class="p-2" >Satish Kumar Sharma<br>Email : XXXXXXX@gmail.com<br>Contact : 9XXXXXXXX0</p>').appendTo(".drawer__profile")
			    $('.navbar-nav').clone().appendTo('.drawer__nav');
			    $(".drawer").addClass("d-"+__SETTING.navExpandClass+"-none");
			    $(".overlay").addClass("d-"+__SETTING.navExpandClass+"-none");
			    $(".drawer").css("z-index",__SETTING.dIndex);
			    $(".overlay").css("z-index",(__SETTING.dIndex-1));
			    
		    })
		    