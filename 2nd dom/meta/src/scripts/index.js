/*[export]*/
/*
 * filename:	index.js
 * author:	shalles
 * E-mail:	shalles@163.com
 * CreateTime:	2015-07-08 15:43:51
*/

/*
var s = 2;
/*/
var b = 1;
//*/

document.addEventListener("touchstart", function(){
    console.log(b++);
}, true);

window.onorientationchange = function(){
    switch(window.orientation){
        case -90:
        case 90:
            alert("横屏:" + window.orientation); 
            break;
        case 0:
        case 180:
            alert("竖屏:" + window.orientation);
            break;
        default:
            alert("难道还有其他值？" + window.orientation)
    }
}

// ios权限限制 很多时候不能自动执行一些功能调用的代码  阔以在触屏的时候调用一次
// $('html').one('touchstart',function(){
//     audio.play();
// })