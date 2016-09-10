/*!CK:1798590769!*//*1452483888,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["DCIsd"]); }

__d('ChatSearchSource',['requireWeak','AbstractSearchSource','AsyncRequest','CurrentUser','MercuryParticipantTypes','SearchableEntry','SearchSourceCallbackManager','ShortProfiles','TokenizeUtil','emptyFunction','isValidUniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){if(c.__markCompiled)c.__markCompiled();var s,t;'use strict';var u=null;h('OrderedFriendsList',function(w){u=w;});s=babelHelpers.inherits(v,i);t=s&&s.prototype;function v(w){t.constructor.call(this);this.$ChatSearchSource1=new n({parseFn:p.parse,matchFn:p.isQueryMatch,indexFn:w.indexFn});this.$ChatSearchSource2=w.queryRequests||[];this.$ChatSearchSource3=false;}v.prototype.bootstrapImpl=function(w){o.fetchAll().then((function(){this.$ChatSearchSource3=true;this.$ChatSearchSource4();w();}).bind(this));};v.prototype.searchImpl=function(w,x,y){var z=null,aa={},ba=y&&y.onQueryFinished,ca=y&&y.onQueryStarted;ca&&ca(w);var da=this.$ChatSearchSource1.search(w,(function(ga){if(!z){z=ga;z.forEach(function(ha){return aa[ha.getUniqueID()]=true;});}else ga.forEach(function(ha){var ia=ha.getUniqueID();if(!aa[ia]){z.push(ha);aa[ia]=true;}});x(z,w);if(w.length===1&&this.$ChatSearchSource3)ba&&ba(w);}).bind(this),y);if(!da||!this.$ChatSearchSource2||!this.$ChatSearchSource2.length||w.length===0){ba&&ba(w);return;}if(w.length===1){if(this.$ChatSearchSource3)ba&&ba(w);return;}var ea={value:w,existing_ids:z&&z.map(function(ga){return ga.getUniqueID();}).join(','),limit:y&&y.threadLimit},fa=this.$ChatSearchSource2.length;this.$ChatSearchSource2.forEach((function(ga){this.$ChatSearchSource5(ea,ga,(function(ha){this.$ChatSearchSource6(this.$ChatSearchSource7(this.$ChatSearchSource8(ha)).filter(function(ia){return !!ia;}),w);fa--;if(fa===0){this.$ChatSearchSource1.setQueryStringAsExhausted(w);ba&&ba(w);}}).bind(this));}).bind(this),this);};v.prototype.getAllEntriesMap=function(){return this.$ChatSearchSource1.getAllEntries();};v.prototype.$ChatSearchSource4=function(){var w=o.getCachedProfileIDs(),x=w.filter(function(z){var aa=o.getNow(z);return (z==k.getID()||aa.type===l.FRIEND);}),y=x.map(this.$ChatSearchSource9);if(y.length)this.$ChatSearchSource1.addLocalEntries(y);};v.prototype.$ChatSearchSource7=function(w){return w.map(this.$ChatSearchSource10,this);};v.prototype.$ChatSearchSource10=function(w,x){if(w.mercury_thread){if(!u)return null;return u.normalizeThreadEntry(w,x);}var y=w.text,z=w.uid;if(!y||!r(z))return null;return new m({uniqueID:z,title:y,order:u?u.getActiveRank(z):0,subtitle:w.subtext,type:w.render_type||w.type,photo:w.photo,uri:w.path,auxiliaryData:{isMessengerUser:w.is_messenger_user,alias:w.alias}});};v.prototype.$ChatSearchSource8=function(w){var x=w.getPayload();if(Array.isArray(x)){return x;}else if(x&&x.entries){return x.entries;}else return [];};v.prototype.$ChatSearchSource9=function(w){var x=o.getNow(w),y=w==k.getID()?l.FRIEND:x.type,z=[x.additionalName,x.alternateName].concat(x.searchTokens||[]).join(' '),aa=x.name,ba=x.additionalName;if(x.threadNickname){aa=x.threadNickname;ba=x.name;}return new m({uniqueID:w,title:aa,order:u?u.getActiveRank(w):0,subtitle:ba,keywordString:z,type:y,photo:x.thumbSrc,uri:x.uri,auxiliaryData:{isMessengerUser:x.is_messenger_user,alias:x.alias}});};v.prototype.$ChatSearchSource5=function(w,x,y,z){new j(x.uri).setData(babelHelpers._extends({},w,x.data)).setMethod('GET').setReadOnly(true).setHandler(y).setErrorHandler(z||q).setAllowCrossPageTransition(true).send();};v.prototype.$ChatSearchSource6=function(w,x){if(w.length)this.$ChatSearchSource1.addQueryEntries(w,x);};v.prototype.addLocalEntries=function(w){this.$ChatSearchSource1.addLocalEntries(w);};v.prototype.refreshData=function(){o.fetchAll();h('AvailableList',function(w){return w.update();});};f.exports=v;},null);
__d('MessagingRecipientTypeaheadItem.react',['BackgroundImage.react','ChatTypeaheadConstants','ImageBlock.react','LeftRight.react','React','SplitImage.react','MercuryThreadMetadataRawRenderer','TypeaheadViewItem','cx','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=l.PropTypes,s=l.createClass({displayName:'MessagingRecipientTypeaheadItem',propTypes:babelHelpers._extends({},o.propTypes,{imageSize:r.number.isRequired}),mixins:[o.Mixin],isThreadRecipient:function(){return this.props.entry.getType()===i.THREAD_TYPE;},_getImage:function(){var t=this.props.entry;if(t.getType()===i.THREAD_TYPE&&!t.getPhoto()){var u=t.getAuxiliaryData();return (l.createElement(m,{size:this.props.imageSize,srcs:u.participantsToRender.map(function(v){return v.image_src;})}));}if(t.getPhoto())return (l.createElement(h,{width:this.props.imageSize,height:this.props.imageSize,backgroundSize:'cover',src:t.getPhoto()}));return l.createElement('span',null);},_getThreadParticipantList:function(){if(!this.isThreadRecipient())return null;var t=this.props.entry;return n.renderRawParticipantList(t.getUniqueID(),t.getAuxiliaryData().participantsToRender,t.getAuxiliaryData().thread.participants.length-1,{names_renderer:n.renderShortNames});},_getTitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getTitle();},_getSubtitle:function(){var t=this.props.entry;if(this.isThreadRecipient()&&!t.getTitle())return this._getThreadParticipantList();return t.getSubtitle()?t.getSubtitle().split(' \u00b7 ')[0]:null;},render:function(){var t=this._getSubtitle(),u=q("_599m"+(' '+"_55xn")+(!t?' '+"_5mne":'')+(this.props.highlighted?' '+"_599n":''),this.props.className);return (l.createElement('li',{'aria-selected':this.props.selected,className:u,onMouseDown:this._onSelect,onMouseEnter:this._onHighlight,role:this.props.role},l.createElement(j,{spacing:'medium'},this._getImage(),l.createElement(k,null,l.createElement('div',null,l.createElement('div',{className:"_55xt _599p"},this._getTitle()),l.createElement('div',{className:"_55z3 _599q"},t)),this.props.children))));}});f.exports=s;},null);
__d('MessagingRecipientSelectedList.react',['Image.react','LeftRight.react','Map','MessagingRecipientTypeaheadItem.react','React','cx','fbt','xuiglyph'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=l.PropTypes,q=l.createClass({displayName:'MessagingRecipientSelectedList',propTypes:{entries:p.instanceOf(j),onSelect:p.func.isRequired},_renderSelectedEntry:function(r){var s=o({name:'cross',shade:'dark',size:'small'});return (l.createElement(k,{key:r.getUniqueID(),entry:r,imageSize:24,onSelect:this.props.onSelect},l.createElement(h,{className:"_1jm4",src:s})));},render:function(){var r=n._("Send to:"),s=[];this.props.entries.forEach((function(t){return s.push(this._renderSelectedEntry(t));}).bind(this));return (l.createElement('div',{className:"_1jm5"},l.createElement(i,{className:"_1jm6 _2ph-"},l.createElement('span',null,r),l.createElement('span',null,this.props.entries.size)),l.createElement('ul',null,s)));}});f.exports=q;},null);
__d('MessagingRecipientTypeaheadView.react',['CenteredContainer.react','Link.react','Map','MessagingRecipientTypeaheadItem.react','React','TypeaheadViewPropTypes','XUISpinner.react','cx','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){if(c.__markCompiled)c.__markCompiled();var q=l.PropTypes,r=32,s=l.createClass({displayName:'MessagingRecipientTypeaheadView',propTypes:babelHelpers._extends({},m,{selectedEntries:q.instanceOf(j),loading:q.bool}),getDefaultProps:function(){return {role:'listbox'};},_renderItem:function(t){var u=t===this.props.highlightedEntry,v=this.props.selectedEntries.has(t.getUniqueID());return (l.createElement(k,{key:t.getUniqueID(),entry:t,highlighted:u,imageSize:r,selected:v,onSelect:this.props.onSelect,onHighlight:this.props.onHighlight,onRenderHighlight:this.props.onRenderHighlight},l.createElement(i,{'aria-checked':v,className:"_2i83"+(v?' '+"_2i85":'')+(!v?' '+"_2i86":''),href:'#',role:'checkbox',tabIndex:'0'})));},render:function(){if(this.props.entries.length===0&&!this.props.loading)return (l.createElement(h,{className:"_2pi1"},p._("No results")));return (l.createElement('ul',{id:this.props.ariaOwneeID,className:"_51do",role:this.props.role},this.props.entries.map(this._renderItem),l.createElement('div',{className:"_51dq"},this.props.loading?l.createElement(n,null):null)));}});f.exports=s;},null);
__d("XMessagingForwardAttachmentController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/mercury\/attachments\/forward\/",{});},null);
__d('MessagingForwardAttachmentDialog.react',['ix','AsyncRequest','ChatSearchSource','Image.react','LayerFadeOnHide','Layout.react','Map','MessagingRecipientSelectedList.react','MessagingRecipientTypeaheadView.react','OrderedFriendsList','React','SearchableTextInput.react','ScrollableArea.react','XMessagingForwardAttachmentController','XUIDialog.react','XUIDialogBody.react','XUIDialogButton.react','XUIDialogCancelButton.react','XUIDialogFooter.react','XUIDialogTitle.react','XUISpinner.react','cx','fbglyph','fbt'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa=m.Column,ga=m.FillColumn,ha=r.PropTypes,ia=r.createClass({displayName:'MessagingForwardAttachmentDialog',propTypes:{attachmentID:ha.string.isRequired,onClose:ha.func,shown:ha.bool.isRequired,title:ha.string.isRequired},getInitialState:function(){return {bootstrappedEntries:[],entries:[],loading:true,selectedEntries:new n(),sendError:null,sending:false,startingThreadingID:Date.now(),query:''};},componentWillMount:function(){this._dataSource=new j({queryRequests:[{uri:'/ajax/mercury/composer_query.php'}]});},componentDidMount:function(){q.getSearchableEntries(20,(function(ja){this.setState({bootstrappedEntries:ja,loading:false});}).bind(this));},_onSelectEntry:function(ja){var ka=ja.getUniqueID(),la=new n(this.state.selectedEntries);if(la.has(ka)){la['delete'](ka);}else la.set(ka,ja);this.setState({selectedEntries:la});},_onSearchChange:function(ja){var ka=ja.target.value;this.setState({loading:true,query:ka});},_onSearchEntriesFound:function(ja){this.setState({entries:ja});},_onSearchFinished:function(ja){ja===this.state.query&&this.setState({loading:false});},_onSubmit:function(){var ja={},ka=this.state.startingThreadingID;this.state.selectedEntries.forEach(function(ma){ja[ka++]=ma.getUniqueID();});var la=u.getURIBuilder().getURI();new i(la).setMethod('POST').setHandler(this._onSubmitResponse).setData({attachment_id:this.props.attachmentID,recipient_map:ja}).send();this.setState({sending:true,sendError:null});},_onSubmitResponse:function(ja){if(ja.payload.success){this.props.onClose&&this.props.onClose();this.setState({bootstrappedEntries:[],selectedEntries:new n(),sending:false,startingThreadID:Date.now(),query:''});return;}this.setState({sending:false,sendError:ja.payload.error});},_onToggle:function(ja){if(!ja)this.props.onClose();},render:function(){var ja=ea._("Send"),ka=null;if(this.state.sending){ka=r.createElement('div',null,r.createElement(ba,null),r.createElement('span',{className:"_5s0d _3-99"},ea._("Sending")));}else if(this.state.sendError){var la=h("\/images\/assets_DO_NOT_HARDCODE\/fb_glyphs\/caution-solid_16_bluegray-40.png");ka=r.createElement('div',{className:"_5s0d"},r.createElement(k,{src:la}),r.createElement('span',{className:"_3-99"},this.state.sendError));}var ma=ea._("Search for people and groups");return (r.createElement(v,{shown:this.props.shown,behaviors:{LayerFadeOnHide:l},onToggle:this._onToggle,width:560},r.createElement(aa,null,this.props.title),r.createElement(w,{useCustomPadding:true},r.createElement(m,null,r.createElement(fa,{className:"_5s0e"},r.createElement('div',{className:"_2ph_"},r.createElement(s,{className:"_5s0f autofocus",onChange:this._onSearchChange,onEntriesFound:this._onSearchEntriesFound,placeholder:ma,queryString:this.state.query,searchSource:this._dataSource,searchSourceOptions:{onQueryFinished:this._onSearchFinished}})),r.createElement(t,{className:"_5s0g",height:400,width:360},r.createElement(p,{entries:this.state.query?this.state.entries:this.state.bootstrappedEntries,loading:this.state.loading,selectedEntries:this.state.selectedEntries,onSelect:this._onSelectEntry}))),r.createElement(ga,{className:"_5s0h"},r.createElement(t,{height:457,shadow:false},r.createElement(o,{entries:this.state.selectedEntries,onSelect:this._onSelectEntry}))))),r.createElement(z,{leftContent:ka},r.createElement(y,{onClick:this.props.onClose}),r.createElement(x,{use:'confirm',disabled:!this.state.selectedEntries.size||this.state.sending,label:ja,onClick:this._onSubmit}))));}});f.exports=ia;},null);