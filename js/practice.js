function FormValidation() {
    if (typeof Page_Validators != "undefined")
        for (var n = 0; n < Page_Validators.length; n++) Page_Validators[n].isvalid ? $("#" + Page_Validators[n].controltovalidate).removeClass("inputError") : $("#" + Page_Validators[n].controltovalidate).addClass("inputError")
}

function HighlightControlToValidate() {
    if (typeof Page_Validators != "undefined")
        for (var n = 0; n < Page_Validators.length; n++) $("#" + Page_Validators[n].controltovalidate).blur(function() {
            var n = getValidatorUsingControl($(this).attr("ID"));
            n == null || n.isvalid ? $(this).removeClass("inputError") : $(this).addClass("inputError")
        })
}

function getValidatorUsingControl(n) {
    for (var i = Page_Validators.length, t = 0; t < i; t++)
        if (Page_Validators[t].controltovalidate == n) return Page_Validators[t];
    return null
}

function getScrollbarWidth() {
    var n = $('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"><\/div><\/div>'),
        t, i;
    return $("body").append(n), t = $("div", n).innerWidth(), n.css("overflow-y", "auto"), i = $("div", n).innerWidth(), $(n).remove(), t - i
}

function validateEmail(n) {
    return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(n)
}

function verticalAlign1() {
    var n = getResponsiveTag();
    n === "lg" && $(".vertical-align").length > 0 && $(".vertical-align").each(function() {
        $(this).verticalAlign()
    })
}

function ContentAdjustment() {
    var n = $("#header").outerHeight();
    $("#site-content").css("padding-top", n)
}

