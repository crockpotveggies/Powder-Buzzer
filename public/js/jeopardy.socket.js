/*  SWFObject v2.2 <http://code.google.com/p/swfobject/> 
    is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfobject=function(){var D="undefined",r="object",S="Shockwave Flash",W="ShockwaveFlash.ShockwaveFlash",q="application/x-shockwave-flash",R="SWFObjectExprInst",x="onreadystatechange",O=window,j=document,t=navigator,T=false,U=[h],o=[],N=[],I=[],l,Q,E,B,J=false,a=false,n,G,m=true,M=function(){var aa=typeof j.getElementById!=D&&typeof j.getElementsByTagName!=D&&typeof j.createElement!=D,ah=t.userAgent.toLowerCase(),Y=t.platform.toLowerCase(),ae=Y?/win/.test(Y):/win/.test(ah),ac=Y?/mac/.test(Y):/mac/.test(ah),af=/webkit/.test(ah)?parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):false,X=!+"\v1",ag=[0,0,0],ab=null;if(typeof t.plugins!=D&&typeof t.plugins[S]==r){ab=t.plugins[S].description;if(ab&&!(typeof t.mimeTypes!=D&&t.mimeTypes[q]&&!t.mimeTypes[q].enabledPlugin)){T=true;X=false;ab=ab.replace(/^.*\s+(\S+\s+\S+$)/,"$1");ag[0]=parseInt(ab.replace(/^(.*)\..*$/,"$1"),10);ag[1]=parseInt(ab.replace(/^.*\.(.*)\s.*$/,"$1"),10);ag[2]=/[a-zA-Z]/.test(ab)?parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0}}else{if(typeof O.ActiveXObject!=D){try{var ad=new ActiveXObject(W);if(ad){ab=ad.GetVariable("$version");if(ab){X=true;ab=ab.split(" ")[1].split(",");ag=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}}catch(Z){}}}return{w3:aa,pv:ag,wk:af,ie:X,win:ae,mac:ac}}(),k=function(){if(!M.w3){return}if((typeof j.readyState!=D&&j.readyState=="complete")||(typeof j.readyState==D&&(j.getElementsByTagName("body")[0]||j.body))){f()}if(!J){if(typeof j.addEventListener!=D){j.addEventListener("DOMContentLoaded",f,false)}if(M.ie&&M.win){j.attachEvent(x,function(){if(j.readyState=="complete"){j.detachEvent(x,arguments.callee);f()}});if(O==top){(function(){if(J){return}try{j.documentElement.doScroll("left")}catch(X){setTimeout(arguments.callee,0);return}f()})()}}if(M.wk){(function(){if(J){return}if(!/loaded|complete/.test(j.readyState)){setTimeout(arguments.callee,0);return}f()})()}s(f)}}();function f(){if(J){return}try{var Z=j.getElementsByTagName("body")[0].appendChild(C("span"));Z.parentNode.removeChild(Z)}catch(aa){return}J=true;var X=U.length;for(var Y=0;Y<X;Y++){U[Y]()}}function K(X){if(J){X()}else{U[U.length]=X}}function s(Y){if(typeof O.addEventListener!=D){O.addEventListener("load",Y,false)}else{if(typeof j.addEventListener!=D){j.addEventListener("load",Y,false)}else{if(typeof O.attachEvent!=D){i(O,"onload",Y)}else{if(typeof O.onload=="function"){var X=O.onload;O.onload=function(){X();Y()}}else{O.onload=Y}}}}}function h(){if(T){V()}else{H()}}function V(){var X=j.getElementsByTagName("body")[0];var aa=C(r);aa.setAttribute("type",q);var Z=X.appendChild(aa);if(Z){var Y=0;(function(){if(typeof Z.GetVariable!=D){var ab=Z.GetVariable("$version");if(ab){ab=ab.split(" ")[1].split(",");M.pv=[parseInt(ab[0],10),parseInt(ab[1],10),parseInt(ab[2],10)]}}else{if(Y<10){Y++;setTimeout(arguments.callee,10);return}}X.removeChild(aa);Z=null;H()})()}else{H()}}function H(){var ag=o.length;if(ag>0){for(var af=0;af<ag;af++){var Y=o[af].id;var ab=o[af].callbackFn;var aa={success:false,id:Y};if(M.pv[0]>0){var ae=c(Y);if(ae){if(F(o[af].swfVersion)&&!(M.wk&&M.wk<312)){w(Y,true);if(ab){aa.success=true;aa.ref=z(Y);ab(aa)}}else{if(o[af].expressInstall&&A()){var ai={};ai.data=o[af].expressInstall;ai.width=ae.getAttribute("width")||"0";ai.height=ae.getAttribute("height")||"0";if(ae.getAttribute("class")){ai.styleclass=ae.getAttribute("class")}if(ae.getAttribute("align")){ai.align=ae.getAttribute("align")}var ah={};var X=ae.getElementsByTagName("param");var ac=X.length;for(var ad=0;ad<ac;ad++){if(X[ad].getAttribute("name").toLowerCase()!="movie"){ah[X[ad].getAttribute("name")]=X[ad].getAttribute("value")}}P(ai,ah,Y,ab)}else{p(ae);if(ab){ab(aa)}}}}}else{w(Y,true);if(ab){var Z=z(Y);if(Z&&typeof Z.SetVariable!=D){aa.success=true;aa.ref=Z}ab(aa)}}}}}function z(aa){var X=null;var Y=c(aa);if(Y&&Y.nodeName=="OBJECT"){if(typeof Y.SetVariable!=D){X=Y}else{var Z=Y.getElementsByTagName(r)[0];if(Z){X=Z}}}return X}function A(){return !a&&F("6.0.65")&&(M.win||M.mac)&&!(M.wk&&M.wk<312)}function P(aa,ab,X,Z){a=true;E=Z||null;B={success:false,id:X};var ae=c(X);if(ae){if(ae.nodeName=="OBJECT"){l=g(ae);Q=null}else{l=ae;Q=X}aa.id=R;if(typeof aa.width==D||(!/%$/.test(aa.width)&&parseInt(aa.width,10)<310)){aa.width="310"}if(typeof aa.height==D||(!/%$/.test(aa.height)&&parseInt(aa.height,10)<137)){aa.height="137"}j.title=j.title.slice(0,47)+" - Flash Player Installation";var ad=M.ie&&M.win?"ActiveX":"PlugIn",ac="MMredirectURL="+O.location.toString().replace(/&/g,"%26")+"&MMplayerType="+ad+"&MMdoctitle="+j.title;if(typeof ab.flashvars!=D){ab.flashvars+="&"+ac}else{ab.flashvars=ac}if(M.ie&&M.win&&ae.readyState!=4){var Y=C("div");X+="SWFObjectNew";Y.setAttribute("id",X);ae.parentNode.insertBefore(Y,ae);ae.style.display="none";(function(){if(ae.readyState==4){ae.parentNode.removeChild(ae)}else{setTimeout(arguments.callee,10)}})()}u(aa,ab,X)}}function p(Y){if(M.ie&&M.win&&Y.readyState!=4){var X=C("div");Y.parentNode.insertBefore(X,Y);X.parentNode.replaceChild(g(Y),X);Y.style.display="none";(function(){if(Y.readyState==4){Y.parentNode.removeChild(Y)}else{setTimeout(arguments.callee,10)}})()}else{Y.parentNode.replaceChild(g(Y),Y)}}function g(ab){var aa=C("div");if(M.win&&M.ie){aa.innerHTML=ab.innerHTML}else{var Y=ab.getElementsByTagName(r)[0];if(Y){var ad=Y.childNodes;if(ad){var X=ad.length;for(var Z=0;Z<X;Z++){if(!(ad[Z].nodeType==1&&ad[Z].nodeName=="PARAM")&&!(ad[Z].nodeType==8)){aa.appendChild(ad[Z].cloneNode(true))}}}}}return aa}function u(ai,ag,Y){var X,aa=c(Y);if(M.wk&&M.wk<312){return X}if(aa){if(typeof ai.id==D){ai.id=Y}if(M.ie&&M.win){var ah="";for(var ae in ai){if(ai[ae]!=Object.prototype[ae]){if(ae.toLowerCase()=="data"){ag.movie=ai[ae]}else{if(ae.toLowerCase()=="styleclass"){ah+=' class="'+ai[ae]+'"'}else{if(ae.toLowerCase()!="classid"){ah+=" "+ae+'="'+ai[ae]+'"'}}}}}var af="";for(var ad in ag){if(ag[ad]!=Object.prototype[ad]){af+='<param name="'+ad+'" value="'+ag[ad]+'" />'}}aa.outerHTML='<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+ah+">"+af+"</object>";N[N.length]=ai.id;X=c(ai.id)}else{var Z=C(r);Z.setAttribute("type",q);for(var ac in ai){if(ai[ac]!=Object.prototype[ac]){if(ac.toLowerCase()=="styleclass"){Z.setAttribute("class",ai[ac])}else{if(ac.toLowerCase()!="classid"){Z.setAttribute(ac,ai[ac])}}}}for(var ab in ag){if(ag[ab]!=Object.prototype[ab]&&ab.toLowerCase()!="movie"){e(Z,ab,ag[ab])}}aa.parentNode.replaceChild(Z,aa);X=Z}}return X}function e(Z,X,Y){var aa=C("param");aa.setAttribute("name",X);aa.setAttribute("value",Y);Z.appendChild(aa)}function y(Y){var X=c(Y);if(X&&X.nodeName=="OBJECT"){if(M.ie&&M.win){X.style.display="none";(function(){if(X.readyState==4){b(Y)}else{setTimeout(arguments.callee,10)}})()}else{X.parentNode.removeChild(X)}}}function b(Z){var Y=c(Z);if(Y){for(var X in Y){if(typeof Y[X]=="function"){Y[X]=null}}Y.parentNode.removeChild(Y)}}function c(Z){var X=null;try{X=j.getElementById(Z)}catch(Y){}return X}function C(X){return j.createElement(X)}function i(Z,X,Y){Z.attachEvent(X,Y);I[I.length]=[Z,X,Y]}function F(Z){var Y=M.pv,X=Z.split(".");X[0]=parseInt(X[0],10);X[1]=parseInt(X[1],10)||0;X[2]=parseInt(X[2],10)||0;return(Y[0]>X[0]||(Y[0]==X[0]&&Y[1]>X[1])||(Y[0]==X[0]&&Y[1]==X[1]&&Y[2]>=X[2]))?true:false}function v(ac,Y,ad,ab){if(M.ie&&M.mac){return}var aa=j.getElementsByTagName("head")[0];if(!aa){return}var X=(ad&&typeof ad=="string")?ad:"screen";if(ab){n=null;G=null}if(!n||G!=X){var Z=C("style");Z.setAttribute("type","text/css");Z.setAttribute("media",X);n=aa.appendChild(Z);if(M.ie&&M.win&&typeof j.styleSheets!=D&&j.styleSheets.length>0){n=j.styleSheets[j.styleSheets.length-1]}G=X}if(M.ie&&M.win){if(n&&typeof n.addRule==r){n.addRule(ac,Y)}}else{if(n&&typeof j.createTextNode!=D){n.appendChild(j.createTextNode(ac+" {"+Y+"}"))}}}function w(Z,X){if(!m){return}var Y=X?"visible":"hidden";if(J&&c(Z)){c(Z).style.visibility=Y}else{v("#"+Z,"visibility:"+Y)}}function L(Y){var Z=/[\\\"<>\.;]/;var X=Z.exec(Y)!=null;return X&&typeof encodeURIComponent!=D?encodeURIComponent(Y):Y}var d=function(){if(M.ie&&M.win){window.attachEvent("onunload",function(){var ac=I.length;for(var ab=0;ab<ac;ab++){I[ab][0].detachEvent(I[ab][1],I[ab][2])}var Z=N.length;for(var aa=0;aa<Z;aa++){y(N[aa])}for(var Y in M){M[Y]=null}M=null;for(var X in swfobject){swfobject[X]=null}swfobject=null})}}();return{registerObject:function(ab,X,aa,Z){if(M.w3&&ab&&X){var Y={};Y.id=ab;Y.swfVersion=X;Y.expressInstall=aa;Y.callbackFn=Z;o[o.length]=Y;w(ab,false)}else{if(Z){Z({success:false,id:ab})}}},getObjectById:function(X){if(M.w3){return z(X)}},embedSWF:function(ab,ah,ae,ag,Y,aa,Z,ad,af,ac){var X={success:false,id:ah};if(M.w3&&!(M.wk&&M.wk<312)&&ab&&ah&&ae&&ag&&Y){w(ah,false);K(function(){ae+="";ag+="";var aj={};if(af&&typeof af===r){for(var al in af){aj[al]=af[al]}}aj.data=ab;aj.width=ae;aj.height=ag;var am={};if(ad&&typeof ad===r){for(var ak in ad){am[ak]=ad[ak]}}if(Z&&typeof Z===r){for(var ai in Z){if(typeof am.flashvars!=D){am.flashvars+="&"+ai+"="+Z[ai]}else{am.flashvars=ai+"="+Z[ai]}}}if(F(Y)){var an=u(aj,am,ah);if(aj.id==ah){w(ah,true)}X.success=true;X.ref=an}else{if(aa&&A()){aj.data=aa;P(aj,am,ah,ac);return}else{w(ah,true)}}if(ac){ac(X)}})}else{if(ac){ac(X)}}},switchOffAutoHideShow:function(){m=false},ua:M,getFlashPlayerVersion:function(){return{major:M.pv[0],minor:M.pv[1],release:M.pv[2]}},hasFlashPlayerVersion:F,createSWF:function(Z,Y,X){if(M.w3){return u(Z,Y,X)}else{return undefined}},showExpressInstall:function(Z,aa,X,Y){if(M.w3&&A()){P(Z,aa,X,Y)}},removeSWF:function(X){if(M.w3){y(X)}},createCSS:function(aa,Z,Y,X){if(M.w3){v(aa,Z,Y,X)}},addDomLoadEvent:K,addLoadEvent:s,getQueryParamValue:function(aa){var Z=j.location.search||j.location.hash;if(Z){if(/\?/.test(Z)){Z=Z.split("?")[1]}if(aa==null){return L(Z)}var Y=Z.split("&");for(var X=0;X<Y.length;X++){if(Y[X].substring(0,Y[X].indexOf("="))==aa){return L(Y[X].substring((Y[X].indexOf("=")+1)))}}}return""},expressInstallCallback:function(){if(a){var X=c(R);if(X&&l){X.parentNode.replaceChild(l,X);if(Q){w(Q,true);if(M.ie&&M.win){l.style.display="block"}}if(E){E(B)}}a=false}}}}();

/*
 * gimite/web-socket-js
 * open source solution for websocket capabilities via flash
 */
