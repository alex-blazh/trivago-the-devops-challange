(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{818:function(e,t,n){},977:function(e,t,n){"use strict";n.r(t);var i,a=n(4),s=n(19),r=n(9),l=n(5),c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=r.a.homepageseo,d=void 0===o?{}:o,u={cities:d.topCities,destinations:d.topDestinations},f={isImageSearch:!1,images:u.cities,active:"cities",hasRegistered:l.d.getState().marketing.hasRegistered},h=n(3),m={cities:1,destinations:2,images:3},p=n(13);n(40),n(291),(i=["search/log?sLog=",""]).raw=["search/log?sLog=",""];var g=r.a.pahtId,O=document.querySelectorAll(".js_log_click");function b(e,t){var n=0;return Array.prototype.forEach.call(t.childNodes,function(i){i.offsetLeft<e&&i.offsetLeft+i.offsetWidth>e&&(n=null==i.nextElementSibling?i.offsetLeft+i.offsetWidth-t.offsetWidth:i.offsetLeft)}),n}Array.prototype.forEach.call(O,function(e){var t=e.dataset.logging;t&&e.addEventListener("click",function(){window.document.cookie="log_pg=2318:"+t+":"+g+";path=/"})});var v=n(280),j=n.n(v),_=n(0),E=(n(15),n(1)),C={},I=["class","hero__line"],S=["id","js-homepage-title"];C.render=function(e){var t;(Object(_.elementOpen)("div","lfSJe4l",S),void 0!==e.isOnHomepage&&e.isOnHomepage)&&(Object(_.elementOpen)("h1",null,null,"class",Object(E.classes)(((t={base:"hero__title"})["hero__title--"+e.locale.toLowerCase()]=j()(["CN","JP","DE","RU"],e.locale),t))),Object(_.elementOpen)("span","`y[M46S",I),Object(_.text)(window.translate("homepage_usp")),Object(_.elementClose)("span"),Object(_.elementClose)("h1"));Object(_.elementClose)("div")};var y=n(24),T=n(8),P=n(22),w=Object(T.createStructuredSelector)({isOnHomepage:y.isOnHomepageSelector,locale:function(){return r.a.l10n.locale_iso}}),L=Object(P.connect)(w)(Object(a.createComponent)(function(e){return C.render(e)}));Object(a.render)(document.querySelector("#js-homepage-title"),Object(P.provide)(l.d,L));var k=n(79),A=n(34),N=n.n(A),R=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},x=function(e){return e.numPages-1===e.currentPage},M=Object(T.createSelector)(function(e){return e.images||[]},function(e){return x(e)?e.images.length-e.numVisibleImages-1:e.currentPage},function(e){return x(e)?e.images.length:e.numVisibleImages+e.currentPage},function(e,t,n){return e.slice(t,n).reduce(function(e,t){return e[t.id]=!0,e},{})}),G=(n(818),n(10),Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}),V={images:[],currentPage:0,disableTransition:!1,loadedImages:{},shouldLoadImages:!1},D=function(e,t){var n=e.images,i=void 0===n?[]:n,a=t||e.containerWidth,s=274*i.length-a,r=Math.ceil(s/274)+1,l=Math.ceil(a/274);return G({},e,{imageWidth:274,numPages:r,numVisibleImages:l,containerWidth:a,currentPage:e.currentPage>r-1?r-1:e.currentPage,minLeftOffset:-1*s})},W=function(e,t){var n=e*t.imageWidth*-1;return{leftSideOffset:Math.max(n,t.minLeftOffset),disableTransition:!1}},z=function(e){return{type:"TOGGLE_IMAGE_LOADING",payload:e}},X=n(68),H=n.n(X),U=("function"==typeof Symbol&&Symbol.iterator,{});U.render=function(e){Object(_.elementOpenStart)("li",null,null);for(var t=0,n=Object(E.attrs)({class:Object(E.classes)({base:"sc-slider-controls__page","sc-slider-controls__page--active":e.selected}),onclick:null!=e.handleClick&&""!==e.handleClick?e.handleClick:""}),i=n.length;t<i;t+=2)Object(_.attr)(n[t],n[t+1]);Object(_.elementOpenEnd)(),Object(_.skip)(),Object(_.elementClose)("li")};var B=Object(s.exposeToState)(["handleClick"]),q=Object(a.createComponent)(function(e){return U.render(e)},B,{handleClick:function(){var e=this.props,t=e.page;(0,e.onClick)(t)}}),F=("function"==typeof Symbol&&Symbol.iterator,{}),Z=n(96).default,J=["class","visuallyhidden"];function Y(e){return F.render(e)}F.render=function(e){Object(_.elementOpenStart)("button",null,null);for(var t=0,i=Object(E.attrs)({disabled:e.isDisabled,type:"button",onclick:e.onClick}),a=i.length;t<a;t+=2)Object(_.attr)(i[t],i[t+1]);Object(_.elementOpenEnd)(),Object(_.elementOpen)("span","general/arrow",null,"class","icon-ic "+Object(E.classes)({"sc-slider-controls__arrow":!0,"icon-flip":e.iconFlip,"sc-slider-controls__arrow--disabled":e.isDisabled})),n(23).default(Z),Object(_.elementClose)("span"),Object(_.elementOpen)("span","_+4?A+C",J),Object(_.text)(e.alternativeText),Object(_.elementClose)("span"),Object(_.elementClose)("button")};var Q={},K=["class","sc-slider-controls__pagination"],$=["class","sc-slider-controls"];Q.render=function(e){Object(_.elementOpen)("div","OcQThdd",$),Y({isDisabled:0==e.currentPage,onClick:null!=e.onClickPrevious&&""!==e.onClickPrevious?e.onClickPrevious:"",iconFlip:!0,alternativeText:window.translate("btn_previous")}),Object(_.elementOpen)("ul","%N1i.bZ",K);for(var t=H()(0,e.numPages-1+1),n=0,i=t.length,a=t[0];n<i;a=t[++n])Object(_.component)(q,""+a,{selected:a==e.currentPage,page:a,onClick:e.onClickIndicator});Object(_.elementClose)("ul"),Y({isDisabled:e.numPages-1==e.currentPage,onClick:null!=e.onClickNext&&""!==e.onClickNext?e.onClickNext:"",iconFlip:!1,alternativeText:window.translate("btn_next")}),Object(_.elementClose)("div")};var ee=Object(a.createComponent)(function(e){return Q.render(e)}),te=n(168),ne=n.n(te),ie=n(104),ae=("function"==typeof Symbol&&Symbol.iterator,{}),se=["class","sc-teaser__image-wrapper"],re=["class","h3 sc-teaser__hotel-country ov-hidden ellipsis whs-nowrap"],le=["class","sc-teaser__price-up"],ce=["ref",Object(_.ref)("image"),"class","block sc-teaser__link"],oe=["class","sc-teaser__item"];ae.render=function(e){var t;if(Object(_.elementOpen)("li","Fm3IjV{",oe),t=window.translate("hotels_in_seo",{sName:e.name}),Object(_.elementOpen)("a","6Qnmo!|",ce,"href",e.link,"title",e.name),Object(_.elementOpen)("div","zq}={]7",se),!e.isServerSide&&null!=e.loadedImages[e.id]&&""!==e.loadedImages[e.id]&&e.loadedImages[e.id]){Object(_.elementOpenStart)("img",null,null);for(var n=0,i=Object(E.attrs)({src:e.image,decoding:"async",class:"sc-teaser__img",alt:t}),a=i.length;n<a;n+=2)Object(_.attr)(i[n],i[n+1]);Object(_.elementOpenEnd)(),Object(_.skip)(),Object(_.elementClose)("img")}Object(_.elementClose)("div"),Object(_.elementOpen)("h3","g*ewlx,",re),Object(_.text)(t),Object(_.elementClose)("h3"),Object(_.elementOpen)("span","H?u/+*:",le),Object(_.raw)(window.translate("SEO_count_hotels",{count:e.countHotels})),e.avgPrice&&(Object(_.elementOpen)("strong",null,null),Object(_.text)(" "+window.translate("abbv_avg")),Object(_.text)(" "+Object(_.rawString)(e.avgPrice)),Object(_.elementClose)("strong")),Object(_.elementClose)("span"),Object(_.elementClose)("a"),Object(_.elementClose)("li")};var de=Object(ie.a)({image:{click:function(e){e.preventDefault(),Object(h.b)("100:2452:"+m[this.props.activeTab]+"1:164:"+this.props.index,{sendDirectly:!0}),location.href=this.props.link},focus:function(e){this.props.resetScrollLeft(),this.props.ensureItemVisible(this.props.index)}}})(Object(a.createComponent)(function(e){return ae.render(e)})),ue={},fe=["class","sc-teaser__list sc-slider__content"];ue.render=function(e){var t;t="translateX("+e.leftSideOffset+"px)",Object(_.elementOpen)("ul","?r6^fx>",fe,"style","-webkit-transform:"+t+"; transform:"+t+";"+(e.disableTransition?"transition: none;":""));for(var n=e.images,i=0,a=n.length,s=n[0],r=1,l=a-1;i<a;s=n[++i])Object(_.component)(de,""+s.id,Object(E.merge)(s,{loadedImages:e.loadedImages,index:r,ensureItemVisible:null!=e.ensureItemVisible&&""!==e.ensureItemVisible?e.ensureItemVisible:"",resetScrollLeft:null!=e.resetScrollLeft&&""!==e.resetScrollLeft?e.resetScrollLeft:"",activeTab:e.activeTab})),r++,0,!1,0===--l;Object(_.elementClose)("ul")};var he=Object(a.createComponent)(function(e){return ue.render(e)},void 0,function(e){var t=e.componentDidMount,n=e.componentWillUnmount;return{componentDidMount:function(){this.handleResize=ne()(this.handleResize.bind(this),100),window.addEventListener("resize",this.handleResize),this.handleResize(),t.call(this)},componentWillUnmount:function(){window.removeEventListener("resize",this.handleResize),n.call(this)},handleResize:function(){(0,this.props.onContainerResize)(this.el.offsetWidth)}}}),me=Object(P.provide)(l.d,he),pe={},ge=["ref",Object(_.ref)("panImageContainer")],Oe=["class","sc-teaser__slider sc-slider__container mb-gutter-doubled","id","js_homepage_slider"];pe.render=function(e){Object(_.elementOpen)("div","|oe[_1<",Oe),Object(_.elementOpen)("div","S<)Y{*L",ge),Object(_.component)(me,"item-container",{leftSideOffset:null!=e.leftSideOffset&&""!==e.leftSideOffset?e.leftSideOffset:0,disableTransition:null!=e.disableTransition&&""!==e.disableTransition&&e.disableTransition,images:null!=e.images&&""!==e.images?e.images:[],loadedImages:null!=e.loadedImages&&""!==e.loadedImages?e.loadedImages:{},onContainerResize:null!=e.handleContainerResize&&""!==e.handleContainerResize?e.handleContainerResize:"",isImageSearch:null!=e.isImageSearch&&""!==e.isImageSearch&&e.isImageSearch,ensureItemVisible:null!=e.ensureItemVisible&&""!==e.ensureItemVisible?e.ensureItemVisible:"",resetScrollLeft:null!=e.resetScrollLeft&&""!==e.resetScrollLeft?e.resetScrollLeft:"",activeTab:e.active}),Object(_.elementClose)("div"),!e.isServerSide&&e.numPages>0&&Object(_.component)(ee,"slider-controls",{numPages:null!=e.numPages&&""!==e.numPages?e.numPages:0,currentPage:null!=e.currentPage&&""!==e.currentPage?e.currentPage:0,onClickPrevious:null!=e.handleClickPrevious&&""!==e.handleClickPrevious?e.handleClickPrevious:"",onClickNext:null!=e.handleClickNext&&""!==e.handleClickNext?e.handleClickNext:"",onClickIndicator:null!=e.handleClickIndicator&&""!==e.handleClickIndicator?e.handleClickIndicator:""}),Object(_.elementClose)("div")};var be=function(e){var t=e.componentDidMount,n=e.componentWillUnmount;return{componentDidMount:function(){var e=this;window.scrollY>5?this.dispatch(z(!0)):(this.scrollHandler=function(){window.removeEventListener("scroll",e.scrollHandler),e.dispatch(z(!0)),e.scrollHandler=void 0},window.addEventListener("scroll",this.scrollHandler)),t.call(this)},componentWillUnmount:function(){this.scrollHandler&&window.removeEventListener("scroll",this.scrollHandler),n.call(this)}}};var ve=Object(s.exposeToState)(["handleContainerResize","handleClickPrevious","handleClickNext","handleClickIndicator","ensureItemVisible","resetScrollLeft"],N()(function(){var e,t,n,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,s=arguments[1],r=s.type,l=s.payload;switch(r){case a.RECEIVE_PROPS:return G({},i,l);case"TOGGLE_IMAGE_LOADING":return G({},i,{shouldLoadImages:l});case"NEXT_PAGE":var c=Math.min(i.currentPage+1,i.numPages-1);return G({},i,{currentPage:c},W(c,i));case"PREVIOUS_PAGE":var o=Math.max(i.currentPage-1,0);return G({},i,{currentPage:o},W(o,i));case"GO_TO_PAGE":return G({},i,{currentPage:l},W(l,i));case"GO_TO_ITEM":var d=Math.max(l-(i.numVisibleImages-1),0);return G({},i,{currentPage:d},W(d,i));case"CONTAINER_RESIZE":var u=D(i,l);return G({},u,W(u.currentPage,u));case"RECALCULATE_INDICATORS":var f=D(i);return G({},i,l,f,W(f.currentPage,f));case"PAN_CONTAINER":var h=l.distance,m=l.isFinal,p=void 0;p=Math.min(0,Math.max(i.leftSideOffset+h,i.minLeftOffset));var g=(e=p,t=i.imageWidth,n=i.minLeftOffset,e===n?Math.ceil(-1*e/t):Math.round(-1*e/t));return G({},i,{leftSideOffset:p,disableTransition:!m,currentPage:g},m?W(g,i):{})}return i},function(e,t){switch(t.type){case"VISIBILITY_CHANGE":return e.shouldLoadImages&&void 0!==e.numPages?R({},e,{loadedImages:R({},e.loadedImages,M(e))}):e;default:return e}})),je=Object(a.createComponent)(function(e){return pe.render(e)},ve,function(e){var t=e.componentDidMount,n=e.componentWillUnmount;return{componentDidMount:function(){var e,n,i,a=this;this.panListener=new k.Manager(this.refs.panImageContainer,{recognizers:[[k.Pan,{direction:k.DIRECTION_HORIZONTAL}]]}),this.panListener.on("pan",(e=function(e){return a.dispatch((t=e.deltaStepX,n=e.isFinal,{type:"PAN_CONTAINER",payload:{distance:t,isFinal:n}}));var t,n},n=0,i=0,function(t){t.deltaTime<i&&(n=0),t.deltaStepX=t.deltaX-n,n=t.deltaX,i=t.deltaTime,e.call(this,t)})),t.call(this)},componentWillUpdate:function(e,t){var n;e.active!==this.props.active&&this.dispatch({type:"RECALCULATE_INDICATORS",payload:n})},componentWillUnmount:function(){this.panListener&&(this.panListener.destroy(),this.panListener=null),n.call(this)},handleContainerResize:function(e){this.dispatch({type:"CONTAINER_RESIZE",payload:e})},handleClickPrevious:function(){this.dispatch({type:"PREVIOUS_PAGE"})},handleClickNext:function(){this.dispatch({type:"NEXT_PAGE"})},handleClickIndicator:function(e){this.dispatch(function(e){return{type:"GO_TO_PAGE",payload:e}}(e))},ensureItemVisible:function(e){this.dispatch(function(e){return{type:"GO_TO_ITEM",payload:e}}(e))},resetScrollLeft:function(){this.el.scrollLeft=0}}},be,Object(s.applyMiddleware)(function(e){var t=e.getState;return function(e){return function(n){var i=function(e){switch(e){case"PREVIOUS_PAGE":return 3;case"NEXT_PAGE":return 5;case"GO_TO_PAGE":return 4;default:return null}}(n.type);if(null===i)return e(n);var a="100:2452:"+m[t().active]+i;return Object(h.b)(a),e(n)}}},function(e){var t=e.dispatch;return function(e){return function(n){var i=e(n);return function(e){switch(e){case a.RECEIVE_PROPS:case"NEXT_PAGE":case"PREVIOUS_PAGE":case"GO_TO_PAGE":case"GO_TO_ITEM":case"CONTAINER_RESIZE":case"TOGGLE_IMAGE_LOADING":case"PAN_CONTAINER":return!0;default:return!1}}(n.type)&&t({type:"VISIBILITY_CHANGE"}),i}}})),_e=n(130),Ee={},Ce=["id","js_homepage_tabs","class","tabs no-select"];Ee.render=function(e){Object(_.elementOpen)("div","SEOTabs",Ce),Object(_.component)(_e.a,""+e.seotabs,{tabs:e.tabs,active:e.active,classes:"tabs--homepage",onChange:e.handleTabChange}),Object(_.elementClose)("div")};var Ie=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},Se={cities:[document.getElementById("js-homepage-cities-header"),document.getElementById("js-homepage-cities-body")],destinations:[document.getElementById("js-homepage-destinations-header"),document.getElementById("js-homepage-destinations-body")]},ye=[{label:window.translate("top_city_tab"),id:"cities"},{label:window.translate("top_destination_tab"),id:"destinations"}],Te="cities";Object(p.a)("WEB-39519")&&(ye.unshift({label:window.translate("search_by_photo"),id:"images"}),Te="images");var Pe=function(e){Object.keys(Se).forEach(function(t){Se[t].forEach(function(n){e===t?n.classList.remove("is-hidden"):n.classList.add("is-hidden")})})};Pe(Te);var we=Object(s.exposeToState)(["handleTabChange"],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tabs:ye,active:Te},t=arguments[1],n=t.type,i=t.payload;switch(n){case a.RECEIVE_PROPS:return Ie({},e,i);case"SET_ACTIVE_TAB":return Ie({},e,{active:i});default:return e}}),Le=Object(a.createComponent)(function(e){return Ee.render(e)},we,{handleTabChange:function(e){Pe(e),this.props.changeTabs(e),this.dispatch({type:"SET_ACTIVE_TAB",payload:e})}}),ke={},Ae=["class","homepage-navigation mb-gutter"];ke.render=function(e){Object(_.elementOpen)("div","SEOModule",null),Object(_.elementOpen)("div","vEAqlKH",Ae),e.isServerSide||Object(_.component)(Le,"SEOTabs",{changeTabs:e.changeTabs}),Object(_.elementClose)("div"),Object(_.component)(je,"SEOSlider",{images:e.images,currentPage:0,leftSideOffset:0,disableTransition:!0,isImageSearch:null!=e.isImageSearch&&""!==e.isImageSearch&&e.isImageSearch,active:null!=e.active&&""!==e.active?e.active:""}),Object(_.elementClose)("div")};var Ne=document.getElementById("js_homepage-module"),Re=Object(s.exposeToState)(["changeTabs"],function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments[1],n=t.type,i=t.payload;switch(n){case a.RECEIVE_PROPS:return c({},e,i);case"SET_ACTIVE_TAB":return c({},e,{images:u[i],isImageSearch:"images"===i,active:i});default:return e}}),xe=null;if(Object(p.a)("WEB-44419")){var Me=new function(e,t){var n,i=!1,a=e.querySelector(".js-slider-content"),s=e.querySelector(".js-slider-pages"),r=e.querySelector(".js-slider-next"),l=e.querySelector(".js-slider-previous"),c=e.querySelector(".js-slider-controls"),o=1,d=-1,u=e.offsetWidth,f=a.offsetWidth,h=0,m=e.dataset.logging;void 0!==t&&void 0!==m||(t={addListener:function(){},logOnce:function(){}}),n=m,g&&(n="0:"+g+"|"+n),m=n,this.addPage=function(e){var n=this,i=document.createElement("li");i.setAttribute("class","slider-controls__page js-slider-page"),i.addEventListener("click",function(t){n.goto(e)}),t.addListener(i,"click",m),c&&s.appendChild(i)},this.goto=function(e){e>=o&&(e=o-1),e<0&&(e=0),d=e;var t=b(u*e,a);if(a.style.left="-"+t+"px",c){var n=s.querySelectorAll(".js-slider-page"),i=this;Array.prototype.forEach.call(n,function(t,n){n===e?(t.className+=" js-slider-page-active slider-controls__page--active",i.ensurePageVisible(t)):t.className=t.className.replace(/(?:^|\s)slider-controls__page--active|js-slider-page-active(?!\S)/g,"")})}},this.ensurePageVisible=function(e){var t=s.parentNode.offsetWidth;if(e){var n=Math.min(Math.max(t/2-e.offsetLeft,t-h),0);s.style.left=n+"px"}},this.next=function(){this.goto(d+1)},this.previous=function(){this.goto(d-1)},this.update=function(){var t=0;o>0&&d>0&&(t=d/o),f=0;for(var n=a.children,i=0;i<n.length;i++)f+=n[i].offsetWidth;if(u=e.offsetWidth,o=Math.max(1,Math.ceil(f/u)),c){for(;s.firstChild;)s.removeChild(s.firstChild);for(var r=0;r<o;r++)this.addPage(r);h=0;var l=s.children;l.length>0&&(h=l[l.length-1].offsetLeft/(l.length-1)*l.length-l[0].offsetLeft)}this.goto(Math.round(o*t))},this.pause=function(){!1!==i&&(e.className=e.className.replace(/(?:^|\s)slider__container(?!\S)/g,""),a.className=a.className.replace(/(?:^|\s)slider__content(?!\S)/g,""),c&&(c.className+=" is-hidden"),i=!1)},this.init=function(){!0!==i&&(e.className+=" slider__container",a.className+=" slider__content",c&&(c.className=c.className.replace(/(?:^|\s)is-hidden(?!\S)/g,"")),this.update(),i=!0)};var p=this;r&&(t.addListener(r,"click",m),r.addEventListener("click",function(){p.next()})),l&&(t.addListener(l,"click",m),l.addEventListener("click",function(){p.previous()}));var O=0,v=0,j=0,_=!1,E=function(e){o<2||(O=e,j=(new Date).getTime(),a.style.transition="none",_=!0)},C=function(e){if(!(o<2)){var t=(o-1)*u,n=e-O;(v=b(u*d,a)-n)<0&&(v=0),v>t&&(v=t),a.style.left="-"+v+"px"}},I=function(e){if(_&&!(o<2)){var n=(new Date).getTime()-j,i=e-O,s=Math.abs(i/n*1e3);a.style.transition="",s>u/2||i>u/2?(i>0?(t.logOnce(m),p.previous()):(t.logOnce(m),p.next()),a.style.left="-"+b(u*d,a)+"px"):p.goto(d),_=!1,O=0}};e.addEventListener("touchstart",function(e){E(e.changedTouches[0].screenX)},!1),e.addEventListener("mousedown",function(e){e.preventDefault(),E(e.screenX)},!1),e.addEventListener("touchmove",function(e){C(e.changedTouches[0].screenX)},!1),e.addEventListener("mousemove",function(e){_&&(e.preventDefault(),C(e.screenX))},!1),e.addEventListener("touchend",function(e){I(e.changedTouches[0].screenX)},!1),e.addEventListener("mouseup",function(e){e.preventDefault(),I(e.screenX)},!1),e.addEventListener("mouseout",function(e){I(e.screenX)},!1),e.addEventListener("click",function(e){O>0&&Math.abs(e.screenX-O)>10&&e.preventDefault()},!1)}(document.querySelector(".js-mhp-slider"),null);xe=function(e){var t=e.componentDidMount,n=e.componentWillUnmount;return{componentDidMount:function(){window.addEventListener("resize",this.handleResize),window.innerWidth<1280&&Me.init();for(var e=arguments.length,n=Array(e),i=0;i<e;i++)n[i]=arguments[i];t.call.apply(t,[this].concat(n))},componentWillUnmount:function(){Me.pause(),window.removeEventListener("resize",this.handleResize),n.call(this)},handleResize:function(){window.innerWidth>=1280?Me.pause():Me.init(),Me.update()}}}}var Ge=Object(a.createComponent)(function(e){return ke.render(e)},Re,xe,{changeTabs:function(e){this.dispatch({type:"SET_ACTIVE_TAB",payload:e})}},Object(s.applyMiddleware)(function(e){return function(e){return function(t){return"SET_ACTIVE_TAB"===t.type&&Object(h.b)("100:2452:"+m[t.payload]+"0"),e(t)}}}));Object(a.render)(Ne,Ge)}}]);
//# sourceMappingURL=homepage.8cace52644c853900e88.js.map