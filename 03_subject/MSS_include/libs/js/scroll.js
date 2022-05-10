"use strict";!function(){function p(t){var e=t.target.hasAttribute("data-speaker")||t.target.hasAttribute("data-toggle-target")||t.target.hasAttribute("data-toggle-obj"),n="textarea"===t.target.tagName.toLowerCase();return"input"===t.target.tagName.toLowerCase()||n||e}function e(t){var i=this,e={};this.container=t.container,this.inner=t.inner,this.content=t.content,this.isReset="false"!=t.reset,this.wheelValue=t.value||20,this.type=t.type&&""!==t.type?t.type:"vertical",this.wheelData=0,this.data={},this.createControl=function(){this.handleContainer=$ts.ce({tag:"div",class:"scroll_handleContainer "+this.type,parent:this.container}),this.bar=$ts.ce({tag:"div",class:"scroll_bar",parent:this.handleContainer}),this.handler=$ts.ce({tag:"div",class:"scroll_handler",parent:this.handleContainer}),this.addEvent();var t=setInterval(function(){i.container.offsetHeight&&(clearInterval(t),i.getData())},10)},this.wheel=function(t){var e,n;p(t)||(n=this.wheelValue,t.deltaY?(e=-t.deltaY/120,window.opera&&(e=-e)):t.detail&&(e=-t.detail/3),this.wheelData=e<0?this.wheelData>-n?this.wheelData+e:-n:this.wheelData<0?this.wheelData+e:0,n=-this.wheelData/n,this.getData(),this.movePage(n),this.moveHandler(n))},this.getData=function(){e.containerHeight=this.container.offsetHeight,e.containerWidth=this.container.offsetWidth,e.contentHeight=this.content.offsetHeight,e.contentWidth=this.content.offsetWidth,e.maxHeight=e.containerHeight-e.contentHeight,e.maxWidth=e.containerWidth-e.contentWidth,e.handler={width:this.handler.offsetWidth,height:this.handler.offsetHeight},e.barSize="vertical"===this.type?this.bar.offsetHeight-e.handler.height:this.bar.offsetWidth-e.handler.width,this.data=e},this.addEvent=function(){this.handlerEvent=new n({container:this.container,dragObj:this.handler,type:this.type,callBack:{start:function(t){i.getData()},move:function(t){i.moveHandler(i.getRate("handler")),i.movePage(i.getRate("handler"))},end:function(t){}}}),this.bar.addEventListener("click",this.clickBar.bind(this)),"touch"===this.content.getAttribute("data-scroll-content")&&(this.contentEvent=new n({container:this.container,dragObj:this.content,type:this.type,callBack:{move:function(t){var e=i.content.offsetTop,n=i.content.offsetLeft;0<e?e/=3:e<i.data.maxHeight&&(e=i.data.maxHeight+(e-i.data.maxHeight)/3),0<n?n/=3:n<i.data.maxWidth&&(n=i.data.maxWidth+(n-i.data.maxWidth)/3),"horizon"!==i.type&&(i.content.style.top=e+"px"),"vertical"!==i.type&&(i.content.style.left=n+"px"),i.moveHandler(i.getRate("content"))},end:function(t){t.isClicked||(i.moveHandler(i.getRate("content")),i.movePage(i.getRate("content")))}}})),"vertical"===this.type&&this.container.addEventListener("wheel",this.wheel.bind(this))},this.clickBar=function(t){this.getData();var e=("touchmove"==t.type?t.touches[0]:t).clientY,n=("touchmove"==t.type?t.touches[0]:t).clientX,i=this.bar.getBoundingClientRect().top,a=this.bar.getBoundingClientRect().left,h=this.bar.getBoundingClientRect().width,t=this.bar.getBoundingClientRect().height,a="vertical"===this.type?e-i:n-a,h="vertical"===this.type?a/t:a/h;this.moveHandler(h),this.movePage(h)},this.getRate=function(t){t="handler"===t?"vertical"===this.type?this.handler.offsetTop/this.data.barSize:this.handler.offsetLeft/this.data.barSize:"vertical"===this.type?this.content.offsetTop/this.data.maxHeight:this.content.offsetLeft/this.data.maxWidth;return t},this.moveHandler=function(t){t=this.data.barSize*(t<0?0:1<=t?1:t);"horizon"!==this.type&&(this.handler.style.top=t+"px"),"vertical"!==this.type&&(this.handler.style.left=t+"px")},this.movePage=function(t){t=t<0?0:1<=t?1:t,t="vertical"===this.type?this.data.maxHeight*t:this.data.maxWidth*t;0<t&&(t=-t),"horizon"!==this.type&&(this.content.style.top=t+"px"),"vertical"!==this.type&&(this.content.style.left=t+"px")},this.reset=function(){this.getData(),this.moveHandler(0),this.movePage(0)},this.set=function(){this.createControl()},this.set()}function n(t){var r=this,l=t.type||"all",d=t.dragObj,u=(t.dropObj||document,t.container||document),e=t.callBack&&t.callBack.start?t.callBack.start:null,v=t.callBack&&t.callBack.move?t.callBack.move:null,f=t.callBack&&t.callBack.end?t.callBack.end:null;function g(){d.addEventListener("click",m,!0)}function m(){}this.startDrag=function(t){var n,i,a,h,s;function o(t){var e=("touchmove"==t.type?t.touches[0]:t).clientY,t=("touchmove"==t.type?t.touches[0]:t).clientX,e=(e-i)/n+h,t=(t-a)/n+s;r.newY=e,r.newX=t,"horizon"!==l&&(d.style.top=e+"px"),"vertical"!==l&&(d.style.left=t+"px"),v&&v(r)}function c(){var t=arguments[0],e=t.clientX||t.changedTouches[0].clientX,t=t.clientY||t.changedTouches[0].clientY;Math.abs(a-e)<50&&Math.abs(i-t)<50?(d.removeEventListener("click",m,!0),window.setTimeout(g),r.isClicked=!0):r.isClicked=!1,u.removeEventListener("mousemove",o),u.removeEventListener("touchmove",o),document.removeEventListener("mouseup",c),document.removeEventListener("touchend",c),f&&f(r)}e&&e(r),p(t)||(n=$pm.zoomRate||1,i=("touchstart"==t.type?t.touches[0]:t).clientY,a=("touchstart"==t.type?t.touches[0]:t).clientX,h=d.offsetTop,s=d.offsetLeft,d.style.transition="none",u.addEventListener("mousemove",o),u.addEventListener("touchmove",o),document.addEventListener("mouseup",c),document.addEventListener("touchend",c))},d.addEventListener("mousedown",this.startDrag.bind(this)),d.addEventListener("touchstart",this.startDrag.bind(this)),u.addEventListener("touchstart",function(t){t.stopPropagation()}),g()}window.$scroll=function(t){return new e(t)}}();