(function(){if(window.WEB_SOCKET_FORCE_FLASH){}else if(window.WebSocket){return}else if(window.MozWebSocket){window.WebSocket=MozWebSocket;return}var a;if(window.WEB_SOCKET_LOGGER){a=WEB_SOCKET_LOGGER}else if(window.console&&window.console.log&&window.console.error){a=window.console}else{a={log:function(){},error:function(){}}}if(swfobject.getFlashPlayerVersion().major<10){a.error("Flash Player >= 10.0.0 is required.");return}if(location.protocol=="file:"){a.error("WARNING: web-socket-js doesn't work in file:///... URL "+"unless you set Flash Security Settings properly. "+"Open the page via Web server i.e. http://...")}window.WebSocket=function(a,b,c,d,e){var f=this;f.__id=WebSocket.__nextId++;WebSocket.__instances[f.__id]=f;f.readyState=WebSocket.CONNECTING;f.bufferedAmount=0;f.__events={};if(!b){b=[]}else if(typeof b=="string"){b=[b]}f.__createTask=setTimeout(function(){WebSocket.__addTask(function(){f.__createTask=null;WebSocket.__flash.create(f.__id,a,b,c||null,d||0,e||null)})},0)};WebSocket.prototype.send=function(a){if(this.readyState==WebSocket.CONNECTING){throw"INVALID_STATE_ERR: Web Socket connection has not been established"}var b=WebSocket.__flash.send(this.__id,encodeURIComponent(a));if(b<0){return true}else{this.bufferedAmount+=b;return false}};WebSocket.prototype.close=function(){if(this.__createTask){clearTimeout(this.__createTask);this.__createTask=null;this.readyState=WebSocket.CLOSED;return}if(this.readyState==WebSocket.CLOSED||this.readyState==WebSocket.CLOSING){return}this.readyState=WebSocket.CLOSING;WebSocket.__flash.close(this.__id)};WebSocket.prototype.addEventListener=function(a,b,c){if(!(a in this.__events)){this.__events[a]=[]}this.__events[a].push(b)};WebSocket.prototype.removeEventListener=function(a,b,c){if(!(a in this.__events))return;var d=this.__events[a];for(var e=d.length-1;e>=0;--e){if(d[e]===b){d.splice(e,1);break}}};WebSocket.prototype.dispatchEvent=function(a){var b=this.__events[a.type]||[];for(var c=0;c<b.length;++c){b[c](a)}var d=this["on"+a.type];if(d)d.apply(this,[a])};WebSocket.prototype.__handleEvent=function(a){if("readyState"in a){this.readyState=a.readyState}if("protocol"in a){this.protocol=a.protocol}var b;if(a.type=="open"||a.type=="error"){b=this.__createSimpleEvent(a.type)}else if(a.type=="close"){b=this.__createSimpleEvent("close");b.wasClean=a.wasClean?true:false;b.code=a.code;b.reason=a.reason}else if(a.type=="message"){var c=decodeURIComponent(a.message);b=this.__createMessageEvent("message",c)}else{throw"unknown event type: "+a.type}this.dispatchEvent(b)};WebSocket.prototype.__createSimpleEvent=function(a){if(document.createEvent&&window.Event){var b=document.createEvent("Event");b.initEvent(a,false,false);return b}else{return{type:a,bubbles:false,cancelable:false}}};WebSocket.prototype.__createMessageEvent=function(a,b){if(document.createEvent&&window.MessageEvent&&!window.opera){var c=document.createEvent("MessageEvent");c.initMessageEvent("message",false,false,b,null,null,window,null);return c}else{return{type:a,data:b,bubbles:false,cancelable:false}}};WebSocket.CONNECTING=0;WebSocket.OPEN=1;WebSocket.CLOSING=2;WebSocket.CLOSED=3;WebSocket.__initialized=false;WebSocket.__flash=null;WebSocket.__instances={};WebSocket.__tasks=[];WebSocket.__nextId=0;WebSocket.loadFlashPolicyFile=function(a){WebSocket.__addTask(function(){WebSocket.__flash.loadManualPolicyFile(a)})};WebSocket.__initialize=function(){if(WebSocket.__initialized)return;WebSocket.__initialized=true;if(WebSocket.__swfLocation){window.WEB_SOCKET_SWF_LOCATION=WebSocket.__swfLocation}if(!window.WEB_SOCKET_SWF_LOCATION){a.error("[WebSocket] set WEB_SOCKET_SWF_LOCATION to location of WebSocketMain.swf");return}if(!window.WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR&&!WEB_SOCKET_SWF_LOCATION.match(/(^|\/)WebSocketMainInsecure\.swf(\?.*)?$/)&&WEB_SOCKET_SWF_LOCATION.match(/^\w+:\/\/([^\/]+)/)){var b=RegExp.$1;if(location.host!=b){a.error("[WebSocket] You must host HTML and WebSocketMain.swf in the same host "+"('"+location.host+"' != '"+b+"'). "+"See also 'How to host HTML file and SWF file in different domains' section "+"in README.md. If you use WebSocketMainInsecure.swf, you can suppress this message "+"by WEB_SOCKET_SUPPRESS_CROSS_DOMAIN_SWF_ERROR = true;")}}var c=document.createElement("div");c.id="webSocketContainer";c.style.position="absolute";if(WebSocket.__isFlashLite()){c.style.left="0px";c.style.top="0px"}else{c.style.left="-100px";c.style.top="-100px"}var d=document.createElement("div");d.id="webSocketFlash";c.appendChild(d);document.body.appendChild(c);swfobject.embedSWF(WEB_SOCKET_SWF_LOCATION,"webSocketFlash","1","1","10.0.0",null,null,{hasPriority:true,swliveconnect:true,allowScriptAccess:"always"},null,function(b){if(!b.success){a.error("[WebSocket] swfobject.embedSWF failed")}})};WebSocket.__onFlashInitialized=function(){setTimeout(function(){WebSocket.__flash=document.getElementById("webSocketFlash");WebSocket.__flash.setCallerUrl(location.href);WebSocket.__flash.setDebug(!!window.WEB_SOCKET_DEBUG);for(var a=0;a<WebSocket.__tasks.length;++a){WebSocket.__tasks[a]()}WebSocket.__tasks=[]},0)};WebSocket.__onFlashEvent=function(){setTimeout(function(){try{var b=WebSocket.__flash.receiveEvents();for(var c=0;c<b.length;++c){WebSocket.__instances[b[c].webSocketId].__handleEvent(b[c])}}catch(d){a.error(d)}},0);return true};WebSocket.__log=function(b){a.log(decodeURIComponent(b))};WebSocket.__error=function(b){a.error(decodeURIComponent(b))};WebSocket.__addTask=function(a){if(WebSocket.__flash){a()}else{WebSocket.__tasks.push(a)}};WebSocket.__isFlashLite=function(){if(!window.navigator||!window.navigator.mimeTypes){return false}var a=window.navigator.mimeTypes["application/x-shockwave-flash"];if(!a||!a.enabledPlugin||!a.enabledPlugin.filename){return false}return a.enabledPlugin.filename.match(/flashlite/i)?true:false};if(!window.WEB_SOCKET_DISABLE_AUTO_INITIALIZATION){swfobject.addDomLoadEvent(function(){WebSocket.__initialize()})}})();

