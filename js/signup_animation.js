const p1 = document.querySelector(".puzzle1");
const p2 = document.querySelector(".puzzle2");
const p3 = document.querySelector(".puzzle3");
const pt1 = document.querySelector(".puzzle_text_con1");
const pt2 = document.querySelector(".puzzle_text_con2");
const pt3 = document.querySelector(".puzzle_text_con3");

const t0 = new TimelineMax();

$(document).ready(function(){

    
    
    // $(".closedoor").hover(function(){
    //     $(".closedoor").css("opacity", 0 );
    //     $(".opendoor").css("opacity", 1 );
        
        
    // },function(){
    //     $(".closedoor").css("opacity", 1 );
    //     $(".opendoor").css("opacity", 0 );
        
    // });
     $(".puzzle_text_con2").hide(0);
     $(".puzzle_text_con3").hide(0);
    $(".next_step").click(function(){
       //window.location.href='index.html';
       $(".puzzle_text_con2").show(0);
       t0.fromTo(p1,3,{ y:"0%",x:"0%"},{y:"20%",x:"10%",ease:Power2.easeInOut} )
        .fromTo(pt1,3,{ opacity:"1",y:"0%",x:"0%" },{y:"40%",x:"10%",opacity:"0",ease:Power2.easeInOut},"-=3")
        .fromTo(p2,3,{ y:"0%",x:"0%" },{y:"-7.2%",x:"-8%",ease:Power2.easeInOut},"-=3")
        .fromTo(pt2,3,{ opacity:"0",y:"0%",x:"0%" },{y:"-12%",x:"-8%",opacity:"1",ease:Power2.easeInOut},"-=3")
        ;
        $(".puzzle_text_con1").delay(3000).hide(0);
    });
    $(".next_step2").click(function(){
       //window.location.href='index.html';
       $(".puzzle_text_con3").show(0);
       t0.fromTo(p1,3,{ y:"20%",x:"10%"},{y:"20%",x:"15%",ease:Power2.easeInOut} )
        .fromTo(p2,3,{ y:"-7.2%",x:"-8%" },{y:"-7.2%",x:"-3%",ease:Power2.easeInOut},"-=3")
        .fromTo(pt2,3,{ opacity:"1",y:"-12%",x:"-8%" },{y:"-12%",x:"-3%",opacity:"0",ease:Power2.easeInOut},"-=3")
        .fromTo(p3,3,{ y:"0%",x:"0%"},{y:"18%",x:"-14.5%",ease:Power2.easeInOut},"-=3")
        .fromTo(pt3,3,{ opacity:"0",y:"0%",x:"0%" },{y:"35%",x:"-15.5%",opacity:"1",ease:Power2.easeInOut},"-=3")
        ;
        $(".puzzle_text_con2").delay(3000).hide(0);
    });


    
    

    
});