

const bg = document.querySelector(".modal_bg");
const md1 = document.querySelector(".modal_text_con");
const md2 = document.querySelector(".modal_text_con2");
const md3 = document.querySelector(".modal_text_con3");
const md4 = document.querySelector(".modal_text_con4");
const md5 = document.querySelector(".modal_text_con5");
const md6 = document.querySelector(".modal_text_con6");
const md7 = document.querySelector(".modal_text_con7");
const md8 = document.querySelector(".modal_text_con8");

// const p2 = document.querySelector(".puzzle2");
// const p3 = document.querySelector(".puzzle3");
// const pt1 = document.querySelector(".puzzle_text_con1");
// const pt2 = document.querySelector(".puzzle_text_con2");
// const pt3 = document.querySelector(".puzzle_text_con3");

const t0 = new TimelineMax();
const t1 = new TimelineMax();
const t2 = new TimelineMax();

$(document).ready(function(){

    
    
    
    $(".modal_bg").hide(0);
    $(".modal_text_con").hide(0);
    $(".modal_text_con2").hide(0);
    $(".modal_text_con3").hide(0);
    $(".modal_text_con4").hide(0);
    $(".modal_text_con5").hide(0);
    $(".modal_text_con6").hide(0);
    $(".modal_text_con7").hide(0);
    $(".modal_text_con8").hide(0);
    $(".incase").hide(0);
    $(".main_title_select").click(function(){
       
       $(".modal_bg").show(0);
       $(".modal_text_con").show(0);
       
       t0.fromTo(bg,2.5,{ y:"-110%",x:"0%"},{y:"0%",x:"0%",ease:Power1.easeInOut} )
       .fromTo(md1,3,{ y:"-110%",x:"0%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=2" );

       $(".incase").delay(3000).show(0);
    
    });
    
    $(".mos1").click(function(){
       t0.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md2,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con2").delay(0).show(0);
       $(".modal_text_con").delay(2000).hide(0);
    });
    $(".mos2").click(function(){
       t0.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md3,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con3").delay(0).show(0);
       $(".modal_text_con").delay(2000).hide(0);
    });
    $(".mos3").click(function(){
       t0.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md4,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con4").delay(0).show(0);
       $(".modal_text_con").delay(2000).hide(0);
    });
    $(".mos4").click(function(){
       t0.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md5,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con5").delay(0).show(0);
       $(".modal_text_con").delay(2000).hide(0);
    });
    $(".mos5").click(function(){
       t0.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md6,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con6").delay(0).show(0);
       $(".modal_text_con").delay(2000).hide(0);
    });
    $(".lmos1").click(function(){
       t0.fromTo(md2,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md7,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con7").delay(0).show(0);
       $(".modal_text_con2").delay(2000).hide(0);
    });
    $(".lmos2").click(function(){
       t0.fromTo(md3,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md7,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con7").delay(0).show(0);
       $(".modal_text_con3").delay(2000).hide(0);
    });
    $(".lmos3").click(function(){
       t0.fromTo(md4,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md7,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con7").delay(0).show(0);
       $(".modal_text_con4").delay(2000).hide(0);
    });
    $(".lmos4").click(function(){
       t0.fromTo(md5,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md7,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con7").delay(0).show(0);
       $(".modal_text_con5").delay(2000).hide(0);
    });
    $(".lmos5").click(function(){
       t0.fromTo(md6,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
       .fromTo(md7,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
       $(".modal_text_con7").delay(0).show(0);
       $(".modal_text_con6").delay(2000).hide(0);
    });

    $(".orarrow1").click(function(){
        t1.fromTo(md2,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con2").delay(2000).hide(0);
     });
    $(".orarrow2").click(function(){
        t1.fromTo(md3,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con3").delay(2000).hide(0);
     });
    $(".orarrow3").click(function(){
        t1.fromTo(md4,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con4").delay(2000).hide(0);
     });
    $(".orarrow4").click(function(){
        t1.fromTo(md5,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con5").delay(2000).hide(0);
     });
    $(".orarrow5").click(function(){
        t1.fromTo(md6,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con6").delay(2000).hide(0);
     });
    $(".orarrow6").click(function(){
        t1.fromTo(md8,2,{ y:"0%",x:"0%"},{y:"0%",x:"125%",ease:Power1.easeInOut} )
        .fromTo(md1,1.5,{ y:"0%",x:"-130%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con").delay(2000).show(0);
        $(".modal_text_con8").delay(2000).hide(0);
     });

     $(".noticeme1").click(function(){
        t2.fromTo(md1,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con").delay(2000).hide(0);
     });
     $(".noticeme2").click(function(){
        t2.fromTo(md2,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con2").delay(2000).hide(0);
     });
     $(".noticeme3").click(function(){
        t2.fromTo(md3,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con3").delay(2000).hide(0);
     });
     $(".noticeme4").click(function(){
        t2.fromTo(md4,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con4").delay(2000).hide(0);
     });
     $(".noticeme5").click(function(){
        t2.fromTo(md5,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con5").delay(2000).hide(0);
     });
     $(".noticeme6").click(function(){
        t2.fromTo(md6,2,{ y:"0%",x:"0%"},{y:"0%",x:"-130%",ease:Power1.easeInOut} )
        .fromTo(md8,1.5,{ y:"0%",x:"125%"},{y:"0%",x:"0%",ease:Power2.easeInOut},"-=0" );
        $(".modal_text_con8").delay(0).show(0);
        $(".modal_text_con6").delay(2000).hide(0);
     });
    
});