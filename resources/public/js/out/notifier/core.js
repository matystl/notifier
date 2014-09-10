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
return (function (state_20123){var state_val_20124 = (state_20123[(1)]);if((state_val_20124 === (5)))
{var inst_20119 = (state_20123[(2)]);var inst_20120 = cljs.core.get.call(null,inst_20119,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_20121 = cljs.core.vec.call(null,inst_20120);var state_20123__$1 = state_20123;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20123__$1,inst_20121);
} else
{if((state_val_20124 === (4)))
{var inst_20113 = (state_20123[(7)]);var state_20123__$1 = state_20123;var statearr_20125_20137 = state_20123__$1;(statearr_20125_20137[(2)] = inst_20113);
(statearr_20125_20137[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20124 === (3)))
{var inst_20113 = (state_20123[(7)]);var inst_20116 = cljs.core.apply.call(null,cljs.core.hash_map,inst_20113);var state_20123__$1 = state_20123;var statearr_20126_20138 = state_20123__$1;(statearr_20126_20138[(2)] = inst_20116);
(statearr_20126_20138[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20124 === (2)))
{var inst_20113 = (state_20123[(7)]);var inst_20113__$1 = (state_20123[(2)]);var inst_20114 = cljs.core.seq_QMARK_.call(null,inst_20113__$1);var state_20123__$1 = (function (){var statearr_20127 = state_20123;(statearr_20127[(7)] = inst_20113__$1);
return statearr_20127;
})();if(inst_20114)
{var statearr_20128_20139 = state_20123__$1;(statearr_20128_20139[(1)] = (3));
} else
{var statearr_20129_20140 = state_20123__$1;(statearr_20129_20140[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20124 === (1)))
{var inst_20111 = cljs_http.client.get.call(null,url);var state_20123__$1 = state_20123;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20123__$1,(2),inst_20111);
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
var state_machine__10280__auto____0 = (function (){var statearr_20133 = [null,null,null,null,null,null,null,null];(statearr_20133[(0)] = state_machine__10280__auto__);
(statearr_20133[(1)] = (1));
return statearr_20133;
});
var state_machine__10280__auto____1 = (function (state_20123){while(true){
var ret_value__10281__auto__ = (function (){try{while(true){
var result__10282__auto__ = switch__10279__auto__.call(null,state_20123);if(cljs.core.keyword_identical_QMARK_.call(null,result__10282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10282__auto__;
}
break;
}
}catch (e20134){if((e20134 instanceof Object))
{var ex__10283__auto__ = e20134;var statearr_20135_20141 = state_20123;(statearr_20135_20141[(5)] = ex__10283__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20123);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20134;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20142 = state_20123;
state_20123 = G__20142;
continue;
}
} else
{return ret_value__10281__auto__;
}
break;
}
});
state_machine__10280__auto__ = function(state_20123){
switch(arguments.length){
case 0:
return state_machine__10280__auto____0.call(this);
case 1:
return state_machine__10280__auto____1.call(this,state_20123);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10280__auto____0;
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10280__auto____1;
return state_machine__10280__auto__;
})()
;})(switch__10279__auto__,c__10294__auto__))
})();var state__10296__auto__ = (function (){var statearr_20136 = f__10295__auto__.call(null);(statearr_20136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10294__auto__);
return statearr_20136;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10296__auto__);
});})(c__10294__auto__))
);
return c__10294__auto__;
});
notifier.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),cljs.core.PersistentVector.EMPTY], null));
var ufv___20165 = schema.utils.use_fn_validation;var output_schema20144_20166 = schema.core.Any;var input_schema20145_20167 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20146_20168 = schema.core.checker.call(null,input_schema20145_20167);var output_checker20147_20169 = schema.core.checker.call(null,output_schema20144_20166);/**
* Inputs: [{:keys [name]} owner opts]
*/
notifier.core.widget = ((function (ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function widget(G__20148,G__20149,G__20150){var validate__7251__auto__ = ufv___20165.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20170 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20148,G__20149,G__20150], null);var temp__4126__auto___20171 = input_checker20146_20168.call(null,args__7252__auto___20170);if(cljs.core.truth_(temp__4126__auto___20171))
{var error__7253__auto___20172 = temp__4126__auto___20171;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___20172)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20145_20167,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20170,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20172], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__20159 = G__20148;var map__20160 = G__20159;var map__20160__$1 = ((cljs.core.seq_QMARK_.call(null,map__20160))?cljs.core.apply.call(null,cljs.core.hash_map,map__20160):map__20160);var name = cljs.core.get.call(null,map__20160__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner = G__20149;var opts = G__20150;var G__20159__$1 = G__20159;var owner__$1 = owner;var opts__$1 = opts;while(true){
var map__20161 = G__20159__$1;var map__20161__$1 = ((cljs.core.seq_QMARK_.call(null,map__20161))?cljs.core.apply.call(null,cljs.core.hash_map,map__20161):map__20161);var name__$1 = cljs.core.get.call(null,map__20161__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner__$2 = owner__$1;var opts__$2 = opts__$1;if(typeof notifier.core.t20162 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20162 = (function (G__20159,owner,G__20150,output_schema20144,input_checker20146,G__20149,map__20160,output_checker20147,input_schema20145,name,validate__7251__auto__,widget,map__20161,G__20148,opts,ufv__,meta20163){
this.G__20159 = G__20159;
this.owner = owner;
this.G__20150 = G__20150;
this.output_schema20144 = output_schema20144;
this.input_checker20146 = input_checker20146;
this.G__20149 = G__20149;
this.map__20160 = map__20160;
this.output_checker20147 = output_checker20147;
this.input_schema20145 = input_schema20145;
this.name = name;
this.validate__7251__auto__ = validate__7251__auto__;
this.widget = widget;
this.map__20161 = map__20161;
this.G__20148 = G__20148;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20163 = meta20163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20162.cljs$lang$type = true;
notifier.core.t20162.cljs$lang$ctorStr = "notifier.core/t20162";
notifier.core.t20162.cljs$lang$ctorPrWriter = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20162");
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
notifier.core.t20162.prototype.om$core$IDisplayName$ = true;
notifier.core.t20162.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function (_){var self__ = this;
var ___$1 = this;return "widget";
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
notifier.core.t20162.prototype.om$core$IRender$ = true;
notifier.core.t20162.prototype.om$core$IRender$render$arity$1 = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,self__.name,cljs.core.PersistentVector.EMPTY);
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
notifier.core.t20162.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function (_20164){var self__ = this;
var _20164__$1 = this;return self__.meta20163;
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
notifier.core.t20162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function (_20164,meta20163__$1){var self__ = this;
var _20164__$1 = this;return (new notifier.core.t20162(self__.G__20159,self__.owner,self__.G__20150,self__.output_schema20144,self__.input_checker20146,self__.G__20149,self__.map__20160,self__.output_checker20147,self__.input_schema20145,self__.name,self__.validate__7251__auto__,self__.widget,self__.map__20161,self__.G__20148,self__.opts,self__.ufv__,meta20163__$1));
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
notifier.core.__GT_t20162 = ((function (map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169){
return (function __GT_t20162(G__20159__$2,owner__$3,G__20150__$1,output_schema20144__$1,input_checker20146__$1,G__20149__$1,map__20160__$2,output_checker20147__$1,input_schema20145__$1,name__$2,validate__7251__auto____$1,widget__$1,map__20161__$2,G__20148__$1,opts__$3,ufv____$1,meta20163){return (new notifier.core.t20162(G__20159__$2,owner__$3,G__20150__$1,output_schema20144__$1,input_checker20146__$1,G__20149__$1,map__20160__$2,output_checker20147__$1,input_schema20145__$1,name__$2,validate__7251__auto____$1,widget__$1,map__20161__$2,G__20148__$1,opts__$3,ufv____$1,meta20163));
});})(map__20161,map__20161__$1,name__$1,owner__$2,opts__$2,G__20159,map__20160,map__20160__$1,name,owner,opts,validate__7251__auto__,ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
}
return (new notifier.core.t20162(G__20159__$1,owner__$2,G__20150,output_schema20144_20166,input_checker20146_20168,G__20149,map__20160__$1,output_checker20147_20169,input_schema20145_20167,name__$1,validate__7251__auto__,widget,map__20161__$1,G__20148,opts__$2,ufv___20165,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20173 = output_checker20147_20169.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20173))
{var error__7253__auto___20174 = temp__4126__auto___20173;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___20174)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20144_20166,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20174], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20165,output_schema20144_20166,input_schema20145_20167,input_checker20146_20168,output_checker20147_20169))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget),schema.core.make_fn_schema.call(null,output_schema20144_20166,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20145_20167], null)));
notifier.core.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__);
});
var __GT_widget__2 = (function (cursor__9028__auto__,m20143){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__,m20143);
});
__GT_widget = function(cursor__9028__auto__,m20143){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget__2.call(this,cursor__9028__auto__,m20143);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;
var ufv___20195 = schema.utils.use_fn_validation;var output_schema20176_20196 = schema.core.Any;var input_schema20177_20197 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker20178_20198 = schema.core.checker.call(null,input_schema20177_20197);var output_checker20179_20199 = schema.core.checker.call(null,output_schema20176_20196);/**
* Inputs: [{:keys [widgets]}]
*/
notifier.core.widget_list = ((function (ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function widget_list(G__20180){var validate__7251__auto__ = ufv___20195.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20200 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20180], null);var temp__4126__auto___20201 = input_checker20178_20198.call(null,args__7252__auto___20200);if(cljs.core.truth_(temp__4126__auto___20201))
{var error__7253__auto___20202 = temp__4126__auto___20201;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___20202)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20177_20197,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20200,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20202], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__20189 = G__20180;var map__20190 = G__20189;var map__20190__$1 = ((cljs.core.seq_QMARK_.call(null,map__20190))?cljs.core.apply.call(null,cljs.core.hash_map,map__20190):map__20190);var widgets = cljs.core.get.call(null,map__20190__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));var G__20189__$1 = G__20189;while(true){
var map__20191 = G__20189__$1;var map__20191__$1 = ((cljs.core.seq_QMARK_.call(null,map__20191))?cljs.core.apply.call(null,cljs.core.hash_map,map__20191):map__20191);var widgets__$1 = cljs.core.get.call(null,map__20191__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof notifier.core.t20192 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20192 = (function (G__20180,input_schema20177,widgets,output_checker20179,map__20190,map__20191,widget_list,input_checker20178,G__20189,validate__7251__auto__,output_schema20176,ufv__,meta20193){
this.G__20180 = G__20180;
this.input_schema20177 = input_schema20177;
this.widgets = widgets;
this.output_checker20179 = output_checker20179;
this.map__20190 = map__20190;
this.map__20191 = map__20191;
this.widget_list = widget_list;
this.input_checker20178 = input_checker20178;
this.G__20189 = G__20189;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_schema20176 = output_schema20176;
this.ufv__ = ufv__;
this.meta20193 = meta20193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20192.cljs$lang$type = true;
notifier.core.t20192.cljs$lang$ctorStr = "notifier.core/t20192";
notifier.core.t20192.cljs$lang$ctorPrWriter = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20192");
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
notifier.core.t20192.prototype.om$core$IDisplayName$ = true;
notifier.core.t20192.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-list";
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
notifier.core.t20192.prototype.om$core$IRender$ = true;
notifier.core.t20192.prototype.om$core$IRender$render$arity$1 = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,notifier.core.widget,self__.widgets),cljs.core.PersistentVector.EMPTY);
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
notifier.core.t20192.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function (_20194){var self__ = this;
var _20194__$1 = this;return self__.meta20193;
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
notifier.core.t20192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function (_20194,meta20193__$1){var self__ = this;
var _20194__$1 = this;return (new notifier.core.t20192(self__.G__20180,self__.input_schema20177,self__.widgets,self__.output_checker20179,self__.map__20190,self__.map__20191,self__.widget_list,self__.input_checker20178,self__.G__20189,self__.validate__7251__auto__,self__.output_schema20176,self__.ufv__,meta20193__$1));
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
notifier.core.__GT_t20192 = ((function (map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199){
return (function __GT_t20192(G__20180__$1,input_schema20177__$1,widgets__$2,output_checker20179__$1,map__20190__$2,map__20191__$2,widget_list__$1,input_checker20178__$1,G__20189__$2,validate__7251__auto____$1,output_schema20176__$1,ufv____$1,meta20193){return (new notifier.core.t20192(G__20180__$1,input_schema20177__$1,widgets__$2,output_checker20179__$1,map__20190__$2,map__20191__$2,widget_list__$1,input_checker20178__$1,G__20189__$2,validate__7251__auto____$1,output_schema20176__$1,ufv____$1,meta20193));
});})(map__20191,map__20191__$1,widgets__$1,G__20189,map__20190,map__20190__$1,widgets,validate__7251__auto__,ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
}
return (new notifier.core.t20192(G__20180,input_schema20177_20197,widgets__$1,output_checker20179_20199,map__20190__$1,map__20191__$1,widget_list,input_checker20178_20198,G__20189__$1,validate__7251__auto__,output_schema20176_20196,ufv___20195,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20203 = output_checker20179_20199.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20203))
{var error__7253__auto___20204 = temp__4126__auto___20203;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___20204)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20176_20196,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20204], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20195,output_schema20176_20196,input_schema20177_20197,input_checker20178_20198,output_checker20179_20199))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_list),schema.core.make_fn_schema.call(null,output_schema20176_20196,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20177_20197], null)));
notifier.core.__GT_widget_list = (function() {
var __GT_widget_list = null;
var __GT_widget_list__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__);
});
var __GT_widget_list__2 = (function (cursor__9028__auto__,m20175){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__,m20175);
});
__GT_widget_list = function(cursor__9028__auto__,m20175){
switch(arguments.length){
case 1:
return __GT_widget_list__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_list__2.call(this,cursor__9028__auto__,m20175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_list.cljs$core$IFn$_invoke$arity$1 = __GT_widget_list__1;
__GT_widget_list.cljs$core$IFn$_invoke$arity$2 = __GT_widget_list__2;
return __GT_widget_list;
})()
;
var ufv___20218 = schema.utils.use_fn_validation;var output_schema20206_20219 = schema.core.Any;var input_schema20207_20220 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker20208_20221 = schema.core.checker.call(null,input_schema20207_20220);var output_checker20209_20222 = schema.core.checker.call(null,output_schema20206_20219);/**
* Inputs: [app owner]
*/
notifier.core.widget_box = ((function (ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function widget_box(G__20210,G__20211){var validate__7251__auto__ = ufv___20218.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20223 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20210,G__20211], null);var temp__4126__auto___20224 = input_checker20208_20221.call(null,args__7252__auto___20223);if(cljs.core.truth_(temp__4126__auto___20224))
{var error__7253__auto___20225 = temp__4126__auto___20224;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___20225)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20207_20220,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20223,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20225], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20210;var owner = G__20211;while(true){
if(typeof notifier.core.t20215 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20215 = (function (owner,G__20211,input_schema20207,output_schema20206,output_checker20209,input_checker20208,G__20210,validate__7251__auto__,widget_box,app,ufv__,meta20216){
this.owner = owner;
this.G__20211 = G__20211;
this.input_schema20207 = input_schema20207;
this.output_schema20206 = output_schema20206;
this.output_checker20209 = output_checker20209;
this.input_checker20208 = input_checker20208;
this.G__20210 = G__20210;
this.validate__7251__auto__ = validate__7251__auto__;
this.widget_box = widget_box;
this.app = app;
this.ufv__ = ufv__;
this.meta20216 = meta20216;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20215.cljs$lang$type = true;
notifier.core.t20215.cljs$lang$ctorStr = "notifier.core/t20215";
notifier.core.t20215.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20215");
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
notifier.core.t20215.prototype.om$core$IDisplayName$ = true;
notifier.core.t20215.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-box";
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
notifier.core.t20215.prototype.om$core$IRender$ = true;
notifier.core.t20215.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.apply.call(null,React.DOM.div,null,cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h1(null,"Widgets1"),om.core.build.call(null,notifier.core.widget_list,self__.app)],null))));
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
notifier.core.t20215.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function (_20217){var self__ = this;
var _20217__$1 = this;return self__.meta20216;
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
notifier.core.t20215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function (_20217,meta20216__$1){var self__ = this;
var _20217__$1 = this;return (new notifier.core.t20215(self__.owner,self__.G__20211,self__.input_schema20207,self__.output_schema20206,self__.output_checker20209,self__.input_checker20208,self__.G__20210,self__.validate__7251__auto__,self__.widget_box,self__.app,self__.ufv__,meta20216__$1));
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
notifier.core.__GT_t20215 = ((function (validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222){
return (function __GT_t20215(owner__$1,G__20211__$1,input_schema20207__$1,output_schema20206__$1,output_checker20209__$1,input_checker20208__$1,G__20210__$1,validate__7251__auto____$1,widget_box__$1,app__$1,ufv____$1,meta20216){return (new notifier.core.t20215(owner__$1,G__20211__$1,input_schema20207__$1,output_schema20206__$1,output_checker20209__$1,input_checker20208__$1,G__20210__$1,validate__7251__auto____$1,widget_box__$1,app__$1,ufv____$1,meta20216));
});})(validate__7251__auto__,ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
}
return (new notifier.core.t20215(owner,G__20211,input_schema20207_20220,output_schema20206_20219,output_checker20209_20222,input_checker20208_20221,G__20210,validate__7251__auto__,widget_box,app,ufv___20218,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20226 = output_checker20209_20222.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20226))
{var error__7253__auto___20227 = temp__4126__auto___20226;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___20227)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20206_20219,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20227], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20218,output_schema20206_20219,input_schema20207_20220,input_checker20208_20221,output_checker20209_20222))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_box),schema.core.make_fn_schema.call(null,output_schema20206_20219,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20207_20220], null)));
notifier.core.__GT_widget_box = (function() {
var __GT_widget_box = null;
var __GT_widget_box__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__);
});
var __GT_widget_box__2 = (function (cursor__9028__auto__,m20205){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__,m20205);
});
__GT_widget_box = function(cursor__9028__auto__,m20205){
switch(arguments.length){
case 1:
return __GT_widget_box__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_box__2.call(this,cursor__9028__auto__,m20205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_box.cljs$core$IFn$_invoke$arity$1 = __GT_widget_box__1;
__GT_widget_box.cljs$core$IFn$_invoke$arity$2 = __GT_widget_box__2;
return __GT_widget_box;
})()
;
var ufv___20324 = schema.utils.use_fn_validation;var output_schema20229_20325 = schema.core.Any;var input_schema20230_20326 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20231_20327 = schema.core.checker.call(null,input_schema20230_20326);var output_checker20232_20328 = schema.core.checker.call(null,output_schema20229_20325);/**
* Inputs: [app owner opts]
*/
notifier.core.widgetpolling = ((function (ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function widgetpolling(G__20233,G__20234,G__20235){var validate__7251__auto__ = ufv___20324.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20329 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20233,G__20234,G__20235], null);var temp__4126__auto___20330 = input_checker20231_20327.call(null,args__7252__auto___20329);if(cljs.core.truth_(temp__4126__auto___20330))
{var error__7253__auto___20331 = temp__4126__auto___20330;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___20331)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20230_20326,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20329,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20331], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20233;var owner = G__20234;var opts = G__20235;while(true){
if(typeof notifier.core.t20280 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20280 = (function (input_checker20231,widgetpolling,owner,G__20234,G__20233,input_schema20230,G__20235,validate__7251__auto__,output_checker20232,app,output_schema20229,opts,ufv__,meta20281){
this.input_checker20231 = input_checker20231;
this.widgetpolling = widgetpolling;
this.owner = owner;
this.G__20234 = G__20234;
this.G__20233 = G__20233;
this.input_schema20230 = input_schema20230;
this.G__20235 = G__20235;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_checker20232 = output_checker20232;
this.app = app;
this.output_schema20229 = output_schema20229;
this.opts = opts;
this.ufv__ = ufv__;
this.meta20281 = meta20281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20280.cljs$lang$type = true;
notifier.core.t20280.cljs$lang$ctorStr = "notifier.core/t20280";
notifier.core.t20280.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20280");
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.om$core$IDisplayName$ = true;
notifier.core.t20280.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_){var self__ = this;
var ___$1 = this;return "widgetpolling";
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.om$core$IRender$ = true;
notifier.core.t20280.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,notifier.core.widget_box,self__.app);
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.om$core$IWillUnmount$ = true;
notifier.core.t20280.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),false);
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.om$core$IWillMount$ = true;
notifier.core.t20280.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_){var self__ = this;
var ___$1 = this;var c__10294__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (){var f__10295__auto__ = (function (){var switch__10279__auto__ = ((function (c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (state_20307){var state_val_20308 = (state_20307[(1)]);if((state_val_20308 === (8)))
{var inst_20299 = (state_20307[(2)]);var state_20307__$1 = (function (){var statearr_20309 = state_20307;(statearr_20309[(7)] = inst_20299);
return statearr_20309;
})();var statearr_20310_20332 = state_20307__$1;(statearr_20310_20332[(2)] = null);
(statearr_20310_20332[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20308 === (7)))
{var inst_20289 = (state_20307[(2)]);var inst_20290 = cljs.core.pr_str.call(null,inst_20289);var inst_20291 = console.log(inst_20290);var inst_20292 = cljs.core.PersistentVector.EMPTY_NODE;var inst_20293 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];var inst_20294 = (new cljs.core.PersistentVector(null,1,(5),inst_20292,inst_20293,null));var inst_20295 = om.core.update_BANG_.call(null,self__.app,inst_20294,inst_20289);var inst_20296 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_20297 = cljs.core.async.timeout.call(null,inst_20296);var state_20307__$1 = (function (){var statearr_20311 = state_20307;(statearr_20311[(8)] = inst_20295);
(statearr_20311[(9)] = inst_20291);
return statearr_20311;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20307__$1,(8),inst_20297);
} else
{if((state_val_20308 === (6)))
{var inst_20303 = (state_20307[(2)]);var state_20307__$1 = state_20307;var statearr_20312_20333 = state_20307__$1;(statearr_20312_20333[(2)] = inst_20303);
(statearr_20312_20333[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20308 === (5)))
{var state_20307__$1 = state_20307;var statearr_20313_20334 = state_20307__$1;(statearr_20313_20334[(2)] = null);
(statearr_20313_20334[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20308 === (4)))
{var inst_20286 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_20287 = notifier.core.fetch_widgets.call(null,inst_20286);var state_20307__$1 = state_20307;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20307__$1,(7),inst_20287);
} else
{if((state_val_20308 === (3)))
{var inst_20305 = (state_20307[(2)]);var state_20307__$1 = state_20307;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20307__$1,inst_20305);
} else
{if((state_val_20308 === (2)))
{var inst_20284 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616));var state_20307__$1 = state_20307;if(cljs.core.truth_(inst_20284))
{var statearr_20314_20335 = state_20307__$1;(statearr_20314_20335[(1)] = (4));
} else
{var statearr_20315_20336 = state_20307__$1;(statearr_20315_20336[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20308 === (1)))
{var state_20307__$1 = state_20307;var statearr_20316_20337 = state_20307__$1;(statearr_20316_20337[(2)] = null);
(statearr_20316_20337[(1)] = (2));
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
});})(c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;return ((function (switch__10279__auto__,c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function() {
var state_machine__10280__auto__ = null;
var state_machine__10280__auto____0 = (function (){var statearr_20320 = [null,null,null,null,null,null,null,null,null,null];(statearr_20320[(0)] = state_machine__10280__auto__);
(statearr_20320[(1)] = (1));
return statearr_20320;
});
var state_machine__10280__auto____1 = (function (state_20307){while(true){
var ret_value__10281__auto__ = (function (){try{while(true){
var result__10282__auto__ = switch__10279__auto__.call(null,state_20307);if(cljs.core.keyword_identical_QMARK_.call(null,result__10282__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10282__auto__;
}
break;
}
}catch (e20321){if((e20321 instanceof Object))
{var ex__10283__auto__ = e20321;var statearr_20322_20338 = state_20307;(statearr_20322_20338[(5)] = ex__10283__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20307);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20321;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10281__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20339 = state_20307;
state_20307 = G__20339;
continue;
}
} else
{return ret_value__10281__auto__;
}
break;
}
});
state_machine__10280__auto__ = function(state_20307){
switch(arguments.length){
case 0:
return state_machine__10280__auto____0.call(this);
case 1:
return state_machine__10280__auto____1.call(this,state_20307);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10280__auto____0;
state_machine__10280__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10280__auto____1;
return state_machine__10280__auto__;
})()
;})(switch__10279__auto__,c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
})();var state__10296__auto__ = (function (){var statearr_20323 = f__10295__auto__.call(null);(statearr_20323[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10294__auto__);
return statearr_20323;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10296__auto__);
});})(c__10294__auto__,___$1,validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
);
return c__10294__auto__;
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.om$core$IInitState$ = true;
notifier.core.t20280.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mounted","mounted",-111042616),true], null);
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_20282){var self__ = this;
var _20282__$1 = this;return self__.meta20281;
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.t20280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function (_20282,meta20281__$1){var self__ = this;
var _20282__$1 = this;return (new notifier.core.t20280(self__.input_checker20231,self__.widgetpolling,self__.owner,self__.G__20234,self__.G__20233,self__.input_schema20230,self__.G__20235,self__.validate__7251__auto__,self__.output_checker20232,self__.app,self__.output_schema20229,self__.opts,self__.ufv__,meta20281__$1));
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
notifier.core.__GT_t20280 = ((function (validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328){
return (function __GT_t20280(input_checker20231__$1,widgetpolling__$1,owner__$1,G__20234__$1,G__20233__$1,input_schema20230__$1,G__20235__$1,validate__7251__auto____$1,output_checker20232__$1,app__$1,output_schema20229__$1,opts__$1,ufv____$1,meta20281){return (new notifier.core.t20280(input_checker20231__$1,widgetpolling__$1,owner__$1,G__20234__$1,G__20233__$1,input_schema20230__$1,G__20235__$1,validate__7251__auto____$1,output_checker20232__$1,app__$1,output_schema20229__$1,opts__$1,ufv____$1,meta20281));
});})(validate__7251__auto__,ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
}
return (new notifier.core.t20280(input_checker20231_20327,widgetpolling,owner,G__20234,G__20233,input_schema20230_20326,G__20235,validate__7251__auto__,output_checker20232_20328,app,output_schema20229_20325,opts,ufv___20324,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20340 = output_checker20232_20328.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20340))
{var error__7253__auto___20341 = temp__4126__auto___20340;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___20341)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20229_20325,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20341], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20324,output_schema20229_20325,input_schema20230_20326,input_checker20231_20327,output_checker20232_20328))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widgetpolling),schema.core.make_fn_schema.call(null,output_schema20229_20325,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20230_20326], null)));
notifier.core.__GT_widgetpolling = (function() {
var __GT_widgetpolling = null;
var __GT_widgetpolling__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__);
});
var __GT_widgetpolling__2 = (function (cursor__9028__auto__,m20228){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__,m20228);
});
__GT_widgetpolling = function(cursor__9028__auto__,m20228){
switch(arguments.length){
case 1:
return __GT_widgetpolling__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widgetpolling__2.call(this,cursor__9028__auto__,m20228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$1 = __GT_widgetpolling__1;
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$2 = __GT_widgetpolling__2;
return __GT_widgetpolling;
})()
;
var ufv___20355 = schema.utils.use_fn_validation;var output_schema20343_20356 = schema.core.Any;var input_schema20344_20357 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker20345_20358 = schema.core.checker.call(null,input_schema20344_20357);var output_checker20346_20359 = schema.core.checker.call(null,output_schema20343_20356);/**
* Inputs: [app owner]
*/
notifier.core.om_app = ((function (ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function om_app(G__20347,G__20348){var validate__7251__auto__ = ufv___20355.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20360 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20347,G__20348], null);var temp__4126__auto___20361 = input_checker20345_20358.call(null,args__7252__auto___20360);if(cljs.core.truth_(temp__4126__auto___20361))
{var error__7253__auto___20362 = temp__4126__auto___20361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-app","om-app",-1539149030,null),cljs.core.pr_str.call(null,error__7253__auto___20362)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20344_20357,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20360,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20362], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20347;var owner = G__20348;while(true){
if(typeof notifier.core.t20352 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20352 = (function (owner,G__20348,input_schema20344,input_checker20345,G__20347,output_checker20346,validate__7251__auto__,output_schema20343,om_app,app,ufv__,meta20353){
this.owner = owner;
this.G__20348 = G__20348;
this.input_schema20344 = input_schema20344;
this.input_checker20345 = input_checker20345;
this.G__20347 = G__20347;
this.output_checker20346 = output_checker20346;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_schema20343 = output_schema20343;
this.om_app = om_app;
this.app = app;
this.ufv__ = ufv__;
this.meta20353 = meta20353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20352.cljs$lang$type = true;
notifier.core.t20352.cljs$lang$ctorStr = "notifier.core/t20352";
notifier.core.t20352.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20352");
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
notifier.core.t20352.prototype.om$core$IDisplayName$ = true;
notifier.core.t20352.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function (_){var self__ = this;
var ___$1 = this;return "om-app";
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
notifier.core.t20352.prototype.om$core$IRender$ = true;
notifier.core.t20352.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,notifier.core.widgetpolling,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null)),cljs.core.PersistentVector.EMPTY);
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
notifier.core.t20352.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function (_20354){var self__ = this;
var _20354__$1 = this;return self__.meta20353;
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
notifier.core.t20352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function (_20354,meta20353__$1){var self__ = this;
var _20354__$1 = this;return (new notifier.core.t20352(self__.owner,self__.G__20348,self__.input_schema20344,self__.input_checker20345,self__.G__20347,self__.output_checker20346,self__.validate__7251__auto__,self__.output_schema20343,self__.om_app,self__.app,self__.ufv__,meta20353__$1));
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
notifier.core.__GT_t20352 = ((function (validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359){
return (function __GT_t20352(owner__$1,G__20348__$1,input_schema20344__$1,input_checker20345__$1,G__20347__$1,output_checker20346__$1,validate__7251__auto____$1,output_schema20343__$1,om_app__$1,app__$1,ufv____$1,meta20353){return (new notifier.core.t20352(owner__$1,G__20348__$1,input_schema20344__$1,input_checker20345__$1,G__20347__$1,output_checker20346__$1,validate__7251__auto____$1,output_schema20343__$1,om_app__$1,app__$1,ufv____$1,meta20353));
});})(validate__7251__auto__,ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
}
return (new notifier.core.t20352(owner,G__20348,input_schema20344_20357,input_checker20345_20358,G__20347,output_checker20346_20359,validate__7251__auto__,output_schema20343_20356,om_app,app,ufv___20355,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20363 = output_checker20346_20359.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20363))
{var error__7253__auto___20364 = temp__4126__auto___20363;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-app","om-app",-1539149030,null),cljs.core.pr_str.call(null,error__7253__auto___20364)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20343_20356,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20364], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20355,output_schema20343_20356,input_schema20344_20357,input_checker20345_20358,output_checker20346_20359))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_app),schema.core.make_fn_schema.call(null,output_schema20343_20356,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20344_20357], null)));
notifier.core.__GT_om_app = (function() {
var __GT_om_app = null;
var __GT_om_app__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_app,cursor__9028__auto__);
});
var __GT_om_app__2 = (function (cursor__9028__auto__,m20342){return om.core.build.call(null,notifier.core.om_app,cursor__9028__auto__,m20342);
});
__GT_om_app = function(cursor__9028__auto__,m20342){
switch(arguments.length){
case 1:
return __GT_om_app__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_app__2.call(this,cursor__9028__auto__,m20342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_app.cljs$core$IFn$_invoke$arity$1 = __GT_om_app__1;
__GT_om_app.cljs$core$IFn$_invoke$arity$2 = __GT_om_app__2;
return __GT_om_app;
})()
;
om.core.root.call(null,notifier.core.om_app,notifier.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
var ufv___20379 = schema.utils.use_fn_validation;var output_schema20366_20380 = schema.core.Any;var input_schema20367_20381 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker20368_20382 = schema.core.checker.call(null,input_schema20367_20381);var output_checker20369_20383 = schema.core.checker.call(null,output_schema20366_20380);/**
* Inputs: [app owner opts]
*/
notifier.core.om_nothing = ((function (ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function om_nothing(G__20370,G__20371,G__20372){var validate__7251__auto__ = ufv___20379.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___20384 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__20370,G__20371,G__20372], null);var temp__4126__auto___20385 = input_checker20368_20382.call(null,args__7252__auto___20384);if(cljs.core.truth_(temp__4126__auto___20385))
{var error__7253__auto___20386 = temp__4126__auto___20385;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-nothing","om-nothing",1943336976,null),cljs.core.pr_str.call(null,error__7253__auto___20386)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema20367_20381,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___20384,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20386], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__20370;var owner = G__20371;var opts = G__20372;while(true){
if(typeof notifier.core.t20376 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t20376 = (function (owner,input_checker20368,G__20370,G__20372,om_nothing,output_checker20369,validate__7251__auto__,input_schema20367,app,opts,G__20371,ufv__,output_schema20366,meta20377){
this.owner = owner;
this.input_checker20368 = input_checker20368;
this.G__20370 = G__20370;
this.G__20372 = G__20372;
this.om_nothing = om_nothing;
this.output_checker20369 = output_checker20369;
this.validate__7251__auto__ = validate__7251__auto__;
this.input_schema20367 = input_schema20367;
this.app = app;
this.opts = opts;
this.G__20371 = G__20371;
this.ufv__ = ufv__;
this.output_schema20366 = output_schema20366;
this.meta20377 = meta20377;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t20376.cljs$lang$type = true;
notifier.core.t20376.cljs$lang$ctorStr = "notifier.core/t20376";
notifier.core.t20376.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t20376");
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
notifier.core.t20376.prototype.om$core$IDisplayName$ = true;
notifier.core.t20376.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function (_){var self__ = this;
var ___$1 = this;return "om-nothing";
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
notifier.core.t20376.prototype.om$core$IRender$ = true;
notifier.core.t20376.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function (_){var self__ = this;
var ___$1 = this;return React.DOM.h1(null,"Nothing");
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
notifier.core.t20376.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function (_20378){var self__ = this;
var _20378__$1 = this;return self__.meta20377;
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
notifier.core.t20376.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function (_20378,meta20377__$1){var self__ = this;
var _20378__$1 = this;return (new notifier.core.t20376(self__.owner,self__.input_checker20368,self__.G__20370,self__.G__20372,self__.om_nothing,self__.output_checker20369,self__.validate__7251__auto__,self__.input_schema20367,self__.app,self__.opts,self__.G__20371,self__.ufv__,self__.output_schema20366,meta20377__$1));
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
notifier.core.__GT_t20376 = ((function (validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383){
return (function __GT_t20376(owner__$1,input_checker20368__$1,G__20370__$1,G__20372__$1,om_nothing__$1,output_checker20369__$1,validate__7251__auto____$1,input_schema20367__$1,app__$1,opts__$1,G__20371__$1,ufv____$1,output_schema20366__$1,meta20377){return (new notifier.core.t20376(owner__$1,input_checker20368__$1,G__20370__$1,G__20372__$1,om_nothing__$1,output_checker20369__$1,validate__7251__auto____$1,input_schema20367__$1,app__$1,opts__$1,G__20371__$1,ufv____$1,output_schema20366__$1,meta20377));
});})(validate__7251__auto__,ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
}
return (new notifier.core.t20376(owner,input_checker20368_20382,G__20370,G__20372,om_nothing,output_checker20369_20383,validate__7251__auto__,input_schema20367_20381,app,opts,G__20371,ufv___20379,output_schema20366_20380,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___20387 = output_checker20369_20383.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___20387))
{var error__7253__auto___20388 = temp__4126__auto___20387;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-nothing","om-nothing",1943336976,null),cljs.core.pr_str.call(null,error__7253__auto___20388)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema20366_20380,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___20388], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___20379,output_schema20366_20380,input_schema20367_20381,input_checker20368_20382,output_checker20369_20383))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_nothing),schema.core.make_fn_schema.call(null,output_schema20366_20380,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema20367_20381], null)));
notifier.core.__GT_om_nothing = (function() {
var __GT_om_nothing = null;
var __GT_om_nothing__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_nothing,cursor__9028__auto__);
});
var __GT_om_nothing__2 = (function (cursor__9028__auto__,m20365){return om.core.build.call(null,notifier.core.om_nothing,cursor__9028__auto__,m20365);
});
__GT_om_nothing = function(cursor__9028__auto__,m20365){
switch(arguments.length){
case 1:
return __GT_om_nothing__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_nothing__2.call(this,cursor__9028__auto__,m20365);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_nothing.cljs$core$IFn$_invoke$arity$1 = __GT_om_nothing__1;
__GT_om_nothing.cljs$core$IFn$_invoke$arity$2 = __GT_om_nothing__2;
return __GT_om_nothing;
})()
;

//# sourceMappingURL=core.js.map