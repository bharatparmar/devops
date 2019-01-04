/*
 * jQuery JavaScript Library v1.3.2
 * http://jquery.com/
 *
 * Copyright (c) 2009 John Resig
 * Dual licensed under the MIT and GPL licenses.
 * http://docs.jquery.com/License
 *
 * Date: 2009-02-19 17:34:21 -0500 (Thu, 19 Feb 2009)
 * Revision: 6246
 */
(function(){var l=this,g,y=l.jQuery,p=l.$,o=l.jQuery=l.$=function(E,F){return new o.fn.init(E,F)},D=/^[^<]*(<(.|\s)+>)[^>]*$|^#([\w-]+)$/,f=/^.[^:#\[\.,]*$/;o.fn=o.prototype={init:function(E,H){E=E||document;if(E.nodeType){this[0]=E;this.length=1;this.context=E;return this}if(typeof E==="string"){var G=D.exec(E);if(G&&(G[1]||!H)){if(G[1]){E=o.clean([G[1]],H)}else{var I=document.getElementById(G[3]);if(I&&I.id!=G[3]){return o().find(E)}var F=o(I||[]);F.context=document;F.selector=E;return F}}else{return o(H).find(E)}}else{if(o.isFunction(E)){return o(document).ready(E)}}if(E.selector&&E.context){this.selector=E.selector;this.context=E.context}return this.setArray(o.isArray(E)?E:o.makeArray(E))},selector:"",jquery:"1.3.2",size:function(){return this.length},get:function(E){return E===g?Array.prototype.slice.call(this):this[E]},pushStack:function(F,H,E){var G=o(F);G.prevObject=this;G.context=this.context;if(H==="find"){G.selector=this.selector+(this.selector?" ":"")+E}else{if(H){G.selector=this.selector+"."+H+"("+E+")"}}return G},setArray:function(E){this.length=0;Array.prototype.push.apply(this,E);return this},each:function(F,E){return o.each(this,F,E)},index:function(E){return o.inArray(E&&E.jquery?E[0]:E,this)},attr:function(F,H,G){var E=F;if(typeof F==="string"){if(H===g){return this[0]&&o[G||"attr"](this[0],F)}else{E={};E[F]=H}}return this.each(function(I){for(F in E){o.attr(G?this.style:this,F,o.prop(this,E[F],G,I,F))}})},css:function(E,F){if((E=="width"||E=="height")&&parseFloat(F)<0){F=g}return this.attr(E,F,"curCSS")},text:function(F){if(typeof F!=="object"&&F!=null){return this.empty().append((this[0]&&this[0].ownerDocument||document).createTextNode(F))}var E="";o.each(F||this,function(){o.each(this.childNodes,function(){if(this.nodeType!=8){E+=this.nodeType!=1?this.nodeValue:o.fn.text([this])}})});return E},wrapAll:function(E){if(this[0]){var F=o(E,this[0].ownerDocument).clone();if(this[0].parentNode){F.insertBefore(this[0])}F.map(function(){var G=this;while(G.firstChild){G=G.firstChild}return G}).append(this)}return this},wrapInner:function(E){return this.each(function(){o(this).contents().wrapAll(E)})},wrap:function(E){return this.each(function(){o(this).wrapAll(E)})},append:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.appendChild(E)}})},prepend:function(){return this.domManip(arguments,true,function(E){if(this.nodeType==1){this.insertBefore(E,this.firstChild)}})},before:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this)})},after:function(){return this.domManip(arguments,false,function(E){this.parentNode.insertBefore(E,this.nextSibling)})},end:function(){return this.prevObject||o([])},push:[].push,sort:[].sort,splice:[].splice,find:function(E){if(this.length===1){var F=this.pushStack([],"find",E);F.length=0;o.find(E,this[0],F);return F}else{return this.pushStack(o.unique(o.map(this,function(G){return o.find(E,G)})),"find",E)}},clone:function(G){var E=this.map(function(){if(!o.support.noCloneEvent&&!o.isXMLDoc(this)){var I=this.outerHTML;if(!I){var J=this.ownerDocument.createElement("div");J.appendChild(this.cloneNode(true));I=J.innerHTML}return o.clean([I.replace(/ jQuery\d+="(?:\d+|null)"/g,"").replace(/^\s*/,"")])[0]}else{return this.cloneNode(true)}});if(G===true){var H=this.find("*").andSelf(),F=0;E.find("*").andSelf().each(function(){if(this.nodeName!==H[F].nodeName){return}var I=o.data(H[F],"events");for(var K in I){for(var J in I[K]){o.event.add(this,K,I[K][J],I[K][J].data)}}F++})}return E},filter:function(E){return this.pushStack(o.isFunction(E)&&o.grep(this,function(G,F){return E.call(G,F)})||o.multiFilter(E,o.grep(this,function(F){return F.nodeType===1})),"filter",E)},closest:function(E){var G=o.expr.match.POS.test(E)?o(E):null,F=0;return this.map(function(){var H=this;while(H&&H.ownerDocument){if(G?G.index(H)>-1:o(H).is(E)){o.data(H,"closest",F);return H}H=H.parentNode;F++}})},not:function(E){if(typeof E==="string"){if(f.test(E)){return this.pushStack(o.multiFilter(E,this,true),"not",E)}else{E=o.multiFilter(E,this)}}var F=E.length&&E[E.length-1]!==g&&!E.nodeType;return this.filter(function(){return F?o.inArray(this,E)<0:this!=E})},add:function(E){return this.pushStack(o.unique(o.merge(this.get(),typeof E==="string"?o(E):o.makeArray(E))))},is:function(E){return !!E&&o.multiFilter(E,this).length>0},hasClass:function(E){return !!E&&this.is("."+E)},val:function(K){if(K===g){var E=this[0];if(E){if(o.nodeName(E,"option")){return(E.attributes.value||{}).specified?E.value:E.text}if(o.nodeName(E,"select")){var I=E.selectedIndex,L=[],M=E.options,H=E.type=="select-one";if(I<0){return null}for(var F=H?I:0,J=H?I+1:M.length;F<J;F++){var G=M[F];if(G.selected){K=o(G).val();if(H){return K}L.push(K)}}return L}return(E.value||"").replace(/\r/g,"")}return g}if(typeof K==="number"){K+=""}return this.each(function(){if(this.nodeType!=1){return}if(o.isArray(K)&&/radio|checkbox/.test(this.type)){this.checked=(o.inArray(this.value,K)>=0||o.inArray(this.name,K)>=0)}else{if(o.nodeName(this,"select")){var N=o.makeArray(K);o("option",this).each(function(){this.selected=(o.inArray(this.value,N)>=0||o.inArray(this.text,N)>=0)});if(!N.length){this.selectedIndex=-1}}else{this.value=K}}})},html:function(E){return E===g?(this[0]?this[0].innerHTML.replace(/ jQuery\d+="(?:\d+|null)"/g,""):null):this.empty().append(E)},replaceWith:function(E){return this.after(E).remove()},eq:function(E){return this.slice(E,+E+1)},slice:function(){return this.pushStack(Array.prototype.slice.apply(this,arguments),"slice",Array.prototype.slice.call(arguments).join(","))},map:function(E){return this.pushStack(o.map(this,function(G,F){return E.call(G,F,G)}))},andSelf:function(){return this.add(this.prevObject)},domManip:function(J,M,L){if(this[0]){var I=(this[0].ownerDocument||this[0]).createDocumentFragment(),F=o.clean(J,(this[0].ownerDocument||this[0]),I),H=I.firstChild;if(H){for(var G=0,E=this.length;G<E;G++){L.call(K(this[G],H),this.length>1||G>0?I.cloneNode(true):I)}}if(F){o.each(F,z)}}return this;function K(N,O){return M&&o.nodeName(N,"table")&&o.nodeName(O,"tr")?(N.getElementsByTagName("tbody")[0]||N.appendChild(N.ownerDocument.createElement("tbody"))):N}}};o.fn.init.prototype=o.fn;function z(E,F){if(F.src){o.ajax({url:F.src,async:false,dataType:"script"})}else{o.globalEval(F.text||F.textContent||F.innerHTML||"")}if(F.parentNode){F.parentNode.removeChild(F)}}function e(){return +new Date}o.extend=o.fn.extend=function(){var J=arguments[0]||{},H=1,I=arguments.length,E=false,G;if(typeof J==="boolean"){E=J;J=arguments[1]||{};H=2}if(typeof J!=="object"&&!o.isFunction(J)){J={}}if(I==H){J=this;--H}for(;H<I;H++){if((G=arguments[H])!=null){for(var F in G){var K=J[F],L=G[F];if(J===L){continue}if(E&&L&&typeof L==="object"&&!L.nodeType){J[F]=o.extend(E,K||(L.length!=null?[]:{}),L)}else{if(L!==g){J[F]=L}}}}}return J};var b=/z-?index|font-?weight|opacity|zoom|line-?height/i,q=document.defaultView||{},s=Object.prototype.toString;o.extend({noConflict:function(E){l.$=p;if(E){l.jQuery=y}return o},isFunction:function(E){return s.call(E)==="[object Function]"},isArray:function(E){return s.call(E)==="[object Array]"},isXMLDoc:function(E){return E.nodeType===9&&E.documentElement.nodeName!=="HTML"||!!E.ownerDocument&&o.isXMLDoc(E.ownerDocument)},globalEval:function(G){if(G&&/\S/.test(G)){var F=document.getElementsByTagName("head")[0]||document.documentElement,E=document.createElement("script");E.type="text/javascript";if(o.support.scriptEval){E.appendChild(document.createTextNode(G))}else{E.text=G}F.insertBefore(E,F.firstChild);F.removeChild(E)}},nodeName:function(F,E){return F.nodeName&&F.nodeName.toUpperCase()==E.toUpperCase()},each:function(G,K,F){var E,H=0,I=G.length;if(F){if(I===g){for(E in G){if(K.apply(G[E],F)===false){break}}}else{for(;H<I;){if(K.apply(G[H++],F)===false){break}}}}else{if(I===g){for(E in G){if(K.call(G[E],E,G[E])===false){break}}}else{for(var J=G[0];H<I&&K.call(J,H,J)!==false;J=G[++H]){}}}return G},prop:function(H,I,G,F,E){if(o.isFunction(I)){I=I.call(H,F)}return typeof I==="number"&&G=="curCSS"&&!b.test(E)?I+"px":I},className:{add:function(E,F){o.each((F||"").split(/\s+/),function(G,H){if(E.nodeType==1&&!o.className.has(E.className,H)){E.className+=(E.className?" ":"")+H}})},remove:function(E,F){if(E.nodeType==1){E.className=F!==g?o.grep(E.className.split(/\s+/),function(G){return !o.className.has(F,G)}).join(" "):""}},has:function(F,E){return F&&o.inArray(E,(F.className||F).toString().split(/\s+/))>-1}},swap:function(H,G,I){var E={};for(var F in G){E[F]=H.style[F];H.style[F]=G[F]}I.call(H);for(var F in G){H.style[F]=E[F]}},css:function(H,F,J,E){if(F=="width"||F=="height"){var L,G={position:"absolute",visibility:"hidden",display:"block"},K=F=="width"?["Left","Right"]:["Top","Bottom"];function I(){L=F=="width"?H.offsetWidth:H.offsetHeight;if(E==="border"){return}o.each(K,function(){if(!E){L-=parseFloat(o.curCSS(H,"padding"+this,true))||0}if(E==="margin"){L+=parseFloat(o.curCSS(H,"margin"+this,true))||0}else{L-=parseFloat(o.curCSS(H,"border"+this+"Width",true))||0}})}if(H.offsetWidth!==0){I()}else{o.swap(H,G,I)}return Math.max(0,Math.round(L))}return o.curCSS(H,F,J)},curCSS:function(I,F,G){var L,E=I.style;if(F=="opacity"&&!o.support.opacity){L=o.attr(E,"opacity");return L==""?"1":L}if(F.match(/float/i)){F=w}if(!G&&E&&E[F]){L=E[F]}else{if(q.getComputedStyle){if(F.match(/float/i)){F="float"}F=F.replace(/([A-Z])/g,"-$1").toLowerCase();var M=q.getComputedStyle(I,null);if(M){L=M.getPropertyValue(F)}if(F=="opacity"&&L==""){L="1"}}else{if(I.currentStyle){var J=F.replace(/\-(\w)/g,function(N,O){return O.toUpperCase()});L=I.currentStyle[F]||I.currentStyle[J];if(!/^\d+(px)?$/i.test(L)&&/^\d/.test(L)){var H=E.left,K=I.runtimeStyle.left;I.runtimeStyle.left=I.currentStyle.left;E.left=L||0;L=E.pixelLeft+"px";E.left=H;I.runtimeStyle.left=K}}}}return L},clean:function(F,K,I){K=K||document;if(typeof K.createElement==="undefined"){K=K.ownerDocument||K[0]&&K[0].ownerDocument||document}if(!I&&F.length===1&&typeof F[0]==="string"){var H=/^<(\w+)\s*\/?>$/.exec(F[0]);if(H){return[K.createElement(H[1])]}}var G=[],E=[],L=K.createElement("div");o.each(F,function(P,S){if(typeof S==="number"){S+=""}if(!S){return}if(typeof S==="string"){S=S.replace(/(<(\w+)[^>]*?)\/>/g,function(U,V,T){return T.match(/^(abbr|br|col|img|input|link|meta|param|hr|area|embed)$/i)?U:V+"></"+T+">"});var O=S.replace(/^\s+/,"").substring(0,10).toLowerCase();var Q=!O.indexOf("<opt")&&[1,"<select multiple='multiple'>","</select>"]||!O.indexOf("<leg")&&[1,"<fieldset>","</fieldset>"]||O.match(/^<(thead|tbody|tfoot|colg|cap)/)&&[1,"<table>","</table>"]||!O.indexOf("<tr")&&[2,"<table><tbody>","</tbody></table>"]||(!O.indexOf("<td")||!O.indexOf("<th"))&&[3,"<table><tbody><tr>","</tr></tbody></table>"]||!O.indexOf("<col")&&[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"]||!o.support.htmlSerialize&&[1,"div<div>","</div>"]||[0,"",""];L.innerHTML=Q[1]+S+Q[2];while(Q[0]--){L=L.lastChild}if(!o.support.tbody){var R=/<tbody/i.test(S),N=!O.indexOf("<table")&&!R?L.firstChild&&L.firstChild.childNodes:Q[1]=="<table>"&&!R?L.childNodes:[];for(var M=N.length-1;M>=0;--M){if(o.nodeName(N[M],"tbody")&&!N[M].childNodes.length){N[M].parentNode.removeChild(N[M])}}}if(!o.support.leadingWhitespace&&/^\s/.test(S)){L.insertBefore(K.createTextNode(S.match(/^\s*/)[0]),L.firstChild)}S=o.makeArray(L.childNodes)}if(S.nodeType){G.push(S)}else{G=o.merge(G,S)}});if(I){for(var J=0;G[J];J++){if(o.nodeName(G[J],"script")&&(!G[J].type||G[J].type.toLowerCase()==="text/javascript")){E.push(G[J].parentNode?G[J].parentNode.removeChild(G[J]):G[J])}else{if(G[J].nodeType===1){G.splice.apply(G,[J+1,0].concat(o.makeArray(G[J].getElementsByTagName("script"))))}I.appendChild(G[J])}}return E}return G},attr:function(J,G,K){if(!J||J.nodeType==3||J.nodeType==8){return g}var H=!o.isXMLDoc(J),L=K!==g;G=H&&o.props[G]||G;if(J.tagName){var F=/href|src|style/.test(G);if(G=="selected"&&J.parentNode){J.parentNode.selectedIndex}if(G in J&&H&&!F){if(L){if(G=="type"&&o.nodeName(J,"input")&&J.parentNode){throw"type property can't be changed"}J[G]=K}if(o.nodeName(J,"form")&&J.getAttributeNode(G)){return J.getAttributeNode(G).nodeValue}if(G=="tabIndex"){var I=J.getAttributeNode("tabIndex");return I&&I.specified?I.value:J.nodeName.match(/(button|input|object|select|textarea)/i)?0:J.nodeName.match(/^(a|area)$/i)&&J.href?0:g}return J[G]}if(!o.support.style&&H&&G=="style"){return o.attr(J.style,"cssText",K)}if(L){J.setAttribute(G,""+K)}var E=!o.support.hrefNormalized&&H&&F?J.getAttribute(G,2):J.getAttribute(G);return E===null?g:E}if(!o.support.opacity&&G=="opacity"){if(L){J.zoom=1;J.filter=(J.filter||"").replace(/alpha\([^)]*\)/,"")+(parseInt(K)+""=="NaN"?"":"alpha(opacity="+K*100+")")}return J.filter&&J.filter.indexOf("opacity=")>=0?(parseFloat(J.filter.match(/opacity=([^)]*)/)[1])/100)+"":""}G=G.replace(/-([a-z])/ig,function(M,N){return N.toUpperCase()});if(L){J[G]=K}return J[G]},trim:function(E){return(E||"").replace(/^\s+|\s+$/g,"")},makeArray:function(G){var E=[];if(G!=null){var F=G.length;if(F==null||typeof G==="string"||o.isFunction(G)||G.setInterval){E[0]=G}else{while(F){E[--F]=G[F]}}}return E},inArray:function(G,H){for(var E=0,F=H.length;E<F;E++){if(H[E]===G){return E}}return -1},merge:function(H,E){var F=0,G,I=H.length;if(!o.support.getAll){while((G=E[F++])!=null){if(G.nodeType!=8){H[I++]=G}}}else{while((G=E[F++])!=null){H[I++]=G}}return H},unique:function(K){var F=[],E={};try{for(var G=0,H=K.length;G<H;G++){var J=o.data(K[G]);if(!E[J]){E[J]=true;F.push(K[G])}}}catch(I){F=K}return F},grep:function(F,J,E){var G=[];for(var H=0,I=F.length;H<I;H++){if(!E!=!J(F[H],H)){G.push(F[H])}}return G},map:function(E,J){var F=[];for(var G=0,H=E.length;G<H;G++){var I=J(E[G],G);if(I!=null){F[F.length]=I}}return F.concat.apply([],F)}});var C=navigator.userAgent.toLowerCase();o.browser={version:(C.match(/.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/)||[0,"0"])[1],safari:/webkit/.test(C),opera:/opera/.test(C),msie:/msie/.test(C)&&!/opera/.test(C),mozilla:/mozilla/.test(C)&&!/(compatible|webkit)/.test(C)};o.each({parent:function(E){return E.parentNode},parents:function(E){return o.dir(E,"parentNode")},next:function(E){return o.nth(E,2,"nextSibling")},prev:function(E){return o.nth(E,2,"previousSibling")},nextAll:function(E){return o.dir(E,"nextSibling")},prevAll:function(E){return o.dir(E,"previousSibling")},siblings:function(E){return o.sibling(E.parentNode.firstChild,E)},children:function(E){return o.sibling(E.firstChild)},contents:function(E){return o.nodeName(E,"iframe")?E.contentDocument||E.contentWindow.document:o.makeArray(E.childNodes)}},function(E,F){o.fn[E]=function(G){var H=o.map(this,F);if(G&&typeof G=="string"){H=o.multiFilter(G,H)}return this.pushStack(o.unique(H),E,G)}});o.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(E,F){o.fn[E]=function(G){var J=[],L=o(G);for(var K=0,H=L.length;K<H;K++){var I=(K>0?this.clone(true):this).get();o.fn[F].apply(o(L[K]),I);J=J.concat(I)}return this.pushStack(J,E,G)}});o.each({removeAttr:function(E){o.attr(this,E,"");if(this.nodeType==1){this.removeAttribute(E)}},addClass:function(E){o.className.add(this,E)},removeClass:function(E){o.className.remove(this,E)},toggleClass:function(F,E){if(typeof E!=="boolean"){E=!o.className.has(this,F)}o.className[E?"add":"remove"](this,F)},remove:function(E){if(!E||o.filter(E,[this]).length){o("*",this).add([this]).each(function(){o.event.remove(this);o.removeData(this)});if(this.parentNode){this.parentNode.removeChild(this)}}},empty:function(){o(this).children().remove();while(this.firstChild){this.removeChild(this.firstChild)}}},function(E,F){o.fn[E]=function(){return this.each(F,arguments)}});function j(E,F){return E[0]&&parseInt(o.curCSS(E[0],F,true),10)||0}var h="jQuery"+e(),v=0,A={};o.extend({cache:{},data:function(F,E,G){F=F==l?A:F;var H=F[h];if(!H){H=F[h]=++v}if(E&&!o.cache[H]){o.cache[H]={}}if(G!==g){o.cache[H][E]=G}return E?o.cache[H][E]:H},removeData:function(F,E){F=F==l?A:F;var H=F[h];if(E){if(o.cache[H]){delete o.cache[H][E];E="";for(E in o.cache[H]){break}if(!E){o.removeData(F)}}}else{try{delete F[h]}catch(G){if(F.removeAttribute){F.removeAttribute(h)}}delete o.cache[H]}},queue:function(F,E,H){if(F){E=(E||"fx")+"queue";var G=o.data(F,E);if(!G||o.isArray(H)){G=o.data(F,E,o.makeArray(H))}else{if(H){G.push(H)}}}return G},dequeue:function(H,G){var E=o.queue(H,G),F=E.shift();if(!G||G==="fx"){F=E[0]}if(F!==g){F.call(H)}}});o.fn.extend({data:function(E,G){var H=E.split(".");H[1]=H[1]?"."+H[1]:"";if(G===g){var F=this.triggerHandler("getData"+H[1]+"!",[H[0]]);if(F===g&&this.length){F=o.data(this[0],E)}return F===g&&H[1]?this.data(H[0]):F}else{return this.trigger("setData"+H[1]+"!",[H[0],G]).each(function(){o.data(this,E,G)})}},removeData:function(E){return this.each(function(){o.removeData(this,E)})},queue:function(E,F){if(typeof E!=="string"){F=E;E="fx"}if(F===g){return o.queue(this[0],E)}return this.each(function(){var G=o.queue(this,E,F);if(E=="fx"&&G.length==1){G[0].call(this)}})},dequeue:function(E){return this.each(function(){o.dequeue(this,E)})}});
/*
 * Sizzle CSS Selector Engine - v0.9.3
 *  Copyright 2009, The Dojo Foundation
 *  Released under the MIT, BSD, and GPL Licenses.
 *  More information: http://sizzlejs.com/
 */
(function(){var R=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^[\]]*\]|['"][^'"]*['"]|[^[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?/g,L=0,H=Object.prototype.toString;var F=function(Y,U,ab,ac){ab=ab||[];U=U||document;if(U.nodeType!==1&&U.nodeType!==9){return[]}if(!Y||typeof Y!=="string"){return ab}var Z=[],W,af,ai,T,ad,V,X=true;R.lastIndex=0;while((W=R.exec(Y))!==null){Z.push(W[1]);if(W[2]){V=RegExp.rightContext;break}}if(Z.length>1&&M.exec(Y)){if(Z.length===2&&I.relative[Z[0]]){af=J(Z[0]+Z[1],U)}else{af=I.relative[Z[0]]?[U]:F(Z.shift(),U);while(Z.length){Y=Z.shift();if(I.relative[Y]){Y+=Z.shift()}af=J(Y,af)}}}else{var ae=ac?{expr:Z.pop(),set:E(ac)}:F.find(Z.pop(),Z.length===1&&U.parentNode?U.parentNode:U,Q(U));af=F.filter(ae.expr,ae.set);if(Z.length>0){ai=E(af)}else{X=false}while(Z.length){var ah=Z.pop(),ag=ah;if(!I.relative[ah]){ah=""}else{ag=Z.pop()}if(ag==null){ag=U}I.relative[ah](ai,ag,Q(U))}}if(!ai){ai=af}if(!ai){throw"Syntax error, unrecognized expression: "+(ah||Y)}if(H.call(ai)==="[object Array]"){if(!X){ab.push.apply(ab,ai)}else{if(U.nodeType===1){for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&(ai[aa]===true||ai[aa].nodeType===1&&K(U,ai[aa]))){ab.push(af[aa])}}}else{for(var aa=0;ai[aa]!=null;aa++){if(ai[aa]&&ai[aa].nodeType===1){ab.push(af[aa])}}}}}else{E(ai,ab)}if(V){F(V,U,ab,ac);if(G){hasDuplicate=false;ab.sort(G);if(hasDuplicate){for(var aa=1;aa<ab.length;aa++){if(ab[aa]===ab[aa-1]){ab.splice(aa--,1)}}}}}return ab};F.matches=function(T,U){return F(T,null,null,U)};F.find=function(aa,T,ab){var Z,X;if(!aa){return[]}for(var W=0,V=I.order.length;W<V;W++){var Y=I.order[W],X;if((X=I.match[Y].exec(aa))){var U=RegExp.leftContext;if(U.substr(U.length-1)!=="\\"){X[1]=(X[1]||"").replace(/\\/g,"");Z=I.find[Y](X,T,ab);if(Z!=null){aa=aa.replace(I.match[Y],"");break}}}}if(!Z){Z=T.getElementsByTagName("*")}return{set:Z,expr:aa}};F.filter=function(ad,ac,ag,W){var V=ad,ai=[],aa=ac,Y,T,Z=ac&&ac[0]&&Q(ac[0]);while(ad&&ac.length){for(var ab in I.filter){if((Y=I.match[ab].exec(ad))!=null){var U=I.filter[ab],ah,af;T=false;if(aa==ai){ai=[]}if(I.preFilter[ab]){Y=I.preFilter[ab](Y,aa,ag,ai,W,Z);if(!Y){T=ah=true}else{if(Y===true){continue}}}if(Y){for(var X=0;(af=aa[X])!=null;X++){if(af){ah=U(af,Y,X,aa);var ae=W^!!ah;if(ag&&ah!=null){if(ae){T=true}else{aa[X]=false}}else{if(ae){ai.push(af);T=true}}}}}if(ah!==g){if(!ag){aa=ai}ad=ad.replace(I.match[ab],"");if(!T){return[]}break}}}if(ad==V){if(T==null){throw"Syntax error, unrecognized expression: "+ad}else{break}}V=ad}return aa};var I=F.selectors={order:["ID","NAME","TAG"],match:{ID:/#((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,CLASS:/\.((?:[\w\u00c0-\uFFFF_-]|\\.)+)/,NAME:/\[name=['"]*((?:[\w\u00c0-\uFFFF_-]|\\.)+)['"]*\]/,ATTR:/\[\s*((?:[\w\u00c0-\uFFFF_-]|\\.)+)\s*(?:(\S?=)\s*(['"]*)(.*?)\3|)\s*\]/,TAG:/^((?:[\w\u00c0-\uFFFF\*_-]|\\.)+)/,CHILD:/:(only|nth|last|first)-child(?:\((even|odd|[\dn+-]*)\))?/,POS:/:(nth|eq|gt|lt|first|last|even|odd)(?:\((\d*)\))?(?=[^-]|$)/,PSEUDO:/:((?:[\w\u00c0-\uFFFF_-]|\\.)+)(?:\((['"]*)((?:\([^\)]+\)|[^\2\(\)]*)+)\2\))?/},attrMap:{"class":"className","for":"htmlFor"},attrHandle:{href:function(T){return T.getAttribute("href")}},relative:{"+":function(aa,T,Z){var X=typeof T==="string",ab=X&&!/\W/.test(T),Y=X&&!ab;if(ab&&!Z){T=T.toUpperCase()}for(var W=0,V=aa.length,U;W<V;W++){if((U=aa[W])){while((U=U.previousSibling)&&U.nodeType!==1){}aa[W]=Y||U&&U.nodeName===T?U||false:U===T}}if(Y){F.filter(T,aa,true)}},">":function(Z,U,aa){var X=typeof U==="string";if(X&&!/\W/.test(U)){U=aa?U:U.toUpperCase();for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){var W=Y.parentNode;Z[V]=W.nodeName===U?W:false}}}else{for(var V=0,T=Z.length;V<T;V++){var Y=Z[V];if(Y){Z[V]=X?Y.parentNode:Y.parentNode===U}}if(X){F.filter(U,Z,true)}}},"":function(W,U,Y){var V=L++,T=S;if(!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("parentNode",U,V,W,X,Y)},"~":function(W,U,Y){var V=L++,T=S;if(typeof U==="string"&&!U.match(/\W/)){var X=U=Y?U:U.toUpperCase();T=P}T("previousSibling",U,V,W,X,Y)}},find:{ID:function(U,V,W){if(typeof V.getElementById!=="undefined"&&!W){var T=V.getElementById(U[1]);return T?[T]:[]}},NAME:function(V,Y,Z){if(typeof Y.getElementsByName!=="undefined"){var U=[],X=Y.getElementsByName(V[1]);for(var W=0,T=X.length;W<T;W++){if(X[W].getAttribute("name")===V[1]){U.push(X[W])}}return U.length===0?null:U}},TAG:function(T,U){return U.getElementsByTagName(T[1])}},preFilter:{CLASS:function(W,U,V,T,Z,aa){W=" "+W[1].replace(/\\/g,"")+" ";if(aa){return W}for(var X=0,Y;(Y=U[X])!=null;X++){if(Y){if(Z^(Y.className&&(" "+Y.className+" ").indexOf(W)>=0)){if(!V){T.push(Y)}}else{if(V){U[X]=false}}}}return false},ID:function(T){return T[1].replace(/\\/g,"")},TAG:function(U,T){for(var V=0;T[V]===false;V++){}return T[V]&&Q(T[V])?U[1]:U[1].toUpperCase()},CHILD:function(T){if(T[1]=="nth"){var U=/(-?)(\d*)n((?:\+|-)?\d*)/.exec(T[2]=="even"&&"2n"||T[2]=="odd"&&"2n+1"||!/\D/.test(T[2])&&"0n+"+T[2]||T[2]);T[2]=(U[1]+(U[2]||1))-0;T[3]=U[3]-0}T[0]=L++;return T},ATTR:function(X,U,V,T,Y,Z){var W=X[1].replace(/\\/g,"");if(!Z&&I.attrMap[W]){X[1]=I.attrMap[W]}if(X[2]==="~="){X[4]=" "+X[4]+" "}return X},PSEUDO:function(X,U,V,T,Y){if(X[1]==="not"){if(X[3].match(R).length>1||/^\w/.test(X[3])){X[3]=F(X[3],null,null,U)}else{var W=F.filter(X[3],U,V,true^Y);if(!V){T.push.apply(T,W)}return false}}else{if(I.match.POS.test(X[0])||I.match.CHILD.test(X[0])){return true}}return X},POS:function(T){T.unshift(true);return T}},filters:{enabled:function(T){return T.disabled===false&&T.type!=="hidden"},disabled:function(T){return T.disabled===true},checked:function(T){return T.checked===true},selected:function(T){T.parentNode.selectedIndex;return T.selected===true},parent:function(T){return !!T.firstChild},empty:function(T){return !T.firstChild},has:function(V,U,T){return !!F(T[3],V).length},header:function(T){return/h\d/i.test(T.nodeName)},text:function(T){return"text"===T.type},radio:function(T){return"radio"===T.type},checkbox:function(T){return"checkbox"===T.type},file:function(T){return"file"===T.type},password:function(T){return"password"===T.type},submit:function(T){return"submit"===T.type},image:function(T){return"image"===T.type},reset:function(T){return"reset"===T.type},button:function(T){return"button"===T.type||T.nodeName.toUpperCase()==="BUTTON"},input:function(T){return/input|select|textarea|button/i.test(T.nodeName)}},setFilters:{first:function(U,T){return T===0},last:function(V,U,T,W){return U===W.length-1},even:function(U,T){return T%2===0},odd:function(U,T){return T%2===1},lt:function(V,U,T){return U<T[3]-0},gt:function(V,U,T){return U>T[3]-0},nth:function(V,U,T){return T[3]-0==U},eq:function(V,U,T){return T[3]-0==U}},filter:{PSEUDO:function(Z,V,W,aa){var U=V[1],X=I.filters[U];if(X){return X(Z,W,V,aa)}else{if(U==="contains"){return(Z.textContent||Z.innerText||"").indexOf(V[3])>=0}else{if(U==="not"){var Y=V[3];for(var W=0,T=Y.length;W<T;W++){if(Y[W]===Z){return false}}return true}}}},CHILD:function(T,W){var Z=W[1],U=T;switch(Z){case"only":case"first":while(U=U.previousSibling){if(U.nodeType===1){return false}}if(Z=="first"){return true}U=T;case"last":while(U=U.nextSibling){if(U.nodeType===1){return false}}return true;case"nth":var V=W[2],ac=W[3];if(V==1&&ac==0){return true}var Y=W[0],ab=T.parentNode;if(ab&&(ab.sizcache!==Y||!T.nodeIndex)){var X=0;for(U=ab.firstChild;U;U=U.nextSibling){if(U.nodeType===1){U.nodeIndex=++X}}ab.sizcache=Y}var aa=T.nodeIndex-ac;if(V==0){return aa==0}else{return(aa%V==0&&aa/V>=0)}}},ID:function(U,T){return U.nodeType===1&&U.getAttribute("id")===T},TAG:function(U,T){return(T==="*"&&U.nodeType===1)||U.nodeName===T},CLASS:function(U,T){return(" "+(U.className||U.getAttribute("class"))+" ").indexOf(T)>-1},ATTR:function(Y,W){var V=W[1],T=I.attrHandle[V]?I.attrHandle[V](Y):Y[V]!=null?Y[V]:Y.getAttribute(V),Z=T+"",X=W[2],U=W[4];return T==null?X==="!=":X==="="?Z===U:X==="*="?Z.indexOf(U)>=0:X==="~="?(" "+Z+" ").indexOf(U)>=0:!U?Z&&T!==false:X==="!="?Z!=U:X==="^="?Z.indexOf(U)===0:X==="$="?Z.substr(Z.length-U.length)===U:X==="|="?Z===U||Z.substr(0,U.length+1)===U+"-":false},POS:function(X,U,V,Y){var T=U[2],W=I.setFilters[T];if(W){return W(X,V,U,Y)}}}};var M=I.match.POS;for(var O in I.match){I.match[O]=RegExp(I.match[O].source+/(?![^\[]*\])(?![^\(]*\))/.source)}var E=function(U,T){U=Array.prototype.slice.call(U);if(T){T.push.apply(T,U);return T}return U};try{Array.prototype.slice.call(document.documentElement.childNodes)}catch(N){E=function(X,W){var U=W||[];if(H.call(X)==="[object Array]"){Array.prototype.push.apply(U,X)}else{if(typeof X.length==="number"){for(var V=0,T=X.length;V<T;V++){U.push(X[V])}}else{for(var V=0;X[V];V++){U.push(X[V])}}}return U}}var G;if(document.documentElement.compareDocumentPosition){G=function(U,T){var V=U.compareDocumentPosition(T)&4?-1:U===T?0:1;if(V===0){hasDuplicate=true}return V}}else{if("sourceIndex" in document.documentElement){G=function(U,T){var V=U.sourceIndex-T.sourceIndex;if(V===0){hasDuplicate=true}return V}}else{if(document.createRange){G=function(W,U){var V=W.ownerDocument.createRange(),T=U.ownerDocument.createRange();V.selectNode(W);V.collapse(true);T.selectNode(U);T.collapse(true);var X=V.compareBoundaryPoints(Range.START_TO_END,T);if(X===0){hasDuplicate=true}return X}}}}(function(){var U=document.createElement("form"),V="script"+(new Date).getTime();U.innerHTML="<input name='"+V+"'/>";var T=document.documentElement;T.insertBefore(U,T.firstChild);if(!!document.getElementById(V)){I.find.ID=function(X,Y,Z){if(typeof Y.getElementById!=="undefined"&&!Z){var W=Y.getElementById(X[1]);return W?W.id===X[1]||typeof W.getAttributeNode!=="undefined"&&W.getAttributeNode("id").nodeValue===X[1]?[W]:g:[]}};I.filter.ID=function(Y,W){var X=typeof Y.getAttributeNode!=="undefined"&&Y.getAttributeNode("id");return Y.nodeType===1&&X&&X.nodeValue===W}}T.removeChild(U)})();(function(){var T=document.createElement("div");T.appendChild(document.createComment(""));if(T.getElementsByTagName("*").length>0){I.find.TAG=function(U,Y){var X=Y.getElementsByTagName(U[1]);if(U[1]==="*"){var W=[];for(var V=0;X[V];V++){if(X[V].nodeType===1){W.push(X[V])}}X=W}return X}}T.innerHTML="<a href='#'></a>";if(T.firstChild&&typeof T.firstChild.getAttribute!=="undefined"&&T.firstChild.getAttribute("href")!=="#"){I.attrHandle.href=function(U){return U.getAttribute("href",2)}}})();if(document.querySelectorAll){(function(){var T=F,U=document.createElement("div");U.innerHTML="<p class='TEST'></p>";if(U.querySelectorAll&&U.querySelectorAll(".TEST").length===0){return}F=function(Y,X,V,W){X=X||document;if(!W&&X.nodeType===9&&!Q(X)){try{return E(X.querySelectorAll(Y),V)}catch(Z){}}return T(Y,X,V,W)};F.find=T.find;F.filter=T.filter;F.selectors=T.selectors;F.matches=T.matches})()}if(document.getElementsByClassName&&document.documentElement.getElementsByClassName){(function(){var T=document.createElement("div");T.innerHTML="<div class='test e'></div><div class='test'></div>";if(T.getElementsByClassName("e").length===0){return}T.lastChild.className="e";if(T.getElementsByClassName("e").length===1){return}I.order.splice(1,0,"CLASS");I.find.CLASS=function(U,V,W){if(typeof V.getElementsByClassName!=="undefined"&&!W){return V.getElementsByClassName(U[1])}}})()}function P(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1&&!ac){T.sizcache=Y;T.sizset=W}if(T.nodeName===Z){X=T;break}T=T[U]}ad[W]=X}}}function S(U,Z,Y,ad,aa,ac){var ab=U=="previousSibling"&&!ac;for(var W=0,V=ad.length;W<V;W++){var T=ad[W];if(T){if(ab&&T.nodeType===1){T.sizcache=Y;T.sizset=W}T=T[U];var X=false;while(T){if(T.sizcache===Y){X=ad[T.sizset];break}if(T.nodeType===1){if(!ac){T.sizcache=Y;T.sizset=W}if(typeof Z!=="string"){if(T===Z){X=true;break}}else{if(F.filter(Z,[T]).length>0){X=T;break}}}T=T[U]}ad[W]=X}}}var K=document.compareDocumentPosition?function(U,T){return U.compareDocumentPosition(T)&16}:function(U,T){return U!==T&&(U.contains?U.contains(T):true)};var Q=function(T){return T.nodeType===9&&T.documentElement.nodeName!=="HTML"||!!T.ownerDocument&&Q(T.ownerDocument)};var J=function(T,aa){var W=[],X="",Y,V=aa.nodeType?[aa]:aa;while((Y=I.match.PSEUDO.exec(T))){X+=Y[0];T=T.replace(I.match.PSEUDO,"")}T=I.relative[T]?T+"*":T;for(var Z=0,U=V.length;Z<U;Z++){F(T,V[Z],W)}return F.filter(X,W)};o.find=F;o.filter=F.filter;o.expr=F.selectors;o.expr[":"]=o.expr.filters;F.selectors.filters.hidden=function(T){return T.offsetWidth===0||T.offsetHeight===0};F.selectors.filters.visible=function(T){return T.offsetWidth>0||T.offsetHeight>0};F.selectors.filters.animated=function(T){return o.grep(o.timers,function(U){return T===U.elem}).length};o.multiFilter=function(V,T,U){if(U){V=":not("+V+")"}return F.matches(V,T)};o.dir=function(V,U){var T=[],W=V[U];while(W&&W!=document){if(W.nodeType==1){T.push(W)}W=W[U]}return T};o.nth=function(X,T,V,W){T=T||1;var U=0;for(;X;X=X[V]){if(X.nodeType==1&&++U==T){break}}return X};o.sibling=function(V,U){var T=[];for(;V;V=V.nextSibling){if(V.nodeType==1&&V!=U){T.push(V)}}return T};return;l.Sizzle=F})();o.event={add:function(I,F,H,K){if(I.nodeType==3||I.nodeType==8){return}if(I.setInterval&&I!=l){I=l}if(!H.guid){H.guid=this.guid++}if(K!==g){var G=H;H=this.proxy(G);H.data=K}var E=o.data(I,"events")||o.data(I,"events",{}),J=o.data(I,"handle")||o.data(I,"handle",function(){return typeof o!=="undefined"&&!o.event.triggered?o.event.handle.apply(arguments.callee.elem,arguments):g});J.elem=I;o.each(F.split(/\s+/),function(M,N){var O=N.split(".");N=O.shift();H.type=O.slice().sort().join(".");var L=E[N];if(o.event.specialAll[N]){o.event.specialAll[N].setup.call(I,K,O)}if(!L){L=E[N]={};if(!o.event.special[N]||o.event.special[N].setup.call(I,K,O)===false){if(I.addEventListener){I.addEventListener(N,J,false)}else{if(I.attachEvent){I.attachEvent("on"+N,J)}}}}L[H.guid]=H;o.event.global[N]=true});I=null},guid:1,global:{},remove:function(K,H,J){if(K.nodeType==3||K.nodeType==8){return}var G=o.data(K,"events"),F,E;if(G){if(H===g||(typeof H==="string"&&H.charAt(0)==".")){for(var I in G){this.remove(K,I+(H||""))}}else{if(H.type){J=H.handler;H=H.type}o.each(H.split(/\s+/),function(M,O){var Q=O.split(".");O=Q.shift();var N=RegExp("(^|\\.)"+Q.slice().sort().join(".*\\.")+"(\\.|$)");if(G[O]){if(J){delete G[O][J.guid]}else{for(var P in G[O]){if(N.test(G[O][P].type)){delete G[O][P]}}}if(o.event.specialAll[O]){o.event.specialAll[O].teardown.call(K,Q)}for(F in G[O]){break}if(!F){if(!o.event.special[O]||o.event.special[O].teardown.call(K,Q)===false){if(K.removeEventListener){K.removeEventListener(O,o.data(K,"handle"),false)}else{if(K.detachEvent){K.detachEvent("on"+O,o.data(K,"handle"))}}}F=null;delete G[O]}}})}for(F in G){break}if(!F){var L=o.data(K,"handle");if(L){L.elem=null}o.removeData(K,"events");o.removeData(K,"handle")}}},trigger:function(I,K,H,E){var G=I.type||I;if(!E){I=typeof I==="object"?I[h]?I:o.extend(o.Event(G),I):o.Event(G);if(G.indexOf("!")>=0){I.type=G=G.slice(0,-1);I.exclusive=true}if(!H){I.stopPropagation();if(this.global[G]){o.each(o.cache,function(){if(this.events&&this.events[G]){o.event.trigger(I,K,this.handle.elem)}})}}if(!H||H.nodeType==3||H.nodeType==8){return g}I.result=g;I.target=H;K=o.makeArray(K);K.unshift(I)}I.currentTarget=H;var J=o.data(H,"handle");if(J){J.apply(H,K)}if((!H[G]||(o.nodeName(H,"a")&&G=="click"))&&H["on"+G]&&H["on"+G].apply(H,K)===false){I.result=false}if(!E&&H[G]&&!I.isDefaultPrevented()&&!(o.nodeName(H,"a")&&G=="click")){this.triggered=true;try{H[G]()}catch(L){}}this.triggered=false;if(!I.isPropagationStopped()){var F=H.parentNode||H.ownerDocument;if(F){o.event.trigger(I,K,F,true)}}},handle:function(K){var J,E;K=arguments[0]=o.event.fix(K||l.event);K.currentTarget=this;var L=K.type.split(".");K.type=L.shift();J=!L.length&&!K.exclusive;var I=RegExp("(^|\\.)"+L.slice().sort().join(".*\\.")+"(\\.|$)");E=(o.data(this,"events")||{})[K.type];for(var G in E){var H=E[G];if(J||I.test(H.type)){K.handler=H;K.data=H.data;var F=H.apply(this,arguments);if(F!==g){K.result=F;if(F===false){K.preventDefault();K.stopPropagation()}}if(K.isImmediatePropagationStopped()){break}}}},props:"altKey attrChange attrName bubbles button cancelable charCode clientX clientY ctrlKey currentTarget data detail eventPhase fromElement handler keyCode metaKey newValue originalTarget pageX pageY prevValue relatedNode relatedTarget screenX screenY shiftKey srcElement target toElement view wheelDelta which".split(" "),fix:function(H){if(H[h]){return H}var F=H;H=o.Event(F);for(var G=this.props.length,J;G;){J=this.props[--G];H[J]=F[J]}if(!H.target){H.target=H.srcElement||document}if(H.target.nodeType==3){H.target=H.target.parentNode}if(!H.relatedTarget&&H.fromElement){H.relatedTarget=H.fromElement==H.target?H.toElement:H.fromElement}if(H.pageX==null&&H.clientX!=null){var I=document.documentElement,E=document.body;H.pageX=H.clientX+(I&&I.scrollLeft||E&&E.scrollLeft||0)-(I.clientLeft||0);H.pageY=H.clientY+(I&&I.scrollTop||E&&E.scrollTop||0)-(I.clientTop||0)}if(!H.which&&((H.charCode||H.charCode===0)?H.charCode:H.keyCode)){H.which=H.charCode||H.keyCode}if(!H.metaKey&&H.ctrlKey){H.metaKey=H.ctrlKey}if(!H.which&&H.button){H.which=(H.button&1?1:(H.button&2?3:(H.button&4?2:0)))}return H},proxy:function(F,E){E=E||function(){return F.apply(this,arguments)};E.guid=F.guid=F.guid||E.guid||this.guid++;return E},special:{ready:{setup:B,teardown:function(){}}},specialAll:{live:{setup:function(E,F){o.event.add(this,F[0],c)},teardown:function(G){if(G.length){var E=0,F=RegExp("(^|\\.)"+G[0]+"(\\.|$)");o.each((o.data(this,"events").live||{}),function(){if(F.test(this.type)){E++}});if(E<1){o.event.remove(this,G[0],c)}}}}}};o.Event=function(E){if(!this.preventDefault){return new o.Event(E)}if(E&&E.type){this.originalEvent=E;this.type=E.type}else{this.type=E}this.timeStamp=e();this[h]=true};function k(){return false}function u(){return true}o.Event.prototype={preventDefault:function(){this.isDefaultPrevented=u;var E=this.originalEvent;if(!E){return}if(E.preventDefault){E.preventDefault()}E.returnValue=false},stopPropagation:function(){this.isPropagationStopped=u;var E=this.originalEvent;if(!E){return}if(E.stopPropagation){E.stopPropagation()}E.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=u;this.stopPropagation()},isDefaultPrevented:k,isPropagationStopped:k,isImmediatePropagationStopped:k};var a=function(F){var E=F.relatedTarget;while(E&&E!=this){try{E=E.parentNode}catch(G){E=this}}if(E!=this){F.type=F.data;o.event.handle.apply(this,arguments)}};o.each({mouseover:"mouseenter",mouseout:"mouseleave"},function(F,E){o.event.special[E]={setup:function(){o.event.add(this,F,a,E)},teardown:function(){o.event.remove(this,F,a)}}});o.fn.extend({bind:function(F,G,E){return F=="unload"?this.one(F,G,E):this.each(function(){o.event.add(this,F,E||G,E&&G)})},one:function(G,H,F){var E=o.event.proxy(F||H,function(I){o(this).unbind(I,E);return(F||H).apply(this,arguments)});return this.each(function(){o.event.add(this,G,E,F&&H)})},unbind:function(F,E){return this.each(function(){o.event.remove(this,F,E)})},trigger:function(E,F){return this.each(function(){o.event.trigger(E,F,this)})},triggerHandler:function(E,G){if(this[0]){var F=o.Event(E);F.preventDefault();F.stopPropagation();o.event.trigger(F,G,this[0]);return F.result}},toggle:function(G){var E=arguments,F=1;while(F<E.length){o.event.proxy(G,E[F++])}return this.click(o.event.proxy(G,function(H){this.lastToggle=(this.lastToggle||0)%F;H.preventDefault();return E[this.lastToggle++].apply(this,arguments)||false}))},hover:function(E,F){return this.mouseenter(E).mouseleave(F)},ready:function(E){B();if(o.isReady){E.call(document,o)}else{o.readyList.push(E)}return this},live:function(G,F){var E=o.event.proxy(F);E.guid+=this.selector+G;o(document).bind(i(G,this.selector),this.selector,E);return this},die:function(F,E){o(document).unbind(i(F,this.selector),E?{guid:E.guid+this.selector+F}:null);return this}});function c(H){var E=RegExp("(^|\\.)"+H.type+"(\\.|$)"),G=true,F=[];o.each(o.data(this,"events").live||[],function(I,J){if(E.test(J.type)){var K=o(H.target).closest(J.data)[0];if(K){F.push({elem:K,fn:J})}}});F.sort(function(J,I){return o.data(J.elem,"closest")-o.data(I.elem,"closest")});o.each(F,function(){if(this.fn.call(this.elem,H,this.fn.data)===false){return(G=false)}});return G}function i(F,E){return["live",F,E.replace(/\./g,"`").replace(/ /g,"|")].join(".")}o.extend({isReady:false,readyList:[],ready:function(){if(!o.isReady){o.isReady=true;if(o.readyList){o.each(o.readyList,function(){this.call(document,o)});o.readyList=null}o(document).triggerHandler("ready")}}});var x=false;function B(){if(x){return}x=true;if(document.addEventListener){document.addEventListener("DOMContentLoaded",function(){document.removeEventListener("DOMContentLoaded",arguments.callee,false);o.ready()},false)}else{if(document.attachEvent){document.attachEvent("onreadystatechange",function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",arguments.callee);o.ready()}});if(document.documentElement.doScroll&&l==l.top){(function(){if(o.isReady){return}try{document.documentElement.doScroll("left")}catch(E){setTimeout(arguments.callee,0);return}o.ready()})()}}}o.event.add(l,"load",o.ready)}o.each(("blur,focus,load,resize,scroll,unload,click,dblclick,mousedown,mouseup,mousemove,mouseover,mouseout,mouseenter,mouseleave,change,select,submit,keydown,keypress,keyup,error").split(","),function(F,E){o.fn[E]=function(G){return G?this.bind(E,G):this.trigger(E)}});o(l).bind("unload",function(){for(var E in o.cache){if(E!=1&&o.cache[E].handle){o.event.remove(o.cache[E].handle.elem)}}});(function(){o.support={};var F=document.documentElement,G=document.createElement("script"),K=document.createElement("div"),J="script"+(new Date).getTime();K.style.display="none";K.innerHTML='   <link/><table></table><a href="/a" style="color:red;float:left;opacity:.5;">a</a><select><option>text</option></select><object><param/></object>';var H=K.getElementsByTagName("*"),E=K.getElementsByTagName("a")[0];if(!H||!H.length||!E){return}o.support={leadingWhitespace:K.firstChild.nodeType==3,tbody:!K.getElementsByTagName("tbody").length,objectAll:!!K.getElementsByTagName("object")[0].getElementsByTagName("*").length,htmlSerialize:!!K.getElementsByTagName("link").length,style:/red/.test(E.getAttribute("style")),hrefNormalized:E.getAttribute("href")==="/a",opacity:E.style.opacity==="0.5",cssFloat:!!E.style.cssFloat,scriptEval:false,noCloneEvent:true,boxModel:null};G.type="text/javascript";try{G.appendChild(document.createTextNode("window."+J+"=1;"))}catch(I){}F.insertBefore(G,F.firstChild);if(l[J]){o.support.scriptEval=true;delete l[J]}F.removeChild(G);if(K.attachEvent&&K.fireEvent){K.attachEvent("onclick",function(){o.support.noCloneEvent=false;K.detachEvent("onclick",arguments.callee)});K.cloneNode(true).fireEvent("onclick")}o(function(){var L=document.createElement("div");L.style.width=L.style.paddingLeft="1px";document.body.appendChild(L);o.boxModel=o.support.boxModel=L.offsetWidth===2;document.body.removeChild(L).style.display="none"})})();var w=o.support.cssFloat?"cssFloat":"styleFloat";o.props={"for":"htmlFor","class":"className","float":w,cssFloat:w,styleFloat:w,readonly:"readOnly",maxlength:"maxLength",cellspacing:"cellSpacing",rowspan:"rowSpan",tabindex:"tabIndex"};o.fn.extend({_load:o.fn.load,load:function(G,J,K){if(typeof G!=="string"){return this._load(G)}var I=G.indexOf(" ");if(I>=0){var E=G.slice(I,G.length);G=G.slice(0,I)}var H="GET";if(J){if(o.isFunction(J)){K=J;J=null}else{if(typeof J==="object"){J=o.param(J);H="POST"}}}var F=this;o.ajax({url:G,type:H,dataType:"html",data:J,complete:function(M,L){if(L=="success"||L=="notmodified"){F.html(E?o("<div/>").append(M.responseText.replace(/<script(.|\s)*?\/script>/g,"")).find(E):M.responseText)}if(K){F.each(K,[M.responseText,L,M])}}});return this},serialize:function(){return o.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?o.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||/select|textarea/i.test(this.nodeName)||/text|hidden|password|search/i.test(this.type))}).map(function(E,F){var G=o(this).val();return G==null?null:o.isArray(G)?o.map(G,function(I,H){return{name:F.name,value:I}}):{name:F.name,value:G}}).get()}});o.each("ajaxStart,ajaxStop,ajaxComplete,ajaxError,ajaxSuccess,ajaxSend".split(","),function(E,F){o.fn[F]=function(G){return this.bind(F,G)}});var r=e();o.extend({get:function(E,G,H,F){if(o.isFunction(G)){H=G;G=null}return o.ajax({type:"GET",url:E,data:G,success:H,dataType:F})},getScript:function(E,F){return o.get(E,null,F,"script")},getJSON:function(E,F,G){return o.get(E,F,G,"json")},post:function(E,G,H,F){if(o.isFunction(G)){H=G;G={}}return o.ajax({type:"POST",url:E,data:G,success:H,dataType:F})},ajaxSetup:function(E){o.extend(o.ajaxSettings,E)},ajaxSettings:{url:location.href,global:true,type:"GET",contentType:"application/x-www-form-urlencoded",processData:true,async:true,xhr:function(){return l.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):new XMLHttpRequest()},accepts:{xml:"application/xml, text/xml",html:"text/html",script:"text/javascript, application/javascript",json:"application/json, text/javascript",text:"text/plain",_default:"*/*"}},lastModified:{},ajax:function(M){M=o.extend(true,M,o.extend(true,{},o.ajaxSettings,M));var W,F=/=\?(&|$)/g,R,V,G=M.type.toUpperCase();if(M.data&&M.processData&&typeof M.data!=="string"){M.data=o.param(M.data)}if(M.dataType=="jsonp"){if(G=="GET"){if(!M.url.match(F)){M.url+=(M.url.match(/\?/)?"&":"?")+(M.jsonp||"callback")+"=?"}}else{if(!M.data||!M.data.match(F)){M.data=(M.data?M.data+"&":"")+(M.jsonp||"callback")+"=?"}}M.dataType="json"}if(M.dataType=="json"&&(M.data&&M.data.match(F)||M.url.match(F))){W="jsonp"+r++;if(M.data){M.data=(M.data+"").replace(F,"="+W+"$1")}M.url=M.url.replace(F,"="+W+"$1");M.dataType="script";l[W]=function(X){V=X;I();L();l[W]=g;try{delete l[W]}catch(Y){}if(H){H.removeChild(T)}}}if(M.dataType=="script"&&M.cache==null){M.cache=false}if(M.cache===false&&G=="GET"){var E=e();var U=M.url.replace(/(\?|&)_=.*?(&|$)/,"$1_="+E+"$2");M.url=U+((U==M.url)?(M.url.match(/\?/)?"&":"?")+"_="+E:"")}if(M.data&&G=="GET"){M.url+=(M.url.match(/\?/)?"&":"?")+M.data;M.data=null}if(M.global&&!o.active++){o.event.trigger("ajaxStart")}var Q=/^(\w+:)?\/\/([^\/?#]+)/.exec(M.url);if(M.dataType=="script"&&G=="GET"&&Q&&(Q[1]&&Q[1]!=location.protocol||Q[2]!=location.host)){var H=document.getElementsByTagName("head")[0];var T=document.createElement("script");T.src=M.url;if(M.scriptCharset){T.charset=M.scriptCharset}if(!W){var O=false;T.onload=T.onreadystatechange=function(){if(!O&&(!this.readyState||this.readyState=="loaded"||this.readyState=="complete")){O=true;I();L();T.onload=T.onreadystatechange=null;H.removeChild(T)}}}H.appendChild(T);return g}var K=false;var J=M.xhr();if(M.username){J.open(G,M.url,M.async,M.username,M.password)}else{J.open(G,M.url,M.async)}try{if(M.data){J.setRequestHeader("Content-Type",M.contentType)}if(M.ifModified){J.setRequestHeader("If-Modified-Since",o.lastModified[M.url]||"Thu, 01 Jan 1970 00:00:00 GMT")}J.setRequestHeader("X-Requested-With","XMLHttpRequest");J.setRequestHeader("Accept",M.dataType&&M.accepts[M.dataType]?M.accepts[M.dataType]+", */*":M.accepts._default)}catch(S){}if(M.beforeSend&&M.beforeSend(J,M)===false){if(M.global&&!--o.active){o.event.trigger("ajaxStop")}J.abort();return false}if(M.global){o.event.trigger("ajaxSend",[J,M])}var N=function(X){if(J.readyState==0){if(P){clearInterval(P);P=null;if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}}else{if(!K&&J&&(J.readyState==4||X=="timeout")){K=true;if(P){clearInterval(P);P=null}R=X=="timeout"?"timeout":!o.httpSuccess(J)?"error":M.ifModified&&o.httpNotModified(J,M.url)?"notmodified":"success";if(R=="success"){try{V=o.httpData(J,M.dataType,M)}catch(Z){R="parsererror"}}if(R=="success"){var Y;try{Y=J.getResponseHeader("Last-Modified")}catch(Z){}if(M.ifModified&&Y){o.lastModified[M.url]=Y}if(!W){I()}}else{o.handleError(M,J,R)}L();if(X){J.abort()}if(M.async){J=null}}}};if(M.async){var P=setInterval(N,13);if(M.timeout>0){setTimeout(function(){if(J&&!K){N("timeout")}},M.timeout)}}try{J.send(M.data)}catch(S){o.handleError(M,J,null,S)}if(!M.async){N()}function I(){if(M.success){M.success(V,R)}if(M.global){o.event.trigger("ajaxSuccess",[J,M])}}function L(){if(M.complete){M.complete(J,R)}if(M.global){o.event.trigger("ajaxComplete",[J,M])}if(M.global&&!--o.active){o.event.trigger("ajaxStop")}}return J},handleError:function(F,H,E,G){if(F.error){F.error(H,E,G)}if(F.global){o.event.trigger("ajaxError",[H,F,G])}},active:0,httpSuccess:function(F){try{return !F.status&&location.protocol=="file:"||(F.status>=200&&F.status<300)||F.status==304||F.status==1223}catch(E){}return false},httpNotModified:function(G,E){try{var H=G.getResponseHeader("Last-Modified");return G.status==304||H==o.lastModified[E]}catch(F){}return false},httpData:function(J,H,G){var F=J.getResponseHeader("content-type"),E=H=="xml"||!H&&F&&F.indexOf("xml")>=0,I=E?J.responseXML:J.responseText;if(E&&I.documentElement.tagName=="parsererror"){throw"parsererror"}if(G&&G.dataFilter){I=G.dataFilter(I,H)}if(typeof I==="string"){if(H=="script"){o.globalEval(I)}if(H=="json"){I=l["eval"]("("+I+")")}}return I},param:function(E){var G=[];function H(I,J){G[G.length]=encodeURIComponent(I)+"="+encodeURIComponent(J)}if(o.isArray(E)||E.jquery){o.each(E,function(){H(this.name,this.value)})}else{for(var F in E){if(o.isArray(E[F])){o.each(E[F],function(){H(F,this)})}else{H(F,o.isFunction(E[F])?E[F]():E[F])}}}return G.join("&").replace(/%20/g,"+")}});var m={},n,d=[["height","marginTop","marginBottom","paddingTop","paddingBottom"],["width","marginLeft","marginRight","paddingLeft","paddingRight"],["opacity"]];function t(F,E){var G={};o.each(d.concat.apply([],d.slice(0,E)),function(){G[this]=F});return G}o.fn.extend({show:function(J,L){if(J){return this.animate(t("show",3),J,L)}else{for(var H=0,F=this.length;H<F;H++){var E=o.data(this[H],"olddisplay");this[H].style.display=E||"";if(o.css(this[H],"display")==="none"){var G=this[H].tagName,K;if(m[G]){K=m[G]}else{var I=o("<"+G+" />").appendTo("body");K=I.css("display");if(K==="none"){K="block"}I.remove();m[G]=K}o.data(this[H],"olddisplay",K)}}for(var H=0,F=this.length;H<F;H++){this[H].style.display=o.data(this[H],"olddisplay")||""}return this}},hide:function(H,I){if(H){return this.animate(t("hide",3),H,I)}else{for(var G=0,F=this.length;G<F;G++){var E=o.data(this[G],"olddisplay");if(!E&&E!=="none"){o.data(this[G],"olddisplay",o.css(this[G],"display"))}}for(var G=0,F=this.length;G<F;G++){this[G].style.display="none"}return this}},_toggle:o.fn.toggle,toggle:function(G,F){var E=typeof G==="boolean";return o.isFunction(G)&&o.isFunction(F)?this._toggle.apply(this,arguments):G==null||E?this.each(function(){var H=E?G:o(this).is(":hidden");o(this)[H?"show":"hide"]()}):this.animate(t("toggle",3),G,F)},fadeTo:function(E,G,F){return this.animate({opacity:G},E,F)},animate:function(I,F,H,G){var E=o.speed(F,H,G);return this[E.queue===false?"each":"queue"](function(){var K=o.extend({},E),M,L=this.nodeType==1&&o(this).is(":hidden"),J=this;for(M in I){if(I[M]=="hide"&&L||I[M]=="show"&&!L){return K.complete.call(this)}if((M=="height"||M=="width")&&this.style){K.display=o.css(this,"display");K.overflow=this.style.overflow}}if(K.overflow!=null){this.style.overflow="hidden"}K.curAnim=o.extend({},I);o.each(I,function(O,S){var R=new o.fx(J,K,O);if(/toggle|show|hide/.test(S)){R[S=="toggle"?L?"show":"hide":S](I)}else{var Q=S.toString().match(/^([+-]=)?([\d+-.]+)(.*)$/),T=R.cur(true)||0;if(Q){var N=parseFloat(Q[2]),P=Q[3]||"px";if(P!="px"){J.style[O]=(N||1)+P;T=((N||1)/R.cur(true))*T;J.style[O]=T+P}if(Q[1]){N=((Q[1]=="-="?-1:1)*N)+T}R.custom(T,N,P)}else{R.custom(T,S,"")}}});return true})},stop:function(F,E){var G=o.timers;if(F){this.queue([])}this.each(function(){for(var H=G.length-1;H>=0;H--){if(G[H].elem==this){if(E){G[H](true)}G.splice(H,1)}}});if(!E){this.dequeue()}return this}});o.each({slideDown:t("show",1),slideUp:t("hide",1),slideToggle:t("toggle",1),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"}},function(E,F){o.fn[E]=function(G,H){return this.animate(F,G,H)}});o.extend({speed:function(G,H,F){var E=typeof G==="object"?G:{complete:F||!F&&H||o.isFunction(G)&&G,duration:G,easing:F&&H||H&&!o.isFunction(H)&&H};E.duration=o.fx.off?0:typeof E.duration==="number"?E.duration:o.fx.speeds[E.duration]||o.fx.speeds._default;E.old=E.complete;E.complete=function(){if(E.queue!==false){o(this).dequeue()}if(o.isFunction(E.old)){E.old.call(this)}};return E},easing:{linear:function(G,H,E,F){return E+F*G},swing:function(G,H,E,F){return((-Math.cos(G*Math.PI)/2)+0.5)*F+E}},timers:[],fx:function(F,E,G){this.options=E;this.elem=F;this.prop=G;if(!E.orig){E.orig={}}}});o.fx.prototype={update:function(){if(this.options.step){this.options.step.call(this.elem,this.now,this)}(o.fx.step[this.prop]||o.fx.step._default)(this);if((this.prop=="height"||this.prop=="width")&&this.elem.style){this.elem.style.display="block"}},cur:function(F){if(this.elem[this.prop]!=null&&(!this.elem.style||this.elem.style[this.prop]==null)){return this.elem[this.prop]}var E=parseFloat(o.css(this.elem,this.prop,F));return E&&E>-10000?E:parseFloat(o.curCSS(this.elem,this.prop))||0},custom:function(I,H,G){this.startTime=e();this.start=I;this.end=H;this.unit=G||this.unit||"px";this.now=this.start;this.pos=this.state=0;var E=this;function F(J){return E.step(J)}F.elem=this.elem;if(F()&&o.timers.push(F)&&!n){n=setInterval(function(){var K=o.timers;for(var J=0;J<K.length;J++){if(!K[J]()){K.splice(J--,1)}}if(!K.length){clearInterval(n);n=g}},13)}},show:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.show=true;this.custom(this.prop=="width"||this.prop=="height"?1:0,this.cur());o(this.elem).show()},hide:function(){this.options.orig[this.prop]=o.attr(this.elem.style,this.prop);this.options.hide=true;this.custom(this.cur(),0)},step:function(H){var G=e();if(H||G>=this.options.duration+this.startTime){this.now=this.end;this.pos=this.state=1;this.update();this.options.curAnim[this.prop]=true;var E=true;for(var F in this.options.curAnim){if(this.options.curAnim[F]!==true){E=false}}if(E){if(this.options.display!=null){this.elem.style.overflow=this.options.overflow;this.elem.style.display=this.options.display;if(o.css(this.elem,"display")=="none"){this.elem.style.display="block"}}if(this.options.hide){o(this.elem).hide()}if(this.options.hide||this.options.show){for(var I in this.options.curAnim){o.attr(this.elem.style,I,this.options.orig[I])}}this.options.complete.call(this.elem)}return false}else{var J=G-this.startTime;this.state=J/this.options.duration;this.pos=o.easing[this.options.easing||(o.easing.swing?"swing":"linear")](this.state,J,0,1,this.options.duration);this.now=this.start+((this.end-this.start)*this.pos);this.update()}return true}};o.extend(o.fx,{speeds:{slow:600,fast:200,_default:400},step:{opacity:function(E){o.attr(E.elem.style,"opacity",E.now)},_default:function(E){if(E.elem.style&&E.elem.style[E.prop]!=null){E.elem.style[E.prop]=E.now+E.unit}else{E.elem[E.prop]=E.now}}}});if(document.documentElement.getBoundingClientRect){o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}var G=this[0].getBoundingClientRect(),J=this[0].ownerDocument,F=J.body,E=J.documentElement,L=E.clientTop||F.clientTop||0,K=E.clientLeft||F.clientLeft||0,I=G.top+(self.pageYOffset||o.boxModel&&E.scrollTop||F.scrollTop)-L,H=G.left+(self.pageXOffset||o.boxModel&&E.scrollLeft||F.scrollLeft)-K;return{top:I,left:H}}}else{o.fn.offset=function(){if(!this[0]){return{top:0,left:0}}if(this[0]===this[0].ownerDocument.body){return o.offset.bodyOffset(this[0])}o.offset.initialized||o.offset.initialize();var J=this[0],G=J.offsetParent,F=J,O=J.ownerDocument,M,H=O.documentElement,K=O.body,L=O.defaultView,E=L.getComputedStyle(J,null),N=J.offsetTop,I=J.offsetLeft;while((J=J.parentNode)&&J!==K&&J!==H){M=L.getComputedStyle(J,null);N-=J.scrollTop,I-=J.scrollLeft;if(J===G){N+=J.offsetTop,I+=J.offsetLeft;if(o.offset.doesNotAddBorder&&!(o.offset.doesAddBorderForTableAndCells&&/^t(able|d|h)$/i.test(J.tagName))){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}F=G,G=J.offsetParent}if(o.offset.subtractsBorderForOverflowNotVisible&&M.overflow!=="visible"){N+=parseInt(M.borderTopWidth,10)||0,I+=parseInt(M.borderLeftWidth,10)||0}E=M}if(E.position==="relative"||E.position==="static"){N+=K.offsetTop,I+=K.offsetLeft}if(E.position==="fixed"){N+=Math.max(H.scrollTop,K.scrollTop),I+=Math.max(H.scrollLeft,K.scrollLeft)}return{top:N,left:I}}}o.offset={initialize:function(){if(this.initialized){return}var L=document.body,F=document.createElement("div"),H,G,N,I,M,E,J=L.style.marginTop,K='<div style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;"><div></div></div><table style="position:absolute;top:0;left:0;margin:0;border:5px solid #000;padding:0;width:1px;height:1px;" cellpadding="0" cellspacing="0"><tr><td></td></tr></table>';M={position:"absolute",top:0,left:0,margin:0,border:0,width:"1px",height:"1px",visibility:"hidden"};for(E in M){F.style[E]=M[E]}F.innerHTML=K;L.insertBefore(F,L.firstChild);H=F.firstChild,G=H.firstChild,I=H.nextSibling.firstChild.firstChild;this.doesNotAddBorder=(G.offsetTop!==5);this.doesAddBorderForTableAndCells=(I.offsetTop===5);H.style.overflow="hidden",H.style.position="relative";this.subtractsBorderForOverflowNotVisible=(G.offsetTop===-5);L.style.marginTop="1px";this.doesNotIncludeMarginInBodyOffset=(L.offsetTop===0);L.style.marginTop=J;L.removeChild(F);this.initialized=true},bodyOffset:function(E){o.offset.initialized||o.offset.initialize();var G=E.offsetTop,F=E.offsetLeft;if(o.offset.doesNotIncludeMarginInBodyOffset){G+=parseInt(o.curCSS(E,"marginTop",true),10)||0,F+=parseInt(o.curCSS(E,"marginLeft",true),10)||0}return{top:G,left:F}}};o.fn.extend({position:function(){var I=0,H=0,F;if(this[0]){var G=this.offsetParent(),J=this.offset(),E=/^body|html$/i.test(G[0].tagName)?{top:0,left:0}:G.offset();J.top-=j(this,"marginTop");J.left-=j(this,"marginLeft");E.top+=j(G,"borderTopWidth");E.left+=j(G,"borderLeftWidth");F={top:J.top-E.top,left:J.left-E.left}}return F},offsetParent:function(){var E=this[0].offsetParent||document.body;while(E&&(!/^body|html$/i.test(E.tagName)&&o.css(E,"position")=="static")){E=E.offsetParent}return o(E)}});o.each(["Left","Top"],function(F,E){var G="scroll"+E;o.fn[G]=function(H){if(!this[0]){return null}return H!==g?this.each(function(){this==l||this==document?l.scrollTo(!F?H:o(l).scrollLeft(),F?H:o(l).scrollTop()):this[G]=H}):this[0]==l||this[0]==document?self[F?"pageYOffset":"pageXOffset"]||o.boxModel&&document.documentElement[G]||document.body[G]:this[0][G]}});o.each(["Height","Width"],function(I,G){var E=I?"Left":"Top",H=I?"Right":"Bottom",F=G.toLowerCase();o.fn["inner"+G]=function(){return this[0]?o.css(this[0],F,false,"padding"):null};o.fn["outer"+G]=function(K){return this[0]?o.css(this[0],F,false,K?"margin":"border"):null};var J=G.toLowerCase();o.fn[J]=function(K){return this[0]==l?document.compatMode=="CSS1Compat"&&document.documentElement["client"+G]||document.body["client"+G]:this[0]==document?Math.max(document.documentElement["client"+G],document.body["scroll"+G],document.documentElement["scroll"+G],document.body["offset"+G],document.documentElement["offset"+G]):K===g?(this.length?o.css(this[0],J):null):this.css(J,typeof K==="string"?K:K+"px")}})})();;

/**
 * Override jQuery.fn.init to guard against XSS attacks.
 *
 * See http://bugs.jquery.com/ticket/9521
 */
(function () {
  var jquery_init = jQuery.fn.init;
  jQuery.fn.init = function (selector, context, rootjQuery) {
    // If the string contains a "#" before a "<", treat it as invalid HTML.
    if (selector && typeof selector === 'string') {
      var hash_position = selector.indexOf('#');
      if (hash_position >= 0) {
        var bracket_position = selector.indexOf('<');
        if (bracket_position > hash_position) {
          throw 'Syntax error, unrecognized expression: ' + selector;
        }
      }
    }
    return jquery_init.call(this, selector, context, rootjQuery);
  };
  jQuery.fn.init.prototype = jquery_init.prototype;
})();

var Drupal = Drupal || { 'settings': {}, 'behaviors': {}, 'themes': {}, 'locale': {} };

/**
 * Set the variable that indicates if JavaScript behaviors should be applied
 */
Drupal.jsEnabled = document.getElementsByTagName && document.createElement && document.createTextNode && document.documentElement && document.getElementById;

/**
 * Attach all registered behaviors to a page element.
 *
 * Behaviors are event-triggered actions that attach to page elements, enhancing
 * default non-Javascript UIs. Behaviors are registered in the Drupal.behaviors
 * object as follows:
 * @code
 *    Drupal.behaviors.behaviorName = function () {
 *      ...
 *    };
 * @endcode
 *
 * Drupal.attachBehaviors is added below to the jQuery ready event and so
 * runs on initial page load. Developers implementing AHAH/AJAX in their
 * solutions should also call this function after new page content has been
 * loaded, feeding in an element to be processed, in order to attach all
 * behaviors to the new content.
 *
 * Behaviors should use a class in the form behaviorName-processed to ensure
 * the behavior is attached only once to a given element. (Doing so enables
 * the reprocessing of given elements, which may be needed on occasion despite
 * the ability to limit behavior attachment to a particular element.)
 *
 * @param context
 *   An element to attach behaviors to. If none is given, the document element
 *   is used.
 */
Drupal.attachBehaviors = function(context) {
  context = context || document;
  if (Drupal.jsEnabled) {
    // Execute all of them.
    jQuery.each(Drupal.behaviors, function() {
      this(context);
    });
  }
};

/**
 * Encode special characters in a plain-text string for display as HTML.
 */
Drupal.checkPlain = function(str) {
  str = String(str);
  var replace = { '&': '&amp;', '"': '&quot;', '<': '&lt;', '>': '&gt;' };
  for (var character in replace) {
    var regex = new RegExp(character, 'g');
    str = str.replace(regex, replace[character]);
  }
  return str;
};

/**
 * Translate strings to the page language or a given language.
 *
 * See the documentation of the server-side t() function for further details.
 *
 * @param str
 *   A string containing the English string to translate.
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 * @return
 *   The translated string.
 */
Drupal.t = function(str, args) {
  // Fetch the localized version of the string.
  if (Drupal.locale.strings && Drupal.locale.strings[str]) {
    str = Drupal.locale.strings[str];
  }

  if (args) {
    // Transform arguments before inserting them
    for (var key in args) {
      switch (key.charAt(0)) {
        // Escaped only
        case '@':
          args[key] = Drupal.checkPlain(args[key]);
        break;
        // Pass-through
        case '!':
          break;
        // Escaped and placeholder
        case '%':
        default:
          args[key] = Drupal.theme('placeholder', args[key]);
          break;
      }
      str = str.replace(key, args[key]);
    }
  }
  return str;
};

/**
 * Format a string containing a count of items.
 *
 * This function ensures that the string is pluralized correctly. Since Drupal.t() is
 * called by this function, make sure not to pass already-localized strings to it.
 *
 * See the documentation of the server-side format_plural() function for further details.
 *
 * @param count
 *   The item count to display.
 * @param singular
 *   The string for the singular case. Please make sure it is clear this is
 *   singular, to ease translation (e.g. use "1 new comment" instead of "1 new").
 *   Do not use @count in the singular string.
 * @param plural
 *   The string for the plural case. Please make sure it is clear this is plural,
 *   to ease translation. Use @count in place of the item count, as in "@count
 *   new comments".
 * @param args
 *   An object of replacements pairs to make after translation. Incidences
 *   of any key in this array are replaced with the corresponding value.
 *   Based on the first character of the key, the value is escaped and/or themed:
 *    - !variable: inserted as is
 *    - @variable: escape plain text to HTML (Drupal.checkPlain)
 *    - %variable: escape text and theme as a placeholder for user-submitted
 *      content (checkPlain + Drupal.theme('placeholder'))
 *   Note that you do not need to include @count in this array.
 *   This replacement is done automatically for the plural case.
 * @return
 *   A translated string.
 */
Drupal.formatPlural = function(count, singular, plural, args) {
  var args = args || {};
  args['@count'] = count;
  // Determine the index of the plural form.
  var index = Drupal.locale.pluralFormula ? Drupal.locale.pluralFormula(args['@count']) : ((args['@count'] == 1) ? 0 : 1);

  if (index == 0) {
    return Drupal.t(singular, args);
  }
  else if (index == 1) {
    return Drupal.t(plural, args);
  }
  else {
    args['@count['+ index +']'] = args['@count'];
    delete args['@count'];
    return Drupal.t(plural.replace('@count', '@count['+ index +']'), args);
  }
};

/**
 * Generate the themed representation of a Drupal object.
 *
 * All requests for themed output must go through this function. It examines
 * the request and routes it to the appropriate theme function. If the current
 * theme does not provide an override function, the generic theme function is
 * called.
 *
 * For example, to retrieve the HTML that is output by theme_placeholder(text),
 * call Drupal.theme('placeholder', text).
 *
 * @param func
 *   The name of the theme function to call.
 * @param ...
 *   Additional arguments to pass along to the theme function.
 * @return
 *   Any data the theme function returns. This could be a plain HTML string,
 *   but also a complex object.
 */
Drupal.theme = function(func) {
  for (var i = 1, args = []; i < arguments.length; i++) {
    args.push(arguments[i]);
  }

  return (Drupal.theme[func] || Drupal.theme.prototype[func]).apply(this, args);
};

/**
 * Parse a JSON response.
 *
 * The result is either the JSON object, or an object with 'status' 0 and 'data' an error message.
 */
Drupal.parseJson = function (data) {
  if ((data.substring(0, 1) != '{') && (data.substring(0, 1) != '[')) {
    return { status: 0, data: data.length ? data : Drupal.t('Unspecified error') };
  }
  return eval('(' + data + ');');
};

/**
 * Freeze the current body height (as minimum height). Used to prevent
 * unnecessary upwards scrolling when doing DOM manipulations.
 */
Drupal.freezeHeight = function () {
  Drupal.unfreezeHeight();
  var div = document.createElement('div');
  $(div).css({
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '1px',
    height: $('body').css('height')
  }).attr('id', 'freeze-height');
  $('body').append(div);
};

/**
 * Unfreeze the body height
 */
Drupal.unfreezeHeight = function () {
  $('#freeze-height').remove();
};

/**
 * Wrapper around encodeURIComponent() which avoids Apache quirks (equivalent of
 * drupal_urlencode() in PHP). This function should only be used on paths, not
 * on query string arguments.
 */
Drupal.encodeURIComponent = function (item, uri) {
  uri = uri || location.href;
  item = encodeURIComponent(item).replace(/%2F/g, '/');
  return (uri.indexOf('?q=') != -1) ? item : item.replace(/%26/g, '%2526').replace(/%23/g, '%2523').replace(/\/\//g, '/%252F');
};

/**
 * Get the text selection in a textarea.
 */
Drupal.getSelection = function (element) {
  if (typeof(element.selectionStart) != 'number' && document.selection) {
    // The current selection
    var range1 = document.selection.createRange();
    var range2 = range1.duplicate();
    // Select all text.
    range2.moveToElementText(element);
    // Now move 'dummy' end point to end point of original range.
    range2.setEndPoint('EndToEnd', range1);
    // Now we can calculate start and end points.
    var start = range2.text.length - range1.text.length;
    var end = start + range1.text.length;
    return { 'start': start, 'end': end };
  }
  return { 'start': element.selectionStart, 'end': element.selectionEnd };
};

/**
 * Build an error message from ahah response.
 */
Drupal.ahahError = function(xmlhttp, uri) {
  if (xmlhttp.status == 200) {
    if (jQuery.trim($(xmlhttp.responseText).text())) {
      var message = Drupal.t("An error occurred. \n@uri\n@text", {'@uri': uri, '@text': xmlhttp.responseText });
    }
    else {
      var message = Drupal.t("An error occurred. \n@uri\n(no information available).", {'@uri': uri, '@text': xmlhttp.responseText });
    }
  }
  else {
    var message = Drupal.t("An HTTP error @status occurred. \n@uri", {'@uri': uri, '@status': xmlhttp.status });
  }
  return message;
}

// Global Killswitch on the <html> element
if (Drupal.jsEnabled) {
  // Global Killswitch on the <html> element
  $(document.documentElement).addClass('js');
  // 'js enabled' cookie
  document.cookie = 'has_js=1; path=/';
  // Attach all behaviors.
  $(document).ready(function() {
    Drupal.attachBehaviors(this);
  });
}

/**
 * The default themes.
 */
Drupal.theme.prototype = {

  /**
   * Formats text for emphasized display in a placeholder inside a sentence.
   *
   * @param str
   *   The text to format (plain-text).
   * @return
   *   The formatted text (html).
   */
  placeholder: function(str) {
    return '<em>' + Drupal.checkPlain(str) + '</em>';
  }
};
;
/*
 * SimpleModal 1.4.3 - jQuery Plugin
 * http://simplemodal.com/
 * Copyright (c) 2012 Eric Martin
 * Licensed under MIT and GPL
 * Date: Sat, Sep 8 2012 07:52:31 -0700
 */
(function(b){"function"===typeof define&&define.amd?define(["jquery"],b):b(jQuery)})(function(b){var j=[],l=b(document),m=b.browser.msie&&6===parseInt(b.browser.version)&&"object"!==typeof window.XMLHttpRequest,o=b.browser.msie&&7===parseInt(b.browser.version),n=null,k=b(window),h=[];b.modal=function(a,d){return b.modal.impl.init(a,d)};b.modal.close=function(){b.modal.impl.close()};b.modal.focus=function(a){b.modal.impl.focus(a)};b.modal.setContainerDimensions=function(){b.modal.impl.setContainerDimensions()};
b.modal.setPosition=function(){b.modal.impl.setPosition()};b.modal.update=function(a,d){b.modal.impl.update(a,d)};b.fn.modal=function(a){return b.modal.impl.init(this,a)};b.modal.defaults={appendTo:"body",focus:!0,opacity:50,overlayId:"simplemodal-overlay",overlayCss:{},containerId:"simplemodal-container",containerCss:{},dataId:"simplemodal-data",dataCss:{},minHeight:null,minWidth:null,maxHeight:null,maxWidth:null,autoResize:!1,autoPosition:!0,zIndex:1E3,close:!0,closeHTML:'<a class="modalCloseImg" title="Close"></a>',
closeClass:"simplemodal-close",escClose:!0,overlayClose:!1,fixed:!0,position:null,persist:!1,modal:!0,onOpen:null,onShow:null,onClose:null};b.modal.impl={d:{},init:function(a,d){if(this.d.data)return!1;n=b.browser.msie&&!b.support.boxModel;this.o=b.extend({},b.modal.defaults,d);this.zIndex=this.o.zIndex;this.occb=!1;if("object"===typeof a){if(a=a instanceof b?a:b(a),this.d.placeholder=!1,0<a.parent().parent().size()&&(a.before(b("<span></span>").attr("id","simplemodal-placeholder").css({display:"none"})),
this.d.placeholder=!0,this.display=a.css("display"),!this.o.persist))this.d.orig=a.clone(!0)}else if("string"===typeof a||"number"===typeof a)a=b("<div></div>").html(a);else return alert("SimpleModal Error: Unsupported data type: "+typeof a),this;this.create(a);this.open();b.isFunction(this.o.onShow)&&this.o.onShow.apply(this,[this.d]);return this},create:function(a){this.getDimensions();if(this.o.modal&&m)this.d.iframe=b('<iframe src="javascript:false;"></iframe>').css(b.extend(this.o.iframeCss,
{display:"none",opacity:0,position:"fixed",height:h[0],width:h[1],zIndex:this.o.zIndex,top:0,left:0})).appendTo(this.o.appendTo);this.d.overlay=b("<div></div>").attr("id",this.o.overlayId).addClass("simplemodal-overlay").css(b.extend(this.o.overlayCss,{display:"none",opacity:this.o.opacity/100,height:this.o.modal?j[0]:0,width:this.o.modal?j[1]:0,position:"fixed",left:0,top:0,zIndex:this.o.zIndex+1})).appendTo(this.o.appendTo);this.d.container=b("<div></div>").attr("id",this.o.containerId).addClass("simplemodal-container").css(b.extend({position:this.o.fixed?
"fixed":"absolute"},this.o.containerCss,{display:"none",zIndex:this.o.zIndex+2})).append(this.o.close&&this.o.closeHTML?b(this.o.closeHTML).addClass(this.o.closeClass):"").appendTo(this.o.appendTo);this.d.wrap=b("<div></div>").attr("tabIndex",-1).addClass("simplemodal-wrap").css({height:"100%",outline:0,width:"100%"}).appendTo(this.d.container);this.d.data=a.attr("id",a.attr("id")||this.o.dataId).addClass("simplemodal-data").css(b.extend(this.o.dataCss,{display:"none"})).appendTo("body");this.setContainerDimensions();
this.d.data.appendTo(this.d.wrap);(m||n)&&this.fixIE()},bindEvents:function(){var a=this;b("."+a.o.closeClass).bind("click.simplemodal",function(b){b.preventDefault();a.close()});a.o.modal&&a.o.close&&a.o.overlayClose&&a.d.overlay.bind("click.simplemodal",function(b){b.preventDefault();a.close()});l.bind("keydown.simplemodal",function(b){a.o.modal&&9===b.keyCode?a.watchTab(b):a.o.close&&a.o.escClose&&27===b.keyCode&&(b.preventDefault(),a.close())});k.bind("resize.simplemodal orientationchange.simplemodal",
function(){a.getDimensions();a.o.autoResize?a.setContainerDimensions():a.o.autoPosition&&a.setPosition();m||n?a.fixIE():a.o.modal&&(a.d.iframe&&a.d.iframe.css({height:h[0],width:h[1]}),a.d.overlay.css({height:j[0],width:j[1]}))})},unbindEvents:function(){b("."+this.o.closeClass).unbind("click.simplemodal");l.unbind("keydown.simplemodal");k.unbind(".simplemodal");this.d.overlay.unbind("click.simplemodal")},fixIE:function(){var a=this.o.position;b.each([this.d.iframe||null,!this.o.modal?null:this.d.overlay,
"fixed"===this.d.container.css("position")?this.d.container:null],function(b,f){if(f){var g=f[0].style;g.position="absolute";if(2>b)g.removeExpression("height"),g.removeExpression("width"),g.setExpression("height",'document.body.scrollHeight > document.body.clientHeight ? document.body.scrollHeight : document.body.clientHeight + "px"'),g.setExpression("width",'document.body.scrollWidth > document.body.clientWidth ? document.body.scrollWidth : document.body.clientWidth + "px"');else{var c,e;a&&a.constructor===
Array?(c=a[0]?"number"===typeof a[0]?a[0].toString():a[0].replace(/px/,""):f.css("top").replace(/px/,""),c=-1===c.indexOf("%")?c+' + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"':parseInt(c.replace(/%/,""))+' * ((document.documentElement.clientHeight || document.body.clientHeight) / 100) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',a[1]&&(e="number"===typeof a[1]?
a[1].toString():a[1].replace(/px/,""),e=-1===e.indexOf("%")?e+' + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"':parseInt(e.replace(/%/,""))+' * ((document.documentElement.clientWidth || document.body.clientWidth) / 100) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"')):(c='(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (t = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"',
e='(document.documentElement.clientWidth || document.body.clientWidth) / 2 - (this.offsetWidth / 2) + (t = document.documentElement.scrollLeft ? document.documentElement.scrollLeft : document.body.scrollLeft) + "px"');g.removeExpression("top");g.removeExpression("left");g.setExpression("top",c);g.setExpression("left",e)}}})},focus:function(a){var d=this,a=a&&-1!==b.inArray(a,["first","last"])?a:"first",f=b(":input:enabled:visible:"+a,d.d.wrap);setTimeout(function(){0<f.length?f.focus():d.d.wrap.focus()},
10)},getDimensions:function(){var a="undefined"===typeof window.innerHeight?k.height():window.innerHeight;j=[l.height(),l.width()];h=[a,k.width()]},getVal:function(a,b){return a?"number"===typeof a?a:"auto"===a?0:0<a.indexOf("%")?parseInt(a.replace(/%/,""))/100*("h"===b?h[0]:h[1]):parseInt(a.replace(/px/,"")):null},update:function(a,b){if(!this.d.data)return!1;this.d.origHeight=this.getVal(a,"h");this.d.origWidth=this.getVal(b,"w");this.d.data.hide();a&&this.d.container.css("height",a);b&&this.d.container.css("width",
b);this.setContainerDimensions();this.d.data.show();this.o.focus&&this.focus();this.unbindEvents();this.bindEvents()},setContainerDimensions:function(){var a=m||o,d=this.d.origHeight?this.d.origHeight:b.browser.opera?this.d.container.height():this.getVal(a?this.d.container[0].currentStyle.height:this.d.container.css("height"),"h"),a=this.d.origWidth?this.d.origWidth:b.browser.opera?this.d.container.width():this.getVal(a?this.d.container[0].currentStyle.width:this.d.container.css("width"),"w"),f=this.d.data.outerHeight(!0),
g=this.d.data.outerWidth(!0);this.d.origHeight=this.d.origHeight||d;this.d.origWidth=this.d.origWidth||a;var c=this.o.maxHeight?this.getVal(this.o.maxHeight,"h"):null,e=this.o.maxWidth?this.getVal(this.o.maxWidth,"w"):null,c=c&&c<h[0]?c:h[0],e=e&&e<h[1]?e:h[1],i=this.o.minHeight?this.getVal(this.o.minHeight,"h"):"auto",d=d?this.o.autoResize&&d>c?c:d<i?i:d:f?f>c?c:this.o.minHeight&&"auto"!==i&&f<i?i:f:i,c=this.o.minWidth?this.getVal(this.o.minWidth,"w"):"auto",a=a?this.o.autoResize&&a>e?e:a<c?c:a:
g?g>e?e:this.o.minWidth&&"auto"!==c&&g<c?c:g:c;this.d.container.css({height:d,width:a});this.d.wrap.css({overflow:f>d||g>a?"auto":"visible"});this.o.autoPosition&&this.setPosition()},setPosition:function(){var a,b;a=h[0]/2-this.d.container.outerHeight(!0)/2;b=h[1]/2-this.d.container.outerWidth(!0)/2;var f="fixed"!==this.d.container.css("position")?k.scrollTop():0;this.o.position&&"[object Array]"===Object.prototype.toString.call(this.o.position)?(a=f+(this.o.position[0]||a),b=this.o.position[1]||
b):a=f+a;this.d.container.css({left:b,top:a})},watchTab:function(a){if(0<b(a.target).parents(".simplemodal-container").length){if(this.inputs=b(":input:enabled:visible:first, :input:enabled:visible:last",this.d.data[0]),!a.shiftKey&&a.target===this.inputs[this.inputs.length-1]||a.shiftKey&&a.target===this.inputs[0]||0===this.inputs.length)a.preventDefault(),this.focus(a.shiftKey?"last":"first")}else a.preventDefault(),this.focus()},open:function(){this.d.iframe&&this.d.iframe.show();b.isFunction(this.o.onOpen)?
this.o.onOpen.apply(this,[this.d]):(this.d.overlay.show(),this.d.container.show(),this.d.data.show());this.o.focus&&this.focus();this.bindEvents()},close:function(){if(!this.d.data)return!1;this.unbindEvents();if(b.isFunction(this.o.onClose)&&!this.occb)this.occb=!0,this.o.onClose.apply(this,[this.d]);else{if(this.d.placeholder){var a=b("#simplemodal-placeholder");this.o.persist?a.replaceWith(this.d.data.removeClass("simplemodal-data").css("display",this.display)):(this.d.data.hide().remove(),a.replaceWith(this.d.orig))}else this.d.data.hide().remove();
this.d.container.hide().remove();this.d.overlay.hide();this.d.iframe&&this.d.iframe.hide().remove();this.d.overlay.remove();this.d={}}}}});
;

$(document).ready(function() {

  // Expression to check for absolute internal links.
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");

  // Attach onclick event to document only and catch clicks on all elements.
  $(document.body).click(function(event) {
    // Catch only the first parent link of a clicked element.
    $(event.target).parents("a:first,area:first").andSelf().filter("a,area").each(function() {

      var ga = Drupal.settings.googleanalytics;
      // Expression to check for special links like gotwo.module /go/* links.
      var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
      // Expression to check for download links.
      var isDownload = new RegExp("\\.(" + ga.trackDownloadExtensions + ")$", "i");

      // Is the clicked URL internal?
      if (isInternal.test(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (ga.trackDownload && isDownload.test(this.href)) {
          // Download link clicked.
          var extension = isDownload.exec(this.href);
          _gaq.push(["_trackEvent", "Downloads", extension[1].toUpperCase(), this.href.replace(isInternal, '')]);
        }
        else if (isInternalSpecial.test(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          _gaq.push(["_trackPageview", this.href.replace(isInternal, '')]);
        }
      }
      else {
        if (ga.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          _gaq.push(["_trackEvent", "Mails", "Click", this.href.substring(7)]);
        }
        else if (ga.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          // External link clicked.
          _gaq.push(["_trackEvent", "Outbound links", "Click", this.href]);
        }
      }
    });
  });

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function() {
    var href = $.colorbox.element().attr("href");
    if (href) {
      _gaq.push(["_trackPageview", href.replace(isInternal, '')]);
    }
  });

});
;

(function ($) {
  Drupal.Panels = {};

  Drupal.Panels.autoAttach = function() {
    if ($.browser.msie) {
      // If IE, attach a hover event so we can see our admin links.
      $("div.panel-pane").hover(
        function() {
          $('div.panel-hide', this).addClass("panel-hide-hover"); return true;
        },
        function() {
          $('div.panel-hide', this).removeClass("panel-hide-hover"); return true;
        }
      );
      $("div.admin-links").hover(
        function() {
          $(this).addClass("admin-links-hover"); return true;
        },
        function(){
          $(this).removeClass("admin-links-hover"); return true;
        }
      );
    }
  };

  $(Drupal.Panels.autoAttach);
})(jQuery);
;
/* $Id: lightbox.js,v 1.5.2.6.2.136 2010/09/24 08:39:40 snpower Exp $ */

/**
 * jQuery Lightbox
 * @author
 *   Stella Power, <http://drupal.org/user/66894>
 *
 * Based on Lightbox v2.03.3 by Lokesh Dhakar
 * <http://www.huddletogether.com/projects/lightbox2/>
 * Also partially based on the jQuery Lightbox by Warren Krewenki
 *   <http://warren.mesozen.com>
 *
 * Permission has been granted to Mark Ashmead & other Drupal Lightbox2 module
 * maintainers to distribute this file via Drupal.org
 * Under GPL license.
 *
 * Slideshow, iframe and video functionality added by Stella Power.
 */

var Lightbox = {
  auto_modal : false,
  overlayOpacity : 0.8, // Controls transparency of shadow overlay.
  overlayColor : '000', // Controls colour of shadow overlay.
  disableCloseClick : true,
  // Controls the order of the lightbox resizing animation sequence.
  resizeSequence: 0, // 0: simultaneous, 1: width then height, 2: height then width.
  resizeSpeed: 'normal', // Controls the speed of the lightbox resizing animation.
  fadeInSpeed: 'normal', // Controls the speed of the image appearance.
  slideDownSpeed: 'slow', // Controls the speed of the image details appearance.
  minWidth: 240,
  borderSize : 10,
  boxColor : 'fff',
  fontColor : '000',
  topPosition : '',
  infoHeight: 20,
  alternative_layout : false,
  imageArray : [],
  imageNum : null,
  total : 0,
  activeImage : null,
  inprogress : false,
  disableResize : false,
  disableZoom : false,
  isZoomedIn : false,
  rtl : false,
  loopItems : false,
  keysClose : ['c', 'x', 27],
  keysPrevious : ['p', 37],
  keysNext : ['n', 39],
  keysZoom : ['z'],
  keysPlayPause : [32],

  // Slideshow options.
  slideInterval : 5000, // In milliseconds.
  showPlayPause : true,
  autoStart : true,
  autoExit : true,
  pauseOnNextClick : false, // True to pause the slideshow when the "Next" button is clicked.
  pauseOnPrevClick : true, // True to pause the slideshow when the "Prev" button is clicked.
  slideIdArray : [],
  slideIdCount : 0,
  isSlideshow : false,
  isPaused : false,
  loopSlides : false,

  // Iframe options.
  isLightframe : false,
  iframe_width : 600,
  iframe_height : 400,
  iframe_border : 1,

  // Video and modal options.
  enableVideo : false,
  flvPlayer : '/flvplayer.swf',
  flvFlashvars : '',
  isModal : false,
  isVideo : false,
  videoId : false,
  modalWidth : 400,
  modalHeight : 400,
  modalHTML : null,


  // initialize()
  // Constructor runs on completion of the DOM loading.
  // The function inserts html at the bottom of the page which is used
  // to display the shadow overlay and the image container.
  initialize: function() {

    var s = Drupal.settings.lightbox2;
    Lightbox.overlayOpacity = s.overlay_opacity;
    Lightbox.overlayColor = s.overlay_color;
    Lightbox.disableCloseClick = s.disable_close_click;
    Lightbox.resizeSequence = s.resize_sequence;
    Lightbox.resizeSpeed = s.resize_speed;
    Lightbox.fadeInSpeed = s.fade_in_speed;
    Lightbox.slideDownSpeed = s.slide_down_speed;
    Lightbox.borderSize = s.border_size;
    Lightbox.boxColor = s.box_color;
    Lightbox.fontColor = s.font_color;
    Lightbox.topPosition = s.top_position;
    Lightbox.rtl = s.rtl;
    Lightbox.loopItems = s.loop_items;
    Lightbox.keysClose = s.keys_close.split(" ");
    Lightbox.keysPrevious = s.keys_previous.split(" ");
    Lightbox.keysNext = s.keys_next.split(" ");
    Lightbox.keysZoom = s.keys_zoom.split(" ");
    Lightbox.keysPlayPause = s.keys_play_pause.split(" ");
    Lightbox.disableResize = s.disable_resize;
    Lightbox.disableZoom = s.disable_zoom;
    Lightbox.slideInterval = s.slideshow_interval;
    Lightbox.showPlayPause = s.show_play_pause;
    Lightbox.showCaption = s.show_caption;
    Lightbox.autoStart = s.slideshow_automatic_start;
    Lightbox.autoExit = s.slideshow_automatic_exit;
    Lightbox.pauseOnNextClick = s.pause_on_next_click;
    Lightbox.pauseOnPrevClick = s.pause_on_previous_click;
    Lightbox.loopSlides = s.loop_slides;
    Lightbox.alternative_layout = s.use_alt_layout;
    Lightbox.iframe_width = s.iframe_width;
    Lightbox.iframe_height = s.iframe_height;
    Lightbox.iframe_border = s.iframe_border;
    Lightbox.enableVideo = s.enable_video;
    if (s.enable_video) {
      Lightbox.flvPlayer = s.flvPlayer;
      Lightbox.flvFlashvars = s.flvFlashvars;
    }

    // Make the lightbox divs.
    var layout_class = (s.use_alt_layout ? 'lightbox2-alt-layout' : 'lightbox2-orig-layout');
    var output = '<div id="lightbox2-overlay" style="display: none;"></div>\
      <div id="lightbox" style="display: none;" class="' + layout_class + '">\
        <div id="outerImageContainer"></div>\
        <div id="imageDataContainer" class="clearfix">\
          <div id="imageData"></div>\
        </div>\
      </div>';
    var loading = '<div id="loading"><a href="#" id="loadingLink"></a></div>';
    var modal = '<div id="modalContainer" style="display: none;"></div>';
    var frame = '<div id="frameContainer" style="display: none;"></div>';
    var imageContainer = '<div id="imageContainer" style="display: none;"></div>';
    var details = '<div id="imageDetails"></div>';
    var bottomNav = '<div id="bottomNav"></div>';
    var image = '<img id="lightboxImage" alt="" />';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" href="#"></a><a id="nextLink" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" href="#"></a><a id="frameNextLink" href="#"></a></div>';
    var hoverNav = '<div id="hoverNav"><a id="prevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="nextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var frameNav = '<div id="frameHoverNav"><a id="framePrevLink" title="' + Drupal.t('Previous') + '" href="#"></a><a id="frameNextLink" title="' + Drupal.t('Next') + '" href="#"></a></div>';
    var caption = '<span id="caption"></span>';
    var numberDisplay = '<span id="numberDisplay"></span>';
    var close = '<a id="bottomNavClose" title="' + Drupal.t('Close') + '" href="#"></a>';
    var zoom = '<a id="bottomNavZoom" href="#"></a>';
    var zoomOut = '<a id="bottomNavZoomOut" href="#"></a>';
    var pause = '<a id="lightshowPause" title="' + Drupal.t('Pause Slideshow') + '" href="#" style="display: none;"></a>';
    var play = '<a id="lightshowPlay" title="' + Drupal.t('Play Slideshow') + '" href="#" style="display: none;"></a>';

    $("body").append(output);
    $('#outerImageContainer').append(modal + frame + imageContainer + loading);
    if (!s.use_alt_layout) {
      $('#imageContainer').append(image + hoverNav);
      $('#imageData').append(details + bottomNav);
      $('#imageDetails').append(caption + numberDisplay);
      $('#bottomNav').append(frameNav + close + zoom + zoomOut + pause + play);
    }
    else {
      $('#outerImageContainer').append(bottomNav);
      $('#imageContainer').append(image);
      $('#bottomNav').append(close + zoom + zoomOut);
      $('#imageData').append(hoverNav + details);
      $('#imageDetails').append(caption + numberDisplay + pause + play);
    }

    // Setup onclick handlers.
    if (Lightbox.disableCloseClick) {
      $('#lightbox2-overlay').click(function() { Lightbox.end(); return false; } ).hide();
    }
    $('#loadingLink, #bottomNavClose').click(function() { Lightbox.end('forceClose'); return false; } );
    $('#prevLink, #framePrevLink').click(function() { Lightbox.changeData(Lightbox.activeImage - 1); return false; } );
    $('#nextLink, #frameNextLink').click(function() { Lightbox.changeData(Lightbox.activeImage + 1); return false; } );
    $('#bottomNavZoom').click(function() { Lightbox.changeData(Lightbox.activeImage, true); return false; } );
    $('#bottomNavZoomOut').click(function() { Lightbox.changeData(Lightbox.activeImage, false); return false; } );
    $('#lightshowPause').click(function() { Lightbox.togglePlayPause("lightshowPause", "lightshowPlay"); return false; } );
    $('#lightshowPlay').click(function() { Lightbox.togglePlayPause("lightshowPlay", "lightshowPause"); return false; } );

    // Fix positioning.
    $('#prevLink, #nextLink, #framePrevLink, #frameNextLink').css({ 'paddingTop': Lightbox.borderSize + 'px'});
    $('#imageContainer, #frameContainer, #modalContainer').css({ 'padding': Lightbox.borderSize + 'px'});
    $('#outerImageContainer, #imageDataContainer, #bottomNavClose').css({'backgroundColor': '#' + Lightbox.boxColor, 'color': '#'+Lightbox.fontColor});
    if (Lightbox.alternative_layout) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'bottom': Lightbox.borderSize + 'px', 'right': Lightbox.borderSize + 'px'});
    }
    else if (Lightbox.rtl == 1 && $.browser.msie) {
      $('#bottomNavZoom, #bottomNavZoomOut').css({'left': '0px'});
    }

    // Force navigation links to always be displayed
    if (s.force_show_nav) {
      $('#prevLink, #nextLink').addClass("force_show_nav");
    }

  },

  // initList()
  // Loops through anchor tags looking for 'lightbox', 'lightshow' and
  // 'lightframe', etc, references and applies onclick events to appropriate
  // links. You can rerun after dynamically adding images w/ajax.
  initList : function(context) {

    if (context == undefined || context == null) {
      context = document;
    }

    // Attach lightbox to any links with rel 'lightbox', 'lightshow' or
    // 'lightframe', etc.
    $("a[rel^='lightbox']:not(.lightbox-processed), area[rel^='lightbox']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightshow']:not(.lightbox-processed), area[rel^='lightshow']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, true, false, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("a[rel^='lightframe']:not(.lightbox-processed), area[rel^='lightframe']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      if (Lightbox.disableCloseClick) {
        $('#lightbox').unbind('click');
        $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
      }
      Lightbox.start(this, false, true, false, false);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    if (Lightbox.enableVideo) {
      $("a[rel^='lightvideo']:not(.lightbox-processed), area[rel^='lightvideo']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
        if (Lightbox.disableCloseClick) {
          $('#lightbox').unbind('click');
          $('#lightbox').click(function() { Lightbox.end('forceClose'); } );
        }
        Lightbox.start(this, false, false, true, false);
        if (e.preventDefault) { e.preventDefault(); }
        return false;
      });
    }
    $("a[rel^='lightmodal']:not(.lightbox-processed), area[rel^='lightmodal']:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      $('#lightbox').unbind('click');
      // Add classes from the link to the lightbox div - don't include lightbox-processed
      $('#lightbox').addClass($(this).attr('class'));
      $('#lightbox').removeClass('lightbox-processed');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
    $("#lightboxAutoModal:not(.lightbox-processed)", context).addClass('lightbox-processed').click(function(e) {
      Lightbox.auto_modal = true;
      $('#lightbox').unbind('click');
      Lightbox.start(this, false, false, false, true);
      if (e.preventDefault) { e.preventDefault(); }
      return false;
    });
  },

  // start()
  // Display overlay and lightbox. If image is part of a set, add siblings to
  // imageArray.
  start: function(imageLink, slideshow, lightframe, lightvideo, lightmodal) {

    Lightbox.isPaused = !Lightbox.autoStart;

    // Replaces hideSelectBoxes() and hideFlash() calls in original lightbox2.
    Lightbox.toggleSelectsFlash('hide');

    // Stretch overlay to fill page and fade in.
    var arrayPageSize = Lightbox.getPageSize();
    $("#lightbox2-overlay").hide().css({
      'width': '100%',
      'zIndex': '10090',
      'height': arrayPageSize[1] + 'px',
      'backgroundColor' : '#' + Lightbox.overlayColor
    });
    // Detect OS X FF2 opacity + flash issue.
    if (lightvideo && this.detectMacFF2()) {
      $("#lightbox2-overlay").removeClass("overlay_default");
      $("#lightbox2-overlay").addClass("overlay_macff2");
      $("#lightbox2-overlay").css({'opacity' : null});
    }
    else {
      $("#lightbox2-overlay").removeClass("overlay_macff2");
      $("#lightbox2-overlay").addClass("overlay_default");
      $("#lightbox2-overlay").css({'opacity' : Lightbox.overlayOpacity});
    }
    $("#lightbox2-overlay").fadeIn(Lightbox.fadeInSpeed);


    Lightbox.isSlideshow = slideshow;
    Lightbox.isLightframe = lightframe;
    Lightbox.isVideo = lightvideo;
    Lightbox.isModal = lightmodal;
    Lightbox.imageArray = [];
    Lightbox.imageNum = 0;

    var anchors = $(imageLink.tagName);
    var anchor = null;
    var rel_parts = Lightbox.parseRel(imageLink);
    var rel = rel_parts["rel"];
    var rel_group = rel_parts["group"];
    var title = (rel_parts["title"] ? rel_parts["title"] : imageLink.title);
    var rel_style = null;
    var i = 0;

    if (rel_parts["flashvars"]) {
      Lightbox.flvFlashvars = Lightbox.flvFlashvars + '&' + rel_parts["flashvars"];
    }

    // Set the title for image alternative text.
    var alt = imageLink.title;
    if (!alt) {
      var img = $(imageLink).find("img");
      if (img && $(img).attr("alt")) {
        alt = $(img).attr("alt");
      }
      else {
        alt = title;
      }
    }

    if ($(imageLink).attr('id') == 'lightboxAutoModal') {
      rel_style = rel_parts["style"];
      Lightbox.imageArray.push(['#lightboxAutoModal > *', title, alt, rel_style, 1]);
    }
    else {
      // Handle lightbox images with no grouping.
      if ((rel == 'lightbox' || rel == 'lightshow') && !rel_group) {
        Lightbox.imageArray.push([imageLink.href, title, alt]);
      }

      // Handle other items with no grouping.
      else if (!rel_group) {
        rel_style = rel_parts["style"];
        Lightbox.imageArray.push([imageLink.href, title, alt, rel_style]);
      }

      // Handle grouped items.
      else {

        // Loop through anchors and add them to imageArray.
        for (i = 0; i < anchors.length; i++) {
          anchor = anchors[i];
          if (anchor.href && typeof(anchor.href) == "string" && $(anchor).attr('rel')) {
            var rel_data = Lightbox.parseRel(anchor);
            var anchor_title = (rel_data["title"] ? rel_data["title"] : anchor.title);
            img_alt = anchor.title;
            if (!img_alt) {
              var anchor_img = $(anchor).find("img");
              if (anchor_img && $(anchor_img).attr("alt")) {
                img_alt = $(anchor_img).attr("alt");
              }
              else {
                img_alt = title;
              }
            }
            if (rel_data["rel"] == rel) {
              if (rel_data["group"] == rel_group) {
                if (Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) {
                  rel_style = rel_data["style"];
                }
                Lightbox.imageArray.push([anchor.href, anchor_title, img_alt, rel_style]);
              }
            }
          }
        }

        // Remove duplicates.
        for (i = 0; i < Lightbox.imageArray.length; i++) {
          for (j = Lightbox.imageArray.length-1; j > i; j--) {
            if (Lightbox.imageArray[i][0] == Lightbox.imageArray[j][0]) {
              Lightbox.imageArray.splice(j,1);
            }
          }
        }
        while (Lightbox.imageArray[Lightbox.imageNum][0] != imageLink.href) {
          Lightbox.imageNum++;
        }
      }
    }

    if (Lightbox.isSlideshow && Lightbox.showPlayPause && Lightbox.isPaused) {
      $('#lightshowPlay').show();
      $('#lightshowPause').hide();
    }

    // Calculate top and left offset for the lightbox.
    var arrayPageScroll = Lightbox.getPageScroll();
    var lightboxTop = arrayPageScroll[1] + (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
    var lightboxLeft = arrayPageScroll[0];
    $('#frameContainer, #modalContainer, #lightboxImage').hide();
    $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
    $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();
    $('#outerImageContainer').css({'width': '250px', 'height': '250px'});
    $('#lightbox').css({
      'zIndex': '10500',
      'top': lightboxTop + 'px',
      'left': lightboxLeft + 'px'
    }).show();

    Lightbox.total = Lightbox.imageArray.length;
    Lightbox.changeData(Lightbox.imageNum);
  },

  // changeData()
  // Hide most elements and preload image in preparation for resizing image
  // container.
  changeData: function(imageNum, zoomIn) {

    if (Lightbox.inprogress === false) {
      if (Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) {
        if (imageNum >= Lightbox.total) imageNum = 0;
        if (imageNum < 0) imageNum = Lightbox.total - 1;
      }

      if (Lightbox.isSlideshow) {
        for (var i = 0; i < Lightbox.slideIdCount; i++) {
          window.clearTimeout(Lightbox.slideIdArray[i]);
        }
      }
      Lightbox.inprogress = true;
      Lightbox.activeImage = imageNum;

      if (Lightbox.disableResize && !Lightbox.isSlideshow) {
        zoomIn = true;
      }
      Lightbox.isZoomedIn = zoomIn;


      // Hide elements during transition.
      $('#loading').css({'zIndex': '10500'}).show();
      if (!Lightbox.alternative_layout) {
        $('#imageContainer').hide();
      }
      $('#frameContainer, #modalContainer, #lightboxImage').hide();
      $('#hoverNav, #prevLink, #nextLink, #frameHoverNav, #framePrevLink, #frameNextLink').hide();
      $('#imageDataContainer, #numberDisplay, #bottomNavZoom, #bottomNavZoomOut').hide();

      // Preload image content, but not iframe pages.
      if (!Lightbox.isLightframe && !Lightbox.isVideo && !Lightbox.isModal) {
        $("#lightbox #imageDataContainer").removeClass('lightbox2-alt-layout-data');
        imgPreloader = new Image();
        imgPreloader.onerror = function() { Lightbox.imgNodeLoadingError(this); };

        imgPreloader.onload = function() {
          var photo = document.getElementById('lightboxImage');
          photo.src = Lightbox.imageArray[Lightbox.activeImage][0];
          photo.alt = Lightbox.imageArray[Lightbox.activeImage][2];

          var imageWidth = imgPreloader.width;
          var imageHeight = imgPreloader.height;

          // Resize code.
          var arrayPageSize = Lightbox.getPageSize();
          var targ = { w:arrayPageSize[2] - (Lightbox.borderSize * 2), h:arrayPageSize[3] - (Lightbox.borderSize * 6) - (Lightbox.infoHeight * 4) - (arrayPageSize[3] / 10) };
          var orig = { w:imgPreloader.width, h:imgPreloader.height };

          // Image is very large, so show a smaller version of the larger image
          // with zoom button.
          if (zoomIn !== true) {
            var ratio = 1.0; // Shrink image with the same aspect.
            $('#bottomNavZoomOut, #bottomNavZoom').hide();
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              ratio = ((targ.w / orig.w) < (targ.h / orig.h)) ? targ.w / orig.w : targ.h / orig.h;
              if (!Lightbox.disableZoom && !Lightbox.isSlideshow) {
                $('#bottomNavZoom').css({'zIndex': '10500'}).show();
              }
            }

            imageWidth  = Math.floor(orig.w * ratio);
            imageHeight = Math.floor(orig.h * ratio);
          }

          else {
            $('#bottomNavZoom').hide();
            // Only display zoom out button if the image is zoomed in already.
            if ((orig.w >= targ.w || orig.h >= targ.h) && orig.h && orig.w) {
              // Only display zoom out button if not a slideshow and if the
              // buttons aren't disabled.
              if (!Lightbox.disableResize && Lightbox.isSlideshow === false && !Lightbox.disableZoom) {
                $('#bottomNavZoomOut').css({'zIndex': '10500'}).show();
              }
            }
          }

          photo.style.width = (imageWidth) + 'px';
          photo.style.height = (imageHeight) + 'px';
          Lightbox.resizeContainer(imageWidth, imageHeight);

          // Clear onLoad, IE behaves irratically with animated gifs otherwise.
          imgPreloader.onload = function() {};
        };

        imgPreloader.src = Lightbox.imageArray[Lightbox.activeImage][0];
        imgPreloader.alt = Lightbox.imageArray[Lightbox.activeImage][2];
      }

      // Set up frame size, etc.
      else if (Lightbox.isLightframe) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var src = Lightbox.imageArray[Lightbox.activeImage][0];
        $('#frameContainer').html('<iframe id="lightboxFrame" style="display: none;" src="'+src+'"></iframe>');

        // Enable swf support in Gecko browsers.
        if ($.browser.mozilla && src.indexOf('.swf') != -1) {
          setTimeout(function () {
            document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
          }, 1000);
        }

        if (!Lightbox.iframe_border) {
          $('#lightboxFrame').css({'border': 'none'});
          $('#lightboxFrame').attr('frameborder', '0');
        }
        var iframe = document.getElementById('lightboxFrame');
        var iframeStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        iframe = Lightbox.setStyles(iframe, iframeStyles);
        Lightbox.resizeContainer(parseInt(iframe.width, 10), parseInt(iframe.height, 10));
      }
      else if (Lightbox.isVideo || Lightbox.isModal) {
        $("#lightbox #imageDataContainer").addClass('lightbox2-alt-layout-data');
        var container = document.getElementById('modalContainer');
        var modalStyles = Lightbox.imageArray[Lightbox.activeImage][3];
        container = Lightbox.setStyles(container, modalStyles);
        if (Lightbox.isVideo) {
          Lightbox.modalHeight =  parseInt(container.height, 10) - 10;
          Lightbox.modalWidth =  parseInt(container.width, 10) - 10;
          Lightvideo.startVideo(Lightbox.imageArray[Lightbox.activeImage][0]);
        }
        Lightbox.resizeContainer(parseInt(container.width, 10), parseInt(container.height, 10));
      }
    }
  },

  // imgNodeLoadingError()
  imgNodeLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    var original_image = Lightbox.imageArray[Lightbox.activeImage][0];
    if (s.display_image_size !== "") {
      original_image = original_image.replace(new RegExp("."+s.display_image_size), "");
    }
    Lightbox.imageArray[Lightbox.activeImage][0] = original_image;
    image.onerror = function() { Lightbox.imgLoadingError(image); };
    image.src = original_image;
  },

  // imgLoadingError()
  imgLoadingError: function(image) {
    var s = Drupal.settings.lightbox2;
    Lightbox.imageArray[Lightbox.activeImage][0] = s.default_image;
    image.src = s.default_image;
  },

  // resizeContainer()
  resizeContainer: function(imgWidth, imgHeight) {

    imgWidth = (imgWidth < Lightbox.minWidth ? Lightbox.minWidth : imgWidth);

    this.widthCurrent = $('#outerImageContainer').width();
    this.heightCurrent = $('#outerImageContainer').height();

    var widthNew = (imgWidth  + (Lightbox.borderSize * 2));
    var heightNew = (imgHeight  + (Lightbox.borderSize * 2));

    // Scalars based on change from old to new.
    this.xScale = ( widthNew / this.widthCurrent) * 100;
    this.yScale = ( heightNew / this.heightCurrent) * 100;

    // Calculate size difference between new and old image, and resize if
    // necessary.
    wDiff = this.widthCurrent - widthNew;
    hDiff = this.heightCurrent - heightNew;

    $('#modalContainer').css({'width': imgWidth, 'height': imgHeight});
    // Detect animation sequence.
    if (Lightbox.resizeSequence) {
      var animate1 = {width: widthNew};
      var animate2 = {height: heightNew};
      if (Lightbox.resizeSequence == 2) {
        animate1 = {height: heightNew};
        animate2 = {width: widthNew};
      }
      $('#outerImageContainer').animate(animate1, Lightbox.resizeSpeed).animate(animate2, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }
    // Simultaneous.
    else {
      $('#outerImageContainer').animate({'width': widthNew, 'height': heightNew}, Lightbox.resizeSpeed, 'linear', function() { Lightbox.showData(); });
    }

    // If new and old image are same size and no scaling transition is necessary
    // do a quick pause to prevent image flicker.
    if ((hDiff === 0) && (wDiff === 0)) {
      if ($.browser.msie) {
        Lightbox.pause(250);
      }
      else {
        Lightbox.pause(100);
      }
    }

    var s = Drupal.settings.lightbox2;
    if (!s.use_alt_layout) {
      $('#prevLink, #nextLink').css({'height': imgHeight + 'px'});
    }
    $('#imageDataContainer').css({'width': widthNew + 'px'});
  },

  // showData()
  // Display image and begin preloading neighbors.
  showData: function() {
    $('#loading').hide();

    if (Lightbox.isLightframe || Lightbox.isVideo || Lightbox.isModal) {
      Lightbox.updateDetails();
      if (Lightbox.isLightframe) {
        $('#frameContainer').show();
        if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
          $('#lightboxFrame').css({'zIndex': '10500'}).show();
        }
        else {
          $('#lightboxFrame').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
        }
      }
      else {
        if (Lightbox.isVideo) {
          $("#modalContainer").html(Lightbox.modalHTML).click(function(){return false;}).css('zIndex', '10500').show();
        }
        else {
          var src = unescape(Lightbox.imageArray[Lightbox.activeImage][0]);
          if (Lightbox.imageArray[Lightbox.activeImage][4]) {
            $(src).appendTo("#modalContainer");
            $('#modalContainer').css({'zIndex': '10500'}).show();
          }
          else {
            // Use a callback to show the new image, otherwise you get flicker.
            $("#modalContainer").hide().load(src, function () {$('#modalContainer').css({'zIndex': '10500'}).show();});
          }
          $('#modalContainer').unbind('click');
        }
        // This might be needed in the Lightframe section above.
        //$('#modalContainer').css({'zIndex': '10500'}).show();
      }
    }

    // Handle display of image content.
    else {
      $('#imageContainer').show();
      if ($.browser.safari || Lightbox.fadeInSpeed === 0) {
        $('#lightboxImage').css({'zIndex': '10500'}).show();
      }
      else {
        $('#lightboxImage').css({'zIndex': '10500'}).fadeIn(Lightbox.fadeInSpeed);
      }
      Lightbox.updateDetails();
      this.preloadNeighborImages();
    }
    Lightbox.inprogress = false;

    // Slideshow specific stuff.
    if (Lightbox.isSlideshow) {
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        if (Lightbox.autoExit) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.end('slideshow');}, Lightbox.slideInterval);
        }
      }
      else {
        if (!Lightbox.isPaused && Lightbox.total > 1) {
          Lightbox.slideIdArray[Lightbox.slideIdCount++] = setTimeout(function () {Lightbox.changeData(Lightbox.activeImage + 1);}, Lightbox.slideInterval);
        }
      }
      if (Lightbox.showPlayPause && Lightbox.total > 1 && !Lightbox.isPaused) {
        $('#lightshowPause').show();
        $('#lightshowPlay').hide();
      }
      else if (Lightbox.showPlayPause && Lightbox.total > 1) {
        $('#lightshowPause').hide();
        $('#lightshowPlay').show();
      }
    }

    // Adjust the page overlay size.
    var arrayPageSize = Lightbox.getPageSize();
    var arrayPageScroll = Lightbox.getPageScroll();
    var pageHeight = arrayPageSize[1];
    if (Lightbox.isZoomedIn && arrayPageSize[1] > arrayPageSize[3]) {
      var lightboxTop = (Lightbox.topPosition == '' ? (arrayPageSize[3] / 10) : Lightbox.topPosition) * 1;
      pageHeight = pageHeight + arrayPageScroll[1] + lightboxTop;
    }
    $('#lightbox2-overlay').css({'height': pageHeight + 'px', 'width': arrayPageSize[0] + 'px'});

    // Gecko browsers (e.g. Firefox, SeaMonkey, etc) don't handle pdfs as
    // expected.
    if ($.browser.mozilla) {
      if (Lightbox.imageArray[Lightbox.activeImage][0].indexOf(".pdf") != -1) {
        setTimeout(function () {
          document.getElementById("lightboxFrame").src = Lightbox.imageArray[Lightbox.activeImage][0];
        }, 1000);
      }
    }
  },

  // updateDetails()
  // Display caption, image number, and bottom nav.
  updateDetails: function() {

    $("#imageDataContainer").hide();

    var s = Drupal.settings.lightbox2;

    if (s.show_caption) {
      var caption = Lightbox.filterXSS(Lightbox.imageArray[Lightbox.activeImage][1]);
      if (!caption) caption = '';
      $('#caption').html(caption).css({'zIndex': '10500'}).show();
    }

    // If image is part of set display 'Image x of x'.
    var numberDisplay = null;
    if (s.image_count && Lightbox.total > 1) {
      var currentImage = Lightbox.activeImage + 1;
      if (!Lightbox.isLightframe && !Lightbox.isModal && !Lightbox.isVideo) {
        numberDisplay = s.image_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else if (Lightbox.isVideo) {
        numberDisplay = s.video_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      else {
        numberDisplay = s.page_count.replace(/\!current/, currentImage).replace(/\!total/, Lightbox.total);
      }
      $('#numberDisplay').html(numberDisplay).css({'zIndex': '10500'}).show();
    }
    else {
      $('#numberDisplay').hide();
    }

    $("#imageDataContainer").hide().slideDown(Lightbox.slideDownSpeed, function() {
      $("#bottomNav").show();
    });
    if (Lightbox.rtl == 1) {
      $("#bottomNav").css({'float': 'left'});
    }
    Lightbox.updateNav();
  },

  // updateNav()
  // Display appropriate previous and next hover navigation.
  updateNav: function() {

    $('#hoverNav').css({'zIndex': '10500'}).show();
    var prevLink = '#prevLink';
    var nextLink = '#nextLink';

    // Slideshow is separated as we need to show play / pause button.
    if (Lightbox.isSlideshow) {
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage !== 0) {
        $(prevLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnPrevClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopSlides) || Lightbox.activeImage != (Lightbox.total - 1)) {
        $(nextLink).css({'zIndex': '10500'}).show().click(function() {
          if (Lightbox.pauseOnNextClick) {
            Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
          }
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // All other types of content.
    else {

      if ((Lightbox.isLightframe || Lightbox.isModal || Lightbox.isVideo) && !Lightbox.alternative_layout) {
        $('#frameHoverNav').css({'zIndex': '10500'}).show();
        $('#hoverNav').css({'zIndex': '10500'}).hide();
        prevLink = '#framePrevLink';
        nextLink = '#frameNextLink';
      }

      // If not first image in set, display prev image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage !== 0) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(prevLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage - 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(prevLink).hide();
      }

      // If not last image in set, display next image button.
      if ((Lightbox.total > 1 && Lightbox.loopItems) || Lightbox.activeImage != (Lightbox.total - 1)) {
        // Unbind any other click handlers, otherwise this adds a new click handler
        // each time the arrow is clicked.
        $(nextLink).css({'zIndex': '10500'}).show().unbind().click(function() {
          Lightbox.changeData(Lightbox.activeImage + 1); return false;
        });
      }
      // Safari browsers need to have hide() called again.
      else {
        $(nextLink).hide();
      }
    }

    // Don't enable keyboard shortcuts so forms will work.
    if (!Lightbox.isModal) {
      this.enableKeyboardNav();
    }
  },


  // enableKeyboardNav()
  enableKeyboardNav: function() {
    $(document).bind("keydown", this.keyboardAction);
  },

  // disableKeyboardNav()
  disableKeyboardNav: function() {
    $(document).unbind("keydown", this.keyboardAction);
  },

  // keyboardAction()
  keyboardAction: function(e) {
    if (e === null) { // IE.
      keycode = event.keyCode;
      escapeKey = 27;
    }
    else { // Mozilla.
      keycode = e.keyCode;
      escapeKey = e.DOM_VK_ESCAPE;
    }

    key = String.fromCharCode(keycode).toLowerCase();

    // Close lightbox.
    if (Lightbox.checkKey(Lightbox.keysClose, key, keycode)) {
      Lightbox.end('forceClose');
    }
    // Display previous image (p, <-).
    else if (Lightbox.checkKey(Lightbox.keysPrevious, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage !== 0) {
        Lightbox.changeData(Lightbox.activeImage - 1);
      }

    }
    // Display next image (n, ->).
    else if (Lightbox.checkKey(Lightbox.keysNext, key, keycode)) {
      if ((Lightbox.total > 1 && ((Lightbox.isSlideshow && Lightbox.loopSlides) || (!Lightbox.isSlideshow && Lightbox.loopItems))) || Lightbox.activeImage != (Lightbox.total - 1)) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    // Zoom in.
    else if (Lightbox.checkKey(Lightbox.keysZoom, key, keycode) && !Lightbox.disableResize && !Lightbox.disableZoom && !Lightbox.isSlideshow && !Lightbox.isLightframe) {
      if (Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, false);
      }
      else if (!Lightbox.isZoomedIn) {
        Lightbox.changeData(Lightbox.activeImage, true);
      }
      return false;
    }
    // Toggle play / pause (space).
    else if (Lightbox.checkKey(Lightbox.keysPlayPause, key, keycode) && Lightbox.isSlideshow) {

      if (Lightbox.isPaused) {
        Lightbox.togglePlayPause("lightshowPlay", "lightshowPause");
      }
      else {
        Lightbox.togglePlayPause("lightshowPause", "lightshowPlay");
      }
      return false;
    }
  },

  preloadNeighborImages: function() {

    if ((Lightbox.total - 1) > Lightbox.activeImage) {
      preloadNextImage = new Image();
      preloadNextImage.src = Lightbox.imageArray[Lightbox.activeImage + 1][0];
    }
    if (Lightbox.activeImage > 0) {
      preloadPrevImage = new Image();
      preloadPrevImage.src = Lightbox.imageArray[Lightbox.activeImage - 1][0];
    }

  },

  end: function(caller) {
    var closeClick = (caller == 'slideshow' ? false : true);
    if (Lightbox.isSlideshow && Lightbox.isPaused && !closeClick) {
      return;
    }
    // To prevent double clicks on navigation links.
    if (Lightbox.inprogress === true && caller != 'forceClose') {
      return;
    }
    Lightbox.disableKeyboardNav();
    $('#lightbox').hide();
    $("#lightbox2-overlay").fadeOut();
    Lightbox.isPaused = true;
    Lightbox.inprogress = false;
    // Replaces calls to showSelectBoxes() and showFlash() in original
    // lightbox2.
    Lightbox.toggleSelectsFlash('visible');
    if (Lightbox.isSlideshow) {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
      $('#lightshowPause, #lightshowPlay').hide();
    }
    else if (Lightbox.isLightframe) {
      $('#frameContainer').empty().hide();
    }
    else if (Lightbox.isVideo || Lightbox.isModal) {
      if (!Lightbox.auto_modal) {
        $('#modalContainer').hide().html("");
      }
      Lightbox.auto_modal = false;
    }
  },


  // getPageScroll()
  // Returns array with x,y page scroll values.
  // Core code from - quirksmode.com.
  getPageScroll : function() {

    var xScroll, yScroll;

    if (self.pageYOffset || self.pageXOffset) {
      yScroll = self.pageYOffset;
      xScroll = self.pageXOffset;
    }
    else if (document.documentElement && (document.documentElement.scrollTop || document.documentElement.scrollLeft)) {  // Explorer 6 Strict.
      yScroll = document.documentElement.scrollTop;
      xScroll = document.documentElement.scrollLeft;
    }
    else if (document.body) {// All other Explorers.
      yScroll = document.body.scrollTop;
      xScroll = document.body.scrollLeft;
    }

    arrayPageScroll = [xScroll,yScroll];
    return arrayPageScroll;
  },

  // getPageSize()
  // Returns array with page width, height and window width, height.
  // Core code from - quirksmode.com.
  // Edit for Firefox by pHaez.

  getPageSize : function() {

    var xScroll, yScroll;

    if (window.innerHeight && window.scrollMaxY) {
      xScroll = window.innerWidth + window.scrollMaxX;
      yScroll = window.innerHeight + window.scrollMaxY;
    }
    else if (document.body.scrollHeight > document.body.offsetHeight) { // All but Explorer Mac.
      xScroll = document.body.scrollWidth;
      yScroll = document.body.scrollHeight;
    }
    else { // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari.
      xScroll = document.body.offsetWidth;
      yScroll = document.body.offsetHeight;
    }

    var windowWidth, windowHeight;

    if (self.innerHeight) { // All except Explorer.
      if (document.documentElement.clientWidth) {
        windowWidth = document.documentElement.clientWidth;
      }
      else {
        windowWidth = self.innerWidth;
      }
      windowHeight = self.innerHeight;
    }
    else if (document.documentElement && document.documentElement.clientHeight) { // Explorer 6 Strict Mode.
      windowWidth = document.documentElement.clientWidth;
      windowHeight = document.documentElement.clientHeight;
    }
    else if (document.body) { // Other Explorers.
      windowWidth = document.body.clientWidth;
      windowHeight = document.body.clientHeight;
    }
    // For small pages with total height less than height of the viewport.
    if (yScroll < windowHeight) {
      pageHeight = windowHeight;
    }
    else {
      pageHeight = yScroll;
    }
    // For small pages with total width less than width of the viewport.
    if (xScroll < windowWidth) {
      pageWidth = xScroll;
    }
    else {
      pageWidth = windowWidth;
    }
    arrayPageSize = new Array(pageWidth,pageHeight,windowWidth,windowHeight);
    return arrayPageSize;
  },


  // pause(numberMillis)
  pause : function(ms) {
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while (curDate - date < ms);
  },


  // toggleSelectsFlash()
  // Hide / unhide select lists and flash objects as they appear above the
  // lightbox in some browsers.
  toggleSelectsFlash: function (state) {
    if (state == 'visible') {
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").show();
    }
    else if (state == 'hide') {
      $("select:visible, embed:visible, object:visible").not('#lightboxAutoModal select, #lightboxAutoModal embed, #lightboxAutoModal object').addClass("lightbox_hidden");
      $("select.lightbox_hidden, embed.lightbox_hidden, object.lightbox_hidden").hide();
    }
  },


  // parseRel()
  parseRel: function (link) {
    var parts = [];
    parts["rel"] = parts["title"] = parts["group"] = parts["style"] = parts["flashvars"] = null;
    if (!$(link).attr('rel')) return parts;
    parts["rel"] = $(link).attr('rel').match(/\w+/)[0];

    if ($(link).attr('rel').match(/\[(.*)\]/)) {
      var info = $(link).attr('rel').match(/\[(.*?)\]/)[1].split('|');
      parts["group"] = info[0];
      parts["style"] = info[1];
      if (parts["style"] != undefined && parts["style"].match(/flashvars:\s?(.*?);/)) {
        parts["flashvars"] = parts["style"].match(/flashvars:\s?(.*?);/)[1];
      }
    }
    if ($(link).attr('rel').match(/\[.*\]\[(.*)\]/)) {
      parts["title"] = $(link).attr('rel').match(/\[.*\]\[(.*)\]/)[1];
    }
    return parts;
  },

  // setStyles()
  setStyles: function(item, styles) {
    item.width = Lightbox.iframe_width;
    item.height = Lightbox.iframe_height;
    item.scrolling = "auto";

    if (!styles) return item;
    var stylesArray = styles.split(';');
    for (var i = 0; i< stylesArray.length; i++) {
      if (stylesArray[i].indexOf('width:') >= 0) {
        var w = stylesArray[i].replace('width:', '');
        item.width = jQuery.trim(w);
      }
      else if (stylesArray[i].indexOf('height:') >= 0) {
        var h = stylesArray[i].replace('height:', '');
        item.height = jQuery.trim(h);
      }
      else if (stylesArray[i].indexOf('scrolling:') >= 0) {
        var scrolling = stylesArray[i].replace('scrolling:', '');
        item.scrolling = jQuery.trim(scrolling);
      }
      else if (stylesArray[i].indexOf('overflow:') >= 0) {
        var overflow = stylesArray[i].replace('overflow:', '');
        item.overflow = jQuery.trim(overflow);
      }
    }
    return item;
  },


  // togglePlayPause()
  // Hide the pause / play button as appropriate.  If pausing the slideshow also
  // clear the timers, otherwise move onto the next image.
  togglePlayPause: function(hideId, showId) {
    if (Lightbox.isSlideshow && hideId == "lightshowPause") {
      for (var i = 0; i < Lightbox.slideIdCount; i++) {
        window.clearTimeout(Lightbox.slideIdArray[i]);
      }
    }
    $('#' + hideId).hide();
    $('#' + showId).show();

    if (hideId == "lightshowPlay") {
      Lightbox.isPaused = false;
      if (!Lightbox.loopSlides && Lightbox.activeImage == (Lightbox.total - 1)) {
        Lightbox.end();
      }
      else if (Lightbox.total > 1) {
        Lightbox.changeData(Lightbox.activeImage + 1);
      }
    }
    else {
      Lightbox.isPaused = true;
    }
  },

  triggerLightbox: function (rel_type, rel_group) {
    if (rel_type.length) {
      if (rel_group && rel_group.length) {
        $("a[rel^='" + rel_type +"\[" + rel_group + "\]'], area[rel^='" + rel_type +"\[" + rel_group + "\]']").eq(0).trigger("click");
      }
      else {
        $("a[rel^='" + rel_type +"'], area[rel^='" + rel_type +"']").eq(0).trigger("click");
      }
    }
  },

  detectMacFF2: function() {
    var ua = navigator.userAgent.toLowerCase();
    if (/firefox[\/\s](\d+\.\d+)/.test(ua)) {
      var ffversion = new Number(RegExp.$1);
      if (ffversion < 3 && ua.indexOf('mac') != -1) {
        return true;
      }
    }
    return false;
  },

  checkKey: function(keys, key, code) {
    return (jQuery.inArray(key, keys) != -1 || jQuery.inArray(String(code), keys) != -1);
  },

  filterXSS: function(str, allowed_tags) {
    var output = "";
    $.ajax({
      url: Drupal.settings.basePath + 'system/lightbox2/filter-xss',
      data: {
        'string' : str,
        'allowed_tags' : allowed_tags
      },
      type: "POST",
      async: false,
      dataType:  "json",
      success: function(data) {
        output = data;
      }
    });
    return output;
  }

};

// Initialize the lightbox.
Drupal.behaviors.initLightbox = function (context) {
  $('body:not(.lightbox-processed)', context).addClass('lightbox-processed').each(function() {
    Lightbox.initialize();
    return false; // Break the each loop.
  });

  // Attach lightbox to any links with lightbox rels.
  Lightbox.initList(context);
  $('#lightboxAutoModal', context).triggerHandler('click');
};

;


$(document).ready(function() {
   $('#select-all').click(function() {
        var cases = $('#form-available-contents').find(':checkbox');
        if(this.checked){
            cases.attr('checked', true);
        }else{
            cases.attr('checked', false);
        }
    });
});;



(function($) {

	$.atfInterstitiel = function(box, options) {
		var options = options || {};

		options.timeLimit = typeof (options.timeLimit) != 'undefined' ? options.timeLimit
				: 5000;
		options.linkPopup = typeof (options.linkPopup) != 'undefined' ? options.linkPopup
				: true;

		options.color = typeof (options.color) != 'undefined' ? options.color
				: '#000000';

		options.target = typeof (options.target) != 'undefined' ? options.target
				: '';

		options.msg = typeof (options.msg) != 'undefined' ? options.msg
				: 'Continue to Site';

		var isIE6 = $.browser.msie && $.browser.version < 7 ? true : false;

		if (options.disableIE6 && isIE6)
			return false;

		var $document = $(document);
		var $window = $(window);
		var $box;

		init(box);

		// init( obj/string box ) : sets up the parallax and associated events

		function init(box) {
			// if string append image as background, otherwise define as jQuery
			// object
			if (typeof (box) == 'string') {
				$box = appendBackground(box);
			} else {
			}
		}

		function appendBackground(theSrc) {

			var divCssBg = {
				display : 'block',
				top : 0,
				left : 0,
				width : '100%',
				height : '100%',
				zIndex : 9990,
				position : 'fixed',
				'text-align' : 'center'
			// ,'background-color':options.color
			};

			var divCssCtn = {
				'display' : 'table',
				'width' : '100%',
				'height' : '100%',
				position : 'fixed',
				zIndex : 91000

			// display : 'block',
			// top : 0,
			// left : 0,
			// width : '100%',
			// height : '100%',
			// zIndex : 1000,
			// position : 'fixed',
			// 'text-align' : 'center',
			// 'vertical-align' : 'middle'
			// // ,'background-color':options.color
			};

			var divCssHelper = {
				'text-align' : 'center',
				'vertical-align' : 'middle',
				'display' : 'table-cell'

			// display : 'block',
			// '#position' : 'absolute',
			// // a variation of an "lte ie7" hack
			// '#top' : '50%',
			// 'display' : 'table-cell',
			// 'vertical-align' : 'middle'

			};

			var bgCss = {
			// // display : 'block',
			// // top : 0,
			// // left : 0,
			// margin : '0 auto',
			// // width : options.bgWidth,
			// // height : options.bgHeight,
			// // zIndex : 1010
			// '#position' : 'relative',
			// '#top' : '-50%'
			};

			var objCss = {
				'cursor' : 'pointer'
			};

			// bgCss.position = isIE6 ? 'absolute' : 'fixed';
			// divCss.position = isIE6 ? 'absolute' : 'fixed';

			if (options.bgRepeat) {

				var $obj = options.appendInFront ? $('<div></div>').appendTo($('body'))
						: $('<div></div>').prependTo($('body'));

				bgCss.backgroundRepeat = 'repeat';
				bgCss.backgroundImage = 'url("' + theSrc + '")';

			} else {
				var $obj;
				var $div;
				if (options.appendInFront) {
					$div = $('<div></div>').appendTo($('body'));
				} else {
					$divbg = $('<div></div>').prependTo($('body'));
					$divctn = $('<div></div>').prependTo($('body'));
					$divhlp = $('<div></div>').prependTo($divctn);
				}

				$obj = $('<img />').appendTo($divhlp);
				$objspan = $('<div />').appendTo($divhlp);
				$objspana = $('<a />').appendTo($divhlp);
				$objspana.bind("click", function(event) {
					event.preventDefault();
					event.stopPropagation();
					$divbg.hide();
					$divctn.hide();
					return false;
				});
				$objspana.attr("href", "#");
				$objspana.attr("class", "interstitielcloser");
				$objspana.html(options.msg);
				$obj.attr('class', 'atfinterstitiel');
				$obj.attr('src', theSrc);
				$obj.bind("click", function(event) {
					event.preventDefault();
					event.stopPropagation();
					$divbg.hide();
					$divctn.hide();
					if (options.linkPopup) {
						window.open(options.target);
					} else {
						window.location = options.target;
					}
					return false;
				});
				$obj.css(objCss);
				setTimeout(function() {
					$divbg.hide();
					$divctn.hide();
				}, options.timeLimit);

			}

			$divbg.css(divCssBg);
			$divbg.css("background-color", options.color);
			$divbg.fadeTo('slow', 0.9);

			$divctn.css(divCssCtn);
			$divhlp.css(divCssHelper);

			backgroundMode = true;

			return $div;
		}

	};

	$.fn.atfInterstitiel = function(options) {

		this.each(function() {
			new $.atfInterstitiel(this, options);
		});

		return this;
	};

})(jQuery);



;
/**
 * jQuery Scrolling Parallax v0.1
 * http://jonraasch.com/blog/scrolling-parallax-jquery-plugin
 * 
 * Copyright (c) 2009 Jon Raasch (http://jonraasch.com/) Licensed under the
 * FreeBSD License (See terms below)
 * 
 * @author Jon Raasch
 * 
 * @projectDescription jQuery plugin to create a parallax effect when the page
 *                     is scrolled.
 * 
 * @version 0.1.0
 * 
 * @requires jquery.js (v 1.3.2 minimum)
 * 
 * 
 * TERMS OF USE - jQuery Scrolling Parallax Open source under the FreeBSD
 * License.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. 2. Redistributions in
 * binary form must reproduce the above copyright notice, this list of
 * conditions and the following disclaimer in the documentation and/or other
 * materials provided with the distribution.
 * 
 * THIS SOFTWARE IS PROVIDED BY JON RAASCH ``AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL JON RAASCH OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 * OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 * 
 * The views and conclusions contained in the software and documentation are
 * those of the authors and should not be interpreted as representing official
 * policies, either expressed or implied, of Jon Raasch, who is the man.
 * 
 * 
 * FOR USAGE INSTRUCTIONS SEE THE DOCUMENATION AT:
 * http://dev.jonraasch.com/scrolling-parallax/documentation
 * 
 * 
 */

(function($) {

	$.scrollingParallax = function(box, options) {
		var options = options || {};

		// vertical options

		options.enableVertical = typeof (options.enableVertical) != 'undefined' ? options.enableVertical
				: true;

		if (options.enableVertical) {
			options.staticSpeed = options.staticSpeed || false;
			options.staticScrollLimit = typeof (options.staticScrollLimit) != 'undefined' ? options.staticScrollLimit
					: true;

			options.loopIt = options.loopIt || false;

			options.reverseDirection = options.reverseDirection || false;
		}

		// horizontal options

		options.enableHorizontal = options.enableHorizontal || false;

		if (options.enableHorizontal) {
			options.staticSpeedX = options.staticSpeedX || false;
			options.staticScrollLimitX = typeof (options.staticScrollLimitX) != 'undefined' ? options.staticScrollLimitX
					: true;

			options.loopItX = options.loopItX || false;

			options.reverseDirectionX = options.reverseDirectionX || false;
		}

		// IE6 options

		options.disableIE6 = options.disableIE6 || false; // disables in IE6
		// altogether
		options.disableIE6Anim = typeof (options.disableIE6Anim) != 'undefined' ? options.disableIE6Anim
				: true; // disables
		// IE6
		// animation,
		// however
		// background
		// will
		// still
		// append

		// layout options

		options.bgWidth = options.bgWidth
				|| (options.enableHorizontal ? '150%' : '100%');
		options.bgHeight = options.bgHeight || '150%';

		options.bgRepeat = options.bgRepeat || false;

		options.appendInFront = options.appendInFront || false;

		options.parallaxHeight = options.parallaxHeight || false;
		options.parallaxWidth = options.parallaxWidth || false;

		var isIE6 = $.browser.msie && $.browser.version < 7 ? true : false;

		if (options.disableIE6 && isIE6)
			return false;

		var $document = $(document);
		var $window = $(window);
		var $box;

		var backgroundMode = false;

		if (options.enableVertical) {
			var boxHeight;
			var windowHeight;
			var docHeight;
			var parallaxRoom;
			var maxIE6Move = 0;
			var loopCount = 0;
			var startingPos = 0;
			var tooSmallMode = false;
			var oldMoveIt = null;
		}

		if (options.enableHorizontal) {
			var boxWidth;
			var windowWidth;
			var docWidth;
			var parallaxRoomX;
			var maxIE6MoveX = 0;
			var loopCountX = 0;
			var startingPosX = 0;
			var tooSmallModeX = false;
			var oldMoveItX = null;
		}

		init(box);

		// init( obj/string box ) : sets up the parallax and associated events

		function init(box) {
			// if string append image as background, otherwise define as jQuery
			// object
			if (typeof (box) == 'string')
				$box = appendBackground(box);
			else {
				$box = $(box);

				$box.css('position', isIE6 ? 'absolute' : 'fixed');

				if (options.enableVertical)
					startingPos = parseInt($box.css('top'));

				if (options.enableHorizontal)
					startingPosX = parseInt($box.css('left'));
			}

			if (options.disableIE6Anim && isIE6)
				return false;

			defineSizes();

			// if in background mode, and reverseDirection, then attch the
			// background to the opposite end to maximize scrolling room
			if (backgroundMode) {
				if (options.reverseDirection && options.enableVertical) {
					startingPos += -1 * parallaxRoom;
					$box.css('top', startingPos);
				}

				if (options.reverseDirectionX && options.enableHorizontal) {
					startingPosX += -1 * parallaxRoomX;
					$box.css('left', startingPosX);
				}
			}

			// attach scroll and resize events

			$window.scroll(function() {
				ani();
			});

			$window.resize(function() {
				defineSizes();
			});
		}

		// appendBackground( string theSrc ) : appends an image to the page as a
		// stretched background

		function appendBackground(theSrc) {

			var divCss = {
				display : 'block',
				top : 0,
				left : 0,
				width : options.bgWidth,
				height : options.bgHeight,
				zIndex : 0,
				position : 'fixed',
				'text-align' : 'center'
			};

			var bgCss = {
				display : 'block',
				top : 0,
				// left : 0,
				margin : '0 auto',
				// width : options.bgWidth,
				// height : options.bgHeight,
				zIndex : 0,
				'cursor' : 'progress'
			};

			// bgCss.position = isIE6 ? 'absolute' : 'fixed';
			divCss.position = isIE6 ? 'absolute' : 'fixed';

			if (options.bgRepeat) {

				var $obj = options.appendInFront ? $('<div></div>').appendTo($('body'))
						: $('<div></div>').prependTo($('body'));

				bgCss.backgroundRepeat = 'repeat';
				bgCss.backgroundImage = 'url("' + theSrc + '")';

			} else {

				// var $obj = options.appendInFront ? $('<img />').appendTo($('body'))
				// : $('<img />').prependTo($('body'));

				// var $obj = options.appendInFront ? $('<img />').appendTo($('body'))
				// : $('<img />').prependTo($('body'));
				var $obj;
				var $div;
				if (options.appendInFront) {
					$div = $('<div></div>').appendTo($('body'));
				} else {
					$div = $('<div></div>').prependTo($('body'));
				}
				$obj = $('<img />').appendTo($div);
				//

				$obj.attr('class', 'atfparallax');

				$obj.attr('src', theSrc);
				// $obj.bind('click',function() {alert("toto");});
			}

			$obj.css(bgCss);
			//$obj.bind("mouserover","");
			$div.css(divCss);

			backgroundMode = true;

			return $div;
		}

		// defineSizes() : sets up various constants used by the app - must be
		// set on page load and on screen resize

		function defineSizes() {

			// define vertical vars

			if (options.enableVertical) {
				boxHeight = $box.height();
				windowHeight = $window.height();
				docHeight = $document.height();

				parallaxRoom = (options.parallaxHeight || boxHeight) - windowHeight;

				// if parallax object is smaller than window size
				if (parallaxRoom < 0) {
					if (options.staticSpeed)
						parallaxRoom = windowHeight - boxHeight;
					else
						parallaxRoom = options.reverseDirection ? windowHeight
								- startingPos - boxHeight : startingPos;

					tooSmallMode = true;
				}

				if (isIE6 && !maxIE6Move)
					maxIE6Move = -1 * (docHeight - boxHeight);

				if (options.loopIt)
					loopCount = parseInt($document.scrollTop()
							/ (tooSmallMode ? windowHeight : boxHeight));
			}

			// define horizontal vars

			if (options.enableHorizontal) {
				boxWidth = $box.width();
				windowWidth = $window.width();
				docWidth = $document.width();

				parallaxRoomX = (options.parallaxWidth || boxWidth) - windowWidth;

				// if parallax object is smaller than window size
				if (parallaxRoomX < 0) {
					parallaxRoomX = options.staticSpeedX ? windowWidth - boxWidth
							: options.reverseDirectionX ? windowWidth - startingPosX
									- boxWidth : startingPosX;

					tooSmallModeX = true;
				}

				if (isIE6 && !maxIE6MoveX)
					maxIE6MoveX = -1 * (docWidth - boxWidth);

				if (options.loopItX)
					loopCountX = parseInt($document.scrollLeft()
							/ (tooSmallModeX ? windowWidth : boxWidth));
			}

			// make any changes
			ani();
		}

		// ani() : performs the animation of the object

		function ani() {

			// dont let multiple animations queue up
			$box.queue([]);

			var theCss = {};

			// vertical
			if (options.enableVertical) {

				var moveIt = calculateMove(true);

				theCss.top = moveIt;
			}

			// horizontal
			if (options.enableHorizontal) {

				var moveItX = calculateMove(false);

				theCss.left = moveItX;
			}

			// if large move animate in FF, safari and opera for smoother
			// transition
			if (!$.browser.msie
					&& (Math.abs(oldMoveIt - moveIt) > 100 || Math.abs(oldMoveItX
							- moveItX) > 100))
				$box.animate(theCss, 30);
			else
				$box.css(theCss);

			oldMoveIt = moveIt;
			oldMoveItX = moveItX;

		}

		// calculateMove( boolean vertical ) : determines amount to move whether
		// vertically or horizontally

		function calculateMove(vertical) {
			// establish variables, this is basically a switch between vertical
			// and horizontal modes
			if (vertical) {
				var offset = $document.scrollTop();
				var docSize = docHeight;
				var windowSize = windowHeight;
				var boxSize = boxHeight;

				var parallaxRoom2 = parallaxRoom;

				var loopCount2 = loopCount;
				var startingPos2 = startingPos;
				var parallaxRoom2 = parallaxRoom;
				var tooSmallMode2 = tooSmallMode;
				var maxIE6Move2 = maxIE6Move;

				var opts = {
					reverseDirection : options.reverseDirection,
					staticSpeed : options.staticSpeed,
					loopIt : options.loopIt,
					staticScrollLimit : options.staticScrollLimit
				}
			} else {
				var offset = $document.scrollLeft();
				var docSize = docWidth;
				var windowSize = windowWidth;
				var boxSize = boxWidth;

				var loopCount2 = loopCountX;
				var startingPos2 = startingPosX;
				var parallaxRoom2 = parallaxRoomX;
				var tooSmallMode2 = tooSmallModeX;
				var maxIE6Move2 = maxIE6MoveX;

				var opts = {
					reverseDirection : options.reverseDirectionX,
					staticSpeed : options.staticSpeedX,
					loopIt : options.loopItX,
					staticScrollLimit : options.staticScrollLimitX
				}
			}

			/** * get move amount - static speed ** */

			if (opts.staticSpeed) {
				var move = offset * opts.staticSpeed;

				// account for number of loops
				move -= parallaxRoom2 * (loopCount2);
			}

			/** * get move amount - auto speed ** */

			else {
				// determine percentage of page that has been scrolled down
				var offsetPercent = offset / (docSize - windowSize);

				/*
				 * var moveIt = ( $.browser.msie && $.browser.version < 7 ) ? -1 * (
				 * offsetParent * parallaxRoom + offsetTop ) : -1 * offsetPercent *
				 * parallaxRoom;
				 */

				var move = offsetPercent * parallaxRoom2;
			}

			// reverse direction
			if (!opts.reverseDirection)
				move *= -1;

			// incorporate starting position
			move += startingPos2;

			// if static speed set, make sure move is within bounds
			if (opts.staticSpeed)
				move = checkMove(move, vertical, opts, parallaxRoom2, tooSmallMode2);

			// if in tooSmallMode and looping, add difference of window height
			// and box height, since the box needs to be conceptualized as that
			// much taller ( otherwise it would loop in place rather than over
			// the screen )
			if (tooSmallMode2 && opts.staticSpeed && opts.loopIt)
				move += windowSize - boxSize;

			if (isIE6) {
				// IE6 fix for fixed positioning
				move += offset;
				move = Math.max(parseInt(move), parseInt(maxIE6Move2));
			}

			return move;
		}

		// checkMove( int moveIt ) : checks to ensure that move amount does not
		// exceed established bounds

		function checkMove(move, vertical, opts, parallaxRoom, tooSmallMode) {

			// if overflow limited
			if (!opts.loopIt) {
				if (opts.staticScrollLimit) {
					if (tooSmallMode) {
						if (move < 0)
							move = 0;
						if (move > parallaxRoom)
							move = parallaxRoom;
					} else {
						if (move > 0)
							move = 0;
						if (-1 * move > parallaxRoom)
							move = -1 * parallaxRoom;
					}
				}
			}

			// if overflow loops
			else {
				while (move < parallaxRoom) {
					move += parallaxRoom;

					var loopCountChange = opts.reverseDirection ? -1 : 1;

					if (vertical)
						loopCount += loopCountChange;
					else
						loopCountX += loopCountChange;
				}

				while (move > (opts.reverseDirection ? -1 : 0)) {
					move -= parallaxRoom;

					var loopCountChange = opts.reverseDirection ? -1 : 1;

					if (vertical)
						loopCount -= loopCountChange;
					else
						loopCountX -= loopCountChange;
				}
			}

			return move;
		}
	};

	$.fn.scrollingParallax = function(options) {

		this.each(function() {
			new $.scrollingParallax(this, options);
		});

		return this;
	};
})(jQuery);


;

/**
 * @file
 * Drupal to Google Maps API bridge.
 */

/*global $, Drupal, GLatLng, GSmallZoomControl, GLargeMapControl, GMap2 */
/*global GMapTypeControl, GSmallMapControl, G_HYBRID_MAP, G_NORMAL_MAP */
/*global G_PHYSICAL_MAP, G_SATELLITE_MAP, GHierarchicalMapTypeControl */
/*global GKeyboardHandler, GLatLngBounds, GMenuMapTypeControl, GEvent */
/*global GOverviewMapControl, GScaleControl, GUnload */

(function () { // BEGIN closure
  var handlers = {};
  var maps = {};
  var ajaxoffset = 0;

  Drupal.gmap = {

    /**
     * Retrieve a map object for use by a non-widget.
     * Use this if you need to be able to fire events against a certain map
     * which you have the mapid for.
     * Be a good GMap citizen! Remember to send change()s after modifying variables!
     */
    getMap: function (mapid) {
      if (maps[mapid]) {
        return maps[mapid];
      }
      else {
        // Perhaps the user passed a widget id instead?
        mapid = mapid.split('-').slice(1, -1).join('-');
        if (maps[mapid]) {
          return maps[mapid];
        }
      }
      return false;
    },

    unloadMap: function (mapid) {
      delete maps[mapid];
    },

    addHandler: function (handler, callback) {
      if (!handlers[handler]) {
        handlers[handler] = [];
      }
      handlers[handler].push(callback);
    },

    globalChange: function (name, userdata) {
      for (var mapid in Drupal.settings.gmap) {
        if (Drupal.settings.gmap.hasOwnProperty(mapid)) {
          // Skip maps that are set up but not shown, etc.
          if (maps[mapid]) {
            maps[mapid].change(name, -1, userdata);
          }
        }
      }
    },

    setup: function (settings) {
      var obj = this;

      var initcallback = function (mapid) {
        return (function () {
          maps[mapid].change("bootstrap_options", -1);
          maps[mapid].change("boot", -1);
          maps[mapid].change("init", -1);
          // Send some changed events to fire up the rest of the initial settings..
          maps[mapid].change("maptypechange", -1);
          maps[mapid].change("controltypechange", -1);
          maps[mapid].change("alignchange", -1);
          // Set ready to put the event system into action.
          maps[mapid].ready = true;
          maps[mapid].change("ready", -1);
        });
      };

      if (settings || (Drupal.settings && Drupal.settings.gmap)) {
        var mapid = obj.id.split('-');
        if (Drupal.settings['gmap_remap_widgets']) {
          if (Drupal.settings['gmap_remap_widgets'][obj.id]) {
            jQuery.each(Drupal.settings['gmap_remap_widgets'][obj.id].classes, function() {
              jQuery(obj).addClass(this);
            });
            mapid = Drupal.settings['gmap_remap_widgets'][obj.id].id.split('-');
          }
        }
        var instanceid = mapid.pop();
        mapid.shift();
        mapid = mapid.join('-');
        var control = instanceid.replace(/\d+$/, '');

        // Lazy init the map object.
        if (!maps[mapid]) {
          if (settings) {
            maps[mapid] = new Drupal.gmap.map(settings);
          }
          else {
            maps[mapid] = new Drupal.gmap.map(Drupal.settings.gmap[mapid]);
          }
          // Prepare the initialization callback.
          var callback = initcallback(mapid);
          setTimeout(callback, 0);
        }

        if (handlers[control]) {
          for (var i = 0; i < handlers[control].length; i++) {
            handlers[control][i].call(maps[mapid], obj);
          }
        }
        else {
          // Element with wrong class?
        }
      }
    }
  };

  jQuery.fn.createGMap = function (settings, mapid) {
    return this.each(function () {
      if (!mapid) {
        mapid = 'auto' + ajaxoffset + 'ajax';
        ajaxoffset++;
      }
      settings.id = mapid;
      $(this)
        .attr('id', 'gmap-' + mapid + '-gmap0')
        .css('width', settings.width)
        .css('height', settings.height)
        .addClass('gmap-control')
        .addClass('gmap-gmap')
        .addClass('gmap')
        .addClass('gmap-map')
        .addClass('gmap-' + mapid + '-gmap')
        .addClass('gmap-processed')
        .each(function() {Drupal.gmap.setup.call(this, settings)});
    });
  };

})(); // END closure

Drupal.gmap.factory = {};

Drupal.gmap.map = function (v) {
  this.vars = v;
  this.map = undefined;
  this.ready = false;
  var _bindings = {};

  /**
   * Register interest in a change.
   */
  this.bind = function (name, callback) {
    if (!_bindings[name]) {
      _bindings[name] = [];
    }
    return _bindings[name].push(callback) - 1;
  };

  /**
   * Change notification.
   * Interested parties can act on changes.
   */
  this.change = function (name, id, userdata) {
    var c;
    if (_bindings[name]) {
      for (c = 0; c < _bindings[name].length; c++) {
        if (c !== id) {
          _bindings[name][c](userdata);
        }
      }
    }
    if (name !== 'all') {
      this.change('all', -1, name, userdata);
    }
  };

  /**
   * Deferred change notification.
   * This will cause a change notification to be tacked on to the *end* of the event queue.
   */
  this.deferChange = function (name, id, userdata) {
    var obj = this;
    // This will move the function call to the end of the event loop.
    setTimeout(function () {
      obj.change(name, id, userdata);
    }, 0);
  };
  
  this.getMapTypeName = function(type) {
    if (type == 'map' || type == 'roadmap') return 'Map';
    if (type == 'hybrid') return 'Hybrid';
    if (type == 'physical' || type == 'terrain') return 'Physical';
    if (type == 'satellite') return 'Satellite';
  };  
  
  this.getMapTypeId = function(type) {
    if (type == 'Map' || type == 'Roadmap') return google.maps.MapTypeId.ROADMAP;
    if (type == 'Hybrid') return google.maps.MapTypeId.HYBRID;
    if (type == 'Physical' || type == 'Terrain') return google.maps.MapTypeId.TERRAIN;
    if (type == 'Satellite') return google.maps.MapTypeId.SATELLITE;
  };  
};

////////////////////////////////////////
//             Map widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;
  var _ib = {};

  // Respond to incoming zooms
  _ib.zoom = obj.bind("zoom", function (zoom) {
    obj.map.setZoom(obj.vars.zoom);
  });

  // Respond to incoming moves
  _ib.move = obj.bind("move", function () {
    obj.map.panTo(new google.maps.LatLng(obj.vars.latitude, obj.vars.longitude));
  });

  // Respond to incoming width changes.
  _ib.width = obj.bind("widthchange", function (w) {
    obj.map.getDiv().style.width = w;
    google.maps.event.trigger(obj.map);
  });
  // Send out outgoing width changes.
  // N/A
  // Respond to incoming height changes.
  _ib.height = obj.bind("heightchange", function (h) {
    obj.map.getDiv().style.height = h;
    google.maps.event.trigger(obj.map);
  });
  // Send out outgoing height changes.
  // N/A

  // Respond to incoming control type changes.
  _ib.ctc = obj.bind("controltypechange", function () {
    if (obj.vars.controltype === 'Small') {
      obj.map.setOptions({navigationControlOptions: {style: google.maps.NavigationControlStyle.SMALL}});
    }
    else if (obj.vars.controltype === 'Large') {
      obj.map.setOptions({navigationControlOptions: {style: google.maps.NavigationControlStyle.ZOOM_PAN}});
    }
    else if (obj.vars.controltype === 'Android') {
      obj.map.setOptions({navigationControlOptions: {style: google.maps.NavigationControlStyle.ANDROID}});
    }
  });
  // Send out outgoing control type changes.
  // N/A
  
  // Respond to incoming map type changes.
  _ib.mtc = obj.bind("maptypechange", function () {
    obj.map.setMapTypeId(obj.getMapTypeId(obj.vars.maptype));
  });
  // Send out outgoing map type changes.
  // N/A  

  obj.bind("bootstrap_options", function () {
    // Bootup options.
    var opts = {}; // Object literal google.maps.MapOptions
    obj.opts = opts;

    // Disable default UI for custom options
    opts.disableDefaultUI = true;
    
    // Set draggable property
    if (obj.vars.behavior.nodrag) {
      opts.draggable = false;
    }
    else if (obj.vars.behavior.nokeyboard) {
      opts.keyboardShortcuts = false;
    }

    // Set default map type (set to road map if nothing selected)
    switch (obj.vars.maptype) {
      case 'Hybrid':
        opts.mapTypeId = google.maps.MapTypeId.HYBRID;
        break;
      case 'Physical':
        opts.mapTypeId = google.maps.MapTypeId.TERRAIN;
        break;
      case 'Satellite':
        opts.mapTypeId = google.maps.MapTypeId.SATELLITE;
        break;
      case 'Map':
      default:
        opts.mapTypeId = google.maps.MapTypeId.ROADMAP;
        break;
    }

    // Null out the enabled types.
    opts.mapTypeIds = [];

    if (obj.vars.baselayers.Map) {
      opts.mapTypeIds.push(google.maps.MapTypeId.ROADMAP);
    }
    if (obj.vars.baselayers.Hybrid) {
      opts.mapTypeIds.push(google.maps.MapTypeId.HYBRID);
    }
    if (obj.vars.baselayers.Physical) {
      opts.mapTypeIds.push(google.maps.MapTypeId.TERRAIN);
    }
    if (obj.vars.baselayers.Satellite) {
      opts.mapTypeIds.push(google.maps.MapTypeId.SATELLITE);
    }    

    if (obj.vars.draggableCursor) {
      opts.draggableCursor = obj.vars.draggableCursor;
    }
    if (obj.vars.draggingCursor) {
      opts.draggingCursor = obj.vars.draggingCursor;
    }
    if (obj.vars.backgroundColor) {
      opts.backgroundColor = obj.vars.backgroundColor;
    }

    // Map type control
    opts.mapTypeControl = true;
    opts.mapTypeControlOptions = {};    
    if (obj.vars.mtc === 'standard') {
      opts.mapTypeControlOptions.style = google.maps.MapTypeControlStyle.DEFAULT;
    }
    else if (obj.vars.mtc === 'horiz') {
      opts.mapTypeControlOptions.style = google.maps.MapTypeControlStyle.HORIZONTAL_BAR;
    }
    else if (obj.vars.mtc === 'menu') {
      opts.mapTypeControlOptions.style = google.maps.MapTypeControlStyle.DROPDOWN_MENU;
    }

    // Navigation control type
    if (obj.vars.controltype !== 'None') {
      opts.navigationControl = true;
    }
    if (obj.vars.controltype === 'Small') {
      opts.navigationControlOptions = {style: google.maps.NavigationControlStyle.SMALL};
    }
    else if (obj.vars.controltype === 'Large') {
      opts.navigationControlOptions = {style: google.maps.NavigationControlStyle.ZOOM_PAN};
    }

    // Set scale control visibility
    opts.scaleControl = obj.vars.behavior.scale;

    // Scroll wheel control
    if (obj.vars.behavior.nomousezoom) {
      opts.scrollwheel = false;
    }
    // Disable double-click zoom
    if (obj.vars.behavior.nocontzoom) {
      opts.disableDoubleClickZoom = true;
    }

  });

  obj.bind("boot", function () {
    obj.map = new google.maps.Map(elem, obj.opts);
    //console.log(obj.map);
  });

  obj.bind("init", function () {
    var map = obj.map;

    // Not implemented in API v3
    // if (obj.vars.behavior.overview) {
    //   map.addControl(new GOverviewMapControl());
    // }
    // if (obj.vars.behavior.googlebar) {
    //   map.enableGoogleBar();
    // }
   
    if (obj.vars.extent) {
      var c = obj.vars.extent;
      var extent = new google.maps.LatLngBounds(new google.maps.LatLng(c[0][0], c[0][1]), new google.maps.LatLng(c[1][0], c[1][1]));
      obj.vars.latitude = extent.getCenter().lat();
      obj.vars.longitude = extent.getCenter().lng();
      obj.vars.zoom = map.getBoundsZoomLevel(extent);
    }
    if (obj.vars.behavior.collapsehack) {
      // Modify collapsable fieldsets to make maps check dom state when the resize handle
      // is clicked. This may not necessarily be the correct thing to do in all themes,
      // hence it being a behavior.
      setTimeout(function () {
        var r = function () {
          google.maps.event.trigger(map);
          map.setCenter(new google.maps.LatLng(obj.vars.latitude, obj.vars.longitude), obj.vars.zoom);
        };
        $(elem).parents('fieldset.collapsible').children('legend').children('a').click(r);
        // Would be nice, but doesn't work.
        //$(elem).parents('fieldset.collapsible').children('.fieldset-wrapper').scroll(r);
      }, 0);
    }
    map.setCenter(new google.maps.LatLng(obj.vars.latitude, obj.vars.longitude));
    map.setZoom(obj.vars.zoom);

    // Send out outgoing zooms
    google.maps.event.addListener(map, "zoom_changed", function () {
      obj.vars.zoom = map.getZoom();
      obj.change("zoom", _ib.zoom);
    });

    // Send out outgoing moves
    google.maps.event.addListener(map, "center_changed", function () {
      var coord = map.getCenter();
      obj.vars.latitude = coord.lat();
      obj.vars.longitude = coord.lng();
      obj.change("move", _ib.move);
    });

    // Send out outgoing map type changes.
    google.maps.event.addListener(map, "maptypeid_changed", function () {
      // If the map isn't ready yet, ignore it.
      if (obj.ready) {
        obj.vars.maptype = obj.getMapTypeName(map.getMapTypeId());
        obj.change("maptypechange", _ib.mtc);
      }
    });
    
    /*
    google.maps.event.addListener(map, 'click', function(event) {
      alert(Drupal.gmap.getIcon("big blue", 0));
      var marker = new google.maps.Marker({
        position: event.latLng, 
        map: map
      });
      google.maps.event.addListener(marker, 'click', function() {
        marker.setMap(null);
      });
    });
    */
  });  
});

////////////////////////////////////////
//            Zoom widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('zoom', function (elem) {
  var obj = this;
  // Respond to incoming zooms
  var binding = obj.bind("zoom", function () {
    elem.value = obj.vars.zoom;
  });
  // Send out outgoing zooms
  $(elem).change(function () {
    obj.vars.zoom = parseInt(elem.value, 10);
    obj.change("zoom", binding);
  });
});

////////////////////////////////////////
//          Latitude widget           //
////////////////////////////////////////
Drupal.gmap.addHandler('latitude', function (elem) {
//  var obj = this;
//  // Respond to incoming movements.
//  var binding = obj.bind("move", function () {
//    elem.value = '' + obj.vars.latitude;
//  });
//  // Send out outgoing movements.
//  $(elem).change(function () {
//    obj.vars.latitude = Number(this.value);
//    obj.change("move", binding);
//  });
});

////////////////////////////////////////
//         Longitude widget           //
////////////////////////////////////////
Drupal.gmap.addHandler('longitude', function (elem) {
//  var obj = this;
//  // Respond to incoming movements.
//  var binding = obj.bind("move", function () {
//    elem.value = '' + obj.vars.longitude;
//  });
//  // Send out outgoing movements.
//  $(elem).change(function () {
//    obj.vars.longitude = Number(this.value);
//    obj.change("move", binding);
//  });
});

////////////////////////////////////////
//          Latlon widget             //
////////////////////////////////////////
Drupal.gmap.addHandler('latlon', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("move", function () {
    elem.value = '' + obj.vars.latitude + ',' + obj.vars.longitude;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    var t = this.value.split(',');
    obj.vars.latitude = Number(t[0]);
    obj.vars.longitude = Number(t[1]);
    obj.change("move", binding);
  });
});

////////////////////////////////////////
//          Maptype widget            //
////////////////////////////////////////
Drupal.gmap.addHandler('maptype', function (elem) {
  var obj = this;
  // Respond to incoming movements.
  var binding = obj.bind("maptypechange", function () {
    elem.value = obj.vars.maptype;
  });
  // Send out outgoing movements.
  $(elem).change(function () {
    obj.vars.maptype = elem.value;
    obj.change("maptypechange", binding);
  });
});
 
(function () { // BEGIN CLOSURE
  var re = /([0-9.]+)\s*(em|ex|px|in|cm|mm|pt|pc|%)/;
  var normalize = function (str) {
    var ar;
    if ((ar = re.exec(str.toLowerCase()))) {
      return ar[1] + ar[2];
    }
    return null;
  };

  ////////////////////////////////////////
  //           Width widget             //
  ////////////////////////////////////////
  Drupal.gmap.addHandler('width', function (elem) {
    var obj = this;
    // Respond to incoming width changes.
    var binding = obj.bind("widthchange", function (w) {
      elem.value = normalize(w);
    });
    // Send out outgoing width changes.
    $(elem).change(function () {
      var n;
      if ((n = normalize(elem.value))) {
        elem.value = n;
        obj.change('widthchange', binding, n);
      }
    });
    obj.bind('init', function () {
      $(elem).change();
    });
  });
 
  ////////////////////////////////////////
  //           Height widget            //
  ////////////////////////////////////////
  Drupal.gmap.addHandler('height', function (elem) {
    var obj = this;
    // Respond to incoming height changes.
    var binding = obj.bind("heightchange", function (h) {
      elem.value = normalize(h);
    });
    // Send out outgoing height changes.
    $(elem).change(function () {
      var n;
      if ((n = normalize(elem.value))) {
        elem.value = n;
        obj.change('heightchange', binding, n);
      }
    });
    obj.bind('init', function () {
      $(elem).change();
    });
  });
})(); // END CLOSURE

////////////////////////////////////////
//        Control type widget         //
////////////////////////////////////////
Drupal.gmap.addHandler('controltype', function (elem) {
  var obj = this;
  // Respond to incoming height changes.
  var binding = obj.bind("controltypechange", function () {
    elem.value = obj.vars.controltype;
  });
  // Send out outgoing height changes.
  $(elem).change(function () {
    obj.vars.controltype = elem.value
    obj.change("controltypechange", binding);
  });
});

// // Map cleanup.
// if (Drupal.jsEnabled) {
//   $(document).unload(GUnload);
// }

Drupal.behaviors.GMap = function (context) {
  if (Drupal.settings && Drupal.settings['gmap_remap_widgets']) {
    jQuery.each(Drupal.settings['gmap_remap_widgets'], function(key, val) {
      $('#'+ key).addClass('gmap-control');
    });
  }
  $('.gmap-control:not(.gmap-processed)', context).addClass('gmap-processed').each(function () {Drupal.gmap.setup.call(this)});
};;
// GMap marker image data.
Drupal.gmap.iconpath = "/sites/all/modules/contrib/standard/gmap/markers";
Drupal.gmap.icondata = { "/big/": { "f": [ "shadow.png", "blue.png", "red.png" ], "w": [ 56, 30 ], "h": [ 51 ], "i": [ [ [ [ "defaults", "big blue", "big red" ], [ "", "Big Blue", "Big Red" ], [ [  ], [ 1 ], [ 2 ] ], [ 16, 0 ], [ 51, 0 ], [ 24, 0 ], [ 4, 0 ], [ 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] }, "/atf/": { "f": [ "icone_geoloc.png", "icone_ville.png" ], "w": [ 37 ], "h": [ 37 ], "i": [ [ [ [ "", "ATF001", "ATF003" ], [ "", "atf-geoloc_defaut", "atf-ville" ], [ [  ], [ 0 ], [ 1 ] ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] }, "/flat/": { "f": [ "x.png" ], "w": [ 16 ], "h": [ 16 ], "i": [ [ [ [ "defaults", "treasure" ], [ "", "X marks the spot" ], [ [  ], [ 0 ] ], [ 8, 0 ], [ 8, 0 ], [ 8, 0 ], [ 8, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] }, "/small/": { "f": [ "shadow.png", "red.png", "bred.png", "orange.png", "pyellow.png", "yellow.png", "pgreen.png", "green.png", "dgreen.png", "fgreen.png", "pblue.png", "lblue.png", "blue.png", "dblue.png", "purple.png", "pink.png", "bpink.png", "brown.png", "white.png", "lgray.png", "gray.png", "black.png", "altblue.png", "altred.png" ], "w": [ 22, 12 ], "h": [ 20 ], "i": [ [ [ [ "defaults", "small red", "small bred", "small orange", "small pyellow", "small yellow", "small pgreen", "small green", "small dgreen", "small fgreen", "small pblue", "small lblue", "small blue", "small dblue", "small purple", "small pink", "small bpink", "small brown", "small white", "small lgray", "small gray", "small black", "alt small blue", "alt small red" ], [ "", "Small Red", "Small Bright red", "Small Orange", "Small Pale Yellow", "Small Yellow", "Small Pale Green", "Small Green", "Small Dark Green", "Small Flouro Green", "Small Pale Blue", "Small Light Blue", "Small Blue", "Small Dark Blue", "Small Purple", "Small Pink", "Small Bright Pink", "Small Brown", "Small White", "Small Light Gray", "Small Gray", "Small Black", "Small Blue (Alternate)", "Small Red (Alternate)" ], [ [  ], [ 1 ], [ 2 ], [ 3 ], [ 4 ], [ 5 ], [ 6 ], [ 7 ], [ 8 ], [ 9 ], [ 10 ], [ 11 ], [ 12 ], [ 13 ], [ 14 ], [ 15 ], [ 16 ], [ 17 ], [ 18 ], [ 19 ], [ 20 ], [ 21 ], [ 22 ], [ 23 ] ], [ 7, 0 ], [ 19, 0 ], [ 10, 0 ], [ 2, 0 ], [ 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] }, "/atf.001/": { "f": [ "icone_geoloc.png", "icone_ville.png" ], "w": [ 37 ], "h": [ 37 ], "i": [ [ [ [ "", "ATF001", "ATF003" ], [ "", "atf-geoloc_defaut", "atf-ville" ], [ [  ], [ 0 ], [ 1 ] ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] }, "/": { "f": [ "letter1.png", "letter2.png", "letter3.png", "letter4.png", "letter5.png", "letter6.png", "letter7.png", "letter8.png", "letter9.png", "letter10.png", "blue.png", "gray.png", "green.png", "lblue.png", "orange.png", "pink.png", "purple.png", "white.png", "yellow.png", "marker_sunday.png", "marker_monday.png", "marker_tuesday.png", "marker_wednesday.png", "marker_thursday.png", "marker_friday.png", "marker_saturday.png", "route1.png", "route2.png", "blank.png", "cluster.png", "drupal.png", "vertex.png", "number1.png", "number2.png", "number3.png", "number4.png", "number5.png", "number6.png", "number7.png", "number8.png", "number9.png", "number10.png", "number11.png", "number12.png", "number13.png", "number14.png", "number15.png", "number16.png", "number17.png", "number18.png", "number19.png", "number20.png", "number21.png", "number22.png", "number23.png", "number24.png", "number25.png", "number26.png" ], "w": [ 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 20, 8, 20 ], "h": [ 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 34, 8, 34 ], "i": [ [ [ [ "defaults", "letters" ], [ "", "Letters" ], [ [  ], [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ] ], [ 10, 0 ], [ 29, 0 ], [ 17, 0 ], [ 6, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ], [ [ [ "defaults", "blue", "gray", "green", "lblue", "orange", "pink", "purple", "white", "yellow" ], [ "", "Blue", "Gray", "Green", "Light Blue", "Orange", "Pink", "Purple", "White", "Yellow" ], [ [  ], [ 10 ], [ 11 ], [ 12 ], [ 13 ], [ 14 ], [ 15 ], [ 16 ], [ 17 ], [ 18 ] ], [ 10, 0 ], [ 29, 0 ], [ 17, 0 ], [ 3, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ], [ [ [ "defaults", "sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "week" ], [ "", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Week" ], [ [  ], [ 19 ], [ 20 ], [ 21 ], [ 22 ], [ 23 ], [ 24 ], [ 25 ], [ 19, 20, 21, 22, 23, 24, 25 ] ], [ 10, 0 ], [ 29, 0 ], [ 17, 0 ], [ 3, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ], [ [ [ "defaults", "route" ], [ "", "Route" ], [ [  ], [ 26, 27 ] ], [ 10, 0 ], [ 29, 0 ], [ 17, 0 ], [ 6, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ], [ [ [ "defaults", "blank", "cluster", "drupal", "vertex" ], [ "", "Blank", "Cluster", "Drupal", "Line Vertex" ], [ [  ], [ 28 ], [ 29 ], [ 30 ], [ 31 ] ], [ 10, 0, 0, 0, 4 ], [ 29, 0, 0, 0, 4 ], [ 17, 0, 0, 0, 4 ], [ 6, 0, 0, 0, 4 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ], [ [ [ "defaults", "numbers" ], [ "", "Numbers" ], [ [  ], [ 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57 ] ], [ 10, 0 ], [ 29, 0 ], [ 17, 0 ], [ 6, 0 ] ], [ [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ], [  ] ] ] ] } };
;
/**
 * @file
 * GIcon manager for GMap.
 * Required for markers to operate properly.
 */

/*global $, Drupal, GIcon, GPoint, GSize, G_DEFAULT_ICON */

/**
 * Get the GIcon corresponding to a setname / sequence.
 * There is only one GIcon for each slot in the sequence.
 * The marker set wraps around when reaching the end of the sequence.
 * @@@ TODO: Move this directly into the preparemarker event binding.
 */
Drupal.gmap.getIcon = function (setname, sequence) {
  var othimg = ['printImage', 'mozPrintImage', 'printShadow', 'transparent'];
  // If no setname, return google's default icon.
  if (!setname) {
    return;
  }
  if (!this.gicons) {
    this.gicons = {};
  }
  if (!this.gshadows) {
    this.gshadows = {};
  }

  // If no sequence, synthesise one.
  if (!sequence) {
    // @TODO make this per-map.
    if (!this.sequences) {
      this.sequences = {};
    }
    if (!this.sequences[setname]) {
      this.sequences[setname] = -1;
    }
    this.sequences[setname]++;
    sequence = this.sequences[setname];
  }

  if (!this.gicons[setname]) {
    if (!Drupal.gmap.icons[setname]) {
      alert('Request for invalid marker set ' + setname + '!');
    }
    this.gicons[setname] = [];
    this.gshadows[setname] = [];
    var q = Drupal.gmap.icons[setname];
    var p, t;
    for (var i = 0; i < q.sequence.length; i++) {
      /*
      t = new GIcon();
      p = Drupal.gmap.iconpath + q.path;
      t.image = p + q.sequence[i].f;
      if (q.shadow.f !== '') {
        t.shadow = p + q.shadow.f;
        t.shadowSize = new GSize(q.shadow.w, q.shadow.h);
      }
      t.iconSize = new GSize(q.sequence[i].w, q.sequence[i].h);
      t.iconAnchor = new GPoint(q.anchorX, q.anchorY);
      t.infoWindowAnchor = new GPoint(q.infoX, q.infoY);
      */
      p = Drupal.gmap.iconpath + q.path;
      t = new google.maps.MarkerImage(p + q.sequence[i].f,
        new google.maps.Size(q.sequence[i].w, q.sequence[i].h),
        null,
        new google.maps.Point(q.anchorX, q.anchorY)
      );
      if (q.shadow.f !== '') {
        this.gshadows[setname][i] = new google.maps.MarkerImage(p + q.shadow.f,
          new google.maps.Size(q.shadow.w, q.shadow.h),
          null,
          new google.maps.Point(q.anchorX, q.anchorY)
        );
      }
      else {
        this.gshadows[setname][i] = null;
      }
      
      for (var j = 0; j < othimg.length; j++) {
        if (q[othimg[j]] !== '') {
          t[othimg[j]] = p + q[othimg[j]];
        }
      }
      // @@@ imageMap?
      this.gicons[setname][i] = t;
    }
    delete Drupal.gmap.icons[setname];
  }
  // TODO: Random, other cycle methods.
  return this.gicons[setname][sequence % this.gicons[setname].length];
};

Drupal.gmap.getShadow = function (setname, sequence) {
  if (this.gshadows) return this.gshadows[setname][sequence % this.gicons[setname].length];
};

/**
 * JSON callback to set up the icon defs.
 * When doing the JSON call, the data comes back in a packed format.
 * We need to expand it and file it away in a more useful format.
 */
Drupal.gmap.iconSetup = function () {
  Drupal.gmap.icons = {};
  var m = Drupal.gmap.icondata;
  var filef, filew, fileh, files;
  for (var path in m) {
    if (m.hasOwnProperty(path)) {
      // Reconstitute files array
      filef = m[path].f;
      filew = Drupal.gmap.expandArray(m[path].w, filef.length);
      fileh = Drupal.gmap.expandArray(m[path].h, filef.length);
      files = [];
      for (var i = 0; i < filef.length; i++) {
        files[i] = {f : filef[i], w : filew[i], h : fileh[i]};
      }

      for (var ini in m[path].i) {
        if (m[path].i.hasOwnProperty(ini)) {
          $.extend(Drupal.gmap.icons, Drupal.gmap.expandIconDef(m[path].i[ini], path, files));
        }
      }
    }
  }
};

/**
 * Expand a compressed array.
 * This will pad arr up to len using the last value of the old array.
 */
Drupal.gmap.expandArray = function (arr, len) {
  var d = arr[0];
  for (var i = 0; i < len; i++) {
    if (!arr[i]) {
      arr[i] = d;
    }
    else {
      d = arr[i];
    }
  }
  return arr;
};

/**
 * Expand icon definition.
 * This helper function is the reverse of the packer function found in
 * gmap_markerinfo.inc.
 */
Drupal.gmap.expandIconDef = function (c, path, files) {
  var decomp = ['key', 'name', 'sequence', 'anchorX', 'anchorY', 'infoX',
    'infoY', 'shadow', 'printImage', 'mozPrintImage', 'printShadow',
    'transparent'];
  var fallback = ['', '', [], 0, 0, 0, 0, {f: '', h: 0, w: 0}, '', '', '', ''];
  var imagerep = ['shadow', 'printImage', 'mozPrintImage', 'printShadow',
    'transparent'];
  var defaults = {};
  var sets = [];
  var i, j;
  // Part 1: Defaults / Markersets
  // Expand arrays and fill in missing ones with fallbacks
  for (i = 0; i < decomp.length; i++) {
    if (!c[0][i]) {
      c[0][i] = [ fallback[i] ];
    }
    c[0][i] = Drupal.gmap.expandArray(c[0][i], c[0][0].length);
  }
  for (i = 0; i < c[0][0].length; i++) {
    for (j = 0; j < decomp.length; j++) {
      if (i === 0) {
        defaults[decomp[j]] = c[0][j][i];
      }
      else {
        if (!sets[i - 1]) {
          sets[i - 1] = {};
        }
        sets[i - 1][decomp[j]] = c[0][j][i];
      }
    }
  }
  for (i = 0; i < sets.length; i++) {
    for (j = 0; j < decomp.length; j++) {
      if (sets[i][decomp[j]] === fallback[j]) {
        sets[i][decomp[j]] = defaults[decomp[j]];
      }
    }
  }
  var icons = {};
  for (i = 0; i < sets.length; i++) {
    var key = sets[i].key;
    icons[key] = sets[i];
    icons[key].path = path;
    delete icons[key].key;
    delete sets[i];
    for (j = 0; j < icons[key].sequence.length; j++) {
      icons[key].sequence[j] = files[icons[key].sequence[j]];
    }
    for (j = 0; j < imagerep.length; j++) {
      if (typeof(icons[key][imagerep[j]]) === 'number') {
        icons[key][imagerep[j]] = files[icons[key][imagerep[j]]];
      }
    }
  }
  return icons;
};

/**
 * We attach ourselves if we find a map somewhere needing markers.
 * Note: Since we broadcast our ready event to all maps, it doesn't
 * matter which one we attached to!
 */
Drupal.gmap.addHandler('gmap', function (elem) {
  var obj = this;

  obj.bind('init', function () {
    // Only expand once.
    if (!Drupal.gmap.icons) {
      Drupal.gmap.iconSetup();
    }
  });

  obj.bind('ready', function () {
    // Compatibility event.
    if (Drupal.gmap.icondata) {
      obj.deferChange('iconsready', -1);
    }
  });

  if (!obj.vars.behavior.customicons) {
    // Provide icons to markers.
    obj.bind('preparemarker', function (marker) {
      marker.opts.icon = Drupal.gmap.getIcon(marker.markername, marker.offset);
      marker.opts.shadow = Drupal.gmap.getShadow(marker.markername, marker.offset);
    });
  }
});
;
/*jslint browser: true, confusion: true, sloppy: true, vars: true, nomen: false, plusplus: false, indent: 2 */
/*global window,google */

/**
 * @name MarkerClustererPlus for Google Maps V3
 * @version 2.0.15 [October 18, 2012]
 * @author Gary Little
 * @fileoverview
 * The library creates and manages per-zoom-level clusters for large amounts of markers.
 * <p>
 * This is an enhanced V3 implementation of the
 * <a href="http://gmaps-utility-library-dev.googlecode.com/svn/tags/markerclusterer/"
 * >V2 MarkerClusterer</a> by Xiaoxi Wu. It is based on the
 * <a href="http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerclusterer/"
 * >V3 MarkerClusterer</a> port by Luke Mahe. MarkerClustererPlus was created by Gary Little.
 * <p>
 * v2.0 release: MarkerClustererPlus v2.0 is backward compatible with MarkerClusterer v1.0. It
 *  adds support for the <code>ignoreHidden</code>, <code>title</code>, <code>printable</code>,
 *  <code>batchSizeIE</code>, and <code>calculator</code> properties as well as support for
 *  four more events. It also allows greater control over the styling of the text that appears
 *  on the cluster marker. The documentation has been significantly improved and the overall
 *  code has been simplified and polished. Very large numbers of markers can now be managed
 *  without causing Javascript timeout errors on Internet Explorer. Note that the name of the
 *  <code>clusterclick</code> event has been deprecated. The new name is <code>click</code>,
 *  so please change your application code now.
 */

/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


/**
 * @name ClusterIconStyle
 * @class This class represents the object for values in the <code>styles</code> array passed
 *  to the {@link MarkerClusterer} constructor. The element in this array that is used to
 *  style the cluster icon is determined by calling the <code>calculator</code> function.
 *
 * @property {string} url The URL of the cluster icon image file. Required.
 * @property {number} height The height (in pixels) of the cluster icon. Required.
 * @property {number} width The width (in pixels) of the cluster icon. Required.
 * @property {Array} [anchor] The anchor position (in pixels) of the label text to be shown on
 *  the cluster icon, relative to the top left corner of the icon.
 *  The format is <code>[yoffset, xoffset]</code>. The <code>yoffset</code> must be positive
 *  and less than <code>height</code> and the <code>xoffset</code> must be positive and less
 *  than <code>width</code>. The default is to anchor the label text so that it is centered
 *  on the icon.
 * @property {Array} [anchorIcon] The anchor position (in pixels) of the cluster icon. This is the
 *  spot on the cluster icon that is to be aligned with the cluster position. The format is
 *  <code>[yoffset, xoffset]</code> where <code>yoffset</code> increases as you go down and
 *  <code>xoffset</code> increases to the right. The default anchor position is the center of the
 *  cluster icon.
 * @property {string} [textColor="black"] The color of the label text shown on the
 *  cluster icon.
 * @property {number} [textSize=11] The size (in pixels) of the label text shown on the
 *  cluster icon.
 * @property {number} [textDecoration="none"] The value of the CSS <code>text-decoration</code>
 *  property for the label text shown on the cluster icon.
 * @property {number} [fontWeight="bold"] The value of the CSS <code>font-weight</code>
 *  property for the label text shown on the cluster icon.
 * @property {number} [fontStyle="normal"] The value of the CSS <code>font-style</code>
 *  property for the label text shown on the cluster icon.
 * @property {number} [fontFamily="Arial,sans-serif"] The value of the CSS <code>font-family</code>
 *  property for the label text shown on the cluster icon.
 * @property {string} [backgroundPosition="0 0"] The position of the cluster icon image
 *  within the image defined by <code>url</code>. The format is <code>"xpos ypos"</code>
 *  (the same format as for the CSS <code>background-position</code> property). You must set
 *  this property appropriately when the image defined by <code>url</code> represents a sprite
 *  containing multiple images.
 */
/**
 * @name ClusterIconInfo
 * @class This class is an object containing general information about a cluster icon. This is
 *  the object that a <code>calculator</code> function returns.
 *
 * @property {string} text The text of the label to be shown on the cluster icon.
 * @property {number} index The index plus 1 of the element in the <code>styles</code>
 *  array to be used to style the cluster icon.
 * @property {string} title The tooltip to display when the mouse moves over the cluster icon.
 *  If this value is <code>undefined</code> or <code>""</code>, <code>title</code> is set to the
 *  value of the <code>title</code> property passed to the MarkerClusterer.
 */
/**
 * A cluster icon.
 *
 * @constructor
 * @extends google.maps.OverlayView
 * @param {Cluster} cluster The cluster with which the icon is to be associated.
 * @param {Array} [styles] An array of {@link ClusterIconStyle} defining the cluster icons
 *  to use for various cluster sizes.
 * @private
 */
function ClusterIcon(cluster, styles) {
  cluster.getMarkerClusterer().extend(ClusterIcon, google.maps.OverlayView);

  this.cluster_ = cluster;
  this.className_ = cluster.getMarkerClusterer().getClusterClass();
  this.styles_ = styles;
  this.center_ = null;
  this.div_ = null;
  this.sums_ = null;
  this.visible_ = false;

  this.setMap(cluster.getMap()); // Note: this causes onAdd to be called
}


/**
 * Adds the icon to the DOM.
 */
ClusterIcon.prototype.onAdd = function () {
  var cClusterIcon = this;
  var cMouseDownInCluster;
  var cDraggingMapByCluster;

  this.div_ = document.createElement("div");
  this.div_.className = this.className_;
  if (this.visible_) {
    this.show();
  }

  this.getPanes().overlayMouseTarget.appendChild(this.div_);

  // Fix for Issue 157
  google.maps.event.addListener(this.getMap(), "bounds_changed", function () {
    cDraggingMapByCluster = cMouseDownInCluster;
  });

  google.maps.event.addDomListener(this.div_, "mousedown", function () {
    cMouseDownInCluster = true;
    cDraggingMapByCluster = false;
  });

  google.maps.event.addDomListener(this.div_, "click", function (e) {
    cMouseDownInCluster = false;
    if (!cDraggingMapByCluster) {
      var theBounds;
      var mz;
      var mc = cClusterIcon.cluster_.getMarkerClusterer();
      /**
       * This event is fired when a cluster marker is clicked.
       * @name MarkerClusterer#click
       * @param {Cluster} c The cluster that was clicked.
       * @event
       */
      google.maps.event.trigger(mc, "click", cClusterIcon.cluster_);
      google.maps.event.trigger(mc, "clusterclick", cClusterIcon.cluster_); // deprecated name

      // The default click handler follows. Disable it by setting
      // the zoomOnClick property to false.
      if (mc.getZoomOnClick()) {
        // Zoom into the cluster.
        mz = mc.getMaxZoom();
        theBounds = cClusterIcon.cluster_.getBounds();
        mc.getMap().fitBounds(theBounds);
        // There is a fix for Issue 170 here:
        setTimeout(function () {
          mc.getMap().fitBounds(theBounds);
          // Don't zoom beyond the max zoom level
          if (mz !== null && (mc.getMap().getZoom() > mz)) {
            mc.getMap().setZoom(mz + 1);
          }
        }, 100);
      }

      // Prevent event propagation to the map:
      e.cancelBubble = true;
      if (e.stopPropagation) {
        e.stopPropagation();
      }
    }
  });

  google.maps.event.addDomListener(this.div_, "mouseover", function () {
    var mc = cClusterIcon.cluster_.getMarkerClusterer();
    /**
     * This event is fired when the mouse moves over a cluster marker.
     * @name MarkerClusterer#mouseover
     * @param {Cluster} c The cluster that the mouse moved over.
     * @event
     */
    google.maps.event.trigger(mc, "mouseover", cClusterIcon.cluster_);
  });

  google.maps.event.addDomListener(this.div_, "mouseout", function () {
    var mc = cClusterIcon.cluster_.getMarkerClusterer();
    /**
     * This event is fired when the mouse moves out of a cluster marker.
     * @name MarkerClusterer#mouseout
     * @param {Cluster} c The cluster that the mouse moved out of.
     * @event
     */
    google.maps.event.trigger(mc, "mouseout", cClusterIcon.cluster_);
  });
};


/**
 * Removes the icon from the DOM.
 */
ClusterIcon.prototype.onRemove = function () {
  if (this.div_ && this.div_.parentNode) {
    this.hide();
    google.maps.event.clearInstanceListeners(this.div_);
    this.div_.parentNode.removeChild(this.div_);
    this.div_ = null;
  }
};


/**
 * Draws the icon.
 */
ClusterIcon.prototype.draw = function () {
  if (this.visible_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.top = pos.y + "px";
    this.div_.style.left = pos.x + "px";
  }
};


/**
 * Hides the icon.
 */
ClusterIcon.prototype.hide = function () {
  if (this.div_) {
    this.div_.style.display = "none";
  }
  this.visible_ = false;
};


/**
 * Positions and shows the icon.
 */
ClusterIcon.prototype.show = function () {
  if (this.div_) {
    var pos = this.getPosFromLatLng_(this.center_);
    this.div_.style.cssText = this.createCss(pos);
    if (this.cluster_.printable_) {
      // (Would like to use "width: inherit;" below, but doesn't work with MSIE)
      this.div_.innerHTML = "<img src='" + this.url_ + "'><div style='position: absolute; top: 0px; left: 0px; width: " + this.width_ + "px;'>" + this.sums_.text + "</div>";
    } else {
      this.div_.innerHTML = this.sums_.text;
    }
    if (typeof this.sums_.title === "undefined" || this.sums_.title === "") {
      this.div_.title = this.cluster_.getMarkerClusterer().getTitle();
    } else {
      this.div_.title = this.sums_.title;
    }
    this.div_.style.display = "";
  }
  this.visible_ = true;
};


/**
 * Sets the icon styles to the appropriate element in the styles array.
 *
 * @param {ClusterIconInfo} sums The icon label text and styles index.
 */
ClusterIcon.prototype.useStyle = function (sums) {
  this.sums_ = sums;
  var index = Math.max(0, sums.index - 1);
  index = Math.min(this.styles_.length - 1, index);
  var style = this.styles_[index];
  this.url_ = style.url;
  this.height_ = style.height;
  this.width_ = style.width;
  this.anchor_ = style.anchor;
  this.anchorIcon_ = style.anchorIcon || [parseInt(this.height_ / 2, 10), parseInt(this.width_ / 2, 10)];
  this.textColor_ = style.textColor || "black";
  this.textSize_ = style.textSize || 11;
  this.textDecoration_ = style.textDecoration || "none";
  this.fontWeight_ = style.fontWeight || "bold";
  this.fontStyle_ = style.fontStyle || "normal";
  this.fontFamily_ = style.fontFamily || "Arial,sans-serif";
  this.backgroundPosition_ = style.backgroundPosition || "0 0";
};


/**
 * Sets the position at which to center the icon.
 *
 * @param {google.maps.LatLng} center The latlng to set as the center.
 */
ClusterIcon.prototype.setCenter = function (center) {
  this.center_ = center;
};


/**
 * Creates the cssText style parameter based on the position of the icon.
 *
 * @param {google.maps.Point} pos The position of the icon.
 * @return {string} The CSS style text.
 */
ClusterIcon.prototype.createCss = function (pos) {
  var style = [];
  if (!this.cluster_.printable_) {
    style.push('background-image:url(' + this.url_ + ');');
    style.push('background-position:' + this.backgroundPosition_ + ';');
  }

  if (typeof this.anchor_ === 'object') {
    if (typeof this.anchor_[0] === 'number' && this.anchor_[0] > 0 &&
        this.anchor_[0] < this.height_) {
      style.push('height:' + (this.height_ - this.anchor_[0]) +
          'px; padding-top:' + this.anchor_[0] + 'px;');
    } else {
      style.push('height:' + this.height_ + 'px; line-height:' + this.height_ +
          'px;');
    }
    if (typeof this.anchor_[1] === 'number' && this.anchor_[1] > 0 &&
        this.anchor_[1] < this.width_) {
      style.push('width:' + (this.width_ - this.anchor_[1]) +
          'px; padding-left:' + this.anchor_[1] + 'px;');
    } else {
      style.push('width:' + this.width_ + 'px; text-align:center;');
    }
  } else {
    style.push('height:' + this.height_ + 'px; line-height:' +
        this.height_ + 'px; width:' + this.width_ + 'px; text-align:center;');
  }

  style.push('cursor:pointer; top:' + pos.y + 'px; left:' +
      pos.x + 'px; color:' + this.textColor_ + '; position:absolute; font-size:' +
      this.textSize_ + 'px; font-family:' + this.fontFamily_ + '; font-weight:' +
      this.fontWeight_ + '; font-style:' + this.fontStyle_ + '; text-decoration:' +
      this.textDecoration_ + ';');

  return style.join("");
};


/**
 * Returns the position at which to place the DIV depending on the latlng.
 *
 * @param {google.maps.LatLng} latlng The position in latlng.
 * @return {google.maps.Point} The position in pixels.
 */
ClusterIcon.prototype.getPosFromLatLng_ = function (latlng) {
  var pos = this.getProjection().fromLatLngToDivPixel(latlng);
  pos.x -= this.anchorIcon_[1];
  pos.y -= this.anchorIcon_[0];
  return pos;
};


/**
 * Creates a single cluster that manages a group of proximate markers.
 *  Used internally, do not call this constructor directly.
 * @constructor
 * @param {MarkerClusterer} mc The <code>MarkerClusterer</code> object with which this
 *  cluster is associated.
 */
function Cluster(mc) {
  this.markerClusterer_ = mc;
  this.map_ = mc.getMap();
  this.gridSize_ = mc.getGridSize();
  this.minClusterSize_ = mc.getMinimumClusterSize();
  this.averageCenter_ = mc.getAverageCenter();
  this.printable_ = mc.getPrintable();
  this.markers_ = [];
  this.center_ = null;
  this.bounds_ = null;
  this.clusterIcon_ = new ClusterIcon(this, mc.getStyles());
}


/**
 * Returns the number of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {number} The number of markers in the cluster.
 */
Cluster.prototype.getSize = function () {
  return this.markers_.length;
};


/**
 * Returns the array of markers managed by the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {Array} The array of markers in the cluster.
 */
Cluster.prototype.getMarkers = function () {
  return this.markers_;
};


/**
 * Returns the center of the cluster. You can call this from
 * a <code>click</code>, <code>mouseover</code>, or <code>mouseout</code> event handler
 * for the <code>MarkerClusterer</code> object.
 *
 * @return {google.maps.LatLng} The center of the cluster.
 */
Cluster.prototype.getCenter = function () {
  return this.center_;
};


/**
 * Returns the map with which the cluster is associated.
 *
 * @return {google.maps.Map} The map.
 * @ignore
 */
Cluster.prototype.getMap = function () {
  return this.map_;
};


/**
 * Returns the <code>MarkerClusterer</code> object with which the cluster is associated.
 *
 * @return {MarkerClusterer} The associated marker clusterer.
 * @ignore
 */
Cluster.prototype.getMarkerClusterer = function () {
  return this.markerClusterer_;
};


/**
 * Returns the bounds of the cluster.
 *
 * @return {google.maps.LatLngBounds} the cluster bounds.
 * @ignore
 */
Cluster.prototype.getBounds = function () {
  var i;
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  var markers = this.getMarkers();
  for (i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
  }
  return bounds;
};


/**
 * Removes the cluster from the map.
 *
 * @ignore
 */
Cluster.prototype.remove = function () {
  this.clusterIcon_.setMap(null);
  this.markers_ = [];
  delete this.markers_;
};


/**
 * Adds a marker to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to be added.
 * @return {boolean} True if the marker was added.
 * @ignore
 */
Cluster.prototype.addMarker = function (marker) {
  var i;
  var mCount;
  var mz;

  if (this.isMarkerAlreadyAdded_(marker)) {
    return false;
  }

  if (!this.center_) {
    this.center_ = marker.getPosition();
    this.calculateBounds_();
  } else {
    if (this.averageCenter_) {
      var l = this.markers_.length + 1;
      var lat = (this.center_.lat() * (l - 1) + marker.getPosition().lat()) / l;
      var lng = (this.center_.lng() * (l - 1) + marker.getPosition().lng()) / l;
      this.center_ = new google.maps.LatLng(lat, lng);
      this.calculateBounds_();
    }
  }

  marker.isAdded = true;
  this.markers_.push(marker);

  mCount = this.markers_.length;
  mz = this.markerClusterer_.getMaxZoom();
  if (mz !== null && this.map_.getZoom() > mz) {
    // Zoomed in past max zoom, so show the marker.
    if (marker.getMap() !== this.map_) {
      marker.setMap(this.map_);
    }
  } else if (mCount < this.minClusterSize_) {
    // Min cluster size not reached so show the marker.
    if (marker.getMap() !== this.map_) {
      marker.setMap(this.map_);
    }
  } else if (mCount === this.minClusterSize_) {
    // Hide the markers that were showing.
    for (i = 0; i < mCount; i++) {
      this.markers_[i].setMap(null);
    }
  } else {
    marker.setMap(null);
  }

  this.updateIcon_();
  return true;
};


/**
 * Determines if a marker lies within the cluster's bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker lies in the bounds.
 * @ignore
 */
Cluster.prototype.isMarkerInClusterBounds = function (marker) {
  return this.bounds_.contains(marker.getPosition());
};


/**
 * Calculates the extended bounds of the cluster with the grid.
 */
Cluster.prototype.calculateBounds_ = function () {
  var bounds = new google.maps.LatLngBounds(this.center_, this.center_);
  this.bounds_ = this.markerClusterer_.getExtendedBounds(bounds);
};


/**
 * Updates the cluster icon.
 */
Cluster.prototype.updateIcon_ = function () {
  var mCount = this.markers_.length;
  var mz = this.markerClusterer_.getMaxZoom();

  if (mz !== null && this.map_.getZoom() > mz) {
    this.clusterIcon_.hide();
    return;
  }

  if (mCount < this.minClusterSize_) {
    // Min cluster size not yet reached.
    this.clusterIcon_.hide();
    return;
  }

  var numStyles = this.markerClusterer_.getStyles().length;
  var sums = this.markerClusterer_.getCalculator()(this.markers_, numStyles);
  this.clusterIcon_.setCenter(this.center_);
  this.clusterIcon_.useStyle(sums);
  this.clusterIcon_.show();
};


/**
 * Determines if a marker has already been added to the cluster.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @return {boolean} True if the marker has already been added.
 */
Cluster.prototype.isMarkerAlreadyAdded_ = function (marker) {
  var i;
  if (this.markers_.indexOf) {
    return this.markers_.indexOf(marker) !== -1;
  } else {
    for (i = 0; i < this.markers_.length; i++) {
      if (marker === this.markers_[i]) {
        return true;
      }
    }
  }
  return false;
};


/**
 * @name MarkerClustererOptions
 * @class This class represents the optional parameter passed to
 *  the {@link MarkerClusterer} constructor.
 * @property {number} [gridSize=60] The grid size of a cluster in pixels. The grid is a square.
 * @property {number} [maxZoom=null] The maximum zoom level at which clustering is enabled or
 *  <code>null</code> if clustering is to be enabled at all zoom levels.
 * @property {boolean} [zoomOnClick=true] Whether to zoom the map when a cluster marker is
 *  clicked. You may want to set this to <code>false</code> if you have installed a handler
 *  for the <code>click</code> event and it deals with zooming on its own.
 * @property {boolean} [averageCenter=false] Whether the position of a cluster marker should be
 *  the average position of all markers in the cluster. If set to <code>false</code>, the
 *  cluster marker is positioned at the location of the first marker added to the cluster.
 * @property {number} [minimumClusterSize=2] The minimum number of markers needed in a cluster
 *  before the markers are hidden and a cluster marker appears.
 * @property {boolean} [ignoreHidden=false] Whether to ignore hidden markers in clusters. You
 *  may want to set this to <code>true</code> to ensure that hidden markers are not included
 *  in the marker count that appears on a cluster marker (this count is the value of the
 *  <code>text</code> property of the result returned by the default <code>calculator</code>).
 *  If set to <code>true</code> and you change the visibility of a marker being clustered, be
 *  sure to also call <code>MarkerClusterer.repaint()</code>.
 * @property {boolean} [printable=false] Whether to make the cluster icons printable. Do not
 *  set to <code>true</code> if the <code>url</code> fields in the <code>styles</code> array
 *  refer to image sprite files.
 * @property {string} [title=""] The tooltip to display when the mouse moves over a cluster
 *  marker. (Alternatively, you can use a custom <code>calculator</code> function to specify a
 *  different tooltip for each cluster marker.)
 * @property {function} [calculator=MarkerClusterer.CALCULATOR] The function used to determine
 *  the text to be displayed on a cluster marker and the index indicating which style to use
 *  for the cluster marker. The input parameters for the function are (1) the array of markers
 *  represented by a cluster marker and (2) the number of cluster icon styles. It returns a
 *  {@link ClusterIconInfo} object. The default <code>calculator</code> returns a
 *  <code>text</code> property which is the number of markers in the cluster and an
 *  <code>index</code> property which is one higher than the lowest integer such that
 *  <code>10^i</code> exceeds the number of markers in the cluster, or the size of the styles
 *  array, whichever is less. The <code>styles</code> array element used has an index of
 *  <code>index</code> minus 1. For example, the default <code>calculator</code> returns a
 *  <code>text</code> value of <code>"125"</code> and an <code>index</code> of <code>3</code>
 *  for a cluster icon representing 125 markers so the element used in the <code>styles</code>
 *  array is <code>2</code>. A <code>calculator</code> may also return a <code>title</code>
 *  property that contains the text of the tooltip to be used for the cluster marker. If
 *   <code>title</code> is not defined, the tooltip is set to the value of the <code>title</code>
 *   property for the MarkerClusterer.
 * @property {string} [clusterClass="cluster"] The name of the CSS class defining general styles
 *  for the cluster markers. Use this class to define CSS styles that are not set up by the code
 *  that processes the <code>styles</code> array.
 * @property {Array} [styles] An array of {@link ClusterIconStyle} elements defining the styles
 *  of the cluster markers to be used. The element to be used to style a given cluster marker
 *  is determined by the function defined by the <code>calculator</code> property.
 *  The default is an array of {@link ClusterIconStyle} elements whose properties are derived
 *  from the values for <code>imagePath</code>, <code>imageExtension</code>, and
 *  <code>imageSizes</code>.
 * @property {number} [batchSize=MarkerClusterer.BATCH_SIZE] Set this property to the
 *  number of markers to be processed in a single batch when using a browser other than
 *  Internet Explorer (for Internet Explorer, use the batchSizeIE property instead).
 * @property {number} [batchSizeIE=MarkerClusterer.BATCH_SIZE_IE] When Internet Explorer is
 *  being used, markers are processed in several batches with a small delay inserted between
 *  each batch in an attempt to avoid Javascript timeout errors. Set this property to the
 *  number of markers to be processed in a single batch; select as high a number as you can
 *  without causing a timeout error in the browser. This number might need to be as low as 100
 *  if 15,000 markers are being managed, for example.
 * @property {string} [imagePath=MarkerClusterer.IMAGE_PATH]
 *  The full URL of the root name of the group of image files to use for cluster icons.
 *  The complete file name is of the form <code>imagePath</code>n.<code>imageExtension</code>
 *  where n is the image file number (1, 2, etc.).
 * @property {string} [imageExtension=MarkerClusterer.IMAGE_EXTENSION]
 *  The extension name for the cluster icon image files (e.g., <code>"png"</code> or
 *  <code>"jpg"</code>).
 * @property {Array} [imageSizes=MarkerClusterer.IMAGE_SIZES]
 *  An array of numbers containing the widths of the group of
 *  <code>imagePath</code>n.<code>imageExtension</code> image files.
 *  (The images are assumed to be square.)
 */
/**
 * Creates a MarkerClusterer object with the options specified in {@link MarkerClustererOptions}.
 * @constructor
 * @extends google.maps.OverlayView
 * @param {google.maps.Map} map The Google map to attach to.
 * @param {Array.<google.maps.Marker>} [opt_markers] The markers to be added to the cluster.
 * @param {MarkerClustererOptions} [opt_options] The optional parameters.
 */
function MarkerClusterer(map, opt_markers, opt_options) {
  // MarkerClusterer implements google.maps.OverlayView interface. We use the
  // extend function to extend MarkerClusterer with google.maps.OverlayView
  // because it might not always be available when the code is defined so we
  // look for it at the last possible moment. If it doesn't exist now then
  // there is no point going ahead :)
  this.extend(MarkerClusterer, google.maps.OverlayView);

  opt_markers = opt_markers || [];
  opt_options = opt_options || {};

  this.markers_ = [];
  this.clusters_ = [];
  this.listeners_ = [];
  this.activeMap_ = null;
  this.ready_ = false;

  this.gridSize_ = opt_options.gridSize || 60;
  this.minClusterSize_ = opt_options.minimumClusterSize || 2;
  this.maxZoom_ = opt_options.maxZoom || null;
  this.styles_ = opt_options.styles || [];
  this.title_ = opt_options.title || "";
  this.zoomOnClick_ = true;
  if (opt_options.zoomOnClick !== undefined) {
    this.zoomOnClick_ = opt_options.zoomOnClick;
  }
  this.averageCenter_ = false;
  if (opt_options.averageCenter !== undefined) {
    this.averageCenter_ = opt_options.averageCenter;
  }
  this.ignoreHidden_ = false;
  if (opt_options.ignoreHidden !== undefined) {
    this.ignoreHidden_ = opt_options.ignoreHidden;
  }
  this.printable_ = false;
  if (opt_options.printable !== undefined) {
    this.printable_ = opt_options.printable;
  }
  this.imagePath_ = opt_options.imagePath || MarkerClusterer.IMAGE_PATH;
  this.imageExtension_ = opt_options.imageExtension || MarkerClusterer.IMAGE_EXTENSION;
  this.imageSizes_ = opt_options.imageSizes || MarkerClusterer.IMAGE_SIZES;
  this.calculator_ = opt_options.calculator || MarkerClusterer.CALCULATOR;
  this.batchSize_ = opt_options.batchSize || MarkerClusterer.BATCH_SIZE;
  this.batchSizeIE_ = opt_options.batchSizeIE || MarkerClusterer.BATCH_SIZE_IE;
  this.clusterClass_ = opt_options.clusterClass || "cluster";

  if (navigator.userAgent.toLowerCase().indexOf("msie") !== -1) {
    // Try to avoid IE timeout when processing a huge number of markers:
    this.batchSize_ = this.batchSizeIE_;
  }

  this.setupStyles_();

  this.addMarkers(opt_markers, true);
  this.setMap(map); // Note: this causes onAdd to be called
}


/**
 * Implementation of the onAdd interface method.
 * @ignore
 */
MarkerClusterer.prototype.onAdd = function () {
  var cMarkerClusterer = this;

  this.activeMap_ = this.getMap();
  this.ready_ = true;

  this.repaint();

  // Add the map event listeners
  this.listeners_ = [
    google.maps.event.addListener(this.getMap(), "zoom_changed", function () {
      cMarkerClusterer.resetViewport_(false);
      // Workaround for this Google bug: when map is at level 0 and "-" of
      // zoom slider is clicked, a "zoom_changed" event is fired even though
      // the map doesn't zoom out any further. In this situation, no "idle"
      // event is triggered so the cluster markers that have been removed
      // do not get redrawn. Same goes for a zoom in at maxZoom.
      if (this.getZoom() === (this.get("minZoom") || 0) || this.getZoom() === this.get("maxZoom")) {
        google.maps.event.trigger(this, "idle");
      }
    }),
    google.maps.event.addListener(this.getMap(), "idle", function () {
      cMarkerClusterer.redraw_();
    })
  ];
};


/**
 * Implementation of the onRemove interface method.
 * Removes map event listeners and all cluster icons from the DOM.
 * All managed markers are also put back on the map.
 * @ignore
 */
MarkerClusterer.prototype.onRemove = function () {
  var i;

  // Put all the managed markers back on the map:
  for (i = 0; i < this.markers_.length; i++) {
    if (this.markers_[i].getMap() !== this.activeMap_) {
      this.markers_[i].setMap(this.activeMap_);
    }
  }

  // Remove all clusters:
  for (i = 0; i < this.clusters_.length; i++) {
    this.clusters_[i].remove();
  }
  this.clusters_ = [];

  // Remove map event listeners:
  for (i = 0; i < this.listeners_.length; i++) {
    google.maps.event.removeListener(this.listeners_[i]);
  }
  this.listeners_ = [];

  this.activeMap_ = null;
  this.ready_ = false;
};


/**
 * Implementation of the draw interface method.
 * @ignore
 */
MarkerClusterer.prototype.draw = function () {};


/**
 * Sets up the styles object.
 */
MarkerClusterer.prototype.setupStyles_ = function () {
  var i, size;
  if (this.styles_.length > 0) {
    return;
  }

  for (i = 0; i < this.imageSizes_.length; i++) {
    size = this.imageSizes_[i];
    this.styles_.push({
      url: this.imagePath_ + (i + 1) + "." + this.imageExtension_,
      height: size,
      width: size
    });
  }
};


/**
 *  Fits the map to the bounds of the markers managed by the clusterer.
 */
MarkerClusterer.prototype.fitMapToMarkers = function () {
  var i;
  var markers = this.getMarkers();
  var bounds = new google.maps.LatLngBounds();
  for (i = 0; i < markers.length; i++) {
    bounds.extend(markers[i].getPosition());
  }

  this.getMap().fitBounds(bounds);
};


/**
 * Returns the value of the <code>gridSize</code> property.
 *
 * @return {number} The grid size.
 */
MarkerClusterer.prototype.getGridSize = function () {
  return this.gridSize_;
};


/**
 * Sets the value of the <code>gridSize</code> property.
 *
 * @param {number} gridSize The grid size.
 */
MarkerClusterer.prototype.setGridSize = function (gridSize) {
  this.gridSize_ = gridSize;
};


/**
 * Returns the value of the <code>minimumClusterSize</code> property.
 *
 * @return {number} The minimum cluster size.
 */
MarkerClusterer.prototype.getMinimumClusterSize = function () {
  return this.minClusterSize_;
};

/**
 * Sets the value of the <code>minimumClusterSize</code> property.
 *
 * @param {number} minimumClusterSize The minimum cluster size.
 */
MarkerClusterer.prototype.setMinimumClusterSize = function (minimumClusterSize) {
  this.minClusterSize_ = minimumClusterSize;
};


/**
 *  Returns the value of the <code>maxZoom</code> property.
 *
 *  @return {number} The maximum zoom level.
 */
MarkerClusterer.prototype.getMaxZoom = function () {
  return this.maxZoom_;
};


/**
 *  Sets the value of the <code>maxZoom</code> property.
 *
 *  @param {number} maxZoom The maximum zoom level.
 */
MarkerClusterer.prototype.setMaxZoom = function (maxZoom) {
  this.maxZoom_ = maxZoom;
};


/**
 *  Returns the value of the <code>styles</code> property.
 *
 *  @return {Array} The array of styles defining the cluster markers to be used.
 */
MarkerClusterer.prototype.getStyles = function () {
  return this.styles_;
};


/**
 *  Sets the value of the <code>styles</code> property.
 *
 *  @param {Array.<ClusterIconStyle>} styles The array of styles to use.
 */
MarkerClusterer.prototype.setStyles = function (styles) {
  this.styles_ = styles;
};


/**
 * Returns the value of the <code>title</code> property.
 *
 * @return {string} The content of the title text.
 */
MarkerClusterer.prototype.getTitle = function () {
  return this.title_;
};


/**
 *  Sets the value of the <code>title</code> property.
 *
 *  @param {string} title The value of the title property.
 */
MarkerClusterer.prototype.setTitle = function (title) {
  this.title_ = title;
};


/**
 * Returns the value of the <code>zoomOnClick</code> property.
 *
 * @return {boolean} True if zoomOnClick property is set.
 */
MarkerClusterer.prototype.getZoomOnClick = function () {
  return this.zoomOnClick_;
};


/**
 *  Sets the value of the <code>zoomOnClick</code> property.
 *
 *  @param {boolean} zoomOnClick The value of the zoomOnClick property.
 */
MarkerClusterer.prototype.setZoomOnClick = function (zoomOnClick) {
  this.zoomOnClick_ = zoomOnClick;
};


/**
 * Returns the value of the <code>averageCenter</code> property.
 *
 * @return {boolean} True if averageCenter property is set.
 */
MarkerClusterer.prototype.getAverageCenter = function () {
  return this.averageCenter_;
};


/**
 *  Sets the value of the <code>averageCenter</code> property.
 *
 *  @param {boolean} averageCenter The value of the averageCenter property.
 */
MarkerClusterer.prototype.setAverageCenter = function (averageCenter) {
  this.averageCenter_ = averageCenter;
};


/**
 * Returns the value of the <code>ignoreHidden</code> property.
 *
 * @return {boolean} True if ignoreHidden property is set.
 */
MarkerClusterer.prototype.getIgnoreHidden = function () {
  return this.ignoreHidden_;
};


/**
 *  Sets the value of the <code>ignoreHidden</code> property.
 *
 *  @param {boolean} ignoreHidden The value of the ignoreHidden property.
 */
MarkerClusterer.prototype.setIgnoreHidden = function (ignoreHidden) {
  this.ignoreHidden_ = ignoreHidden;
};


/**
 * Returns the value of the <code>imageExtension</code> property.
 *
 * @return {string} The value of the imageExtension property.
 */
MarkerClusterer.prototype.getImageExtension = function () {
  return this.imageExtension_;
};


/**
 *  Sets the value of the <code>imageExtension</code> property.
 *
 *  @param {string} imageExtension The value of the imageExtension property.
 */
MarkerClusterer.prototype.setImageExtension = function (imageExtension) {
  this.imageExtension_ = imageExtension;
};


/**
 * Returns the value of the <code>imagePath</code> property.
 *
 * @return {string} The value of the imagePath property.
 */
MarkerClusterer.prototype.getImagePath = function () {
  return this.imagePath_;
};


/**
 *  Sets the value of the <code>imagePath</code> property.
 *
 *  @param {string} imagePath The value of the imagePath property.
 */
MarkerClusterer.prototype.setImagePath = function (imagePath) {
  this.imagePath_ = imagePath;
};


/**
 * Returns the value of the <code>imageSizes</code> property.
 *
 * @return {Array} The value of the imageSizes property.
 */
MarkerClusterer.prototype.getImageSizes = function () {
  return this.imageSizes_;
};


/**
 *  Sets the value of the <code>imageSizes</code> property.
 *
 *  @param {Array} imageSizes The value of the imageSizes property.
 */
MarkerClusterer.prototype.setImageSizes = function (imageSizes) {
  this.imageSizes_ = imageSizes;
};


/**
 * Returns the value of the <code>calculator</code> property.
 *
 * @return {function} the value of the calculator property.
 */
MarkerClusterer.prototype.getCalculator = function () {
  return this.calculator_;
};


/**
 * Sets the value of the <code>calculator</code> property.
 *
 * @param {function(Array.<google.maps.Marker>, number)} calculator The value
 *  of the calculator property.
 */
MarkerClusterer.prototype.setCalculator = function (calculator) {
  this.calculator_ = calculator;
};


/**
 * Returns the value of the <code>printable</code> property.
 *
 * @return {boolean} the value of the printable property.
 */
MarkerClusterer.prototype.getPrintable = function () {
  return this.printable_;
};


/**
 * Sets the value of the <code>printable</code> property.
 *
 *  @param {boolean} printable The value of the printable property.
 */
MarkerClusterer.prototype.setPrintable = function (printable) {
  this.printable_ = printable;
};


/**
 * Returns the value of the <code>batchSizeIE</code> property.
 *
 * @return {number} the value of the batchSizeIE property.
 */
MarkerClusterer.prototype.getBatchSizeIE = function () {
  return this.batchSizeIE_;
};


/**
 * Sets the value of the <code>batchSizeIE</code> property.
 *
 *  @param {number} batchSizeIE The value of the batchSizeIE property.
 */
MarkerClusterer.prototype.setBatchSizeIE = function (batchSizeIE) {
  this.batchSizeIE_ = batchSizeIE;
};


/**
 * Returns the value of the <code>clusterClass</code> property.
 *
 * @return {string} the value of the clusterClass property.
 */
MarkerClusterer.prototype.getClusterClass = function () {
  return this.clusterClass_;
};


/**
 * Sets the value of the <code>clusterClass</code> property.
 *
 *  @param {string} clusterClass The value of the clusterClass property.
 */
MarkerClusterer.prototype.setClusterClass = function (clusterClass) {
  this.clusterClass_ = clusterClass;
};


/**
 *  Returns the array of markers managed by the clusterer.
 *
 *  @return {Array} The array of markers managed by the clusterer.
 */
MarkerClusterer.prototype.getMarkers = function () {
  return this.markers_;
};


/**
 *  Returns the number of markers managed by the clusterer.
 *
 *  @return {number} The number of markers.
 */
MarkerClusterer.prototype.getTotalMarkers = function () {
  return this.markers_.length;
};


/**
 * Returns the current array of clusters formed by the clusterer.
 *
 * @return {Array} The array of clusters formed by the clusterer.
 */
MarkerClusterer.prototype.getClusters = function () {
  return this.clusters_;
};


/**
 * Returns the number of clusters formed by the clusterer.
 *
 * @return {number} The number of clusters formed by the clusterer.
 */
MarkerClusterer.prototype.getTotalClusters = function () {
  return this.clusters_.length;
};


/**
 * Adds a marker to the clusterer. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>.
 *
 * @param {google.maps.Marker} marker The marker to add.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 */
MarkerClusterer.prototype.addMarker = function (marker, opt_nodraw) {
  this.pushMarkerTo_(marker);
  if (!opt_nodraw) {
    this.redraw_();
  }
};


/**
 * Adds an array of markers to the clusterer. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to add.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 */
MarkerClusterer.prototype.addMarkers = function (markers, opt_nodraw) {
  var i;
  for (i = 0; i < markers.length; i++) {
    this.pushMarkerTo_(markers[i]);
  }
  if (!opt_nodraw) {
    this.redraw_();
  }
};


/**
 * Pushes a marker to the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to add.
 */
MarkerClusterer.prototype.pushMarkerTo_ = function (marker) {
  // If the marker is draggable add a listener so we can update the clusters on the dragend:
  if (marker.getDraggable()) {
    var cMarkerClusterer = this;
    google.maps.event.addListener(marker, "dragend", function () {
      if (cMarkerClusterer.ready_) {
        this.isAdded = false;
        cMarkerClusterer.repaint();
      }
    });
  }
  marker.isAdded = false;
  this.markers_.push(marker);
};


/**
 * Removes a marker from the cluster.  The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if the
 *  marker was removed from the clusterer.
 *
 * @param {google.maps.Marker} marker The marker to remove.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 * @return {boolean} True if the marker was removed from the clusterer.
 */
MarkerClusterer.prototype.removeMarker = function (marker, opt_nodraw) {
  var removed = this.removeMarker_(marker);

  if (!opt_nodraw && removed) {
    this.repaint();
  }

  return removed;
};


/**
 * Removes an array of markers from the cluster. The clusters are redrawn unless
 *  <code>opt_nodraw</code> is set to <code>true</code>. Returns <code>true</code> if markers
 *  were removed from the clusterer.
 *
 * @param {Array.<google.maps.Marker>} markers The markers to remove.
 * @param {boolean} [opt_nodraw] Set to <code>true</code> to prevent redrawing.
 * @return {boolean} True if markers were removed from the clusterer.
 */
MarkerClusterer.prototype.removeMarkers = function (markers, opt_nodraw) {
  var i, r;
  var removed = false;

  for (i = 0; i < markers.length; i++) {
    r = this.removeMarker_(markers[i]);
    removed = removed || r;
  }

  if (!opt_nodraw && removed) {
    this.repaint();
  }

  return removed;
};


/**
 * Removes a marker and returns true if removed, false if not.
 *
 * @param {google.maps.Marker} marker The marker to remove
 * @return {boolean} Whether the marker was removed or not
 */
MarkerClusterer.prototype.removeMarker_ = function (marker) {
  var i;
  var index = -1;
  if (this.markers_.indexOf) {
    index = this.markers_.indexOf(marker);
  } else {
    for (i = 0; i < this.markers_.length; i++) {
      if (marker === this.markers_[i]) {
        index = i;
        break;
      }
    }
  }

  if (index === -1) {
    // Marker is not in our list of markers, so do nothing:
    return false;
  }

  marker.setMap(null);
  this.markers_.splice(index, 1); // Remove the marker from the list of managed markers
  return true;
};


/**
 * Removes all clusters and markers from the map and also removes all markers
 *  managed by the clusterer.
 */
MarkerClusterer.prototype.clearMarkers = function () {
  this.resetViewport_(true);
  this.markers_ = [];
};


/**
 * Recalculates and redraws all the marker clusters from scratch.
 *  Call this after changing any properties.
 */
MarkerClusterer.prototype.repaint = function () {
  var oldClusters = this.clusters_.slice();
  this.clusters_ = [];
  this.resetViewport_(false);
  this.redraw_();

  // Remove the old clusters.
  // Do it in a timeout to prevent blinking effect.
  setTimeout(function () {
    var i;
    for (i = 0; i < oldClusters.length; i++) {
      oldClusters[i].remove();
    }
  }, 0);
};


/**
 * Returns the current bounds extended by the grid size.
 *
 * @param {google.maps.LatLngBounds} bounds The bounds to extend.
 * @return {google.maps.LatLngBounds} The extended bounds.
 * @ignore
 */
MarkerClusterer.prototype.getExtendedBounds = function (bounds) {
  var projection = this.getProjection();

  // Turn the bounds into latlng.
  var tr = new google.maps.LatLng(bounds.getNorthEast().lat(),
      bounds.getNorthEast().lng());
  var bl = new google.maps.LatLng(bounds.getSouthWest().lat(),
      bounds.getSouthWest().lng());

  // Convert the points to pixels and the extend out by the grid size.
  var trPix = projection.fromLatLngToDivPixel(tr);
  trPix.x += this.gridSize_;
  trPix.y -= this.gridSize_;

  var blPix = projection.fromLatLngToDivPixel(bl);
  blPix.x -= this.gridSize_;
  blPix.y += this.gridSize_;

  // Convert the pixel points back to LatLng
  var ne = projection.fromDivPixelToLatLng(trPix);
  var sw = projection.fromDivPixelToLatLng(blPix);

  // Extend the bounds to contain the new bounds.
  bounds.extend(ne);
  bounds.extend(sw);

  return bounds;
};


/**
 * Redraws all the clusters.
 */
MarkerClusterer.prototype.redraw_ = function () {
  this.createClusters_(0);
};


/**
 * Removes all clusters from the map. The markers are also removed from the map
 *  if <code>opt_hide</code> is set to <code>true</code>.
 *
 * @param {boolean} [opt_hide] Set to <code>true</code> to also remove the markers
 *  from the map.
 */
MarkerClusterer.prototype.resetViewport_ = function (opt_hide) {
  var i, marker;
  // Remove all the clusters
  for (i = 0; i < this.clusters_.length; i++) {
    this.clusters_[i].remove();
  }
  this.clusters_ = [];

  // Reset the markers to not be added and to be removed from the map.
  for (i = 0; i < this.markers_.length; i++) {
    marker = this.markers_[i];
    marker.isAdded = false;
    if (opt_hide) {
      marker.setMap(null);
    }
  }
};


/**
 * Calculates the distance between two latlng locations in km.
 *
 * @param {google.maps.LatLng} p1 The first lat lng point.
 * @param {google.maps.LatLng} p2 The second lat lng point.
 * @return {number} The distance between the two points in km.
 * @see http://www.movable-type.co.uk/scripts/latlong.html
*/
MarkerClusterer.prototype.distanceBetweenPoints_ = function (p1, p2) {
  var R = 6371; // Radius of the Earth in km
  var dLat = (p2.lat() - p1.lat()) * Math.PI / 180;
  var dLon = (p2.lng() - p1.lng()) * Math.PI / 180;
  var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(p1.lat() * Math.PI / 180) * Math.cos(p2.lat() * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  var d = R * c;
  return d;
};


/**
 * Determines if a marker is contained in a bounds.
 *
 * @param {google.maps.Marker} marker The marker to check.
 * @param {google.maps.LatLngBounds} bounds The bounds to check against.
 * @return {boolean} True if the marker is in the bounds.
 */
MarkerClusterer.prototype.isMarkerInBounds_ = function (marker, bounds) {
  return bounds.contains(marker.getPosition());
};


/**
 * Adds a marker to a cluster, or creates a new cluster.
 *
 * @param {google.maps.Marker} marker The marker to add.
 */
MarkerClusterer.prototype.addToClosestCluster_ = function (marker) {
  var i, d, cluster, center;
  var distance = 40000; // Some large number
  var clusterToAddTo = null;
  for (i = 0; i < this.clusters_.length; i++) {
    cluster = this.clusters_[i];
    center = cluster.getCenter();
    if (center) {
      d = this.distanceBetweenPoints_(center, marker.getPosition());
      if (d < distance) {
        distance = d;
        clusterToAddTo = cluster;
      }
    }
  }

  if (clusterToAddTo && clusterToAddTo.isMarkerInClusterBounds(marker)) {
    clusterToAddTo.addMarker(marker);
  } else {
    cluster = new Cluster(this);
    cluster.addMarker(marker);
    this.clusters_.push(cluster);
  }
};


/**
 * Creates the clusters. This is done in batches to avoid timeout errors
 *  in some browsers when there is a huge number of markers.
 *
 * @param {number} iFirst The index of the first marker in the batch of
 *  markers to be added to clusters.
 */
MarkerClusterer.prototype.createClusters_ = function (iFirst) {
  var i, marker;
  var mapBounds;
  var cMarkerClusterer = this;
  if (!this.ready_) {
    return;
  }

  // Cancel previous batch processing if we're working on the first batch:
  if (iFirst === 0) {
    /**
     * This event is fired when the <code>MarkerClusterer</code> begins
     *  clustering markers.
     * @name MarkerClusterer#clusteringbegin
     * @param {MarkerClusterer} mc The MarkerClusterer whose markers are being clustered.
     * @event
     */
    google.maps.event.trigger(this, "clusteringbegin", this);

    if (typeof this.timerRefStatic !== "undefined") {
      clearTimeout(this.timerRefStatic);
      delete this.timerRefStatic;
    }
  }

  // Get our current map view bounds.
  // Create a new bounds object so we don't affect the map.
  //
  // See Comments 9 & 11 on Issue 3651 relating to this workaround for a Google Maps bug:
  if (this.getMap().getZoom() > 3) {
    mapBounds = new google.maps.LatLngBounds(this.getMap().getBounds().getSouthWest(),
      this.getMap().getBounds().getNorthEast());
  } else {
    mapBounds = new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625));
  }
  var bounds = this.getExtendedBounds(mapBounds);

  var iLast = Math.min(iFirst + this.batchSize_, this.markers_.length);

  for (i = iFirst; i < iLast; i++) {
    marker = this.markers_[i];
    if (!marker.isAdded && this.isMarkerInBounds_(marker, bounds)) {
      if (!this.ignoreHidden_ || (this.ignoreHidden_ && marker.getVisible())) {
        this.addToClosestCluster_(marker);
      }
    }
  }

  if (iLast < this.markers_.length) {
    this.timerRefStatic = setTimeout(function () {
      cMarkerClusterer.createClusters_(iLast);
    }, 0);
  } else {
    delete this.timerRefStatic;

    /**
     * This event is fired when the <code>MarkerClusterer</code> stops
     *  clustering markers.
     * @name MarkerClusterer#clusteringend
     * @param {MarkerClusterer} mc The MarkerClusterer whose markers are being clustered.
     * @event
     */
    google.maps.event.trigger(this, "clusteringend", this);
  }
};


/**
 * Extends an object's prototype by another's.
 *
 * @param {Object} obj1 The object to be extended.
 * @param {Object} obj2 The object to extend with.
 * @return {Object} The new extended object.
 * @ignore
 */
MarkerClusterer.prototype.extend = function (obj1, obj2) {
  return (function (object) {
    var property;
    for (property in object.prototype) {
      this.prototype[property] = object.prototype[property];
    }
    return this;
  }).apply(obj1, [obj2]);
};


/**
 * The default function for determining the label text and style
 * for a cluster icon.
 *
 * @param {Array.<google.maps.Marker>} markers The array of markers represented by the cluster.
 * @param {number} numStyles The number of marker styles available.
 * @return {ClusterIconInfo} The information resource for the cluster.
 * @constant
 * @ignore
 */
MarkerClusterer.CALCULATOR = function (markers, numStyles) {
  var index = 0;
  var title = "";
  var count = markers.length.toString();

  var dv = count;
  while (dv !== 0) {
    dv = parseInt(dv / 10, 10);
    index++;
  }

  index = Math.min(index, numStyles);
  return {
    text: count,
    index: index,
    title: title
  };
};


/**
 * The number of markers to process in one batch.
 *
 * @type {number}
 * @constant
 */
MarkerClusterer.BATCH_SIZE = 2000;


/**
 * The number of markers to process in one batch (IE only).
 *
 * @type {number}
 * @constant
 */
MarkerClusterer.BATCH_SIZE_IE = 500;


/**
 * The default root name for the marker cluster images.
 *
 * @type {string}
 * @constant
 */
MarkerClusterer.IMAGE_PATH = "http://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m";


/**
 * The default extension name for the marker cluster images.
 *
 * @type {string}
 * @constant
 */
MarkerClusterer.IMAGE_EXTENSION = "png";


/**
 * The default array of sizes for the marker cluster images.
 *
 * @type {Array.<number>}
 * @constant
 */
MarkerClusterer.IMAGE_SIZES = [53, 56, 66, 78, 90];
;
//

//le regroupement d'icones est il actif
var option_clustering = true;
// ajoute t on les traces complémentaires
var option_showaddons = true;

function ATF_DrawPois(categorie, poisvarname, customicone, options, vbl) {

	if (typeof (vbl) == 'undefined')
		vbl = 0;

	var map1 = Drupal.gmap.getMap(mapid);
	// IE6-IE7 ... init getMap trop lent, on doit checker
	if (typeof (map1.map) == 'undefined' && vbl < 10) {
		if (typeof customicone == 'object') {
			icone = JSON.stringify(customicone);
		} else if (typeof customicone == 'string') {
			icone = '"' + customicone + '"';
		}
		if (typeof options == 'object') {
			options = JSON.stringify(options);
		} else if (typeof options == 'string') {
			options = '"' + options + '"';
		}

		setTimeout('ATF_DrawPois("' + categorie + '","' + poisvarname + '",'
				+ icone + ',' + options + ',' + (1 + vbl) + ');', 500);
		return;
	}
	//
	if (typeof options != 'undefined') {
		if (typeof options['clustering'] != 'undefined') {
			option_clustering = options['clustering'];
		}
		if (typeof options['showaddons'] != 'undefined') {
			option_showaddons = options['showaddons'];
		}
	}

	// optimise l'affichage en supprimant du traitement les poi existant
	// creation d'une sequence regroupant par catégorie les pois associés
	if (typeof (poisdisplayed[categorie]) == 'undefined') {
		// console.log("creation de la categorie " + categorie);
		poisdisplayed[categorie] = new Array();// [];
	}
	
//console.log(poisvarname);
	
	var tmppois = eval(poisvarname);
//console.log("ATF_DrawPois");
//console.log(pois2)
	// on surveille si le poi est toujours affiché, et supprime les traces liés a
	// sa taxonomie
	for ( var nid in poisdisplayed[categorie]) {
		// le poi n'est plus a afficher on le detruit
		if (typeof (tmppois[nid]) == 'undefined') {

			var ctx = poisdisplayed[categorie][nid];
			if (option_clustering || (ctx && ctx.overlay)) {
				if (!option_clustering) {
					if (mapsversion == 2) {
						map1.map.removeOverlay(ctx.overlay);
					} else {
						ctx.overlay.setMap();
					}
				}

				$.each(ctx.taxo, function(i, tid) {
					if (typeof (taxomapping[tid]) != 'undefined') {
						var poiindex = taxomapping[tid]['pois'].indexOf(nid);
						if (poiindex != -1) {
							taxomapping[tid]['pois'].splice(poiindex, 1);
							// plus aucun poi utilise le trace on le vire
							if (taxomapping[tid]['pois'].length == 0) {

								var traceid = taxomapping[tid]['mid'];
								var ctxarray = traces[traceid];

								$.each(ctxarray, function(i, ctx) {
									if (mapsversion == 2) {
										map1.map.removeOverlay(ctx.overlay);
									} else {
										ctx.overlay.setMap();
									}
								});
							}
						}
					}
				});

				delete poisdisplayed[categorie][nid];
			}
		}
	}

	var ctxs = new Array();

	for ( var nid in tmppois) {
		for ( var cat in poisdisplayed) {
			// le poi est deja affiche on passe sa création
			if (typeof (poisdisplayed[cat][nid]) != 'undefined') {
				delete tmppois[nid];
				//
				if (option_clustering) {
					var ctx = poisdisplayed[cat][nid];
					ctxs.push(ATF_Set_Point(ctx));
				}
			}
		}
	}

	
	
	var bounds = new google.maps.LatLngBounds();
 
  
    
  
 
  
  
	
	for ( var nid in tmppois) {
		var j = tmppois[nid];

		var taxos = j[6];
		var options = j[7];

		if (mapsversion == 2) {
			tmppoint = new GLatLng(j[1], j[2])
		}
		if (mapsversion == 3) {
			tmppoint = new google.maps.LatLng(j[1], j[2]);
		}
		bounds.extend(tmppoint);
		
		var ctx = {
			// type:'marker',
			nid : nid,
			overlay : null,
			more : j[5],
			points : new Array(tmppoint),
			title : {
				'' : j[3]
			},
			marker : '',
			taxo : taxos,
			type : j[0],
		};

		if (typeof options != 'undefined' && typeof options['icon'] != 'undefined') {
			ctx.marker = options['icon'];
		} else {
			// si il existe une icone configurée pour le content type via l'admin
			if (icones[j[0]] != undefined) {
				ctx.marker = icones[j[0]];
			}
			//
			// quel icone afficher pour ce poi
			if (typeof (customicone) != "undefined") {

				if (typeof customicone == 'object') {
					if (customicone[j[0]] != undefined) {
						if (icones[customicone[j[0]]] != undefined) {
							ctx.marker = icones[customicone[j[0]]];
						}
					}
				}

				if (typeof customicone == 'string') {
					if (icones[customicone] != undefined) {
						ctx.marker = icones[customicone];
					}
				}
			}
		}

		// ctx.marker = Drupal.gmap.icons[ icones[ ctx.marker ] ];
		// console.log( ctx.marker );

		// traite l'affichage des tracés (et autre) associé aux termes de la taxo du
		// poi
		if (option_showaddons) {
			$.each(taxos, function(i, tid) {
				if (typeof (taxomapping[tid]) != 'undefined') {
					var traceid = taxomapping[tid]['mid'];
					// aucun poi utilise le trace on l'ajoute
					if (taxomapping[tid]['pois'].length == 0) {

						var ctxarray = traces[traceid];
						//
						if (typeof (ctxarray) != 'undefined')
							$.each(ctxarray, function(i, ctx2) {
								switch (ctx2.type) {
								case 'point':
									ATF_Draw_Point(ctx2);
									break;

								case 'polygon':
								case 'polyline':
									ATF_Draw_Polygon(ctx2);
									break;

								case 'circle':
									ATF_Draw_Circle(ctx2);
									break;
								}
							});
					}

					var poiindex = taxomapping[tid]['pois'].indexOf(nid);
					// le poi n'est pas encore dans la liste
					if (poiindex == -1) {
						taxomapping[tid]['pois'].push(nid);
					}
				}
			});
		}

		map1.map.fitBounds(bounds);
		 
		
		
		
		
		poisdisplayed[categorie][nid] = ctx;

		if (!option_clustering) {
			ATF_Draw_Point(ctx);
		} else {
			ctxs.push(ATF_Set_Point(ctx));
		}
		//alert('ok');
	}

	// TODO : la version markerclusteredplus est plus performante, voir pour
	// adapter
	if (option_clustering) {
		var mcOptions = {
			gridSize : 50,
			maxZoom : 14
		};

		if (typeof markerCluster == 'undefined') {
			markerCluster = new MarkerClusterer(map1.map, ctxs, mcOptions);
		} else {
			markerCluster.clearMarkers();
			markerCluster = new MarkerClusterer(map1.map, ctxs, mcOptions);
			// markerCluster.addMarkers(ctxs);
		}
	}
	
	
	setTimeout(function() { if(map1.map.getZoom() > 4)map1.map.setZoom(4); },1500);
	
	
	
	
}

// compatibilite descendante
mapsversion = 3;
if (typeof google != "undefined" && google.maps.version.substr(0, 1) == 2) {
	mapsversion = 2;
}

function ATF_POIZIndex(marker, b) { // pour le futur
	if (mapsversion == 2) {
		return GOverlay.getZIndex(marker.getPoint().lat()) + 1000000;
	}
	if (mapsversion == 3) {
		// console.log('ATF_POIZIndex');
		// console.log(marker);
		return parseInt(1000 * (90 - marker.lat()) + 1000000);
	}

}

/**
 * creation d'un poi
 * 
 * @param ctx
 * @returns {GMarker}
 */
function ATF_Set_Point(ctx) {
	var iconname = ctx.marker;
	
	var icone;
	//if (typeof (Drupal.gmap.icons) == 'undefined' || !Drupal.gmap.icons[iconname]) {
	 if(!Drupal.gmap.getIcon(iconname,0) ) {
	//	 console.log("icon introuvable " + iconname);
		iconname = '/sites/atf/media/icone_geoloc.png';// default icon
		// icone = new GIcon();
		// icone.image = iconname;
		// icone.iconSize = new GSize(37, 37);
		// icone.iconAnchor = new GPoint(37 / 2, 37);
		// icone.infoWindowAnchor = new GPoint(37 / 2, 37);

		icone = new google.maps.MarkerImage(iconname, new google.maps.Size(37, 37)/*,
				null, new google.maps.Point(37 / 2, 37)*/);

		// }
	} else {
		// console.log( "Drupal.gmap.getIcon" );
		icone = Drupal.gmap.getIcon(iconname, 0);
		icone.anchor = new google.maps.Point(37 / 2, 37);
	}
	//
	var p;
	if (mapsversion == 2)
		p = new GMarker(ctx.points[0], {
			zIndexProcess : ATF_POIZIndex,
			clickable : ((ctx.more != null) ? true : false),
			icon : icone,
			title : ctx.title[ATFLangueEdition]
		});

	if (mapsversion == 3) {
		// console.log( ctx );
		var map1 = Drupal.gmap.getMap(mapid);
		p = new google.maps.Marker({
			map : map1.map,
			position : ctx.points[0],
			anchor: new google.maps.Point(37 / 2, 37),
			zIndex : ATF_POIZIndex(ctx.points[0]),
			clickable : ((ctx.more != null) ? true : false),
			icon : icone,
			title : ctx.title[ATFLangueEdition]
		});
	}

	if (ctx.more != null) {
		$(p).data("more", ctx.more);
		if (mapsversion == 2) {
			GEvent.addListener(p, 'click', function() {
				var more = $(this).data('more')
				document.location = more;
				// console.log(more);
			});
		}
		if (mapsversion == 3) {
			google.maps.event.addListener(p, 'click', function() {
				var more = $(this).data('more')
				document.location = more;
				// console.log(more);
			});
		}
	}
	return p;
}

function ATF_Draw_Point(ctx) {

	var map1 = Drupal.gmap.getMap(mapid);

	if (ctx.overlay) {

		if (mapsversion == 2) {
			map1.map.removeOverlay(ctx.overlay);
		}
		if (mapsversion == 3) {
			ctx.overlay.setMap();
		}
	}

	// zIndexProcess:ATF_POIZIndex,//pour le futur
	//
	var p = ATF_Set_Point(ctx);
	//
	if (mapsversion == 2) {
		map1.map.addOverlay(p);
	} else {
		// ctx.overlay.setMap( map1.map );
	}
	ctx.overlay = p;
	return p;
}

function ATF_Draw_Circle(ctx) {

	if (mapsversion == 2) {
		var map1 = Drupal.gmap.getMap(mapid);
		if (ctx.overlay)
			map1.map.removeOverlay(ctx.overlay);
		p = ATF_drawCircle_Helper(ctx.points[0], ctx.radius, 40,
				'#' + ctx.style[0], Number(ctx.style[1]), ctx.style[2] / 100, '#'
						+ ctx.style[3], ctx.style[4] / 100);
		GEvent.addListener(p, 'click', function() {
			// p.setStrokeStyle({color:"#00FF33"});
			// p.setFillStyle({color:"#00FF33"});
			// alert('TODO : action vers destination par langue');
		});
		map1.map.addOverlay(p);
	}

	if (mapsversion == 3) {
		if (ctx.overlay) {
			ctx.overlay.setMap();
		}
		p = ATF_drawCircle_Helper(ctx.points[0], ctx.radius, 40,
				'#' + ctx.style[0], Number(ctx.style[1]), ctx.style[2] / 100, '#'
						+ ctx.style[3], ctx.style[4] / 100);
		google.maps.event.addListener(p, 'click', function() {
			// p.setStrokeStyle({color:"#00FF33"});
			// p.setFillStyle({color:"#00FF33"});
			// alert('TODO : action vers destination par langue');
		});
	}
	ctx.overlay = p;
	return p;
}

// circle = ATF_drawCircle_Helper( new google.maps.LatLng( 43.858775 , 4.767632
// ) ,10000,1,'#ff0000',10,60,'#00ff00',50);
// circle.setMap();//supprime le cercle

function ATF_drawCircle_Helper(tmpcenter, tmpradius, nodes, liColor, liWidth,
		liOpa, fillColo, fillOpa) {

	tmpradius = Number(tmpradius);

	fillColo = fillColo || liColor || "#0055ff";
	liWidth = liWidth || 2;
	//
	if (mapsversion == 2) {
		tmpradius = Math.min(tmpradius, 400);// km maxi ...
		// calculating km/degree
		var latConv = tmpcenter.distanceFrom(new GLatLng(tmpcenter.lat() + 0.1,
				tmpcenter.lng())) / 100;
		var lngConv = tmpcenter.distanceFrom(new GLatLng(tmpcenter.lat(), tmpcenter
				.lng() + 0.1)) / 100;
		var points = [];
		var step = parseInt(360 / nodes) || 10;
		for ( var i = 0; i <= 360; i += step) {
			var tmppoints;
			tmppoints = new GLatLng(center.lat()
					+ (tmpradius / latConv * Math.cos(i * Math.PI / 180)), center.lng()
					+ (tmpradius / lngConv * Math.sin(i * Math.PI / 180)));
			points.push(tmppoints);
		}
		return new GPolygon(points, liColor, liWidth, liOpa, fillColo, fillOpa, {
			clickable : false
		});
	}

	if (mapsversion == 3) {
		var map1 = Drupal.gmap.getMap(mapid);
		// liOpa = liOpa ;
		// fillOpa = fillOpa ;
		return new google.maps.Circle({
			map : map1.map,
			center : tmpcenter,
			radius : tmpradius * 1000,
			strokeColor : liColor,
			strokeWeight : liWidth,
			strokeOpacity : liOpa,
			fillColor : fillColo,
			fillOpacity : fillOpa,
			clickable : false
		});
	}
}

function ATF_Draw_Polygon(ctx) {

	var map1 = Drupal.gmap.getMap(mapid);
	var p;

	if (mapsversion == 2) {

		if (ctx.overlay)
			map1.map.removeOverlay(ctx.overlay);

		if (ctx.type == 'polyline') {
			p = new GPolyline(ctx.points, '#' + ctx.style[0], Number(ctx.style[1]),
					ctx.style[2] / 100); // couleur, epaisseur, alpha
		} else {
			p = new GPolygon(ctx.points, '#' + ctx.style[0], Number(ctx.style[1]),
					ctx.style[2] / 100, '#' + ctx.style[3], ctx.style[4] / 100, {
						clickable : true
					}); // couleur, epaisseur, alpha, fill color, fill alpha
		}
		GEvent.addListener(p, 'click', function() {
			// p.setStrokeStyle({color:"#00FF33"});
			// p.setFillStyle({color:"#00FF33"});
			// alert('TODO : action vers destination par langue');
		});

		map1.map.addOverlay(p);
	}

	if (mapsversion == 3) {

		if (ctx.overlay)// si deja sur la carte, supprime l'ancien objet
			ctx.overlay.setMap();

		if (ctx.type == 'polyline') {
			p = new google.maps.Polyline({
				map : map1.map,
				path : ctx.points,
				strokeColor : '#' + ctx.style[0],
				strokeWeight : Number(ctx.style[1]),
				strokeOpacity : ctx.style[2] / 100
			}); // couleur, epaisseur, alpha
		} else {
			p = new google.maps.Polygon({
				map : map1.map,
				path : ctx.points,
				strokeColor : '#' + ctx.style[0],
				strokeWeight : Number(ctx.style[1]),
				strokeOpacity : ctx.style[2] / 100,
				fillColor : '#' + ctx.style[3],
				fillOpacity : ctx.style[4] / 100,
				clickable : true
			}); // couleur, epaisseur, alpha, fill color, fill alpha
		}

		google.maps.event.addListener(p, 'click', function() {
			// p.setStrokeStyle({color:"#00FF33"});
			// p.setFillStyle({color:"#00FF33"});
			// alert('TODO : action vers destination par langue');
		});
	}

	ctx.overlay = p;
	return p;
}

function ATF_MacroParse(m) {
	if (typeof google == "undefined") {
		return;
	}
	var features = new Array();

	var marker_dump = function(n) {
		var tmp = n.split(':');
		return tmp[0];
	};

	var point_dump = function(n) {
		var tmp = n.split(':');
		tmp = tmp[2];
		tmp = tmp.split('+');
		var pts = new Array();
		$.each(tmp, function(i, j) {
			var tmplatlng = j.split(',');
			if (tmplatlng.length == 2) {
				if (mapsversion == 2)
					pts.push(new GLatLng(tmplatlng[0], tmplatlng[1]));
				if (mapsversion == 3)
					pts.push(new google.maps.LatLng(tmplatlng[0], tmplatlng[1]));
			}
		});
		return pts;
	};
	var radius_dump = function(n) {
		var tmp = n.split(':');
		tmp = tmp[2];
		tmp = tmp.split('+');
		var radius = 5;
		$.each(tmp, function(i, j) {
			var tmp2 = j.split(',');
			if (tmp2.length == 1) {
				radius = Number(tmp2[0]);
				return true;
			}
		});
		return radius;
	};

	var style_dump = function(n) {
		var tmp = n.split(':');
		tmp = tmp[1];
		tmp = tmp.replace(/#/gi, '');
		return tmp.split('/');
	};

	var title_dump = function(n) {
		var tmp = n.split(':');
		tmp = tmp[3];
		tmp = tmp.split('+');
		var titles = {};
		$.each(tmp, function(i, j) {
			var tmp2 = j.split('/');
			titles[tmp2[0]] = unescape(tmp2[1]);
		});
		return titles;
	};

	if (m.substr(0, 6) === '[gmap2') {
		m = m.slice(7, -1);

		var tmp = m.split('|');

		var items = new Array();

		$.each(tmp, function(i, j) {
			var tmp2 = j.split('=');
			switch (tmp2[0]) {
			case 'marker':
				ctx = {
					'type' : 'point',
					'title' : {},
					'points' : null,
					'marker' : null,
					'overlay' : null
				};
				ctx.marker = marker_dump(tmp2[1]);
				ctx.points = point_dump(tmp2[1]);
				ctx.title = title_dump(tmp2[1]);
				//
				features.push(ctx);
				// ATF_Draw_Point(ctx);
				break;

			case 'polygon':
			case 'line':
				ctx = {
					'type' : (tmp2[0] == 'line') ? 'polyline' : 'polygon',
					'title' : {},
					'points' : null,
					'style' : [],
					'overlay' : null
				};
				ctx.points = point_dump(tmp2[1]);
				ctx.style = style_dump(tmp2[1]);
				ctx.title = title_dump(tmp2[1]);
				//
				features.push(ctx);
				// ATF_Draw_Polygon(ctx);
				break;

			case 'circle':
				var ctx = {
					'type' : 'circle',
					'title' : {},
					'points' : null,
					'radius' : null,
					'style' : [],
					'overlay' : null
				};
				ctx.points = point_dump(tmp2[1]);
				ctx.style = style_dump(tmp2[1]);
				ctx.radius = radius_dump(tmp2[1]);
				ctx.title = title_dump(tmp2[1]);
				//
				features.push(ctx);
				// ATF_Draw_Circle(ctx);
				break;
			}
		});
	}
	return features;
}
;
pois = {};
mapid = 'macro_map';
mapsversion = 3;
ATFLangueEdition = '';
//
poisdisplayed = new Array();
var pois = new Array();
//
var ATFVideoFormat = new Array();
var ATFVideos = new Array();
// en autoplay
ATFVideoFormat['DailyMotion'] = {
	code : 'var flashvars = {};var params = {};params.wmode="transparent";params.allowScriptAccess="always";params.allowFullScreen="true";params.quality="high";var attributes = {};swfobject.embedSWF("http://www.dailymotion.com/swf/video/{IDENTIFIANT}?additionalInfos=0{OPTIONS}", "flashcontent", "455", "455", "9.0.0", "expressInstall.swf", flashvars, params, attributes);',
	mapping : {
		autoplay : 'autoPlay',
		autoplaytypeof : 0
	}
};
ATFVideoFormat['GoogleVideo'] = {
	code : 'var flashvars = {};var params = {};params.wmode="transparent";params.allowScriptAccess="always";params.allowFullScreen="true";params.quality="high";var attributes = {};swfobject.embedSWF("http://video.google.com/googleplayer.swf?docid={IDENTIFIANT}&hl=fr&fs=true{OPTIONS}", "flashcontent", "455", "455", "9.0.0", "expressInstall.swf", flashvars, params, attributes);',
	mapping : {
		autoplay : 'autoPlay',
		autoplaytypeof : true
	}
};
ATFVideoFormat['YouTube'] = {
	code : 'var flashvars = {};var params = {};params.wmode="transparent";params.allowScriptAccess="always";params.allowFullScreen="true";params.quality="high";var attributes = {};swfobject.embedSWF("http://www.youtube.com/v/{IDENTIFIANT}?hl=fr_FR&fs=1{OPTIONS}", "flashcontent", "455", "455", "9.0.0", "expressInstall.swf", flashvars, params, attributes);',
	mapping : {
		autoplay : 'autoplay',
		autoplaytypeof : 0
	}
};
ATFVideoFormat['Vimeo'] = {
	code : 'var flashvars = {};var params = {};params.wmode="transparent";params.allowScriptAccess="always";params.allowFullScreen="true";params.quality="high";var attributes = {};swfobject.embedSWF("http://vimeo.com/moogaloop.swf?clip_id={IDENTIFIANT}&amp;server=vimeo.com{OPTIONS}", "flashcontent", "455", "455", "9.0.0", "expressInstall.swf", flashvars, params, attributes);',
	mapping : {
		autoplay : 'autoplay',
		autoplaytypeof : 0
	}
};
ATFVideoFormat['Youku'] = {
	code : 'var flashvars = {};var params = {};params.wmode="transparent";params.allowScriptAccess="always";params.allowFullScreen="true";params.quality="high";var attributes = {};swfobject.embedSWF("{IDENTIFIANT}&amp;server=youku.com{OPTIONS}", "flashcontent", "455", "455", "9.0.0", "expressInstall.swf", flashvars, params, attributes);',
	mapping : {
		autoplay : 'autoplay',
		autoplaytypeof : 0
	}
};
ATFVideoFormat['FDMTravel'] = {
	code : 'var flashvars = $("<iframe width=\'240\' height=\'200\'/>");flashvars.attr("src","{IDENTIFIANT}");flashvars.appendTo("#flashcontent");',
	mapping : {
		autoplay : '',
		autoplaytypeof : 0
	}
};

//
var ATF_maps = new Array();// liste des maps
//
function SetVideo(formatvideo, videoidentifiant, divtarget, fctoptions) {

//	 var fctoptions = {
//	 autoplay : 0
//	 };

	var defaultoptions = {};
	var options = $.extend({}, defaultoptions, fctoptions || {});

	// alert(formatvideo+"/"+videoidentifiant+"/"+divtarget);
	if (videoidentifiant == '')
		return;
	
	var objvideo = ATFVideoFormat[formatvideo];
	if (typeof objvideo == 'undefined')
		return;
	var formatvideo = objvideo.code;
	if (typeof (formatvideo) != 'undefined') {
		if (divtarget != null && typeof (divtarget) != "undefined") {
			formatvideo = formatvideo.replace(/flashcontent/g, divtarget);
		}
		var stroptions = '';
		var stroptionssep = '&';
		if (typeof (options) != "undefined") {
			for ( var i in options) {
				switch (i) {
				case 'autoplay':
				
					stroptions += stroptionssep + objvideo.mapping.autoplay;
					stroptions += '=';
					switch (typeof (objvideo.mapping.autoplaytypeof)) {
					case 'number':
						stroptions += '' + Number(options[i]);
						break;
					case 'boolean':
					default:
						stroptions += '' + new Boolean(options[i]);
						break;
					}
					//stroptionssep = '&';
					break;
				}
				// objvideo.mapping.{};
			}
			// formatvideo = formatvideo.replace(/flashcontent/g, divtarget);
		}	
		//console.log(stroptions);

		formatvideo = formatvideo.replace(/{OPTIONS}/g, stroptions);
		formatvideo = formatvideo.replace(/{IDENTIFIANT}/g, videoidentifiant);
		eval(formatvideo);
		$('#flashcontentcontainer').css("display", "block");
		$('#flashcontent').css("display", "block");
	}
}

/**
 * recadre la carte avec les �l�ments affich�s
 * 
 * @param mapid
 */
function ATF_Recadre(mapid) {

	if (mapsversion == 2) {
		// var map1=Drupal.gmap.getMap(mapid).map;
		var map1 = ATF_maps[mapid];
		// snrmap_EnableDrag();
		var bounds = new GLatLngBounds();
		var nbr = 0;
		var poisnbr = pois.length;
		for ( var i = 0; i < poisnbr; i++) {
			// snrmap_map.removeOverlay(_mdlfMarkers[theme][i][j]);//un souspoi
			// par
			// poi
			var point = new GLatLng(pois[i][1], pois[i][2]);
			bounds.extend(point);
			nbr++;
		}

		if (nbr > 0) {
			if (!$('#atfgmap').hasClass('norecadre'))
				map1.setCenter(bounds.getCenter(), Math.min(8, map1
						.getBoundsZoomLevel(bounds)));
			else
				map1.setCenter(bounds.getCenter());
		}
	} else {
		var map1 = ATF_maps[mapid];
		var latlngbounds = new google.maps.LatLngBounds();
		var vbl = 0;
		var ptxcenter;

		for ( var i in pois) {
			var ptx = new google.maps.LatLng(pois[i][1], pois[i][2]);
			if (vbl == 0)
				ptxcenter = ptx;

			latlngbounds.extend(ptx);

			vbl++;
		}
		if (vbl == 1)
			map1.map.setCenter(ptxcenter);
		if (vbl > 1) {
			if (typeof (map1.map) != 'undefined') {
				map1.map.fitBounds(latlngbounds);
			}
		}
	}
}

function createMarker(mapid, logo, wgs84x, wgs84y, titre, infos, islink) {

	if (mapsversion == 2) {
		var tmp = new GIcon();
		tmp.image = logo;
		tmp.iconSize = new GSize(37, 37);
		tmp.iconAnchor = new GPoint(37 / 2, 37);
		tmp.infoWindowAnchor = new GPoint(37 / 2, 37);
		//
		var point = new GLatLng(wgs84y, wgs84x);
		var marker = new GMarker(point, {
			title : titre,
			draggable : false,
			icon : tmp,
			bouncy : false
		});
		if (infos != '') {
			if (typeof (islink) == 'undefined') {
				GEvent.addListener(marker, 'click', function() {
					// Drupal.gmap.getMap(mapid).map.openInfoWindowHtml(point,infos);
					ATF_maps[mapid].openInfoWindowHtml(point, infos);
				});
			} else {
				GEvent.addListener(marker, 'click', function() {
					window.location = infos;
				});
			}
		}
		return marker;
	} else {

	}

}

function InitATF() {

	var iNbr = ATFVideos.length;
	var sStr = '';
	var initVideo = new Array();
	var locker = false;
	// vide les vignettes videos...
	$('#flashcontentcontainervideos').html("");
	// alert('o');
	var cpt = 0;
	for ( var i = 0; i < iNbr; i++) {
		cpt++;
		// console.log(ATFVideos[i]);

		var refformat = ATFVideos[i]['refformat'];
		var refvideo = ATFVideos[i]['refvideo'];
		var options = ATFVideos[i]['options'];
		if (!locker) {
			locker = true;
			initVideo['refformat'] = refformat;
			initVideo['refvideo'] = refvideo;
			initVideo['options'] = options;
		}
		var image = ATFVideos[i]['image'];
		// var JS =
		// "SetVideo(\''+refformat+'\',\''+refvideo+'\',null,\''+options+'\');"
		if (iNbr > 1)
			// sStr+='<a href=""
			// onclick="SetVideo(\''+refformat+'\',\''+refvideo+'\');return
			// false;">'+image+'</a>';
			sStr += '<a href="" onclick="SetVideo(\'' + refformat + '\',\''
					+ refvideo + '\');return false;">' + cpt + '</a>';
	}
	$('#flashcontentcontainervideos').html(sStr);
	// lancement de la premiere video
	SetVideo(initVideo['refformat'], initVideo['refvideo'], null,
			initVideo['options']);

	var poisnbr = 0;
	for ( var i in pois) {
		poisnbr++;
	}

	var divid = '#atfgmap';// gmap-atfgmap-gmap0
	var mapid = 'macro_map';// gmap-atfgmap-gmap0

	var mapid = '';

	if (/* gmap && */poisnbr > 0) {
		$(divid).css('display', 'block');
		//
		if (mapsversion == 2) {
			mapid = 'atfgmap';
			var gmap = document.getElementById(mapid);
			gmap = new GMap2(gmap);// var
		} else {
			var divid = '#atfgmap';// gmap-atfgmap-gmap0
			mapid = 'macro_map';// gmap-atfgmap-gmap0

			var _width = 330;
			var _height = 250;
			_widthtmp = $(divid).css('width');
			if (typeof _widthtmp != 'undefined')
				_width = _widthtmp;
			_heighttmp = $(divid).css('height');
			if (typeof _heighttmp != 'undefined')
				_height = _heighttmp;
			//
			// return;
			$(divid).createGMap({
				'width' : _width,
				'height' : _height,
				"zoom" : 6,
				"maxzoom" : "6",
				"controltype" : "small",
				"align" : "None",
				"maptype" : "Map",
				"mtc" : "standard",
				"baselayers" : {
					"Physical" : 1
				},
				"behavior" : {
					"locpick" : false,
					"nodrag" : 0,
					"nokeyboard" : 1,
					"nomousezoom" : 0,
					"nocontzoom" : 0,
					"autozoom" : 0,
					"dynmarkers" : 0,
					"overview" : 0,
					"collapsehack" : 0,
					"scale" : 0,
					"extramarkerevents" : false,
					"clickableshapes" : false,
					"googlebar" : 0,
					"highlight" : 0
				},
				"markermode" : "0",
				"id" : mapid,
				"longitude" : "2.021484375",
				"latitude" : "46.89023157359399"
			}, mapid);
		}

		// on se place apres l'appel de creation du module gmap
		setTimeout("InitATF_helper('" + mapid + "')", 1);

	}
}

function InitATF_helper(mapid) {

	var zoom = 11;
	if ($('#atfgmap').hasClass('zoom11'))
		zoom = 11;
	if ($('#atfgmap').hasClass('zoom10'))
		zoom = 11;
	if ($('#atfgmap').hasClass('zoom9'))
		zoom = 9;
	if ($('#atfgmap').hasClass('zoom8'))
		zoom = 8;
	if ($('#atfgmap').hasClass('zoom7'))
		zoom = 7;
	if ($('#atfgmap').hasClass('zoom6'))
		zoom = 6;
	if ($('#atfgmap').hasClass('zoom5'))
		zoom = 5;
	if ($('#atfgmap').hasClass('zoom4'))
		zoom = 4;
	if ($('#atfgmap').hasClass('zoom3'))
		zoom = 3;
	if ($('#atfgmap').hasClass('zoom2'))
		zoom = 2;
	if ($('#atfgmap').hasClass('zoom1'))
		zoom = 1;

	if (mapsversion == 2) {

		// poisnbr = Object.keys(pois).length;
		poisnbr = pois.length;

		var gmap = document.getElementById(mapid);
		gmap = new GMap2(gmap);// var
		// gmap=Drupal.gmap.getMap(mapid).map;//'gmap-'
		// + mapid + '-gmap0');
		ATF_maps[mapid] = gmap;
		gmap.addControl(new GSmallMapControl());
		// gmap.addControl(new GMapTypeControl());
		gmap.setMapType(G_PHYSICAL_MAP);

		gmap.setCenter(new GLatLng(43.85619252622504, 4.765834808349609), zoom);
		//
		for ( var i = 0; i < poisnbr; i++) {
			gmap.addOverlay(createMarker(mapid, pois[i][0], pois[i][2], pois[i][1],
					pois[i][3], pois[i][4], pois[i][5]));
		}
		ATF_Recadre(mapid);
	} else {

		var map1 = Drupal.gmap.getMap(mapid);
		ATF_maps[mapid] = map1;

		ATF_DrawPois('map', 'pois');
		ATF_Recadre(mapid);

	}
}

function ELOpenIframe(idmenu, parentitem, couleur, alpha, centrage, forcex) {
	var objMask = $('#mask');
	objMask.removeClass();
	//
	var obj = $('#' + idmenu);
	if (obj.size() > 0) {

		var iframe = $('#atfiframe');

		if (iframe.size() > 0)
			iframe.remove();

		iframe = $(
				'<iframe id="atfiframe" overflow="hidden" width="980px" height="500px" scrolling="no" marginwidth="0" marginheight="0" frameborder="0"  scrollbars="hidden"  style="displayout:none;"></iframe>')
				.appendTo('body');
		var doc = iframe[0].contentWindow.document;
		doc.open();
		doc.write('<div id="msg" style="text-align:center;">Loading...</div>');// <img
		// src="/sites/atf/media/ajax-loader.gif"
		// style="margin-top:250px;"
		// alt="loading"\/>
		doc.close();
		iframe.contents().find("body").css('background-color', '#111');
		iframe.attr('src', obj.attr('href'));

		var tmp = obj.attr("rel").replace(/ /g, '').split(';');
		// alert('ok');
		for (i in tmp) {
			var tmp2 = tmp[i].split(':');
			switch (tmp2[0]) {
			case 'overflow':
			case 'scrollbars':
			case 'scrolling':
			case 'marginwidth':
			case 'marginheight':
			case 'frameborder':
				iframe.attr(tmp2[0], tmp2[1]);
				break;
			case 'color':
				couleur = tmp2[1];
				break;
			case 'class':
				var objMask = $('#mask');
				objMask.removeClass();
				objMask.addClass(tmp2[1]);
				break;
			default:
				iframe.css(tmp2[0], tmp2[1]);
				break;
			}
		}

		iframe.css('position', 'absolute');
		iframe.css('z-index', 9999);

		_openmodal(parentitem, iframe, couleur, alpha, centrage, forcex);

		return false;

	}
	return false;
}

function ELOpenModal(idmenu, parentitem, item, couleur, centrage, forcex) {
	var id = item;
	var obj = $(id);
	var objMask = $('#mask');
	objMask.removeClass();
	//
	var obj2 = $('#' + idmenu);
	if (obj2.size() > 0) {
		var tmp = obj2.attr("rel").replace(/ /g, '').split(';');
		for (i in tmp) {
			var tmp2 = tmp[i].split(':');
			switch (tmp2[0]) {
			case 'color':
				couleur = tmp2[1];
				break;
			case 'class':
				var objMask = $('#mask');
				objMask.removeClass();
				objMask.addClass(tmp2[1]);
				break;
			}
		}
	}

	obj.css('position', 'absolute');
	obj.css('z-index', 9999);
	obj.show();

	_openmodal(parentitem, obj, couleur, 0.8, centrage, forcex);
	return false;
}

function _openmodal(parentitem, obj, couleur, alpha, centrage, forcex) {
	// Get the screen height and width
	var maskHeight = $(document).height();
	var maskWidth = $(window).width();

	var objMask = $('#mask');

	objMask.css('position', 'absolute');
	objMask.css('z-index', 9990);
	if (couleur != '' && couleur != '#') {
		objMask.css({
			'background-color' : couleur,
			'width' : maskWidth,
			'height' : maskHeight
		});
		objMask.fadeTo(1, alpha);
		objMask.fadeIn(125);
	} else {
		objMask.css({
			'width' : maskWidth,
			'height' : maskHeight
		});
		objMask.show();
	}

	objMask.attr('toClose', obj.attr('id'));

	objMask.empty();

	var closer = $(document.createElement('div'));
	closer.attr('id', 'maskclose');
	closer.attr('toClose', obj.attr('id'));
	closer.css("position", 'absolute');

	/*
	 * closer.click(function (e) { var id = $(this).attr('toClose'); alert(id);
	 * //$(#mask).hide(); id=$('#'+id).attr('toClose'); $('#mask').hide(); });
	 */
	objMask.append(closer);

	if (centrage == 1) {
		var objwidth = obj.width();
		if (objwidth == 0)
			objwidth = Number(obj.css('width').replace(/[^0-9\.]*/gi, ''));
		// Get the window height and width
		var winW = $(window).width();

		obj.css('left', winW / 2 - objwidth / 2);
		//
		closer.css('left', winW / 2 + objwidth / 2);
	} else {
		var obj = $(obj);

		// Get the screen height and width
		// var maskHeight = $(document).height();
		// var maskWidth = $(window).width();
		// Get the window height and width
		// var winH = $(window).height();
		var winW = $(window).width();
		//
		var objwidth = obj.width();

		if (objwidth == 0)
			objwidth = Number(obj.css('width').replace(/[^0-9\.]*/gi, ''));

		var closerwidth = Number(closer.css('width').replace(/[^0-9\.]*/gi, ''));// closer.width();
		//
		var objparent = $(parentitem);
		//
		var objleft = Math.round(objparent.offset().left);
		//
		if (objleft + objwidth + closerwidth > winW) {
			obj.css('left', objleft - (objwidth - (winW - objleft)) - closerwidth);
			closer.css('left',
					((objleft - (objwidth - (winW - objleft)) - closerwidth) + objwidth)
							+ "px");

		} else {
			obj.css("left", objleft);
			closer.css('left', objleft + objwidth);
		}

	}

	if (centrage == 1 && forcex != 1) {
		var objheight = obj.height();
		if (objheight == 0)
			objheight = Number(obj.css('height').replace(/[^0-9\.]*/gi, ''));
		//
		// Get the window height and width
		var winH = $(window).height();
		obj.css('top', winH / 2 - objheight / 2);
		//
		closer.css('top', winH / 2 - objheight / 2);// -closer.height()
	} else {
		var obj = $(obj);
		//
		var objheight = obj.height();
		if (objheight == 0)
			objheight = Number(obj.css('height').replace(/[^0-9\.]*/gi, ''));
		//
		var objparent = $(parentitem);
		//
		var objtop = Math.round(objparent.offset().top);
		var objH = objparent.height();
		//
		obj.css('top', objtop + objH);
		closer.css('top', objtop + objH);
	}

	return;
}

$(document).ready(function() {

	// permet de differer le chargement de certain script tel facebook qui
	// ralenti le chargement de la page globale
	$('.defer_src').each(function() {
		this.src = this.title;
		this.title = '';
	});

	setTimeout("InitATF()", 125);

	// if close button is clicked
	$('.window .close').click(function(e) {
		// Cancel the link behavior
		e.preventDefault();

		$('#mask').hide();
		// $('.window').hide();
		$('#' + $(this).attr('toClose')).hide();
	});

	// if mask is clicked
	$('#mask').click(function() {
		$(this).hide();
		// $('.window').hide();
		$('#' + $(this).attr('toClose')).hide();
	});

	$('#weather').hover(function() {
		$(this).animate({
			width : '270'
		}, 500);
	}, function() {
		$(this).animate({
			width : '90'
		}, 500);
	});

});

//

/**
 * Gestion meteo des appels m�t�o pays : nom du pays city : nom de la
 * commune cp : code postal lang : langue des textes souhait�s cible : div
 * container
 */
function atf_weather(pays, city, cp, lang, cible) {

	var flux_lnk = "/atf_tools_weather/" + pays + "/" + city + "/" + cp + "/"
			+ lang;

	$
			.ajax({
				url : flux_lnk,
				dataType : "json",
				success : function(data) {
					var str = '';
					if (typeof (data.current) != 'undefined'
							&& data.current.condition != null && data.current.temp_c != null) {

						str = '<div class="weatherday"><div class="today"><img class="weatherimg" style="width:30px;" src="'
								+ data.current.icon
								+ '" alt="'
								+ data.current.condition
								+ '" title="'
								+ data.current.condition
								+ '"/><span class="weathertemp" >'
								+ data.current.temp_c
								+ " &deg;C" + '</span></div></div>';
						if (typeof (data.forecast) != 'undefined') {
							for ( var i in data.forecast) {
								// if(i>0 && i < 3) {//gweather only.
								str += '<div class="weatherday"><div class="day' + i
										+ '"><img class="weatherimg" style="width:30px;" src="'
										+ data.forecast[i].icon + '" alt="'
										+ data.forecast[i].condition + '" title="'
										+ data.forecast[i].condition
										+ '"/><span class="weathertemp" >'
										+ data.forecast[i].temp_c + " &deg;C" + "<br/>"
										+ data.forecast[i].day_of_week + '</span></div></div>';
								// }
							}
						}
						$(cible).html(str);
						$(cible).show();
					}
				}
			});
}
;
/*	SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();;
/* 
jquery.event.drag.js ~ v1.5 ~ Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)  
Liscensed under the MIT License ~ http://threedubmedia.googlecode.com/files/MIT-LICENSE.txt
*/
(function(E){E.fn.drag=function(L,K,J){if(K){this.bind("dragstart",L)}if(J){this.bind("dragend",J)}return !L?this.trigger("drag"):this.bind("drag",K?K:L)};var A=E.event,B=A.special,F=B.drag={not:":input",distance:0,which:1,dragging:false,setup:function(J){J=E.extend({distance:F.distance,which:F.which,not:F.not},J||{});J.distance=I(J.distance);A.add(this,"mousedown",H,J);if(this.attachEvent){this.attachEvent("ondragstart",D)}},teardown:function(){A.remove(this,"mousedown",H);if(this===F.dragging){F.dragging=F.proxy=false}G(this,true);if(this.detachEvent){this.detachEvent("ondragstart",D)}}};B.dragstart=B.dragend={setup:function(){},teardown:function(){}};function H(L){var K=this,J,M=L.data||{};if(M.elem){K=L.dragTarget=M.elem;L.dragProxy=F.proxy||K;L.cursorOffsetX=M.pageX-M.left;L.cursorOffsetY=M.pageY-M.top;L.offsetX=L.pageX-L.cursorOffsetX;L.offsetY=L.pageY-L.cursorOffsetY}else{if(F.dragging||(M.which>0&&L.which!=M.which)||E(L.target).is(M.not)){return }}switch(L.type){case"mousedown":E.extend(M,E(K).offset(),{elem:K,target:L.target,pageX:L.pageX,pageY:L.pageY});A.add(document,"mousemove mouseup",H,M);G(K,false);F.dragging=null;return false;case !F.dragging&&"mousemove":if(I(L.pageX-M.pageX)+I(L.pageY-M.pageY)<M.distance){break}L.target=M.target;J=C(L,"dragstart",K);if(J!==false){F.dragging=K;F.proxy=L.dragProxy=E(J||K)[0]}case"mousemove":if(F.dragging){J=C(L,"drag",K);if(B.drop){B.drop.allowed=(J!==false);B.drop.handler(L)}if(J!==false){break}L.type="mouseup"}case"mouseup":A.remove(document,"mousemove mouseup",H);if(F.dragging){if(B.drop){B.drop.handler(L)}C(L,"dragend",K)}G(K,true);F.dragging=F.proxy=M.elem=false;break}return true}function C(M,K,L){M.type=K;var J=E.event.handle.call(L,M);return J===false?false:J||M.result}function I(J){return Math.pow(J,2)}function D(){return(F.dragging===false)}function G(K,J){if(!K){return }K.unselectable=J?"off":"on";K.onselectstart=function(){return J};if(K.style){K.style.MozUserSelect=J?"":"none"}}})(jQuery);;
//
//views-view--atf-cartographie--atf-block-cartothematiques.tpl.php
//	setTimeout("ATF_DrawPois('thematique','poisthematique',{'fichepartenaire':'ATF003'},{'showaddons':false,'clustering':true});",1000);
//views-view-fields--atf-cartographie.tpl.php
//	echo "pois['nid$nid']=['$type','$latitude','$longitude','".addslashes($title)."','$nid','$more',new Array(".join(array_keys($terms),',')."),{'icon':'ATF001'}];";

//var pois=new Array();
var drupalrequest = null;
var poisdisplayed = new Array();
var poiscategory = new Array();
var atf_viewsajax_interval;
var ATF_ViewsAjaxDelay = 450;

var mapid = 'macro_map';
var map1;
var ATFLangueEdition = '';
var icones = new Array();
// clustering des markers
var markerCluster;

// compatibilite descendante
//mapsversion = 3;
//if (typeof google != "undefined" && google.maps.version.substr(0, 1) == 2) {
//	mapsversion = 2;
//}

mapsversion = 3;

$(document)
		.ready(
				function() {

					map1 = Drupal.gmap.getMap(mapid);

					// if ( $.browser.msie &&!$.browser.opera ) {
					// $('#gmap-macro_map-gmap0').css("height","100%");
					// $(map1).css("height","100px");

//					var HeightDisplay = $(window).height();
//					var HeightHeader = $('#header').height();
//					var map1 = Drupal.gmap.getMap(mapid);
//					var newmapheight = (HeightDisplay - HeightHeader + 15) + "px";
//					// console.log(HeightDisplay);
//					// console.log(HeightHeader);
//					console.log( newmapheight );
//					// alert(newmapheight);
//					if (mapsversion == 2) {
//						setTimeout(
//								"map1=Drupal.gmap.getMap(mapid);map1.map.getContainer().style.height ='"
//										+ newmapheight + "';", 500);
//					} else {
//						setTimeout(
//								"map1=Drupal.gmap.getMap(mapid);map1.map.getDiv().style.height ='"
//										+ newmapheight + "';", 500);
//					}

					// map1.map.enableContinuousZoom();
					// map1.map.getContainer().style.height = newmapheight ;

					// }

					$('.box').bind('dragstart', function(event) {
						if (!$(event.target).is('.texte-titre'))
							return false;
						$(this).addClass('dragactive');
					}).bind('drag', function(event) {
						
						$(this).css({
							top : (event.offsetY-300),
							left : (event.offsetX-  ( ($(window).width() - $('.panels-flexible-column-cartographie-main-inside').width()) /2 )  )
						});
					}).bind('dragend', function(event) {
						$(this).removeClass('dragactive');
					}).bind('dblclick', function(event) {
						$(this).find('.reduire').trigger('jereduis');
					});

					var hauteurferme = '20px';
					$('.reduire').bind('click', function(i, j) {
						$(this).trigger('jereduis');
					});

					$('.reduire').bind('jereduis', function(i, j) {
						var obj = $(this).parent().find('.contenu');
						if (obj.is(":visible a")) {
							obj.hide();
							$(this).addClass("isreduce");
						} else {
							obj.show();
							$(this).removeClass("isreduce");
						}

					});

					$('.fermer').bind("jeferme", function() {

						var obj = $(this).closest('.box');
						if (obj.is(":visible")) {

						} else {
							obj.find('.contenu').show();
						}

						obj.toggle();
					});

					$('.fermer').bind('click', function(i, j) {
						$(this).trigger('jeferme');

					});

					$('input[type="checkbox"]')
							.bind(
									'click',
									function(i) {

										var viewblocname = '';
										var viewblocnamesep = '';

										var config = $(this).closest('.box').find('.config');
										var classes = config.attr('class');
										var classlist = new Array();
										if (classes != null) {
											classlist = classes.split(' ');
											// console.log(classes);
											viewblocname = classlist[1];
											viewblocnamesep = classlist[2];
											classlist.shift();// on supprime
											// les premiers
											// elements
											classlist.shift();
										}

										var argsaddon = new Array();

										for ( var i in classlist) {
											// config pour forcer un champ
											if (classlist[i].substr(classlist[i].length - 6, 6) == '_force') {
												var elems = $('input[name="'
														+ classlist[i].substr(0, classlist[i].length - 6)
														+ '[]"]:checked');
												if (elems.size() > 0) {
													// on a des elements ils serons trait�s
												} else {
													// pas d'element on force la transmission
													argsaddon.push(classlist[i].substr(0,
															classlist[i].length - 6)
															+ '[]=');
												}
											} else {// config normale
												var elems = $('input[name="' + classlist[i]
														+ '[]"]:checked');
												if (elems.size() > 0) {
													$.each(elems, function() {
														argsaddon
																.push(classlist[i] + '[]=' + $(this).val());
													});
												}
												// on regarde si il existe un operateur :
												var elems = $('[name="' + classlist[i] + '_op"]');
												if (elems.size() > 0) {
													$.each(elems, function() {
														argsaddon.push(classlist[i] + '_op='
																+ $(this).val());
													});
												}
											}
										}

										var thematiques = '';
										var sep = '&';
										thematiques = sep + argsaddon.join(sep);

										if (drupalrequest != null) {
											drupalrequest.abort();
											drupalrequest = null;
										}

										clearTimeout(atf_viewsajax_interval);

										var language = Drupal.settings.language;
										// alert( $.isArray(language) );
										if ($.isArray(language) && language.length > 1)
											language = language[0];

										var ajax_path = location.protocol + '//' + location.host
												+ '/' + language + '/views/ajax';
										atf_viewsajax_interval = setTimeout('ATF_ViewsAjax("'
												+ ajax_path
												+ '?view_name=atf_cartographie&view_display_id='
												+ viewblocname + '&view_args=' + thematiques + '","'
												+ $(this).closest('.box').attr('id') + '")',
												ATF_ViewsAjaxDelay);
										return true;
									});
				});

var trace;

/**
<<<<<<< .mine
 * Reception des data du server (le flux est utilis� dans d'autre situation, on
 * doit faire le m�nage avant exploitation)
=======
 * Reception des data du server
 * (le flux est utilis� dans d'autre situation, on doit faire le m�nage avant exploitation)
>>>>>>> .r2025
 */
var poisDetails = function(response, load2close) {
	$('#' + load2close).find('.loading').hide();
	response['display'] = response['display'].replace(
			'<script type="text\/javascript">', '');
	response['display'] = response['display'].replace('<script>', '');
	response['display'] = response['display'].replace('</script>', '');
	//
	response['display'] = response['display'].replace(
			/(setTimeout\([ ]{0,}"[^"]*"[ ]{0,},)[0-9]*\);/, '$11);');
	eval(response['display']);
};

/**
 * Communication avec le serveur.
 * 
 * @param requete
 * @param load2close
 */
function ATF_ViewsAjax(requete, load2close) {
	$('#' + load2close).find('.loading').show();
	//

	drupalrequest = $.getJSON(requete, null, function(results) {
		poisDetails(results, load2close);
	});
}

/**
 * Cadre la carte sur une position x,y et niveau de zoom.
 */
function ATF_CadrerSur(px, py, z, maptype) {
	// console.log('ATF_CadrerSur');
	map1 = Drupal.gmap.getMap(mapid);
	if (typeof (z) == 'undefined')
		z = map1.map.getZoom();
	if (typeof (maptype) != 'undefined')
		ATF_SetMapType(maptype);
	if (mapsversion == 2) {
		map1.map.setCenter(new GLatLng(py, px), Number(z));

	}
	if (mapsversion == 3) {
		map1.map.setCenter(new google.maps.LatLng(py, px), Number(z));
	}
	map1.map.savePosition();

}

// https://maps.googleapis.com/maps/api/js?sensor=false

/*
 * https://maps.googleapis.com/maps/api/js?sensor=false permet de changer en
 * live le type de carte options possibles : V2 = G_NORMAL_MAP / G_SATELLITE_MAP /
 * G_AERIAL_MAP / G_HYBRID_MAP / G_AERIAL_HYBRID_MAP / G_PHYSICAL_MAP V3 =
 * google.maps.MapTypeId. : ROADMAP / SATELLITE / HYBRID / TERRAIN
 */
function ATF_SetMapType(maptype) {
	map1 = Drupal.gmap.getMap(mapid);
	if (mapsversion == 2)
		map1.map.setMapType(maptype);
	if (mapsversion == 3)
		map1.map.setMapTypeId(maptype);// ATF_SetMapType(
	// google.maps.MapTypeId.TERRAIN )

}

if (mapsversion == 3 && typeof google != "undefined" ) {
	// savePosition voir plutot cela :
	// https://developers.google.com/maps/documentation/javascript/controls

	google.maps.savePosition = function() {
		savedLocation = map.getCenter();
	};

	google.maps.returnToSavedPosition = function() {
		if (savedLocation)
			map.setCenter(savedLocation);
	};

}
;
/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

/*global window, jQuery */
(function($) {
    // Default configuration properties.
    var defaults = {
        vertical: false,
        rtl: false,
        start: 1,
        offset: 1,
        size: null,
        scroll: 3,
        visible: null,
        animation: 'normal',
        easing: 'swing',
        auto: 0,
        wrap: null,
        initCallback: null,
        setupCallback: null,
        reloadCallback: null,
        itemLoadCallback: null,
        itemFirstInCallback: null,
        itemFirstOutCallback: null,
        itemLastInCallback: null,
        itemLastOutCallback: null,
        itemVisibleInCallback: null,
        itemVisibleOutCallback: null,
        animationStepCallback: null,
        buttonNextHTML: '<div></div>',
        buttonPrevHTML: '<div></div>',
        buttonNextEvent: 'click',
        buttonPrevEvent: 'click',
        buttonNextCallback: null,
        buttonPrevCallback: null,
        itemFallbackDimension: null
    }, windowLoaded = false;

    $(window).bind('load.jcarousel', function() { windowLoaded = true; });

    /**
     * The jCarousel object.
     *
     * @constructor
     * @class jcarousel
     * @param e {HTMLElement} The element to create the carousel for.
     * @param o {Object} A set of key/value pairs to set as configuration properties.
     * @cat Plugins/jCarousel
     */
    $.jcarousel = function(e, o) {
        this.options    = $.extend({}, defaults, o || {});

        this.locked          = false;
        this.autoStopped     = false;

        this.container       = null;
        this.clip            = null;
        this.list            = null;
        this.buttonNext      = null;
        this.buttonPrev      = null;
        this.buttonNextState = null;
        this.buttonPrevState = null;

        // Only set if not explicitly passed as option
        if (!o || o.rtl === undefined) {
            this.options.rtl = ($(e).attr('dir') || $('html').attr('dir') || '').toLowerCase() == 'rtl';
        }

        this.wh = !this.options.vertical ? 'width' : 'height';
        this.lt = !this.options.vertical ? (this.options.rtl ? 'right' : 'left') : 'top';

        // Extract skin class
        var skin = '', split = e.className.split(' ');

        for (var i = 0; i < split.length; i++) {
            if (split[i].indexOf('jcarousel-skin') != -1) {
                $(e).removeClass(split[i]);
                skin = split[i];
                break;
            }
        }

        if (e.nodeName.toUpperCase() == 'UL' || e.nodeName.toUpperCase() == 'OL') {
            this.list      = $(e);
            this.clip      = this.list.parents('.jcarousel-clip');
            this.container = this.list.parents('.jcarousel-container');
        } else {
            this.container = $(e);
            this.list      = this.container.find('ul,ol').eq(0);
            this.clip      = this.container.find('.jcarousel-clip');
        }

        if (this.clip.size() === 0) {
            this.clip = this.list.wrap('<div></div>').parent();
        }

        if (this.container.size() === 0) {
            this.container = this.clip.wrap('<div></div>').parent();
        }

        if (skin !== '' && this.container.parent()[0].className.indexOf('jcarousel-skin') == -1) {
            this.container.wrap('<div class=" '+ skin + '"></div>');
        }

        this.buttonPrev = $('.jcarousel-prev', this.container);

        if (this.buttonPrev.size() === 0 && this.options.buttonPrevHTML !== null) {
            this.buttonPrev = $(this.options.buttonPrevHTML).appendTo(this.container);
        }

        this.buttonPrev.addClass(this.className('jcarousel-prev'));

        this.buttonNext = $('.jcarousel-next', this.container);

        if (this.buttonNext.size() === 0 && this.options.buttonNextHTML !== null) {
            this.buttonNext = $(this.options.buttonNextHTML).appendTo(this.container);
        }

        this.buttonNext.addClass(this.className('jcarousel-next'));

        this.clip.addClass(this.className('jcarousel-clip')).css({
            position: 'relative'
        });

        this.list.addClass(this.className('jcarousel-list')).css({
            overflow: 'hidden',
            position: 'relative',
            top: 0,
            margin: 0,
            padding: 0
        }).css((this.options.rtl ? 'right' : 'left'), 0);

        this.container.addClass(this.className('jcarousel-container')).css({
            position: 'relative'
        });

        if (!this.options.vertical && this.options.rtl) {
            this.container.addClass('jcarousel-direction-rtl').attr('dir', 'rtl');
        }

        var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
        var li = this.list.children('li');

        var self = this;

        if (li.size() > 0) {
            var wh = 0, j = this.options.offset;
            li.each(function() {
                self.format(this, j++);
                wh += self.dimension(this, di);
            });

            this.list.css(this.wh, (wh + 100) + 'px');

            // Only set if not explicitly passed as option
            if (!o || o.size === undefined) {
                this.options.size = li.size();
            }
        }

        // For whatever reason, .show() does not work in Safari...
        this.container.css('display', 'block');
        this.buttonNext.css('display', 'block');
        this.buttonPrev.css('display', 'block');

        this.funcNext   = function() { self.next(); };
        this.funcPrev   = function() { self.prev(); };
        this.funcResize = function() { 
            if (self.resizeTimer) {
                clearTimeout(self.resizeTimer);
            }

            self.resizeTimer = setTimeout(function() {
                self.reload();
            }, 100);
        };

        if (this.options.initCallback !== null) {
            this.options.initCallback(this, 'init');
        }

        if (!windowLoaded && $.browser.safari) {
            this.buttons(false, false);
            $(window).bind('load.jcarousel', function() { self.setup(); });
        } else {
            this.setup();
        }
    };

    // Create shortcut for internal use
    var $jc = $.jcarousel;

    $jc.fn = $jc.prototype = {
        jcarousel: '0.2.8'
    };

    $jc.fn.extend = $jc.extend = $.extend;

    $jc.fn.extend({
        /**
         * Setups the carousel.
         *
         * @method setup
         * @return undefined
         */
        setup: function() {
            this.first       = null;
            this.last        = null;
            this.prevFirst   = null;
            this.prevLast    = null;
            this.animating   = false;
            this.timer       = null;
            this.resizeTimer = null;
            this.tail        = null;
            this.inTail      = false;

            if (this.locked) {
                return;
            }

            this.list.css(this.lt, this.pos(this.options.offset) + 'px');
            var p = this.pos(this.options.start, true);
            this.prevFirst = this.prevLast = null;
            this.animate(p, false);

            $(window).unbind('resize.jcarousel', this.funcResize).bind('resize.jcarousel', this.funcResize);

            if (this.options.setupCallback !== null) {
                this.options.setupCallback(this);
            }
        },

        /**
         * Clears the list and resets the carousel.
         *
         * @method reset
         * @return undefined
         */
        reset: function() {
            this.list.empty();

            this.list.css(this.lt, '0px');
            this.list.css(this.wh, '10px');

            if (this.options.initCallback !== null) {
                this.options.initCallback(this, 'reset');
            }

            this.setup();
        },

        /**
         * Reloads the carousel and adjusts positions.
         *
         * @method reload
         * @return undefined
         */
        reload: function() {
            if (this.tail !== null && this.inTail) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + this.tail);
            }

            this.tail   = null;
            this.inTail = false;

            if (this.options.reloadCallback !== null) {
                this.options.reloadCallback(this);
            }

            if (this.options.visible !== null) {
                var self = this;
                var di = Math.ceil(this.clipping() / this.options.visible), wh = 0, lt = 0;
                this.list.children('li').each(function(i) {
                    wh += self.dimension(this, di);
                    if (i + 1 < self.first) {
                        lt = wh;
                    }
                });

                this.list.css(this.wh, wh + 'px');
                this.list.css(this.lt, -lt + 'px');
            }

            this.scroll(this.first, false);
        },

        /**
         * Locks the carousel.
         *
         * @method lock
         * @return undefined
         */
        lock: function() {
            this.locked = true;
            this.buttons();
        },

        /**
         * Unlocks the carousel.
         *
         * @method unlock
         * @return undefined
         */
        unlock: function() {
            this.locked = false;
            this.buttons();
        },

        /**
         * Sets the size of the carousel.
         *
         * @method size
         * @return undefined
         * @param s {Number} The size of the carousel.
         */
        size: function(s) {
            if (s !== undefined) {
                this.options.size = s;
                if (!this.locked) {
                    this.buttons();
                }
            }

            return this.options.size;
        },

        /**
         * Checks whether a list element exists for the given index (or index range).
         *
         * @method get
         * @return bool
         * @param i {Number} The index of the (first) element.
         * @param i2 {Number} The index of the last element.
         */
        has: function(i, i2) {
            if (i2 === undefined || !i2) {
                i2 = i;
            }

            if (this.options.size !== null && i2 > this.options.size) {
                i2 = this.options.size;
            }

            for (var j = i; j <= i2; j++) {
                var e = this.get(j);
                if (!e.length || e.hasClass('jcarousel-item-placeholder')) {
                    return false;
                }
            }

            return true;
        },

        /**
         * Returns a jQuery object with list element for the given index.
         *
         * @method get
         * @return jQuery
         * @param i {Number} The index of the element.
         */
        get: function(i) {
            return $('>.jcarousel-item-' + i, this.list);
        },

        /**
         * Adds an element for the given index to the list.
         * If the element already exists, it updates the inner html.
         * Returns the created element as jQuery object.
         *
         * @method add
         * @return jQuery
         * @param i {Number} The index of the element.
         * @param s {String} The innerHTML of the element.
         */
        add: function(i, s) {
        	
            var e = this.get(i), old = 0, n = $(s);

            if (e.length === 0) {
                var c, j = $jc.intval(i);
                e = this.create(i);
                while (true) {
                    c = this.get(--j);
                    if (j <= 0 || c.length) {
                        if (j <= 0) {
                            this.list.prepend(e);
                        } else {
                            c.after(e);
                        }
                        break;
                    }
                }
            } else {
                old = this.dimension(e);
            }

            if (n.get(0).nodeName.toUpperCase() == 'LI') {
                e.replaceWith(n);
                e = n;
            } else {
                e.empty().append(s);
            }

            this.format(e.removeClass(this.className('jcarousel-item-placeholder')), i);

            var di = this.options.visible !== null ? Math.ceil(this.clipping() / this.options.visible) : null;
            var wh = this.dimension(e, di) - old;

            if (i > 0 && i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - wh + 'px');
            }

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) + wh + 'px');

            return e;
        },

        /**
         * Removes an element for the given index from the list.
         *
         * @method remove
         * @return undefined
         * @param i {Number} The index of the element.
         */
        remove: function(i) {
            var e = this.get(i);

            // Check if item exists and is not currently visible
            if (!e.length || (i >= this.first && i <= this.last)) {
                return;
            }

            var d = this.dimension(e);

            if (i < this.first) {
                this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) + d + 'px');
            }

            e.remove();

            this.list.css(this.wh, $jc.intval(this.list.css(this.wh)) - d + 'px');
        },

        /**
         * Moves the carousel forwards.
         *
         * @method next
         * @return undefined
         */
        next: function() {
            if (this.tail !== null && !this.inTail) {
                this.scrollTail(false);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'last') && this.options.size !== null && this.last == this.options.size) ? 1 : this.first + this.options.scroll);
            }
        },

        /**
         * Moves the carousel backwards.
         *
         * @method prev
         * @return undefined
         */
        prev: function() {
            if (this.tail !== null && this.inTail) {
                this.scrollTail(true);
            } else {
                this.scroll(((this.options.wrap == 'both' || this.options.wrap == 'first') && this.options.size !== null && this.first == 1) ? this.options.size : this.first - this.options.scroll);
            }
        },

        /**
         * Scrolls the tail of the carousel.
         *
         * @method scrollTail
         * @return undefined
         * @param b {Boolean} Whether scroll the tail back or forward.
         */
        scrollTail: function(b) {
            if (this.locked || this.animating || !this.tail) {
                return;
            }

            this.pauseAuto();

            var pos  = $jc.intval(this.list.css(this.lt));

            pos = !b ? pos - this.tail : pos + this.tail;
            this.inTail = !b;

            // Save for callbacks
            this.prevFirst = this.first;
            this.prevLast  = this.last;

            this.animate(pos);
        },

        /**
         * Scrolls the carousel to a certain position.
         *
         * @method scroll
         * @return undefined
         * @param i {Number} The index of the element to scoll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        scroll: function(i, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.pauseAuto();
            this.animate(this.pos(i), a);
        },

        /**
         * Prepares the carousel and return the position for a certian index.
         *
         * @method pos
         * @return {Number}
         * @param i {Number} The index of the element to scoll to.
         * @param fv {Boolean} Whether to force last item to be visible.
         */
        pos: function(i, fv) {
            var pos  = $jc.intval(this.list.css(this.lt));

            if (this.locked || this.animating) {
                return pos;
            }

            if (this.options.wrap != 'circular') {
                i = i < 1 ? 1 : (this.options.size && i > this.options.size ? this.options.size : i);
            }

            var back = this.first > i;

            // Create placeholders, new list width/height
            // and new list position
            var f = this.options.wrap != 'circular' && this.first <= 1 ? 1 : this.first;
            var c = back ? this.get(f) : this.get(this.last);
            var j = back ? f : f - 1;
            var e = null, l = 0, p = false, d = 0, g;

            while (back ? --j >= i : ++j < i) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    c[back ? 'before' : 'after' ](e);

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);

                if (p) {
                    l += d;
                }

                if (this.first !== null && (this.options.wrap == 'circular' || (j >= 1 && (this.options.size === null || j <= this.options.size)))) {
                    pos = back ? pos + d : pos - d;
                }
            }

            // Calculate visible items
            var clipping = this.clipping(), cache = [], visible = 0, v = 0;
            c = this.get(i - 1);
            j = i;

            while (++visible) {
                e = this.get(j);
                p = !e.length;
                if (e.length === 0) {
                    e = this.create(j).addClass(this.className('jcarousel-item-placeholder'));
                    // This should only happen on a next scroll
                    if (c.length === 0) {
                        this.list.prepend(e);
                    } else {
                        c[back ? 'before' : 'after' ](e);
                    }

                    if (this.first !== null && this.options.wrap == 'circular' && this.options.size !== null && (j <= 0 || j > this.options.size)) {
                        g = this.get(this.index(j));
                        if (g.length) {
                            e = this.add(j, g.clone(true));
                        }
                    }
                }

                c = e;
                d = this.dimension(e);
                if (d === 0) {
                    throw new Error('jCarousel: No width/height set for items. This will cause an infinite loop. Aborting...');
                }

                if (this.options.wrap != 'circular' && this.options.size !== null && j > this.options.size) {
                    cache.push(e);
                } else if (p) {
                    l += d;
                }

                v += d;

                if (v >= clipping) {
                    break;
                }

                j++;
            }

             // Remove out-of-range placeholders
            for (var x = 0; x < cache.length; x++) {
                cache[x].remove();
            }

            // Resize list
            if (l > 0) {
                this.list.css(this.wh, this.dimension(this.list) + l + 'px');

                if (back) {
                    pos -= l;
                    this.list.css(this.lt, $jc.intval(this.list.css(this.lt)) - l + 'px');
                }
            }

            // Calculate first and last item
            var last = i + visible - 1;
            if (this.options.wrap != 'circular' && this.options.size && last > this.options.size) {
                last = this.options.size;
            }

            if (j > last) {
                visible = 0;
                j = last;
                v = 0;
                while (++visible) {
                    e = this.get(j--);
                    if (!e.length) {
                        break;
                    }
                    v += this.dimension(e);
                    if (v >= clipping) {
                        break;
                    }
                }
            }

            var first = last - visible + 1;
            if (this.options.wrap != 'circular' && first < 1) {
                first = 1;
            }

            if (this.inTail && back) {
                pos += this.tail;
                this.inTail = false;
            }

            this.tail = null;
            if (this.options.wrap != 'circular' && last == this.options.size && (last - visible + 1) >= 1) {
                var m = $jc.intval(this.get(last).css(!this.options.vertical ? 'marginRight' : 'marginBottom'));
                if ((v - m) > clipping) {
                    this.tail = v - clipping - m;
                }
            }

            if (fv && i === this.options.size && this.tail) {
                pos -= this.tail;
                this.inTail = true;
            }

            // Adjust position
            while (i-- > first) {
                pos += this.dimension(this.get(i));
            }

            // Save visible item range
            this.prevFirst = this.first;
            this.prevLast  = this.last;
            this.first     = first;
            this.last      = last;

            return pos;
        },

        /**
         * Animates the carousel to a certain position.
         *
         * @method animate
         * @return undefined
         * @param p {Number} Position to scroll to.
         * @param a {Boolean} Flag indicating whether to perform animation.
         */
        animate: function(p, a) {
            if (this.locked || this.animating) {
                return;
            }

            this.animating = true;

            var self = this;
            var scrolled = function() {
                self.animating = false;

                if (p === 0) {
                    self.list.css(self.lt,  0);
                }

                if (!self.autoStopped && (self.options.wrap == 'circular' || self.options.wrap == 'both' || self.options.wrap == 'last' || self.options.size === null || self.last < self.options.size || (self.last == self.options.size && self.tail !== null && !self.inTail))) {
                    self.startAuto();
                }

                self.buttons();
                self.notify('onAfterAnimation');

                // This function removes items which are appended automatically for circulation.
                // This prevents the list from growing infinitely.
                if (self.options.wrap == 'circular' && self.options.size !== null) {
                    for (var i = self.prevFirst; i <= self.prevLast; i++) {
                        if (i !== null && !(i >= self.first && i <= self.last) && (i < 1 || i > self.options.size)) {
                            self.remove(i);
                        }
                    }
                }
            };

            this.notify('onBeforeAnimation');

            // Animate
            if (!this.options.animation || a === false) {
                this.list.css(this.lt, p + 'px');
                scrolled();
            } else {
                var o = !this.options.vertical ? (this.options.rtl ? {'right': p} : {'left': p}) : {'top': p};
                // Define animation settings.
                var settings = {
                    duration: this.options.animation,
                    easing:   this.options.easing,
                    complete: scrolled
                };
                // If we have a step callback, specify it as well.
                if ($.isFunction(this.options.animationStepCallback)) {
                    settings.step = this.options.animationStepCallback;
                }
                // Start the animation.
                this.list.animate(o, settings);
            }
        },

        /**
         * Starts autoscrolling.
         *
         * @method auto
         * @return undefined
         * @param s {Number} Seconds to periodically autoscroll the content.
         */
        startAuto: function(s) {
            if (s !== undefined) {
                this.options.auto = s;
            }

            if (this.options.auto === 0) {
                return this.stopAuto();
            }

            if (this.timer !== null) {
                return;
            }

            this.autoStopped = false;

            var self = this;
            this.timer = window.setTimeout(function() { self.next(); }, this.options.auto * 1000);
        },

        /**
         * Stops autoscrolling.
         *
         * @method stopAuto
         * @return undefined
         */
        stopAuto: function() {
            this.pauseAuto();
            this.autoStopped = true;
        },

        /**
         * Pauses autoscrolling.
         *
         * @method pauseAuto
         * @return undefined
         */
        pauseAuto: function() {
            if (this.timer === null) {
                return;
            }

            window.clearTimeout(this.timer);
            this.timer = null;
        },

        /**
         * Sets the states of the prev/next buttons.
         *
         * @method buttons
         * @return undefined
         */
        buttons: function(n, p) {
            if (n == null) {
                n = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'first') || this.options.size === null || this.last < this.options.size);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'first') && this.options.size !== null && this.last >= this.options.size) {
                    n = this.tail !== null && !this.inTail;
                }
            }

            if (p == null) {
                p = !this.locked && this.options.size !== 0 && ((this.options.wrap && this.options.wrap != 'last') || this.first > 1);
                if (!this.locked && (!this.options.wrap || this.options.wrap == 'last') && this.options.size !== null && this.first == 1) {
                    p = this.tail !== null && this.inTail;
                }
            }

            var self = this;

            if (this.buttonNext.size() > 0) {
                this.buttonNext.unbind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);

                if (n) {
                    this.buttonNext.bind(this.options.buttonNextEvent + '.jcarousel', this.funcNext);
                }

                this.buttonNext[n ? 'removeClass' : 'addClass'](this.className('jcarousel-next-disabled')).attr('disabled', n ? false : true);

                if (this.options.buttonNextCallback !== null && this.buttonNext.data('jcarouselstate') != n) {
                    this.buttonNext.each(function() { self.options.buttonNextCallback(self, this, n); }).data('jcarouselstate', n);
                }
            } else {
                if (this.options.buttonNextCallback !== null && this.buttonNextState != n) {
                    this.options.buttonNextCallback(self, null, n);
                }
            }

            if (this.buttonPrev.size() > 0) {
                this.buttonPrev.unbind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);

                if (p) {
                    this.buttonPrev.bind(this.options.buttonPrevEvent + '.jcarousel', this.funcPrev);
                }

                this.buttonPrev[p ? 'removeClass' : 'addClass'](this.className('jcarousel-prev-disabled')).attr('disabled', p ? false : true);

                if (this.options.buttonPrevCallback !== null && this.buttonPrev.data('jcarouselstate') != p) {
                    this.buttonPrev.each(function() { self.options.buttonPrevCallback(self, this, p); }).data('jcarouselstate', p);
                }
            } else {
                if (this.options.buttonPrevCallback !== null && this.buttonPrevState != p) {
                    this.options.buttonPrevCallback(self, null, p);
                }
            }

            this.buttonNextState = n;
            this.buttonPrevState = p;
        },

        /**
         * Notify callback of a specified event.
         *
         * @method notify
         * @return undefined
         * @param evt {String} The event name
         */
        notify: function(evt) {
            var state = this.prevFirst === null ? 'init' : (this.prevFirst < this.first ? 'next' : 'prev');

            // Load items
            this.callback('itemLoadCallback', evt, state);

            if (this.prevFirst !== this.first) {
                this.callback('itemFirstInCallback', evt, state, this.first);
                this.callback('itemFirstOutCallback', evt, state, this.prevFirst);
            }

            if (this.prevLast !== this.last) {
                this.callback('itemLastInCallback', evt, state, this.last);
                this.callback('itemLastOutCallback', evt, state, this.prevLast);
            }

            this.callback('itemVisibleInCallback', evt, state, this.first, this.last, this.prevFirst, this.prevLast);
            this.callback('itemVisibleOutCallback', evt, state, this.prevFirst, this.prevLast, this.first, this.last);
        },

        callback: function(cb, evt, state, i1, i2, i3, i4) {
            if (this.options[cb] == null || (typeof this.options[cb] != 'object' && evt != 'onAfterAnimation')) {
                return;
            }

            var callback = typeof this.options[cb] == 'object' ? this.options[cb][evt] : this.options[cb];

            if (!$.isFunction(callback)) {
                return;
            }

            var self = this;

            if (i1 === undefined) {
                callback(self, state, evt);
            } else if (i2 === undefined) {
                this.get(i1).each(function() { callback(self, this, i1, state, evt); });
            } else {
                var call = function(i) {
                    self.get(i).each(function() { callback(self, this, i, state, evt); });
                };
                for (var i = i1; i <= i2; i++) {
                    if (i !== null && !(i >= i3 && i <= i4)) {
                        call(i);
                    }
                }
            }
        },

        create: function(i) {
            return this.format('<li></li>', i);
        },

        format: function(e, i) {
            e = $(e);
            var split = e.get(0).className.split(' ');
            for (var j = 0; j < split.length; j++) {
                if (split[j].indexOf('jcarousel-') != -1) {
                    e.removeClass(split[j]);
                }
            }
            e.addClass(this.className('jcarousel-item')).addClass(this.className('jcarousel-item-' + i)).css({
                'float': (this.options.rtl ? 'right' : 'left'),
                'list-style': 'none'
            }).attr('jcarouselindex', i);
            return e;
        },

        className: function(c) {
            return c + ' ' + c + (!this.options.vertical ? '-horizontal' : '-vertical');
        },

        dimension: function(e, d) {
            var el = $(e);

            if (d == null) {
                return !this.options.vertical ?
                       (el.outerWidth(true) || $jc.intval(this.options.itemFallbackDimension)) :
                       (el.outerHeight(true) || $jc.intval(this.options.itemFallbackDimension));
            } else {
                var w = !this.options.vertical ?
                    d - $jc.intval(el.css('marginLeft')) - $jc.intval(el.css('marginRight')) :
                    d - $jc.intval(el.css('marginTop')) - $jc.intval(el.css('marginBottom'));

                $(el).css(this.wh, w + 'px');

                return this.dimension(el);
            }
        },

        clipping: function() {
            return !this.options.vertical ?
                this.clip[0].offsetWidth - $jc.intval(this.clip.css('borderLeftWidth')) - $jc.intval(this.clip.css('borderRightWidth')) :
                this.clip[0].offsetHeight - $jc.intval(this.clip.css('borderTopWidth')) - $jc.intval(this.clip.css('borderBottomWidth'));
        },

        index: function(i, s) {
            if (s == null) {
                s = this.options.size;
            }

            return Math.round((((i-1) / s) - Math.floor((i-1) / s)) * s) + 1;
        }
    });

    $jc.extend({
        /**
         * Gets/Sets the global default configuration properties.
         *
         * @method defaults
         * @return {Object}
         * @param d {Object} A set of key/value pairs to set as configuration properties.
         */
        defaults: function(d) {
            return $.extend(defaults, d || {});
        },

        intval: function(v) {
            v = parseInt(v, 10);
            return isNaN(v) ? 0 : v;
        },

        windowLoaded: function() {
            windowLoaded = true;
        }
    });

    /**
     * Creates a carousel for all matched elements.
     *
     * @example $("#mycarousel").jcarousel();
     * @before <ul id="mycarousel" class="jcarousel-skin-name"><li>First item</li><li>Second item</li></ul>
     * @result
     *
     * <div class="jcarousel-skin-name">
     *   <div class="jcarousel-container">
     *     <div class="jcarousel-clip">
     *       <ul class="jcarousel-list">
     *         <li class="jcarousel-item-1">First item</li>
     *         <li class="jcarousel-item-2">Second item</li>
     *       </ul>
     *     </div>
     *     <div disabled="disabled" class="jcarousel-prev jcarousel-prev-disabled"></div>
     *     <div class="jcarousel-next"></div>
     *   </div>
     * </div>
     *
     * @method jcarousel
     * @return jQuery
     * @param o {Hash|String} A set of key/value pairs to set as configuration properties or a method name to call on a formerly created instance.
     */
    $.fn.jcarousel = function(o) {
        if (typeof o == 'string') {
            var instance = $(this).data('jcarousel'), args = Array.prototype.slice.call(arguments, 1);
            return instance[o].apply(instance, args);
        } else {
            return this.each(function() {
                var instance = $(this).data('jcarousel');
                if (instance) {
                    if (o) {
                        $.extend(instance.options, o);
                    }
                    instance.reload();
                } else {
                    $(this).data('jcarousel', new $jc(this, o));
                }
            });
        }
    };

})(jQuery);
;

(function( $ ){


	var defaults = {
			autoplay: false,
			delay: 2000
	}
	
	$.ATFcarousel = function(e,o) {
	
		var options=$.extend({}, defaults, o || {});

		/*__ Variables globales__*/
		//recalage
		$root=$(e);
		e = $(e).find('.list_slider');
		var self =  e;
		var selfslider=self.parents('.slider');

		var longeur = $(e).find(' > li').length;
		var unitCarousel = $(e).find(' > li').width();

		var listWidth = longeur * unitCarousel;

		
		if(longeur == 1)
		$('.forward',selfslider).css({visibility:"hidden"});
		
		if(typeof(o.autoplay)=='undefined') {

			if( selfslider.parent().parent().hasClass('autorun') ) {
				options.autoplay=true;
			}

			var classedelay=selfslider.parent().parent();
			if(classedelay.hasClass('delay1000'))
				options.delay=1000;
			if(classedelay.hasClass('delay2000'))
				options.delay=2000;
			if(classedelay.hasClass('delay3000'))
				options.delay=3000;
			if(classedelay.hasClass('delay4000'))
				options.delay=4000;
			if(classedelay.hasClass('delay5000'))
				options.delay=5000;

		}	
		
		var str='';
		var btslider_list=$root.find('.slider_control>ul');

		for(var i=0;i<longeur;i++) {
			var li = document.createElement('li');
			$(li).html('&bull;');
			if(i==0)
				$(li).addClass("current first");
			btslider_list.append( li ).addClass("current first");
		}

		if(options.autoplay)	
			var timer = setInterval(function(){self.autoDisplay();},options.delay);

		/*__ L'initialisation de la liste__*/
		$(e).css({width:listWidth,position:'absolute'});

		/*__ retourne le positionnement __*/
		e.getPosition = function(){
			var left = parseInt(self.css("left"));
			return left;
		}

		/*__ Applique le decalage en ajoutant une valeure __*/
		e.shift = function(val) {
			self.animate({left:e.getPosition() + val},500,function(){self.navDisplay()});
		}

		/*__ l'even next __*/
		e.nextSlide = function(){
			if(-e.getPosition() < (listWidth - unitCarousel) && (e.getPosition() % unitCarousel) == 0 )
				e.shift(-unitCarousel);
		}

		/*__ l'even prev __*/
		e.prevSlide = function(){
			if(e.getPosition() != 0 && (e.getPosition() % unitCarousel) == 0  )
				e.shift(+unitCarousel);
		}

		/*__ changer le positionnement */
		e.setPosition = function(val){
			self.animate({left:-val},500,function(){self.navDisplay()});
		}

		/*__ teste sur la nav */
		e.navDisplay = function(){
			if(e.getPosition() == 0 ){
				$('.backward',selfslider).css({visibility:"hidden"});
				$('.forward',selfslider).css({visibility:"visible"});
			}
			else if(e.getPosition() == -(listWidth - unitCarousel) ){
				$('.forward',selfslider).css({visibility:"hidden"});
				$('.backward',selfslider).css({visibility:"visible"});
			}else{
				$('.forward',selfslider).css({visibility:"visible"});
				$('.backward',selfslider).css({visibility:"visible"});
			}			
		}

		/*__ auto animation __*/
		e.autoDisplay = function(){
			self.nextSlide();
			self.controle(true);
		}

		/*__ initialisation de l'animation __*/
		e.initAnimation = function(){
			clearInterval(timer);
			timer = setInterval(function(){self.autoDisplay();},4000);
		}


		e.controle = function(auto,dr){

			var p = -self.getPosition()/unitCarousel;
			if(dr== "prev"){
				$('.btslider_list li.current',selfslider).removeClass('current');
				$($('.btslider_list li',selfslider)[p-1]).addClass('current');
			}else {
				if(p != longeur){
					$('.btslider_list li.current',selfslider).removeClass('current');
					$($('.btslider_list li',selfslider)[p+1]).addClass('current');
				}
				if(p== longeur-1 && options.autoplay == true){
					self.setPosition(0);
					p=0;
					$($('.btslider_list li',selfslider)[p]).addClass('current');
				}
			}
		}



		/*__ Le click sur le bouton prev __*/
		$('.backward',selfslider).bind('click',function(){
			self.prevSlide();
			self.controle(false,'prev');
			if(options.autoplay)
				self.initAnimation();
			return	false;	
		});

		/*__ Le click sur le bouton next __*/
		$('.forward',selfslider).bind('click',function(){
			self.nextSlide();
			self.controle(false);
			if(options.autoplay)
				self.initAnimation();
			return	false;
		}); 


		$('.btslider_list li',selfslider).click(function(){
			var index = $('.btslider_list li',selfslider).index($(this));
			if(options.autoplay)
				self.initAnimation();
			self.setPosition(index * unitCarousel);
			$('.btslider_list li.current',selfslider).removeClass('current');
			$(this).addClass('current');
		})

	};

	// Create shortcut for internal use
	var $jc = $.ATFcarousel;

	$.fn.carousel = function(o) {

		return this.each(function() {
			$(this).data('ATFcarousel', new $jc(this, o));
		});

	}
})( jQuery );

$(document).ready(function(){
	$('.slider').carousel({delay:4000});
});
;
var ATFImageSlideShow = new Array();

$(document).ready(
		function() {

			if ($('#bandeau_anim').size()) {

				// init des elements
				// structure :: elm sizeof
				size = {
					// hmin : 412,// mika
					hmax : 412,// mika

					wmin : 980,
					wmax : 980,
					ul : {
						hmin : 412,// mika
						hmax : 412
					// mika
					}
				};

				ATFBandeauNavigatorDetection();

				var anim_length = $('#bandeau_anim li').length;
				var items_width = size.wmax;// desormais la taille est
				// la meme pour tout le
				// monde
				var items_padding = parseInt($($('#bandeau_anim ul li')[0]).css(
						'margin-right'));
				var items_width2 = items_width + items_padding;
				var anim_width = (size.wmax + items_padding) * anim_length;

				// structure :: config
				anim = {
					scrollStep : 15,
					scrollStepSlowDown : 0.25,
					scrollInterval : null,
					ScrollIntervalVBL : 10,
					mouseDownSpeedBooster : 20,
					scrollingHotSpotLeft : "div.scrollingHotSpotLeft",//mika avec panel
					scrollingHotSpotRight : "div.scrollingHotSpotRight",//mika avec
					// panel
					// scrollingHotSpotLeft:"div.old-scrollingHotSpotLeft",
					// //mika
					// scrollingHotSpotRight:"div.old-scrollingHotSpotRight",//mika
					sizehotspot : null,
					//
					ScrollIntervalMenuLastItem : null,
					ScrollIntervalMenu : null,
					ScrollIntervalMenuLastItemOver : null,
					ScrollIntervalMenuOver : null,
					//
					mother : $('.bandeau_verti'),

					//
					ul : $('.bandeau_verti ul'),
					li : $('.bandeau_verti li'),
					anim_width : anim_width,
					anim_length : anim_length,
					items_padding : items_padding,
					items_width : items_width,
					items_widthreal : items_width + items_padding,

					mouse_X : 0,
					documentwidth : parseInt($(document).width()),// 110720

					stoping : false,// video play's
					currentvideo : null,

					speed : 500,// delai des animations

					delayslideshow : false,
					focus : {
						h : 0,
						w : 0,
						last : '',
						current : null
					}
				};

				
				$('.closeVideo').bind(
						'click',
						function(e) {
							$('#bandeau_agrandirreduire').show();
							$('#atfbandeau_video' + anim.currentvideo).remove();
							$('li.item' + anim.currentvideo + ' .atfbandeau_videocon')
									.append(
											'<div id="atfbandeau_video' + anim.currentvideo
													+ '"></div>');
							$('li.item' + anim.currentvideo + ' .atfbandeau_videocontainer')
									.hide();
							$('li.item' + anim.currentvideo + ' .atfbandeau_menuteaser')
									.show();
							anim.stoping = false;
						});

				//
				// mode de deplacement des elements : scroll / slide
				anim.isscroll = $('#bandeau_anim').parent().parent().hasClass(
						'isscroll');// mika

				// delay de l'auto scroll
				var tmp = new Array('delay2000', 'delay3000', 'delay4000', 'delay5000',
						'delay6000', 'delay8000', 'delay10000');
				for ( var i in tmp) {
					if ($('#bandeau_anim').parent().parent().hasClass(tmp[i])) {
						anim.delayslideshow = parseInt(tmp[i].replace(/delay/, ''));
						break;
					}
				}

				// le menu est ouvert par defaut
				anim.isopen = $('#bandeau_anim').parent().parent().hasClass('isopen');
				anim.isscroll = false;

				anim.ul.css('width', anim.anim_width + 'px');

				// Set variables
				anim.mother.data("scrollingHotSpotRight", anim.mother
						.find(anim.scrollingHotSpotRight));
				anim.mother.data("scrollingHotSpotLeft", anim.mother
						.find(anim.scrollingHotSpotLeft));
				// anim.mother.data("old-scrollingHotSpotRight",anim.mother.find(
				// anim.scrollingHotSpotRight));
				// anim.mother.data("old-scrollingHotSpotLeft",
				// anim.mother.find( anim.scrollingHotSpotLeft));
				anim.mother.data("hotSpotWidth", anim.mother.find(
						anim.scrollingHotSpotLeft).width());
			
				// The left hotspot
				anim.mother.data("scrollingHotSpotLeft").addClass(
						"scrollingHotSpotLeftVisible");
				anim.mother.data("scrollingHotSpotLeft").removeAttr("style");
				// anim.mother.data("old-scrollingHotSpotLeft").addClass("scrollingHotSpotLeftVisible");//mika
				// anim.mother.data("old-scrollingHotSpotLeft").removeAttr("style");//mika

				// The right hotspot
				anim.mother.data("scrollingHotSpotRight").addClass(
						"scrollingHotSpotRightVisible");
				anim.mother.data("scrollingHotSpotRight").removeAttr("style");
				// anim.mother.data("old-scrollingHotSpotRight").addClass("scrollingHotSpotRightVisible");//mika
				// anim.mother.data("old-scrollingHotSpotRight").removeAttr("style");//mika

				

			
				// permet de cacher les flèches lorsqu'il n'y a qu'un seul slide.
				
				
//					$(anim.scrollingHotSpotLeft).hide();
//					$(anim.scrollingHotSpotRight).hide();
					

	if(anim_length == 1 ){
					//alert(anim_length);
					anim.mother.data("scrollingHotSpotLeft").addClass("invisible");
					anim.mother.data("scrollingHotSpotRight").addClass("invisible");
				}
				
				
				anim.mother.data("speedBooster", 1);
				anim.mother.data("motherElementOffset",
						$('.bandeau_verti').offset().left);
				anim.mother.data("scrollXPos", 0);

				ATFBandeauHomeWindowResize();
				/** * Resize de la fenetre ** */
				ATFBandeauHomeGet_X();
				/** * Position de la souris ** */

				// item selectionne par defaut
				if ($('.focus').length > 0)
					anim.focus.current = $('.focus')[0];

				if (anim.focus.current == null) {

					$(anim.li[0]).addClass('focus');
					anim.focus.current = $('.focus')[0];
				}
				//
				anim.focus.current = anim.li[0];

				ATFFindPreload();

				if (ATFImageSlideShow.length > 0) {
					setTimeout('ATFLoadImage(0,ATFImageSlideShow.length);', 200);
				}

				ATFBandeauOpenMode(); // ouvre ou ferme le bandeau

				ATFBandeauResize(); // redimensionne les fleches en fonction
				// de l'espace disponible

				$('#bandeau_agrandirreduire').bind("click", function() {
					anim.isopen = !anim.isopen;
					ATFBandeauOpenMode();
				});

				$(document).ready(function() {
					$('.myheader').each(function(idx, el) {
						el.style.height = '';
					});
				});

				if (1 == 1) {
					// GESTION DE L AFFICHAGE OU PAS DES MENUS SUR ROLLOVER
					anim.mother.bind("mouseover", function() {
						if (!anim.stoping) {
							clearTimeout(anim.ScrollIntervalMenuOver);
							clearInterval(anim.mother.data("ScrollInterval"));

							var itemindex = anim.li.index($(this));
							if (anim.ScrollIntervalMenuLastItemOver != itemindex) {
								anim.ScrollIntervalMenuLastItemOver = itemindex;
								$(this)
										.find("div.atfbandeau_menuteaser.atfbandeau_teaser_over")
										.show();
							}
						}
					});

					anim.mother.bind("mouseout", function() {
						if (!anim.stoping) {
							clearTimeout(anim.ScrollIntervalMenuOver);
							anim.ScrollIntervalMenuOver = setTimeout(
									"ATFBandeauHomeMenuOverHide('" + anim.li.index($(this))
											+ "')", 500);
						}
					});

					// GESTION DE L AFFICHAGE OU PAS DES MENUS SUR ROLLOVER
					// bis
					$("#bandeau_anim").bind(
							"mouseover",
							function() {
								if (!anim.stoping) {
									clearTimeout(anim.ScrollIntervalMenuOver);
									clearInterval(anim.mother.data("ScrollInterval"));

									var itemindex = anim.li.index($(this));
									if (anim.ScrollIntervalMenuLastItemOver != itemindex) {
										anim.ScrollIntervalMenuLastItemOver = itemindex;
										$(this).find(
												"div.atfbandeau_menuteaser.atfbandeau_teaser_over")
												.show();
									}
								}
							});

					$("#bandeau_anim").bind(
							"mouseout",
							function() {
								if (!anim.stoping) {
									clearTimeout(anim.ScrollIntervalMenuOver);
									anim.ScrollIntervalMenuOver = setTimeout(
											"ATFBandeauHomeMenuOverHide('" + anim.li.index($(this))
													+ "')", 500);
								}
							});

					if (!anim.isscroll)// slide
					{

						anim.mother.data("scrollingHotSpotLeft").bind(
								"mousedown",
								function() {
									if (!anim.stoping) {
										var currentindex = anim.li.index(anim.focus.current);
										currentindex--;
										if (currentindex < 0)
											currentindex = anim.anim_length - 1;
										anim.focus.current = anim.li[currentindex];
										ATFBandeauHomeMoveToItem(anim.focus.current, 500);
										if (anim.delayslideshow) {
											clearInterval(anim.mother.data("ScrollInterval"));
											anim.mother
													.data("ScrollInterval", setInterval(
															"ATFBandeauHomeBCL_SlideShow()",
															anim.delayslideshow));
										}
									}
								});

						anim.mother.data("scrollingHotSpotRight").bind(
								"mousedown",
								function() {
									if (!anim.stoping) {
										var currentindex = anim.li.index(anim.focus.current);
										currentindex++;
										if (currentindex >= anim.anim_length)
											currentindex = 0;
										anim.focus.current = anim.li[currentindex];
										ATFBandeauHomeMoveToItem(anim.focus.current, 500);
										if (anim.delayslideshow) {
											clearInterval(anim.mother.data("ScrollInterval"));
											anim.mother
													.data("ScrollInterval", setInterval(
															"ATFBandeauHomeBCL_SlideShow()",
															anim.delayslideshow));
										}
									}
								});

						if (anim.delayslideshow) {
							clearInterval(anim.mother.data("ScrollInterval"));
							anim.mother.data("ScrollInterval", setInterval(
									"ATFBandeauHomeBCL_SlideShow()", anim.delayslideshow));
						}

					} else {
						anim.mother.data("scrollingHotSpotRight").bind(
								"mousedown",
								function() {
									if (!anim.stoping) {
										anim.mother
												.data("speedBooster", anim.mouseDownSpeedBooster);
									}
								});

						anim.mother.data("scrollingHotSpotRight").bind(
								"mouseup",
								function() {
									if (!anim.stoping) {
										anim.mother.data("scrollXPos", 0);
										clearInterval(anim.mother.data("ScrollInterval"));
										anim.mother.data("ScrollInterval", setInterval(
												"ATFBandeauHomeBCL_RL(1)", anim.ScrollIntervalVBL));
									}
								});

						anim.mother.data("scrollingHotSpotRight").bind(
								"mouseover",
								function() {
									if (!anim.stoping) {
										clearTimeout(anim.ScrollIntervalMenuOver);
										clearInterval(anim.mother.data("ScrollInterval"));
										anim.mother.data("ScrollInterval", setInterval(
												"ATFBandeauHomeBCL_RL(1)", anim.ScrollIntervalVBL));
									}
								});

						anim.mother.data("scrollingHotSpotRight").bind(
								"mousemove",
								function(e) {
									if (!anim.stoping) {
										clearTimeout(anim.ScrollIntervalMenuOver);
										var x = e.pageX
												- (this.offsetLeft + anim.mother
														.data("motherElementOffset"));
										anim.mother.data("scrollXPos", Math.round((x / anim.mother
												.data("hotSpotWidth"))
												* anim.scrollStep));
										if (anim.mother.data("scrollXPos") === Infinity) {
											anim.mother.data("scrollXPos", 0);
										}
									}
								});

						anim.mother.data("scrollingHotSpotRight").bind(
								"mouseout",
								function() {
									if (!anim.stoping) {
										clearInterval(anim.mother.data("ScrollInterval"));
										anim.mother.data("ScrollInterval", setInterval(
												"ATFBandeauHomeBCL_RLOut(1)", anim.ScrollIntervalVBL));
									}
								});

						ATFBandeauDelaySlideShowLaunch();

						anim.mother.data("scrollingHotSpotLeft").bind(
								"mousedown",
								function() {
									if (!anim.stoping) {
										anim.mother
												.data("speedBooster", anim.mouseDownSpeedBooster);
									}
								});

						anim.mother.data("scrollingHotSpotLeft").bind(
								"mouseup",
								function() {
									if (!anim.stoping) {
										anim.mother.data("scrollXPos", 0);
										clearInterval(anim.mother.data("ScrollInterval"));
										anim.mother.data("ScrollInterval", setInterval(
												"ATFBandeauHomeBCL_RL(-1)", anim.ScrollIntervalVBL));
									}
								});

						anim.mother.data("scrollingHotSpotLeft").bind(
								"mouseover",
								function() {
									if (!anim.stoping) {
										clearTimeout(anim.ScrollIntervalMenuOver);
										clearInterval(anim.mother.data("ScrollInterval"));
										anim.mother.data("ScrollInterval", setInterval(
												"ATFBandeauHomeBCL_RL(-1)", anim.ScrollIntervalVBL));
									}
								});

						// Check the mouse X position and calculate the
						// relative X position inside the left hotspot
						anim.mother.data("scrollingHotSpotLeft").bind(
								"mousemove",
								function(e) {
									if (!anim.stoping) {
										clearTimeout(anim.ScrollIntervalMenuOver);
										var x = anim.mother.data("scrollingHotSpotLeft")
												.innerWidth()
												- (e.pageX - anim.mother.data("motherElementOffset"));
										anim.mother.data("scrollXPos", Math.round((x / anim.mother
												.data("hotSpotWidth"))
												* anim.scrollStep));
										if (anim.mother.data("scrollXPos") === Infinity) {
											anim.mother.data("scrollXPos", 0);
										}
									}
								});

						anim.mother.data("scrollingHotSpotLeft")
								.bind(
										"mouseout",
										function() {
											if (!anim.stoping) {
												clearInterval(anim.mother.data("ScrollInterval"));
												anim.mother.data("ScrollInterval", setInterval(
														"ATFBandeauHomeBCL_RLOut(-1)",
														anim.ScrollIntervalVBL));
											}
										});
					}
				}
			}
		});

function ATFBandeauHomeBCL_SlideShow() {
	var currentindex = anim.li.index(anim.focus.current);
	currentindex++;
	if (currentindex >= anim.anim_length)
		currentindex = 0;
	anim.focus.current = anim.li[currentindex];

	ATFBandeauHomeMoveToItem(anim.focus.current, 500);
}

// EL - Limit control 4 infinity loop
function ATFBandeauHomeUpdate_ul(val) {

	if (anim.anim_length > 3) {
		var vbl = 0;
		if (val > 0) {
			var current_left = parseInt(anim.ul.css('left'));
			while (current_left < -((size.wmax + anim.items_padding) * 2)) {
				current_left = ATFBandeauHomeEmpileUL(current_left);
				vbl++;
			}
		}
		if (val < 0) {
			var current_left = parseInt(anim.ul.css('left'));
			while (current_left > -((size.wmax + anim.items_padding) * 1)) { // 0
				current_left = ATFBandeauHomeDepileUL(current_left);
				vbl++;
			}
		}
	}
}

function ATFBandeauHomeEmpileUL(current_left) {
	if (typeof (current_left) == "undefined")
		current_left = parseInt(anim.ul.css('left'));
	anim.ul.append($('#bandeau_anim li:first'));
	anim.ul.css('left', (current_left + anim.items_widthreal) + 'px');
	return parseInt(anim.ul.css('left'));
}

function ATFBandeauHomeDepileUL(current_left) {
	if (typeof (current_left) == "undefined")
		current_left = parseInt(anim.ul.css('left'));
	anim.ul.prepend($('#bandeau_anim li:last'));
	anim.ul.css('left', (current_left - anim.items_widthreal) + 'px');
	return parseInt(anim.ul.css('left'));
}
// juste pour creer une region fermable
if (1 == 1) {

	function ATFBandeauHomeBCL_RL(sens) {
		if (anim.stoping)
			return false;
		var speed = (anim.mother.data("scrollXPos") + anim.mother
				.data("speedBooster"));
		ATFBandeauHomeBCL_RLScrollDown(sens * speed);
	}

	function ATFBandeauHomeBCL_RLOut(sens) {
		if (anim.stoping)
			return false;
		anim.mother.data("scrollXPos", Math.max(0, anim.mother.data("scrollXPos")
				- anim.scrollStepSlowDown));
		var speed = anim.mother.data("scrollXPos");
		ATFBandeauHomeBCL_RLScrollDown(sens * speed);
		if (speed <= 0) {
			clearInterval(anim.mother.data("ScrollInterval"));
			ATFBandeauDelaySlideShowLaunch();
		}
	}

	function ATFBandeauHomeBCL_RLScrollDown(speed, delay) {
		if (typeof (delay) == "undefined")
			delay = 0;

		anim.mother.data("speedBooster", Math.max(0, anim.mother
				.data("speedBooster")
				- anim.scrollStepSlowDown));
		var ul_left = parseInt(anim.ul.css('left'));

		if (!anim.isscroll)// slide - click by click
		{
			anim.stoping = true;
		}

		anim.ul.stop().animate({
			left : ul_left - (speed) + 'px'
		}, delay, function(element) {
			if (!anim.isscroll)// slide - click by click
			{
				anim.stoping = false;
			}
			ATFBandeauHomeUpdate_ul(speed > 0 ? 1 : -1);
		});
	}

	/** * Position de la souris ** */
	function ATFBandeauHomeGet_X() {
		$(document).mousemove(function(e) {
			anim.mouse_X = e.pageX;
			return anim.mouse_X;
		});
	}

	/** * Resize de la fenetre ** */
	function ATFBandeauHomeWindowResize() {
		$(window).resize(function() {
			anim.documentwidth = parseInt($(document).width());
			ATFBandeauResize();
		});
	}

}

function ATFBandeauNavigatorDetection() {

	var ua = navigator.userAgent;
	var checker = {
		iphone : ua.match(/(iPhone|iPod|iPad)/i),
		blackberry : ua.match(/BlackBerry/i),
		android : ua.match(/Android/i)
	};
	if (1 == 2 || checker.iphone || checker.blackberry || checker.android) {
		size.hmax = 360;// mika
		size.ul.hmax = 360;// mika
		$("div.bandeau_verti").addClass("mobileverti");
		// mika $("div.scrollingHotSpotLeft").addClass("mobileleft");
		// mika $("div.scrollingHotSpotRight").addClass("mobileright");
	} else {

		if ($("div#bandeau_anim").width() < 1110) {
			size.hmax = 340;// mika
			size.ul.hmax = 340;// mika
			$("div.bandeau_verti").addClass("mobileverti");
			// mika $("div.scrollingHotSpotLeft").addClass("mobileleft");
			// mika $("div.scrollingHotSpotRight").addClass("mobileright");

			$("div.old-bandeau_verti").addClass("mobileverti");// mika
			$("div.old-scrollingHotSpotLeft").addClass("mobileleft");// mika
			$("div.old-scrollingHotSpotRight").addClass("mobileright");// mika
		}
		if ($("div#bandeau_anim").width() > 1110) {
			size.hmax = 500;
			size.ul.hmax = 500;
			$("div.bandeau_verti").removeClass("mobileverti");
			$("div.scrollingHotSpotLeft").removeClass("mobileleft");
			$("div.scrollingHotSpotRight").removeClass("mobileright");
		}
	}

	if ($("div#bandeau_anim").width() < 1110) {
		$("div.bandeau_verti").addClass("mobileverti");
		$("div.scrollingHotSpotLeft").addClass("mobileleft");
		$("div.scrollingHotSpotRight").addClass("mobileright");
	}
	if ($("div#bandeau_anim").width() > 1110) {
		$("div.bandeau_verti").removeClass("mobileverti");
		$("div.scrollingHotSpotLeft").removeClass("mobileleft");
		$("div.scrollingHotSpotRight").removeClass("mobileright");
	}
}

function ATFBandeauResize() {

	ATFBandeauNavigatorDetection();
	anim.sizehotspot = Math.round((anim.documentwidth - size.wmax) / 2);
	$(anim.scrollingHotSpotLeft + ' , ' + anim.scrollingHotSpotRight).animate({
		width : anim.sizehotspot
	}, 0, function() {
	});

	if (!anim.isscroll)// si on est en mode slide on reste avec le focus de
		// l'image
		ATFBandeauHomeMoveToItem(anim.focus.current);
}

function ATFBandeauHomeMoveToIndex(newindex) {

	var myli = anim.li[newindex];// var myli = anim.li.get(newindex);
	anim.focus.current = myli;
	// var currentindex = anim.li.index(index);

	ATFBandeauHomeMoveToItem(anim.focus.current);

	if (anim.delayslideshow) {
		clearInterval(anim.mother.data("ScrollInterval"));
		anim.mother.data("ScrollInterval", setInterval(
				"ATFBandeauHomeBCL_SlideShow()", anim.delayslideshow));
	}

}

function ATFBandeauHomeMoveToItem(item, delay) {

	var carousel = $('#mycarousel').data('jcarousel');
	if (typeof carousel != 'undefined') {
		var currentindex = anim.li.index(anim.focus.current);
		$('#mycarousel li[jcarouselindex]').css("opacity", "1");
		$('#mycarousel li[jcarouselindex=' + currentindex + ']').css("opacity",
				"0.5");

		carousel.scroll(currentindex);
	}

	// //je pense que l'autre carrousel n'est pas initialisé !!

	var obj = $(item);
	if (obj.length) {
		var leftcurrent = obj.offset().left;

		var leftdocument = anim.sizehotspot;
		leftcurrent = leftcurrent - leftdocument;

		ATFBandeauHomeBCL_RLScrollDown(leftcurrent, delay);

	}
}

// la fonction de click sur un video
function ATFBandeauHomeVideoPlayHandler(itemindex) {
	// arret l'animation
	anim.stoping = true;

	$('#bandeau_agrandirreduire').hide();
	anim.currentvideo = itemindex;

	$('li.item' + itemindex + ' .atfbandeau_videocontainer').show();
	$('li.item' + itemindex + ' .atfbandeau_menuteaser').hide();

	var obj = $('li.item' + itemindex);
	if (obj.length) {
		var video = $('.atfbandeau_video_item a', obj);

		SetVideo(video.attr("rel"), video.attr("href"), 'atfbandeau_video'
				+ itemindex);
	}
}

function ATFBandeauHideBG_CallBack(item, copycomment) {
	anim.ScrollIntervalMenuLastItem = null;
	var objitem = $('li.' + item);
	var div = objitem.find('.atfbandeau_menuteaser');
	var parentlink = div.attr('onclickold');
	div.unbind("click");

	if (parentlink != null) {
		parentlink = parentlink.replace(/function[	 ]*onclick[	 ]*\(event\)/ig, '');
		div.bind('click', function() {
			eval(parentlink);
		});
	}

	objitem = objitem.find('div.bg div.bgoverlay');
	objitem.attr("copycomment", copycomment);

	objitem.fadeOut('slow', function() {
		$(this).parent().parent().find('.auteur_bandeau_promo').html(
				$(this).attr("copycomment"));
	});
}

function ATFBandeauHideBG(item, copycomment) {
	clearTimeout(anim.ScrollIntervalMenu);
	anim.ScrollIntervalMenu = setTimeout("ATFBandeauHideBG_CallBack('" + item
			+ "','" + copycomment + "')", 1000);

}

function ATFBandeauSwapBG(item, itemindex, imgurl, copycomment) {

	clearTimeout(anim.ScrollIntervalMenu);// previent la fermeture
	if (anim.ScrollIntervalMenuLastItem != item + "_" + itemindex) {
		anim.ScrollIntervalMenuLastItem = item + "_" + itemindex;
		//
		var img = new Image();
		// image onload
		$(img).attr("myitem", 'li.' + item);
		$(img).attr("copycomment", copycomment);
		var objitem = $('li.' + item);
		// //memorise l action de l image par defaut
		var div = objitem.find('.atfbandeau_menuteaser');
		if (typeof div.attr('onclickold') == 'undefined') {
			div.attr('onclickold', div.attr('onclick') + ' ');
			div.removeAttr("onclick");
		}
		//
		var newhref = objitem.find('div.atfbandeau_menuteaser').find(
				'div.bv_url:eq(' + itemindex + ')  a').attr('href');// IE jquery
		// selector
		// workarround
		// (.find.find)
		var newtarget = objitem.find('div.atfbandeau_menuteaser').find(
				'div.bv_url:eq(' + itemindex + ')  a').attr('target');// IE
		// jquery
		// selector
		// workarround
		// (.find.find)
		//
		div.unbind("click");
		div.bind('click', function() {
			if (newtarget == '_blank') {
				window.open(newhref);
			} else {
				window.location = newhref;
			}
		});
		// //
		objitem = objitem.find('div.bg').find('div.bgoverlay');
		objitem.addClass('loading');
		$(img).load(
				function() {

					var objitem = $($(this).attr("myitem"));
					objitem = objitem.find('div.bg div.bgoverlay');
					objitem.attr("copycomment", $(this).attr("copycomment"));
					objitem.css('display', 'none'); // since .hide() failed in
					// safari
					objitem.removeClass('loading').html(this);
					objitem.fadeIn('slow', function() {
						$(this).parent().parent().find('.auteur_bandeau_promo').html(
								$(this).attr("copycomment"));
						// once the current loaded, trigger the next image
					});
				}).error(function() {
		}).attr('src', imgurl);

	}
}

// preload d'image "intelligent" : ne charge les images uniquement quand on en a
// besoin
function ATFLoadImage(index, max) {
	if (index < max) {
		var tmp = ATFImageSlideShow[index];
		var container = tmp[0];
		var imgsrc = tmp[1];

		// new image object
		var img = new Image();
		$(img).attr("myitem", 'li.' + container);
		var objitem = $('li.' + container);
		objitem = objitem.find('div.bg div.bgimg');
		objitem.addClass('loading');
		// image onload

		$(img).load(function() {
			ATFLoadImage(index + 1, max);
			var objitem = $($(this).attr("myitem"));
			objitem = objitem.find('div.bg div.bgimg');
			objitem.css('display', 'none');
			objitem.removeClass('loading').html(this);
			objitem.fadeIn('slow', function() {
				// once the current loaded, trigger the next image
			});

		}).error(function() {
			var objitem = $($(this).attr("myitem"));
			objitem = objitem.find('div.bg div.bgimg');
			objitem.removeClass('loading').html(this);
			$(this).attr('src', 'sites/atf/media/bandeaudefaultimg.jpg');
			ATFLoadImage(index + 1, max);
		}).attr('src', imgsrc);
	}
}

function ATFFindPreload() {

	var currentindex = anim.li.index(anim.focus.current);
	// comme on risque d'etre en slideshow on charge en lineaire
	var locker = false;
	for ( var i = currentindex; i < anim.anim_length; i++) {
		var objitem = anim.li[i];
		var rel = $(objitem).find('div.bg a.bgimgvo');
		rel = rel.attr('rel');
		ATFImageSlideShow.push(new Array("item" + i, rel));
		if (!locker && i - 1 > 0) {
			locker = true;
			var objitem = anim.li[i - 1];
			var rel = $(objitem).find('div.bg a.bgimgvo');
			rel = rel.attr('rel');
			ATFImageSlideShow.push(new Array("item" + (i - 1), rel));
		}
	}
	//
	for ( var i = 0; i < currentindex; i++) {
		var objitem = anim.li[i];
		var rel = $(objitem).find('div.bg a.bgimgvo');
		rel = rel.attr('rel');
		ATFImageSlideShow.push(new Array("item" + i, rel));
	}
}

function ATFBandeauDelaySlideShowLaunch() {
	anim.ScrollIntervalMenuOver = setTimeout("ATFBandeauDelaySlideShow();", 2000);
}

function ATFBandeauDelaySlideShow() {
	if (anim.delayslideshow) {
		anim.mother.data("scrollXPos", 1);
		clearInterval(anim.mother.data("ScrollInterval"));
		anim.mother.data("ScrollInterval", setInterval("ATFBandeauHomeBCL_RL(1)",
				anim.ScrollIntervalVBL));
	}
}

function ATFBandeauHomeMenuOverHide(itemindex) {
	anim.ScrollIntervalMenuLastItemOver = null;
	$(anim.li[itemindex])
			.find("div.atfbandeau_menuteaser.atfbandeau_teaser_over").hide();
	if (anim.isscroll)// scroll
		ATFBandeauDelaySlideShowLaunch();
	else {
		if (anim.delayslideshow) {
			clearInterval(anim.mother.data("ScrollInterval"));
			anim.mother.data("ScrollInterval", setInterval(
					"ATFBandeauHomeBCL_SlideShow()", anim.delayslideshow));
		}
	}
}

function ATFBandeauOpenMode() {
	if (anim.isopen) {

		anim.mother.animate({
			height : size.ul.hmax
		}, "fast", function() {
			anim.ul.animate({
				height : size.ul.hmax
			}, "fast");
			anim.li.animate({
				height : size.ul.hmax,
				width : size.wmax
			}, "fast");
		});

		$('#bandeau_agrandirreduire div.atfbandeau_agrandir').hide();
		$('#bandeau_agrandirreduire div.atfbandeau_reduire').show();

		$('.atfbandeau_menuteaser').animate({
			height : size.ul.hmax
		}, anim.speed);
		$('.atfbandeau_container_alpha').fadeTo("fast", 1);

		anim.mother.data("scrollingHotSpotLeft").animate({
			height : size.ul.hmax
		}, anim.speed);
		anim.mother.data("scrollingHotSpotRight").animate({
			height : size.ul.hmax
		}, anim.speed);

	} else {

		anim.mother.animate({
			height : size.ul.hmin
		}, "fast", function() {
			anim.ul.animate({
				height : size.ul.hmin
			}, "fast");
			anim.li.animate({
				height : size.ul.hmin,
				width : size.wmax
			}, "fast");
		});

		// $('#bandeau_agrandirreduire div.atfbandeau_agrandir').show();
		// $('#bandeau_agrandirreduire div.atfbandeau_reduire').hide();

		// $('.atfbandeau_menuteaser,'+anim.scrollingHotSpotLeft+","+anim.scrollingHotSpotRight).animate({height:size.ul.hmin},anim.speed);
		// $('.atfbandeau_container_alpha').fadeTo("fast", 0.7);

	}
}

// (c) 2012 Torkild Dyvik Olsen
// This program may be freely distributed under the MIT license.

// A simple debug function to dump information about an object. Returns a
// string of a nested tree of the object dumped.
(function($) {

	// Returns the dump of the current jQuery object (`this`).
	$.fn.dump = function() {
		return $.dump(this);
	}

	// Dumps any object passed as the only parameter.
	$.dump = function(object) {
		// The recursion function, used to determine each object and it's
		// children
		// in the passed tree.
		var recursion = function(obj, level) {
			if (!level)
				level = 0;
			var dump = '', p = '';
			for (i = 0; i < level; i++)
				p += "\t";

			var t = type(obj);
			switch (t) {
			case "string":
				return '"' + obj + '"';
				break;
			case "number":
				return obj.toString();
				break;
			case "boolean":
				return obj ? 'true' : 'false';
			case "date":
				return "Date: " + obj.toLocaleString();
			case "array":
				dump += 'Array ( \n';
				$.each(obj, function(k, v) {
					dump += p + '\t' + k + ' => ' + recursion(v, level + 1) + '\n';
				});
				dump += p + ')';
				break;
			case "object":
				dump += 'Object { \n';
				$.each(obj, function(k, v) {
					dump += p + '\t' + k + ': ' + recursion(v, level + 1) + '\n';
				});
				dump += p + '}';
				break;
			case "jquery":
				dump += 'jQuery Object { \n';
				$.each(obj, function(k, v) {
					dump += p + '\t' + k + ' = ' + recursion(v, level + 1) + '\n';
				});
				dump += p + '}';
				break;
			case "regexp":
				return "RegExp: " + obj.toString();
			case "error":
				return obj.toString();
			case "document":
			case "domelement":
				dump += 'DOMElement [ \n' + p + '\tnodeName: ' + obj.nodeName + '\n'
						+ p + '\tnodeValue: ' + obj.nodeValue + '\n' + p
						+ '\tinnerHTML: [ \n';
				$.each(obj.childNodes, function(k, v) {
					if (k < 1)
						var r = 0;
					if (type(v) == "string") {
						if (v.textContent.match(/[^\s]/)) {
							dump += p + '\t\t' + (k - (r || 0)) + ' = String: '
									+ trim(v.textContent) + '\n';
						} else {
							r--;
						}
					} else {
						dump += p + '\t\t' + (k - (r || 0)) + ' = '
								+ recursion(v, level + 2) + '\n';
					}
				});
				dump += p + '\t]\n' + p + ']';
				break;
			case "function":
				var match = obj.toString().match(/^(.*)\(([^\)]*)\)/im);
				match[1] = trim(match[1].replace(new RegExp("[\\s]+", "g"), " "));
				match[2] = trim(match[2].replace(new RegExp("[\\s]+", "g"), " "));
				return match[1] + "(" + match[2] + ")";
			case "window":
			default:
				dump += 'N/A: ' + t;
				break;
			}

			return dump;
		}

		// Returns the type of the object passed as the only parameter.
		var type = function(obj) {
			var type = typeof (obj);

			if (type != "object") {
				return type;
			}

			switch (obj) {
			case null:
				return 'null';
			case window:
				return 'window';
			case document:
				return 'document';
			case window.event:
				return 'event';
			default:
				break;
			}

			if (obj.jquery) {
				return 'jquery';
			}

			switch (obj.constructor) {
			case Array:
				return 'array';
			case Boolean:
				return 'boolean';
			case Date:
				return 'date';
			case Object:
				return 'object';
			case RegExp:
				return 'regexp';
			case ReferenceError:
			case Error:
				return 'error';
			case null:
			default:
				break;
			}

			switch (obj.nodeType) {
			case 1:
				return 'domelement';
			case 3:
				return 'string';
			case null:
			default:
				break;
			}

			return 'Unknown';
		}

		// Start and return the recursion on the object
		return recursion(object);
	}

	// Trim strings
	function trim(str) {
		return ltrim(rtrim(str));
	}
	function ltrim(str) {
		return str.replace(new RegExp("^[\\s]+", "g"), "");
	}
	function rtrim(str) {
		return str.replace(new RegExp("[\\s]+$", "g"), "");
	}

})(jQuery);;
