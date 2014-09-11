// Compiled by ClojureScript 0.0-2307
goog.provide('notifier.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('secretary.core');
goog.require('om_tools.dom');
goog.require('goog.history.EventType');
goog.require('om_tools.dom');
goog.require('om_tools.core');
goog.require('cljs_http.client');
goog.require('goog.history.EventType');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('om.core');
goog.require('om.core');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('cljs_http.client');
cljs.core.enable_console_print_BANG_.call(null);
notifier.core.history = (new goog.History());
notifier.core.navigate = (function navigate(url){cljs.core.println.call(null,"Navigate",url);
return window.location = url;
});
notifier.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"widgets","widgets",-159098978),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"route","route",329891309),""], null));
notifier.core.fetch_widgets = (function fetch_widgets(url){var c__10313__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10313__auto__){
return (function (){var f__10314__auto__ = (function (){var switch__10298__auto__ = ((function (c__10313__auto__){
return (function (state_35256){var state_val_35257 = (state_35256[(1)]);if((state_val_35257 === (5)))
{var inst_35252 = (state_35256[(2)]);var inst_35253 = cljs.core.get.call(null,inst_35252,new cljs.core.Keyword(null,"body","body",-2049205669));var inst_35254 = cljs.core.vec.call(null,inst_35253);var state_35256__$1 = state_35256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35256__$1,inst_35254);
} else
{if((state_val_35257 === (4)))
{var inst_35246 = (state_35256[(7)]);var state_35256__$1 = state_35256;var statearr_35258_35270 = state_35256__$1;(statearr_35258_35270[(2)] = inst_35246);
(statearr_35258_35270[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35257 === (3)))
{var inst_35246 = (state_35256[(7)]);var inst_35249 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35246);var state_35256__$1 = state_35256;var statearr_35259_35271 = state_35256__$1;(statearr_35259_35271[(2)] = inst_35249);
(statearr_35259_35271[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35257 === (2)))
{var inst_35246 = (state_35256[(7)]);var inst_35246__$1 = (state_35256[(2)]);var inst_35247 = cljs.core.seq_QMARK_.call(null,inst_35246__$1);var state_35256__$1 = (function (){var statearr_35260 = state_35256;(statearr_35260[(7)] = inst_35246__$1);
return statearr_35260;
})();if(inst_35247)
{var statearr_35261_35272 = state_35256__$1;(statearr_35261_35272[(1)] = (3));
} else
{var statearr_35262_35273 = state_35256__$1;(statearr_35262_35273[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35257 === (1)))
{var inst_35244 = cljs_http.client.get.call(null,url);var state_35256__$1 = state_35256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35256__$1,(2),inst_35244);
} else
{return null;
}
}
}
}
}
});})(c__10313__auto__))
;return ((function (switch__10298__auto__,c__10313__auto__){
return (function() {
var state_machine__10299__auto__ = null;
var state_machine__10299__auto____0 = (function (){var statearr_35266 = [null,null,null,null,null,null,null,null];(statearr_35266[(0)] = state_machine__10299__auto__);
(statearr_35266[(1)] = (1));
return statearr_35266;
});
var state_machine__10299__auto____1 = (function (state_35256){while(true){
var ret_value__10300__auto__ = (function (){try{while(true){
var result__10301__auto__ = switch__10298__auto__.call(null,state_35256);if(cljs.core.keyword_identical_QMARK_.call(null,result__10301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10301__auto__;
}
break;
}
}catch (e35267){if((e35267 instanceof Object))
{var ex__10302__auto__ = e35267;var statearr_35268_35274 = state_35256;(statearr_35268_35274[(5)] = ex__10302__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35267;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35275 = state_35256;
state_35256 = G__35275;
continue;
}
} else
{return ret_value__10300__auto__;
}
break;
}
});
state_machine__10299__auto__ = function(state_35256){
switch(arguments.length){
case 0:
return state_machine__10299__auto____0.call(this);
case 1:
return state_machine__10299__auto____1.call(this,state_35256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10299__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10299__auto____0;
state_machine__10299__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10299__auto____1;
return state_machine__10299__auto__;
})()
;})(switch__10298__auto__,c__10313__auto__))
})();var state__10315__auto__ = (function (){var statearr_35269 = f__10314__auto__.call(null);(statearr_35269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10313__auto__);
return statearr_35269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10315__auto__);
});})(c__10313__auto__))
);
return c__10313__auto__;
});
var ufv___35298 = schema.utils.use_fn_validation;var output_schema35277_35299 = schema.core.Any;var input_schema35278_35300 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker35279_35301 = schema.core.checker.call(null,input_schema35278_35300);var output_checker35280_35302 = schema.core.checker.call(null,output_schema35277_35299);/**
* Inputs: [{:keys [name id]} owner opts]
*/
notifier.core.widget = ((function (ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function widget(G__35281,G__35282,G__35283){var validate__7251__auto__ = ufv___35298.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35303 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35281,G__35282,G__35283], null);var temp__4126__auto___35304 = input_checker35279_35301.call(null,args__7252__auto___35303);if(cljs.core.truth_(temp__4126__auto___35304))
{var error__7253__auto___35305 = temp__4126__auto___35304;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___35305)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35278_35300,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35303,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35305], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__35292 = G__35281;var map__35293 = G__35292;var map__35293__$1 = ((cljs.core.seq_QMARK_.call(null,map__35293))?cljs.core.apply.call(null,cljs.core.hash_map,map__35293):map__35293);var id = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var name = cljs.core.get.call(null,map__35293__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner = G__35282;var opts = G__35283;var G__35292__$1 = G__35292;var owner__$1 = owner;var opts__$1 = opts;while(true){
var map__35294 = G__35292__$1;var map__35294__$1 = ((cljs.core.seq_QMARK_.call(null,map__35294))?cljs.core.apply.call(null,cljs.core.hash_map,map__35294):map__35294);var id__$1 = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var name__$1 = cljs.core.get.call(null,map__35294__$1,new cljs.core.Keyword(null,"name","name",1843675177));var owner__$2 = owner__$1;var opts__$2 = opts__$1;if(typeof notifier.core.t35295 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35295 = (function (map__35293,G__35281,owner,output_checker35280,G__35282,name,input_checker35279,output_schema35277,validate__7251__auto__,widget,G__35283,input_schema35278,id,map__35294,opts,ufv__,G__35292,meta35296){
this.map__35293 = map__35293;
this.G__35281 = G__35281;
this.owner = owner;
this.output_checker35280 = output_checker35280;
this.G__35282 = G__35282;
this.name = name;
this.input_checker35279 = input_checker35279;
this.output_schema35277 = output_schema35277;
this.validate__7251__auto__ = validate__7251__auto__;
this.widget = widget;
this.G__35283 = G__35283;
this.input_schema35278 = input_schema35278;
this.id = id;
this.map__35294 = map__35294;
this.opts = opts;
this.ufv__ = ufv__;
this.G__35292 = G__35292;
this.meta35296 = meta35296;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35295.cljs$lang$type = true;
notifier.core.t35295.cljs$lang$ctorStr = "notifier.core/t35295";
notifier.core.t35295.cljs$lang$ctorPrWriter = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35295");
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
notifier.core.t35295.prototype.om$core$IDisplayName$ = true;
notifier.core.t35295.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function (_){var self__ = this;
var ___$1 = this;return "widget";
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
notifier.core.t35295.prototype.om$core$IRender$ = true;
notifier.core.t35295.prototype.om$core$IRender$render$arity$1 = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.li,cljs.core.apply.call(null,React.DOM.a,{"href": om_tools.dom.format_opts.call(null,notifier.core.rIncident.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)))},cljs.core.flatten.call(null,(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[("name:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.name)+"id:"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.id))],null)))),cljs.core.PersistentVector.EMPTY);
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
notifier.core.t35295.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function (_35297){var self__ = this;
var _35297__$1 = this;return self__.meta35296;
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
notifier.core.t35295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function (_35297,meta35296__$1){var self__ = this;
var _35297__$1 = this;return (new notifier.core.t35295(self__.map__35293,self__.G__35281,self__.owner,self__.output_checker35280,self__.G__35282,self__.name,self__.input_checker35279,self__.output_schema35277,self__.validate__7251__auto__,self__.widget,self__.G__35283,self__.input_schema35278,self__.id,self__.map__35294,self__.opts,self__.ufv__,self__.G__35292,meta35296__$1));
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
notifier.core.__GT_t35295 = ((function (map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302){
return (function __GT_t35295(map__35293__$2,G__35281__$1,owner__$3,output_checker35280__$1,G__35282__$1,name__$2,input_checker35279__$1,output_schema35277__$1,validate__7251__auto____$1,widget__$1,G__35283__$1,input_schema35278__$1,id__$2,map__35294__$2,opts__$3,ufv____$1,G__35292__$2,meta35296){return (new notifier.core.t35295(map__35293__$2,G__35281__$1,owner__$3,output_checker35280__$1,G__35282__$1,name__$2,input_checker35279__$1,output_schema35277__$1,validate__7251__auto____$1,widget__$1,G__35283__$1,input_schema35278__$1,id__$2,map__35294__$2,opts__$3,ufv____$1,G__35292__$2,meta35296));
});})(map__35294,map__35294__$1,id__$1,name__$1,owner__$2,opts__$2,G__35292,map__35293,map__35293__$1,id,name,owner,opts,validate__7251__auto__,ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
}
return (new notifier.core.t35295(map__35293__$1,G__35281,owner__$2,output_checker35280_35302,G__35282,name__$1,input_checker35279_35301,output_schema35277_35299,validate__7251__auto__,widget,G__35283,input_schema35278_35300,id__$1,map__35294__$1,opts__$2,ufv___35298,G__35292__$1,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35306 = output_checker35280_35302.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35306))
{var error__7253__auto___35307 = temp__4126__auto___35306;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget","widget",786562584,null),cljs.core.pr_str.call(null,error__7253__auto___35307)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35277_35299,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35307], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35298,output_schema35277_35299,input_schema35278_35300,input_checker35279_35301,output_checker35280_35302))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget),schema.core.make_fn_schema.call(null,output_schema35277_35299,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35278_35300], null)));
notifier.core.__GT_widget = (function() {
var __GT_widget = null;
var __GT_widget__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__);
});
var __GT_widget__2 = (function (cursor__9028__auto__,m35276){return om.core.build.call(null,notifier.core.widget,cursor__9028__auto__,m35276);
});
__GT_widget = function(cursor__9028__auto__,m35276){
switch(arguments.length){
case 1:
return __GT_widget__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget__2.call(this,cursor__9028__auto__,m35276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget.cljs$core$IFn$_invoke$arity$1 = __GT_widget__1;
__GT_widget.cljs$core$IFn$_invoke$arity$2 = __GT_widget__2;
return __GT_widget;
})()
;
var ufv___35328 = schema.utils.use_fn_validation;var output_schema35309_35329 = schema.core.Any;var input_schema35310_35330 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker35311_35331 = schema.core.checker.call(null,input_schema35310_35330);var output_checker35312_35332 = schema.core.checker.call(null,output_schema35309_35329);/**
* Inputs: [{:keys [widgets]}]
*/
notifier.core.widget_list = ((function (ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function widget_list(G__35313){var validate__7251__auto__ = ufv___35328.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35333 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35313], null);var temp__4126__auto___35334 = input_checker35311_35331.call(null,args__7252__auto___35333);if(cljs.core.truth_(temp__4126__auto___35334))
{var error__7253__auto___35335 = temp__4126__auto___35334;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___35335)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35310_35330,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35333,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35335], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__35322 = G__35313;var map__35323 = G__35322;var map__35323__$1 = ((cljs.core.seq_QMARK_.call(null,map__35323))?cljs.core.apply.call(null,cljs.core.hash_map,map__35323):map__35323);var widgets = cljs.core.get.call(null,map__35323__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));var G__35322__$1 = G__35322;while(true){
var map__35324 = G__35322__$1;var map__35324__$1 = ((cljs.core.seq_QMARK_.call(null,map__35324))?cljs.core.apply.call(null,cljs.core.hash_map,map__35324):map__35324);var widgets__$1 = cljs.core.get.call(null,map__35324__$1,new cljs.core.Keyword(null,"widgets","widgets",-159098978));if(typeof notifier.core.t35325 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35325 = (function (output_schema35309,widgets,input_schema35310,map__35324,map__35323,input_checker35311,widget_list,G__35313,output_checker35312,validate__7251__auto__,G__35322,ufv__,meta35326){
this.output_schema35309 = output_schema35309;
this.widgets = widgets;
this.input_schema35310 = input_schema35310;
this.map__35324 = map__35324;
this.map__35323 = map__35323;
this.input_checker35311 = input_checker35311;
this.widget_list = widget_list;
this.G__35313 = G__35313;
this.output_checker35312 = output_checker35312;
this.validate__7251__auto__ = validate__7251__auto__;
this.G__35322 = G__35322;
this.ufv__ = ufv__;
this.meta35326 = meta35326;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35325.cljs$lang$type = true;
notifier.core.t35325.cljs$lang$ctorStr = "notifier.core/t35325";
notifier.core.t35325.cljs$lang$ctorPrWriter = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35325");
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
notifier.core.t35325.prototype.om$core$IDisplayName$ = true;
notifier.core.t35325.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-list";
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
notifier.core.t35325.prototype.om$core$IRender$ = true;
notifier.core.t35325.prototype.om$core$IRender$render$arity$1 = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.ul,om.core.build_all.call(null,notifier.core.widget,self__.widgets),cljs.core.PersistentVector.EMPTY);
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
notifier.core.t35325.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function (_35327){var self__ = this;
var _35327__$1 = this;return self__.meta35326;
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
notifier.core.t35325.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function (_35327,meta35326__$1){var self__ = this;
var _35327__$1 = this;return (new notifier.core.t35325(self__.output_schema35309,self__.widgets,self__.input_schema35310,self__.map__35324,self__.map__35323,self__.input_checker35311,self__.widget_list,self__.G__35313,self__.output_checker35312,self__.validate__7251__auto__,self__.G__35322,self__.ufv__,meta35326__$1));
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
notifier.core.__GT_t35325 = ((function (map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332){
return (function __GT_t35325(output_schema35309__$1,widgets__$2,input_schema35310__$1,map__35324__$2,map__35323__$2,input_checker35311__$1,widget_list__$1,G__35313__$1,output_checker35312__$1,validate__7251__auto____$1,G__35322__$2,ufv____$1,meta35326){return (new notifier.core.t35325(output_schema35309__$1,widgets__$2,input_schema35310__$1,map__35324__$2,map__35323__$2,input_checker35311__$1,widget_list__$1,G__35313__$1,output_checker35312__$1,validate__7251__auto____$1,G__35322__$2,ufv____$1,meta35326));
});})(map__35324,map__35324__$1,widgets__$1,G__35322,map__35323,map__35323__$1,widgets,validate__7251__auto__,ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
}
return (new notifier.core.t35325(output_schema35309_35329,widgets__$1,input_schema35310_35330,map__35324__$1,map__35323__$1,input_checker35311_35331,widget_list,G__35313,output_checker35312_35332,validate__7251__auto__,G__35322__$1,ufv___35328,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35336 = output_checker35312_35332.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35336))
{var error__7253__auto___35337 = temp__4126__auto___35336;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-list","widget-list",1944722190,null),cljs.core.pr_str.call(null,error__7253__auto___35337)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35309_35329,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35337], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35328,output_schema35309_35329,input_schema35310_35330,input_checker35311_35331,output_checker35312_35332))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_list),schema.core.make_fn_schema.call(null,output_schema35309_35329,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35310_35330], null)));
notifier.core.__GT_widget_list = (function() {
var __GT_widget_list = null;
var __GT_widget_list__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__);
});
var __GT_widget_list__2 = (function (cursor__9028__auto__,m35308){return om.core.build.call(null,notifier.core.widget_list,cursor__9028__auto__,m35308);
});
__GT_widget_list = function(cursor__9028__auto__,m35308){
switch(arguments.length){
case 1:
return __GT_widget_list__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_list__2.call(this,cursor__9028__auto__,m35308);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_list.cljs$core$IFn$_invoke$arity$1 = __GT_widget_list__1;
__GT_widget_list.cljs$core$IFn$_invoke$arity$2 = __GT_widget_list__2;
return __GT_widget_list;
})()
;
var ufv___35351 = schema.utils.use_fn_validation;var output_schema35339_35352 = schema.core.Any;var input_schema35340_35353 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker35341_35354 = schema.core.checker.call(null,input_schema35340_35353);var output_checker35342_35355 = schema.core.checker.call(null,output_schema35339_35352);/**
* Inputs: [app owner]
*/
notifier.core.widget_box = ((function (ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function widget_box(G__35343,G__35344){var validate__7251__auto__ = ufv___35351.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35356 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35343,G__35344], null);var temp__4126__auto___35357 = input_checker35341_35354.call(null,args__7252__auto___35356);if(cljs.core.truth_(temp__4126__auto___35357))
{var error__7253__auto___35358 = temp__4126__auto___35357;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___35358)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35340_35353,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35356,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35358], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__35343;var owner = G__35344;while(true){
if(typeof notifier.core.t35348 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35348 = (function (G__35343,owner,input_schema35340,input_checker35341,G__35344,validate__7251__auto__,output_checker35342,widget_box,app,output_schema35339,ufv__,meta35349){
this.G__35343 = G__35343;
this.owner = owner;
this.input_schema35340 = input_schema35340;
this.input_checker35341 = input_checker35341;
this.G__35344 = G__35344;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_checker35342 = output_checker35342;
this.widget_box = widget_box;
this.app = app;
this.output_schema35339 = output_schema35339;
this.ufv__ = ufv__;
this.meta35349 = meta35349;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35348.cljs$lang$type = true;
notifier.core.t35348.cljs$lang$ctorStr = "notifier.core/t35348";
notifier.core.t35348.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35348");
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
notifier.core.t35348.prototype.om$core$IDisplayName$ = true;
notifier.core.t35348.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function (_){var self__ = this;
var ___$1 = this;return "widget-box";
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
notifier.core.t35348.prototype.om$core$IRender$ = true;
notifier.core.t35348.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.h1(null,"Widgets1"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,notifier.core.widget_list,self__.app)],null)));
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
notifier.core.t35348.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function (_35350){var self__ = this;
var _35350__$1 = this;return self__.meta35349;
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
notifier.core.t35348.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function (_35350,meta35349__$1){var self__ = this;
var _35350__$1 = this;return (new notifier.core.t35348(self__.G__35343,self__.owner,self__.input_schema35340,self__.input_checker35341,self__.G__35344,self__.validate__7251__auto__,self__.output_checker35342,self__.widget_box,self__.app,self__.output_schema35339,self__.ufv__,meta35349__$1));
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
notifier.core.__GT_t35348 = ((function (validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355){
return (function __GT_t35348(G__35343__$1,owner__$1,input_schema35340__$1,input_checker35341__$1,G__35344__$1,validate__7251__auto____$1,output_checker35342__$1,widget_box__$1,app__$1,output_schema35339__$1,ufv____$1,meta35349){return (new notifier.core.t35348(G__35343__$1,owner__$1,input_schema35340__$1,input_checker35341__$1,G__35344__$1,validate__7251__auto____$1,output_checker35342__$1,widget_box__$1,app__$1,output_schema35339__$1,ufv____$1,meta35349));
});})(validate__7251__auto__,ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
}
return (new notifier.core.t35348(G__35343,owner,input_schema35340_35353,input_checker35341_35354,G__35344,validate__7251__auto__,output_checker35342_35355,widget_box,app,output_schema35339_35352,ufv___35351,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35359 = output_checker35342_35355.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35359))
{var error__7253__auto___35360 = temp__4126__auto___35359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widget-box","widget-box",1688005306,null),cljs.core.pr_str.call(null,error__7253__auto___35360)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35339_35352,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35360], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35351,output_schema35339_35352,input_schema35340_35353,input_checker35341_35354,output_checker35342_35355))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widget_box),schema.core.make_fn_schema.call(null,output_schema35339_35352,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35340_35353], null)));
notifier.core.__GT_widget_box = (function() {
var __GT_widget_box = null;
var __GT_widget_box__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__);
});
var __GT_widget_box__2 = (function (cursor__9028__auto__,m35338){return om.core.build.call(null,notifier.core.widget_box,cursor__9028__auto__,m35338);
});
__GT_widget_box = function(cursor__9028__auto__,m35338){
switch(arguments.length){
case 1:
return __GT_widget_box__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widget_box__2.call(this,cursor__9028__auto__,m35338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widget_box.cljs$core$IFn$_invoke$arity$1 = __GT_widget_box__1;
__GT_widget_box.cljs$core$IFn$_invoke$arity$2 = __GT_widget_box__2;
return __GT_widget_box;
})()
;
var ufv___35455 = schema.utils.use_fn_validation;var output_schema35362_35456 = schema.core.Any;var input_schema35363_35457 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker35364_35458 = schema.core.checker.call(null,input_schema35363_35457);var output_checker35365_35459 = schema.core.checker.call(null,output_schema35362_35456);/**
* Inputs: [app owner opts]
*/
notifier.core.widgetpolling = ((function (ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function widgetpolling(G__35366,G__35367,G__35368){var validate__7251__auto__ = ufv___35455.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35460 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35366,G__35367,G__35368], null);var temp__4126__auto___35461 = input_checker35364_35458.call(null,args__7252__auto___35460);if(cljs.core.truth_(temp__4126__auto___35461))
{var error__7253__auto___35462 = temp__4126__auto___35461;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___35462)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35363_35457,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35460,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35462], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__35366;var owner = G__35367;var opts = G__35368;while(true){
if(typeof notifier.core.t35412 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35412 = (function (widgetpolling,owner,output_checker35365,G__35367,input_checker35364,G__35368,output_schema35362,validate__7251__auto__,G__35366,app,opts,ufv__,input_schema35363,meta35413){
this.widgetpolling = widgetpolling;
this.owner = owner;
this.output_checker35365 = output_checker35365;
this.G__35367 = G__35367;
this.input_checker35364 = input_checker35364;
this.G__35368 = G__35368;
this.output_schema35362 = output_schema35362;
this.validate__7251__auto__ = validate__7251__auto__;
this.G__35366 = G__35366;
this.app = app;
this.opts = opts;
this.ufv__ = ufv__;
this.input_schema35363 = input_schema35363;
this.meta35413 = meta35413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35412.cljs$lang$type = true;
notifier.core.t35412.cljs$lang$ctorStr = "notifier.core/t35412";
notifier.core.t35412.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35412");
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.om$core$IDisplayName$ = true;
notifier.core.t35412.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_){var self__ = this;
var ___$1 = this;return "widgetpolling";
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.om$core$IRender$ = true;
notifier.core.t35412.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.build.call(null,notifier.core.widget_box,self__.app);
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.om$core$IWillUnmount$ = true;
notifier.core.t35412.prototype.om$core$IWillUnmount$will_unmount$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_){var self__ = this;
var ___$1 = this;return om.core.set_state_BANG_.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616),false);
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.om$core$IWillMount$ = true;
notifier.core.t35412.prototype.om$core$IWillMount$will_mount$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_){var self__ = this;
var ___$1 = this;var c__10313__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (){var f__10314__auto__ = (function (){var switch__10298__auto__ = ((function (c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (state_35438){var state_val_35439 = (state_35438[(1)]);if((state_val_35439 === (8)))
{var inst_35430 = (state_35438[(2)]);var state_35438__$1 = (function (){var statearr_35440 = state_35438;(statearr_35440[(7)] = inst_35430);
return statearr_35440;
})();var statearr_35441_35463 = state_35438__$1;(statearr_35441_35463[(2)] = null);
(statearr_35441_35463[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35439 === (7)))
{var inst_35421 = (state_35438[(2)]);var inst_35422 = cljs.core.println.call(null,inst_35421);var inst_35423 = cljs.core.PersistentVector.EMPTY_NODE;var inst_35424 = [new cljs.core.Keyword(null,"widgets","widgets",-159098978)];var inst_35425 = (new cljs.core.PersistentVector(null,1,(5),inst_35423,inst_35424,null));var inst_35426 = om.core.update_BANG_.call(null,self__.app,inst_35425,inst_35421);var inst_35427 = new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_35428 = cljs.core.async.timeout.call(null,inst_35427);var state_35438__$1 = (function (){var statearr_35442 = state_35438;(statearr_35442[(8)] = inst_35422);
(statearr_35442[(9)] = inst_35426);
return statearr_35442;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35438__$1,(8),inst_35428);
} else
{if((state_val_35439 === (6)))
{var inst_35434 = (state_35438[(2)]);var state_35438__$1 = state_35438;var statearr_35443_35464 = state_35438__$1;(statearr_35443_35464[(2)] = inst_35434);
(statearr_35443_35464[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35439 === (5)))
{var state_35438__$1 = state_35438;var statearr_35444_35465 = state_35438__$1;(statearr_35444_35465[(2)] = null);
(statearr_35444_35465[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35439 === (4)))
{var inst_35418 = new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(self__.opts);var inst_35419 = notifier.core.fetch_widgets.call(null,inst_35418);var state_35438__$1 = state_35438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35438__$1,(7),inst_35419);
} else
{if((state_val_35439 === (3)))
{var inst_35436 = (state_35438[(2)]);var state_35438__$1 = state_35438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35438__$1,inst_35436);
} else
{if((state_val_35439 === (2)))
{var inst_35416 = om.core.get_state.call(null,self__.owner,new cljs.core.Keyword(null,"mounted","mounted",-111042616));var state_35438__$1 = state_35438;if(cljs.core.truth_(inst_35416))
{var statearr_35445_35466 = state_35438__$1;(statearr_35445_35466[(1)] = (4));
} else
{var statearr_35446_35467 = state_35438__$1;(statearr_35446_35467[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35439 === (1)))
{var state_35438__$1 = state_35438;var statearr_35447_35468 = state_35438__$1;(statearr_35447_35468[(2)] = null);
(statearr_35447_35468[(1)] = (2));
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
});})(c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;return ((function (switch__10298__auto__,c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function() {
var state_machine__10299__auto__ = null;
var state_machine__10299__auto____0 = (function (){var statearr_35451 = [null,null,null,null,null,null,null,null,null,null];(statearr_35451[(0)] = state_machine__10299__auto__);
(statearr_35451[(1)] = (1));
return statearr_35451;
});
var state_machine__10299__auto____1 = (function (state_35438){while(true){
var ret_value__10300__auto__ = (function (){try{while(true){
var result__10301__auto__ = switch__10298__auto__.call(null,state_35438);if(cljs.core.keyword_identical_QMARK_.call(null,result__10301__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__10301__auto__;
}
break;
}
}catch (e35452){if((e35452 instanceof Object))
{var ex__10302__auto__ = e35452;var statearr_35453_35469 = state_35438;(statearr_35453_35469[(5)] = ex__10302__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35438);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35452;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__10300__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35470 = state_35438;
state_35438 = G__35470;
continue;
}
} else
{return ret_value__10300__auto__;
}
break;
}
});
state_machine__10299__auto__ = function(state_35438){
switch(arguments.length){
case 0:
return state_machine__10299__auto____0.call(this);
case 1:
return state_machine__10299__auto____1.call(this,state_35438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__10299__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__10299__auto____0;
state_machine__10299__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__10299__auto____1;
return state_machine__10299__auto__;
})()
;})(switch__10298__auto__,c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
})();var state__10315__auto__ = (function (){var statearr_35454 = f__10314__auto__.call(null);(statearr_35454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__10313__auto__);
return statearr_35454;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__10315__auto__);
});})(c__10313__auto__,___$1,validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
);
return c__10313__auto__;
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.om$core$IInitState$ = true;
notifier.core.t35412.prototype.om$core$IInitState$init_state$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_){var self__ = this;
var ___$1 = this;return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mounted","mounted",-111042616),true], null);
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_35414){var self__ = this;
var _35414__$1 = this;return self__.meta35413;
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.t35412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function (_35414,meta35413__$1){var self__ = this;
var _35414__$1 = this;return (new notifier.core.t35412(self__.widgetpolling,self__.owner,self__.output_checker35365,self__.G__35367,self__.input_checker35364,self__.G__35368,self__.output_schema35362,self__.validate__7251__auto__,self__.G__35366,self__.app,self__.opts,self__.ufv__,self__.input_schema35363,meta35413__$1));
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
notifier.core.__GT_t35412 = ((function (validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459){
return (function __GT_t35412(widgetpolling__$1,owner__$1,output_checker35365__$1,G__35367__$1,input_checker35364__$1,G__35368__$1,output_schema35362__$1,validate__7251__auto____$1,G__35366__$1,app__$1,opts__$1,ufv____$1,input_schema35363__$1,meta35413){return (new notifier.core.t35412(widgetpolling__$1,owner__$1,output_checker35365__$1,G__35367__$1,input_checker35364__$1,G__35368__$1,output_schema35362__$1,validate__7251__auto____$1,G__35366__$1,app__$1,opts__$1,ufv____$1,input_schema35363__$1,meta35413));
});})(validate__7251__auto__,ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
}
return (new notifier.core.t35412(widgetpolling,owner,output_checker35365_35459,G__35367,input_checker35364_35458,G__35368,output_schema35362_35456,validate__7251__auto__,G__35366,app,opts,ufv___35455,input_schema35363_35457,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35471 = output_checker35365_35459.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35471))
{var error__7253__auto___35472 = temp__4126__auto___35471;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"widgetpolling","widgetpolling",447199618,null),cljs.core.pr_str.call(null,error__7253__auto___35472)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35362_35456,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35472], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35455,output_schema35362_35456,input_schema35363_35457,input_checker35364_35458,output_checker35365_35459))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.widgetpolling),schema.core.make_fn_schema.call(null,output_schema35362_35456,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35363_35457], null)));
notifier.core.__GT_widgetpolling = (function() {
var __GT_widgetpolling = null;
var __GT_widgetpolling__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__);
});
var __GT_widgetpolling__2 = (function (cursor__9028__auto__,m35361){return om.core.build.call(null,notifier.core.widgetpolling,cursor__9028__auto__,m35361);
});
__GT_widgetpolling = function(cursor__9028__auto__,m35361){
switch(arguments.length){
case 1:
return __GT_widgetpolling__1.call(this,cursor__9028__auto__);
case 2:
return __GT_widgetpolling__2.call(this,cursor__9028__auto__,m35361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$1 = __GT_widgetpolling__1;
__GT_widgetpolling.cljs$core$IFn$_invoke$arity$2 = __GT_widgetpolling__2;
return __GT_widgetpolling;
})()
;
var ufv___35493 = schema.utils.use_fn_validation;var output_schema35474_35494 = schema.core.Any;var input_schema35475_35495 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null))], null);var input_checker35476_35496 = schema.core.checker.call(null,input_schema35475_35495);var output_checker35477_35497 = schema.core.checker.call(null,output_schema35474_35494);/**
* Inputs: [{view :view}]
*/
notifier.core.drawNav = ((function (ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function drawNav(G__35478){var validate__7251__auto__ = ufv___35493.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35498 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35478], null);var temp__4126__auto___35499 = input_checker35476_35496.call(null,args__7252__auto___35498);if(cljs.core.truth_(temp__4126__auto___35499))
{var error__7253__auto___35500 = temp__4126__auto___35499;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"drawNav","drawNav",1843829287,null),cljs.core.pr_str.call(null,error__7253__auto___35500)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35475_35495,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35498,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35500], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__35487 = G__35478;var map__35488 = G__35487;var map__35488__$1 = ((cljs.core.seq_QMARK_.call(null,map__35488))?cljs.core.apply.call(null,cljs.core.hash_map,map__35488):map__35488);var view = cljs.core.get.call(null,map__35488__$1,new cljs.core.Keyword(null,"view","view",1247994814));var G__35487__$1 = G__35487;while(true){
var map__35489 = G__35487__$1;var map__35489__$1 = ((cljs.core.seq_QMARK_.call(null,map__35489))?cljs.core.apply.call(null,cljs.core.hash_map,map__35489):map__35489);var view__$1 = cljs.core.get.call(null,map__35489__$1,new cljs.core.Keyword(null,"view","view",1247994814));if(typeof notifier.core.t35490 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35490 = (function (view,G__35478,input_checker35476,drawNav,input_schema35475,G__35487,map__35489,validate__7251__auto__,output_schema35474,map__35488,ufv__,output_checker35477,meta35491){
this.view = view;
this.G__35478 = G__35478;
this.input_checker35476 = input_checker35476;
this.drawNav = drawNav;
this.input_schema35475 = input_schema35475;
this.G__35487 = G__35487;
this.map__35489 = map__35489;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_schema35474 = output_schema35474;
this.map__35488 = map__35488;
this.ufv__ = ufv__;
this.output_checker35477 = output_checker35477;
this.meta35491 = meta35491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35490.cljs$lang$type = true;
notifier.core.t35490.cljs$lang$ctorStr = "notifier.core/t35490";
notifier.core.t35490.cljs$lang$ctorPrWriter = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35490");
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
notifier.core.t35490.prototype.om$core$IDisplayName$ = true;
notifier.core.t35490.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (_){var self__ = this;
var ___$1 = this;return "drawNav";
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
notifier.core.t35490.prototype.om$core$IRender$ = true;
notifier.core.t35490.prototype.om$core$IRender$render$arity$1 = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,React.DOM.button({"style": {"color": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,self__.view,new cljs.core.Keyword(null,"incidents","incidents",-1507672681)))?"black":"white"))}, "onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (){return notifier.core.navigate.call(null,notifier.core.rIncidents.call(null));
});})(___$1,map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
)},"First route"),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.button({"style": {"color": om_tools.dom.format_opts.call(null,((cljs.core._EQ_.call(null,self__.view,new cljs.core.Keyword(null,"messages","messages",345434482)))?"black":"white"))}, "onClick": om_tools.dom.format_opts.call(null,((function (___$1,map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (){return notifier.core.navigate.call(null,notifier.core.rMessages.call(null));
});})(___$1,map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
)},"Second route")],null)));
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
notifier.core.t35490.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (_35492){var self__ = this;
var _35492__$1 = this;return self__.meta35491;
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
notifier.core.t35490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function (_35492,meta35491__$1){var self__ = this;
var _35492__$1 = this;return (new notifier.core.t35490(self__.view,self__.G__35478,self__.input_checker35476,self__.drawNav,self__.input_schema35475,self__.G__35487,self__.map__35489,self__.validate__7251__auto__,self__.output_schema35474,self__.map__35488,self__.ufv__,self__.output_checker35477,meta35491__$1));
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
notifier.core.__GT_t35490 = ((function (map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497){
return (function __GT_t35490(view__$2,G__35478__$1,input_checker35476__$1,drawNav__$1,input_schema35475__$1,G__35487__$2,map__35489__$2,validate__7251__auto____$1,output_schema35474__$1,map__35488__$2,ufv____$1,output_checker35477__$1,meta35491){return (new notifier.core.t35490(view__$2,G__35478__$1,input_checker35476__$1,drawNav__$1,input_schema35475__$1,G__35487__$2,map__35489__$2,validate__7251__auto____$1,output_schema35474__$1,map__35488__$2,ufv____$1,output_checker35477__$1,meta35491));
});})(map__35489,map__35489__$1,view__$1,G__35487,map__35488,map__35488__$1,view,validate__7251__auto__,ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
}
return (new notifier.core.t35490(view__$1,G__35478,input_checker35476_35496,drawNav,input_schema35475_35495,G__35487__$1,map__35489__$1,validate__7251__auto__,output_schema35474_35494,map__35488__$1,ufv___35493,output_checker35477_35497,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35501 = output_checker35477_35497.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35501))
{var error__7253__auto___35502 = temp__4126__auto___35501;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"drawNav","drawNav",1843829287,null),cljs.core.pr_str.call(null,error__7253__auto___35502)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35474_35494,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35502], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35493,output_schema35474_35494,input_schema35475_35495,input_checker35476_35496,output_checker35477_35497))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.drawNav),schema.core.make_fn_schema.call(null,output_schema35474_35494,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35475_35495], null)));
notifier.core.__GT_drawNav = (function() {
var __GT_drawNav = null;
var __GT_drawNav__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.drawNav,cursor__9028__auto__);
});
var __GT_drawNav__2 = (function (cursor__9028__auto__,m35473){return om.core.build.call(null,notifier.core.drawNav,cursor__9028__auto__,m35473);
});
__GT_drawNav = function(cursor__9028__auto__,m35473){
switch(arguments.length){
case 1:
return __GT_drawNav__1.call(this,cursor__9028__auto__);
case 2:
return __GT_drawNav__2.call(this,cursor__9028__auto__,m35473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_drawNav.cljs$core$IFn$_invoke$arity$1 = __GT_drawNav__1;
__GT_drawNav.cljs$core$IFn$_invoke$arity$2 = __GT_drawNav__2;
return __GT_drawNav;
})()
;
var ufv___35516 = schema.utils.use_fn_validation;var output_schema35504_35517 = schema.core.Any;var input_schema35505_35518 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker35506_35519 = schema.core.checker.call(null,input_schema35505_35518);var output_checker35507_35520 = schema.core.checker.call(null,output_schema35504_35517);/**
* Inputs: [app owner]
*/
notifier.core.om_incidents = ((function (ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function om_incidents(G__35508,G__35509){var validate__7251__auto__ = ufv___35516.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35521 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35508,G__35509], null);var temp__4126__auto___35522 = input_checker35506_35519.call(null,args__7252__auto___35521);if(cljs.core.truth_(temp__4126__auto___35522))
{var error__7253__auto___35523 = temp__4126__auto___35522;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-incidents","om-incidents",-1703915018,null),cljs.core.pr_str.call(null,error__7253__auto___35523)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35505_35518,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35521,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35523], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__35508;var owner = G__35509;while(true){
if(typeof notifier.core.t35513 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35513 = (function (output_checker35507,owner,G__35508,input_schema35505,input_checker35506,om_incidents,validate__7251__auto__,output_schema35504,app,G__35509,ufv__,meta35514){
this.output_checker35507 = output_checker35507;
this.owner = owner;
this.G__35508 = G__35508;
this.input_schema35505 = input_schema35505;
this.input_checker35506 = input_checker35506;
this.om_incidents = om_incidents;
this.validate__7251__auto__ = validate__7251__auto__;
this.output_schema35504 = output_schema35504;
this.app = app;
this.G__35509 = G__35509;
this.ufv__ = ufv__;
this.meta35514 = meta35514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35513.cljs$lang$type = true;
notifier.core.t35513.cljs$lang$ctorStr = "notifier.core/t35513";
notifier.core.t35513.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35513");
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
notifier.core.t35513.prototype.om$core$IDisplayName$ = true;
notifier.core.t35513.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function (_){var self__ = this;
var ___$1 = this;return "om-incidents";
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
notifier.core.t35513.prototype.om$core$IRender$ = true;
notifier.core.t35513.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,notifier.core.drawNav,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[om.core.build.call(null,notifier.core.widgetpolling,self__.app,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opts","opts",155075701),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),"/widgets",new cljs.core.Keyword(null,"poll-interval","poll-interval",345867570),(2000)], null)], null))],null)));
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
notifier.core.t35513.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function (_35515){var self__ = this;
var _35515__$1 = this;return self__.meta35514;
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
notifier.core.t35513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function (_35515,meta35514__$1){var self__ = this;
var _35515__$1 = this;return (new notifier.core.t35513(self__.output_checker35507,self__.owner,self__.G__35508,self__.input_schema35505,self__.input_checker35506,self__.om_incidents,self__.validate__7251__auto__,self__.output_schema35504,self__.app,self__.G__35509,self__.ufv__,meta35514__$1));
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
notifier.core.__GT_t35513 = ((function (validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520){
return (function __GT_t35513(output_checker35507__$1,owner__$1,G__35508__$1,input_schema35505__$1,input_checker35506__$1,om_incidents__$1,validate__7251__auto____$1,output_schema35504__$1,app__$1,G__35509__$1,ufv____$1,meta35514){return (new notifier.core.t35513(output_checker35507__$1,owner__$1,G__35508__$1,input_schema35505__$1,input_checker35506__$1,om_incidents__$1,validate__7251__auto____$1,output_schema35504__$1,app__$1,G__35509__$1,ufv____$1,meta35514));
});})(validate__7251__auto__,ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
}
return (new notifier.core.t35513(output_checker35507_35520,owner,G__35508,input_schema35505_35518,input_checker35506_35519,om_incidents,validate__7251__auto__,output_schema35504_35517,app,G__35509,ufv___35516,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35524 = output_checker35507_35520.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35524))
{var error__7253__auto___35525 = temp__4126__auto___35524;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-incidents","om-incidents",-1703915018,null),cljs.core.pr_str.call(null,error__7253__auto___35525)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35504_35517,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35525], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35516,output_schema35504_35517,input_schema35505_35518,input_checker35506_35519,output_checker35507_35520))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_incidents),schema.core.make_fn_schema.call(null,output_schema35504_35517,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35505_35518], null)));
notifier.core.__GT_om_incidents = (function() {
var __GT_om_incidents = null;
var __GT_om_incidents__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_incidents,cursor__9028__auto__);
});
var __GT_om_incidents__2 = (function (cursor__9028__auto__,m35503){return om.core.build.call(null,notifier.core.om_incidents,cursor__9028__auto__,m35503);
});
__GT_om_incidents = function(cursor__9028__auto__,m35503){
switch(arguments.length){
case 1:
return __GT_om_incidents__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_incidents__2.call(this,cursor__9028__auto__,m35503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_incidents.cljs$core$IFn$_invoke$arity$1 = __GT_om_incidents__1;
__GT_om_incidents.cljs$core$IFn$_invoke$arity$2 = __GT_om_incidents__2;
return __GT_om_incidents;
})()
;
var ufv___35548 = schema.utils.use_fn_validation;var output_schema35528_35549 = schema.core.Any;var input_schema35529_35550 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker35530_35551 = schema.core.checker.call(null,input_schema35529_35550);var output_checker35531_35552 = schema.core.checker.call(null,output_schema35528_35549);/**
* Inputs: [{id :id, :as app} owner]
*/
notifier.core.om_inc_detail = ((function (ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function om_inc_detail(G__35532,G__35533){var validate__7251__auto__ = ufv___35548.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35553 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35532,G__35533], null);var temp__4126__auto___35554 = input_checker35530_35551.call(null,args__7252__auto___35553);if(cljs.core.truth_(temp__4126__auto___35554))
{var error__7253__auto___35555 = temp__4126__auto___35554;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-inc-detail","om-inc-detail",-953740953,null),cljs.core.pr_str.call(null,error__7253__auto___35555)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35529_35550,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35553,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35555], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__35542 = G__35532;var map__35543 = G__35542;var map__35543__$1 = ((cljs.core.seq_QMARK_.call(null,map__35543))?cljs.core.apply.call(null,cljs.core.hash_map,map__35543):map__35543);var app = map__35543__$1;var id = cljs.core.get.call(null,map__35543__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var owner = G__35533;var G__35542__$1 = G__35542;var owner__$1 = owner;while(true){
var map__35544 = G__35542__$1;var map__35544__$1 = ((cljs.core.seq_QMARK_.call(null,map__35544))?cljs.core.apply.call(null,cljs.core.hash_map,map__35544):map__35544);var app__$1 = map__35544__$1;var id__$1 = cljs.core.get.call(null,map__35544__$1,new cljs.core.Keyword(null,"id","id",-1388402092));var owner__$2 = owner__$1;if(typeof notifier.core.t35545 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35545 = (function (owner,om_inc_detail,output_schema35528,G__35533,G__35542,input_schema35529,output_checker35531,map__35543,validate__7251__auto__,input_checker35530,id,G__35532,app,ufv__,map__35544,meta35546){
this.owner = owner;
this.om_inc_detail = om_inc_detail;
this.output_schema35528 = output_schema35528;
this.G__35533 = G__35533;
this.G__35542 = G__35542;
this.input_schema35529 = input_schema35529;
this.output_checker35531 = output_checker35531;
this.map__35543 = map__35543;
this.validate__7251__auto__ = validate__7251__auto__;
this.input_checker35530 = input_checker35530;
this.id = id;
this.G__35532 = G__35532;
this.app = app;
this.ufv__ = ufv__;
this.map__35544 = map__35544;
this.meta35546 = meta35546;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35545.cljs$lang$type = true;
notifier.core.t35545.cljs$lang$ctorStr = "notifier.core/t35545";
notifier.core.t35545.cljs$lang$ctorPrWriter = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35545");
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
notifier.core.t35545.prototype.om$core$IDisplayName$ = true;
notifier.core.t35545.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (_){var self__ = this;
var ___$1 = this;return "om-inc-detail";
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
notifier.core.t35545.prototype.om$core$IRender$ = true;
notifier.core.t35545.prototype.om$core$IRender$render$arity$1 = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,notifier.core.drawNav,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[(function (){var incident = cljs.core.first.call(null,cljs.core.filter.call(null,((function (___$1,map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (p1__35526_SHARP_){return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__35526_SHARP_),(1));
});})(___$1,map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
,new cljs.core.Keyword(null,"widgets","widgets",-159098978).cljs$core$IFn$_invoke$arity$1(self__.app)));return om_tools.dom.element.call(null,React.DOM.div,("Incident"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(incident))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(incident))),cljs.core.PersistentVector.EMPTY);
})()],null)));
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
notifier.core.t35545.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (_35547){var self__ = this;
var _35547__$1 = this;return self__.meta35546;
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
notifier.core.t35545.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function (_35547,meta35546__$1){var self__ = this;
var _35547__$1 = this;return (new notifier.core.t35545(self__.owner,self__.om_inc_detail,self__.output_schema35528,self__.G__35533,self__.G__35542,self__.input_schema35529,self__.output_checker35531,self__.map__35543,self__.validate__7251__auto__,self__.input_checker35530,self__.id,self__.G__35532,self__.app,self__.ufv__,self__.map__35544,meta35546__$1));
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
notifier.core.__GT_t35545 = ((function (map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552){
return (function __GT_t35545(owner__$3,om_inc_detail__$1,output_schema35528__$1,G__35533__$1,G__35542__$2,input_schema35529__$1,output_checker35531__$1,map__35543__$2,validate__7251__auto____$1,input_checker35530__$1,id__$2,G__35532__$1,app__$2,ufv____$1,map__35544__$2,meta35546){return (new notifier.core.t35545(owner__$3,om_inc_detail__$1,output_schema35528__$1,G__35533__$1,G__35542__$2,input_schema35529__$1,output_checker35531__$1,map__35543__$2,validate__7251__auto____$1,input_checker35530__$1,id__$2,G__35532__$1,app__$2,ufv____$1,map__35544__$2,meta35546));
});})(map__35544,map__35544__$1,app__$1,id__$1,owner__$2,G__35542,map__35543,map__35543__$1,app,id,owner,validate__7251__auto__,ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
}
return (new notifier.core.t35545(owner__$2,om_inc_detail,output_schema35528_35549,G__35533,G__35542__$1,input_schema35529_35550,output_checker35531_35552,map__35543__$1,validate__7251__auto__,input_checker35530_35551,id__$1,G__35532,app__$1,ufv___35548,map__35544__$1,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35556 = output_checker35531_35552.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35556))
{var error__7253__auto___35557 = temp__4126__auto___35556;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-inc-detail","om-inc-detail",-953740953,null),cljs.core.pr_str.call(null,error__7253__auto___35557)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35528_35549,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35557], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35548,output_schema35528_35549,input_schema35529_35550,input_checker35530_35551,output_checker35531_35552))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_inc_detail),schema.core.make_fn_schema.call(null,output_schema35528_35549,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35529_35550], null)));
notifier.core.__GT_om_inc_detail = (function() {
var __GT_om_inc_detail = null;
var __GT_om_inc_detail__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_inc_detail,cursor__9028__auto__);
});
var __GT_om_inc_detail__2 = (function (cursor__9028__auto__,m35527){return om.core.build.call(null,notifier.core.om_inc_detail,cursor__9028__auto__,m35527);
});
__GT_om_inc_detail = function(cursor__9028__auto__,m35527){
switch(arguments.length){
case 1:
return __GT_om_inc_detail__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_inc_detail__2.call(this,cursor__9028__auto__,m35527);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_inc_detail.cljs$core$IFn$_invoke$arity$1 = __GT_om_inc_detail__1;
__GT_om_inc_detail.cljs$core$IFn$_invoke$arity$2 = __GT_om_inc_detail__2;
return __GT_om_inc_detail;
})()
;
var ufv___35572 = schema.utils.use_fn_validation;var output_schema35559_35573 = schema.core.Any;var input_schema35560_35574 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"app","app",1079569820,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"opts","opts",1795607228,null))], null);var input_checker35561_35575 = schema.core.checker.call(null,input_schema35560_35574);var output_checker35562_35576 = schema.core.checker.call(null,output_schema35559_35573);/**
* Inputs: [app owner opts]
*/
notifier.core.om_messages = ((function (ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function om_messages(G__35563,G__35564,G__35565){var validate__7251__auto__ = ufv___35572.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35577 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35563,G__35564,G__35565], null);var temp__4126__auto___35578 = input_checker35561_35575.call(null,args__7252__auto___35577);if(cljs.core.truth_(temp__4126__auto___35578))
{var error__7253__auto___35579 = temp__4126__auto___35578;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"om-messages","om-messages",1837496293,null),cljs.core.pr_str.call(null,error__7253__auto___35579)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35560_35574,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35577,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35579], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var app = G__35563;var owner = G__35564;var opts = G__35565;while(true){
if(typeof notifier.core.t35569 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35569 = (function (input_schema35560,output_schema35559,owner,G__35565,om_messages,input_checker35561,output_checker35562,G__35564,validate__7251__auto__,G__35563,app,opts,ufv__,meta35570){
this.input_schema35560 = input_schema35560;
this.output_schema35559 = output_schema35559;
this.owner = owner;
this.G__35565 = G__35565;
this.om_messages = om_messages;
this.input_checker35561 = input_checker35561;
this.output_checker35562 = output_checker35562;
this.G__35564 = G__35564;
this.validate__7251__auto__ = validate__7251__auto__;
this.G__35563 = G__35563;
this.app = app;
this.opts = opts;
this.ufv__ = ufv__;
this.meta35570 = meta35570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35569.cljs$lang$type = true;
notifier.core.t35569.cljs$lang$ctorStr = "notifier.core/t35569";
notifier.core.t35569.cljs$lang$ctorPrWriter = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35569");
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
notifier.core.t35569.prototype.om$core$IDisplayName$ = true;
notifier.core.t35569.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function (_){var self__ = this;
var ___$1 = this;return "om-messages";
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
notifier.core.t35569.prototype.om$core$IRender$ = true;
notifier.core.t35569.prototype.om$core$IRender$render$arity$1 = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function (_){var self__ = this;
var ___$1 = this;return om_tools.dom.element.call(null,React.DOM.div,om.core.build.call(null,notifier.core.drawNav,self__.app),(new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[React.DOM.h1(null,"Messages")],null)));
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
notifier.core.t35569.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function (_35571){var self__ = this;
var _35571__$1 = this;return self__.meta35570;
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
notifier.core.t35569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function (_35571,meta35570__$1){var self__ = this;
var _35571__$1 = this;return (new notifier.core.t35569(self__.input_schema35560,self__.output_schema35559,self__.owner,self__.G__35565,self__.om_messages,self__.input_checker35561,self__.output_checker35562,self__.G__35564,self__.validate__7251__auto__,self__.G__35563,self__.app,self__.opts,self__.ufv__,meta35570__$1));
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
notifier.core.__GT_t35569 = ((function (validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576){
return (function __GT_t35569(input_schema35560__$1,output_schema35559__$1,owner__$1,G__35565__$1,om_messages__$1,input_checker35561__$1,output_checker35562__$1,G__35564__$1,validate__7251__auto____$1,G__35563__$1,app__$1,opts__$1,ufv____$1,meta35570){return (new notifier.core.t35569(input_schema35560__$1,output_schema35559__$1,owner__$1,G__35565__$1,om_messages__$1,input_checker35561__$1,output_checker35562__$1,G__35564__$1,validate__7251__auto____$1,G__35563__$1,app__$1,opts__$1,ufv____$1,meta35570));
});})(validate__7251__auto__,ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
}
return (new notifier.core.t35569(input_schema35560_35574,output_schema35559_35573,owner,G__35565,om_messages,input_checker35561_35575,output_checker35562_35576,G__35564,validate__7251__auto__,G__35563,app,opts,ufv___35572,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35580 = output_checker35562_35576.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35580))
{var error__7253__auto___35581 = temp__4126__auto___35580;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"om-messages","om-messages",1837496293,null),cljs.core.pr_str.call(null,error__7253__auto___35581)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35559_35573,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35581], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35572,output_schema35559_35573,input_schema35560_35574,input_checker35561_35575,output_checker35562_35576))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.om_messages),schema.core.make_fn_schema.call(null,output_schema35559_35573,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35560_35574], null)));
notifier.core.__GT_om_messages = (function() {
var __GT_om_messages = null;
var __GT_om_messages__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.om_messages,cursor__9028__auto__);
});
var __GT_om_messages__2 = (function (cursor__9028__auto__,m35558){return om.core.build.call(null,notifier.core.om_messages,cursor__9028__auto__,m35558);
});
__GT_om_messages = function(cursor__9028__auto__,m35558){
switch(arguments.length){
case 1:
return __GT_om_messages__1.call(this,cursor__9028__auto__);
case 2:
return __GT_om_messages__2.call(this,cursor__9028__auto__,m35558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_om_messages.cljs$core$IFn$_invoke$arity$1 = __GT_om_messages__1;
__GT_om_messages.cljs$core$IFn$_invoke$arity$2 = __GT_om_messages__2;
return __GT_om_messages;
})()
;
var ufv___35609 = schema.utils.use_fn_validation;var output_schema35583_35610 = schema.core.Any;var input_schema35584_35611 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"owner","owner",1247919588,null))], null);var input_checker35585_35612 = schema.core.checker.call(null,input_schema35584_35611);var output_checker35586_35613 = schema.core.checker.call(null,output_schema35583_35610);/**
* Inputs: [{view :view, :as app} owner]
*/
notifier.core.mainView = ((function (ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function mainView(G__35587,G__35588){var validate__7251__auto__ = ufv___35609.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___35614 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__35587,G__35588], null);var temp__4126__auto___35615 = input_checker35585_35612.call(null,args__7252__auto___35614);if(cljs.core.truth_(temp__4126__auto___35615))
{var error__7253__auto___35616 = temp__4126__auto___35615;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"mainView","mainView",-887226862,null),cljs.core.pr_str.call(null,error__7253__auto___35616)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema35584_35611,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___35614,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35616], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__35600 = G__35587;var map__35601 = G__35600;var map__35601__$1 = ((cljs.core.seq_QMARK_.call(null,map__35601))?cljs.core.apply.call(null,cljs.core.hash_map,map__35601):map__35601);var app = map__35601__$1;var view = cljs.core.get.call(null,map__35601__$1,new cljs.core.Keyword(null,"view","view",1247994814));var owner = G__35588;var G__35600__$1 = G__35600;var owner__$1 = owner;while(true){
var map__35602 = G__35600__$1;var map__35602__$1 = ((cljs.core.seq_QMARK_.call(null,map__35602))?cljs.core.apply.call(null,cljs.core.hash_map,map__35602):map__35602);var app__$1 = map__35602__$1;var view__$1 = cljs.core.get.call(null,map__35602__$1,new cljs.core.Keyword(null,"view","view",1247994814));var owner__$2 = owner__$1;if(typeof notifier.core.t35603 !== 'undefined')
{} else
{
/**
* @constructor
*/
notifier.core.t35603 = (function (map__35602,owner,map__35601,view,G__35587,G__35588,output_checker35586,output_schema35583,input_schema35584,mainView,G__35600,validate__7251__auto__,input_checker35585,app,ufv__,meta35604){
this.map__35602 = map__35602;
this.owner = owner;
this.map__35601 = map__35601;
this.view = view;
this.G__35587 = G__35587;
this.G__35588 = G__35588;
this.output_checker35586 = output_checker35586;
this.output_schema35583 = output_schema35583;
this.input_schema35584 = input_schema35584;
this.mainView = mainView;
this.G__35600 = G__35600;
this.validate__7251__auto__ = validate__7251__auto__;
this.input_checker35585 = input_checker35585;
this.app = app;
this.ufv__ = ufv__;
this.meta35604 = meta35604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
notifier.core.t35603.cljs$lang$type = true;
notifier.core.t35603.cljs$lang$ctorStr = "notifier.core/t35603";
notifier.core.t35603.cljs$lang$ctorPrWriter = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"notifier.core/t35603");
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
notifier.core.t35603.prototype.om$core$IDisplayName$ = true;
notifier.core.t35603.prototype.om$core$IDisplayName$display_name$arity$1 = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function (_){var self__ = this;
var ___$1 = this;return "mainView";
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
notifier.core.t35603.prototype.om$core$IRender$ = true;
notifier.core.t35603.prototype.om$core$IRender$render$arity$1 = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function (_){var self__ = this;
var ___$1 = this;var pred__35606 = cljs.core._EQ_;var expr__35607 = self__.view;if(cljs.core.truth_(pred__35606.call(null,new cljs.core.Keyword(null,"incidents","incidents",-1507672681),expr__35607)))
{return om.core.build.call(null,notifier.core.om_incidents,self__.app);
} else
{if(cljs.core.truth_(pred__35606.call(null,new cljs.core.Keyword(null,"incident","incident",-1953996494),expr__35607)))
{return om.core.build.call(null,notifier.core.om_inc_detail,self__.app);
} else
{if(cljs.core.truth_(pred__35606.call(null,new cljs.core.Keyword(null,"messages","messages",345434482),expr__35607)))
{return om.core.build.call(null,notifier.core.om_messages,self__.app);
} else
{return om_tools.dom.element.call(null,React.DOM.div,("Nothing loaded"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.view)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"view","view",1247994814).cljs$core$IFn$_invoke$arity$1(self__.app))),cljs.core.PersistentVector.EMPTY);
}
}
}
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
notifier.core.t35603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function (_35605){var self__ = this;
var _35605__$1 = this;return self__.meta35604;
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
notifier.core.t35603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function (_35605,meta35604__$1){var self__ = this;
var _35605__$1 = this;return (new notifier.core.t35603(self__.map__35602,self__.owner,self__.map__35601,self__.view,self__.G__35587,self__.G__35588,self__.output_checker35586,self__.output_schema35583,self__.input_schema35584,self__.mainView,self__.G__35600,self__.validate__7251__auto__,self__.input_checker35585,self__.app,self__.ufv__,meta35604__$1));
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
notifier.core.__GT_t35603 = ((function (map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613){
return (function __GT_t35603(map__35602__$2,owner__$3,map__35601__$2,view__$2,G__35587__$1,G__35588__$1,output_checker35586__$1,output_schema35583__$1,input_schema35584__$1,mainView__$1,G__35600__$2,validate__7251__auto____$1,input_checker35585__$1,app__$2,ufv____$1,meta35604){return (new notifier.core.t35603(map__35602__$2,owner__$3,map__35601__$2,view__$2,G__35587__$1,G__35588__$1,output_checker35586__$1,output_schema35583__$1,input_schema35584__$1,mainView__$1,G__35600__$2,validate__7251__auto____$1,input_checker35585__$1,app__$2,ufv____$1,meta35604));
});})(map__35602,map__35602__$1,app__$1,view__$1,owner__$2,G__35600,map__35601,map__35601__$1,app,view,owner,validate__7251__auto__,ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
}
return (new notifier.core.t35603(map__35602__$1,owner__$2,map__35601__$1,view__$1,G__35587,G__35588,output_checker35586_35613,output_schema35583_35610,input_schema35584_35611,mainView,G__35600__$1,validate__7251__auto__,input_checker35585_35612,app__$1,ufv___35609,null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___35617 = output_checker35586_35613.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___35617))
{var error__7253__auto___35618 = temp__4126__auto___35617;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"mainView","mainView",-887226862,null),cljs.core.pr_str.call(null,error__7253__auto___35618)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema35583_35610,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___35618], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___35609,output_schema35583_35610,input_schema35584_35611,input_checker35585_35612,output_checker35586_35613))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,notifier.core.mainView),schema.core.make_fn_schema.call(null,output_schema35583_35610,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema35584_35611], null)));
notifier.core.__GT_mainView = (function() {
var __GT_mainView = null;
var __GT_mainView__1 = (function (cursor__9028__auto__){return om.core.build.call(null,notifier.core.mainView,cursor__9028__auto__);
});
var __GT_mainView__2 = (function (cursor__9028__auto__,m35582){return om.core.build.call(null,notifier.core.mainView,cursor__9028__auto__,m35582);
});
__GT_mainView = function(cursor__9028__auto__,m35582){
switch(arguments.length){
case 1:
return __GT_mainView__1.call(this,cursor__9028__auto__);
case 2:
return __GT_mainView__2.call(this,cursor__9028__auto__,m35582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
__GT_mainView.cljs$core$IFn$_invoke$arity$1 = __GT_mainView__1;
__GT_mainView.cljs$core$IFn$_invoke$arity$2 = __GT_mainView__2;
return __GT_mainView;
})()
;
om.core.root.call(null,notifier.core.mainView,notifier.core.app_state,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),document.getElementById("content")], null));
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");
var action__9083__auto___35621 = (function (params__9084__auto__){if(cljs.core.map_QMARK_.call(null,params__9084__auto__))
{var map__35619 = params__9084__auto__;var map__35619__$1 = ((cljs.core.seq_QMARK_.call(null,map__35619))?cljs.core.apply.call(null,cljs.core.hash_map,map__35619):map__35619);cljs.core.println.call(null,"first route");
return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"incidents","incidents",-1507672681));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9084__auto__))
{var vec__35620 = params__9084__auto__;cljs.core.println.call(null,"first route");
return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"incidents","incidents",-1507672681));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/incidents/",action__9083__auto___35621);
/**
* @param {...*} var_args
*/
notifier.core.rIncidents = ((function (action__9083__auto___35621){
return (function() { 
var rIncidents__delegate = function (args__9082__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/incidents/",args__9082__auto__);
};
var rIncidents = function (var_args){
var args__9082__auto__ = null;if (arguments.length > 0) {
  args__9082__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rIncidents__delegate.call(this,args__9082__auto__);};
rIncidents.cljs$lang$maxFixedArity = 0;
rIncidents.cljs$lang$applyTo = (function (arglist__35622){
var args__9082__auto__ = cljs.core.seq(arglist__35622);
return rIncidents__delegate(args__9082__auto__);
});
rIncidents.cljs$core$IFn$_invoke$arity$variadic = rIncidents__delegate;
return rIncidents;
})()
;})(action__9083__auto___35621))
;
var action__9083__auto___35625 = (function (params__9084__auto__){if(cljs.core.map_QMARK_.call(null,params__9084__auto__))
{var map__35623 = params__9084__auto__;var map__35623__$1 = ((cljs.core.seq_QMARK_.call(null,map__35623))?cljs.core.apply.call(null,cljs.core.hash_map,map__35623):map__35623);var params = map__35623__$1;return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"incident","incident",-1953996494),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9084__auto__))
{var map__35624 = params__9084__auto__;var map__35624__$1 = ((cljs.core.seq_QMARK_.call(null,map__35624))?cljs.core.apply.call(null,cljs.core.hash_map,map__35624):map__35624);var params = map__35624__$1;return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"incident","incident",-1953996494),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(params));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/incident/:id",action__9083__auto___35625);
/**
* @param {...*} var_args
*/
notifier.core.rIncident = ((function (action__9083__auto___35625){
return (function() { 
var rIncident__delegate = function (args__9082__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/incident/:id",args__9082__auto__);
};
var rIncident = function (var_args){
var args__9082__auto__ = null;if (arguments.length > 0) {
  args__9082__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rIncident__delegate.call(this,args__9082__auto__);};
rIncident.cljs$lang$maxFixedArity = 0;
rIncident.cljs$lang$applyTo = (function (arglist__35626){
var args__9082__auto__ = cljs.core.seq(arglist__35626);
return rIncident__delegate(args__9082__auto__);
});
rIncident.cljs$core$IFn$_invoke$arity$variadic = rIncident__delegate;
return rIncident;
})()
;})(action__9083__auto___35625))
;
var action__9083__auto___35629 = (function (params__9084__auto__){if(cljs.core.map_QMARK_.call(null,params__9084__auto__))
{var map__35627 = params__9084__auto__;var map__35627__$1 = ((cljs.core.seq_QMARK_.call(null,map__35627))?cljs.core.apply.call(null,cljs.core.hash_map,map__35627):map__35627);cljs.core.println.call(null,"second route");
return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"messages","messages",345434482));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9084__auto__))
{var vec__35628 = params__9084__auto__;cljs.core.println.call(null,"second route");
return cljs.core.swap_BANG_.call(null,notifier.core.app_state,cljs.core.assoc,new cljs.core.Keyword(null,"view","view",1247994814),new cljs.core.Keyword(null,"messages","messages",345434482));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"/messages/",action__9083__auto___35629);
/**
* @param {...*} var_args
*/
notifier.core.rMessages = ((function (action__9083__auto___35629){
return (function() { 
var rMessages__delegate = function (args__9082__auto__){return cljs.core.apply.call(null,secretary.core.render_route_STAR_,"/messages/",args__9082__auto__);
};
var rMessages = function (var_args){
var args__9082__auto__ = null;if (arguments.length > 0) {
  args__9082__auto__ = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return rMessages__delegate.call(this,args__9082__auto__);};
rMessages.cljs$lang$maxFixedArity = 0;
rMessages.cljs$lang$applyTo = (function (arglist__35630){
var args__9082__auto__ = cljs.core.seq(arglist__35630);
return rMessages__delegate(args__9082__auto__);
});
rMessages.cljs$core$IFn$_invoke$arity$variadic = rMessages__delegate;
return rMessages;
})()
;})(action__9083__auto___35629))
;
var action__9083__auto___35633 = (function (params__9084__auto__){if(cljs.core.map_QMARK_.call(null,params__9084__auto__))
{var map__35631 = params__9084__auto__;var map__35631__$1 = ((cljs.core.seq_QMARK_.call(null,map__35631))?cljs.core.apply.call(null,cljs.core.hash_map,map__35631):map__35631);return notifier.core.navigate.call(null,notifier.core.rIncidents.call(null));
} else
{if(cljs.core.vector_QMARK_.call(null,params__9084__auto__))
{var vec__35632 = params__9084__auto__;return notifier.core.navigate.call(null,notifier.core.rIncidents.call(null));
} else
{return null;
}
}
});secretary.core.add_route_BANG_.call(null,"*",action__9083__auto___35633);
notifier.core.on_navigate = (function on_navigate(event){cljs.core.println.call(null,"Token",">",notifier.core.history.getToken(),"<");
return secretary.core.dispatch_BANG_.call(null,event.token);
});
var G__35634_35635 = notifier.core.history;goog.events.listen(G__35634_35635,goog.history.EventType.NAVIGATE,notifier.core.on_navigate);
G__35634_35635.setEnabled(true);

//# sourceMappingURL=core.js.map