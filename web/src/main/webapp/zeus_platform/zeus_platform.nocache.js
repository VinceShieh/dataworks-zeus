function zeus_platform(){var P='',xb='" for "gwt:onLoadErrorFn"',vb='" for "gwt:onPropertyErrorFn"',ib='"><\/script>',Z='#',Fc='.cache.html',_='/',lb='//',kc='436ACC9B8213552FD82B3FC44C58D5E3',nc='75764489BEDE9998733F5EC573AED0B9',oc='8183B0D111BE08C609893A6CD8C83FA1',Ec=':',lc=':1',qc=':10',rc=':11',sc=':12',tc=':13',uc=':14',mc=':2',vc=':3',wc=':4',xc=':5',yc=':6',zc=':7',Ac=':8',Bc=':9',pb='::',Hc='<script defer="defer">zeus_platform.onInjectionDone(\'zeus_platform\')<\/script>',hb='<script id="',sb='=',$='?',pc='B9C4C7B50C2593DC1DC3FE33C7A28804',ub='Bad handler "',Cc='C2E4F33B49A3AA5356018B924539A472',Gc='DOMContentLoaded',Dc='F9C497910371167EE7BC679177B99D53',jb='SCRIPT',gb='__gwt_marker_zeus_platform',Xb='adobeair',Yb='air',kb='base',cb='baseUrl',T='begin',S='bootstrap',Db='chrome',bb='clear.cache.gif',rb='content',Y='end',Tb='gecko',Vb='gecko1_8',Wb='gecko1_9',U='gwt.codesvr=',V='gwt.hosted=',W='gwt.hybrid',wb='gwt:onLoadErrorFn',tb='gwt:onPropertyErrorFn',qb='gwt:property',Cb='gxt.user.agent',ic='hosted.html?zeus_platform',Hb='ie6',Jb='ie7',Lb='ie8',Mb='ie9',yb='iframe',ab='img',zb="javascript:''",ec='linux',hc='loadExternalRefs',dc='mac',cc='mac os x',bc='macintosh',mb='meta',Bb='moduleRequested',X='moduleStartup',Fb='msie',Gb='msie 6',Ib='msie 7',Kb='msie 8',nb='name',Eb='opera',Ab='position:absolute;width:0;height:0;border:none',Ub='rv:1.8',Nb='safari',Pb='safari3',Rb='safari4',Sb='safari5',db='script',jc='selectingPermutation',R='startup',fb='undefined',_b='unknown',Zb='user.agent',ac='user.agent.os',Ob='version/3',Qb='version/4',$b='webkit',gc='win32',fc='windows',Q='zeus_platform',eb='zeus_platform.nocache.js',ob='zeus_platform::';var m=window,n=document,o=m.__gwtStatsEvent?function(a){return m.__gwtStatsEvent(a)}:null,p=m.__gwtStatsSessionId?m.__gwtStatsSessionId:null,q,r,s,t=P,u={},v=[],w=[],x=[],y=0,z,A;o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:T});if(!m.__gwt_stylesLoaded){m.__gwt_stylesLoaded={}}if(!m.__gwt_scriptsLoaded){m.__gwt_scriptsLoaded={}}function B(){var b=false;try{var c=m.location.search;return (c.indexOf(U)!=-1||(c.indexOf(V)!=-1||m.external&&m.external.gwtOnLoad))&&c.indexOf(W)==-1}catch(a){}B=function(){return b};return b}
function C(){if(q&&r){var b=n.getElementById(Q);var c=b.contentWindow;if(B()){c.__gwt_getProperty=function(a){return H(a)}}zeus_platform=null;c.gwtOnLoad(z,Q,t,y);o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Y})}}
function D(){function e(a){var b=a.lastIndexOf(Z);if(b==-1){b=a.length}var c=a.indexOf($);if(c==-1){c=a.length}var d=a.lastIndexOf(_,Math.min(c,b));return d>=0?a.substring(0,d+1):P}
function f(a){if(a.match(/^\w+:\/\//)){}else{var b=n.createElement(ab);b.src=a+bb;a=e(b.src)}return a}
function g(){var a=F(cb);if(a!=null){return a}return P}
function h(){var a=n.getElementsByTagName(db);for(var b=0;b<a.length;++b){if(a[b].src.indexOf(eb)!=-1){return e(a[b].src)}}return P}
function i(){var a;if(typeof isBodyLoaded==fb||!isBodyLoaded()){var b=gb;var c;n.write(hb+b+ib);c=n.getElementById(b);a=c&&c.previousSibling;while(a&&a.tagName!=jb){a=a.previousSibling}if(c){c.parentNode.removeChild(c)}if(a&&a.src){return e(a.src)}}return P}
function j(){var a=n.getElementsByTagName(kb);if(a.length>0){return a[a.length-1].href}return P}
function k(){var a=n.location;return a.href==a.protocol+lb+a.host+a.pathname+a.search+a.hash}
var l=g();if(l==P){l=h()}if(l==P){l=i()}if(l==P){l=j()}if(l==P&&k()){l=e(n.location.href)}l=f(l);t=l;return l}
function E(){var b=document.getElementsByTagName(mb);for(var c=0,d=b.length;c<d;++c){var e=b[c],f=e.getAttribute(nb),g;if(f){f=f.replace(ob,P);if(f.indexOf(pb)>=0){continue}if(f==qb){g=e.getAttribute(rb);if(g){var h,i=g.indexOf(sb);if(i>=0){f=g.substring(0,i);h=g.substring(i+1)}else{f=g;h=P}u[f]=h}}else if(f==tb){g=e.getAttribute(rb);if(g){try{A=eval(g)}catch(a){alert(ub+g+vb)}}}else if(f==wb){g=e.getAttribute(rb);if(g){try{z=eval(g)}catch(a){alert(ub+g+xb)}}}}}}
function F(a){var b=u[a];return b==null?null:b}
function G(a,b){var c=x;for(var d=0,e=a.length-1;d<e;++d){c=c[a[d]]||(c[a[d]]=[])}c[a[e]]=b}
function H(a){var b=w[a](),c=v[a];if(b in c){return b}var d=[];for(var e in c){d[c[e]]=e}if(A){A(a,d,b)}throw null}
var I;function J(){if(!I){I=true;var a=n.createElement(yb);a.src=zb;a.id=Q;a.style.cssText=Ab;a.tabIndex=-1;n.body.appendChild(a);o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:X,millis:(new Date).getTime(),type:Bb});a.contentWindow.location.replace(t+L)}}
w[Cb]=function(){var a=navigator.userAgent.toLowerCase();if(a.indexOf(Db)!=-1)return Db;if(a.indexOf(Eb)!=-1)return Eb;if(a.indexOf(Fb)!=-1){if(a.indexOf(Gb)!=-1)return Hb;if(a.indexOf(Ib)!=-1)return Jb;if(a.indexOf(Kb)!=-1)return Lb;return Mb}if(a.indexOf(Nb)!=-1){if(a.indexOf(Ob)!=-1)return Pb;if(a.indexOf(Qb)!=-1)return Rb;return Sb}if(a.indexOf(Tb)!=-1){if(a.indexOf(Ub)!=-1)return Vb;return Wb}if(a.indexOf(Xb)!=-1)return Yb;return null};v[Cb]={air:0,chrome:1,gecko1_8:2,gecko1_9:3,ie6:4,ie7:5,ie8:6,ie9:7,opera:8,safari3:9,safari4:10,safari5:11};w[Zb]=function(){var b=navigator.userAgent.toLowerCase();var c=function(a){return parseInt(a[1])*1000+parseInt(a[2])};if(function(){return b.indexOf(Eb)!=-1}())return Eb;if(function(){return b.indexOf($b)!=-1}())return Nb;if(function(){return b.indexOf(Fb)!=-1&&n.documentMode>=9}())return Mb;if(function(){return b.indexOf(Fb)!=-1&&n.documentMode>=8}())return Lb;if(function(){var a=/msie ([0-9]+)\.([0-9]+)/.exec(b);if(a&&a.length==3)return c(a)>=6000}())return Hb;if(function(){return b.indexOf(Tb)!=-1}())return Vb;return _b};v[Zb]={gecko1_8:0,ie6:1,ie8:2,ie9:3,opera:4,safari:5};w[ac]=function(){var a=m.navigator.userAgent.toLowerCase();if(a.indexOf(bc)!=-1||a.indexOf(cc)!=-1){return dc}if(a.indexOf(ec)!=-1){return ec}if(a.indexOf(fc)!=-1||a.indexOf(gc)!=-1){return fc}return _b};v[ac]={linux:0,mac:1,windows:2};zeus_platform.onScriptLoad=function(){if(I){r=true;C()}};zeus_platform.onInjectionDone=function(){q=true;o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:hc,millis:(new Date).getTime(),type:Y});C()};E();D();var K;var L;if(B()){if(m.external&&(m.external.initModule&&m.external.initModule(Q))){m.location.reload();return}L=ic;K=P}o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:jc});if(!B()){try{G([Eb,Eb,ec],kc);G([Eb,Eb,dc],kc+lc);G([Eb,Eb,fc],kc+mc);G([Mb,Mb,ec],nc);G([Mb,Mb,dc],nc+lc);G([Mb,Mb,fc],nc+mc);G([Lb,Lb,ec],oc);G([Lb,Lb,dc],oc+lc);G([Lb,Lb,fc],oc+mc);G([Yb,Nb,ec],pc);G([Yb,Nb,dc],pc+lc);G([Rb,Nb,dc],pc+qc);G([Rb,Nb,fc],pc+rc);G([Sb,Nb,ec],pc+sc);G([Sb,Nb,dc],pc+tc);G([Sb,Nb,fc],pc+uc);G([Yb,Nb,fc],pc+mc);G([Db,Nb,ec],pc+vc);G([Db,Nb,dc],pc+wc);G([Db,Nb,fc],pc+xc);G([Pb,Nb,ec],pc+yc);G([Pb,Nb,dc],pc+zc);G([Pb,Nb,fc],pc+Ac);G([Rb,Nb,ec],pc+Bc);G([Vb,Vb,ec],Cc);G([Vb,Vb,dc],Cc+lc);G([Vb,Vb,fc],Cc+mc);G([Wb,Vb,ec],Cc+vc);G([Wb,Vb,dc],Cc+wc);G([Wb,Vb,fc],Cc+xc);G([Hb,Hb,ec],Dc);G([Hb,Hb,dc],Dc+lc);G([Hb,Hb,fc],Dc+mc);G([Jb,Hb,ec],Dc+vc);G([Jb,Hb,dc],Dc+wc);G([Jb,Hb,fc],Dc+xc);K=x[H(Cb)][H(Zb)][H(ac)];var M=K.indexOf(Ec);if(M!=-1){y=Number(K.substring(M+1));K=K.substring(0,M)}L=K+Fc}catch(a){return}}var N;function O(){if(!s){s=true;C();if(n.removeEventListener){n.removeEventListener(Gc,O,false)}if(N){clearInterval(N)}}}
if(n.addEventListener){n.addEventListener(Gc,function(){J();O()},false)}var N=setInterval(function(){if(/loaded|complete/.test(n.readyState)){J();O()}},50);o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:S,millis:(new Date).getTime(),type:Y});o&&o({moduleName:Q,sessionId:p,subSystem:R,evtGroup:hc,millis:(new Date).getTime(),type:T});n.write(Hc)}
zeus_platform();