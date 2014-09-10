// Compiled by ClojureScript 0.0-2307
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('plumbing.fnk.schema');
goog.require('plumbing.fnk.schema');
goog.require('schema.utils');
goog.require('schema.utils');
/**
* A sentinel value representing missing portions of the input data.
*/
plumbing.core._PLUS_none_PLUS_ = new cljs.core.Keyword("plumbing.core","missing","plumbing.core/missing",1721767298);
/**
* Updates the value in map m at k with the function f.
* 
* Like update-in, but for updating a single top-level key.
* Any additional args will be passed to f after the value.
* @param {...*} var_args
*/
plumbing.core.update = (function() {
var update = null;
var update__3 = (function (m,k,f){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k)));
});
var update__4 = (function (m,k,f,x1){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1));
});
var update__5 = (function (m,k,f,x1,x2){return cljs.core.assoc.call(null,m,k,f.call(null,cljs.core.get.call(null,m,k),x1,x2));
});
var update__6 = (function() { 
var G__14916__delegate = function (m,k,f,x1,x2,xs){return cljs.core.assoc.call(null,m,k,cljs.core.apply.call(null,f,cljs.core.get.call(null,m,k),x1,x2,xs));
};
var G__14916 = function (m,k,f,x1,x2,var_args){
var xs = null;if (arguments.length > 5) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return G__14916__delegate.call(this,m,k,f,x1,x2,xs);};
G__14916.cljs$lang$maxFixedArity = 5;
G__14916.cljs$lang$applyTo = (function (arglist__14917){
var m = cljs.core.first(arglist__14917);
arglist__14917 = cljs.core.next(arglist__14917);
var k = cljs.core.first(arglist__14917);
arglist__14917 = cljs.core.next(arglist__14917);
var f = cljs.core.first(arglist__14917);
arglist__14917 = cljs.core.next(arglist__14917);
var x1 = cljs.core.first(arglist__14917);
arglist__14917 = cljs.core.next(arglist__14917);
var x2 = cljs.core.first(arglist__14917);
var xs = cljs.core.rest(arglist__14917);
return G__14916__delegate(m,k,f,x1,x2,xs);
});
G__14916.cljs$core$IFn$_invoke$arity$variadic = G__14916__delegate;
return G__14916;
})()
;
update = function(m,k,f,x1,x2,var_args){
var xs = var_args;
switch(arguments.length){
case 3:
return update__3.call(this,m,k,f);
case 4:
return update__4.call(this,m,k,f,x1);
case 5:
return update__5.call(this,m,k,f,x1,x2);
default:
return update__6.cljs$core$IFn$_invoke$arity$variadic(m,k,f,x1,x2, cljs.core.array_seq(arguments, 5));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
update.cljs$lang$maxFixedArity = 5;
update.cljs$lang$applyTo = update__6.cljs$lang$applyTo;
update.cljs$core$IFn$_invoke$arity$3 = update__3;
update.cljs$core$IFn$_invoke$arity$4 = update__4;
update.cljs$core$IFn$_invoke$arity$5 = update__5;
update.cljs$core$IFn$_invoke$arity$variadic = update__6.cljs$core$IFn$_invoke$arity$variadic;
return update;
})()
;
/**
* Build map k -> (f v) for [k v] in map, preserving the initial type
*/
plumbing.core.map_vals = (function map_vals(f,m){if(cljs.core.sorted_QMARK_.call(null,m))
{return cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc.call(null,out_m,k,f.call(null,v));
}),cljs.core.sorted_map.call(null),m);
} else
{if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,k,f.call(null,v));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8752__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14926_14932 = cljs.core.seq.call(null,m);var chunk__14927_14933 = null;var count__14928_14934 = (0);var i__14929_14935 = (0);while(true){
if((i__14929_14935 < count__14928_14934))
{var vec__14930_14936 = cljs.core._nth.call(null,chunk__14927_14933,i__14929_14935);var k_14937 = cljs.core.nth.call(null,vec__14930_14936,(0),null);var v_14938 = cljs.core.nth.call(null,vec__14930_14936,(1),null);var m14925_14939 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m14925_14939,k_14937,f.call(null,v_14938)));
{
var G__14940 = seq__14926_14932;
var G__14941 = chunk__14927_14933;
var G__14942 = count__14928_14934;
var G__14943 = (i__14929_14935 + (1));
seq__14926_14932 = G__14940;
chunk__14927_14933 = G__14941;
count__14928_14934 = G__14942;
i__14929_14935 = G__14943;
continue;
}
} else
{var temp__4126__auto___14944 = cljs.core.seq.call(null,seq__14926_14932);if(temp__4126__auto___14944)
{var seq__14926_14945__$1 = temp__4126__auto___14944;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14926_14945__$1))
{var c__4307__auto___14946 = cljs.core.chunk_first.call(null,seq__14926_14945__$1);{
var G__14947 = cljs.core.chunk_rest.call(null,seq__14926_14945__$1);
var G__14948 = c__4307__auto___14946;
var G__14949 = cljs.core.count.call(null,c__4307__auto___14946);
var G__14950 = (0);
seq__14926_14932 = G__14947;
chunk__14927_14933 = G__14948;
count__14928_14934 = G__14949;
i__14929_14935 = G__14950;
continue;
}
} else
{var vec__14931_14951 = cljs.core.first.call(null,seq__14926_14945__$1);var k_14952 = cljs.core.nth.call(null,vec__14931_14951,(0),null);var v_14953 = cljs.core.nth.call(null,vec__14931_14951,(1),null);var m14925_14954 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m14925_14954,k_14952,f.call(null,v_14953)));
{
var G__14955 = cljs.core.next.call(null,seq__14926_14945__$1);
var G__14956 = null;
var G__14957 = (0);
var G__14958 = (0);
seq__14926_14932 = G__14955;
chunk__14927_14933 = G__14956;
count__14928_14934 = G__14957;
i__14929_14935 = G__14958;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8752__auto__));

}
}
});
/**
* Build map (f k) -> v for [k v] in map m
*/
plumbing.core.map_keys = (function map_keys(f,m){if(cljs.core.map_QMARK_.call(null,m))
{return cljs.core.persistent_BANG_.call(null,cljs.core.reduce_kv.call(null,(function (out_m,k,v){return cljs.core.assoc_BANG_.call(null,out_m,f.call(null,k),v);
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),m));
} else
{var m_atom__8752__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__14967_14973 = cljs.core.seq.call(null,m);var chunk__14968_14974 = null;var count__14969_14975 = (0);var i__14970_14976 = (0);while(true){
if((i__14970_14976 < count__14969_14975))
{var vec__14971_14977 = cljs.core._nth.call(null,chunk__14968_14974,i__14970_14976);var k_14978 = cljs.core.nth.call(null,vec__14971_14977,(0),null);var v_14979 = cljs.core.nth.call(null,vec__14971_14977,(1),null);var m14966_14980 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m14966_14980,f.call(null,k_14978),v_14979));
{
var G__14981 = seq__14967_14973;
var G__14982 = chunk__14968_14974;
var G__14983 = count__14969_14975;
var G__14984 = (i__14970_14976 + (1));
seq__14967_14973 = G__14981;
chunk__14968_14974 = G__14982;
count__14969_14975 = G__14983;
i__14970_14976 = G__14984;
continue;
}
} else
{var temp__4126__auto___14985 = cljs.core.seq.call(null,seq__14967_14973);if(temp__4126__auto___14985)
{var seq__14967_14986__$1 = temp__4126__auto___14985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__14967_14986__$1))
{var c__4307__auto___14987 = cljs.core.chunk_first.call(null,seq__14967_14986__$1);{
var G__14988 = cljs.core.chunk_rest.call(null,seq__14967_14986__$1);
var G__14989 = c__4307__auto___14987;
var G__14990 = cljs.core.count.call(null,c__4307__auto___14987);
var G__14991 = (0);
seq__14967_14973 = G__14988;
chunk__14968_14974 = G__14989;
count__14969_14975 = G__14990;
i__14970_14976 = G__14991;
continue;
}
} else
{var vec__14972_14992 = cljs.core.first.call(null,seq__14967_14986__$1);var k_14993 = cljs.core.nth.call(null,vec__14972_14992,(0),null);var v_14994 = cljs.core.nth.call(null,vec__14972_14992,(1),null);var m14966_14995 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m14966_14995,f.call(null,k_14993),v_14994));
{
var G__14996 = cljs.core.next.call(null,seq__14967_14986__$1);
var G__14997 = null;
var G__14998 = (0);
var G__14999 = (0);
seq__14967_14973 = G__14996;
chunk__14968_14974 = G__14997;
count__14969_14975 = G__14998;
i__14970_14976 = G__14999;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8752__auto__));
}
});
/**
* Build map k -> (f k) for keys in ks
*/
plumbing.core.map_from_keys = (function map_from_keys(f,ks){var m_atom__8752__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15006_15010 = cljs.core.seq.call(null,ks);var chunk__15007_15011 = null;var count__15008_15012 = (0);var i__15009_15013 = (0);while(true){
if((i__15009_15013 < count__15008_15012))
{var k_15014 = cljs.core._nth.call(null,chunk__15007_15011,i__15009_15013);var m15005_15015 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15005_15015,k_15014,f.call(null,k_15014)));
{
var G__15016 = seq__15006_15010;
var G__15017 = chunk__15007_15011;
var G__15018 = count__15008_15012;
var G__15019 = (i__15009_15013 + (1));
seq__15006_15010 = G__15016;
chunk__15007_15011 = G__15017;
count__15008_15012 = G__15018;
i__15009_15013 = G__15019;
continue;
}
} else
{var temp__4126__auto___15020 = cljs.core.seq.call(null,seq__15006_15010);if(temp__4126__auto___15020)
{var seq__15006_15021__$1 = temp__4126__auto___15020;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15006_15021__$1))
{var c__4307__auto___15022 = cljs.core.chunk_first.call(null,seq__15006_15021__$1);{
var G__15023 = cljs.core.chunk_rest.call(null,seq__15006_15021__$1);
var G__15024 = c__4307__auto___15022;
var G__15025 = cljs.core.count.call(null,c__4307__auto___15022);
var G__15026 = (0);
seq__15006_15010 = G__15023;
chunk__15007_15011 = G__15024;
count__15008_15012 = G__15025;
i__15009_15013 = G__15026;
continue;
}
} else
{var k_15027 = cljs.core.first.call(null,seq__15006_15021__$1);var m15005_15028 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15005_15028,k_15027,f.call(null,k_15027)));
{
var G__15029 = cljs.core.next.call(null,seq__15006_15021__$1);
var G__15030 = null;
var G__15031 = (0);
var G__15032 = (0);
seq__15006_15010 = G__15029;
chunk__15007_15011 = G__15030;
count__15008_15012 = G__15031;
i__15009_15013 = G__15032;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8752__auto__));
});
/**
* Build map (f v) -> v for vals in vs
*/
plumbing.core.map_from_vals = (function map_from_vals(f,vs){var m_atom__8752__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15039_15043 = cljs.core.seq.call(null,vs);var chunk__15040_15044 = null;var count__15041_15045 = (0);var i__15042_15046 = (0);while(true){
if((i__15042_15046 < count__15041_15045))
{var v_15047 = cljs.core._nth.call(null,chunk__15040_15044,i__15042_15046);var m15038_15048 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15038_15048,f.call(null,v_15047),v_15047));
{
var G__15049 = seq__15039_15043;
var G__15050 = chunk__15040_15044;
var G__15051 = count__15041_15045;
var G__15052 = (i__15042_15046 + (1));
seq__15039_15043 = G__15049;
chunk__15040_15044 = G__15050;
count__15041_15045 = G__15051;
i__15042_15046 = G__15052;
continue;
}
} else
{var temp__4126__auto___15053 = cljs.core.seq.call(null,seq__15039_15043);if(temp__4126__auto___15053)
{var seq__15039_15054__$1 = temp__4126__auto___15053;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15039_15054__$1))
{var c__4307__auto___15055 = cljs.core.chunk_first.call(null,seq__15039_15054__$1);{
var G__15056 = cljs.core.chunk_rest.call(null,seq__15039_15054__$1);
var G__15057 = c__4307__auto___15055;
var G__15058 = cljs.core.count.call(null,c__4307__auto___15055);
var G__15059 = (0);
seq__15039_15043 = G__15056;
chunk__15040_15044 = G__15057;
count__15041_15045 = G__15058;
i__15042_15046 = G__15059;
continue;
}
} else
{var v_15060 = cljs.core.first.call(null,seq__15039_15054__$1);var m15038_15061 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15038_15061,f.call(null,v_15060),v_15060));
{
var G__15062 = cljs.core.next.call(null,seq__15039_15054__$1);
var G__15063 = null;
var G__15064 = (0);
var G__15065 = (0);
seq__15039_15043 = G__15062;
chunk__15040_15044 = G__15063;
count__15041_15045 = G__15064;
i__15042_15046 = G__15065;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8752__auto__));
});
/**
* Dissociate this keyseq from m, removing any empty maps created as a result
* (including at the top-level).
*/
plumbing.core.dissoc_in = (function dissoc_in(m,p__15066){var vec__15068 = p__15066;var k = cljs.core.nth.call(null,vec__15068,(0),null);var ks = cljs.core.nthnext.call(null,vec__15068,(1));if(cljs.core.truth_(m))
{var temp__4124__auto__ = (function (){var and__3539__auto__ = ks;if(and__3539__auto__)
{return dissoc_in.call(null,m.call(null,k),ks);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4124__auto__))
{var res = temp__4124__auto__;return cljs.core.assoc.call(null,m,k,res);
} else
{var res = cljs.core.dissoc.call(null,m,k);if(cljs.core.empty_QMARK_.call(null,res))
{return null;
} else
{return res;
}
}
} else
{return null;
}
});
/**
* Recursively convert maps in m (including itself)
* to have keyword keys instead of string
*/
plumbing.core.keywordize_map = (function keywordize_map(x){if(cljs.core.map_QMARK_.call(null,x))
{var m_atom__8752__auto__ = cljs.core.atom.call(null,cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY));var seq__15077_15083 = cljs.core.seq.call(null,x);var chunk__15078_15084 = null;var count__15079_15085 = (0);var i__15080_15086 = (0);while(true){
if((i__15080_15086 < count__15079_15085))
{var vec__15081_15087 = cljs.core._nth.call(null,chunk__15078_15084,i__15080_15086);var k_15088 = cljs.core.nth.call(null,vec__15081_15087,(0),null);var v_15089 = cljs.core.nth.call(null,vec__15081_15087,(1),null);var m15076_15090 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15076_15090,((typeof k_15088 === 'string')?cljs.core.keyword.call(null,k_15088):k_15088),keywordize_map.call(null,v_15089)));
{
var G__15091 = seq__15077_15083;
var G__15092 = chunk__15078_15084;
var G__15093 = count__15079_15085;
var G__15094 = (i__15080_15086 + (1));
seq__15077_15083 = G__15091;
chunk__15078_15084 = G__15092;
count__15079_15085 = G__15093;
i__15080_15086 = G__15094;
continue;
}
} else
{var temp__4126__auto___15095 = cljs.core.seq.call(null,seq__15077_15083);if(temp__4126__auto___15095)
{var seq__15077_15096__$1 = temp__4126__auto___15095;if(cljs.core.chunked_seq_QMARK_.call(null,seq__15077_15096__$1))
{var c__4307__auto___15097 = cljs.core.chunk_first.call(null,seq__15077_15096__$1);{
var G__15098 = cljs.core.chunk_rest.call(null,seq__15077_15096__$1);
var G__15099 = c__4307__auto___15097;
var G__15100 = cljs.core.count.call(null,c__4307__auto___15097);
var G__15101 = (0);
seq__15077_15083 = G__15098;
chunk__15078_15084 = G__15099;
count__15079_15085 = G__15100;
i__15080_15086 = G__15101;
continue;
}
} else
{var vec__15082_15102 = cljs.core.first.call(null,seq__15077_15096__$1);var k_15103 = cljs.core.nth.call(null,vec__15082_15102,(0),null);var v_15104 = cljs.core.nth.call(null,vec__15082_15102,(1),null);var m15076_15105 = cljs.core.deref.call(null,m_atom__8752__auto__);cljs.core.reset_BANG_.call(null,m_atom__8752__auto__,cljs.core.assoc_BANG_.call(null,m15076_15105,((typeof k_15103 === 'string')?cljs.core.keyword.call(null,k_15103):k_15103),keywordize_map.call(null,v_15104)));
{
var G__15106 = cljs.core.next.call(null,seq__15077_15096__$1);
var G__15107 = null;
var G__15108 = (0);
var G__15109 = (0);
seq__15077_15083 = G__15106;
chunk__15078_15084 = G__15107;
count__15079_15085 = G__15108;
i__15080_15086 = G__15109;
continue;
}
}
} else
{}
}
break;
}
return cljs.core.persistent_BANG_.call(null,cljs.core.deref.call(null,m_atom__8752__auto__));
} else
{if(cljs.core.seq_QMARK_.call(null,x))
{return cljs.core.map.call(null,keywordize_map,x);
} else
{if(cljs.core.vector_QMARK_.call(null,x))
{return cljs.core.mapv.call(null,keywordize_map,x);
} else
{return x;

}
}
}
});
/**
* Like get but throw an exception if not found
*/
plumbing.core.safe_get = (function safe_get(m,k){var temp__4124__auto__ = cljs.core.find.call(null,m,k);if(cljs.core.truth_(temp__4124__auto__))
{var pair__8821__auto__ = temp__4124__auto__;return cljs.core.val.call(null,pair__8821__auto__);
} else
{var e = schema.utils.format_STAR_.call(null,"Key %s not found in %s",k,cljs.core.mapv.call(null,cljs.core.key,m));throw (new Error(e));
}
});
/**
* Like get-in but throws exception if not found
*/
plumbing.core.safe_get_in = (function safe_get_in(m,ks){while(true){
if(cljs.core.seq.call(null,ks))
{{
var G__15110 = plumbing.core.safe_get.call(null,m,cljs.core.first.call(null,ks));
var G__15111 = cljs.core.next.call(null,ks);
m = G__15110;
ks = G__15111;
continue;
}
} else
{return m;
}
break;
}
});
/**
* Like assoc but only assocs when value is truthy
* @param {...*} var_args
*/
plumbing.core.assoc_when = (function() { 
var assoc_when__delegate = function (m,kvs){if(cljs.core.even_QMARK_.call(null,cljs.core.count.call(null,kvs)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null))))))));
}
return cljs.core.into.call(null,(function (){var or__3551__auto__ = m;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4276__auto__ = (function iter__15120(s__15121){return (new cljs.core.LazySeq(null,(function (){var s__15121__$1 = s__15121;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15121__$1);if(temp__4126__auto__)
{var s__15121__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15121__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15121__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15123 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15122 = (0);while(true){
if((i__15122 < size__4275__auto__))
{var vec__15126 = cljs.core._nth.call(null,c__4274__auto__,i__15122);var k = cljs.core.nth.call(null,vec__15126,(0),null);var v = cljs.core.nth.call(null,vec__15126,(1),null);if(cljs.core.truth_(v))
{cljs.core.chunk_append.call(null,b__15123,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
{
var G__15128 = (i__15122 + (1));
i__15122 = G__15128;
continue;
}
} else
{{
var G__15129 = (i__15122 + (1));
i__15122 = G__15129;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15123),iter__15120.call(null,cljs.core.chunk_rest.call(null,s__15121__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15123),null);
}
} else
{var vec__15127 = cljs.core.first.call(null,s__15121__$2);var k = cljs.core.nth.call(null,vec__15127,(0),null);var v = cljs.core.nth.call(null,vec__15127,(1),null);if(cljs.core.truth_(v))
{return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),iter__15120.call(null,cljs.core.rest.call(null,s__15121__$2)));
} else
{{
var G__15130 = cljs.core.rest.call(null,s__15121__$2);
s__15121__$1 = G__15130;
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
});return iter__4276__auto__.call(null,cljs.core.partition.call(null,(2),kvs));
})());
};
var assoc_when = function (m,var_args){
var kvs = null;if (arguments.length > 1) {
  kvs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return assoc_when__delegate.call(this,m,kvs);};
assoc_when.cljs$lang$maxFixedArity = 1;
assoc_when.cljs$lang$applyTo = (function (arglist__15131){
var m = cljs.core.first(arglist__15131);
var kvs = cljs.core.rest(arglist__15131);
return assoc_when__delegate(m,kvs);
});
assoc_when.cljs$core$IFn$_invoke$arity$variadic = assoc_when__delegate;
return assoc_when;
})()
;
/**
* Like update-in but returns m unchanged if key-seq is not present.
* @param {...*} var_args
*/
plumbing.core.update_in_when = (function() { 
var update_in_when__delegate = function (m,key_seq,f,args){var found = cljs.core.get_in.call(null,m,key_seq,plumbing.core._PLUS_none_PLUS_);if(!((plumbing.core._PLUS_none_PLUS_ === found)))
{return cljs.core.assoc_in.call(null,m,key_seq,cljs.core.apply.call(null,f,found,args));
} else
{return m;
}
};
var update_in_when = function (m,key_seq,f,var_args){
var args = null;if (arguments.length > 3) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return update_in_when__delegate.call(this,m,key_seq,f,args);};
update_in_when.cljs$lang$maxFixedArity = 3;
update_in_when.cljs$lang$applyTo = (function (arglist__15132){
var m = cljs.core.first(arglist__15132);
arglist__15132 = cljs.core.next(arglist__15132);
var key_seq = cljs.core.first(arglist__15132);
arglist__15132 = cljs.core.next(arglist__15132);
var f = cljs.core.first(arglist__15132);
var args = cljs.core.rest(arglist__15132);
return update_in_when__delegate(m,key_seq,f,args);
});
update_in_when.cljs$core$IFn$_invoke$arity$variadic = update_in_when__delegate;
return update_in_when;
})()
;
/**
* Like group-by, but accepts a map-fn that is applied to values before
* collected.
*/
plumbing.core.grouped_map = (function grouped_map(key_fn,map_fn,coll){return cljs.core.persistent_BANG_.call(null,cljs.core.reduce.call(null,(function (ret,x){var k = key_fn.call(null,x);return cljs.core.assoc_BANG_.call(null,ret,k,cljs.core.conj.call(null,cljs.core.get.call(null,ret,k,cljs.core.PersistentVector.EMPTY),map_fn.call(null,x)));
}),cljs.core.transient$.call(null,cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
* Like (apply concat s) but lazier (and shorter)
*/
plumbing.core.aconcat = (function aconcat(s){return cljs.core.concat.call(null,(new cljs.core.LazySeq(null,(function (){return cljs.core.first.call(null,s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){var temp__4126__auto__ = cljs.core.next.call(null,s);if(temp__4126__auto__)
{var n = temp__4126__auto__;return aconcat.call(null,n);
} else
{return null;
}
}),null,null)));
});
/**
* Takes a seqable and returns a lazy sequence that
* is maximally lazy and doesn't realize elements due to either
* chunking or apply.
* 
* Useful when you don't want chunking, for instance,
* (first awesome-website? (map slurp +a-bunch-of-urls+))
* may slurp up to 31 unneed webpages, wherease
* (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
* is guaranteed to stop slurping after the first awesome website.
* 
* Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
*/
plumbing.core.unchunk = (function unchunk(s){if(cljs.core.seq.call(null,s))
{return cljs.core.cons.call(null,cljs.core.first.call(null,s),(new cljs.core.LazySeq(null,(function (){return unchunk.call(null,cljs.core.rest.call(null,s));
}),null,null)));
} else
{return null;
}
});
/**
* Return sum of (f x) for each x in xs
*/
plumbing.core.sum = (function() {
var sum = null;
var sum__1 = (function (xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,xs);
});
var sum__2 = (function (f,xs){return cljs.core.reduce.call(null,cljs.core._PLUS_,cljs.core.map.call(null,f,xs));
});
sum = function(f,xs){
switch(arguments.length){
case 1:
return sum__1.call(this,f);
case 2:
return sum__2.call(this,f,xs);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sum.cljs$core$IFn$_invoke$arity$1 = sum__1;
sum.cljs$core$IFn$_invoke$arity$2 = sum__2;
return sum;
})()
;
/**
* returns (first xs) when xs has only 1 element
*/
plumbing.core.singleton = (function singleton(xs){var temp__4126__auto__ = cljs.core.seq.call(null,xs);if(temp__4126__auto__)
{var xs__$1 = temp__4126__auto__;if(cljs.core.next.call(null,xs__$1))
{return null;
} else
{return cljs.core.first.call(null,xs__$1);
}
} else
{return null;
}
});
/**
* Returns [idx x] for x in seqable s
*/
plumbing.core.indexed = (function indexed(s){return cljs.core.map_indexed.call(null,cljs.core.vector,s);
});
/**
* Returns indices idx of sequence s where (f (nth s idx))
*/
plumbing.core.positions = (function positions(f,s){return cljs.core.keep_indexed.call(null,(function (i,x){if(cljs.core.truth_(f.call(null,x)))
{return i;
} else
{return null;
}
}),s);
});
/**
* Returns elements of xs which return unique
* values according to f. If multiple elements of xs return the same
* value under f, the first is returned
*/
plumbing.core.distinct_by = (function distinct_by(f,xs){var s = cljs.core.atom.call(null,cljs.core.PersistentHashSet.EMPTY);var iter__4276__auto__ = ((function (s){
return (function iter__15137(s__15138){return (new cljs.core.LazySeq(null,((function (s){
return (function (){var s__15138__$1 = s__15138;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__15138__$1);if(temp__4126__auto__)
{var s__15138__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__15138__$2))
{var c__4274__auto__ = cljs.core.chunk_first.call(null,s__15138__$2);var size__4275__auto__ = cljs.core.count.call(null,c__4274__auto__);var b__15140 = cljs.core.chunk_buffer.call(null,size__4275__auto__);if((function (){var i__15139 = (0);while(true){
if((i__15139 < size__4275__auto__))
{var x = cljs.core._nth.call(null,c__4274__auto__,i__15139);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{cljs.core.chunk_append.call(null,b__15140,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})());
{
var G__15141 = (i__15139 + (1));
i__15139 = G__15141;
continue;
}
} else
{{
var G__15142 = (i__15139 + (1));
i__15139 = G__15142;
continue;
}
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15140),iter__15137.call(null,cljs.core.chunk_rest.call(null,s__15138__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__15140),null);
}
} else
{var x = cljs.core.first.call(null,s__15138__$2);var id = f.call(null,x);if(!(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,s),id)))
{return cljs.core.cons.call(null,(function (){cljs.core.swap_BANG_.call(null,s,cljs.core.conj,id);
return x;
})(),iter__15137.call(null,cljs.core.rest.call(null,s__15138__$2)));
} else
{{
var G__15143 = cljs.core.rest.call(null,s__15138__$2);
s__15138__$1 = G__15143;
continue;
}
}
}
} else
{return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;return iter__4276__auto__.call(null,xs);
});
/**
* Analogy: partition:partition-all :: interleave:interleave-all
* @param {...*} var_args
*/
plumbing.core.interleave_all = (function() { 
var interleave_all__delegate = function (colls){return (new cljs.core.LazySeq(null,(function (){return (function helper(seqs){if(cljs.core.seq.call(null,seqs))
{return cljs.core.concat.call(null,cljs.core.map.call(null,cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){return helper.call(null,cljs.core.keep.call(null,cljs.core.next,seqs));
}),null,null)));
} else
{return null;
}
}).call(null,cljs.core.keep.call(null,cljs.core.seq,colls));
}),null,null));
};
var interleave_all = function (var_args){
var colls = null;if (arguments.length > 0) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return interleave_all__delegate.call(this,colls);};
interleave_all.cljs$lang$maxFixedArity = 0;
interleave_all.cljs$lang$applyTo = (function (arglist__15144){
var colls = cljs.core.seq(arglist__15144);
return interleave_all__delegate(colls);
});
interleave_all.cljs$core$IFn$_invoke$arity$variadic = interleave_all__delegate;
return interleave_all;
})()
;
/**
* Returns # of elements of xs where pred holds
*/
plumbing.core.count_when = (function count_when(pred,xs){return cljs.core.count.call(null,cljs.core.filter.call(null,pred,xs));
});
/**
* Like conj but ignores non-truthy values
* @param {...*} var_args
*/
plumbing.core.conj_when = (function() {
var conj_when = null;
var conj_when__2 = (function (coll,x){if(cljs.core.truth_(x))
{return cljs.core.conj.call(null,coll,x);
} else
{return coll;
}
});
var conj_when__3 = (function() { 
var G__15145__delegate = function (coll,x,xs){while(true){
if(cljs.core.truth_(xs))
{{
var G__15146 = conj_when.call(null,coll,x);
var G__15147 = cljs.core.first.call(null,xs);
var G__15148 = cljs.core.next.call(null,xs);
coll = G__15146;
x = G__15147;
xs = G__15148;
continue;
}
} else
{return conj_when.call(null,coll,x);
}
break;
}
};
var G__15145 = function (coll,x,var_args){
var xs = null;if (arguments.length > 2) {
  xs = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15145__delegate.call(this,coll,x,xs);};
G__15145.cljs$lang$maxFixedArity = 2;
G__15145.cljs$lang$applyTo = (function (arglist__15149){
var coll = cljs.core.first(arglist__15149);
arglist__15149 = cljs.core.next(arglist__15149);
var x = cljs.core.first(arglist__15149);
var xs = cljs.core.rest(arglist__15149);
return G__15145__delegate(coll,x,xs);
});
G__15145.cljs$core$IFn$_invoke$arity$variadic = G__15145__delegate;
return G__15145;
})()
;
conj_when = function(coll,x,var_args){
var xs = var_args;
switch(arguments.length){
case 2:
return conj_when__2.call(this,coll,x);
default:
return conj_when__3.cljs$core$IFn$_invoke$arity$variadic(coll,x, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
conj_when.cljs$lang$maxFixedArity = 2;
conj_when.cljs$lang$applyTo = conj_when__3.cljs$lang$applyTo;
conj_when.cljs$core$IFn$_invoke$arity$2 = conj_when__2;
conj_when.cljs$core$IFn$_invoke$arity$variadic = conj_when__3.cljs$core$IFn$_invoke$arity$variadic;
return conj_when;
})()
;
/**
* Like cons but does nothing if x is non-truthy.
*/
plumbing.core.cons_when = (function cons_when(x,s){if(cljs.core.truth_(x))
{return cljs.core.cons.call(null,x,s);
} else
{return s;
}
});
/**
* Like sort-by, but prefers higher values rather than lower ones.
*/
plumbing.core.rsort_by = cljs.core.comp.call(null,cljs.core.reverse,cljs.core.sort_by);
/**
* Like swap! but returns a pair [old-val new-val]
* @param {...*} var_args
*/
plumbing.core.swap_pair_BANG_ = (function() {
var swap_pair_BANG_ = null;
var swap_pair_BANG___2 = (function (a,f){while(true){
var old_val = cljs.core.deref.call(null,a);var new_val = f.call(null,old_val);if(cljs.core.compare_and_set_BANG_.call(null,a,old_val,new_val))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else
{{
continue;
}
}
break;
}
});
var swap_pair_BANG___3 = (function() { 
var G__15151__delegate = function (a,f,args){return swap_pair_BANG_.call(null,a,(function (p1__15150_SHARP_){return cljs.core.apply.call(null,f,p1__15150_SHARP_,args);
}));
};
var G__15151 = function (a,f,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15151__delegate.call(this,a,f,args);};
G__15151.cljs$lang$maxFixedArity = 2;
G__15151.cljs$lang$applyTo = (function (arglist__15152){
var a = cljs.core.first(arglist__15152);
arglist__15152 = cljs.core.next(arglist__15152);
var f = cljs.core.first(arglist__15152);
var args = cljs.core.rest(arglist__15152);
return G__15151__delegate(a,f,args);
});
G__15151.cljs$core$IFn$_invoke$arity$variadic = G__15151__delegate;
return G__15151;
})()
;
swap_pair_BANG_ = function(a,f,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return swap_pair_BANG___2.call(this,a,f);
default:
return swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic(a,f, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
swap_pair_BANG_.cljs$lang$maxFixedArity = 2;
swap_pair_BANG_.cljs$lang$applyTo = swap_pair_BANG___3.cljs$lang$applyTo;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = swap_pair_BANG___2;
swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = swap_pair_BANG___3.cljs$core$IFn$_invoke$arity$variadic;
return swap_pair_BANG_;
})()
;
/**
* Like reset! but returns old-val
*/
plumbing.core.get_and_set_BANG_ = (function get_and_set_BANG_(a,new_val){return cljs.core.first.call(null,plumbing.core.swap_pair_BANG_.call(null,a,cljs.core.constantly.call(null,new_val)));
});
plumbing.core.millis = (function millis(){return (new Date()).getTime();
});
/**
* Like apply, but applies a map to a function with positional map
* arguments. Can take optional initial args just like apply.
* @param {...*} var_args
*/
plumbing.core.mapply = (function() {
var mapply = null;
var mapply__2 = (function (f,m){return cljs.core.apply.call(null,f,cljs.core.apply.call(null,cljs.core.concat,m));
});
var mapply__3 = (function() { 
var G__15153__delegate = function (f,arg,args){return cljs.core.apply.call(null,f,arg,cljs.core.concat.call(null,cljs.core.butlast.call(null,args),cljs.core.apply.call(null,cljs.core.concat,cljs.core.last.call(null,args))));
};
var G__15153 = function (f,arg,var_args){
var args = null;if (arguments.length > 2) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return G__15153__delegate.call(this,f,arg,args);};
G__15153.cljs$lang$maxFixedArity = 2;
G__15153.cljs$lang$applyTo = (function (arglist__15154){
var f = cljs.core.first(arglist__15154);
arglist__15154 = cljs.core.next(arglist__15154);
var arg = cljs.core.first(arglist__15154);
var args = cljs.core.rest(arglist__15154);
return G__15153__delegate(f,arg,args);
});
G__15153.cljs$core$IFn$_invoke$arity$variadic = G__15153__delegate;
return G__15153;
})()
;
mapply = function(f,arg,var_args){
var args = var_args;
switch(arguments.length){
case 2:
return mapply__2.call(this,f,arg);
default:
return mapply__3.cljs$core$IFn$_invoke$arity$variadic(f,arg, cljs.core.array_seq(arguments, 2));
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapply.cljs$lang$maxFixedArity = 2;
mapply.cljs$lang$applyTo = mapply__3.cljs$lang$applyTo;
mapply.cljs$core$IFn$_invoke$arity$2 = mapply__2;
mapply.cljs$core$IFn$_invoke$arity$variadic = mapply__3.cljs$core$IFn$_invoke$arity$variadic;
return mapply;
})()
;

//# sourceMappingURL=core.js.map