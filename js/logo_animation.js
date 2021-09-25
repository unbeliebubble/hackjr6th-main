$(document).ready(function(){

    
    
    $(".open").hover(function(){
        $(".open").css("opacity", 0 );
        $(".closed").css("opacity", 1 );
        
        
    },function(){
        $(".open").css("opacity", 1 );
        $(".closed").css("opacity", 0 );
        
    });

    $(".logo_text").hover(function(){
        $(".open").css("opacity", 0 );
        $(".closed").css("opacity", 1 );
        
        
    },function(){
        $(".open").css("opacity", 1 );
        $(".closed").css("opacity", 0 );
        
    });

    $(".open").click(function(){
    //    window.location.href='index_home.html';
    });


    
});