/*!CK:3721101644!*//*1453173363,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["a7RDT"]); }

__d('SubscriptionLevels',[],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={ALL:'162318810514679',DEFAULT:'271670892858696',TOP:'266156873403755'};f.exports=h;},null);
__d('EditSubscriptions',['Arbiter','AsyncRequest','CSS','DOM','Event','FeedBlacklistButton','MenuDeprecated','Parent','SubscriptionLevels','arrayContains','csx','cx','ge','getOrCreateDOMID'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=45,w=[p.ALL,p.DEFAULT,p.TOP],x={},y={},z={},aa={},ba={},ca={},da={},ea={},fa={},ga={},ha={},ia="/ajax/follow/follow_profile.php",ja="/ajax/follow/unfollow_profile.php",ka="/ajax/settings/notifications/notify_me.php",la={},ma={},na={},oa=null,pa={};function qa(ob){return q(w,ob);}function ra(ob,pb,qb,rb){var sb=o.byClass(rb,'uiMenuItem')||o.bySelector(rb,"._54ni"),tb=u(ob);if(!sb||!k.contains(ob,sb)){return;}else if(j.hasClass(sb,'SubscribeMenuSubscribeCheckbox')){if(z[pb]){wa(tb,pb);}else va(tb,pb);return false;}else if(j.hasClass(sb,'SubscribeMenuUnsubscribe')){wa(tb,pb);return false;}else if(j.hasClass(sb,'SubscribeMenuSettingsItem')){ib(ob,true);return false;}else if(j.hasClass(sb,'SubscriptionMenuGoBack')){ib(ob,false);return false;}else if(j.hasClass(sb,'SubscriptionMenuItem')){ta(ob,pb,qb,sb);return false;}else if(j.hasClass(sb,'SubscribeMenuNotifyMeCheckbox')){sa(ob,pb);return false;}}function sa(ob,pb){if(aa[pb]){mb(ob,pb);}else lb(ob,pb);}function ta(ob,pb,qb,rb){if(j.hasClass(rb,'SubscriptionMenuLevel')){if(n.isItemChecked(rb))return;gb(ob,pb,za(rb),true,qb);}else if(j.hasClass(rb,'SubscriptionMenuCategory')){db(pb,rb,!n.isItemChecked(rb),true,qb);}else if(j.hasClass(rb,'SubscriptionAppStory'))fb(pb,rb,!n.isItemChecked(rb),qb);}function ua(ob){return pa[ob]?pa[ob]:0;}function va(ob,pb){var qb={profile_id:pb};h.inform('FollowingUser',qb);h.inform(m.UNBLACKLIST,qb);new i().setURI(ia).setMethod('POST').setData({profile_id:pb,location:ua(ob)}).setErrorHandler(h.inform.bind(null,'FollowUserFail',qb)).send();}function wa(ob,pb){var qb={profile_id:pb};h.inform('UnfollowingUser',qb);h.inform(m.BLACKLIST,qb);new i().setURI(ja).setMethod('POST').setData({profile_id:pb,location:ua(ob)}).setErrorHandler(h.inform.bind(null,'UnfollowUserFail',qb)).send();}function xa(ob,pb,qb){var rb={profile_id:ob,level:ea[ob],custom_categories:fa[ob],location:qb};new i().setURI('/ajax/follow/manage_subscriptions.php').setData(rb).send();}function ya(ob,pb){var qb=fa[pb]||[],rb=n.getItems(ob);rb.forEach(function(sb){if(j.hasClass(sb,'SubscriptionMenuCategory')){var tb=za(sb);if(q(qb,tb)){bb(sb);}else cb(sb);}else if(j.hasClass(sb,'SubscriptionAppStory')){var ub=za(sb);if(na[pb]&&na[pb][ub]){bb(sb);}else cb(sb);}});gb(ob,pb,ea[pb],false);}function za(ob){var pb=k.scry(ob,'input')[0];return pb&&pb.value;}function ab(ob){return k.find(ob,'a.itemAnchor');}function bb(ob){j.addClass(ob,'checked');ab(ob).setAttribute('aria-checked',true);}function cb(ob){j.removeClass(ob,'checked');ab(ob).setAttribute('aria-checked',false);}function db(ob,pb,qb,rb,sb){if(qb){bb(pb);}else cb(pb);var tb=za(pb);if(qa(tb)){qb&&eb(ob,tb);}else if(qb){if(!q(fa[ob],tb))fa[ob].push(tb);}else{var ub=fa[ob].indexOf(tb);if(ub!==-1)fa[ob].splice(ub,1);}if(rb)xa(ob,tb,sb);}function eb(ob,pb){ea[ob]=pb;h.inform('SubscriptionLevelUpdated',{profile_id:ob,level:pb});}function fb(ob,pb,qb,rb){var sb='/ajax/feed/filter_action/',tb=za(pb),ub={actor_id:ob,app_id:tb};if(qb){bb(pb);sb+='resubscribe_user_app/';ub.action='resubscribe_user_app';if(!na[ob])na[ob]={};na[ob][tb]=true;}else{cb(pb);sb+='unsubscribe_user_app_checkbox/';ub.action='unsubscribe_user_app_checkbox';if(na[ob])na[ob][tb]=false;}new i().setURI(sb).setData(ub).send();}function gb(ob,pb,qb,rb,sb){var tb=k.scry(ob,'.SubscriptionMenuLevel'),ub=null;tb.forEach(function(vb){if(za(vb)==qb){ub=vb;}else if(n.isItemChecked(vb))db(pb,vb,false,false);});ub&&db(pb,ub,true,rb,sb);}function hb(ob,pb,qb){z[pb]=qb;j.conditionClass(ob,'isUnsubscribed',!qb);var rb=k.scry(ob,'li.SubscribeMenuSubscribeCheckbox');if(rb.length!==0){var sb=rb[0];if(qb){bb(sb);}else cb(sb);}}function ib(ob,pb){j.conditionClass(ob,'subscriptionMenuOpen',pb);}function jb(ob,pb,qb){var rb=k.find(ob,".FriendListSubscriptionsMenu"),sb=k.find(rb,".uiMenuInner");if(oa!=null)oa.forEach(function(tb){sb.removeChild(tb);});qb.forEach(function(tb){sb.appendChild(tb);});oa=qb;}h.subscribe('UnfollowUser',function(ob,pb){if(ga[pb.profile_id]){eb(pb.profile_id,ga[pb.profile_id]);fa[pb.profile_id]=ha[pb.profile_id].slice();}});h.subscribe('UpdateSubscriptionLevel',function(ob,pb){var qb=pb.profile_id+'',rb=pb.level+'';eb(qb,rb);var sb;for(sb in x)if(x[sb]===qb){var tb=t(sb);tb&&gb(tb,qb,rb,false);}});h.subscribe('listeditor/close_editor',function(){var ob;for(ob in x){var pb=t(ob);pb&&ib(pb,false);}});function kb(ob,pb,qb){aa[pb]=qb;var rb=ma[pb];if(rb){if(qb){rb.select();}else rb.deselect();return;}var sb=k.scry(ob,'li.SubscribeMenuNotifyMeCheckbox');if(sb.length!==0){var tb=sb[0];j.conditionShow(tb,true);var ub=k.scry(ob,'li.SubscribeMenuNotifyMeCheckboxSeparator');if(ub.length>0)j.conditionShow(ub[0],true);if(qb){bb(tb);}else cb(tb);}}function lb(ob,pb){var qb={profile_id:pb};h.inform('EnableNotifsForUser',qb);new i().setURI(ka).setMethod('POST').setData({notifier_id:pb,enable:true}).setErrorHandler(h.inform.bind(null,'EnableNotifsForUserFail',qb)).send();}function mb(ob,pb){var qb={profile_id:pb};h.inform('DisableNotifsForUser',qb);new i().setURI(ka).setMethod('POST').setData({notifier_id:pb,enable:false}).setErrorHandler(h.inform.bind(null,'DisableNotifsForUserFail',qb)).send();}var nb={init:function(ob,pb,qb){var rb=u(ob);pa[rb]=qb;if(!x[rb])l.listen(ob,'click',function(sb){return ra(ob,x[rb],qb,sb.getTarget());});if(qb===v&&la[pb].length)jb(ob,pb,la[pb]);if(ea[pb])ya(ob,pb);x[rb]=pb;j.conditionClass(ob,'NonFriendSubscriptionMenu',!y[pb]);j.conditionClass(ob,'cannotSubscribe',!ba[pb]);j.conditionClass(ob,'noSubscriptionLevels',ca[pb]&&!da[pb]);j.conditionClass(ob,'noSubscribeCheckbox',!y[pb]&&!ca[pb]);hb(ob,pb,z[pb]);kb(ob,pb,aa[pb]);h.subscribe(['FollowUser','FollowingUser','UnfollowUserFail'],(function(sb,tb){if(tb.profile_id==pb)hb(ob,pb,true);}).bind(this));h.subscribe(['UnfollowUser','UnfollowingUser','FollowUserFail'],(function(sb,tb){if(tb.profile_id==pb){h.inform('SubMenu/Reset');hb(ob,pb,false);}}).bind(this));h.subscribe(['EnableNotifsForUser','DisableNotifsForUserFail'],(function(sb,tb){if(tb.profile_id==pb)kb(ob,pb,true);}).bind(this));h.subscribe(['DisableNotifsForUser','EnableNotifsForUserFail'],(function(sb,tb){if(tb.profile_id==pb)kb(ob,pb,false);}).bind(this));h.subscribe('listeditor/friend_lists_changed',(function(sb,tb){if(tb.notify_state){var ub=tb.added_uid?tb.added_uid:tb.removed_uid;kb(ob,ub,tb.notify_state.is_notified);}}).bind(this));},getSubscriptions:function(ob){return {level:ea[ob],custom_categories:fa[ob]};},registerTimelineNotifySelector:function(ob,pb){var qb=ob.getInitialMenu(),rb=ob.getContentRoot();qb.forEachItem(function(sb){var tb=sb.getRoot();if(j.hasClass(tb,'SubscribeMenuNotifyMeCheckbox')){ma[pb]=sb;kb(rb,pb,aa[pb]);}});qb.subscribe('itemclick',function(sb,tb){if(tb.item===ma[pb])sa(rb,pb);return true;});},toggleNotificationsOnJoin:function(ob,pb){if(aa[ob]!==pb)sa(null,ob);},setSubscriptions:function(ob,pb,qb,rb,sb,tb,ub,vb,wb,xb,yb,zb){eb(ob,ub+'');y[ob]=pb;z[ob]=qb;ba[ob]=rb;ca[ob]=sb;da[ob]=tb;ga[ob]=wb+'';fa[ob]=vb.map(String);ha[ob]=xb.map(String);la[ob]=zb;aa[ob]=yb;}};f.exports=b.EditSubscriptions||nb;},null);
__d('legacy:EditSubscriptions',['SubscriptionLevels','EditSubscriptions'],function a(b,c,d,e){if(c.__markCompiled)c.__markCompiled();b.SubscriptionLevels=c('SubscriptionLevels');b.EditSubscriptions=c('EditSubscriptions');},3);
__d('DynamicFriendListEducation',['Event','Arbiter','AsyncRequest','Dialog','PageTransitionsRegistrar','arrayContains','createArrayFromMixed','removeFromArray'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o){if(c.__markCompiled)c.__markCompiled();var p,q,r,s,t,u;function v(){r&&r.hide();s&&s.hide();}function w(z){o(q,z);v();t({accept_tag_education:true});}function x(){v();t({nux_cancel:true});}var y={init:function(z,aa){p=z;q=n(aa).map(String);l.registerHandler(function(){v();p=false;t=undefined;q=[];});},showDialog:function(z,aa,ba){if(p&&m(q,z)){v();i.inform('DynamicFriendListEducation/dialogOpen',{uid:aa,flid:z});t=ba;r=new k().setAsync(new j('/ajax/friends/lists/smart_list_education.php').setMethod('GET').setData({flid:z,uid:aa}).setReadOnly(true)).setHandler(w.bind(this,z)).setCloseHandler(function(){i.inform('DynamicFriendListEducation/dialogClosed',{uid:aa,flid:z});}).setCancelHandler(function(){i.inform('DynamicFriendListEducation/dialogCancel',{uid:aa,flid:z});}).show();}else ba();},showContextualDialog:function(z,aa,ba,ca){if(p&&m(q,z)){v();u=ba;t=ca;new j('/ajax/friends/lists/smart_list_contextual_education.php').setMethod('GET').setData({flid:z,uid:aa}).setReadOnly(true).send();}else ca();},setContextualDialog:function(z,aa,ba,ca){s=z;s.setContext(u);s.show();h.listen(aa,'click',w.bind(this,ca));h.listen(ba,'click',x);}};f.exports=y;},null);
__d('FriendStatus',['Arbiter','AsyncRequest','SubscribeButton','arrayContains','createArrayFromMixed','forEachObject'],function a(b,c,d,e,f,g,h,i,j,k,l,m){if(c.__markCompiled)c.__markCompiled();function n(r,s,t){this.id=r;this.update(s,t);}Object.assign(n.prototype,{update:function(r,s){r&&(this.status=r);if(s){this.lists=l(s).map(String);this._informListChange();}},isComplete:function(){return !!this.lists;},addToList:function(r){if(this.lists&&!k(this.lists,r))this.lists.push(r);this._informListChange();},removeFromList:function(r){if(this.lists){var s=this.lists.indexOf(r);s!==-1&&this.lists.splice(s,1);}this._informListChange();},updateList:function(r,s){s?this.addToList(r):this.removeFromList(r);},_informListChange:function(){h.inform('FriendListMembershipChange',{uid:this.id,lists:this.lists});}});Object.assign(n,{ARE_FRIENDS:1,INCOMING_REQUEST:2,OUTGOING_REQUEST:3,CAN_REQUEST:4});var o={},p={};function q(r,s,t){if(!o[t.uid]){o[t.uid]=new n(t.uid,r);}else o[t.uid].update(r);h.inform('FriendRequest/change',{uid:t.uid,status:r});}h.subscribe(['FriendRequest/cancel','FriendRequest/unfriend'],function(r,s){s.profile_id=s.uid;s.connected=false;h.inform(j.UNSUBSCRIBED,s);});h.subscribe(['FriendRequest/cancel','FriendRequest/unfriend','FriendRequest/sendFail'],q.bind(null,n.CAN_REQUEST));h.subscribe(['FriendRequest/confirmFail'],q.bind(null,n.INCOMING_REQUEST));h.subscribe(['FriendRequest/cancelFail','FriendRequest/sent','FriendRequest/sending'],q.bind(null,n.OUTGOING_REQUEST));h.subscribe(['FriendRequest/confirm','FriendRequest/confirming'],q.bind(null,n.ARE_FRIENDS));Object.assign(n,{CLOSE_FRIENDS:null,ACQUAINTANCES:null,getFriend:function(r,s){if(o[r]&&o[r].isComplete()){s(o[r]);}else if(p[r]){p[r].push(s);}else{p[r]=[s];new i().setURI("/ajax/friends/status.php").setData({friend:r}).setHandler(function(t){var u=t.getPayload();setTimeout(n.initFriend.bind(n,r,u.status,u.lists),0);}).send();}},initFriend:function(r,s,t){var u=o[r]||new n(r);u.update(u.status||s,u.lists||t);o[r]=u;p[r]&&p[r].forEach(function(v){v(u);});p[r]=null;},setSpecialLists:function(r){var s=n.CLOSE_FRIENDS===null;n.CLOSE_FRIENDS=r.close+'';n.ACQUAINTANCES=r.acq+'';if(s)m(o,function(t,u){t._informListChange();});}});f.exports=n;},null);
__d('FriendEditLists',['Arbiter','AsyncRequest','CSS','DOMQuery','DynamicFriendListEducation','EditSubscriptions','FriendStatus','MenuDeprecated','Parent','ScrollableArea','URI','$','arrayContains','ge'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){if(c.__markCompiled)c.__markCompiled();var v=5,w={},x='/ajax/profile/removefriendconfirm.php',y='/ajax/friends/requests/cancel.php',z='/ajax/choose/',aa='/profile.php',ba,ca,da,ea,fa={profile_browser:43,fbx_top_bar:1,hovercard:5};function ga(ra,sa,ta){var ua=w[ra.id],va=function(wa){var xa={action:ta?'add_list':'del_list',to_friend:ua.id,friendlists:[sa],source:ba};if(wa)Object.assign(xa,wa);ua.updateList(sa,ta);var ya;if(ta&&sa==n.CLOSE_FRIENDS){ya=ja(ra,n.ACQUAINTANCES);if(o.isItemChecked(ya)){o.toggleItem(ya);ga(ra,n.ACQUAINTANCES,false);}}else if(ta&&sa==n.ACQUAINTANCES){ya=ja(ra,n.CLOSE_FRIENDS);if(o.isItemChecked(ya)){o.toggleItem(ya);ga(ra,n.CLOSE_FRIENDS,false);}}var za={flid:sa,uid:ua.id},ab=ta?'FriendListHovercard/add':'FriendListHovercard/remove';h.inform(ab,za);new i().setURI('/ajax/add_friend/action.php').setData(xa).send();};if(ta){l.showDialog(sa,ua.id,va);}else va();}function ha(ra){var sa=k.scry(ra,'input')[0];return sa&&sa.value;}function ia(ra,sa,ta){if(j.hasClass(ta,'async_saving'))return;var ua={uid:sa.id};new i().setURI(y).setMethod('POST').setData({friend:sa.id,cancel_ref:da,floc:ea}).setHandler(h.inform.bind(h,'FriendRequest/cancel',ua)).setErrorHandler(h.inform.bind(h,'FriendRequest/cancelFail',ua)).setStatusElement(ta).send();}function ja(ra,sa){var ta=o.getItems(ra);for(var ua=0;ua<ta.length;ua++)if(ha(ta[ua])==sa)return ta[ua];return null;}function ka(ra,sa){var ta=o.getItems(ra);ta.forEach(function(ua){var va=ha(ua),wa=t(sa.lists,va);if(o.isItemChecked(ua)!==wa)o.toggleItem(ua);});}function la(ra){var sa=o.getItems(ra),ta=!j.hasClass(ra,'followButtonFlyout')&&!j.hasClass(ra,'likeButtonFlyout'),ua=[],va=[],wa=0,xa=0;sa.forEach(function(cb){if(j.hasClass(cb,'neverHide')){j.removeClass(cb,'underShowMore');wa++;}else if(o.isItemChecked(cb)){ua.push(cb);}else if(j.hasClass(cb,'neverShow')||j.hasClass(cb,'FriendListCreateTrigger')||!ta&&j.hasClass(cb,'friendOptionsOnly')){j.addClass(cb,'underShowMore');xa++;}else va.push(cb);});var ya=v-wa,za=ua.concat(va),ab=xa;za.forEach(function(cb){if(j.hasClass(cb,'ShowMoreItem')){ya--;return;}if(ya){j.removeClass(cb,'underShowMore');ya--;}else{j.addClass(cb,'underShowMore');ab=true;}});j.conditionClass(ra,'hasMoreFriendListItems',ab);var bb=k.scry(ra,'.FriendListMenuShowMore');bb.forEach(function(cb){j.removeClass(cb,'FriendListMenuShowMore');});}function ma(ra,sa){j.conditionClass(ra,'FriendListMemorializedUser',sa);}function na(ra,sa){j.conditionClass(ra,'FriendListCannotSuggestFriends',!sa);}function oa(ra,sa){var ta=k.scry(ra,'.FriendListUnfriend')[0],ua=k.scry(ra,'.FriendListCancel')[0],va=k.scry(ra,'.FriendListSuggestFriends')[0],wa=k.scry(ra,'.FriendListFriendship')[0];if(ua)j.conditionShow(ua,sa.status==n.OUTGOING_REQUEST);if(ta){j.conditionShow(ta,sa.id!==undefined&&sa.status===n.ARE_FRIENDS);var xa=k.find(ta,'a');xa.setAttribute('ajaxify',new r(x).addQueryData({uid:sa.id,unref:ca,floc:ea}).toString());}else j.conditionClass(ra,'NoFriendListActionSeparator',!ua||sa.status!=n.OUTGOING_REQUEST);if(va)k.find(va,'a').setAttribute('href',new r(z).addQueryData({type:'suggest_friends',newcomer:sa.id,ref:'profile_others_dropdown'}).toString());if(wa){j.conditionShow(wa,sa.status==n.ARE_FRIENDS);k.find(wa,'a').setAttribute('href',new r(aa).addQueryData({and:sa.id}).toString());}}function pa(ra,sa,ta){var ua=k.scry(ra,'div.FriendListSubscriptionsMenu');if(ua.length!==0)m.init(ra,sa,ta);}h.subscribe('FriendRequest/change',function(ra,sa){for(var ta in w){var ua=u(ta),va=w[ta];if(ua&&va&&va.id==sa.uid){ka(ua,va);oa(ua,va);la(ua);}}});o.subscribe('select',function(ra,sa){if(j.hasClass(sa.item,'ShowMoreItem')&&j.hasClass(sa.menu,'FriendListMenu')){j.addClass(sa.menu,'FriendListMenuShowMore');q.poke(sa.item);}});var qa={init:function(ra,sa,ta,ua,va,wa,xa,ya){ra=s(ra);ba=ta;ca=wa;da=xa;ea=ya;var za=fa[ta]||45;if(!w[ra.id])o.subscribe('select',function(ab,bb){if(k.contains(ra,bb.item))if(p.byClass(bb.item,'FriendListItem')){o.toggleItem(bb.item);var cb=ha(bb.item);ga(ra,cb,o.isItemChecked(bb.item));}else if(p.byClass(bb.item,'FriendListCancel')){ia(ra,w[ra.id],bb.item);}else if(p.byClass(bb.item,'FriendListUnfriend'))h.inform('FriendEditLists/unfriend');});j.addClass(ra,'async_saving');n.getFriend(sa,(function(ab){ma(ra,ua);na(ra,va);ka(ra,ab);oa(ra,ab);w[ra.id]=ab;la(ra);pa(ra,sa,za);j.removeClass(ra,'async_saving');}).bind(this));}};f.exports=b.FriendEditLists||qa;},null);
__d('FriendListFlyoutController',['Event','Arbiter','AsyncRequest','Button','ContextualLayer','CSS','DataStore','Dialog','DOM','DOMQuery','FriendEditLists','FriendStatus','Keys','Layer','LayerHideOnEscape','LayerTabIsolation','MenuDeprecated','Parent','ScrollableArea','Style','TabbableElements','UserAgent_DEPRECATED','cx','emptyFunction'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea){if(c.__markCompiled)c.__markCompiled();var fa,ga,ha,ia=null,ja=null,ka,la,ma,na,oa,pa,qa=1500,ra,sa=false,ta=['uiButtonConfirm','uiButtonSpecial',"_42gz","_42g-","_4jy2","_51tl","_4jy1"],ua={init:function(yb,zb){ua.init=ea;fa=yb;fa.subscribe('mouseenter',db);fa.subscribe('mouseleave',function(){if(!sa)tb();});fa.subscribe('hide',fb);fa.enableBehavior(w);fa.enableBehavior(v);ra=zb;if(ia)p.setContent(fa.getContent(),[ia,ja]);var ac=function(cc){var dc=y.byClass(cc.getTarget(),'enableFriendListFlyout');if(dc){sa=true;if(ka!==dc){ha&&vb();sb(dc);}}else if(sa)vb();},bc=function(cc){var dc=y.byClass(cc.getTarget(),'enableFriendListFlyout');if(dc)if(ka===dc){clearTimeout(na);}else{ha&&vb();sb(dc);}};h.listen(document.documentElement,{click:ac,mouseover:bc,keydown:function(event){var cc=event.getTarget();if(event.getModifiers().any)return;if(!ha||q.isNodeOfType(cc,['input','textarea']))return;var dc=h.getKeyCode(event),ec;switch(dc){case t.UP:case t.DOWN:var fc=cb();ec=ab(fc);ya(fc[ec+(dc===t.UP?-1:1)]);return false;case t.SPACE:var gc=za(cc);if(gc){va(gc);event.prevent();}break;default:var hc=String.fromCharCode(dc).toLowerCase(),ic=cb();ec=ab(ic);var jc=ec,kc=ic.length;while(~ec&&(jc=++jc%kc)!==ec||!~ec&&++jc<kc){var lc=x.getItemLabel(ic[jc]);if(lc&&lc.charAt(0).toLowerCase()===hc){ya(ic[jc]);return false;}}}}});i.subscribe('FriendEditLists/unfriend',vb);i.subscribe('FriendRequest/cancel',vb);i.subscribe('DynamicFriendListEducation/dialogOpen',function(){pa=true;});i.subscribe('DynamicFriendListEducation/dialogClosed',function(){pa=false;tb();});},initContent:function(yb){p.appendContent(document.body,yb);gb(yb);setTimeout(function(){if(!ia){ia=yb;fa&&p.setContent(fa.getContent(),[ia,ja]);m.show(ia);h.listen(ia,'click',wb);ha&&pb(ka);}else{p.remove(yb);yb=null;}},0);},initNux:function(yb){if(ja)return;ja=yb;fa&&p.setContent(fa.getContent(),[ia,ja]);},show:function(yb){qb(yb);},hide:function(yb){yb===false?vb():tb();},setActiveNode:function(yb){ha&&vb();ka=yb;la=h.listen(yb,'mouseleave',function(){ka=null;la&&la.remove();});},setCloseListener:function(yb,zb){n.set(yb,'flfcloselistener',zb);if(ka!=yb)n.set(yb,'flfcloselistenertimeout',setTimeout(xb.bind(null,yb),qa));},setCloseListenerTimeout:function(yb){qa=yb;}};function va(yb){ca.firefox()&&xa(yb).blur();x.inform('select',{menu:wa(yb),item:yb});}function wa(yb){if(m.hasClass(yb,'uiMenuContainer'))return yb;return y.byClass(yb,'uiMenu');}function xa(yb){return q.find(yb,'a.itemAnchor');}function ya(yb){if(yb&&bb(yb)){x._removeSelected(fa.getContent());m.addClass(yb,'selected');xa(yb).focus();}}function za(yb){return y.byClass(yb,'uiMenuItem');}function ab(yb){if(document.activeElement){var zb=za(document.activeElement);return yb.indexOf(zb);}return -1;}function bb(yb){return !m.hasClass(yb,'disabled')&&aa.get(yb,'display')!=='none'&&aa.get(y.byClass(yb,'uiMenu'),'display')!=='none';}function cb(){return x.getItems(fa.getContent()).filter(bb);}function db(){clearTimeout(na);}function eb(yb){for(var zb=0;zb<ta.length;zb++)if(m.hasClass(yb,ta[zb]))return false;return true;}function fb(){if(ka){if(eb(ka)){m.removeClass(ka,"_52nd");if(m.hasClass(ka,'uiButton')||m.hasClass(ka,"_42fu"))m.removeClass(ka,'selected');}if(n.get(ka,'flfcloselistener')){var yb=ka;n.set(ka,'flfcloselistenertimeout',setTimeout(xb.bind(null,yb),qa));}}ha=false;ob();ka=null;}function gb(yb){var zb=q.scry(yb,'[tabindex="0"]');zb.forEach(function(ac){ac.tabIndex='-1';});zb[0]&&(zb[0].tabIndex='0');}function hb(yb){if(q.isNodeOfType(yb,'label')&&m.hasClass(yb,'uiButton'))yb=k.getInputElement(yb);return yb;}function ib(yb){return n.get(hb(yb),'profileid');}function jb(yb){return n.get(hb(yb),'memorialized')==='true';}function kb(yb){return n.get(hb(yb),'cansuggestfriends')==='true';}function lb(yb){return n.get(hb(yb),'unref');}function mb(yb){return n.get(hb(yb),'cancelref');}function nb(yb){return n.get(hb(yb),'floc');}function ob(){la&&la.remove();la=null;oa&&u.unsubscribe(oa);oa=null;na&&clearTimeout(na);na=null;}function pb(yb){var zb=ib(yb),ac=jb(yb),bc=kb(yb),cc=n.get(yb,'flloc'),dc=lb(yb),ec=mb(yb),fc=nb(yb);r.init(ia,zb,cc,ac,bc,dc,ec,fc);m.conditionClass(ia,'followButtonFlyout',m.hasClass(yb,'profileFollowButton'));m.conditionClass(ia,'friendButtonFlyout',m.hasClass(yb,'FriendRequestFriends')||m.hasClass(yb,'FriendRequestIncoming')||m.hasClass(yb,'FriendRequestOutgoing'));m.conditionClass(ia,'likeButtonFlyout',m.hasClass(yb,'profileLikeButton'));var gc=q.scry(ia,'div.uiScrollableArea')[0];gc&&z.poke(gc);var hc=ba.find(ia)[0];hc&&hc.focus();}function qb(yb){if(!fa||ha)return;fa.setContext(yb);fa.setCausalElement(yb);yb.setAttribute('aria-expanded','true');if(eb(yb)){m.addClass(yb,"_52nd");if(m.hasClass(yb,'uiButton')||m.hasClass(yb,"_42fu"))m.addClass(yb,'selected');}fa.show();ka=yb;ha=true;var zb=null;if(ia){zb='show';pb(yb);}else{zb='init_show';new j().setURI('/ajax/friends/lists/flyout_content.php').setStatusElement(fa.getContent()).send();}ob();la=h.listen(yb,'mouseleave',tb);oa=u.subscribe('show',rb);if(n.get(yb,'flfcloselistener'))clearTimeout(n.remove(yb,'flfcloselistenertimeout'));var ac=ib(yb);s.getFriend(ac,function(bc){if(bc.status==s.ARE_FRIENDS)new j().setURI('/ajax/friends/lists/flyout_log.php').setData({target_id:ib(yb),unref:lb(yb),action:zb}).send();if(!ja)return;if(bc.status==s.OUTGOING_REQUEST){m.show(ja);j.bootstrap('/ajax/friends/lists/nux_flyout.php',null,true);}else m.hide(ja);});if(!ga||yb.id!==ga.id){i.inform('listeditor/close_editor');i.inform('friend-list/close_editor');}ga=yb;}function rb(yb,zb){if(!(zb instanceof l)||!q.contains(ka,zb.getContext()))tb();}function sb(yb){ka=yb;ma=setTimeout(qb.bind(null,yb),ra);la=h.listen(yb,'mouseleave',function(){clearTimeout(ma);ka=null;la&&la.remove();});}function tb(){na=setTimeout(vb,150);}function ub(){var yb=o.getCurrent(),zb=yb&&yb.getBody();return !!(zb&&q.scry(zb,'.friendListDialogTourCarousel')[0]);}function vb(){if(pa||ub())return;sa=false;if(fa){fa.hide();var yb=fa.getCausalElement();yb&&yb.setAttribute('aria-expanded','false');}}function wb(event){var yb=y.byTag(event.getTarget(),'a');if(yb&&m.hasClass(yb,'FriendListActionItem'))tb();}function xb(yb){var zb=n.remove(yb,'flfcloselistener');zb&&zb();}f.exports=b.FriendListFlyoutController||ua;},null);
__d('AddFriendButton',['Event','Animation','Arbiter','AsyncRequest','AsyncResponse','collectDataAttributes','CSS','DOMQuery','FriendListFlyoutController','FriendStatus','ge','goURI','Style','SubscribeButton','URI','XPubcontentChainedSuggestionsController'],function a(b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w){if(c.__markCompiled)c.__markCompiled();var x={ERROR_ALREADY_ADDED:1431005,init:function(y,z,aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma){var na=y.id,oa=null,pa=o.scry(y,'.addButton')[0],qa=o.scry(y,'.addFriendText')[0],ra=o.scry(y,'.outgoingButton')[0],sa=o.scry(y,'.incomingButton')[0],ta=o.scry(y,'.friendButton')[0],ua=o.scry(y.parentNode,'.suggestFriendsButton')[0];function va(cb,db,eb){var fb=new v(pa.getAttribute('ajaxify')),gb=m(y,['ft','gt']);new k().setURI(da).setData({to_friend:z,action:cb,how_found:ba,ref_param:ca,link_data:gb,outgoing_id:ra.id,xids:fb.getQueryData().xids,logging_location:ea,no_flyout_on_click:fa,ego_log_data:ga,http_referer:ia,floc:ka,frefs:la}).setErrorHandler(db).setServerDialogCancelHandler(eb).setRelativeTo(ra).send();if(ja&&cb==='add_friend'){var hb=w.getURIBuilder().setInt('friendid',z).getURI();new k().setURI(hb).send();}j.inform(u.SUBSCRIBED,{profile_id:z.toString(),connected:true,chaining:false});}function wa(cb,db){if(qa){n.hide(qa);}else if(pa){if(ma)n.hide(ma);n.hide(pa);}ra&&n.hide(ra);sa&&n.hide(sa);ta&&n.hide(ta);if(cb){n.show(cb);if(ma&&'Requestable'===db)n.show(ma);}if('Outgoing'==db&&oa!=db&&ha)new i(cb).from('backgroundColor','#FFF8CC').to('backgroundColor','transparent').from('borderColor','#FFE222').to('borderColor',t.get(cb,'borderLeftColor')).duration(2000).go();if('Requestable'==db&&oa!=db)ua&&n.hide(ua);oa&&n.removeClass(y,'fStatus'+oa);oa=db;n.addClass(y,'fStatus'+db);}function xa(cb){if(n.hasClass(cb,'enableFriendListFlyout')){p.show(cb);}else p.hide();}var ya=j.subscribe('FriendRequest/change',function(cb,db){bb();if(db.uid!=z)return;switch(db.status){case q.ARE_FRIENDS:return wa(ta,'Friends');case q.INCOMING_REQUEST:return wa(sa,'Incoming');case q.OUTGOING_REQUEST:return wa(ra,'Outgoing');case q.CAN_REQUEST:return wa(qa?qa:pa,'Requestable');}}),za=j.subscribe('FriendRequest/unfriend',function(cb,db){bb();if(db.uid===z&&db.shouldHideButton===true)n.hide(pa);}),ab;if(aa)ab=j.subscribe('FriendRequest/confirm',function(cb,db){bb();db.uid==z&&s(aa);});pa&&h.listen(pa,'click',function(){j.inform('FriendRequest/sending',{uid:z});if(fa){p.setActiveNode(ra);}else xa(ra);va("add_friend",function(cb){var db=cb.error==x.ERROR_ALREADY_ADDED?'FriendRequest/sent':'FriendRequest/sendFail';j.inform(db,{uid:z});p.hide();l.defaultErrorHandler(cb);},function(cb){j.inform('FriendRequest/sendFail',{uid:z});p.hide();});});function bb(){if(r(na))return;ya&&ya.unsubscribe();ab&&ab.unsubscribe();za&&za.unsubscribe();ya=null;ab=null;za=null;}}};f.exports=x;},null);
__d('FriendButtonIcon',['Arbiter','FriendStatus','Button','arrayContains'],function a(b,c,d,e,f,g,h,i,j,k){if(c.__markCompiled)c.__markCompiled();f.exports={register:function(l,m,n){h.subscribe('FriendListMembershipChange',function(o,p){if(p.uid==n){var q=k(p.lists,i.CLOSE_FRIENDS),r=k(p.lists,i.ACQUAINTANCES);if(q&&!r){j.setIcon(l,m.close);}else if(r&&!q){j.setIcon(l,m.acquaintance);}else j.setIcon(l,m.friend);}});}};},null);