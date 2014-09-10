// Compiled by ClojureScript 0.0-2307
goog.provide('notifier.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('om_tools.dom');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
notifier.core.fetch_widgets = (function fetch_widgets(url){var c__10294__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10294__auto__){
return (function (){var f__10295__auto__ = (function (){var switch__10279__auto__ = ((function (c__10294__auto__){
return (function (state_20429){var state_val_20430 = (state_20429[(1)]);if((state_val_20430 === (5)))
{var inst_20425 = (state_20429[(2)]);var inst_20426 = cljs.core.get.call(null,inst_20425,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_20427 = cljs.core.vec.call(null,inst_20426);var state_20429__$1 = state_20429;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20429__$1,inst_20427);
} else
{if((state_val_20430 === (4)))
{var inst_20419 = (state_20429[(7)]);var state_20429__$1 = state_20429;var statearr_20431_20443 = state_20429__$1;(statearr_20431_20443[(2)] = inst_20419);
(statearr_20431_20443[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20430 === (3)))
{var inst_20419 = (state_20429[(7)]);var inst_20422 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20419);var state_20429__$1 = state_20429;var statearr_20432_20444 = state_20429__$1;(statearr_20432_20444[(2)] = inst_20422);
(statearr_20432_20444[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20430 === (2)))
{var inst_20419 = (state_20429[(7)]);var inst_20419__$1 = (state_20429[(2)]);var inst_20420 = cljs.core.seq_QMARK_.call(null,inst_20419__$1);var state_20429__$1 = (function (){var statearr_20433 = state_20429;(statearr_20433[(7)] = inst_20419__$1);
return statearr_20433;
})();if(inst_20420)
{var statearr_20434_20445 = state_20429__$1;(statearr_20434_20445[(1)] = (3));
} else
{var statearr_20435_20446 = state_20429__$1;(statearr_20435_20446[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20430 === (1)))
{var inst_20417 = cljs_http.client.get.call(null,url);var state_20429__$1 = state_20429;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20429__$1,(2),inst_20417);
} else
{return null;
}
}
}
}
}
});})(c__10294__auto__))
;return ((function (switch__10279__auto__,c__10294__auto__){
return (function() {
var state_machine__10280__auto__ = null;
var state_machine__10280__auto____0 = (function (){var statearr_20439 = [null,null,null,null,null,null,null,null];(statearr_20439[(0)] = state_machine__10280__auto__);
(statearr_20439[(1)] = (1));
return statearr_20439;
});
var state_machine__10280__auto____1 = (function (state_20429){while(true){
var ret_value__10281__auto__ = (function (){try{while(true){
var result__10282__auto__ = switch__10279__auto__.call(null,state_20429);if(cljs.core.keyword_identical_QMARK_.call(null,result__10282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10282__auto__;
}
break;
}
}catch (e20440){if((e20440 instanceof Object))
{var ex__10283__auto__ = e20440;var statearr_20441_20447 = state_20429;(statearr_20441_20447[(5)] = ex__10283__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20429);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20440;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20448 = state_20429;
state_20429 = G__20448;
continue;
}
} else
{return ret_value__10281__auto__;
}
break;
}
});
state_machine__10280__auto__ = function(state_20429){
switch(arguments.length){
case 0:
return state_machine__10280__auto____0.call(this);
case 1:
return state_machine__10280__auto____1.call(this,state_20429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10280__auto____0;
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10280__auto____1;
return state_machine__10280__auto__;
})()
;})(switch__10279__auto__,c__10294__auto__))
})();var state__10296__auto__ = (function (){var statearr_20442 = f__10295__auto__.call(null);(statearr_20442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10294__auto__);
return statearr_20442;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10296__auto__);
});})(c__10294__auto__))
);
return c__10294__auto__;
});
notifier.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),cljs.core.PersistentVector.EMPTY], null));
var ufv___20471 = schema.utils.use_fn_validation;var output_schema20450_20472 = schema.core.Any;var input_schema20451_20473 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20452_20474 = schema.core.checker.call(null,input_schema20451_20473);var output_checker20453_20475 = schema.core.checker.call(null,output_schema20450_20472);/**
* Inputs: [{:keys [name]} owner opts]
*/
notifier.core.widget = ((function (ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function widget(G__20454,G__20455,G__20456){var validate__7251__auto__ = ufv___20471.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20476 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20454,G__20455,G__20456], null);var temp__4126__auto___20477 = input_checker20452_20474.call(null,args__7252__auto___20476);if(cljs.core.truth_(temp__4126__auto___20477))
{var error__7253__auto___20478 = temp__4126__auto___20477;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___20478)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20451_20473,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20476,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20478], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__20465 = G__20454;var map__20466 = G__20465;var map__20466__$1 = ((cljs.core.seq_QMARK_.call(null,map__20466))?cljs.core.apply.call(null,cljs.core.hash_map,map__20466):map__20466);var name = cljs.core.get.call(null,map__20466__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner = G__20455;var opts = G__20456;var G__20465__$1 = G__20465;var owner__$1 = owner;var opts__$1 = opts;while(true){
var map__20467 = G__20465__$1;var map__20467__$1 = ((cljs.core.seq_QMARK_.call(null,map__20467))?cljs.core.apply.call(null,cljs.core.hash_map,map__20467):map__20467);var name__$1 = cljs.core.get.call(null,map__20467__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner__$2 = owner__$1;var opts__$2 = opts__$1;if(typeof notifier.core.t20468 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20468 = (function (output_schema20450,owner,G__20465,input_schema20451,map__20466,name,G__20454,input_checker20452,validate__7251__auto__,G__20455,widget,G__20456,opts,map__20467,output_checker20453,ufv__,meta20469){
this.output_schema20450 = output_schema20450;
this.owner = owner;
this.G__20465 = G__20465;
this.input_schema20451 = input_schema20451;
this.map__20466 = map__20466;
this.name = name;
this.G__20454 = G__20454;
this.input_checker20452 = input_checker20452;
this.validate__7251__auto__ = validate__7251__auto__;
this.G__20455 = G__20455;
this.widget = widget;
this.G__20456 = G__20456;
this.opts = opts;
this.map__20467 = map__20467;
this.output_checker20453 = output_checker20453;
this.ufv__ = ufv__;
this.meta20469 = meta20469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20468.cljs$lang$type = true;
notifier.core.t20468.cljs$lang$ctorStr = "notifier.core/t20468";
notifier.core.t20468.cljs$lang$ctorPrWriter = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20468");
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
notifier.core.t20468.prototype.om$core$IDisplayName$ = true;
notifier.core.t20468.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function (_){var self__ = this;
var ___$1 = this;return "widget";
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
notifier.core.t20468.prototype.om$core$IRender$ = true;
notifier.core.t20468.prototype.om$core$IRender$render$arity$1 = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,self__.name,cljs.core.PersistentVector.EMPTY);
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
notifier.core.t20468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function (_20470){var self__ = this;
var _20470__$1 = this;return self__.meta20469;
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
notifier.core.t20468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function (_20470,meta20469__$1){var self__ = this;
var _20470__$1 = this;return (new notifier.core.t20468(self__.output_schema20450,self__.owner,self__.G__20465,self__.input_schema20451,self__.map__20466,self__.name,self__.G__20454,self__.input_checker20452,self__.validate__7251__auto__,self__.G__20455,self__.widget,self__.G__20456,self__.opts,self__.map__20467,self__.output_checker20453,self__.ufv__,meta20469__$1));
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
notifier.core.__GT_t20468 = ((function (map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475){
return (function __GT_t20468(output_schema20450__$1,owner__$3,G__20465__$2,input_schema20451__$1,map__20466__$2,name__$2,G__20454__$1,input_checker20452__$1,validate__7251__auto____$1,G__20455__$1,widget__$1,G__20456__$1,opts__$3,map__20467__$2,output_checker20453__$1,ufv____$1,meta20469){return (new notifier.core.t20468(output_schema20450__$1,owner__$3,G__20465__$2,input_schema20451__$1,map__20466__$2,name__$2,G__20454__$1,input_checker20452__$1,validate__7251__auto____$1,G__20455__$1,widget__$1,G__20456__$1,opts__$3,map__20467__$2,output_checker20453__$1,ufv____$1,meta20469));
});})(map__20467,map__20467__$1,name__$1,owner__$2,opts__$2,G__20465,map__20466,map__20466__$1,name,owner,opts,validate__7251__auto__,ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
}
return (new notifier.core.t20468(output_schema20450_20472,owner__$2,G__20465__$1,input_schema20451_20473,map__20466__$1,name__$1,G__20454,input_checker20452_20474,validate__7251__auto__,G__20455,widget,G__20456,opts__$2,map__20467__$1,output_checker20453_20475,ufv___20471,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20479 = output_checker20453_20475.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20479))
{var error__7253__auto___20480 = temp__4126__auto___20479;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___20480)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20450_20472,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20480], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20471,output_schema20450_20472,input_schema20451_20473,input_checker20452_20474,output_checker20453_20475))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget),schema.core.make_fn_schema.call(null,output_schema20450_20472,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20451_20473], null)));
notifier.core.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__);
});
var __GT_widget__2 = (function (cursor__9028__auto__,m20449){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__,m20449);
});
__GT_widget = function(cursor__9028__auto__,m20449){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget__2.call(this,cursor__9028__auto__,m20449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;
var ufv___20501 = schema.utils.use_fn_validation;var output_schema20482_20502 = schema.core.Any;var input_schema20483_20503 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker20484_20504 = schema.core.checker.call(null,input_schema20483_20503);var output_checker20485_20505 = schema.core.checker.call(null,output_schema20482_20502);/**
* Inputs: [{:keys [widgets]}]
*/
notifier.core.widget_list = ((function (ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function widget_list(G__20486){var validate__7251__auto__ = ufv___20501.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20506 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20486], null);var temp__4126__auto___20507 = input_checker20484_20504.call(null,args__7252__auto___20506);if(cljs.core.truth_(temp__4126__auto___20507))
{var error__7253__auto___20508 = temp__4126__auto___20507;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___20508)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20483_20503,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20506,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20508], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__20495 = G__20486;var map__20496 = G__20495;var map__20496__$1 = ((cljs.core.seq_QMARK_.call(null,map__20496))?cljs.core.apply.call(null,cljs.core.hash_map,map__20496):map__20496);var widgets = cljs.core.get.call(null,map__20496__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));var G__20495__$1 = G__20495;while(true){
var map__20497 = G__20495__$1;var map__20497__$1 = ((cljs.core.seq_QMARK_.call(null,map__20497))?cljs.core.apply.call(null,cljs.core.hash_map,map__20497):map__20497);var widgets__$1 = cljs.core.get.call(null,map__20497__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof notifier.core.t20498 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20498 = (function (G__20486,output_schema20482,G__20495,widgets,output_checker20485,input_checker20484,widget_list,map__20497,validate__7251__auto__,map__20496,ufv__,input_schema20483,meta20499){
this.G__20486 = G__20486;
this.output_schema20482 = output_schema20482;
this.G__20495 = G__20495;
this.widgets = widgets;
this.output_checker20485 = output_checker20485;
this.input_checker20484 = input_checker20484;
this.widget_list = widget_list;
this.map__20497 = map__20497;
this.validate__7251__auto__ = validate__7251__auto__;
this.map__20496 = map__20496;
this.ufv__ = ufv__;
this.input_schema20483 = input_schema20483;
this.meta20499 = meta20499;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20498.cljs$lang$type = true;
notifier.core.t20498.cljs$lang$ctorStr = "notifier.core/t20498";
notifier.core.t20498.cljs$lang$ctorPrWriter = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20498");
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
notifier.core.t20498.prototype.om$core$IDisplayName$ = true;
notifier.core.t20498.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-list";
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
notifier.core.t20498.prototype.om$core$IRender$ = true;
notifier.core.t20498.prototype.om$core$IRender$render$arity$1 = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,notifier.core.widget,self__.widgets),cljs.core.PersistentVector.EMPTY);
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
notifier.core.t20498.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function (_20500){var self__ = this;
var _20500__$1 = this;return self__.meta20499;
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
notifier.core.t20498.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function (_20500,meta20499__$1){var self__ = this;
var _20500__$1 = this;return (new notifier.core.t20498(self__.G__20486,self__.output_schema20482,self__.G__20495,self__.widgets,self__.output_checker20485,self__.input_checker20484,self__.widget_list,self__.map__20497,self__.validate__7251__auto__,self__.map__20496,self__.ufv__,self__.input_schema20483,meta20499__$1));
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
notifier.core.__GT_t20498 = ((function (map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505){
return (function __GT_t20498(G__20486__$1,output_schema20482__$1,G__20495__$2,widgets__$2,output_checker20485__$1,input_checker20484__$1,widget_list__$1,map__20497__$2,validate__7251__auto____$1,map__20496__$2,ufv____$1,input_schema20483__$1,meta20499){return (new notifier.core.t20498(G__20486__$1,output_schema20482__$1,G__20495__$2,widgets__$2,output_checker20485__$1,input_checker20484__$1,widget_list__$1,map__20497__$2,validate__7251__auto____$1,map__20496__$2,ufv____$1,input_schema20483__$1,meta20499));
});})(map__20497,map__20497__$1,widgets__$1,G__20495,map__20496,map__20496__$1,widgets,validate__7251__auto__,ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
}
return (new notifier.core.t20498(G__20486,output_schema20482_20502,G__20495__$1,widgets__$1,output_checker20485_20505,input_checker20484_20504,widget_list,map__20497__$1,validate__7251__auto__,map__20496__$1,ufv___20501,input_schema20483_20503,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20509 = output_checker20485_20505.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20509))
{var error__7253__auto___20510 = temp__4126__auto___20509;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___20510)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20482_20502,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20510], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20501,output_schema20482_20502,input_schema20483_20503,input_checker20484_20504,output_checker20485_20505))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_list),schema.core.make_fn_schema.call(null,output_schema20482_20502,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20483_20503], null)));
notifier.core.__GT_widget_list = (function() {
var __GT_widget_list = null;
var __GT_widget_list__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__);
});
var __GT_widget_list__2 = (function (cursor__9028__auto__,m20481){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__,m20481);
});
__GT_widget_list = function(cursor__9028__auto__,m20481){
switch(arguments.length){
case 1:
return __GT_widget_list__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_list__2.call(this,cursor__9028__auto__,m20481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_list.cljs$core$IFn$_invoke$arity$1 = __GT_widget_list__1;
__GT_widget_list.cljs$core$IFn$_invoke$arity$2 = __GT_widget_list__2;
return __GT_widget_list;
})()
;
var ufv___20524 = schema.utils.use_fn_validation;var output_schema20512_20525 = schema.core.Any;var input_schema20513_20526 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker20514_20527 = schema.core.checker.call(null,input_schema20513_20526);var output_checker20515_20528 = schema.core.checker.call(null,output_schema20512_20525);/**
* Inputs: [app owner]
*/
notifier.core.widget_box = ((function (ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function widget_box(G__20516,G__20517){var validate__7251__auto__ = ufv___20524.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20529 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20516,G__20517], null);var temp__4126__auto___20530 = input_checker20514_20527.call(null,args__7252__auto___20529);if(cljs.core.truth_(temp__4126__auto___20530))
{var error__7253__auto___20531 = temp__4126__auto___20530;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___20531)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20513_20526,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20529,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20531], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20516;var owner = G__20517;while(true){
if(typeof notifier.core.t20521 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20521 = (function (owner,output_checker20515,input_checker20514,input_schema20513,validate__7251__auto__,widget_box,G__20516,app,ufv__,output_schema20512,G__20517,meta20522){
this.owner = owner;
this.output_checker20515 = output_checker20515;
this.input_checker20514 = input_checker20514;
this.input_schema20513 = input_schema20513;
this.validate__7251__auto__ = validate__7251__auto__;
this.widget_box = widget_box;
this.G__20516 = G__20516;
this.app = app;
this.ufv__ = ufv__;
this.output_schema20512 = output_schema20512;
this.G__20517 = G__20517;
this.meta20522 = meta20522;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20521.cljs$lang$type = true;
notifier.core.t20521.cljs$lang$ctorStr = "notifier.core/t20521";
notifier.core.t20521.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20521");
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
notifier.core.t20521.prototype.om$core$IDisplayName$ = true;
notifier.core.t20521.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-box";
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
notifier.core.t20521.prototype.om$core$IRender$ = true;
notifier.core.t20521.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Widgets1"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,notifier.core.widget_list,self__.app)],null)));
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
notifier.core.t20521.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function (_20523){var self__ = this;
var _20523__$1 = this;return self__.meta20522;
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
notifier.core.t20521.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function (_20523,meta20522__$1){var self__ = this;
var _20523__$1 = this;return (new notifier.core.t20521(self__.owner,self__.output_checker20515,self__.input_checker20514,self__.input_schema20513,self__.validate__7251__auto__,self__.widget_box,self__.G__20516,self__.app,self__.ufv__,self__.output_schema20512,self__.G__20517,meta20522__$1));
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
notifier.core.__GT_t20521 = ((function (validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528){
return (function __GT_t20521(owner__$1,output_checker20515__$1,input_checker20514__$1,input_schema20513__$1,validate__7251__auto____$1,widget_box__$1,G__20516__$1,app__$1,ufv____$1,output_schema20512__$1,G__20517__$1,meta20522){return (new notifier.core.t20521(owner__$1,output_checker20515__$1,input_checker20514__$1,input_schema20513__$1,validate__7251__auto____$1,widget_box__$1,G__20516__$1,app__$1,ufv____$1,output_schema20512__$1,G__20517__$1,meta20522));
});})(validate__7251__auto__,ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
}
return (new notifier.core.t20521(owner,output_checker20515_20528,input_checker20514_20527,input_schema20513_20526,validate__7251__auto__,widget_box,G__20516,app,ufv___20524,output_schema20512_20525,G__20517,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20532 = output_checker20515_20528.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20532))
{var error__7253__auto___20533 = temp__4126__auto___20532;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___20533)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20512_20525,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20533], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20524,output_schema20512_20525,input_schema20513_20526,input_checker20514_20527,output_checker20515_20528))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_box),schema.core.make_fn_schema.call(null,output_schema20512_20525,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20513_20526], null)));
notifier.core.__GT_widget_box = (function() {
var __GT_widget_box = null;
var __GT_widget_box__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__);
});
var __GT_widget_box__2 = (function (cursor__9028__auto__,m20511){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__,m20511);
});
__GT_widget_box = function(cursor__9028__auto__,m20511){
switch(arguments.length){
case 1:
return __GT_widget_box__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_box__2.call(this,cursor__9028__auto__,m20511);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_box.cljs$core$IFn$_invoke$arity$1 = __GT_widget_box__1;
__GT_widget_box.cljs$core$IFn$_invoke$arity$2 = __GT_widget_box__2;
return __GT_widget_box;
})()
;
var ufv___20630 = schema.utils.use_fn_validation;var output_schema20535_20631 = schema.core.Any;var input_schema20536_20632 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20537_20633 = schema.core.checker.call(null,input_schema20536_20632);var output_checker20538_20634 = schema.core.checker.call(null,output_schema20535_20631);/**
* Inputs: [app owner opts]
*/
notifier.core.widgetpolling = ((function (ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function widgetpolling(G__20539,G__20540,G__20541){var validate__7251__auto__ = ufv___20630.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20635 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20539,G__20540,G__20541], null);var temp__4126__auto___20636 = input_checker20537_20633.call(null,args__7252__auto___20635);if(cljs.core.truth_(temp__4126__auto___20636))
{var error__7253__auto___20637 = temp__4126__auto___20636;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___20637)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20536_20632,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20635,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20637], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20539;var owner = G__20540;var opts = G__20541;while(true){
if(typeof notifier.core.t20586 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20586 = (function (widgetpolling,owner,input_schema20536,output_schema20535,G__20539,validate__7251__auto__,output_checker20538,G__20540,G__20541,app,opts,input_checker20537,ufv__,meta20587){
this.widgetpolling = widgetpolling;
this.owner = owner;
this.input_schema20536 = input_schema20536;
this.output_schema20535 = output_schema20535;
this.G__20539 = G__20539;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_checker20538 = output_checker20538;
this.G__20540 = G__20540;
this.G__20541 = G__20541;
this.app = app;
this.opts = opts;
this.input_checker20537 = input_checker20537;
this.ufv__ = ufv__;
this.meta20587 = meta20587;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20586.cljs$lang$type = true;
notifier.core.t20586.cljs$lang$ctorStr = "notifier.core/t20586";
notifier.core.t20586.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20586");
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.om$core$IDisplayName$ = true;
notifier.core.t20586.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_){var self__ = this;
var ___$1 = this;return "widgetpolling";
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.om$core$IRender$ = true;
notifier.core.t20586.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,notifier.core.widget_box,self__.app);
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.om$core$IWillUnmount$ = true;
notifier.core.t20586.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),false);
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.om$core$IWillMount$ = true;
notifier.core.t20586.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_){var self__ = this;
var ___$1 = this;var c__10294__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (){var f__10295__auto__ = (function (){var switch__10279__auto__ = ((function (c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (state_20613){var state_val_20614 = (state_20613[(1)]);if((state_val_20614 === (8)))
{var inst_20605 = (state_20613[(2)]);var state_20613__$1 = (function (){var statearr_20615 = state_20613;(statearr_20615[(7)] = inst_20605);
return statearr_20615;
})();var statearr_20616_20638 = state_20613__$1;(statearr_20616_20638[(2)] = null);
(statearr_20616_20638[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20614 === (7)))
{var inst_20595 = (state_20613[(2)]);var inst_20596 = cljs.core.pr_str.call(null,inst_20595);var inst_20597 = console.log(inst_20596);var inst_20598 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20599 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];var inst_20600 = (new cljs.core.PersistentVector(null,1,(5),inst_20598,inst_20599,null));var inst_20601 = om.core.update_BANG_.call(null,self__.app,inst_20600,inst_20595);var inst_20602 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_20603 = cljs.core.async.timeout.call(null,inst_20602);var state_20613__$1 = (function (){var statearr_20617 = state_20613;(statearr_20617[(8)] = inst_20601);
(statearr_20617[(9)] = inst_20597);
return statearr_20617;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20613__$1,(8),inst_20603);
} else
{if((state_val_20614 === (6)))
{var inst_20609 = (state_20613[(2)]);var state_20613__$1 = state_20613;var statearr_20618_20639 = state_20613__$1;(statearr_20618_20639[(2)] = inst_20609);
(statearr_20618_20639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20614 === (5)))
{var state_20613__$1 = state_20613;var statearr_20619_20640 = state_20613__$1;(statearr_20619_20640[(2)] = null);
(statearr_20619_20640[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20614 === (4)))
{var inst_20592 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_20593 = notifier.core.fetch_widgets.call(null,inst_20592);var state_20613__$1 = state_20613;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20613__$1,(7),inst_20593);
} else
{if((state_val_20614 === (3)))
{var inst_20611 = (state_20613[(2)]);var state_20613__$1 = state_20613;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20613__$1,inst_20611);
} else
{if((state_val_20614 === (2)))
{var inst_20590 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616));var state_20613__$1 = state_20613;if(cljs.core.truth_(inst_20590))
{var statearr_20620_20641 = state_20613__$1;(statearr_20620_20641[(1)] = (4));
} else
{var statearr_20621_20642 = state_20613__$1;(statearr_20621_20642[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20614 === (1)))
{var state_20613__$1 = state_20613;var statearr_20622_20643 = state_20613__$1;(statearr_20622_20643[(2)] = null);
(statearr_20622_20643[(1)] = (2));
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
});})(c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;return ((function (switch__10279__auto__,c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function() {
var state_machine__10280__auto__ = null;
var state_machine__10280__auto____0 = (function (){var statearr_20626 = [null,null,null,null,null,null,null,null,null,null];(statearr_20626[(0)] = state_machine__10280__auto__);
(statearr_20626[(1)] = (1));
return statearr_20626;
});
var state_machine__10280__auto____1 = (function (state_20613){while(true){
var ret_value__10281__auto__ = (function (){try{while(true){
var result__10282__auto__ = switch__10279__auto__.call(null,state_20613);if(cljs.core.keyword_identical_QMARK_.call(null,result__10282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10282__auto__;
}
break;
}
}catch (e20627){if((e20627 instanceof Object))
{var ex__10283__auto__ = e20627;var statearr_20628_20644 = state_20613;(statearr_20628_20644[(5)] = ex__10283__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20613);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20627;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20645 = state_20613;
state_20613 = G__20645;
continue;
}
} else
{return ret_value__10281__auto__;
}
break;
}
});
state_machine__10280__auto__ = function(state_20613){
switch(arguments.length){
case 0:
return state_machine__10280__auto____0.call(this);
case 1:
return state_machine__10280__auto____1.call(this,state_20613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10280__auto____0;
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10280__auto____1;
return state_machine__10280__auto__;
})()
;})(switch__10279__auto__,c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
})();var state__10296__auto__ = (function (){var statearr_20629 = f__10295__auto__.call(null);(statearr_20629[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10294__auto__);
return statearr_20629;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10296__auto__);
});})(c__10294__auto__,___$1,validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
);
return c__10294__auto__;
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.om$core$IInitState$ = true;
notifier.core.t20586.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mounted","mounted",-111042616),true], null);
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_20588){var self__ = this;
var _20588__$1 = this;return self__.meta20587;
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.t20586.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function (_20588,meta20587__$1){var self__ = this;
var _20588__$1 = this;return (new notifier.core.t20586(self__.widgetpolling,self__.owner,self__.input_schema20536,self__.output_schema20535,self__.G__20539,self__.validate__7251__auto__,self__.output_checker20538,self__.G__20540,self__.G__20541,self__.app,self__.opts,self__.input_checker20537,self__.ufv__,meta20587__$1));
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
notifier.core.__GT_t20586 = ((function (validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634){
return (function __GT_t20586(widgetpolling__$1,owner__$1,input_schema20536__$1,output_schema20535__$1,G__20539__$1,validate__7251__auto____$1,output_checker20538__$1,G__20540__$1,G__20541__$1,app__$1,opts__$1,input_checker20537__$1,ufv____$1,meta20587){return (new notifier.core.t20586(widgetpolling__$1,owner__$1,input_schema20536__$1,output_schema20535__$1,G__20539__$1,validate__7251__auto____$1,output_checker20538__$1,G__20540__$1,G__20541__$1,app__$1,opts__$1,input_checker20537__$1,ufv____$1,meta20587));
});})(validate__7251__auto__,ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
}
return (new notifier.core.t20586(widgetpolling,owner,input_schema20536_20632,output_schema20535_20631,G__20539,validate__7251__auto__,output_checker20538_20634,G__20540,G__20541,app,opts,input_checker20537_20633,ufv___20630,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20646 = output_checker20538_20634.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20646))
{var error__7253__auto___20647 = temp__4126__auto___20646;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___20647)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20535_20631,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20647], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20630,output_schema20535_20631,input_schema20536_20632,input_checker20537_20633,output_checker20538_20634))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widgetpolling),schema.core.make_fn_schema.call(null,output_schema20535_20631,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20536_20632], null)));
notifier.core.__GT_widgetpolling = (function() {
var __GT_widgetpolling = null;
var __GT_widgetpolling__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__);
});
var __GT_widgetpolling__2 = (function (cursor__9028__auto__,m20534){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__,m20534);
});
__GT_widgetpolling = function(cursor__9028__auto__,m20534){
switch(arguments.length){
case 1:
return __GT_widgetpolling__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widgetpolling__2.call(this,cursor__9028__auto__,m20534);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$1 = __GT_widgetpolling__1;
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$2 = __GT_widgetpolling__2;
return __GT_widgetpolling;
})()
;
var ufv___20661 = schema.utils.use_fn_validation;var output_schema20649_20662 = schema.core.Any;var input_schema20650_20663 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker20651_20664 = schema.core.checker.call(null,input_schema20650_20663);var output_checker20652_20665 = schema.core.checker.call(null,output_schema20649_20662);/**
* Inputs: [app owner]
*/
notifier.core.om_app = ((function (ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function om_app(G__20653,G__20654){var validate__7251__auto__ = ufv___20661.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20666 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20653,G__20654], null);var temp__4126__auto___20667 = input_checker20651_20664.call(null,args__7252__auto___20666);if(cljs.core.truth_(temp__4126__auto___20667))
{var error__7253__auto___20668 = temp__4126__auto___20667;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-app","om-app",-1539149030,null),cljs.core.pr_str.call(null,error__7253__auto___20668)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20650_20663,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20666,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20668], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20653;var owner = G__20654;while(true){
if(typeof notifier.core.t20658 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20658 = (function (output_checker20652,owner,G__20653,input_checker20651,output_schema20649,G__20654,validate__7251__auto__,om_app,app,ufv__,input_schema20650,meta20659){
this.output_checker20652 = output_checker20652;
this.owner = owner;
this.G__20653 = G__20653;
this.input_checker20651 = input_checker20651;
this.output_schema20649 = output_schema20649;
this.G__20654 = G__20654;
this.validate__7251__auto__ = validate__7251__auto__;
this.om_app = om_app;
this.app = app;
this.ufv__ = ufv__;
this.input_schema20650 = input_schema20650;
this.meta20659 = meta20659;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20658.cljs$lang$type = true;
notifier.core.t20658.cljs$lang$ctorStr = "notifier.core/t20658";
notifier.core.t20658.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20658");
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
notifier.core.t20658.prototype.om$core$IDisplayName$ = true;
notifier.core.t20658.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function (_){var self__ = this;
var ___$1 = this;return "om-app";
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
notifier.core.t20658.prototype.om$core$IRender$ = true;
notifier.core.t20658.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,notifier.core.widgetpolling,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)),cljs.core.PersistentVector.EMPTY);
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
notifier.core.t20658.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function (_20660){var self__ = this;
var _20660__$1 = this;return self__.meta20659;
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
notifier.core.t20658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function (_20660,meta20659__$1){var self__ = this;
var _20660__$1 = this;return (new notifier.core.t20658(self__.output_checker20652,self__.owner,self__.G__20653,self__.input_checker20651,self__.output_schema20649,self__.G__20654,self__.validate__7251__auto__,self__.om_app,self__.app,self__.ufv__,self__.input_schema20650,meta20659__$1));
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
notifier.core.__GT_t20658 = ((function (validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665){
return (function __GT_t20658(output_checker20652__$1,owner__$1,G__20653__$1,input_checker20651__$1,output_schema20649__$1,G__20654__$1,validate__7251__auto____$1,om_app__$1,app__$1,ufv____$1,input_schema20650__$1,meta20659){return (new notifier.core.t20658(output_checker20652__$1,owner__$1,G__20653__$1,input_checker20651__$1,output_schema20649__$1,G__20654__$1,validate__7251__auto____$1,om_app__$1,app__$1,ufv____$1,input_schema20650__$1,meta20659));
});})(validate__7251__auto__,ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
}
return (new notifier.core.t20658(output_checker20652_20665,owner,G__20653,input_checker20651_20664,output_schema20649_20662,G__20654,validate__7251__auto__,om_app,app,ufv___20661,input_schema20650_20663,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20669 = output_checker20652_20665.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20669))
{var error__7253__auto___20670 = temp__4126__auto___20669;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-app","om-app",-1539149030,null),cljs.core.pr_str.call(null,error__7253__auto___20670)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20649_20662,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20670], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20661,output_schema20649_20662,input_schema20650_20663,input_checker20651_20664,output_checker20652_20665))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_app),schema.core.make_fn_schema.call(null,output_schema20649_20662,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20650_20663], null)));
notifier.core.__GT_om_app = (function() {
var __GT_om_app = null;
var __GT_om_app__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_app,cursor__9028__auto__);
});
var __GT_om_app__2 = (function (cursor__9028__auto__,m20648){return om.core.build.call(null,notifier.core.om_app,cursor__9028__auto__,m20648);
});
__GT_om_app = function(cursor__9028__auto__,m20648){
switch(arguments.length){
case 1:
return __GT_om_app__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_app__2.call(this,cursor__9028__auto__,m20648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_app.cljs$core$IFn$_invoke$arity$1 = __GT_om_app__1;
__GT_om_app.cljs$core$IFn$_invoke$arity$2 = __GT_om_app__2;
return __GT_om_app;
})()
;
om.core.root.call(null,notifier.core.om_app,notifier.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
var ufv___20685 = schema.utils.use_fn_validation;var output_schema20672_20686 = schema.core.Any;var input_schema20673_20687 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20674_20688 = schema.core.checker.call(null,input_schema20673_20687);var output_checker20675_20689 = schema.core.checker.call(null,output_schema20672_20686);/**
* Inputs: [app owner opts]
*/
notifier.core.om_nothing = ((function (ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function om_nothing(G__20676,G__20677,G__20678){var validate__7251__auto__ = ufv___20685.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20690 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20676,G__20677,G__20678], null);var temp__4126__auto___20691 = input_checker20674_20688.call(null,args__7252__auto___20690);if(cljs.core.truth_(temp__4126__auto___20691))
{var error__7253__auto___20692 = temp__4126__auto___20691;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-nothing","om-nothing",1943336976,null),cljs.core.pr_str.call(null,error__7253__auto___20692)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20673_20687,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20690,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20692], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20676;var owner = G__20677;var opts = G__20678;while(true){
if(typeof notifier.core.t20682 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20682 = (function (input_checker20674,output_checker20675,owner,input_schema20673,om_nothing,G__20677,output_schema20672,G__20678,validate__7251__auto__,app,opts,ufv__,G__20676,meta20683){
this.input_checker20674 = input_checker20674;
this.output_checker20675 = output_checker20675;
this.owner = owner;
this.input_schema20673 = input_schema20673;
this.om_nothing = om_nothing;
this.G__20677 = G__20677;
this.output_schema20672 = output_schema20672;
this.G__20678 = G__20678;
this.validate__7251__auto__ = validate__7251__auto__;
this.app = app;
this.opts = opts;
this.ufv__ = ufv__;
this.G__20676 = G__20676;
this.meta20683 = meta20683;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20682.cljs$lang$type = true;
notifier.core.t20682.cljs$lang$ctorStr = "notifier.core/t20682";
notifier.core.t20682.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20682");
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
notifier.core.t20682.prototype.om$core$IDisplayName$ = true;
notifier.core.t20682.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function (_){var self__ = this;
var ___$1 = this;return "om-nothing";
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
notifier.core.t20682.prototype.om$core$IRender$ = true;
notifier.core.t20682.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,"Nothing");
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
notifier.core.t20682.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function (_20684){var self__ = this;
var _20684__$1 = this;return self__.meta20683;
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
notifier.core.t20682.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function (_20684,meta20683__$1){var self__ = this;
var _20684__$1 = this;return (new notifier.core.t20682(self__.input_checker20674,self__.output_checker20675,self__.owner,self__.input_schema20673,self__.om_nothing,self__.G__20677,self__.output_schema20672,self__.G__20678,self__.validate__7251__auto__,self__.app,self__.opts,self__.ufv__,self__.G__20676,meta20683__$1));
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
notifier.core.__GT_t20682 = ((function (validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689){
return (function __GT_t20682(input_checker20674__$1,output_checker20675__$1,owner__$1,input_schema20673__$1,om_nothing__$1,G__20677__$1,output_schema20672__$1,G__20678__$1,validate__7251__auto____$1,app__$1,opts__$1,ufv____$1,G__20676__$1,meta20683){return (new notifier.core.t20682(input_checker20674__$1,output_checker20675__$1,owner__$1,input_schema20673__$1,om_nothing__$1,G__20677__$1,output_schema20672__$1,G__20678__$1,validate__7251__auto____$1,app__$1,opts__$1,ufv____$1,G__20676__$1,meta20683));
});})(validate__7251__auto__,ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
}
return (new notifier.core.t20682(input_checker20674_20688,output_checker20675_20689,owner,input_schema20673_20687,om_nothing,G__20677,output_schema20672_20686,G__20678,validate__7251__auto__,app,opts,ufv___20685,G__20676,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20693 = output_checker20675_20689.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20693))
{var error__7253__auto___20694 = temp__4126__auto___20693;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-nothing","om-nothing",1943336976,null),cljs.core.pr_str.call(null,error__7253__auto___20694)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20672_20686,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20694], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20685,output_schema20672_20686,input_schema20673_20687,input_checker20674_20688,output_checker20675_20689))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_nothing),schema.core.make_fn_schema.call(null,output_schema20672_20686,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20673_20687], null)));
notifier.core.__GT_om_nothing = (function() {
var __GT_om_nothing = null;
var __GT_om_nothing__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_nothing,cursor__9028__auto__);
});
var __GT_om_nothing__2 = (function (cursor__9028__auto__,m20671){return om.core.build.call(null,notifier.core.om_nothing,cursor__9028__auto__,m20671);
});
__GT_om_nothing = function(cursor__9028__auto__,m20671){
switch(arguments.length){
case 1:
return __GT_om_nothing__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_nothing__2.call(this,cursor__9028__auto__,m20671);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_nothing.cljs$core$IFn$_invoke$arity$1 = __GT_om_nothing__1;
__GT_om_nothing.cljs$core$IFn$_invoke$arity$2 = __GT_om_nothing__2;
return __GT_om_nothing;
})()
;

//# sourceMappingURL=core.js.map