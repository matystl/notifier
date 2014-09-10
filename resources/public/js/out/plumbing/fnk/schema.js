// Compiled by ClojureScript 0.0-2307
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('schema.utils');
goog.require('schema.core');
goog.require('schema.core');
plumbing.fnk.schema.Schema = cljs.core.with_meta.call(null,schema.core.__GT_Protocol.call(null,schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"proto-sym","proto-sym",-886371734),new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),new cljs.core.Keyword(null,"proto-pred","proto-pred",1885698716),(function (p1__7281__7282__auto__){var G__14344 = p1__7281__7282__auto__;if(G__14344)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__14344.schema$core$Schema$;
}
})()))
{return true;
} else
{if((!G__14344.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14344);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,schema.core.Schema,G__14344);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.eq.call(null,schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.call(null,schema.core.OptionalKey,schema.core.Keyword),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
* Like (assert (distinct? things)) but with a more helpful error message.
*/
plumbing.fnk.schema.assert_distinct = (function assert_distinct(things){var repeated_things = cljs.core.seq.call(null,cljs.core.filter.call(null,(function (p1__14345_SHARP_){return (cljs.core.val.call(null,p1__14345_SHARP_) > (1));
}),cljs.core.frequencies.call(null,things)));if(cljs.core.empty_QMARK_.call(null,repeated_things))
{return null;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Got repeated items (expected distinct): %s",repeated_things)));
}
});
/**
* Like (get m k), but throws if k is not present in m.
*/
plumbing.fnk.schema.safe_get = (function safe_get(m,k,key_path){if(cljs.core.map_QMARK_.call(null,m))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Expected a map at key-path %s, got type %s",key_path,schema.utils.type_of.call(null,m))));
}
var vec__14347 = cljs.core.find.call(null,m,k);var _ = cljs.core.nth.call(null,vec__14347,(0),null);var v = cljs.core.nth.call(null,vec__14347,(1),null);var p = vec__14347;if(cljs.core.truth_(p))
{} else
{throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.keys.call(null,m)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"missing-key","missing-key",1259209562),new cljs.core.Keyword(null,"key","key",-1516042587),k,new cljs.core.Keyword(null,"map","map",1371690461),m], null));
}
return v;
});
plumbing.fnk.schema.non_map_union = (function non_map_union(s1,s2){if(cljs.core._EQ_.call(null,s1,s2))
{return s1;
} else
{if(cljs.core._EQ_.call(null,s1,schema.core.Any))
{return s2;
} else
{if(cljs.core._EQ_.call(null,s2,schema.core.Any))
{return s1;
} else
{return schema.core.both.call(null,s1,s2);

}
}
}
});
/**
* Return a difference of schmas s1 and s2, where one is not a map.
* Punt for now, assuming s2 always satisfies s1.
*/
plumbing.fnk.schema.non_map_diff = (function non_map_diff(s1,s2){return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function map_schema_QMARK_(m){return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___14353 = schema.utils.use_fn_validation;var output_schema14348_14354 = schema.core.maybe.call(null,schema.core.pair.call(null,schema.core.Keyword,"k",schema.core.Bool,"optional?"));var input_schema14349_14355 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);var input_checker14350_14356 = schema.core.checker.call(null,input_schema14349_14355);var output_checker14351_14357 = schema.core.checker.call(null,output_schema14348_14354);/**
* Inputs: [k]
* Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
* 
* Given a possibly-unevaluated schema map key form, unpack an explicit keyword
* and optional? flag, or return nil for a non-explicit key
*/
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___14353,output_schema14348_14354,input_schema14349_14355,input_checker14350_14356,output_checker14351_14357){
return (function unwrap_schema_form_key(G__14352){var validate__7251__auto__ = ufv___14353.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14358 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14352], null);var temp__4126__auto___14359 = input_checker14350_14356.call(null,args__7252__auto___14358);if(cljs.core.truth_(temp__4126__auto___14359))
{var error__7253__auto___14360 = temp__4126__auto___14359;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7253__auto___14360)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14349_14355,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14358,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14360], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var k = G__14352;while(true){
if(schema.core.specific_key_QMARK_.call(null,k))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key.call(null,k),schema.core.required_key_QMARK_.call(null,k)], null);
} else
{if((cljs.core.sequential_QMARK_.call(null,k)) && (!(cljs.core.vector_QMARK_.call(null,k))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,k),(2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second.call(null,k),false], null);
} else
{return null;
}
}
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14361 = output_checker14351_14357.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14361))
{var error__7253__auto___14362 = temp__4126__auto___14361;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.call(null,error__7253__auto___14362)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14348_14354,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14362], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14353,output_schema14348_14354,input_schema14349_14355,input_checker14350_14356,output_checker14351_14357))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema.call(null,output_schema14348_14354,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14349_14355], null)));
var ufv___14368 = schema.utils.use_fn_validation;var output_schema14363_14369 = schema.core.Any;var input_schema14364_14370 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14365_14371 = schema.core.checker.call(null,input_schema14364_14370);var output_checker14366_14372 = schema.core.checker.call(null,output_schema14363_14369);/**
* Inputs: [s]
* 
* Given a possibly-unevaluated map schema, return a map from bare keyword to true
* (for required) or false (for optional)
*/
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___14368,output_schema14363_14369,input_schema14364_14370,input_checker14365_14371,output_checker14366_14372){
return (function explicit_schema_key_map(G__14367){var validate__7251__auto__ = ufv___14368.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14373 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14367], null);var temp__4126__auto___14374 = input_checker14365_14371.call(null,args__7252__auto___14373);if(cljs.core.truth_(temp__4126__auto___14374))
{var error__7253__auto___14375 = temp__4126__auto___14374;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7253__auto___14375)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14364_14370,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14373,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14375], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var s = G__14367;while(true){
new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.call(null,plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys.call(null,s)));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14376 = output_checker14366_14372.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14376))
{var error__7253__auto___14377 = temp__4126__auto___14376;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.call(null,error__7253__auto___14377)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14363_14369,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14377], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14368,output_schema14363_14369,input_schema14364_14370,input_checker14365_14371,output_checker14366_14372))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema.call(null,output_schema14363_14369,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14364_14370], null)));
var ufv___14383 = schema.utils.use_fn_validation;var output_schema14378_14384 = schema.core.Any;var input_schema14379_14385 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);var input_checker14380_14386 = schema.core.checker.call(null,input_schema14379_14385);var output_checker14381_14387 = schema.core.checker.call(null,output_schema14378_14384);/**
* Inputs: [s :- {s/Keyword s/Bool}]
* 
* Given output of explicit-schema-key-map, split into seq [req opt].
*/
plumbing.fnk.schema.split_schema_keys = ((function (ufv___14383,output_schema14378_14384,input_schema14379_14385,input_checker14380_14386,output_checker14381_14387){
return (function split_schema_keys(G__14382){var validate__7251__auto__ = ufv___14383.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14388 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14382], null);var temp__4126__auto___14389 = input_checker14380_14386.call(null,args__7252__auto___14388);if(cljs.core.truth_(temp__4126__auto___14389))
{var error__7253__auto___14390 = temp__4126__auto___14389;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7253__auto___14390)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14379_14385,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14388,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14390], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var s = G__14382;while(true){
new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
return cljs.core.mapv.call(null,cljs.core.partial.call(null,cljs.core.mapv,cljs.core.key),cljs.core.juxt.call(null,cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14391 = output_checker14381_14387.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14391))
{var error__7253__auto___14392 = temp__4126__auto___14391;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.call(null,error__7253__auto___14392)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14378_14384,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14392], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14383,output_schema14378_14384,input_schema14379_14385,input_checker14380_14386,output_checker14381_14387))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema.call(null,output_schema14378_14384,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14379_14385], null)));
/**
* Like merge-with, but also projects keys to a smaller space and merges them similar to the
* values.
* @param {...*} var_args
*/
plumbing.fnk.schema.merge_on_with = (function() { 
var merge_on_with__delegate = function (key_project,key_combine,val_combine,maps){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (m,p__14396){var vec__14397 = p__14396;var k = cljs.core.nth.call(null,vec__14397,(0),null);var v = cljs.core.nth.call(null,vec__14397,(1),null);var pk = key_project.call(null,k);var temp__4124__auto__ = cljs.core.get.call(null,m,pk);if(cljs.core.truth_(temp__4124__auto__))
{var vec__14398 = temp__4124__auto__;var ok = cljs.core.nth.call(null,vec__14398,(0),null);var ov = cljs.core.nth.call(null,vec__14398,(1),null);return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key_combine.call(null,ok,k),val_combine.call(null,ov,v)], null));
} else
{return cljs.core.assoc.call(null,m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.call(null,cljs.core.concat,maps))));
};
var merge_on_with = function (key_project,key_combine,val_combine,var_args){
var maps = null;if (arguments.length > 3) {
  maps = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return merge_on_with__delegate.call(this,key_project,key_combine,val_combine,maps);};
merge_on_with.cljs$lang$maxFixedArity = 3;
merge_on_with.cljs$lang$applyTo = (function (arglist__14399){
var key_project = cljs.core.first(arglist__14399);
arglist__14399 = cljs.core.next(arglist__14399);
var key_combine = cljs.core.first(arglist__14399);
arglist__14399 = cljs.core.next(arglist__14399);
var val_combine = cljs.core.first(arglist__14399);
var maps = cljs.core.rest(arglist__14399);
return merge_on_with__delegate(key_project,key_combine,val_combine,maps);
});
merge_on_with.cljs$core$IFn$_invoke$arity$variadic = merge_on_with__delegate;
return merge_on_with;
})()
;
var ufv___14407 = schema.utils.use_fn_validation;var output_schema14401_14408 = plumbing.fnk.schema.InputSchema;var input_schema14402_14409 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);var input_checker14403_14410 = schema.core.checker.call(null,input_schema14402_14409);var output_checker14404_14411 = schema.core.checker.call(null,output_schema14401_14408);/**
* Inputs: [i1 :- InputSchema i2 :- InputSchema]
* Returns: InputSchema
* 
* Returns a minimal input schema schema that entails satisfaction of both s1 and s2
*/
plumbing.fnk.schema.union_input_schemata = ((function (ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411){
return (function union_input_schemata(G__14405,G__14406){var validate__7251__auto__ = ufv___14407.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14412 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14405,G__14406], null);var temp__4126__auto___14413 = input_checker14403_14410.call(null,args__7252__auto___14412);if(cljs.core.truth_(temp__4126__auto___14413))
{var error__7253__auto___14414 = temp__4126__auto___14413;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7253__auto___14414)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14402_14409,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14412,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14414], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var i1 = G__14405;var i2 = G__14406;while(true){
return plumbing.fnk.schema.merge_on_with.call(null,((function (validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411){
return (function (p1__14400_SHARP_){if(schema.core.specific_key_QMARK_.call(null,p1__14400_SHARP_))
{return schema.core.explicit_schema_key.call(null,p1__14400_SHARP_);
} else
{return new cljs.core.Keyword(null,"extra","extra",1612569067);
}
});})(validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411))
,((function (validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411){
return (function (k1,k2){if(schema.core.required_key_QMARK_.call(null,k1))
{return k1;
} else
{if(schema.core.required_key_QMARK_.call(null,k2))
{return k2;
} else
{if(schema.core.optional_key_QMARK_.call(null,k1))
{if(cljs.core._EQ_.call(null,k1,k2))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null)))))));
}
return k1;
} else
{if(cljs.core._EQ_.call(null,k1,k2))
{return k1;
} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Only one extra schema allowed")));


}
}
}
}
});})(validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411))
,((function (validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411){
return (function (s1,s2){if((plumbing.fnk.schema.map_schema_QMARK_.call(null,s1)) && (plumbing.fnk.schema.map_schema_QMARK_.call(null,s2)))
{return union_input_schemata.call(null,s1,s2);
} else
{return plumbing.fnk.schema.non_map_union.call(null,s1,s2);
}
});})(validate__7251__auto__,ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411))
,i1,i2);
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14415 = output_checker14404_14411.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14415))
{var error__7253__auto___14416 = temp__4126__auto___14415;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.call(null,error__7253__auto___14416)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14401_14408,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14416], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14407,output_schema14401_14408,input_schema14402_14409,input_checker14403_14410,output_checker14404_14411))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema.call(null,output_schema14401_14408,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14402_14409], null)));
var ufv___14422 = schema.utils.use_fn_validation;var output_schema14417_14423 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);var input_schema14418_14424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);var input_checker14419_14425 = schema.core.checker.call(null,input_schema14418_14424);var output_checker14420_14426 = schema.core.checker.call(null,output_schema14417_14423);/**
* Inputs: [input-schema :- InputSchema]
* Returns: [s/Keyword]
* 
* Which top-level keys are required (i.e., non-false) by this input schema.
*/
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___14422,output_schema14417_14423,input_schema14418_14424,input_checker14419_14425,output_checker14420_14426){
return (function required_toplevel_keys(G__14421){var validate__7251__auto__ = ufv___14422.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14421], null);var temp__4126__auto___14428 = input_checker14419_14425.call(null,args__7252__auto___14427);if(cljs.core.truth_(temp__4126__auto___14428))
{var error__7253__auto___14429 = temp__4126__auto___14428;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7253__auto___14429)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14418_14424,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14427,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14429], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var input_schema = G__14421;while(true){
return cljs.core.keep.call(null,((function (validate__7251__auto__,ufv___14422,output_schema14417_14423,input_schema14418_14424,input_checker14419_14425,output_checker14420_14426){
return (function (k){if(schema.core.required_key_QMARK_.call(null,k))
{return schema.core.explicit_schema_key.call(null,k);
} else
{return null;
}
});})(validate__7251__auto__,ufv___14422,output_schema14417_14423,input_schema14418_14424,input_checker14419_14425,output_checker14420_14426))
,cljs.core.keys.call(null,input_schema));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14430 = output_checker14420_14426.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14430))
{var error__7253__auto___14431 = temp__4126__auto___14430;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.call(null,error__7253__auto___14431)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14417_14423,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14431], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14422,output_schema14417_14423,input_schema14418_14424,input_checker14419_14425,output_checker14420_14426))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema.call(null,output_schema14417_14423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14418_14424], null)));
/**
* Guess an output schema for an expr.  Currently just looks for literal map structure and
* all keyword keys.
*/
plumbing.fnk.schema.guess_expr_output_schema = (function guess_expr_output_schema(expr){if((cljs.core.map_QMARK_.call(null,expr)) && (cljs.core.every_QMARK_.call(null,cljs.core.keyword_QMARK_,cljs.core.keys.call(null,expr))))
{return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4276__auto__ = (function iter__14440(s__14441){return (new cljs.core.LazySeq(null,(function (){var s__14441__$1 = s__14441;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14441__$1);if(temp__4126__auto__)
{var s__14441__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14441__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14441__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14443 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14442 = (0);while(true){
if((i__14442 < size__4275__auto__))
{var vec__14446 = cljs.core._nth.call(null,c__4274__auto__,i__14442);var k = cljs.core.nth.call(null,vec__14446,(0),null);var v = cljs.core.nth.call(null,vec__14446,(1),null);cljs.core.chunk_append.call(null,b__14443,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null));
{
var G__14448 = (i__14442 + (1));
i__14442 = G__14448;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14443),iter__14440.call(null,cljs.core.chunk_rest.call(null,s__14441__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14443),null);
}
} else
{var vec__14447 = cljs.core.first.call(null,s__14441__$2);var k = cljs.core.nth.call(null,vec__14447,(0),null);var v = cljs.core.nth.call(null,vec__14447,(1),null);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,guess_expr_output_schema.call(null,v)], null),iter__14440.call(null,cljs.core.rest.call(null,s__14441__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,expr);
})());
} else
{return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
* Subtract output-schema from input-schema, returning nil if it's possible that an object
* satisfying the output-schema satisfies the input-schema, or otherwise a description
* of the part(s) of input-schema not met by output-schema.  Strict about the map structure
* of output-schema matching input-schema, but loose about everything else (only looks at
* required keys of output-schema.
*/
plumbing.fnk.schema.schema_diff = (function schema_diff(input_schema,output_schema){if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,input_schema)))
{return plumbing.fnk.schema.non_map_diff.call(null,input_schema,output_schema);
} else
{if(!(plumbing.fnk.schema.map_schema_QMARK_.call(null,output_schema)))
{return schema.utils.error.call(null,schema.utils.__GT_ValidationError.call(null,input_schema,output_schema,(new cljs.core.Delay((function (){return cljs.core._conj.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,schema.core.explain.call(null,output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else
{return cljs.core.not_empty.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4276__auto__ = (function iter__14457(s__14458){return (new cljs.core.LazySeq(null,(function (){var s__14458__$1 = s__14458;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14458__$1);if(temp__4126__auto__)
{var s__14458__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14458__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14458__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14460 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14459 = (0);while(true){
if((i__14459 < size__4275__auto__))
{var vec__14463 = cljs.core._nth.call(null,c__4274__auto__,i__14459);var k = cljs.core.nth.call(null,vec__14463,(0),null);var v = cljs.core.nth.call(null,vec__14463,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{cljs.core.chunk_append.call(null,b__14460,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));
{
var G__14465 = (i__14459 + (1));
i__14459 = G__14465;
continue;
}
} else
{{
var G__14466 = (i__14459 + (1));
i__14459 = G__14466;
continue;
}
}
} else
{{
var G__14467 = (i__14459 + (1));
i__14459 = G__14467;
continue;
}
}
} else
{{
var G__14468 = (i__14459 + (1));
i__14459 = G__14468;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14460),iter__14457.call(null,cljs.core.chunk_rest.call(null,s__14458__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14460),null);
}
} else
{var vec__14464 = cljs.core.first.call(null,s__14458__$2);var k = cljs.core.nth.call(null,vec__14464,(0),null);var v = cljs.core.nth.call(null,vec__14464,(1),null);if(schema.core.specific_key_QMARK_.call(null,k))
{var required_QMARK_ = schema.core.required_key_QMARK_.call(null,k);var raw_k = schema.core.explicit_schema_key.call(null,k);var present_QMARK_ = cljs.core.contains_QMARK_.call(null,output_schema,raw_k);if((required_QMARK_) || (present_QMARK_))
{var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):schema_diff.call(null,v,cljs.core.get.call(null,output_schema,raw_k)));if(cljs.core.truth_(fail))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),iter__14457.call(null,cljs.core.rest.call(null,s__14458__$2)));
} else
{{
var G__14469 = cljs.core.rest.call(null,s__14458__$2);
s__14458__$1 = G__14469;
continue;
}
}
} else
{{
var G__14470 = cljs.core.rest.call(null,s__14458__$2);
s__14458__$1 = G__14470;
continue;
}
}
} else
{{
var G__14471 = cljs.core.rest.call(null,s__14458__$2);
s__14458__$1 = G__14471;
continue;
}
}
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4276__auto__.call(null,input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function assert_satisfies_schema(input_schema,output_schema){var fails = plumbing.fnk.schema.schema_diff.call(null,input_schema,output_schema);if(cljs.core.truth_(fails))
{throw cljs.core.ex_info.call(null,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(fails)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"does-not-satisfy-schema","does-not-satisfy-schema",-1543152824),new cljs.core.Keyword(null,"failures","failures",-912916356),fails], null));
} else
{return null;
}
});
var ufv___14494 = schema.utils.use_fn_validation;var output_schema14472_14495 = schema.core.Any;var input_schema14473_14496 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one.call(null,plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14474_14497 = schema.core.checker.call(null,input_schema14473_14496);var output_checker14475_14498 = schema.core.checker.call(null,output_schema14472_14495);/**
* Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
* 
* Given pairs of input and output schemata for fnks f1 and f2,
* return a pair of input and output schemata for #(f2 (merge % (f1 %))).
* f1's output schema must not contain any optional keys.
*/
plumbing.fnk.schema.compose_schemata = ((function (ufv___14494,output_schema14472_14495,input_schema14473_14496,input_checker14474_14497,output_checker14475_14498){
return (function compose_schemata(G__14476,G__14477){var validate__7251__auto__ = true;if(validate__7251__auto__)
{var args__7252__auto___14499 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14476,G__14477], null);var temp__4126__auto___14500 = input_checker14474_14497.call(null,args__7252__auto___14499);if(cljs.core.truth_(temp__4126__auto___14500))
{var error__7253__auto___14501 = temp__4126__auto___14500;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7253__auto___14501)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14473_14496,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14499,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14501], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__14488 = G__14476;var vec__14490 = G__14488;var i2 = cljs.core.nth.call(null,vec__14490,(0),null);var o2 = cljs.core.nth.call(null,vec__14490,(1),null);var G__14489 = G__14477;var vec__14491 = G__14489;var i1 = cljs.core.nth.call(null,vec__14491,(0),null);var o1 = cljs.core.nth.call(null,vec__14491,(1),null);var G__14488__$1 = G__14488;var G__14489__$1 = G__14489;while(true){
var vec__14492 = G__14488__$1;var i2__$1 = cljs.core.nth.call(null,vec__14492,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14492,(1),null);var vec__14493 = G__14489__$1;var i1__$1 = cljs.core.nth.call(null,vec__14493,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14493,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,cljs.core.select_keys.call(null,i2__$1,cljs.core.keys.call(null,o1__$1)),o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,cljs.core.apply.call(null,cljs.core.dissoc,i2__$1,cljs.core.concat.call(null,cljs.core.keys.call(null,o1__$1),cljs.core.map.call(null,schema.core.optional_key,cljs.core.keys.call(null,o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();if(validate__7251__auto__)
{var temp__4126__auto___14502 = output_checker14475_14498.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14502))
{var error__7253__auto___14503 = temp__4126__auto___14502;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.call(null,error__7253__auto___14503)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14472_14495,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14503], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14494,output_schema14472_14495,input_schema14473_14496,input_checker14474_14497,output_checker14475_14498))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema.call(null,output_schema14472_14495,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14473_14496], null)));
plumbing.fnk.schema.schema_key = (function schema_key(m,k){if(cljs.core.contains_QMARK_.call(null,m,k))
{return k;
} else
{if(cljs.core.contains_QMARK_.call(null,m,schema.core.optional_key.call(null,k)))
{return schema.core.optional_key.call(null,k);
} else
{return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function possibly_contains_QMARK_(m,k){return cljs.core.boolean$.call(null,plumbing.fnk.schema.schema_key.call(null,m,k));
});
var ufv___14582 = schema.utils.use_fn_validation;var output_schema14504_14583 = schema.core.Any;var input_schema14505_14584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);var input_checker14506_14585 = schema.core.checker.call(null,input_schema14505_14584);var output_checker14507_14586 = schema.core.checker.call(null,output_schema14504_14583);/**
* Inputs: [s :- InputSchema ks :- [s/Keyword]]
* 
* Return a pair [ks-part non-ks-part], with any extra schema removed.
*/
plumbing.fnk.schema.split_schema = ((function (ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function split_schema(G__14508,G__14509){var validate__7251__auto__ = ufv___14582.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14587 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14508,G__14509], null);var temp__4126__auto___14588 = input_checker14506_14585.call(null,args__7252__auto___14587);if(cljs.core.truth_(temp__4126__auto___14588))
{var error__7253__auto___14589 = temp__4126__auto___14588;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7253__auto___14589)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14505_14584,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14587,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14589], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var s = G__14508;var ks = G__14509;while(true){
var ks__$1 = cljs.core.set.call(null,ks);var iter__4276__auto__ = ((function (ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function iter__14546(s__14547){return (new cljs.core.LazySeq(null,((function (ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function (){var s__14547__$1 = s__14547;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__14547__$1);if(temp__4126__auto__)
{var s__14547__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__14547__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14547__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14549 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14548 = (0);while(true){
if((i__14548 < size__4275__auto__))
{var in_QMARK_ = cljs.core._nth.call(null,c__4274__auto__,i__14548);cljs.core.chunk_append.call(null,b__14549,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4276__auto__ = ((function (i__14548,in_QMARK_,c__4274__auto__,size__4275__auto__,b__14549,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function iter__14566(s__14567){return (new cljs.core.LazySeq(null,((function (i__14548,in_QMARK_,c__4274__auto__,size__4275__auto__,b__14549,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function (){var s__14567__$1 = s__14567;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14567__$1);if(temp__4126__auto____$1)
{var s__14567__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14567__$2))
{var c__4274__auto____$1 = cljs.core.chunk_first.call(null,s__14567__$2);var size__4275__auto____$1 = cljs.core.count.call(null,c__4274__auto____$1);var b__14569 = cljs.core.chunk_buffer.call(null,size__4275__auto____$1);if((function (){var i__14568 = (0);while(true){
if((i__14568 < size__4275__auto____$1))
{var vec__14572 = cljs.core._nth.call(null,c__4274__auto____$1,i__14568);var k = cljs.core.nth.call(null,vec__14572,(0),null);var v = cljs.core.nth.call(null,vec__14572,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14569,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14590 = (i__14568 + (1));
i__14568 = G__14590;
continue;
}
} else
{{
var G__14591 = (i__14568 + (1));
i__14568 = G__14591;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14569),iter__14566.call(null,cljs.core.chunk_rest.call(null,s__14567__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14569),null);
}
} else
{var vec__14573 = cljs.core.first.call(null,s__14567__$2);var k = cljs.core.nth.call(null,vec__14573,(0),null);var v = cljs.core.nth.call(null,vec__14573,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14566.call(null,cljs.core.rest.call(null,s__14567__$2)));
} else
{{
var G__14592 = cljs.core.rest.call(null,s__14567__$2);
s__14567__$1 = G__14592;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(i__14548,in_QMARK_,c__4274__auto__,size__4275__auto__,b__14549,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
,null,null));
});})(i__14548,in_QMARK_,c__4274__auto__,size__4275__auto__,b__14549,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
;return iter__4276__auto__.call(null,s);
})()));
{
var G__14593 = (i__14548 + (1));
i__14548 = G__14593;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14549),iter__14546.call(null,cljs.core.chunk_rest.call(null,s__14547__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14549),null);
}
} else
{var in_QMARK_ = cljs.core.first.call(null,s__14547__$2);return cljs.core.cons.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4276__auto__ = ((function (in_QMARK_,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function iter__14574(s__14575){return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586){
return (function (){var s__14575__$1 = s__14575;while(true){
var temp__4126__auto____$1 = cljs.core.seq.call(null,s__14575__$1);if(temp__4126__auto____$1)
{var s__14575__$2 = temp__4126__auto____$1;if(cljs.core.chunked_seq_QMARK_.call(null,s__14575__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__14575__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__14577 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__14576 = (0);while(true){
if((i__14576 < size__4275__auto__))
{var vec__14580 = cljs.core._nth.call(null,c__4274__auto__,i__14576);var k = cljs.core.nth.call(null,vec__14580,(0),null);var v = cljs.core.nth.call(null,vec__14580,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{cljs.core.chunk_append.call(null,b__14577,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__14594 = (i__14576 + (1));
i__14576 = G__14594;
continue;
}
} else
{{
var G__14595 = (i__14576 + (1));
i__14576 = G__14595;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14577),iter__14574.call(null,cljs.core.chunk_rest.call(null,s__14575__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14577),null);
}
} else
{var vec__14581 = cljs.core.first.call(null,s__14575__$2);var k = cljs.core.nth.call(null,vec__14581,(0),null);var v = cljs.core.nth.call(null,vec__14581,(1),null);if((schema.core.specific_key_QMARK_.call(null,k)) && (cljs.core._EQ_.call(null,in_QMARK_,cljs.core.contains_QMARK_.call(null,ks__$1,schema.core.explicit_schema_key.call(null,k)))))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__14574.call(null,cljs.core.rest.call(null,s__14575__$2)));
} else
{{
var G__14596 = cljs.core.rest.call(null,s__14575__$2);
s__14575__$1 = G__14596;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(in_QMARK_,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
,null,null));
});})(in_QMARK_,s__14547__$2,temp__4126__auto__,ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
;return iter__4276__auto__.call(null,s);
})()),iter__14546.call(null,cljs.core.rest.call(null,s__14547__$2)));
}
} else
{return null;
}
break;
}
});})(ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
,null,null));
});})(ks__$1,validate__7251__auto__,ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
;return iter__4276__auto__.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14597 = output_checker14507_14586.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14597))
{var error__7253__auto___14598 = temp__4126__auto___14597;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.call(null,error__7253__auto___14598)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14504_14583,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14598], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14582,output_schema14504_14583,input_schema14505_14584,input_checker14506_14585,output_checker14507_14586))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.split_schema),schema.core.make_fn_schema.call(null,output_schema14504_14583,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14505_14584], null)));
var ufv___14629 = schema.utils.use_fn_validation;var output_schema14599_14630 = plumbing.fnk.schema.GraphIOSchemata;var input_schema14600_14631 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one.call(null,schema.core.Keyword,"key"),schema.core.one.call(null,plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);var input_checker14601_14632 = schema.core.checker.call(null,input_schema14600_14631);var output_checker14602_14633 = schema.core.checker.call(null,output_schema14599_14630);/**
* Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
* Returns: GraphIOSchemata
* 
* Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
* return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
*/
plumbing.fnk.schema.sequence_schemata = ((function (ufv___14629,output_schema14599_14630,input_schema14600_14631,input_checker14601_14632,output_checker14602_14633){
return (function sequence_schemata(G__14603,G__14604){var validate__7251__auto__ = ufv___14629.get_cell();if(cljs.core.truth_(validate__7251__auto__))
{var args__7252__auto___14634 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__14603,G__14604], null);var temp__4126__auto___14635 = input_checker14601_14632.call(null,args__7252__auto___14634);if(cljs.core.truth_(temp__4126__auto___14635))
{var error__7253__auto___14636 = temp__4126__auto___14635;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Input to %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7253__auto___14636)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),input_schema14600_14631,new cljs.core.Keyword(null,"value","value",305978217),args__7252__auto___14634,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14636], null));
} else
{}
} else
{}
var o__7254__auto__ = (function (){var G__14620 = G__14603;var vec__14622 = G__14620;var i1 = cljs.core.nth.call(null,vec__14622,(0),null);var o1 = cljs.core.nth.call(null,vec__14622,(1),null);var G__14621 = G__14604;var vec__14623 = G__14621;var k = cljs.core.nth.call(null,vec__14623,(0),null);var vec__14624 = cljs.core.nth.call(null,vec__14623,(1),null);var i2 = cljs.core.nth.call(null,vec__14624,(0),null);var o2 = cljs.core.nth.call(null,vec__14624,(1),null);var G__14620__$1 = G__14620;var G__14621__$1 = G__14621;while(true){
var vec__14625 = G__14620__$1;var i1__$1 = cljs.core.nth.call(null,vec__14625,(0),null);var o1__$1 = cljs.core.nth.call(null,vec__14625,(1),null);var vec__14626 = G__14621__$1;var k__$1 = cljs.core.nth.call(null,vec__14626,(0),null);var vec__14627 = cljs.core.nth.call(null,vec__14626,(1),null);var i2__$1 = cljs.core.nth.call(null,vec__14627,(0),null);var o2__$1 = cljs.core.nth.call(null,vec__14627,(1),null);if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",k__$1,schema.core.explain.call(null,i2__$1),schema.core.explain.call(null,i1__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,i2__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a key %s in its inputs %s",k__$1,schema.core.explain.call(null,i2__$1))));
}
if(!(plumbing.fnk.schema.possibly_contains_QMARK_.call(null,o1__$1,k__$1)))
{} else
{throw (new java.lang.IllegalArgumentException(schema.utils.format_STAR_.call(null,"Node outputs a duplicate key %s given inputs %s",k__$1,schema.core.explain.call(null,i1__$1))));
}
var vec__14628 = plumbing.fnk.schema.split_schema.call(null,i2__$1,cljs.core.keys.call(null,o1__$1));var used = cljs.core.nth.call(null,vec__14628,(0),null);var unused = cljs.core.nth.call(null,vec__14628,(1),null);plumbing.fnk.schema.assert_satisfies_schema.call(null,used,o1__$1);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata.call(null,unused,i1__$1),cljs.core.assoc.call(null,o1__$1,k__$1,o2__$1)], null);
break;
}
})();if(cljs.core.truth_(validate__7251__auto__))
{var temp__4126__auto___14637 = output_checker14602_14633.call(null,o__7254__auto__);if(cljs.core.truth_(temp__4126__auto___14637))
{var error__7253__auto___14638 = temp__4126__auto___14637;throw cljs.core.ex_info.call(null,schema.utils.format_STAR_.call(null,"Output of %s does not match schema: %s",new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.call(null,error__7253__auto___14638)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"schema","schema",-1582001791),output_schema14599_14630,new cljs.core.Keyword(null,"value","value",305978217),o__7254__auto__,new cljs.core.Keyword(null,"error","error",-978969032),error__7253__auto___14638], null));
} else
{}
} else
{}
return o__7254__auto__;
});})(ufv___14629,output_schema14599_14630,input_schema14600_14631,input_checker14601_14632,output_checker14602_14633))
;
schema.utils.declare_class_schema_BANG_.call(null,schema.utils.fn_schema_bearer.call(null,plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema.call(null,output_schema14599_14630,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema14600_14631], null)));

//# sourceMappingURL=schema.js.map