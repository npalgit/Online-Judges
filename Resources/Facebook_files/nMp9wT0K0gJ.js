/*!CK:3628557883!*//*1453173128,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["eVWAQ"]); }

__d("MercurySupportedShareType",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={FB_PHOTO:2,FB_ALBUM:3,FB_VIDEO:11,FB_EVENT:7,FB_SONG:28,FB_MUSIC_ALBUM:30,FB_PLAYLIST:31,FB_MUSICIAN:35,FB_RADIO_STATION:33,EXTERNAL:100,FB_TEMPLATE:300,FB_SOCIAL_REPORT_PHOTO:48,FB_COUPON:32,FB_SHARE:99,FB_HC_QUESTION:55,FB_HC_ANSWER:56,FB_SOCIAL_RESOLUTION:60,FB_STATUS:22,FB_BROWSE_QUERY:47,FB_SYNC_REQUEST:61,FB_OPEN_GRAPH:44,FB_ORION:64,FB_GENERIC_SHAREABLE:69};},null);
__d("P2PPaymentRequestStatus",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={INITED:1,DECLINED:2,TRANSFER_INITED:3,TRANSFER_COMPLETED:4,TRANSFER_FAILED:5,CANCELED:6,EXPIRED:7};},null);
__d('updatePhotoProgressBar',[],function a(b,c,d,e,f,g){'use strict';if(c.__markCompiled)c.__markCompiled();function h(i,event){if(event.loaded!=event.total){i.setPosition(50*event.loaded/event.total);}else{i.setPosition(50);i.setTarget(100,2000);}}f.exports=h;},null);
__d('BanzaiScribe',['Banzai'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(k){return {log:function(l,m,n){var o=[m];if(n!=null)o.push(n);h.post('scribe:'+l,o,k);}};}var j=i({});j.create=i;f.exports=j;},null);
__d('StaticContainer.react',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h.Component);j=i&&i.prototype;k.prototype.shouldComponentUpdate=function(l){'use strict';return !!l.shouldUpdate;};k.prototype.render=function(){'use strict';var l=this.props.children;if(l===null||l===false)return null;return h.Children.only(l);};function k(){'use strict';i.apply(this,arguments);}f.exports=k;},null);
__d('MercuryAttachmentSnippetType',['keyMirror'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h({PHOTO:null,GIF:null,VIDEO:null,AUDIO_CLIP:null,STICKER:null,ORION:null,SHARE:null,ERROR:null,MIXED:null});f.exports=i;},null);
__d('MessengerButton.react',['ReactComponentWithPureRenderMixin','Event','Keys','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=i.getKeyCode,o=k.PropTypes,p=k.createClass({displayName:'MessengerButton',mixins:[h],propTypes:{label:o.string.isRequired,type:o.oneOf(['primary','secondary']).isRequired,use:o.oneOf(['default','danger']).isRequired},getDefaultProps:function(){return {use:'default'};},handleLinkClick:function(q){if(this.props.disabled){q.preventDefault();}else if(this.props.onClick)this.props.onClick(q);},render:function(){var q=this.props,r=q.className,s=q.label,t=babelHelpers.objectWithoutProperties(q,['className','label']);return (k.createElement('button',babelHelpers._extends({className:m("_3quh"+(' '+"_30yy")+(this.props.type==='primary'?' '+"_2t_":'')+(this.props.type==='secondary'?' '+"_2u0":'')+(this.props.use==='danger'?' '+"_3ay_":'')+(this.props.disabled?' '+"_4zab":''),r)},t,{onClick:this.handleLinkClick}),s));}});f.exports=p;},null);
__d('MessengerDialog.react',['LayerFadeOnHide','LayerHideOnEscape','React','XUIDialog.react','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m){'use strict';if(c.__markCompiled)c.__markCompiled();var n=j.PropTypes,o=j.createClass({displayName:'MessengerDialog',propTypes:{onToggle:n.func.isRequired,repositionOnUpdate:n.bool,shown:n.bool,type:n.oneOf(['alert','default']),width:n.number},getDefaultProps:function(){return {repositionOnUpdate:false,shown:true,type:'alert',width:400};},componentDidUpdate:function(){if(this.props.repositionOnUpdate)setTimeout((function(){if(this.isMounted()&&this.refs.dialog&&this.refs.dialog.layer)this.refs.dialog.layer.updatePosition();}).bind(this),0);},render:function(){return (j.createElement(k,babelHelpers._extends({behaviors:{LayerFadeOnHide:h,LayerHideOnEscape:i}},this.props,{className:m("_4ebx",this.props.className),ref:'dialog'}),j.createElement('div',{className:"_4eby"+(this.props.type==='alert'?' '+"_2c9g":'')+(this.props.type==='default'?' '+"_2c9i":'')},this.props.children)));}});f.exports=o;},null);
__d('MessengerDialogBody.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogBody',render:function(){return (h.createElement('div',{className:j("_4eb-",this.props.className)},this.props.children));}});f.exports=k;},null);
__d('MessengerDialogButton.react',['MessengerButton.react','ReactComponentWithPureRenderMixin','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l){'use strict';if(c.__markCompiled)c.__markCompiled();var m=j.PropTypes,n=j.createClass({displayName:'MessengerDialogButton',mixins:[i],propTypes:{action:m.oneOf(['button','cancel','confirm'])},render:function(){var o=this.props,p=o.action,q=o.className,r=babelHelpers.objectWithoutProperties(o,['action','className']);return (j.createElement(h,babelHelpers._extends({className:l(q,"_5ixy"+(p==='button'?' '+"layerButton":'')+(p==='cancel'?' '+"layerCancel":'')+(p==='confirm'?' '+"layerConfirm":''))},r)));}});f.exports=n;},null);
__d('MessengerDialogFooter.react',['LeftRight.react','React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){'use strict';if(c.__markCompiled)c.__markCompiled();var l=i.PropTypes,m=i.createClass({displayName:'MessengerDialogFooter',propTypes:{leftContent:l.object},render:function(){return (i.createElement('div',{className:k("_4eb_",this.props.className)},i.createElement(h,null,i.createElement('div',{className:"_2_d1"},this.props.leftContent),i.createElement('div',null,this.props.children))));}});f.exports=m;},null);
__d('MessengerDialogHeader.react',['React','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();var k=h.createClass({displayName:'MessengerDialogHeader',render:function(){return (h.createElement('h2',{className:j("_4ebz",this.props.className),id:this.props.id},this.props.children));}});f.exports=k;},null);
__d('MNCommercePromotionBlockDataManager',['AsyncRequest','MNCommercePromotionStateActions','XMNCommercePromotionBlockController'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();k.prototype.block=function(l,m){var n=j.getURIBuilder().setString('page_id',l).setString('type',m).getURI();new h().setURI(n).setHandler(this.$MNCommercePromotionBlockDataManager1).setErrorHandler(this.$MNCommercePromotionBlockDataManager2).send();};k.prototype.$MNCommercePromotionBlockDataManager1=function(l){var m=l.getRequest().uri.getQueryData(),n=m.page_id;i.stateReload(n);};k.prototype.$MNCommercePromotionBlockDataManager2=function(l){var m=l.getRequest().uri.getQueryData(),n=m.page_id;i.stateLoadError(n);};function k(){}f.exports=new k();},null);
__d('SamplingPolicyBase',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){'use strict';throw 'Tried to instantiate SamplingPolicyBase';}h.prototype.getName=function(){'use strict';return this.name;};h.prototype.isSampled=function(){'use strict';if(typeof this.sampled=='undefined')this.sampled=this.decideIfSampled();return this.sampled;};f.exports=h;},null);
__d('FbtraceForcedByServerPolicy',['FbtraceForcedByServer','SamplingPolicyBase'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j;function k(){this.name='FbtraceForcedByServerPolicy';}k.get=function(){if(typeof j=='undefined')j=new k();return j;};function l(){return h.forced;}Object.assign(k.prototype,i.prototype,{decideIfSampled:l});f.exports=k;},null);
__d("guardFunction",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k){return function(){if(i.apply(k||this,arguments))j.apply(k||this,arguments);};}f.exports=h;},null);
__d('Fbtrace',['Arbiter','BanzaiScribe','ErrorUtils','FbtraceForcedByServer','FbtraceForcedByServerPolicy','Random','SiteData','guardFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q;'use strict';var r='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',s='AAAAAAAAAAA';p=babelHelpers.inherits(t,Error);q=p&&p.prototype;function t(ia){q.constructor.call(this,ia);}function u(ia){j.reportError(new t(ia));}function v(){var ia=function(){var la=0,ma=0,na='';for(var oa=10;oa>=0;oa--){if(la<6){ma=m.uint32();la=32;}if(oa===0)ma=ma&7;na=r.charAt(ma&63)+na;ma>>=6;la-=6;}return na;},ja,ka;for(ja=3;ja>0;ja--){ka=ia();if(ka!=s)return ka;}u('failed to generate valid Fbtrace id');return s;}function w(){Object.assign(this,w);}Object.assign(w,{isOn:function(){return false;},replySend:function(ia,ja){},requestSend:function(ia,ja,ka){ca(ia,ja);return {metadata:function(){return undefined;},replyReceive:function(la){}};}});var x=new w();function y(ia,ja,ka){if(!ia)throw {name:'ArgumentError',message:'no valid service name specified'};if(!ja)throw {name:'ArgumentError',message:'no valid version specified'};var la=i,ma=0,na=v(),oa=v(),pa=ba(na),qa={service:ia,version:ja},ra=function(wa){if(typeof wa=='undefined')return 'undefined';if(typeof wa!='string')wa=ra(JSON.stringify(wa));return wa;},sa=function(wa){var xa='';for(var ya in wa){if(xa.length>0)xa+='\x02';xa+=ra(ya)+'\x03'+ra(wa[ya]);}return xa;},ta=function(wa,xa,event,ya,za){ma++;return [za,ma,na,wa,xa,ra(event),sa(ya)].join('\x01');},ua=function(wa,xa,event,ya,za){if(!za&&typeof za=='undefined')za=Date.now()*1000;var ab=ta(wa,xa,event,ya,za);la.log('fbtrace',ab,pa);},va=function(){return oa;};ua(s,oa,'#rqrecv',Object.assign(ka||{},qa));Object.assign(this,y,{replySend:function(wa,xa){xa=babelHelpers._extends({},xa,qa,{success:wa?'true':'false'});ua(s,oa,'#rpsend',xa);},requestSend:function(wa,xa,ya){ca(wa,xa);var za=va(),ab=v();ya=babelHelpers._extends({},ya,qa,{op:wa,'remote:service':xa});ua(za,ab,'#rqsend',ya);return {metadata:function(){return na+ab;},replyReceive:function(bb){ua(za,ab,'#rprecv',Object.assign(bb||{},qa));},parentNode:this};}});}Object.assign(y,{isOn:function(){return true;}});function z(){return x;}function aa(ia,ja,ka){ka=ka||{};ka.init=true;var la=l.get();if(la.isSampled()){return new y(ia,ja,ka);}else return new w();}function ba(ia){var ja=ia.charAt(ia.length-1);return r.indexOf(ja)%32;}function ca(ia,ja){if(!ia)throw {name:'ArgumentError',message:'no valid operation specified'};if(!ja)throw {name:'ArgumentError',message:'no valid remote:service specified'};}function da(ia,ja){var ka=x,la;x=ia;try{la=ja();}finally{x=ka;}return la;}var ea=function(ia,ja){var ka=z(),la=ja.request,ma=false;if(!ka.isOn()&&k.forced&&/\/upload\/(?:composer|photos)\/|\/ajax\/composerx\/attachment\/media\//.test(la.uri.toString())){ka=aa('photo_upload_kludge',String(n.revision||'dev'),{policy:'PhotoUpload'});ma=true;}if(ka.isOn()){var na=ma?{policy:'PhotoUpload'}:{};if(la.userActionId)na.user_action_id=la.userActionId;var oa=ka.requestSend(la.uri.toString(),'www',na);la.fbtraceRemoteNode=oa;la.transport.setRequestHeader('X-Fbtrace-Meta',oa.metadata());}},fa=function(ia,ja){ja.request.fbtraceRemoteNode.replyReceive({is_last:ja.response.is_last,success:true});setTimeout(function(){ja.request.fbtraceRemoteNode.parentNode.replySend(true,{});},0);},ga=function(ia,ja){ja.request.fbtraceRemoteNode.replyReceive({is_last:ja.response.is_last,success:false,error_code:ja.response.error,error_summary:ja.response.errorSummary,error_description:ja.response.errorDescription});setTimeout(function(){ja.request.fbtraceRemoteNode.parentNode.replySend(false,{});},0);},ha=function(ia,ja){return ja.request.fbtraceRemoteNode;};h.subscribe('AsyncRequest/will_send',ea);h.subscribe('AsyncRequest/response',o(ha,fa));h.subscribe('AsyncRequest/error',o(ha,ga));f.exports={defaultNode:z,requestReceive:aa,withDefaultNode:da};},null);
__d('FileFormResetOnSubmit',['DOMQuery','Event','emptyFunction'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();function k(m,n){var o=i.listen(m,'change',j.thatReturnsFalse,i.Priority.URGENT);try{n();}catch(p){throw p;}finally{o.remove();}}function l(m){'use strict';this._form=m;}l.prototype.enable=function(){'use strict';var m=this._reset.bind(this);this._subscription=this._form.subscribe('submit',function(){setTimeout(m,0);});};l.prototype.disable=function(){'use strict';this._subscription.unsubscribe();this._subscription=null;};l.prototype._reset=function(){'use strict';var m=this._form.getRoot();k(m,function(){var n=h.scry(m,'input[type="file"]');n.forEach(function(o){o.value='';});});};f.exports=l;},null);
__d('Relay',['RelayPublic','RelayGraphQLBatchNetworkLayer','createRelayRouteURI'],function a(b,c,d,e,f,g,h,i,j){'use strict';if(c.__markCompiled)c.__markCompiled();h.injectNetworkLayer(new i());h.Route.injectURICreator(j);f.exports=babelHelpers._extends({},h,{DefaultNetworkLayer:i});},null);
__d('Token',['CSS','DataStore','DOM','Locale','UnicodeBidi','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(o,p){'use strict';this.info=o;this.paramName=p;}n.prototype.getInfo=function(){'use strict';return this.info;};n.prototype.getText=function(){'use strict';return this.info.text;};n.prototype.getValue=function(){'use strict';return this.info.uid;};n.prototype.isFreeform=function(){'use strict';return !!this.info.freeform;};n.prototype.setSelected=function(o){'use strict';h.conditionClass(this.getElement(),'uiTokenSelected',o);return this;};n.prototype.getElement=function(){'use strict';if(!this.element)this.setElement(this.createElement());return this.element;};n.prototype.setElement=function(o){'use strict';i.set(o,'Token',this);this.element=o;return this;};n.prototype.isRemovable=function(){'use strict';return h.hasClass(this.element,'removable');};n.prototype.getTextDirection=function(){'use strict';var o=l.isDirectionRTL(this.getText()),p=k.isRTL();if(o&&!p)return 'rtl';if(!o&&p)return 'ltr';return null;};n.prototype.createElement=function(o,p){'use strict';var q=this.paramName,r=this.getValue(),s=this.getText(),t=j.create('span',{className:'uiTokenText'},s),u=j.create('a',{href:'#','aria-label':m._("Remove {item}",[m.param('item',s)]),className:'remove uiCloseButton uiCloseButtonSmall'});if(o)h.addClass(u,'uiCloseButtonSmallGray');var v=j.create('input',{type:'hidden',value:r,name:q+'[]',autocomplete:'off'}),w=j.create('input',{type:'hidden',value:s,name:'text_'+q+'[]',autocomplete:'off'}),x={className:'removable uiToken'},y=this.getTextDirection();if(y!==null)x.dir=y;var z=j.create('span',x,[t,v,w,u]);if(o)h.addClass(z,'uiTokenGray');if(p){var aa=j.create('i',{className:p});j.prependContent(z,aa);}return z;};f.exports=n;},null);
__d('WeakToken',['CSS','Token'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j,k;j=babelHelpers.inherits(l,i);k=j&&j.prototype;l.prototype.createElement=function(){'use strict';var m=k.createElement.call(this,true,'UFIWeakReferenceIcon');h.addClass(m,'uiTokenWeakReference');return m;};function l(){'use strict';j.apply(this,arguments);}f.exports=l;},null);
__d('Tokenizer',['Arbiter','ArbiterMixin','CSS','DataStore','DOM','DOMQuery','Event','Focus','Input','Keys','Parent','StickyPlaceholderInput','Style','TextMetrics','Token','UserAgent_DEPRECATED','WeakToken','createObjectFrom','emptyFunction','mixin'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa){if(c.__markCompiled)c.__markCompiled();var ba,ca,da=20;ba=babelHelpers.inherits(ea,aa(i));ca=ba&&ba.prototype;function ea(fa,ga,ha){'use strict';ca.constructor.call(this);this.element=fa;this.typeahead=ga;this.input=ga.getCore().getElement();if(ha)this.init(ha.tokenarea,ha.param_name,ha.initial_info,ha.options);k.set(this.element,'Tokenizer',this);}ea.prototype.init=function(fa,ga,ha,ia){'use strict';this._handleEvents=this.handleEvents.bind(this);this.init=z;this.setTokenarea(fa);this.paramName=ga;if(!this.placeholder)this.placeholder=this.input.getAttribute('data-placeholder')||this.input.getAttribute('placeholder')||'';Object.assign(this,ia);this.initEvents();this.initTypeahead();this.reset(ha);this.initBehaviors();setTimeout(this.adjustWidth.bind(this),0);h.inform('Tokenizer/init',this,h.BEHAVIOR_PERSISTENT);this.inform('init',{tokens:this.getTokens()});};ea.prototype.reset=function(fa){'use strict';this.tokens=[];this.unique={};if(fa){this.populate(fa);}else l.empty(this.tokenarea);this.updateTokenarea();};ea.prototype.populate=function(fa){'use strict';var ga=[];this.tokens=this.getTokenElements().map(function(ha,ia){var ja=fa[ia];ga.push(this._tokenKey(ja));return this.createToken(ja,ha);},this);this.unique=y(ga,this.tokens);};ea.prototype.setTokenarea=function(fa){'use strict';var ga=!this.tokenarea;if(fa!==this.tokenarea){if(this.tokenarea){l.remove(this.tokenarea);for(var ha in this._tokenareaListeners)this._tokenareaListeners[ha].remove();}this._tokenareaListeners=n.listen(fa,{click:this._handleEvents,keydown:this._handleEvents});this.tokenarea=fa;}if(!ga)this.reset();};ea.prototype.getElement=function(){'use strict';return this.element;};ea.prototype.getTypeahead=function(){'use strict';return this.typeahead;};ea.prototype.getInput=function(){'use strict';return this.input;};ea.prototype.initBehaviors=function(){'use strict';this.behaviors=this.behaviors||[];if(this.behaviors instanceof Array){this.behaviors.forEach((function(ha){ha.behavior(this,ha.config);}).bind(this));}else for(var fa in this.behaviors||{}){var ga=window.TokenizerBehaviors&&window.TokenizerBehaviors[fa];ga.call(null,this,this.behaviors[fa]);}};ea.prototype.initTypeahead=function(){'use strict';var fa=this.typeahead.getCore();fa.resetOnSelect=true;fa.setValueOnSelect=false;fa.preventFocusChangeOnTab=true;if(this.inline){var ga=this.typeahead.getView();j.addClass(ga.getElement(),'uiInlineTokenizerView');}this.typeahead.subscribe('select',(function(ha,ia){return this.handleSelect(ia);}).bind(this));this.typeahead.subscribe('blur',this.handleBlur.bind(this));};ea.prototype.handleBlur=function(event){'use strict';this.inform('blur',{event:event});this.updatePlaceholder();};ea.prototype.handleSelect=function(fa){'use strict';var ga=fa.selected;if('uid' in ga){this.updateInput();this.addToken(this.createToken(ga));}};ea.prototype.initEvents=function(){'use strict';var fa=w.firefox()<4?'keypress':'keydown';n.listen(this.input,'paste',this.paste.bind(this));n.listen(this.input,fa,this.keydown.bind(this));};ea.prototype.handleEvents=function(event){'use strict';var fa=event.getTarget(),ga=fa&&this.getTokenElementFromTarget(fa);if(!ga)return;if(event.type!='keydown'||n.getKeyCode(event)==q.RETURN)this.processEvents(event,fa,ga);};ea.prototype.processEvents=function(event,fa,ga){'use strict';if(r.byClass(fa,'remove')){var ha=ga.nextSibling;ha=ha&&m.scry(ga.nextSibling,'.remove')[0];var ia=this.getTokenFromElement(ga);ia=this.addTokenData(ia,fa);this.removeToken(ia);this.focusOnTokenRemoval(event,ha);event.kill();}};ea.prototype.focusOnTokenRemoval=function(event,fa){'use strict';o.set(event.type=='keydown'&&fa||this.input);};ea.prototype.addTokenData=function(fa,ga){'use strict';return fa;};ea.prototype.keydown=function(event){'use strict';this.inform('keydown',{event:event});var fa=n.getKeyCode(event),ga=this.input;if(this.inline&&fa==q.BACKSPACE&&p.isEmpty(ga)){var ha=this.getLastToken();if(ha&&ha.isRemovable())this.removeToken(ha);}this.updateInput();};ea.prototype.paste=function(event){'use strict';this.inform('paste',{event:event});this.updateInput(true);};ea.prototype.focusInput=function(){'use strict';o.set(this.input);};ea.prototype.updateInput=function(fa){'use strict';if(!this.inline)return;setTimeout((function(){this.adjustWidth(this.input.value);if(fa)this.input.value=this.input.value;}).bind(this),20);s.setPlaceholderText(this.input,'');this.inform('resize');};ea.prototype.setPlaceholder=function(fa){'use strict';this.placeholder=fa;if(this.stickyPlaceholder)s.setPlaceholderText(this.input,fa);this.updatePlaceholder();};ea.prototype.updatePlaceholder=function(){'use strict';if(!this.inline||this.input.value)return;var fa=!this.tokens.length,ga='';if(fa||this.stickyPlaceholder){this.adjustWidth(this.placeholder);ga=this.placeholder;}else this.adjustWidth(this.input.value);s.setPlaceholderText(this.input,ga);};ea.prototype.adjustWidth=function(fa){'use strict';if(!this.inline||!this._getIsInDOM())return;if(!fa&&this.input.value==='')fa=this.placeholder;var ga=da;if(fa!==this.placeholder||!this.getTokens().length||this.stickyPlaceholder){var ha=t.getFloat(this.getElement(),'width'),ia=this._getMetrics().measure(fa);ga=ia.width+this._getWidthOffset()+10;ga=ga>=ha?ha:ga;}t.set(this.input,'width',ga+'px');this.inform('resize');h.inform('reflow');};ea.prototype.getToken=function(fa){'use strict';return this.unique[fa]||null;};ea.prototype.getTokens=function(){'use strict';return this.tokens||[];};ea.prototype.getTokenElements=function(){'use strict';return m.scry(this.tokenarea,'span.uiToken');};ea.prototype.getTokenElementFromTarget=function(fa){'use strict';return r.byClass(fa,'uiToken');};ea.prototype.getTokenFromElement=function(fa){'use strict';return k.get(fa,'Token');};ea.prototype.getTokenValues=function(){'use strict';if(!this.tokens)return [];return this.tokens.map(function(fa){return fa.getValue();});};ea.prototype.getFirstToken=function(){'use strict';return this.tokens[0]||null;};ea.prototype.getLastToken=function(){'use strict';return this.tokens[this.tokens.length-1]||null;};ea.prototype.hasMaxTokens=function(){'use strict';return this.maxTokens&&this.maxTokens<=this.tokens.length;};ea.prototype.createToken=function(fa,ga){'use strict';var ha=this.getToken(this._tokenKey(fa));if(!ha)ha=fa.weak_reference?new x(fa,this.paramName):new v(fa,this.paramName);ga&&ha.setElement(ga);return ha;};ea.prototype.addToken=function(fa){'use strict';if(this.hasMaxTokens())return;var ga=this._tokenKey(fa.getInfo());if(ga in this.unique)return;this.unique[ga]=fa;this.tokens.push(fa);this.insertToken(fa);this.updateTokenarea();this.inform('addToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.insertToken=function(fa){'use strict';l.appendContent(this.tokenarea,fa.getElement());};ea.prototype.removeToken=function(fa){'use strict';if(!fa)return;var ga=this.tokens.indexOf(fa);if(ga<0)return;this.tokens.splice(this.tokens.indexOf(fa),1);delete this.unique[this._tokenKey(fa.getInfo())];l.remove(fa.getElement());this.updateTokenarea();this.inform('removeToken',fa);this.inform('changeTokens');h.inform('Form/change',{node:this.element});};ea.prototype.removeAllTokens=function(){'use strict';this.reset();this.inform('changeTokens');this.inform('removeAllTokens');};ea.prototype.updateTokenarea=function(){'use strict';var fa=this.typeahead.getCore(),ga=this.getTokenValues();if(this.excludeDuplicates){this._exclusions||(this._exclusions=fa.getExclusions());fa.setExclusions(ga.concat(this._exclusions));}fa.setEnabled(!this.hasMaxTokens());this.updateTokenareaVisibility();this.updatePlaceholder();this.inform('resize');h.inform('reflow');};ea.prototype.updateTokenareaVisibility=function(){'use strict';j.conditionShow(this.tokenarea,this.tokens.length!==0);};ea.prototype._tokenKey=function(fa){'use strict';return fa.uid+(fa.freeform?':':'');};ea.prototype._getWidthOffset=function(){'use strict';if(this._widthOffset===null){var fa=this.input.clientWidth,ga=t.getFloat(this.input,'width');if(fa==ga){this._widthOffset=t.getFloat(this.input,'paddingLeft')+t.getFloat(this.input,'paddingRight');}else this._widthOffset=0;}return this._widthOffset;};ea.prototype._getMetrics=function(){'use strict';if(!this._metrics)this._metrics=new u(this.input,this.inline);return this._metrics;};ea.prototype._getIsInDOM=function(){'use strict';return this._isInDOM||(this._isInDOM=m.contains(document.body,this.input));};ea.getInstance=function(fa){'use strict';var ga=r.byClass(fa,'uiTokenizer');return ga?k.get(ga,'Tokenizer'):null;};ea.init=function(fa,ga){'use strict';fa.init(ga.tokenarea,ga.param_name,ga.initial_info,ga.options);};Object.assign(ea.prototype,{inline:false,maxTokens:null,excludeDuplicates:true,placeholder:'',_widthOffset:null,_metrics:null});f.exports=ea;},null);
__d('ProgressBarBase',['emptyFunction','requestAnimationFrame','removeFromArray','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=[];function m(n,o){'use strict';this._min=n||0;this._max=o||100;this._initialPosition=0;this._position=0;this._initialVelocity=0;this._velocity=0;this._acceleration=0;this.useAcceleration=true;this._targetPosition=0;this._targetTime=0;this._startTime=null;this._onComplete=h;}m.prototype.setPosition=function(n){'use strict';n=this._normalizePosition(n);this._initialPosition=n;this._position=n;this.updateMeter(this._position);this.stop();return this;};m.prototype.setCompleteHandler=function(n){'use strict';this._onComplete=n||h;return this;};m.prototype.setTarget=function(n,o){'use strict';this._stopAnimating();this._clearOnCompleteTimeout();this._targetPosition=n;var p=this._normalizePosition(n);this._targetTime=o;this._initialVelocity=this._velocity;this._initialPosition=this._position;if(this.useAcceleration){this._acceleration=2*(p-this._initialPosition-this._initialVelocity*o)/(o*o);}else{this._acceleration=0;this._velocity=this._initialVelocity=(p-this._initialPosition)/o;}if(this._position>=p){this._onComplete();}else this._start();return this;};m.prototype.setNoAcceleration=function(n){'use strict';this.useAcceleration=!n;return this;};m.prototype._clearOnCompleteTimeout=function(){'use strict';b.clearTimeout(this._onCompleteTimeout);};m.prototype.stop=function(){'use strict';this._clearOnCompleteTimeout();this._velocity=0;this._initialVelocity=0;this._acceleration=0;this._stopAnimating();return this;};m.prototype._start=function(){'use strict';this._startTime=Date.now();this._onCompleteTimeout=b.setTimeout((function(){this.setPosition(this._targetPosition);this._onComplete();}).bind(this),this._targetTime);this._startAnimating();return this;};m.prototype._loop=function(){'use strict';var n=Date.now()-this._startTime;this._position=.5*this._acceleration*n*n+this._initialVelocity*n+this._initialPosition;var o=this._velocity;this._velocity=this._acceleration*n+this._initialVelocity;var p=o<0!==this._velocity<0;if(this._position>this._normalizePosition(this._targetPosition)||p){this.setPosition(this._targetPosition);this._onComplete();}else this.updateMeter(this._position);};m.prototype.updateMeter=function(n){'use strict';throw "Unimplemented function: updateMeter";};m.prototype._normalizePosition=function(n){'use strict';return Math.min(Math.max((n-this._min)/(this._max-this._min),0),1);};m.prototype._startAnimating=function(){'use strict';if(!k(l,this)){l.push(this);if(l.length===1)i(m.prototype._requestAnimationFrameCallback);}};m.prototype._stopAnimating=function(){'use strict';j(l,this);};m.prototype._requestAnimationFrameCallback=function(){'use strict';l.forEach(function(n){n._loop();});if(l.length)i(m.prototype._requestAnimationFrameCallback);};m.setPosition=function(n,o){'use strict';n.setPosition(o);};m.setTarget=function(n,o,p){'use strict';n.setTarget(o,p);};f.exports=m;},null);
__d('ProgressBar',['ProgressBarBase','CSS','Style','cx','csx','DOM'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n,o;n=babelHelpers.inherits(p,h);o=n&&n.prototype;function p(q,r,s){'use strict';o.constructor.call(this,r,s);this._root=q;this._meter=m.find(q,"div._5e4k");this._meter2=m.scry(q,"div._5e2g")[0];}p.prototype.getRoot=function(){'use strict';return this._root;};p.prototype.updateMeter=function(q){'use strict';var r=Math.min(Math.max(q,0),1);i.conditionClass(this._meter,"_5e2d",r<=0);i.conditionClass(this._meter,"_5e4j",r>=1);r=r*100+'%';j.set(this._meter,'width',r);if(this._meter2){j.set(this._meter2,'left',r);j.set(this._meter2,'width',r);}};p.prototype.changeLabel=function(q){'use strict';var r=m.scry(this._root,"span._5e2h");r.forEach(function(s){m.setContent(s,q);});return this;};f.exports=p;},null);
__d('FormSubmitOnChange',['Event','submitForm'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();function j(k){'use strict';this._form=k;}j.prototype.enable=function(){'use strict';this._listener=h.listen(this._form.getRoot(),'change',this._submit.bind(this));};j.prototype.disable=function(){'use strict';this._listener.remove();this._listener=null;};j.prototype._submit=function(){'use strict';i(this._form.getRoot());};Object.assign(j.prototype,{_listener:null});f.exports=j;},null);
__d('VaultBoxURI',['URI'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i={PHOTOS_SYNCED:'photos_synced',isVaultBoxURI:function(j){var k=new RegExp("\/"+i.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k)&&j.getQueryData().hasOwnProperty('view_image');},isVaultArchiveURI:function(j){var k=new RegExp("\/"+i.PHOTOS_SYNCED+"\/?$");return j.getPath().match(k);},getSyncedTabURI:function(){return new h('/me/'+i.PHOTOS_SYNCED).getQualifiedURI();}};f.exports=i;},null);