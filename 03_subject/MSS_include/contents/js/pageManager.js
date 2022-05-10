"use strict";function openPageCallback(t){}$ts.loadScriptFile("../../../MSS_include/libs/js/polyfills.js"),function(){var t=$ts.ce({tag:"div",class:"loadingImage",parent:document.body}),e=setInterval(function(){window.$loadingData?t.style.display="block":(clearInterval(e),t.style.display="none")},50);window.parent==window?(document.querySelector("html").classList.add("noUI"),$ts.loadScriptFile("../../../MSS_include/libs/js/scale.js",function(){E.scale=new window.$cale({target:$ts.getEl("#wrap"),mode:"",align:"center"}),E.__defineGetter__("zoomRate",function(){return this.scale.zoomRate}),setTimeout(function(){$ts.getEl("#wrap").style.opacity=1},100)})):setTimeout(function(){E.zoomRate=1},100),document.addEventListener("touchmove",function(t){t.preventDefault()},{passive:!1}),window.$run=function(t,e){var a=setInterval(function(){""!==t&&void 0===window[t]||(clearInterval(a),e&&e())},10)},window.$callBack={};var E={},$={inPage:{slider:[],quiz:[],scroll:[]},inPopup:{slider:[],quiz:[],scroll:[]},popup:[],controller:[],singleAudio:[],sync:[],zoom:[],singleSprite:[],quiz:{inPage:[],inPopup:[]},get controllerLen(){return this.controller.length},get singleAudioLen(){return this.singleAudio.length}};function w(a){var t=a,e={};e.slideClass=a.slideClass||"on",e.tabClass=a.tabClass||"on",e.btnClass=a.btnClass||"off",e.callbacks={move:function(t){a.type&&"main"===a.type&&E.inPageReset(),a.type&&"noReset"===a.type||E.allEventReset(),"popup"===a.type||E.popupClose(),window.$callBack.sliderMove&&window.$callBack.sliderMove(t),window.$callBack.sliderReset&&window.$callBack.sliderReset(t);var e=t.idx+1;$.controller.forEach(function(t){t.autoPlay&&(t.setTimeAutoPlay&&clearTimeout(t.setTimeAutoPlay),a.type&&"main"===a.type&&e==t.playPage&&t.startAutoPlay(300))})},reset:function(t){a.callback&&a.callback(t)}},a.carousel&&(e.carousel={wrapper:$ts.getEl(a.carousel.wrapper,t.container,0),loop:{left:"left"===a.carousel.loop,right:"right"===a.carousel.loop},transitionDuration:a.carousel.transitionDuration||100});e=new $slider(t,e);"popup"===a.type?$.inPopup.slider.push(e):null!=a.type&&"main"===a.type||$.inPage.slider.push(e),E.sliders||(E.sliders=[]),E.sliders.push(e)}function v(n){var i=this;this.btn=n.btn,this.quizArray=[],this.completeCount=0,this.toggleBtn=function(){this.btn.classList.contains("reset")?this.allReset():this.allComplete()},this.allComplete=function(){for(var t in this.btn.classList.add("reset"),this.quizArray)this.quizArray[t].showAnswer();window.$callBack.quizChainAnswer&&window.$callBack.quizChainAnswer(this)},this.allReset=function(){for(var t in this.btn.classList.remove("reset"),this.quizArray)this.quizArray[t].reset();window.$callBack.quizChainReset&&window.$callBack.quizChainReset(this)},this.checkComplete=function(t){for(var e in this.completeCount=0,this.quizArray)(this.quizArray[e].container||this.quizArray[e].QUIZ.container).classList.contains("complete")&&this.completeCount++;this.completeCount==this.quizArray.length?this.btn.classList.add("reset"):this.btn.classList.remove("reset")},this.viewerChain=function(){},function(){var t,e=i.btn.getAttribute("data-quiz-chain");for(t in e=e.replace(/ /g,"").split(","))!function(e){var a=setInterval(function(){0!==$.quiz[n.include].length&&$.quiz[n.include].forEach(function(t){t.name===e&&(clearInterval(a),((t=t).chain=i).quizArray.push(t))})},10)}(e[t]);i.btn.hasAttribute("data-type")&&"reset"===i.btn.getAttribute("data-type")?i.btn.addEventListener("click",i.reset.bind(i)):i.btn.addEventListener("click",i.toggleBtn.bind(i)),$ts.addHoverEvents(i.btn),i.btn.addEventListener("click",$efSound.click)}()}function b(t){var e=this,a=t.targets,n=t.btn,i=(t.idx,t.callBack),o=[];function s(){i&&i.play&&i.play(e),o.forEach(function(t){t.start()})}function r(){i&&i.stop&&i.stop(e),o.forEach(function(t){t.stop()})}a.forEach(function(e){var t=e.getAttribute("data-sprite-count"),a=e.hasAttribute("data-sprite-delay")?e.getAttribute("data-sprite-delay"):50,n=(e.getAttribute("data-sprite-target"),e.getAttribute("data-sprite-src")),i=e.getAttribute("data-sprite-repeat");$ts.imgPreload(n,t,"png",function(t){o.push(new $ts.imgSprite(e,t,a,i))})}),n.addEventListener("click",$efSound.click),n.addEventListener("click",function(){(!this.hasAttribute("data-answer-btn")||this.classList.contains("reset")?s:r)()}),this.stop=r,this.spriteArray=o}function a(){$ts.loadScriptFile("../../../MSS_include/libs/js/drag.js",function(){if($ts.getEl("[data-drag]")){var t,e=$ts.getEl("[data-drag]");for(t in e)new $Drag({dragObj:e[t]})}}),$ts.getEl("[drag]")&&$ts.loadScriptFile("../../../MSS_include/content/js/simpleDrag.js");var t=$ts.getEl("[data-hover]");if(t)for(var e in t)$ts.addHoverEvents(t[e],"preventDefault");if($ts.getEl("[data-popup-btn]")&&$ts.getEl("[data-popup-container]")&&function(t,e){var a,n=$ts.getEl("[data-popup-page]"),i=$ts.getEl("main")[0];for(a in setTimeout(function(){for(var t in n)n[t].style.display="block"},200),t){var o=t[a].getAttribute("data-popup-btn"),s=$ts.getEl('[data-popup-page="'+o+'"]')[0],r="hidden"===t[a].getAttribute("data-popup-parent"),c=t[a].hasAttribute("data-popup-mode")?t[a].getAttribute("data-popup-mode"):"pageChange",l=t[a].getAttribute("data-auto-close")?parseInt(t[a].getAttribute("data-auto-close")):null,d=!!t[a].hasAttribute("data-close-inner"),c=$popup({btn:t[a],page:s,popupPages:n,container:e,idx:o,autoMode:l,closeInnerMode:d,UIHidden:r,Mode:c,callBack:{open:function(t){if(t.container.hasAttribute("data-slide-container"))for(var e in t.container.classList.add("on"),$.inPopup.slider)$.inPopup.slider[e].container===t.container&&$.inPopup.slider[e].reset({idx:t.idx-1});(t.UIHidden||t.page.classList.contains("whole"))&&(i.style.opacity=.3),"pageChange"===t.Mode&&E.mediaReset(),i.style.opacity=.99,setTimeout(function(){i.style.opacity=1},500),window.$popupCallBack&&window.$popupCallBack.open&&window.$popupCallBack.open(t),window.$popCallBack&&window.$popCallBack.open&&window.$popCallBack.open(t)},close:function(e){e.page.hasAttribute("data-popup-inner")||E.inPopupReset(),e.container.hasAttribute("data-slide-container")&&e.container.classList.remove("on"),$ts.getEl("[data-popup-inner]")&&$ts.getEl("[data-popup-inner]").forEach(function(t){e.idx==t.getAttribute("data-popup-inner")&&(t.classList.remove("on"),t.style.zIndex="")}),(e.UIHidden||e.page.classList.contains("whole"))&&(i.style.opacity=1),"pageChange"===e.Mode&&E.mediaReset(),window.$popupCallBack&&window.$popupCallBack.close&&window.$popupCallBack.close(e),window.$popCallBack&&window.$popCallBack.close&&window.$popCallBack.close(e)},reset:function(t){t.page.hasAttribute("data-popup-inner")||E.inPopupReset(),$pm.array.inPopup.scroll.concat($pm.array.inPage.scroll).forEach(function(t){$ts.getEl(".popup_container")[0].contains(t.container)&&t.reset()}),t.UIHidden&&E.mediaReset()}}});$.popup.push(c)}}($ts.getEl("[data-popup-btn]"),$ts.getEl("[data-popup-container]")[0]),$ts.getEl("[data-media-container]")&&function(t){for(var e in t){var a=t[e].getAttribute("data-media-container"),n=$ts.getEl("[data-media-btn]",t[e]),i=t[e].getAttribute("data-media-control"),n=new $controller({container:t[e],mediaType:a,controlType:i,mediaBtns:n,callBack:{play:function(t){for(var e in $.controller)$.controller[e].controller!==t.controller&&$.controller[e].stop();window.$callBack.mediaStart&&window.$callBack.mediaStart(t)},pause:function(t){window.$callBack.mediaPause&&window.$callBack.mediaPause(t)},stop:function(t){window.$callBack.mediaEnd&&window.$callBack.mediaEnd(t)},close:function(t){window.$callBack.videoClose&&window.$callBack.videoClose(t)}}});$.controller.push(n)}}($ts.getEl("[data-media-container]")),$ts.getEl("[data-slide-container]")){var a=$ts.getEl("[data-slide-container]");for(f in a)!function(t){for(var e=t.getAttribute("data-slide-container"),a=t.children,n=null,i=null,o=null,s=null,r=null,c={},l=0;l<a.length;l++)if(a[l].hasAttribute("data-slides")&&(n=a[l].children),a[l].hasAttribute("data-tabs-toggle")&&(r=a[l]),a[l].hasAttribute("data-slide-btn-container"))for(var d=a[l].children,u=0;u<d.length;u++)d[u].hasAttribute("data-tabs")&&(i=d[u].children),d[u].hasAttribute("data-btn-prev")&&(o=d[u]),d[u].hasAttribute("data-btn-next")&&(s=d[u]);else a[l].hasAttribute("data-tabs")&&(i=a[l].children),a[l].hasAttribute("data-btn-prev")&&(o=a[l]),a[l].hasAttribute("data-btn-next")&&(s=a[l]);if(c.type=e,c.container=t,c.slides=n,i&&(c.tabs=i).length<=2)for(l=0;l<i.length;l++)i[l].parentNode.setAttribute("data-no-line","");o&&(c.prevBtn=o),s&&(c.nextBtn=s),r&&(c.toggleBtn=r),w(c)}(a[f])}($ts.getEl("[data-scroll-container]")||$ts.getEl("[data-scroll-popup-container]"))&&function(t){var e,a={};for(e in a.inPage=t.page,a.inPopup=t.popup,a)for(var n in a[e]){var i=a[e][n],o=$ts.getEl("[data-scroll-inner]",a[e][n],0),s=$ts.getEl("[data-scroll-content]",a[e][n],0),r=a[e][n].getAttribute("data-scroll-reset"),c=a[e][n].getAttribute("data-scroll-value"),n=a[e][n].getAttribute("data-scroll-container");"all"===n?(l({container:i,inner:o,content:s,reset:r,value:c,type:"vertical"},e),l({container:i,inner:o,content:s,reset:r,value:c,type:"horizon"},e)):l({container:i,inner:o,content:s,reset:r,value:c,type:n},e)}function l(t,e){t=$scroll(t);$[e].scroll.push(t)}}({page:$ts.getEl("[data-scroll-container]"),popup:$ts.getEl("[data-scroll-popup-container]")}),$ts.getEl("[data-zoom-container]")&&$ts.loadScriptFile("../../../MSS_include/libs/js/zoomImage.js",function(){for(var t=$ts.getEl("[data-zoom-container]"),e=0;e<t.length;e++)$.zoom.push($zoom(t[e]))});var n,i,o,s,r,c,l=$ts.getEl("main [data-quiz]"),d=$ts.getEl("[data-popup-container] [data-quiz]"),u=$ts.getEl("main [data-quiz-chain]"),p=$ts.getEl("[data-popup-container] [data-quiz-chain]");for(f in l){var g=l[f].getAttribute("data-quiz");$.quiz.inPage.push($quiz({container:l[f],type:g,include:"inPage"}))}for(f in d){g=d[f].getAttribute("data-quiz");$.quiz.inPopup.push($quiz({container:d[f],type:g,include:"inPopup"}))}for(f in u)$.quiz.inPage.push(new v({btn:u[f],include:"inPage"}));for(f in p)$.quiz.inPopup.push(new v({btn:p[f],include:"inPopup"}));if($ts.getEl("[data-url]")&&1<=$ts.getEl("[data-url]").length)for(f in c=$ts.getEl("[data-url]"))c[f].addEventListener("click",k),c[f].addEventListener("click",$efSound.click);if($ts.getEl("[data-download-file]")&&1<=$ts.getEl("[data-download-file]").length)for(f in c=$ts.getEl("[data-download-file]"))c[f].addEventListener("click",m),c[f].addEventListener("click",$efSound.click);if($ts.getEl("[data-card-obj]")&&1<=$ts.getEl("[data-card-obj]").length){var f,h=$ts.getEl("[data-card-obj]");for(f in h)h[f].addEventListener("click",L),h[f].addEventListener("click",$efSound.click)}$ts.getEl("[data-open-gate]")&&1<=$ts.getEl("[data-open-gate]").length&&((n=$ts.getEl(".gate_container [data-gate-open-btn]")[0]).addEventListener("click",A),n.addEventListener("click",$efSound.click)),$ts.getEl("[data-sprite-target]")&&1<=$ts.getEl("[data-sprite-target]").length&&($ts.getEl("[data-sprite-target]"),o=$ts.getEl("[data-sprite-btn]"),i=$.singleSprite,o.forEach(function(t){var e=t.getAttribute("data-sprite-btn");i.push(new b({btn:t,targets:$ts.getEl('[data-sprite-target="'+e+'"]'),idx:e-1,callBack:{play:function(t){i.forEach(function(t){t.stop()})},stop:function(t){}}}))})),$ts.getEl("[data-click-obj]")&&1<=$ts.getEl("[data-click-obj]").length&&(c=$ts.getEl("[data-click-obj]")).forEach(function(t){t.addEventListener("click",function(t){var e=t.getAttribute("data-click-obj"),e=$ts.getEl('[data-click-target="'+e+'"');t.classList.contains("complete")?(t.classList.remove("complete"),window.$callBack.clickObjHide&&window.$callBack.clickObjHide(t)):(t.classList.add("complete"),window.$callBack.clickObjView&&window.$callBack.clickObjView(t));e&&0<e.length&&e.forEach(function(t){t.classList.contains("on")?t.classList.remove("on"):t.classList.add("on")})}.bind(null,t)),$ts.addHoverEvents(t,"preventDefault"),t.addEventListener("click",$efSound.click)}),$ts.getEl("[data-show-obj]")&&1<=$ts.getEl("[data-show-obj]").length&&(c=$ts.getEl("[data-show-obj]")).forEach(function(t){t.addEventListener("click",function(t){var e=t.getAttribute("data-show-obj"),a=$ts.getEl("[data-show-obj]"),n=$ts.getEl("[data-show-target]"),e=$ts.getEl('[data-show-target="'+e+'"');a.forEach(function(t){t.classList.remove("on")}),t.classList.add("on"),n.forEach(function(t){t.classList.remove("on")}),e.forEach(function(t){t.classList.add("on")}),window.$callBack.showObjClick&&window.$callBack.showObjClick(t)}.bind(null,t)),$ts.addHoverEvents(t,"preventDefault"),t.addEventListener("click",$efSound.click)}),$ts.getEl("[data-narration-obj]")&&1<=$ts.getEl("[data-narration-obj]").length&&(o=$ts.getEl("[data-narration-obj]"),s=$ts.getEl("[data-narration-target]"),r=$ts.getEl("[data-narration-container]"),o.forEach(function(e){e.addEventListener("click",function(){var n,t=e.getAttribute("data-narration-obj");n=t,r.forEach(function(t){var e=t.getAttribute("data-narration-audio"),a=t.children[0];n!=e?setTimeout(function(){a.pause(),a.currentTime=0,s.forEach(function(t){t.classList.remove("narrOn")})},5):setTimeout(function(){0<a.currentTime?(a.pause(),a.currentTime=0,s.forEach(function(t){var e=t.getAttribute("data-narration-target");n==e&&t.classList.remove("narrOn")})):(a.play(),a.addEventListener("ended",function(t){a.currentTime=0}),s.forEach(function(t){var e=t.getAttribute("data-narration-target");n==e&&t.classList.add("narrOn")}))},6)})})})),$ts.getEl("[data-clickShow-obj]")&&1<=$ts.getEl("[data-clickShow-obj]").length&&(c=$ts.getEl("[data-clickShow-obj]")).forEach(function(t){t.addEventListener("click",function(t,e){var a=t.getAttribute("data-clickShow-obj"),n=$ts.getEl("[data-clickShow-obj]"),i=$ts.getEl("[data-clickShow-target]"),a=$ts.getEl('[data-clickShow-target="'+a+'"');t.classList.contains("on")?(t.classList.remove("on"),a.forEach(function(t){t.classList.remove("on")})):(n.forEach(function(t){t.classList.remove("on")}),i.forEach(function(t){t.classList.remove("on")}),t.classList.add("on"),a.forEach(function(t){t.classList.add("on")}));window.$callBack.clickShowObjClick&&window.$callBack.clickShowObjClick(t)}.bind(null,t)),$ts.addHoverEvents(t,"preventDefault"),t.addEventListener("click",$efSound.click)}),$ts.getEl("[data-self-check]")&&$ts.loadScriptFile("../../../MSS_include/contents/js/cmn_check.js",function(){selfCheckInit()}),$ts.isDevice&&document.querySelector("#wrap").classList.add("ISMOBILE")}function m(){var t=this.getAttribute("data-download-file");window.open(t)}function k(){var t=this.getAttribute("data-url");window.open(t)}function L(){var t=$ts.getEl("[data-card-obj]");t.forEach(function(t){t.classList.remove("view"),t.classList.remove("prevCard")});for(var e=this.getAttribute("data-card-obj"),a=0;a<e-1;a++)t[a].classList.add("prevCard");this.classList.toggle("view")}function A(){$ts.getEl("[data-open-gate]")[0].classList.add("on"),$ts.getEl(".gate_container")[0].classList.add("off")}E.inPageReset=function(){for(var t in E.mediaReset(),E.popupClose(),$.inPage)if($.inPage[t].length)for(var e in $.inPage[t])E.reset($.inPage[t][e],t);window.resetAppears(),$.quiz.inPage.forEach(function(t){t.reset()})},E.inPopupReset=function(){for(var t in $.inPopup)if($.inPopup[t].length)for(var e in $.inPopup[t])E.reset($.inPopup[t][e],t);$.quiz.inPopup.forEach(function(t){t.reset()}),E.zoomReset();var a=$ts.getEl("[data-popup-container] [data-click-obj]"),n=$ts.getEl("[data-popup-container] [data-click-target]");a&&0<a.length&&a.forEach(function(t){t.classList.remove("complete")}),n&&0<n.length&&n.forEach(function(t){t.classList.remove("on")});a=$ts.getEl("[data-popup-container] [data-show-obj]"),n=$ts.getEl("[data-popup-container] [data-show-target]");a&&0<a.length&&a.forEach(function(t){t.classList.remove("on")}),n&&0<n.length&&n.forEach(function(t){t.classList.remove("on")});a=$ts.getEl("[data-narration-container]"),n=$ts.getEl("[data-narration-target]");a&&0<a.length&&a.forEach(function(t){t=t.children[0];t.pause(),t.currentTime=0}),n&&0<n.length&&n.forEach(function(t){t.classList.remove("narrOn")});a=$ts.getEl("[data-popup-container] [data-clickShow-obj]"),n=$ts.getEl("[data-popup-container] [data-clickShow-target]");a&&0<a.length&&a.forEach(function(t){t.classList.remove("on")}),n&&0<n.length&&n.forEach(function(t){t.classList.remove("on")})},E.reset=function(t,e){"scroll"!==e||t.isReset?t.reset():t.getData()},E.popupClose=function(){if($.popup.length)for(var t in $.popup)$.popup[t].close()},E.mediaReset=function(){if($.controllerLen)for(var t in $.controller)$.controller[t].stop();if($.singleAudioLen)for(var t in $.singleAudio)$.singleAudio[t].stop();if($.sync.length)for(var t in $.sync)$.sync[t].reset()},E.zoomReset=function(){E.array.zoom.forEach(function(t){t.resetNotWorking||t.resetZoom()})},E.singleSpriteReset=function(){E.array.singleSprite.forEach(function(t){t.stop()})},E.allEventReset=function(){$pm.array.inPage.quiz.forEach(function(t){t.reset(),t.QUIZ.answerBtn&&t.QUIZ.answerBtn.classList.remove("reset")}),$.quiz.inPopup.forEach(function(t){t.reset()}),E.zoomReset(),E.singleSpriteReset();var t=$ts.getEl("[data-click-obj]"),e=$ts.getEl("[data-click-target]");t&&0<t.length&&t.forEach(function(t){t.classList.remove("complete")}),e&&0<e.length&&e.forEach(function(t){t.classList.remove("on")});t=$ts.getEl("[data-show-obj]");t&&0<t.length&&t.forEach(function(t){t.classList.remove("on")});e=$ts.getEl("[data-show-target]");e&&0<e.length&&e.forEach(function(t){t.classList.remove("on")});t=$ts.getEl("[data-narration-container]"),e=$ts.getEl("[data-narration-target]");t&&0<t.length&&t.forEach(function(t){t=t.children[0];t.pause(),t.currentTime=0}),e&&0<e.length&&e.forEach(function(t){t.classList.remove("narrOn")});t=$ts.getEl("[data-clickShow-obj]"),e=$ts.getEl("[data-clickShow-target]");t&&0<t.length&&t.forEach(function(t){t.classList.remove("on")}),e&&0<e.length&&e.forEach(function(t){t.classList.remove("on")});e=$ts.getEl("[data-self-obj]");e&&0<e.length&&e.forEach(function(t){t.classList.remove("on")});e=$ts.getEl(".js-help");e&&0<e.length&&e.forEach(function(t){t.classList.remove("on")}),0<$ts.getEl(".charSpriteAni").length&&$prite.allresetSprite()},function(){window.$efSound={};var t,a={click:$ts.createAudio.set("../../../MSS_include/libs/media/click.mp3"),click2:$ts.createAudio.set("../../../MSS_include/libs/media/click2.mp3"),correct:$ts.createAudio.set("../../../MSS_include/libs/media/correct.mp3"),incorrect:$ts.createAudio.set("../../../MSS_include/libs/media/incorrect.mp3"),stamp:$ts.createAudio.set("../../../MSS_include/libs/media/stamp.mp3")};for(t in a)!function(t,e){e.load(),window.$efSound[t]=function(){return $ts.createAudio.interval(e.duration,function(){n(),e.play()}),e}}(t,a[t]);function n(t){for(var e in a)a[e].pause(),a[e].currentTime&&(a[e].currentTime=0)}window.$efSound.stop=n,window.$efSound.muted=function(t){for(var e in a)a[e].muted=t}}(),document.addEventListener("DOMContentLoaded",function(){var t;a(),window.$efSound&&window.$efSound.muted&&(window.$efSound.muted(!0),t=!0,document.body.addEventListener("mousedown",function(){t&&(window.$efSound.muted(!1),t=!1)}),document.body.addEventListener("touchstart",function(){t&&(window.$efSound.muted(!1),t=!1)}))}),E.slider=w,E.array=$,E.completeQuizManually=function(t){t.container.classList.add("complete"),t.answerBtn&&t.answerBtn.classList.add("reset")},window.$pm=E,window.$pm.addSlidersSwipeBlockQuery=function(e){this.sliders.forEach(function(t){t.swipe.BLOCK_QUERIES.push(e)})}}(),function(){var a,t=$ts.getEl("[data-tabs]");if(t){a=[],t.forEach(function(t){for(var e=0;e<t.children.length;e++)a.push(t.children[e])});for(var e=0;e<a.length;e++)a[e].addEventListener("click",function(t){var t=t.target;t.classList.contains("on")||(t=t.dataset.appearIndex,(t=parseInt(t))&&(resetAppears(),startAppear("group_"+t)))})}}(),function(){var t=$ts.getEl(".js-help");t&&0<t.length&&t.forEach(function(t){var e=t.querySelector(".js-helpButton"),a=t.querySelector(".js-helpContent");e&&a&&(e.addEventListener("click",$efSound.click),e.addEventListener("click",function(t){t.classList.contains("on")?t.classList.remove("on"):t.classList.add("on")}.bind(null,t)))})}(),window.addEventListener("load",function(){window.DOMelementsLoaded=!0});