

const g1 = document.querySelector(".team_pic1");
const g2 = document.querySelector(".team_pic2");
const g3 = document.querySelector(".team_pic3");
const g4 = document.querySelector(".team_pic4");

const text1 = document.querySelector(".team_text_con1");
const text2 = document.querySelector(".team_text_con2");
const text3 = document.querySelector(".team_text_con3");
const text4 = document.querySelector(".team_text_con4");


const t5 = new TimelineMax();

$(document).ready(function(){

    
    
    // $(".closedoor").hover(function(){
    //     $(".closedoor").css("opacity", 0 );
    //     $(".opendoor").css("opacity", 1 );
        
        
    // },function(){
    //     $(".closedoor").css("opacity", 1 );
    //     $(".opendoor").css("opacity", 0 );
        
    // });
    //  $(".team_text_con1").hide(0);
    //  $(".team_text_con2").hide(0);
    //  $(".team_text_con3").hide(0);
    //  $(".team_text_con4").hide(0);
     
    $(".team_pic1").click(function(){
       $(".team_text_con1").show(0);
       t5.fromTo(text1,2,{ y:"0%",x:"40%",opacity:"0"},{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut} );
       
    });
    $(".team_pic3").click(function(){
       $(".team_text_con3").show(0);
       t5.fromTo(text3,2,{ y:"0%",x:"40%",opacity:"0"},{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut} );
       
    });
    $(".team_pic2").click(function(){
       $(".team_text_con2").show(0);
       t5.fromTo(text2,2,{ y:"0%",x:"-40%",opacity:"0"},{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut} );
       
    });
    $(".team_pic4").click(function(){
       $(".team_text_con4").show(0);
       t5.fromTo(text4,2,{ y:"0%",x:"-40%",opacity:"0"},{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut} );
       
    });
    


    
    

    
});
    
    // $(".team_pic1").hover(function(){
    //     $(".open").css("opacity", 0 );
    //     $(".closed").css("opacity", 1 );
        
        
    // },function(){
    //     $(".open").css("opacity", 1 );
    //     $(".closed").css("opacity", 0 );
        
    // });

    // $(".logo_text").hover(function(){
    //     $(".open").css("opacity", 0 );
    //     $(".closed").css("opacity", 1 );
        
        
    // },function(){
    //     $(".open").css("opacity", 1 );
    //     $(".closed").css("opacity", 0 );
        
    // });

    // $(".open").click(function(){
    // //    window.location.href='index_home.html';
    // });


    
