!function (t) {
  function e(r) {
    if (n[r])return n[r].exports;
    var o = n[r] = {exports: {}, id: r, loaded: !1};
    return t[r].call(o.exports, o, o.exports, e), o.loaded = !0, o.exports
  }

  var n = {};
  return e.m = t, e.c = n, e.p = "", e(0)
}([function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : {"default": t}
  }

  function o() {
    return {
      DOM: u["default"].Observable.interval(1e3).map(function (t) {
        return h["default"].h1("" + t + " seconds elapsed")
      })
    }
  }

  var i = n(2), u = r(i), s = n(21), c = r(s), a = n(22), h = r(a), l = {DOM: h["default"].makeDOMDriver("#app")};
  c["default"].run(o, l)
}, function (t, e) {
  function n(t) {
    return t && "Widget" === t.type
  }

  t.exports = n
}, function (t, e, n) {
  var r;
  (function (t, o, i) {
    (function (u) {
      function s(t) {
        return t && t.Object === Object ? t : null
      }

      function c(t) {
        for (var e = [], n = 0, r = t.length; r > n; n++)e.push(t[n]);
        return e
      }

      function a(t) {
        return function () {
          try {
            return t.apply(this, arguments)
          } catch (e) {
            return re.e = e, re
          }
        }
      }

      function h(t) {
        throw t
      }

      function l(t, e) {
        if (ie && e.stack && "object" == typeof t && null !== t && t.stack && -1 === t.stack.indexOf(ae)) {
          for (var n = [], r = e; r; r = r.source)r.stack && n.unshift(r.stack);
          n.unshift(t.stack);
          var o = n.join("\n" + ae + "\n");
          t.stack = p(o)
        }
      }

      function p(t) {
        for (var e = t.split("\n"), n = [], r = 0, o = e.length; o > r; r++) {
          var i = e[r];
          f(i) || d(i) || !i || n.push(i)
        }
        return n.join("\n")
      }

      function f(t) {
        var e = b(t);
        if (!e)return !1;
        var n = e[0], r = e[1];
        return n === se && r >= ce && ju >= r
      }

      function d(t) {
        return -1 !== t.indexOf("(module.js:") || -1 !== t.indexOf("(node.js:")
      }

      function v() {
        if (ie)try {
          throw new Error
        } catch (t) {
          var e = t.stack.split("\n"), n = e[0].indexOf("@") > 0 ? e[1] : e[2], r = b(n);
          if (!r)return;
          return se = r[0], r[1]
        }
      }

      function b(t) {
        var e = /at .+ \((.+):(\d+):(?:\d+)\)$/.exec(t);
        if (e)return [e[1], Number(e[2])];
        var n = /at ([^ ]+):(\d+):(?:\d+)$/.exec(t);
        if (n)return [n[1], Number(n[2])];
        var r = /.*@(.+):(\d+)$/.exec(t);
        return r ? [r[1], Number(r[2])] : void 0
      }

      function _(t, e, n, r, o, i) {
        var s = Je(t), c = s.length, a = Je(e), h = a.length;
        if (c !== h && !r)return !1;
        for (var l, p = c; p--;)if (l = s[p], !(r ? l in e : Ke.call(e, l)))return !1;
        for (var f = r; ++p < c;) {
          l = s[p];
          var d, v = t[l], b = e[l];
          if (!(d === u ? n(v, b, r, o, i) : d))return !1;
          f || (f = "constructor" === l)
        }
        if (!f) {
          var _ = t.constructor, m = e.constructor;
          if (_ !== m && "constructor" in t && "constructor" in e && !("function" == typeof _ && _ instanceof _ && "function" == typeof m && m instanceof m))return !1
        }
        return !0
      }

      function m(t, e, n) {
        switch (n) {
          case Ce:
          case De:
            return +t === +e;
          case Fe:
            return t.name === e.name && t.message === e.message;
          case Ne:
            return t !== +t ? e !== +e : t === +e;
          case ke:
          case Te:
            return t === e + ""
        }
        return !1
      }

      function y(t) {
        return !!t && "object" == typeof t
      }

      function E(t) {
        return "number" == typeof t && t > -1 && t % 1 === 0 && $e >= t
      }

      function A(t) {
        return y(t) && E(t.length) && !!He[Ge.call(t)]
      }

      function g(t, e) {
        for (var n = -1, r = t.length; ++n < r;)if (e(t[n], n, t))return !0;
        return !1
      }

      function w(t, e, n, r, o, i) {
        var s = -1, c = t.length, a = e.length;
        if (c !== a && !(r && a > c))return !1;
        for (; ++s < c;) {
          var h, l = t[s], p = e[s];
          if (h !== u) {
            if (h)continue;
            return !1
          }
          if (r) {
            if (!g(e, function (t) {
                return l === t || n(l, t, r, o, i)
              }))return !1
          } else if (l !== p && !n(l, p, r, o, i))return !1
        }
        return !0
      }

      function C(t, e, n, r, o, i) {
        var u = Qe(t), s = Qe(e), c = we, a = we;
        u || (c = Ge.call(t), c === ge ? c = Oe : c !== Oe && (u = A(t))), s || (a = Ge.call(e), a === ge && (a = Oe));
        var h = c === Oe && !Ye(t), l = a === Oe && !Ye(e), p = c === a;
        if (p && !u && !h)return m(t, e, c);
        if (!r) {
          var f = h && Ke.call(t, "__wrapped__"), d = l && Ke.call(e, "__wrapped__");
          if (f || d)return n(f ? t.value() : t, d ? e.value() : e, r, o, i)
        }
        if (!p)return !1;
        o || (o = []), i || (i = []);
        for (var v = o.length; v--;)if (o[v] === t)return i[v] === e;
        o.push(t), i.push(e);
        var b = (u ? w : _)(t, e, n, r, o, i);
        return o.pop(), i.pop(), b
      }

      function D(t, e, n, r, o) {
        return t === e ? !0 : null == t || null == e || !ut(t) && !y(e) ? t !== t && e !== e : C(t, e, D, n, r, o)
      }

      function F(t, e) {
        for (var n = new Array(t), r = 0; t > r; r++)n[r] = e();
        return n
      }

      function x(t, e) {
        this.id = t, this.value = e
      }

      function B(t, e) {
        this.scheduler = t, this.disposable = e, this.isDisposed = !1
      }

      function N(t, e) {
        e.isDisposed || (e.isDisposed = !0, e.disposable.dispose())
      }

      function O(t) {
        this._s = t, this.isDisposed = !1
      }

      function k(t) {
        this._s = t
      }

      function S(t) {
        this._s = t, this._l = t.length, this._i = 0
      }

      function T(t) {
        this._a = t
      }

      function j(t) {
        this._a = t, this._l = M(t), this._i = 0
      }

      function q(t) {
        return "number" == typeof t && Kt.isFinite(t)
      }

      function R(t) {
        var e, n = t[be];
        if (!n && "string" == typeof t)return e = new k(t), e[be]();
        if (!n && t.length !== u)return e = new T(t), e[be]();
        if (!n)throw new TypeError("Object is not iterable");
        return t[be]()
      }

      function L(t) {
        var e = +t;
        return 0 === e ? e : isNaN(e) ? e : 0 > e ? -1 : 1
      }

      function M(t) {
        var e = +t.length;
        return isNaN(e) ? 0 : 0 !== e && q(e) ? (e = L(e) * Math.floor(Math.abs(e)), 0 >= e ? 0 : e > mr ? mr : e) : e
      }

      function P(t, e) {
        return gn(t) || (t = Nn), new Er(e, t)
      }

      function V(t, e) {
        this.observer = t, this.parent = e
      }

      function I(t, e) {
        return t.amb(e)
      }

      function z() {
        return !1
      }

      function W() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return e
      }

      function z() {
        return !1
      }

      function W() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return e
      }

      function z() {
        return !1
      }

      function U() {
        return []
      }

      function z() {
        return !1
      }

      function U() {
        return []
      }

      function W() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return e
      }

      function H(t) {
        return function (e) {
          return t.subscribe(e)
        }
      }

      function X(t) {
        return t.toArray()
      }

      function K(t) {
        return t.length > 0
      }

      function G(t, e, n) {
        var r = Ee(e, n, 3);
        return t.map(function (e, n) {
          var o = r(e, n, t);
          return ee(o) && (o = hr(o)), (ye(o) || me(o)) && (o = yr(o)), o
        }).concatAll()
      }

      function $(t, e, n) {
        for (var r = 0, o = t.length; o > r; r++)if (n(t[r], e))return r;
        return -1
      }

      function J(t) {
        this.comparer = t, this.set = []
      }

      function Y(t, e) {
        return function (n) {
          for (var r = n, o = 0; e > o; o++) {
            var i = r[t[o]];
            if ("undefined" == typeof i)return u;
            r = i
          }
          return r
        }
      }

      function Q(t) {
        if (0 === t.length)throw new he;
        return t[0]
      }

      function Z(t, e, n, r) {
        var o = Ee(e, n, 3);
        return new Du(function (e) {
          return t.subscribe(new pi(e, t, o, r))
        }, t)
      }

      function tt(t) {
        return t ? Yn.isObservable(t) ? t : ee(t) ? Yn.fromPromise(t) : it(t) || ot(t) ? Ai.call(this, t) : ne(t) ? rt.call(this, t) : ye(t) || me(t) ? et.call(this, t) : ut(t) ? nt.call(this, t) : t : t
      }

      function et(t) {
        return Yn.from(t).concatMap(function (t) {
          return Yn.isObservable(t) || ut(t) ? tt.call(null, t) : Gt.Observable.just(t)
        }).toArray()
      }

      function nt(t) {
        function e(t, e) {
          n[e] = u, o.push(t.map(function (t) {
            n[e] = t
          }))
        }

        for (var n = new t.constructor, r = Object.keys(t), o = [], i = 0, s = r.length; s > i; i++) {
          var c = r[i], a = tt.call(this, t[c]);
          a && Yn.isObservable(a) ? e(a, c) : n[c] = t[c]
        }
        return Yn.forkJoin.apply(Yn, o).map(function () {
          return n
        })
      }

      function rt(t) {
        var e = this;
        return new Du(function (n) {
          t.call(e, function () {
            var t = arguments[0], e = arguments[1];
            if (t)return n.onError(t);
            if (arguments.length > 2) {
              for (var r = [], o = 1, i = arguments.length; i > o; o++)r.push(arguments[o]);
              e = r
            }
            n.onNext(e), n.onCompleted()
          })
        })
      }

      function ot(t) {
        return ne(t.next) && ne(t["throw"])
      }

      function it(t) {
        var e = t.constructor;
        return e ? "GeneratorFunction" === e.name || "GeneratorFunction" === e.displayName ? !0 : ot(e.prototype) : !1
      }

      function ut(t) {
        return Object == t.constructor
      }

      function st(t, e, n, r) {
        var o = new Ou;
        return r.push(ct(o, e, n)), t.apply(e, r), o.asObservable()
      }

      function ct(t, e, n) {
        return function () {
          for (var r = arguments.length, o = new Array(r), i = 0; r > i; i++)o[i] = arguments[i];
          if (ne(n)) {
            if (o = oe(n).apply(e, o), o === re)return t.onError(o.e);
            t.onNext(o)
          } else o.length <= 1 ? t.onNext(o[0]) : t.onNext(o);
          t.onCompleted()
        }
      }

      function at(t, e, n, r) {
        var o = new Ou;
        return r.push(ht(o, e, n)), t.apply(e, r), o.asObservable()
      }

      function ht(t, e, n) {
        return function () {
          var r = arguments[0];
          if (r)return t.onError(r);
          for (var o = arguments.length, i = [], u = 1; o > u; u++)i[u - 1] = arguments[u];
          if (ne(n)) {
            var i = oe(n).apply(e, i);
            if (i === re)return t.onError(i.e);
            t.onNext(i)
          } else i.length <= 1 ? t.onNext(i[0]) : t.onNext(i);
          t.onCompleted()
        }
      }

      function lt(t) {
        return Kt.StaticNodeList ? t instanceof Kt.StaticNodeList || t instanceof Kt.NodeList : "[object NodeList]" === Object.prototype.toString.call(t)
      }

      function pt(t, e, n) {
        this._e = t, this._n = e, this._fn = n, this._e.addEventListener(this._n, this._fn, !1), this.isDisposed = !1
      }

      function ft(t, e, n) {
        var r = new un, o = Object.prototype.toString.call(t);
        if (lt(t) || "[object HTMLCollection]" === o)for (var i = 0, u = t.length; u > i; i++)r.add(ft(t.item(i), e, n)); else t && r.add(new pt(t, e, n));
        return r
      }

      function dt(t, e, n) {
        return new Du(function (r) {
          function o(t, e) {
            if (a[e] = t, u[e] = !0, s || (s = u.every(Jt))) {
              if (i)return r.onError(i);
              var o = oe(n).apply(null, a);
              if (o === re)return r.onError(o.e);
              r.onNext(o)
            }
            c && a[1] && r.onCompleted()
          }

          var i, u = [!1, !1], s = !1, c = !1, a = new Array(2);
          return new bn(t.subscribe(function (t) {
            o(t, 0)
          }, function (t) {
            a[1] ? r.onError(t) : i = t
          }, function () {
            c = !0, a[1] && r.onCompleted()
          }), e.subscribe(function (t) {
            o(t, 1)
          }, function (t) {
            r.onError(t)
          }, function () {
            c = !0, o(!0, 1)
          }))
        }, t)
      }

      function X(t) {
        return t.toArray()
      }

      function vt(t, e) {
        return t.groupJoin(this, e, br, function (t, e) {
          return e
        })
      }

      function bt(t) {
        var e = this;
        return new Du(function (n) {
          var r = new Nu, o = new un, i = new mn(o);
          return n.onNext(nn(r, i)), o.add(e.subscribe(function (t) {
            r.onNext(t)
          }, function (t) {
            r.onError(t), n.onError(t)
          }, function () {
            r.onCompleted(), n.onCompleted()
          })), ee(t) && (t = hr(t)), o.add(t.subscribe(function (t) {
            r.onCompleted(), r = new Nu, n.onNext(nn(r, i))
          }, function (t) {
            r.onError(t), n.onError(t)
          }, function () {
            r.onCompleted(), n.onCompleted()
          })), i
        }, e)
      }

      function _t(t) {
        var e = this;
        return new Du(function (n) {
          function r() {
            var e;
            try {
              e = t()
            } catch (i) {
              return void n.onError(i)
            }
            ee(e) && (e = hr(e));
            var c = new dn;
            o.setDisposable(c), c.setDisposable(e.take(1).subscribe($t, function (t) {
              s.onError(t), n.onError(t)
            }, function () {
              s.onCompleted(), s = new Nu, n.onNext(nn(s, u)), r()
            }))
          }

          var o = new vn, i = new un(o), u = new mn(i), s = new Nu;
          return n.onNext(nn(s, u)), i.add(e.subscribe(function (t) {
            s.onNext(t)
          }, function (t) {
            s.onError(t), n.onError(t)
          }, function () {
            s.onCompleted(), n.onCompleted()
          })), r(), u
        }, e)
      }

      function mt(t, e) {
        return new Mi(t, e)
      }

      function W() {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return e
      }

      function yt(t) {
        this.patterns = t
      }

      function Et(t, e) {
        this.expression = t, this.selector = e
      }

      function At(t) {
        return function (e) {
          t.onError(e)
        }
      }

      function gt(t, e) {
        return function () {
          var n = oe(t.selector).apply(t, arguments);
          return n === re ? e.onError(n.e) : void e.onNext(n)
        }
      }

      function wt(t, e, n) {
        var r = t.get(e);
        if (!r) {
          var o = new Xi(e, n);
          return t.set(e, o), o
        }
        return r
      }

      function Ct(t, e, n) {
        this.joinObserverArray = t, this.onNext = e, this.onCompleted = n, this.joinObservers = new Hi;
        for (var r = 0, o = this.joinObserverArray.length; o > r; r++) {
          var i = this.joinObserverArray[r];
          this.joinObservers.set(i, i)
        }
      }

      function Dt(t, e) {
        return new Ki(t, e)
      }

      function Ft(t, e, n) {
        return new Du(function (r) {
          var o = t, i = An(e);
          return n.scheduleRecursiveFuture(0, o, function (t, e) {
            if (i > 0) {
              var u = n.now();
              o = new Date(o.getTime() + i), o.getTime() <= u && (o = new Date(u + i))
            }
            r.onNext(t), e(t + 1, new Date(o))
          })
        })
      }

      function xt(t, e, n) {
        return t === e ? new Du(function (t) {
          return n.schedulePeriodic(0, e, function (e) {
            return t.onNext(e), e + 1
          })
        }) : fr(function () {
          return Ft(new Date(n.now() + t), e, n)
        })
      }

      function Bt(t, e, n) {
        return new Du(function (r) {
          var o, i = !1, u = new vn, s = null, c = [], a = !1;
          return o = t.materialize().timestamp(n).subscribe(function (t) {
            var o, h;
            "E" === t.value.kind ? (c = [], c.push(t), s = t.value.error, h = !a) : (c.push({
              value: t.value,
              timestamp: t.timestamp + e
            }), h = !i, i = !0), h && (null !== s ? r.onError(s) : (o = new dn, u.setDisposable(o), o.setDisposable(n.scheduleRecursiveFuture(null, e, function (t, e) {
              var o, u, h, l;
              if (null === s) {
                a = !0;
                do h = null, c.length > 0 && c[0].timestamp - n.now() <= 0 && (h = c.shift().value), null !== h && h.accept(r); while (null !== h);
                l = !1, u = 0, c.length > 0 ? (l = !0, u = Math.max(0, c[0].timestamp - n.now())) : i = !1, o = s, a = !1, null !== o ? r.onError(o) : l && e(null, u)
              }
            }))))
          }), new bn(o, u)
        }, t)
      }

      function Nt(t, e, n) {
        return fr(function () {
          return Bt(t, e - n.now(), n)
        })
      }

      function Ot(t, e, n) {
        var r, o;
        return ne(e) ? o = e : (r = e, o = n), new Du(function (e) {
          function n() {
            c.setDisposable(t.subscribe(function (t) {
              var n = oe(o)(t);
              if (n === re)return e.onError(n.e);
              var r = new dn;
              u.add(r), r.setDisposable(n.subscribe(function () {
                e.onNext(t), u.remove(r), i()
              }, function (t) {
                e.onError(t)
              }, function () {
                e.onNext(t), u.remove(r), i()
              }))
            }, function (t) {
              e.onError(t)
            }, function () {
              s = !0, c.dispose(), i()
            }))
          }

          function i() {
            s && 0 === u.length && e.onCompleted()
          }

          var u = new un, s = !1, c = new vn;
          return r ? c.setDisposable(r.subscribe(n, function (t) {
            e.onError(t)
          }, n)) : n(), new bn(c, u)
        }, this)
      }

      function kt(t, e) {
        return new Du(function (n) {
          var r, o = !1, i = new vn, u = 0, s = t.subscribe(function (t) {
            var s = oe(e)(t);
            if (s === re)return n.onError(s.e);
            ee(s) && (s = hr(s)), o = !0, r = t, u++;
            var c = u, a = new dn;
            i.setDisposable(a), a.setDisposable(s.subscribe(function () {
              o && u === c && n.onNext(r), o = !1, a.dispose()
            }, function (t) {
              n.onError(t)
            }, function () {
              o && u === c && n.onNext(r), o = !1, a.dispose()
            }))
          }, function (t) {
            i.dispose(), n.onError(t), o = !1, u++
          }, function () {
            i.dispose(), o && n.onNext(r), n.onCompleted(), o = !1, u++
          });
          return new bn(s, i)
        }, t)
      }

      function X(t) {
        return t.toArray()
      }

      function X(t) {
        return t.toArray()
      }

      function St(t, e) {
        return new Du(function (n) {
          function r() {
            u && (u = !1, n.onNext(o)), i && n.onCompleted()
          }

          var o, i = !1, u = !1, s = new dn;
          return s.setDisposable(t.subscribe(function (t) {
            u = !0, o = t
          }, function (t) {
            n.onError(t)
          }, function () {
            i = !0, s.dispose()
          })), new bn(s, e.subscribe(r, function (t) {
            n.onError(t)
          }, r))
        }, t)
      }

      function Tt(t, e, n, r) {
        return ne(e) && (r = n, n = e, e = Dr()), Yn.isObservable(r) || (r = kr(new eu)), new Du(function (o) {
          function i(t) {
            function e() {
              return l = n === h
            }

            var n = h, i = new dn;
            c.setDisposable(i), i.setDisposable(t.subscribe(function () {
              e() && s.setDisposable(r.subscribe(o)), i.dispose()
            }, function (t) {
              e() && o.onError(t)
            }, function () {
              e() && s.setDisposable(r.subscribe(o))
            }))
          }

          function u() {
            var t = !l;
            return t && h++, t
          }

          var s = new vn, c = new vn, a = new dn;
          s.setDisposable(a);
          var h = 0, l = !1;
          return i(e), a.setDisposable(t.subscribe(function (t) {
            if (u()) {
              o.onNext(t);
              var e = oe(n)(t);
              if (e === re)return o.onError(e.e);
              i(ee(e) ? hr(e) : e)
            }
          }, function (t) {
            u() && o.onError(t)
          }, function () {
            u() && o.onCompleted()
          })), new bn(s, c)
        }, t)
      }

      function jt(t, e, n, r) {
        return gn(n) && (r = n, n = kr(new eu)), n instanceof Error && (n = kr(n)), gn(r) || (r = jn), Yn.isObservable(n) || (n = kr(new eu)), new Du(function (o) {
          function i() {
            var t = u;
            h.setDisposable(r.scheduleFuture(null, e, function () {
              a = u === t, a && (ee(n) && (n = hr(n)), c.setDisposable(n.subscribe(o)))
            }))
          }

          var u = 0, s = new dn, c = new vn, a = !1, h = new vn;
          return c.setDisposable(s), i(), s.setDisposable(t.subscribe(function (t) {
            a || (u++, o.onNext(t), i())
          }, function (t) {
            a || (u++, o.onError(t))
          }, function () {
            a || (u++, o.onCompleted())
          })), new bn(c, h)
        }, t)
      }

      function qt(t) {
        return {
          "@@transducer/init": function () {
            return t
          }, "@@transducer/step": function (t, e) {
            return t.onNext(e)
          }, "@@transducer/result": function (t) {
            return t.onCompleted()
          }
        }
      }

      function Rt(t) {
        this.predicate = t
      }

      function Lt(t) {
        this.predicate = t
      }

      function Mt(t, e) {
        var n = this;
        this.scheduler = t, this.messages = e, this.subscriptions = [], this.observers = [];
        for (var r = 0, o = this.messages.length; o > r; r++) {
          var i = this.messages[r], u = i.value;
          !function (e) {
            t.scheduleAbsolute(null, i.time, function () {
              for (var t = n.observers.slice(0), r = 0, o = t.length; o > r; r++)e.accept(t[r]);
              return hn
            })
          }(u)
        }
      }

      var Pt = {
        "function": !0,
        object: !0
      }, Vt = Pt[typeof e] && e && !e.nodeType ? e : null, It = Pt[typeof t] && t && !t.nodeType ? t : null, zt = s(Vt && It && "object" == typeof o && o), Wt = s(Pt[typeof self] && self), Ut = s(Pt[typeof window] && window), Ht = It && It.exports === Vt ? Vt : null, Xt = s(Pt[typeof this] && this), Kt = zt || Ut !== (Xt && Xt.window) && Ut || Wt || Xt || Function("return this")(), Gt = {
        internals: {},
        config: {Promise: Kt.Promise},
        helpers: {}
      }, $t = Gt.helpers.noop = function () {
      }, Jt = Gt.helpers.identity = function (t) {
        return t
      }, Yt = Gt.helpers.defaultNow = Date.now, Qt = Gt.helpers.defaultComparer = function (t, e) {
        return Ze(t, e)
      }, Zt = Gt.helpers.defaultSubComparer = function (t, e) {
        return t > e ? 1 : e > t ? -1 : 0
      }, te = (Gt.helpers.defaultKeySerializer = function (t) {
        return t.toString()
      }, Gt.helpers.defaultError = function (t) {
        throw t
      }), ee = Gt.helpers.isPromise = function (t) {
        return !!t && "function" != typeof t.subscribe && "function" == typeof t.then
      }, ne = Gt.helpers.isFunction = function () {
        var t = function (t) {
          return "function" == typeof t || !1
        };
        return t(/x/) && (t = function (t) {
          return "function" == typeof t && "[object Function]" == toString.call(t)
        }), t
      }(), re = {e: {}}, oe = Gt.internals.tryCatch = function (t) {
        if (!ne(t))throw new TypeError("fn must be a function");
        return a(t)
      };
      Gt.config.longStackSupport = !1;
      var ie = !1, ue = oe(function () {
        throw new Error
      })();
      ie = !!ue.e && !!ue.e.stack;
      var se, ce = v(), ae = "From previous event:", he = Gt.EmptyError = function () {
        this.message = "Sequence contains no elements.", Error.call(this)
      };
      he.prototype = Object.create(Error.prototype), he.prototype.name = "EmptyError";
      var le = Gt.ObjectDisposedError = function () {
        this.message = "Object has been disposed", Error.call(this)
      };
      le.prototype = Object.create(Error.prototype), le.prototype.name = "ObjectDisposedError";
      var pe = Gt.ArgumentOutOfRangeError = function () {
        this.message = "Argument out of range", Error.call(this)
      };
      pe.prototype = Object.create(Error.prototype), pe.prototype.name = "ArgumentOutOfRangeError";
      var fe = Gt.NotSupportedError = function (t) {
        this.message = t || "This operation is not supported", Error.call(this)
      };
      fe.prototype = Object.create(Error.prototype), fe.prototype.name = "NotSupportedError";
      var de = Gt.NotImplementedError = function (t) {
        this.message = t || "This operation is not implemented", Error.call(this)
      };
      de.prototype = Object.create(Error.prototype), de.prototype.name = "NotImplementedError";
      var ve = Gt.helpers.notImplemented = function () {
        throw new de
      }, be = (Gt.helpers.notSupported = function () {
        throw new fe
      }, "function" == typeof Symbol && Symbol.iterator || "_es6shim_iterator_");
      Kt.Set && "function" == typeof(new Kt.Set)["@@iterator"] && (be = "@@iterator");
      var _e = Gt.doneEnumerator = {done: !0, value: u}, me = Gt.helpers.isIterable = function (t) {
        return t && t[be] !== u
      }, ye = Gt.helpers.isArrayLike = function (t) {
        return t && t.length !== u
      };
      Gt.helpers.iterator = be;
      var Ee = Gt.internals.bindCallback = function (t, e, n) {
        if ("undefined" == typeof e)return t;
        switch (n) {
          case 0:
            return function () {
              return t.call(e)
            };
          case 1:
            return function (n) {
              return t.call(e, n)
            };
          case 2:
            return function (n, r) {
              return t.call(e, n, r)
            };
          case 3:
            return function (n, r, o) {
              return t.call(e, n, r, o)
            }
        }
        return function () {
          return t.apply(e, arguments)
        }
      }, Ae = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], ge = (Ae.length, "[object Arguments]"), we = "[object Array]", Ce = "[object Boolean]", De = "[object Date]", Fe = "[object Error]", xe = "[object Function]", Be = "[object Map]", Ne = "[object Number]", Oe = "[object Object]", ke = "[object RegExp]", Se = "[object Set]", Te = "[object String]", je = "[object WeakMap]", qe = "[object ArrayBuffer]", Re = "[object Float32Array]", Le = "[object Float64Array]", Me = "[object Int8Array]", Pe = "[object Int16Array]", Ve = "[object Int32Array]", Ie = "[object Uint8Array]", ze = "[object Uint8ClampedArray]", We = "[object Uint16Array]", Ue = "[object Uint32Array]", He = {};
      He[Re] = He[Le] = He[Me] = He[Pe] = He[Ve] = He[Ie] = He[ze] = He[We] = He[Ue] = !0, He[ge] = He[we] = He[qe] = He[Ce] = He[De] = He[Fe] = He[xe] = He[Be] = He[Ne] = He[Oe] = He[ke] = He[Se] = He[Te] = He[je] = !1;
      var Xe = Object.prototype, Ke = Xe.hasOwnProperty, Ge = Xe.toString, $e = Math.pow(2, 53) - 1, Je = Object.keys || function () {
          var t = Object.prototype.hasOwnProperty, e = !{toString: null}.propertyIsEnumerable("toString"), n = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"], r = n.length;
          return function (o) {
            if ("object" != typeof o && ("function" != typeof o || null === o))throw new TypeError("Object.keys called on non-object");
            var i, u, s = [];
            for (i in o)t.call(o, i) && s.push(i);
            if (e)for (u = 0; r > u; u++)t.call(o, n[u]) && s.push(n[u]);
            return s
          }
        }(), ut = Gt.internals.isObject = function (t) {
        var e = typeof t;
        return !!t && ("object" === e || "function" === e)
      }, Ye = function () {
        try {
          Object({toString: 0} + "")
        } catch (t) {
          return function () {
            return !1
          }
        }
        return function (t) {
          return "function" != typeof t.toString && "string" == typeof(t + "")
        }
      }(), Qe = Array.isArray || function (t) {
          return y(t) && E(t.length) && Ge.call(t) === we
        }, Ze = Gt.internals.isEqual = function (t, e) {
        return D(t, e)
      }, tn = ({}.hasOwnProperty, Array.prototype.slice, Gt.internals.inherits = function (t, e) {
        function n() {
          this.constructor = t
        }

        n.prototype = e.prototype, t.prototype = new n
      }), en = Gt.internals.addProperties = function (t) {
        for (var e = [], n = 1, r = arguments.length; r > n; n++)e.push(arguments[n]);
        for (var o = 0, i = e.length; i > o; o++) {
          var u = e[o];
          for (var s in u)t[s] = u[s]
        }
      }, nn = Gt.internals.addRef = function (t, e) {
        return new Du(function (n) {
          return new bn(e.getDisposable(), t.subscribe(n))
        })
      };
      x.prototype.compareTo = function (t) {
        var e = this.value.compareTo(t.value);
        return 0 === e && (e = this.id - t.id), e
      };
      var rn = Gt.internals.PriorityQueue = function (t) {
        this.items = new Array(t), this.length = 0
      }, on = rn.prototype;
      on.isHigherPriority = function (t, e) {
        return this.items[t].compareTo(this.items[e]) < 0
      }, on.percolate = function (t) {
        if (!(t >= this.length || 0 > t)) {
          var e = t - 1 >> 1;
          if (!(0 > e || e === t) && this.isHigherPriority(t, e)) {
            var n = this.items[t];
            this.items[t] = this.items[e], this.items[e] = n, this.percolate(e)
          }
        }
      }, on.heapify = function (t) {
        if (+t || (t = 0), !(t >= this.length || 0 > t)) {
          var e = 2 * t + 1, n = 2 * t + 2, r = t;
          if (e < this.length && this.isHigherPriority(e, r) && (r = e), n < this.length && this.isHigherPriority(n, r) && (r = n), r !== t) {
            var o = this.items[t];
            this.items[t] = this.items[r], this.items[r] = o, this.heapify(r)
          }
        }
      }, on.peek = function () {
        return this.items[0].value
      }, on.removeAt = function (t) {
        this.items[t] = this.items[--this.length], this.items[this.length] = u, this.heapify()
      }, on.dequeue = function () {
        var t = this.peek();
        return this.removeAt(0), t
      }, on.enqueue = function (t) {
        var e = this.length++;
        this.items[e] = new x(rn.count++, t), this.percolate(e)
      }, on.remove = function (t) {
        for (var e = 0; e < this.length; e++)if (this.items[e].value === t)return this.removeAt(e), !0;
        return !1
      }, rn.count = 0;
      var un = Gt.CompositeDisposable = function () {
        var t, e, n = [];
        if (Array.isArray(arguments[0]))n = arguments[0]; else for (e = arguments.length, n = new Array(e), t = 0; e > t; t++)n[t] = arguments[t];
        this.disposables = n, this.isDisposed = !1, this.length = n.length
      }, sn = un.prototype;
      sn.add = function (t) {
        this.isDisposed ? t.dispose() : (this.disposables.push(t), this.length++)
      }, sn.remove = function (t) {
        var e = !1;
        if (!this.isDisposed) {
          var n = this.disposables.indexOf(t);
          -1 !== n && (e = !0, this.disposables.splice(n, 1), this.length--, t.dispose())
        }
        return e
      }, sn.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          for (var t = this.disposables.length, e = new Array(t), n = 0; t > n; n++)e[n] = this.disposables[n];
          for (this.disposables = [], this.length = 0, n = 0; t > n; n++)e[n].dispose()
        }
      };
      var cn = Gt.Disposable = function (t) {
        this.isDisposed = !1, this.action = t || $t
      };
      cn.prototype.dispose = function () {
        this.isDisposed || (this.action(), this.isDisposed = !0)
      };
      var an = cn.create = function (t) {
        return new cn(t)
      }, hn = cn.empty = {dispose: $t}, ln = cn.isDisposable = function (t) {
        return t && ne(t.dispose)
      }, pn = cn.checkDisposed = function (t) {
        if (t.isDisposed)throw new le
      }, fn = cn._fixup = function (t) {
        return ln(t) ? t : hn
      }, dn = Gt.SingleAssignmentDisposable = function () {
        this.isDisposed = !1, this.current = null
      };
      dn.prototype.getDisposable = function () {
        return this.current
      }, dn.prototype.setDisposable = function (t) {
        if (this.current)throw new Error("Disposable has already been assigned");
        var e = this.isDisposed;
        !e && (this.current = t), e && t && t.dispose()
      }, dn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this.current;
          this.current = null, t && t.dispose()
        }
      };
      var vn = Gt.SerialDisposable = function () {
        this.isDisposed = !1, this.current = null
      };
      vn.prototype.getDisposable = function () {
        return this.current
      }, vn.prototype.setDisposable = function (t) {
        var e = this.isDisposed;
        if (!e) {
          var n = this.current;
          this.current = t
        }
        n && n.dispose(), e && t && t.dispose()
      }, vn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this.current;
          this.current = null
        }
        t && t.dispose()
      };
      var bn = Gt.BinaryDisposable = function (t, e) {
        this._first = t, this._second = e, this.isDisposed = !1
      };
      bn.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          var t = this._first;
          this._first = null, t && t.dispose();
          var e = this._second;
          this._second = null, e && e.dispose()
        }
      };
      var _n = Gt.NAryDisposable = function (t) {
        this._disposables = t, this.isDisposed = !1
      };
      _n.prototype.dispose = function () {
        if (!this.isDisposed) {
          this.isDisposed = !0;
          for (var t = 0, e = this._disposables.length; e > t; t++)this._disposables[t].dispose();
          this._disposables.length = 0
        }
      };
      var mn = Gt.RefCountDisposable = function () {
        function t(t) {
          this.disposable = t, this.disposable.count++, this.isInnerDisposed = !1
        }

        function e(t) {
          this.underlyingDisposable = t, this.isDisposed = !1, this.isPrimaryDisposed = !1, this.count = 0
        }

        return t.prototype.dispose = function () {
          this.disposable.isDisposed || this.isInnerDisposed || (this.isInnerDisposed = !0, this.disposable.count--, 0 === this.disposable.count && this.disposable.isPrimaryDisposed && (this.disposable.isDisposed = !0, this.disposable.underlyingDisposable.dispose()))
        }, e.prototype.dispose = function () {
          this.isDisposed || this.isPrimaryDisposed || (this.isPrimaryDisposed = !0, 0 === this.count && (this.isDisposed = !0, this.underlyingDisposable.dispose()))
        }, e.prototype.getDisposable = function () {
          return this.isDisposed ? hn : new t(this)
        }, e
      }();
      B.prototype.dispose = function () {
        this.scheduler.schedule(this, N)
      };
      var yn = Gt.internals.ScheduledItem = function (t, e, n, r, o) {
        this.scheduler = t, this.state = e, this.action = n, this.dueTime = r, this.comparer = o || Zt, this.disposable = new dn
      };
      yn.prototype.invoke = function () {
        this.disposable.setDisposable(this.invokeCore())
      }, yn.prototype.compareTo = function (t) {
        return this.comparer(this.dueTime, t.dueTime)
      }, yn.prototype.isCancelled = function () {
        return this.disposable.isDisposed
      }, yn.prototype.invokeCore = function () {
        return fn(this.action(this.scheduler, this.state))
      };
      var En = Gt.Scheduler = function () {
        function t() {
        }

        t.isScheduler = function (e) {
          return e instanceof t
        };
        var e = t.prototype;
        return e.schedule = function (t, e) {
          throw new de
        }, e.scheduleFuture = function (e, n, r) {
          var o = n;
          return o instanceof Date && (o -= this.now()), o = t.normalize(o), 0 === o ? this.schedule(e, r) : this._scheduleFuture(e, o, r)
        }, e._scheduleFuture = function (t, e, n) {
          throw new de
        }, t.now = Yt, t.prototype.now = Yt, t.normalize = function (t) {
          return 0 > t && (t = 0), t
        }, t
      }(), An = En.normalize, gn = En.isScheduler;
      !function (t) {
        function e(t, e) {
          function n(e) {
            function r(t, e) {
              return u ? i.remove(c) : s = !0, o(e, n), hn
            }

            var u = !1, s = !1, c = t.schedule(e, r);
            s || (i.add(c), u = !0)
          }

          var r = e[0], o = e[1], i = new un;
          return o(r, n), i
        }

        function n(t, e) {
          function n(e, r) {
            function u(t, e) {
              return s ? i.remove(a) : c = !0, o(e, n), hn
            }

            var s = !1, c = !1, a = t.scheduleFuture(e, r, u);
            c || (i.add(a), s = !0)
          }

          var r = e[0], o = e[1], i = new un;
          return o(r, n), i
        }

        t.scheduleRecursive = function (t, n) {
          return this.schedule([t, n], e)
        }, t.scheduleRecursiveFuture = function (t, e, r) {
          return this.scheduleFuture([t, r], e, n)
        }
      }(En.prototype), function (t) {
        t.schedulePeriodic = function (t, e, n) {
          if ("undefined" == typeof Kt.setInterval)throw new fe;
          e = An(e);
          var r = t, o = Kt.setInterval(function () {
            r = n(r)
          }, e);
          return an(function () {
            Kt.clearInterval(o)
          })
        }
      }(En.prototype), function (t) {
        t.catchError = t["catch"] = function (t) {
          return new qn(this, t)
        }
      }(En.prototype);
      var wn, Cn, Dn = Gt.internals.SchedulePeriodicRecursive = function () {
        function t(t) {
          return function (e, n) {
            n(0, t._period);
            var r = oe(t._action)(t._state);
            r === re && (t._cancel.dispose(), h(r.e)), t._state = r
          }
        }

        function e(t, e, n, r) {
          this._scheduler = t, this._state = e, this._period = n, this._action = r
        }

        return e.prototype.start = function () {
          var e = new dn;
          return this._cancel = e, e.setDisposable(this._scheduler.scheduleRecursiveFuture(0, this._period, t(this))), e
        }, e
      }(), Fn = function (t) {
        function e() {
          t.call(this)
        }

        return tn(e, t), e.prototype.schedule = function (t, e) {
          return fn(e(this, t))
        }, e
      }(En), xn = En.immediate = new Fn, Bn = function (t) {
        function e() {
          for (; r.length > 0;) {
            var t = r.dequeue();
            !t.isCancelled() && t.invoke()
          }
        }

        function n() {
          t.call(this)
        }

        var r;
        return tn(n, t), n.prototype.schedule = function (t, n) {
          var o = new yn(this, t, n, this.now());
          if (r)r.enqueue(o); else {
            r = new rn(4), r.enqueue(o);
            var i = oe(e)();
            r = null, i === re && h(i.e)
          }
          return o.disposable
        }, n.prototype.scheduleRequired = function () {
          return !r
        }, n
      }(En), Nn = En.currentThread = new Bn, On = function () {
        var t, e = $t;
        if (Kt.setTimeout)t = Kt.setTimeout, e = Kt.clearTimeout; else {
          if (!Kt.WScript)throw new fe;
          t = function (t, e) {
            Kt.WScript.Sleep(e), t()
          }
        }
        return {setTimeout: t, clearTimeout: e}
      }(), kn = On.setTimeout, Sn = On.clearTimeout;
      !function () {
        function t(e) {
          if (o)kn(function () {
            t(e)
          }, 0); else {
            var n = r[e];
            if (n) {
              o = !0;
              var i = oe(n)();
              Cn(e), o = !1, i === re && h(i.e)
            }
          }
        }

        function e() {
          if (!Kt.postMessage || Kt.importScripts)return !1;
          var t = !1, e = Kt.onmessage;
          return Kt.onmessage = function () {
            t = !0
          }, Kt.postMessage("", "*"), Kt.onmessage = e, t
        }

        var n = 1, r = {}, o = !1;
        Cn = function (t) {
          delete r[t]
        };
        var u = new RegExp("^" + String(toString).replace(/[.*+?^${}()|[\]\\]/g, "\\$&").replace(/toString| for [^\]]+/g, ".*?") + "$"), s = "function" == typeof(s = zt && Ht && zt.setImmediate) && !u.test(s) && s;
        if (ne(s))wn = function (e) {
          var o = n++;
          return r[o] = e, s(function () {
            t(o)
          }), o
        }; else if ("undefined" != typeof i && "[object process]" === {}.toString.call(i))wn = function (e) {
          var o = n++;
          return r[o] = e, i.nextTick(function () {
            t(o)
          }), o
        }; else if (e()) {
          var c = "ms.rx.schedule" + Math.random(), a = function (e) {
            "string" == typeof e.data && e.data.substring(0, c.length) === c && t(e.data.substring(c.length))
          };
          Kt.addEventListener("message", a, !1), wn = function (t) {
            var e = n++;
            return r[e] = t, Kt.postMessage(c + currentId, "*"), e
          }
        } else if (Kt.MessageChannel) {
          var l = new Kt.MessageChannel;
          l.port1.onmessage = function (e) {
            t(e.data)
          }, wn = function (t) {
            var e = n++;
            return r[e] = t, l.port2.postMessage(e), e
          }
        } else wn = "document" in Kt && "onreadystatechange" in Kt.document.createElement("script") ? function (e) {
          var o = Kt.document.createElement("script"), i = n++;
          return r[i] = e, o.onreadystatechange = function () {
            t(i), o.onreadystatechange = null, o.parentNode.removeChild(o), o = null
          }, Kt.document.documentElement.appendChild(o), i
        } : function (e) {
          var o = n++;
          return r[o] = e, kn(function () {
            t(o)
          }, 0), o
        }
      }();
      var Tn = function (t) {
        function e() {
          t.call(this)
        }

        function n(t, e, n, r) {
          return function () {
            t.setDisposable(cn._fixup(e(n, r)))
          }
        }

        function r(t) {
          this._id = t, this.isDisposed = !1
        }

        function o(t) {
          this._id = t, this.isDisposed = !1
        }

        return tn(e, t), r.prototype.dispose = function () {
          this.isDisposed || (this.isDisposed = !0, Cn(this._id))
        }, o.prototype.dispose = function () {
          this.isDisposed || (this.isDisposed = !0, Sn(this._id))
        }, e.prototype.schedule = function (t, e) {
          var o = new dn, i = wn(n(o, e, this, t));
          return new bn(o, new r(i))
        }, e.prototype._scheduleFuture = function (t, e, r) {
          if (0 === e)return this.schedule(t, r);
          var i = new dn, u = kn(n(i, r, this, t), e);
          return new bn(i, new o(u))
        }, e
      }(En), jn = En["default"] = En.async = new Tn, qn = function (t) {
        function e(e, n) {
          this._scheduler = e, this._handler = n, this._recursiveOriginal = null, this._recursiveWrapper = null, t.call(this)
        }

        return tn(e, t), e.prototype.schedule = function (t, e) {
          return this._scheduler.schedule(t, this._wrap(e))
        }, e.prototype._scheduleFuture = function (t, e, n) {
          return this._scheduler.schedule(t, e, this._wrap(n))
        }, e.prototype.now = function () {
          return this._scheduler.now()
        }, e.prototype._clone = function (t) {
          return new e(t, this._handler)
        }, e.prototype._wrap = function (t) {
          var e = this;
          return function (n, r) {
            var o = oe(t)(e._getRecursiveWrapper(n), r);
            return o === re ? (e._handler(o.e) || h(o.e), hn) : fn(o)
          }
        }, e.prototype._getRecursiveWrapper = function (t) {
          if (this._recursiveOriginal !== t) {
            this._recursiveOriginal = t;
            var e = this._clone(t);
            e._recursiveOriginal = t, e._recursiveWrapper = e, this._recursiveWrapper = e
          }
          return this._recursiveWrapper
        }, e.prototype.schedulePeriodic = function (t, e, n) {
          var r = this, o = !1, i = new dn;
          return i.setDisposable(this._scheduler.schedulePeriodic(t, e, function (t) {
            if (o)return null;
            var e = oe(n)(t);
            return e === re ? (o = !0, r._handler(e.e) || h(e.e), i.dispose(), null) : e
          })), i
        }, e
      }(En), Rn = Gt.Notification = function () {
        function t() {
        }

        return t.prototype._accept = function (t, e, n) {
          throw new de
        }, t.prototype._acceptObserver = function (t, e, n) {
          throw new de
        }, t.prototype.accept = function (t, e, n) {
          return t && "object" == typeof t ? this._acceptObserver(t) : this._accept(t, e, n)
        }, t.prototype.toObservable = function (t) {
          var e = this;
          return gn(t) || (t = xn), new Du(function (n) {
            return t.schedule(e, function (t, e) {
              e._acceptObserver(n), "N" === e.kind && n.onCompleted()
            })
          })
        }, t
      }(), Ln = function (t) {
        function e(t) {
          this.value = t, this.kind = "N"
        }

        return tn(e, t), e.prototype._accept = function (t) {
          return t(this.value)
        }, e.prototype._acceptObserver = function (t) {
          return t.onNext(this.value)
        }, e.prototype.toString = function () {
          return "OnNext(" + this.value + ")"
        }, e
      }(Rn), Mn = function (t) {
        function e(t) {
          this.error = t, this.kind = "E"
        }

        return tn(e, t), e.prototype._accept = function (t, e) {
          return e(this.error)
        }, e.prototype._acceptObserver = function (t) {
          return t.onError(this.error)
        }, e.prototype.toString = function () {
          return "OnError(" + this.error + ")"
        }, e
      }(Rn), Pn = function (t) {
        function e() {
          this.kind = "C"
        }

        return tn(e, t), e.prototype._accept = function (t, e, n) {
          return n()
        }, e.prototype._acceptObserver = function (t) {
          return t.onCompleted()
        }, e.prototype.toString = function () {
          return "OnCompleted()"
        }, e
      }(Rn), Vn = Rn.createOnNext = function (t) {
        return new Ln(t)
      }, In = Rn.createOnError = function (t) {
        return new Mn(t)
      }, zn = Rn.createOnCompleted = function () {
        return new Pn
      }, Wn = Gt.Observer = function () {
      };
      Wn.prototype.toNotifier = function () {
        var t = this;
        return function (e) {
          return e.accept(t)
        }
      }, Wn.prototype.asObserver = function () {
        var t = this;
        return new Kn(function (e) {
          t.onNext(e)
        }, function (e) {
          t.onError(e)
        }, function () {
          t.onCompleted()
        })
      }, Wn.prototype.checked = function () {
        return new Gn(this)
      };
      var Un = Wn.create = function (t, e, n) {
        return t || (t = $t), e || (e = te), n || (n = $t),
          new Kn(t, e, n)
      };
      Wn.fromNotifier = function (t, e) {
        var n = Ee(t, e, 1);
        return new Kn(function (t) {
          return n(Vn(t))
        }, function (t) {
          return n(In(t))
        }, function () {
          return n(zn())
        })
      }, Wn.prototype.notifyOn = function (t) {
        return new Jn(t, this)
      }, Wn.prototype.makeSafe = function (t) {
        return new AnonymousSafeObserver(this._onNext, this._onError, this._onCompleted, t)
      };
      var Hn, Xn = Gt.internals.AbstractObserver = function (t) {
        function e() {
          this.isStopped = !1
        }

        return tn(e, t), e.prototype.next = ve, e.prototype.error = ve, e.prototype.completed = ve, e.prototype.onNext = function (t) {
          !this.isStopped && this.next(t)
        }, e.prototype.onError = function (t) {
          this.isStopped || (this.isStopped = !0, this.error(t))
        }, e.prototype.onCompleted = function () {
          this.isStopped || (this.isStopped = !0, this.completed())
        }, e.prototype.dispose = function () {
          this.isStopped = !0
        }, e.prototype.fail = function (t) {
          return this.isStopped ? !1 : (this.isStopped = !0, this.error(t), !0)
        }, e
      }(Wn), Kn = Gt.AnonymousObserver = function (t) {
        function e(e, n, r) {
          t.call(this), this._onNext = e, this._onError = n, this._onCompleted = r
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._onNext(t)
        }, e.prototype.error = function (t) {
          this._onError(t)
        }, e.prototype.completed = function () {
          this._onCompleted()
        }, e
      }(Xn), Gn = function (t) {
        function e(e) {
          t.call(this), this._observer = e, this._state = 0
        }

        tn(e, t);
        var n = e.prototype;
        return n.onNext = function (t) {
          this.checkAccess();
          var e = oe(this._observer.onNext).call(this._observer, t);
          this._state = 0, e === re && h(e.e)
        }, n.onError = function (t) {
          this.checkAccess();
          var e = oe(this._observer.onError).call(this._observer, t);
          this._state = 2, e === re && h(e.e)
        }, n.onCompleted = function () {
          this.checkAccess();
          var t = oe(this._observer.onCompleted).call(this._observer);
          this._state = 2, t === re && h(t.e)
        }, n.checkAccess = function () {
          if (1 === this._state)throw new Error("Re-entrancy detected");
          if (2 === this._state)throw new Error("Observer completed");
          0 === this._state && (this._state = 1)
        }, e
      }(Wn), $n = Gt.internals.ScheduledObserver = function (t) {
        function e(e, n) {
          t.call(this), this.scheduler = e, this.observer = n, this.isAcquired = !1, this.hasFaulted = !1, this.queue = [], this.disposable = new vn
        }

        function n(t, e) {
          return function () {
            t.onNext(e)
          }
        }

        function r(t, e) {
          return function () {
            t.onError(e)
          }
        }

        function o(t) {
          return function () {
            t.onCompleted()
          }
        }

        function i(t, e) {
          var n;
          if (!(t.queue.length > 0))return void(t.isAcquired = !1);
          n = t.queue.shift();
          var r = oe(n)();
          return r === re ? (t.queue = [], t.hasFaulted = !0, h(r.e)) : void e(t)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this.queue.push(n(this.observer, t))
        }, e.prototype.error = function (t) {
          this.queue.push(r(this.observer, t))
        }, e.prototype.completed = function () {
          this.queue.push(o(this.observer))
        }, e.prototype.ensureActive = function () {
          var t = !1;
          !this.hasFaulted && this.queue.length > 0 && (t = !this.isAcquired, this.isAcquired = !0), t && this.disposable.setDisposable(this.scheduler.scheduleRecursive(this, i))
        }, e.prototype.dispose = function () {
          t.prototype.dispose.call(this), this.disposable.dispose()
        }, e
      }(Xn), Jn = function (t) {
        function e(e, n, r) {
          t.call(this, e, n), this._cancel = r
        }

        return tn(e, t), e.prototype.next = function (e) {
          t.prototype.next.call(this, e), this.ensureActive()
        }, e.prototype.error = function (e) {
          t.prototype.error.call(this, e), this.ensureActive()
        }, e.prototype.completed = function () {
          t.prototype.completed.call(this), this.ensureActive()
        }, e.prototype.dispose = function () {
          t.prototype.dispose.call(this), this._cancel && this._cancel.dispose(), this._cancel = null
        }, e
      }($n), Yn = Gt.Observable = function () {
        function t(t, e) {
          return function (n) {
            var r = n.onError;
            return n.onError = function (e) {
              l(e, t), r.call(n, e)
            }, e.call(t, n)
          }
        }

        function e() {
          if (Gt.config.longStackSupport && ie) {
            var e = this._subscribe, n = oe(h)(new Error).e;
            this.stack = n.stack.substring(n.stack.indexOf("\n") + 1), this._subscribe = t(this, e)
          }
        }

        return Hn = e.prototype, e.isObservable = function (t) {
          return t && ne(t.subscribe)
        }, Hn.subscribe = Hn.forEach = function (t, e, n) {
          return this._subscribe("object" == typeof t ? t : Un(t, e, n))
        }, Hn.subscribeOnNext = function (t, e) {
          return this._subscribe(Un("undefined" != typeof e ? function (n) {
            t.call(e, n)
          } : t))
        }, Hn.subscribeOnError = function (t, e) {
          return this._subscribe(Un(null, "undefined" != typeof e ? function (n) {
            t.call(e, n)
          } : t))
        }, Hn.subscribeOnCompleted = function (t, e) {
          return this._subscribe(Un(null, null, "undefined" != typeof e ? function () {
            t.call(e)
          } : t))
        }, e
      }(), Qn = Gt.ObservableBase = function (t) {
        function e(t) {
          return t && ne(t.dispose) ? t : ne(t) ? an(t) : hn
        }

        function n(t, n) {
          var r = n[0], o = n[1], i = oe(o.subscribeCore).call(o, r);
          i !== re || r.fail(re.e) || h(re.e), r.setDisposable(e(i))
        }

        function r() {
          t.call(this)
        }

        return tn(r, t), r.prototype._subscribe = function (t) {
          var e = new Fu(t), r = [e, this];
          return Nn.scheduleRequired() ? Nn.schedule(r, n) : n(null, r), e
        }, r.prototype.subscribeCore = ve, r
      }(Yn), Zn = Gt.FlatMapObservable = function (t) {
        function e(e, n, r, o) {
          this.resultSelector = ne(r) ? r : null, this.selector = Ee(ne(n) ? n : function () {
            return n
          }, o, 3), this.source = e, t.call(this)
        }

        function n(t, e, n, r) {
          this.i = 0, this.selector = e, this.resultSelector = n, this.source = r, this.o = t, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this.selector, this.resultSelector, this))
        }, tn(n, Xn), n.prototype._wrapResult = function (t, e, n) {
          return this.resultSelector ? t.map(function (t, r) {
            return this.resultSelector(e, t, n, r)
          }, this) : t
        }, n.prototype.next = function (t) {
          var e = this.i++, n = oe(this.selector)(t, e, this.source);
          return n === re ? this.o.onError(n.e) : (ee(n) && (n = hr(n)), (ye(n) || me(n)) && (n = Yn.from(n)), void this.o.onNext(this._wrapResult(n, t, e)))
        }, n.prototype.error = function (t) {
          this.o.onError(t)
        }, n.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Qn), tr = Gt.internals.Enumerable = function () {
      };
      O.prototype.dispose = function () {
        this.isDisposed || (this.isDisposed = !0, this._s.isDisposed = !0)
      };
      var er = function (t) {
        function e(e) {
          this.sources = e, t.call(this)
        }

        function n(t, e) {
          if (!t.isDisposed) {
            var n = oe(t.e.next).call(t.e);
            if (n === re)return t.o.onError(n.e);
            if (n.done)return t.o.onCompleted();
            var o = n.value;
            ee(o) && (o = hr(o));
            var i = new dn;
            t.subscription.setDisposable(i), i.setDisposable(o.subscribe(new r(t, e)))
          }
        }

        function r(t, e) {
          this._state = t, this._recurse = e, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn, r = {
            isDisposed: !1,
            o: t,
            subscription: e,
            e: this.sources[be]()
          }, o = Nn.scheduleRecursive(r, n);
          return new _n([e, o, new O(r)])
        }, tn(r, Xn), r.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, r.prototype.error = function (t) {
          this._state.o.onError(t)
        }, r.prototype.completed = function () {
          this._recurse(this._state)
        }, e
      }(Qn);
      tr.prototype.concat = function () {
        return new er(this)
      };
      var nr = function (t) {
        function e(e) {
          this.sources = e, t.call(this)
        }

        function n(t, e) {
          if (!t.isDisposed) {
            var n = oe(t.e.next).call(t.e);
            if (n === re)return t.o.onError(n.e);
            if (n.done)return null !== t.lastError ? t.o.onError(t.lastError) : t.o.onCompleted();
            var o = n.value;
            ee(o) && (o = hr(o));
            var i = new dn;
            t.subscription.setDisposable(i), i.setDisposable(o.subscribe(new r(t, e)))
          }
        }

        function r(t, e) {
          this._state = t, this._recurse = e, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn, r = {
            isDisposed: !1,
            e: this.sources[be](),
            subscription: e,
            lastError: null,
            o: t
          }, o = Nn.scheduleRecursive(r, n);
          return new _n([e, o, new O(r)])
        }, tn(r, Xn), r.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, r.prototype.error = function (t) {
          this._state.lastError = t, this._recurse(this._state)
        }, r.prototype.completed = function () {
          this._state.o.onCompleted()
        }, e
      }(Qn);
      tr.prototype.catchError = function () {
        return new nr(this)
      }, tr.prototype.catchErrorWhen = function (t) {
        var e = this;
        return new Du(function (n) {
          var r, o = new Nu, i = new Nu, u = t(o), s = u.subscribe(i), c = e[be](), a = {isDisposed: !1}, h = new vn, l = Nn.scheduleRecursive(null, function (t, e) {
            if (!a.isDisposed) {
              var u = oe(c.next).call(c);
              if (u === re)return n.onError(u.e);
              if (u.done)return void(r ? n.onError(r) : n.onCompleted());
              var s = u.value;
              ee(s) && (s = hr(s));
              var l = new dn, p = new dn;
              h.setDisposable(new bn(p, l)), l.setDisposable(s.subscribe(function (t) {
                n.onNext(t)
              }, function (t) {
                p.setDisposable(i.subscribe(e, function (t) {
                  n.onError(t)
                }, function () {
                  n.onCompleted()
                })), o.onNext(t)
              }, function () {
                n.onCompleted()
              }))
            }
          });
          return new _n([s, h, l, new O(a)])
        })
      };
      var rr = function (t) {
        function e(t, e) {
          this.v = t, this.c = null == e ? -1 : e
        }

        function n(t) {
          this.v = t.v, this.l = t.c
        }

        return tn(e, t), e.prototype[be] = function () {
          return new n(this)
        }, n.prototype.next = function () {
          return 0 === this.l ? _e : (this.l > 0 && this.l--, {done: !1, value: this.v})
        }, e
      }(tr), or = tr.repeat = function (t, e) {
        return new rr(t, e)
      }, ir = function (t) {
        function e(t, e, n) {
          this.s = t, this.fn = e ? Ee(e, n, 3) : null
        }

        function n(t) {
          this.i = -1, this.s = t.s, this.l = this.s.length, this.fn = t.fn
        }

        return tn(e, t), e.prototype[be] = function () {
          return new n(this)
        }, n.prototype.next = function () {
          return ++this.i < this.l ? {
            done: !1,
            value: this.fn ? this.fn(this.s[this.i], this.i, this.s) : this.s[this.i]
          } : _e
        }, e
      }(tr), ur = tr.of = function (t, e, n) {
        return new ir(t, e, n)
      }, sr = function (t) {
        function e(e, n) {
          this.source = e, this._s = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Jn(this._s, t))
        }, e
      }(Qn);
      Hn.observeOn = function (t) {
        return new sr(this, t)
      };
      var cr = function (t) {
        function e(e, n) {
          this.source = e, this._s = n, t.call(this)
        }

        function n(t, e) {
          var n = e[0], r = e[1], o = e[2];
          r.setDisposable(new B(t, n.subscribe(o)))
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn, r = new vn;
          return r.setDisposable(e), e.setDisposable(this._s.schedule([this.source, r, t], n)), r
        }, e
      }(Qn);
      Hn.subscribeOn = function (t) {
        return new cr(this, t)
      };
      var ar = function (t) {
        function e(e, n) {
          this._p = e, this._s = n, t.call(this)
        }

        function n(t, e) {
          var n = e[0], r = e[1];
          n.onNext(r), n.onCompleted()
        }

        function r(t, e) {
          var n = e[0], r = e[1];
          n.onError(r)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn, o = this;
          return this._p.then(function (r) {
            e.setDisposable(o._s.schedule([t, r], n))
          }, function (n) {
            e.setDisposable(o._s.schedule([t, n], r))
          }), e
        }, e
      }(Qn), hr = Yn.fromPromise = function (t, e) {
        return e || (e = jn), new ar(t, e)
      };
      Hn.toPromise = function (t) {
        if (t || (t = Gt.config.Promise), !t)throw new fe("Promise type not provided nor in Rx.config.Promise");
        var e = this;
        return new t(function (t, n) {
          var r;
          e.subscribe(function (t) {
            r = t
          }, n, function () {
            t(r)
          })
        })
      };
      var lr = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t) {
          this.o = t, this.a = [], Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t))
        }, tn(n, Xn), n.prototype.next = function (t) {
          this.a.push(t)
        }, n.prototype.error = function (t) {
          this.o.onError(t)
        }, n.prototype.completed = function () {
          this.o.onNext(this.a), this.o.onCompleted()
        }, e
      }(Qn);
      Hn.toArray = function () {
        return new lr(this)
      }, Yn.create = function (t, e) {
        return new Du(t, e)
      };
      var pr = function (t) {
        function e(e) {
          this._f = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = oe(this._f)();
          return e === re ? kr(e.e).subscribe(t) : (ee(e) && (e = hr(e)), e.subscribe(t))
        }, e
      }(Qn), fr = Yn.defer = function (t) {
        return new pr(t)
      }, dr = function (t) {
        function e(e) {
          this.scheduler = e, t.call(this)
        }

        function n(t, e) {
          this.observer = t, this.scheduler = e
        }

        function r(t, e) {
          return e.onCompleted(), hn
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new n(t, this.scheduler);
          return e.run()
        }, n.prototype.run = function () {
          var t = this.observer;
          return this.scheduler === xn ? r(null, t) : this.scheduler.schedule(t, r)
        }, e
      }(Qn), vr = new dr(xn), br = Yn.empty = function (t) {
        return gn(t) || (t = xn), t === xn ? vr : new dr(t)
      }, _r = function (t) {
        function e(e, n, r) {
          this._iterable = e, this._fn = n, this._scheduler = r, t.call(this)
        }

        function n(t, e, n) {
          return function (r, o) {
            var i = oe(e.next).call(e);
            if (i === re)return t.onError(i.e);
            if (i.done)return t.onCompleted();
            var u = i.value;
            return ne(n) && (u = oe(n)(u, r), u === re) ? t.onError(u.e) : (t.onNext(u), void o(r + 1))
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = Object(this._iterable), r = R(e);
          return this._scheduler.scheduleRecursive(0, n(t, r, this._fn))
        }, e
      }(Qn), mr = Math.pow(2, 53) - 1;
      k.prototype[be] = function () {
        return new S(this._s)
      }, S.prototype[be] = function () {
        return this
      }, S.prototype.next = function () {
        return this._i < this._l ? {done: !1, value: this._s.charAt(this._i++)} : _e
      }, T.prototype[be] = function () {
        return new j(this._a)
      }, j.prototype[be] = function () {
        return this
      }, j.prototype.next = function () {
        return this._i < this._l ? {done: !1, value: this._a[this._i++]} : _e
      };
      var yr = Yn.from = function (t, e, n, r) {
        if (null == t)throw new Error("iterable cannot be null.");
        if (e && !ne(e))throw new Error("mapFn when provided must be a function");
        if (e)var o = Ee(e, n, 2);
        return gn(r) || (r = Nn), new _r(t, o, r)
      }, Er = function (t) {
        function e(e, n) {
          this._args = e, this._scheduler = n, t.call(this)
        }

        function n(t, e) {
          var n = e.length;
          return function (r, o) {
            n > r ? (t.onNext(e[r]), o(r + 1)) : t.onCompleted()
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._scheduler.scheduleRecursive(0, n(t, this._args))
        }, e
      }(Qn), Ar = Yn.fromArray = function (t, e) {
        return gn(e) || (e = Nn), new Er(t, e)
      }, gr = function (t) {
        function e(e, n, r, o, i) {
          this._state = e, this._cndFn = n, this._itrFn = r, this._resFn = o, this._s = i, this._first = !0, t.call(this)
        }

        function n(t, e) {
          if (t._first)t._first = !1; else if (t._state = oe(t._itrFn)(t._state), t._state === re)return t._o.onError(t._state.e);
          var n = oe(t._cndFn)(t._state);
          if (n === re)return t._o.onError(n.e);
          if (n) {
            var r = oe(t._resFn)(t._state);
            if (r === re)return t._o.onError(r.e);
            t._o.onNext(r), e(t)
          } else t._o.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._o = t, this._s.scheduleRecursive(this, n)
        }, e
      }(Qn);
      Yn.generate = function (t, e, n, r, o) {
        return gn(o) || (o = Nn), new gr(t, e, n, r, o)
      }, Yn.of = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return new Er(e, Nn)
      }, Yn.ofWithScheduler = function (t) {
        for (var e = arguments.length, n = new Array(e - 1), r = 1; e > r; r++)n[r - 1] = arguments[r];
        return new Er(n, t)
      }, Yn.ofArrayChanges = function (t) {
        if (!Array.isArray(t))throw new TypeError("Array.observe only accepts arrays.");
        if ("function" != typeof Array.observe && "function" != typeof Array.unobserve)throw new TypeError("Array.observe is not supported on your platform");
        return new Du(function (e) {
          function n(t) {
            for (var n = 0, r = t.length; r > n; n++)e.onNext(t[n])
          }

          return Array.observe(t, n), function () {
            Array.unobserve(t, n)
          }
        })
      }, Yn.ofObjectChanges = function (t) {
        if (null == t)throw new TypeError("object must not be null or undefined.");
        if ("function" != typeof Object.observe && "function" != typeof Object.unobserve)throw new TypeError("Object.observe is not supported on your platform");
        return new Du(function (e) {
          function n(t) {
            for (var n = 0, r = t.length; r > n; n++)e.onNext(t[n])
          }

          return Object.observe(t, n), function () {
            Object.unobserve(t, n)
          }
        })
      };
      var wr = function (t) {
        function e() {
          t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return hn
        }, e
      }(Qn), Cr = new wr, Dr = Yn.never = function () {
        return Cr
      }, Fr = function (t) {
        function e(e, n) {
          this._o = e, this._keys = Object.keys(e), this._scheduler = n, t.call(this)
        }

        function n(t, e, n) {
          return function (r, o) {
            if (r < n.length) {
              var i = n[r];
              t.onNext([i, e[i]]), o(r + 1)
            } else t.onCompleted()
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._scheduler.scheduleRecursive(0, n(t, this._o, this._keys))
        }, e
      }(Qn);
      Yn.pairs = function (t, e) {
        return e || (e = Nn), new Fr(t, e)
      };
      var xr = function (t) {
        function e(e, n, r) {
          this.start = e, this.rangeCount = n, this.scheduler = r, t.call(this)
        }

        function n(t, e, n) {
          return function (r, o) {
            e > r ? (n.onNext(t + r), o(r + 1)) : n.onCompleted()
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.scheduler.scheduleRecursive(0, n(this.start, this.rangeCount, t))
        }, e
      }(Qn);
      Yn.range = function (t, e, n) {
        return gn(n) || (n = Nn), new xr(t, e, n)
      };
      var Br = function (t) {
        function e(e, n, r) {
          this.value = e, this.repeatCount = null == n ? -1 : n, this.scheduler = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new V(t, this);
          return e.run()
        }, e
      }(Qn);
      V.prototype.run = function () {
        function t(t, r) {
          return (-1 === t || t > 0) && (e.onNext(n), t > 0 && t--), 0 === t ? e.onCompleted() : void r(t)
        }

        var e = this.observer, n = this.parent.value;
        return this.parent.scheduler.scheduleRecursive(this.parent.repeatCount, t)
      }, Yn.repeat = function (t, e, n) {
        return gn(n) || (n = Nn), new Br(t, e, n)
      };
      var Nr = function (t) {
        function e(e, n) {
          this._value = e, this._scheduler = n, t.call(this)
        }

        function n(t, e) {
          var n = e[0], r = e[1];
          return r.onNext(n), r.onCompleted(), hn
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = [this._value, t];
          return this._scheduler === xn ? n(null, e) : this._scheduler.schedule(e, n)
        }, e
      }(Qn), Or = (Yn["return"] = Yn.just = function (t, e) {
        return gn(e) || (e = xn), new Nr(t, e)
      }, function (t) {
        function e(e, n) {
          this._error = e, this._scheduler = n, t.call(this)
        }

        function n(t, e) {
          var n = e[0], r = e[1];
          return r.onError(n), hn
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = [this._error, t];
          return this._scheduler === xn ? n(null, e) : this._scheduler.schedule(e, n)
        }, e
      }(Qn)), kr = Yn["throw"] = function (t, e) {
        return gn(e) || (e = xn), new Or(t, e)
      }, Sr = function (t) {
        function e(e, n) {
          this._resFn = e, this._obsFn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = hn, n = oe(this._resFn)();
          if (n === re)return new bn(kr(n.e).subscribe(t), e);
          n && (e = n);
          var r = oe(this._obsFn)(n);
          return r === re ? new bn(kr(r.e).subscribe(t), e) : new bn(r.subscribe(t), e)
        }, e
      }(Qn);
      Yn.using = function (t, e) {
        return new Sr(t, e)
      }, Hn.amb = function (t) {
        var e = this;
        return new Du(function (n) {
          function r() {
            i || (i = u, a.dispose())
          }

          function o() {
            i || (i = s, c.dispose())
          }

          var i, u = "L", s = "R", c = new dn, a = new dn;
          ee(t) && (t = hr(t));
          var h = Un(function (t) {
            r(), i === u && n.onNext(t)
          }, function (t) {
            r(), i === u && n.onError(t)
          }, function () {
            r(), i === u && n.onCompleted()
          }), l = Un(function (t) {
            o(), i === s && n.onNext(t)
          }, function (t) {
            o(), i === s && n.onError(t)
          }, function () {
            o(), i === s && n.onCompleted()
          });
          return c.setDisposable(e.subscribe(h)), a.setDisposable(t.subscribe(l)), new bn(c, a)
        })
      }, Yn.amb = function () {
        var t, e = Dr();
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          var n = arguments.length;
          t = new Array(t);
          for (var r = 0; n > r; r++)t[r] = arguments[r]
        }
        for (var r = 0, n = t.length; n > r; r++)e = I(e, t[r]);
        return e
      };
      var Tr = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn, n = new vn;
          return n.setDisposable(e), e.setDisposable(this.source.subscribe(new jr(t, n, this._fn))), n
        }, e
      }(Qn), jr = function (t) {
        function e(e, n, r) {
          this._o = e, this._s = n, this._fn = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._o.onNext(t)
        }, e.prototype.completed = function () {
          return this._o.onCompleted()
        }, e.prototype.error = function (t) {
          var e = oe(this._fn)(t);
          if (e === re)return this._o.onError(e.e);
          ee(e) && (e = hr(e));
          var n = new dn;
          this._s.setDisposable(n), n.setDisposable(e.subscribe(this._o))
        }, e
      }(Xn);
      Hn["catch"] = function (t) {
        return ne(t) ? new Tr(this, t) : qr([this, t])
      };
      var qr = Yn["catch"] = function () {
        var t;
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          var e = arguments.length;
          t = new Array(e);
          for (var n = 0; e > n; n++)t[n] = arguments[n]
        }
        return ur(t).catchError()
      };
      Hn.combineLatest = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return Array.isArray(e[0]) ? e[0].unshift(this) : e.unshift(this), Mr.apply(this, e)
      };
      var Rr = function (t) {
        function e(e, n) {
          this._params = e, this._cb = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          for (var e = this._params.length, n = new Array(e), r = {
            hasValue: F(e, z),
            hasValueAll: !1,
            isDone: F(e, z),
            values: new Array(e)
          }, o = 0; e > o; o++) {
            var i = this._params[o], u = new dn;
            n[o] = u, ee(i) && (i = hr(i)), u.setDisposable(i.subscribe(new Lr(t, o, this._cb, r)))
          }
          return new _n(n)
        }, e
      }(Qn), Lr = function (t) {
        function e(e, n, r, o) {
          this._o = e, this._i = n, this._cb = r, this._state = o, t.call(this)
        }

        function n(t) {
          return function (e, n) {
            return n !== t
          }
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._state.values[this._i] = t, this._state.hasValue[this._i] = !0, this._state.hasValueAll || (this._state.hasValueAll = this._state.hasValue.every(Jt))) {
            var e = oe(this._cb).apply(null, this._state.values);
            if (e === re)return this._o.onError(e.e);
            this._o.onNext(e)
          } else this._state.isDone.filter(n(this._i)).every(Jt) && this._o.onCompleted()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._state.isDone[this._i] = !0, this._state.isDone.every(Jt) && this._o.onCompleted()
        }, e
      }(Xn), Mr = Yn.combineLatest = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : W;
        return Array.isArray(e[0]) && (e = e[0]), new Rr(e, r)
      };
      Hn.concat = function () {
        for (var t = [], e = 0, n = arguments.length; n > e; e++)t.push(arguments[e]);
        return t.unshift(this), Ir.apply(null, t)
      };
      var Pr = function (t) {
        function e(e, n) {
          this._s = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._s.o.onNext(t)
        }, e.prototype.error = function (t) {
          this._s.o.onError(t)
        }, e.prototype.completed = function () {
          this._s.i++, this._fn(this._s)
        }, e
      }(Xn), Vr = function (t) {
        function e(e) {
          this._sources = e, t.call(this)
        }

        function n(t, e) {
          if (!t.disposable.isDisposed) {
            if (t.i === t.sources.length)return t.o.onCompleted();
            var n = t.sources[t.i];
            ee(n) && (n = hr(n));
            var r = new dn;
            t.subscription.setDisposable(r), r.setDisposable(n.subscribe(new Pr(t, e)))
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn, r = an($t), o = {
            o: t,
            i: 0,
            subscription: e,
            disposable: r,
            sources: this._sources
          }, i = xn.scheduleRecursive(o, n);
          return new _n([e, r, i])
        }, e
      }(Qn), Ir = Yn.concat = function () {
        var t;
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          t = new Array(arguments.length);
          for (var e = 0, n = arguments.length; n > e; e++)t[e] = arguments[e]
        }
        return new Vr(t)
      };
      Hn.concatAll = function () {
        return this.merge(1)
      };
      var zr = function (t) {
        function e(e, n) {
          this.source = e, this.maxConcurrent = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new un;
          return e.add(this.source.subscribe(new Wr(t, this.maxConcurrent, e))), e
        }, e
      }(Qn), Wr = function (t) {
        function e(e, n, r) {
          this.o = e, this.max = n, this.g = r, this.done = !1, this.q = [], this.activeCount = 0, t.call(this)
        }

        function n(e, n) {
          this.parent = e, this.sad = n, t.call(this)
        }

        return tn(e, t), e.prototype.handleSubscribe = function (t) {
          var e = new dn;
          this.g.add(e), ee(t) && (t = hr(t)), e.setDisposable(t.subscribe(new n(this, e)))
        }, e.prototype.next = function (t) {
          this.activeCount < this.max ? (this.activeCount++, this.handleSubscribe(t)) : this.q.push(t)
        }, e.prototype.error = function (t) {
          this.o.onError(t)
        }, e.prototype.completed = function () {
          this.done = !0, 0 === this.activeCount && this.o.onCompleted()
        }, tn(n, t), n.prototype.next = function (t) {
          this.parent.o.onNext(t)
        }, n.prototype.error = function (t) {
          this.parent.o.onError(t)
        }, n.prototype.completed = function () {
          this.parent.g.remove(this.sad), this.parent.q.length > 0 ? this.parent.handleSubscribe(this.parent.q.shift()) : (this.parent.activeCount--, this.parent.done && 0 === this.parent.activeCount && this.parent.o.onCompleted())
        }, e
      }(Xn);
      Hn.merge = function (t) {
        return "number" != typeof t ? Ur(this, t) : new zr(this, t)
      };
      var Ur = Yn.merge = function () {
        var t, e, n = [], r = arguments.length;
        if (arguments[0])if (gn(arguments[0]))for (t = arguments[0], e = 1; r > e; e++)n.push(arguments[e]); else for (t = xn, e = 0; r > e; e++)n.push(arguments[e]); else for (t = xn, e = 1; r > e; e++)n.push(arguments[e]);
        return Array.isArray(n[0]) && (n = n[0]), P(t, n).mergeAll()
      }, Hr = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new un, n = new dn;
          return e.add(n), n.setDisposable(this.source.subscribe(new Xr(t, e))), e
        }, e
      }(Qn), Xr = function (t) {
        function e(e, n) {
          this.o = e, this.g = n, this.done = !1, t.call(this)
        }

        function n(e, n) {
          this.parent = e, this.sad = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = new dn;
          this.g.add(e), ee(t) && (t = hr(t)), e.setDisposable(t.subscribe(new n(this, e)))
        }, e.prototype.error = function (t) {
          this.o.onError(t)
        }, e.prototype.completed = function () {
          this.done = !0, 1 === this.g.length && this.o.onCompleted()
        }, tn(n, t), n.prototype.next = function (t) {
          this.parent.o.onNext(t)
        }, n.prototype.error = function (t) {
          this.parent.o.onError(t)
        }, n.prototype.completed = function () {
          this.parent.g.remove(this.sad), this.parent.done && 1 === this.parent.g.length && this.parent.o.onCompleted()
        }, e
      }(Xn);
      Hn.mergeAll = function () {
        return new Hr(this)
      };
      var Kr = Gt.CompositeError = function (t) {
        this.innerErrors = t, this.message = "This contains multiple errors. Check the innerErrors", Error.call(this)
      };
      Kr.prototype = Object.create(Error.prototype), Kr.prototype.name = "CompositeError";
      var Gr = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new un, n = new dn, r = {isStopped: !1, errors: [], o: t};
          return e.add(n), n.setDisposable(this.source.subscribe(new $r(e, r))), e
        }, e
      }(Qn), $r = function (t) {
        function e(e, n) {
          this._group = e, this._state = n, t.call(this)
        }

        function n(t, e) {
          0 === e.length ? t.onCompleted() : 1 === e.length ? t.onError(e[0]) : t.onError(new Kr(e))
        }

        function r(e, n, r) {
          this._inner = e, this._group = n, this._state = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = new dn;
          this._group.add(e), ee(t) && (t = hr(t)), e.setDisposable(t.subscribe(new r(e, this._group, this._state)))
        }, e.prototype.error = function (t) {
          this._state.errors.push(t), this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
        }, e.prototype.completed = function () {
          this._state.isStopped = !0, 1 === this._group.length && n(this._state.o, this._state.errors)
        }, tn(r, t), r.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, r.prototype.error = function (t) {
          this._state.errors.push(t), this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
        }, r.prototype.completed = function () {
          this._group.remove(this._inner), this._state.isStopped && 1 === this._group.length && n(this._state.o, this._state.errors)
        }, e
      }(Xn);
      Yn.mergeDelayError = function () {
        var t;
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          var e = arguments.length;
          t = new Array(e);
          for (var n = 0; e > n; n++)t[n] = arguments[n]
        }
        var r = P(null, t);
        return new Gr(r)
      }, Hn.onErrorResumeNext = function (t) {
        if (!t)throw new Error("Second observable is required");
        return Qr([this, t])
      };
      var Jr = function (t) {
        function e(e) {
          this.sources = e, t.call(this)
        }

        function n(t, e) {
          if (t.pos < t.sources.length) {
            var n = t.sources[t.pos++];
            ee(n) && (n = hr(n));
            var r = new dn;
            t.subscription.setDisposable(r), r.setDisposable(n.subscribe(new Yr(t, e)))
          } else t.o.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn, r = {pos: 0, subscription: e, o: t, sources: this.sources}, o = xn.scheduleRecursive(r, n);
          return new bn(e, o)
        }, e
      }(Qn), Yr = function (t) {
        function e(e, n) {
          this._state = e, this._recurse = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._state.o.onNext(t)
        }, e.prototype.error = function () {
          this._recurse(this._state)
        }, e.prototype.completed = function () {
          this._recurse(this._state)
        }, e
      }(Xn), Qr = Yn.onErrorResumeNext = function () {
        var t = [];
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          var e = arguments.length;
          t = new Array(e);
          for (var n = 0; e > n; n++)t[n] = arguments[n]
        }
        return new Jr(t)
      }, Zr = function (t) {
        function e(e, n) {
          this._s = e, this._o = ee(n) ? hr(n) : n, this._open = !1, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn;
          e.setDisposable(this._s.subscribe(new to(t, this))), ee(this._o) && (this._o = hr(this._o));
          var n = new dn;
          return n.setDisposable(this._o.subscribe(new eo(t, this, n))), new bn(e, n)
        }, e
      }(Qn), to = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._p._open && this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.onCompleted = function () {
          this._p._open && this._o.onCompleted()
        }, e
      }(Xn), eo = function (t) {
        function e(e, n, r) {
          this._o = e, this._p = n, this._r = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function () {
          this._p._open = !0, this._r.dispose()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.onCompleted = function () {
          this._r.dispose()
        }, e
      }(Xn);
      Hn.skipUntil = function (t) {
        return new Zr(this, t)
      };
      var no = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t, e) {
          this.o = t, this.inner = e, this.stopped = !1, this.latest = 0, this.hasLatest = !1, Xn.call(this)
        }

        function r(t, e) {
          this.parent = t, this.id = e, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn, r = this.source.subscribe(new n(t, e));
          return new bn(r, e)
        }, tn(n, Xn), n.prototype.next = function (t) {
          var e = new dn, n = ++this.latest;
          this.hasLatest = !0, this.inner.setDisposable(e), ee(t) && (t = hr(t)), e.setDisposable(t.subscribe(new r(this, n)))
        }, n.prototype.error = function (t) {
          this.o.onError(t)
        }, n.prototype.completed = function () {
          this.stopped = !0, !this.hasLatest && this.o.onCompleted()
        }, tn(r, Xn), r.prototype.next = function (t) {
          this.parent.latest === this.id && this.parent.o.onNext(t)
        }, r.prototype.error = function (t) {
          this.parent.latest === this.id && this.parent.o.onError(t)
        }, r.prototype.completed = function () {
          this.parent.latest === this.id && (this.parent.hasLatest = !1, this.parent.stopped && this.parent.o.onCompleted())
        }, e
      }(Qn);
      Hn["switch"] = Hn.switchLatest = function () {
        return new no(this)
      };
      var ro = function (t) {
        function e(e, n) {
          this.source = e, this.other = ee(n) ? hr(n) : n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return new bn(this.source.subscribe(t), this.other.subscribe(new oo(t)))
        }, e
      }(Qn), oo = function (t) {
        function e(e) {
          this._o = e, t.call(this)
        }

        return tn(e, t), e.prototype.next = function () {
          this._o.onCompleted()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.onCompleted = $t, e
      }(Xn);
      Hn.takeUntil = function (t) {
        return new ro(this, t)
      };
      var io = function (t) {
        function e(e, n, r) {
          this._s = e, this._ss = n, this._cb = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          for (var e = this._ss.length, n = {
            hasValue: F(e, z),
            hasValueAll: !1,
            values: new Array(e)
          }, r = this._ss.length, o = new Array(r + 1), i = 0; r > i; i++) {
            var u = this._ss[i], s = new dn;
            ee(u) && (u = hr(u)), s.setDisposable(u.subscribe(new uo(t, i, n))), o[i] = s
          }
          var c = new dn;
          return c.setDisposable(this._s.subscribe(new so(t, this._cb, n))), o[r] = c, new _n(o)
        }, e
      }(Qn), uo = function (t) {
        function e(e, n, r) {
          this._o = e, this._i = n, this._state = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._state.values[this._i] = t, this._state.hasValue[this._i] = !0, this._state.hasValueAll = this._state.hasValue.every(Jt)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = $t, e
      }(Xn), so = function (t) {
        function e(e, n, r) {
          this._o = e, this._cb = n, this._state = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = [t].concat(this._state.values);
          if (this._state.hasValueAll) {
            var n = oe(this._cb).apply(null, e);
            return n === re ? this._o.onError(n.e) : void this._o.onNext(n)
          }
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.withLatestFrom = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : W;
        return Array.isArray(e[0]) && (e = e[0]), new io(this, e, r)
      };
      var co = function (t) {
        function e(e, n) {
          this._s = e, this._cb = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          for (var e = this._s.length, n = new Array(e), r = F(e, z), o = F(e, U), i = 0; e > i; i++) {
            var u = this._s[i], s = new dn;
            n[i] = s, ee(u) && (u = hr(u)), s.setDisposable(u.subscribe(new ao(t, i, this, o, r)))
          }
          return new _n(n)
        }, e
      }(Qn), ao = function (t) {
        function e(e, n, r, o, i) {
          this._o = e, this._i = n, this._p = r, this._q = o, this._d = i, t.call(this)
        }

        function n(t) {
          return t.length > 0
        }

        function r(t) {
          return t.shift()
        }

        function o(t) {
          return function (e, n) {
            return n !== t
          }
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._q[this._i].push(t), this._q.every(n)) {
            var e = this._q.map(r), i = oe(this._p._cb).apply(null, e);
            if (i === re)return this._o.onError(i.e);
            this._o.onNext(i)
          } else this._d.filter(o(this._i)).every(Jt) && this._o.onCompleted()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._d[this._i] = !0, this._d.every(Jt) && this._o.onCompleted()
        }, e
      }(Xn);
      Hn.zip = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : W;
        Array.isArray(e[0]) && (e = e[0]);
        var o = this;
        return e.unshift(o), new co(e, r)
      }, Yn.zip = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        Array.isArray(e[0]) && (e = ne(e[1]) ? e[0].concat(e[1]) : e[0]);
        var r = e.shift();
        return r.zip.apply(r, e)
      };
      var ho = function (t) {
        function e(e, n) {
          this.sources = e, this._cb = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          for (var e = this.sources, n = e.length, r = new Array(n), o = {
            q: F(n, U),
            done: F(n, z),
            cb: this._cb,
            o: t
          }, i = 0; n > i; i++)!function (t) {
            var n = e[t], i = new dn;
            (ye(n) || me(n)) && (n = yr(n)), r[t] = i, i.setDisposable(n.subscribe(new lo(o, t)))
          }(i);
          return new _n(r)
        }, e
      }(Qn), lo = function (t) {
        function e(e, n) {
          this._s = e, this._i = n, t.call(this)
        }

        function n(t) {
          return t.length > 0
        }

        function r(t) {
          return t.shift()
        }

        function o(t) {
          return function (e, n) {
            return n !== t
          }
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._s.q[this._i].push(t), this._s.q.every(n)) {
            var e = this._s.q.map(r), i = oe(this._s.cb).apply(null, e);
            if (i === re)return this._s.o.onError(i.e);
            this._s.o.onNext(i)
          } else this._s.done.filter(o(this._i)).every(Jt) && this._s.o.onCompleted()
        }, e.prototype.error = function (t) {
          this._s.o.onError(t)
        }, e.prototype.completed = function () {
          this._s.done[this._i] = !0, this._s.done.every(Jt) && this._s.o.onCompleted()
        }, e
      }(Xn);
      Hn.zipIterable = function () {
        if (0 === arguments.length)throw new Error("invalid arguments");
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : W, o = this;
        return e.unshift(o), new ho(e, r)
      }, Hn.asObservable = function () {
        return new Du(H(this), this)
      }, Hn.bufferWithCount = function (t, e) {
        return "number" != typeof e && (e = t), this.windowWithCount(t, e).flatMap(X).filter(K)
      };
      var po = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new fo(t))
        }, e
      }(Qn), fo = function (t) {
        function e(e) {
          this._o = e, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          t.accept(this._o)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.dematerialize = function () {
        return new po(this)
      };
      var vo = function (t) {
        function e(e, n, r) {
          this.source = e, this.keyFn = n, this.comparer = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new bo(t, this.keyFn, this.comparer))
        }, e
      }(Qn), bo = function (t) {
        function e(e, n, r) {
          this.o = e, this.keyFn = n, this.comparer = r, this.hasCurrentKey = !1, this.currentKey = null, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e, n = t;
          return ne(this.keyFn) && (n = oe(this.keyFn)(t), n === re) ? this.o.onError(n.e) : this.hasCurrentKey && (e = oe(this.comparer)(this.currentKey, n), e === re) ? this.o.onError(e.e) : void(this.hasCurrentKey && e || (this.hasCurrentKey = !0, this.currentKey = n, this.o.onNext(t)))
        }, e.prototype.error = function (t) {
          this.o.onError(t)
        }, e.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Xn);
      Hn.distinctUntilChanged = function (t, e) {
        return e || (e = Qt), new vo(this, t, e)
      };
      var _o = function (t) {
        function e(e, n, r, o) {
          this.source = e, this._oN = n, this._oE = r, this._oC = o, t.call(this)
        }

        function n(t, e) {
          this.o = t, this.t = !e._oN || ne(e._oN) ? Un(e._oN || $t, e._oE || $t, e._oC || $t) : e._oN, this.isStopped = !1, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this))
        }, tn(n, Xn), n.prototype.next = function (t) {
          var e = oe(this.t.onNext).call(this.t, t);
          e === re && this.o.onError(e.e), this.o.onNext(t)
        }, n.prototype.error = function (t) {
          var e = oe(this.t.onError).call(this.t, t);
          return e === re ? this.o.onError(e.e) : void this.o.onError(t)
        }, n.prototype.completed = function () {
          var t = oe(this.t.onCompleted).call(this.t);
          return t === re ? this.o.onError(t.e) : void this.o.onCompleted()
        }, e
      }(Qn);
      Hn["do"] = Hn.tap = Hn.doAction = function (t, e, n) {
        return new _o(this, t, e, n)
      }, Hn.doOnNext = Hn.tapOnNext = function (t, e) {
        return this.tap("undefined" != typeof e ? function (n) {
          t.call(e, n)
        } : t)
      }, Hn.doOnError = Hn.tapOnError = function (t, e) {
        return this.tap($t, "undefined" != typeof e ? function (n) {
          t.call(e, n)
        } : t)
      }, Hn.doOnCompleted = Hn.tapOnCompleted = function (t, e) {
        return this.tap($t, null, "undefined" != typeof e ? function () {
          t.call(e)
        } : t)
      };
      var mo = function (t) {
        function e(e, n, r) {
          this.source = e, this._fn = Ee(n, r, 0), t.call(this)
        }

        function n(t, e) {
          this.isDisposed = !1, this._s = t, this._fn = e
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = oe(this.source.subscribe).call(this.source, t);
          return e === re && (this._fn(), h(e.e)), new n(e, this._fn)
        }, n.prototype.dispose = function () {
          if (!this.isDisposed) {
            var t = oe(this._s.dispose).call(this._s);
            this._fn(), t === re && h(t.e)
          }
        }, e
      }(Qn);
      Hn["finally"] = function (t, e) {
        return new mo(this, t, e)
      };
      var yo = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        function n(t) {
          this.o = t, this.isStopped = !1
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t))
        }, n.prototype.onNext = $t, n.prototype.onError = function (t) {
          this.isStopped || (this.isStopped = !0, this.o.onError(t))
        }, n.prototype.onCompleted = function () {
          this.isStopped || (this.isStopped = !0, this.o.onCompleted())
        }, n.prototype.dispose = function () {
          this.isStopped = !0
        }, n.prototype.fail = function (t) {
          return this.isStopped ? !1 : (this.isStopped = !0, this.observer.onError(t), !0)
        }, e
      }(Qn);
      Hn.ignoreElements = function () {
        return new yo(this)
      };
      var Eo = function (t) {
        function e(e, n) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Ao(t))
        }, e
      }(Qn), Ao = function (t) {
        function e(e) {
          this._o = e, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._o.onNext(Vn(t))
        }, e.prototype.error = function (t) {
          this._o.onNext(In(t)), this._o.onCompleted()
        }, e.prototype.completed = function () {
          this._o.onNext(zn()), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.materialize = function () {
        return new Eo(this)
      }, Hn.repeat = function (t) {
        return or(this, t).concat()
      }, Hn.retry = function (t) {
        return or(this, t).catchError()
      }, Hn.retryWhen = function (t) {
        return or(this).catchErrorWhen(t)
      };
      var go = function (t) {
        function e(e, n, r, o) {
          this.source = e, this.accumulator = n, this.hasSeed = r, this.seed = o, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new wo(t, this))
        }, e
      }(Qn), wo = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, this._fn = n.accumulator, this._hs = n.hasSeed, this._s = n.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          return !this._hv && (this._hv = !0), this._ha ? this._a = oe(this._fn)(this._a, t, this._i, this._p) : (this._a = this._hs ? oe(this._fn)(this._s, t, this._i, this._p) : t, this._ha = !0), this._a === re ? this._o.onError(this._a.e) : (this._o.onNext(this._a), void this._i++)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          !this._hv && this._hs && this._o.onNext(this._s), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.scan = function () {
        var t, e = !1, n = arguments[0];
        return 2 === arguments.length && (e = !0, t = arguments[1]), new go(this, n, e, t)
      };
      var Co = function (t) {
        function e(e, n) {
          this.source = e, this._c = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Do(t, this._c))
        }, e
      }(Qn), Do = function (t) {
        function e(e, n) {
          this._o = e, this._c = n, this._q = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._q.push(t), this._q.length > this._c && this._o.onNext(this._q.shift())
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.skipLast = function (t) {
        if (0 > t)throw new pe;
        return new Co(this, t)
      }, Hn.startWith = function () {
        var t, e = 0;
        arguments.length && gn(arguments[0]) ? (t = arguments[0], e = 1) : t = xn;
        for (var n = [], r = e, o = arguments.length; o > r; r++)n.push(arguments[r]);
        return ur([Ar(n, t), this]).concat()
      };
      var Fo = function (t) {
        function e(e, n) {
          this._o = e, this._c = n, this._q = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._q.push(t), this._q.length > this._c && this._q.shift()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          for (; this._q.length > 0;)this._o.onNext(this._q.shift());
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.takeLast = function (t) {
        if (0 > t)throw new pe;
        var e = this;
        return new Du(function (n) {
          return e.subscribe(new Fo(n, t))
        }, e)
      };
      var xo = function (t) {
        function e(e, n) {
          this._o = e, this._c = n, this._q = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._q.push(t), this._q.length > this._c && this._q.shift()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._q), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.takeLastBuffer = function (t) {
        if (0 > t)throw new pe;
        var e = this;
        return new Du(function (n) {
          return e.subscribe(new xo(n, t))
        }, e)
      }, Hn.windowWithCount = function (t, e) {
        var n = this;
        if (+t || (t = 0), Math.abs(t) === 1 / 0 && (t = 0), 0 >= t)throw new pe;
        if (null == e && (e = t), +e || (e = 0), Math.abs(e) === 1 / 0 && (e = 0), 0 >= e)throw new pe;
        return new Du(function (r) {
          function o() {
            var t = new Nu;
            c.push(t), r.onNext(nn(t, u))
          }

          var i = new dn, u = new mn(i), s = 0, c = [];
          return o(), i.setDisposable(n.subscribe(function (n) {
            for (var r = 0, i = c.length; i > r; r++)c[r].onNext(n);
            var u = s - t + 1;
            u >= 0 && u % e === 0 && c.shift().onCompleted(), ++s % e === 0 && o()
          }, function (t) {
            for (; c.length > 0;)c.shift().onError(t);
            r.onError(t)
          }, function () {
            for (; c.length > 0;)c.shift().onCompleted();
            r.onCompleted()
          })), u
        }, n)
      }, Hn.selectConcat = Hn.concatMap = function (t, e, n) {
        return ne(t) && ne(e) ? this.concatMap(function (n, r) {
          var o = t(n, r);
          return ee(o) && (o = hr(o)), (ye(o) || me(o)) && (o = yr(o)), o.map(function (t, o) {
            return e(n, t, r, o)
          })
        }) : ne(t) ? G(this, t, n) : G(this, function () {
          return t
        })
      }, Hn.concatMapObserver = Hn.selectConcatObserver = function (t, e, n, r) {
        var o = this, i = Ee(t, r, 2), u = Ee(e, r, 1), s = Ee(n, r, 0);
        return new Du(function (t) {
          var e = 0;
          return o.subscribe(function (n) {
            var r;
            try {
              r = i(n, e++)
            } catch (o) {
              return void t.onError(o)
            }
            ee(r) && (r = hr(r)), t.onNext(r)
          }, function (e) {
            var n;
            try {
              n = u(e)
            } catch (r) {
              return void t.onError(r)
            }
            ee(n) && (n = hr(n)), t.onNext(n), t.onCompleted()
          }, function () {
            var e;
            try {
              e = s()
            } catch (n) {
              return void t.onError(n)
            }
            ee(e) && (e = hr(e)), t.onNext(e), t.onCompleted()
          })
        }, this).concatAll()
      };
      var Bo = function (t) {
        function e(e, n) {
          this._o = e, this._d = n, this._f = !1, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._f = !0, this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          !this._f && this._o.onNext(this._d), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.defaultIfEmpty = function (t) {
        var e = this;
        return t === u && (t = null), new Du(function (n) {
          return e.subscribe(new Bo(n, t))
        }, e)
      }, J.prototype.push = function (t) {
        var e = -1 === $(this.set, t, this.comparer);
        return e && this.set.push(t), e
      };
      var No = function (t) {
        function e(e, n, r) {
          this.source = e, this._keyFn = n, this._cmpFn = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Oo(t, this._keyFn, this._cmpFn))
        }, e
      }(Qn), Oo = function (t) {
        function e(e, n, r) {
          this._o = e, this._keyFn = n, this._h = new J(r), t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = t;
          return ne(this._keyFn) && (e = oe(this._keyFn)(t), e === re) ? this._o.onError(e.e) : void(this._h.push(e) && this._o.onNext(t))
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.distinct = function (t, e) {
        return e || (e = Qt), new No(this, t, e)
      }, Hn.groupBy = function (t, e) {
        return this.groupByUntil(t, e, Dr)
      }, Hn.groupByUntil = function (t, e, n) {
        var r = this;
        return new Du(function (o) {
          var i = new Hi, s = new un, c = new mn(s), a = function (t) {
            return function (e) {
              e.onError(t)
            }
          };
          return s.add(r.subscribe(function (r) {
            var h = oe(t)(r);
            if (h === re)return i.forEach(a(h.e)), o.onError(h.e);
            var l = !1, p = i.get(h);
            if (p === u && (p = new Nu, i.set(h, p), l = !0), l) {
              var f = new Bu(h, p, c), d = new Bu(h, p), v = oe(n)(d);
              if (v === re)return i.forEach(a(v.e)), o.onError(v.e);
              o.onNext(f);
              var b = new dn;
              s.add(b), b.setDisposable(v.take(1).subscribe($t, function (t) {
                i.forEach(a(t)), o.onError(t)
              }, function () {
                i["delete"](h) && p.onCompleted(), s.remove(b)
              }))
            }
            var _ = r;
            return ne(e) && (_ = oe(e)(r), _ === re) ? (i.forEach(a(_.e)), o.onError(_.e)) : void p.onNext(_)
          }, function (t) {
            i.forEach(a(t)), o.onError(t)
          }, function () {
            i.forEach(function (t) {
              t.onCompleted()
            }), o.onCompleted()
          })), c
        }, r)
      };
      var ko = function (t) {
        function e(e, n, r) {
          this.source = e, this.selector = Ee(n, r, 3), t.call(this)
        }

        function n(t, e) {
          return function (n, r, o) {
            return t.call(this, e.selector(n, r, o), r, o)
          }
        }

        function r(t, e, n) {
          this.o = t, this.selector = e, this.source = n, this.i = 0, Xn.call(this)
        }

        return tn(e, t), e.prototype.internalMap = function (t, r) {
          return new e(this.source, n(t, this), r)
        }, e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new r(t, this.selector, this))
        }, tn(r, Xn), r.prototype.next = function (t) {
          var e = oe(this.selector)(t, this.i++, this.source);
          return e === re ? this.o.onError(e.e) : void this.o.onNext(e)
        }, r.prototype.error = function (t) {
          this.o.onError(t)
        }, r.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Qn);
      Hn.map = Hn.select = function (t, e) {
        var n = "function" == typeof t ? t : function () {
          return t
        };
        return this instanceof ko ? this.internalMap(n, e) : new ko(this, n, e)
      }, Hn.pluck = function () {
        var t = arguments.length, e = new Array(t);
        if (0 === t)throw new Error("List of properties cannot be empty.");
        for (var n = 0; t > n; n++)e[n] = arguments[n];
        return this.map(Y(e, t))
      }, Hn.flatMap = Hn.selectMany = function (t, e, n) {
        return new Zn(this, t, e, n).mergeAll()
      }, Hn.flatMapObserver = Hn.selectManyObserver = function (t, e, n, r) {
        var o = this;
        return new Du(function (i) {
          var u = 0;
          return o.subscribe(function (e) {
            var n;
            try {
              n = t.call(r, e, u++)
            } catch (o) {
              return void i.onError(o)
            }
            ee(n) && (n = hr(n)), i.onNext(n)
          }, function (t) {
            var n;
            try {
              n = e.call(r, t)
            } catch (o) {
              return void i.onError(o)
            }
            ee(n) && (n = hr(n)), i.onNext(n), i.onCompleted()
          }, function () {
            var t;
            try {
              t = n.call(r)
            } catch (e) {
              return void i.onError(e)
            }
            ee(t) && (t = hr(t)), i.onNext(t), i.onCompleted()
          })
        }, o).mergeAll()
      }, Gt.Observable.prototype.flatMapLatest = function (t, e, n) {
        return new Zn(this, t, e, n).switchLatest()
      };
      var So = function (t) {
        function e(e, n) {
          this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
          this._o = t, this._r = e, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this._count))
        }, tn(n, Xn), n.prototype.next = function (t) {
          this._r <= 0 ? this._o.onNext(t) : this._r--
        }, n.prototype.error = function (t) {
          this._o.onError(t)
        }, n.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Qn);
      Hn.skip = function (t) {
        if (0 > t)throw new pe;
        return new So(this, t)
      };
      var To = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new jo(t, this))
        }, e
      }(Qn), jo = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, this._i = 0, this._r = !1, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (!this._r) {
            var e = oe(this._p._fn)(t, this._i++, this._p);
            if (e === re)return this._o.onError(e.e);
            this._r = !e
          }
          this._r && this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.skipWhile = function (t, e) {
        var n = Ee(t, e, 3);
        return new To(this, n)
      };
      var qo = function (t) {
        function e(e, n) {
          this.source = e, this._count = n, t.call(this)
        }

        function n(t, e) {
          this._o = t, this._c = e, this._r = e, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new n(t, this._count))
        }, tn(n, Xn), n.prototype.next = function (t) {
          this._r-- > 0 && (this._o.onNext(t), this._r <= 0 && this._o.onCompleted())
        }, n.prototype.error = function (t) {
          this._o.onError(t)
        }, n.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Qn);
      Hn.take = function (t, e) {
        if (0 > t)throw new pe;
        return 0 === t ? br(e) : new qo(this, t)
      };
      var Ro = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Lo(t, this))
        }, e
      }(Qn), Lo = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, this._i = 0, this._r = !0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          return this._r && (this._r = oe(this._p._fn)(t, this._i++, this._p), this._r === re) ? this._o.onError(this._r.e) : void(this._r ? this._o.onNext(t) : this._o.onCompleted())
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.takeWhile = function (t, e) {
        var n = Ee(t, e, 3);
        return new Ro(this, n)
      };
      var Mo = function (t) {
        function e(e, n, r) {
          this.source = e, this.predicate = Ee(n, r, 3), t.call(this)
        }

        function n(t, e) {
          return function (n, r, o) {
            return e.predicate(n, r, o) && t.call(this, n, r, o)
          }
        }

        function r(t, e, n) {
          this.o = t, this.predicate = e, this.source = n, this.i = 0, Xn.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new r(t, this.predicate, this))
        }, e.prototype.internalFilter = function (t, r) {
          return new e(this.source, n(t, this), r)
        }, tn(r, Xn), r.prototype.next = function (t) {
          var e = oe(this.predicate)(t, this.i++, this.source);
          return e === re ? this.o.onError(e.e) : void(e && this.o.onNext(t))
        }, r.prototype.error = function (t) {
          this.o.onError(t)
        }, r.prototype.completed = function () {
          this.o.onCompleted()
        }, e
      }(Qn);
      Hn.filter = Hn.where = function (t, e) {
        return this instanceof Mo ? this.internalFilter(t, e) : new Mo(this, t, e)
      };
      var Po = function (t) {
        function e(e, n, r) {
          this.source = e, this._k = n, this._c = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Vo(t, this._k, this._c))
        }, e
      }(Qn), Vo = function (t) {
        function e(e, n, r) {
          this._o = e, this._k = n, this._c = r, this._v = null, this._hv = !1, this._l = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._k)(t);
          if (e === re)return this._o.onError(e.e);
          var n = 0;
          if (this._hv) {
            if (n = oe(this._c)(e, this._v), n === re)return this._o.onError(n.e)
          } else this._hv = !0, this._v = e;
          n > 0 && (this._v = e, this._l = []), n >= 0 && this._l.push(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._l), this._o.onCompleted()
        }, e
      }(Xn), Io = function (t) {
        function e(e, n, r, o) {
          this.source = e, this.accumulator = n, this.hasSeed = r, this.seed = o, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new zo(t, this))
        }, e
      }(Qn), zo = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, this._fn = n.accumulator, this._hs = n.hasSeed, this._s = n.seed, this._ha = !1, this._a = null, this._hv = !1, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          return !this._hv && (this._hv = !0), this._ha ? this._a = oe(this._fn)(this._a, t, this._i, this._p) : (this._a = this._hs ? oe(this._fn)(this._s, t, this._i, this._p) : t, this._ha = !0), this._a === re ? this._o.onError(this._a.e) : void this._i++
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._hv && this._o.onNext(this._a), !this._hv && this._hs && this._o.onNext(this._s), !this._hv && !this._hs && this._o.onError(new he), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.reduce = function () {
        var t, e = !1, n = arguments[0];
        return 2 === arguments.length && (e = !0, t = arguments[1]), new Io(this, n, e, t)
      };
      var Wo = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Uo(t, this._fn, this.source))
        }, e
      }(Qn), Uo = function (t) {
        function e(e, n, r) {
          this._o = e, this._fn = n, this._s = r, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._fn)(t, this._i++, this._s);
          return e === re ? this._o.onError(e.e) : void(Boolean(e) && (this._o.onNext(!0), this._o.onCompleted()))
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(!1), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.some = function (t, e) {
        var n = Ee(t, e, 3);
        return new Wo(this, n)
      };
      var Ho = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Xo(t))
        }, e
      }(Qn), Xo = function (t) {
        function e(e) {
          this._o = e, t.call(this)
        }

        return tn(e, t), e.prototype.next = function () {
          this._o.onNext(!1), this._o.onCompleted()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(!0), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.isEmpty = function () {
        return new Ho(this)
      };
      var Ko = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Go(t, this._fn, this.source))
        }, e
      }(Qn), Go = function (t) {
        function e(e, n, r) {
          this._o = e, this._fn = n, this._s = r, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._fn)(t, this._i++, this._s);
          return e === re ? this._o.onError(e.e) : void(Boolean(e) || (this._o.onNext(!1), this._o.onCompleted()))
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(!0), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.every = function (t, e) {
        var n = Ee(t, e, 3);
        return new Ko(this, n)
      };
      var $o = function (t) {
        function e(e, n, r) {
          var o = +r || 0;
          Math.abs(o) === 1 / 0 && (o = 0), this.source = e, this._elem = n, this._n = o, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._n < 0 ? (t.onNext(!1), t.onCompleted(), hn) : this.source.subscribe(new Jo(t, this._elem, this._n))
        }, e
      }(Qn), Jo = function (t) {
        function e(e, n, r) {
          this._o = e, this._elem = n, this._n = r, this._i = 0, t.call(this)
        }

        function n(t, e) {
          return 0 === t && 0 === e || t === e || isNaN(t) && isNaN(e)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._i++ >= this._n && n(t, this._elem) && (this._o.onNext(!0), this._o.onCompleted())
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(!1), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.includes = function (t, e) {
        return new $o(this, t, e)
      };
      var Yo = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Qo(t, this._fn, this.source))
        }, e
      }(Qn), Qo = function (t) {
        function e(e, n, r) {
          this._o = e, this._fn = n, this._s = r, this._i = 0, this._c = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._fn) {
            var e = oe(this._fn)(t, this._i++, this._s);
            if (e === re)return this._o.onError(e.e);
            Boolean(e) && this._c++
          } else this._c++
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._c), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.count = function (t, e) {
        var n = Ee(t, e, 3);
        return new Yo(this, n)
      };
      var Zo = function (t) {
        function e(e, n, r) {
          this.source = e, this._e = n, this._n = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._n < 0 ? (t.onNext(-1), t.onCompleted(), hn) : this.source.subscribe(new ti(t, this._e, this._n))
        }, e
      }(Qn), ti = function (t) {
        function e(e, n, r) {
          this._o = e, this._e = n, this._n = r, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._i >= this._n && t === this._e && (this._o.onNext(this._i), this._o.onCompleted()), this._i++
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(-1), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.indexOf = function (t, e) {
        var n = +e || 0;
        return Math.abs(n) === 1 / 0 && (n = 0), new Zo(this, t, n)
      };
      var ei = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new ni(t, this._fn, this.source))
        }, e
      }(Qn), ni = function (t) {
        function e(e, n, r) {
          this._o = e, this._fn = n, this._s = r, this._i = 0, this._c = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._fn) {
            var e = oe(this._fn)(t, this._i++, this._s);
            if (e === re)return this._o.onError(e.e);
            this._c += e
          } else this._c += t
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._c), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.sum = function (t, e) {
        var n = Ee(t, e, 3);
        return new ei(this, n)
      }, Hn.minBy = function (t, e) {
        return e || (e = Zt), new Po(this, t, function (t, n) {
          return -1 * e(t, n)
        })
      }, Hn.min = function (t) {
        return this.minBy(Jt, t).map(function (t) {
          return Q(t)
        })
      }, Hn.maxBy = function (t, e) {
        return e || (e = Zt), new Po(this, t, e)
      }, Hn.max = function (t) {
        return this.maxBy(Jt, t).map(function (t) {
          return Q(t)
        })
      };
      var ri = function (t) {
        function e(e, n) {
          this.source = e, this._fn = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new oi(t, this._fn, this.source))
        }, e
      }(Qn), oi = function (t) {
        function e(e, n, r) {
          this._o = e, this._fn = n, this._s = r, this._c = 0, this._t = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._fn) {
            var e = oe(this._fn)(t, this._c++, this._s);
            if (e === re)return this._o.onError(e.e);
            this._t += e
          } else this._c++, this._t += t
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          return 0 === this._c ? this._o.onError(new he) : (this._o.onNext(this._t / this._c), void this._o.onCompleted())
        }, e
      }(Xn);
      Hn.average = function (t, e) {
        var n, r = this;
        return ne(t) && (n = Ee(t, e, 3)), new ri(r, n)
      }, Hn.sequenceEqual = function (t, e) {
        var n = this;
        return e || (e = Qt), new Du(function (r) {
          var o = !1, i = !1, u = [], s = [], c = n.subscribe(function (t) {
            if (s.length > 0) {
              var n = s.shift(), o = oe(e)(n, t);
              if (o === re)return r.onError(o.e);
              o || (r.onNext(!1), r.onCompleted())
            } else i ? (r.onNext(!1), r.onCompleted()) : u.push(t)
          }, function (t) {
            r.onError(t)
          }, function () {
            o = !0, 0 === u.length && (s.length > 0 ? (r.onNext(!1), r.onCompleted()) : i && (r.onNext(!0), r.onCompleted()))
          });
          (ye(t) || me(t)) && (t = yr(t)), ee(t) && (t = hr(t));
          var a = t.subscribe(function (t) {
            if (u.length > 0) {
              var n = u.shift(), i = oe(e)(n, t);
              if (i === re)return r.onError(i.e);
              i || (r.onNext(!1), r.onCompleted())
            } else o ? (r.onNext(!1), r.onCompleted()) : s.push(t)
          }, function (t) {
            r.onError(t)
          }, function () {
            i = !0, 0 === s.length && (u.length > 0 ? (r.onNext(!1), r.onCompleted()) : o && (r.onNext(!0), r.onCompleted()))
          });
          return new bn(c, a)
        }, n)
      };
      var ii = function (t) {
        function e(e, n, r) {
          this.source = e, this._i = n, this._d = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new ui(t, this._i, this._d))
        }, e
      }(Qn), ui = function (t) {
        function e(e, n, r) {
          this._o = e, this._i = n, this._d = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          0 === this._i-- && (this._o.onNext(t), this._o.onCompleted())
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._d === u ? this._o.onError(new pe) : (this._o.onNext(this._d), this._o.onCompleted())
        }, e
      }(Xn);
      Hn.elementAt = function (t, e) {
        if (0 > t)throw new pe;
        return new ii(this, t, e)
      };
      var si = function (t) {
        function e(e, n, r) {
          this._o = e, this._obj = n, this._s = r, this._i = 0, this._hv = !1, this._v = null, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = !1;
          if (this._obj.predicate) {
            var n = oe(this._obj.predicate)(t, this._i++, this._s);
            if (n === re)return this._o.onError(n.e);
            Boolean(n) && (e = !0)
          } else this._obj.predicate || (e = !0);
          if (e) {
            if (this._hv)return this._o.onError(new Error("Sequence contains more than one matching element"));
            this._hv = !0, this._v = t
          }
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === u ? this._o.onError(new he) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, e
      }(Xn);
      Hn.single = function (t, e) {
        var n = {}, r = this;
        if (n = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(n.predicate)) {
          var o = n.predicate;
          n.predicate = Ee(o, n.thisArg, 3)
        }
        return new Du(function (t) {
          return r.subscribe(new si(t, n, r))
        }, r)
      };
      var ci = function (t) {
        function e(e, n) {
          this.source = e, this._obj = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new ai(t, this._obj, this.source))
        }, e
      }(Qn), ai = function (t) {
        function e(e, n, r) {
          this._o = e, this._obj = n, this._s = r, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (this._obj.predicate) {
            var e = oe(this._obj.predicate)(t, this._i++, this._s);
            if (e === re)return this._o.onError(e.e);
            Boolean(e) && (this._o.onNext(t), this._o.onCompleted())
          } else this._obj.predicate || (this._o.onNext(t), this._o.onCompleted())
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._obj.defaultValue === u ? this._o.onError(new he) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, e
      }(Xn);
      Hn.first = function () {
        var t = {};
        if (t = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(t.predicate)) {
          var e = t.predicate;
          t.predicate = Ee(e, t.thisArg, 3)
        }
        return new ci(this, t)
      };
      var hi = function (t) {
        function e(e, n) {
          this.source = e, this._obj = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new li(t, this._obj, this.source))
        }, e
      }(Qn), li = function (t) {
        function e(e, n, r) {
          this._o = e, this._obj = n, this._s = r, this._i = 0, this._hv = !1, this._v = null, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = !1;
          if (this._obj.predicate) {
            var n = oe(this._obj.predicate)(t, this._i++, this._s);
            if (n === re)return this._o.onError(n.e);
            Boolean(n) && (e = !0)
          } else this._obj.predicate || (e = !0);
          e && (this._hv = !0, this._v = t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._hv ? (this._o.onNext(this._v), this._o.onCompleted()) : this._obj.defaultValue === u ? this._o.onError(new he) : (this._o.onNext(this._obj.defaultValue), this._o.onCompleted())
        }, e
      }(Xn);
      Hn.last = function () {
        var t = {};
        if (t = "object" == typeof arguments[0] ? arguments[0] : {
            predicate: arguments[0],
            thisArg: arguments[1],
            defaultValue: arguments[2]
          }, ne(t.predicate)) {
          var e = t.predicate;
          t.predicate = Ee(e, t.thisArg, 3)
        }
        return new hi(this, t)
      };
      var pi = function (t) {
        function e(e, n, r, o) {
          this._o = e, this._s = n, this._cb = r, this._y = o, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._cb)(t, this._i, this._s);
          return e === re ? this._o.onError(e.e) : void(e ? (this._o.onNext(this._y ? this._i : t), this._o.onCompleted()) : this._i++)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._y && this._o.onNext(-1), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.find = function (t, e) {
        return Z(this, t, e, !1)
      }, Hn.findIndex = function (t, e) {
        return Z(this, t, e, !0)
      };
      var fi = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new di(t))
        }, e
      }(Qn), di = function (t) {
        function e(e) {
          this._o = e, this._s = new Kt.Set, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._s.add(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._s), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.toSet = function () {
        if ("undefined" == typeof Kt.Set)throw new TypeError;
        return new fi(this)
      };
      var vi = function (t) {
        function e(e, n, r) {
          this.source = e, this._k = n, this._e = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new bi(t, this._k, this._e))
        }, e
      }(Qn), bi = function (t) {
        function e(e, n, r) {
          this._o = e, this._k = n, this._e = r, this._m = new Kt.Map, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._k)(t);
          if (e === re)return this._o.onError(e.e);
          var n = t;
          return this._e && (n = oe(this._e)(t), n === re) ? this._o.onError(n.e) : void this._m.set(e, n)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onNext(this._m), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.toMap = function (t, e) {
        if ("undefined" == typeof Kt.Map)throw new TypeError;
        return new vi(this, t, e)
      };
      var _i = function (t) {
        function e(e, n, r) {
          this.source = e, this._b = n, this._e = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new mi(t, this._b, this._e))
        }, e
      }(Qn), mi = function (t) {
        function e(e, n, r) {
          this._o = e, this._b = n, this._e = r, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._i >= this._b && (this._e === this._i ? this._o.onCompleted() : this._o.onNext(t)), this._i++
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.slice = function (t, e) {
        var n = t || 0;
        if (0 > n)throw new Gt.ArgumentOutOfRangeError;
        if ("number" == typeof e && n > e)throw new Gt.ArgumentOutOfRangeError;
        return new _i(this, n, e)
      };
      var yi = function (t) {
        function e(e, n, r) {
          this.source = e, this._e = n, this._n = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._n < 0 ? (t.onNext(-1), t.onCompleted(), hn) : this.source.subscribe(new Ei(t, this._e, this._n))
        }, e
      }(Qn), Ei = function (t) {
        function e(e, n, r) {
          this._o = e, this._e = n, this._n = r, this._v = 0, this._hv = !1, this._i = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._i >= this._n && t === this._e && (this._hv = !0, this._v = this._i), this._i++
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._hv ? this._o.onNext(this._v) : this._o.onNext(-1), this._o.onCompleted()
        }, e
      }(Xn);
      Hn.lastIndexOf = function (t, e) {
        var n = +e || 0;
        return Math.abs(n) === 1 / 0 && (n = 0), new yi(this, t, n)
      }, Yn.wrap = function (t) {
        function e() {
          return Yn.spawn.call(this, t.apply(this, arguments))
        }

        return e.__generatorFunction__ = t, e
      };
      var Ai = Yn.spawn = function () {
        for (var t = arguments[0], e = this, n = [], r = 1, o = arguments.length; o > r; r++)n.push(arguments[r]);
        return new Du(function (r) {
          function o(e) {
            var n = oe(t.next).call(t, e);
            return n === re ? r.onError(n.e) : void u(n)
          }

          function i(e) {
            var n = oe(t.next).call(t, e);
            return n === re ? r.onError(n.e) : void u(n)
          }

          function u(t) {
            if (t.done)return r.onNext(t.value), void r.onCompleted();
            var n = tt.call(e, t.value), u = null, c = !1;
            Yn.isObservable(n) ? s.add(n.subscribe(function (t) {
              c = !0, u = t
            }, i, function () {
              c && o(u)
            })) : i(new TypeError("type not supported"))
          }

          var s = new un;
          return ne(t) && (t = t.apply(e, n)), t && ne(t.next) ? (o(), s) : (r.onNext(t), r.onCompleted())
        })
      };
      Yn.start = function (t, e, n) {
        return gi(t, e, n)()
      };
      var gi = Yn.toAsync = function (t, e, n) {
        return gn(n) || (n = jn), function () {
          var r = arguments, o = new Ou;
          return n.schedule(null, function () {
            var n;
            try {
              n = t.apply(e, r)
            } catch (i) {
              return void o.onError(i)
            }
            o.onNext(n), o.onCompleted()
          }), o.asObservable()
        }
      };
      Yn.fromCallback = function (t, e, n) {
        return function () {
          "undefined" == typeof e && (e = this);
          for (var r = arguments.length, o = new Array(r), i = 0; r > i; i++)o[i] = arguments[i];
          return st(t, e, n, o)
        }
      }, Yn.fromNodeCallback = function (t, e, n) {
        return function () {
          "undefined" == typeof e && (e = this);
          for (var r = arguments.length, o = new Array(r), i = 0; r > i; i++)o[i] = arguments[i];
          return at(t, e, n, o)
        }
      }, pt.prototype.dispose = function () {
        this.isDisposed || (this._e.removeEventListener(this._n, this._fn, !1), this.isDisposed = !0)
      }, Gt.config.useNativeEvents = !1;
      var wi = function (t) {
        function e(e, n, r) {
          this._el = e, this._n = n, this._fn = r, t.call(this)
        }

        function n(t, e) {
          return function () {
            var n = arguments[0];
            return ne(e) && (n = oe(e).apply(null, arguments),
            n === re) ? t.onError(n.e) : void t.onNext(n)
          }
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return ft(this._el, this._n, n(t, this._fn))
        }, e
      }(Qn);
      Yn.fromEvent = function (t, e, n) {
        return t.addListener ? Di(function (n) {
          t.addListener(e, n)
        }, function (n) {
          t.removeListener(e, n)
        }, n) : Gt.config.useNativeEvents || "function" != typeof t.on || "function" != typeof t.off ? new wi(t, e, n).publish().refCount() : Di(function (n) {
          t.on(e, n)
        }, function (n) {
          t.off(e, n)
        }, n)
      };
      var Ci = function (t) {
        function e(e, n, r) {
          this._add = e, this._del = n, this._fn = r, t.call(this)
        }

        function n(t, e) {
          return function () {
            var n = arguments[0];
            return ne(e) && (n = oe(e).apply(null, arguments), n === re) ? t.onError(n.e) : void t.onNext(n)
          }
        }

        function r(t, e, n) {
          this._del = t, this._fn = e, this._ret = n, this.isDisposed = !1
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = n(t, this._fn), o = this._add(e);
          return new r(this._del, e, o)
        }, r.prototype.dispose = function () {
          this.isDisposed || ne(this._del) && this._del(this._fn, this._ret)
        }, e
      }(Qn), Di = Yn.fromEventPattern = function (t, e, n) {
        return new Ci(t, e, n).publish().refCount()
      };
      Yn.startAsync = function (t) {
        var e = oe(t)();
        return e === re ? kr(e.e) : hr(e)
      };
      var Fi = function (t) {
        function e(e, n) {
          this.source = e, this.controller = new Nu, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, t.call(this)
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          var e = this.source.publish(), n = e.subscribe(t), r = hn, o = this.pauser.distinctUntilChanged().subscribe(function (t) {
            t ? r = e.connect() : (r.dispose(), r = hn)
          });
          return new _n([n, r, o])
        }, e.prototype.pause = function () {
          this.controller.onNext(!1)
        }, e.prototype.resume = function () {
          this.controller.onNext(!0)
        }, e
      }(Yn);
      Hn.pausable = function (t) {
        return new Fi(this, t)
      };
      var xi = function (t) {
        function e(e, n) {
          this.source = e, this.controller = new Nu, n && n.subscribe ? this.pauser = this.controller.merge(n) : this.pauser = this.controller, t.call(this)
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          function e() {
            for (; r.length > 0;)t.onNext(r.shift())
          }

          var n, r = [], o = dt(this.source, this.pauser.startWith(!1).distinctUntilChanged(), function (t, e) {
            return {data: t, shouldFire: e}
          }).subscribe(function (o) {
            n !== u && o.shouldFire !== n ? (n = o.shouldFire, o.shouldFire && e()) : (n = o.shouldFire, o.shouldFire ? t.onNext(o.data) : r.push(o.data))
          }, function (n) {
            e(), t.onError(n)
          }, function () {
            e(), t.onCompleted()
          });
          return o
        }, e.prototype.pause = function () {
          this.controller.onNext(!1)
        }, e.prototype.resume = function () {
          this.controller.onNext(!0)
        }, e
      }(Yn);
      Hn.pausableBuffered = function (t) {
        return new xi(this, t)
      };
      var Bi = function (t) {
        function e(e, n, r) {
          t.call(this), this.subject = new Ni(n, r), this.source = e.multicast(this.subject).refCount()
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          return this.source.subscribe(t)
        }, e.prototype.request = function (t) {
          return this.subject.request(null == t ? -1 : t)
        }, e
      }(Yn), Ni = function (t) {
        function e(e, n) {
          null == e && (e = !0), t.call(this), this.subject = new Nu, this.enableQueue = e, this.queue = e ? [] : null, this.requestedCount = 0, this.requestedDisposable = null, this.error = null, this.hasFailed = !1, this.hasCompleted = !1, this.scheduler = n || Nn
        }

        return tn(e, t), en(e.prototype, Wn, {
          _subscribe: function (t) {
            return this.subject.subscribe(t)
          }, onCompleted: function () {
            this.hasCompleted = !0, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Rn.createOnCompleted()) : (this.subject.onCompleted(), this.disposeCurrentRequest())
          }, onError: function (t) {
            this.hasFailed = !0, this.error = t, this.enableQueue && 0 !== this.queue.length ? this.queue.push(Rn.createOnError(t)) : (this.subject.onError(t), this.disposeCurrentRequest())
          }, onNext: function (t) {
            this.requestedCount <= 0 ? this.enableQueue && this.queue.push(Rn.createOnNext(t)) : (0 === this.requestedCount-- && this.disposeCurrentRequest(), this.subject.onNext(t))
          }, _processRequest: function (t) {
            if (this.enableQueue)for (; this.queue.length > 0 && (t > 0 || "N" !== this.queue[0].kind);) {
              var e = this.queue.shift();
              e.accept(this.subject), "N" === e.kind ? t-- : (this.disposeCurrentRequest(), this.queue = [])
            }
            return t
          }, request: function (t) {
            this.disposeCurrentRequest();
            var e = this;
            return this.requestedDisposable = this.scheduler.schedule(t, function (t, n) {
              var r = e._processRequest(n), o = e.hasCompleted || e.hasFailed;
              return !o && r > 0 ? (e.requestedCount = r, an(function () {
                e.requestedCount = 0
              })) : void 0
            }), this.requestedDisposable
          }, disposeCurrentRequest: function () {
            this.requestedDisposable && (this.requestedDisposable.dispose(), this.requestedDisposable = null)
          }
        }), e
      }(Yn);
      Hn.controlled = function (t, e) {
        return t && gn(t) && (e = t, t = !0), null == t && (t = !0), new Bi(this, t, e)
      };
      var Oi = function (t) {
        function e(e) {
          t.call(this), this.source = e
        }

        function n(t, e) {
          e.source.request(1)
        }

        tn(e, t), e.prototype._subscribe = function (t) {
          return this.subscription = this.source.subscribe(new r(t, this, this.subscription)), new bn(this.subscription, jn.schedule(this, n))
        };
        var r = function (t) {
          function n(e, n, r) {
            t.call(this), this.observer = e, this.observable = n, this.cancel = r, this.scheduleDisposable = null
          }

          function r(t, e) {
            e.observable.source.request(1)
          }

          return tn(n, t), n.prototype.completed = function () {
            this.observer.onCompleted(), this.dispose()
          }, n.prototype.error = function (t) {
            this.observer.onError(t), this.dispose()
          }, n.prototype.next = function (t) {
            this.observer.onNext(t), this.scheduleDisposable = jn.schedule(this, r)
          }, e.dispose = function () {
            this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), t.prototype.dispose.call(this)
          }, n
        }(Xn);
        return e
      }(Yn);
      Bi.prototype.stopAndWait = function () {
        return new Oi(this)
      };
      var ki = function (t) {
        function e(e, n) {
          t.call(this), this.source = e, this.windowSize = n
        }

        function n(t, e) {
          e.source.request(e.windowSize)
        }

        tn(e, t), e.prototype._subscribe = function (t) {
          return this.subscription = this.source.subscribe(new r(t, this, this.subscription)), new bn(this.subscription, jn.schedule(this, n))
        };
        var r = function (t) {
          function e(e, n, r) {
            this.observer = e, this.observable = n, this.cancel = r, this.received = 0, this.scheduleDisposable = null, t.call(this)
          }

          function n(t, e) {
            e.observable.source.request(e.observable.windowSize)
          }

          return tn(e, t), e.prototype.completed = function () {
            this.observer.onCompleted(), this.dispose()
          }, e.prototype.error = function (t) {
            this.observer.onError(t), this.dispose()
          }, e.prototype.next = function (t) {
            this.observer.onNext(t), this.received = ++this.received % this.observable.windowSize, 0 === this.received && (this.scheduleDisposable = jn.schedule(this, n))
          }, e.prototype.dispose = function () {
            this.observer = null, this.cancel && (this.cancel.dispose(), this.cancel = null), this.scheduleDisposable && (this.scheduleDisposable.dispose(), this.scheduleDisposable = null), t.prototype.dispose.call(this)
          }, e
        }(Xn);
        return e
      }(Yn);
      Bi.prototype.windowed = function (t) {
        return new ki(this, t)
      }, Hn.pipe = function (t) {
        function e() {
          n.resume()
        }

        var n = this.pausableBuffered();
        return t.addListener("drain", e), n.subscribe(function (e) {
          !t.write(String(e)) && n.pause()
        }, function (e) {
          t.emit("error", e)
        }, function () {
          !t._isStdio && t.end(), t.removeListener("drain", e)
        }), n.resume(), t
      };
      var Si = function (t) {
        function e(e, n, r) {
          this.source = e, this._fn1 = n, this._fn2 = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = this.source.multicast(this._fn1());
          return new bn(this._fn2(e).subscribe(t), e.connect())
        }, e
      }(Qn);
      Hn.multicast = function (t, e) {
        return ne(t) ? new Si(this, t, e) : new qi(this, t)
      }, Hn.publish = function (t) {
        return t && ne(t) ? this.multicast(function () {
          return new Nu
        }, t) : this.multicast(new Nu)
      }, Hn.share = function () {
        return this.publish().refCount()
      }, Hn.publishLast = function (t) {
        return t && ne(t) ? this.multicast(function () {
          return new Ou
        }, t) : this.multicast(new Ou)
      }, Hn.publishValue = function (t, e) {
        return 2 === arguments.length ? this.multicast(function () {
          return new ku(e)
        }, t) : this.multicast(new ku(t))
      }, Hn.shareValue = function (t) {
        return this.publishValue(t).refCount()
      }, Hn.replay = function (t, e, n, r) {
        return t && ne(t) ? this.multicast(function () {
          return new Su(e, n, r)
        }, t) : this.multicast(new Su(e, n, r))
      }, Hn.shareReplay = function (t, e, n) {
        return this.replay(null, t, e, n).refCount()
      };
      var Ti = function (t, e) {
        this._s = t, this._o = e
      };
      Ti.prototype.dispose = function () {
        if (!this._s.isDisposed && null !== this._o) {
          var t = this._s.observers.indexOf(this._o);
          this._s.observers.splice(t, 1), this._o = null
        }
      };
      var ji = function (t) {
        function e(e) {
          this.source = e, this._count = 0, this._connectableSubscription = null, t.call(this)
        }

        function n(t, e) {
          this._p = t, this._s = e, this.isDisposed = !1
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = this.source.subscribe(t);
          return 1 === ++this._count && (this._connectableSubscription = this.source.connect()), new n(this, e)
        }, n.prototype.dispose = function () {
          this.isDisposed || (this.isDisposed = !0, this._s.dispose(), 0 === --this._p._count && this._p._connectableSubscription.dispose())
        }, e
      }(Qn), qi = Gt.ConnectableObservable = function (t) {
        function e(e, n) {
          this.source = e, this._connection = null, this._source = e.asObservable(), this._subject = n, t.call(this)
        }

        function n(t, e) {
          this._p = t, this._s = e
        }

        return tn(e, t), n.prototype.dispose = function () {
          this._s && (this._s.dispose(), this._s = null, this._p._connection = null)
        }, e.prototype.connect = function () {
          if (!this._connection) {
            var t = this._source.subscribe(this._subject);
            this._connection = new n(this, t)
          }
          return this._connection
        }, e.prototype._subscribe = function (t) {
          return this._subject.subscribe(t)
        }, e.prototype.refCount = function () {
          return new ji(this)
        }, e
      }(Yn);
      Hn.singleInstance = function () {
        function t() {
          return r || (r = !0, e = n["finally"](function () {
            r = !1
          }).publish().refCount()), e
        }

        var e, n = this, r = !1;
        return new Du(function (e) {
          return t().subscribe(e)
        })
      }, Hn.join = function (t, e, n, r) {
        var o = this;
        return new Du(function (i) {
          var u = new un, s = !1, c = !1, a = 0, h = 0, l = new Hi, p = new Hi, f = function (t) {
            i.onError(t)
          };
          return u.add(o.subscribe(function (t) {
            var n = a++, o = new dn;
            l.set(n, t), u.add(o);
            var c = oe(e)(t);
            return c === re ? i.onError(c.e) : (o.setDisposable(c.take(1).subscribe($t, f, function () {
              l["delete"](n) && 0 === l.size && s && i.onCompleted(), u.remove(o)
            })), void p.forEach(function (e) {
              var n = oe(r)(t, e);
              return n === re ? i.onError(n.e) : void i.onNext(n)
            }))
          }, f, function () {
            s = !0, (c || 0 === l.size) && i.onCompleted()
          })), u.add(t.subscribe(function (t) {
            var e = h++, o = new dn;
            p.set(e, t), u.add(o);
            var s = oe(n)(t);
            return s === re ? i.onError(s.e) : (o.setDisposable(s.take(1).subscribe($t, f, function () {
              p["delete"](e) && 0 === p.size && c && i.onCompleted(), u.remove(o)
            })), void l.forEach(function (e) {
              var n = oe(r)(e, t);
              return n === re ? i.onError(n.e) : void i.onNext(n)
            }))
          }, f, function () {
            c = !0, (s || 0 === p.size) && i.onCompleted()
          })), u
        }, o)
      }, Hn.groupJoin = function (t, e, n, r) {
        var o = this;
        return new Du(function (i) {
          function u(t) {
          }

          var s = new un, c = new mn(s), a = new Hi, h = new Hi, l = 0, p = 0, u = function (t) {
            return function (e) {
              e.onError(t)
            }
          };
          return s.add(o.subscribe(function (t) {
            var n = new Nu, o = l++;
            a.set(o, n);
            var p = oe(r)(t, nn(n, c));
            if (p === re)return a.forEach(u(p.e)), i.onError(p.e);
            i.onNext(p), h.forEach(function (t) {
              n.onNext(t)
            });
            var f = new dn;
            s.add(f);
            var d = oe(e)(t);
            return d === re ? (a.forEach(u(d.e)), i.onError(d.e)) : void f.setDisposable(d.take(1).subscribe($t, function (t) {
              a.forEach(u(t)), i.onError(t)
            }, function () {
              a["delete"](o) && n.onCompleted(), s.remove(f)
            }))
          }, function (t) {
            a.forEach(u(t)), i.onError(t)
          }, function () {
            i.onCompleted()
          })), s.add(t.subscribe(function (t) {
            var e = p++;
            h.set(e, t);
            var r = new dn;
            s.add(r);
            var o = oe(n)(t);
            return o === re ? (a.forEach(u(o.e)), i.onError(o.e)) : (r.setDisposable(o.take(1).subscribe($t, function (t) {
              a.forEach(u(t)), i.onError(t)
            }, function () {
              h["delete"](e), s.remove(r)
            })), void a.forEach(function (e) {
              e.onNext(t)
            }))
          }, function (t) {
            a.forEach(u(t)), i.onError(t)
          })), c
        }, o)
      }, Hn.buffer = function () {
        return this.window.apply(this, arguments).flatMap(X)
      }, Hn.window = function (t, e) {
        return 1 === arguments.length && "function" != typeof arguments[0] ? bt.call(this, t) : "function" == typeof t ? _t.call(this, t) : vt.call(this, t, e)
      };
      var Ri = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Li(t))
        }, e
      }(Qn), Li = function (t) {
        function e(t) {
          this._o = t, this._p = null, this._hp = !1
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._hp ? this._o.onNext([this._p, t]) : this._hp = !0, this._p = t
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.pairwise = function () {
        return new Ri(this)
      }, Hn.partition = function (t, e) {
        var n = Ee(t, e, 3);
        return [this.filter(t, e), this.filter(function (t, e, r) {
          return !n(t, e, r)
        })]
      };
      var Mi = function (t) {
        function e(t, e) {
          this.c = t, this.s = e
        }

        return tn(e, t), e.prototype[be] = function () {
          var t = this;
          return {
            next: function () {
              return t.c() ? {done: !1, value: t.s} : {done: !0, value: void 0}
            }
          }
        }, e
      }(tr);
      Hn.letBind = Hn.let = function (t) {
        return t(this)
      }, Yn["if"] = function (t, e, n) {
        return fr(function () {
          return n || (n = br()), ee(e) && (e = hr(e)), ee(n) && (n = hr(n)), "function" == typeof n.now && (n = br(n)), t() ? e : n
        })
      }, Yn["for"] = Yn.forIn = function (t, e, n) {
        return ur(t, e, n).concat()
      };
      var Pi = Yn["while"] = Yn.whileDo = function (t, e) {
        return ee(e) && (e = hr(e)), mt(t, e).concat()
      };
      Hn.doWhile = function (t) {
        return Ir([this, Pi(t, this)])
      }, Yn["case"] = function (t, e, n) {
        return fr(function () {
          ee(n) && (n = hr(n)), n || (n = br()), gn(n) && (n = br(n));
          var r = e[t()];
          return ee(r) && (r = hr(r)), r || n
        })
      };
      var Vi = function (t) {
        function e(e, n, r) {
          this.source = e, this._fn = n, this._scheduler = r, t.call(this)
        }

        function n(t, e) {
          var n, r = t[0], o = t[1];
          if (!(r.q.length > 0))return void(r.isAcquired = !1);
          n = r.q.shift();
          var i = new dn;
          r.d.add(i), i.setDisposable(n.subscribe(new Ii(r, o, i))), e([r, o])
        }

        return tn(e, t), e.prototype._ensureActive = function (t) {
          var e = !1;
          t.q.length > 0 && (e = !t.isAcquired, t.isAcquired = !0), e && t.m.setDisposable(this._scheduler.scheduleRecursive([t, this], n))
        }, e.prototype.subscribeCore = function (t) {
          var e = new vn, n = new un(e), r = {q: [], m: e, d: n, activeCount: 0, isAcquired: !1, o: t};
          return r.q.push(this.source), r.activeCount++, this._ensureActive(r), n
        }, e
      }(Qn), Ii = function (t) {
        function e(e, n, r) {
          this._s = e, this._p = n, this._m1 = r, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._s.o.onNext(t);
          var e = oe(this._p._fn)(t);
          return e === re ? this._s.o.onError(e.e) : (this._s.q.push(e), this._s.activeCount++, void this._p._ensureActive(this._s))
        }, e.prototype.error = function (t) {
          this._s.o.onError(t)
        }, e.prototype.completed = function () {
          this._s.d.remove(this._m1), this._s.activeCount--, 0 === this._s.activeCount && this._s.o.onCompleted()
        }, e
      }(Xn);
      Hn.expand = function (t, e) {
        return gn(e) || (e = Nn), new Vi(this, t, e)
      };
      var zi = function (t) {
        function e(e, n) {
          this._sources = e, this._cb = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          if (0 === this._sources.length)return t.onCompleted(), hn;
          for (var e = this._sources.length, n = {
            finished: !1,
            hasResults: new Array(e),
            hasCompleted: new Array(e),
            results: new Array(e)
          }, r = new un, o = 0, i = this._sources.length; i > o; o++) {
            var u = this._sources[o];
            ee(u) && (u = hr(u)), r.add(u.subscribe(new Wi(t, n, o, this._cb, r)))
          }
          return r
        }, e
      }(Qn), Wi = function (t) {
        function e(e, n, r, o, i) {
          this._o = e, this._s = n, this._i = r, this._cb = o, this._subs = i, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._s.finished || (this._s.hasResults[this._i] = !0, this._s.results[this._i] = t)
        }, e.prototype.error = function (t) {
          this._s.finished = !0, this._o.onError(t), this._subs.dispose()
        }, e.prototype.completed = function () {
          if (!this._s.finished) {
            if (!this._s.hasResults[this._i])return this._o.onCompleted();
            this._s.hasCompleted[this._i] = !0;
            for (var t = 0; t < this._s.results.length; t++)if (!this._s.hasCompleted[t])return;
            this._s.finished = !0;
            var e = oe(this._cb).apply(null, this._s.results);
            if (e === re)return this._o.onError(e.e);
            this._o.onNext(e), this._o.onCompleted()
          }
        }, e
      }(Xn);
      Yn.forkJoin = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        var r = ne(e[t - 1]) ? e.pop() : W;
        return Array.isArray(e[0]) && (e = e[0]), new zi(e, r)
      }, Hn.forkJoin = function () {
        for (var t = arguments.length, e = new Array(t), n = 0; t > n; n++)e[n] = arguments[n];
        return Array.isArray(e[0]) ? e[0].unshift(this) : e.unshift(this), Yn.forkJoin.apply(null, e)
      }, Hn.manySelect = Hn.extend = function (t, e) {
        gn(e) || (e = Gt.Scheduler.immediate);
        var n = this;
        return fr(function () {
          var r;
          return n.map(function (t) {
            var e = new Ui(t);
            return r && r.onNext(t), r = e, e
          }).tap($t, function (t) {
            r && r.onError(t)
          }, function () {
            r && r.onCompleted()
          }).observeOn(e).map(t)
        }, n)
      };
      var Ui = function (t) {
        function e(e) {
          t.call(this), this.head = e, this.tail = new Ou
        }

        return tn(e, t), en(e.prototype, Wn, {
          _subscribe: function (t) {
            var e = new un;
            return e.add(Nn.schedule(this, function (n, r) {
              t.onNext(r.head), e.add(r.tail.mergeAll().subscribe(t))
            })), e
          }, onCompleted: function () {
            this.onNext(Yn.empty())
          }, onError: function (t) {
            this.onNext(Yn["throw"](t))
          }, onNext: function (t) {
            this.tail.onNext(t), this.tail.onCompleted()
          }
        }), e
      }(Yn), Hi = Kt.Map || function () {
          function t() {
            this.size = 0, this._values = [], this._keys = []
          }

          return t.prototype["delete"] = function (t) {
            var e = this._keys.indexOf(t);
            return -1 === e ? !1 : (this._values.splice(e, 1), this._keys.splice(e, 1), this.size--, !0)
          }, t.prototype.get = function (t) {
            var e = this._keys.indexOf(t);
            return -1 === e ? u : this._values[e]
          }, t.prototype.set = function (t, e) {
            var n = this._keys.indexOf(t);
            return -1 === n ? (this._keys.push(t), this._values.push(e), this.size++) : this._values[n] = e, this
          }, t.prototype.forEach = function (t, e) {
            for (var n = 0; n < this.size; n++)t.call(e, this._values[n], this._keys[n])
          }, t
        }();
      yt.prototype.and = function (t) {
        return new yt(this.patterns.concat(t))
      }, yt.prototype.thenDo = function (t) {
        return new Et(this, t)
      }, Et.prototype.activate = function (t, e, n) {
        for (var r = [], o = At(e), i = 0, u = this.expression.patterns.length; u > i; i++)r.push(wt(t, this.expression.patterns[i], o));
        var s = new Ct(r, gt(this, e), function () {
          for (var t = 0, e = r.length; e > t; t++)r[t].removeActivePlan(s);
          n(s)
        });
        for (i = 0, u = r.length; u > i; i++)r[i].addActivePlan(s);
        return s
      }, Ct.prototype.dequeue = function () {
        this.joinObservers.forEach(function (t) {
          t.queue.shift()
        })
      }, Ct.prototype.match = function () {
        var t, e, n = !0;
        for (t = 0, e = this.joinObserverArray.length; e > t; t++)if (0 === this.joinObserverArray[t].queue.length) {
          n = !1;
          break
        }
        if (n) {
          var r = [], o = !1;
          for (t = 0, e = this.joinObserverArray.length; e > t; t++)r.push(this.joinObserverArray[t].queue[0]), "C" === this.joinObserverArray[t].queue[0].kind && (o = !0);
          if (o)this.onCompleted(); else {
            this.dequeue();
            var i = [];
            for (t = 0, e = r.length; t < r.length; t++)i.push(r[t].value);
            this.onNext.apply(this, i)
          }
        }
      };
      var Xi = function (t) {
        function e(e, n) {
          t.call(this), this.source = e, this.onError = n, this.queue = [], this.activePlans = [], this.subscription = new dn, this.isDisposed = !1
        }

        tn(e, t);
        var n = e.prototype;
        return n.next = function (t) {
          if (!this.isDisposed) {
            if ("E" === t.kind)return this.onError(t.error);
            this.queue.push(t);
            for (var e = this.activePlans.slice(0), n = 0, r = e.length; r > n; n++)e[n].match()
          }
        }, n.error = $t, n.completed = $t, n.addActivePlan = function (t) {
          this.activePlans.push(t)
        }, n.subscribe = function () {
          this.subscription.setDisposable(this.source.materialize().subscribe(this))
        }, n.removeActivePlan = function (t) {
          this.activePlans.splice(this.activePlans.indexOf(t), 1), 0 === this.activePlans.length && this.dispose()
        }, n.dispose = function () {
          t.prototype.dispose.call(this), this.isDisposed || (this.isDisposed = !0, this.subscription.dispose())
        }, e
      }(Xn);
      Hn.and = function (t) {
        return new yt([this, t])
      }, Hn.thenDo = function (t) {
        return new yt([this]).thenDo(t)
      }, Yn.when = function () {
        var t, e = arguments.length;
        if (Array.isArray(arguments[0]))t = arguments[0]; else {
          t = new Array(e);
          for (var n = 0; e > n; n++)t[n] = arguments[n]
        }
        return new Du(function (e) {
          var n = [], r = new Hi, o = Un(function (t) {
            e.onNext(t)
          }, function (t) {
            r.forEach(function (e) {
              e.onError(t)
            }), e.onError(t)
          }, function (t) {
            e.onCompleted()
          });
          try {
            for (var i = 0, u = t.length; u > i; i++)n.push(t[i].activate(r, o, function (t) {
              var r = n.indexOf(t);
              n.splice(r, 1), 0 === n.length && e.onCompleted()
            }))
          } catch (s) {
            kr(s).subscribe(e)
          }
          var c = new un;
          return r.forEach(function (t) {
            t.subscribe(), c.add(t)
          }), c
        })
      };
      var Ki = function (t) {
        function e(e, n) {
          this._dt = e, this._s = n, t.call(this)
        }

        function n(t, e) {
          e.onNext(0), e.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._s.scheduleFuture(t, this._dt, n)
        }, e
      }(Qn), Gi = Yn.interval = function (t, e) {
        return xt(t, t, gn(e) ? e : jn)
      };
      Yn.timer = function (t, e, n) {
        var r;
        return gn(n) || (n = jn), null != e && "number" == typeof e ? r = e : gn(e) && (n = e), (t instanceof Date || "number" == typeof t) && r === u ? Dt(t, n) : t instanceof Date && r !== u ? Ft(t.getTime(), e, n) : xt(t, r, n)
      };
      Hn.delay = function () {
        var t = arguments[0];
        if ("number" == typeof t || t instanceof Date) {
          var e = t, n = arguments[1];
          return gn(n) || (n = jn), e instanceof Date ? Nt(this, e, n) : Bt(this, e, n)
        }
        if (Yn.isObservable(t) || ne(t))return Ot(this, t, arguments[1]);
        throw new Error("Invalid arguments")
      };
      var $i = function (t) {
        function e(e, n, r) {
          gn(r) || (r = jn), this.source = e, this._dt = n, this._s = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn;
          return new bn(this.source.subscribe(new Ji(t, this.source, this._dt, this._s, e)), e)
        }, e
      }(Qn), Ji = function (t) {
        function e(e, n, r, o, i) {
          this._o = e, this._s = n, this._d = r, this._scheduler = o, this._c = i, this._v = null, this._hv = !1, this._id = 0, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._hv = !0, this._v = t;
          var e = ++this._id, n = new dn;
          this._c.setDisposable(n), n.setDisposable(this._scheduler.scheduleFuture(this, this._d, function (n, r) {
            r._hv && r._id === e && r._o.onNext(t), r._hv = !1
          }))
        }, e.prototype.error = function (t) {
          this._c.dispose(), this._o.onError(t), this._hv = !1, this._id++
        }, e.prototype.completed = function () {
          this._c.dispose(), this._hv && this._o.onNext(this._v), this._o.onCompleted(), this._hv = !1, this._id++
        }, e
      }(Xn);
      Hn.debounce = function () {
        if (ne(arguments[0]))return kt(this, arguments[0]);
        if ("number" == typeof arguments[0])return new $i(this, arguments[0], arguments[1]);
        throw new Error("Invalid arguments")
      }, Hn.windowWithTime = function (t, e, n) {
        var r, o = this;
        return null == e && (r = t), gn(n) || (n = jn), "number" == typeof e ? r = e : gn(e) && (r = t, n = e), new Du(function (e) {
          function i() {
            var t = new dn, o = !1, u = !1;
            l.setDisposable(t), a === c ? (o = !0, u = !0) : c > a ? o = !0 : u = !0;
            var f = o ? a : c, d = f - p;
            p = f, o && (a += r), u && (c += r), t.setDisposable(n.scheduleFuture(null, d, function () {
              if (u) {
                var t = new Nu;
                h.push(t), e.onNext(nn(t, s))
              }
              o && h.shift().onCompleted(), i()
            }))
          }

          var u, s, c = r, a = t, h = [], l = new vn, p = 0;
          return u = new un(l), s = new mn(u), h.push(new Nu), e.onNext(nn(h[0], s)), i(), u.add(o.subscribe(function (t) {
            for (var e = 0, n = h.length; n > e; e++)h[e].onNext(t)
          }, function (t) {
            for (var n = 0, r = h.length; r > n; n++)h[n].onError(t);
            e.onError(t)
          }, function () {
            for (var t = 0, n = h.length; n > t; t++)h[t].onCompleted();
            e.onCompleted()
          })), s
        }, o)
      }, Hn.windowWithTimeOrCount = function (t, e, n) {
        var r = this;
        return gn(n) || (n = jn), new Du(function (o) {
          function i(e) {
            var r = new dn;
            u.setDisposable(r), r.setDisposable(n.scheduleFuture(null, t, function () {
              if (e === h) {
                a = 0;
                var t = ++h;
                l.onCompleted(), l = new Nu, o.onNext(nn(l, c)), i(t)
              }
            }))
          }

          var u = new vn, s = new un(u), c = new mn(s), a = 0, h = 0, l = new Nu;
          return o.onNext(nn(l, c)), i(0), s.add(r.subscribe(function (t) {
            var n = 0, r = !1;
            l.onNext(t), ++a === e && (r = !0, a = 0, n = ++h, l.onCompleted(), l = new Nu, o.onNext(nn(l, c))), r && i(n)
          }, function (t) {
            l.onError(t), o.onError(t)
          }, function () {
            l.onCompleted(), o.onCompleted()
          })), c
        }, r)
      }, Hn.bufferWithTime = function (t, e, n) {
        return this.windowWithTime(t, e, n).flatMap(X)
      }, Hn.bufferWithTimeOrCount = function (t, e, n) {
        return this.windowWithTimeOrCount(t, e, n).flatMap(X)
      };
      var Yi = function (t) {
        function e(e, n) {
          this.source = e, this._s = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new Qi(t, this._s))
        }, e
      }(Qn), Qi = function (t) {
        function e(e, n) {
          this._o = e, this._s = n, this._l = n.now(), t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = this._s.now(), n = e - this._l;
          this._l = e, this._o.onNext({value: t, interval: n})
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.timeInterval = function (t) {
        return gn(t) || (t = jn), new Yi(this, t)
      };
      var Zi = function (t) {
        function e(e, n) {
          this.source = e, this._s = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new tu(t, this._s))
        }, e
      }(Qn), tu = function (t) {
        function e(e, n) {
          this._o = e, this._s = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._o.onNext({value: t, timestamp: this._s.now()})
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.timestamp = function (t) {
        return gn(t) || (t = jn), new Zi(this, t)
      }, Hn.sample = Hn.throttleLatest = function (t, e) {
        return gn(e) || (e = jn), "number" == typeof t ? St(this, Gi(t, e)) : St(this, t)
      };
      var eu = Gt.TimeoutError = function (t) {
        this.message = t || "Timeout has occurred", this.name = "TimeoutError", Error.call(this)
      };
      eu.prototype = Object.create(Error.prototype), Hn.timeout = function () {
        var t = arguments[0];
        if (t instanceof Date || "number" == typeof t)return jt(this, t, arguments[1], arguments[2]);
        if (Yn.isObservable(t) || ne(t))return Tt(this, t, arguments[1], arguments[2]);
        throw new Error("Invalid arguments")
      };
      var nu = function (t) {
        function e(e, n, r, o, i, u) {
          this._state = e, this._cndFn = n, this._itrFn = r, this._resFn = o, this._timeFn = i, this._s = u, this._first = !0, this._hasResult = !1, t.call(this)
        }

        function n(t, e) {
          if (t._hasResult && t._o.onNext(t._state), t._first)t._first = !1; else if (t._state = oe(t._itrFn)(t._state), t._state === re)return t._o.onError(t._state.e);
          if (t._hasResult = oe(t._cndFn)(t._state), t._hasResult === re)return t._o.onError(t._hasResult.e);
          if (t._hasResult) {
            var n = oe(t._resFn)(t._state);
            if (n === re)return t._o.onError(n.e);
            var r = oe(t._timeFn)(t._state);
            if (r === re)return t._o.onError(r.e);
            e(t, r)
          } else t._o.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._o = t, this._s.scheduleRecursiveFuture(this, new Date(this._s.now()), n)
        }, e
      }(Qn);
      Yn.generateWithAbsoluteTime = function (t, e, n, r, o, i) {
        return gn(i) || (i = jn), new nu(t, e, n, r, o, i)
      };
      var ru = function (t) {
        function e(e, n, r, o, i, u) {
          this._state = e, this._cndFn = n, this._itrFn = r, this._resFn = o, this._timeFn = i, this._s = u, this._first = !0, this._hasResult = !1, t.call(this)
        }

        function n(t, e) {
          if (t._hasResult && t._o.onNext(t._state), t._first)t._first = !1; else if (t._state = oe(t._itrFn)(t._state), t._state === re)return t._o.onError(t._state.e);
          if (t._hasResult = oe(t._cndFn)(t._state), t._hasResult === re)return t._o.onError(t._hasResult.e);
          if (t._hasResult) {
            var n = oe(t._resFn)(t._state);
            if (n === re)return t._o.onError(n.e);
            var r = oe(t._timeFn)(t._state);
            if (r === re)return t._o.onError(r.e);
            e(t, r)
          } else t._o.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._o = t, this._s.scheduleRecursiveFuture(this, 0, n)
        }, e
      }(Qn);
      Yn.generateWithRelativeTime = function (t, e, n, r, o, i) {
        return gn(i) || (i = jn), new ru(t, e, n, r, o, i)
      };
      var ou = function (t) {
        function e(e, n, r) {
          this.source = e, this._dt = n, this._s = r, t.call(this)
        }

        function n(t, e) {
          var n = e[0], r = e[1], o = e[2];
          o.setDisposable(n.subscribe(r))
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new vn;
          return e.setDisposable(this._s.scheduleFuture([this.source, t, e], this._dt, n)), e
        }, e
      }(Qn);
      Hn.delaySubscription = function (t, e) {
        return gn(e) || (e = jn), new ou(this, t, e)
      };
      var iu = function (t) {
        function e(e, n, r) {
          this.source = e, this._d = n, this._s = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new uu(t, this))
        }, e
      }(Qn), uu = function (t) {
        function e(e, n) {
          this._o = e, this._s = n._s, this._d = n._d, this._q = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = this._s.now();
          for (this._q.push({
            interval: e,
            value: t
          }); this._q.length > 0 && e - this._q[0].interval >= this._d;)this._o.onNext(this._q.shift().value)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          for (var t = this._s.now(); this._q.length > 0 && t - this._q[0].interval >= this._d;)this._o.onNext(this._q.shift().value);
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.skipLastWithTime = function (t, e) {
        return gn(e) || (e = jn), new iu(this, t, e)
      };
      var su = function (t) {
        function e(e, n, r) {
          this.source = e, this._d = n, this._s = r, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this.source.subscribe(new cu(t, this._d, this._s))
        }, e
      }(Qn), cu = function (t) {
        function e(e, n, r) {
          this._o = e, this._d = n, this._s = r, this._q = [], t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = this._s.now();
          for (this._q.push({
            interval: e,
            value: t
          }); this._q.length > 0 && e - this._q[0].interval >= this._d;)this._q.shift()
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          for (var t = this._s.now(); this._q.length > 0;) {
            var e = this._q.shift();
            t - e.interval <= this._d && this._o.onNext(e.value)
          }
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.takeLastWithTime = function (t, e) {
        return gn(e) || (e = jn), new su(this, t, e)
      }, Hn.takeLastBufferWithTime = function (t, e) {
        var n = this;
        return gn(e) || (e = jn), new Du(function (r) {
          var o = [];
          return n.subscribe(function (n) {
            var r = e.now();
            for (o.push({interval: r, value: n}); o.length > 0 && r - o[0].interval >= t;)o.shift()
          }, function (t) {
            r.onError(t)
          }, function () {
            for (var n = e.now(), i = []; o.length > 0;) {
              var u = o.shift();
              n - u.interval <= t && i.push(u.value)
            }
            r.onNext(i), r.onCompleted()
          })
        }, n)
      };
      var au = function (t) {
        function e(e, n, r) {
          this.source = e, this._d = n, this._s = r, t.call(this)
        }

        function n(t, e) {
          e.onCompleted()
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return new bn(this._s.scheduleFuture(t, this._d, n), this.source.subscribe(t))
        }, e
      }(Qn);
      Hn.takeWithTime = function (t, e) {
        return gn(e) || (e = jn), new au(this, t, e)
      };
      var hu = function (t) {
        function e(e, n, r) {
          this.source = e, this._d = n, this._s = r, this._open = !1, t.call(this)
        }

        function n(t, e) {
          e._open = !0
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return new bn(this._s.scheduleFuture(this, this._d, n), this.source.subscribe(new lu(t, this)))
        }, e
      }(Qn), lu = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._p._open && this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.skipWithTime = function (t, e) {
        return gn(e) || (e = jn), new hu(this, t, e)
      };
      var pu = function (t) {
        function e(e, n, r) {
          this.source = e, this._st = n, this._s = r, t.call(this)
        }

        function n(t, e) {
          e._open = !0
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return this._open = !1, new bn(this._s.scheduleFuture(this, this._st, n), this.source.subscribe(new fu(t, this)))
        }, e
      }(Qn), fu = function (t) {
        function e(e, n) {
          this._o = e, this._p = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          this._p._open && this._o.onNext(t)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._o.onCompleted()
        }, e
      }(Xn);
      Hn.skipUntilWithTime = function (t, e) {
        return gn(e) || (e = jn), new pu(this, t, e)
      }, Hn.takeUntilWithTime = function (t, e) {
        gn(e) || (e = jn);
        var n = this;
        return new Du(function (r) {
          return new bn(e.scheduleFuture(r, t, function (t, e) {
            e.onCompleted()
          }), n.subscribe(r))
        }, n)
      }, Hn.throttle = function (t, e) {
        gn(e) || (e = jn);
        var n = +t || 0;
        if (0 >= n)throw new RangeError("windowDuration cannot be less or equal zero.");
        var r = this;
        return new Du(function (t) {
          var o = 0;
          return r.subscribe(function (r) {
            var i = e.now();
            (0 === o || i - o >= n) && (o = i, t.onNext(r))
          }, function (e) {
            t.onError(e)
          }, function () {
            t.onCompleted()
          })
        }, r)
      };
      var du = function (t) {
        function e(e, n) {
          this._o = e, this._xform = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          var e = oe(this._xform["@@transducer/step"]).call(this._xform, this._o, t);
          e === re && this._o.onError(e.e)
        }, e.prototype.error = function (t) {
          this._o.onError(t)
        }, e.prototype.completed = function () {
          this._xform["@@transducer/result"](this._o)
        }, e
      }(Xn);
      Hn.transduce = function (t) {
        var e = this;
        return new Du(function (n) {
          var r = t(qt(n));
          return e.subscribe(new du(n, r))
        }, e)
      };
      var vu = function (t) {
        function e(e) {
          this.source = e, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          var e = new dn, n = new un, r = {hasCurrent: !1, isStopped: !1, o: t, g: n};
          return n.add(e), e.setDisposable(this.source.subscribe(new bu(r))), n
        }, e
      }(Qn), bu = function (t) {
        function e(e) {
          this._s = e, t.call(this)
        }

        function n(e, n) {
          this._s = e, this._i = n, t.call(this)
        }

        return tn(e, t), e.prototype.next = function (t) {
          if (!this._s.hasCurrent) {
            this._s.hasCurrent = !0, ee(t) && (t = hr(t));
            var e = new dn;
            this._s.g.add(e), e.setDisposable(t.subscribe(new n(this._s, e)))
          }
        }, e.prototype.error = function (t) {
          this._s.o.onError(t)
        }, e.prototype.completed = function () {
          this._s.isStopped = !0, !this._s.hasCurrent && 1 === this._s.g.length && this._s.o.onCompleted()
        }, tn(n, t), n.prototype.next = function (t) {
          this._s.o.onNext(t)
        }, n.prototype.error = function (t) {
          this._s.o.onError(t)
        }, n.prototype.completed = function () {
          this._s.g.remove(this._i), this._s.hasCurrent = !1, this._s.isStopped && 1 === this._s.g.length && this._s.o.onCompleted()
        }, e
      }(Xn);
      Hn.switchFirst = function () {
        return new vu(this)
      }, Hn.flatMapFirst = Hn.selectManyFirst = function (t, e, n) {
        return new Zn(this, t, e, n).switchFirst()
      }, Gt.Observable.prototype.flatMapWithMaxConcurrent = function (t, e, n, r) {
        return new Zn(this, e, n, r).merge(t)
      };
      var _u = Gt.VirtualTimeScheduler = function (t) {
        function e(e, n) {
          this.clock = e, this.comparer = n, this.isEnabled = !1, this.queue = new rn(1024), t.call(this)
        }

        tn(e, t);
        var n = e.prototype;
        return n.now = function () {
          return this.toAbsoluteTime(this.clock)
        }, n.schedule = function (t, e) {
          return this.scheduleAbsolute(t, this.clock, e)
        }, n.scheduleFuture = function (t, e, n) {
          var r = e instanceof Date ? this.toRelativeTime(e - this.now()) : this.toRelativeTime(e);
          return this.scheduleRelative(t, r, n)
        }, n.add = ve, n.toAbsoluteTime = ve, n.toRelativeTime = ve, n.schedulePeriodic = function (t, e, n) {
          var r = new Dn(this, t, e, n);
          return r.start()
        }, n.scheduleRelative = function (t, e, n) {
          var r = this.add(this.clock, e);
          return this.scheduleAbsolute(t, r, n)
        }, n.start = function () {
          if (!this.isEnabled) {
            this.isEnabled = !0;
            do {
              var t = this.getNext();
              null !== t ? (this.comparer(t.dueTime, this.clock) > 0 && (this.clock = t.dueTime), t.invoke()) : this.isEnabled = !1
            } while (this.isEnabled)
          }
        }, n.stop = function () {
          this.isEnabled = !1
        }, n.advanceTo = function (t) {
          var e = this.comparer(this.clock, t);
          if (this.comparer(this.clock, t) > 0)throw new pe;
          if (0 !== e && !this.isEnabled) {
            this.isEnabled = !0;
            do {
              var n = this.getNext();
              null !== n && this.comparer(n.dueTime, t) <= 0 ? (this.comparer(n.dueTime, this.clock) > 0 && (this.clock = n.dueTime), n.invoke()) : this.isEnabled = !1
            } while (this.isEnabled);
            this.clock = t
          }
        }, n.advanceBy = function (t) {
          var e = this.add(this.clock, t), n = this.comparer(this.clock, e);
          if (n > 0)throw new pe;
          0 !== n && this.advanceTo(e)
        }, n.sleep = function (t) {
          var e = this.add(this.clock, t);
          if (this.comparer(this.clock, e) >= 0)throw new pe;
          this.clock = e
        }, n.getNext = function () {
          for (; this.queue.length > 0;) {
            var t = this.queue.peek();
            if (!t.isCancelled())return t;
            this.queue.dequeue()
          }
          return null
        }, n.scheduleAbsolute = function (t, e, n) {
          function r(t, e) {
            return o.queue.remove(i), n(t, e)
          }

          var o = this, i = new yn(this, t, r, e, this.comparer);
          return this.queue.enqueue(i), i.disposable
        }, e
      }(En);
      Gt.HistoricalScheduler = function (t) {
        function e(e, n) {
          var r = null == e ? 0 : e, o = n || Zt;
          t.call(this, r, o)
        }

        tn(e, t);
        var n = e.prototype;
        return n.add = function (t, e) {
          return t + e
        }, n.toAbsoluteTime = function (t) {
          return new Date(t).getTime()
        }, n.toRelativeTime = function (t) {
          return t
        }, e
      }(Gt.VirtualTimeScheduler), Rt.prototype.equals = function (t) {
        return t === this ? !0 : null == t ? !1 : "N" !== t.kind ? !1 : this.predicate(t.value)
      }, Lt.prototype.equals = function (t) {
        return t === this ? !0 : null == t ? !1 : "E" !== t.kind ? !1 : this.predicate(t.error)
      };
      var mu = Gt.ReactiveTest = {
        created: 100, subscribed: 200, disposed: 1e3, onNext: function (t, e) {
          return "function" == typeof e ? new yu(t, new Rt(e)) : new yu(t, Rn.createOnNext(e))
        }, onError: function (t, e) {
          return "function" == typeof e ? new yu(t, new Lt(e)) : new yu(t, Rn.createOnError(e))
        }, onCompleted: function (t) {
          return new yu(t, Rn.createOnCompleted())
        }, subscribe: function (t, e) {
          return new Eu(t, e)
        }
      }, yu = Gt.Recorded = function (t, e, n) {
        this.time = t, this.value = e, this.comparer = n || Qt
      };
      yu.prototype.equals = function (t) {
        return this.time === t.time && this.comparer(this.value, t.value)
      }, yu.prototype.toString = function () {
        return this.value.toString() + "@" + this.time
      };
      var Eu = Gt.Subscription = function (t, e) {
        this.subscribe = t, this.unsubscribe = e || Number.MAX_VALUE
      };
      Eu.prototype.equals = function (t) {
        return this.subscribe === t.subscribe && this.unsubscribe === t.unsubscribe
      }, Eu.prototype.toString = function () {
        return "(" + this.subscribe + ", " + (this.unsubscribe === Number.MAX_VALUE ? "Infinite" : this.unsubscribe) + ")"
      };
      var Au = Gt.MockDisposable = function (t) {
        this.scheduler = t, this.disposes = [], this.disposes.push(this.scheduler.clock)
      };
      Au.prototype.dispose = function () {
        this.disposes.push(this.scheduler.clock)
      };
      var gu = function (t) {
        function e(e) {
          t.call(this), this.scheduler = e, this.messages = []
        }

        tn(e, t);
        var n = e.prototype;
        return n.onNext = function (t) {
          this.messages.push(new yu(this.scheduler.clock, Rn.createOnNext(t)))
        }, n.onError = function (t) {
          this.messages.push(new yu(this.scheduler.clock, Rn.createOnError(t)))
        }, n.onCompleted = function () {
          this.messages.push(new yu(this.scheduler.clock, Rn.createOnCompleted()))
        }, e
      }(Wn);
      Mt.prototype.then = function (t, e) {
        var n = this;
        this.subscriptions.push(new Eu(this.scheduler.clock));
        var r, o = this.subscriptions.length - 1, i = Gt.Observer.create(function (e) {
          var s = t(e);
          if (s && "function" == typeof s.then)r = s; else {
            var c = n.scheduler.clock;
            r = new Mt(n.scheduler, [Gt.ReactiveTest.onNext(c, u), Gt.ReactiveTest.onCompleted(c)])
          }
          var a = n.observers.indexOf(i);
          n.observers.splice(a, 1), n.subscriptions[o] = new Eu(n.subscriptions[o].subscribe, n.scheduler.clock)
        }, function (t) {
          e(t);
          var r = n.observers.indexOf(i);
          n.observers.splice(r, 1), n.subscriptions[o] = new Eu(n.subscriptions[o].subscribe, n.scheduler.clock)
        });
        return this.observers.push(i), r || new Mt(this.scheduler, this.messages)
      };
      var wu = function (t) {
        function e(e, n) {
          t.call(this);
          var r, o, i = this;
          this.scheduler = e, this.messages = n, this.subscriptions = [], this.observers = [];
          for (var u = 0, s = this.messages.length; s > u; u++)r = this.messages[u], o = r.value, function (t) {
            e.scheduleAbsolute(null, r.time, function () {
              for (var e = i.observers.slice(0), n = 0, r = e.length; r > n; n++)t.accept(e[n]);
              return hn
            })
          }(o)
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          var e = this;
          this.observers.push(t), this.subscriptions.push(new Eu(this.scheduler.clock));
          var n = this.subscriptions.length - 1;
          return an(function () {
            var r = e.observers.indexOf(t);
            e.observers.splice(r, 1), e.subscriptions[n] = new Eu(e.subscriptions[n].subscribe, e.scheduler.clock)
          })
        }, e
      }(Yn), Cu = function (t) {
        function e(e, n) {
          t.call(this), this.scheduler = e, this.messages = n, this.subscriptions = []
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          var e, n, r = this;
          this.subscriptions.push(new Eu(this.scheduler.clock));
          for (var o = this.subscriptions.length - 1, i = new un, u = 0, s = this.messages.length; s > u; u++)e = this.messages[u], n = e.value, function (n) {
            i.add(r.scheduler.scheduleRelative(null, e.time, function () {
              return n.accept(t), hn
            }))
          }(n);
          return an(function () {
            r.subscriptions[o] = new Eu(r.subscriptions[o].subscribe, r.scheduler.clock), i.dispose()
          })
        }, e
      }(Yn);
      Gt.TestScheduler = function (t) {
        function e(t, e) {
          return t > e ? 1 : e > t ? -1 : 0
        }

        function n() {
          t.call(this, 0, e)
        }

        return tn(n, t), n.prototype.scheduleAbsolute = function (e, n, r) {
          return n <= this.clock && (n = this.clock + 1), t.prototype.scheduleAbsolute.call(this, e, n, r)
        }, n.prototype.add = function (t, e) {
          return t + e
        }, n.prototype.toAbsoluteTime = function (t) {
          return new Date(t).getTime()
        }, n.prototype.toRelativeTime = function (t) {
          return t
        }, n.prototype.startScheduler = function (t, e) {
          e || (e = {}), null == e.created && (e.created = mu.created), null == e.subscribed && (e.subscribed = mu.subscribed), null == e.disposed && (e.disposed = mu.disposed);
          var n, r, o = this.createObserver();
          return this.scheduleAbsolute(null, e.created, function () {
            return n = t(), hn
          }), this.scheduleAbsolute(null, e.subscribed, function () {
            return r = n.subscribe(o), hn
          }), this.scheduleAbsolute(null, e.disposed, function () {
            return r.dispose(), hn
          }), this.start(), o
        }, n.prototype.createHotObservable = function () {
          var t, e = arguments.length;
          if (Array.isArray(arguments[0]))t = arguments[0]; else {
            t = new Array(e);
            for (var n = 0; e > n; n++)t[n] = arguments[n]
          }
          return new wu(this, t)
        }, n.prototype.createColdObservable = function () {
          var t, e = arguments.length;
          if (Array.isArray(arguments[0]))t = arguments[0]; else {
            t = new Array(e);
            for (var n = 0; e > n; n++)t[n] = arguments[n]
          }
          return new Cu(this, t)
        }, n.prototype.createResolvedPromise = function (t, e) {
          return new Mt(this, [Gt.ReactiveTest.onNext(t, e), Gt.ReactiveTest.onCompleted(t)])
        }, n.prototype.createRejectedPromise = function (t, e) {
          return new Mt(this, [Gt.ReactiveTest.onError(t, e)])
        }, n.prototype.createObserver = function () {
          return new gu(this)
        }, n
      }(_u);
      var Du = Gt.AnonymousObservable = function (t) {
        function e(t) {
          return t && ne(t.dispose) ? t : ne(t) ? an(t) : hn
        }

        function n(t, n) {
          var r = n[0], o = n[1], i = oe(o.__subscribe).call(o, r);
          i !== re || r.fail(re.e) || h(re.e), r.setDisposable(e(i))
        }

        function r(e, n) {
          this.source = n, this.__subscribe = e, t.call(this)
        }

        return tn(r, t), r.prototype._subscribe = function (t) {
          var e = new Fu(t), r = [e, this];
          return Nn.scheduleRequired() ? Nn.schedule(r, n) : n(null, r), e
        }, r
      }(Yn), Fu = function (t) {
        function e(e) {
          t.call(this), this.observer = e, this.m = new dn
        }

        tn(e, t);
        var n = e.prototype;
        return n.next = function (t) {
          var e = oe(this.observer.onNext).call(this.observer, t);
          e === re && (this.dispose(), h(e.e))
        }, n.error = function (t) {
          var e = oe(this.observer.onError).call(this.observer, t);
          this.dispose(), e === re && h(e.e)
        }, n.completed = function () {
          var t = oe(this.observer.onCompleted).call(this.observer);
          this.dispose(), t === re && h(t.e)
        }, n.setDisposable = function (t) {
          this.m.setDisposable(t)
        }, n.getDisposable = function () {
          return this.m.getDisposable()
        }, n.dispose = function () {
          t.prototype.dispose.call(this), this.m.dispose()
        }, e
      }(Xn), xu = function (t) {
        function e(e, n) {
          this._m = e, this._u = n, t.call(this)
        }

        return tn(e, t), e.prototype.subscribeCore = function (t) {
          return new bn(this._m.getDisposable(), this._u.subscribe(t))
        }, e
      }(Qn), Bu = function (t) {
        function e(e, n, r) {
          t.call(this), this.key = e, this.underlyingObservable = r ? new xu(r, n) : n
        }

        return tn(e, t), e.prototype._subscribe = function (t) {
          return this.underlyingObservable.subscribe(t)
        }, e
      }(Yn), Nu = Gt.Subject = function (t) {
        function e() {
          t.call(this), this.isDisposed = !1, this.isStopped = !1, this.observers = [], this.hasError = !1
        }

        return tn(e, t), en(e.prototype, Wn.prototype, {
          _subscribe: function (t) {
            return pn(this), this.isStopped ? this.hasError ? (t.onError(this.error), hn) : (t.onCompleted(), hn) : (this.observers.push(t), new Ti(this, t))
          }, hasObservers: function () {
            return this.observers.length > 0
          }, onCompleted: function () {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0;
              for (var t = 0, e = c(this.observers), n = e.length; n > t; t++)e[t].onCompleted();
              this.observers.length = 0
            }
          }, onError: function (t) {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0, this.error = t, this.hasError = !0;
              for (var e = 0, n = c(this.observers), r = n.length; r > e; e++)n[e].onError(t);
              this.observers.length = 0
            }
          }, onNext: function (t) {
            if (pn(this), !this.isStopped)for (var e = 0, n = c(this.observers), r = n.length; r > e; e++)n[e].onNext(t)
          }, dispose: function () {
            this.isDisposed = !0, this.observers = null
          }
        }), e.create = function (t, e) {
          return new Tu(t, e)
        }, e
      }(Yn), Ou = Gt.AsyncSubject = function (t) {
        function e() {
          t.call(this), this.isDisposed = !1, this.isStopped = !1, this.hasValue = !1, this.observers = [], this.hasError = !1
        }

        return tn(e, t), en(e.prototype, Wn.prototype, {
          _subscribe: function (t) {
            return pn(this), this.isStopped ? (this.hasError ? t.onError(this.error) : this.hasValue ? (t.onNext(this.value), t.onCompleted()) : t.onCompleted(), hn) : (this.observers.push(t), new Ti(this, t))
          }, hasObservers: function () {
            return pn(this), this.observers.length > 0
          }, onCompleted: function () {
            var t, e;
            if (pn(this), !this.isStopped) {
              this.isStopped = !0;
              var n = c(this.observers), e = n.length;
              if (this.hasValue)for (t = 0; e > t; t++) {
                var r = n[t];
                r.onNext(this.value), r.onCompleted()
              } else for (t = 0; e > t; t++)n[t].onCompleted();
              this.observers.length = 0
            }
          }, onError: function (t) {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0, this.hasError = !0, this.error = t;
              for (var e = 0, n = c(this.observers), r = n.length; r > e; e++)n[e].onError(t);
              this.observers.length = 0
            }
          }, onNext: function (t) {
            pn(this), this.isStopped || (this.value = t, this.hasValue = !0)
          }, dispose: function () {
            this.isDisposed = !0, this.observers = null, this.error = null, this.value = null
          }
        }), e
      }(Yn), ku = Gt.BehaviorSubject = function (t) {
        function e(e) {
          t.call(this), this.value = e, this.observers = [], this.isDisposed = !1, this.isStopped = !1, this.hasError = !1
        }

        return tn(e, t), en(e.prototype, Wn.prototype, {
          _subscribe: function (t) {
            return pn(this), this.isStopped ? (this.hasError ? t.onError(this.error) : t.onCompleted(), hn) : (this.observers.push(t), t.onNext(this.value), new Ti(this, t))
          }, getValue: function () {
            return pn(this), this.hasError && h(this.error), this.value
          }, hasObservers: function () {
            return this.observers.length > 0
          }, onCompleted: function () {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0;
              for (var t = 0, e = c(this.observers), n = e.length; n > t; t++)e[t].onCompleted();
              this.observers.length = 0
            }
          }, onError: function (t) {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0, this.hasError = !0, this.error = t;
              for (var e = 0, n = c(this.observers), r = n.length; r > e; e++)n[e].onError(t);
              this.observers.length = 0
            }
          }, onNext: function (t) {
            if (pn(this), !this.isStopped) {
              this.value = t;
              for (var e = 0, n = c(this.observers), r = n.length; r > e; e++)n[e].onNext(t)
            }
          }, dispose: function () {
            this.isDisposed = !0, this.observers = null, this.value = null, this.error = null
          }
        }), e
      }(Yn), Su = Gt.ReplaySubject = function (t) {
        function e(t, e) {
          return an(function () {
            e.dispose(), !t.isDisposed && t.observers.splice(t.observers.indexOf(e), 1)
          })
        }

        function n(e, n, o) {
          this.bufferSize = null == e ? r : e, this.windowSize = null == n ? r : n, this.scheduler = o || Nn, this.q = [], this.observers = [], this.isStopped = !1, this.isDisposed = !1, this.hasError = !1, this.error = null, t.call(this)
        }

        var r = Math.pow(2, 53) - 1;
        return tn(n, t), en(n.prototype, Wn.prototype, {
          _subscribe: function (t) {
            pn(this);
            var n = new $n(this.scheduler, t), r = e(this, n);
            this._trim(this.scheduler.now()), this.observers.push(n);
            for (var o = 0, i = this.q.length; i > o; o++)n.onNext(this.q[o].value);
            return this.hasError ? n.onError(this.error) : this.isStopped && n.onCompleted(), n.ensureActive(), r
          }, hasObservers: function () {
            return this.observers.length > 0
          }, _trim: function (t) {
            for (; this.q.length > this.bufferSize;)this.q.shift();
            for (; this.q.length > 0 && t - this.q[0].interval > this.windowSize;)this.q.shift()
          }, onNext: function (t) {
            if (pn(this), !this.isStopped) {
              var e = this.scheduler.now();
              this.q.push({interval: e, value: t}), this._trim(e);
              for (var n = 0, r = c(this.observers), o = r.length; o > n; n++) {
                var i = r[n];
                i.onNext(t), i.ensureActive()
              }
            }
          }, onError: function (t) {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0, this.error = t, this.hasError = !0;
              var e = this.scheduler.now();
              this._trim(e);
              for (var n = 0, r = c(this.observers), o = r.length; o > n; n++) {
                var i = r[n];
                i.onError(t), i.ensureActive()
              }
              this.observers.length = 0
            }
          }, onCompleted: function () {
            if (pn(this), !this.isStopped) {
              this.isStopped = !0;
              var t = this.scheduler.now();
              this._trim(t);
              for (var e = 0, n = c(this.observers), r = n.length; r > e; e++) {
                var o = n[e];
                o.onCompleted(), o.ensureActive()
              }
              this.observers.length = 0
            }
          }, dispose: function () {
            this.isDisposed = !0, this.observers = null
          }
        }), n
      }(Yn), Tu = Gt.AnonymousSubject = function (t) {
        function e(e, n) {
          this.observer = e, this.observable = n, t.call(this)
        }

        return tn(e, t), en(e.prototype, Wn.prototype, {
          _subscribe: function (t) {
            return this.observable.subscribe(t)
          }, onCompleted: function () {
            this.observer.onCompleted()
          }, onError: function (t) {
            this.observer.onError(t)
          }, onNext: function (t) {
            this.observer.onNext(t)
          }
        }), e
      }(Yn);
      Gt.Pauser = function (t) {
        function e() {
          t.call(this)
        }

        return tn(e, t), e.prototype.pause = function () {
          this.onNext(!1)
        }, e.prototype.resume = function () {
          this.onNext(!0)
        }, e
      }(Nu), Kt.Rx = Gt, r = function () {
        return Gt
      }.call(e, n, e, t), !(r !== u && (t.exports = r));
      var ju = v()
    }).call(this)
  }).call(e, n(60)(t), function () {
    return this
  }(), n(36))
}, function (t, e, n) {
  function r(t) {
    return t && "VirtualNode" === t.type && t.version === o
  }

  var o = n(6);
  t.exports = r
}, function (t, e) {
  function n(t) {
    return t && "Thunk" === t.type
  }

  t.exports = n
}, function (t, e, n) {
  function r(t) {
    return t && "VirtualText" === t.type && t.version === o
  }

  var o = n(6);
  t.exports = r
}, function (t, e) {
  t.exports = "2"
}, function (t, e) {
  function n(t) {
    return t && ("function" == typeof t.hook && !t.hasOwnProperty("hook") || "function" == typeof t.unhook && !t.hasOwnProperty("unhook"))
  }

  t.exports = n
}, function (t, e) {
  function n(t) {
    return "[object Array]" === o.call(t)
  }

  var r = Array.isArray, o = Object.prototype.toString;
  t.exports = r || n
}, function (t, e, n) {
  "use strict";
  function r(t, e, n) {
    var r, u, s, a, h = [];
    return !n && c(e) && (n = e, u = {}), u = u || e || {}, r = y(t, u), u.hasOwnProperty("key") && (s = u.key, u.key = void 0), u.hasOwnProperty("namespace") && (a = u.namespace, u.namespace = void 0), "INPUT" !== r || a || !u.hasOwnProperty("value") || void 0 === u.value || _(u.value) || (u.value = E(u.value)), i(u), void 0 !== n && null !== n && o(n, h, r, u), new p(r, u, h, s, a)
  }

  function o(t, e, n, r) {
    if ("string" == typeof t)e.push(new f(t)); else if ("number" == typeof t)e.push(new f(String(t))); else if (s(t))e.push(t); else {
      if (!l(t)) {
        if (null === t || void 0 === t)return;
        throw a({foreignObject: t, parentVnode: {tagName: n, properties: r}})
      }
      for (var i = 0; i < t.length; i++)o(t[i], e, n, r)
    }
  }

  function i(t) {
    for (var e in t)if (t.hasOwnProperty(e)) {
      var n = t[e];
      if (_(n))continue;
      "ev-" === e.substr(0, 3) && (t[e] = A(n))
    }
  }

  function u(t) {
    return t && "function" == typeof t.subscribe
  }

  function s(t) {
    return d(t) || v(t) || u(t) || b(t) || m(t)
  }

  function c(t) {
    return "string" == typeof t || l(t) || s(t)
  }

  function a(t) {
    var e = new Error;
    return e.type = "virtual-hyperscript.unexpected.virtual-element", e.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + h(t.foreignObject) + ".\nThe parent vnode is:\n" + h(t.parentVnode), e.foreignObject = t.foreignObject, e.parentVnode = t.parentVnode, e
  }

  function h(t) {
    try {
      return JSON.stringify(t, null, "    ")
    } catch (e) {
      return String(t)
    }
  }

  var l = n(8), p = n(10), f = n(20), d = n(3), v = n(5), b = n(1), _ = n(7), m = n(4), y = n(56), E = n(17), A = n(55);
  t.exports = r
}, function (t, e, n) {
  function r(t, e, n, r, o) {
    this.tagName = t, this.properties = e || a, this.children = n || h, this.key = null != r ? String(r) : void 0, this.namespace = "string" == typeof o ? o : null;
    var l, p = n && n.length || 0, f = 0, d = !1, v = !1, b = !1;
    for (var _ in e)if (e.hasOwnProperty(_)) {
      var m = e[_];
      c(m) && m.unhook && (l || (l = {}), l[_] = m)
    }
    for (var y = 0; p > y; y++) {
      var E = n[y];
      i(E) ? (f += E.count || 0, !d && E.hasWidgets && (d = !0), !v && E.hasThunks && (v = !0), b || !E.hooks && !E.descendantHooks || (b = !0)) : !d && u(E) ? "function" == typeof E.destroy && (d = !0) : !v && s(E) && (v = !0)
    }
    this.count = p + f, this.hasWidgets = d, this.hasThunks = v, this.hooks = l, this.descendantHooks = b
  }

  var o = n(6), i = n(3), u = n(1), s = n(4), c = n(7);
  t.exports = r;
  var a = {}, h = [];
  r.prototype.version = o, r.prototype.type = "VirtualNode"
}, function (t, e, n) {
  "use strict";
  function r(t) {
    if ("function" == typeof t.subscribe)return t.flatMapLatest(r);
    if ("VirtualText" === t.type)return o.Observable.just(t);
    if ("VirtualNode" === t.type && Array.isArray(t.children) && t.children.length > 0)return o.Observable.combineLatest(t.children.map(r), function () {
      for (var e = arguments.length, n = Array(e), r = 0; e > r; r++)n[r] = arguments[r];
      return new i(t.tagName, t.properties, n, t.key, t.namespace)
    });
    if ("VirtualNode" === t.type || "Widget" === t.type || "Thunk" === t.type)return o.Observable.just(t);
    throw new Error("Unhandled case in transposeVTree()")
  }

  var o = n(2), i = n(10);
  t.exports = {transposeVTree: r}
}, function (t, e) {/*!
 * escape-html
 * Copyright(c) 2012-2013 TJ Holowaychuk
 * Copyright(c) 2015 Andreas Lubbe
 * Copyright(c) 2015 Tiancheng "Timothy" Gu
 * MIT Licensed
 */
  "use strict";
  function n(t) {
    var e = "" + t, n = r.exec(e);
    if (!n)return e;
    var o, i = "", u = 0, s = 0;
    for (u = n.index; u < e.length; u++) {
      switch (e.charCodeAt(u)) {
        case 34:
          o = "&quot;";
          break;
        case 38:
          o = "&amp;";
          break;
        case 39:
          o = "&#39;";
          break;
        case 60:
          o = "&lt;";
          break;
        case 62:
          o = "&gt;";
          break;
        default:
          continue
      }
      s !== u && (i += e.substring(s, u)), s = u + 1, i += o
    }
    return s !== u ? i + e.substring(s, u) : i
  }

  var r = /["'&<>]/;
  t.exports = n
}, function (t, e, n) {
  (function (e) {
    var r = "undefined" != typeof e ? e : "undefined" != typeof window ? window : {}, o = n(62);
    if ("undefined" != typeof document)t.exports = document; else {
      var i = r["__GLOBAL_DOCUMENT_CACHE@4"];
      i || (i = r["__GLOBAL_DOCUMENT_CACHE@4"] = o), t.exports = i
    }
  }).call(e, function () {
    return this
  }())
}, function (t, e) {
  "use strict";
  t.exports = function (t) {
    return "object" == typeof t && null !== t
  }
}, function (t, e, n) {
  function r(t, e, n) {
    for (var r in e) {
      var u = e[r];
      void 0 === u ? o(t, r, u, n) : c(u) ? (o(t, r, u, n), u.hook && u.hook(t, r, n ? n[r] : void 0)) : s(u) ? i(t, e, n, r, u) : t[r] = u
    }
  }

  function o(t, e, n, r) {
    if (r) {
      var o = r[e];
      if (c(o))o.unhook && o.unhook(t, e, n); else if ("attributes" === e)for (var i in o)t.removeAttribute(i); else if ("style" === e)for (var u in o)t.style[u] = ""; else"string" == typeof o ? t[e] = "" : t[e] = null
    }
  }

  function i(t, e, n, r, o) {
    var i = n ? n[r] : void 0;
    if ("attributes" !== r) {
      if (i && s(i) && u(i) !== u(o))return void(t[r] = o);
      s(t[r]) || (t[r] = {});
      var c = "style" === r ? "" : void 0;
      for (var a in o) {
        var h = o[a];
        t[r][a] = void 0 === h ? c : h
      }
    } else for (var l in o) {
      var p = o[l];
      void 0 === p ? t.removeAttribute(l) : t.setAttribute(l, p)
    }
  }

  function u(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__ ? t.__proto__ : t.constructor ? t.constructor.prototype : void 0
  }

  var s = n(14), c = n(7);
  t.exports = r
}, function (t, e) {
  "use strict";
  function n(t, e) {
    return this instanceof n ? (this.namespace = t, void(this.value = e)) : new n(t, e)
  }

  t.exports = n, n.prototype.hook = function (t, e, n) {
    n && "AttributeHook" === n.type && n.value === this.value && n.namespace === this.namespace || t.setAttributeNS(this.namespace, e, this.value)
  }, n.prototype.unhook = function (t, e, n) {
    if (!n || "AttributeHook" !== n.type || n.namespace !== this.namespace) {
      var r = e.indexOf(":"), o = r > -1 ? e.substr(r + 1) : e;
      t.removeAttributeNS(this.namespace, o)
    }
  }, n.prototype.type = "AttributeHook"
}, function (t, e) {
  "use strict";
  function n(t) {
    return this instanceof n ? void(this.value = t) : new n(t)
  }

  t.exports = n, n.prototype.hook = function (t, e) {
    t[e] !== this.value && (t[e] = this.value)
  }
}, function (t, e, n) {
  function r(t, e) {
    var n = t, r = e;
    return c(e) && (r = o(e, t)), c(t) && (n = o(t, null)), {a: n, b: r}
  }

  function o(t, e) {
    var n = t.vnode;
    if (n || (n = t.vnode = t.render(e)), !(i(n) || u(n) || s(n)))throw new Error("thunk did not return a valid node");
    return n
  }

  var i = n(3), u = n(5), s = n(1), c = n(4);
  t.exports = r
}, function (t, e, n) {
  function r(t, e, n) {
    this.type = Number(t), this.vNode = e, this.patch = n
  }

  var o = n(6);
  r.NONE = 0, r.VTEXT = 1, r.VNODE = 2, r.WIDGET = 3, r.PROPS = 4, r.ORDER = 5, r.INSERT = 6, r.REMOVE = 7, r.THUNK = 8, t.exports = r, r.prototype.version = o, r.prototype.type = "VirtualPatch"
}, function (t, e, n) {
  function r(t) {
    this.text = String(t)
  }

  var o = n(6);
  t.exports = r, r.prototype.version = o, r.prototype.type = "VirtualText"
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = {};
    for (var n in t)t.hasOwnProperty(n) && (e[n] = new p.ReplaySubject(1));
    return e
  }

  function o(t, e) {
    var n = {};
    for (var r in t)t.hasOwnProperty(r) && (n[r] = t[r](e[r], r));
    return n
  }

  function i(t, e) {
    return Object.defineProperty(t, "dispose", {
      enumerable: !1, value: function () {
        e.dispose()
      }
    }), t
  }

  function u(t) {
    return function () {
      for (var e in t)t.hasOwnProperty(e) && "function" == typeof t[e].dispose && t[e].dispose()
    }
  }

  function s(t) {
    return Object.defineProperty(t, "dispose", {enumerable: !1, value: u(t)}), t
  }

  function c(t) {
    var e = t.stack || t;
    console && console.error && console.error(e)
  }

  function a(t, e) {
    return p.Observable.create(function (n) {
      var r = new p.CompositeDisposable;
      return setTimeout(function () {
        for (var o in t)t.hasOwnProperty(o) && e.hasOwnProperty(o) && !e[o].isDisposed && r.add(t[o].doOnError(c).subscribe(e[o].asObserver()));
        n.onNext(r)
      }, 1), function () {
        r.dispose();
        for (var t in e)e.hasOwnProperty(t) && e[t].dispose()
      }
    })
  }

  function h(t) {
    for (var e in t)if (t.hasOwnProperty(e))return !1;
    return !0
  }

  function l(t, e) {
    if ("function" != typeof t)throw new Error("First argument given to Cycle.run() must be the 'main' function.");
    if ("object" != typeof e || null === e)throw new Error("Second argument given to Cycle.run() must be an object with driver functions as properties.");
    if (h(e))throw new Error("Second argument given to Cycle.run() must be an object with at least one driver function declared as a property.");
    var n = r(e), u = o(e, n), c = t(u), l = a(c, n).subscribe(), p = i(c, l), f = s(u);
    return {sources: f, sinks: p}
  }

  var p = n(2), f = {run: l};
  t.exports = f
}, function (t, e, n) {
  "use strict";
  var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
      }
      return t
    }, o = n(27), i = n(25), u = i.makeDOMDriver, s = n(26), c = s.makeHTMLDriver, a = n(24), h = n(9), l = n(30)(h), p = r({
    makeDOMDriver: u,
    makeHTMLDriver: c,
    h: h
  }, l, {
    hJSX: function (t, e) {
      for (var n = arguments.length, r = Array(n > 2 ? n - 2 : 0), o = 2; n > o; o++)r[o - 2] = arguments[o];
      return h(t, e, r)
    }, svg: o, mockDOMSource: a
  });
  t.exports = p
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = t.element, n = t.eventName, r = t.handler, o = t.useCapture;
    if (e.addEventListener)return e.addEventListener(n, r, o), s(function () {
      e.removeEventListener(n, r, o)
    });
    throw new Error("No listener found")
  }

  function o(t) {
    var e = t.element, n = t.eventName, i = t.handler, u = t.useCapture, s = new c;
    if (Array.isArray(e))for (var a = 0, h = e.length; h > a; a++)s.add(o({
      element: e[a],
      eventName: n,
      handler: i,
      useCapture: u
    })); else e && s.add(r({element: e, eventName: n, handler: i, useCapture: u}));
    return s
  }

  function i(t, e) {
    var n = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2];
    return new a(function (r) {
      return o({
        element: t, eventName: e, handler: function () {
          r.onNext(arguments[0])
        }, useCapture: n
      })
    }).share()
  }

  var u = n(2), s = u.Disposable.create, c = u.CompositeDisposable, a = u.AnonymousObservable;
  t.exports = i
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return t && t.__esModule ? t : {"default": t}
  }

  function o(t) {
    return function (e) {
      for (var n in t)if (t.hasOwnProperty(n) && n === e)return t[n];
      return c
    }
  }

  function i() {
    var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
    return {
      select: function (e) {
        for (var n in t)if (t.hasOwnProperty(n) && n === e)return {observable: c, events: o(t[n])};
        return {
          observable: c, events: function () {
            return c
          }
        }
      }
    }
  }

  Object.defineProperty(e, "__esModule", {value: !0});
  var u = n(2), s = r(u), c = s["default"].Observable.empty();
  e["default"] = i, t.exports = e["default"]
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return "object" == typeof HTMLElement ? t instanceof HTMLElement || t instanceof DocumentFragment : t && "object" == typeof t && null !== t && (1 === t.nodeType || 11 === t.nodeType) && "string" == typeof t.nodeName
  }

  function o(t, e) {
    var n = t.properties.id, r = void 0 === n ? "" : n, o = t.properties.className, i = void 0 === o ? "" : o, u = r === e.id, s = i === e.className, c = t.tagName.toUpperCase() === e.tagName;
    if (u && s && c)return t;
    var a = {};
    return e.id && (a.id = e.id), e.className && (a.className = e.className), A.h(e.tagName, a, [t])
  }

  function i(t) {
    return function (e) {
      var n = m(e, 2), r = n[0], i = n[1];
      if ("undefined" == typeof i)return y.Observable.empty();
      var u = o(r, t), s = o(i, t);
      return t = A.patch(t, A.diff(u, s)), y.Observable.just(t)
    }
  }

  function u(t, e) {
    var n = i(e);
    return t.flatMapLatest(w).startWith(A.parse(e)).pairwise().flatMap(n)
  }

  function s(t, e) {
    return t.select(".cycle-scope-" + e)
  }

  function c(t, e) {
    return t.map(function (t) {
      var n = t.properties.className, r = void 0 === n ? "" : n;
      if (-1 === r.indexOf("cycle-scope-" + e)) {
        var o = (r + " cycle-scope-" + e).trim();
        t.properties.className = o
      }
      if (t.properties.attributes) {
        var i = t.properties.attributes["class"] || "";
        if (-1 === i.indexOf("cycle-scope-" + e)) {
          var u = (i + " cycle-scope-" + e).trim();
          t.properties.attributes["class"] = u
        }
      }
      return t
    })
  }

  function a(t) {
    var e = function (e) {
      var n = e.match(/cycle-scope-(\S+)/);
      return n && -1 === t.indexOf("." + e)
    }, n = function (e) {
      var n = e.match(/cycle-scope-(\S+)/);
      return n && -1 !== t.indexOf("." + e)
    };
    return function (t) {
      for (var r = t; r; r = r.parentElement) {
        var o = String.prototype.split, i = r.classList || o.call(r.className, " ");
        if (Array.prototype.some.call(i, n))return !0;
        if (Array.prototype.some.call(i, e))return !1
      }
      return !0
    }
  }

  function h(t) {
    t.hasOwnProperty("propagationHasBeenStopped") || !function () {
      t.propagationHasBeenStopped = !1;
      var e = t.stopPropagation;
      t.stopPropagation = function () {
        e.call(this), this.propagationHasBeenStopped = !0
      }
    }()
  }

  function l(t, e) {
    try {
      Object.defineProperty(t, "currentTarget", {value: e, configurable: !0})
    } catch (n) {
    }
    t.ownerTarget = e
  }

  function p(t, e) {
    var n = a(t), r = t.join(" "), o = t.join(""), i = e.parentElement;
    return function (t) {
      if (h(t), t.propagationHasBeenStopped)return !1;
      for (var e = t.target; e && e !== i; e = e.parentElement)if (n(e) && (C(e, r) || C(e, o)))return l(t, e), !0;
      return !1
    }
  }

  function f(t, e) {
    return function (n) {
      var r = arguments.length <= 1 || void 0 === arguments[1] ? {} : arguments[1];
      if ("string" != typeof n)throw new Error("DOM driver's events() expects argument to be a string representing the event type to listen for.");
      var o = !1;
      return -1 !== F.indexOf(n) && (o = !0), "boolean" == typeof r.useCapture && (o = r.useCapture), t.first().flatMapLatest(function (t) {
        if (!e || 0 === e.length)return E(t, n, o);
        var r = p(e, t);
        return E(t, n, o).filter(r)
      }).share()
    }
  }

  function d(t) {
    return function (e) {
      if ("string" != typeof e)throw new Error("DOM driver's select() expects the argument to be a string as a CSS selector");
      var n = this.namespace, r = e.trim(), o = ":root" === r ? n : n.concat(r), i = t.map(function (t) {
        if ("" === o.join(""))return t;
        var e = t.querySelectorAll(o.join(" "));
        0 === e.length && (e = t.querySelectorAll(o.join("")));
        var n = Array.prototype.slice.call(e);
        return n.filter(a(o))
      });
      return {observable: i, namespace: o, select: d(t), events: f(t, o), isolateSource: s, isolateSink: c}
    }
  }

  function v(t) {
    if (!t || "function" != typeof t.subscribe)throw new Error("The DOM driver function expects as input an Observable of virtual DOM elements")
  }

  function b(t) {
    console && console.error ? console.error(t) : console.log(t)
  }

  function _(t, e) {
    var n = "string" == typeof t ? document.querySelector(t) : t;
    if ("string" == typeof t && null === n)throw new Error("Cannot render into unknown element `" + t + "`");
    if (!r(n))throw new Error("Given container is not a DOM element neither a selector string.");
    var o = e || {}, i = o.onError, a = void 0 === i ? b : i;
    if ("function" != typeof a)throw new Error("You provided an `onError` to makeDOMDriver but it was not a function. It should be a callback function to handle errors.");
    return function (t) {
      v(t);
      var e = u(t, n).startWith(n).doOnError(a).replay(null, 1), r = e.connect();
      return {
        observable: e, namespace: [], select: d(e), events: f(e, []), dispose: function () {
          return r.dispose()
        }, isolateSource: s, isolateSink: c
      }
    }
  }

  var m = function () {
    function t(t, e) {
      var n = [], r = !0, o = !1, i = void 0;
      try {
        for (var u, s = t[Symbol.iterator](); !(r = (u = s.next()).done) && (n.push(u.value), !e || n.length !== e); r = !0);
      } catch (c) {
        o = !0, i = c
      } finally {
        try {
          !r && s["return"] && s["return"]()
        } finally {
          if (o)throw i
        }
      }
      return n
    }

    return function (e, n) {
      if (Array.isArray(e))return e;
      if (Symbol.iterator in Object(e))return t(e, n);
      throw new TypeError("Invalid attempt to destructure non-iterable instance")
    }
  }(), y = n(2), E = n(23), A = {
    h: n(9),
    diff: n(48),
    patch: n(49),
    parse: "undefined" != typeof window ? n(41) : function () {
    }
  }, g = n(11), w = g.transposeVTree, C = void 0;
  try {
    C = n(34)
  } catch (D) {
    C = function () {
    }
  }
  var F = ["load", "unload", "focus", "blur", "mouseenter", "mouseleave", "submit", "change", "reset"];
  t.exports = {
    isElement: r,
    wrapTopLevelVTree: o,
    makeDiffAndPatchToElement$: i,
    renderRawRootElem$: u,
    validateDOMSink: v,
    makeDOMDriver: _
  }
}, function (t, e, n) {
  "use strict";
  function r() {
    return function () {
      return {
        observable: i.Observable.empty(), events: function () {
          return i.Observable.empty()
        }
      }
    }
  }

  function o() {
    return function (t) {
      var e = t.flatMapLatest(c).last().map(u);
      return e.select = r(), e
    }
  }

  var i = n(2), u = n(45), s = n(11), c = s.transposeVTree;
  t.exports = {makeBogusSelect: r, makeHTMLDriver: o}
}, function (t, e, n) {
  "use strict";
  function r(t, e, n) {
    !n && i(e) && (n = e, e = {}), e = e || {}, e.namespace = h;
    var r = e.attributes || (e.attributes = {});
    for (var o in e)if (e.hasOwnProperty(o)) {
      var u = c(o);
      if (void 0 !== u) {
        var l = e[o];
        ("string" == typeof l || "number" == typeof l || "boolean" == typeof l) && (null === u ? (r[o] = l, e[o] = void 0) : e[o] = a(u, l))
      }
    }
    return s(t, e, n)
  }

  function o(t) {
    return t && "function" == typeof t.subscribe
  }

  function i(t) {
    return "string" == typeof t || u(t) || o(t)
  }

  var u = n(8), s = n(9), c = n(57), a = n(16), h = "http://www.w3.org/2000/svg";
  t.exports = r
}, function (t, e) {/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */
  t.exports = function (t) {
    var e, n = String.prototype.split, r = /()??/.exec("")[1] === t;
    return e = function (e, o, i) {
      if ("[object RegExp]" !== Object.prototype.toString.call(o))return n.call(e, o, i);
      var u, s, c, a, h = [], l = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.extended ? "x" : "") + (o.sticky ? "y" : ""), p = 0, o = new RegExp(o.source, l + "g");
      for (e += "", r || (u = new RegExp("^" + o.source + "$(?!\\s)", l)), i = i === t ? -1 >>> 0 : i >>> 0; (s = o.exec(e)) && (c = s.index + s[0].length, !(c > p && (h.push(e.slice(p, s.index)), !r && s.length > 1 && s[0].replace(u, function () {
        for (var e = 1; e < arguments.length - 2; e++)arguments[e] === t && (s[e] = t)
      }), s.length > 1 && s.index < e.length && Array.prototype.push.apply(h, s.slice(1)), a = s[0].length, p = c, h.length >= i)));)o.lastIndex === s.index && o.lastIndex++;
      return p === e.length ? (a || !o.test("")) && h.push("") : h.push(e.slice(p)), h.length > i ? h.slice(0, i) : h
    }
  }()
}, function (t, e, n) {
  "use strict";
  function r(t) {
    var e = t[u];
    return e || (e = t[u] = {}), e
  }

  var o = n(32), i = "7";
  o("ev-store", i);
  var u = "__EV_STORE_KEY@" + i;
  t.exports = r
}, function (t, e) {
  "use strict";
  var n = function (t) {
    return "string" == typeof t && t.length > 0
  }, r = function (t, e) {
    return 0 === t.indexOf(e)
  }, o = function (t) {
    return n(t) && (r(t, ".") || r(t, "#"))
  }, i = function (t) {
    return function (e) {
      return function (n) {
        for (var r = arguments.length, i = Array(r > 1 ? r - 1 : 0), u = 1; r > u; u++)i[u - 1] = arguments[u];
        return o(n) ? t.apply(void 0, [e + n].concat(i)) : t.apply(void 0, [e, n].concat(i))
      }
    }
  }, u = ["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "dd", "del", "dfn", "dir", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "map", "mark", "menu", "meta", "nav", "noscript", "object", "ol", "optgroup", "option", "p", "param", "pre", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "title", "tr", "u", "ul", "video"];
  t.exports = function (t) {
    var e = {TAG_NAMES: u, isSelector: o}, n = i(t);
    return u.forEach(function (t) {
      e[t] = n(t)
    }), e
  }
}, function (t, e) {
  (function (e) {
    "use strict";
    function n(t, e) {
      return t in r ? r[t] : (r[t] = e, e)
    }

    var r = "undefined" != typeof window ? window : "undefined" != typeof e ? e : {};
    t.exports = n
  }).call(e, function () {
    return this
  }())
}, function (t, e, n) {
  "use strict";
  function r(t, e, n) {
    var r = "__INDIVIDUAL_ONE_VERSION_" + t, i = r + "_ENFORCE_SINGLETON", u = o(i, e);
    if (u !== e)throw new Error("Can only have one copy of " + t + ".\nYou already have version " + u + " installed.\nThis means you cannot install version " + e);
    return o(r, n)
  }

  var o = n(31);
  t.exports = r
}, function (t, e) {
  var n = {
    tr: {regexp: /\u0130|\u0049|\u0049\u0307/g, map: {"İ": "i", I: "ı", "İ": "i"}},
    az: {regexp: /[\u0130]/g, map: {"İ": "i", I: "ı", "İ": "i"}},
    lt: {
      regexp: /[\u0049\u004A\u012E\u00CC\u00CD\u0128]/g,
      map: {I: "i̇", J: "j̇", "Į": "į̇", "Ì": "i̇̀", "Í": "i̇́", "Ĩ": "i̇̃"}
    }
  };
  t.exports = function (t, e) {
    var r = n[e];
    return t = null == t ? "" : String(t), r && (t = t.replace(r.regexp, function (t) {
      return r.map[t]
    })), t.toLowerCase()
  }
}, function (t, e) {
  "use strict";
  function n(t, e) {
    if (o)return o.call(t, e);
    for (var n = t.parentNode.querySelectorAll(e), r = 0; r < n.length; r++)if (n[r] == t)return !0;
    return !1
  }

  var r = Element.prototype, o = r.matches || r.matchesSelector || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector || r.oMatchesSelector;
  t.exports = n
}, function (t, e, n) {
  var r = n(37);
  t.exports = function (t, e) {
    return r(t, e, "-")
  }
}, function (t, e) {
  function n() {
    a = !1, u.length ? c = u.concat(c) : h = -1, c.length && r()
  }

  function r() {
    if (!a) {
      var t = setTimeout(n);
      a = !0;
      for (var e = c.length; e;) {
        for (u = c, c = []; ++h < e;)u && u[h].run();
        h = -1, e = c.length
      }
      u = null, a = !1, clearTimeout(t)
    }
  }

  function o(t, e) {
    this.fun = t, this.array = e
  }

  function i() {
  }

  var u, s = t.exports = {}, c = [], a = !1, h = -1;
  s.nextTick = function (t) {
    var e = new Array(arguments.length - 1);
    if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)e[n - 1] = arguments[n];
    c.push(new o(t, e)), 1 !== c.length || a || setTimeout(r, 0)
  }, o.prototype.run = function () {
    this.fun.apply(null, this.array)
  }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = i, s.addListener = i, s.once = i, s.off = i, s.removeListener = i, s.removeAllListeners = i, s.emit = i, s.binding = function (t) {
    throw new Error("process.binding is not supported")
  }, s.cwd = function () {
    return "/"
  }, s.chdir = function (t) {
    throw new Error("process.chdir is not supported")
  }, s.umask = function () {
    return 0
  }
}, function (t, e, n) {
  var r = n(33), o = n(39), i = n(38), u = n(40);
  t.exports = function (t, e, n) {
    function s(t, e, r) {
      return 0 === e || e === r.length - t.length ? "" : n
    }

    return null == t ? "" : (n = n || " ", t = String(t).replace(i, "$1 $2").replace(u, "$1 $2").replace(o, s), r(t, e))
  }
}, function (t, e) {
  t.exports = /([\u0061-\u007A\u00B5\u00DF-\u00F6\u00F8-\u00FF\u0101\u0103\u0105\u0107\u0109\u010B\u010D\u010F\u0111\u0113\u0115\u0117\u0119\u011B\u011D\u011F\u0121\u0123\u0125\u0127\u0129\u012B\u012D\u012F\u0131\u0133\u0135\u0137\u0138\u013A\u013C\u013E\u0140\u0142\u0144\u0146\u0148\u0149\u014B\u014D\u014F\u0151\u0153\u0155\u0157\u0159\u015B\u015D\u015F\u0161\u0163\u0165\u0167\u0169\u016B\u016D\u016F\u0171\u0173\u0175\u0177\u017A\u017C\u017E-\u0180\u0183\u0185\u0188\u018C\u018D\u0192\u0195\u0199-\u019B\u019E\u01A1\u01A3\u01A5\u01A8\u01AA\u01AB\u01AD\u01B0\u01B4\u01B6\u01B9\u01BA\u01BD-\u01BF\u01C6\u01C9\u01CC\u01CE\u01D0\u01D2\u01D4\u01D6\u01D8\u01DA\u01DC\u01DD\u01DF\u01E1\u01E3\u01E5\u01E7\u01E9\u01EB\u01ED\u01EF\u01F0\u01F3\u01F5\u01F9\u01FB\u01FD\u01FF\u0201\u0203\u0205\u0207\u0209\u020B\u020D\u020F\u0211\u0213\u0215\u0217\u0219\u021B\u021D\u021F\u0221\u0223\u0225\u0227\u0229\u022B\u022D\u022F\u0231\u0233-\u0239\u023C\u023F\u0240\u0242\u0247\u0249\u024B\u024D\u024F-\u0293\u0295-\u02AF\u0371\u0373\u0377\u037B-\u037D\u0390\u03AC-\u03CE\u03D0\u03D1\u03D5-\u03D7\u03D9\u03DB\u03DD\u03DF\u03E1\u03E3\u03E5\u03E7\u03E9\u03EB\u03ED\u03EF-\u03F3\u03F5\u03F8\u03FB\u03FC\u0430-\u045F\u0461\u0463\u0465\u0467\u0469\u046B\u046D\u046F\u0471\u0473\u0475\u0477\u0479\u047B\u047D\u047F\u0481\u048B\u048D\u048F\u0491\u0493\u0495\u0497\u0499\u049B\u049D\u049F\u04A1\u04A3\u04A5\u04A7\u04A9\u04AB\u04AD\u04AF\u04B1\u04B3\u04B5\u04B7\u04B9\u04BB\u04BD\u04BF\u04C2\u04C4\u04C6\u04C8\u04CA\u04CC\u04CE\u04CF\u04D1\u04D3\u04D5\u04D7\u04D9\u04DB\u04DD\u04DF\u04E1\u04E3\u04E5\u04E7\u04E9\u04EB\u04ED\u04EF\u04F1\u04F3\u04F5\u04F7\u04F9\u04FB\u04FD\u04FF\u0501\u0503\u0505\u0507\u0509\u050B\u050D\u050F\u0511\u0513\u0515\u0517\u0519\u051B\u051D\u051F\u0521\u0523\u0525\u0527\u0561-\u0587\u1D00-\u1D2B\u1D6B-\u1D77\u1D79-\u1D9A\u1E01\u1E03\u1E05\u1E07\u1E09\u1E0B\u1E0D\u1E0F\u1E11\u1E13\u1E15\u1E17\u1E19\u1E1B\u1E1D\u1E1F\u1E21\u1E23\u1E25\u1E27\u1E29\u1E2B\u1E2D\u1E2F\u1E31\u1E33\u1E35\u1E37\u1E39\u1E3B\u1E3D\u1E3F\u1E41\u1E43\u1E45\u1E47\u1E49\u1E4B\u1E4D\u1E4F\u1E51\u1E53\u1E55\u1E57\u1E59\u1E5B\u1E5D\u1E5F\u1E61\u1E63\u1E65\u1E67\u1E69\u1E6B\u1E6D\u1E6F\u1E71\u1E73\u1E75\u1E77\u1E79\u1E7B\u1E7D\u1E7F\u1E81\u1E83\u1E85\u1E87\u1E89\u1E8B\u1E8D\u1E8F\u1E91\u1E93\u1E95-\u1E9D\u1E9F\u1EA1\u1EA3\u1EA5\u1EA7\u1EA9\u1EAB\u1EAD\u1EAF\u1EB1\u1EB3\u1EB5\u1EB7\u1EB9\u1EBB\u1EBD\u1EBF\u1EC1\u1EC3\u1EC5\u1EC7\u1EC9\u1ECB\u1ECD\u1ECF\u1ED1\u1ED3\u1ED5\u1ED7\u1ED9\u1EDB\u1EDD\u1EDF\u1EE1\u1EE3\u1EE5\u1EE7\u1EE9\u1EEB\u1EED\u1EEF\u1EF1\u1EF3\u1EF5\u1EF7\u1EF9\u1EFB\u1EFD\u1EFF-\u1F07\u1F10-\u1F15\u1F20-\u1F27\u1F30-\u1F37\u1F40-\u1F45\u1F50-\u1F57\u1F60-\u1F67\u1F70-\u1F7D\u1F80-\u1F87\u1F90-\u1F97\u1FA0-\u1FA7\u1FB0-\u1FB4\u1FB6\u1FB7\u1FBE\u1FC2-\u1FC4\u1FC6\u1FC7\u1FD0-\u1FD3\u1FD6\u1FD7\u1FE0-\u1FE7\u1FF2-\u1FF4\u1FF6\u1FF7\u210A\u210E\u210F\u2113\u212F\u2134\u2139\u213C\u213D\u2146-\u2149\u214E\u2184\u2C30-\u2C5E\u2C61\u2C65\u2C66\u2C68\u2C6A\u2C6C\u2C71\u2C73\u2C74\u2C76-\u2C7B\u2C81\u2C83\u2C85\u2C87\u2C89\u2C8B\u2C8D\u2C8F\u2C91\u2C93\u2C95\u2C97\u2C99\u2C9B\u2C9D\u2C9F\u2CA1\u2CA3\u2CA5\u2CA7\u2CA9\u2CAB\u2CAD\u2CAF\u2CB1\u2CB3\u2CB5\u2CB7\u2CB9\u2CBB\u2CBD\u2CBF\u2CC1\u2CC3\u2CC5\u2CC7\u2CC9\u2CCB\u2CCD\u2CCF\u2CD1\u2CD3\u2CD5\u2CD7\u2CD9\u2CDB\u2CDD\u2CDF\u2CE1\u2CE3\u2CE4\u2CEC\u2CEE\u2CF3\u2D00-\u2D25\u2D27\u2D2D\uA641\uA643\uA645\uA647\uA649\uA64B\uA64D\uA64F\uA651\uA653\uA655\uA657\uA659\uA65B\uA65D\uA65F\uA661\uA663\uA665\uA667\uA669\uA66B\uA66D\uA681\uA683\uA685\uA687\uA689\uA68B\uA68D\uA68F\uA691\uA693\uA695\uA697\uA723\uA725\uA727\uA729\uA72B\uA72D\uA72F-\uA731\uA733\uA735\uA737\uA739\uA73B\uA73D\uA73F\uA741\uA743\uA745\uA747\uA749\uA74B\uA74D\uA74F\uA751\uA753\uA755\uA757\uA759\uA75B\uA75D\uA75F\uA761\uA763\uA765\uA767\uA769\uA76B\uA76D\uA76F\uA771-\uA778\uA77A\uA77C\uA77F\uA781\uA783\uA785\uA787\uA78C\uA78E\uA791\uA793\uA7A1\uA7A3\uA7A5\uA7A7\uA7A9\uA7FA\uFB00-\uFB06\uFB13-\uFB17\uFF41-\uFF5A])([\u0041-\u005A\u00C0-\u00D6\u00D8-\u00DE\u0100\u0102\u0104\u0106\u0108\u010A\u010C\u010E\u0110\u0112\u0114\u0116\u0118\u011A\u011C\u011E\u0120\u0122\u0124\u0126\u0128\u012A\u012C\u012E\u0130\u0132\u0134\u0136\u0139\u013B\u013D\u013F\u0141\u0143\u0145\u0147\u014A\u014C\u014E\u0150\u0152\u0154\u0156\u0158\u015A\u015C\u015E\u0160\u0162\u0164\u0166\u0168\u016A\u016C\u016E\u0170\u0172\u0174\u0176\u0178\u0179\u017B\u017D\u0181\u0182\u0184\u0186\u0187\u0189-\u018B\u018E-\u0191\u0193\u0194\u0196-\u0198\u019C\u019D\u019F\u01A0\u01A2\u01A4\u01A6\u01A7\u01A9\u01AC\u01AE\u01AF\u01B1-\u01B3\u01B5\u01B7\u01B8\u01BC\u01C4\u01C7\u01CA\u01CD\u01CF\u01D1\u01D3\u01D5\u01D7\u01D9\u01DB\u01DE\u01E0\u01E2\u01E4\u01E6\u01E8\u01EA\u01EC\u01EE\u01F1\u01F4\u01F6-\u01F8\u01FA\u01FC\u01FE\u0200\u0202\u0204\u0206\u0208\u020A\u020C\u020E\u0210\u0212\u0214\u0216\u0218\u021A\u021C\u021E\u0220\u0222\u0224\u0226\u0228\u022A\u022C\u022E\u0230\u0232\u023A\u023B\u023D\u023E\u0241\u0243-\u0246\u0248\u024A\u024C\u024E\u0370\u0372\u0376\u0386\u0388-\u038A\u038C\u038E\u038F\u0391-\u03A1\u03A3-\u03AB\u03CF\u03D2-\u03D4\u03D8\u03DA\u03DC\u03DE\u03E0\u03E2\u03E4\u03E6\u03E8\u03EA\u03EC\u03EE\u03F4\u03F7\u03F9\u03FA\u03FD-\u042F\u0460\u0462\u0464\u0466\u0468\u046A\u046C\u046E\u0470\u0472\u0474\u0476\u0478\u047A\u047C\u047E\u0480\u048A\u048C\u048E\u0490\u0492\u0494\u0496\u0498\u049A\u049C\u049E\u04A0\u04A2\u04A4\u04A6\u04A8\u04AA\u04AC\u04AE\u04B0\u04B2\u04B4\u04B6\u04B8\u04BA\u04BC\u04BE\u04C0\u04C1\u04C3\u04C5\u04C7\u04C9\u04CB\u04CD\u04D0\u04D2\u04D4\u04D6\u04D8\u04DA\u04DC\u04DE\u04E0\u04E2\u04E4\u04E6\u04E8\u04EA\u04EC\u04EE\u04F0\u04F2\u04F4\u04F6\u04F8\u04FA\u04FC\u04FE\u0500\u0502\u0504\u0506\u0508\u050A\u050C\u050E\u0510\u0512\u0514\u0516\u0518\u051A\u051C\u051E\u0520\u0522\u0524\u0526\u0531-\u0556\u10A0-\u10C5\u10C7\u10CD\u1E00\u1E02\u1E04\u1E06\u1E08\u1E0A\u1E0C\u1E0E\u1E10\u1E12\u1E14\u1E16\u1E18\u1E1A\u1E1C\u1E1E\u1E20\u1E22\u1E24\u1E26\u1E28\u1E2A\u1E2C\u1E2E\u1E30\u1E32\u1E34\u1E36\u1E38\u1E3A\u1E3C\u1E3E\u1E40\u1E42\u1E44\u1E46\u1E48\u1E4A\u1E4C\u1E4E\u1E50\u1E52\u1E54\u1E56\u1E58\u1E5A\u1E5C\u1E5E\u1E60\u1E62\u1E64\u1E66\u1E68\u1E6A\u1E6C\u1E6E\u1E70\u1E72\u1E74\u1E76\u1E78\u1E7A\u1E7C\u1E7E\u1E80\u1E82\u1E84\u1E86\u1E88\u1E8A\u1E8C\u1E8E\u1E90\u1E92\u1E94\u1E9E\u1EA0\u1EA2\u1EA4\u1EA6\u1EA8\u1EAA\u1EAC\u1EAE\u1EB0\u1EB2\u1EB4\u1EB6\u1EB8\u1EBA\u1EBC\u1EBE\u1EC0\u1EC2\u1EC4\u1EC6\u1EC8\u1ECA\u1ECC\u1ECE\u1ED0\u1ED2\u1ED4\u1ED6\u1ED8\u1EDA\u1EDC\u1EDE\u1EE0\u1EE2\u1EE4\u1EE6\u1EE8\u1EEA\u1EEC\u1EEE\u1EF0\u1EF2\u1EF4\u1EF6\u1EF8\u1EFA\u1EFC\u1EFE\u1F08-\u1F0F\u1F18-\u1F1D\u1F28-\u1F2F\u1F38-\u1F3F\u1F48-\u1F4D\u1F59\u1F5B\u1F5D\u1F5F\u1F68-\u1F6F\u1FB8-\u1FBB\u1FC8-\u1FCB\u1FD8-\u1FDB\u1FE8-\u1FEC\u1FF8-\u1FFB\u2102\u2107\u210B-\u210D\u2110-\u2112\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u2130-\u2133\u213E\u213F\u2145\u2183\u2C00-\u2C2E\u2C60\u2C62-\u2C64\u2C67\u2C69\u2C6B\u2C6D-\u2C70\u2C72\u2C75\u2C7E-\u2C80\u2C82\u2C84\u2C86\u2C88\u2C8A\u2C8C\u2C8E\u2C90\u2C92\u2C94\u2C96\u2C98\u2C9A\u2C9C\u2C9E\u2CA0\u2CA2\u2CA4\u2CA6\u2CA8\u2CAA\u2CAC\u2CAE\u2CB0\u2CB2\u2CB4\u2CB6\u2CB8\u2CBA\u2CBC\u2CBE\u2CC0\u2CC2\u2CC4\u2CC6\u2CC8\u2CCA\u2CCC\u2CCE\u2CD0\u2CD2\u2CD4\u2CD6\u2CD8\u2CDA\u2CDC\u2CDE\u2CE0\u2CE2\u2CEB\u2CED\u2CF2\uA640\uA642\uA644\uA646\uA648\uA64A\uA64C\uA64E\uA650\uA652\uA654\uA656\uA658\uA65A\uA65C\uA65E\uA660\uA662\uA664\uA666\uA668\uA66A\uA66C\uA680\uA682\uA684\uA686\uA688\uA68A\uA68C\uA68E\uA690\uA692\uA694\uA696\uA722\uA724\uA726\uA728\uA72A\uA72C\uA72E\uA732\uA734\uA736\uA738\uA73A\uA73C\uA73E\uA740\uA742\uA744\uA746\uA748\uA74A\uA74C\uA74E\uA750\uA752\uA754\uA756\uA758\uA75A\uA75C\uA75E\uA760\uA762\uA764\uA766\uA768\uA76A\uA76C\uA76E\uA779\uA77B\uA77D\uA77E\uA780\uA782\uA784\uA786\uA78B\uA78D\uA790\uA792\uA7A0\uA7A2\uA7A4\uA7A6\uA7A8\uA7AA\uFF21-\uFF3A\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g
}, function (t, e) {
  t.exports = /[^\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19]+/g
}, function (t, e) {
  t.exports = /([\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])([^\u0030-\u0039\u00B2\u00B3\u00B9\u00BC-\u00BE\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u09F4-\u09F9\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0B72-\u0B77\u0BE6-\u0BF2\u0C66-\u0C6F\u0C78-\u0C7E\u0CE6-\u0CEF\u0D66-\u0D75\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F33\u1040-\u1049\u1090-\u1099\u1369-\u137C\u16EE-\u16F0\u17E0-\u17E9\u17F0-\u17F9\u1810-\u1819\u1946-\u194F\u19D0-\u19DA\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\u2070\u2074-\u2079\u2080-\u2089\u2150-\u2182\u2185-\u2189\u2460-\u249B\u24EA-\u24FF\u2776-\u2793\u2CFD\u3007\u3021-\u3029\u3038-\u303A\u3192-\u3195\u3220-\u3229\u3248-\u324F\u3251-\u325F\u3280-\u3289\u32B1-\u32BF\uA620-\uA629\uA6E6-\uA6EF\uA830-\uA835\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19])/g
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!t)return o(document.createTextNode(""));
    if ("string" == typeof t) {
      var n = f.parseFromString(t, "text/html");
      t = n.body.firstChild ? n.body.firstChild : n.head.firstChild && ("TITLE" !== n.head.firstChild.tagName || n.title) ? n.head.firstChild : n.firstChild && "HTML" !== n.firstChild.tagName ? n.firstChild : document.createTextNode("")
    }
    if ("object" != typeof t || !t || !t.nodeType)throw new Error("invalid dom node", t);
    return o(t, e)
  }

  function o(t, e) {
    return 3 === t.nodeType ? i(t) : 1 === t.nodeType || 9 === t.nodeType ? u(t, e) : new p("")
  }

  function i(t) {
    return new p(t.nodeValue)
  }

  function u(t, e) {
    var n = t.namespaceURI !== b ? t.namespaceURI : null, r = e && t.getAttribute(e) ? t.getAttribute(e) : null;
    return new l(t.tagName, c(t), s(t, e), r, n)
  }

  function s(t, e) {
    for (var n = [], r = 0; r < t.childNodes.length; r++)n.push(o(t.childNodes[r], e));
    return n
  }

  function c(t) {
    var e = {};
    if (!t.hasAttributes())return e;
    var n;
    t.namespaceURI && t.namespaceURI !== b && (n = t.namespaceURI);
    for (var r, o = 0; o < t.attributes.length; o++)r = n ? h(t.attributes[o]) : a(t.attributes[o]), r.ns ? e[r.name] = {
      namespace: r.ns,
      value: r.value
    } : r.isAttr ? (e.attributes || (e.attributes = {}), e.attributes[r.name] = r.value) : e[r.name] = r.value;
    return e
  }

  function a(t) {
    var e, n, r;
    if (e = d[t.name] ? d[t.name] : t.name, "style" === e) {
      var o = {};
      t.value.split(";").forEach(function (t) {
        var e = t.indexOf(":");
        0 > e || (o[t.substr(0, e).trim()] = t.substr(e + 1).trim())
      }), n = o
    } else 0 === e.indexOf("data-") ? (n = t.value, r = !0) : n = t.value;
    return {name: e, value: n, isAttr: r || !1}
  }

  function h(t) {
    return {name: t.name, value: t.value, ns: v[t.name] || ""}
  }

  var l = n(10), p = n(20), f = new DOMParser, d = n(43), v = n(42), b = "http://www.w3.org/1999/xhtml";
  t.exports = r
}, function (t, e) {
  "use strict";
  var n = null, r = "http://www.w3.org/2001/xml-events", o = "http://www.w3.org/1999/xlink", i = "http://www.w3.org/XML/1998/namespace", u = {
    about: n,
    "accent-height": n,
    accumulate: n,
    additive: n,
    "alignment-baseline": n,
    alphabetic: n,
    amplitude: n,
    "arabic-form": n,
    ascent: n,
    attributeName: n,
    attributeType: n,
    azimuth: n,
    bandwidth: n,
    baseFrequency: n,
    baseProfile: n,
    "baseline-shift": n,
    bbox: n,
    begin: n,
    bias: n,
    by: n,
    calcMode: n,
    "cap-height": n,
    "class": n,
    clip: n,
    "clip-path": n,
    "clip-rule": n,
    clipPathUnits: n,
    color: n,
    "color-interpolation": n,
    "color-interpolation-filters": n,
    "color-profile": n,
    "color-rendering": n,
    content: n,
    contentScriptType: n,
    contentStyleType: n,
    cursor: n,
    cx: n,
    cy: n,
    d: n,
    datatype: n,
    defaultAction: n,
    descent: n,
    diffuseConstant: n,
    direction: n,
    display: n,
    divisor: n,
    "dominant-baseline": n,
    dur: n,
    dx: n,
    dy: n,
    edgeMode: n,
    editable: n,
    elevation: n,
    "enable-background": n,
    end: n,
    "ev:event": r,
    event: n,
    exponent: n,
    externalResourcesRequired: n,
    fill: n,
    "fill-opacity": n,
    "fill-rule": n,
    filter: n,
    filterRes: n,
    filterUnits: n,
    "flood-color": n,
    "flood-opacity": n,
    focusHighlight: n,
    focusable: n,
    "font-family": n,
    "font-size": n,
    "font-size-adjust": n,
    "font-stretch": n,
    "font-style": n,
    "font-variant": n,
    "font-weight": n,
    format: n,
    from: n,
    fx: n,
    fy: n,
    g1: n,
    g2: n,
    "glyph-name": n,
    "glyph-orientation-horizontal": n,
    "glyph-orientation-vertical": n,
    glyphRef: n,
    gradientTransform: n,
    gradientUnits: n,
    handler: n,
    hanging: n,
    height: n,
    "horiz-adv-x": n,
    "horiz-origin-x": n,
    "horiz-origin-y": n,
    id: n,
    ideographic: n,
    "image-rendering": n,
    "in": n,
    in2: n,
    initialVisibility: n,
    intercept: n,
    k: n,
    k1: n,
    k2: n,
    k3: n,
    k4: n,
    kernelMatrix: n,
    kernelUnitLength: n,
    kerning: n,
    keyPoints: n,
    keySplines: n,
    keyTimes: n,
    lang: n,
    lengthAdjust: n,
    "letter-spacing": n,
    "lighting-color": n,
    limitingConeAngle: n,
    local: n,
    "marker-end": n,
    "marker-mid": n,
    "marker-start": n,
    markerHeight: n,
    markerUnits: n,
    markerWidth: n,
    mask: n,
    maskContentUnits: n,
    maskUnits: n,
    mathematical: n,
    max: n,
    media: n,
    mediaCharacterEncoding: n,
    mediaContentEncodings: n,
    mediaSize: n,
    mediaTime: n,
    method: n,
    min: n,
    mode: n,
    name: n,
    "nav-down": n,
    "nav-down-left": n,
    "nav-down-right": n,
    "nav-left": n,
    "nav-next": n,
    "nav-prev": n,
    "nav-right": n,
    "nav-up": n,
    "nav-up-left": n,
    "nav-up-right": n,
    numOctaves: n,
    observer: n,
    offset: n,
    opacity: n,
    operator: n,
    order: n,
    orient: n,
    orientation: n,
    origin: n,
    overflow: n,
    overlay: n,
    "overline-position": n,
    "overline-thickness": n,
    "panose-1": n,
    path: n,
    pathLength: n,
    patternContentUnits: n,
    patternTransform: n,
    patternUnits: n,
    phase: n,
    playbackOrder: n,
    "pointer-events": n,
    points: n,
    pointsAtX: n,
    pointsAtY: n,
    pointsAtZ: n,
    preserveAlpha: n,
    preserveAspectRatio: n,
    primitiveUnits: n,
    propagate: n,
    property: n,
    r: n,
    radius: n,
    refX: n,
    refY: n,
    rel: n,
    "rendering-intent": n,
    repeatCount: n,
    repeatDur: n,
    requiredExtensions: n,
    requiredFeatures: n,
    requiredFonts: n,
    requiredFormats: n,
    resource: n,
    restart: n,
    result: n,
    rev: n,
    role: n,
    rotate: n,
    rx: n,
    ry: n,
    scale: n,
    seed: n,
    "shape-rendering": n,
    slope: n,
    snapshotTime: n,
    spacing: n,
    specularConstant: n,
    specularExponent: n,
    spreadMethod: n,
    startOffset: n,
    stdDeviation: n,
    stemh: n,
    stemv: n,
    stitchTiles: n,
    "stop-color": n,
    "stop-opacity": n,
    "strikethrough-position": n,
    "strikethrough-thickness": n,
    string: n,
    stroke: n,
    "stroke-dasharray": n,
    "stroke-dashoffset": n,
    "stroke-linecap": n,
    "stroke-linejoin": n,
    "stroke-miterlimit": n,
    "stroke-opacity": n,
    "stroke-width": n,
    surfaceScale: n,
    syncBehavior: n,
    syncBehaviorDefault: n,
    syncMaster: n,
    syncTolerance: n,
    syncToleranceDefault: n,
    systemLanguage: n,
    tableValues: n,
    target: n,
    targetX: n,
    targetY: n,
    "text-anchor": n,
    "text-decoration": n,
    "text-rendering": n,
    textLength: n,
    timelineBegin: n,
    title: n,
    to: n,
    transform: n,
    transformBehavior: n,
    type: n,
    "typeof": n,
    u1: n,
    u2: n,
    "underline-position": n,
    "underline-thickness": n,
    unicode: n,
    "unicode-bidi": n,
    "unicode-range": n,
    "units-per-em": n,
    "v-alphabetic": n,
    "v-hanging": n,
    "v-ideographic": n,
    "v-mathematical": n,
    values: n,
    version: n,
    "vert-adv-y": n,
    "vert-origin-x": n,
    "vert-origin-y": n,
    viewBox: n,
    viewTarget: n,
    visibility: n,
    width: n,
    widths: n,
    "word-spacing": n,
    "writing-mode": n,
    x: n,
    "x-height": n,
    x1: n,
    x2: n,
    xChannelSelector: n,
    "xlink:actuate": o,
    "xlink:arcrole": o,
    "xlink:href": o,
    "xlink:role": o,
    "xlink:show": o,
    "xlink:title": o,
    "xlink:type": o,
    "xml:base": i,
    "xml:id": i,
    "xml:lang": i,
    "xml:space": i,
    y: n,
    y1: n,
    y2: n,
    yChannelSelector: n,
    z: n,
    zoomAndPan: n
  };
  t.exports = u
}, function (t, e) {
  "use strict";
  var n = {
    abbr: "abbr",
    accept: "accept",
    "accept-charset": "acceptCharset",
    accesskey: "accessKey",
    action: "action",
    allowfullscreen: "allowFullScreen",
    allowtransparency: "allowTransparency",
    alt: "alt",
    async: "async",
    autocomplete: "autoComplete",
    autofocus: "autoFocus",
    autoplay: "autoPlay",
    cellpadding: "cellPadding",
    cellspacing: "cellSpacing",
    challenge: "challenge",
    charset: "charset",
    checked: "checked",
    cite: "cite",
    "class": "className",
    cols: "cols",
    colspan: "colSpan",
    command: "command",
    content: "content",
    contenteditable: "contentEditable",
    contextmenu: "contextMenu",
    controls: "controls",
    coords: "coords",
    crossorigin: "crossOrigin",
    data: "data",
    datetime: "dateTime",
    "default": "default",
    defer: "defer",
    dir: "dir",
    disabled: "disabled",
    download: "download",
    draggable: "draggable",
    dropzone: "dropzone",
    enctype: "encType",
    "for": "htmlFor",
    form: "form",
    formaction: "formAction",
    formenctype: "formEncType",
    formmethod: "formMethod",
    formnovalidate: "formNoValidate",
    formtarget: "formTarget",
    frameBorder: "frameBorder",
    headers: "headers",
    height: "height",
    hidden: "hidden",
    high: "high",
    href: "href",
    hreflang: "hrefLang",
    "http-equiv": "httpEquiv",
    icon: "icon",
    id: "id",
    inputmode: "inputMode",
    ismap: "isMap",
    itemid: "itemId",
    itemprop: "itemProp",
    itemref: "itemRef",
    itemscope: "itemScope",
    itemtype: "itemType",
    kind: "kind",
    label: "label",
    lang: "lang",
    list: "list",
    loop: "loop",
    manifest: "manifest",
    max: "max",
    maxlength: "maxLength",
    media: "media",
    mediagroup: "mediaGroup",
    method: "method",
    min: "min",
    minlength: "minLength",
    multiple: "multiple",
    muted: "muted",
    name: "name",
    novalidate: "noValidate",
    open: "open",
    optimum: "optimum",
    pattern: "pattern",
    ping: "ping",
    placeholder: "placeholder",
    poster: "poster",
    preload: "preload",
    radiogroup: "radioGroup",
    readonly: "readOnly",
    rel: "rel",
    required: "required",
    role: "role",
    rows: "rows",
    rowspan: "rowSpan",
    sandbox: "sandbox",
    scope: "scope",
    scoped: "scoped",
    scrolling: "scrolling",
    seamless: "seamless",
    selected: "selected",
    shape: "shape",
    size: "size",
    sizes: "sizes",
    sortable: "sortable",
    span: "span",
    spellcheck: "spellCheck",
    src: "src",
    srcdoc: "srcDoc",
    srcset: "srcSet",
    start: "start",
    step: "step",
    style: "style",
    tabindex: "tabIndex",
    target: "target",
    title: "title",
    translate: "translate",
    type: "type",
    typemustmatch: "typeMustMatch",
    usemap: "useMap",
    value: "value",
    width: "width",
    wmode: "wmode",
    wrap: "wrap"
  };
  t.exports = n
}, function (t, e, n) {
  function r(t, e, n) {
    if (a.hasOwnProperty(t)) {
      if (o(t, e))return "";
      t = (h[t] || t).toLowerCase();
      var r = a[t];
      return r === c.BOOLEAN || r === c.OVERLOADED_BOOLEAN && e === !0 ? u(t) : l(t) + u(e) + '"'
    }
    return n ? null == e ? "" : l(t) + u(e) + '"' : null
  }

  function o(t, e) {
    var n = a[t];
    return null == e || n === c.BOOLEAN && !e || n === c.OVERLOADED_BOOLEAN && e === !1
  }

  function i(t) {
    var e = {};
    return function (n) {
      return e.hasOwnProperty(n) ? e[n] : e[n] = t.call(this, n)
    }
  }

  var u = n(12), s = n(46), c = s.attributeTypes, a = s.properties, h = s.attributeNames, l = i(function (t) {
    return u(t) + '="'
  });
  t.exports = r
}, function (t, e, n) {
  function r(t, e) {
    return t ? (l(t) && (t = t.render()), p(t) && t.render && (t = t.render()), a(t) ? o(t) + i(t) + u(t) : h(t) ? e && "script" === e.tagName.toLowerCase() ? String(t.text) : s(String(t.text)) : "") : ""
  }

  function o(t) {
    var e = t.properties, n = "<" + t.tagName.toLowerCase();
    for (var r in e) {
      var o = e[r];
      if (null != o)if ("attributes" != r) {
        if ("style" == r) {
          var i = "";
          o = c({}, o);
          for (var u in o)i += v(u) + ": " + o[u] + "; ";
          o = i.trim()
        }
        if (o instanceof f || o instanceof d)n += " " + b(r, o.value, !0); else {
          var s = b(r, o);
          s && (n += " " + s)
        }
      } else {
        o = c({}, o);
        for (var a in o)n += " " + b(a, o[a], !0)
      }
    }
    return n + ">"
  }

  function i(t) {
    var e = t.properties.innerHTML;
    if (null != e)return e;
    var n = "";
    if (t.children && t.children.length)for (var o = 0, i = t.children.length; i > o; o++) {
      var u = t.children[o];
      n += r(u, t)
    }
    return n
  }

  function u(t) {
    var e = t.tagName.toLowerCase();
    return _[e] ? "" : "</" + e + ">"
  }

  var s = n(12), c = n(61), a = n(3), h = n(5), l = n(4), p = n(1), f = n(17), d = n(16), v = n(35), b = n(44), _ = n(47);
  t.exports = r
}, function (t, e) {
  var n = {BOOLEAN: 1, OVERLOADED_BOOLEAN: 2}, r = {
    accept: !0,
    acceptCharset: !0,
    accessKey: !0,
    action: !0,
    allowFullScreen: n.BOOLEAN,
    allowTransparency: !0,
    alt: !0,
    async: n.BOOLEAN,
    autocomplete: !0,
    autofocus: n.BOOLEAN,
    autoplay: n.BOOLEAN,
    cellPadding: !0,
    cellSpacing: !0,
    charset: !0,
    checked: n.BOOLEAN,
    classID: !0,
    className: !0,
    cols: !0,
    colSpan: !0,
    content: !0,
    contentEditable: !0,
    contextMenu: !0,
    controls: n.BOOLEAN,
    coords: !0,
    crossOrigin: !0,
    data: !0,
    dateTime: !0,
    defer: n.BOOLEAN,
    dir: !0,
    disabled: n.BOOLEAN,
    download: n.OVERLOADED_BOOLEAN,
    draggable: !0,
    enctype: !0,
    form: !0,
    formAction: !0,
    formEncType: !0,
    formMethod: !0,
    formNoValidate: n.BOOLEAN,
    formTarget: !0,
    frameBorder: !0,
    headers: !0,
    height: !0,
    hidden: n.BOOLEAN,
    href: !0,
    hreflang: !0,
    htmlFor: !0,
    httpEquiv: !0,
    icon: !0,
    id: !0,
    label: !0,
    lang: !0,
    list: !0,
    loop: n.BOOLEAN,
    manifest: !0,
    marginHeight: !0,
    marginWidth: !0,
    max: !0,
    maxLength: !0,
    media: !0,
    mediaGroup: !0,
    method: !0,
    min: !0,
    multiple: n.BOOLEAN,
    muted: n.BOOLEAN,
    name: !0,
    noValidate: n.BOOLEAN,
    open: !0,
    pattern: !0,
    placeholder: !0,
    poster: !0,
    preload: !0,
    radiogroup: !0,
    readOnly: n.BOOLEAN,
    rel: !0,
    required: n.BOOLEAN,
    role: !0,
    rows: !0,
    rowSpan: !0,
    sandbox: !0,
    scope: !0,
    scrolling: !0,
    seamless: n.BOOLEAN,
    selected: n.BOOLEAN,
    shape: !0,
    size: !0,
    sizes: !0,
    span: !0,
    spellcheck: !0,
    src: !0,
    srcdoc: !0,
    srcset: !0,
    start: !0,
    step: !0,
    style: !0,
    tabIndex: !0,
    target: !0,
    title: !0,
    type: !0,
    useMap: !0,
    value: !0,
    width: !0,
    wmode: !0,
    autocapitalize: !0,
    autocorrect: !0,
    itemProp: !0,
    itemScope: n.BOOLEAN,
    itemType: !0,
    property: !0
  }, o = {acceptCharset: "accept-charset", className: "class", htmlFor: "for", httpEquiv: "http-equiv"};
  t.exports = {attributeTypes: n, properties: r, attributeNames: o}
}, function (t, e) {
  t.exports = {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
  }
}, function (t, e, n) {
  var r = n(59);
  t.exports = r
}, function (t, e, n) {
  var r = n(53);
  t.exports = r
}, function (t, e, n) {
  function r(t, e) {
    var n = e ? e.document || o : o, h = e ? e.warn : null;
    if (t = a(t).a, c(t))return t.init();
    if (s(t))return n.createTextNode(t.text);
    if (!u(t))return h && h("Item is not a valid virtual dom node", t), null;
    var l = null === t.namespace ? n.createElement(t.tagName) : n.createElementNS(t.namespace, t.tagName), p = t.properties;
    i(l, p);
    for (var f = t.children, d = 0; d < f.length; d++) {
      var v = r(f[d], e);
      v && l.appendChild(v)
    }
    return l
  }

  var o = n(13), i = n(15), u = n(3), s = n(5), c = n(1), a = n(18);
  t.exports = r
}, function (t, e) {
  function n(t, e, n, o) {
    return n && 0 !== n.length ? (n.sort(i), r(t, e, n, o, 0)) : {}
  }

  function r(t, e, n, i, s) {
    if (i = i || {}, t) {
      o(n, s, s) && (i[s] = t);
      var c = e.children;
      if (c)for (var a = t.childNodes, h = 0; h < e.children.length; h++) {
        s += 1;
        var l = c[h] || u, p = s + (l.count || 0);
        o(n, s, p) && r(a[h], l, n, i, s), s = p
      }
    }
    return i
  }

  function o(t, e, n) {
    if (0 === t.length)return !1;
    for (var r, o, i = 0, u = t.length - 1; u >= i;) {
      if (r = (u + i) / 2 >> 0, o = t[r], i === u)return o >= e && n >= o;
      if (e > o)i = r + 1; else {
        if (!(o > n))return !0;
        u = r - 1;
      }
    }
    return !1
  }

  function i(t, e) {
    return t > e ? 1 : -1
  }

  var u = {};
  t.exports = n
}, function (t, e, n) {
  function r(t, e, n) {
    var r = t.type, a = t.vNode, f = t.patch;
    switch (r) {
      case d.REMOVE:
        return o(e, a);
      case d.INSERT:
        return i(e, f, n);
      case d.VTEXT:
        return u(e, a, f, n);
      case d.WIDGET:
        return s(e, a, f, n);
      case d.VNODE:
        return c(e, a, f, n);
      case d.ORDER:
        return h(e, f), e;
      case d.PROPS:
        return p(e, f, a.properties), e;
      case d.THUNK:
        return l(e, n.patch(e, f, n));
      default:
        return e
    }
  }

  function o(t, e) {
    var n = t.parentNode;
    return n && n.removeChild(t), a(t, e), null
  }

  function i(t, e, n) {
    var r = n.render(e, n);
    return t && t.appendChild(r), t
  }

  function u(t, e, n, r) {
    var o;
    if (3 === t.nodeType)t.replaceData(0, t.length, n.text), o = t; else {
      var i = t.parentNode;
      o = r.render(n, r), i && o !== t && i.replaceChild(o, t)
    }
    return o
  }

  function s(t, e, n, r) {
    var o, i = v(e, n);
    o = i ? n.update(e, t) || t : r.render(n, r);
    var u = t.parentNode;
    return u && o !== t && u.replaceChild(o, t), i || a(t, e), o
  }

  function c(t, e, n, r) {
    var o = t.parentNode, i = r.render(n, r);
    return o && i !== t && o.replaceChild(i, t), i
  }

  function a(t, e) {
    "function" == typeof e.destroy && f(e) && e.destroy(t)
  }

  function h(t, e) {
    for (var n, r, o, i = t.childNodes, u = {}, s = 0; s < e.removes.length; s++)r = e.removes[s], n = i[r.from], r.key && (u[r.key] = n), t.removeChild(n);
    for (var c = i.length, a = 0; a < e.inserts.length; a++)o = e.inserts[a], n = u[o.key], t.insertBefore(n, o.to >= c++ ? null : i[o.to])
  }

  function l(t, e) {
    return t && e && t !== e && t.parentNode && t.parentNode.replaceChild(e, t), e
  }

  var p = n(15), f = n(1), d = n(19), v = n(54);
  t.exports = r
}, function (t, e, n) {
  function r(t, e, n) {
    return n = n || {}, n.patch = n.patch && n.patch !== r ? n.patch : o, n.render = n.render || a, n.patch(t, e, n)
  }

  function o(t, e, n) {
    var r = u(e);
    if (0 === r.length)return t;
    var o = h(t, e.a, r), c = t.ownerDocument;
    n.document || c === s || (n.document = c);
    for (var a = 0; a < r.length; a++) {
      var l = r[a];
      t = i(t, o[l], e[l], n)
    }
    return t
  }

  function i(t, e, n, r) {
    if (!e)return t;
    var o;
    if (c(n))for (var i = 0; i < n.length; i++)o = l(n[i], e, r), e === t && (t = o); else o = l(n, e, r), e === t && (t = o);
    return t
  }

  function u(t) {
    var e = [];
    for (var n in t)"a" !== n && e.push(Number(n));
    return e
  }

  var s = n(13), c = n(8), a = n(50), h = n(51), l = n(52);
  t.exports = r
}, function (t, e, n) {
  function r(t, e) {
    return o(t) && o(e) ? "name" in t && "name" in e ? t.id === e.id : t.init === e.init : !1
  }

  var o = n(1);
  t.exports = r
}, function (t, e, n) {
  "use strict";
  function r(t) {
    return this instanceof r ? void(this.value = t) : new r(t)
  }

  var o = n(29);
  t.exports = r, r.prototype.hook = function (t, e) {
    var n = o(t), r = e.substr(3);
    n[r] = this.value
  }, r.prototype.unhook = function (t, e) {
    var n = o(t), r = e.substr(3);
    n[r] = void 0
  }
}, function (t, e, n) {
  "use strict";
  function r(t, e) {
    if (!t)return "DIV";
    var n = !e.hasOwnProperty("id"), r = o(t, i), s = null;
    u.test(r[1]) && (s = "DIV");
    var c, a, h, l;
    for (l = 0; l < r.length; l++)a = r[l], a && (h = a.charAt(0), s ? "." === h ? (c = c || [], c.push(a.substring(1, a.length))) : "#" === h && n && (e.id = a.substring(1, a.length)) : s = a);
    return c && (e.className && c.push(e.className), e.className = c.join(" ")), e.namespace ? s : s.toUpperCase()
  }

  var o = n(28), i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/, u = /^\.|#/;
  t.exports = r
}, function (t, e) {
  "use strict";
  function n(t) {
    return s.hasOwnProperty(t) ? s[t] : void 0
  }

  var r = null, o = "http://www.w3.org/2001/xml-events", i = "http://www.w3.org/1999/xlink", u = "http://www.w3.org/XML/1998/namespace", s = {
    about: r,
    "accent-height": r,
    accumulate: r,
    additive: r,
    "alignment-baseline": r,
    alphabetic: r,
    amplitude: r,
    "arabic-form": r,
    ascent: r,
    attributeName: r,
    attributeType: r,
    azimuth: r,
    bandwidth: r,
    baseFrequency: r,
    baseProfile: r,
    "baseline-shift": r,
    bbox: r,
    begin: r,
    bias: r,
    by: r,
    calcMode: r,
    "cap-height": r,
    "class": r,
    clip: r,
    "clip-path": r,
    "clip-rule": r,
    clipPathUnits: r,
    color: r,
    "color-interpolation": r,
    "color-interpolation-filters": r,
    "color-profile": r,
    "color-rendering": r,
    content: r,
    contentScriptType: r,
    contentStyleType: r,
    cursor: r,
    cx: r,
    cy: r,
    d: r,
    datatype: r,
    defaultAction: r,
    descent: r,
    diffuseConstant: r,
    direction: r,
    display: r,
    divisor: r,
    "dominant-baseline": r,
    dur: r,
    dx: r,
    dy: r,
    edgeMode: r,
    editable: r,
    elevation: r,
    "enable-background": r,
    end: r,
    "ev:event": o,
    event: r,
    exponent: r,
    externalResourcesRequired: r,
    fill: r,
    "fill-opacity": r,
    "fill-rule": r,
    filter: r,
    filterRes: r,
    filterUnits: r,
    "flood-color": r,
    "flood-opacity": r,
    focusHighlight: r,
    focusable: r,
    "font-family": r,
    "font-size": r,
    "font-size-adjust": r,
    "font-stretch": r,
    "font-style": r,
    "font-variant": r,
    "font-weight": r,
    format: r,
    from: r,
    fx: r,
    fy: r,
    g1: r,
    g2: r,
    "glyph-name": r,
    "glyph-orientation-horizontal": r,
    "glyph-orientation-vertical": r,
    glyphRef: r,
    gradientTransform: r,
    gradientUnits: r,
    handler: r,
    hanging: r,
    height: r,
    "horiz-adv-x": r,
    "horiz-origin-x": r,
    "horiz-origin-y": r,
    id: r,
    ideographic: r,
    "image-rendering": r,
    "in": r,
    in2: r,
    initialVisibility: r,
    intercept: r,
    k: r,
    k1: r,
    k2: r,
    k3: r,
    k4: r,
    kernelMatrix: r,
    kernelUnitLength: r,
    kerning: r,
    keyPoints: r,
    keySplines: r,
    keyTimes: r,
    lang: r,
    lengthAdjust: r,
    "letter-spacing": r,
    "lighting-color": r,
    limitingConeAngle: r,
    local: r,
    "marker-end": r,
    "marker-mid": r,
    "marker-start": r,
    markerHeight: r,
    markerUnits: r,
    markerWidth: r,
    mask: r,
    maskContentUnits: r,
    maskUnits: r,
    mathematical: r,
    max: r,
    media: r,
    mediaCharacterEncoding: r,
    mediaContentEncodings: r,
    mediaSize: r,
    mediaTime: r,
    method: r,
    min: r,
    mode: r,
    name: r,
    "nav-down": r,
    "nav-down-left": r,
    "nav-down-right": r,
    "nav-left": r,
    "nav-next": r,
    "nav-prev": r,
    "nav-right": r,
    "nav-up": r,
    "nav-up-left": r,
    "nav-up-right": r,
    numOctaves: r,
    observer: r,
    offset: r,
    opacity: r,
    operator: r,
    order: r,
    orient: r,
    orientation: r,
    origin: r,
    overflow: r,
    overlay: r,
    "overline-position": r,
    "overline-thickness": r,
    "panose-1": r,
    path: r,
    pathLength: r,
    patternContentUnits: r,
    patternTransform: r,
    patternUnits: r,
    phase: r,
    playbackOrder: r,
    "pointer-events": r,
    points: r,
    pointsAtX: r,
    pointsAtY: r,
    pointsAtZ: r,
    preserveAlpha: r,
    preserveAspectRatio: r,
    primitiveUnits: r,
    propagate: r,
    property: r,
    r: r,
    radius: r,
    refX: r,
    refY: r,
    rel: r,
    "rendering-intent": r,
    repeatCount: r,
    repeatDur: r,
    requiredExtensions: r,
    requiredFeatures: r,
    requiredFonts: r,
    requiredFormats: r,
    resource: r,
    restart: r,
    result: r,
    rev: r,
    role: r,
    rotate: r,
    rx: r,
    ry: r,
    scale: r,
    seed: r,
    "shape-rendering": r,
    slope: r,
    snapshotTime: r,
    spacing: r,
    specularConstant: r,
    specularExponent: r,
    spreadMethod: r,
    startOffset: r,
    stdDeviation: r,
    stemh: r,
    stemv: r,
    stitchTiles: r,
    "stop-color": r,
    "stop-opacity": r,
    "strikethrough-position": r,
    "strikethrough-thickness": r,
    string: r,
    stroke: r,
    "stroke-dasharray": r,
    "stroke-dashoffset": r,
    "stroke-linecap": r,
    "stroke-linejoin": r,
    "stroke-miterlimit": r,
    "stroke-opacity": r,
    "stroke-width": r,
    surfaceScale: r,
    syncBehavior: r,
    syncBehaviorDefault: r,
    syncMaster: r,
    syncTolerance: r,
    syncToleranceDefault: r,
    systemLanguage: r,
    tableValues: r,
    target: r,
    targetX: r,
    targetY: r,
    "text-anchor": r,
    "text-decoration": r,
    "text-rendering": r,
    textLength: r,
    timelineBegin: r,
    title: r,
    to: r,
    transform: r,
    transformBehavior: r,
    type: r,
    "typeof": r,
    u1: r,
    u2: r,
    "underline-position": r,
    "underline-thickness": r,
    unicode: r,
    "unicode-bidi": r,
    "unicode-range": r,
    "units-per-em": r,
    "v-alphabetic": r,
    "v-hanging": r,
    "v-ideographic": r,
    "v-mathematical": r,
    values: r,
    version: r,
    "vert-adv-y": r,
    "vert-origin-x": r,
    "vert-origin-y": r,
    viewBox: r,
    viewTarget: r,
    visibility: r,
    width: r,
    widths: r,
    "word-spacing": r,
    "writing-mode": r,
    x: r,
    "x-height": r,
    x1: r,
    x2: r,
    xChannelSelector: r,
    "xlink:actuate": i,
    "xlink:arcrole": i,
    "xlink:href": i,
    "xlink:role": i,
    "xlink:show": i,
    "xlink:title": i,
    "xlink:type": i,
    "xml:base": u,
    "xml:id": u,
    "xml:lang": u,
    "xml:space": u,
    y: r,
    y1: r,
    y2: r,
    yChannelSelector: r,
    z: r,
    zoomAndPan: r
  };
  t.exports = n
}, function (t, e, n) {
  function r(t, e) {
    var n;
    for (var s in t) {
      s in e || (n = n || {}, n[s] = void 0);
      var c = t[s], a = e[s];
      if (c !== a)if (i(c) && i(a))if (o(a) !== o(c))n = n || {}, n[s] = a; else if (u(a))n = n || {}, n[s] = a; else {
        var h = r(c, a);
        h && (n = n || {}, n[s] = h)
      } else n = n || {}, n[s] = a
    }
    for (var l in e)l in t || (n = n || {}, n[l] = e[l]);
    return n
  }

  function o(t) {
    return Object.getPrototypeOf ? Object.getPrototypeOf(t) : t.__proto__ ? t.__proto__ : t.constructor ? t.constructor.prototype : void 0
  }

  var i = n(14), u = n(7);
  t.exports = r
}, function (t, e, n) {
  function r(t, e) {
    var n = {a: t};
    return o(t, e, n, 0), n
  }

  function o(t, e, n, r) {
    if (t !== e) {
      var o = n[r], s = !1;
      if (A(t) || A(e))c(t, e, n, r); else if (null == e)E(t) || (u(t, n, r), o = n[r]), o = v(o, new _(_.REMOVE, t, e)); else if (m(e))if (m(t))if (t.tagName === e.tagName && t.namespace === e.namespace && t.key === e.key) {
        var a = w(t.properties, e.properties);
        a && (o = v(o, new _(_.PROPS, t, a))), o = i(t, e, n, o, r)
      } else o = v(o, new _(_.VNODE, t, e)), s = !0; else o = v(o, new _(_.VNODE, t, e)), s = !0; else y(e) ? y(t) ? t.text !== e.text && (o = v(o, new _(_.VTEXT, t, e))) : (o = v(o, new _(_.VTEXT, t, e)), s = !0) : E(e) && (E(t) || (s = !0), o = v(o, new _(_.WIDGET, t, e)));
      o && (n[r] = o), s && u(t, n, r)
    }
  }

  function i(t, e, n, r, i) {
    for (var u = t.children, s = p(u, e.children), c = s.children, a = u.length, h = c.length, l = a > h ? a : h, f = 0; l > f; f++) {
      var d = u[f], b = c[f];
      i += 1, d ? o(d, b, n, i) : b && (r = v(r, new _(_.INSERT, null, b))), m(d) && d.count && (i += d.count)
    }
    return s.moves && (r = v(r, new _(_.ORDER, t, s.moves))), r
  }

  function u(t, e, n) {
    h(t, e, n), s(t, e, n)
  }

  function s(t, e, n) {
    if (E(t))"function" == typeof t.destroy && (e[n] = v(e[n], new _(_.REMOVE, t, null))); else if (m(t) && (t.hasWidgets || t.hasThunks))for (var r = t.children, o = r.length, i = 0; o > i; i++) {
      var u = r[i];
      n += 1, s(u, e, n), m(u) && u.count && (n += u.count)
    } else A(t) && c(t, null, e, n)
  }

  function c(t, e, n, o) {
    var i = g(t, e), u = r(i.a, i.b);
    a(u) && (n[o] = new _(_.THUNK, null, u))
  }

  function a(t) {
    for (var e in t)if ("a" !== e)return !0;
    return !1
  }

  function h(t, e, n) {
    if (m(t)) {
      if (t.hooks && (e[n] = v(e[n], new _(_.PROPS, t, l(t.hooks)))), t.descendantHooks || t.hasThunks)for (var r = t.children, o = r.length, i = 0; o > i; i++) {
        var u = r[i];
        n += 1, h(u, e, n), m(u) && u.count && (n += u.count)
      }
    } else A(t) && c(t, null, e, n)
  }

  function l(t) {
    var e = {};
    for (var n in t)e[n] = void 0;
    return e
  }

  function p(t, e) {
    var n = d(e), r = n.keys, o = n.free;
    if (o.length === e.length)return {children: e, moves: null};
    var i = d(t), u = i.keys, s = i.free;
    if (s.length === t.length)return {children: e, moves: null};
    for (var c = [], a = 0, h = o.length, l = 0, p = 0; p < t.length; p++) {
      var v, b = t[p];
      b.key ? r.hasOwnProperty(b.key) ? (v = r[b.key], c.push(e[v])) : (v = p - l++, c.push(null)) : h > a ? (v = o[a++], c.push(e[v])) : (v = p - l++, c.push(null))
    }
    for (var _ = a >= o.length ? e.length : o[a], m = 0; m < e.length; m++) {
      var y = e[m];
      y.key ? u.hasOwnProperty(y.key) || c.push(y) : m >= _ && c.push(y)
    }
    for (var E, A = c.slice(), g = 0, w = [], C = [], D = 0; D < e.length;) {
      var F = e[D];
      for (E = A[g]; null === E && A.length;)w.push(f(A, g, null)), E = A[g];
      E && E.key === F.key ? (g++, D++) : F.key ? (E && E.key && r[E.key] !== D + 1 ? (w.push(f(A, g, E.key)), E = A[g], E && E.key === F.key ? g++ : C.push({
        key: F.key,
        to: D
      })) : C.push({key: F.key, to: D}), D++) : E && E.key && w.push(f(A, g, E.key))
    }
    for (; g < A.length;)E = A[g], w.push(f(A, g, E && E.key));
    return w.length !== l || C.length ? {children: c, moves: {removes: w, inserts: C}} : {children: c, moves: null}
  }

  function f(t, e, n) {
    return t.splice(e, 1), {from: e, key: n}
  }

  function d(t) {
    for (var e = {}, n = [], r = t.length, o = 0; r > o; o++) {
      var i = t[o];
      i.key ? e[i.key] = o : n.push(o)
    }
    return {keys: e, free: n}
  }

  function v(t, e) {
    return t ? (b(t) ? t.push(e) : t = [t, e], t) : e
  }

  var b = n(8), _ = n(19), m = n(3), y = n(5), E = n(1), A = n(4), g = n(18), w = n(58);
  t.exports = r
}, function (t, e) {
  t.exports = function (t) {
    return t.webpackPolyfill || (t.deprecate = function () {
    }, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
  }
}, function (t, e) {
  function n() {
    for (var t = {}, e = 0; e < arguments.length; e++) {
      var n = arguments[e];
      for (var o in n)r.call(n, o) && (t[o] = n[o])
    }
    return t
  }

  t.exports = n;
  var r = Object.prototype.hasOwnProperty
}, function (t, e) {
}]);