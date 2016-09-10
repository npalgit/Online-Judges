/*!CK:1306988832!*//*1443857992,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["T3t7s"]); }

__d('ChatContentSearchResults.react',['ChatContentSearch','ChatContentSearchResult.react','MercuryConfig','MessengerSpinner.react','ReactComponentWithPureRenderMixin','React','ScrollableArea.react','debounce','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){'use strict';if(c.__markCompiled)c.__markCompiled();var q=m.PropTypes,r={},s=m.createClass({displayName:'ChatContentSearchResults',_inflightRequest:undefined,_requestResults:p,_reset:p,_inflightTimeStart:undefined,mixins:[l],propTypes:{onResultsLoaded:q.func,onSelect:q.func.isRequired,query:q.string.isRequired},getInitialState:function(){return {isLoading:false,response:null,results:[]};},componentDidMount:function(){this._reset=o(this._resetImpl,100);this._requestResults=o(this._requestResultsImpl,200);this._requestResults();},componentWillUnmount:function(){this._cancelInflightRequest();},componentWillReceiveProps:function(t){if(t.query!==this.props.query)this._reset(this._requestResults);},render:function(){return (m.createElement(n,{fade:true,onScroll:this._handleScroll,ref:'scrollable'},this._renderResults(),this._renderLoadingIndicator()));},_renderLoadingIndicator:function(){if(!this.state.isLoading)return null;return (m.createElement('div',{style:{marginTop:this.state.response?'10px':'140px',textAlign:'center'}},m.createElement(k,{color:'grey',size:k.Sizes.SMALL})));},_requestResultsImpl:function(){this._cancelInflightRequest();this._inflightTimeStart=Date.now();if(this.state.response&&(!this.state.response.resultNextCursor||!this.props.query))return;var t;this.setState({isLoading:true});if(this.props.query){t=h.getContentForQuery({query:this.props.query,resume:this.state.response?this.state.response.resultNextCursor:undefined,callback:this._handleAsyncResponse});}else t=h.getTrending(this._handleAsyncResponse,this.state.response?this.state.response.resultNextCursor:undefined);this._inflightRequest=t;},_handleAsyncResponse:function(t){if(this._inflightRequest===t.request){r=babelHelpers._extends({},r,t.payload.attribution);this.setState({isLoading:false,response:t.payload,results:t.payload.resultGroup[0]?this.state.results.concat(t.payload.resultGroup[0].results):this.state.results},(function(){if(this._inflightTimeStart){if(this.props.onResultsLoaded)this.props.onResultsLoaded(Date.now()-this._inflightTimeStart);delete this._inflightTimeStart;}}).bind(this));delete this._inflightRequest;}},_cancelInflightRequest:function(){this.setState({isLoading:false});if(this._inflightRequest){this._inflightRequest.abort();delete this._inflightRequest;delete this._inflightTimeStart;}},_renderResults:function(){if(!this.state.response||!this.state.results.length)return null;return this.state.results.map((function(t,u){var v=i.isWide(t);if(!v&&t.platformFBID.toString()!==j.MessengerAppID){var w=u-this._getPrevWideIndex(u),x=this._getNextWideIndex(u)-u;v=(w<=1||w%2!==0)&&x<=1;}return (m.createElement(i,{isWide:v,key:'result:'+u+':'+t.resultID,onClick:this._handleResultClick,result:t,src:t.media.preview.url}));}).bind(this));},_getPrevWideIndex:function(t){while(t>0){--t;if(i.isWide(this.state.results[t]))return t;}return t;},_getNextWideIndex:function(t){var u=this.state.results.length;while(t<u-1){++t;if(i.isWide(this.state.results[t]))return t;}return t;},_handleResultClick:function(t){this.props.onSelect(t,r[t.platformFBID]);},_handleScroll:function(){if(this._isScrolledNearBottom()&&!this._inflightRequest)this._requestResults();},_isScrolledNearBottom:function(){var t=this.refs.scrollable.getArea();return !!(t&&t.distanceToBottom()<=50);},_resetImpl:function(t){this.setState(this.getInitialState(),t);}});f.exports=s;},null);