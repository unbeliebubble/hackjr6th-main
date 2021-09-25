const c1=document.querySelector(".background1");
const c2=document.querySelector(".background2");
const ti1=document.querySelector(".title1");
const te1=document.querySelector(".text1");
const ti2=document.querySelector(".title2");
const te2=document.querySelector(".text2");
const te3=document.querySelector(".text3");

const t0 = new TimelineMax();

 $(document).ready(function(){
    $(".title1").hide(0);
    $(".text1").hide(0);
    $(".title2").hide(0);
    $(".text2").hide(0);
    $(".text3").hide(0);
    //(".background1").hide(0);
    $(".title1").show(0);
    $(".title2").show(0);
    $(".text1").show(0);
    $(".text2").show(0);
    $(".text3").show(0);
    t0.fromTo(c1,3,{ y:"0%",x:"-300%"},{y:"0%",x:"0%",ease:Power2.easeInOut} )
    .fromTo(c2,3,{ y:"0%",x:"300%" },{y:"0%",x:"0%",ease:Power2.easeInOut},"-=3")
    .fromTo(ti1,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=1")
    .fromTo(ti2,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=2")
    .fromTo(te1,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=1")
    .fromTo(te2,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=2")
    .fromTo(te3,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=2")
    ;
        
 });

const n1=document.querySelector(".aji1");
const n2=document.querySelector(".momo1");
const l1=document.querySelector(".line1");
const l2=document.querySelector(".line2");
const intro1=document.querySelector(".aji2");
const intro2=document.querySelector(".momo2");
var flag = 1;

const t1 = new TimelineMax();

 $(document).ready(function(){
    $(".aji1").hide(0);
    $(".momo1").hide(0);
    $(".line1").hide(0);
    $(".line2").hide(0);
    $(".aji2").hide(0);
    $(".momo2").hide(0);
 });
 
if (flag) {
    $(".chapic").click(function(){
    //(".background1").hide(0);
    $(".aji1").show(0);
    $(".momo1").show(0);
    $(".line1").show(0);
    $(".line2").show(0);
    $(".aji2").show(0);
    $(".momo2").show(0);
    t1.fromTo(n1,2,{ opacity:"0",y:"0%",x:"0%"},{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut} )
    .fromTo(n2,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=2")
    .fromTo(l1,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=1")
    .fromTo(l2,2,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=2")
    .fromTo(intro1,1,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=1")
    .fromTo(intro2,1,{ opacity:"0",y:"0%",x:"0%" },{y:"0%",x:"0%",opacity:"1",ease:Power2.easeInOut},"-=1")
    ;
    flag=0;
 });
 
}
else{
    $(".aji1").show(0);
    $(".momo1").show(0);
    $(".line1").show(0);
    $(".line2").show(0);
    $(".aji2").show(0);
    $(".momo2").show(0);
     
 }
 $(document).ready(function(){

   $(window).scroll(function(){
     if($(this).scrollTop() > 40){
       $('#topBtn').fadeIn();
     } else{
       $('#topBtn').fadeOut();
     }
   });
 
   $("#topBtn").click(function(){
     $('html ,body').animate({scrollTop : 0},800);
   });
 });
