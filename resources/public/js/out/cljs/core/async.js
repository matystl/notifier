// Compiled by ClojureScript 0.0-2307
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11465 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11465 = (function (f,fn_handler,meta11466){
this.f = f;
this.fn_handler = fn_handler;
this.meta11466 = meta11466;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11465.cljs$lang$type = true;
cljs.core.async.t11465.cljs$lang$ctorStr = "cljs.core.async/t11465";
cljs.core.async.t11465.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11465");
});
cljs.core.async.t11465.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11465.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11465.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11467){var self__ = this;
var _11467__$1 = this;return self__.meta11466;
});
cljs.core.async.t11465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11467,meta11466__$1){var self__ = this;
var _11467__$1 = this;return (new cljs.core.async.t11465(self__.f,self__.fn_handler,meta11466__$1));
});
cljs.core.async.__GT_t11465 = (function __GT_t11465(f__$1,fn_handler__$1,meta11466){return (new cljs.core.async.t11465(f__$1,fn_handler__$1,meta11466));
});
}
return (new cljs.core.async.t11465(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11469 = buff;if(G__11469)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__11469.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11469.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11469);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11469);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
* Returns true unless port is already closed
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error("<! used not in (go ...) block"));
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_11470 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11470);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_11470,ret){
return (function (){return fn1.call(null,val_11470);
});})(val_11470,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(_){return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
* Returns true unless port is already closed.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(">! used not in (go ...) block"));
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);if(cljs.core.truth_(temp__4124__auto__))
{var ret = temp__4124__auto__;return cljs.core.deref.call(null,ret);
} else
{return true;
}
});
var put_BANG___3 = (function (port,val,fn1){return put_BANG_.call(null,port,val,fn1,true);
});
var put_BANG___4 = (function (port,val,fn1,on_caller_QMARK_){var temp__4124__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(temp__4124__auto__))
{var retb = temp__4124__auto__;var ret = cljs.core.deref.call(null,retb);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,ret);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4124__auto__){
return (function (){return fn1.call(null,ret);
});})(ret,retb,temp__4124__auto__))
);
}
return ret;
} else
{return true;
}
});
put_BANG_ = function(port,val,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn1);
case 4:
return put_BANG___4.call(this,port,val,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___11471 = n;var x_11472 = (0);while(true){
if((x_11472 < n__4407__auto___11471))
{(a[x_11472] = (0));
{
var G__11473 = (x_11472 + (1));
x_11472 = G__11473;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__11474 = (i + (1));
i = G__11474;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11478 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11478 = (function (flag,alt_flag,meta11479){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11479 = meta11479;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11478.cljs$lang$type = true;
cljs.core.async.t11478.cljs$lang$ctorStr = "cljs.core.async/t11478";
cljs.core.async.t11478.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11478");
});})(flag))
;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t11478.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t11478.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_11480){var self__ = this;
var _11480__$1 = this;return self__.meta11479;
});})(flag))
;
cljs.core.async.t11478.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_11480,meta11479__$1){var self__ = this;
var _11480__$1 = this;return (new cljs.core.async.t11478(self__.flag,self__.alt_flag,meta11479__$1));
});})(flag))
;
cljs.core.async.__GT_t11478 = ((function (flag){
return (function __GT_t11478(flag__$1,alt_flag__$1,meta11479){return (new cljs.core.async.t11478(flag__$1,alt_flag__$1,meta11479));
});})(flag))
;
}
return (new cljs.core.async.t11478(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11484 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11484 = (function (cb,flag,alt_handler,meta11485){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11485 = meta11485;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11484.cljs$lang$type = true;
cljs.core.async.t11484.cljs$lang$ctorStr = "cljs.core.async/t11484";
cljs.core.async.t11484.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11484");
});
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11484.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11484.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11486){var self__ = this;
var _11486__$1 = this;return self__.meta11485;
});
cljs.core.async.t11484.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11486,meta11485__$1){var self__ = this;
var _11486__$1 = this;return (new cljs.core.async.t11484(self__.cb,self__.flag,self__.alt_handler,meta11485__$1));
});
cljs.core.async.__GT_t11484 = (function __GT_t11484(cb__$1,flag__$1,alt_handler__$1,meta11485){return (new cljs.core.async.t11484(cb__$1,flag__$1,alt_handler__$1,meta11485));
});
}
return (new cljs.core.async.t11484(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11487_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11487_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__11488_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11488_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__11489 = (i + (1));
i = G__11489;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints,
* which can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and a
* boolean (true unless already closed, as per put!) for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__11490){var map__11492 = p__11490;var map__11492__$1 = ((cljs.core.seq_QMARK_.call(null,map__11492))?cljs.core.apply.call(null,cljs.core.hash_map,map__11492):map__11492);var opts = map__11492__$1;throw (new Error("alts! used not in (go ...) block"));
};
var alts_BANG_ = function (ports,var_args){
var p__11490 = null;if (arguments.length > 1) {
  p__11490 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11490);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11493){
var ports = cljs.core.first(arglist__11493);
var p__11490 = cljs.core.rest(arglist__11493);
return alts_BANG___delegate(ports,p__11490);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11501 = (function (ch,f,map_LT_,meta11502){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11502 = meta11502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11501.cljs$lang$type = true;
cljs.core.async.t11501.cljs$lang$ctorStr = "cljs.core.async/t11501";
cljs.core.async.t11501.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11501");
});
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11504 = (function (fn1,_,meta11502,ch,f,map_LT_,meta11505){
this.fn1 = fn1;
this._ = _;
this.meta11502 = meta11502;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11505 = meta11505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11504.cljs$lang$type = true;
cljs.core.async.t11504.cljs$lang$ctorStr = "cljs.core.async/t11504";
cljs.core.async.t11504.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11504");
});})(___$1))
;
cljs.core.async.t11504.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11504.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t11504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__11494_SHARP_){return f1.call(null,(((p1__11494_SHARP_ == null))?null:self__.f.call(null,p1__11494_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t11504.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_11506){var self__ = this;
var _11506__$1 = this;return self__.meta11505;
});})(___$1))
;
cljs.core.async.t11504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_11506,meta11505__$1){var self__ = this;
var _11506__$1 = this;return (new cljs.core.async.t11504(self__.fn1,self__._,self__.meta11502,self__.ch,self__.f,self__.map_LT_,meta11505__$1));
});})(___$1))
;
cljs.core.async.__GT_t11504 = ((function (___$1){
return (function __GT_t11504(fn1__$1,___$2,meta11502__$1,ch__$2,f__$2,map_LT___$2,meta11505){return (new cljs.core.async.t11504(fn1__$1,___$2,meta11502__$1,ch__$2,f__$2,map_LT___$2,meta11505));
});})(___$1))
;
}
return (new cljs.core.async.t11504(fn1,___$1,self__.meta11502,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11501.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11503){var self__ = this;
var _11503__$1 = this;return self__.meta11502;
});
cljs.core.async.t11501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11503,meta11502__$1){var self__ = this;
var _11503__$1 = this;return (new cljs.core.async.t11501(self__.ch,self__.f,self__.map_LT_,meta11502__$1));
});
cljs.core.async.__GT_t11501 = (function __GT_t11501(ch__$1,f__$1,map_LT___$1,meta11502){return (new cljs.core.async.t11501(ch__$1,f__$1,map_LT___$1,meta11502));
});
}
return (new cljs.core.async.t11501(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11510 = (function (ch,f,map_GT_,meta11511){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11511 = meta11511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11510.cljs$lang$type = true;
cljs.core.async.t11510.cljs$lang$ctorStr = "cljs.core.async/t11510";
cljs.core.async.t11510.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11510");
});
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11510.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11510.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11512){var self__ = this;
var _11512__$1 = this;return self__.meta11511;
});
cljs.core.async.t11510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11512,meta11511__$1){var self__ = this;
var _11512__$1 = this;return (new cljs.core.async.t11510(self__.ch,self__.f,self__.map_GT_,meta11511__$1));
});
cljs.core.async.__GT_t11510 = (function __GT_t11510(ch__$1,f__$1,map_GT___$1,meta11511){return (new cljs.core.async.t11510(ch__$1,f__$1,map_GT___$1,meta11511));
});
}
return (new cljs.core.async.t11510(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11516 = (function (ch,p,filter_GT_,meta11517){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11517 = meta11517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11516.cljs$lang$type = true;
cljs.core.async.t11516.cljs$lang$ctorStr = "cljs.core.async/t11516";
cljs.core.async.t11516.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11516");
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else
{return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11516.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});
cljs.core.async.t11516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11518){var self__ = this;
var _11518__$1 = this;return self__.meta11517;
});
cljs.core.async.t11516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11518,meta11517__$1){var self__ = this;
var _11518__$1 = this;return (new cljs.core.async.t11516(self__.ch,self__.p,self__.filter_GT_,meta11517__$1));
});
cljs.core.async.__GT_t11516 = (function __GT_t11516(ch__$1,p__$1,filter_GT___$1,meta11517){return (new cljs.core.async.t11516(ch__$1,p__$1,filter_GT___$1,meta11517));
});
}
return (new cljs.core.async.t11516(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___11601 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11601,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11601,out){
return (function (state_11580){var state_val_11581 = (state_11580[(1)]);if((state_val_11581 === (7)))
{var inst_11576 = (state_11580[(2)]);var state_11580__$1 = state_11580;var statearr_11582_11602 = state_11580__$1;(statearr_11582_11602[(2)] = inst_11576);
(statearr_11582_11602[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (1)))
{var state_11580__$1 = state_11580;var statearr_11583_11603 = state_11580__$1;(statearr_11583_11603[(2)] = null);
(statearr_11583_11603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (4)))
{var inst_11562 = (state_11580[(7)]);var inst_11562__$1 = (state_11580[(2)]);var inst_11563 = (inst_11562__$1 == null);var state_11580__$1 = (function (){var statearr_11584 = state_11580;(statearr_11584[(7)] = inst_11562__$1);
return statearr_11584;
})();if(cljs.core.truth_(inst_11563))
{var statearr_11585_11604 = state_11580__$1;(statearr_11585_11604[(1)] = (5));
} else
{var statearr_11586_11605 = state_11580__$1;(statearr_11586_11605[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (6)))
{var inst_11562 = (state_11580[(7)]);var inst_11567 = p.call(null,inst_11562);var state_11580__$1 = state_11580;if(cljs.core.truth_(inst_11567))
{var statearr_11587_11606 = state_11580__$1;(statearr_11587_11606[(1)] = (8));
} else
{var statearr_11588_11607 = state_11580__$1;(statearr_11588_11607[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (3)))
{var inst_11578 = (state_11580[(2)]);var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11580__$1,inst_11578);
} else
{if((state_val_11581 === (2)))
{var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11580__$1,(4),ch);
} else
{if((state_val_11581 === (11)))
{var inst_11570 = (state_11580[(2)]);var state_11580__$1 = state_11580;var statearr_11589_11608 = state_11580__$1;(statearr_11589_11608[(2)] = inst_11570);
(statearr_11589_11608[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (9)))
{var state_11580__$1 = state_11580;var statearr_11590_11609 = state_11580__$1;(statearr_11590_11609[(2)] = null);
(statearr_11590_11609[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (5)))
{var inst_11565 = cljs.core.async.close_BANG_.call(null,out);var state_11580__$1 = state_11580;var statearr_11591_11610 = state_11580__$1;(statearr_11591_11610[(2)] = inst_11565);
(statearr_11591_11610[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (10)))
{var inst_11573 = (state_11580[(2)]);var state_11580__$1 = (function (){var statearr_11592 = state_11580;(statearr_11592[(8)] = inst_11573);
return statearr_11592;
})();var statearr_11593_11611 = state_11580__$1;(statearr_11593_11611[(2)] = null);
(statearr_11593_11611[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11581 === (8)))
{var inst_11562 = (state_11580[(7)]);var state_11580__$1 = state_11580;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11580__$1,(11),out,inst_11562);
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
}
}
}
});})(c__6367__auto___11601,out))
;return ((function (switch__6352__auto__,c__6367__auto___11601,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11597 = [null,null,null,null,null,null,null,null,null];(statearr_11597[(0)] = state_machine__6353__auto__);
(statearr_11597[(1)] = (1));
return statearr_11597;
});
var state_machine__6353__auto____1 = (function (state_11580){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11580);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11598){if((e11598 instanceof Object))
{var ex__6356__auto__ = e11598;var statearr_11599_11612 = state_11580;(statearr_11599_11612[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11580);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11598;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11613 = state_11580;
state_11580 = G__11613;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11580){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11601,out))
})();var state__6369__auto__ = (function (){var statearr_11600 = f__6368__auto__.call(null);(statearr_11600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11601);
return statearr_11600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11601,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_11779){var state_val_11780 = (state_11779[(1)]);if((state_val_11780 === (7)))
{var inst_11775 = (state_11779[(2)]);var state_11779__$1 = state_11779;var statearr_11781_11822 = state_11779__$1;(statearr_11781_11822[(2)] = inst_11775);
(statearr_11781_11822[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (20)))
{var inst_11745 = (state_11779[(7)]);var inst_11756 = (state_11779[(2)]);var inst_11757 = cljs.core.next.call(null,inst_11745);var inst_11731 = inst_11757;var inst_11732 = null;var inst_11733 = (0);var inst_11734 = (0);var state_11779__$1 = (function (){var statearr_11782 = state_11779;(statearr_11782[(8)] = inst_11732);
(statearr_11782[(9)] = inst_11731);
(statearr_11782[(10)] = inst_11734);
(statearr_11782[(11)] = inst_11733);
(statearr_11782[(12)] = inst_11756);
return statearr_11782;
})();var statearr_11783_11823 = state_11779__$1;(statearr_11783_11823[(2)] = null);
(statearr_11783_11823[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (1)))
{var state_11779__$1 = state_11779;var statearr_11784_11824 = state_11779__$1;(statearr_11784_11824[(2)] = null);
(statearr_11784_11824[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (4)))
{var inst_11720 = (state_11779[(13)]);var inst_11720__$1 = (state_11779[(2)]);var inst_11721 = (inst_11720__$1 == null);var state_11779__$1 = (function (){var statearr_11785 = state_11779;(statearr_11785[(13)] = inst_11720__$1);
return statearr_11785;
})();if(cljs.core.truth_(inst_11721))
{var statearr_11786_11825 = state_11779__$1;(statearr_11786_11825[(1)] = (5));
} else
{var statearr_11787_11826 = state_11779__$1;(statearr_11787_11826[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (15)))
{var state_11779__$1 = state_11779;var statearr_11791_11827 = state_11779__$1;(statearr_11791_11827[(2)] = null);
(statearr_11791_11827[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (21)))
{var state_11779__$1 = state_11779;var statearr_11792_11828 = state_11779__$1;(statearr_11792_11828[(2)] = null);
(statearr_11792_11828[(1)] = (23));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (13)))
{var inst_11732 = (state_11779[(8)]);var inst_11731 = (state_11779[(9)]);var inst_11734 = (state_11779[(10)]);var inst_11733 = (state_11779[(11)]);var inst_11741 = (state_11779[(2)]);var inst_11742 = (inst_11734 + (1));var tmp11788 = inst_11732;var tmp11789 = inst_11731;var tmp11790 = inst_11733;var inst_11731__$1 = tmp11789;var inst_11732__$1 = tmp11788;var inst_11733__$1 = tmp11790;var inst_11734__$1 = inst_11742;var state_11779__$1 = (function (){var statearr_11793 = state_11779;(statearr_11793[(8)] = inst_11732__$1);
(statearr_11793[(9)] = inst_11731__$1);
(statearr_11793[(10)] = inst_11734__$1);
(statearr_11793[(11)] = inst_11733__$1);
(statearr_11793[(14)] = inst_11741);
return statearr_11793;
})();var statearr_11794_11829 = state_11779__$1;(statearr_11794_11829[(2)] = null);
(statearr_11794_11829[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (22)))
{var state_11779__$1 = state_11779;var statearr_11795_11830 = state_11779__$1;(statearr_11795_11830[(2)] = null);
(statearr_11795_11830[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (6)))
{var inst_11720 = (state_11779[(13)]);var inst_11729 = f.call(null,inst_11720);var inst_11730 = cljs.core.seq.call(null,inst_11729);var inst_11731 = inst_11730;var inst_11732 = null;var inst_11733 = (0);var inst_11734 = (0);var state_11779__$1 = (function (){var statearr_11796 = state_11779;(statearr_11796[(8)] = inst_11732);
(statearr_11796[(9)] = inst_11731);
(statearr_11796[(10)] = inst_11734);
(statearr_11796[(11)] = inst_11733);
return statearr_11796;
})();var statearr_11797_11831 = state_11779__$1;(statearr_11797_11831[(2)] = null);
(statearr_11797_11831[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (17)))
{var inst_11745 = (state_11779[(7)]);var inst_11749 = cljs.core.chunk_first.call(null,inst_11745);var inst_11750 = cljs.core.chunk_rest.call(null,inst_11745);var inst_11751 = cljs.core.count.call(null,inst_11749);var inst_11731 = inst_11750;var inst_11732 = inst_11749;var inst_11733 = inst_11751;var inst_11734 = (0);var state_11779__$1 = (function (){var statearr_11798 = state_11779;(statearr_11798[(8)] = inst_11732);
(statearr_11798[(9)] = inst_11731);
(statearr_11798[(10)] = inst_11734);
(statearr_11798[(11)] = inst_11733);
return statearr_11798;
})();var statearr_11799_11832 = state_11779__$1;(statearr_11799_11832[(2)] = null);
(statearr_11799_11832[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (3)))
{var inst_11777 = (state_11779[(2)]);var state_11779__$1 = state_11779;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11779__$1,inst_11777);
} else
{if((state_val_11780 === (12)))
{var inst_11765 = (state_11779[(2)]);var state_11779__$1 = state_11779;var statearr_11800_11833 = state_11779__$1;(statearr_11800_11833[(2)] = inst_11765);
(statearr_11800_11833[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (2)))
{var state_11779__$1 = state_11779;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11779__$1,(4),in$);
} else
{if((state_val_11780 === (23)))
{var inst_11773 = (state_11779[(2)]);var state_11779__$1 = state_11779;var statearr_11801_11834 = state_11779__$1;(statearr_11801_11834[(2)] = inst_11773);
(statearr_11801_11834[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (19)))
{var inst_11760 = (state_11779[(2)]);var state_11779__$1 = state_11779;var statearr_11802_11835 = state_11779__$1;(statearr_11802_11835[(2)] = inst_11760);
(statearr_11802_11835[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (11)))
{var inst_11731 = (state_11779[(9)]);var inst_11745 = (state_11779[(7)]);var inst_11745__$1 = cljs.core.seq.call(null,inst_11731);var state_11779__$1 = (function (){var statearr_11803 = state_11779;(statearr_11803[(7)] = inst_11745__$1);
return statearr_11803;
})();if(inst_11745__$1)
{var statearr_11804_11836 = state_11779__$1;(statearr_11804_11836[(1)] = (14));
} else
{var statearr_11805_11837 = state_11779__$1;(statearr_11805_11837[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (9)))
{var inst_11767 = (state_11779[(2)]);var inst_11768 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);var state_11779__$1 = (function (){var statearr_11806 = state_11779;(statearr_11806[(15)] = inst_11767);
return statearr_11806;
})();if(cljs.core.truth_(inst_11768))
{var statearr_11807_11838 = state_11779__$1;(statearr_11807_11838[(1)] = (21));
} else
{var statearr_11808_11839 = state_11779__$1;(statearr_11808_11839[(1)] = (22));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (5)))
{var inst_11723 = cljs.core.async.close_BANG_.call(null,out);var state_11779__$1 = state_11779;var statearr_11809_11840 = state_11779__$1;(statearr_11809_11840[(2)] = inst_11723);
(statearr_11809_11840[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (14)))
{var inst_11745 = (state_11779[(7)]);var inst_11747 = cljs.core.chunked_seq_QMARK_.call(null,inst_11745);var state_11779__$1 = state_11779;if(inst_11747)
{var statearr_11810_11841 = state_11779__$1;(statearr_11810_11841[(1)] = (17));
} else
{var statearr_11811_11842 = state_11779__$1;(statearr_11811_11842[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (16)))
{var inst_11763 = (state_11779[(2)]);var state_11779__$1 = state_11779;var statearr_11812_11843 = state_11779__$1;(statearr_11812_11843[(2)] = inst_11763);
(statearr_11812_11843[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11780 === (10)))
{var inst_11732 = (state_11779[(8)]);var inst_11734 = (state_11779[(10)]);var inst_11739 = cljs.core._nth.call(null,inst_11732,inst_11734);var state_11779__$1 = state_11779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11779__$1,(13),out,inst_11739);
} else
{if((state_val_11780 === (18)))
{var inst_11745 = (state_11779[(7)]);var inst_11754 = cljs.core.first.call(null,inst_11745);var state_11779__$1 = state_11779;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11779__$1,(20),out,inst_11754);
} else
{if((state_val_11780 === (8)))
{var inst_11734 = (state_11779[(10)]);var inst_11733 = (state_11779[(11)]);var inst_11736 = (inst_11734 < inst_11733);var inst_11737 = inst_11736;var state_11779__$1 = state_11779;if(cljs.core.truth_(inst_11737))
{var statearr_11813_11844 = state_11779__$1;(statearr_11813_11844[(1)] = (10));
} else
{var statearr_11814_11845 = state_11779__$1;(statearr_11814_11845[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11818[(0)] = state_machine__6353__auto__);
(statearr_11818[(1)] = (1));
return statearr_11818;
});
var state_machine__6353__auto____1 = (function (state_11779){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11779);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11819){if((e11819 instanceof Object))
{var ex__6356__auto__ = e11819;var statearr_11820_11846 = state_11779;(statearr_11820_11846[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11779);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11819;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11847 = state_11779;
state_11779 = G__11847;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11779){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_11821 = f__6368__auto__.call(null);(statearr_11821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_11821;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the from
* channel closes, but can be determined by the close?  parameter. Will
* stop consuming the from channel if the to channel closes
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__6367__auto___11942 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___11942){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___11942){
return (function (state_11918){var state_val_11919 = (state_11918[(1)]);if((state_val_11919 === (7)))
{var inst_11914 = (state_11918[(2)]);var state_11918__$1 = state_11918;var statearr_11920_11943 = state_11918__$1;(statearr_11920_11943[(2)] = inst_11914);
(statearr_11920_11943[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (1)))
{var state_11918__$1 = state_11918;var statearr_11921_11944 = state_11918__$1;(statearr_11921_11944[(2)] = null);
(statearr_11921_11944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (4)))
{var inst_11897 = (state_11918[(7)]);var inst_11897__$1 = (state_11918[(2)]);var inst_11898 = (inst_11897__$1 == null);var state_11918__$1 = (function (){var statearr_11922 = state_11918;(statearr_11922[(7)] = inst_11897__$1);
return statearr_11922;
})();if(cljs.core.truth_(inst_11898))
{var statearr_11923_11945 = state_11918__$1;(statearr_11923_11945[(1)] = (5));
} else
{var statearr_11924_11946 = state_11918__$1;(statearr_11924_11946[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (13)))
{var state_11918__$1 = state_11918;var statearr_11925_11947 = state_11918__$1;(statearr_11925_11947[(2)] = null);
(statearr_11925_11947[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (6)))
{var inst_11897 = (state_11918[(7)]);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11918__$1,(11),to,inst_11897);
} else
{if((state_val_11919 === (3)))
{var inst_11916 = (state_11918[(2)]);var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11918__$1,inst_11916);
} else
{if((state_val_11919 === (12)))
{var state_11918__$1 = state_11918;var statearr_11926_11948 = state_11918__$1;(statearr_11926_11948[(2)] = null);
(statearr_11926_11948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (2)))
{var state_11918__$1 = state_11918;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11918__$1,(4),from);
} else
{if((state_val_11919 === (11)))
{var inst_11907 = (state_11918[(2)]);var state_11918__$1 = state_11918;if(cljs.core.truth_(inst_11907))
{var statearr_11927_11949 = state_11918__$1;(statearr_11927_11949[(1)] = (12));
} else
{var statearr_11928_11950 = state_11918__$1;(statearr_11928_11950[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (9)))
{var state_11918__$1 = state_11918;var statearr_11929_11951 = state_11918__$1;(statearr_11929_11951[(2)] = null);
(statearr_11929_11951[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (5)))
{var state_11918__$1 = state_11918;if(cljs.core.truth_(close_QMARK_))
{var statearr_11930_11952 = state_11918__$1;(statearr_11930_11952[(1)] = (8));
} else
{var statearr_11931_11953 = state_11918__$1;(statearr_11931_11953[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (14)))
{var inst_11912 = (state_11918[(2)]);var state_11918__$1 = state_11918;var statearr_11932_11954 = state_11918__$1;(statearr_11932_11954[(2)] = inst_11912);
(statearr_11932_11954[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (10)))
{var inst_11904 = (state_11918[(2)]);var state_11918__$1 = state_11918;var statearr_11933_11955 = state_11918__$1;(statearr_11933_11955[(2)] = inst_11904);
(statearr_11933_11955[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11919 === (8)))
{var inst_11901 = cljs.core.async.close_BANG_.call(null,to);var state_11918__$1 = state_11918;var statearr_11934_11956 = state_11918__$1;(statearr_11934_11956[(2)] = inst_11901);
(statearr_11934_11956[(1)] = (10));
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
}
}
}
}
}
}
});})(c__6367__auto___11942))
;return ((function (switch__6352__auto__,c__6367__auto___11942){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_11938 = [null,null,null,null,null,null,null,null];(statearr_11938[(0)] = state_machine__6353__auto__);
(statearr_11938[(1)] = (1));
return statearr_11938;
});
var state_machine__6353__auto____1 = (function (state_11918){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_11918);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e11939){if((e11939 instanceof Object))
{var ex__6356__auto__ = e11939;var statearr_11940_11957 = state_11918;(statearr_11940_11957[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11918);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11939;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11958 = state_11918;
state_11918 = G__11958;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_11918){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_11918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___11942))
})();var state__6369__auto__ = (function (){var statearr_11941 = f__6368__auto__.call(null);(statearr_11941[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___11942);
return statearr_11941;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___11942))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6367__auto___12059 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12059,tc,fc){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12059,tc,fc){
return (function (state_12034){var state_val_12035 = (state_12034[(1)]);if((state_val_12035 === (7)))
{var inst_12030 = (state_12034[(2)]);var state_12034__$1 = state_12034;var statearr_12036_12060 = state_12034__$1;(statearr_12036_12060[(2)] = inst_12030);
(statearr_12036_12060[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (1)))
{var state_12034__$1 = state_12034;var statearr_12037_12061 = state_12034__$1;(statearr_12037_12061[(2)] = null);
(statearr_12037_12061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (4)))
{var inst_12011 = (state_12034[(7)]);var inst_12011__$1 = (state_12034[(2)]);var inst_12012 = (inst_12011__$1 == null);var state_12034__$1 = (function (){var statearr_12038 = state_12034;(statearr_12038[(7)] = inst_12011__$1);
return statearr_12038;
})();if(cljs.core.truth_(inst_12012))
{var statearr_12039_12062 = state_12034__$1;(statearr_12039_12062[(1)] = (5));
} else
{var statearr_12040_12063 = state_12034__$1;(statearr_12040_12063[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (13)))
{var state_12034__$1 = state_12034;var statearr_12041_12064 = state_12034__$1;(statearr_12041_12064[(2)] = null);
(statearr_12041_12064[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (6)))
{var inst_12011 = (state_12034[(7)]);var inst_12017 = p.call(null,inst_12011);var state_12034__$1 = state_12034;if(cljs.core.truth_(inst_12017))
{var statearr_12042_12065 = state_12034__$1;(statearr_12042_12065[(1)] = (9));
} else
{var statearr_12043_12066 = state_12034__$1;(statearr_12043_12066[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (3)))
{var inst_12032 = (state_12034[(2)]);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12034__$1,inst_12032);
} else
{if((state_val_12035 === (12)))
{var state_12034__$1 = state_12034;var statearr_12044_12067 = state_12034__$1;(statearr_12044_12067[(2)] = null);
(statearr_12044_12067[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (2)))
{var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12034__$1,(4),ch);
} else
{if((state_val_12035 === (11)))
{var inst_12011 = (state_12034[(7)]);var inst_12021 = (state_12034[(2)]);var state_12034__$1 = state_12034;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12034__$1,(8),inst_12021,inst_12011);
} else
{if((state_val_12035 === (9)))
{var state_12034__$1 = state_12034;var statearr_12045_12068 = state_12034__$1;(statearr_12045_12068[(2)] = tc);
(statearr_12045_12068[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (5)))
{var inst_12014 = cljs.core.async.close_BANG_.call(null,tc);var inst_12015 = cljs.core.async.close_BANG_.call(null,fc);var state_12034__$1 = (function (){var statearr_12046 = state_12034;(statearr_12046[(8)] = inst_12014);
return statearr_12046;
})();var statearr_12047_12069 = state_12034__$1;(statearr_12047_12069[(2)] = inst_12015);
(statearr_12047_12069[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (14)))
{var inst_12028 = (state_12034[(2)]);var state_12034__$1 = state_12034;var statearr_12048_12070 = state_12034__$1;(statearr_12048_12070[(2)] = inst_12028);
(statearr_12048_12070[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (10)))
{var state_12034__$1 = state_12034;var statearr_12049_12071 = state_12034__$1;(statearr_12049_12071[(2)] = fc);
(statearr_12049_12071[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12035 === (8)))
{var inst_12023 = (state_12034[(2)]);var state_12034__$1 = state_12034;if(cljs.core.truth_(inst_12023))
{var statearr_12050_12072 = state_12034__$1;(statearr_12050_12072[(1)] = (12));
} else
{var statearr_12051_12073 = state_12034__$1;(statearr_12051_12073[(1)] = (13));
}
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
}
}
}
}
}
}
});})(c__6367__auto___12059,tc,fc))
;return ((function (switch__6352__auto__,c__6367__auto___12059,tc,fc){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12055 = [null,null,null,null,null,null,null,null,null];(statearr_12055[(0)] = state_machine__6353__auto__);
(statearr_12055[(1)] = (1));
return statearr_12055;
});
var state_machine__6353__auto____1 = (function (state_12034){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12034);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12056){if((e12056 instanceof Object))
{var ex__6356__auto__ = e12056;var statearr_12057_12074 = state_12034;(statearr_12057_12074[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12034);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12056;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12075 = state_12034;
state_12034 = G__12075;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12034){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12059,tc,fc))
})();var state__6369__auto__ = (function (){var statearr_12058 = f__6368__auto__.call(null);(statearr_12058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12059);
return statearr_12058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12059,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_12122){var state_val_12123 = (state_12122[(1)]);if((state_val_12123 === (7)))
{var inst_12118 = (state_12122[(2)]);var state_12122__$1 = state_12122;var statearr_12124_12140 = state_12122__$1;(statearr_12124_12140[(2)] = inst_12118);
(statearr_12124_12140[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (6)))
{var inst_12111 = (state_12122[(7)]);var inst_12108 = (state_12122[(8)]);var inst_12115 = f.call(null,inst_12108,inst_12111);var inst_12108__$1 = inst_12115;var state_12122__$1 = (function (){var statearr_12125 = state_12122;(statearr_12125[(8)] = inst_12108__$1);
return statearr_12125;
})();var statearr_12126_12141 = state_12122__$1;(statearr_12126_12141[(2)] = null);
(statearr_12126_12141[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (5)))
{var inst_12108 = (state_12122[(8)]);var state_12122__$1 = state_12122;var statearr_12127_12142 = state_12122__$1;(statearr_12127_12142[(2)] = inst_12108);
(statearr_12127_12142[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (4)))
{var inst_12111 = (state_12122[(7)]);var inst_12111__$1 = (state_12122[(2)]);var inst_12112 = (inst_12111__$1 == null);var state_12122__$1 = (function (){var statearr_12128 = state_12122;(statearr_12128[(7)] = inst_12111__$1);
return statearr_12128;
})();if(cljs.core.truth_(inst_12112))
{var statearr_12129_12143 = state_12122__$1;(statearr_12129_12143[(1)] = (5));
} else
{var statearr_12130_12144 = state_12122__$1;(statearr_12130_12144[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12123 === (3)))
{var inst_12120 = (state_12122[(2)]);var state_12122__$1 = state_12122;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12122__$1,inst_12120);
} else
{if((state_val_12123 === (2)))
{var state_12122__$1 = state_12122;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12122__$1,(4),ch);
} else
{if((state_val_12123 === (1)))
{var inst_12108 = init;var state_12122__$1 = (function (){var statearr_12131 = state_12122;(statearr_12131[(8)] = inst_12108);
return statearr_12131;
})();var statearr_12132_12145 = state_12122__$1;(statearr_12132_12145[(2)] = null);
(statearr_12132_12145[(1)] = (2));
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
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12136 = [null,null,null,null,null,null,null,null,null];(statearr_12136[(0)] = state_machine__6353__auto__);
(statearr_12136[(1)] = (1));
return statearr_12136;
});
var state_machine__6353__auto____1 = (function (state_12122){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12122);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12137){if((e12137 instanceof Object))
{var ex__6356__auto__ = e12137;var statearr_12138_12146 = state_12122;(statearr_12138_12146[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12122);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12137;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12147 = state_12122;
state_12122 = G__12147;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12122){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12122);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_12139 = f__6368__auto__.call(null);(statearr_12139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12139;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6367__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto__){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto__){
return (function (state_12221){var state_val_12222 = (state_12221[(1)]);if((state_val_12222 === (7)))
{var inst_12203 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12223_12246 = state_12221__$1;(statearr_12223_12246[(2)] = inst_12203);
(statearr_12223_12246[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (1)))
{var inst_12197 = cljs.core.seq.call(null,coll);var inst_12198 = inst_12197;var state_12221__$1 = (function (){var statearr_12224 = state_12221;(statearr_12224[(7)] = inst_12198);
return statearr_12224;
})();var statearr_12225_12247 = state_12221__$1;(statearr_12225_12247[(2)] = null);
(statearr_12225_12247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (4)))
{var inst_12198 = (state_12221[(7)]);var inst_12201 = cljs.core.first.call(null,inst_12198);var state_12221__$1 = state_12221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12221__$1,(7),ch,inst_12201);
} else
{if((state_val_12222 === (13)))
{var inst_12215 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12226_12248 = state_12221__$1;(statearr_12226_12248[(2)] = inst_12215);
(statearr_12226_12248[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (6)))
{var inst_12206 = (state_12221[(2)]);var state_12221__$1 = state_12221;if(cljs.core.truth_(inst_12206))
{var statearr_12227_12249 = state_12221__$1;(statearr_12227_12249[(1)] = (8));
} else
{var statearr_12228_12250 = state_12221__$1;(statearr_12228_12250[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (3)))
{var inst_12219 = (state_12221[(2)]);var state_12221__$1 = state_12221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12221__$1,inst_12219);
} else
{if((state_val_12222 === (12)))
{var state_12221__$1 = state_12221;var statearr_12229_12251 = state_12221__$1;(statearr_12229_12251[(2)] = null);
(statearr_12229_12251[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (2)))
{var inst_12198 = (state_12221[(7)]);var state_12221__$1 = state_12221;if(cljs.core.truth_(inst_12198))
{var statearr_12230_12252 = state_12221__$1;(statearr_12230_12252[(1)] = (4));
} else
{var statearr_12231_12253 = state_12221__$1;(statearr_12231_12253[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (11)))
{var inst_12212 = cljs.core.async.close_BANG_.call(null,ch);var state_12221__$1 = state_12221;var statearr_12232_12254 = state_12221__$1;(statearr_12232_12254[(2)] = inst_12212);
(statearr_12232_12254[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (9)))
{var state_12221__$1 = state_12221;if(cljs.core.truth_(close_QMARK_))
{var statearr_12233_12255 = state_12221__$1;(statearr_12233_12255[(1)] = (11));
} else
{var statearr_12234_12256 = state_12221__$1;(statearr_12234_12256[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (5)))
{var inst_12198 = (state_12221[(7)]);var state_12221__$1 = state_12221;var statearr_12235_12257 = state_12221__$1;(statearr_12235_12257[(2)] = inst_12198);
(statearr_12235_12257[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (10)))
{var inst_12217 = (state_12221[(2)]);var state_12221__$1 = state_12221;var statearr_12236_12258 = state_12221__$1;(statearr_12236_12258[(2)] = inst_12217);
(statearr_12236_12258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12222 === (8)))
{var inst_12198 = (state_12221[(7)]);var inst_12208 = cljs.core.next.call(null,inst_12198);var inst_12198__$1 = inst_12208;var state_12221__$1 = (function (){var statearr_12237 = state_12221;(statearr_12237[(7)] = inst_12198__$1);
return statearr_12237;
})();var statearr_12238_12259 = state_12221__$1;(statearr_12238_12259[(2)] = null);
(statearr_12238_12259[(1)] = (2));
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
}
}
}
}
}
});})(c__6367__auto__))
;return ((function (switch__6352__auto__,c__6367__auto__){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12242 = [null,null,null,null,null,null,null,null];(statearr_12242[(0)] = state_machine__6353__auto__);
(statearr_12242[(1)] = (1));
return statearr_12242;
});
var state_machine__6353__auto____1 = (function (state_12221){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12221);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12243){if((e12243 instanceof Object))
{var ex__6356__auto__ = e12243;var statearr_12244_12260 = state_12221;(statearr_12244_12260[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12243;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12261 = state_12221;
state_12221 = G__12261;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12221){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto__))
})();var state__6369__auto__ = (function (){var statearr_12245 = f__6368__auto__.call(null);(statearr_12245[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto__);
return statearr_12245;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto__))
);
return c__6367__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj12263 = {};return obj12263;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj12265 = {};return obj12265;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap puts to a closed channel, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12487 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12487 = (function (cs,ch,mult,meta12488){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12488 = meta12488;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12487.cljs$lang$type = true;
cljs.core.async.t12487.cljs$lang$ctorStr = "cljs.core.async/t12487";
cljs.core.async.t12487.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12487");
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12487.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12489){var self__ = this;
var _12489__$1 = this;return self__.meta12488;
});})(cs))
;
cljs.core.async.t12487.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12489,meta12488__$1){var self__ = this;
var _12489__$1 = this;return (new cljs.core.async.t12487(self__.cs,self__.ch,self__.mult,meta12488__$1));
});})(cs))
;
cljs.core.async.__GT_t12487 = ((function (cs){
return (function __GT_t12487(cs__$1,ch__$1,mult__$1,meta12488){return (new cljs.core.async.t12487(cs__$1,ch__$1,mult__$1,meta12488));
});})(cs))
;
}
return (new cljs.core.async.t12487(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (_){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6367__auto___12708 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___12708,cs,m,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___12708,cs,m,dchan,dctr,done){
return (function (state_12620){var state_val_12621 = (state_12620[(1)]);if((state_val_12621 === (7)))
{var inst_12616 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12622_12709 = state_12620__$1;(statearr_12622_12709[(2)] = inst_12616);
(statearr_12622_12709[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (20)))
{var inst_12521 = (state_12620[(7)]);var inst_12531 = cljs.core.first.call(null,inst_12521);var inst_12532 = cljs.core.nth.call(null,inst_12531,(0),null);var inst_12533 = cljs.core.nth.call(null,inst_12531,(1),null);var state_12620__$1 = (function (){var statearr_12623 = state_12620;(statearr_12623[(8)] = inst_12532);
return statearr_12623;
})();if(cljs.core.truth_(inst_12533))
{var statearr_12624_12710 = state_12620__$1;(statearr_12624_12710[(1)] = (22));
} else
{var statearr_12625_12711 = state_12620__$1;(statearr_12625_12711[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (27)))
{var inst_12568 = (state_12620[(9)]);var inst_12563 = (state_12620[(10)]);var inst_12561 = (state_12620[(11)]);var inst_12492 = (state_12620[(12)]);var inst_12568__$1 = cljs.core._nth.call(null,inst_12561,inst_12563);var inst_12569 = cljs.core.async.put_BANG_.call(null,inst_12568__$1,inst_12492,done);var state_12620__$1 = (function (){var statearr_12626 = state_12620;(statearr_12626[(9)] = inst_12568__$1);
return statearr_12626;
})();if(cljs.core.truth_(inst_12569))
{var statearr_12627_12712 = state_12620__$1;(statearr_12627_12712[(1)] = (30));
} else
{var statearr_12628_12713 = state_12620__$1;(statearr_12628_12713[(1)] = (31));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (1)))
{var state_12620__$1 = state_12620;var statearr_12629_12714 = state_12620__$1;(statearr_12629_12714[(2)] = null);
(statearr_12629_12714[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (24)))
{var inst_12521 = (state_12620[(7)]);var inst_12538 = (state_12620[(2)]);var inst_12539 = cljs.core.next.call(null,inst_12521);var inst_12501 = inst_12539;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12630 = state_12620;(statearr_12630[(13)] = inst_12538);
(statearr_12630[(14)] = inst_12501);
(statearr_12630[(15)] = inst_12502);
(statearr_12630[(16)] = inst_12503);
(statearr_12630[(17)] = inst_12504);
return statearr_12630;
})();var statearr_12631_12715 = state_12620__$1;(statearr_12631_12715[(2)] = null);
(statearr_12631_12715[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (39)))
{var state_12620__$1 = state_12620;var statearr_12635_12716 = state_12620__$1;(statearr_12635_12716[(2)] = null);
(statearr_12635_12716[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (4)))
{var inst_12492 = (state_12620[(12)]);var inst_12492__$1 = (state_12620[(2)]);var inst_12493 = (inst_12492__$1 == null);var state_12620__$1 = (function (){var statearr_12636 = state_12620;(statearr_12636[(12)] = inst_12492__$1);
return statearr_12636;
})();if(cljs.core.truth_(inst_12493))
{var statearr_12637_12717 = state_12620__$1;(statearr_12637_12717[(1)] = (5));
} else
{var statearr_12638_12718 = state_12620__$1;(statearr_12638_12718[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (15)))
{var inst_12501 = (state_12620[(14)]);var inst_12502 = (state_12620[(15)]);var inst_12503 = (state_12620[(16)]);var inst_12504 = (state_12620[(17)]);var inst_12517 = (state_12620[(2)]);var inst_12518 = (inst_12504 + (1));var tmp12632 = inst_12501;var tmp12633 = inst_12502;var tmp12634 = inst_12503;var inst_12501__$1 = tmp12632;var inst_12502__$1 = tmp12633;var inst_12503__$1 = tmp12634;var inst_12504__$1 = inst_12518;var state_12620__$1 = (function (){var statearr_12639 = state_12620;(statearr_12639[(14)] = inst_12501__$1);
(statearr_12639[(15)] = inst_12502__$1);
(statearr_12639[(16)] = inst_12503__$1);
(statearr_12639[(17)] = inst_12504__$1);
(statearr_12639[(18)] = inst_12517);
return statearr_12639;
})();var statearr_12640_12719 = state_12620__$1;(statearr_12640_12719[(2)] = null);
(statearr_12640_12719[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (21)))
{var inst_12542 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12644_12720 = state_12620__$1;(statearr_12644_12720[(2)] = inst_12542);
(statearr_12644_12720[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (31)))
{var inst_12568 = (state_12620[(9)]);var inst_12572 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12573 = cljs.core.async.untap_STAR_.call(null,m,inst_12568);var state_12620__$1 = (function (){var statearr_12645 = state_12620;(statearr_12645[(19)] = inst_12572);
return statearr_12645;
})();var statearr_12646_12721 = state_12620__$1;(statearr_12646_12721[(2)] = inst_12573);
(statearr_12646_12721[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (32)))
{var inst_12562 = (state_12620[(20)]);var inst_12563 = (state_12620[(10)]);var inst_12561 = (state_12620[(11)]);var inst_12560 = (state_12620[(21)]);var inst_12575 = (state_12620[(2)]);var inst_12576 = (inst_12563 + (1));var tmp12641 = inst_12562;var tmp12642 = inst_12561;var tmp12643 = inst_12560;var inst_12560__$1 = tmp12643;var inst_12561__$1 = tmp12642;var inst_12562__$1 = tmp12641;var inst_12563__$1 = inst_12576;var state_12620__$1 = (function (){var statearr_12647 = state_12620;(statearr_12647[(20)] = inst_12562__$1);
(statearr_12647[(22)] = inst_12575);
(statearr_12647[(10)] = inst_12563__$1);
(statearr_12647[(11)] = inst_12561__$1);
(statearr_12647[(21)] = inst_12560__$1);
return statearr_12647;
})();var statearr_12648_12722 = state_12620__$1;(statearr_12648_12722[(2)] = null);
(statearr_12648_12722[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (40)))
{var inst_12588 = (state_12620[(23)]);var inst_12592 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12593 = cljs.core.async.untap_STAR_.call(null,m,inst_12588);var state_12620__$1 = (function (){var statearr_12649 = state_12620;(statearr_12649[(24)] = inst_12592);
return statearr_12649;
})();var statearr_12650_12723 = state_12620__$1;(statearr_12650_12723[(2)] = inst_12593);
(statearr_12650_12723[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (33)))
{var inst_12579 = (state_12620[(25)]);var inst_12581 = cljs.core.chunked_seq_QMARK_.call(null,inst_12579);var state_12620__$1 = state_12620;if(inst_12581)
{var statearr_12651_12724 = state_12620__$1;(statearr_12651_12724[(1)] = (36));
} else
{var statearr_12652_12725 = state_12620__$1;(statearr_12652_12725[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (13)))
{var inst_12511 = (state_12620[(26)]);var inst_12514 = cljs.core.async.close_BANG_.call(null,inst_12511);var state_12620__$1 = state_12620;var statearr_12653_12726 = state_12620__$1;(statearr_12653_12726[(2)] = inst_12514);
(statearr_12653_12726[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (22)))
{var inst_12532 = (state_12620[(8)]);var inst_12535 = cljs.core.async.close_BANG_.call(null,inst_12532);var state_12620__$1 = state_12620;var statearr_12654_12727 = state_12620__$1;(statearr_12654_12727[(2)] = inst_12535);
(statearr_12654_12727[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (36)))
{var inst_12579 = (state_12620[(25)]);var inst_12583 = cljs.core.chunk_first.call(null,inst_12579);var inst_12584 = cljs.core.chunk_rest.call(null,inst_12579);var inst_12585 = cljs.core.count.call(null,inst_12583);var inst_12560 = inst_12584;var inst_12561 = inst_12583;var inst_12562 = inst_12585;var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12655 = state_12620;(statearr_12655[(20)] = inst_12562);
(statearr_12655[(10)] = inst_12563);
(statearr_12655[(11)] = inst_12561);
(statearr_12655[(21)] = inst_12560);
return statearr_12655;
})();var statearr_12656_12728 = state_12620__$1;(statearr_12656_12728[(2)] = null);
(statearr_12656_12728[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (41)))
{var inst_12579 = (state_12620[(25)]);var inst_12595 = (state_12620[(2)]);var inst_12596 = cljs.core.next.call(null,inst_12579);var inst_12560 = inst_12596;var inst_12561 = null;var inst_12562 = (0);var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12657 = state_12620;(statearr_12657[(27)] = inst_12595);
(statearr_12657[(20)] = inst_12562);
(statearr_12657[(10)] = inst_12563);
(statearr_12657[(11)] = inst_12561);
(statearr_12657[(21)] = inst_12560);
return statearr_12657;
})();var statearr_12658_12729 = state_12620__$1;(statearr_12658_12729[(2)] = null);
(statearr_12658_12729[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (43)))
{var state_12620__$1 = state_12620;var statearr_12659_12730 = state_12620__$1;(statearr_12659_12730[(2)] = null);
(statearr_12659_12730[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (29)))
{var inst_12604 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12660_12731 = state_12620__$1;(statearr_12660_12731[(2)] = inst_12604);
(statearr_12660_12731[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (44)))
{var inst_12613 = (state_12620[(2)]);var state_12620__$1 = (function (){var statearr_12661 = state_12620;(statearr_12661[(28)] = inst_12613);
return statearr_12661;
})();var statearr_12662_12732 = state_12620__$1;(statearr_12662_12732[(2)] = null);
(statearr_12662_12732[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (6)))
{var inst_12552 = (state_12620[(29)]);var inst_12551 = cljs.core.deref.call(null,cs);var inst_12552__$1 = cljs.core.keys.call(null,inst_12551);var inst_12553 = cljs.core.count.call(null,inst_12552__$1);var inst_12554 = cljs.core.reset_BANG_.call(null,dctr,inst_12553);var inst_12559 = cljs.core.seq.call(null,inst_12552__$1);var inst_12560 = inst_12559;var inst_12561 = null;var inst_12562 = (0);var inst_12563 = (0);var state_12620__$1 = (function (){var statearr_12663 = state_12620;(statearr_12663[(29)] = inst_12552__$1);
(statearr_12663[(30)] = inst_12554);
(statearr_12663[(20)] = inst_12562);
(statearr_12663[(10)] = inst_12563);
(statearr_12663[(11)] = inst_12561);
(statearr_12663[(21)] = inst_12560);
return statearr_12663;
})();var statearr_12664_12733 = state_12620__$1;(statearr_12664_12733[(2)] = null);
(statearr_12664_12733[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (28)))
{var inst_12579 = (state_12620[(25)]);var inst_12560 = (state_12620[(21)]);var inst_12579__$1 = cljs.core.seq.call(null,inst_12560);var state_12620__$1 = (function (){var statearr_12665 = state_12620;(statearr_12665[(25)] = inst_12579__$1);
return statearr_12665;
})();if(inst_12579__$1)
{var statearr_12666_12734 = state_12620__$1;(statearr_12666_12734[(1)] = (33));
} else
{var statearr_12667_12735 = state_12620__$1;(statearr_12667_12735[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (25)))
{var inst_12562 = (state_12620[(20)]);var inst_12563 = (state_12620[(10)]);var inst_12565 = (inst_12563 < inst_12562);var inst_12566 = inst_12565;var state_12620__$1 = state_12620;if(cljs.core.truth_(inst_12566))
{var statearr_12668_12736 = state_12620__$1;(statearr_12668_12736[(1)] = (27));
} else
{var statearr_12669_12737 = state_12620__$1;(statearr_12669_12737[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (34)))
{var state_12620__$1 = state_12620;var statearr_12670_12738 = state_12620__$1;(statearr_12670_12738[(2)] = null);
(statearr_12670_12738[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (17)))
{var state_12620__$1 = state_12620;var statearr_12671_12739 = state_12620__$1;(statearr_12671_12739[(2)] = null);
(statearr_12671_12739[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (3)))
{var inst_12618 = (state_12620[(2)]);var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12620__$1,inst_12618);
} else
{if((state_val_12621 === (12)))
{var inst_12547 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12672_12740 = state_12620__$1;(statearr_12672_12740[(2)] = inst_12547);
(statearr_12672_12740[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (2)))
{var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(4),ch);
} else
{if((state_val_12621 === (23)))
{var state_12620__$1 = state_12620;var statearr_12673_12741 = state_12620__$1;(statearr_12673_12741[(2)] = null);
(statearr_12673_12741[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (35)))
{var inst_12602 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12674_12742 = state_12620__$1;(statearr_12674_12742[(2)] = inst_12602);
(statearr_12674_12742[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (19)))
{var inst_12521 = (state_12620[(7)]);var inst_12525 = cljs.core.chunk_first.call(null,inst_12521);var inst_12526 = cljs.core.chunk_rest.call(null,inst_12521);var inst_12527 = cljs.core.count.call(null,inst_12525);var inst_12501 = inst_12526;var inst_12502 = inst_12525;var inst_12503 = inst_12527;var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12675 = state_12620;(statearr_12675[(14)] = inst_12501);
(statearr_12675[(15)] = inst_12502);
(statearr_12675[(16)] = inst_12503);
(statearr_12675[(17)] = inst_12504);
return statearr_12675;
})();var statearr_12676_12743 = state_12620__$1;(statearr_12676_12743[(2)] = null);
(statearr_12676_12743[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (11)))
{var inst_12501 = (state_12620[(14)]);var inst_12521 = (state_12620[(7)]);var inst_12521__$1 = cljs.core.seq.call(null,inst_12501);var state_12620__$1 = (function (){var statearr_12677 = state_12620;(statearr_12677[(7)] = inst_12521__$1);
return statearr_12677;
})();if(inst_12521__$1)
{var statearr_12678_12744 = state_12620__$1;(statearr_12678_12744[(1)] = (16));
} else
{var statearr_12679_12745 = state_12620__$1;(statearr_12679_12745[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (9)))
{var inst_12549 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12680_12746 = state_12620__$1;(statearr_12680_12746[(2)] = inst_12549);
(statearr_12680_12746[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (5)))
{var inst_12499 = cljs.core.deref.call(null,cs);var inst_12500 = cljs.core.seq.call(null,inst_12499);var inst_12501 = inst_12500;var inst_12502 = null;var inst_12503 = (0);var inst_12504 = (0);var state_12620__$1 = (function (){var statearr_12681 = state_12620;(statearr_12681[(14)] = inst_12501);
(statearr_12681[(15)] = inst_12502);
(statearr_12681[(16)] = inst_12503);
(statearr_12681[(17)] = inst_12504);
return statearr_12681;
})();var statearr_12682_12747 = state_12620__$1;(statearr_12682_12747[(2)] = null);
(statearr_12682_12747[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (14)))
{var state_12620__$1 = state_12620;var statearr_12683_12748 = state_12620__$1;(statearr_12683_12748[(2)] = null);
(statearr_12683_12748[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (45)))
{var inst_12610 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12684_12749 = state_12620__$1;(statearr_12684_12749[(2)] = inst_12610);
(statearr_12684_12749[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (26)))
{var inst_12552 = (state_12620[(29)]);var inst_12606 = (state_12620[(2)]);var inst_12607 = cljs.core.seq.call(null,inst_12552);var state_12620__$1 = (function (){var statearr_12685 = state_12620;(statearr_12685[(31)] = inst_12606);
return statearr_12685;
})();if(inst_12607)
{var statearr_12686_12750 = state_12620__$1;(statearr_12686_12750[(1)] = (42));
} else
{var statearr_12687_12751 = state_12620__$1;(statearr_12687_12751[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (16)))
{var inst_12521 = (state_12620[(7)]);var inst_12523 = cljs.core.chunked_seq_QMARK_.call(null,inst_12521);var state_12620__$1 = state_12620;if(inst_12523)
{var statearr_12688_12752 = state_12620__$1;(statearr_12688_12752[(1)] = (19));
} else
{var statearr_12689_12753 = state_12620__$1;(statearr_12689_12753[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (38)))
{var inst_12599 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12690_12754 = state_12620__$1;(statearr_12690_12754[(2)] = inst_12599);
(statearr_12690_12754[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (30)))
{var state_12620__$1 = state_12620;var statearr_12691_12755 = state_12620__$1;(statearr_12691_12755[(2)] = null);
(statearr_12691_12755[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (10)))
{var inst_12502 = (state_12620[(15)]);var inst_12504 = (state_12620[(17)]);var inst_12510 = cljs.core._nth.call(null,inst_12502,inst_12504);var inst_12511 = cljs.core.nth.call(null,inst_12510,(0),null);var inst_12512 = cljs.core.nth.call(null,inst_12510,(1),null);var state_12620__$1 = (function (){var statearr_12692 = state_12620;(statearr_12692[(26)] = inst_12511);
return statearr_12692;
})();if(cljs.core.truth_(inst_12512))
{var statearr_12693_12756 = state_12620__$1;(statearr_12693_12756[(1)] = (13));
} else
{var statearr_12694_12757 = state_12620__$1;(statearr_12694_12757[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (18)))
{var inst_12545 = (state_12620[(2)]);var state_12620__$1 = state_12620;var statearr_12695_12758 = state_12620__$1;(statearr_12695_12758[(2)] = inst_12545);
(statearr_12695_12758[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (42)))
{var state_12620__$1 = state_12620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12620__$1,(45),dchan);
} else
{if((state_val_12621 === (37)))
{var inst_12579 = (state_12620[(25)]);var inst_12588 = (state_12620[(23)]);var inst_12492 = (state_12620[(12)]);var inst_12588__$1 = cljs.core.first.call(null,inst_12579);var inst_12589 = cljs.core.async.put_BANG_.call(null,inst_12588__$1,inst_12492,done);var state_12620__$1 = (function (){var statearr_12696 = state_12620;(statearr_12696[(23)] = inst_12588__$1);
return statearr_12696;
})();if(cljs.core.truth_(inst_12589))
{var statearr_12697_12759 = state_12620__$1;(statearr_12697_12759[(1)] = (39));
} else
{var statearr_12698_12760 = state_12620__$1;(statearr_12698_12760[(1)] = (40));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12621 === (8)))
{var inst_12503 = (state_12620[(16)]);var inst_12504 = (state_12620[(17)]);var inst_12506 = (inst_12504 < inst_12503);var inst_12507 = inst_12506;var state_12620__$1 = state_12620;if(cljs.core.truth_(inst_12507))
{var statearr_12699_12761 = state_12620__$1;(statearr_12699_12761[(1)] = (10));
} else
{var statearr_12700_12762 = state_12620__$1;(statearr_12700_12762[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___12708,cs,m,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___12708,cs,m,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_12704 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12704[(0)] = state_machine__6353__auto__);
(statearr_12704[(1)] = (1));
return statearr_12704;
});
var state_machine__6353__auto____1 = (function (state_12620){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12620);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e12705){if((e12705 instanceof Object))
{var ex__6356__auto__ = e12705;var statearr_12706_12763 = state_12620;(statearr_12706_12763[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12620);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12705;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12764 = state_12620;
state_12620 = G__12764;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12620){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___12708,cs,m,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_12707 = f__6368__auto__.call(null);(statearr_12707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___12708);
return statearr_12707;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___12708,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj12766 = {};return obj12766;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t12886 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12886 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta12887){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta12887 = meta12887;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12886.cljs$lang$type = true;
cljs.core.async.t12886.cljs$lang$ctorStr = "cljs.core.async/t12886";
cljs.core.async.t12886.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t12886");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12886.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12888){var self__ = this;
var _12888__$1 = this;return self__.meta12887;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12886.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12888,meta12887__$1){var self__ = this;
var _12888__$1 = this;return (new cljs.core.async.t12886(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta12887__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12886 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12886(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12887){return (new cljs.core.async.t12886(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta12887));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12886(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__6367__auto___13005 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_12958){var state_val_12959 = (state_12958[(1)]);if((state_val_12959 === (7)))
{var inst_12902 = (state_12958[(7)]);var inst_12907 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12902);var state_12958__$1 = state_12958;var statearr_12960_13006 = state_12958__$1;(statearr_12960_13006[(2)] = inst_12907);
(statearr_12960_13006[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (20)))
{var inst_12917 = (state_12958[(8)]);var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12958__$1,(23),out,inst_12917);
} else
{if((state_val_12959 === (1)))
{var inst_12892 = (state_12958[(9)]);var inst_12892__$1 = calc_state.call(null);var inst_12893 = cljs.core.seq_QMARK_.call(null,inst_12892__$1);var state_12958__$1 = (function (){var statearr_12961 = state_12958;(statearr_12961[(9)] = inst_12892__$1);
return statearr_12961;
})();if(inst_12893)
{var statearr_12962_13007 = state_12958__$1;(statearr_12962_13007[(1)] = (2));
} else
{var statearr_12963_13008 = state_12958__$1;(statearr_12963_13008[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (24)))
{var inst_12910 = (state_12958[(10)]);var inst_12902 = inst_12910;var state_12958__$1 = (function (){var statearr_12964 = state_12958;(statearr_12964[(7)] = inst_12902);
return statearr_12964;
})();var statearr_12965_13009 = state_12958__$1;(statearr_12965_13009[(2)] = null);
(statearr_12965_13009[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (4)))
{var inst_12892 = (state_12958[(9)]);var inst_12898 = (state_12958[(2)]);var inst_12899 = cljs.core.get.call(null,inst_12898,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12900 = cljs.core.get.call(null,inst_12898,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12901 = cljs.core.get.call(null,inst_12898,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_12902 = inst_12892;var state_12958__$1 = (function (){var statearr_12966 = state_12958;(statearr_12966[(11)] = inst_12900);
(statearr_12966[(12)] = inst_12899);
(statearr_12966[(13)] = inst_12901);
(statearr_12966[(7)] = inst_12902);
return statearr_12966;
})();var statearr_12967_13010 = state_12958__$1;(statearr_12967_13010[(2)] = null);
(statearr_12967_13010[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (15)))
{var state_12958__$1 = state_12958;var statearr_12968_13011 = state_12958__$1;(statearr_12968_13011[(2)] = null);
(statearr_12968_13011[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (21)))
{var inst_12910 = (state_12958[(10)]);var inst_12902 = inst_12910;var state_12958__$1 = (function (){var statearr_12969 = state_12958;(statearr_12969[(7)] = inst_12902);
return statearr_12969;
})();var statearr_12970_13012 = state_12958__$1;(statearr_12970_13012[(2)] = null);
(statearr_12970_13012[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (13)))
{var inst_12954 = (state_12958[(2)]);var state_12958__$1 = state_12958;var statearr_12971_13013 = state_12958__$1;(statearr_12971_13013[(2)] = inst_12954);
(statearr_12971_13013[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (22)))
{var inst_12952 = (state_12958[(2)]);var state_12958__$1 = state_12958;var statearr_12972_13014 = state_12958__$1;(statearr_12972_13014[(2)] = inst_12952);
(statearr_12972_13014[(1)] = (13));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (6)))
{var inst_12956 = (state_12958[(2)]);var state_12958__$1 = state_12958;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12958__$1,inst_12956);
} else
{if((state_val_12959 === (25)))
{var state_12958__$1 = state_12958;var statearr_12973_13015 = state_12958__$1;(statearr_12973_13015[(2)] = null);
(statearr_12973_13015[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (17)))
{var inst_12932 = (state_12958[(14)]);var state_12958__$1 = state_12958;var statearr_12974_13016 = state_12958__$1;(statearr_12974_13016[(2)] = inst_12932);
(statearr_12974_13016[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (3)))
{var inst_12892 = (state_12958[(9)]);var state_12958__$1 = state_12958;var statearr_12975_13017 = state_12958__$1;(statearr_12975_13017[(2)] = inst_12892);
(statearr_12975_13017[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (12)))
{var inst_12913 = (state_12958[(15)]);var inst_12918 = (state_12958[(16)]);var inst_12932 = (state_12958[(14)]);var inst_12932__$1 = inst_12913.call(null,inst_12918);var state_12958__$1 = (function (){var statearr_12976 = state_12958;(statearr_12976[(14)] = inst_12932__$1);
return statearr_12976;
})();if(cljs.core.truth_(inst_12932__$1))
{var statearr_12977_13018 = state_12958__$1;(statearr_12977_13018[(1)] = (17));
} else
{var statearr_12978_13019 = state_12958__$1;(statearr_12978_13019[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (2)))
{var inst_12892 = (state_12958[(9)]);var inst_12895 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12892);var state_12958__$1 = state_12958;var statearr_12979_13020 = state_12958__$1;(statearr_12979_13020[(2)] = inst_12895);
(statearr_12979_13020[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (23)))
{var inst_12943 = (state_12958[(2)]);var state_12958__$1 = state_12958;if(cljs.core.truth_(inst_12943))
{var statearr_12980_13021 = state_12958__$1;(statearr_12980_13021[(1)] = (24));
} else
{var statearr_12981_13022 = state_12958__$1;(statearr_12981_13022[(1)] = (25));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (19)))
{var inst_12940 = (state_12958[(2)]);var state_12958__$1 = state_12958;if(cljs.core.truth_(inst_12940))
{var statearr_12982_13023 = state_12958__$1;(statearr_12982_13023[(1)] = (20));
} else
{var statearr_12983_13024 = state_12958__$1;(statearr_12983_13024[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (11)))
{var inst_12917 = (state_12958[(8)]);var inst_12923 = (inst_12917 == null);var state_12958__$1 = state_12958;if(cljs.core.truth_(inst_12923))
{var statearr_12984_13025 = state_12958__$1;(statearr_12984_13025[(1)] = (14));
} else
{var statearr_12985_13026 = state_12958__$1;(statearr_12985_13026[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (9)))
{var inst_12910 = (state_12958[(10)]);var inst_12910__$1 = (state_12958[(2)]);var inst_12911 = cljs.core.get.call(null,inst_12910__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_12912 = cljs.core.get.call(null,inst_12910__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_12913 = cljs.core.get.call(null,inst_12910__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_12958__$1 = (function (){var statearr_12986 = state_12958;(statearr_12986[(10)] = inst_12910__$1);
(statearr_12986[(15)] = inst_12913);
(statearr_12986[(17)] = inst_12912);
return statearr_12986;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_12958__$1,(10),inst_12911);
} else
{if((state_val_12959 === (5)))
{var inst_12902 = (state_12958[(7)]);var inst_12905 = cljs.core.seq_QMARK_.call(null,inst_12902);var state_12958__$1 = state_12958;if(inst_12905)
{var statearr_12987_13027 = state_12958__$1;(statearr_12987_13027[(1)] = (7));
} else
{var statearr_12988_13028 = state_12958__$1;(statearr_12988_13028[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (14)))
{var inst_12918 = (state_12958[(16)]);var inst_12925 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12918);var state_12958__$1 = state_12958;var statearr_12989_13029 = state_12958__$1;(statearr_12989_13029[(2)] = inst_12925);
(statearr_12989_13029[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (26)))
{var inst_12948 = (state_12958[(2)]);var state_12958__$1 = state_12958;var statearr_12990_13030 = state_12958__$1;(statearr_12990_13030[(2)] = inst_12948);
(statearr_12990_13030[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (16)))
{var inst_12928 = (state_12958[(2)]);var inst_12929 = calc_state.call(null);var inst_12902 = inst_12929;var state_12958__$1 = (function (){var statearr_12991 = state_12958;(statearr_12991[(18)] = inst_12928);
(statearr_12991[(7)] = inst_12902);
return statearr_12991;
})();var statearr_12992_13031 = state_12958__$1;(statearr_12992_13031[(2)] = null);
(statearr_12992_13031[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (10)))
{var inst_12918 = (state_12958[(16)]);var inst_12917 = (state_12958[(8)]);var inst_12916 = (state_12958[(2)]);var inst_12917__$1 = cljs.core.nth.call(null,inst_12916,(0),null);var inst_12918__$1 = cljs.core.nth.call(null,inst_12916,(1),null);var inst_12919 = (inst_12917__$1 == null);var inst_12920 = cljs.core._EQ_.call(null,inst_12918__$1,change);var inst_12921 = (inst_12919) || (inst_12920);var state_12958__$1 = (function (){var statearr_12993 = state_12958;(statearr_12993[(16)] = inst_12918__$1);
(statearr_12993[(8)] = inst_12917__$1);
return statearr_12993;
})();if(cljs.core.truth_(inst_12921))
{var statearr_12994_13032 = state_12958__$1;(statearr_12994_13032[(1)] = (11));
} else
{var statearr_12995_13033 = state_12958__$1;(statearr_12995_13033[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (18)))
{var inst_12913 = (state_12958[(15)]);var inst_12912 = (state_12958[(17)]);var inst_12918 = (state_12958[(16)]);var inst_12935 = cljs.core.empty_QMARK_.call(null,inst_12913);var inst_12936 = inst_12912.call(null,inst_12918);var inst_12937 = cljs.core.not.call(null,inst_12936);var inst_12938 = (inst_12935) && (inst_12937);var state_12958__$1 = state_12958;var statearr_12996_13034 = state_12958__$1;(statearr_12996_13034[(2)] = inst_12938);
(statearr_12996_13034[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12959 === (8)))
{var inst_12902 = (state_12958[(7)]);var state_12958__$1 = state_12958;var statearr_12997_13035 = state_12958__$1;(statearr_12997_13035[(2)] = inst_12902);
(statearr_12997_13035[(1)] = (9));
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__6352__auto__,c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13001[(0)] = state_machine__6353__auto__);
(statearr_13001[(1)] = (1));
return statearr_13001;
});
var state_machine__6353__auto____1 = (function (state_12958){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_12958);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13002){if((e13002 instanceof Object))
{var ex__6356__auto__ = e13002;var statearr_13003_13036 = state_12958;(statearr_13003_13036[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12958);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13002;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13037 = state_12958;
state_12958 = G__13037;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_12958){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_12958);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__6369__auto__ = (function (){var statearr_13004 = f__6368__auto__.call(null);(statearr_13004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13005);
return statearr_13004;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13005,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj13039 = {};return obj13039;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__13040_SHARP_){if(cljs.core.truth_(p1__13040_SHARP_.call(null,topic)))
{return p1__13040_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13040_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13163 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13164){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13164 = meta13164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13163.cljs$lang$type = true;
cljs.core.async.t13163.cljs$lang$ctorStr = "cljs.core.async/t13163";
cljs.core.async.t13163.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t13163");
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13163.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13163.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13165){var self__ = this;
var _13165__$1 = this;return self__.meta13164;
});})(mults,ensure_mult))
;
cljs.core.async.t13163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13165,meta13164__$1){var self__ = this;
var _13165__$1 = this;return (new cljs.core.async.t13163(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13164__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13163 = ((function (mults,ensure_mult){
return (function __GT_t13163(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13164){return (new cljs.core.async.t13163(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13164));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13163(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6367__auto___13285 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13285,mults,ensure_mult,p){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13285,mults,ensure_mult,p){
return (function (state_13237){var state_val_13238 = (state_13237[(1)]);if((state_val_13238 === (7)))
{var inst_13233 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13239_13286 = state_13237__$1;(statearr_13239_13286[(2)] = inst_13233);
(statearr_13239_13286[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (20)))
{var state_13237__$1 = state_13237;var statearr_13240_13287 = state_13237__$1;(statearr_13240_13287[(2)] = null);
(statearr_13240_13287[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (1)))
{var state_13237__$1 = state_13237;var statearr_13241_13288 = state_13237__$1;(statearr_13241_13288[(2)] = null);
(statearr_13241_13288[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (24)))
{var inst_13216 = (state_13237[(7)]);var inst_13225 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13216);var state_13237__$1 = state_13237;var statearr_13242_13289 = state_13237__$1;(statearr_13242_13289[(2)] = inst_13225);
(statearr_13242_13289[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (4)))
{var inst_13168 = (state_13237[(8)]);var inst_13168__$1 = (state_13237[(2)]);var inst_13169 = (inst_13168__$1 == null);var state_13237__$1 = (function (){var statearr_13243 = state_13237;(statearr_13243[(8)] = inst_13168__$1);
return statearr_13243;
})();if(cljs.core.truth_(inst_13169))
{var statearr_13244_13290 = state_13237__$1;(statearr_13244_13290[(1)] = (5));
} else
{var statearr_13245_13291 = state_13237__$1;(statearr_13245_13291[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (15)))
{var inst_13210 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13246_13292 = state_13237__$1;(statearr_13246_13292[(2)] = inst_13210);
(statearr_13246_13292[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (21)))
{var inst_13230 = (state_13237[(2)]);var state_13237__$1 = (function (){var statearr_13247 = state_13237;(statearr_13247[(9)] = inst_13230);
return statearr_13247;
})();var statearr_13248_13293 = state_13237__$1;(statearr_13248_13293[(2)] = null);
(statearr_13248_13293[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (13)))
{var inst_13192 = (state_13237[(10)]);var inst_13194 = cljs.core.chunked_seq_QMARK_.call(null,inst_13192);var state_13237__$1 = state_13237;if(inst_13194)
{var statearr_13249_13294 = state_13237__$1;(statearr_13249_13294[(1)] = (16));
} else
{var statearr_13250_13295 = state_13237__$1;(statearr_13250_13295[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (22)))
{var inst_13222 = (state_13237[(2)]);var state_13237__$1 = state_13237;if(cljs.core.truth_(inst_13222))
{var statearr_13251_13296 = state_13237__$1;(statearr_13251_13296[(1)] = (23));
} else
{var statearr_13252_13297 = state_13237__$1;(statearr_13252_13297[(1)] = (24));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (6)))
{var inst_13216 = (state_13237[(7)]);var inst_13218 = (state_13237[(11)]);var inst_13168 = (state_13237[(8)]);var inst_13216__$1 = topic_fn.call(null,inst_13168);var inst_13217 = cljs.core.deref.call(null,mults);var inst_13218__$1 = cljs.core.get.call(null,inst_13217,inst_13216__$1);var state_13237__$1 = (function (){var statearr_13253 = state_13237;(statearr_13253[(7)] = inst_13216__$1);
(statearr_13253[(11)] = inst_13218__$1);
return statearr_13253;
})();if(cljs.core.truth_(inst_13218__$1))
{var statearr_13254_13298 = state_13237__$1;(statearr_13254_13298[(1)] = (19));
} else
{var statearr_13255_13299 = state_13237__$1;(statearr_13255_13299[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (25)))
{var inst_13227 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13256_13300 = state_13237__$1;(statearr_13256_13300[(2)] = inst_13227);
(statearr_13256_13300[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (17)))
{var inst_13192 = (state_13237[(10)]);var inst_13201 = cljs.core.first.call(null,inst_13192);var inst_13202 = cljs.core.async.muxch_STAR_.call(null,inst_13201);var inst_13203 = cljs.core.async.close_BANG_.call(null,inst_13202);var inst_13204 = cljs.core.next.call(null,inst_13192);var inst_13178 = inst_13204;var inst_13179 = null;var inst_13180 = (0);var inst_13181 = (0);var state_13237__$1 = (function (){var statearr_13257 = state_13237;(statearr_13257[(12)] = inst_13179);
(statearr_13257[(13)] = inst_13180);
(statearr_13257[(14)] = inst_13181);
(statearr_13257[(15)] = inst_13203);
(statearr_13257[(16)] = inst_13178);
return statearr_13257;
})();var statearr_13258_13301 = state_13237__$1;(statearr_13258_13301[(2)] = null);
(statearr_13258_13301[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (3)))
{var inst_13235 = (state_13237[(2)]);var state_13237__$1 = state_13237;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13237__$1,inst_13235);
} else
{if((state_val_13238 === (12)))
{var inst_13212 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13259_13302 = state_13237__$1;(statearr_13259_13302[(2)] = inst_13212);
(statearr_13259_13302[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (2)))
{var state_13237__$1 = state_13237;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13237__$1,(4),ch);
} else
{if((state_val_13238 === (23)))
{var state_13237__$1 = state_13237;var statearr_13260_13303 = state_13237__$1;(statearr_13260_13303[(2)] = null);
(statearr_13260_13303[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (19)))
{var inst_13218 = (state_13237[(11)]);var inst_13168 = (state_13237[(8)]);var inst_13220 = cljs.core.async.muxch_STAR_.call(null,inst_13218);var state_13237__$1 = state_13237;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13237__$1,(22),inst_13220,inst_13168);
} else
{if((state_val_13238 === (11)))
{var inst_13192 = (state_13237[(10)]);var inst_13178 = (state_13237[(16)]);var inst_13192__$1 = cljs.core.seq.call(null,inst_13178);var state_13237__$1 = (function (){var statearr_13261 = state_13237;(statearr_13261[(10)] = inst_13192__$1);
return statearr_13261;
})();if(inst_13192__$1)
{var statearr_13262_13304 = state_13237__$1;(statearr_13262_13304[(1)] = (13));
} else
{var statearr_13263_13305 = state_13237__$1;(statearr_13263_13305[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (9)))
{var inst_13214 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13264_13306 = state_13237__$1;(statearr_13264_13306[(2)] = inst_13214);
(statearr_13264_13306[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (5)))
{var inst_13175 = cljs.core.deref.call(null,mults);var inst_13176 = cljs.core.vals.call(null,inst_13175);var inst_13177 = cljs.core.seq.call(null,inst_13176);var inst_13178 = inst_13177;var inst_13179 = null;var inst_13180 = (0);var inst_13181 = (0);var state_13237__$1 = (function (){var statearr_13265 = state_13237;(statearr_13265[(12)] = inst_13179);
(statearr_13265[(13)] = inst_13180);
(statearr_13265[(14)] = inst_13181);
(statearr_13265[(16)] = inst_13178);
return statearr_13265;
})();var statearr_13266_13307 = state_13237__$1;(statearr_13266_13307[(2)] = null);
(statearr_13266_13307[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (14)))
{var state_13237__$1 = state_13237;var statearr_13270_13308 = state_13237__$1;(statearr_13270_13308[(2)] = null);
(statearr_13270_13308[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (16)))
{var inst_13192 = (state_13237[(10)]);var inst_13196 = cljs.core.chunk_first.call(null,inst_13192);var inst_13197 = cljs.core.chunk_rest.call(null,inst_13192);var inst_13198 = cljs.core.count.call(null,inst_13196);var inst_13178 = inst_13197;var inst_13179 = inst_13196;var inst_13180 = inst_13198;var inst_13181 = (0);var state_13237__$1 = (function (){var statearr_13271 = state_13237;(statearr_13271[(12)] = inst_13179);
(statearr_13271[(13)] = inst_13180);
(statearr_13271[(14)] = inst_13181);
(statearr_13271[(16)] = inst_13178);
return statearr_13271;
})();var statearr_13272_13309 = state_13237__$1;(statearr_13272_13309[(2)] = null);
(statearr_13272_13309[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (10)))
{var inst_13179 = (state_13237[(12)]);var inst_13180 = (state_13237[(13)]);var inst_13181 = (state_13237[(14)]);var inst_13178 = (state_13237[(16)]);var inst_13186 = cljs.core._nth.call(null,inst_13179,inst_13181);var inst_13187 = cljs.core.async.muxch_STAR_.call(null,inst_13186);var inst_13188 = cljs.core.async.close_BANG_.call(null,inst_13187);var inst_13189 = (inst_13181 + (1));var tmp13267 = inst_13179;var tmp13268 = inst_13180;var tmp13269 = inst_13178;var inst_13178__$1 = tmp13269;var inst_13179__$1 = tmp13267;var inst_13180__$1 = tmp13268;var inst_13181__$1 = inst_13189;var state_13237__$1 = (function (){var statearr_13273 = state_13237;(statearr_13273[(12)] = inst_13179__$1);
(statearr_13273[(13)] = inst_13180__$1);
(statearr_13273[(17)] = inst_13188);
(statearr_13273[(14)] = inst_13181__$1);
(statearr_13273[(16)] = inst_13178__$1);
return statearr_13273;
})();var statearr_13274_13310 = state_13237__$1;(statearr_13274_13310[(2)] = null);
(statearr_13274_13310[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (18)))
{var inst_13207 = (state_13237[(2)]);var state_13237__$1 = state_13237;var statearr_13275_13311 = state_13237__$1;(statearr_13275_13311[(2)] = inst_13207);
(statearr_13275_13311[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13238 === (8)))
{var inst_13180 = (state_13237[(13)]);var inst_13181 = (state_13237[(14)]);var inst_13183 = (inst_13181 < inst_13180);var inst_13184 = inst_13183;var state_13237__$1 = state_13237;if(cljs.core.truth_(inst_13184))
{var statearr_13276_13312 = state_13237__$1;(statearr_13276_13312[(1)] = (10));
} else
{var statearr_13277_13313 = state_13237__$1;(statearr_13277_13313[(1)] = (11));
}
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__6367__auto___13285,mults,ensure_mult,p))
;return ((function (switch__6352__auto__,c__6367__auto___13285,mults,ensure_mult,p){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13281 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13281[(0)] = state_machine__6353__auto__);
(statearr_13281[(1)] = (1));
return statearr_13281;
});
var state_machine__6353__auto____1 = (function (state_13237){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13237);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13282){if((e13282 instanceof Object))
{var ex__6356__auto__ = e13282;var statearr_13283_13314 = state_13237;(statearr_13283_13314[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13237);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13282;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13315 = state_13237;
state_13237 = G__13315;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13237){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13237);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13285,mults,ensure_mult,p))
})();var state__6369__auto__ = (function (){var statearr_13284 = f__6368__auto__.call(null);(statearr_13284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13285);
return statearr_13284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13285,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__6367__auto___13452 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_13422){var state_val_13423 = (state_13422[(1)]);if((state_val_13423 === (7)))
{var state_13422__$1 = state_13422;var statearr_13424_13453 = state_13422__$1;(statearr_13424_13453[(2)] = null);
(statearr_13424_13453[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (1)))
{var state_13422__$1 = state_13422;var statearr_13425_13454 = state_13422__$1;(statearr_13425_13454[(2)] = null);
(statearr_13425_13454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (4)))
{var inst_13386 = (state_13422[(7)]);var inst_13388 = (inst_13386 < cnt);var state_13422__$1 = state_13422;if(cljs.core.truth_(inst_13388))
{var statearr_13426_13455 = state_13422__$1;(statearr_13426_13455[(1)] = (6));
} else
{var statearr_13427_13456 = state_13422__$1;(statearr_13427_13456[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (15)))
{var inst_13418 = (state_13422[(2)]);var state_13422__$1 = state_13422;var statearr_13428_13457 = state_13422__$1;(statearr_13428_13457[(2)] = inst_13418);
(statearr_13428_13457[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (13)))
{var inst_13411 = cljs.core.async.close_BANG_.call(null,out);var state_13422__$1 = state_13422;var statearr_13429_13458 = state_13422__$1;(statearr_13429_13458[(2)] = inst_13411);
(statearr_13429_13458[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (6)))
{var state_13422__$1 = state_13422;var statearr_13430_13459 = state_13422__$1;(statearr_13430_13459[(2)] = null);
(statearr_13430_13459[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (3)))
{var inst_13420 = (state_13422[(2)]);var state_13422__$1 = state_13422;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13422__$1,inst_13420);
} else
{if((state_val_13423 === (12)))
{var inst_13408 = (state_13422[(8)]);var inst_13408__$1 = (state_13422[(2)]);var inst_13409 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13408__$1);var state_13422__$1 = (function (){var statearr_13431 = state_13422;(statearr_13431[(8)] = inst_13408__$1);
return statearr_13431;
})();if(cljs.core.truth_(inst_13409))
{var statearr_13432_13460 = state_13422__$1;(statearr_13432_13460[(1)] = (13));
} else
{var statearr_13433_13461 = state_13422__$1;(statearr_13433_13461[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (2)))
{var inst_13385 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13386 = (0);var state_13422__$1 = (function (){var statearr_13434 = state_13422;(statearr_13434[(9)] = inst_13385);
(statearr_13434[(7)] = inst_13386);
return statearr_13434;
})();var statearr_13435_13462 = state_13422__$1;(statearr_13435_13462[(2)] = null);
(statearr_13435_13462[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (11)))
{var inst_13386 = (state_13422[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13422,(10),Object,null,(9));var inst_13395 = chs__$1.call(null,inst_13386);var inst_13396 = done.call(null,inst_13386);var inst_13397 = cljs.core.async.take_BANG_.call(null,inst_13395,inst_13396);var state_13422__$1 = state_13422;var statearr_13436_13463 = state_13422__$1;(statearr_13436_13463[(2)] = inst_13397);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13422__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (9)))
{var inst_13386 = (state_13422[(7)]);var inst_13399 = (state_13422[(2)]);var inst_13400 = (inst_13386 + (1));var inst_13386__$1 = inst_13400;var state_13422__$1 = (function (){var statearr_13437 = state_13422;(statearr_13437[(10)] = inst_13399);
(statearr_13437[(7)] = inst_13386__$1);
return statearr_13437;
})();var statearr_13438_13464 = state_13422__$1;(statearr_13438_13464[(2)] = null);
(statearr_13438_13464[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (5)))
{var inst_13406 = (state_13422[(2)]);var state_13422__$1 = (function (){var statearr_13439 = state_13422;(statearr_13439[(11)] = inst_13406);
return statearr_13439;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13422__$1,(12),dchan);
} else
{if((state_val_13423 === (14)))
{var inst_13408 = (state_13422[(8)]);var inst_13413 = cljs.core.apply.call(null,f,inst_13408);var state_13422__$1 = state_13422;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13422__$1,(16),out,inst_13413);
} else
{if((state_val_13423 === (16)))
{var inst_13415 = (state_13422[(2)]);var state_13422__$1 = (function (){var statearr_13440 = state_13422;(statearr_13440[(12)] = inst_13415);
return statearr_13440;
})();var statearr_13441_13465 = state_13422__$1;(statearr_13441_13465[(2)] = null);
(statearr_13441_13465[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (10)))
{var inst_13390 = (state_13422[(2)]);var inst_13391 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13422__$1 = (function (){var statearr_13442 = state_13422;(statearr_13442[(13)] = inst_13390);
return statearr_13442;
})();var statearr_13443_13466 = state_13422__$1;(statearr_13443_13466[(2)] = inst_13391);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13422__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13423 === (8)))
{var inst_13404 = (state_13422[(2)]);var state_13422__$1 = state_13422;var statearr_13444_13467 = state_13422__$1;(statearr_13444_13467[(2)] = inst_13404);
(statearr_13444_13467[(1)] = (5));
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
}
}
}
}
}
}
}
}
});})(c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__6352__auto__,c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13448 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13448[(0)] = state_machine__6353__auto__);
(statearr_13448[(1)] = (1));
return statearr_13448;
});
var state_machine__6353__auto____1 = (function (state_13422){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13422);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13449){if((e13449 instanceof Object))
{var ex__6356__auto__ = e13449;var statearr_13450_13468 = state_13422;(statearr_13450_13468[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13422);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13449;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13469 = state_13422;
state_13422 = G__13469;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13422){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13422);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__6369__auto__ = (function (){var statearr_13451 = f__6368__auto__.call(null);(statearr_13451[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13452);
return statearr_13451;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13452,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13577 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13577,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13577,out){
return (function (state_13553){var state_val_13554 = (state_13553[(1)]);if((state_val_13554 === (7)))
{var inst_13532 = (state_13553[(7)]);var inst_13533 = (state_13553[(8)]);var inst_13532__$1 = (state_13553[(2)]);var inst_13533__$1 = cljs.core.nth.call(null,inst_13532__$1,(0),null);var inst_13534 = cljs.core.nth.call(null,inst_13532__$1,(1),null);var inst_13535 = (inst_13533__$1 == null);var state_13553__$1 = (function (){var statearr_13555 = state_13553;(statearr_13555[(7)] = inst_13532__$1);
(statearr_13555[(9)] = inst_13534);
(statearr_13555[(8)] = inst_13533__$1);
return statearr_13555;
})();if(cljs.core.truth_(inst_13535))
{var statearr_13556_13578 = state_13553__$1;(statearr_13556_13578[(1)] = (8));
} else
{var statearr_13557_13579 = state_13553__$1;(statearr_13557_13579[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (1)))
{var inst_13524 = cljs.core.vec.call(null,chs);var inst_13525 = inst_13524;var state_13553__$1 = (function (){var statearr_13558 = state_13553;(statearr_13558[(10)] = inst_13525);
return statearr_13558;
})();var statearr_13559_13580 = state_13553__$1;(statearr_13559_13580[(2)] = null);
(statearr_13559_13580[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (4)))
{var inst_13525 = (state_13553[(10)]);var state_13553__$1 = state_13553;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13553__$1,(7),inst_13525);
} else
{if((state_val_13554 === (6)))
{var inst_13549 = (state_13553[(2)]);var state_13553__$1 = state_13553;var statearr_13560_13581 = state_13553__$1;(statearr_13560_13581[(2)] = inst_13549);
(statearr_13560_13581[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (3)))
{var inst_13551 = (state_13553[(2)]);var state_13553__$1 = state_13553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13553__$1,inst_13551);
} else
{if((state_val_13554 === (2)))
{var inst_13525 = (state_13553[(10)]);var inst_13527 = cljs.core.count.call(null,inst_13525);var inst_13528 = (inst_13527 > (0));var state_13553__$1 = state_13553;if(cljs.core.truth_(inst_13528))
{var statearr_13562_13582 = state_13553__$1;(statearr_13562_13582[(1)] = (4));
} else
{var statearr_13563_13583 = state_13553__$1;(statearr_13563_13583[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (11)))
{var inst_13525 = (state_13553[(10)]);var inst_13542 = (state_13553[(2)]);var tmp13561 = inst_13525;var inst_13525__$1 = tmp13561;var state_13553__$1 = (function (){var statearr_13564 = state_13553;(statearr_13564[(11)] = inst_13542);
(statearr_13564[(10)] = inst_13525__$1);
return statearr_13564;
})();var statearr_13565_13584 = state_13553__$1;(statearr_13565_13584[(2)] = null);
(statearr_13565_13584[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (9)))
{var inst_13533 = (state_13553[(8)]);var state_13553__$1 = state_13553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13553__$1,(11),out,inst_13533);
} else
{if((state_val_13554 === (5)))
{var inst_13547 = cljs.core.async.close_BANG_.call(null,out);var state_13553__$1 = state_13553;var statearr_13566_13585 = state_13553__$1;(statearr_13566_13585[(2)] = inst_13547);
(statearr_13566_13585[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (10)))
{var inst_13545 = (state_13553[(2)]);var state_13553__$1 = state_13553;var statearr_13567_13586 = state_13553__$1;(statearr_13567_13586[(2)] = inst_13545);
(statearr_13567_13586[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13554 === (8)))
{var inst_13532 = (state_13553[(7)]);var inst_13534 = (state_13553[(9)]);var inst_13525 = (state_13553[(10)]);var inst_13533 = (state_13553[(8)]);var inst_13537 = (function (){var c = inst_13534;var v = inst_13533;var vec__13530 = inst_13532;var cs = inst_13525;return ((function (c,v,vec__13530,cs,inst_13532,inst_13534,inst_13525,inst_13533,state_val_13554,c__6367__auto___13577,out){
return (function (p1__13470_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13470_SHARP_);
});
;})(c,v,vec__13530,cs,inst_13532,inst_13534,inst_13525,inst_13533,state_val_13554,c__6367__auto___13577,out))
})();var inst_13538 = cljs.core.filterv.call(null,inst_13537,inst_13525);var inst_13525__$1 = inst_13538;var state_13553__$1 = (function (){var statearr_13568 = state_13553;(statearr_13568[(10)] = inst_13525__$1);
return statearr_13568;
})();var statearr_13569_13587 = state_13553__$1;(statearr_13569_13587[(2)] = null);
(statearr_13569_13587[(1)] = (2));
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
}
}
}
});})(c__6367__auto___13577,out))
;return ((function (switch__6352__auto__,c__6367__auto___13577,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13573 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13573[(0)] = state_machine__6353__auto__);
(statearr_13573[(1)] = (1));
return statearr_13573;
});
var state_machine__6353__auto____1 = (function (state_13553){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13553);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13574){if((e13574 instanceof Object))
{var ex__6356__auto__ = e13574;var statearr_13575_13588 = state_13553;(statearr_13575_13588[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13553);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13574;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13589 = state_13553;
state_13553 = G__13589;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13553){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13577,out))
})();var state__6369__auto__ = (function (){var statearr_13576 = f__6368__auto__.call(null);(statearr_13576[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13577);
return statearr_13576;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13577,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13682 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13682,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13682,out){
return (function (state_13659){var state_val_13660 = (state_13659[(1)]);if((state_val_13660 === (7)))
{var inst_13641 = (state_13659[(7)]);var inst_13641__$1 = (state_13659[(2)]);var inst_13642 = (inst_13641__$1 == null);var inst_13643 = cljs.core.not.call(null,inst_13642);var state_13659__$1 = (function (){var statearr_13661 = state_13659;(statearr_13661[(7)] = inst_13641__$1);
return statearr_13661;
})();if(inst_13643)
{var statearr_13662_13683 = state_13659__$1;(statearr_13662_13683[(1)] = (8));
} else
{var statearr_13663_13684 = state_13659__$1;(statearr_13663_13684[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (1)))
{var inst_13636 = (0);var state_13659__$1 = (function (){var statearr_13664 = state_13659;(statearr_13664[(8)] = inst_13636);
return statearr_13664;
})();var statearr_13665_13685 = state_13659__$1;(statearr_13665_13685[(2)] = null);
(statearr_13665_13685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (4)))
{var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13659__$1,(7),ch);
} else
{if((state_val_13660 === (6)))
{var inst_13654 = (state_13659[(2)]);var state_13659__$1 = state_13659;var statearr_13666_13686 = state_13659__$1;(statearr_13666_13686[(2)] = inst_13654);
(statearr_13666_13686[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (3)))
{var inst_13656 = (state_13659[(2)]);var inst_13657 = cljs.core.async.close_BANG_.call(null,out);var state_13659__$1 = (function (){var statearr_13667 = state_13659;(statearr_13667[(9)] = inst_13656);
return statearr_13667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13659__$1,inst_13657);
} else
{if((state_val_13660 === (2)))
{var inst_13636 = (state_13659[(8)]);var inst_13638 = (inst_13636 < n);var state_13659__$1 = state_13659;if(cljs.core.truth_(inst_13638))
{var statearr_13668_13687 = state_13659__$1;(statearr_13668_13687[(1)] = (4));
} else
{var statearr_13669_13688 = state_13659__$1;(statearr_13669_13688[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (11)))
{var inst_13636 = (state_13659[(8)]);var inst_13646 = (state_13659[(2)]);var inst_13647 = (inst_13636 + (1));var inst_13636__$1 = inst_13647;var state_13659__$1 = (function (){var statearr_13670 = state_13659;(statearr_13670[(10)] = inst_13646);
(statearr_13670[(8)] = inst_13636__$1);
return statearr_13670;
})();var statearr_13671_13689 = state_13659__$1;(statearr_13671_13689[(2)] = null);
(statearr_13671_13689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (9)))
{var state_13659__$1 = state_13659;var statearr_13672_13690 = state_13659__$1;(statearr_13672_13690[(2)] = null);
(statearr_13672_13690[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (5)))
{var state_13659__$1 = state_13659;var statearr_13673_13691 = state_13659__$1;(statearr_13673_13691[(2)] = null);
(statearr_13673_13691[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (10)))
{var inst_13651 = (state_13659[(2)]);var state_13659__$1 = state_13659;var statearr_13674_13692 = state_13659__$1;(statearr_13674_13692[(2)] = inst_13651);
(statearr_13674_13692[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13660 === (8)))
{var inst_13641 = (state_13659[(7)]);var state_13659__$1 = state_13659;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13659__$1,(11),out,inst_13641);
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
}
}
}
});})(c__6367__auto___13682,out))
;return ((function (switch__6352__auto__,c__6367__auto___13682,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13678 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13678[(0)] = state_machine__6353__auto__);
(statearr_13678[(1)] = (1));
return statearr_13678;
});
var state_machine__6353__auto____1 = (function (state_13659){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13659);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13679){if((e13679 instanceof Object))
{var ex__6356__auto__ = e13679;var statearr_13680_13693 = state_13659;(statearr_13680_13693[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13659);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13679;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13694 = state_13659;
state_13659 = G__13694;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13659){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13659);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13682,out))
})();var state__6369__auto__ = (function (){var statearr_13681 = f__6368__auto__.call(null);(statearr_13681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13682);
return statearr_13681;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13682,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13791 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13791,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13791,out){
return (function (state_13766){var state_val_13767 = (state_13766[(1)]);if((state_val_13767 === (7)))
{var inst_13761 = (state_13766[(2)]);var state_13766__$1 = state_13766;var statearr_13768_13792 = state_13766__$1;(statearr_13768_13792[(2)] = inst_13761);
(statearr_13768_13792[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (1)))
{var inst_13743 = null;var state_13766__$1 = (function (){var statearr_13769 = state_13766;(statearr_13769[(7)] = inst_13743);
return statearr_13769;
})();var statearr_13770_13793 = state_13766__$1;(statearr_13770_13793[(2)] = null);
(statearr_13770_13793[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (4)))
{var inst_13746 = (state_13766[(8)]);var inst_13746__$1 = (state_13766[(2)]);var inst_13747 = (inst_13746__$1 == null);var inst_13748 = cljs.core.not.call(null,inst_13747);var state_13766__$1 = (function (){var statearr_13771 = state_13766;(statearr_13771[(8)] = inst_13746__$1);
return statearr_13771;
})();if(inst_13748)
{var statearr_13772_13794 = state_13766__$1;(statearr_13772_13794[(1)] = (5));
} else
{var statearr_13773_13795 = state_13766__$1;(statearr_13773_13795[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (6)))
{var state_13766__$1 = state_13766;var statearr_13774_13796 = state_13766__$1;(statearr_13774_13796[(2)] = null);
(statearr_13774_13796[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (3)))
{var inst_13763 = (state_13766[(2)]);var inst_13764 = cljs.core.async.close_BANG_.call(null,out);var state_13766__$1 = (function (){var statearr_13775 = state_13766;(statearr_13775[(9)] = inst_13763);
return statearr_13775;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13766__$1,inst_13764);
} else
{if((state_val_13767 === (2)))
{var state_13766__$1 = state_13766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13766__$1,(4),ch);
} else
{if((state_val_13767 === (11)))
{var inst_13746 = (state_13766[(8)]);var inst_13755 = (state_13766[(2)]);var inst_13743 = inst_13746;var state_13766__$1 = (function (){var statearr_13776 = state_13766;(statearr_13776[(10)] = inst_13755);
(statearr_13776[(7)] = inst_13743);
return statearr_13776;
})();var statearr_13777_13797 = state_13766__$1;(statearr_13777_13797[(2)] = null);
(statearr_13777_13797[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (9)))
{var inst_13746 = (state_13766[(8)]);var state_13766__$1 = state_13766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13766__$1,(11),out,inst_13746);
} else
{if((state_val_13767 === (5)))
{var inst_13746 = (state_13766[(8)]);var inst_13743 = (state_13766[(7)]);var inst_13750 = cljs.core._EQ_.call(null,inst_13746,inst_13743);var state_13766__$1 = state_13766;if(inst_13750)
{var statearr_13779_13798 = state_13766__$1;(statearr_13779_13798[(1)] = (8));
} else
{var statearr_13780_13799 = state_13766__$1;(statearr_13780_13799[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (10)))
{var inst_13758 = (state_13766[(2)]);var state_13766__$1 = state_13766;var statearr_13781_13800 = state_13766__$1;(statearr_13781_13800[(2)] = inst_13758);
(statearr_13781_13800[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13767 === (8)))
{var inst_13743 = (state_13766[(7)]);var tmp13778 = inst_13743;var inst_13743__$1 = tmp13778;var state_13766__$1 = (function (){var statearr_13782 = state_13766;(statearr_13782[(7)] = inst_13743__$1);
return statearr_13782;
})();var statearr_13783_13801 = state_13766__$1;(statearr_13783_13801[(2)] = null);
(statearr_13783_13801[(1)] = (2));
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
}
}
}
});})(c__6367__auto___13791,out))
;return ((function (switch__6352__auto__,c__6367__auto___13791,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13787 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13787[(0)] = state_machine__6353__auto__);
(statearr_13787[(1)] = (1));
return statearr_13787;
});
var state_machine__6353__auto____1 = (function (state_13766){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13766);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13788){if((e13788 instanceof Object))
{var ex__6356__auto__ = e13788;var statearr_13789_13802 = state_13766;(statearr_13789_13802[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13788;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13803 = state_13766;
state_13766 = G__13803;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13766){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13791,out))
})();var state__6369__auto__ = (function (){var statearr_13790 = f__6368__auto__.call(null);(statearr_13790[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13791);
return statearr_13790;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13791,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___13938 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___13938,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___13938,out){
return (function (state_13908){var state_val_13909 = (state_13908[(1)]);if((state_val_13909 === (7)))
{var inst_13904 = (state_13908[(2)]);var state_13908__$1 = state_13908;var statearr_13910_13939 = state_13908__$1;(statearr_13910_13939[(2)] = inst_13904);
(statearr_13910_13939[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (1)))
{var inst_13871 = (new Array(n));var inst_13872 = inst_13871;var inst_13873 = (0);var state_13908__$1 = (function (){var statearr_13911 = state_13908;(statearr_13911[(7)] = inst_13872);
(statearr_13911[(8)] = inst_13873);
return statearr_13911;
})();var statearr_13912_13940 = state_13908__$1;(statearr_13912_13940[(2)] = null);
(statearr_13912_13940[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (4)))
{var inst_13876 = (state_13908[(9)]);var inst_13876__$1 = (state_13908[(2)]);var inst_13877 = (inst_13876__$1 == null);var inst_13878 = cljs.core.not.call(null,inst_13877);var state_13908__$1 = (function (){var statearr_13913 = state_13908;(statearr_13913[(9)] = inst_13876__$1);
return statearr_13913;
})();if(inst_13878)
{var statearr_13914_13941 = state_13908__$1;(statearr_13914_13941[(1)] = (5));
} else
{var statearr_13915_13942 = state_13908__$1;(statearr_13915_13942[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (15)))
{var inst_13898 = (state_13908[(2)]);var state_13908__$1 = state_13908;var statearr_13916_13943 = state_13908__$1;(statearr_13916_13943[(2)] = inst_13898);
(statearr_13916_13943[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (13)))
{var state_13908__$1 = state_13908;var statearr_13917_13944 = state_13908__$1;(statearr_13917_13944[(2)] = null);
(statearr_13917_13944[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (6)))
{var inst_13873 = (state_13908[(8)]);var inst_13894 = (inst_13873 > (0));var state_13908__$1 = state_13908;if(cljs.core.truth_(inst_13894))
{var statearr_13918_13945 = state_13908__$1;(statearr_13918_13945[(1)] = (12));
} else
{var statearr_13919_13946 = state_13908__$1;(statearr_13919_13946[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (3)))
{var inst_13906 = (state_13908[(2)]);var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13908__$1,inst_13906);
} else
{if((state_val_13909 === (12)))
{var inst_13872 = (state_13908[(7)]);var inst_13896 = cljs.core.vec.call(null,inst_13872);var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13908__$1,(15),out,inst_13896);
} else
{if((state_val_13909 === (2)))
{var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13908__$1,(4),ch);
} else
{if((state_val_13909 === (11)))
{var inst_13888 = (state_13908[(2)]);var inst_13889 = (new Array(n));var inst_13872 = inst_13889;var inst_13873 = (0);var state_13908__$1 = (function (){var statearr_13920 = state_13908;(statearr_13920[(10)] = inst_13888);
(statearr_13920[(7)] = inst_13872);
(statearr_13920[(8)] = inst_13873);
return statearr_13920;
})();var statearr_13921_13947 = state_13908__$1;(statearr_13921_13947[(2)] = null);
(statearr_13921_13947[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (9)))
{var inst_13872 = (state_13908[(7)]);var inst_13886 = cljs.core.vec.call(null,inst_13872);var state_13908__$1 = state_13908;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13908__$1,(11),out,inst_13886);
} else
{if((state_val_13909 === (5)))
{var inst_13872 = (state_13908[(7)]);var inst_13881 = (state_13908[(11)]);var inst_13876 = (state_13908[(9)]);var inst_13873 = (state_13908[(8)]);var inst_13880 = (inst_13872[inst_13873] = inst_13876);var inst_13881__$1 = (inst_13873 + (1));var inst_13882 = (inst_13881__$1 < n);var state_13908__$1 = (function (){var statearr_13922 = state_13908;(statearr_13922[(12)] = inst_13880);
(statearr_13922[(11)] = inst_13881__$1);
return statearr_13922;
})();if(cljs.core.truth_(inst_13882))
{var statearr_13923_13948 = state_13908__$1;(statearr_13923_13948[(1)] = (8));
} else
{var statearr_13924_13949 = state_13908__$1;(statearr_13924_13949[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (14)))
{var inst_13901 = (state_13908[(2)]);var inst_13902 = cljs.core.async.close_BANG_.call(null,out);var state_13908__$1 = (function (){var statearr_13926 = state_13908;(statearr_13926[(13)] = inst_13901);
return statearr_13926;
})();var statearr_13927_13950 = state_13908__$1;(statearr_13927_13950[(2)] = inst_13902);
(statearr_13927_13950[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (10)))
{var inst_13892 = (state_13908[(2)]);var state_13908__$1 = state_13908;var statearr_13928_13951 = state_13908__$1;(statearr_13928_13951[(2)] = inst_13892);
(statearr_13928_13951[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_13909 === (8)))
{var inst_13872 = (state_13908[(7)]);var inst_13881 = (state_13908[(11)]);var tmp13925 = inst_13872;var inst_13872__$1 = tmp13925;var inst_13873 = inst_13881;var state_13908__$1 = (function (){var statearr_13929 = state_13908;(statearr_13929[(7)] = inst_13872__$1);
(statearr_13929[(8)] = inst_13873);
return statearr_13929;
})();var statearr_13930_13952 = state_13908__$1;(statearr_13930_13952[(2)] = null);
(statearr_13930_13952[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6367__auto___13938,out))
;return ((function (switch__6352__auto__,c__6367__auto___13938,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_13934 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13934[(0)] = state_machine__6353__auto__);
(statearr_13934[(1)] = (1));
return statearr_13934;
});
var state_machine__6353__auto____1 = (function (state_13908){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_13908);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e13935){if((e13935 instanceof Object))
{var ex__6356__auto__ = e13935;var statearr_13936_13953 = state_13908;(statearr_13936_13953[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13908);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e13935;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__13954 = state_13908;
state_13908 = G__13954;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_13908){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_13908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___13938,out))
})();var state__6369__auto__ = (function (){var statearr_13937 = f__6368__auto__.call(null);(statearr_13937[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___13938);
return statearr_13937;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___13938,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6367__auto___14097 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__6367__auto___14097,out){
return (function (){var f__6368__auto__ = (function (){var switch__6352__auto__ = ((function (c__6367__auto___14097,out){
return (function (state_14067){var state_val_14068 = (state_14067[(1)]);if((state_val_14068 === (7)))
{var inst_14063 = (state_14067[(2)]);var state_14067__$1 = state_14067;var statearr_14069_14098 = state_14067__$1;(statearr_14069_14098[(2)] = inst_14063);
(statearr_14069_14098[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (1)))
{var inst_14026 = [];var inst_14027 = inst_14026;var inst_14028 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_14067__$1 = (function (){var statearr_14070 = state_14067;(statearr_14070[(7)] = inst_14027);
(statearr_14070[(8)] = inst_14028);
return statearr_14070;
})();var statearr_14071_14099 = state_14067__$1;(statearr_14071_14099[(2)] = null);
(statearr_14071_14099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (4)))
{var inst_14031 = (state_14067[(9)]);var inst_14031__$1 = (state_14067[(2)]);var inst_14032 = (inst_14031__$1 == null);var inst_14033 = cljs.core.not.call(null,inst_14032);var state_14067__$1 = (function (){var statearr_14072 = state_14067;(statearr_14072[(9)] = inst_14031__$1);
return statearr_14072;
})();if(inst_14033)
{var statearr_14073_14100 = state_14067__$1;(statearr_14073_14100[(1)] = (5));
} else
{var statearr_14074_14101 = state_14067__$1;(statearr_14074_14101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (15)))
{var inst_14057 = (state_14067[(2)]);var state_14067__$1 = state_14067;var statearr_14075_14102 = state_14067__$1;(statearr_14075_14102[(2)] = inst_14057);
(statearr_14075_14102[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (13)))
{var state_14067__$1 = state_14067;var statearr_14076_14103 = state_14067__$1;(statearr_14076_14103[(2)] = null);
(statearr_14076_14103[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (6)))
{var inst_14027 = (state_14067[(7)]);var inst_14052 = inst_14027.length;var inst_14053 = (inst_14052 > (0));var state_14067__$1 = state_14067;if(cljs.core.truth_(inst_14053))
{var statearr_14077_14104 = state_14067__$1;(statearr_14077_14104[(1)] = (12));
} else
{var statearr_14078_14105 = state_14067__$1;(statearr_14078_14105[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (3)))
{var inst_14065 = (state_14067[(2)]);var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14067__$1,inst_14065);
} else
{if((state_val_14068 === (12)))
{var inst_14027 = (state_14067[(7)]);var inst_14055 = cljs.core.vec.call(null,inst_14027);var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14067__$1,(15),out,inst_14055);
} else
{if((state_val_14068 === (2)))
{var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14067__$1,(4),ch);
} else
{if((state_val_14068 === (11)))
{var inst_14035 = (state_14067[(10)]);var inst_14031 = (state_14067[(9)]);var inst_14045 = (state_14067[(2)]);var inst_14046 = [];var inst_14047 = inst_14046.push(inst_14031);var inst_14027 = inst_14046;var inst_14028 = inst_14035;var state_14067__$1 = (function (){var statearr_14079 = state_14067;(statearr_14079[(11)] = inst_14045);
(statearr_14079[(7)] = inst_14027);
(statearr_14079[(8)] = inst_14028);
(statearr_14079[(12)] = inst_14047);
return statearr_14079;
})();var statearr_14080_14106 = state_14067__$1;(statearr_14080_14106[(2)] = null);
(statearr_14080_14106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (9)))
{var inst_14027 = (state_14067[(7)]);var inst_14043 = cljs.core.vec.call(null,inst_14027);var state_14067__$1 = state_14067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14067__$1,(11),out,inst_14043);
} else
{if((state_val_14068 === (5)))
{var inst_14035 = (state_14067[(10)]);var inst_14028 = (state_14067[(8)]);var inst_14031 = (state_14067[(9)]);var inst_14035__$1 = f.call(null,inst_14031);var inst_14036 = cljs.core._EQ_.call(null,inst_14035__$1,inst_14028);var inst_14037 = cljs.core.keyword_identical_QMARK_.call(null,inst_14028,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_14038 = (inst_14036) || (inst_14037);var state_14067__$1 = (function (){var statearr_14081 = state_14067;(statearr_14081[(10)] = inst_14035__$1);
return statearr_14081;
})();if(cljs.core.truth_(inst_14038))
{var statearr_14082_14107 = state_14067__$1;(statearr_14082_14107[(1)] = (8));
} else
{var statearr_14083_14108 = state_14067__$1;(statearr_14083_14108[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (14)))
{var inst_14060 = (state_14067[(2)]);var inst_14061 = cljs.core.async.close_BANG_.call(null,out);var state_14067__$1 = (function (){var statearr_14085 = state_14067;(statearr_14085[(13)] = inst_14060);
return statearr_14085;
})();var statearr_14086_14109 = state_14067__$1;(statearr_14086_14109[(2)] = inst_14061);
(statearr_14086_14109[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (10)))
{var inst_14050 = (state_14067[(2)]);var state_14067__$1 = state_14067;var statearr_14087_14110 = state_14067__$1;(statearr_14087_14110[(2)] = inst_14050);
(statearr_14087_14110[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14068 === (8)))
{var inst_14027 = (state_14067[(7)]);var inst_14035 = (state_14067[(10)]);var inst_14031 = (state_14067[(9)]);var inst_14040 = inst_14027.push(inst_14031);var tmp14084 = inst_14027;var inst_14027__$1 = tmp14084;var inst_14028 = inst_14035;var state_14067__$1 = (function (){var statearr_14088 = state_14067;(statearr_14088[(7)] = inst_14027__$1);
(statearr_14088[(8)] = inst_14028);
(statearr_14088[(14)] = inst_14040);
return statearr_14088;
})();var statearr_14089_14111 = state_14067__$1;(statearr_14089_14111[(2)] = null);
(statearr_14089_14111[(1)] = (2));
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
}
}
}
}
}
}
}
});})(c__6367__auto___14097,out))
;return ((function (switch__6352__auto__,c__6367__auto___14097,out){
return (function() {
var state_machine__6353__auto__ = null;
var state_machine__6353__auto____0 = (function (){var statearr_14093 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14093[(0)] = state_machine__6353__auto__);
(statearr_14093[(1)] = (1));
return statearr_14093;
});
var state_machine__6353__auto____1 = (function (state_14067){while(true){
var ret_value__6354__auto__ = (function (){try{while(true){
var result__6355__auto__ = switch__6352__auto__.call(null,state_14067);if(cljs.core.keyword_identical_QMARK_.call(null,result__6355__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__6355__auto__;
}
break;
}
}catch (e14094){if((e14094 instanceof Object))
{var ex__6356__auto__ = e14094;var statearr_14095_14112 = state_14067;(statearr_14095_14112[(5)] = ex__6356__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14067);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6354__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14113 = state_14067;
state_14067 = G__14113;
continue;
}
} else
{return ret_value__6354__auto__;
}
break;
}
});
state_machine__6353__auto__ = function(state_14067){
switch(arguments.length){
case 0:
return state_machine__6353__auto____0.call(this);
case 1:
return state_machine__6353__auto____1.call(this,state_14067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6353__auto____0;
state_machine__6353__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6353__auto____1;
return state_machine__6353__auto__;
})()
;})(switch__6352__auto__,c__6367__auto___14097,out))
})();var state__6369__auto__ = (function (){var statearr_14096 = f__6368__auto__.call(null);(statearr_14096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6367__auto___14097);
return statearr_14096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6369__auto__);
});})(c__6367__auto___14097,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map