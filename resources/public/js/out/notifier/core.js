// Compiled by ClojureScript 0.0-2307
goog.provide('notifier.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs_http.client');
goog.require('cljs_http.client');
goog.require('om.dom');
goog.require('om.dom');
goog.require('om.core');
goog.require('om.core');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
cljs.core.enable_console_print_BANG_.call(null);
notifier.core.fetch_widgets = (function fetch_widgets(url){var c = cljs.core.async.chan.call(null);var c__6367__auto___9709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___9709,c){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___9709,c){
return (function (state_9695){var state_val_9696 = (state_9695[(1)]);if((state_val_9696 === (6)))
{var inst_9693 = (state_9695[(2)]);var state_9695__$1 = state_9695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9695__$1,inst_9693);
} else
{if((state_val_9696 === (5)))
{var inst_9689 = (state_9695[(2)]);var inst_9690 = cljs.core.get.call(null,inst_9689,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_9691 = cljs.core.vec.call(null,inst_9690);var state_9695__$1 = state_9695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9695__$1,(6),c,inst_9691);
} else
{if((state_val_9696 === (4)))
{var inst_9683 = (state_9695[(7)]);var state_9695__$1 = state_9695;var statearr_9697_9710 = state_9695__$1;(statearr_9697_9710[(2)] = inst_9683);
(statearr_9697_9710[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9696 === (3)))
{var inst_9683 = (state_9695[(7)]);var inst_9686 = cljs.core.apply.call(null,cljs.core.hash_map,inst_9683);var state_9695__$1 = state_9695;var statearr_9698_9711 = state_9695__$1;(statearr_9698_9711[(2)] = inst_9686);
(statearr_9698_9711[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9696 === (2)))
{var inst_9683 = (state_9695[(7)]);var inst_9683__$1 = (state_9695[(2)]);var inst_9684 = cljs.core.seq_QMARK_.call(null,inst_9683__$1);var state_9695__$1 = (function (){var statearr_9699 = state_9695;(statearr_9699[(7)] = inst_9683__$1);
return statearr_9699;
})();if(inst_9684)
{var statearr_9700_9712 = state_9695__$1;(statearr_9700_9712[(1)] = (3));
} else
{var statearr_9701_9713 = state_9695__$1;(statearr_9701_9713[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9696 === (1)))
{var inst_9681 = cljs_http.client.get.call(null,url);var state_9695__$1 = state_9695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9695__$1,(2),inst_9681);
} else
{return null;
}
}
}
}
}
}
});})(c__6367__auto___9709,c))
;return ((function (switch__6352__auto__,c__6367__auto___9709,c){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9705 = [null,null,null,null,null,null,null,null];(statearr_9705[(0)] = state_machine__6353__auto__);
(statearr_9705[(1)] = (1));
return statearr_9705;
});
var state_machine__6353__auto____1 = (function (state_9695){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9695);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9706){if((e9706 instanceof Object))
{var ex__6356__auto__ = e9706;var statearr_9707_9714 = state_9695;(statearr_9707_9714[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9695);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9706;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9715 = state_9695;
state_9695 = G__9715;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9695){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___9709,c))
})();var state__6369__auto__ = (function (){var statearr_9708 = f__6368__auto__.call(null);(statearr_9708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___9709);
return statearr_9708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___9709,c))
);
return c;
});
notifier.core.app_state = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
notifier.core.widget = (function widget(p__9716,owner,opts){var map__9721 = p__9716;var map__9721__$1 = ((cljs.core.seq_QMARK_.call(null,map__9721))?cljs.core.apply.call(null,cljs.core.hash_map,map__9721):map__9721);var name = cljs.core.get.call(null,map__9721__$1,new cljs.core.Keyword(null,"name","name",1843675177));if(typeof notifier.core.t9722 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t9722 = (function (name,map__9721,opts,owner,p__9716,widget,meta9723){
this.name = name;
this.map__9721 = map__9721;
this.opts = opts;
this.owner = owner;
this.p__9716 = p__9716;
this.widget = widget;
this.meta9723 = meta9723;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t9722.cljs$lang$type = true;
notifier.core.t9722.cljs$lang$ctorStr = "notifier.core/t9722";
notifier.core.t9722.cljs$lang$ctorPrWriter = ((function (map__9721,map__9721__$1,name){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t9722");
});})(map__9721,map__9721__$1,name))
;
notifier.core.t9722.prototype.om$core$IRender$ = true;
notifier.core.t9722.prototype.om$core$IRender$render$arity$1 = ((function (map__9721,map__9721__$1,name){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return React.DOM.li(null,self__.name);
});})(map__9721,map__9721__$1,name))
;
notifier.core.t9722.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9721,map__9721__$1,name){
return (function (_9724){var self__ = this;
var _9724__$1 = this;return self__.meta9723;
});})(map__9721,map__9721__$1,name))
;
notifier.core.t9722.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9721,map__9721__$1,name){
return (function (_9724,meta9723__$1){var self__ = this;
var _9724__$1 = this;return (new notifier.core.t9722(self__.name,self__.map__9721,self__.opts,self__.owner,self__.p__9716,self__.widget,meta9723__$1));
});})(map__9721,map__9721__$1,name))
;
notifier.core.__GT_t9722 = ((function (map__9721,map__9721__$1,name){
return (function __GT_t9722(name__$1,map__9721__$2,opts__$1,owner__$1,p__9716__$1,widget__$1,meta9723){return (new notifier.core.t9722(name__$1,map__9721__$2,opts__$1,owner__$1,p__9716__$1,widget__$1,meta9723));
});})(map__9721,map__9721__$1,name))
;
}
return (new notifier.core.t9722(name,map__9721__$1,opts,owner,p__9716,widget,null));
});
notifier.core.widget_list = (function widget_list(p__9725){var map__9730 = p__9725;var map__9730__$1 = ((cljs.core.seq_QMARK_.call(null,map__9730))?cljs.core.apply.call(null,cljs.core.hash_map,map__9730):map__9730);var widgets = cljs.core.get.call(null,map__9730__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof notifier.core.t9731 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t9731 = (function (widgets,map__9730,p__9725,widget_list,meta9732){
this.widgets = widgets;
this.map__9730 = map__9730;
this.p__9725 = p__9725;
this.widget_list = widget_list;
this.meta9732 = meta9732;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t9731.cljs$lang$type = true;
notifier.core.t9731.cljs$lang$ctorStr = "notifier.core/t9731";
notifier.core.t9731.cljs$lang$ctorPrWriter = ((function (map__9730,map__9730__$1,widgets){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t9731");
});})(map__9730,map__9730__$1,widgets))
;
notifier.core.t9731.prototype.om$core$IRender$ = true;
notifier.core.t9731.prototype.om$core$IRender$render$arity$1 = ((function (map__9730,map__9730__$1,widgets){
return (function (this__5129__auto__){var self__ = this;
var this__5129__auto____$1 = this;return cljs.core.apply.call(null,om.dom.ul,null,om.core.build_all.call(null,notifier.core.widget,self__.widgets));
});})(map__9730,map__9730__$1,widgets))
;
notifier.core.t9731.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__9730,map__9730__$1,widgets){
return (function (_9733){var self__ = this;
var _9733__$1 = this;return self__.meta9732;
});})(map__9730,map__9730__$1,widgets))
;
notifier.core.t9731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__9730,map__9730__$1,widgets){
return (function (_9733,meta9732__$1){var self__ = this;
var _9733__$1 = this;return (new notifier.core.t9731(self__.widgets,self__.map__9730,self__.p__9725,self__.widget_list,meta9732__$1));
});})(map__9730,map__9730__$1,widgets))
;
notifier.core.__GT_t9731 = ((function (map__9730,map__9730__$1,widgets){
return (function __GT_t9731(widgets__$1,map__9730__$2,p__9725__$1,widget_list__$1,meta9732){return (new notifier.core.t9731(widgets__$1,map__9730__$2,p__9725__$1,widget_list__$1,meta9732));
});})(map__9730,map__9730__$1,widgets))
;
}
return (new notifier.core.t9731(widgets,map__9730__$1,p__9725,widget_list,null));
});
notifier.core.widget_box = (function widget_box(app,owner,opts){if(typeof notifier.core.t9777 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t9777 = (function (opts,owner,app,widget_box,meta9778){
this.opts = opts;
this.owner = owner;
this.app = app;
this.widget_box = widget_box;
this.meta9778 = meta9778;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t9777.cljs$lang$type = true;
notifier.core.t9777.cljs$lang$ctorStr = "notifier.core/t9777";
notifier.core.t9777.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t9777");
});
notifier.core.t9777.prototype.om$core$IRender$ = true;
notifier.core.t9777.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,React.DOM.h1(null,"Widgets"),om.core.build.call(null,notifier.core.widget_list,self__.app));
});
notifier.core.t9777.prototype.om$core$IWillMount$ = true;
notifier.core.t9777.prototype.om$core$IWillMount$will_mount$arity$1 = (function (_){var self__ = this;
var ___$1 = this;om.core.transact_BANG_.call(null,self__.app,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"widgets","widgets",-159098978)], null),((function (___$1){
return (function (){return cljs.core.PersistentVector.EMPTY;
});})(___$1))
);
var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__,___$1){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__,___$1){
return (function (state_9803){var state_val_9804 = (state_9803[(1)]);if((state_val_9804 === (8)))
{var inst_9795 = (state_9803[(2)]);var state_9803__$1 = (function (){var statearr_9805 = state_9803;(statearr_9805[(7)] = inst_9795);
return statearr_9805;
})();var statearr_9806_9820 = state_9803__$1;(statearr_9806_9820[(2)] = null);
(statearr_9806_9820[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9804 === (7)))
{var inst_9785 = (state_9803[(2)]);var inst_9786 = cljs.core.pr_str.call(null,inst_9785);var inst_9787 = console.log(inst_9786);var inst_9788 = cljs.core.PersistentVector.EMPTY_NODE;var inst_9789 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];var inst_9790 = (new cljs.core.PersistentVector(null,1,(5),inst_9788,inst_9789,null));var inst_9791 = om.core.update_BANG_.call(null,self__.app,inst_9790,inst_9785);var inst_9792 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9793 = cljs.core.async.timeout.call(null,inst_9792);var state_9803__$1 = (function (){var statearr_9807 = state_9803;(statearr_9807[(8)] = inst_9791);
(statearr_9807[(9)] = inst_9787);
return statearr_9807;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9803__$1,(8),inst_9793);
} else
{if((state_val_9804 === (6)))
{var inst_9799 = (state_9803[(2)]);var state_9803__$1 = state_9803;var statearr_9808_9821 = state_9803__$1;(statearr_9808_9821[(2)] = inst_9799);
(statearr_9808_9821[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9804 === (5)))
{var state_9803__$1 = state_9803;var statearr_9809_9822 = state_9803__$1;(statearr_9809_9822[(2)] = null);
(statearr_9809_9822[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9804 === (4)))
{var inst_9782 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_9783 = notifier.core.fetch_widgets.call(null,inst_9782);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9803__$1,(7),inst_9783);
} else
{if((state_val_9804 === (3)))
{var inst_9801 = (state_9803[(2)]);var state_9803__$1 = state_9803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9803__$1,inst_9801);
} else
{if((state_val_9804 === (2)))
{var state_9803__$1 = state_9803;var statearr_9810_9823 = state_9803__$1;(statearr_9810_9823[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9804 === (1)))
{var state_9803__$1 = state_9803;var statearr_9812_9824 = state_9803__$1;(statearr_9812_9824[(2)] = null);
(statearr_9812_9824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
});})(c__6367__auto__,___$1))
;return ((function (switch__6352__auto__,c__6367__auto__,___$1){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_9816 = [null,null,null,null,null,null,null,null,null,null];(statearr_9816[(0)] = state_machine__6353__auto__);
(statearr_9816[(1)] = (1));
return statearr_9816;
});
var state_machine__6353__auto____1 = (function (state_9803){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_9803);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e9817){if((e9817 instanceof Object))
{var ex__6356__auto__ = e9817;var statearr_9818_9825 = state_9803;(statearr_9818_9825[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9803);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9817;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9826 = state_9803;
state_9803 = G__9826;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_9803){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_9803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__,___$1))
})();var state__6369__auto__ = (function (){var statearr_9819 = f__6368__auto__.call(null);(statearr_9819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_9819;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__,___$1))
);
return c__6367__auto__;
});
notifier.core.t9777.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9779){var self__ = this;
var _9779__$1 = this;return self__.meta9778;
});
notifier.core.t9777.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9779,meta9778__$1){var self__ = this;
var _9779__$1 = this;return (new notifier.core.t9777(self__.opts,self__.owner,self__.app,self__.widget_box,meta9778__$1));
});
notifier.core.__GT_t9777 = (function __GT_t9777(opts__$1,owner__$1,app__$1,widget_box__$1,meta9778){return (new notifier.core.t9777(opts__$1,owner__$1,app__$1,widget_box__$1,meta9778));
});
}
return (new notifier.core.t9777(opts,owner,app,widget_box,null));
});
notifier.core.om_app = (function om_app(app,owner){if(typeof notifier.core.t9830 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t9830 = (function (owner,app,om_app,meta9831){
this.owner = owner;
this.app = app;
this.om_app = om_app;
this.meta9831 = meta9831;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t9830.cljs$lang$type = true;
notifier.core.t9830.cljs$lang$ctorStr = "notifier.core/t9830";
notifier.core.t9830.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t9830");
});
notifier.core.t9830.prototype.om$core$IRender$ = true;
notifier.core.t9830.prototype.om$core$IRender$render$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return React.DOM.div(null,om.core.build.call(null,notifier.core.widget_box,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)));
});
notifier.core.t9830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9832){var self__ = this;
var _9832__$1 = this;return self__.meta9831;
});
notifier.core.t9830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9832,meta9831__$1){var self__ = this;
var _9832__$1 = this;return (new notifier.core.t9830(self__.owner,self__.app,self__.om_app,meta9831__$1));
});
notifier.core.__GT_t9830 = (function __GT_t9830(owner__$1,app__$1,om_app__$1,meta9831){return (new notifier.core.t9830(owner__$1,app__$1,om_app__$1,meta9831));
});
}
return (new notifier.core.t9830(owner,app,om_app,null));
});
om.core.root.call(null,notifier.core.om_app,notifier.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));

//# sourceMappingURL=core.js.map