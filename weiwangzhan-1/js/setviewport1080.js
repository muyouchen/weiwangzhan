//var doc=document.documentElement,scale = doc.clientWidth / 1080;
//doc.style.fontSize =doc.clientWidth / 10.80 + 'px';


var doc=document.documentElement,scale = 1 / devicePixelRatio;
document.querySelector('meta[name="viewport"]').setAttribute('content','initial-scale=' + scale + ', maximum-scale=' + scale + ', minimum-scale=' + scale + ', user-scalable=no');
doc.style.fontSize =doc.clientWidth / 10.80 + 'px';