console.log("index.js loaded");
window.onload = function(){
    document.querySelector("#bt").addEventListener('click',function(evt){
     console.log("Button Clicked");
     import('./someModule').then(function (page) {
         page.render(document.querySelector(".holder"));
         });
    });
}