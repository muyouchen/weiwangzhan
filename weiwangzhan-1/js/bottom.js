
$(function(){
    $(".bottom a").each(function(i){
    	$(this).on("touchstart",function(){
	                    
	       $(this).addClass("on").siblings().removeClass("on");
	       
	        
	    });
    })
    
    
    
    $(".i-closebtn").each(function(i){
    	$(this).on("touchstart",function(){
	                    
	       $(this).parent(".download-app").addClass("i-close1");
	       $(this).parent().siblings(".wap-mask").addClass("i-close1");
	        event.preventDefault();
	    });
    })
    
    
    $(document).ready(function(){
	  $(".bx").click(function(){
	   $(".nav-in").scrollLeft(500);
	  });
	});
	    
})