function deleteaddedrow(n) {
    var t = $(n).parents("div.AppliancesRow");
    t.remove()
}(function(n, t) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = n.document ? t(n, !0) : function(n) {
        if (!n.document) throw new Error("jQuery requires a window with a document");
        return t(n)
    } : t(n)
})(typeof window != "undefined" ? window : this, function(n, t) {
    "use strict";

    function ir(n, t) {
        t = t || u;
        var i = t.createElement("script");
        i.text = n;
        t.head.appendChild(i).parentNode.removeChild(i)
    }

    function fi(n) {
        var t = !!n && "length" in n && n.length,
            r = i.type(n);
        return r === "function" || i.isWindow(n) ? !1 : r === "array" || t === 0 || typeof t == "number" && t > 0 && t - 1 in n
    }

    function l(n, t) {
        return n.nodeName && n.nodeName.toLowerCase() === t.toLowerCase()
    }

    function oi(n, t, r) {
        return i.isFunction(t) ? i.grep(n, function(n, i) {
            return !!t.call(n, i, n) !== r
        }) : t.nodeType ? i.grep(n, function(n) {
            return n === t !== r
        }) : typeof t != "string" ? i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r
        }) : er.test(t) ? i.filter(t, n, r) : (t = i.filter(t, n), i.grep(n, function(n) {
            return ot.call(t, n) > -1 !== r && n.nodeType === 1
        }))
    }

    function ar(n, t) {
        while ((n = n[t]) && n.nodeType !== 1);
        return n
    }

    function ne(n) {
        var t = {};
        return i.each(n.match(h) || [], function(n, i) {
            t[i] = !0
        }), t
    }

    function nt(n) {
        return n
    }

    function pt(n) {
        throw n;
    }

    function vr(n, t, r, u) {
        var f;
        try {
            n && i.isFunction(f = n.promise) ? f.call(n).done(t).fail(r) : n && i.isFunction(f = n.then) ? f.call(n, t, r) : t.apply(undefined, [n].slice(u))
        } catch (n) {
            r.apply(undefined, [n])
        }
    }

    function bt() {
        u.removeEventListener("DOMContentLoaded", bt);
        n.removeEventListener("load", bt);
        i.ready()
    }

    function ht() {
        this.expando = i.expando + ht.uid++
    }

    function re(n) {
        return n === "true" ? !0 : n === "false" ? !1 : n === "null" ? null : n === +n + "" ? +n : te.test(n) ? JSON.parse(n) : n
    }

    function pr(n, t, i) {
        var r;
        if (i === undefined && n.nodeType === 1)
            if (r = "data-" + t.replace(ie, "-$&").toLowerCase(), i = n.getAttribute(r), typeof i == "string") {
                try {
                    i = re(i)
                } catch (u) {}
                e.set(n, t, i)
            } else i = undefined;
        return i
    }

    function kr(n, t, r, u) {
        var h, e = 1,
            l = 20,
            c = u ? function() {
                return u.cur()
            } : function() {
                return i.css(n, t, "")
            },
            s = c(),
            o = r && r[3] || (i.cssNumber[t] ? "" : "px"),
            f = (i.cssNumber[t] || o !== "px" && +s) && ct.exec(i.css(n, t));
        if (f && f[3] !== o) {
            o = o || f[3];
            r = r || [];
            f = +s || 1;
            do e = e || ".5", f = f / e, i.style(n, t, f + o); while (e !== (e = c() / s) && e !== 1 && --l)
        }
        return r && (f = +f || +s || 0, h = r[1] ? f + (r[1] + 1) * r[2] : +r[2], u && (u.unit = o, u.start = f, u.end = h)), h
    }

    function ue(n) {
        var r, f = n.ownerDocument,
            u = n.nodeName,
            t = si[u];
        return t ? t : (r = f.body.appendChild(f.createElement(u)), t = i.css(r, "display"), r.parentNode.removeChild(r), t === "none" && (t = "block"), si[u] = t, t)
    }

    function tt(n, t) {
        for (var e, u, f = [], i = 0, o = n.length; i < o; i++)(u = n[i], u.style) && (e = u.style.display, t ? (e === "none" && (f[i] = r.get(u, "display") || null, f[i] || (u.style.display = "")), u.style.display === "" && kt(u) && (f[i] = ue(u))) : e !== "none" && (f[i] = "none", r.set(u, "display", e)));
        for (i = 0; i < o; i++) f[i] != null && (n[i].style.display = f[i]);
        return n
    }

    function o(n, t) {
        var r;
        return (r = typeof n.getElementsByTagName != "undefined" ? n.getElementsByTagName(t || "*") : typeof n.querySelectorAll != "undefined" ? n.querySelectorAll(t || "*") : [], t === undefined || t && l(n, t)) ? i.merge([n], r) : r
    }

    function hi(n, t) {
        for (var i = 0, u = n.length; i < u; i++) r.set(n[i], "globalEval", !t || r.get(t[i], "globalEval"))
    }

    function iu(n, t, r, u, f) {
        for (var e, s, p, a, w, v, h = t.createDocumentFragment(), y = [], l = 0, b = n.length; l < b; l++)
            if (e = n[l], e || e === 0)
                if (i.type(e) === "object") i.merge(y, e.nodeType ? [e] : e);
                else if (tu.test(e)) {
            for (s = s || h.appendChild(t.createElement("div")), p = (gr.exec(e) || ["", ""])[1].toLowerCase(), a = c[p] || c._default, s.innerHTML = a[1] + i.htmlPrefilter(e) + a[2], v = a[0]; v--;) s = s.lastChild;
            i.merge(y, s.childNodes);
            s = h.firstChild;
            s.textContent = ""
        } else y.push(t.createTextNode(e));
        for (h.textContent = "", l = 0; e = y[l++];) {
            if (u && i.inArray(e, u) > -1) {
                f && f.push(e);
                continue
            }
            if (w = i.contains(e.ownerDocument, e), s = o(h.appendChild(e), "script"), w && hi(s), r)
                for (v = 0; e = s[v++];) nu.test(e.type || "") && r.push(e)
        }
        return h
    }

    function gt() {
        return !0
    }

    function it() {
        return !1
    }

    function uu() {
        try {
            return u.activeElement
        } catch (n) {}
    }

    function ci(n, t, r, u, f, e) {
        var o, s;
        if (typeof t == "object") {
            typeof r != "string" && (u = u || r, r = undefined);
            for (s in t) ci(n, s, r, u, t[s], e);
            return n
        }
        if (u == null && f == null ? (f = r, u = r = undefined) : f == null && (typeof r == "string" ? (f = u, u = undefined) : (f = u, u = r, r = undefined)), f === !1) f = it;
        else if (!f) return n;
        return e === 1 && (o = f, f = function(n) {
            return i().off(n), o.apply(this, arguments)
        }, f.guid = o.guid || (o.guid = i.guid++)), n.each(function() {
            i.event.add(this, t, f, u, r)
        })
    }

    function fu(n, t) {
        return l(n, "table") && l(t.nodeType !== 11 ? t : t.firstChild, "tr") ? i(">tbody", n)[0] || n : n
    }

    function ae(n) {
        return n.type = (n.getAttribute("type") !== null) + "/" + n.type, n
    }

    function ve(n) {
        var t = ce.exec(n.type);
        return t ? n.type = t[1] : n.removeAttribute("type"), n
    }

    function eu(n, t) {
        var f, c, o, s, h, l, a, u;
        if (t.nodeType === 1) {
            if (r.hasData(n) && (s = r.access(n), h = r.set(t, s), u = s.events, u)) {
                delete h.handle;
                h.events = {};
                for (o in u)
                    for (f = 0, c = u[o].length; f < c; f++) i.event.add(t, o, u[o][f])
            }
            e.hasData(n) && (l = e.access(n), a = i.extend({}, l), e.set(t, a))
        }
    }

    function ye(n, t) {
        var i = t.nodeName.toLowerCase();
        i === "input" && dr.test(n.type) ? t.checked = n.checked : (i === "input" || i === "textarea") && (t.defaultValue = n.defaultValue)
    }

    function rt(n, t, u, e) {
        t = gi.apply([], t);
        var l, p, c, a, s, w, h = 0,
            v = n.length,
            k = v - 1,
            y = t[0],
            b = i.isFunction(y);
        if (b || v > 1 && typeof y == "string" && !f.checkClone && he.test(y)) return n.each(function(i) {
            var r = n.eq(i);
            b && (t[0] = y.call(this, i, r.html()));
            rt(r, t, u, e)
        });
        if (v && (l = iu(t, n[0].ownerDocument, !1, n, e), p = l.firstChild, l.childNodes.length === 1 && (l = p), p || e)) {
            for (c = i.map(o(l, "script"), ae), a = c.length; h < v; h++) s = l, h !== k && (s = i.clone(s, !0, !0), a && i.merge(c, o(s, "script"))), u.call(n[h], s, h);
            if (a)
                for (w = c[c.length - 1].ownerDocument, i.map(c, ve), h = 0; h < a; h++) s = c[h], nu.test(s.type || "") && !r.access(s, "globalEval") && i.contains(w, s) && (s.src ? i._evalUrl && i._evalUrl(s.src) : ir(s.textContent.replace(le, ""), w))
        }
        return n
    }

    function ou(n, t, r) {
        for (var u, e = t ? i.filter(t, n) : n, f = 0;
            (u = e[f]) != null; f++) r || u.nodeType !== 1 || i.cleanData(o(u)), u.parentNode && (r && i.contains(u.ownerDocument, u) && hi(o(u, "script")), u.parentNode.removeChild(u));
        return n
    }

    function lt(n, t, r) {
        var o, s, h, u, e = n.style;
        return r = r || ni(n), r && (u = r.getPropertyValue(t) || r[t], u !== "" || i.contains(n.ownerDocument, n) || (u = i.style(n, t)), !f.pixelMarginRight() && li.test(u) && su.test(t) && (o = e.width, s = e.minWidth, h = e.maxWidth, e.minWidth = e.maxWidth = e.width = u, u = r.width, e.width = o, e.minWidth = s, e.maxWidth = h)), u !== undefined ? u + "" : u
    }

    function hu(n, t) {
        return {
            get: function() {
                if (n()) {
                    delete this.get;
                    return
                }
                return (this.get = t).apply(this, arguments)
            }
        }
    }

    function be(n) {
        if (n in vu) return n;
        for (var i = n[0].toUpperCase() + n.slice(1), t = au.length; t--;)
            if (n = au[t] + i, n in vu) return n
    }

    function yu(n) {
        var t = i.cssProps[n];
        return t || (t = i.cssProps[n] = be(n) || n), t
    }

    function pu(n, t, i) {
        var r = ct.exec(t);
        return r ? Math.max(0, r[2] - (i || 0)) + (r[3] || "px") : t
    }

    function wu(n, t, r, u, f) {
        for (var o = 0, e = r === (u ? "border" : "content") ? 4 : t === "width" ? 1 : 0; e < 4; e += 2) r === "margin" && (o += i.css(n, r + b[e], !0, f)), u ? (r === "content" && (o -= i.css(n, "padding" + b[e], !0, f)), r !== "margin" && (o -= i.css(n, "border" + b[e] + "Width", !0, f))) : (o += i.css(n, "padding" + b[e], !0, f), r !== "padding" && (o += i.css(n, "border" + b[e] + "Width", !0, f)));
        return o
    }

    function bu(n, t, r) {
        var o, e = ni(n),
            u = lt(n, t, e),
            s = i.css(n, "boxSizing", !1, e) === "border-box";
        return li.test(u) ? u : (o = s && (f.boxSizingReliable() || u === n.style[t]), u === "auto" && (u = n["offset" + t[0].toUpperCase() + t.slice(1)]), u = parseFloat(u) || 0, u + wu(n, t, r || (s ? "border" : "content"), o, e) + "px")
    }

    function s(n, t, i, r, u) {
        return new s.prototype.init(n, t, i, r, u)
    }

    function ai() {
        ti && (u.hidden === !1 && n.requestAnimationFrame ? n.requestAnimationFrame(ai) : n.setTimeout(ai, i.fx.interval), i.fx.tick())
    }

    function gu() {
        return n.setTimeout(function() {
            ut = undefined
        }), ut = i.now()
    }

    function ii(n, t) {
        var r, u = 0,
            i = {
                height: n
            };
        for (t = t ? 1 : 0; u < 4; u += 2 - t) r = b[u], i["margin" + r] = i["padding" + r] = n;
        return t && (i.opacity = i.width = n), i
    }

    function nf(n, t, i) {
        for (var u, f = (a.tweeners[t] || []).concat(a.tweeners["*"]), r = 0, e = f.length; r < e; r++)
            if (u = f[r].call(i, t, n)) return u
    }

    function ke(n, t, u) {
        var f, y, w, c, b, s, o, l, k = "width" in t || "height" in t,
            v = this,
            p = {},
            h = n.style,
            a = n.nodeType && kt(n),
            e = r.get(n, "fxshow");
        u.queue || (c = i._queueHooks(n, "fx"), c.unqueued == null && (c.unqueued = 0, b = c.empty.fire, c.empty.fire = function() {
            c.unqueued || b()
        }), c.unqueued++, v.always(function() {
            v.always(function() {
                c.unqueued--;
                i.queue(n, "fx").length || c.empty.fire()
            })
        }));
        for (f in t)
            if (y = t[f], ku.test(y)) {
                if (delete t[f], w = w || y === "toggle", y === (a ? "hide" : "show"))
                    if (y === "show" && e && e[f] !== undefined) a = !0;
                    else continue;
                p[f] = e && e[f] || i.style(n, f)
            }
        if (s = !i.isEmptyObject(t), s || !i.isEmptyObject(p)) {
            k && n.nodeType === 1 && (u.overflow = [h.overflow, h.overflowX, h.overflowY], o = e && e.display, o == null && (o = r.get(n, "display")), l = i.css(n, "display"), l === "none" && (o ? l = o : (tt([n], !0), o = n.style.display || o, l = i.css(n, "display"), tt([n]))), (l === "inline" || l === "inline-block" && o != null) && i.css(n, "float") === "none" && (s || (v.done(function() {
                h.display = o
            }), o == null && (l = h.display, o = l === "none" ? "" : l)), h.display = "inline-block"));
            u.overflow && (h.overflow = "hidden", v.always(function() {
                h.overflow = u.overflow[0];
                h.overflowX = u.overflow[1];
                h.overflowY = u.overflow[2]
            }));
            s = !1;
            for (f in p) s || (e ? "hidden" in e && (a = e.hidden) : e = r.access(n, "fxshow", {
                display: o
            }), w && (e.hidden = !a), a && tt([n], !0), v.done(function() {
                a || tt([n]);
                r.remove(n, "fxshow");
                for (f in p) i.style(n, f, p[f])
            })), s = nf(a ? e[f] : 0, f, v), f in e || (e[f] = s.start, a && (s.end = s.start, s.start = 0))
        }
    }

    function de(n, t) {
        var r, f, e, u, o;
        for (r in n)
            if (f = i.camelCase(r), e = t[f], u = n[r], Array.isArray(u) && (e = u[1], u = n[r] = u[0]), r !== f && (n[f] = u, delete n[r]), o = i.cssHooks[f], o && "expand" in o) {
                u = o.expand(u);
                delete n[f];
                for (r in u) r in n || (n[r] = u[r], t[r] = e)
            } else t[f] = e
    }

    function a(n, t, r) {
        var e, o, s = 0,
            l = a.prefilters.length,
            f = i.Deferred().always(function() {
                delete c.elem
            }),
            c = function() {
                if (o) return !1;
                for (var s = ut || gu(), t = Math.max(0, u.startTime + u.duration - s), h = t / u.duration || 0, i = 1 - h, r = 0, e = u.tweens.length; r < e; r++) u.tweens[r].run(i);
                return (f.notifyWith(n, [u, i, t]), i < 1 && e) ? t : (e || f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u]), !1)
            },
            u = f.promise({
                elem: n,
                props: i.extend({}, t),
                opts: i.extend(!0, {
                    specialEasing: {},
                    easing: i.easing._default
                }, r),
                originalProperties: t,
                originalOptions: r,
                startTime: ut || gu(),
                duration: r.duration,
                tweens: [],
                createTween: function(t, r) {
                    var f = i.Tween(n, u.opts, t, r, u.opts.specialEasing[t] || u.opts.easing);
                    return u.tweens.push(f), f
                },
                stop: function(t) {
                    var i = 0,
                        r = t ? u.tweens.length : 0;
                    if (o) return this;
                    for (o = !0; i < r; i++) u.tweens[i].run(1);
                    return t ? (f.notifyWith(n, [u, 1, 0]), f.resolveWith(n, [u, t])) : f.rejectWith(n, [u, t]), this
                }
            }),
            h = u.props;
        for (de(h, u.opts.specialEasing); s < l; s++)
            if (e = a.prefilters[s].call(u, n, h, u.opts), e) return i.isFunction(e.stop) && (i._queueHooks(u.elem, u.opts.queue).stop = i.proxy(e.stop, e)), e;
        return i.map(h, nf, u), i.isFunction(u.opts.start) && u.opts.start.call(n, u), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always), i.fx.timer(i.extend(c, {
            elem: n,
            anim: u,
            queue: u.opts.queue
        })), u
    }

    function k(n) {
        var t = n.match(h) || [];
        return t.join(" ")
    }

    function d(n) {
        return n.getAttribute && n.getAttribute("class") || ""
    }

    function pi(n, t, r, u) {
        var f;
        if (Array.isArray(t)) i.each(t, function(t, i) {
            r || ge.test(n) ? u(n, i) : pi(n + "[" + (typeof i == "object" && i != null ? t : "") + "]", i, r, u)
        });
        else if (r || i.type(t) !== "object") u(n, t);
        else
            for (f in t) pi(n + "[" + f + "]", t[f], r, u)
    }

    function cf(n) {
        return function(t, r) {
            typeof t != "string" && (r = t, t = "*");
            var u, f = 0,
                e = t.toLowerCase().match(h) || [];
            if (i.isFunction(r))
                while (u = e[f++]) u[0] === "+" ? (u = u.slice(1) || "*", (n[u] = n[u] || []).unshift(r)) : (n[u] = n[u] || []).push(r)
        }
    }

    function lf(n, t, r, u) {
        function e(s) {
            var h;
            return f[s] = !0, i.each(n[s] || [], function(n, i) {
                var s = i(t, r, u);
                if (typeof s != "string" || o || f[s]) {
                    if (o) return !(h = s)
                } else return t.dataTypes.unshift(s), e(s), !1
            }), h
        }
        var f = {},
            o = n === wi;
        return e(t.dataTypes[0]) || !f["*"] && e("*")
    }

    function ki(n, t) {
        var r, u, f = i.ajaxSettings.flatOptions || {};
        for (r in t) t[r] !== undefined && ((f[r] ? n : u || (u = {}))[r] = t[r]);
        return u && i.extend(!0, n, u), n
    }

    function so(n, t, i) {
        for (var e, u, f, o, s = n.contents, r = n.dataTypes; r[0] === "*";) r.shift(), e === undefined && (e = n.mimeType || t.getResponseHeader("Content-Type"));
        if (e)
            for (u in s)
                if (s[u] && s[u].test(e)) {
                    r.unshift(u);
                    break
                }
        if (r[0] in i) f = r[0];
        else {
            for (u in i) {
                if (!r[0] || n.converters[u + " " + r[0]]) {
                    f = u;
                    break
                }
                o || (o = u)
            }
            f = f || o
        }
        if (f) return f !== r[0] && r.unshift(f), i[f]
    }

    function ho(n, t, i, r) {
        var h, u, f, s, e, o = {},
            c = n.dataTypes.slice();
        if (c[1])
            for (f in n.converters) o[f.toLowerCase()] = n.converters[f];
        for (u = c.shift(); u;)
            if (n.responseFields[u] && (i[n.responseFields[u]] = t), !e && r && n.dataFilter && (t = n.dataFilter(t, n.dataType)), e = u, u = c.shift(), u)
                if (u === "*") u = e;
                else if (e !== "*" && e !== u) {
            if (f = o[e + " " + u] || o["* " + u], !f)
                for (h in o)
                    if (s = h.split(" "), s[1] === u && (f = o[e + " " + s[0]] || o["* " + s[0]], f)) {
                        f === !0 ? f = o[h] : o[h] !== !0 && (u = s[0], c.unshift(s[1]));
                        break
                    }
            if (f !== !0)
                if (f && n.throws) t = f(t);
                else try {
                    t = f(t)
                } catch (l) {
                    return {
                        state: "parsererror",
                        error: f ? l : "No conversion from " + e + " to " + u
                    }
                }
        }
        return {
            state: "success",
            data: t
        }
    }
    var p = [],
        u = n.document,
        pf = Object.getPrototypeOf,
        w = p.slice,
        gi = p.concat,
        ui = p.push,
        ot = p.indexOf,
        vt = {},
        nr = vt.toString,
        yt = vt.hasOwnProperty,
        tr = yt.toString,
        wf = tr.call(Object),
        f = {},
        rr = "3.2.1",
        i = function(n, t) {
            return new i.fn.init(n, t)
        },
        bf = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        kf = /^-ms-/,
        df = /-([a-z])/g,
        gf = function(n, t) {
            return t.toUpperCase()
        },
        y, ei, er, or, sr, hr, cr, lr, h, yr, wt, v, st, si, tu, ut, ti, ku, du, tf, ft, rf, uf, ff, vi, af, et, di, ri, vf, yf;
    i.fn = i.prototype = {
        jquery: rr,
        constructor: i,
        length: 0,
        toArray: function() {
            return w.call(this)
        },
        get: function(n) {
            return n == null ? w.call(this) : n < 0 ? this[n + this.length] : this[n]
        },
        pushStack: function(n) {
            var t = i.merge(this.constructor(), n);
            return t.prevObject = this, t
        },
        each: function(n) {
            return i.each(this, n)
        },
        map: function(n) {
            return this.pushStack(i.map(this, function(t, i) {
                return n.call(t, i, t)
            }))
        },
        slice: function() {
            return this.pushStack(w.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(n) {
            var i = this.length,
                t = +n + (n < 0 ? i : 0);
            return this.pushStack(t >= 0 && t < i ? [this[t]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: ui,
        sort: p.sort,
        splice: p.splice
    };
    i.extend = i.fn.extend = function() {
        var e, f, r, t, o, s, n = arguments[0] || {},
            u = 1,
            c = arguments.length,
            h = !1;
        for (typeof n == "boolean" && (h = n, n = arguments[u] || {}, u++), typeof n == "object" || i.isFunction(n) || (n = {}), u === c && (n = this, u--); u < c; u++)
            if ((e = arguments[u]) != null)
                for (f in e)(r = n[f], t = e[f], n !== t) && (h && t && (i.isPlainObject(t) || (o = Array.isArray(t))) ? (o ? (o = !1, s = r && Array.isArray(r) ? r : []) : s = r && i.isPlainObject(r) ? r : {}, n[f] = i.extend(h, s, t)) : t !== undefined && (n[f] = t));
        return n
    };
    i.extend({
        expando: "jQuery" + (rr + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(n) {
            throw new Error(n);
        },
        noop: function() {},
        isFunction: function(n) {
            return i.type(n) === "function"
        },
        isWindow: function(n) {
            return n != null && n === n.window
        },
        isNumeric: function(n) {
            var t = i.type(n);
            return (t === "number" || t === "string") && !isNaN(n - parseFloat(n))
        },
        isPlainObject: function(n) {
            var t, i;
            return !n || nr.call(n) !== "[object Object]" ? !1 : (t = pf(n), !t) ? !0 : (i = yt.call(t, "constructor") && t.constructor, typeof i == "function" && tr.call(i) === wf)
        },
        isEmptyObject: function(n) {
            for (var t in n) return !1;
            return !0
        },
        type: function(n) {
            return n == null ? n + "" : typeof n == "object" || typeof n == "function" ? vt[nr.call(n)] || "object" : typeof n
        },
        globalEval: function(n) {
            ir(n)
        },
        camelCase: function(n) {
            return n.replace(kf, "ms-").replace(df, gf)
        },
        each: function(n, t) {
            var r, i = 0;
            if (fi(n)) {
                for (r = n.length; i < r; i++)
                    if (t.call(n[i], i, n[i]) === !1) break
            } else
                for (i in n)
                    if (t.call(n[i], i, n[i]) === !1) break; return n
        },
        trim: function(n) {
            return n == null ? "" : (n + "").replace(bf, "")
        },
        makeArray: function(n, t) {
            var r = t || [];
            return n != null && (fi(Object(n)) ? i.merge(r, typeof n == "string" ? [n] : n) : ui.call(r, n)), r
        },
        inArray: function(n, t, i) {
            return t == null ? -1 : ot.call(t, n, i)
        },
        merge: function(n, t) {
            for (var u = +t.length, i = 0, r = n.length; i < u; i++) n[r++] = t[i];
            return n.length = r, n
        },
        grep: function(n, t, i) {
            for (var u, f = [], r = 0, e = n.length, o = !i; r < e; r++) u = !t(n[r], r), u !== o && f.push(n[r]);
            return f
        },
        map: function(n, t, i) {
            var e, u, r = 0,
                f = [];
            if (fi(n))
                for (e = n.length; r < e; r++) u = t(n[r], r, i), u != null && f.push(u);
            else
                for (r in n) u = t(n[r], r, i), u != null && f.push(u);
            return gi.apply([], f)
        },
        guid: 1,
        proxy: function(n, t) {
            var u, f, r;
            return (typeof t == "string" && (u = n[t], t = n, n = u), !i.isFunction(n)) ? undefined : (f = w.call(arguments, 2), r = function() {
                return n.apply(t || this, f.concat(w.call(arguments)))
            }, r.guid = n.guid = n.guid || i.guid++, r)
        },
        now: Date.now,
        support: f
    });
    typeof Symbol == "function" && (i.fn[Symbol.iterator] = p[Symbol.iterator]);
    i.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(n, t) {
        vt["[object " + t + "]"] = t.toLowerCase()
    });
    y = function(n) {
        function u(n, t, r, u) {
            var s, w, l, a, d, y, g, p = t && t.ownerDocument,
                v = t ? t.nodeType : 9;
            if (r = r || [], typeof n != "string" || !n || v !== 1 && v !== 9 && v !== 11) return r;
            if (!u && ((t ? t.ownerDocument || t : c) !== i && b(t), t = t || i, h)) {
                if (v !== 11 && (d = cr.exec(n)))
                    if (s = d[1]) {
                        if (v === 9)
                            if (l = t.getElementById(s)) {
                                if (l.id === s) return r.push(l), r
                            } else return r;
                        else if (p && (l = p.getElementById(s)) && et(t, l) && l.id === s) return r.push(l), r
                    } else {
                        if (d[2]) return k.apply(r, t.getElementsByTagName(n)), r;
                        if ((s = d[3]) && e.getElementsByClassName && t.getElementsByClassName) return k.apply(r, t.getElementsByClassName(s)), r
                    }
                if (e.qsa && !lt[n + " "] && (!o || !o.test(n))) {
                    if (v !== 1) p = t, g = n;
                    else if (t.nodeName.toLowerCase() !== "object") {
                        for ((a = t.getAttribute("id")) ? a = a.replace(vi, yi) : t.setAttribute("id", a = f), y = ft(n), w = y.length; w--;) y[w] = "#" + a + " " + yt(y[w]);
                        g = y.join(",");
                        p = ni.test(n) && ri(t.parentNode) || t
                    }
                    if (g) try {
                        return k.apply(r, p.querySelectorAll(g)), r
                    } catch (nt) {} finally {
                        a === f && t.removeAttribute("id")
                    }
                }
            }
            return si(n.replace(at, "$1"), t, r, u)
        }

        function ti() {
            function n(r, u) {
                return i.push(r + " ") > t.cacheLength && delete n[i.shift()], n[r + " "] = u
            }
            var i = [];
            return n
        }

        function l(n) {
            return n[f] = !0, n
        }

        function a(n) {
            var t = i.createElement("fieldset");
            try {
                return !!n(t)
            } catch (r) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t);
                t = null
            }
        }

        function ii(n, i) {
            for (var r = n.split("|"), u = r.length; u--;) t.attrHandle[r[u]] = i
        }

        function wi(n, t) {
            var i = t && n,
                r = i && n.nodeType === 1 && t.nodeType === 1 && n.sourceIndex - t.sourceIndex;
            if (r) return r;
            if (i)
                while (i = i.nextSibling)
                    if (i === t) return -1;
            return n ? 1 : -1
        }

        function ar(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return i === "input" && t.type === n
            }
        }

        function vr(n) {
            return function(t) {
                var i = t.nodeName.toLowerCase();
                return (i === "input" || i === "button") && t.type === n
            }
        }

        function bi(n) {
            return function(t) {
                return "form" in t ? t.parentNode && t.disabled === !1 ? "label" in t ? "label" in t.parentNode ? t.parentNode.disabled === n : t.disabled === n : t.isDisabled === n || t.isDisabled !== !n && lr(t) === n : t.disabled === n : "label" in t ? t.disabled === n : !1
            }
        }

        function it(n) {
            return l(function(t) {
                return t = +t, l(function(i, r) {
                    for (var u, f = n([], i.length, t), e = f.length; e--;) i[u = f[e]] && (i[u] = !(r[u] = i[u]))
                })
            })
        }

        function ri(n) {
            return n && typeof n.getElementsByTagName != "undefined" && n
        }

        function ki() {}

        function yt(n) {
            for (var t = 0, r = n.length, i = ""; t < r; t++) i += n[t].value;
            return i
        }

        function pt(n, t, i) {
            var r = t.dir,
                u = t.next,
                e = u || r,
                o = i && e === "parentNode",
                s = di++;
            return t.first ? function(t, i, u) {
                while (t = t[r])
                    if (t.nodeType === 1 || o) return n(t, i, u);
                return !1
            } : function(t, i, h) {
                var c, l, a, y = [v, s];
                if (h) {
                    while (t = t[r])
                        if ((t.nodeType === 1 || o) && n(t, i, h)) return !0
                } else
                    while (t = t[r])
                        if (t.nodeType === 1 || o)
                            if (a = t[f] || (t[f] = {}), l = a[t.uniqueID] || (a[t.uniqueID] = {}), u && u === t.nodeName.toLowerCase()) t = t[r] || t;
                            else {
                                if ((c = l[e]) && c[0] === v && c[1] === s) return y[2] = c[2];
                                if (l[e] = y, y[2] = n(t, i, h)) return !0
                            } return !1
            }
        }

        function ui(n) {
            return n.length > 1 ? function(t, i, r) {
                for (var u = n.length; u--;)
                    if (!n[u](t, i, r)) return !1;
                return !0
            } : n[0]
        }

        function yr(n, t, i) {
            for (var r = 0, f = t.length; r < f; r++) u(n, t[r], i);
            return i
        }

        function wt(n, t, i, r, u) {
            for (var e, o = [], f = 0, s = n.length, h = t != null; f < s; f++)(e = n[f]) && (!i || i(e, r, u)) && (o.push(e), h && t.push(f));
            return o
        }

        function fi(n, t, i, r, u, e) {
            return r && !r[f] && (r = fi(r)), u && !u[f] && (u = fi(u, e)), l(function(f, e, o, s) {
                var l, c, a, p = [],
                    y = [],
                    w = e.length,
                    b = f || yr(t || "*", o.nodeType ? [o] : o, []),
                    v = n && (f || !t) ? wt(b, p, n, o, s) : b,
                    h = i ? u || (f ? n : w || r) ? [] : e : v;
                if (i && i(v, h, o, s), r)
                    for (l = wt(h, y), r(l, [], o, s), c = l.length; c--;)(a = l[c]) && (h[y[c]] = !(v[y[c]] = a));
                if (f) {
                    if (u || n) {
                        if (u) {
                            for (l = [], c = h.length; c--;)(a = h[c]) && l.push(v[c] = a);
                            u(null, h = [], l, s)
                        }
                        for (c = h.length; c--;)(a = h[c]) && (l = u ? nt(f, a) : p[c]) > -1 && (f[l] = !(e[l] = a))
                    }
                } else h = wt(h === e ? h.splice(w, h.length) : h), u ? u(null, e, h, s) : k.apply(e, h)
            })
        }

        function ei(n) {
            for (var o, u, r, s = n.length, h = t.relative[n[0].type], c = h || t.relative[" "], i = h ? 1 : 0, l = pt(function(n) {
                    return n === o
                }, c, !0), a = pt(function(n) {
                    return nt(o, n) > -1
                }, c, !0), e = [function(n, t, i) {
                    var r = !h && (i || t !== ht) || ((o = t).nodeType ? l(n, t, i) : a(n, t, i));
                    return o = null, r
                }]; i < s; i++)
                if (u = t.relative[n[i].type]) e = [pt(ui(e), u)];
                else {
                    if (u = t.filter[n[i].type].apply(null, n[i].matches), u[f]) {
                        for (r = ++i; r < s; r++)
                            if (t.relative[n[r].type]) break;
                        return fi(i > 1 && ui(e), i > 1 && yt(n.slice(0, i - 1).concat({
                            value: n[i - 2].type === " " ? "*" : ""
                        })).replace(at, "$1"), u, i < r && ei(n.slice(i, r)), r < s && ei(n = n.slice(r)), r < s && yt(n))
                    }
                    e.push(u)
                }
            return ui(e)
        }

        function pr(n, r) {
            var f = r.length > 0,
                e = n.length > 0,
                o = function(o, s, c, l, a) {
                    var y, nt, d, g = 0,
                        p = "0",
                        tt = o && [],
                        w = [],
                        it = ht,
                        rt = o || e && t.find.TAG("*", a),
                        ut = v += it == null ? 1 : Math.random() || .1,
                        ft = rt.length;
                    for (a && (ht = s === i || s || a); p !== ft && (y = rt[p]) != null; p++) {
                        if (e && y) {
                            for (nt = 0, s || y.ownerDocument === i || (b(y), c = !h); d = n[nt++];)
                                if (d(y, s || i, c)) {
                                    l.push(y);
                                    break
                                }
                            a && (v = ut)
                        }
                        f && ((y = !d && y) && g--, o && tt.push(y))
                    }
                    if (g += p, f && p !== g) {
                        for (nt = 0; d = r[nt++];) d(tt, w, s, c);
                        if (o) {
                            if (g > 0)
                                while (p--) tt[p] || w[p] || (w[p] = nr.call(l));
                            w = wt(w)
                        }
                        k.apply(l, w);
                        a && !o && w.length > 0 && g + r.length > 1 && u.uniqueSort(l)
                    }
                    return a && (v = ut, ht = it), tt
                };
            return f ? l(o) : o
        }
        var rt, e, t, st, oi, ft, bt, si, ht, w, ut, b, i, s, h, o, d, ct, et, f = "sizzle" + 1 * new Date,
            c = n.document,
            v = 0,
            di = 0,
            hi = ti(),
            ci = ti(),
            lt = ti(),
            kt = function(n, t) {
                return n === t && (ut = !0), 0
            },
            gi = {}.hasOwnProperty,
            g = [],
            nr = g.pop,
            tr = g.push,
            k = g.push,
            li = g.slice,
            nt = function(n, t) {
                for (var i = 0, r = n.length; i < r; i++)
                    if (n[i] === t) return i;
                return -1
            },
            dt = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            r = "[\\x20\\t\\r\\n\\f]",
            tt = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
            ai = "\\[" + r + "*(" + tt + ")(?:" + r + "*([*^$|!~]?=)" + r + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + tt + "))|)" + r + "*\\]",
            gt = ":(" + tt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ai + ")*)|.*)\\)|)",
            ir = new RegExp(r + "+", "g"),
            at = new RegExp("^" + r + "+|((?:^|[^\\\\])(?:\\\\.)*)" + r + "+$", "g"),
            rr = new RegExp("^" + r + "*," + r + "*"),
            ur = new RegExp("^" + r + "*([>+~]|" + r + ")" + r + "*"),
            fr = new RegExp("=" + r + "*([^\\]'\"]*?)" + r + "*\\]", "g"),
            er = new RegExp(gt),
            or = new RegExp("^" + tt + "$"),
            vt = {
                ID: new RegExp("^#(" + tt + ")"),
                CLASS: new RegExp("^\\.(" + tt + ")"),
                TAG: new RegExp("^(" + tt + "|[*])"),
                ATTR: new RegExp("^" + ai),
                PSEUDO: new RegExp("^" + gt),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + r + "*(even|odd|(([+-]|)(\\d*)n|)" + r + "*(?:([+-]|)" + r + "*(\\d+)|))" + r + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + dt + ")$", "i"),
                needsContext: new RegExp("^" + r + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + r + "*((?:-\\d)?\\d*)" + r + "*\\)|)(?=[^-]|$)", "i")
            },
            sr = /^(?:input|select|textarea|button)$/i,
            hr = /^h\d$/i,
            ot = /^[^{]+\{\s*\[native \w/,
            cr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ni = /[+~]/,
            y = new RegExp("\\\\([\\da-f]{1,6}" + r + "?|(" + r + ")|.)", "ig"),
            p = function(n, t, i) {
                var r = "0x" + t - 65536;
                return r !== r || i ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, r & 1023 | 56320)
            },
            vi = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
            yi = function(n, t) {
                return t ? n === "\0" ? "�" : n.slice(0, -1) + "\\" + n.charCodeAt(n.length - 1).toString(16) + " " : "\\" + n
            },
            pi = function() {
                b()
            },
            lr = pt(function(n) {
                return n.disabled === !0 && ("form" in n || "label" in n)
            }, {
                dir: "parentNode",
                next: "legend"
            });
        try {
            k.apply(g = li.call(c.childNodes), c.childNodes);
            g[c.childNodes.length].nodeType
        } catch (wr) {
            k = {
                apply: g.length ? function(n, t) {
                    tr.apply(n, li.call(t))
                } : function(n, t) {
                    for (var i = n.length, r = 0; n[i++] = t[r++];);
                    n.length = i - 1
                }
            }
        }
        e = u.support = {};
        oi = u.isXML = function(n) {
            var t = n && (n.ownerDocument || n).documentElement;
            return t ? t.nodeName !== "HTML" : !1
        };
        b = u.setDocument = function(n) {
            var v, u, l = n ? n.ownerDocument || n : c;
            return l === i || l.nodeType !== 9 || !l.documentElement ? i : (i = l, s = i.documentElement, h = !oi(i), c !== i && (u = i.defaultView) && u.top !== u && (u.addEventListener ? u.addEventListener("unload", pi, !1) : u.attachEvent && u.attachEvent("onunload", pi)), e.attributes = a(function(n) {
                return n.className = "i", !n.getAttribute("className")
            }), e.getElementsByTagName = a(function(n) {
                return n.appendChild(i.createComment("")), !n.getElementsByTagName("*").length
            }), e.getElementsByClassName = ot.test(i.getElementsByClassName), e.getById = a(function(n) {
                return s.appendChild(n).id = f, !i.getElementsByName || !i.getElementsByName(f).length
            }), e.getById ? (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    return n.getAttribute("id") === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i = t.getElementById(n);
                    return i ? [i] : []
                }
            }) : (t.filter.ID = function(n) {
                var t = n.replace(y, p);
                return function(n) {
                    var i = typeof n.getAttributeNode != "undefined" && n.getAttributeNode("id");
                    return i && i.value === t
                }
            }, t.find.ID = function(n, t) {
                if (typeof t.getElementById != "undefined" && h) {
                    var i, u, f, r = t.getElementById(n);
                    if (r) {
                        if (i = r.getAttributeNode("id"), i && i.value === n) return [r];
                        for (f = t.getElementsByName(n), u = 0; r = f[u++];)
                            if (i = r.getAttributeNode("id"), i && i.value === n) return [r]
                    }
                    return []
                }
            }), t.find.TAG = e.getElementsByTagName ? function(n, t) {
                return typeof t.getElementsByTagName != "undefined" ? t.getElementsByTagName(n) : e.qsa ? t.querySelectorAll(n) : void 0
            } : function(n, t) {
                var i, r = [],
                    f = 0,
                    u = t.getElementsByTagName(n);
                if (n === "*") {
                    while (i = u[f++]) i.nodeType === 1 && r.push(i);
                    return r
                }
                return u
            }, t.find.CLASS = e.getElementsByClassName && function(n, t) {
                if (typeof t.getElementsByClassName != "undefined" && h) return t.getElementsByClassName(n)
            }, d = [], o = [], (e.qsa = ot.test(i.querySelectorAll)) && (a(function(n) {
                s.appendChild(n).innerHTML = "<a id='" + f + "'><\/a><select id='" + f + "-\r\\' msallowcapture=''><option selected=''><\/option><\/select>";
                n.querySelectorAll("[msallowcapture^='']").length && o.push("[*^$]=" + r + "*(?:''|\"\")");
                n.querySelectorAll("[selected]").length || o.push("\\[" + r + "*(?:value|" + dt + ")");
                n.querySelectorAll("[id~=" + f + "-]").length || o.push("~=");
                n.querySelectorAll(":checked").length || o.push(":checked");
                n.querySelectorAll("a#" + f + "+*").length || o.push(".#.+[+~]")
            }), a(function(n) {
                n.innerHTML = "<a href='' disabled='disabled'><\/a><select disabled='disabled'><option/><\/select>";
                var t = i.createElement("input");
                t.setAttribute("type", "hidden");
                n.appendChild(t).setAttribute("name", "D");
                n.querySelectorAll("[name=d]").length && o.push("name" + r + "*[*^$|!~]?=");
                n.querySelectorAll(":enabled").length !== 2 && o.push(":enabled", ":disabled");
                s.appendChild(n).disabled = !0;
                n.querySelectorAll(":disabled").length !== 2 && o.push(":enabled", ":disabled");
                n.querySelectorAll("*,:x");
                o.push(",.*:")
            })), (e.matchesSelector = ot.test(ct = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && a(function(n) {
                e.disconnectedMatch = ct.call(n, "*");
                ct.call(n, "[s!='']:x");
                d.push("!=", gt)
            }), o = o.length && new RegExp(o.join("|")), d = d.length && new RegExp(d.join("|")), v = ot.test(s.compareDocumentPosition), et = v || ot.test(s.contains) ? function(n, t) {
                var r = n.nodeType === 9 ? n.documentElement : n,
                    i = t && t.parentNode;
                return n === i || !!(i && i.nodeType === 1 && (r.contains ? r.contains(i) : n.compareDocumentPosition && n.compareDocumentPosition(i) & 16))
            } : function(n, t) {
                if (t)
                    while (t = t.parentNode)
                        if (t === n) return !0;
                return !1
            }, kt = v ? function(n, t) {
                if (n === t) return ut = !0, 0;
                var r = !n.compareDocumentPosition - !t.compareDocumentPosition;
                return r ? r : (r = (n.ownerDocument || n) === (t.ownerDocument || t) ? n.compareDocumentPosition(t) : 1, r & 1 || !e.sortDetached && t.compareDocumentPosition(n) === r) ? n === i || n.ownerDocument === c && et(c, n) ? -1 : t === i || t.ownerDocument === c && et(c, t) ? 1 : w ? nt(w, n) - nt(w, t) : 0 : r & 4 ? -1 : 1
            } : function(n, t) {
                if (n === t) return ut = !0, 0;
                var r, u = 0,
                    o = n.parentNode,
                    s = t.parentNode,
                    f = [n],
                    e = [t];
                if (o && s) {
                    if (o === s) return wi(n, t)
                } else return n === i ? -1 : t === i ? 1 : o ? -1 : s ? 1 : w ? nt(w, n) - nt(w, t) : 0;
                for (r = n; r = r.parentNode;) f.unshift(r);
                for (r = t; r = r.parentNode;) e.unshift(r);
                while (f[u] === e[u]) u++;
                return u ? wi(f[u], e[u]) : f[u] === c ? -1 : e[u] === c ? 1 : 0
            }, i)
        };
        u.matches = function(n, t) {
            return u(n, null, null, t)
        };
        u.matchesSelector = function(n, t) {
            if ((n.ownerDocument || n) !== i && b(n), t = t.replace(fr, "='$1']"), e.matchesSelector && h && !lt[t + " "] && (!d || !d.test(t)) && (!o || !o.test(t))) try {
                var r = ct.call(n, t);
                if (r || e.disconnectedMatch || n.document && n.document.nodeType !== 11) return r
            } catch (f) {}
            return u(t, i, null, [n]).length > 0
        };
        u.contains = function(n, t) {
            return (n.ownerDocument || n) !== i && b(n), et(n, t)
        };
        u.attr = function(n, r) {
            (n.ownerDocument || n) !== i && b(n);
            var f = t.attrHandle[r.toLowerCase()],
                u = f && gi.call(t.attrHandle, r.toLowerCase()) ? f(n, r, !h) : undefined;
            return u !== undefined ? u : e.attributes || !h ? n.getAttribute(r) : (u = n.getAttributeNode(r)) && u.specified ? u.value : null
        };
        u.escape = function(n) {
            return (n + "").replace(vi, yi)
        };
        u.error = function(n) {
            throw new Error("Syntax error, unrecognized expression: " + n);
        };
        u.uniqueSort = function(n) {
            var r, u = [],
                t = 0,
                i = 0;
            if (ut = !e.detectDuplicates, w = !e.sortStable && n.slice(0), n.sort(kt), ut) {
                while (r = n[i++]) r === n[i] && (t = u.push(i));
                while (t--) n.splice(u[t], 1)
            }
            return w = null, n
        };
        st = u.getText = function(n) {
            var r, i = "",
                u = 0,
                t = n.nodeType;
            if (t) {
                if (t === 1 || t === 9 || t === 11) {
                    if (typeof n.textContent == "string") return n.textContent;
                    for (n = n.firstChild; n; n = n.nextSibling) i += st(n)
                } else if (t === 3 || t === 4) return n.nodeValue
            } else
                while (r = n[u++]) i += st(r);
            return i
        };
        t = u.selectors = {
            cacheLength: 50,
            createPseudo: l,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(n) {
                    return n[1] = n[1].replace(y, p), n[3] = (n[3] || n[4] || n[5] || "").replace(y, p), n[2] === "~=" && (n[3] = " " + n[3] + " "), n.slice(0, 4)
                },
                CHILD: function(n) {
                    return n[1] = n[1].toLowerCase(), n[1].slice(0, 3) === "nth" ? (n[3] || u.error(n[0]), n[4] = +(n[4] ? n[5] + (n[6] || 1) : 2 * (n[3] === "even" || n[3] === "odd")), n[5] = +(n[7] + n[8] || n[3] === "odd")) : n[3] && u.error(n[0]), n
                },
                PSEUDO: function(n) {
                    var i, t = !n[6] && n[2];
                    return vt.CHILD.test(n[0]) ? null : (n[3] ? n[2] = n[4] || n[5] || "" : t && er.test(t) && (i = ft(t, !0)) && (i = t.indexOf(")", t.length - i) - t.length) && (n[0] = n[0].slice(0, i), n[2] = t.slice(0, i)), n.slice(0, 3))
                }
            },
            filter: {
                TAG: function(n) {
                    var t = n.replace(y, p).toLowerCase();
                    return n === "*" ? function() {
                        return !0
                    } : function(n) {
                        return n.nodeName && n.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(n) {
                    var t = hi[n + " "];
                    return t || (t = new RegExp("(^|" + r + ")" + n + "(" + r + "|$)")) && hi(n, function(n) {
                        return t.test(typeof n.className == "string" && n.className || typeof n.getAttribute != "undefined" && n.getAttribute("class") || "")
                    })
                },
                ATTR: function(n, t, i) {
                    return function(r) {
                        var f = u.attr(r, n);
                        return f == null ? t === "!=" : t ? (f += "", t === "=" ? f === i : t === "!=" ? f !== i : t === "^=" ? i && f.indexOf(i) === 0 : t === "*=" ? i && f.indexOf(i) > -1 : t === "$=" ? i && f.slice(-i.length) === i : t === "~=" ? (" " + f.replace(ir, " ") + " ").indexOf(i) > -1 : t === "|=" ? f === i || f.slice(0, i.length + 1) === i + "-" : !1) : !0
                    }
                },
                CHILD: function(n, t, i, r, u) {
                    var s = n.slice(0, 3) !== "nth",
                        o = n.slice(-4) !== "last",
                        e = t === "of-type";
                    return r === 1 && u === 0 ? function(n) {
                        return !!n.parentNode
                    } : function(t, i, h) {
                        var p, w, y, c, a, b, k = s !== o ? "nextSibling" : "previousSibling",
                            d = t.parentNode,
                            nt = e && t.nodeName.toLowerCase(),
                            g = !h && !e,
                            l = !1;
                        if (d) {
                            if (s) {
                                while (k) {
                                    for (c = t; c = c[k];)
                                        if (e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) return !1;
                                    b = k = n === "only" && !b && "nextSibling"
                                }
                                return !0
                            }
                            if (b = [o ? d.firstChild : d.lastChild], o && g) {
                                for (c = d, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a && p[2], c = a && d.childNodes[a]; c = ++a && c && c[k] || (l = a = 0) || b.pop();)
                                    if (c.nodeType === 1 && ++l && c === t) {
                                        w[n] = [v, a, l];
                                        break
                                    }
                            } else if (g && (c = t, y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), p = w[n] || [], a = p[0] === v && p[1], l = a), l === !1)
                                while (c = ++a && c && c[k] || (l = a = 0) || b.pop())
                                    if ((e ? c.nodeName.toLowerCase() === nt : c.nodeType === 1) && ++l && (g && (y = c[f] || (c[f] = {}), w = y[c.uniqueID] || (y[c.uniqueID] = {}), w[n] = [v, l]), c === t)) break;
                            return l -= u, l === r || l % r == 0 && l / r >= 0
                        }
                    }
                },
                PSEUDO: function(n, i) {
                    var e, r = t.pseudos[n] || t.setFilters[n.toLowerCase()] || u.error("unsupported pseudo: " + n);
                    return r[f] ? r(i) : r.length > 1 ? (e = [n, n, "", i], t.setFilters.hasOwnProperty(n.toLowerCase()) ? l(function(n, t) {
                        for (var u, f = r(n, i), e = f.length; e--;) u = nt(n, f[e]), n[u] = !(t[u] = f[e])
                    }) : function(n) {
                        return r(n, 0, e)
                    }) : r
                }
            },
            pseudos: {
                not: l(function(n) {
                    var t = [],
                        r = [],
                        i = bt(n.replace(at, "$1"));
                    return i[f] ? l(function(n, t, r, u) {
                        for (var e, o = i(n, null, u, []), f = n.length; f--;)(e = o[f]) && (n[f] = !(t[f] = e))
                    }) : function(n, u, f) {
                        return t[0] = n, i(t, null, f, r), t[0] = null, !r.pop()
                    }
                }),
                has: l(function(n) {
                    return function(t) {
                        return u(n, t).length > 0
                    }
                }),
                contains: l(function(n) {
                    return n = n.replace(y, p),
                        function(t) {
                            return (t.textContent || t.innerText || st(t)).indexOf(n) > -1
                        }
                }),
                lang: l(function(n) {
                    return or.test(n || "") || u.error("unsupported lang: " + n), n = n.replace(y, p).toLowerCase(),
                        function(t) {
                            var i;
                            do
                                if (i = h ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return i = i.toLowerCase(), i === n || i.indexOf(n + "-") === 0;
                            while ((t = t.parentNode) && t.nodeType === 1);
                            return !1
                        }
                }),
                target: function(t) {
                    var i = n.location && n.location.hash;
                    return i && i.slice(1) === t.id
                },
                root: function(n) {
                    return n === s
                },
                focus: function(n) {
                    return n === i.activeElement && (!i.hasFocus || i.hasFocus()) && !!(n.type || n.href || ~n.tabIndex)
                },
                enabled: bi(!1),
                disabled: bi(!0),
                checked: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && !!n.checked || t === "option" && !!n.selected
                },
                selected: function(n) {
                    return n.parentNode && n.parentNode.selectedIndex, n.selected === !0
                },
                empty: function(n) {
                    for (n = n.firstChild; n; n = n.nextSibling)
                        if (n.nodeType < 6) return !1;
                    return !0
                },
                parent: function(n) {
                    return !t.pseudos.empty(n)
                },
                header: function(n) {
                    return hr.test(n.nodeName)
                },
                input: function(n) {
                    return sr.test(n.nodeName)
                },
                button: function(n) {
                    var t = n.nodeName.toLowerCase();
                    return t === "input" && n.type === "button" || t === "button"
                },
                text: function(n) {
                    var t;
                    return n.nodeName.toLowerCase() === "input" && n.type === "text" && ((t = n.getAttribute("type")) == null || t.toLowerCase() === "text")
                },
                first: it(function() {
                    return [0]
                }),
                last: it(function(n, t) {
                    return [t - 1]
                }),
                eq: it(function(n, t, i) {
                    return [i < 0 ? i + t : i]
                }),
                even: it(function(n, t) {
                    for (var i = 0; i < t; i += 2) n.push(i);
                    return n
                }),
                odd: it(function(n, t) {
                    for (var i = 1; i < t; i += 2) n.push(i);
                    return n
                }),
                lt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; --r >= 0;) n.push(r);
                    return n
                }),
                gt: it(function(n, t, i) {
                    for (var r = i < 0 ? i + t : i; ++r < t;) n.push(r);
                    return n
                })
            }
        };
        t.pseudos.nth = t.pseudos.eq;
        for (rt in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            }) t.pseudos[rt] = ar(rt);
        for (rt in {
                submit: !0,
                reset: !0
            }) t.pseudos[rt] = vr(rt);
        return ki.prototype = t.filters = t.pseudos, t.setFilters = new ki, ft = u.tokenize = function(n, i) {
            var e, f, s, o, r, h, c, l = ci[n + " "];
            if (l) return i ? 0 : l.slice(0);
            for (r = n, h = [], c = t.preFilter; r;) {
                (!e || (f = rr.exec(r))) && (f && (r = r.slice(f[0].length) || r), h.push(s = []));
                e = !1;
                (f = ur.exec(r)) && (e = f.shift(), s.push({
                    value: e,
                    type: f[0].replace(at, " ")
                }), r = r.slice(e.length));
                for (o in t.filter)(f = vt[o].exec(r)) && (!c[o] || (f = c[o](f))) && (e = f.shift(), s.push({
                    value: e,
                    type: o,
                    matches: f
                }), r = r.slice(e.length));
                if (!e) break
            }
            return i ? r.length : r ? u.error(n) : ci(n, h).slice(0)
        }, bt = u.compile = function(n, t) {
            var r, u = [],
                e = [],
                i = lt[n + " "];
            if (!i) {
                for (t || (t = ft(n)), r = t.length; r--;) i = ei(t[r]), i[f] ? u.push(i) : e.push(i);
                i = lt(n, pr(e, u));
                i.selector = n
            }
            return i
        }, si = u.select = function(n, i, r, u) {
            var o, f, e, l, a, c = typeof n == "function" && n,
                s = !u && ft(n = c.selector || n);
            if (r = r || [], s.length === 1) {
                if (f = s[0] = s[0].slice(0), f.length > 2 && (e = f[0]).type === "ID" && i.nodeType === 9 && h && t.relative[f[1].type]) {
                    if (i = (t.find.ID(e.matches[0].replace(y, p), i) || [])[0], i) c && (i = i.parentNode);
                    else return r;
                    n = n.slice(f.shift().value.length)
                }
                for (o = vt.needsContext.test(n) ? 0 : f.length; o--;) {
                    if (e = f[o], t.relative[l = e.type]) break;
                    if ((a = t.find[l]) && (u = a(e.matches[0].replace(y, p), ni.test(f[0].type) && ri(i.parentNode) || i))) {
                        if (f.splice(o, 1), n = u.length && yt(f), !n) return k.apply(r, u), r;
                        break
                    }
                }
            }
            return (c || bt(n, s))(u, i, !h, r, !i || ni.test(n) && ri(i.parentNode) || i), r
        }, e.sortStable = f.split("").sort(kt).join("") === f, e.detectDuplicates = !!ut, b(), e.sortDetached = a(function(n) {
            return n.compareDocumentPosition(i.createElement("fieldset")) & 1
        }), a(function(n) {
            return n.innerHTML = "<a href='#'><\/a>", n.firstChild.getAttribute("href") === "#"
        }) || ii("type|href|height|width", function(n, t, i) {
            if (!i) return n.getAttribute(t, t.toLowerCase() === "type" ? 1 : 2)
        }), e.attributes && a(function(n) {
            return n.innerHTML = "<input/>", n.firstChild.setAttribute("value", ""), n.firstChild.getAttribute("value") === ""
        }) || ii("value", function(n, t, i) {
            if (!i && n.nodeName.toLowerCase() === "input") return n.defaultValue
        }), a(function(n) {
            return n.getAttribute("disabled") == null
        }) || ii(dt, function(n, t, i) {
            var r;
            if (!i) return n[t] === !0 ? t.toLowerCase() : (r = n.getAttributeNode(t)) && r.specified ? r.value : null
        }), u
    }(n);
    i.find = y;
    i.expr = y.selectors;
    i.expr[":"] = i.expr.pseudos;
    i.uniqueSort = i.unique = y.uniqueSort;
    i.text = y.getText;
    i.isXMLDoc = y.isXML;
    i.contains = y.contains;
    i.escapeSelector = y.escape;
    var g = function(n, t, r) {
            for (var u = [], f = r !== undefined;
                (n = n[t]) && n.nodeType !== 9;)
                if (n.nodeType === 1) {
                    if (f && i(n).is(r)) break;
                    u.push(n)
                }
            return u
        },
        ur = function(n, t) {
            for (var i = []; n; n = n.nextSibling) n.nodeType === 1 && n !== t && i.push(n);
            return i
        },
        fr = i.expr.match.needsContext;
    ei = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
    er = /^.[^:#\[\.,]*$/;
    i.filter = function(n, t, r) {
        var u = t[0];
        return (r && (n = ":not(" + n + ")"), t.length === 1 && u.nodeType === 1) ? i.find.matchesSelector(u, n) ? [u] : [] : i.find.matches(n, i.grep(t, function(n) {
            return n.nodeType === 1
        }))
    };
    i.fn.extend({
        find: function(n) {
            var t, r, u = this.length,
                f = this;
            if (typeof n != "string") return this.pushStack(i(n).filter(function() {
                for (t = 0; t < u; t++)
                    if (i.contains(f[t], this)) return !0
            }));
            for (r = this.pushStack([]), t = 0; t < u; t++) i.find(n, f[t], r);
            return u > 1 ? i.uniqueSort(r) : r
        },
        filter: function(n) {
            return this.pushStack(oi(this, n || [], !1))
        },
        not: function(n) {
            return this.pushStack(oi(this, n || [], !0))
        },
        is: function(n) {
            return !!oi(this, typeof n == "string" && fr.test(n) ? i(n) : n || [], !1).length
        }
    });
    sr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
    hr = i.fn.init = function(n, t, r) {
        var f, e;
        if (!n) return this;
        if (r = r || or, typeof n == "string") {
            if (f = n[0] === "<" && n[n.length - 1] === ">" && n.length >= 3 ? [null, n, null] : sr.exec(n), f && (f[1] || !t)) {
                if (f[1]) {
                    if (t = t instanceof i ? t[0] : t, i.merge(this, i.parseHTML(f[1], t && t.nodeType ? t.ownerDocument || t : u, !0)), ei.test(f[1]) && i.isPlainObject(t))
                        for (f in t) i.isFunction(this[f]) ? this[f](t[f]) : this.attr(f, t[f]);
                    return this
                }
                return e = u.getElementById(f[2]), e && (this[0] = e, this.length = 1), this
            }
            return !t || t.jquery ? (t || r).find(n) : this.constructor(t).find(n)
        }
        return n.nodeType ? (this[0] = n, this.length = 1, this) : i.isFunction(n) ? r.ready !== undefined ? r.ready(n) : n(i) : i.makeArray(n, this)
    };
    hr.prototype = i.fn;
    or = i(u);
    cr = /^(?:parents|prev(?:Until|All))/;
    lr = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    i.fn.extend({
        has: function(n) {
            var t = i(n, this),
                r = t.length;
            return this.filter(function() {
                for (var n = 0; n < r; n++)
                    if (i.contains(this, t[n])) return !0
            })
        },
        closest: function(n, t) {
            var r, f = 0,
                o = this.length,
                u = [],
                e = typeof n != "string" && i(n);
            if (!fr.test(n))
                for (; f < o; f++)
                    for (r = this[f]; r && r !== t; r = r.parentNode)
                        if (r.nodeType < 11 && (e ? e.index(r) > -1 : r.nodeType === 1 && i.find.matchesSelector(r, n))) {
                            u.push(r);
                            break
                        }
            return this.pushStack(u.length > 1 ? i.uniqueSort(u) : u)
        },
        index: function(n) {
            return n ? typeof n == "string" ? ot.call(i(n), this[0]) : ot.call(this, n.jquery ? n[0] : n) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(n, t) {
            return this.pushStack(i.uniqueSort(i.merge(this.get(), i(n, t))))
        },
        addBack: function(n) {
            return this.add(n == null ? this.prevObject : this.prevObject.filter(n))
        }
    });
    i.each({
        parent: function(n) {
            var t = n.parentNode;
            return t && t.nodeType !== 11 ? t : null
        },
        parents: function(n) {
            return g(n, "parentNode")
        },
        parentsUntil: function(n, t, i) {
            return g(n, "parentNode", i)
        },
        next: function(n) {
            return ar(n, "nextSibling")
        },
        prev: function(n) {
            return ar(n, "previousSibling")
        },
        nextAll: function(n) {
            return g(n, "nextSibling")
        },
        prevAll: function(n) {
            return g(n, "previousSibling")
        },
        nextUntil: function(n, t, i) {
            return g(n, "nextSibling", i)
        },
        prevUntil: function(n, t, i) {
            return g(n, "previousSibling", i)
        },
        siblings: function(n) {
            return ur((n.parentNode || {}).firstChild, n)
        },
        children: function(n) {
            return ur(n.firstChild)
        },
        contents: function(n) {
            return l(n, "iframe") ? n.contentDocument : (l(n, "template") && (n = n.content || n), i.merge([], n.childNodes))
        }
    }, function(n, t) {
        i.fn[n] = function(r, u) {
            var f = i.map(this, t, r);
            return n.slice(-5) !== "Until" && (u = r), u && typeof u == "string" && (f = i.filter(u, f)), this.length > 1 && (lr[n] || i.uniqueSort(f), cr.test(n) && f.reverse()), this.pushStack(f)
        }
    });
    h = /[^\x20\t\r\n\f]+/g;
    i.Callbacks = function(n) {
        n = typeof n == "string" ? ne(n) : i.extend({}, n);
        var e, r, h, u, t = [],
            o = [],
            f = -1,
            c = function() {
                for (u = u || n.once, h = e = !0; o.length; f = -1)
                    for (r = o.shift(); ++f < t.length;) t[f].apply(r[0], r[1]) === !1 && n.stopOnFalse && (f = t.length, r = !1);
                n.memory || (r = !1);
                e = !1;
                u && (t = r ? [] : "")
            },
            s = {
                add: function() {
                    return t && (r && !e && (f = t.length - 1, o.push(r)), function u(r) {
                        i.each(r, function(r, f) {
                            i.isFunction(f) ? n.unique && s.has(f) || t.push(f) : f && f.length && i.type(f) !== "string" && u(f)
                        })
                    }(arguments), r && !e && c()), this
                },
                remove: function() {
                    return i.each(arguments, function(n, r) {
                        for (var u;
                            (u = i.inArray(r, t, u)) > -1;) t.splice(u, 1), u <= f && f--
                    }), this
                },
                has: function(n) {
                    return n ? i.inArray(n, t) > -1 : t.length > 0
                },
                empty: function() {
                    return t && (t = []), this
                },
                disable: function() {
                    return u = o = [], t = r = "", this
                },
                disabled: function() {
                    return !t
                },
                lock: function() {
                    return u = o = [], r || e || (t = r = ""), this
                },
                locked: function() {
                    return !!u
                },
                fireWith: function(n, t) {
                    return u || (t = t || [], t = [n, t.slice ? t.slice() : t], o.push(t), e || c()), this
                },
                fire: function() {
                    return s.fireWith(this, arguments), this
                },
                fired: function() {
                    return !!h
                }
            };
        return s
    };
    i.extend({
        Deferred: function(t) {
            var u = [
                    ["notify", "progress", i.Callbacks("memory"), i.Callbacks("memory"), 2],
                    ["resolve", "done", i.Callbacks("once memory"), i.Callbacks("once memory"), 0, "resolved"],
                    ["reject", "fail", i.Callbacks("once memory"), i.Callbacks("once memory"), 1, "rejected"]
                ],
                e = "pending",
                f = {
                    state: function() {
                        return e
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments), this
                    },
                    "catch": function(n) {
                        return f.then(null, n)
                    },
                    pipe: function() {
                        var n = arguments;
                        return i.Deferred(function(t) {
                            i.each(u, function(u, f) {
                                var e = i.isFunction(n[f[4]]) && n[f[4]];
                                r[f[1]](function() {
                                    var n = e && e.apply(this, arguments);
                                    n && i.isFunction(n.promise) ? n.promise().progress(t.notify).done(t.resolve).fail(t.reject) : t[f[0] + "With"](this, e ? [n] : arguments)
                                })
                            });
                            n = null
                        }).promise()
                    },
                    then: function(t, r, f) {
                        function o(t, r, u, f) {
                            return function() {
                                var s = this,
                                    h = arguments,
                                    l = function() {
                                        var n, c;
                                        if (!(t < e)) {
                                            if (n = u.apply(s, h), n === r.promise()) throw new TypeError("Thenable self-resolution");
                                            c = n && (typeof n == "object" || typeof n == "function") && n.then;
                                            i.isFunction(c) ? f ? c.call(n, o(e, r, nt, f), o(e, r, pt, f)) : (e++, c.call(n, o(e, r, nt, f), o(e, r, pt, f), o(e, r, nt, r.notifyWith))) : (u !== nt && (s = undefined, h = [n]), (f || r.resolveWith)(s, h))
                                        }
                                    },
                                    c = f ? l : function() {
                                        try {
                                            l()
                                        } catch (n) {
                                            i.Deferred.exceptionHook && i.Deferred.exceptionHook(n, c.stackTrace);
                                            t + 1 >= e && (u !== pt && (s = undefined, h = [n]), r.rejectWith(s, h))
                                        }
                                    };
                                t ? c() : (i.Deferred.getStackHook && (c.stackTrace = i.Deferred.getStackHook()), n.setTimeout(c))
                            }
                        }
                        var e = 0;
                        return i.Deferred(function(n) {
                            u[0][3].add(o(0, n, i.isFunction(f) ? f : nt, n.notifyWith));
                            u[1][3].add(o(0, n, i.isFunction(t) ? t : nt));
                            u[2][3].add(o(0, n, i.isFunction(r) ? r : pt))
                        }).promise()
                    },
                    promise: function(n) {
                        return n != null ? i.extend(n, f) : f
                    }
                },
                r = {};
            return i.each(u, function(n, t) {
                var i = t[2],
                    o = t[5];
                f[t[1]] = i.add;
                o && i.add(function() {
                    e = o
                }, u[3 - n][2].disable, u[0][2].lock);
                i.add(t[3].fire);
                r[t[0]] = function() {
                    return r[t[0] + "With"](this === r ? undefined : this, arguments), this
                };
                r[t[0] + "With"] = i.fireWith
            }), f.promise(r), t && t.call(r, r), r
        },
        when: function(n) {
            var f = arguments.length,
                t = f,
                e = Array(t),
                u = w.call(arguments),
                r = i.Deferred(),
                o = function(n) {
                    return function(t) {
                        e[n] = this;
                        u[n] = arguments.length > 1 ? w.call(arguments) : t;
                        --f || r.resolveWith(e, u)
                    }
                };
            if (f <= 1 && (vr(n, r.done(o(t)).resolve, r.reject, !f), r.state() === "pending" || i.isFunction(u[t] && u[t].then))) return r.then();
            while (t--) vr(u[t], o(t), r.reject);
            return r.promise()
        }
    });
    yr = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
    i.Deferred.exceptionHook = function(t, i) {
        n.console && n.console.warn && t && yr.test(t.name) && n.console.warn("jQuery.Deferred exception: " + t.message, t.stack, i)
    };
    i.readyException = function(t) {
        n.setTimeout(function() {
            throw t;
        })
    };
    wt = i.Deferred();
    i.fn.ready = function(n) {
        return wt.then(n).catch(function(n) {
            i.readyException(n)
        }), this
    };
    i.extend({
        isReady: !1,
        readyWait: 1,
        ready: function(n) {
            (n === !0 ? --i.readyWait : i.isReady) || (i.isReady = !0, n !== !0 && --i.readyWait > 0) || wt.resolveWith(u, [i])
        }
    });
    i.ready.then = wt.then;
    u.readyState !== "complete" && (u.readyState === "loading" || u.documentElement.doScroll) ? (u.addEventListener("DOMContentLoaded", bt), n.addEventListener("load", bt)) : n.setTimeout(i.ready);
    v = function(n, t, r, u, f, e, o) {
        var s = 0,
            c = n.length,
            h = r == null;
        if (i.type(r) === "object") {
            f = !0;
            for (s in r) v(n, t, s, r[s], !0, e, o)
        } else if (u !== undefined && (f = !0, i.isFunction(u) || (o = !0), h && (o ? (t.call(n, u), t = null) : (h = t, t = function(n, t, r) {
                return h.call(i(n), r)
            })), t))
            for (; s < c; s++) t(n[s], r, o ? u : u.call(n[s], s, t(n[s], r)));
        return f ? n : h ? t.call(n) : c ? t(n[0], r) : e
    };
    st = function(n) {
        return n.nodeType === 1 || n.nodeType === 9 || !+n.nodeType
    };
    ht.uid = 1;
    ht.prototype = {
        cache: function(n) {
            var t = n[this.expando];
            return t || (t = {}, st(n) && (n.nodeType ? n[this.expando] = t : Object.defineProperty(n, this.expando, {
                value: t,
                configurable: !0
            }))), t
        },
        set: function(n, t, r) {
            var u, f = this.cache(n);
            if (typeof t == "string") f[i.camelCase(t)] = r;
            else
                for (u in t) f[i.camelCase(u)] = t[u];
            return f
        },
        get: function(n, t) {
            return t === undefined ? this.cache(n) : n[this.expando] && n[this.expando][i.camelCase(t)]
        },
        access: function(n, t, i) {
            return t === undefined || t && typeof t == "string" && i === undefined ? this.get(n, t) : (this.set(n, t, i), i !== undefined ? i : t)
        },
        remove: function(n, t) {
            var u, r = n[this.expando];
            if (r !== undefined) {
                if (t !== undefined)
                    for (Array.isArray(t) ? t = t.map(i.camelCase) : (t = i.camelCase(t), t = t in r ? [t] : t.match(h) || []), u = t.length; u--;) delete r[t[u]];
                (t === undefined || i.isEmptyObject(r)) && (n.nodeType ? n[this.expando] = undefined : delete n[this.expando])
            }
        },
        hasData: function(n) {
            var t = n[this.expando];
            return t !== undefined && !i.isEmptyObject(t)
        }
    };
    var r = new ht,
        e = new ht,
        te = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        ie = /[A-Z]/g;
    i.extend({
        hasData: function(n) {
            return e.hasData(n) || r.hasData(n)
        },
        data: function(n, t, i) {
            return e.access(n, t, i)
        },
        removeData: function(n, t) {
            e.remove(n, t)
        },
        _data: function(n, t, i) {
            return r.access(n, t, i)
        },
        _removeData: function(n, t) {
            r.remove(n, t)
        }
    });
    i.fn.extend({
        data: function(n, t) {
            var o, f, s, u = this[0],
                h = u && u.attributes;
            if (n === undefined) {
                if (this.length && (s = e.get(u), u.nodeType === 1 && !r.get(u, "hasDataAttrs"))) {
                    for (o = h.length; o--;) h[o] && (f = h[o].name, f.indexOf("data-") === 0 && (f = i.camelCase(f.slice(5)), pr(u, f, s[f])));
                    r.set(u, "hasDataAttrs", !0)
                }
                return s
            }
            return typeof n == "object" ? this.each(function() {
                e.set(this, n)
            }) : v(this, function(t) {
                var i;
                if (u && t === undefined) return (i = e.get(u, n), i !== undefined) ? i : (i = pr(u, n), i !== undefined) ? i : void 0;
                this.each(function() {
                    e.set(this, n, t)
                })
            }, null, t, arguments.length > 1, null, !0)
        },
        removeData: function(n) {
            return this.each(function() {
                e.remove(this, n)
            })
        }
    });
    i.extend({
        queue: function(n, t, u) {
            var f;
            if (n) return t = (t || "fx") + "queue", f = r.get(n, t), u && (!f || Array.isArray(u) ? f = r.access(n, t, i.makeArray(u)) : f.push(u)), f || []
        },
        dequeue: function(n, t) {
            t = t || "fx";
            var r = i.queue(n, t),
                e = r.length,
                u = r.shift(),
                f = i._queueHooks(n, t),
                o = function() {
                    i.dequeue(n, t)
                };
            u === "inprogress" && (u = r.shift(), e--);
            u && (t === "fx" && r.unshift("inprogress"), delete f.stop, u.call(n, o, f));
            !e && f && f.empty.fire()
        },
        _queueHooks: function(n, t) {
            var u = t + "queueHooks";
            return r.get(n, u) || r.access(n, u, {
                empty: i.Callbacks("once memory").add(function() {
                    r.remove(n, [t + "queue", u])
                })
            })
        }
    });
    i.fn.extend({
        queue: function(n, t) {
            var r = 2;
            return (typeof n != "string" && (t = n, n = "fx", r--), arguments.length < r) ? i.queue(this[0], n) : t === undefined ? this : this.each(function() {
                var r = i.queue(this, n, t);
                i._queueHooks(this, n);
                n === "fx" && r[0] !== "inprogress" && i.dequeue(this, n)
            })
        },
        dequeue: function(n) {
            return this.each(function() {
                i.dequeue(this, n)
            })
        },
        clearQueue: function(n) {
            return this.queue(n || "fx", [])
        },
        promise: function(n, t) {
            var u, e = 1,
                o = i.Deferred(),
                f = this,
                s = this.length,
                h = function() {
                    --e || o.resolveWith(f, [f])
                };
            for (typeof n != "string" && (t = n, n = undefined), n = n || "fx"; s--;) u = r.get(f[s], n + "queueHooks"), u && u.empty && (e++, u.empty.add(h));
            return h(), o.promise(t)
        }
    });
    var wr = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        ct = new RegExp("^(?:([+-])=|)(" + wr + ")([a-z%]*)$", "i"),
        b = ["Top", "Right", "Bottom", "Left"],
        kt = function(n, t) {
            return n = t || n, n.style.display === "none" || n.style.display === "" && i.contains(n.ownerDocument, n) && i.css(n, "display") === "none"
        },
        br = function(n, t, i, r) {
            var f, u, e = {};
            for (u in t) e[u] = n.style[u], n.style[u] = t[u];
            f = i.apply(n, r || []);
            for (u in t) n.style[u] = e[u];
            return f
        };
    si = {};
    i.fn.extend({
        show: function() {
            return tt(this, !0)
        },
        hide: function() {
            return tt(this)
        },
        toggle: function(n) {
            return typeof n == "boolean" ? n ? this.show() : this.hide() : this.each(function() {
                kt(this) ? i(this).show() : i(this).hide()
            })
        }
    });
    var dr = /^(?:checkbox|radio)$/i,
        gr = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
        nu = /^$|\/(?:java|ecma)script/i,
        c = {
            option: [1, "<select multiple='multiple'>", "<\/select>"],
            thead: [1, "<table>", "<\/table>"],
            col: [2, "<table><colgroup>", "<\/colgroup><\/table>"],
            tr: [2, "<table><tbody>", "<\/tbody><\/table>"],
            td: [3, "<table><tbody><tr>", "<\/tr><\/tbody><\/table>"],
            _default: [0, "", ""]
        };
    c.optgroup = c.option;
    c.tbody = c.tfoot = c.colgroup = c.caption = c.thead;
    c.th = c.td;
    tu = /<|&#?\w+;/,
        function() {
            var i = u.createDocumentFragment(),
                n = i.appendChild(u.createElement("div")),
                t = u.createElement("input");
            t.setAttribute("type", "radio");
            t.setAttribute("checked", "checked");
            t.setAttribute("name", "t");
            n.appendChild(t);
            f.checkClone = n.cloneNode(!0).cloneNode(!0).lastChild.checked;
            n.innerHTML = "<textarea>x<\/textarea>";
            f.noCloneChecked = !!n.cloneNode(!0).lastChild.defaultValue
        }();
    var dt = u.documentElement,
        fe = /^key/,
        ee = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        ru = /^([^.]*)(?:\.(.+)|)/;
    i.event = {
        global: {},
        add: function(n, t, u, f, e) {
            var v, y, w, p, b, c, s, l, o, k, d, a = r.get(n);
            if (a)
                for (u.handler && (v = u, u = v.handler, e = v.selector), e && i.find.matchesSelector(dt, e), u.guid || (u.guid = i.guid++), (p = a.events) || (p = a.events = {}), (y = a.handle) || (y = a.handle = function(t) {
                        return typeof i != "undefined" && i.event.triggered !== t.type ? i.event.dispatch.apply(n, arguments) : undefined
                    }), t = (t || "").match(h) || [""], b = t.length; b--;)(w = ru.exec(t[b]) || [], o = d = w[1], k = (w[2] || "").split(".").sort(), o) && (s = i.event.special[o] || {}, o = (e ? s.delegateType : s.bindType) || o, s = i.event.special[o] || {}, c = i.extend({
                    type: o,
                    origType: d,
                    data: f,
                    handler: u,
                    guid: u.guid,
                    selector: e,
                    needsContext: e && i.expr.match.needsContext.test(e),
                    namespace: k.join(".")
                }, v), (l = p[o]) || (l = p[o] = [], l.delegateCount = 0, s.setup && s.setup.call(n, f, k, y) !== !1 || n.addEventListener && n.addEventListener(o, y)), s.add && (s.add.call(n, c), c.handler.guid || (c.handler.guid = u.guid)), e ? l.splice(l.delegateCount++, 0, c) : l.push(c), i.event.global[o] = !0)
        },
        remove: function(n, t, u, f, e) {
            var y, k, c, v, p, s, l, a, o, b, d, w = r.hasData(n) && r.get(n);
            if (w && (v = w.events)) {
                for (t = (t || "").match(h) || [""], p = t.length; p--;) {
                    if (c = ru.exec(t[p]) || [], o = d = c[1], b = (c[2] || "").split(".").sort(), !o) {
                        for (o in v) i.event.remove(n, o + t[p], u, f, !0);
                        continue
                    }
                    for (l = i.event.special[o] || {}, o = (f ? l.delegateType : l.bindType) || o, a = v[o] || [], c = c[2] && new RegExp("(^|\\.)" + b.join("\\.(?:.*\\.|)") + "(\\.|$)"), k = y = a.length; y--;) s = a[y], (e || d === s.origType) && (!u || u.guid === s.guid) && (!c || c.test(s.namespace)) && (!f || f === s.selector || f === "**" && s.selector) && (a.splice(y, 1), s.selector && a.delegateCount--, l.remove && l.remove.call(n, s));
                    k && !a.length && (l.teardown && l.teardown.call(n, b, w.handle) !== !1 || i.removeEvent(n, o, w.handle), delete v[o])
                }
                i.isEmptyObject(v) && r.remove(n, "handle events")
            }
        },
        dispatch: function(n) {
            var t = i.event.fix(n),
                u, c, s, e, f, l, h = new Array(arguments.length),
                a = (r.get(this, "events") || {})[t.type] || [],
                o = i.event.special[t.type] || {};
            for (h[0] = t, u = 1; u < arguments.length; u++) h[u] = arguments[u];
            if (t.delegateTarget = this, !o.preDispatch || o.preDispatch.call(this, t) !== !1) {
                for (l = i.event.handlers.call(this, t, a), u = 0;
                    (e = l[u++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = e.elem, c = 0;
                        (f = e.handlers[c++]) && !t.isImmediatePropagationStopped();)(!t.rnamespace || t.rnamespace.test(f.namespace)) && (t.handleObj = f, t.data = f.data, s = ((i.event.special[f.origType] || {}).handle || f.handler).apply(e.elem, h), s !== undefined && (t.result = s) === !1 && (t.preventDefault(), t.stopPropagation()));
                return o.postDispatch && o.postDispatch.call(this, t), t.result
            }
        },
        handlers: function(n, t) {
            var f, e, u, o, s, c = [],
                h = t.delegateCount,
                r = n.target;
            if (h && r.nodeType && !(n.type === "click" && n.button >= 1))
                for (; r !== this; r = r.parentNode || this)
                    if (r.nodeType === 1 && !(n.type === "click" && r.disabled === !0)) {
                        for (o = [], s = {}, f = 0; f < h; f++) e = t[f], u = e.selector + " ", s[u] === undefined && (s[u] = e.needsContext ? i(u, this).index(r) > -1 : i.find(u, this, null, [r]).length), s[u] && o.push(e);
                        o.length && c.push({
                            elem: r,
                            handlers: o
                        })
                    }
            return r = this, h < t.length && c.push({
                elem: r,
                handlers: t.slice(h)
            }), c
        },
        addProp: function(n, t) {
            Object.defineProperty(i.Event.prototype, n, {
                enumerable: !0,
                configurable: !0,
                get: i.isFunction(t) ? function() {
                    if (this.originalEvent) return t(this.originalEvent)
                } : function() {
                    if (this.originalEvent) return this.originalEvent[n]
                },
                set: function(t) {
                    Object.defineProperty(this, n, {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: t
                    })
                }
            })
        },
        fix: function(n) {
            return n[i.expando] ? n : new i.Event(n)
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== uu() && this.focus) return this.focus(), !1
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    if (this === uu() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    if (this.type === "checkbox" && this.click && l(this, "input")) return this.click(), !1
                },
                _default: function(n) {
                    return l(n.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(n) {
                    n.result !== undefined && n.originalEvent && (n.originalEvent.returnValue = n.result)
                }
            }
        }
    };
    i.removeEvent = function(n, t, i) {
        n.removeEventListener && n.removeEventListener(t, i)
    };
    i.Event = function(n, t) {
        if (!(this instanceof i.Event)) return new i.Event(n, t);
        n && n.type ? (this.originalEvent = n, this.type = n.type, this.isDefaultPrevented = n.defaultPrevented || n.defaultPrevented === undefined && n.returnValue === !1 ? gt : it, this.target = n.target && n.target.nodeType === 3 ? n.target.parentNode : n.target, this.currentTarget = n.currentTarget, this.relatedTarget = n.relatedTarget) : this.type = n;
        t && i.extend(this, t);
        this.timeStamp = n && n.timeStamp || i.now();
        this[i.expando] = !0
    };
    i.Event.prototype = {
        constructor: i.Event,
        isDefaultPrevented: it,
        isPropagationStopped: it,
        isImmediatePropagationStopped: it,
        isSimulated: !1,
        preventDefault: function() {
            var n = this.originalEvent;
            this.isDefaultPrevented = gt;
            n && !this.isSimulated && n.preventDefault()
        },
        stopPropagation: function() {
            var n = this.originalEvent;
            this.isPropagationStopped = gt;
            n && !this.isSimulated && n.stopPropagation()
        },
        stopImmediatePropagation: function() {
            var n = this.originalEvent;
            this.isImmediatePropagationStopped = gt;
            n && !this.isSimulated && n.stopImmediatePropagation();
            this.stopPropagation()
        }
    };
    i.each({
        altKey: !0,
        bubbles: !0,
        cancelable: !0,
        changedTouches: !0,
        ctrlKey: !0,
        detail: !0,
        eventPhase: !0,
        metaKey: !0,
        pageX: !0,
        pageY: !0,
        shiftKey: !0,
        view: !0,
        char: !0,
        charCode: !0,
        key: !0,
        keyCode: !0,
        button: !0,
        buttons: !0,
        clientX: !0,
        clientY: !0,
        offsetX: !0,
        offsetY: !0,
        pointerId: !0,
        pointerType: !0,
        screenX: !0,
        screenY: !0,
        targetTouches: !0,
        toElement: !0,
        touches: !0,
        which: function(n) {
            var t = n.button;
            return n.which == null && fe.test(n.type) ? n.charCode != null ? n.charCode : n.keyCode : !n.which && t !== undefined && ee.test(n.type) ? t & 1 ? 1 : t & 2 ? 3 : t & 4 ? 2 : 0 : n.which
        }
    }, i.event.addProp);
    i.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(n, t) {
        i.event.special[n] = {
            delegateType: t,
            bindType: t,
            handle: function(n) {
                var u, f = this,
                    r = n.relatedTarget,
                    e = n.handleObj;
                return r && (r === f || i.contains(f, r)) || (n.type = e.origType, u = e.handler.apply(this, arguments), n.type = t), u
            }
        }
    });
    i.fn.extend({
        on: function(n, t, i, r) {
            return ci(this, n, t, i, r)
        },
        one: function(n, t, i, r) {
            return ci(this, n, t, i, r, 1)
        },
        off: function(n, t, r) {
            var u, f;
            if (n && n.preventDefault && n.handleObj) return u = n.handleObj, i(n.delegateTarget).off(u.namespace ? u.origType + "." + u.namespace : u.origType, u.selector, u.handler), this;
            if (typeof n == "object") {
                for (f in n) this.off(f, t, n[f]);
                return this
            }
            return (t === !1 || typeof t == "function") && (r = t, t = undefined), r === !1 && (r = it), this.each(function() {
                i.event.remove(this, n, r, t)
            })
        }
    });
    var oe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
        se = /<script|<style|<link/i,
        he = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ce = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
    i.extend({
        htmlPrefilter: function(n) {
            return n.replace(oe, "<$1><\/$2>")
        },
        clone: function(n, t, r) {
            var u, c, s, e, h = n.cloneNode(!0),
                l = i.contains(n.ownerDocument, n);
            if (!f.noCloneChecked && (n.nodeType === 1 || n.nodeType === 11) && !i.isXMLDoc(n))
                for (e = o(h), s = o(n), u = 0, c = s.length; u < c; u++) ye(s[u], e[u]);
            if (t)
                if (r)
                    for (s = s || o(n), e = e || o(h), u = 0, c = s.length; u < c; u++) eu(s[u], e[u]);
                else eu(n, h);
            return e = o(h, "script"), e.length > 0 && hi(e, !l && o(n, "script")), h
        },
        cleanData: function(n) {
            for (var u, t, f, s = i.event.special, o = 0;
                (t = n[o]) !== undefined; o++)
                if (st(t)) {
                    if (u = t[r.expando]) {
                        if (u.events)
                            for (f in u.events) s[f] ? i.event.remove(t, f) : i.removeEvent(t, f, u.handle);
                        t[r.expando] = undefined
                    }
                    t[e.expando] && (t[e.expando] = undefined)
                }
        }
    });
    i.fn.extend({
        detach: function(n) {
            return ou(this, n, !0)
        },
        remove: function(n) {
            return ou(this, n)
        },
        text: function(n) {
            return v(this, function(n) {
                return n === undefined ? i.text(this) : this.empty().each(function() {
                    (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) && (this.textContent = n)
                })
            }, null, n, arguments.length)
        },
        append: function() {
            return rt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fu(this, n);
                    t.appendChild(n)
                }
            })
        },
        prepend: function() {
            return rt(this, arguments, function(n) {
                if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
                    var t = fu(this, n);
                    t.insertBefore(n, t.firstChild)
                }
            })
        },
        before: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this)
            })
        },
        after: function() {
            return rt(this, arguments, function(n) {
                this.parentNode && this.parentNode.insertBefore(n, this.nextSibling)
            })
        },
        empty: function() {
            for (var n, t = 0;
                (n = this[t]) != null; t++) n.nodeType === 1 && (i.cleanData(o(n, !1)), n.textContent = "");
            return this
        },
        clone: function(n, t) {
            return n = n == null ? !1 : n, t = t == null ? n : t, this.map(function() {
                return i.clone(this, n, t)
            })
        },
        html: function(n) {
            return v(this, function(n) {
                var t = this[0] || {},
                    r = 0,
                    u = this.length;
                if (n === undefined && t.nodeType === 1) return t.innerHTML;
                if (typeof n == "string" && !se.test(n) && !c[(gr.exec(n) || ["", ""])[1].toLowerCase()]) {
                    n = i.htmlPrefilter(n);
                    try {
                        for (; r < u; r++) t = this[r] || {}, t.nodeType === 1 && (i.cleanData(o(t, !1)), t.innerHTML = n);
                        t = 0
                    } catch (f) {}
                }
                t && this.empty().append(n)
            }, null, n, arguments.length)
        },
        replaceWith: function() {
            var n = [];
            return rt(this, arguments, function(t) {
                var r = this.parentNode;
                i.inArray(this, n) < 0 && (i.cleanData(o(this)), r && r.replaceChild(t, this))
            }, n)
        }
    });
    i.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(n, t) {
        i.fn[n] = function(n) {
            for (var u, f = [], e = i(n), o = e.length - 1, r = 0; r <= o; r++) u = r === o ? this : this.clone(!0), i(e[r])[t](u), ui.apply(f, u.get());
            return this.pushStack(f)
        }
    });
    var su = /^margin/,
        li = new RegExp("^(" + wr + ")(?!px)[a-z%]+$", "i"),
        ni = function(t) {
            var i = t.ownerDocument.defaultView;
            return i && i.opener || (i = n), i.getComputedStyle(t)
        };
    (function() {
        function r() {
            if (t) {
                t.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%";
                t.innerHTML = "";
                dt.appendChild(e);
                var i = n.getComputedStyle(t);
                o = i.top !== "1%";
                c = i.marginLeft === "2px";
                s = i.width === "4px";
                t.style.marginRight = "50%";
                h = i.marginRight === "4px";
                dt.removeChild(e);
                t = null
            }
        }
        var o, s, h, c, e = u.createElement("div"),
            t = u.createElement("div");
        t.style && (t.style.backgroundClip = "content-box", t.cloneNode(!0).style.backgroundClip = "", f.clearCloneStyle = t.style.backgroundClip === "content-box", e.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", e.appendChild(t), i.extend(f, {
            pixelPosition: function() {
                return r(), o
            },
            boxSizingReliable: function() {
                return r(), s
            },
            pixelMarginRight: function() {
                return r(), h
            },
            reliableMarginLeft: function() {
                return r(), c
            }
        }))
    })();
    var pe = /^(none|table(?!-c[ea]).+)/,
        cu = /^--/,
        we = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        lu = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        au = ["Webkit", "Moz", "ms"],
        vu = u.createElement("div").style;
    i.extend({
        cssHooks: {
            opacity: {
                get: function(n, t) {
                    if (t) {
                        var i = lt(n, "opacity");
                        return i === "" ? "1" : i
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            float: "cssFloat"
        },
        style: function(n, t, r, u) {
            if (n && n.nodeType !== 3 && n.nodeType !== 8 && n.style) {
                var e, s, o, c = i.camelCase(t),
                    l = cu.test(t),
                    h = n.style;
                if (l || (t = yu(c)), o = i.cssHooks[t] || i.cssHooks[c], r !== undefined) {
                    if (s = typeof r, s === "string" && (e = ct.exec(r)) && e[1] && (r = kr(n, t, e), s = "number"), r == null || r !== r) return;
                    s === "number" && (r += e && e[3] || (i.cssNumber[c] ? "" : "px"));
                    f.clearCloneStyle || r !== "" || t.indexOf("background") !== 0 || (h[t] = "inherit");
                    o && "set" in o && (r = o.set(n, r, u)) === undefined || (l ? h.setProperty(t, r) : h[t] = r)
                } else return o && "get" in o && (e = o.get(n, !1, u)) !== undefined ? e : h[t]
            }
        },
        css: function(n, t, r, u) {
            var f, o, e, s = i.camelCase(t),
                h = cu.test(t);
            return (h || (t = yu(s)), e = i.cssHooks[t] || i.cssHooks[s], e && "get" in e && (f = e.get(n, !0, r)), f === undefined && (f = lt(n, t, u)), f === "normal" && t in lu && (f = lu[t]), r === "" || r) ? (o = parseFloat(f), r === !0 || isFinite(o) ? o || 0 : f) : f
        }
    });
    i.each(["height", "width"], function(n, t) {
        i.cssHooks[t] = {
            get: function(n, r, u) {
                if (r) return pe.test(i.css(n, "display")) && (!n.getClientRects().length || !n.getBoundingClientRect().width) ? br(n, we, function() {
                    return bu(n, t, u)
                }) : bu(n, t, u)
            },
            set: function(n, r, u) {
                var f, e = u && ni(n),
                    o = u && wu(n, t, u, i.css(n, "boxSizing", !1, e) === "border-box", e);
                return o && (f = ct.exec(r)) && (f[3] || "px") !== "px" && (n.style[t] = r, r = i.css(n, t)), pu(n, r, o)
            }
        }
    });
    i.cssHooks.marginLeft = hu(f.reliableMarginLeft, function(n, t) {
        if (t) return (parseFloat(lt(n, "marginLeft")) || n.getBoundingClientRect().left - br(n, {
            marginLeft: 0
        }, function() {
            return n.getBoundingClientRect().left
        })) + "px"
    });
    i.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(n, t) {
        i.cssHooks[n + t] = {
            expand: function(i) {
                for (var r = 0, f = {}, u = typeof i == "string" ? i.split(" ") : [i]; r < 4; r++) f[n + b[r] + t] = u[r] || u[r - 2] || u[0];
                return f
            }
        };
        su.test(n) || (i.cssHooks[n + t].set = pu)
    });
    i.fn.extend({
        css: function(n, t) {
            return v(this, function(n, t, r) {
                var f, e, o = {},
                    u = 0;
                if (Array.isArray(t)) {
                    for (f = ni(n), e = t.length; u < e; u++) o[t[u]] = i.css(n, t[u], !1, f);
                    return o
                }
                return r !== undefined ? i.style(n, t, r) : i.css(n, t)
            }, n, t, arguments.length > 1)
        }
    });
    i.Tween = s;
    s.prototype = {
        constructor: s,
        init: function(n, t, r, u, f, e) {
            this.elem = n;
            this.prop = r;
            this.easing = f || i.easing._default;
            this.options = t;
            this.start = this.now = this.cur();
            this.end = u;
            this.unit = e || (i.cssNumber[r] ? "" : "px")
        },
        cur: function() {
            var n = s.propHooks[this.prop];
            return n && n.get ? n.get(this) : s.propHooks._default.get(this)
        },
        run: function(n) {
            var t, r = s.propHooks[this.prop];
            return this.pos = this.options.duration ? t = i.easing[this.easing](n, this.options.duration * n, 0, 1, this.options.duration) : t = n, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), r && r.set ? r.set(this) : s.propHooks._default.set(this), this
        }
    };
    s.prototype.init.prototype = s.prototype;
    s.propHooks = {
        _default: {
            get: function(n) {
                var t;
                return n.elem.nodeType !== 1 || n.elem[n.prop] != null && n.elem.style[n.prop] == null ? n.elem[n.prop] : (t = i.css(n.elem, n.prop, ""), !t || t === "auto" ? 0 : t)
            },
            set: function(n) {
                i.fx.step[n.prop] ? i.fx.step[n.prop](n) : n.elem.nodeType === 1 && (n.elem.style[i.cssProps[n.prop]] != null || i.cssHooks[n.prop]) ? i.style(n.elem, n.prop, n.now + n.unit) : n.elem[n.prop] = n.now
            }
        }
    };
    s.propHooks.scrollTop = s.propHooks.scrollLeft = {
        set: function(n) {
            n.elem.nodeType && n.elem.parentNode && (n.elem[n.prop] = n.now)
        }
    };
    i.easing = {
        linear: function(n) {
            return n
        },
        swing: function(n) {
            return .5 - Math.cos(n * Math.PI) / 2
        },
        _default: "swing"
    };
    i.fx = s.prototype.init;
    i.fx.step = {};
    ku = /^(?:toggle|show|hide)$/;
    du = /queueHooks$/;
    i.Animation = i.extend(a, {
        tweeners: {
            "*": [function(n, t) {
                var i = this.createTween(n, t);
                return kr(i.elem, n, ct.exec(t), i), i
            }]
        },
        tweener: function(n, t) {
            i.isFunction(n) ? (t = n, n = ["*"]) : n = n.match(h);
            for (var r, u = 0, f = n.length; u < f; u++) r = n[u], a.tweeners[r] = a.tweeners[r] || [], a.tweeners[r].unshift(t)
        },
        prefilters: [ke],
        prefilter: function(n, t) {
            t ? a.prefilters.unshift(n) : a.prefilters.push(n)
        }
    });
    i.speed = function(n, t, r) {
        var u = n && typeof n == "object" ? i.extend({}, n) : {
            complete: r || !r && t || i.isFunction(n) && n,
            duration: n,
            easing: r && t || t && !i.isFunction(t) && t
        };
        return i.fx.off ? u.duration = 0 : typeof u.duration != "number" && (u.duration = u.duration in i.fx.speeds ? i.fx.speeds[u.duration] : i.fx.speeds._default), (u.queue == null || u.queue === !0) && (u.queue = "fx"), u.old = u.complete, u.complete = function() {
            i.isFunction(u.old) && u.old.call(this);
            u.queue && i.dequeue(this, u.queue)
        }, u
    };
    i.fn.extend({
        fadeTo: function(n, t, i, r) {
            return this.filter(kt).css("opacity", 0).show().end().animate({
                opacity: t
            }, n, i, r)
        },
        animate: function(n, t, u, f) {
            var s = i.isEmptyObject(n),
                o = i.speed(t, u, f),
                e = function() {
                    var t = a(this, i.extend({}, n), o);
                    (s || r.get(this, "finish")) && t.stop(!0)
                };
            return e.finish = e, s || o.queue === !1 ? this.each(e) : this.queue(o.queue, e)
        },
        stop: function(n, t, u) {
            var f = function(n) {
                var t = n.stop;
                delete n.stop;
                t(u)
            };
            return typeof n != "string" && (u = t, t = n, n = undefined), t && n !== !1 && this.queue(n || "fx", []), this.each(function() {
                var s = !0,
                    t = n != null && n + "queueHooks",
                    o = i.timers,
                    e = r.get(this);
                if (t) e[t] && e[t].stop && f(e[t]);
                else
                    for (t in e) e[t] && e[t].stop && du.test(t) && f(e[t]);
                for (t = o.length; t--;) o[t].elem === this && (n == null || o[t].queue === n) && (o[t].anim.stop(u), s = !1, o.splice(t, 1));
                (s || !u) && i.dequeue(this, n)
            })
        },
        finish: function(n) {
            return n !== !1 && (n = n || "fx"), this.each(function() {
                var t, e = r.get(this),
                    u = e[n + "queue"],
                    o = e[n + "queueHooks"],
                    f = i.timers,
                    s = u ? u.length : 0;
                for (e.finish = !0, i.queue(this, n, []), o && o.stop && o.stop.call(this, !0), t = f.length; t--;) f[t].elem === this && f[t].queue === n && (f[t].anim.stop(!0), f.splice(t, 1));
                for (t = 0; t < s; t++) u[t] && u[t].finish && u[t].finish.call(this);
                delete e.finish
            })
        }
    });
    i.each(["toggle", "show", "hide"], function(n, t) {
        var r = i.fn[t];
        i.fn[t] = function(n, i, u) {
            return n == null || typeof n == "boolean" ? r.apply(this, arguments) : this.animate(ii(t, !0), n, i, u)
        }
    });
    i.each({
        slideDown: ii("show"),
        slideUp: ii("hide"),
        slideToggle: ii("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(n, t) {
        i.fn[n] = function(n, i, r) {
            return this.animate(t, n, i, r)
        }
    });
    i.timers = [];
    i.fx.tick = function() {
        var r, n = 0,
            t = i.timers;
        for (ut = i.now(); n < t.length; n++) r = t[n], r() || t[n] !== r || t.splice(n--, 1);
        t.length || i.fx.stop();
        ut = undefined
    };
    i.fx.timer = function(n) {
        i.timers.push(n);
        i.fx.start()
    };
    i.fx.interval = 13;
    i.fx.start = function() {
        ti || (ti = !0, ai())
    };
    i.fx.stop = function() {
        ti = null
    };
    i.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    };
    i.fn.delay = function(t, r) {
            return t = i.fx ? i.fx.speeds[t] || t : t, r = r || "fx", this.queue(r, function(i, r) {
                var u = n.setTimeout(i, t);
                r.stop = function() {
                    n.clearTimeout(u)
                }
            })
        },
        function() {
            var n = u.createElement("input"),
                t = u.createElement("select"),
                i = t.appendChild(u.createElement("option"));
            n.type = "checkbox";
            f.checkOn = n.value !== "";
            f.optSelected = i.selected;
            n = u.createElement("input");
            n.value = "t";
            n.type = "radio";
            f.radioValue = n.value === "t"
        }();
    ft = i.expr.attrHandle;
    i.fn.extend({
        attr: function(n, t) {
            return v(this, i.attr, n, t, arguments.length > 1)
        },
        removeAttr: function(n) {
            return this.each(function() {
                i.removeAttr(this, n)
            })
        }
    });
    i.extend({
        attr: function(n, t, r) {
            var u, f, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) {
                if (typeof n.getAttribute == "undefined") return i.prop(n, t, r);
                if (e === 1 && i.isXMLDoc(n) || (f = i.attrHooks[t.toLowerCase()] || (i.expr.match.bool.test(t) ? tf : undefined)), r !== undefined) {
                    if (r === null) {
                        i.removeAttr(n, t);
                        return
                    }
                    return f && "set" in f && (u = f.set(n, r, t)) !== undefined ? u : (n.setAttribute(t, r + ""), r)
                }
                return f && "get" in f && (u = f.get(n, t)) !== null ? u : (u = i.find.attr(n, t), u == null ? undefined : u)
            }
        },
        attrHooks: {
            type: {
                set: function(n, t) {
                    if (!f.radioValue && t === "radio" && l(n, "input")) {
                        var i = n.value;
                        return n.setAttribute("type", t), i && (n.value = i), t
                    }
                }
            }
        },
        removeAttr: function(n, t) {
            var i, u = 0,
                r = t && t.match(h);
            if (r && n.nodeType === 1)
                while (i = r[u++]) n.removeAttribute(i)
        }
    });
    tf = {
        set: function(n, t, r) {
            return t === !1 ? i.removeAttr(n, r) : n.setAttribute(r, r), r
        }
    };
    i.each(i.expr.match.bool.source.match(/\w+/g), function(n, t) {
        var r = ft[t] || i.find.attr;
        ft[t] = function(n, t, i) {
            var f, e, u = t.toLowerCase();
            return i || (e = ft[u], ft[u] = f, f = r(n, t, i) != null ? u : null, ft[u] = e), f
        }
    });
    rf = /^(?:input|select|textarea|button)$/i;
    uf = /^(?:a|area)$/i;
    i.fn.extend({
        prop: function(n, t) {
            return v(this, i.prop, n, t, arguments.length > 1)
        },
        removeProp: function(n) {
            return this.each(function() {
                delete this[i.propFix[n] || n]
            })
        }
    });
    i.extend({
        prop: function(n, t, r) {
            var f, u, e = n.nodeType;
            if (e !== 3 && e !== 8 && e !== 2) return (e === 1 && i.isXMLDoc(n) || (t = i.propFix[t] || t, u = i.propHooks[t]), r !== undefined) ? u && "set" in u && (f = u.set(n, r, t)) !== undefined ? f : n[t] = r : u && "get" in u && (f = u.get(n, t)) !== null ? f : n[t]
        },
        propHooks: {
            tabIndex: {
                get: function(n) {
                    var t = i.find.attr(n, "tabindex");
                    return t ? parseInt(t, 10) : rf.test(n.nodeName) || uf.test(n.nodeName) && n.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    });
    f.optSelected || (i.propHooks.selected = {
        get: function(n) {
            var t = n.parentNode;
            return t && t.parentNode && t.parentNode.selectedIndex, null
        },
        set: function(n) {
            var t = n.parentNode;
            t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
        }
    });
    i.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        i.propFix[this.toLowerCase()] = this
    });
    i.fn.extend({
        addClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).addClass(n.call(this, t, d(this)))
            });
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = d(r), t = r.nodeType === 1 && " " + k(u) + " ", t) {
                        for (s = 0; f = o[s++];) t.indexOf(" " + f + " ") < 0 && (t += f + " ");
                        e = k(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        removeClass: function(n) {
            var o, r, t, u, f, s, e, c = 0;
            if (i.isFunction(n)) return this.each(function(t) {
                i(this).removeClass(n.call(this, t, d(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if (typeof n == "string" && n)
                for (o = n.match(h) || []; r = this[c++];)
                    if (u = d(r), t = r.nodeType === 1 && " " + k(u) + " ", t) {
                        for (s = 0; f = o[s++];)
                            while (t.indexOf(" " + f + " ") > -1) t = t.replace(" " + f + " ", " ");
                        e = k(t);
                        u !== e && r.setAttribute("class", e)
                    }
            return this
        },
        toggleClass: function(n, t) {
            var u = typeof n;
            return typeof t == "boolean" && u === "string" ? t ? this.addClass(n) : this.removeClass(n) : i.isFunction(n) ? this.each(function(r) {
                i(this).toggleClass(n.call(this, r, d(this), t), t)
            }) : this.each(function() {
                var t, e, f, o;
                if (u === "string")
                    for (e = 0, f = i(this), o = n.match(h) || []; t = o[e++];) f.hasClass(t) ? f.removeClass(t) : f.addClass(t);
                else(n === undefined || u === "boolean") && (t = d(this), t && r.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || n === !1 ? "" : r.get(this, "__className__") || ""))
            })
        },
        hasClass: function(n) {
            for (var t, r = 0, i = " " + n + " "; t = this[r++];)
                if (t.nodeType === 1 && (" " + k(d(t)) + " ").indexOf(i) > -1) return !0;
            return !1
        }
    });
    ff = /\r/g;
    i.fn.extend({
        val: function(n) {
            var t, r, f, u = this[0];
            return arguments.length ? (f = i.isFunction(n), this.each(function(r) {
                var u;
                this.nodeType === 1 && (u = f ? n.call(this, r, i(this).val()) : n, u == null ? u = "" : typeof u == "number" ? u += "" : Array.isArray(u) && (u = i.map(u, function(n) {
                    return n == null ? "" : n + ""
                })), t = i.valHooks[this.type] || i.valHooks[this.nodeName.toLowerCase()], t && "set" in t && t.set(this, u, "value") !== undefined || (this.value = u))
            })) : u ? (t = i.valHooks[u.type] || i.valHooks[u.nodeName.toLowerCase()], t && "get" in t && (r = t.get(u, "value")) !== undefined) ? r : (r = u.value, typeof r == "string") ? r.replace(ff, "") : r == null ? "" : r : void 0
        }
    });
    i.extend({
        valHooks: {
            option: {
                get: function(n) {
                    var t = i.find.attr(n, "value");
                    return t != null ? t : k(i.text(n))
                }
            },
            select: {
                get: function(n) {
                    for (var e, t, o = n.options, u = n.selectedIndex, f = n.type === "select-one", s = f ? null : [], h = f ? u + 1 : o.length, r = u < 0 ? h : f ? u : 0; r < h; r++)
                        if (t = o[r], (t.selected || r === u) && !t.disabled && (!t.parentNode.disabled || !l(t.parentNode, "optgroup"))) {
                            if (e = i(t).val(), f) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function(n, t) {
                    for (var u, r, f = n.options, e = i.makeArray(t), o = f.length; o--;) r = f[o], (r.selected = i.inArray(i.valHooks.option.get(r), e) > -1) && (u = !0);
                    return u || (n.selectedIndex = -1), e
                }
            }
        }
    });
    i.each(["radio", "checkbox"], function() {
        i.valHooks[this] = {
            set: function(n, t) {
                if (Array.isArray(t)) return n.checked = i.inArray(i(n).val(), t) > -1
            }
        };
        f.checkOn || (i.valHooks[this].get = function(n) {
            return n.getAttribute("value") === null ? "on" : n.value
        })
    });
    vi = /^(?:focusinfocus|focusoutblur)$/;
    i.extend(i.event, {
        trigger: function(t, f, e, o) {
            var w, s, c, b, a, v, l, p = [e || u],
                h = yt.call(t, "type") ? t.type : t,
                y = yt.call(t, "namespace") ? t.namespace.split(".") : [];
            if ((s = c = e = e || u, e.nodeType !== 3 && e.nodeType !== 8) && !vi.test(h + i.event.triggered) && (h.indexOf(".") > -1 && (y = h.split("."), h = y.shift(), y.sort()), a = h.indexOf(":") < 0 && "on" + h, t = t[i.expando] ? t : new i.Event(h, typeof t == "object" && t), t.isTrigger = o ? 2 : 3, t.namespace = y.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = undefined, t.target || (t.target = e), f = f == null ? [t] : i.makeArray(f, [t]), l = i.event.special[h] || {}, o || !l.trigger || l.trigger.apply(e, f) !== !1)) {
                if (!o && !l.noBubble && !i.isWindow(e)) {
                    for (b = l.delegateType || h, vi.test(b + h) || (s = s.parentNode); s; s = s.parentNode) p.push(s), c = s;
                    c === (e.ownerDocument || u) && p.push(c.defaultView || c.parentWindow || n)
                }
                for (w = 0;
                    (s = p[w++]) && !t.isPropagationStopped();) t.type = w > 1 ? b : l.bindType || h, v = (r.get(s, "events") || {})[t.type] && r.get(s, "handle"), v && v.apply(s, f), v = a && s[a], v && v.apply && st(s) && (t.result = v.apply(s, f), t.result === !1 && t.preventDefault());
                return t.type = h, o || t.isDefaultPrevented() || (!l._default || l._default.apply(p.pop(), f) === !1) && st(e) && a && i.isFunction(e[h]) && !i.isWindow(e) && (c = e[a], c && (e[a] = null), i.event.triggered = h, e[h](), i.event.triggered = undefined, c && (e[a] = c)), t.result
            }
        },
        simulate: function(n, t, r) {
            var u = i.extend(new i.Event, r, {
                type: n,
                isSimulated: !0
            });
            i.event.trigger(u, null, t)
        }
    });
    i.fn.extend({
        trigger: function(n, t) {
            return this.each(function() {
                i.event.trigger(n, t, this)
            })
        },
        triggerHandler: function(n, t) {
            var r = this[0];
            if (r) return i.event.trigger(n, t, r, !0)
        }
    });
    i.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(n, t) {
        i.fn[t] = function(n, i) {
            return arguments.length > 0 ? this.on(t, null, n, i) : this.trigger(t)
        }
    });
    i.fn.extend({
        hover: function(n, t) {
            return this.mouseenter(n).mouseleave(t || n)
        }
    });
    f.focusin = "onfocusin" in n;
    f.focusin || i.each({
        focus: "focusin",
        blur: "focusout"
    }, function(n, t) {
        var u = function(n) {
            i.event.simulate(t, n.target, i.event.fix(n))
        };
        i.event.special[t] = {
            setup: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t);
                f || i.addEventListener(n, u, !0);
                r.access(i, t, (f || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this,
                    f = r.access(i, t) - 1;
                f ? r.access(i, t, f) : (i.removeEventListener(n, u, !0), r.remove(i, t))
            }
        }
    });
    var at = n.location,
        ef = i.now(),
        yi = /\?/;
    i.parseXML = function(t) {
        var r;
        if (!t || typeof t != "string") return null;
        try {
            r = (new n.DOMParser).parseFromString(t, "text/xml")
        } catch (u) {
            r = undefined
        }
        return (!r || r.getElementsByTagName("parsererror").length) && i.error("Invalid XML: " + t), r
    };
    var ge = /\[\]$/,
        of = /\r?\n/g,
        no = /^(?:submit|button|image|reset|file)$/i,
        to = /^(?:input|select|textarea|keygen)/i;
    i.param = function(n, t) {
        var r, u = [],
            f = function(n, t) {
                var r = i.isFunction(t) ? t() : t;
                u[u.length] = encodeURIComponent(n) + "=" + encodeURIComponent(r == null ? "" : r)
            };
        if (Array.isArray(n) || n.jquery && !i.isPlainObject(n)) i.each(n, function() {
            f(this.name, this.value)
        });
        else
            for (r in n) pi(r, n[r], t, f);
        return u.join("&")
    };
    i.fn.extend({
        serialize: function() {
            return i.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var n = i.prop(this, "elements");
                return n ? i.makeArray(n) : this
            }).filter(function() {
                var n = this.type;
                return this.name && !i(this).is(":disabled") && to.test(this.nodeName) && !no.test(n) && (this.checked || !dr.test(n))
            }).map(function(n, t) {
                var r = i(this).val();
                return r == null ? null : Array.isArray(r) ? i.map(r, function(n) {
                    return {
                        name: t.name,
                        value: n.replace(of, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: r.replace(of, "\r\n")
                }
            }).get()
        }
    });
    var io = /%20/g,
        ro = /#.*$/,
        uo = /([?&])_=[^&]*/,
        fo = /^(.*?):[ \t]*([^\r\n]*)$/mg,
        eo = /^(?:GET|HEAD)$/,
        oo = /^\/\//,
        sf = {},
        wi = {},
        hf = "*/".concat("*"),
        bi = u.createElement("a");
    return bi.href = at.href, i.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: at.href,
            type: "GET",
            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(at.protocol),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": hf,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": JSON.parse,
                "text xml": i.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(n, t) {
            return t ? ki(ki(n, i.ajaxSettings), t) : ki(i.ajaxSettings, n)
        },
        ajaxPrefilter: cf(sf),
        ajaxTransport: cf(wi),
        ajax: function(t, r) {
            function b(t, r, u, h) {
                var y, rt, g, p, b, a = r;
                s || (s = !0, d && n.clearTimeout(d), l = undefined, k = h || "", e.readyState = t > 0 ? 4 : 0, y = t >= 200 && t < 300 || t === 304, u && (p = so(f, e, u)), p = ho(f, p, e, y), y ? (f.ifModified && (b = e.getResponseHeader("Last-Modified"), b && (i.lastModified[o] = b), b = e.getResponseHeader("etag"), b && (i.etag[o] = b)), t === 204 || f.type === "HEAD" ? a = "nocontent" : t === 304 ? a = "notmodified" : (a = p.state, rt = p.data, g = p.error, y = !g)) : (g = a, (t || !a) && (a = "error", t < 0 && (t = 0))), e.status = t, e.statusText = (r || a) + "", y ? tt.resolveWith(c, [rt, a, e]) : tt.rejectWith(c, [e, a, g]), e.statusCode(w), w = undefined, v && nt.trigger(y ? "ajaxSuccess" : "ajaxError", [e, f, y ? rt : g]), it.fireWith(c, [e, a]), v && (nt.trigger("ajaxComplete", [e, f]), --i.active || i.event.trigger("ajaxStop")))
            }
            typeof t == "object" && (r = t, t = undefined);
            r = r || {};
            var l, o, k, y, d, a, s, v, g, p, f = i.ajaxSetup({}, r),
                c = f.context || f,
                nt = f.context && (c.nodeType || c.jquery) ? i(c) : i.event,
                tt = i.Deferred(),
                it = i.Callbacks("once memory"),
                w = f.statusCode || {},
                rt = {},
                ut = {},
                ft = "canceled",
                e = {
                    readyState: 0,
                    getResponseHeader: function(n) {
                        var t;
                        if (s) {
                            if (!y)
                                for (y = {}; t = fo.exec(k);) y[t[1].toLowerCase()] = t[2];
                            t = y[n.toLowerCase()]
                        }
                        return t == null ? null : t
                    },
                    getAllResponseHeaders: function() {
                        return s ? k : null
                    },
                    setRequestHeader: function(n, t) {
                        return s == null && (n = ut[n.toLowerCase()] = ut[n.toLowerCase()] || n, rt[n] = t), this
                    },
                    overrideMimeType: function(n) {
                        return s == null && (f.mimeType = n), this
                    },
                    statusCode: function(n) {
                        var t;
                        if (n)
                            if (s) e.always(n[e.status]);
                            else
                                for (t in n) w[t] = [w[t], n[t]];
                        return this
                    },
                    abort: function(n) {
                        var t = n || ft;
                        return l && l.abort(t), b(0, t), this
                    }
                };
            if (tt.promise(e), f.url = ((t || f.url || at.href) + "").replace(oo, at.protocol + "//"), f.type = r.method || r.type || f.method || f.type, f.dataTypes = (f.dataType || "*").toLowerCase().match(h) || [""], f.crossDomain == null) {
                a = u.createElement("a");
                try {
                    a.href = f.url;
                    a.href = a.href;
                    f.crossDomain = bi.protocol + "//" + bi.host != a.protocol + "//" + a.host
                } catch (et) {
                    f.crossDomain = !0
                }
            }
            if (f.data && f.processData && typeof f.data != "string" && (f.data = i.param(f.data, f.traditional)), lf(sf, f, r, e), s) return e;
            v = i.event && f.global;
            v && i.active++ == 0 && i.event.trigger("ajaxStart");
            f.type = f.type.toUpperCase();
            f.hasContent = !eo.test(f.type);
            o = f.url.replace(ro, "");
            f.hasContent ? f.data && f.processData && (f.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && (f.data = f.data.replace(io, "+")) : (p = f.url.slice(o.length), f.data && (o += (yi.test(o) ? "&" : "?") + f.data, delete f.data), f.cache === !1 && (o = o.replace(uo, "$1"), p = (yi.test(o) ? "&" : "?") + "_=" + ef++ + p), f.url = o + p);
            f.ifModified && (i.lastModified[o] && e.setRequestHeader("If-Modified-Since", i.lastModified[o]), i.etag[o] && e.setRequestHeader("If-None-Match", i.etag[o]));
            (f.data && f.hasContent && f.contentType !== !1 || r.contentType) && e.setRequestHeader("Content-Type", f.contentType);
            e.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + (f.dataTypes[0] !== "*" ? ", " + hf + "; q=0.01" : "") : f.accepts["*"]);
            for (g in f.headers) e.setRequestHeader(g, f.headers[g]);
            if (f.beforeSend && (f.beforeSend.call(c, e, f) === !1 || s)) return e.abort();
            if (ft = "abort", it.add(f.complete), e.done(f.success), e.fail(f.error), l = lf(wi, f, r, e), l) {
                if (e.readyState = 1, v && nt.trigger("ajaxSend", [e, f]), s) return e;
                f.async && f.timeout > 0 && (d = n.setTimeout(function() {
                    e.abort("timeout")
                }, f.timeout));
                try {
                    s = !1;
                    l.send(rt, b)
                } catch (et) {
                    if (s) throw et;
                    b(-1, et)
                }
            } else b(-1, "No Transport");
            return e
        },
        getJSON: function(n, t, r) {
            return i.get(n, t, r, "json")
        },
        getScript: function(n, t) {
            return i.get(n, undefined, t, "script")
        }
    }), i.each(["get", "post"], function(n, t) {
        i[t] = function(n, r, u, f) {
            return i.isFunction(r) && (f = f || u, u = r, r = undefined), i.ajax(i.extend({
                url: n,
                type: t,
                dataType: f,
                data: r,
                success: u
            }, i.isPlainObject(n) && n))
        }
    }), i._evalUrl = function(n) {
        return i.ajax({
            url: n,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            throws: !0
        })
    }, i.fn.extend({
        wrapAll: function(n) {
            var t;
            return this[0] && (i.isFunction(n) && (n = n.call(this[0])), t = i(n, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function() {
                for (var n = this; n.firstElementChild;) n = n.firstElementChild;
                return n
            }).append(this)), this
        },
        wrapInner: function(n) {
            return i.isFunction(n) ? this.each(function(t) {
                i(this).wrapInner(n.call(this, t))
            }) : this.each(function() {
                var t = i(this),
                    r = t.contents();
                r.length ? r.wrapAll(n) : t.append(n)
            })
        },
        wrap: function(n) {
            var t = i.isFunction(n);
            return this.each(function(r) {
                i(this).wrapAll(t ? n.call(this, r) : n)
            })
        },
        unwrap: function(n) {
            return this.parent(n).not("body").each(function() {
                i(this).replaceWith(this.childNodes)
            }), this
        }
    }), i.expr.pseudos.hidden = function(n) {
        return !i.expr.pseudos.visible(n)
    }, i.expr.pseudos.visible = function(n) {
        return !!(n.offsetWidth || n.offsetHeight || n.getClientRects().length)
    }, i.ajaxSettings.xhr = function() {
        try {
            return new n.XMLHttpRequest
        } catch (t) {}
    }, af = {
        0: 200,
        1223: 204
    }, et = i.ajaxSettings.xhr(), f.cors = !!et && "withCredentials" in et, f.ajax = et = !!et, i.ajaxTransport(function(t) {
        var i, r;
        if (f.cors || et && !t.crossDomain) return {
            send: function(u, f) {
                var o, e = t.xhr();
                if (e.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
                    for (o in t.xhrFields) e[o] = t.xhrFields[o];
                t.mimeType && e.overrideMimeType && e.overrideMimeType(t.mimeType);
                t.crossDomain || u["X-Requested-With"] || (u["X-Requested-With"] = "XMLHttpRequest");
                for (o in u) e.setRequestHeader(o, u[o]);
                i = function(n) {
                    return function() {
                        i && (i = r = e.onload = e.onerror = e.onabort = e.onreadystatechange = null, n === "abort" ? e.abort() : n === "error" ? typeof e.status != "number" ? f(0, "error") : f(e.status, e.statusText) : f(af[e.status] || e.status, e.statusText, (e.responseType || "text") !== "text" || typeof e.responseText != "string" ? {
                            binary: e.response
                        } : {
                            text: e.responseText
                        }, e.getAllResponseHeaders()))
                    }
                };
                e.onload = i();
                r = e.onerror = i("error");
                e.onabort !== undefined ? e.onabort = r : e.onreadystatechange = function() {
                    e.readyState === 4 && n.setTimeout(function() {
                        i && r()
                    })
                };
                i = i("abort");
                try {
                    e.send(t.hasContent && t.data || null)
                } catch (s) {
                    if (i) throw s;
                }
            },
            abort: function() {
                i && i()
            }
        }
    }), i.ajaxPrefilter(function(n) {
        n.crossDomain && (n.contents.script = !1)
    }), i.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(n) {
                return i.globalEval(n), n
            }
        }
    }), i.ajaxPrefilter("script", function(n) {
        n.cache === undefined && (n.cache = !1);
        n.crossDomain && (n.type = "GET")
    }), i.ajaxTransport("script", function(n) {
        if (n.crossDomain) {
            var r, t;
            return {
                send: function(f, e) {
                    r = i("<script>").prop({
                        charset: n.scriptCharset,
                        src: n.url
                    }).on("load error", t = function(n) {
                        r.remove();
                        t = null;
                        n && e(n.type === "error" ? 404 : 200, n.type)
                    });
                    u.head.appendChild(r[0])
                },
                abort: function() {
                    t && t()
                }
            }
        }
    }), di = [], ri = /(=)\?(?=&|$)|\?\?/, i.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var n = di.pop() || i.expando + "_" + ef++;
            return this[n] = !0, n
        }
    }), i.ajaxPrefilter("json jsonp", function(t, r, u) {
        var f, e, o, s = t.jsonp !== !1 && (ri.test(t.url) ? "url" : typeof t.data == "string" && (t.contentType || "").indexOf("application/x-www-form-urlencoded") === 0 && ri.test(t.data) && "data");
        if (s || t.dataTypes[0] === "jsonp") return f = t.jsonpCallback = i.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(ri, "$1" + f) : t.jsonp !== !1 && (t.url += (yi.test(t.url) ? "&" : "?") + t.jsonp + "=" + f), t.converters["script json"] = function() {
            return o || i.error(f + " was not called"), o[0]
        }, t.dataTypes[0] = "json", e = n[f], n[f] = function() {
            o = arguments
        }, u.always(function() {
            e === undefined ? i(n).removeProp(f) : n[f] = e;
            t[f] && (t.jsonpCallback = r.jsonpCallback, di.push(f));
            o && i.isFunction(e) && e(o[0]);
            o = e = undefined
        }), "script"
    }), f.createHTMLDocument = function() {
        var n = u.implementation.createHTMLDocument("").body;
        return n.innerHTML = "<form><\/form><form><\/form>", n.childNodes.length === 2
    }(), i.parseHTML = function(n, t, r) {
        if (typeof n != "string") return [];
        typeof t == "boolean" && (r = t, t = !1);
        var s, e, o;
        return (t || (f.createHTMLDocument ? (t = u.implementation.createHTMLDocument(""), s = t.createElement("base"), s.href = u.location.href, t.head.appendChild(s)) : t = u), e = ei.exec(n), o = !r && [], e) ? [t.createElement(e[1])] : (e = iu([n], t, o), o && o.length && i(o).remove(), i.merge([], e.childNodes))
    }, i.fn.load = function(n, t, r) {
        var u, o, s, f = this,
            e = n.indexOf(" ");
        return e > -1 && (u = k(n.slice(e)), n = n.slice(0, e)), i.isFunction(t) ? (r = t, t = undefined) : t && typeof t == "object" && (o = "POST"), f.length > 0 && i.ajax({
            url: n,
            type: o || "GET",
            dataType: "html",
            data: t
        }).done(function(n) {
            s = arguments;
            f.html(u ? i("<div>").append(i.parseHTML(n)).find(u) : n)
        }).always(r && function(n, t) {
            f.each(function() {
                r.apply(this, s || [n.responseText, t, n])
            })
        }), this
    }, i.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(n, t) {
        i.fn[t] = function(n) {
            return this.on(t, n)
        }
    }), i.expr.pseudos.animated = function(n) {
        return i.grep(i.timers, function(t) {
            return n === t.elem
        }).length
    }, i.offset = {
        setOffset: function(n, t, r) {
            var e, o, s, h, u, c, v, l = i.css(n, "position"),
                a = i(n),
                f = {};
            l === "static" && (n.style.position = "relative");
            u = a.offset();
            s = i.css(n, "top");
            c = i.css(n, "left");
            v = (l === "absolute" || l === "fixed") && (s + c).indexOf("auto") > -1;
            v ? (e = a.position(), h = e.top, o = e.left) : (h = parseFloat(s) || 0, o = parseFloat(c) || 0);
            i.isFunction(t) && (t = t.call(n, r, i.extend({}, u)));
            t.top != null && (f.top = t.top - u.top + h);
            t.left != null && (f.left = t.left - u.left + o);
            "using" in t ? t.using.call(n, f) : a.css(f)
        }
    }, i.fn.extend({
        offset: function(n) {
            if (arguments.length) return n === undefined ? this : this.each(function(t) {
                i.offset.setOffset(this, n, t)
            });
            var r, u, f, e, t = this[0];
            if (t) return t.getClientRects().length ? (f = t.getBoundingClientRect(), r = t.ownerDocument, u = r.documentElement, e = r.defaultView, {
                top: f.top + e.pageYOffset - u.clientTop,
                left: f.left + e.pageXOffset - u.clientLeft
            }) : {
                top: 0,
                left: 0
            }
        },
        position: function() {
            if (this[0]) {
                var t, r, u = this[0],
                    n = {
                        top: 0,
                        left: 0
                    };
                return i.css(u, "position") === "fixed" ? r = u.getBoundingClientRect() : (t = this.offsetParent(), r = this.offset(), l(t[0], "html") || (n = t.offset()), n = {
                    top: n.top + i.css(t[0], "borderTopWidth", !0),
                    left: n.left + i.css(t[0], "borderLeftWidth", !0)
                }), {
                    top: r.top - n.top - i.css(u, "marginTop", !0),
                    left: r.left - n.left - i.css(u, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var n = this.offsetParent; n && i.css(n, "position") === "static";) n = n.offsetParent;
                return n || dt
            })
        }
    }), i.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(n, t) {
        var r = "pageYOffset" === t;
        i.fn[n] = function(u) {
            return v(this, function(n, u, f) {
                var e;
                if (i.isWindow(n) ? e = n : n.nodeType === 9 && (e = n.defaultView), f === undefined) return e ? e[t] : n[u];
                e ? e.scrollTo(r ? e.pageXOffset : f, r ? f : e.pageYOffset) : n[u] = f
            }, n, u, arguments.length)
        }
    }), i.each(["top", "left"], function(n, t) {
        i.cssHooks[t] = hu(f.pixelPosition, function(n, r) {
            if (r) return r = lt(n, t), li.test(r) ? i(n).position()[t] + "px" : r
        })
    }), i.each({
        Height: "height",
        Width: "width"
    }, function(n, t) {
        i.each({
            padding: "inner" + n,
            content: t,
            "": "outer" + n
        }, function(r, u) {
            i.fn[u] = function(f, e) {
                var o = arguments.length && (r || typeof f != "boolean"),
                    s = r || (f === !0 || e === !0 ? "margin" : "border");
                return v(this, function(t, r, f) {
                    var e;
                    return i.isWindow(t) ? u.indexOf("outer") === 0 ? t["inner" + n] : t.document.documentElement["client" + n] : t.nodeType === 9 ? (e = t.documentElement, Math.max(t.body["scroll" + n], e["scroll" + n], t.body["offset" + n], e["offset" + n], e["client" + n])) : f === undefined ? i.css(t, r, s) : i.style(t, r, f, s)
                }, t, o ? f : undefined, o)
            }
        })
    }), i.fn.extend({
        bind: function(n, t, i) {
            return this.on(n, null, t, i)
        },
        unbind: function(n, t) {
            return this.off(n, null, t)
        },
        delegate: function(n, t, i, r) {
            return this.on(t, n, i, r)
        },
        undelegate: function(n, t, i) {
            return arguments.length === 1 ? this.off(n, "**") : this.off(t, n || "**", i)
        }
    }), i.holdReady = function(n) {
        n ? i.readyWait++ : i.ready(!0)
    }, i.isArray = Array.isArray, i.parseJSON = JSON.parse, i.nodeName = l, typeof define == "function" && define.amd && define("jquery", [], function() {
        return i
    }), vf = n.jQuery, yf = n.$, i.noConflict = function(t) {
        return n.$ === i && (n.$ = yf), t && n.jQuery === i && (n.jQuery = vf), i
    }, t || (n.jQuery = n.$ = i), i
});
! function(n, t) {
    function e(n, t) {
        return typeof n === t
    }

    function v() {
        var r, n, f, o, s, h, t;
        for (var c in u)
            if (u.hasOwnProperty(c)) {
                if (r = [], n = u[c], n.name && (r.push(n.name.toLowerCase()), n.options && n.options.aliases && n.options.aliases.length))
                    for (f = 0; f < n.options.aliases.length; f++) r.push(n.options.aliases[f].toLowerCase());
                for (o = e(n.fn, "function") ? n.fn() : n.fn, s = 0; s < r.length; s++) h = r[s], t = h.split("."), 1 === t.length ? i[t[0]] = o : (!i[t[0]] || i[t[0]] instanceof Boolean || (i[t[0]] = new Boolean(i[t[0]])), i[t[0]][t[1]] = o), l.push((o ? "" : "no-") + t.join("-"))
            }
    }

    function c(n) {
        var t = f.className,
            r = i._config.classPrefix || "",
            u;
        (h && (t = t.baseVal), i._config.enableJSClass) && (u = new RegExp("(^|\\s)" + r + "no-js(\\s|$)"), t = t.replace(u, "$1" + r + "js$2"));
        i._config.enableClasses && (t += " " + r + n.join(" " + r), h ? f.className.baseVal = t : f.className = t)
    }

    function s(n, t) {
        var u, r, f;
        if ("object" == typeof n)
            for (u in n) a(n, u) && s(u, n[u]);
        else {
            if (n = n.toLowerCase(), r = n.split("."), f = i[r[0]], 2 == r.length && (f = f[r[1]]), "undefined" != typeof f) return i;
            t = "function" == typeof t ? t() : t;
            1 == r.length ? i[r[0]] = t : (!i[r[0]] || i[r[0]] instanceof Boolean || (i[r[0]] = new Boolean(i[r[0]])), i[r[0]][r[1]] = t);
            c([(t && 0 != t ? "" : "no-") + r.join("-")]);
            i._trigger(n, t)
        }
        return i
    }
    var l = [],
        u = [],
        r = {
            _version: "3.6.0",
            _config: {
                classPrefix: "",
                enableClasses: !0,
                enableJSClass: !0,
                usePrefixes: !0
            },
            _q: [],
            on: function(n, t) {
                var i = this;
                setTimeout(function() {
                    t(i[n])
                }, 0)
            },
            addTest: function(n, t, i) {
                u.push({
                    name: n,
                    fn: t,
                    options: i
                })
            },
            addAsyncTest: function(n) {
                u.push({
                    name: null,
                    fn: n
                })
            }
        },
        i = function() {},
        a, f, h, o;
    for (i.prototype = r, i = new i, f = t.documentElement, h = "svg" === f.nodeName.toLowerCase(), ! function() {
            var n = {}.hasOwnProperty;
            a = e(n, "undefined") || e(n.call, "undefined") ? function(n, t) {
                return t in n && e(n.constructor.prototype[t], "undefined")
            } : function(t, i) {
                return n.call(t, i)
            }
        }(), r._l = {}, r.on = function(n, t) {
            this._l[n] || (this._l[n] = []);
            this._l[n].push(t);
            i.hasOwnProperty(n) && setTimeout(function() {
                i._trigger(n, i[n])
            }, 0)
        }, r._trigger = function(n, t) {
            if (this._l[n]) {
                var i = this._l[n];
                setTimeout(function() {
                    for (var r, n = 0; n < i.length; n++)(r = i[n])(t)
                }, 0);
                delete this._l[n]
            }
        }, i._q.push(function() {
            r.addTest = s
        }), i.addAsyncTest(function() {
            function t(n, t, i) {
                function u(t) {
                    var u = t && "load" === t.type ? 1 == r.width : !1,
                        f = "webp" === n;
                    s(n, f && u ? new Boolean(u) : u);
                    i && i(t)
                }
                var r = new Image;
                r.onerror = u;
                r.onload = u;
                r.src = t
            }
            var n = [{
                    uri: "data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=",
                    name: "webp"
                }, {
                    uri: "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==",
                    name: "webp.alpha"
                }, {
                    uri: "data:image/webp;base64,UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA",
                    name: "webp.animation"
                }, {
                    uri: "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=",
                    name: "webp.lossless"
                }],
                i = n.shift();
            t(i.name, i.uri, function(i) {
                if (i && "load" === i.type)
                    for (var r = 0; r < n.length; r++) t(n[r].name, n[r].uri)
            })
        }), v(), c(l), delete r.addTest, delete r.addAsyncTest, o = 0; o < i._q.length; o++) i._q[o]();
    n.Modernizr = i
}(window, document);
! function(n, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(n.bootstrap = {}, n.jQuery, n.Popper)
}(this, function(n, t, i) {
    "use strict";

    function of(n, t) {
        for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
    }

    function g(n, t, i) {
        return t && of(n.prototype, t), i && of(n, i), n
    }

    function v(n) {
        for (var i, r, t = 1; t < arguments.length; t++) i = null != arguments[t] ? arguments[t] : {}, r = Object.keys(i), "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(i).filter(function(n) {
            return Object.getOwnPropertyDescriptor(i, n).enumerable
        }))), r.forEach(function(t) {
            var r, u, f;
            r = n;
            f = i[u = t];
            u in r ? Object.defineProperty(r, u, {
                value: f,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : r[u] = f
        });
        return n
    }
    t = t && t.hasOwnProperty("default") ? t.default : t;
    i = i && i.hasOwnProperty("default") ? i.default : i;
    var y, dt, er, or, sf, sr, hf, cf, lf, ht, l, gt, hr, cr, lr, af, ni, vf, yf, ou, pf, wf, bf, su, hu, ti, e, ct, pi, nt, cu, kf, ar, df, wi, bi, gf, ne, tt, te, ut, ie, re, ue, fe, ee, oe, vr, se, he, ce, le, ae, lt, s, at, vt, ii, ve, yr, ye, ri, ft, ki, di, pr, lu, pe, we, au, ui, o, yt, gi, it, wr, be, ke, w, vu, et, de, ge, no, yu, to, nr, io, br, ro, uo, fo, eo, oo, so, ho, co, lo, ao, rt, r, pt, tr, p, vo, kr, yo, c, po, wo, pu, wt, ir, bo, ko, go, wu, bu, fi, u, ot, dr, b, ns, ku, ts, is, rs, us, ei, gr, fs, oi, si, es, os, hi, nu, ss, hs, rr, d, bt, tu, k, cs, du, ls, as, vs, ys, ps, ws, bs, ks, ur, a, st, iu, fr, ds, gu, gs, ru, nh, kt, th, ih, nf, uu, rh, tf, uh, fh, eh, oh, rf, ci, h, fu, li, sh, ai, hh, vi, ch, lh, uf, ah, vh, ff, ef, yh, ph, wh, yi, f = function(n) {
            function r(i) {
                var u = this,
                    r = !1;
                return n(this).one(t.TRANSITION_END, function() {
                    r = !0
                }), setTimeout(function() {
                    r || t.triggerTransitionEnd(u)
                }, i), this
            }
            var i = "transitionend",
                t = {
                    TRANSITION_END: "bsTransitionEnd",
                    getUID: function(n) {
                        for (; n += ~~(1e6 * Math.random()), document.getElementById(n););
                        return n
                    },
                    getSelectorFromElement: function(n) {
                        var t = n.getAttribute("data-target");
                        t && "#" !== t || (t = n.getAttribute("href") || "");
                        try {
                            return document.querySelector(t) ? t : null
                        } catch (n) {
                            return null
                        }
                    },
                    getTransitionDurationFromElement: function(t) {
                        if (!t) return 0;
                        var i = n(t).css("transition-duration");
                        return parseFloat(i) ? (i = i.split(",")[0], 1e3 * parseFloat(i)) : 0
                    },
                    reflow: function(n) {
                        return n.offsetHeight
                    },
                    triggerTransitionEnd: function(t) {
                        n(t).trigger(i)
                    },
                    supportsTransitionEnd: function() {
                        return Boolean(i)
                    },
                    isElement: function(n) {
                        return (n[0] || n).nodeType
                    },
                    typeCheckConfig: function(n, i, r) {
                        var u, s;
                        for (u in r)
                            if (Object.prototype.hasOwnProperty.call(r, u)) {
                                var e = r[u],
                                    f = i[u],
                                    o = f && t.isElement(f) ? "element" : (s = f, {}.toString.call(s).match(/\s([a-z]+)/i)[1].toLowerCase());
                                if (!new RegExp(e).test(o)) throw new Error(n.toUpperCase() + ': Option "' + u + '" provided type "' + o + '" but expected type "' + e + '".');
                            }
                    }
                };
            return n.fn.emulateTransitionEnd = r, n.event.special[t.TRANSITION_END] = {
                bindType: i,
                delegateType: i,
                handle: function(t) {
                    if (n(t.target).is(this)) return t.handleObj.handler.apply(this, arguments)
                }
            }, t
        }(t),
        bh = (dt = "alert", or = "." + (er = "bs.alert"), sf = (y = t).fn[dt], sr = {
            CLOSE: "close" + or,
            CLOSED: "closed" + or,
            CLICK_DATA_API: "click" + or + ".data-api"
        }, hf = "alert", cf = "fade", lf = "show", ht = function() {
            function n(n) {
                this._element = n
            }
            var t = n.prototype;
            return t.close = function(n) {
                var t = this._element;
                n && (t = this._getRootElement(n));
                this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
            }, t.dispose = function() {
                y.removeData(this._element, er);
                this._element = null
            }, t._getRootElement = function(n) {
                var i = f.getSelectorFromElement(n),
                    t = !1;
                return i && (t = document.querySelector(i)), t || (t = y(n).closest("." + hf)[0]), t
            }, t._triggerCloseEvent = function(n) {
                var t = y.Event(sr.CLOSE);
                return y(n).trigger(t), t
            }, t._removeElement = function(n) {
                var i = this,
                    t;
                (y(n).removeClass(lf), y(n).hasClass(cf)) ? (t = f.getTransitionDurationFromElement(n), y(n).one(f.TRANSITION_END, function(t) {
                    return i._destroyElement(n, t)
                }).emulateTransitionEnd(t)) : this._destroyElement(n)
            }, t._destroyElement = function(n) {
                y(n).detach().trigger(sr.CLOSED).remove()
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var r = y(this),
                        i = r.data(er);
                    i || (i = new n(this), r.data(er, i));
                    "close" === t && i[t](this)
                })
            }, n._handleDismiss = function(n) {
                return function(t) {
                    t && t.preventDefault();
                    n.close(this)
                }
            }, g(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), n
        }(), y(document).on(sr.CLICK_DATA_API, '[data-dismiss="alert"]', ht._handleDismiss(new ht)), y.fn[dt] = ht._jQueryInterface, y.fn[dt].Constructor = ht, y.fn[dt].noConflict = function() {
            return y.fn[dt] = sf, ht._jQueryInterface
        }, ht),
        kh = (gt = "button", cr = "." + (hr = "bs.button"), lr = ".data-api", af = (l = t).fn[gt], ni = "active", vf = "btn", ou = '[data-toggle^="button"]', pf = '[data-toggle="buttons"]', wf = "input", bf = ".active", su = ".btn", hu = {
            CLICK_DATA_API: "click" + cr + lr,
            FOCUS_BLUR_DATA_API: (yf = "focus") + cr + lr + " blur" + cr + lr
        }, ti = function() {
            function n(n) {
                this._element = n
            }
            var t = n.prototype;
            return t.toggle = function() {
                var i = !0,
                    u = !0,
                    t = l(this._element).closest(pf)[0],
                    n, r;
                if (t && (n = this._element.querySelector(wf), n)) {
                    if ("radio" === n.type && (n.checked && this._element.classList.contains(ni) ? i = !1 : (r = t.querySelector(bf), r && l(r).removeClass(ni))), i) {
                        if (n.hasAttribute("disabled") || t.hasAttribute("disabled") || n.classList.contains("disabled") || t.classList.contains("disabled")) return;
                        n.checked = !this._element.classList.contains(ni);
                        l(n).trigger("change")
                    }
                    n.focus();
                    u = !1
                }
                u && this._element.setAttribute("aria-pressed", !this._element.classList.contains(ni));
                i && l(this._element).toggleClass(ni)
            }, t.dispose = function() {
                l.removeData(this._element, hr);
                this._element = null
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = l(this).data(hr);
                    i || (i = new n(this), l(this).data(hr, i));
                    "toggle" === t && i[t]()
                })
            }, g(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), n
        }(), l(document).on(hu.CLICK_DATA_API, ou, function(n) {
            n.preventDefault();
            var t = n.target;
            l(t).hasClass(vf) || (t = l(t).closest(su));
            ti._jQueryInterface.call(l(t), "toggle")
        }).on(hu.FOCUS_BLUR_DATA_API, ou, function(n) {
            var t = l(n.target).closest(su)[0];
            l(t).toggleClass(yf, /^focus(in)?$/.test(n.type))
        }), l.fn[gt] = ti._jQueryInterface, l.fn[gt].Constructor = ti, l.fn[gt].noConflict = function() {
            return l.fn[gt] = af, ti._jQueryInterface
        }, ti),
        dh = (ct = "carousel", nt = "." + (pi = "bs.carousel"), cu = ".data-api", kf = (e = t).fn[ct], ar = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0
        }, df = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean"
        }, wi = "next", bi = "prev", gf = "left", ne = "right", tt = {
            SLIDE: "slide" + nt,
            SLID: "slid" + nt,
            KEYDOWN: "keydown" + nt,
            MOUSEENTER: "mouseenter" + nt,
            MOUSELEAVE: "mouseleave" + nt,
            TOUCHEND: "touchend" + nt,
            LOAD_DATA_API: "load" + nt + cu,
            CLICK_DATA_API: "click" + nt + cu
        }, te = "carousel", ut = "active", ie = "slide", re = "carousel-item-right", ue = "carousel-item-left", fe = "carousel-item-next", ee = "carousel-item-prev", oe = ".active", vr = ".active.carousel-item", se = ".carousel-item", he = ".carousel-item-next, .carousel-item-prev", ce = ".carousel-indicators", le = "[data-slide], [data-slide-to]", ae = '[data-ride="carousel"]', lt = function() {
            function t(n, t) {
                this._items = null;
                this._interval = null;
                this._activeElement = null;
                this._isPaused = !1;
                this._isSliding = !1;
                this.touchTimeout = null;
                this._config = this._getConfig(t);
                this._element = e(n)[0];
                this._indicatorsElement = this._element.querySelector(ce);
                this._addEventListeners()
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide(wi)
            }, n.nextWhenVisible = function() {
                !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide(bi)
            }, n.pause = function(n) {
                n || (this._isPaused = !0);
                this._element.querySelector(he) && (f.triggerTransitionEnd(this._element), this.cycle(!0));
                clearInterval(this._interval);
                this._interval = null
            }, n.cycle = function(n) {
                n || (this._isPaused = !1);
                this._interval && (clearInterval(this._interval), this._interval = null);
                this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(n) {
                var r = this,
                    t, i;
                if (this._activeElement = this._element.querySelector(vr), t = this._getItemIndex(this._activeElement), !(n > this._items.length - 1 || n < 0))
                    if (this._isSliding) e(this._element).one(tt.SLID, function() {
                        return r.to(n)
                    });
                    else {
                        if (t === n) return this.pause(), void this.cycle();
                        i = t < n ? wi : bi;
                        this._slide(i, this._items[n])
                    }
            }, n.dispose = function() {
                e(this._element).off(nt);
                e.removeData(this._element, pi);
                this._items = null;
                this._config = null;
                this._element = null;
                this._interval = null;
                this._isPaused = null;
                this._isSliding = null;
                this._activeElement = null;
                this._indicatorsElement = null
            }, n._getConfig = function(n) {
                return n = v({}, ar, n), f.typeCheckConfig(ct, n, df), n
            }, n._addEventListeners = function() {
                var n = this;
                this._config.keyboard && e(this._element).on(tt.KEYDOWN, function(t) {
                    return n._keydown(t)
                });
                "hover" === this._config.pause && (e(this._element).on(tt.MOUSEENTER, function(t) {
                    return n.pause(t)
                }).on(tt.MOUSELEAVE, function(t) {
                    return n.cycle(t)
                }), "ontouchstart" in document.documentElement && e(this._element).on(tt.TOUCHEND, function() {
                    n.pause();
                    n.touchTimeout && clearTimeout(n.touchTimeout);
                    n.touchTimeout = setTimeout(function(t) {
                        return n.cycle(t)
                    }, 500 + n._config.interval)
                }))
            }, n._keydown = function(n) {
                if (!/input|textarea/i.test(n.target.tagName)) switch (n.which) {
                    case 37:
                        n.preventDefault();
                        this.prev();
                        break;
                    case 39:
                        n.preventDefault();
                        this.next()
                }
            }, n._getItemIndex = function(n) {
                return this._items = n && n.parentNode ? [].slice.call(n.parentNode.querySelectorAll(se)) : [], this._items.indexOf(n)
            }, n._getItemByDirection = function(n, t) {
                var u = n === wi,
                    f = n === bi,
                    i = this._getItemIndex(t),
                    e = this._items.length - 1,
                    r;
                return (f && 0 === i || u && i === e) && !this._config.wrap ? t : (r = (i + (n === bi ? -1 : 1)) % this._items.length, -1 === r ? this._items[this._items.length - 1] : this._items[r])
            }, n._triggerSlideEvent = function(n, t) {
                var r = this._getItemIndex(n),
                    u = this._getItemIndex(this._element.querySelector(vr)),
                    i = e.Event(tt.SLIDE, {
                        relatedTarget: n,
                        direction: t,
                        from: u,
                        to: r
                    });
                return e(this._element).trigger(i), i
            }, n._setActiveIndicatorElement = function(n) {
                var i, t;
                this._indicatorsElement && (i = [].slice.call(this._indicatorsElement.querySelectorAll(oe)), e(i).removeClass(ut), t = this._indicatorsElement.children[this._getItemIndex(n)], t && e(t).addClass(ut))
            }, n._slide = function(n, t) {
                var u, o, s, c = this,
                    r = this._element.querySelector(vr),
                    v = this._getItemIndex(r),
                    i = t || r && this._getItemByDirection(n, r),
                    y = this._getItemIndex(i),
                    l = Boolean(this._interval),
                    h, a;
                (n === wi ? (u = ue, o = fe, s = gf) : (u = re, o = ee, s = ne), i && e(i).hasClass(ut)) ? this._isSliding = !1: !this._triggerSlideEvent(i, s).isDefaultPrevented() && r && i && (this._isSliding = !0, l && this.pause(), this._setActiveIndicatorElement(i), h = e.Event(tt.SLID, {
                    relatedTarget: i,
                    direction: s,
                    from: v,
                    to: y
                }), e(this._element).hasClass(ie) ? (e(i).addClass(o), f.reflow(i), e(r).addClass(u), e(i).addClass(u), a = f.getTransitionDurationFromElement(r), e(r).one(f.TRANSITION_END, function() {
                    e(i).removeClass(u + " " + o).addClass(ut);
                    e(r).removeClass(ut + " " + o + " " + u);
                    c._isSliding = !1;
                    setTimeout(function() {
                        return e(c._element).trigger(h)
                    }, 0)
                }).emulateTransitionEnd(a)) : (e(r).removeClass(ut), e(i).addClass(ut), this._isSliding = !1, e(this._element).trigger(h)), l && this.cycle())
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = e(this).data(pi),
                        r = v({}, ar, e(this).data()),
                        u;
                    if ("object" == typeof n && (r = v({}, r, n)), u = "string" == typeof n ? n : r.slide, i || (i = new t(this, r), e(this).data(pi, i)), "number" == typeof n) i.to(n);
                    else if ("string" == typeof u) {
                        if ("undefined" == typeof i[u]) throw new TypeError('No method named "' + u + '"');
                        i[u]()
                    } else r.interval && (i.pause(), i.cycle())
                })
            }, t._dataApiClickHandler = function(n) {
                var o = f.getSelectorFromElement(this),
                    i, u, r;
                o && (i = e(o)[0], i && e(i).hasClass(te) && (u = v({}, e(i).data(), e(this).data()), r = this.getAttribute("data-slide-to"), r && (u.interval = !1), t._jQueryInterface.call(e(i), u), r && e(i).data(pi).to(r), n.preventDefault()))
            }, g(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return ar
                }
            }]), t
        }(), e(document).on(tt.CLICK_DATA_API, le, lt._dataApiClickHandler), e(window).on(tt.LOAD_DATA_API, function() {
            for (var t, i = [].slice.call(document.querySelectorAll(ae)), n = 0, r = i.length; n < r; n++) t = e(i[n]), lt._jQueryInterface.call(t, t.data())
        }), e.fn[ct] = lt._jQueryInterface, e.fn[ct].Constructor = lt, e.fn[ct].noConflict = function() {
            return e.fn[ct] = kf, lt._jQueryInterface
        }, lt),
        gh = (at = "collapse", ii = "." + (vt = "bs.collapse"), ve = (s = t).fn[at], yr = {
            toggle: !0,
            parent: ""
        }, ye = {
            toggle: "boolean",
            parent: "(string|element)"
        }, ri = {
            SHOW: "show" + ii,
            SHOWN: "shown" + ii,
            HIDE: "hide" + ii,
            HIDDEN: "hidden" + ii,
            CLICK_DATA_API: "click" + ii + ".data-api"
        }, ft = "show", ki = "collapse", di = "collapsing", pr = "collapsed", lu = "width", pe = "height", we = ".show, .collapsing", au = '[data-toggle="collapse"]', ui = function() {
            function t(n, t) {
                this._isTransitioning = !1;
                this._element = n;
                this._config = this._getConfig(t);
                this._triggerArray = s.makeArray(document.querySelectorAll('[data-toggle="collapse"][href="#' + n.id + '"],[data-toggle="collapse"][data-target="#' + n.id + '"]'));
                for (var u = [].slice.call(document.querySelectorAll(au)), i = 0, o = u.length; i < o; i++) {
                    var e = u[i],
                        r = f.getSelectorFromElement(e),
                        h = [].slice.call(document.querySelectorAll(r)).filter(function(t) {
                            return t === n
                        });
                    null !== r && 0 < h.length && (this._selector = r, this._triggerArray.push(e))
                }
                this._parent = this._config.parent ? this._getParent() : null;
                this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray);
                this._config.toggle && this.toggle()
            }
            var n = t.prototype;
            return n.toggle = function() {
                s(this._element).hasClass(ft) ? this.hide() : this.show()
            }, n.show = function() {
                var n, u, r = this,
                    e, i, o, h;
                this._isTransitioning || s(this._element).hasClass(ft) || (this._parent && 0 === (n = [].slice.call(this._parent.querySelectorAll(we)).filter(function(n) {
                    return n.getAttribute("data-parent") === r._config.parent
                })).length && (n = null), n && (u = s(n).not(this._selector).data(vt)) && u._isTransitioning) || (e = s.Event(ri.SHOW), (s(this._element).trigger(e), e.isDefaultPrevented()) || (n && (t._jQueryInterface.call(s(n).not(this._selector), "hide"), u || s(n).data(vt, null)), i = this._getDimension(), s(this._element).removeClass(ki).addClass(di), this._element.style[i] = 0, this._triggerArray.length && s(this._triggerArray).removeClass(pr).attr("aria-expanded", !0), this.setTransitioning(!0), o = "scroll" + (i[0].toUpperCase() + i.slice(1)), h = f.getTransitionDurationFromElement(this._element), s(this._element).one(f.TRANSITION_END, function() {
                    s(r._element).removeClass(di).addClass(ki).addClass(ft);
                    r._element.style[i] = "";
                    r.setTransitioning(!1);
                    s(r._element).trigger(ri.SHOWN)
                }).emulateTransitionEnd(h), this._element.style[i] = this._element[o] + "px"))
            }, n.hide = function() {
                var o = this,
                    i, n, r, t, u, e, h;
                if (!this._isTransitioning && s(this._element).hasClass(ft) && (i = s.Event(ri.HIDE), s(this._element).trigger(i), !i.isDefaultPrevented())) {
                    if (n = this._getDimension(), this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", f.reflow(this._element), s(this._element).addClass(di).removeClass(ki).removeClass(ft), r = this._triggerArray.length, 0 < r)
                        for (t = 0; t < r; t++) u = this._triggerArray[t], e = f.getSelectorFromElement(u), null !== e && (s([].slice.call(document.querySelectorAll(e))).hasClass(ft) || s(u).addClass(pr).attr("aria-expanded", !1));
                    this.setTransitioning(!0);
                    this._element.style[n] = "";
                    h = f.getTransitionDurationFromElement(this._element);
                    s(this._element).one(f.TRANSITION_END, function() {
                        o.setTransitioning(!1);
                        s(o._element).removeClass(di).addClass(ki).trigger(ri.HIDDEN)
                    }).emulateTransitionEnd(h)
                }
            }, n.setTransitioning = function(n) {
                this._isTransitioning = n
            }, n.dispose = function() {
                s.removeData(this._element, vt);
                this._config = null;
                this._parent = null;
                this._element = null;
                this._triggerArray = null;
                this._isTransitioning = null
            }, n._getConfig = function(n) {
                return (n = v({}, yr, n)).toggle = Boolean(n.toggle), f.typeCheckConfig(at, n, ye), n
            }, n._getDimension = function() {
                return s(this._element).hasClass(lu) ? lu : pe
            }, n._getParent = function() {
                var u = this,
                    n = null,
                    i, r;
                return f.isElement(this._config.parent) ? (n = this._config.parent, "undefined" != typeof this._config.parent.jquery && (n = this._config.parent[0])) : n = document.querySelector(this._config.parent), i = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]', r = [].slice.call(n.querySelectorAll(i)), s(r).each(function(n, i) {
                    u._addAriaAndCollapsedClass(t._getTargetFromElement(i), [i])
                }), n
            }, n._addAriaAndCollapsedClass = function(n, t) {
                if (n) {
                    var i = s(n).hasClass(ft);
                    t.length && s(t).toggleClass(pr, !i).attr("aria-expanded", i)
                }
            }, t._getTargetFromElement = function(n) {
                var t = f.getSelectorFromElement(n);
                return t ? document.querySelector(t) : null
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var r = s(this),
                        i = r.data(vt),
                        u = v({}, yr, r.data(), "object" == typeof n && n ? n : {});
                    if (!i && u.toggle && /show|hide/.test(n) && (u.toggle = !1), i || (i = new t(this, u), r.data(vt, i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, g(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return yr
                }
            }]), t
        }(), s(document).on(ri.CLICK_DATA_API, au, function(n) {
            "A" === n.currentTarget.tagName && n.preventDefault();
            var t = s(this),
                i = f.getSelectorFromElement(this),
                r = [].slice.call(document.querySelectorAll(i));
            s(r).each(function() {
                var n = s(this),
                    i = n.data(vt) ? "toggle" : t.data();
                ui._jQueryInterface.call(n, i)
            })
        }), s.fn[at] = ui._jQueryInterface, s.fn[at].Constructor = ui, s.fn[at].noConflict = function() {
            return s.fn[at] = ve, ui._jQueryInterface
        }, ui),
        nc = (yt = "dropdown", it = "." + (gi = "bs.dropdown"), wr = ".data-api", be = (o = t).fn[yt], ke = new RegExp("38|40|27"), w = {
            HIDE: "hide" + it,
            HIDDEN: "hidden" + it,
            SHOW: "show" + it,
            SHOWN: "shown" + it,
            CLICK: "click" + it,
            CLICK_DATA_API: "click" + it + wr,
            KEYDOWN_DATA_API: "keydown" + it + wr,
            KEYUP_DATA_API: "keyup" + it + wr
        }, vu = "disabled", et = "show", de = "dropup", ge = "dropright", no = "dropleft", yu = "dropdown-menu-right", to = "position-static", nr = '[data-toggle="dropdown"]', io = ".dropdown form", br = ".dropdown-menu", ro = ".navbar-nav", uo = ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", fo = "top-start", eo = "top-end", oo = "bottom-start", so = "bottom-end", ho = "right-start", co = "left-start", lo = {
            offset: 0,
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic"
        }, ao = {
            offset: "(number|string|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string"
        }, rt = function() {
            function n(n, t) {
                this._element = n;
                this._popper = null;
                this._config = this._getConfig(t);
                this._menu = this._getMenuElement();
                this._inNavbar = this._detectNavbar();
                this._addEventListeners()
            }
            var t = n.prototype;
            return t.toggle = function() {
                var t, s, u, e, r;
                if (!this._element.disabled && !o(this._element).hasClass(vu) && (t = n._getParentFromElement(this._element), s = o(this._menu).hasClass(et), (n._clearMenus(), !s) && (u = {
                        relatedTarget: this._element
                    }, e = o.Event(w.SHOW, u), o(t).trigger(e), !e.isDefaultPrevented()))) {
                    if (!this._inNavbar) {
                        if ("undefined" == typeof i) throw new TypeError("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                        r = this._element;
                        "parent" === this._config.reference ? r = t : f.isElement(this._config.reference) && (r = this._config.reference, "undefined" != typeof this._config.reference.jquery && (r = this._config.reference[0]));
                        "scrollParent" !== this._config.boundary && o(t).addClass(to);
                        this._popper = new i(r, this._menu, this._getPopperConfig())
                    }
                    "ontouchstart" in document.documentElement && 0 === o(t).closest(ro).length && o(document.body).children().on("mouseover", null, o.noop);
                    this._element.focus();
                    this._element.setAttribute("aria-expanded", !0);
                    o(this._menu).toggleClass(et);
                    o(t).toggleClass(et).trigger(o.Event(w.SHOWN, u))
                }
            }, t.dispose = function() {
                o.removeData(this._element, gi);
                o(this._element).off(it);
                this._element = null;
                (this._menu = null) !== this._popper && (this._popper.destroy(), this._popper = null)
            }, t.update = function() {
                this._inNavbar = this._detectNavbar();
                null !== this._popper && this._popper.scheduleUpdate()
            }, t._addEventListeners = function() {
                var n = this;
                o(this._element).on(w.CLICK, function(t) {
                    t.preventDefault();
                    t.stopPropagation();
                    n.toggle()
                })
            }, t._getConfig = function(n) {
                return n = v({}, this.constructor.Default, o(this._element).data(), n), f.typeCheckConfig(yt, n, this.constructor.DefaultType), n
            }, t._getMenuElement = function() {
                if (!this._menu) {
                    var t = n._getParentFromElement(this._element);
                    t && (this._menu = t.querySelector(br))
                }
                return this._menu
            }, t._getPlacement = function() {
                var t = o(this._element.parentNode),
                    n = oo;
                return t.hasClass(de) ? (n = fo, o(this._menu).hasClass(yu) && (n = eo)) : t.hasClass(ge) ? n = ho : t.hasClass(no) ? n = co : o(this._menu).hasClass(yu) && (n = so), n
            }, t._detectNavbar = function() {
                return 0 < o(this._element).closest(".navbar").length
            }, t._getPopperConfig = function() {
                var i = this,
                    n = {},
                    t;
                return "function" == typeof this._config.offset ? n.fn = function(n) {
                    return n.offsets = v({}, n.offsets, i._config.offset(n.offsets) || {}), n
                } : n.offset = this._config.offset, t = {
                    placement: this._getPlacement(),
                    modifiers: {
                        offset: n,
                        flip: {
                            enabled: this._config.flip
                        },
                        preventOverflow: {
                            boundariesElement: this._config.boundary
                        }
                    }
                }, "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), t
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var i = o(this).data(gi);
                    if (i || (i = new n(this, "object" == typeof t ? t : null), o(this).data(gi, i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, n._clearMenus = function(t) {
                var h, e;
                if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which))
                    for (var r = [].slice.call(document.querySelectorAll(nr)), i = 0, c = r.length; i < c; i++) {
                        var u = n._getParentFromElement(r[i]),
                            s = o(r[i]).data(gi),
                            f = {
                                relatedTarget: r[i]
                            };
                        (t && "click" === t.type && (f.clickEvent = t), s) && (h = s._menu, !o(u).hasClass(et) || t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && o.contains(u, t.target) || (e = o.Event(w.HIDE, f), o(u).trigger(e), e.isDefaultPrevented() || ("ontouchstart" in document.documentElement && o(document.body).children().off("mouseover", null, o.noop), r[i].setAttribute("aria-expanded", "false"), o(h).removeClass(et), o(u).removeClass(et).trigger(o.Event(w.HIDDEN, f)))))
                    }
            }, n._getParentFromElement = function(n) {
                var t, i = f.getSelectorFromElement(n);
                return i && (t = document.querySelector(i)), t || n.parentNode
            }, n._dataApiKeydownHandler = function(t) {
                var u, f, r, i, e;
                (/input|textarea/i.test(t.target.tagName) ? 32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || o(t.target).closest(br).length) : !ke.test(t.which)) || (t.preventDefault(), t.stopPropagation(), this.disabled || o(this).hasClass(vu)) || (u = n._getParentFromElement(this), f = o(u).hasClass(et), (f || 27 === t.which && 32 === t.which) && (!f || 27 !== t.which && 32 !== t.which) ? (r = [].slice.call(u.querySelectorAll(uo)), 0 !== r.length && (i = r.indexOf(t.target), 38 === t.which && 0 < i && i--, 40 === t.which && i < r.length - 1 && i++, i < 0 && (i = 0), r[i].focus())) : (27 === t.which && (e = u.querySelector(nr), o(e).trigger("focus")), o(this).trigger("click")))
            }, g(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return lo
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ao
                }
            }]), n
        }(), o(document).on(w.KEYDOWN_DATA_API, nr, rt._dataApiKeydownHandler).on(w.KEYDOWN_DATA_API, br, rt._dataApiKeydownHandler).on(w.CLICK_DATA_API + " " + w.KEYUP_DATA_API, rt._clearMenus).on(w.CLICK_DATA_API, nr, function(n) {
            n.preventDefault();
            n.stopPropagation();
            rt._jQueryInterface.call(o(this), "toggle")
        }).on(w.CLICK_DATA_API, io, function(n) {
            n.stopPropagation()
        }), o.fn[yt] = rt._jQueryInterface, o.fn[yt].Constructor = rt, o.fn[yt].noConflict = function() {
            return o.fn[yt] = be, rt._jQueryInterface
        }, rt),
        tc = (pt = "modal", p = "." + (tr = "bs.modal"), vo = (r = t).fn[pt], kr = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        }, yo = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        }, c = {
            HIDE: "hide" + p,
            HIDDEN: "hidden" + p,
            SHOW: "show" + p,
            SHOWN: "shown" + p,
            FOCUSIN: "focusin" + p,
            RESIZE: "resize" + p,
            CLICK_DISMISS: "click.dismiss" + p,
            KEYDOWN_DISMISS: "keydown.dismiss" + p,
            MOUSEUP_DISMISS: "mouseup.dismiss" + p,
            MOUSEDOWN_DISMISS: "mousedown.dismiss" + p,
            CLICK_DATA_API: "click" + p + ".data-api"
        }, po = "modal-scrollbar-measure", wo = "modal-backdrop", pu = "modal-open", wt = "fade", ir = "show", bo = ".modal-dialog", ko = '[data-toggle="modal"]', go = '[data-dismiss="modal"]', wu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", bu = ".sticky-top", fi = function() {
            function t(n, t) {
                this._config = this._getConfig(t);
                this._element = n;
                this._dialog = n.querySelector(bo);
                this._backdrop = null;
                this._isShown = !1;
                this._isBodyOverflowing = !1;
                this._ignoreBackdropClick = !1;
                this._scrollbarWidth = 0
            }
            var n = t.prototype;
            return n.toggle = function(n) {
                return this._isShown ? this.hide() : this.show(n)
            }, n.show = function(n) {
                var t = this,
                    i;
                this._isTransitioning || this._isShown || (r(this._element).hasClass(wt) && (this._isTransitioning = !0), i = r.Event(c.SHOW, {
                    relatedTarget: n
                }), r(this._element).trigger(i), this._isShown || i.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), r(document.body).addClass(pu), this._setEscapeEvent(), this._setResizeEvent(), r(this._element).on(c.CLICK_DISMISS, go, function(n) {
                    return t.hide(n)
                }), r(this._dialog).on(c.MOUSEDOWN_DISMISS, function() {
                    r(t._element).one(c.MOUSEUP_DISMISS, function(n) {
                        r(n.target).is(t._element) && (t._ignoreBackdropClick = !0)
                    })
                }), this._showBackdrop(function() {
                    return t._showElement(n)
                })))
            }, n.hide = function(n) {
                var e = this,
                    t, i, u;
                (n && n.preventDefault(), !this._isTransitioning && this._isShown) && (t = r.Event(c.HIDE), (r(this._element).trigger(t), this._isShown && !t.isDefaultPrevented()) && (this._isShown = !1, i = r(this._element).hasClass(wt), (i && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), r(document).off(c.FOCUSIN), r(this._element).removeClass(ir), r(this._element).off(c.CLICK_DISMISS), r(this._dialog).off(c.MOUSEDOWN_DISMISS), i) ? (u = f.getTransitionDurationFromElement(this._element), r(this._element).one(f.TRANSITION_END, function(n) {
                    return e._hideModal(n)
                }).emulateTransitionEnd(u)) : this._hideModal()))
            }, n.dispose = function() {
                r.removeData(this._element, tr);
                r(window, document, this._element, this._backdrop).off(p);
                this._config = null;
                this._element = null;
                this._dialog = null;
                this._backdrop = null;
                this._isShown = null;
                this._isBodyOverflowing = null;
                this._ignoreBackdropClick = null;
                this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(n) {
                return n = v({}, kr, n), f.typeCheckConfig(pt, n, yo), n
            }, n._showElement = function(n) {
                var t = this,
                    u = r(this._element).hasClass(wt),
                    e, i, o;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element);
                this._element.style.display = "block";
                this._element.removeAttribute("aria-hidden");
                this._element.scrollTop = 0;
                u && f.reflow(this._element);
                r(this._element).addClass(ir);
                this._config.focus && this._enforceFocus();
                e = r.Event(c.SHOWN, {
                    relatedTarget: n
                });
                i = function() {
                    t._config.focus && t._element.focus();
                    t._isTransitioning = !1;
                    r(t._element).trigger(e)
                };
                u ? (o = f.getTransitionDurationFromElement(this._element), r(this._dialog).one(f.TRANSITION_END, i).emulateTransitionEnd(o)) : i()
            }, n._enforceFocus = function() {
                var n = this;
                r(document).off(c.FOCUSIN).on(c.FOCUSIN, function(t) {
                    document !== t.target && n._element !== t.target && 0 === r(n._element).has(t.target).length && n._element.focus()
                })
            }, n._setEscapeEvent = function() {
                var n = this;
                this._isShown && this._config.keyboard ? r(this._element).on(c.KEYDOWN_DISMISS, function(t) {
                    27 === t.which && (t.preventDefault(), n.hide())
                }) : this._isShown || r(this._element).off(c.KEYDOWN_DISMISS)
            }, n._setResizeEvent = function() {
                var n = this;
                this._isShown ? r(window).on(c.RESIZE, function(t) {
                    return n.handleUpdate(t)
                }) : r(window).off(c.RESIZE)
            }, n._hideModal = function() {
                var n = this;
                this._element.style.display = "none";
                this._element.setAttribute("aria-hidden", !0);
                this._isTransitioning = !1;
                this._showBackdrop(function() {
                    r(document.body).removeClass(pu);
                    n._resetAdjustments();
                    n._resetScrollbar();
                    r(n._element).trigger(c.HIDDEN)
                })
            }, n._removeBackdrop = function() {
                this._backdrop && (r(this._backdrop).remove(), this._backdrop = null)
            }, n._showBackdrop = function(n) {
                var t = this,
                    i = r(this._element).hasClass(wt) ? wt : "",
                    e, u, o;
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = wo, i && this._backdrop.classList.add(i), r(this._backdrop).appendTo(document.body), r(this._element).on(c.CLICK_DISMISS, function(n) {
                            t._ignoreBackdropClick ? t._ignoreBackdropClick = !1 : n.target === n.currentTarget && ("static" === t._config.backdrop ? t._element.focus() : t.hide())
                        }), i && f.reflow(this._backdrop), r(this._backdrop).addClass(ir), !n) return;
                    if (!i) return void n();
                    e = f.getTransitionDurationFromElement(this._backdrop);
                    r(this._backdrop).one(f.TRANSITION_END, n).emulateTransitionEnd(e)
                } else !this._isShown && this._backdrop ? (r(this._backdrop).removeClass(ir), u = function() {
                    t._removeBackdrop();
                    n && n()
                }, r(this._element).hasClass(wt) ? (o = f.getTransitionDurationFromElement(this._backdrop), r(this._backdrop).one(f.TRANSITION_END, u).emulateTransitionEnd(o)) : u()) : n && n()
            }, n._adjustDialog = function() {
                var n = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && n && (this._element.style.paddingLeft = this._scrollbarWidth + "px");
                this._isBodyOverflowing && !n && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "";
                this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var n = document.body.getBoundingClientRect();
                this._isBodyOverflowing = n.left + n.right < window.innerWidth;
                this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var n = this,
                    t, i, u, f;
                this._isBodyOverflowing && (t = [].slice.call(document.querySelectorAll(wu)), i = [].slice.call(document.querySelectorAll(bu)), r(t).each(function(t, i) {
                    var u = i.style.paddingRight,
                        f = r(i).css("padding-right");
                    r(i).data("padding-right", u).css("padding-right", parseFloat(f) + n._scrollbarWidth + "px")
                }), r(i).each(function(t, i) {
                    var u = i.style.marginRight,
                        f = r(i).css("margin-right");
                    r(i).data("margin-right", u).css("margin-right", parseFloat(f) - n._scrollbarWidth + "px")
                }), u = document.body.style.paddingRight, f = r(document.body).css("padding-right"), r(document.body).data("padding-right", u).css("padding-right", parseFloat(f) + this._scrollbarWidth + "px"))
            }, n._resetScrollbar = function() {
                var i = [].slice.call(document.querySelectorAll(wu)),
                    n, t;
                r(i).each(function(n, t) {
                    var i = r(t).data("padding-right");
                    r(t).removeData("padding-right");
                    t.style.paddingRight = i || ""
                });
                n = [].slice.call(document.querySelectorAll("" + bu));
                r(n).each(function(n, t) {
                    var i = r(t).data("margin-right");
                    "undefined" != typeof i && r(t).css("margin-right", i).removeData("margin-right")
                });
                t = r(document.body).data("padding-right");
                r(document.body).removeData("padding-right");
                document.body.style.paddingRight = t || ""
            }, n._getScrollbarWidth = function() {
                var n = document.createElement("div"),
                    t;
                return n.className = po, document.body.appendChild(n), t = n.getBoundingClientRect().width - n.clientWidth, document.body.removeChild(n), t
            }, t._jQueryInterface = function(n, i) {
                return this.each(function() {
                    var u = r(this).data(tr),
                        f = v({}, kr, r(this).data(), "object" == typeof n && n ? n : {});
                    if (u || (u = new t(this, f), r(this).data(tr, u)), "string" == typeof n) {
                        if ("undefined" == typeof u[n]) throw new TypeError('No method named "' + n + '"');
                        u[n](i)
                    } else f.show && u.show(i)
                })
            }, g(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return kr
                }
            }]), t
        }(), r(document).on(c.CLICK_DATA_API, ko, function(n) {
            var t, i = this,
                u = f.getSelectorFromElement(this),
                e, o;
            u && (t = document.querySelector(u));
            e = r(t).data(tr) ? "toggle" : v({}, r(t).data(), r(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || n.preventDefault();
            o = r(t).one(c.SHOW, function(n) {
                n.isDefaultPrevented() || o.one(c.HIDDEN, function() {
                    r(i).is(":visible") && i.focus()
                })
            });
            fi._jQueryInterface.call(r(t), e, this)
        }), r.fn[pt] = fi._jQueryInterface, r.fn[pt].Constructor = fi, r.fn[pt].noConflict = function() {
            return r.fn[pt] = vo, fi._jQueryInterface
        }, fi),
        eu = (ot = "tooltip", b = "." + (dr = "bs.tooltip"), ns = (u = t).fn[ot], ku = "bs-tooltip", ts = new RegExp("(^|\\s)" + ku + "\\S+", "g"), us = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="arrow"><\/div><div class="tooltip-inner"><\/div><\/div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !(rs = {
                AUTO: "auto",
                TOP: "top",
                RIGHT: "right",
                BOTTOM: "bottom",
                LEFT: "left"
            }),
            selector: !(is = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }),
            placement: "top",
            offset: 0,
            container: !1,
            fallbackPlacement: "flip",
            boundary: "scrollParent"
        }, gr = "out", fs = {
            HIDE: "hide" + b,
            HIDDEN: "hidden" + b,
            SHOW: (ei = "show") + b,
            SHOWN: "shown" + b,
            INSERTED: "inserted" + b,
            CLICK: "click" + b,
            FOCUSIN: "focusin" + b,
            FOCUSOUT: "focusout" + b,
            MOUSEENTER: "mouseenter" + b,
            MOUSELEAVE: "mouseleave" + b
        }, oi = "fade", si = "show", es = ".tooltip-inner", os = ".arrow", hi = "hover", nu = "focus", ss = "click", hs = "manual", rr = function() {
            function t(n, t) {
                if ("undefined" == typeof i) throw new TypeError("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0;
                this._timeout = 0;
                this._hoverState = "";
                this._activeTrigger = {};
                this._popper = null;
                this.element = n;
                this.config = this._getConfig(t);
                this.tip = null;
                this._setListeners()
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(n) {
                if (this._isEnabled)
                    if (n) {
                        var i = this.constructor.DATA_KEY,
                            t = u(n.currentTarget).data(i);
                        t || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), u(n.currentTarget).data(i, t));
                        t._activeTrigger.click = !t._activeTrigger.click;
                        t._isWithActiveTrigger() ? t._enter(null, t) : t._leave(null, t)
                    } else {
                        if (u(this.getTipElement()).hasClass(si)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout);
                u.removeData(this.element, this.constructor.DATA_KEY);
                u(this.element).off(this.constructor.EVENT_KEY);
                u(this.element).closest(".modal").off("hide.bs.modal");
                this.tip && u(this.tip).remove();
                this._isEnabled = null;
                this._timeout = null;
                this._hoverState = null;
                (this._activeTrigger = null) !== this._popper && this._popper.destroy();
                this._popper = null;
                this.element = null;
                this.config = null;
                this.tip = null
            }, n.show = function() {
                var n = this,
                    r, h, t, e, c, o, l, s, a;
                if ("none" === u(this.element).css("display")) throw new Error("Please use show on visible elements");
                if (r = u.Event(this.constructor.Event.SHOW), this.isWithContent() && this._isEnabled) {
                    if (u(this.element).trigger(r), h = u.contains(this.element.ownerDocument.documentElement, this.element), r.isDefaultPrevented() || !h) return;
                    t = this.getTipElement();
                    e = f.getUID(this.constructor.NAME);
                    t.setAttribute("id", e);
                    this.element.setAttribute("aria-describedby", e);
                    this.setContent();
                    this.config.animation && u(t).addClass(oi);
                    c = "function" == typeof this.config.placement ? this.config.placement.call(this, t, this.element) : this.config.placement;
                    o = this._getAttachment(c);
                    this.addAttachmentClass(o);
                    l = !1 === this.config.container ? document.body : u(document).find(this.config.container);
                    u(t).data(this.constructor.DATA_KEY, this);
                    u.contains(this.element.ownerDocument.documentElement, this.tip) || u(t).appendTo(l);
                    u(this.element).trigger(this.constructor.Event.INSERTED);
                    this._popper = new i(this.element, t, {
                        placement: o,
                        modifiers: {
                            offset: {
                                offset: this.config.offset
                            },
                            flip: {
                                behavior: this.config.fallbackPlacement
                            },
                            arrow: {
                                element: os
                            },
                            preventOverflow: {
                                boundariesElement: this.config.boundary
                            }
                        },
                        onCreate: function(t) {
                            t.originalPlacement !== t.placement && n._handlePopperPlacementChange(t)
                        },
                        onUpdate: function(t) {
                            n._handlePopperPlacementChange(t)
                        }
                    });
                    u(t).addClass(si);
                    "ontouchstart" in document.documentElement && u(document.body).children().on("mouseover", null, u.noop);
                    s = function() {
                        n.config.animation && n._fixTransition();
                        var t = n._hoverState;
                        n._hoverState = null;
                        u(n.element).trigger(n.constructor.Event.SHOWN);
                        t === gr && n._leave(null, n)
                    };
                    u(this.tip).hasClass(oi) ? (a = f.getTransitionDurationFromElement(this.tip), u(this.tip).one(f.TRANSITION_END, s).emulateTransitionEnd(a)) : s()
                }
            }, n.hide = function(n) {
                var t = this,
                    i = this.getTipElement(),
                    r = u.Event(this.constructor.Event.HIDE),
                    e = function() {
                        t._hoverState !== ei && i.parentNode && i.parentNode.removeChild(i);
                        t._cleanTipClass();
                        t.element.removeAttribute("aria-describedby");
                        u(t.element).trigger(t.constructor.Event.HIDDEN);
                        null !== t._popper && t._popper.destroy();
                        n && n()
                    },
                    o;
                (u(this.element).trigger(r), r.isDefaultPrevented()) || ((u(i).removeClass(si), "ontouchstart" in document.documentElement && u(document.body).children().off("mouseover", null, u.noop), this._activeTrigger[ss] = !1, this._activeTrigger[nu] = !1, this._activeTrigger[hi] = !1, u(this.tip).hasClass(oi)) ? (o = f.getTransitionDurationFromElement(i), u(i).one(f.TRANSITION_END, e).emulateTransitionEnd(o)) : e(), this._hoverState = "")
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.addAttachmentClass = function(n) {
                u(this.getTipElement()).addClass(ku + "-" + n)
            }, n.getTipElement = function() {
                return this.tip = this.tip || u(this.config.template)[0], this.tip
            }, n.setContent = function() {
                var n = this.getTipElement();
                this.setElementContent(u(n.querySelectorAll(es)), this.getTitle());
                u(n).removeClass(oi + " " + si)
            }, n.setElementContent = function(n, t) {
                var i = this.config.html;
                "object" == typeof t && (t.nodeType || t.jquery) ? i ? u(t).parent().is(n) || n.empty().append(t) : n.text(u(t).text()) : n[i ? "html" : "text"](t)
            }, n.getTitle = function() {
                var n = this.element.getAttribute("data-original-title");
                return n || (n = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), n
            }, n._getAttachment = function(n) {
                return rs[n.toUpperCase()]
            }, n._setListeners = function() {
                var n = this;
                this.config.trigger.split(" ").forEach(function(t) {
                    if ("click" === t) u(n.element).on(n.constructor.Event.CLICK, n.config.selector, function(t) {
                        return n.toggle(t)
                    });
                    else if (t !== hs) {
                        var i = t === hi ? n.constructor.Event.MOUSEENTER : n.constructor.Event.FOCUSIN,
                            r = t === hi ? n.constructor.Event.MOUSELEAVE : n.constructor.Event.FOCUSOUT;
                        u(n.element).on(i, n.config.selector, function(t) {
                            return n._enter(t)
                        }).on(r, n.config.selector, function(t) {
                            return n._leave(t)
                        })
                    }
                    u(n.element).closest(".modal").on("hide.bs.modal", function() {
                        return n.hide()
                    })
                });
                this.config.selector ? this.config = v({}, this.config, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var n = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== n) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(n, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || u(n.currentTarget).data(i)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), u(n.currentTarget).data(i, t));
                n && (t._activeTrigger["focusin" === n.type ? nu : hi] = !0);
                u(t.getTipElement()).hasClass(si) || t._hoverState === ei ? t._hoverState = ei : (clearTimeout(t._timeout), t._hoverState = ei, t.config.delay && t.config.delay.show ? t._timeout = setTimeout(function() {
                    t._hoverState === ei && t.show()
                }, t.config.delay.show) : t.show())
            }, n._leave = function(n, t) {
                var i = this.constructor.DATA_KEY;
                (t = t || u(n.currentTarget).data(i)) || (t = new this.constructor(n.currentTarget, this._getDelegateConfig()), u(n.currentTarget).data(i, t));
                n && (t._activeTrigger["focusout" === n.type ? nu : hi] = !1);
                t._isWithActiveTrigger() || (clearTimeout(t._timeout), t._hoverState = gr, t.config.delay && t.config.delay.hide ? t._timeout = setTimeout(function() {
                    t._hoverState === gr && t.hide()
                }, t.config.delay.hide) : t.hide())
            }, n._isWithActiveTrigger = function() {
                for (var n in this._activeTrigger)
                    if (this._activeTrigger[n]) return !0;
                return !1
            }, n._getConfig = function(n) {
                return "number" == typeof(n = v({}, this.constructor.Default, u(this.element).data(), "object" == typeof n && n ? n : {})).delay && (n.delay = {
                    show: n.delay,
                    hide: n.delay
                }), "number" == typeof n.title && (n.title = n.title.toString()), "number" == typeof n.content && (n.content = n.content.toString()), f.typeCheckConfig(ot, n, this.constructor.DefaultType), n
            }, n._getDelegateConfig = function() {
                var t = {},
                    n;
                if (this.config)
                    for (n in this.config) this.constructor.Default[n] !== this.config[n] && (t[n] = this.config[n]);
                return t
            }, n._cleanTipClass = function() {
                var t = u(this.getTipElement()),
                    n = t.attr("class").match(ts);
                null !== n && n.length && t.removeClass(n.join(""))
            }, n._handlePopperPlacementChange = function(n) {
                var t = n.instance;
                this.tip = t.popper;
                this._cleanTipClass();
                this.addAttachmentClass(this._getAttachment(n.placement))
            }, n._fixTransition = function() {
                var n = this.getTipElement(),
                    t = this.config.animation;
                null === n.getAttribute("x-placement") && (u(n).removeClass(oi), this.config.animation = !1, this.hide(), this.show(), this.config.animation = t)
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = u(this).data(dr),
                        r = "object" == typeof n && n;
                    if ((i || !/dispose|hide/.test(n)) && (i || (i = new t(this, r), u(this).data(dr, i)), "string" == typeof n)) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, g(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return us
                }
            }, {
                key: "NAME",
                get: function() {
                    return ot
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return dr
                }
            }, {
                key: "Event",
                get: function() {
                    return fs
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return b
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return is
                }
            }]), t
        }(), u.fn[ot] = rr._jQueryInterface, u.fn[ot].Constructor = rr, u.fn[ot].noConflict = function() {
            return u.fn[ot] = ns, rr._jQueryInterface
        }, rr),
        ic = (bt = "popover", k = "." + (tu = "bs.popover"), cs = (d = t).fn[bt], du = "bs-popover", ls = new RegExp("(^|\\s)" + du + "\\S+", "g"), as = v({}, eu.Default, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"><\/div><h3 class="popover-header"><\/h3><div class="popover-body"><\/div><\/div>'
        }), vs = v({}, eu.DefaultType, {
            content: "(string|element|function)"
        }), ys = "fade", ws = ".popover-header", bs = ".popover-body", ks = {
            HIDE: "hide" + k,
            HIDDEN: "hidden" + k,
            SHOW: (ps = "show") + k,
            SHOWN: "shown" + k,
            INSERTED: "inserted" + k,
            CLICK: "click" + k,
            FOCUSIN: "focusin" + k,
            FOCUSOUT: "focusout" + k,
            MOUSEENTER: "mouseenter" + k,
            MOUSELEAVE: "mouseleave" + k
        }, ur = function(n) {
            function i() {
                return n.apply(this, arguments) || this
            }
            var r, u, t;
            return u = n, (r = i).prototype = Object.create(u.prototype), (r.prototype.constructor = r).__proto__ = u, t = i.prototype, t.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, t.addAttachmentClass = function(n) {
                d(this.getTipElement()).addClass(du + "-" + n)
            }, t.getTipElement = function() {
                return this.tip = this.tip || d(this.config.template)[0], this.tip
            }, t.setContent = function() {
                var t = d(this.getTipElement()),
                    n;
                this.setElementContent(t.find(ws), this.getTitle());
                n = this._getContent();
                "function" == typeof n && (n = n.call(this.element));
                this.setElementContent(t.find(bs), n);
                t.removeClass(ys + " " + ps)
            }, t._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, t._cleanTipClass = function() {
                var t = d(this.getTipElement()),
                    n = t.attr("class").match(ls);
                null !== n && 0 < n.length && t.removeClass(n.join(""))
            }, i._jQueryInterface = function(n) {
                return this.each(function() {
                    var t = d(this).data(tu),
                        r = "object" == typeof n ? n : null;
                    if ((t || !/destroy|hide/.test(n)) && (t || (t = new i(this, r), d(this).data(tu, t)), "string" == typeof n)) {
                        if ("undefined" == typeof t[n]) throw new TypeError('No method named "' + n + '"');
                        t[n]()
                    }
                })
            }, g(i, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return as
                }
            }, {
                key: "NAME",
                get: function() {
                    return bt
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return tu
                }
            }, {
                key: "Event",
                get: function() {
                    return ks
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return k
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return vs
                }
            }]), i
        }(eu), d.fn[bt] = ur._jQueryInterface, d.fn[bt].Constructor = ur, d.fn[bt].noConflict = function() {
            return d.fn[bt] = cs, ur._jQueryInterface
        }, ur),
        rc = (st = "scrollspy", fr = "." + (iu = "bs.scrollspy"), ds = (a = t).fn[st], gu = {
            offset: 10,
            method: "auto",
            target: ""
        }, gs = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        }, ru = {
            ACTIVATE: "activate" + fr,
            SCROLL: "scroll" + fr,
            LOAD_DATA_API: "load" + fr + ".data-api"
        }, nh = "dropdown-item", kt = "active", th = '[data-spy="scroll"]', ih = ".active", nf = ".nav, .list-group", uu = ".nav-link", rh = ".nav-item", tf = ".list-group-item", uh = ".dropdown", fh = ".dropdown-item", eh = ".dropdown-toggle", oh = "offset", rf = "position", ci = function() {
            function t(n, t) {
                var i = this;
                this._element = n;
                this._scrollElement = "BODY" === n.tagName ? window : n;
                this._config = this._getConfig(t);
                this._selector = this._config.target + " " + uu + "," + this._config.target + " " + tf + "," + this._config.target + " " + fh;
                this._offsets = [];
                this._targets = [];
                this._activeTarget = null;
                this._scrollHeight = 0;
                a(this._scrollElement).on(ru.SCROLL, function(n) {
                    return i._process(n)
                });
                this.refresh();
                this._process()
            }
            var n = t.prototype;
            return n.refresh = function() {
                var n = this,
                    i = this._scrollElement === this._scrollElement.window ? oh : rf,
                    t = "auto" === this._config.method ? i : this._config.method,
                    r = t === rf ? this._getScrollTop() : 0;
                this._offsets = [];
                this._targets = [];
                this._scrollHeight = this._getScrollHeight();
                [].slice.call(document.querySelectorAll(this._selector)).map(function(n) {
                    var i, u = f.getSelectorFromElement(n),
                        e;
                    return (u && (i = document.querySelector(u)), i) && (e = i.getBoundingClientRect(), e.width || e.height) ? [a(i)[t]().top + r, u] : null
                }).filter(function(n) {
                    return n
                }).sort(function(n, t) {
                    return n[0] - t[0]
                }).forEach(function(t) {
                    n._offsets.push(t[0]);
                    n._targets.push(t[1])
                })
            }, n.dispose = function() {
                a.removeData(this._element, iu);
                a(this._scrollElement).off(fr);
                this._element = null;
                this._scrollElement = null;
                this._config = null;
                this._selector = null;
                this._offsets = null;
                this._targets = null;
                this._activeTarget = null;
                this._scrollHeight = null
            }, n._getConfig = function(n) {
                if ("string" != typeof(n = v({}, gu, "object" == typeof n && n ? n : {})).target) {
                    var t = a(n.target).attr("id");
                    t || (t = f.getUID(st), a(n.target).attr("id", t));
                    n.target = "#" + t
                }
                return f.typeCheckConfig(st, n, gs), n
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    r = this._getScrollHeight(),
                    u = this._config.offset + r - this._getOffsetHeight(),
                    i, n;
                if (this._scrollHeight !== r && this.refresh(), u <= t) i = this._targets[this._targets.length - 1], this._activeTarget !== i && this._activate(i);
                else {
                    if (this._activeTarget && t < this._offsets[0] && 0 < this._offsets[0]) return this._activeTarget = null, void this._clear();
                    for (n = this._offsets.length; n--;) this._activeTarget !== this._targets[n] && t >= this._offsets[n] && ("undefined" == typeof this._offsets[n + 1] || t < this._offsets[n + 1]) && this._activate(this._targets[n])
                }
            }, n._activate = function(n) {
                var i, t;
                this._activeTarget = n;
                this._clear();
                i = this._selector.split(",");
                i = i.map(function(t) {
                    return t + '[data-target="' + n + '"],' + t + '[href="' + n + '"]'
                });
                t = a([].slice.call(document.querySelectorAll(i.join(","))));
                t.hasClass(nh) ? (t.closest(uh).find(eh).addClass(kt), t.addClass(kt)) : (t.addClass(kt), t.parents(nf).prev(uu + ", " + tf).addClass(kt), t.parents(nf).prev(rh).children(uu).addClass(kt));
                a(this._scrollElement).trigger(ru.ACTIVATE, {
                    relatedTarget: n
                })
            }, n._clear = function() {
                var n = [].slice.call(document.querySelectorAll(this._selector));
                a(n).filter(ih).removeClass(kt)
            }, t._jQueryInterface = function(n) {
                return this.each(function() {
                    var i = a(this).data(iu);
                    if (i || (i = new t(this, "object" == typeof n && n), a(this).data(iu, i)), "string" == typeof n) {
                        if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                        i[n]()
                    }
                })
            }, g(t, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }, {
                key: "Default",
                get: function() {
                    return gu
                }
            }]), t
        }(), a(window).on(ru.LOAD_DATA_API, function() {
            for (var i, n = [].slice.call(document.querySelectorAll(th)), t = n.length; t--;) i = a(n[t]), ci._jQueryInterface.call(i, i.data())
        }), a.fn[st] = ci._jQueryInterface, a.fn[st].Constructor = ci, a.fn[st].noConflict = function() {
            return a.fn[st] = ds, ci._jQueryInterface
        }, ci),
        uc = (li = "." + (fu = "bs.tab"), sh = (h = t).fn.tab, ai = {
            HIDE: "hide" + li,
            HIDDEN: "hidden" + li,
            SHOW: "show" + li,
            SHOWN: "shown" + li,
            CLICK_DATA_API: "click" + li + ".data-api"
        }, hh = "dropdown-menu", vi = "active", ch = "disabled", lh = "fade", uf = "show", ah = ".dropdown", vh = ".nav, .list-group", ff = ".active", ef = "> li > .active", yh = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', ph = ".dropdown-toggle", wh = "> .dropdown-menu .active", yi = function() {
            function n(n) {
                this._element = n
            }
            var t = n.prototype;
            return t.show = function() {
                var s = this,
                    i, n, t, r, c, u, e, o;
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && h(this._element).hasClass(vi) || h(this._element).hasClass(ch) || (t = h(this._element).closest(vh)[0], r = f.getSelectorFromElement(this._element), t && (c = "UL" === t.nodeName ? ef : ff, n = (n = h.makeArray(h(t).find(c)))[n.length - 1]), u = h.Event(ai.HIDE, {
                    relatedTarget: this._element
                }), e = h.Event(ai.SHOW, {
                    relatedTarget: n
                }), (n && h(n).trigger(u), h(this._element).trigger(e), e.isDefaultPrevented() || u.isDefaultPrevented()) || (r && (i = document.querySelector(r)), this._activate(this._element, t), o = function() {
                    var t = h.Event(ai.HIDDEN, {
                            relatedTarget: s._element
                        }),
                        i = h.Event(ai.SHOWN, {
                            relatedTarget: n
                        });
                    h(n).trigger(t);
                    h(s._element).trigger(i)
                }, i ? this._activate(i, i.parentNode, o) : o()))
            }, t.dispose = function() {
                h.removeData(this._element, fu);
                this._element = null
            }, t._activate = function(n, t, i) {
                var o = this,
                    r = ("UL" === t.nodeName ? h(t).find(ef) : h(t).children(ff))[0],
                    s = i && r && h(r).hasClass(lh),
                    u = function() {
                        return o._transitionComplete(n, r, i)
                    },
                    e;
                r && s ? (e = f.getTransitionDurationFromElement(r), h(r).one(f.TRANSITION_END, u).emulateTransitionEnd(e)) : u()
            }, t._transitionComplete = function(n, t, i) {
                var r, u, e;
                t && (h(t).removeClass(uf + " " + vi), r = h(t.parentNode).find(wh)[0], r && h(r).removeClass(vi), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !1));
                (h(n).addClass(vi), "tab" === n.getAttribute("role") && n.setAttribute("aria-selected", !0), f.reflow(n), h(n).addClass(uf), n.parentNode && h(n.parentNode).hasClass(hh)) && (u = h(n).closest(ah)[0], u && (e = [].slice.call(u.querySelectorAll(ph)), h(e).addClass(vi)), n.setAttribute("aria-expanded", !0));
                i && i()
            }, n._jQueryInterface = function(t) {
                return this.each(function() {
                    var r = h(this),
                        i = r.data(fu);
                    if (i || (i = new n(this), r.data(fu, i)), "string" == typeof t) {
                        if ("undefined" == typeof i[t]) throw new TypeError('No method named "' + t + '"');
                        i[t]()
                    }
                })
            }, g(n, null, [{
                key: "VERSION",
                get: function() {
                    return "4.1.3"
                }
            }]), n
        }(), h(document).on(ai.CLICK_DATA_API, yh, function(n) {
            n.preventDefault();
            yi._jQueryInterface.call(h(this), "show")
        }), h.fn.tab = yi._jQueryInterface, h.fn.tab.Constructor = yi, h.fn.tab.noConflict = function() {
            return h.fn.tab = sh, yi._jQueryInterface
        }, yi);
    ! function(n) {
        if ("undefined" == typeof n) throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = n.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || 4 <= t[0]) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0");
    }(t);
    n.Util = f;
    n.Alert = bh;
    n.Button = kh;
    n.Carousel = dh;
    n.Collapse = gh;
    n.Dropdown = nc;
    n.Modal = tc;
    n.Popover = ic;
    n.Scrollspy = rc;
    n.Tab = uc;
    n.Tooltip = eu;
    Object.defineProperty(n, "__esModule", {
        value: !0
    })
});
! function(n) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], n) : "undefined" != typeof module && module.exports ? module.exports = n(require("jquery")) : n(jQuery)
}(function(n) {
    var e = -1,
        r = -1,
        i = function(n) {
            return parseFloat(n) || 0
        },
        o = function(t) {
            var f = 1,
                e = n(t),
                u = null,
                r = [];
            return e.each(function() {
                var t = n(this),
                    e = t.offset().top - i(t.css("margin-top")),
                    o = r.length > 0 ? r[r.length - 1] : null;
                null === o ? r.push(t) : Math.floor(Math.abs(u - e)) <= f ? r[r.length - 1] = o.add(t) : r.push(t);
                u = e
            }), r
        },
        u = function(t) {
            var i = {
                byRow: !0,
                property: "height",
                target: null,
                remove: !1
            };
            return "object" == typeof t ? n.extend(i, t) : ("boolean" == typeof t ? i.byRow = t : "remove" === t && (i.remove = !0), i)
        },
        t = n.fn.matchHeight = function(i) {
            var r = u(i),
                f;
            return r.remove ? (f = this, this.css(r.property, ""), n.each(t._groups, function(n, t) {
                t.elements = t.elements.not(f)
            }), this) : this.length <= 1 && !r.target ? this : (t._groups.push({
                elements: this,
                options: r
            }), t._apply(this, r), this)
        },
        f;
    t.version = "0.7.0";
    t._groups = [];
    t._throttle = 80;
    t._maintainScroll = !1;
    t._beforeUpdate = null;
    t._afterUpdate = null;
    t._rows = o;
    t._parse = i;
    t._parseOptions = u;
    t._apply = function(r, f) {
        var e = u(f),
            s = n(r),
            c = [s],
            l = n(window).scrollTop(),
            a = n("html").outerHeight(!0),
            h = s.parents().filter(":hidden");
        return h.each(function() {
            var t = n(this);
            t.data("style-cache", t.attr("style"))
        }), h.css("display", "block"), e.byRow && !e.target && (s.each(function() {
            var i = n(this),
                t = i.css("display");
            "inline-block" !== t && "flex" !== t && "inline-flex" !== t && (t = "block");
            i.data("style-cache", i.attr("style"));
            i.css({
                display: t,
                "padding-top": "0",
                "padding-bottom": "0",
                "margin-top": "0",
                "margin-bottom": "0",
                "border-top-width": "0",
                "border-bottom-width": "0",
                height: "100px",
                overflow: "hidden"
            })
        }), c = o(s), s.each(function() {
            var t = n(this);
            t.attr("style", t.data("style-cache") || "")
        })), n.each(c, function(t, r) {
            var u = n(r),
                f = 0;
            if (e.target) f = e.target.outerHeight(!1);
            else {
                if (e.byRow && u.length <= 1) return void u.css(e.property, "");
                u.each(function() {
                    var t = n(this),
                        u = t.attr("style"),
                        i = t.css("display"),
                        r;
                    "inline-block" !== i && "flex" !== i && "inline-flex" !== i && (i = "block");
                    r = {
                        display: i
                    };
                    r[e.property] = "";
                    t.css(r);
                    t.outerHeight(!1) > f && (f = t.outerHeight(!1));
                    u ? t.attr("style", u) : t.css("display", "")
                })
            }
            u.each(function() {
                var t = n(this),
                    r = 0;
                e.target && t.is(e.target) || ("border-box" !== t.css("box-sizing") && (r += i(t.css("border-top-width")) + i(t.css("border-bottom-width")), r += i(t.css("padding-top")) + i(t.css("padding-bottom"))), t.css(e.property, f - r + "px"))
            })
        }), h.each(function() {
            var t = n(this);
            t.attr("style", t.data("style-cache") || null)
        }), t._maintainScroll && n(window).scrollTop(l / a * n("html").outerHeight(!0)), this
    };
    t._applyDataApi = function() {
        var t = {};
        n("[data-match-height], [data-mh]").each(function() {
            var i = n(this),
                r = i.attr("data-mh") || i.attr("data-match-height");
            t[r] = r in t ? t[r].add(i) : i
        });
        n.each(t, function() {
            this.matchHeight(!0)
        })
    };
    f = function(i) {
        t._beforeUpdate && t._beforeUpdate(i, t._groups);
        n.each(t._groups, function() {
            t._apply(this.elements, this.options)
        });
        t._afterUpdate && t._afterUpdate(i, t._groups)
    };
    t._update = function(i, u) {
        if (u && "resize" === u.type) {
            var o = n(window).width();
            if (o === e) return;
            e = o
        }
        i ? -1 === r && (r = setTimeout(function() {
            f(u);
            r = -1
        }, t._throttle)) : f(u)
    };
    n(t._applyDataApi);
    n(window).bind("load", function(n) {
        t._update(!1, n)
    });
    n(window).bind("resize orientationchange", function(n) {
        t._update(!0, n)
    })
}),
function(n) {
    n.fn.onImagesLoad = function(t) {
        var i, r;
        typeof t == "function" && (t = {
            all: t
        });
        i = this;
        i.opts = n.extend({}, n.fn.onImagesLoad.defaults, t);
        i.opts.selectorCallback && !i.opts.all && (i.opts.all = i.opts.selectorCallback);
        i.opts.itemCallback && !i.opts.each && (i.opts.each = i.opts.itemCallback);
        var u = !n.support.appendChecked,
            f = !u && !n.support.input,
            o = !u && !f && !n.support.clearCloneStyle && !n.support.cors,
            e = u || f || o;
        return i.bindEvents = function(t, r, u) {
            if (t.length === 0) i.opts.callbackIfNoImagesExist && u && u(r);
            else {
                var f = [];
                t.jquery || (t = n(t));
                t.each(function(i) {
                    var o = this.src;
                    e || (this.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==");
                    n(this).bind("load", function() {
                        jQuery.inArray(i, f) < 0 && (f.push(i), f.length == t.length && u && u.call(r, r))
                    });
                    e ? (this.complete || this.complete === undefined) && (this.src = o) : this.src = o
                })
            }
        }, r = [], i.each(function() {
            if (i.opts.each) {
                var t;
                t = this.tagName == "IMG" ? this : n("img", this);
                i.bindEvents(t, this, i.opts.each)
            }
            i.opts.all && (this.tagName == "IMG" ? r.push(this) : n("img", this).each(function() {
                r.push(this)
            }))
        }), i.opts.all && i.bindEvents(r, this, i.opts.all), i.each(function() {})
    };
    n.fn.onImagesLoad.defaults = {
        all: null,
        each: null,
        callbackIfNoImagesExist: !1
    }
}(jQuery);
! function(n, t) {
    if ("function" == typeof define && define.amd) define(["module", "exports"], t);
    else if ("undefined" != typeof exports) t(module, exports);
    else {
        var i = {
            exports: {}
        };
        t(i, i.exports);
        n.WOW = i.exports
    }
}(this, function(n, t) {
    "use strict";

    function r(n, t) {
        if (!(n instanceof t)) throw new TypeError("Cannot call a class as a function");
    }

    function f(n, t) {
        return t.indexOf(n) >= 0
    }

    function l(n, t) {
        var i, r;
        for (i in t) null == n[i] && (r = t[i], n[i] = r);
        return n
    }

    function a(n) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(n)
    }

    function v(n) {
        var i = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
            r = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
            u = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3],
            t = void 0;
        return null != document.createEvent ? (t = document.createEvent("CustomEvent"), t.initCustomEvent(n, i, r, u)) : null != document.createEventObject ? (t = document.createEventObject(), t.eventType = n) : t.eventName = n, t
    }

    function y(n, t) {
        null != n.dispatchEvent ? n.dispatchEvent(t) : t in (null != n) ? n[t]() : "on" + t in (null != n) && n["on" + t]()
    }

    function i(n, t, i) {
        null != n.addEventListener ? n.addEventListener(t, i, !1) : null != n.attachEvent ? n.attachEvent("on" + t, i) : n[t] = i
    }

    function e(n, t, i) {
        null != n.removeEventListener ? n.removeEventListener(t, i, !1) : null != n.detachEvent ? n.detachEvent("on" + t, i) : delete n[t]
    }

    function p() {
        return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
    }
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var o, s, u = function() {
            function n(n, t) {
                for (var i, r = 0; r < t.length; r++) i = t[r], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(n, i.key, i)
            }
            return function(t, i, r) {
                return i && n(t.prototype, i), r && n(t, r), t
            }
        }(),
        w = window.WeakMap || window.MozWeakMap || function() {
            function n() {
                r(this, n);
                this.keys = [];
                this.values = []
            }
            return u(n, [{
                key: "get",
                value: function(n) {
                    for (var i, t = 0; t < this.keys.length; t++)
                        if (i = this.keys[t], i === n) return this.values[t]
                }
            }, {
                key: "set",
                value: function(n, t) {
                    for (var r, i = 0; i < this.keys.length; i++)
                        if (r = this.keys[i], r === n) return this.values[i] = t, this;
                    return this.keys.push(n), this.values.push(t), this
                }
            }]), n
        }(),
        h = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (s = o = function() {
            function n() {
                r(this, n);
                "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."))
            }
            return u(n, [{
                key: "observe",
                value: function() {}
            }]), n
        }(), o.notSupported = !0, s),
        c = window.getComputedStyle || function(n) {
            var t = /(\-([a-z]){1})/g;
            return {
                getPropertyValue: function(i) {
                    "float" === i && (i = "styleFloat");
                    t.test(i) && i.replace(t, function(n, t) {
                        return t.toUpperCase()
                    });
                    var r = n.currentStyle;
                    return (null != r ? r[i] : void 0) || null
                }
            }
        },
        b = function() {
            function n() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
                r(this, n);
                this.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null,
                    scrollContainer: null,
                    resetAnimation: !0
                };
                this.animate = function() {
                    return "requestAnimationFrame" in window ? function(n) {
                        return window.requestAnimationFrame(n)
                    } : function(n) {
                        return n()
                    }
                }();
                this.vendors = ["moz", "webkit"];
                this.start = this.start.bind(this);
                this.resetAnimation = this.resetAnimation.bind(this);
                this.scrollHandler = this.scrollHandler.bind(this);
                this.scrollCallback = this.scrollCallback.bind(this);
                this.scrolled = !0;
                this.config = l(t, this.defaults);
                null != t.scrollContainer && (this.config.scrollContainer = document.querySelector(t.scrollContainer));
                this.animationNameCache = new w;
                this.wowEvent = v(this.config.boxClass)
            }
            return u(n, [{
                key: "init",
                value: function() {
                    this.element = window.document.documentElement;
                    f(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start);
                    this.finished = []
                }
            }, {
                key: "start",
                value: function() {
                    var u = this,
                        n, t, r;
                    if (this.stopped = !1, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length)
                        if (this.disabled()) this.resetStyle();
                        else
                            for (n = 0; n < this.boxes.length; n++) t = this.boxes[n], this.applyStyle(t, !0);
                        (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) && (r = new h(function(n) {
                            for (var r, i, f, t = 0; t < n.length; t++)
                                for (r = n[t], i = 0; i < r.addedNodes.length; i++) f = r.addedNodes[i], u.doSync(f)
                        }), r.observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }))
                }
            }, {
                key: "stop",
                value: function() {
                    this.stopped = !0;
                    e(this.config.scrollContainer || window, "scroll", this.scrollHandler);
                    e(window, "resize", this.scrollHandler);
                    null != this.interval && clearInterval(this.interval)
                }
            }, {
                key: "sync",
                value: function() {
                    h.notSupported && this.doSync(this.element)
                }
            }, {
                key: "doSync",
                value: function(n) {
                    var r, i, t;
                    if ("undefined" != typeof n && null !== n || (n = this.element), 1 === n.nodeType)
                        for (n = n.parentNode || n, r = n.querySelectorAll("." + this.config.boxClass), i = 0; i < r.length; i++) t = r[i], f(t, this.all) || (this.boxes.push(t), this.all.push(t), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(t, !0), this.scrolled = !0)
                }
            }, {
                key: "show",
                value: function(n) {
                    return this.applyStyle(n), n.className = n.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(n), y(n, this.wowEvent), this.config.resetAnimation && (i(n, "animationend", this.resetAnimation), i(n, "oanimationend", this.resetAnimation), i(n, "webkitAnimationEnd", this.resetAnimation), i(n, "MSAnimationEnd", this.resetAnimation)), n
                }
            }, {
                key: "applyStyle",
                value: function(n, t) {
                    var i = this,
                        r = n.getAttribute("data-wow-duration"),
                        u = n.getAttribute("data-wow-delay"),
                        f = n.getAttribute("data-wow-iteration");
                    return this.animate(function() {
                        return i.customStyle(n, t, r, u, f)
                    })
                }
            }, {
                key: "resetStyle",
                value: function() {
                    for (var t, n = 0; n < this.boxes.length; n++) t = this.boxes[n], t.style.visibility = "visible"
                }
            }, {
                key: "resetAnimation",
                value: function(n) {
                    if (n.type.toLowerCase().indexOf("animationend") >= 0) {
                        var t = n.target || n.srcElement;
                        t.className = t.className.replace(this.config.animateClass, "").trim()
                    }
                }
            }, {
                key: "customStyle",
                value: function(n, t, i, r, u) {
                    return t && this.cacheAnimationName(n), n.style.visibility = t ? "hidden" : "visible", i && this.vendorSet(n.style, {
                        animationDuration: i
                    }), r && this.vendorSet(n.style, {
                        animationDelay: r
                    }), u && this.vendorSet(n.style, {
                        animationIterationCount: u
                    }), this.vendorSet(n.style, {
                        animationName: t ? "none" : this.cachedAnimationName(n)
                    }), n
                }
            }, {
                key: "vendorSet",
                value: function(n, t) {
                    var i, u, r, f;
                    for (i in t)
                        if (t.hasOwnProperty(i))
                            for (u = t[i], n["" + i] = u, r = 0; r < this.vendors.length; r++) f = this.vendors[r], n["" + f + i.charAt(0).toUpperCase() + i.substr(1)] = u
                }
            }, {
                key: "vendorCSS",
                value: function(n, t) {
                    for (var f, u = c(n), i = u.getPropertyCSSValue(t), r = 0; r < this.vendors.length; r++) f = this.vendors[r], i = i || u.getPropertyCSSValue("-" + f + "-" + t);
                    return i
                }
            }, {
                key: "animationName",
                value: function(n) {
                    var t = void 0;
                    try {
                        t = this.vendorCSS(n, "animation-name").cssText
                    } catch (i) {
                        t = c(n).getPropertyValue("animation-name")
                    }
                    return "none" === t ? "" : t
                }
            }, {
                key: "cacheAnimationName",
                value: function(n) {
                    return this.animationNameCache.set(n, this.animationName(n))
                }
            }, {
                key: "cachedAnimationName",
                value: function(n) {
                    return this.animationNameCache.get(n)
                }
            }, {
                key: "scrollHandler",
                value: function() {
                    this.scrolled = !0
                }
            }, {
                key: "scrollCallback",
                value: function() {
                    var i, t, n;
                    if (this.scrolled) {
                        for (this.scrolled = !1, i = [], t = 0; t < this.boxes.length; t++)
                            if (n = this.boxes[t], n) {
                                if (this.isVisible(n)) {
                                    this.show(n);
                                    continue
                                }
                                i.push(n)
                            }
                        this.boxes = i;
                        this.boxes.length || this.config.live || this.stop()
                    }
                }
            }, {
                key: "offsetTop",
                value: function(n) {
                    for (; void 0 === n.offsetTop;) n = n.parentNode;
                    for (var t = n.offsetTop; n.offsetParent;) n = n.offsetParent, t += n.offsetTop;
                    return t
                }
            }, {
                key: "isVisible",
                value: function(n) {
                    var r = n.getAttribute("data-wow-offset") || this.config.offset,
                        t = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset,
                        u = t + Math.min(this.element.clientHeight, p()) - r,
                        i = this.offsetTop(n),
                        f = i + n.clientHeight;
                    return u >= i && f >= t
                }
            }, {
                key: "disabled",
                value: function() {
                    return !this.config.mobile && a(navigator.userAgent)
                }
            }]), n
        }();
    t["default"] = b;
    n.exports = t["default"]
});
! function(n, t, i, r) {
    function u(t, i) {
        this.settings = null;
        this.options = n.extend({}, u.Defaults, i);
        this.$element = n(t);
        this._handlers = {};
        this._plugins = {};
        this._supress = {};
        this._current = null;
        this._speed = null;
        this._coordinates = [];
        this._breakpoint = null;
        this._width = null;
        this._items = [];
        this._clones = [];
        this._mergers = [];
        this._widths = [];
        this._invalidated = {};
        this._pipe = [];
        this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {
                start: null,
                current: null
            },
            direction: null
        };
        this._states = {
            current: {},
            tags: {
                initializing: ["busy"],
                animating: ["busy"],
                dragging: ["interacting"]
            }
        };
        n.each(["onResize", "onThrottledResize"], n.proxy(function(t, i) {
            this._handlers[i] = n.proxy(this[i], this)
        }, this));
        n.each(u.Plugins, n.proxy(function(n, t) {
            this._plugins[n.charAt(0).toLowerCase() + n.slice(1)] = new t(this)
        }, this));
        n.each(u.Workers, n.proxy(function(t, i) {
            this._pipe.push({
                filter: i.filter,
                run: n.proxy(i.run, this)
            })
        }, this));
        this.setup();
        this.initialize()
    }
    u.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    };
    u.Width = {
        Default: "default",
        Inner: "inner",
        Outer: "outer"
    };
    u.Type = {
        Event: "event",
        State: "state"
    };
    u.Plugins = {};
    u.Workers = [{
        filter: ["width", "settings"],
        run: function() {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this.settings.margin || "",
                u = !this.settings.autoWidth,
                i = this.settings.rtl,
                r = {
                    width: "auto",
                    "margin-left": i ? t : "",
                    "margin-right": i ? "" : t
                };
            u || this.$stage.children().css(r);
            n.css = r
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var r = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                t = null,
                i = this._items.length,
                f = !this.settings.autoWidth,
                u = [];
            for (n.items = {
                    merge: !1,
                    width: r
                }; i--;) t = this._mergers[i], t = this.settings.mergeFit && Math.min(t, this.settings.items) || t, n.items.merge = t > 1 || n.items.merge, u[i] = f ? r * t : this._items[i].width();
            this._widths = u
        }
    }, {
        filter: ["items", "settings"],
        run: function() {
            var t = [],
                i = this._items,
                r = this.settings,
                f = Math.max(2 * r.items, 4),
                s = 2 * Math.ceil(i.length / 2),
                e = r.loop && i.length ? r.rewind ? f : Math.max(f, s) : 0,
                o = "",
                u = "";
            for (e /= 2; e--;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), u = i[t[t.length - 1]][0].outerHTML + u;
            this._clones = t;
            n(o).addClass("cloned").appendTo(this.$stage);
            n(u).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            for (var u = this.settings.rtl ? 1 : -1, f = this._clones.length + this._items.length, n = -1, i = 0, r = 0, t = []; ++n < f;) i = t[n - 1] || 0, r = this._widths[this.relative(n)] + this.settings.margin, t.push(i + r * u);
            this._coordinates = t
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function() {
            var n = this.settings.stagePadding,
                t = this._coordinates,
                i = {
                    width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * n,
                    "padding-left": n || "",
                    "padding-right": n || ""
                };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            var t = this._coordinates.length,
                i = !this.settings.autoWidth,
                r = this.$stage.children();
            if (i && n.items.merge)
                for (; t--;) n.css.width = this._widths[this.relative(t)], r.eq(t).css(n.css);
            else i && (n.css.width = n.items.width, r.css(n.css))
        }
    }, {
        filter: ["items"],
        run: function() {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"],
        run: function(n) {
            n.current = n.current ? this.$stage.children().index(n.current) : 0;
            n.current = Math.max(this.minimum(), Math.min(this.maximum(), n.current));
            this.reset(n.current)
        }
    }, {
        filter: ["position"],
        run: function() {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"],
        run: function() {
            for (var t, i, f = this.settings.rtl ? 1 : -1, e = 2 * this.settings.stagePadding, r = this.coordinates(this.current()) + e, o = r + this.width() * f, s = [], n = 0, u = this._coordinates.length; n < u; n++) t = this._coordinates[n - 1] || 0, i = Math.abs(this._coordinates[n]) + e * f, (this.op(t, "<=", r) && this.op(t, ">", o) || this.op(i, "<", r) && this.op(i, ">", o)) && s.push(n);
            this.$stage.children(".active").removeClass("active");
            this.$stage.children(":eq(" + s.join("), :eq(") + ")").addClass("active");
            this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
        }
    }];
    u.prototype.initialize = function() {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, u;
            t = this.$element.find("img");
            i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : r;
            u = this.$element.children(i).width();
            t.length && u <= 0 && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass);
        this.$stage = n("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>');
        this.$element.append(this.$stage.parent());
        this.replace(this.$element.children().not(this.$stage.parent()));
        this.$element.is(":visible") ? this.refresh() : this.invalidate("width");
        this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass);
        this.registerEventHandlers();
        this.leave("initializing");
        this.trigger("initialized")
    };
    u.prototype.setup = function() {
        var u = this.viewport(),
            r = this.options.responsive,
            i = -1,
            t = null;
        r ? (n.each(r, function(n) {
            n <= u && n > i && (i = Number(n))
        }), t = n.extend({}, this.options, r[i]), "function" == typeof t.stagePadding && (t.stagePadding = t.stagePadding()), delete t.responsive, t.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + i))) : t = n.extend({}, this.options);
        this.trigger("change", {
            property: {
                name: "settings",
                value: t
            }
        });
        this._breakpoint = i;
        this.settings = t;
        this.invalidate("settings");
        this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    };
    u.prototype.optionsLogic = function() {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    };
    u.prototype.prepare = function(t) {
        var i = this.trigger("prepare", {
            content: t
        });
        return i.data || (i.data = n("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {
            content: i.data
        }), i.data
    };
    u.prototype.update = function() {
        for (var t = 0, i = this._pipe.length, r = n.proxy(function(n) {
                return this[n]
            }, this._invalidated), u = {}; t < i;)(this._invalidated.all || n.grep(this._pipe[t].filter, r).length > 0) && this._pipe[t].run(u), t++;
        this._invalidated = {};
        this.is("valid") || this.enter("valid")
    };
    u.prototype.width = function(n) {
        switch (n = n || u.Width.Default) {
            case u.Width.Inner:
            case u.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    };
    u.prototype.refresh = function() {
        this.enter("refreshing");
        this.trigger("refresh");
        this.setup();
        this.optionsLogic();
        this.$element.addClass(this.options.refreshClass);
        this.update();
        this.$element.removeClass(this.options.refreshClass);
        this.leave("refreshing");
        this.trigger("refreshed")
    };
    u.prototype.onThrottledResize = function() {
        t.clearTimeout(this.resizeTimer);
        this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    };
    u.prototype.onResize = function() {
        return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized")))
    };
    u.prototype.registerEventHandlers = function() {
        n.support.transition && this.$stage.on(n.support.transition.end + ".owl.core", n.proxy(this.onTransitionEnd, this));
        this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize);
        this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
            return !1
        }));
        this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", n.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", n.proxy(this.onDragEnd, this)))
    };
    u.prototype.onDragStart = function(t) {
        var r = null;
        3 !== t.which && (n.support.transform ? (r = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), r = {
            x: r[16 === r.length ? 12 : 4],
            y: r[16 === r.length ? 13 : 5]
        }) : (r = this.$stage.position(), r = {
            x: this.settings.rtl ? r.left + this.$stage.width() - this.width() + this.settings.margin : r.left,
            y: r.top
        }), this.is("animating") && (n.support.transform ? this.animate(r.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = n(t.target), this._drag.stage.start = r, this._drag.stage.current = r, this._drag.pointer = this.pointer(t), n(i).on("mouseup.owl.core touchend.owl.core", n.proxy(this.onDragEnd, this)), n(i).one("mousemove.owl.core touchmove.owl.core", n.proxy(function(t) {
            var r = this.difference(this._drag.pointer, this.pointer(t));
            n(i).on("mousemove.owl.core touchmove.owl.core", n.proxy(this.onDragMove, this));
            Math.abs(r.x) < Math.abs(r.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    };
    u.prototype.onDragMove = function(n) {
        var t = null,
            i = null,
            u = null,
            f = this.difference(this._drag.pointer, this.pointer(n)),
            r = this.difference(this._drag.stage.start, f);
        this.is("dragging") && (n.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, r.x = ((r.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), u = this.settings.pullDrag ? f.x / -5 : 0, r.x = Math.max(Math.min(r.x, t + u), i + u)), this._drag.stage.current = r, this.animate(r.x))
    };
    u.prototype.onDragEnd = function(t) {
        var r = this.difference(this._drag.pointer, this.pointer(t)),
            f = this._drag.stage.current,
            u = r.x > 0 ^ this.settings.rtl ? "left" : "right";
        n(i).off(".owl.core");
        this.$element.removeClass(this.options.grabClass);
        (0 !== r.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(f.x, 0 !== r.x ? u : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = u, (Math.abs(r.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
            return !1
        }));
        this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    };
    u.prototype.closest = function(t, i) {
        var r = -1,
            u = 30,
            e = this.width(),
            f = this.coordinates();
        return this.settings.freeDrag || n.each(f, n.proxy(function(n, o) {
            return "left" === i && t > o - u && t < o + u ? r = n : "right" === i && t > o - e - u && t < o - e + u ? r = n + 1 : this.op(t, "<", o) && this.op(t, ">", f[n + 1] || o - e) && (r = "left" === i ? n + 1 : n), r === -1
        }, this)), this.settings.loop || (this.op(t, ">", f[this.minimum()]) ? r = t = this.minimum() : this.op(t, "<", f[this.maximum()]) && (r = t = this.maximum())), r
    };
    u.prototype.animate = function(t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd();
        i && (this.enter("animating"), this.trigger("translate"));
        n.support.transform3d && n.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({
            left: t + "px"
        }, this.speed(), this.settings.fallbackEasing, n.proxy(this.onTransitionEnd, this)) : this.$stage.css({
            left: t + "px"
        })
    };
    u.prototype.is = function(n) {
        return this._states.current[n] && this._states.current[n] > 0
    };
    u.prototype.current = function(n) {
        if (n === r) return this._current;
        if (0 === this._items.length) return r;
        if (n = this.normalize(n), this._current !== n) {
            var t = this.trigger("change", {
                property: {
                    name: "position",
                    value: n
                }
            });
            t.data !== r && (n = this.normalize(t.data));
            this._current = n;
            this.invalidate("position");
            this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    };
    u.prototype.invalidate = function(t) {
        return "string" === n.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), n.map(this._invalidated, function(n, t) {
            return t
        })
    };
    u.prototype.reset = function(n) {
        n = this.normalize(n);
        n !== r && (this._speed = 0, this._current = n, this.suppress(["translate", "translated"]), this.animate(this.coordinates(n)), this.release(["translate", "translated"]))
    };
    u.prototype.normalize = function(n, t) {
        var i = this._items.length,
            u = t ? 0 : this._clones.length;
        return !this.isNumeric(n) || i < 1 ? n = r : (n < 0 || n >= i + u) && (n = ((n - u / 2) % i + i) % i + u / 2), n
    };
    u.prototype.relative = function(n) {
        return n -= this._clones.length / 2, this.normalize(n, !0)
    };
    u.prototype.maximum = function(n) {
        var t, u, f, i = this.settings,
            r = this._coordinates.length;
        if (i.loop) r = this._clones.length / 2 + this._items.length - 1;
        else if (i.autoWidth || i.merge) {
            for (t = this._items.length, u = this._items[--t].width(), f = this.$element.width(); t-- && (u += this._items[t].width() + this.settings.margin, !(u > f)););
            r = t + 1
        } else r = i.center ? this._items.length - 1 : this._items.length - i.items;
        return n && (r -= this._clones.length / 2), Math.max(r, 0)
    };
    u.prototype.minimum = function(n) {
        return n ? 0 : this._clones.length / 2
    };
    u.prototype.items = function(n) {
        return n === r ? this._items.slice() : (n = this.normalize(n, !0), this._items[n])
    };
    u.prototype.mergers = function(n) {
        return n === r ? this._mergers.slice() : (n = this.normalize(n, !0), this._mergers[n])
    };
    u.prototype.clones = function(t) {
        var i = this._clones.length / 2,
            f = i + this._items.length,
            u = function(n) {
                return n % 2 == 0 ? f + n / 2 : i - (n + 1) / 2
            };
        return t === r ? n.map(this._clones, function(n, t) {
            return u(t)
        }) : n.map(this._clones, function(n, i) {
            return n === t ? u(i) : null
        })
    };
    u.prototype.speed = function(n) {
        return n !== r && (this._speed = n), this._speed
    };
    u.prototype.coordinates = function(t) {
        var i, f = 1,
            u = t - 1;
        return t === r ? n.map(this._coordinates, n.proxy(function(n, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (f = -1, u = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[u] || 0)) / 2 * f) : i = this._coordinates[u] || 0, i = Math.ceil(i))
    };
    u.prototype.duration = function(n, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - n), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    };
    u.prototype.to = function(n, t) {
        var f = this.current(),
            r = null,
            i = n - this.relative(f),
            s = (i > 0) - (i < 0),
            e = this._items.length,
            o = this.minimum(),
            u = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(i) > e / 2 && (i += s * -1 * e), n = f + i, r = ((n - o) % e + e) % e + o, r !== n && r - i <= u && r - i > 0 && (f = r - i, n = r, this.reset(f))) : this.settings.rewind ? (u += 1, n = (n % u + u) % u) : n = Math.max(o, Math.min(u, n));
        this.speed(this.duration(f, n, t));
        this.current(n);
        this.$element.is(":visible") && this.update()
    };
    u.prototype.next = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) + 1, n)
    };
    u.prototype.prev = function(n) {
        n = n || !1;
        this.to(this.relative(this.current()) - 1, n)
    };
    u.prototype.onTransitionEnd = function(n) {
        if (n !== r && (n.stopPropagation(), (n.target || n.srcElement || n.originalTarget) !== this.$stage.get(0))) return !1;
        this.leave("animating");
        this.trigger("translated")
    };
    u.prototype.viewport = function() {
        var r;
        return this.options.responsiveBaseElement !== t ? r = n(this.options.responsiveBaseElement).width() : t.innerWidth ? r = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? r = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), r
    };
    u.prototype.replace = function(t) {
        this.$stage.empty();
        this._items = [];
        t && (t = t instanceof jQuery ? t : n(t));
        this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector));
        t.filter(function() {
            return 1 === this.nodeType
        }).each(n.proxy(function(n, t) {
            t = this.prepare(t);
            this.$stage.append(t);
            this._items.push(t);
            this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this));
        this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);
        this.invalidate("items")
    };
    u.prototype.add = function(t, i) {
        var u = this.relative(this._current);
        i = i === r ? this._items.length : this.normalize(i, !0);
        t = t instanceof jQuery ? t : n(t);
        this.trigger("add", {
            content: t,
            position: i
        });
        t = this.prepare(t);
        0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1));
        this._items[u] && this.reset(this._items[u].index());
        this.invalidate("items");
        this.trigger("added", {
            content: t,
            position: i
        })
    };
    u.prototype.remove = function(n) {
        n = this.normalize(n, !0);
        n !== r && (this.trigger("remove", {
            content: this._items[n],
            position: n
        }), this._items[n].remove(), this._items.splice(n, 1), this._mergers.splice(n, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: n
        }))
    };
    u.prototype.preloadAutoWidthImages = function(t) {
        t.each(n.proxy(function(t, i) {
            this.enter("pre-loading");
            i = n(i);
            n(new Image).one("load", n.proxy(function(n) {
                i.attr("src", n.target.src);
                i.css("opacity", 1);
                this.leave("pre-loading");
                !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    };
    u.prototype.destroy = function() {
        this.$element.off(".owl.core");
        this.$stage.off(".owl.core");
        n(i).off(".owl.core");
        this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var r in this._plugins) this._plugins[r].destroy();
        this.$stage.children(".cloned").remove();
        this.$stage.unwrap();
        this.$stage.children().contents().unwrap();
        this.$stage.children().unwrap();
        this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    };
    u.prototype.op = function(n, t, i) {
        var r = this.settings.rtl;
        switch (t) {
            case "<":
                return r ? n > i : n < i;
            case ">":
                return r ? n < i : n > i;
            case ">=":
                return r ? n <= i : n >= i;
            case "<=":
                return r ? n >= i : n <= i
        }
    };
    u.prototype.on = function(n, t, i, r) {
        n.addEventListener ? n.addEventListener(t, i, r) : n.attachEvent && n.attachEvent("on" + t, i)
    };
    u.prototype.off = function(n, t, i, r) {
        n.removeEventListener ? n.removeEventListener(t, i, r) : n.detachEvent && n.detachEvent("on" + t, i)
    };
    u.prototype.trigger = function(t, i, r) {
        var o = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            },
            e = n.camelCase(n.grep(["on", t, r], function(n) {
                return n
            }).join("-").toLowerCase()),
            f = n.Event([t, "owl", r || "carousel"].join(".").toLowerCase(), n.extend({
                relatedTarget: this
            }, o, i));
        return this._supress[t] || (n.each(this._plugins, function(n, t) {
            t.onTrigger && t.onTrigger(f)
        }), this.register({
            type: u.Type.Event,
            name: t
        }), this.$element.trigger(f), this.settings && "function" == typeof this.settings[e] && this.settings[e].call(this, f)), f
    };
    u.prototype.enter = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t] === r && (this._states.current[t] = 0);
            this._states.current[t]++
        }, this))
    };
    u.prototype.leave = function(t) {
        n.each([t].concat(this._states.tags[t] || []), n.proxy(function(n, t) {
            this._states.current[t]--
        }, this))
    };
    u.prototype.register = function(t) {
        if (t.type === u.Type.Event) {
            if (n.event.special[t.name] || (n.event.special[t.name] = {}), !n.event.special[t.name].owl) {
                var i = n.event.special[t.name]._default;
                n.event.special[t.name]._default = function(n) {
                    return !i || !i.apply || n.namespace && n.namespace.indexOf("owl") !== -1 ? n.namespace && n.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                };
                n.event.special[t.name].owl = !0
            }
        } else t.type === u.Type.State && (this._states.tags[t.name] = this._states.tags[t.name] ? this._states.tags[t.name].concat(t.tags) : t.tags, this._states.tags[t.name] = n.grep(this._states.tags[t.name], n.proxy(function(i, r) {
            return n.inArray(i, this._states.tags[t.name]) === r
        }, this)))
    };
    u.prototype.suppress = function(t) {
        n.each(t, n.proxy(function(n, t) {
            this._supress[t] = !0
        }, this))
    };
    u.prototype.release = function(t) {
        n.each(t, n.proxy(function(n, t) {
            delete this._supress[t]
        }, this))
    };
    u.prototype.pointer = function(n) {
        var i = {
            x: null,
            y: null
        };
        return n = n.originalEvent || n || t.event, n = n.touches && n.touches.length ? n.touches[0] : n.changedTouches && n.changedTouches.length ? n.changedTouches[0] : n, n.pageX ? (i.x = n.pageX, i.y = n.pageY) : (i.x = n.clientX, i.y = n.clientY), i
    };
    u.prototype.isNumeric = function(n) {
        return !isNaN(parseFloat(n))
    };
    u.prototype.difference = function(n, t) {
        return {
            x: n.x - t.x,
            y: n.y - t.y
        }
    };
    n.fn.owlCarousel = function(t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function() {
            var f = n(this),
                r = f.data("owl.carousel");
            r || (r = new u(this, "object" == typeof t && t), f.data("owl.carousel", r), n.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(t, i) {
                r.register({
                    type: u.Type.Event,
                    name: i
                });
                r.$element.on(i + ".owl.carousel.core", n.proxy(function(n) {
                    n.namespace && n.relatedTarget !== this && (this.suppress([i]), r[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, r))
            }));
            "string" == typeof t && "_" !== t.charAt(0) && r[t].apply(r, i)
        })
    };
    n.fn.owlCarousel.Constructor = u
}(window.Zepto || window.jQuery, window, document),
function(n, t) {
    var i = function(t) {
        this._core = t;
        this._interval = null;
        this._visible = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        };
        this._core.options = n.extend({}, i.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    i.Defaults = {
        autoRefresh: !0,
        autoRefreshInterval: 500
    };
    i.prototype.watch = function() {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(n.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    };
    i.prototype.refresh = function() {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    };
    i.prototype.destroy = function() {
        var n, i;
        t.clearInterval(this._interval);
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoRefresh = i
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this._core = t;
        this._loaded = [];
        this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": n.proxy(function(t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type))
                    for (var i = this._core.settings, f = i.center && Math.ceil(i.items / 2) || i.items, e = i.center && f * -1 || 0, u = (t.property && t.property.value !== r ? t.property.value : this._core.current()) + e, o = this._core.clones().length, s = n.proxy(function(n, t) {
                            this.load(t)
                        }, this); e++ < f;) this.load(o / 2 + this._core.relative(u)), o && n.each(this._core.clones(this._core.relative(u)), s), u++
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    u.Defaults = {
        lazyLoad: !1
    };
    u.prototype.load = function(i) {
        var r = this._core.$stage.children().eq(i),
            u = r && r.find(".owl-lazy");
        !u || n.inArray(r.get(0), this._loaded) > -1 || (u.each(n.proxy(function(i, r) {
            var e, u = n(r),
                f = t.devicePixelRatio > 1 && u.attr("data-src-retina") || u.attr("data-src");
            this._core.trigger("load", {
                element: u,
                url: f
            }, "lazy");
            u.is("img") ? u.one("load.owl.lazy", n.proxy(function() {
                u.css("opacity", 1);
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this)).attr("src", f) : (e = new Image, e.onload = n.proxy(function() {
                u.css({
                    "background-image": 'url("' + f + '")',
                    opacity: "1"
                });
                this._core.trigger("loaded", {
                    element: u,
                    url: f
                }, "lazy")
            }, this), e.src = f)
        }, this)), this._loaded.push(r.get(0)))
    };
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this._core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Lazy = u
}(window.Zepto || window.jQuery, window, document),
function(n) {
    var t = function(i) {
        this._core = i;
        this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && this.update()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && "position" == n.property.name && this.update()
            }, this),
            "loaded.owl.lazy": n.proxy(function(n) {
                n.namespace && this._core.settings.autoHeight && n.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this._core.$element.on(this._handlers)
    };
    t.Defaults = {
        autoHeight: !1,
        autoHeightClass: "owl-height"
    };
    t.prototype.update = function() {
        var t = this._core._current,
            u = t + this._core.settings.items,
            f = this._core.$stage.children().toArray().slice(t, u),
            i = [],
            r = 0;
        n.each(f, function(t, r) {
            i.push(n(r).height())
        });
        r = Math.max.apply(null, i);
        this._core.$stage.parent().height(r).addClass(this._core.settings.autoHeightClass)
    };
    t.prototype.destroy = function() {
        var n, t;
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.AutoHeight = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._videos = {};
        this._playing = null;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.register({
                    type: "state",
                    name: "playing",
                    tags: ["interacting"]
                })
            }, this),
            "resize.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.video && this.isInFullScreen() && n.preventDefault()
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" === n.property.name && this._playing && this.stop()
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, n(t.content)))
                }
            }, this)
        };
        this._core.options = n.extend({}, r.Defaults, this._core.options);
        this._core.$element.on(this._handlers);
        this._core.$element.on("click.owl.video", ".owl-video-play-icon", n.proxy(function(n) {
            this.play(n)
        }, this))
    };
    r.Defaults = {
        video: !1,
        videoHeight: !1,
        videoWidth: !1
    };
    r.prototype.fetch = function(n, t) {
        var u = function() {
                return n.attr("data-vimeo-id") ? "vimeo" : n.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(),
            i = n.attr("data-vimeo-id") || n.attr("data-youtube-id") || n.attr("data-vzaar-id"),
            f = n.attr("data-width") || this._core.settings.videoWidth,
            e = n.attr("data-height") || this._core.settings.videoHeight,
            r = n.attr("href");
        if (!r) throw new Error("Missing video URL.");
        if (i = r.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), i[3].indexOf("youtu") > -1) u = "youtube";
        else if (i[3].indexOf("vimeo") > -1) u = "vimeo";
        else {
            if (!(i[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            u = "vzaar"
        }
        i = i[6];
        this._videos[r] = {
            type: u,
            id: i,
            width: f,
            height: e
        };
        t.attr("data-video", r);
        this.thumbnail(n, this._videos[r])
    };
    r.prototype.thumbnail = function(t, i) {
        var o, s, r, c = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            f = t.find("img"),
            e = "src",
            h = "",
            l = this._core.settings,
            u = function(n) {
                s = '<div class="owl-video-play-icon"><\/div>';
                o = l.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + e + '="' + n + '"><\/div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + n + ')"><\/div>';
                t.after(o);
                t.after(s)
            };
        if (t.wrap('<div class="owl-video-wrapper"' + c + "><\/div>"), this._core.settings.lazyLoad && (e = "data-src", h = "owl-lazy"), f.length) return u(f.attr(e)), f.remove(), !1;
        "youtube" === i.type ? (r = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(r)) : "vimeo" === i.type ? n.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n[0].thumbnail_large;
                u(r)
            }
        }) : "vzaar" === i.type && n.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function(n) {
                r = n.framegrab_url;
                u(r)
            }
        })
    };
    r.prototype.stop = function() {
        this._core.trigger("stop", null, "video");
        this._playing.find(".owl-video-frame").remove();
        this._playing.removeClass("owl-video-playing");
        this._playing = null;
        this._core.leave("playing");
        this._core.trigger("stopped", null, "video")
    };
    r.prototype.play = function(t) {
        var u, o = n(t.target),
            r = o.closest("." + this._core.settings.itemClass),
            i = this._videos[r.attr("data-video")],
            f = i.width || "100%",
            e = i.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === i.type ? u = '<iframe width="' + f + '" height="' + e + '" src="//www.youtube.com/embed/' + i.id + "?autoplay=1&rel=0&v=" + i.id + '" frameborder="0" allowfullscreen><\/iframe>' : "vimeo" === i.type ? u = '<iframe src="//player.vimeo.com/video/' + i.id + '?autoplay=1" width="' + f + '" height="' + e + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen><\/iframe>' : "vzaar" === i.type && (u = '<iframe frameborder="0"height="' + e + '"width="' + f + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + i.id + '/player?autoplay=true"><\/iframe>'), n('<div class="owl-video-frame">' + u + "<\/div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    };
    r.prototype.isInFullScreen = function() {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && n(t).parent().hasClass("owl-video-frame")
    };
    r.prototype.destroy = function() {
        var n, t;
        this._core.$element.off("click.owl.video");
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    var u = function(t) {
        this.core = t;
        this.core.options = n.extend({}, u.Defaults, this.core.options);
        this.swapping = !0;
        this.previous = r;
        this.next = r;
        this.handlers = {
            "change.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && (this.previous = this.core.current(), this.next = n.property.value)
            }, this),
            "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": n.proxy(function(n) {
                n.namespace && (this.swapping = "translated" == n.type)
            }, this),
            "translate.owl.carousel": n.proxy(function(n) {
                n.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        };
        this.core.$element.on(this.handlers)
    };
    u.Defaults = {
        animateOut: !1,
        animateIn: !1
    };
    u.prototype.swap = function() {
        if (1 === this.core.settings.items && n.support.animation && n.support.transition) {
            this.core.speed(0);
            var t, i = n.proxy(this.clear, this),
                f = this.core.$stage.children().eq(this.previous),
                e = this.core.$stage.children().eq(this.next),
                r = this.core.settings.animateIn,
                u = this.core.settings.animateOut;
            this.core.current() !== this.previous && (u && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), f.one(n.support.animation.end, i).css({
                left: t + "px"
            }).addClass("animated owl-animated-out").addClass(u)), r && e.one(n.support.animation.end, i).addClass("animated owl-animated-in").addClass(r))
        }
    };
    u.prototype.clear = function(t) {
        n(t.target).css({
            left: ""
        }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut);
        this.core.onTransitionEnd()
    };
    u.prototype.destroy = function() {
        var n, t;
        for (n in this.handlers) this.core.$element.off(n, this.handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Animate = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i) {
    var r = function(t) {
        this._core = t;
        this._timeout = null;
        this._paused = !1;
        this._handlers = {
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "settings" === n.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : n.namespace && "position" === n.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.autoplay && this.play()
            }, this),
            "play.owl.autoplay": n.proxy(function(n, t, i) {
                n.namespace && this.play(t, i)
            }, this),
            "stop.owl.autoplay": n.proxy(function(n) {
                n.namespace && this.stop()
            }, this),
            "mouseover.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "mouseleave.owl.autoplay": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this),
            "touchstart.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this),
            "touchend.owl.core": n.proxy(function() {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        };
        this._core.$element.on(this._handlers);
        this._core.options = n.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    };
    r.prototype.play = function() {
        this._paused = !1;
        this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval())
    };
    r.prototype._getNextTimeout = function(r, u) {
        return this._timeout && t.clearTimeout(this._timeout), t.setTimeout(n.proxy(function() {
            this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(u || this._core.settings.autoplaySpeed)
        }, this), r || this._core.settings.autoplayTimeout)
    };
    r.prototype._setAutoPlayInterval = function() {
        this._timeout = this._getNextTimeout()
    };
    r.prototype.stop = function() {
        this._core.is("rotating") && (t.clearTimeout(this._timeout), this._core.leave("rotating"))
    };
    r.prototype.pause = function() {
        this._core.is("rotating") && (this._paused = !0)
    };
    r.prototype.destroy = function() {
        var n, t;
        this.stop();
        for (n in this._handlers) this._core.$element.off(n, this._handlers[n]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document),
function(n) {
    "use strict";
    var t = function(i) {
        this._core = i;
        this._initialized = !1;
        this._pages = [];
        this._controls = {};
        this._templates = [];
        this.$element = this._core.$element;
        this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        };
        this._handlers = {
            "prepared.owl.carousel": n.proxy(function(t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + n(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "<\/div>")
            }, this),
            "added.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 0, this._templates.pop())
            }, this),
            "remove.owl.carousel": n.proxy(function(n) {
                n.namespace && this._core.settings.dotsData && this._templates.splice(n.position, 1)
            }, this),
            "changed.owl.carousel": n.proxy(function(n) {
                n.namespace && "position" == n.property.name && this.draw()
            }, this),
            "initialized.owl.carousel": n.proxy(function(n) {
                n.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this),
            "refreshed.owl.carousel": n.proxy(function(n) {
                n.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        };
        this._core.options = n.extend({}, t.Defaults, this._core.options);
        this.$element.on(this._handlers)
    };
    t.Defaults = {
        nav: !1,
        navText: ["prev", "next"],
        navSpeed: !1,
        navElement: "div",
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    };
    t.prototype.initialize = function() {
        var i, t = this._core.settings;
        this._controls.$relative = (t.navContainer ? n(t.navContainer) : n("<div>").addClass(t.navContainerClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$previous = n("<" + t.navElement + ">").addClass(t.navClass[0]).html(t.navText[0]).prependTo(this._controls.$relative).on("click", n.proxy(function() {
            this.prev(t.navSpeed)
        }, this));
        this._controls.$next = n("<" + t.navElement + ">").addClass(t.navClass[1]).html(t.navText[1]).appendTo(this._controls.$relative).on("click", n.proxy(function() {
            this.next(t.navSpeed)
        }, this));
        t.dotsData || (this._templates = [n("<div>").addClass(t.dotClass).append(n("<span>")).prop("outerHTML")]);
        this._controls.$absolute = (t.dotsContainer ? n(t.dotsContainer) : n("<div>").addClass(t.dotsClass).appendTo(this.$element)).addClass("disabled");
        this._controls.$absolute.on("click", "div", n.proxy(function(i) {
            var r = n(i.target).parent().is(this._controls.$absolute) ? n(i.target).index() : n(i.target).parent().index();
            i.preventDefault();
            this.to(r, t.dotsSpeed)
        }, this));
        for (i in this._overrides) this._core[i] = n.proxy(this[i], this)
    };
    t.prototype.destroy = function() {
        var n, r, t, i;
        for (n in this._handlers) this.$element.off(n, this._handlers[n]);
        for (r in this._controls) this._controls[r].remove();
        for (i in this.overides) this._core[i] = this._overrides[i];
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    };
    t.prototype.update = function() {
        var t, i, f, r = this._core.clones().length / 2,
            o = r + this._core.items().length,
            u = this._core.maximum(!0),
            n = this._core.settings,
            e = n.center || n.autoWidth || n.dotsData ? 1 : n.dotsEach || n.items;
        if ("page" !== n.slideBy && (n.slideBy = Math.min(n.slideBy, n.items)), n.dots || "page" == n.slideBy)
            for (this._pages = [], t = r, i = 0, f = 0; t < o; t++) {
                if (i >= e || 0 === i) {
                    if (this._pages.push({
                            start: Math.min(u, t - r),
                            end: t - r + e - 1
                        }), Math.min(u, t - r) === u) break;
                    i = 0;
                    ++f
                }
                i += this._core.mergers(this._core.relative(t))
            }
    };
    t.prototype.draw = function() {
        var i, t = this._core.settings,
            r = this._core.items().length <= t.items,
            u = this._core.relative(this._core.current()),
            f = t.loop || t.rewind;
        this._controls.$relative.toggleClass("disabled", !t.nav || r);
        t.nav && (this._controls.$previous.toggleClass("disabled", !f && u <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !f && u >= this._core.maximum(!0)));
        this._controls.$absolute.toggleClass("disabled", !t.dots || r);
        t.dots && (i = this._pages.length - this._controls.$absolute.children().length, t.dotsData && 0 !== i ? this._controls.$absolute.html(this._templates.join("")) : i > 0 ? this._controls.$absolute.append(new Array(i + 1).join(this._templates[0])) : i < 0 && this._controls.$absolute.children().slice(i).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(n.inArray(this.current(), this._pages)).addClass("active"))
    };
    t.prototype.onTrigger = function(t) {
        var i = this._core.settings;
        t.page = {
            index: n.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    };
    t.prototype.current = function() {
        var t = this._core.relative(this._core.current());
        return n.grep(this._pages, n.proxy(function(n) {
            return n.start <= t && n.end >= t
        }, this)).pop()
    };
    t.prototype.getPosition = function(t) {
        var i, r, u = this._core.settings;
        return "page" == u.slideBy ? (i = n.inArray(this.current(), this._pages), r = this._pages.length, t ? ++i : --i, i = this._pages[(i % r + r) % r].start) : (i = this._core.relative(this._core.current()), r = this._core.items().length, t ? i += u.slideBy : i -= u.slideBy), i
    };
    t.prototype.next = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    };
    t.prototype.prev = function(t) {
        n.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    };
    t.prototype.to = function(t, i, r) {
        var u;
        !r && this._pages.length ? (u = this._pages.length, n.proxy(this._overrides.to, this._core)(this._pages[(t % u + u) % u].start, i)) : n.proxy(this._overrides.to, this._core)(t, i)
    };
    n.fn.owlCarousel.Constructor.Plugins.Navigation = t
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    "use strict";
    var u = function(i) {
        this._core = i;
        this._hashes = {};
        this.$element = this._core.$element;
        this._handlers = {
            "initialized.owl.carousel": n.proxy(function(i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && n(t).trigger("hashchange.owl.navigation")
            }, this),
            "prepared.owl.carousel": n.proxy(function(t) {
                if (t.namespace) {
                    var i = n(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = t.content
                }
            }, this),
            "changed.owl.carousel": n.proxy(function(i) {
                if (i.namespace && "position" === i.property.name) {
                    var u = this._core.items(this._core.relative(this._core.current())),
                        r = n.map(this._hashes, function(n, t) {
                            return n === u ? t : null
                        }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        };
        this._core.options = n.extend({}, u.Defaults, this._core.options);
        this.$element.on(this._handlers);
        n(t).on("hashchange.owl.navigation", n.proxy(function() {
            var i = t.location.hash.substring(1),
                u = this._core.$stage.children(),
                n = this._hashes[i] && u.index(this._hashes[i]);
            n !== r && n !== this._core.current() && this._core.to(this._core.relative(n), !1, !0)
        }, this))
    };
    u.Defaults = {
        URLhashListener: !1
    };
    u.prototype.destroy = function() {
        var i, r;
        n(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (r in Object.getOwnPropertyNames(this)) "function" != typeof this[r] && (this[r] = null)
    };
    n.fn.owlCarousel.Constructor.Plugins.Hash = u
}(window.Zepto || window.jQuery, window, document),
function(n, t, i, r) {
    function u(t, i) {
        var u = !1,
            f = t.charAt(0).toUpperCase() + t.slice(1);
        return n.each((t + " " + h.join(f + " ") + f).split(" "), function(n, t) {
            if (s[t] !== r) return u = !i || t, !1
        }), u
    }

    function e(n) {
        return u(n, !0)
    }
    var s = n("<support>").get(0).style,
        h = "Webkit Moz O ms".split(" "),
        o = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        },
        f = {
            csstransforms: function() {
                return !!u("transform")
            },
            csstransforms3d: function() {
                return !!u("perspective")
            },
            csstransitions: function() {
                return !!u("transition")
            },
            cssanimations: function() {
                return !!u("animation")
            }
        };
    f.csstransitions() && (n.support.transition = new String(e("transition")), n.support.transition.end = o.transition.end[n.support.transition]);
    f.cssanimations() && (n.support.animation = new String(e("animation")), n.support.animation.end = o.animation.end[n.support.animation]);
    f.csstransforms() && (n.support.transform = new String(e("transform")), n.support.transform3d = f.csstransforms3d())
}(window.Zepto || window.jQuery, window, document);
! function(n) {
    var t, i, r = n.event;
    t = r.special.debouncedresize = {
        setup: function() {
            n(this).on("resize", t.handler)
        },
        teardown: function() {
            n(this).off("resize", t.handler)
        },
        handler: function(n, u) {
            var e = this,
                o = arguments,
                f = function() {
                    n.type = "debouncedresize";
                    r.dispatch.apply(e, o)
                };
            i && clearTimeout(i);
            u ? f() : i = setTimeout(f, t.threshold)
        },
        threshold: 150
    }
}(jQuery);
jQuery.fn.exists = function() {
    return this.length > 0
};
jQuery.fn.verticalAlign = function() {
    return this.css("margin-top", ($(this).parent().height() - $(this).height()) / 2 + "px")
};
var lg = "lg",
    md = "md",
    sm = "sm",
    xs = "xs",
    getResponsiveTag = function() {
        var n = window.getComputedStyle(document.body, ":after").getPropertyValue("content");
        return n.replace(/"/g, "")
    };
if (String.jformat = String.prototype.format = function() {
        var n = this,
            t = 0;
        for (typeof this == "function" && (n = arguments[0], t++); t < arguments.length; t++) n = n.replace(/\{\d+?\}/, arguments[t]);
        return n
    }, $(function() {
        HighlightControlToValidate();
        $(".btnFormSubmit").click(function() {
            FormValidation()
        });
        $(".goToTop").exists() && $(".goToTop").click(function() {
            $("html, body").animate({
                scrollTop: "0"
            }, 500)
        });
        $('A[rel="_blank"], A[rel="external"], A[data-linktarget="_blank"], A[data-target="_blank"]').click(function() {
            return window.open($(this).attr("href")), !1
        });
        $("textarea[data-maxlength]").exists() && $("textarea[data-maxlength]").each(function() {
            $(this).attr("maxlength", $(this).attr("data-maxlength"))
        });
        $.fn.maxlength && $("textarea[data-maxlength]").maxlength({
            threshold: 100,
            placement: "top-right",
            validate: !0,
            warningClass: "badge badge-success",
            limitReachedClass: "badge badge-important"
        });
        $(".toolTip").exists() && $(".toolTip").qtip({
            style: {
                classes: "qtip-bootstrap qtip-shadow"
            },
            position: {
                my: "bottom center",
                at: "top center",
                viewport: $(window)
            },
            show: {
                effect: function() {
                    $(this).fadeTo(300, 1)
                }
            },
            hide: {
                effect: function() {
                    $(this).slideUp("fast")
                }
            }
        })
    }), $(".form-control-Url").length > 0) $(".form-control-Url").on("blur", function() {
    var t = $(this),
        n = t.val();
    n && !n.match(/^http([s]?):\/\/.*/) && t.val("http://" + n)
});
$(window).scroll(function() {
    var n = $(window).scrollTop();
    $(".goToTop").exists() && (n > 50 ? $(".goToTop").fadeIn(400) : $(".goToTop").fadeOut(400))
});
$(function() {
    if ($(".faq-tab-navigation").exists() && ($(".faq-tab-navigation .faq-tab-pane").hide(), $(".faq-tab-navigation .faq-tab-head a").on("click", function(n) {
            $(".faq-tab-navigation .faq-tab-head a.active").removeClass("active");
            $(".faq-tab-navigation .faq-tab-pane:visible").hide();
            var t = this.hash.replace("#", ".");
            $(t).show();
            $(this).addClass("active");
            n.preventDefault()
        }).filter(":first").click()), $(".toggle-search").click(function() {
            $("#target").slideToggle("slow")
        }), $(".popup").length > 0) {
        $(".popup-trigger").on("click", function() {
            var n = $(this).data("popup");
            $(".fs-overlay, ." + n).fadeIn();
            $("html,body").css("overflow", "hidden")
        });
        $(".fs-overlay, .popup .popup-close").on("click", function() {
            $(".fs-overlay, .fs-overlay-popup").fadeOut();
            $("html,body").css("overflow", "visible")
        })
    }
    $(".block-tags-tabs").length > 0 && $("block-tags-tabs li").click(function() {
        $(".current").removeClass("current");
        $(this).addClass("current")
    });
    $(".section img").onImagesLoad(function() {
        (new WOW).init()
    });
    $(".equal-height-item").length > 0 && $(".equal-height-item").matchHeight({
        byRow: !0
    });
    $(window).bind("debouncedresize", function() {
        ContentAdjustment()
    })
});
$(window).on("scroll", function() {
    var n = $(window).scrollTop();
    n >= 80 ? ($("#header").addClass("scrolled-shadow"), $("#header .logo img").attr("src", "/content/images/logo.png")) : $("#header").removeClass("scrolled-shadow")
});
$(".scroll-down-link").exists() && $(".scroll-down-link").click(function() {
    $("html, body").animate({
        scrollTop: $("#scroll").offset().top
    }, 1e3)
});
$(window).on("load", function() {});
$(function() {
    function f() {
        r += 1;
        var n = "<div id='AppliancesRow_" + r + "' class='AppliancesRow'><ul class='ulAppliancesRow'>";
        n += "<li><select class='ddlAppliance'><option value='0'>--- Select ---<\/option>";
        $.each(u, function() {
            n += "<option value='" + this.Id + "'>" + this.Category + "<\/option>"
        });
        n += "<\/select><\/li>";
        n += "<li><select class='ddlPower'><\/select><div class='LoadingddlPower'><\/div><\/li>";
        n += "<li class='Number'><input type='number' min='1' max='90' class='tbNumber' value='' /><\/li>";
        n += "<li><span class='Removed'>Delete<\/span><\/li>";
        n += "<\/ul><\/div>";
        $(n).appendTo(t).hide().fadeIn(500)
    }

    function o() {
        var n;
        return $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Power-Need-Calculator.aspx/GetAppliancesData",
            dataType: "json",
            async: !1,
            beforeSend: function() {},
            success: function(t) {
                n = t.d
            },
            error: function() {}
        }), n
    }

    function s(n) {
        var t, i = String.jformat("{'idRaw':'{0}'}", n);
        return $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Power-Need-Calculator.aspx/GetPowerData",
            data: i,
            dataType: "json",
            async: !1,
            beforeSend: function() {},
            success: function(n) {
                t = n.d
            },
            error: function() {}
        }), t
    }

    function e() {
        var t;
        n = 0;
        var u = $(".AppliancesRow"),
            i = $("#ResultText"),
            r = $("#ResultTextMobile");
        $(i).empty();
        $(r).empty();
        $.each(u, function() {
            var t = $(this),
                i = $(t).find(".ddlPower").val(),
                r = $(t).find(".tbNumber").val();
            n += i * r
        });
        n > 0 ? (t = h(n), $(i).empty().hide().text(t + " VA").fadeIn(500), $(r).empty().hide().text(t + " VA").fadeIn(500)) : alert("Please select Appliance, Power, and enter no of equipment")
    }

    function h(n) {
        var t, i = String.jformat("{'powerUsedRaw':'{0}'}", n);
        return $.ajax({
            type: "POST",
            contentType: "application/json; charset=utf-8",
            url: "/Power-Need-Calculator.aspx/GetTotalPowerNeed",
            data: i,
            dataType: "json",
            async: !1,
            beforeSend: function() {},
            success: function(n) {
                t = n.d
            },
            error: function() {}
        }), t
    }
    var r = 0,
        n = 0,
        t, u, i;
    if ($(".PowerCalculatorWrapper").length > 0) {
        for (t = $("#AppliancesRowWrapper"), u = o(), $(t).empty(), i = 0; i < 6; i++) f();
        $("#btnAddMoreAppliances").on("click", function() {
            f()
        });
        $("#AppliancesRowWrapper").on("change", ".ddlAppliance", function() {
            var n = $(this),
                t = $(n).parent().parent(),
                i = $(t).find(".ddlPower"),
                r = $(t).find(".LoadingddlPower"),
                f = s(n.val(), r),
                u = "";
            $.each(f, function() {
                u += "<option value='" + this.PowerConsumption + "'>" + this.Category + "<\/option>"
            });
            $(i).empty();
            $(u).appendTo(i);
            $(r).empty()
        });
        $("#AppliancesRowWrapper").on("click", ".Removed", function() {
            var n = $(this),
                t = $(n).parent().parent().parent();
            $(t).remove();
            e()
        });
        $("#btnCalculatePower, #btnCalculatePowerMobile").on("click", function() {
            e()
        })
    }
})