/*
 * Generate a random ID
 */
function generateId(a){var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz".split("");if(!a){a=Math.floor(Math.random()*b.length)}var c="";for(var d=0;d<a;d++){c+=b[Math.floor(Math.random()*b.length)]}return c}

/*
 * Check how erroneous the connection is
 */
function checkEngineErrors() {
    var num = Object.keys(window.relayQueue).length;
    if(num > 1) {
        $( "#unsentrelaysTmp" ).tmpl().appendTo( "body" );
        $('#modal-unsentrelays').modal({backdrop: "static"});
        $('#modal-unsentrelays').on('hidden', function () { $('.modal').remove(); });
        $('#relayErrorCount').text(Object.keys(window.relayQueue).length);
    }
}

/*
 * used for relay transaction timeouts
 */
window.relayTimeout = {};
window.relayQueue = {};

/*
 * jQuery Web Sockets Plugin v0.0.1
 * http://code.google.com/p/jquery-websocket/
 *
 * This document is licensed as free software under the terms of the
 * MIT License: http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright (c) 2010 by shootaroo (Shotaro Tsubouchi).
 */
(function($){
$.extend({
    relaySettings: {
        supportsWebSockets: function() { 
            if(window.MozWebSocket) { return true} 
            else if(window.WebSocket) { return true;} 
            else { return false} 
        },
        open: function(){
            $.relaySend('BoardOpen',{view:"board"});
            var event = $.Event('engineOpen');
            $('body').trigger(event);
        },
        close: function(){
            var event = $.Event('engineClosed');
            $('body').trigger(event);
            this.jumpStart();
        },
        error: function(){
            var event = $.Event('engineError');
            $('body').trigger(event);
        },
        message: function(e){
            var json = $.evalJSON(e.originalEvent.data);
            $.relaySettings.callbackEngine(json.relay, json.data);
        },
        callbackEngine: function(relay_name, data){
            var chain = $.relaySettings.events[relay_name];
            if(typeof chain == 'undefined') return; // no callbacks for this event
            chain( data );
        },
        relayTimeout: function(event){
            var self = this;
            var relayId = event.relayId, payload = event.payload;
            window.relayQueue[relayId] = payload;
            window.relayTimeout[relayId] = setTimeout(function(){
                self._send(payload);
                $(self).trigger($.Event('relayRetry', { relayId: relayId }));
            }, 1700);
        },
        relayRetry: function(event){
            var relayId = event.relayId;
            $('body').trigger($.Event('engineRetry'));
            window.relayTimeout[relayId] = setTimeout(function(){
                var event = $.Event('engineError');
                $('body').trigger(event);
                checkEngineErrors();
            }, 1700);
        },
        preBind: function(relay_name, callback){
            $.relaySettings.events[relay_name] = $.relaySettings.events[relay_name] || [];
            $.relaySettings.events[relay_name].push(callback);
            return this;// chainable
        },
        preSend: function(relay_name, relay_data) {
            var randomId = generateId(7);
            var payload = $.toJSON({relay:relay_name, relayId: randomId, data: relay_data});
            var event = $.Event("relaySent", { relayId: randomId, payload: payload });
            $(this).trigger(event);
            window.globalrelaysocket._send( payload );
        },
        preResendAll: function(){
            var self = this;
            for (var relay in window.relayQueue) {
                self._send( window.relayQueue[relay] );
                delete window.relayQueue[relay];
                delete window.relayTimeout[relay];
            }
            setTimeout(function(){ window.location.reload(true) }, 1000);
        },
        jumpCountdown: function() {
            var ws = this;
            setTimeout(function(){
                $(ws).trigger('jumpStart');
            }, 3000);
        },
        jumpFactory: function(event){
            $(window.globalrelaysocket).unbind();
            window.globalrelaysocket = null;
            window.globalrelaysocket = $.relaySettings.factory( getEngineUrl() );
        },
        factory: function(url) {
            var ws = $.relaySettings.supportsWebSockets() ? new WebSocket( url ) : {
                send: function(m){ return false },
                close: function(){}
            };
            $(ws)
                .bind('open', $.relaySettings.open)
                .bind('close', $.relaySettings.close)
                .bind('message', $.relaySettings.message)
                .bind('error', $.relaySettings.error)
                .bind('relaySent', $.relaySettings.relayTimeout)
                .bind('relayRetry', $.relaySettings.relayRetry)
                .bind('jumpStart', $.relaySettings.jumpFactory);
            ws._send = ws.send
            ws.send = $.relaySettings.preSend;
            ws.bind = $.relaySettings.preBind;
            ws.resendAll = $.relaySettings.preResendAll;
            ws.jumpStart = $.relaySettings.jumpCountdown;
            return ws;
        },
        options: {},
        events: {}
    },
    relaySend: function(relay_name, data) {
        try {
            var ws = window.globalrelaysocket;
            if(ws.readyState==1) {
                window.globalrelaysocket.send(relay_name, data);
            } else {
                $.relaySettings.error();
            }
        } catch(e) {
            console.log('Socket not instantiated');
        }
    },
    relayDestroy: function() {
        window.globalrelaysocket.close();
    },
    relaySocket: function(url) {
        window.globalrelaysocket = $.relaySettings.factory(url);
        var ws = window.globalrelaysocket;
        $(window).unload(function(){ $.relayDestroy(); });
        return false;
    }
});
})(jQuery);


