/*!CK:2072805562!*//*1451877036,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["r2v9x"]); }

__d('FBChecklistItem.react',['React','cx','invariant','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l=h.PropTypes,m=h.createClass({displayName:'FBChecklistItem',propTypes:{context:l.oneOf(['block','inline']),paddingLeft:l.oneOf(['none','small','normal']),paddingRight:l.oneOf(['none','small','normal'])},getDefaultProps:function(){return {context:'block',paddingLeft:'normal',paddingRight:'normal'};},render:function(){!(Array.isArray(this.props.children)&&(this.props.children.length===2||this.props.children.length===3))?j(0):undefined;var n,o,p;if(this.props.children.length===3){n=this.props.children[0];o=this.props.children[1];p=this.props.children[2];}else{n=null;o=this.props.children[0];p=this.props.children[1];}var q=this.props.context==='block'?'div':'span',r=null;if(n)r=h.createElement(q,{className:"_pur _pus"},n);var s=this.props.paddingLeft,t=this.props.paddingRight,u="_put"+(s==='none'?' '+"_puu":'')+(s==='small'?' '+"_puv":'')+(t==='none'?' '+"_puw":'')+(t==='small'?' '+"_pux":'');return (h.createElement(q,babelHelpers._extends({},this.props,{className:k(this.props.className,u)}),r,h.createElement(q,{className:"_puy"+(!n?' '+"_pus":'')},o),h.createElement(q,{className:"_puz"},p)));}});f.exports=m;},null);
__d('FBChecklistPagerMixin',['React'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i=h.PropTypes,j={propTypes:{endpoint:i.string.isRequired,onExhaustion:i.func.isRequired,onFetch:i.func,placeholder:i.string.isRequired},getInitialState:function(){return {endpoint:this.props.endpoint,loading:false};},_shouldFetchMore:function(){if(this.state.loading||!this.state.endpoint)return false;this.setState({loading:true});return true;},_onFetch:function(k){this.setState({endpoint:k.endpoint,loading:false});this.props.onFetch&&this.props.onFetch(k);!k.endpoint&&this.props.onExhaustion();}};f.exports=j;},null);
__d('FBChecklistPager.react',['AsyncRequest','Keys','FBChecklistPagerMixin','React','XUIText.react','cx'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=k.createClass({displayName:'FBChecklistPager',mixins:[j],fetchMore:function(){if(!this._shouldFetchMore())return;new h().setURI(this.state.endpoint).setHandler(this._fetchHandler).send();},render:function(){var o="_4j3_"+(this.state.loading?' '+"_4j40":'');return (k.createElement('div',{className:o,onClick:this._clickHandler,onKeyPress:this._keyPressHandler,tabIndex:0},k.createElement(l,{size:'small',weight:'bold'},this.props.placeholder),k.createElement('span',{className:"_4j41"})));},_clickHandler:function(event){event.preventDefault();this.fetchMore();},_fetchHandler:function(o){var p=o.getPayload();this._onFetch(p);},_keyPressHandler:function(event){switch(event.charCode){case i.SPACE:case i.RETURN:this.fetchMore();}}});f.exports=n;},null);
__d('requiredIfPropIsTruthy',['sprintf'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();function i(j,k){return function(l,m,n,o){if(!l[j])return;if(l[m]===undefined)return new Error(h('Must supply %s to %s if property %s is truthy.',m,n,j));return k(l,m,n,o);};}f.exports=i;},null);
__d('FBChecklistProps',['React','requiredIfPropIsTruthy'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k=j.shape({checked:j.bool,id:j.oneOfType([j.string,j.number]).isRequired,image:j.oneOfType([j.string,j.object]),name:j.string,subtitle:j.string,title:j.oneOfType([j.string,j.object]).isRequired}),l={baseName:j.string.isRequired,fetchOnScroll:j.bool,imageSize:j.number,maxHeight:j.number,multiSelect:j.bool,onBlur:j.func,onChange:j.func,onExhaust:j.func,onFetch:j.func,onFocus:j.func,options:j.arrayOf(k).isRequired,overflow:j.oneOf(['scroll','show']),pagerEndpoint:i('showPager',j.string),pagerPlaceholder:i('showPager',j.string),requireSelect:j.bool,scrollOnFetch:j.bool,showPager:j.bool};f.exports=l;},null);
__d('FBChecklistScrollMixin',['Animation','ReactDOM','Scroll','Style','highlight','throttle'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();var n=400,o=100,p=300,q=250,r={componentWillUnmount:function(){this.throttled=null;},scrollToBottom:function(){this._scrollTo(this._getScrollArea().scrollHeight);},scrollOptionToTop:function(t){if(!this.state.options.has(t))return;var u=i.findDOMNode(this.refs[t]);this._scrollTo(u.offsetTop-1,null,p);},scrollToOption:function(t){if(!this.state.options.has(t))return;var u=this._getScrollArea(),v=i.findDOMNode(this.refs[t]),w=v.offsetTop+v.offsetHeight,x=j.getTop(u)+u.offsetHeight,y=(function(){var z=this._getBackgroundColor();z&&l(v,null,z);}).bind(this);if(v.offsetTop<j.getTop(u)){this._scrollTo(v.offsetTop-1,y);}else if(w>x){this._scrollTo(w-u.offsetHeight,y);}else{y();return;}},_getScrollArea:function(){return this.refs.container.getArea();},_getBackgroundColor:function(){var t=this._getScrollArea();while(t){var u=k.get(t,'backgroundColor');if(!s(u))return u;t=t.parentElement;}return null;},_maybeFetchMoreOptions:function(){if(this.props.fetchOnScroll&&this.state.showPager&&this.refs.container.getScrollPosition().bottom<n)this.refs.pager.fetchMore();},_scrollHandler:function(){if(!this.throttled)this.throttled=m(this._maybeFetchMoreOptions,q,this);this.throttled();},_scrollTo:function(t,u,v){new h(this._getScrollArea()).to('scrollTop',t).ease(h.ease.end).duration(v||o).ondone(function(){u&&u();}).go();}};function s(t){if(!t.startsWith('rgba'))return false;var u=t.split(',');return u.length===4&&parseFloat(u[3])===0;}f.exports=r;},null);
__d('ShadowedScrollableArea.react',['React','ReactDOM','Scroll','Vector','cx','throttle','joinClasses'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n){if(c.__markCompiled)c.__markCompiled();var o=h.PropTypes,p=500,q=h.createClass({displayName:'ShadowedScrollableArea',propTypes:{maxHeight:o.number.isRequired},getInitialState:function(){return {showBottom:false,showTop:false};},render:function(){var r=h.createElement('div',babelHelpers._extends({},this.props,{className:n(this.props.className,"scrollable"),ref:'area',style:babelHelpers._extends({},this.props.style||{},{maxHeight:this.props.maxHeight})}),this.props.children),s="_2yy7"+(this.state.showBottom?' '+"_2yy8":'')+(this.state.showTop?' '+"_2yy9":'');return (h.createElement('div',{className:s,onScroll:this._scrollHandler},r));},componentWillUnmount:function(){this.throttled=null;},getArea:function(){return i.findDOMNode(this.refs.area);},getScrollPosition:function(){var r=i.findDOMNode(this.refs.area),s=this._getAreaDimensions().height;return {bottom:r.scrollHeight-j.getTop(r)-s,top:j.getTop(r)};},updateShadows:function(){if(this._hasOverflow()){var r=this.getScrollPosition();this.setState({showBottom:r.bottom!==0,showTop:r.top!==0});}else if(this.state.showBottom||this.state.showTop)this.setState({showBottom:false,showTop:false});},_getAreaDimensions:function(){var r=i.findDOMNode(this.refs.area);return {height:k.getElementDimensions(r).y,scrollHeight:r.scrollHeight};},_hasOverflow:function(){var r=this._getAreaDimensions();return r.scrollHeight>r.height;},_scrollHandler:function(event){if(!this.throttled)this.throttled=m(this.updateShadows,p,this);this.throttled();}});f.exports=q;},null);
__d('FBChecklist.react',['FBChecklistProps','FBChecklistScrollMixin','React','Image.react','FBChecklistItem.react','FBChecklistPager.react','ShadowedScrollableArea.react','XUIGrayText.react','cx','uniqueID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){if(c.__markCompiled)c.__markCompiled();var r=j.PropTypes,s=248,t=32,u=j.createClass({displayName:'FBChecklist',mixins:[i],propTypes:babelHelpers._extends({titleFontShade:r.oneOf(['dark','light','medium'])},h),getDefaultProps:function(){return {maxHeight:s,overflow:'show',imageSize:t,titleFontShade:'medium'};},getInitialState:function(){return {instanceID:q()};},render:function(){var v=this.props.options.map((function(y){var z=null;if(y.image)z=j.createElement('span',null,j.createElement(k,{alt:y.title,height:this.props.imageSize,src:y.image,width:this.props.imageSize}));var aa=null;if(y.subtitle)aa=j.createElement(o,{className:"_25_9",weight:'normal'},y.subtitle);var ba="_25_a"+(y.checked?' '+"_25_b":'')+(y.focused?' '+"_25_c":''),ca=null;if(y.iconSrc&&y.iconExplanation)ca=j.createElement(k,{'aria-label':y.iconExplanation,className:"_25_e",'data-hover':'tooltip','data-tooltip-position':'above',src:y.iconSrc});var da=[this.state.instanceID,y.id].join('_');return (j.createElement('label',{className:ba,htmlFor:da,key:y.id,ref:y.id},j.createElement(l,{context:'inline',paddingLeft:this.props.paddingLeft,paddingRight:this.props.paddingRight},z,j.createElement('span',null,j.createElement(o,{className:"_25_f",shade:this.props.titleFontShade,size:'small',weight:'bold'},y.title,ca),aa),j.createElement('span',{className:"_25_g"},j.createElement('span',{className:"_25_h"}),j.createElement('input',{checked:y.checked,className:"_25_i",id:da,name:this._getOptionNameOrFallback(y),onBlur:this.props.onBlur,onChange:this.props.onChange,onFocus:this.props.onFocus,type:'checkbox',value:y.id})))));}).bind(this)),w=null;if(this.props.showPager)w=j.createElement(m,{endpoint:this.props.pagerEndpoint,onExhaustion:this.props.onExhaust,onFetch:this.props.onFetch,placeholder:this.props.pagerPlaceholder,ref:'pager'});var x=j.createElement('fieldset',{className:"_25_j"},v,w);if(this.props.overflow==='scroll')return (j.createElement(n,{maxHeight:this.props.maxHeight,onScroll:this._scrollHandler,ref:'container'},x));return x;},_getOptionNameOrFallback:function(v){var w=v.name||this.props.baseName;if(this.props.multiSelect&&!w.endsWith('[]'))w+='['+v.id+']';return w;}});f.exports=u;},null);
__d('OrderedMap',['Object.assign','invariant'],function a(b,c,d,e,f,g,h,i){'use strict';if(c.__markCompiled)c.__markCompiled();var j='key:';function k(r,s){var t={};for(var u=0;u<r.length;u++){var v=r[u],w=s(v);m(w);var x=j+w;!!(x in t)?i(0):undefined;t[x]=v;}return t;}function l(r,s){this._normalizedObj=r;this._computedPositions=null;this.length=s;}function m(r){!(r!==''&&(typeof r==='string'||typeof r==='number'))?i(0):undefined;}function n(r,s,t){!(typeof r==='number'&&typeof s==='number'&&s>=0&&r>=0&&r+s<=t)?i(0):undefined;}function o(r,s){!(r&&r.constructor===Object&&(!s||s.constructor===Object))?i(0):undefined;var t={},u=0,v;for(v in r)if(r.hasOwnProperty(v)){t[v]=r[v];u++;}for(v in s)if(s.hasOwnProperty(v)){if(!(v in t))u++;t[v]=s[v];}return new l(t,u);}var p={has:function(r){m(r);var s=j+r;return s in this._normalizedObj;},get:function(r){m(r);var s=j+r;return this.has(r)?this._normalizedObj[s]:undefined;},merge:function(r){!(r instanceof l)?i(0):undefined;return o(this._normalizedObj,r._normalizedObj);},map:function(r,s){return this.mapRange(r,0,this.length,s);},mapRange:function(r,s,t,u){var v=this._normalizedObj,w={},x=0;n(s,t,this.length);var y=s+t-1;for(var z in v)if(v.hasOwnProperty(z)){if(x>=s){if(x>y)break;var aa=v[z];w[z]=r.call(u,aa,z.substr(j.length),x);}x++;}return new l(w,t);},filter:function(r,s){return this.filterRange(r,0,this.length,s);},filterRange:function(r,s,t,u){var v={},w=0;this.forEachRange(function(x,y,z){if(r.call(u,x,y,z)){var aa=j+y;v[aa]=x;w++;}},s,t);return new l(v,w);},forEach:function(r,s){this.forEachRange(r,0,this.length,s);},forEachRange:function(r,s,t,u){n(s,t,this.length);var v=this._normalizedObj,w=0,x=s+t-1;for(var y in v)if(v.hasOwnProperty(y)){if(w>=s){if(w>x)break;var z=v[y];r.call(u,z,y.substr(j.length),w);}w++;}},mapKeyRange:function(r,s,t,u){var v=this.indexOfKey(s),w=this.indexOfKey(t);!(v!==undefined&&w!==undefined)?i(0):undefined;!(w>=v)?i(0):undefined;return this.mapRange(r,v,w-v+1,u);},forEachKeyRange:function(r,s,t,u){var v=this.indexOfKey(s),w=this.indexOfKey(t);!(v!==undefined&&w!==undefined)?i(0):undefined;!(w>=v)?i(0):undefined;this.forEachRange(r,v,w-v+1,u);},keyAtIndex:function(r){var s=this._getOrComputePositions(),t=s.keyByIndex[r];return t?t.substr(j.length):undefined;},keyAfter:function(r){return this.nthKeyAfter(r,1);},keyBefore:function(r){return this.nthKeyBefore(r,1);},nthKeyAfter:function(r,s){var t=this.indexOfKey(r);!(t!==undefined)?i(0):undefined;return this.keyAtIndex(t+s);},nthKeyBefore:function(r,s){return this.nthKeyAfter(r,-s);},indexOfKey:function(r){m(r);var s=j+r,t=this._getOrComputePositions(),u=t.indexByKey[s];return u===undefined?undefined:u;},toArray:function(){var r=[],s=this._normalizedObj;for(var t in s)if(s.hasOwnProperty(t))r.push(s[t]);return r;},_getOrComputePositions:function(){var r=this._computedPositions;if(!r)this._computePositions();return this._computedPositions;},_computePositions:function(){this._computedPositions={keyByIndex:{},indexByKey:{}};var r=this._computedPositions.keyByIndex,s=this._computedPositions.indexByKey,t=0,u=this._normalizedObj;for(var v in u)if(u.hasOwnProperty(v)){r[t]=v;s[v]=t;t++;}}};h(l.prototype,p);var q={from:function(r){!(r instanceof l)?i(0):undefined;return o(r._normalizedObj,null);},fromArray:function(r,s){!Array.isArray(r)?i(0):undefined;!(typeof s==='function')?i(0):undefined;return new l(k(r,s),r.length);}};f.exports=q;},null);
__d('FBChecklistStateMixin',['OrderedMap','requestAnimationFrame'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j={addOption:function(k,l,m,n,o,p){this.props.multiSelect||this._uncheckAllOptions();this._insertSingleOption.apply(this,[false].concat(Array.prototype.slice.call(arguments)));},replaceWithSingleOption:function(k,l,m,n,o,p){this._insertSingleOption.apply(this,[true].concat(Array.prototype.slice.call(arguments)));this._optionsWereReplaced&&this._optionsWereReplaced();},clearSelection:function(){this._uncheckAllOptions();},getSelection:function(){var k={};this.state.options.forEach(function(l,m){if(l.checked)k[m]=l;});return k;},getSelectionCount:function(){return Object.keys(this.getSelection()).length;},hasSelection:function(){return this.getSelectionCount()>0;},getInitialState:function(){return {options:h.fromArray(this.props.options,function(k){return k.id;}),showPager:this.props.showPager};},shouldComponentUpdate:function(k,l){return (this.state.options!==l.options||this.state.showPager!==l.showPager);},_changeHandler:function(event){var k=this._getEventTarget(event);if(this.props.requireSelect&&!k.checked&&this.getSelectionCount()===1)return;if(k.checked&&!this.props.multiSelect)this._uncheckAllOptions();this.setState({options:this.state.options.map(function(l,m){if(m===k.value)l.checked=k.checked;return l;})},(function(){if(this.props.onChange)this.props.onChange(this.getSelection());}).bind(this));},_exhaustionHandler:function(){this.setState({showPager:false});},_fetchHandler:function(k){if(!k.options.length){this._exhaustionHandler();return;}this._insertOptions(h.fromArray(k.options,function(l){return l.id;}),false,(function(){if(this.props.scrollOnFetch&&this.scrollOptionToTop)this.scrollOptionToTop(k.options[0].id);}).bind(this));if(this.refs.container&&this.refs.container.updateShadows)i(this.refs.container.updateShadows);},_insertSingleOption:function(k,l,m,n,o,p,q){var r=h.fromArray([{id:l,title:m,subtitle:n,image:o,checked:!!p,name:q}],function(s){return s.id;});this._insertOptions(r,k);if(this._optionWasAdded)i((function(){return this._optionWasAdded(l);}).bind(this));},_insertOptions:function(k,l,m){this.setState({options:l?k:this.state.options.merge(k)},m);},_uncheckAllOptions:function(){this.setState({options:this.state.options.map(function(k){k.checked=false;return k;})});},_getEventTarget:function(event){return event.target;}};f.exports=j;},null);
__d('FBChecklistWrapper.react',['FBChecklistStateMixin','React','FBChecklist.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'FBChecklistWrapper',mixins:[h],propTypes:{},render:function(){return (i.createElement(j,babelHelpers._extends({},this.props,{onBlur:this._blurHandler,onChange:this._changeHandler,onExhaust:this._exhaustionHandler,onFetch:this._fetchHandler,onFocus:this._focusHandler,options:this.state.options.toArray(),ref:'checklist',showPager:this.state.showPager})));},scrollToBottom:function(){this.refs.checklist.scrollToBottom();},scrollOptionToTop:function(l){this.refs.checklist.scrollOptionToTop(l);},scrollToOption:function(l){this.refs.checklist.scrollToOption(l);},_blurHandler:function(event){var l=this._getEventTarget(event);this.setState({options:this.state.options.map(function(m,n){if(n===l.value)m.focused=false;return m;})});},_focusHandler:function(event){var l=this._getEventTarget(event);this.setState({options:this.state.options.map(function(m,n){m.focused=n===l.value;return m;})});}});f.exports=k;},null);
__d('SearchSourceWithMetrics',['AbstractSearchSource'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();var i,j;i=babelHelpers.inherits(k,h);j=i&&i.prototype;function k(l,m){'use strict';j.constructor.call(this);this.searchSource=l;this.reporter=m;}k.prototype.searchImpl=function(l,m,n){'use strict';this.reporter.reportQueryBegin(l);if(n)this.reporter.reportStrategyName(n.strategyName);var o=Date.now();this.searchSource.search(l,(function(p,q){this.reporter.reportQueryComplete(Date.now()-o,0);m(p,q);}).bind(this),n);};k.prototype.bootstrapImpl=function(l){'use strict';this.reporter.reportBootstrapBegin();return this.searchSource.bootstrap((function(){this.searchSource.getBootstrappedEntries((function(m){this.reporter.reportBootstrapComplete(m.map(function(n){return n.getType();}));l();}).bind(this));}).bind(this));};f.exports=k;},null);
__d("TypeaheadMetricCounter",[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(){"use strict";this.reset();}h.prototype.reset=function(){"use strict";this.stats={};this.avgStats={};};h.prototype.recordStat=function(i,j){"use strict";this.stats[i]=j;};h.prototype.recordCountStat=function(i){"use strict";var j=this.stats[i];this.stats[i]=j?j+1:1;};h.prototype.recordAvgStat=function(i,j){"use strict";if(this.avgStats[i]){this.avgStats[i][0]+=j;this.avgStats[i][1]+=1;}else this.avgStats[i]=[j,1];};h.prototype.hasStats=function(){"use strict";return !!Object.keys(this.stats).length;};h.prototype.getStats=function(){"use strict";var i=babelHelpers._extends({},this.stats);for(var j in this.avgStats){var k=this.avgStats[j];i[j]=k[0]/k[1];}return i;};f.exports=h;},null);
__d('TypeaheadMetricReporter',['AsyncRequest','QueriesHistory','TypeaheadMetricCounter','mixInEventEmitter'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();var l='/ajax/typeahead/record_basic_metrics.php',m=1000;function n(o){'use strict';this.counter=new j();this.extraData=Object.assign({},o);this.bootstrapped=false;this.bootstrapBegin=Date.now();this.queriesHistory=new i(m);this.lastQuery=null;this.sessionActive=false;this.lastNotBackspacedQuery='';this.lastRequestID=null;this.requestIDHistory=[];this.$TypeaheadMetricReporter1();}n.prototype.getSID=function(){'use strict';return this.sid;};n.prototype.sessionStart=function(){'use strict';this.sessionActive=true;this.sessionStartTime=Date.now();};n.prototype.sessionEnd=function(){'use strict';if(this.sessionActive){this.$TypeaheadMetricReporter2();this.$TypeaheadMetricReporter1();this.sessionActive=false;}};n.prototype.sessionKill=function(){'use strict';if(this.sessionActive){this.$TypeaheadMetricReporter1();this.sessionActive=false;}};n.prototype.sessionPause=function(){'use strict';if(this.sessionActive){this.$TypeaheadMetricReporter2();this.sessionActive=false;}};n.prototype.reportSelect=function(o,p,q,r,s,t){'use strict';s=s==null?this.lastQuery:s;this.counter.recordStat('selected_id',o||'SELECT_NULL');this.counter.recordStat('selected_type',p);this.counter.recordStat('selected_position',q);this.counter.recordStat('selected_with_mouse',r?1:0);this.counter.recordStat('selected_query',s);for(var u in t)this.counter.recordStat(u,t[u]);};n.prototype.reportStrategyName=function(o){'use strict';this.counter.recordStat('strategy_name',o);};n.prototype.reportBootstrapBegin=function(){'use strict';this.bootstrapBegin=Date.now();};n.prototype.reportBootstrapDirty=function(){'use strict';this.bootstrapped=false;};n.prototype.reportBootstrapComplete=function(o){'use strict';this.counter.recordAvgStat('bootstrap_latency',Date.now()-this.bootstrapBegin);var p={};o.forEach(function(q){p[q]=(p[q]||0)+1;});this.counter.recordStat('bootstrap_response_types',p);this.bootstrapped=true;};n.prototype.reportQueryBegin=function(o){'use strict';this.counter.recordStat('query',o);this.counter.recordCountStat('num_queries');this.queriesHistory.add(o);if(this.lastNotBackspacedQuery.indexOf(o)!==0)this.lastNotBackspacedQuery=o;this.lastQuery=o;this.lastQueryTime=Date.now();};n.prototype.reportRequestID=function(o){'use strict';this.lastRequestID=o;this.requestIDHistory.push(o);};n.prototype.reportQueryComplete=function(o,p){'use strict';this.counter.recordAvgStat('avg_query_latency',o);if(p!==undefined)this.counter.recordStat('filtered_count',p);};n.prototype.reportResults=function(o,p){'use strict';this.results=o;if(p===this.lastQuery)this.counter.recordStat('last_query_latency',Date.now()-this.lastQueryTime);};n.prototype.reportResultsAds=function(o){'use strict';this.resultsAds=o;};n.prototype.$TypeaheadMetricReporter1=function(){'use strict';this.sid=Math.floor(Date.now()*Math.random());this.lastNotBackspacedQuery='';this.queriesHistory.reset();this.results=null;this.resultsAds=null;this.lastRequestID=null;this.requestIDHistory=[];this.counter.reset();this.emit&&this.emit('reset',{sid:this.sid});};n.prototype.$TypeaheadMetricReporter3=function(){'use strict';var o={};for(var p in this.extraData){var q=this.extraData[p];o[p]=typeof q==='function'?q():q;}return o;};n.prototype.$TypeaheadMetricReporter2=function(){'use strict';if(this.counter.hasStats()){this.counter.recordStat('session_time',Date.now()-this.sessionStartTime);if(this.results)this.counter.recordStat('candidate_results',JSON.stringify(this.results));if(this.resultsAds)this.counter.recordStat('candidate_results_ads',JSON.stringify(this.resultsAds));if(this.sid)this.counter.recordStat('sid',this.sid);if(this.lastNotBackspacedQuery)this.counter.recordStat('last_not_backspaced_query',this.lastNotBackspacedQuery);this.counter.recordStat('queries_history',JSON.stringify(this.queriesHistory.getQueries()));if(this.bootstrapped)this.counter.recordStat('bootstrapped',1);if(this.lastRequestID)this.counter.recordStat('request_id',this.lastRequestID);if(this.requestIDHistory.length)this.counter.recordStat('request_ids',this.requestIDHistory);var o=babelHelpers._extends({},this.counter.getStats(),this.$TypeaheadMetricReporter3());new h().setURI(l).setMethod('POST').setData({stats:o}).send();this.emit&&this.emit('submitted',o);}};k(n,{reset:true,submitted:true});f.exports=n;},null);
__d('ProfileMaskedTypeahead.react',['AbstractSearchSource','React','SearchSourceWithMetrics','TypeaheadMetricReporter','XUITypeahead.react','cx','joinClasses','requiredIfPropIsTruthy'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p=i.PropTypes,q=i.createClass({displayName:'ProfileMaskedTypeahead',propTypes:{metricsData:o('useMetrics',p.object),queryName:p.string,requireSelection:p.bool,searchSource:p.instanceOf(h).isRequired,selectionName:p.string,useMetrics:p.bool},getDefaultProps:function(){return {clearable:true,highlightOnSelect:true,queryName:'query',requireSelection:false,selectionName:'selected_id'};},componentDidUpdate:function(){var r=this.refs.typeahead.getTextFieldDOM(),s=r.scrollWidth>r.clientWidth;if(this.state.useMask!==s)this.setState({useMask:s});},getInitialState:function(){var r=null,s=this.props.searchSource;if(this.props.useMetrics){r=new k(this.props.metricsData);s=new j(s,r);}return {metricReporter:r,searchSource:s,useMask:false};},focusInput:function(){this.refs.typeahead.focusInput();},getTextFieldDOM:function(){return this.refs.typeahead.getTextFieldDOM();},render:function(){var r=this.props.selectedEntry,s=r?r.getTitle():this.props.queryString,t=null;if(this.state.useMask)t=i.createElement('div',{className:"_4ejq"});var u=null,v=null;if(r)u=i.createElement('input',{name:this.props.selectionName,type:'hidden',value:r.getUniqueID()});if(s)v=i.createElement('input',{name:this.props.queryName,type:'hidden',value:s});var w=n(this.props.className,"_4ejr"+(this.props.clearable?' '+"_4ejs":'')+(this.props.highlightOnSelect?' '+"_4ejt":'')+(!!r?' '+"_4eju":'')+(this.props.tallInput?' '+"_4ejv":''));return (i.createElement('div',{className:w},i.createElement(l,babelHelpers._extends({},this.props,{className:"_4ejw",onBlur:this._blurHandler,onFocus:this._focusHandler,onSelectAttempt:this._selectHandler,onTypeaheadVisibilityChanged:this._typeaheadVisibilityChangeHandler,queryString:s,ref:'typeahead',searchSource:this.state.searchSource})),t,v,u));},_blurHandler:function(){if(this.props.useMetrics)this.state.metricReporter.sessionEnd();if(this.props.requireSelection&&!this.props.selectedEntry&&this.props.onClear)this.props.onClear();if(this.props.onBlur)this.props.onBlur();},_focusHandler:function(){if(this.props.useMetrics)this.state.metricReporter.sessionStart();if(this.props.onFocus)this.props.onFocus();},_selectHandler:function(r,event){if(this.props.useMetrics&&r){this.state.metricReporter.reportSelect(r.getUniqueID(),r.getType(),r.getOrder(),!!event&&event.button>=0,this.props.queryString);this.state.metricReporter.sessionEnd();}if(this.props.onSelectAttempt)this.props.onSelectAttempt(r);},_typeaheadVisibilityChangeHandler:function(r,s){if(this.props.useMetrics){var t=s.filter(function(u){return !isNaN(parseInt(u.getUniqueID(),10));});this.state.metricReporter.reportResults(t.map(function(u){return u.getUniqueID();}));}}});f.exports=q;},null);
__d('ProfileTypeaheadWrapperMixin',['React','SearchableEntry'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.PropTypes,k={propTypes:{initialEntry:j.instanceOf(i),initialQuery:j.string},getDefaultProps:function(){return {initialEntry:null,initialQuery:''};},getInitialState:function(){return {queryString:this.props.initialQuery,selectedEntry:this.props.initialEntry};},clearSelection:function(){this.setState({queryString:'',selectedEntry:null},this.props.onClear);},focusInput:function(){this.refs.typeahead.focusInput();},getQueryString:function(){return this.state.queryString;},getSelectedEntry:function(){return this.state.selectedEntry;},_changeHandler:function(event){this.setState({queryString:event.target.value,selectedEntry:null},(function(){if(this.props.onChange)this.props.onChange(event);}).bind(this));},_selectHandler:function(l,event){this.setState({selectedEntry:l},(function(){if(this.props.onSelectAttempt)this.props.onSelectAttempt(l,event);}).bind(this));}};f.exports=k;},null);
__d('ProfileMaskedTypeaheadWrapper.react',['ProfileTypeaheadWrapperMixin','React','ProfileMaskedTypeahead.react'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k=i.createClass({displayName:'ProfileMaskedTypeaheadWrapper',mixins:[h],propTypes:{},render:function(){return (i.createElement(j,babelHelpers._extends({},this.props,{onChange:this._changeHandler,onClear:this.clearSelection,onSelectAttempt:this._selectHandler,queryString:this.state.queryString,ref:'typeahead',selectedEntry:this.state.selectedEntry})));}});f.exports=k;},null);
__d('ProfileTypeaheadContainer.react',['React','cx'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=h.createClass({displayName:'ProfileTypeaheadContainer',render:function(){return (h.createElement('div',{className:"_1ceo"},this.props.children));}});f.exports=j;},null);
__d('FBTypeaheadChecklist.react',['React','FBChecklistWrapper.react','ProfileMaskedTypeaheadWrapper.react','ProfileTypeaheadContainer.react','XUITypeahead.react'],function a(b,c,d,e,f,g,h,i,j,k,l){if(c.__markCompiled)c.__markCompiled();var m=h.PropTypes,n=h.createClass({displayName:'FBTypeaheadChecklist',propTypes:{excludedEntries:m.object,onChange:m.func,placeholder:m.string.isRequired,requireSelection:m.bool,searchSource:m.object.isRequired,typeaheadName:m.string,queryName:function(o,p,q){if(!o.multiSelect&&!o[p])return new Error('Must supply a query name to '+q+' for '+'single-selection mode.');}},getDefaultProps:function(){return {overflow:'scroll'};},getInitialState:function(){return {queryString:''};},render:function(){var o={onSelectAttempt:this._selectHandler,placeholder:this.props.placeholder,searchSource:this.props.searchSource},p=null;if(this.props.multiSelect){p=h.createElement(l,babelHelpers._extends({},o,{excludedEntries:this.props.excludedEntries,onBlur:this._typeaheadBlurHandler,onChange:this._typeaheadChangeHandler,queryString:this.state.queryString,ref:'typeahead'}));}else p=h.createElement(j,babelHelpers._extends({},o,{queryName:this.props.queryName,ref:'typeahead',requireSelection:this.props.requireSelection,selectionName:this.props.typeaheadName}));return (h.createElement('div',{className:this.props.className},h.createElement(i,babelHelpers._extends({},this.props,{onChange:this._checklistChangeHandler,ref:'checklist'})),h.createElement(k,null,p)));},clearSelection:function(){return this.refs.checklist.clearSelection();},getSelection:function(){return this.refs.checklist.getSelection();},_checklistChangeHandler:function(o){this.props.multiSelect||this.refs.typeahead.clearSelection();this.props.onChange&&this.props.onChange(o);},_selectHandler:function(o){if(!o)return;if(!this.props.multiSelect){this.refs.checklist.clearSelection();return;}this.refs.checklist.addOption(o.getUniqueID(),o.getTitle(),o.getSubtitle(),o.getPhoto(),true,this.props.typeaheadName);this.setState({queryString:''});setTimeout((function(){this.refs.checklist.scrollToOption(o.getUniqueID());}).bind(this),0);},_typeaheadBlurHandler:function(){this.props.requireSelection&&this.setState({queryString:''});},_typeaheadChangeHandler:function(event){this.setState({queryString:event.target.value});}});f.exports=n;},null);
__d('ProfileQuestionsTypeaheadChecklist.react',['Arbiter','FBTypeaheadChecklist.react','React'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k='402159529891743',l=j.createClass({displayName:'ProfileQuestionsTypeaheadChecklist',render:function(){return (j.createElement(i,babelHelpers._extends({},this.props,{onChange:this._onChange})));},_onChange:function(m){var n=m[k];h.inform('no-valid-answer-select',{selected:n&&n.checked});}});f.exports=l;},null);