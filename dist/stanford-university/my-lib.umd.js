var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __require = typeof require !== "undefined" ? require : (x) => {
  throw new Error('Dynamic require of "' + x + '" is not supported');
};
(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(exports, require("vue")) : typeof define === "function" && define.amd ? define(["exports", "vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.ViteWasteWidget = {}, global.Vue));
})(this, function(exports2, vue) {
  "use strict";
  var HelloWorld_vue_vue_type_style_index_0_scoped_true_lang = "\na[data-v-49ce35c8] {\n  color: #42b983;\n}\n";
  vue.pushScopeId("data-v-49ce35c8");
  const _hoisted_1 = /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Recommended IDE setup: "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://code.visualstudio.com/",
      target: "_blank"
    }, "VSCode"),
    /* @__PURE__ */ vue.createTextVNode(" + "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://github.com/johnsoncodehk/volar",
      target: "_blank"
    }, "Volar")
  ], -1);
  const _hoisted_2 = /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://vitejs.dev/guide/features.html",
      target: "_blank"
    }, " Vite Documentation "),
    /* @__PURE__ */ vue.createTextVNode(" | "),
    /* @__PURE__ */ vue.createElementVNode("a", {
      href: "https://v3.vuejs.org/",
      target: "_blank"
    }, "Vue 3 Documentation")
  ], -1);
  const _hoisted_3 = /* @__PURE__ */ vue.createElementVNode("p", null, [
    /* @__PURE__ */ vue.createTextVNode(" Edit "),
    /* @__PURE__ */ vue.createElementVNode("code", null, "components/HelloWorld.vue"),
    /* @__PURE__ */ vue.createTextVNode(" to test hot module replacement. ")
  ], -1);
  vue.popScopeId();
  const _sfc_main$1 = /* @__PURE__ */ vue.defineComponent({
    props: {
      msg: String
    },
    setup(__props) {
      const count = vue.ref(0);
      return (_ctx, _cache) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, null, [
          vue.createElementVNode("h1", null, vue.toDisplayString(__props.msg) + " hehe", 1),
          _hoisted_1,
          _hoisted_2,
          vue.createElementVNode("button", {
            type: "button",
            onClick: _cache[0] || (_cache[0] = ($event) => count.value++)
          }, "count is: " + vue.toDisplayString(count.value), 1),
          _hoisted_3
        ], 64);
      };
    }
  });
  _sfc_main$1.__scopeId = "data-v-49ce35c8";
  function g(e) {
    return [null, void 0, false].indexOf(e) !== -1;
  }
  function b(e) {
    var u = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
    return u ? String(e).toLowerCase().trim() : String(e).normalize("NFD").replace(/(?:[\^`\xA8\xAF\xB4\xB7\xB8\u02B0-\u034E\u0350-\u0357\u035D-\u0362\u0374\u0375\u037A\u0384\u0385\u0483-\u0487\u0559\u0591-\u05A1\u05A3-\u05BD\u05BF\u05C1\u05C2\u05C4\u064B-\u0652\u0657\u0658\u06DF\u06E0\u06E5\u06E6\u06EA-\u06EC\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F5\u0818\u0819\u08E3-\u08FE\u093C\u094D\u0951-\u0954\u0971\u09BC\u09CD\u0A3C\u0A4D\u0ABC\u0ACD\u0AFD-\u0AFF\u0B3C\u0B4D\u0B55\u0BCD\u0C4D\u0CBC\u0CCD\u0D3B\u0D3C\u0D4D\u0DCA\u0E47-\u0E4C\u0E4E\u0EBA\u0EC8-\u0ECC\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F82-\u0F84\u0F86\u0F87\u0FC6\u1037\u1039\u103A\u1063\u1064\u1069-\u106D\u1087-\u108D\u108F\u109A\u109B\u135D-\u135F\u17C9-\u17D3\u17DD\u1939-\u193B\u1A75-\u1A7C\u1A7F\u1AB0-\u1ABD\u1B34\u1B44\u1B6B-\u1B73\u1BAA\u1BAB\u1C36\u1C37\u1C78-\u1C7D\u1CD0-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1D2C-\u1D6A\u1DC4-\u1DCF\u1DF5-\u1DF9\u1DFD-\u1DFF\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2CEF-\u2CF1\u2E2F\u302A-\u302F\u3099-\u309C\u30FC\uA66F\uA67C\uA67D\uA67F\uA69C\uA69D\uA6F0\uA6F1\uA700-\uA721\uA788-\uA78A\uA7F8\uA7F9\uA8C4\uA8E0-\uA8F1\uA92B-\uA92E\uA953\uA9B3\uA9C0\uA9E5\uAA7B-\uAA7D\uAABF-\uAAC2\uAAF6\uAB5B-\uAB5F\uAB69-\uAB6B\uABEC\uABED\uFB1E\uFE20-\uFE2F\uFF3E\uFF40\uFF70\uFF9E\uFF9F\uFFE3]|\uD800\uDEE0|\uD802[\uDEE5\uDEE6]|\uD803[\uDD22-\uDD27\uDF46-\uDF50]|\uD804[\uDCB9\uDCBA\uDD33\uDD34\uDD73\uDDC0\uDDCA-\uDDCC\uDE35\uDE36\uDEE9\uDEEA\uDF3C\uDF4D\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC42\uDC46\uDCC2\uDCC3\uDDBF\uDDC0\uDE3F\uDEB6\uDEB7\uDF2B]|\uD806[\uDC39\uDC3A\uDD3D\uDD3E\uDD43\uDDE0\uDE34\uDE47\uDE99]|\uD807[\uDC3F\uDD42\uDD44\uDD45\uDD97]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF8F-\uDF9F\uDFF0\uDFF1]|\uD834[\uDD67-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD]|\uD838[\uDD30-\uDD36\uDEEC-\uDEEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD46\uDD48-\uDD4A])/g, "").toLowerCase().trim();
  }
  function h(e) {
    return (h = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e2) {
      return typeof e2;
    } : function(e2) {
      return e2 && typeof Symbol == "function" && e2.constructor === Symbol && e2 !== Symbol.prototype ? "symbol" : typeof e2;
    })(e);
  }
  function m(e, u) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      u && (l = l.filter(function(u2) {
        return Object.getOwnPropertyDescriptor(e, u2).enumerable;
      })), t.push.apply(t, l);
    }
    return t;
  }
  function D(e) {
    for (var u = 1; u < arguments.length; u++) {
      var t = arguments[u] != null ? arguments[u] : {};
      u % 2 ? m(Object(t), true).forEach(function(u2) {
        y(e, u2, t[u2]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : m(Object(t)).forEach(function(u2) {
        Object.defineProperty(e, u2, Object.getOwnPropertyDescriptor(t, u2));
      });
    }
    return e;
  }
  function y(e, u, t) {
    return u in e ? Object.defineProperty(e, u, { value: t, enumerable: true, configurable: true, writable: true }) : e[u] = t, e;
  }
  function O(a, n, r) {
    var i = vue.toRefs(a), o = i.options, s = i.mode, c = i.trackBy, v = i.limit, p = i.hideSelected, d = i.createTag, f = i.label, m2 = i.appendNewTag, O2 = i.multipleLabel, F2 = i.object, C2 = i.loading, S2 = i.delay, A2 = i.resolveOnLoad, E2 = i.minChars, B2 = i.filterResults, P2 = i.clearOnSearch, L2 = i.clearOnSelect, k = i.valueProp, w = i.canDeselect, q = i.max, j = i.strict, x = i.closeOnSelect, I = i.groups, T = (i.groupLabel, i.groupOptions), _ = i.groupHideEmpty, V = i.groupSelect, R = r.iv, M = r.ev, $ = r.search, H = r.clearSearch, N = r.update, G = r.pointer, K = r.clearPointer, W = r.blur, U = r.deactivate, z = vue.ref([]), J = vue.ref([]), Q = vue.ref(false), X = vue.computed(function() {
      if (I.value) {
        var e = J.value || [], u = [];
        return e.forEach(function(e2) {
          Ce(e2[T.value]).forEach(function(t2) {
            u.push(Object.assign({}, t2, e2.disabled ? { disabled: true } : {}));
          });
        }), u;
      }
      var t = Ce(J.value || []);
      return z.value.length && (t = t.concat(z.value)), t;
    }), Y = vue.computed(function() {
      return I.value ? Oe((J.value || []).map(function(e) {
        var u, t = Ce(e[T.value]);
        return D(D({}, e), {}, (y(u = { group: true }, T.value, Fe(t, false).map(function(u2) {
          return Object.assign({}, u2, e.disabled ? { disabled: true } : {});
        })), y(u, "__VISIBLE__", Fe(t).map(function(u2) {
          return Object.assign({}, u2, e.disabled ? { disabled: true } : {});
        })), u));
      })) : [];
    }), Z = vue.computed(function() {
      var e = X.value;
      return ae.value.length && (e = ae.value.concat(e)), e = Fe(e), v.value > 0 && (e = e.slice(0, v.value)), e;
    }), ee = vue.computed(function() {
      switch (s.value) {
        case "single":
          return !g(R.value[k.value]);
        case "multiple":
        case "tags":
          return !g(R.value) && R.value.length > 0;
      }
    }), ue = vue.computed(function() {
      return O2 !== void 0 && O2.value !== void 0 ? O2.value(R.value) : R.value && R.value.length > 1 ? "".concat(R.value.length, " options selected") : "1 option selected";
    }), te = vue.computed(function() {
      return !X.value.length && !Q.value && !ae.value.length;
    }), le = vue.computed(function() {
      return X.value.length > 0 && Z.value.length == 0 && ($.value && I.value || !I.value);
    }), ae = vue.computed(function() {
      var e;
      return d.value !== false && $.value ? me($.value) !== -1 ? [] : [(e = {}, y(e, k.value, $.value), y(e, f.value, $.value), y(e, c.value, $.value), e)] : [];
    }), ne = vue.computed(function() {
      switch (s.value) {
        case "single":
          return null;
        case "multiple":
        case "tags":
          return [];
      }
    }), re = vue.computed(function() {
      return C2.value || Q.value;
    }), ie = function(e) {
      switch (h(e) !== "object" && (e = he(e)), s.value) {
        case "single":
          N(e);
          break;
        case "multiple":
        case "tags":
          N(R.value.concat(e));
      }
      n.emit("select", se(e), e);
    }, oe = function(e) {
      switch (h(e) !== "object" && (e = he(e)), s.value) {
        case "single":
          ve();
          break;
        case "tags":
        case "multiple":
          N(Array.isArray(e) ? R.value.filter(function(u) {
            return e.map(function(e2) {
              return e2[k.value];
            }).indexOf(u[k.value]) === -1;
          }) : R.value.filter(function(u) {
            return u[k.value] != e[k.value];
          }));
      }
      n.emit("deselect", se(e), e);
    }, se = function(e) {
      return F2.value ? e : e[k.value];
    }, ce = function(e) {
      oe(e);
    }, ve = function() {
      n.emit("clear"), N(ne.value);
    }, pe = function(e) {
      if (e.group !== void 0)
        return s.value !== "single" && (be(e[T.value]) && e[T.value].length);
      switch (s.value) {
        case "single":
          return !g(R.value) && R.value[k.value] == e[k.value];
        case "tags":
        case "multiple":
          return !g(R.value) && R.value.map(function(e2) {
            return e2[k.value];
          }).indexOf(e[k.value]) !== -1;
      }
    }, de = function(e) {
      return e.disabled === true;
    }, fe = function() {
      return !(q === void 0 || q.value === -1 || !ee.value && q.value > 0) && R.value.length >= q.value;
    }, ge = function(e) {
      return e.find(function(e2) {
        return !pe(e2) && !e2.disabled;
      }) === void 0;
    }, be = function(e) {
      return e.find(function(e2) {
        return !pe(e2);
      }) === void 0;
    }, he = function(e) {
      return X.value[X.value.map(function(e2) {
        return String(e2[k.value]);
      }).indexOf(String(e))];
    }, me = function(e) {
      return X.value.map(function(e2) {
        return e2[c.value];
      }).indexOf(e);
    }, De = function(e) {
      return ["tags", "multiple"].indexOf(s.value) !== -1 && p.value && pe(e);
    }, ye = function(e) {
      z.value.push(e);
    }, Oe = function(e) {
      return _.value ? e.filter(function(e2) {
        return $.value ? e2.__VISIBLE__.length : e2[T.value].length;
      }) : e.filter(function(e2) {
        return !$.value || e2.__VISIBLE__.length;
      });
    }, Fe = function(e) {
      var u = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1], t = e;
      return $.value && B2.value && (t = t.filter(function(e2) {
        return b(e2[c.value], j.value).indexOf(b($.value, j.value)) !== -1;
      })), p.value && u && (t = t.filter(function(e2) {
        return !De(e2);
      })), t;
    }, Ce = function(e) {
      var u, t = e;
      return u = t, Object.prototype.toString.call(u) === "[object Object]" && (t = Object.keys(t).map(function(e2) {
        var u2, l = t[e2];
        return y(u2 = {}, k.value, e2), y(u2, c.value, l), y(u2, f.value, l), u2;
      })), t = t.map(function(e2) {
        var u2;
        return h(e2) === "object" ? e2 : (y(u2 = {}, k.value, e2), y(u2, c.value, e2), y(u2, f.value, e2), u2);
      });
    }, Se = function() {
      g(M.value) || (R.value = Ee(M.value));
    }, Ae = function(e) {
      Q.value = true, o.value($.value).then(function(u) {
        J.value = u, typeof e == "function" && e(u), Q.value = false;
      });
    }, Ee = function(e) {
      return g(e) ? s.value === "single" ? {} : [] : F2.value ? e : s.value === "single" ? he(e) || {} : e.filter(function(e2) {
        return !!he(e2);
      }).map(function(e2) {
        return he(e2);
      });
    };
    if (s.value !== "single" && !g(M.value) && !Array.isArray(M.value))
      throw new Error('v-model must be an array when using "'.concat(s.value, '" mode'));
    return o && typeof o.value == "function" ? A2.value ? Ae(Se) : F2.value == 1 && Se() : (J.value = o.value, Se()), S2.value > -1 && vue.watch($, function(e) {
      e.length < E2.value || (Q.value = true, P2.value && (J.value = []), setTimeout(function() {
        e == $.value && o.value($.value).then(function(u) {
          e == $.value && (J.value = u, G.value = Z.value.filter(function(e2) {
            return e2.disabled !== true;
          })[0] || null, Q.value = false);
        });
      }, S2.value));
    }, { flush: "sync" }), vue.watch(M, function(e) {
      var u, t, l;
      if (g(e))
        R.value = Ee(e);
      else
        switch (s.value) {
          case "single":
            (F2.value ? e[k.value] != R.value[k.value] : e != R.value[k.value]) && (R.value = Ee(e));
            break;
          case "multiple":
          case "tags":
            u = F2.value ? e.map(function(e2) {
              return e2[k.value];
            }) : e, t = R.value.map(function(e2) {
              return e2[k.value];
            }), l = t.slice().sort(), u.length === t.length && u.slice().sort().every(function(e2, u2) {
              return e2 === l[u2];
            }) || (R.value = Ee(e));
        }
    }, { deep: true }), typeof a.options != "function" && vue.watch(o, function(e, u) {
      J.value = a.options, Object.keys(R.value).length || Se(), function() {
        if (ee.value)
          if (s.value === "single") {
            var e2 = he(R.value[k.value])[f.value];
            R.value[f.value] = e2, F2.value && (M.value[f.value] = e2);
          } else
            R.value.forEach(function(e3, u2) {
              var t = he(R.value[u2][k.value])[f.value];
              R.value[u2][f.value] = t, F2.value && (M.value[u2][f.value] = t);
            });
      }();
    }), { fo: Z, filteredOptions: Z, hasSelected: ee, multipleLabelText: ue, eo: X, extendedOptions: X, fg: Y, filteredGroups: Y, noOptions: te, noResults: le, resolving: Q, busy: re, select: ie, deselect: oe, remove: ce, clear: ve, isSelected: pe, isDisabled: de, isMax: fe, getOption: he, handleOptionClick: function(e) {
      if (!de(e)) {
        switch (s.value) {
          case "single":
            if (pe(e))
              return void (w.value && oe(e));
            W(), ie(e);
            break;
          case "multiple":
            if (pe(e))
              return void oe(e);
            if (fe())
              return;
            ie(e), L2.value && H(), p.value && K(), x.value && W();
            break;
          case "tags":
            if (pe(e))
              return void oe(e);
            if (fe())
              return;
            he(e[k.value]) === void 0 && d.value && (n.emit("tag", e[k.value]), m2.value && ye(e), H()), L2.value && H(), ie(e), p.value && K(), x.value && W();
        }
        x.value && U();
      }
    }, handleGroupClick: function(e) {
      if (!de(e) && s.value !== "single" && V.value) {
        switch (s.value) {
          case "multiple":
          case "tags":
            ge(e[T.value]) ? oe(e[T.value]) : ie(e[T.value].filter(function(e2) {
              return R.value.map(function(e3) {
                return e3[k.value];
              }).indexOf(e2[k.value]) === -1;
            }).filter(function(e2) {
              return !e2.disabled;
            }).filter(function(e2, u) {
              return R.value.length + 1 + u <= q.value || q.value === -1;
            }));
        }
        x.value && U();
      }
    }, handleTagRemove: function(e, u) {
      u.button === 0 ? ce(e) : u.preventDefault();
    }, refreshOptions: function(e) {
      Ae(e);
    }, resolveOptions: Ae };
  }
  function F(e) {
    return function(e2) {
      if (Array.isArray(e2))
        return C(e2);
    }(e) || function(e2) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
        return Array.from(e2);
    }(e) || function(e2, u) {
      if (!e2)
        return;
      if (typeof e2 == "string")
        return C(e2, u);
      var t = Object.prototype.toString.call(e2).slice(8, -1);
      t === "Object" && e2.constructor && (t = e2.constructor.name);
      if (t === "Map" || t === "Set")
        return Array.from(e2);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
        return C(e2, u);
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function C(e, u) {
    (u == null || u > e.length) && (u = e.length);
    for (var t = 0, l = new Array(u); t < u; t++)
      l[t] = e[t];
    return l;
  }
  function S(e) {
    return function(e2) {
      if (Array.isArray(e2))
        return A(e2);
    }(e) || function(e2) {
      if (typeof Symbol != "undefined" && Symbol.iterator in Object(e2))
        return Array.from(e2);
    }(e) || function(e2, u) {
      if (!e2)
        return;
      if (typeof e2 == "string")
        return A(e2, u);
      var t = Object.prototype.toString.call(e2).slice(8, -1);
      t === "Object" && e2.constructor && (t = e2.constructor.name);
      if (t === "Map" || t === "Set")
        return Array.from(e2);
      if (t === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
        return A(e2, u);
    }(e) || function() {
      throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }();
  }
  function A(e, u) {
    (u == null || u > e.length) && (u = e.length);
    for (var t = 0, l = new Array(u); t < u; t++)
      l[t] = e[t];
    return l;
  }
  function E(e, u) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      u && (l = l.filter(function(u2) {
        return Object.getOwnPropertyDescriptor(e, u2).enumerable;
      })), t.push.apply(t, l);
    }
    return t;
  }
  function B(e, u, t) {
    return u in e ? Object.defineProperty(e, u, { value: t, enumerable: true, configurable: true, writable: true }) : e[u] = t, e;
  }
  function P(u, l, a) {
    var n = vue.toRefs(u), r = n.disabled, i = n.openDirection, o = n.showOptions, s = a.isOpen, c = a.isPointed, v = a.isSelected, p = a.isDisabled, d = a.isActive, f = a.canPointGroups, g2 = a.resolving, b2 = a.fo, h2 = function(e) {
      for (var u2 = 1; u2 < arguments.length; u2++) {
        var t = arguments[u2] != null ? arguments[u2] : {};
        u2 % 2 ? E(Object(t), true).forEach(function(u3) {
          B(e, u3, t[u3]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach(function(u3) {
          Object.defineProperty(e, u3, Object.getOwnPropertyDescriptor(t, u3));
        });
      }
      return e;
    }({ container: "multiselect", containerDisabled: "is-disabled", containerOpen: "is-open", containerOpenTop: "is-open-top", containerActive: "is-active", singleLabel: "multiselect-single-label", multipleLabel: "multiselect-multiple-label", search: "multiselect-search", tags: "multiselect-tags", tag: "multiselect-tag", tagDisabled: "is-disabled", tagRemove: "multiselect-tag-remove", tagRemoveIcon: "multiselect-tag-remove-icon", tagsSearchWrapper: "multiselect-tags-search-wrapper", tagsSearch: "multiselect-tags-search", tagsSearchCopy: "multiselect-tags-search-copy", placeholder: "multiselect-placeholder", caret: "multiselect-caret", caretOpen: "is-open", clear: "multiselect-clear", clearIcon: "multiselect-clear-icon", spinner: "multiselect-spinner", dropdown: "multiselect-dropdown", dropdownTop: "is-top", dropdownHidden: "is-hidden", options: "multiselect-options", optionsTop: "is-top", group: "multiselect-group", groupLabel: "multiselect-group-label", groupLabelPointable: "is-pointable", groupLabelPointed: "is-pointed", groupLabelSelected: "is-selected", groupLabelDisabled: "is-disabled", groupLabelSelectedPointed: "is-selected is-pointed", groupLabelSelectedDisabled: "is-selected is-disabled", groupOptions: "multiselect-group-options", option: "multiselect-option", optionPointed: "is-pointed", optionSelected: "is-selected", optionDisabled: "is-disabled", optionSelectedPointed: "is-selected is-pointed", optionSelectedDisabled: "is-selected is-disabled", noOptions: "multiselect-no-options", noResults: "multiselect-no-results", fakeInput: "multiselect-fake-input", spacer: "multiselect-spacer" }, n.classes.value), m2 = vue.computed(function() {
      return !!(s.value && o.value && (!g2.value || g2.value && b2.value.length));
    });
    return { classList: vue.computed(function() {
      return { container: [h2.container].concat(r.value ? h2.containerDisabled : []).concat(m2.value && i.value === "top" ? h2.containerOpenTop : []).concat(m2.value && i.value !== "top" ? h2.containerOpen : []).concat(d.value ? h2.containerActive : []), spacer: h2.spacer, singleLabel: h2.singleLabel, multipleLabel: h2.multipleLabel, search: h2.search, tags: h2.tags, tag: [h2.tag].concat(r.value ? h2.tagDisabled : []), tagRemove: h2.tagRemove, tagRemoveIcon: h2.tagRemoveIcon, tagsSearchWrapper: h2.tagsSearchWrapper, tagsSearch: h2.tagsSearch, tagsSearchCopy: h2.tagsSearchCopy, placeholder: h2.placeholder, caret: [h2.caret].concat(s.value ? h2.caretOpen : []), clear: h2.clear, clearIcon: h2.clearIcon, spinner: h2.spinner, dropdown: [h2.dropdown].concat(i.value === "top" ? h2.dropdownTop : []).concat(s.value && o.value && m2.value ? [] : h2.dropdownHidden), options: [h2.options].concat(i.value === "top" ? h2.optionsTop : []), group: h2.group, groupLabel: function(e) {
        var u2 = [h2.groupLabel];
        return c(e) ? u2.push(v(e) ? h2.groupLabelSelectedPointed : h2.groupLabelPointed) : v(e) && f.value ? u2.push(p(e) ? h2.groupLabelSelectedDisabled : h2.groupLabelSelected) : p(e) && u2.push(h2.groupLabelDisabled), f.value && u2.push(h2.groupLabelPointable), u2;
      }, groupOptions: h2.groupOptions, option: function(e, u2) {
        var t = [h2.option];
        return c(e) ? t.push(v(e) ? h2.optionSelectedPointed : h2.optionPointed) : v(e) ? t.push(p(e) ? h2.optionSelectedDisabled : h2.optionSelected) : (p(e) || u2 && p(u2)) && t.push(h2.optionDisabled), t;
      }, noOptions: h2.noOptions, noResults: h2.noResults, fakeInput: h2.fakeInput };
    }), showDropdown: m2 };
  }
  var L = { name: "Multiselect", emits: ["open", "close", "select", "deselect", "input", "search-change", "tag", "update:modelValue", "change", "clear"], props: { value: { required: false }, modelValue: { required: false }, options: { type: [Array, Object, Function], required: false, default: () => [] }, id: { type: [String, Number], required: false }, name: { type: [String, Number], required: false, default: "multiselect" }, disabled: { type: Boolean, required: false, default: false }, label: { type: String, required: false, default: "label" }, trackBy: { type: String, required: false, default: "label" }, valueProp: { type: String, required: false, default: "value" }, placeholder: { type: String, required: false, default: null }, mode: { type: String, required: false, default: "single" }, searchable: { type: Boolean, required: false, default: false }, limit: { type: Number, required: false, default: -1 }, hideSelected: { type: Boolean, required: false, default: true }, createTag: { type: Boolean, required: false, default: false }, appendNewTag: { type: Boolean, required: false, default: true }, caret: { type: Boolean, required: false, default: true }, loading: { type: Boolean, required: false, default: false }, noOptionsText: { type: String, required: false, default: "The list is empty" }, noResultsText: { type: String, required: false, default: "No results found" }, multipleLabel: { type: Function, required: false }, object: { type: Boolean, required: false, default: false }, delay: { type: Number, required: false, default: -1 }, minChars: { type: Number, required: false, default: 0 }, resolveOnLoad: { type: Boolean, required: false, default: true }, filterResults: { type: Boolean, required: false, default: true }, clearOnSearch: { type: Boolean, required: false, default: false }, clearOnSelect: { type: Boolean, required: false, default: true }, canDeselect: { type: Boolean, required: false, default: true }, canClear: { type: Boolean, required: false, default: true }, max: { type: Number, required: false, default: -1 }, showOptions: { type: Boolean, required: false, default: true }, addTagOn: { type: Array, required: false, default: () => ["enter"] }, required: { type: Boolean, required: false, default: false }, openDirection: { type: String, required: false, default: "bottom" }, nativeSupport: { type: Boolean, required: false, default: false }, classes: { type: Object, required: false, default: () => ({}) }, strict: { type: Boolean, required: false, default: true }, closeOnSelect: { type: Boolean, required: false, default: true }, autocomplete: { type: String, required: false }, groups: { type: Boolean, required: false, default: false }, groupLabel: { type: String, required: false, default: "label" }, groupOptions: { type: String, required: false, default: "options" }, groupHideEmpty: { type: Boolean, required: false, default: false }, groupSelect: { type: Boolean, required: false, default: true }, inputType: { type: String, required: false, default: "text" } }, setup(n, r) {
    const i = function(l, a) {
      var n2 = vue.toRefs(l), r2 = n2.value, i2 = n2.modelValue, o2 = n2.mode, s2 = n2.valueProp, c2 = vue.ref(o2.value !== "single" ? [] : {}), v2 = a.expose !== void 0 ? i2 : r2, p2 = vue.computed(function() {
        return o2.value === "single" ? c2.value[s2.value] : c2.value.map(function(e) {
          return e[s2.value];
        });
      }), d2 = vue.computed(function() {
        return o2.value !== "single" ? c2.value.map(function(e) {
          return e[s2.value];
        }).join(",") : c2.value[s2.value];
      });
      return { iv: c2, internalValue: c2, ev: v2, externalValue: v2, textValue: d2, plainValue: p2 };
    }(n, r), o = function(t, l, a) {
      var n2 = vue.toRefs(t), r2 = n2.groupSelect, i2 = n2.mode, o2 = n2.groups, s2 = vue.ref(null), c2 = function(e) {
        e === void 0 || e !== null && e.disabled || o2.value && e && e.group && (i2.value === "single" || !r2.value) || (s2.value = e);
      };
      return { pointer: s2, setPointer: c2, clearPointer: function() {
        c2(null);
      } };
    }(n), s = function(t, l, a) {
      var n2 = vue.toRefs(t).disabled, r2 = vue.ref(false);
      return { isOpen: r2, open: function() {
        r2.value || n2.value || (r2.value = true, l.emit("open"));
      }, close: function() {
        r2.value && (r2.value = false, l.emit("close"));
      } };
    }(n, r), c = function(e, t, a) {
      var n2 = vue.ref(null), r2 = vue.ref(null);
      return vue.watch(n2, function(e2) {
        t.emit("search-change", e2);
      }), { search: n2, input: r2, clearSearch: function() {
        n2.value = "";
      }, handleSearchInput: function(e2) {
        n2.value = e2.target.value;
      }, handlePaste: function(e2) {
        t.emit("paste", e2);
      } };
    }(0, r), v = function(u, t, l) {
      var a = vue.toRefs(u), n2 = a.object, r2 = a.valueProp, i2 = a.mode, o2 = l.iv, s2 = function(e) {
        return n2.value || g(e) ? e : Array.isArray(e) ? e.map(function(e2) {
          return e2[r2.value];
        }) : e[r2.value];
      }, c2 = function(e) {
        return g(e) ? i2.value === "single" ? {} : [] : e;
      };
      return { update: function(e) {
        o2.value = c2(e);
        var u2 = s2(e);
        t.emit("change", u2), t.emit("input", u2), t.emit("update:modelValue", u2);
      } };
    }(n, r, { iv: i.iv }), p = function(l, a, n2) {
      var r2 = vue.toRefs(l), i2 = r2.searchable, o2 = r2.disabled, s2 = n2.input, c2 = n2.open, v2 = n2.close, p2 = n2.clearSearch, d2 = vue.ref(null), f2 = vue.ref(false), g2 = vue.computed(function() {
        return i2.value || o2.value ? -1 : 0;
      }), b3 = function() {
        i2.value && s2.value.blur(), d2.value.blur();
      }, h3 = function() {
        f2.value = false, setTimeout(function() {
          f2.value || (v2(), p2());
        }, 1);
      };
      return { multiselect: d2, tabindex: g2, isActive: f2, blur: b3, handleFocus: function() {
        i2.value && !o2.value && s2.value.focus();
      }, activate: function() {
        o2.value || (f2.value = true, c2());
      }, deactivate: h3, handleCaretClick: function() {
        h3(), b3();
      } };
    }(n, 0, { input: c.input, open: s.open, close: s.close, clearSearch: c.clearSearch }), d = O(n, r, { ev: i.ev, iv: i.iv, search: c.search, clearSearch: c.clearSearch, update: v.update, pointer: o.pointer, clearPointer: o.clearPointer, blur: p.blur, deactivate: p.deactivate }), f = function(u, n2, r2) {
      var i2 = vue.toRefs(u), o2 = i2.valueProp, s2 = i2.showOptions, c2 = i2.searchable, v2 = i2.groupLabel, p2 = i2.groups, d2 = i2.mode, f2 = i2.groupSelect, g2 = r2.fo, b3 = r2.fg, h3 = r2.handleOptionClick, m2 = r2.handleGroupClick, D2 = r2.search, y2 = r2.pointer, O2 = r2.setPointer, C2 = r2.clearPointer, S2 = r2.multiselect, A2 = vue.computed(function() {
        return g2.value.filter(function(e) {
          return !e.disabled;
        });
      }), E2 = vue.computed(function() {
        return b3.value.filter(function(e) {
          return !e.disabled;
        });
      }), B2 = vue.computed(function() {
        return d2.value !== "single" && f2.value;
      }), P2 = vue.computed(function() {
        return y2.value && y2.value.group;
      }), L2 = vue.computed(function() {
        return R(y2.value);
      }), k = vue.computed(function() {
        var e = P2.value ? y2.value : R(y2.value), u2 = E2.value.map(function(e2) {
          return e2[v2.value];
        }).indexOf(e[v2.value]), t = E2.value[u2 - 1];
        return t === void 0 && (t = q.value), t;
      }), w = vue.computed(function() {
        var e = E2.value.map(function(e2) {
          return e2.label;
        }).indexOf(P2.value ? y2.value[v2.value] : R(y2.value)[v2.value]) + 1;
        return E2.value.length <= e && (e = 0), E2.value[e];
      }), q = vue.computed(function() {
        return F(E2.value).slice(-1)[0];
      }), j = vue.computed(function() {
        return y2.value.__VISIBLE__.filter(function(e) {
          return !e.disabled;
        })[0];
      }), x = vue.computed(function() {
        var e = L2.value.__VISIBLE__.filter(function(e2) {
          return !e2.disabled;
        });
        return e[e.map(function(e2) {
          return e2[o2.value];
        }).indexOf(y2.value[o2.value]) - 1];
      }), I = vue.computed(function() {
        var e = R(y2.value).__VISIBLE__.filter(function(e2) {
          return !e2.disabled;
        });
        return e[e.map(function(e2) {
          return e2[o2.value];
        }).indexOf(y2.value[o2.value]) + 1];
      }), T = vue.computed(function() {
        return F(k.value.__VISIBLE__.filter(function(e) {
          return !e.disabled;
        })).slice(-1)[0];
      }), _ = vue.computed(function() {
        return F(q.value.__VISIBLE__.filter(function(e) {
          return !e.disabled;
        })).slice(-1)[0];
      }), V = function() {
        O2(A2.value[0] || null);
      }, R = function(e) {
        return E2.value.find(function(u2) {
          return u2.__VISIBLE__.map(function(e2) {
            return e2[o2.value];
          }).indexOf(e[o2.value]) !== -1;
        });
      }, M = function() {
        var e = S2.value.querySelector("[data-pointed]");
        if (e) {
          var u2 = e.parentElement.parentElement;
          p2.value && (u2 = P2.value ? e.parentElement.parentElement.parentElement : e.parentElement.parentElement.parentElement.parentElement), e.offsetTop + e.offsetHeight > u2.clientHeight + u2.scrollTop && (u2.scrollTop = e.offsetTop + e.offsetHeight - u2.clientHeight), e.offsetTop < u2.scrollTop && (u2.scrollTop = e.offsetTop);
        }
      };
      return vue.watch(D2, function(e) {
        c2.value && (e.length && s2.value ? V() : C2());
      }), { pointer: y2, canPointGroups: B2, isPointed: function(e) {
        return !(!y2.value || !(!e.group && y2.value[o2.value] == e[o2.value] || e.group !== void 0 && y2.value[v2.value] == e[v2.value])) || void 0;
      }, setPointerFirst: V, selectPointer: function() {
        y2.value && y2.value.disabled !== true && (P2.value ? m2(y2.value) : h3(y2.value));
      }, forwardPointer: function() {
        if (y2.value === null)
          O2((p2.value && B2.value ? E2.value[0] : A2.value[0]) || null);
        else if (p2.value && B2.value) {
          var e = P2.value ? j.value : I.value;
          e === void 0 && (e = w.value), O2(e || null);
        } else {
          var u2 = A2.value.map(function(e2) {
            return e2[o2.value];
          }).indexOf(y2.value[o2.value]) + 1;
          A2.value.length <= u2 && (u2 = 0), O2(A2.value[u2] || null);
        }
        vue.nextTick(function() {
          M();
        });
      }, backwardPointer: function() {
        if (y2.value === null) {
          var e = A2.value[A2.value.length - 1];
          p2.value && B2.value && (e = _.value) === void 0 && (e = q.value), O2(e || null);
        } else if (p2.value && B2.value) {
          var u2 = P2.value ? T.value : x.value;
          u2 === void 0 && (u2 = P2.value ? k.value : L2.value), O2(u2 || null);
        } else {
          var t = A2.value.map(function(e2) {
            return e2[o2.value];
          }).indexOf(y2.value[o2.value]) - 1;
          t < 0 && (t = A2.value.length - 1), O2(A2.value[t] || null);
        }
        vue.nextTick(function() {
          M();
        });
      } };
    }(n, 0, { fo: d.fo, fg: d.fg, handleOptionClick: d.handleOptionClick, handleGroupClick: d.handleGroupClick, search: c.search, pointer: o.pointer, setPointer: o.setPointer, clearPointer: o.clearPointer, multiselect: p.multiselect }), b2 = function(u, t, l) {
      var a = vue.toRefs(u), n2 = a.mode, r2 = a.addTagOn, i2 = a.createTag, o2 = a.openDirection, s2 = a.searchable, c2 = a.showOptions, v2 = a.valueProp, p2 = a.groups, d2 = l.iv, f2 = l.update, g2 = l.search, b3 = l.setPointer, h3 = l.selectPointer, m2 = l.backwardPointer, D2 = l.forwardPointer, y2 = l.blur, O2 = l.fo, F2 = function() {
        n2.value === "tags" && !c2.value && i2.value && s2.value && !p2.value && b3(O2.value[O2.value.map(function(e) {
          return e[v2.value];
        }).indexOf(g2.value)]);
      };
      return { handleKeydown: function(e) {
        switch (e.keyCode) {
          case 8:
            if (n2.value === "single")
              return;
            if (s2.value && [null, ""].indexOf(g2.value) === -1)
              return;
            if (d2.value.length === 0)
              return;
            f2(S(d2.value).slice(0, -1));
            break;
          case 13:
            if (e.preventDefault(), n2.value === "tags" && r2.value.indexOf("enter") === -1 && i2.value)
              return;
            F2(), h3();
            break;
          case 32:
            if (s2.value && n2.value !== "tags" && !i2.value)
              return;
            if (n2.value === "tags" && (r2.value.indexOf("space") === -1 && i2.value || !i2.value))
              return;
            e.preventDefault(), F2(), h3();
            break;
          case 9:
          case 186:
          case 188:
            if (n2.value !== "tags")
              return;
            if (r2.value.indexOf({ 9: "tab", 186: ";", 188: "," }[e.keyCode]) === -1 || !i2.value)
              return;
            F2(), h3(), e.preventDefault();
            break;
          case 27:
            y2();
            break;
          case 38:
            if (e.preventDefault(), !c2.value)
              return;
            o2.value === "top" ? D2() : m2();
            break;
          case 40:
            if (e.preventDefault(), !c2.value)
              return;
            o2.value === "top" ? m2() : D2();
        }
      }, preparePointer: F2 };
    }(n, 0, { iv: i.iv, update: v.update, search: c.search, setPointer: o.setPointer, selectPointer: f.selectPointer, backwardPointer: f.backwardPointer, forwardPointer: f.forwardPointer, blur: p.blur, fo: d.fo }), h2 = P(n, 0, { isOpen: s.isOpen, isPointed: f.isPointed, canPointGroups: f.canPointGroups, isSelected: d.isSelected, isDisabled: d.isDisabled, isActive: p.isActive, resolving: d.resolving, fo: d.fo });
    return __spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadValues({}, i), s), p), o), v), c), d), f), b2), h2);
  } };
  L.render = function(e, u, t, l, a, g2) {
    return vue.openBlock(), vue.createBlock("div", { ref: "multiselect", tabindex: e.tabindex, class: e.classList.container, id: t.id, onFocusin: u[7] || (u[7] = (...u2) => e.activate && e.activate(...u2)), onFocusout: u[8] || (u[8] = (...u2) => e.deactivate && e.deactivate(...u2)), onKeydown: u[9] || (u[9] = (...u2) => e.handleKeydown && e.handleKeydown(...u2)), onFocus: u[10] || (u[10] = (...u2) => e.handleFocus && e.handleFocus(...u2)) }, [vue.createCommentVNode(" Search "), t.mode !== "tags" && t.searchable && !t.disabled ? (vue.openBlock(), vue.createBlock("input", { key: 0, type: t.inputType, modelValue: e.search, value: e.search, class: e.classList.search, autocomplete: t.autocomplete, onInput: u[1] || (u[1] = (...u2) => e.handleSearchInput && e.handleSearchInput(...u2)), onPaste: u[2] || (u[2] = vue.withModifiers((...u2) => e.handlePaste && e.handlePaste(...u2), ["stop"])), ref: "input" }, null, 42, ["type", "modelValue", "value", "autocomplete"])) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Tags (with search) "), t.mode == "tags" ? (vue.openBlock(), vue.createBlock("div", { key: 1, class: e.classList.tags }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(e.iv, (u2, l2, a2) => vue.renderSlot(e.$slots, "tag", { option: u2, handleTagRemove: e.handleTagRemove, disabled: t.disabled }, () => [(vue.openBlock(), vue.createBlock("span", { class: e.classList.tag, key: a2 }, [vue.createTextVNode(vue.toDisplayString(u2[t.label]) + " ", 1), t.disabled ? vue.createCommentVNode("v-if", true) : (vue.openBlock(), vue.createBlock("span", { key: 0, class: e.classList.tagRemove, onMousedown: vue.withModifiers((t2) => e.handleTagRemove(u2, t2), ["prevent"]) }, [vue.createVNode("span", { class: e.classList.tagRemoveIcon }, null, 2)], 42, ["onMousedown"]))], 2))])), 256)), vue.createVNode("div", { class: e.classList.tagsSearchWrapper }, [vue.createCommentVNode(" Used for measuring search width "), vue.createVNode("span", { class: e.classList.tagsSearchCopy }, vue.toDisplayString(e.search), 3), vue.createCommentVNode(" Actual search input "), t.searchable && !t.disabled ? (vue.openBlock(), vue.createBlock("input", { key: 0, type: t.inputType, modelValue: e.search, value: e.search, class: e.classList.tagsSearch, autocomplete: t.autocomplete, onInput: u[3] || (u[3] = (...u2) => e.handleSearchInput && e.handleSearchInput(...u2)), onPaste: u[4] || (u[4] = vue.withModifiers((...u2) => e.handlePaste && e.handlePaste(...u2), ["stop"])), ref: "input" }, null, 42, ["type", "modelValue", "value", "autocomplete"])) : vue.createCommentVNode("v-if", true)], 2)], 2)) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Single label "), t.mode == "single" && e.hasSelected && !e.search && e.iv ? vue.renderSlot(e.$slots, "singlelabel", { key: 2, value: e.iv }, () => [vue.createVNode("div", { class: e.classList.singleLabel }, vue.toDisplayString(e.iv[t.label]), 3)]) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Multiple label "), t.mode == "multiple" && e.hasSelected && !e.search ? vue.renderSlot(e.$slots, "multiplelabel", { key: 3, values: e.iv }, () => [vue.createVNode("div", { class: e.classList.multipleLabel }, vue.toDisplayString(e.multipleLabelText), 3)]) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Placeholder "), !t.placeholder || e.hasSelected || e.search ? vue.createCommentVNode("v-if", true) : vue.renderSlot(e.$slots, "placeholder", { key: 4 }, () => [vue.createVNode("div", { class: e.classList.placeholder }, vue.toDisplayString(t.placeholder), 3)]), vue.createCommentVNode(" Spinner "), e.busy ? vue.renderSlot(e.$slots, "spinner", { key: 5 }, () => [vue.createVNode("span", { class: e.classList.spinner }, null, 2)]) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Clear "), e.hasSelected && !t.disabled && t.canClear && !e.busy ? vue.renderSlot(e.$slots, "clear", { key: 6, clear: e.clear }, () => [vue.createVNode("span", { class: e.classList.clear, onMousedown: u[5] || (u[5] = (...u2) => e.clear && e.clear(...u2)) }, [vue.createVNode("span", { class: e.classList.clearIcon }, null, 2)], 34)]) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Caret "), t.caret ? vue.renderSlot(e.$slots, "caret", { key: 7 }, () => [vue.createVNode("span", { class: e.classList.caret, onClick: u[6] || (u[6] = (...u2) => e.handleCaretClick && e.handleCaretClick(...u2)) }, null, 2)]) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Options "), vue.createVNode("div", { class: e.classList.dropdown, tabindex: "-1" }, [vue.renderSlot(e.$slots, "beforelist", { options: e.fo }), vue.createVNode("ul", { class: e.classList.options }, [t.groups ? (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 0 }, vue.renderList(e.fg, (u2, l2, a2) => (vue.openBlock(), vue.createBlock("li", { class: e.classList.group, key: a2 }, [vue.createVNode("div", { class: e.classList.groupLabel(u2), "data-pointed": e.isPointed(u2), onMouseenter: (t2) => e.setPointer(u2), onClick: (t2) => e.handleGroupClick(u2) }, [vue.renderSlot(e.$slots, "grouplabel", { group: u2 }, () => [vue.createVNode("span", null, vue.toDisplayString(u2[t.groupLabel]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]), vue.createVNode("ul", { class: e.classList.groupOptions }, [(vue.openBlock(true), vue.createBlock(vue.Fragment, null, vue.renderList(u2.__VISIBLE__, (l3, a3, i) => (vue.openBlock(), vue.createBlock("li", { class: e.classList.option(l3, u2), key: i, "data-pointed": e.isPointed(l3), onMouseenter: (u3) => e.setPointer(l3), onClick: (u3) => e.handleOptionClick(l3) }, [vue.renderSlot(e.$slots, "option", { option: l3, search: e.search }, () => [vue.createVNode("span", null, vue.toDisplayString(l3[t.label]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]))), 128))], 2)], 2))), 128)) : (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 1 }, vue.renderList(e.fo, (u2, l2, a2) => (vue.openBlock(), vue.createBlock("li", { class: e.classList.option(u2), key: a2, "data-pointed": e.isPointed(u2), onMouseenter: (t2) => e.setPointer(u2), onClick: (t2) => e.handleOptionClick(u2) }, [vue.renderSlot(e.$slots, "option", { option: u2, search: e.search }, () => [vue.createVNode("span", null, vue.toDisplayString(u2[t.label]), 1)])], 42, ["data-pointed", "onMouseenter", "onClick"]))), 128))], 2), e.noOptions ? vue.renderSlot(e.$slots, "nooptions", { key: 0 }, () => [vue.createVNode("div", { class: e.classList.noOptions, innerHTML: t.noOptionsText }, null, 10, ["innerHTML"])]) : vue.createCommentVNode("v-if", true), e.noResults ? vue.renderSlot(e.$slots, "noresults", { key: 1 }, () => [vue.createVNode("div", { class: e.classList.noResults, innerHTML: t.noResultsText }, null, 10, ["innerHTML"])]) : vue.createCommentVNode("v-if", true), vue.renderSlot(e.$slots, "afterlist", { options: e.fo })], 2), vue.createCommentVNode(" Hacky input element to show HTML5 required warning "), t.required ? (vue.openBlock(), vue.createBlock("input", { key: 8, class: e.classList.fakeInput, tabindex: "-1", value: e.textValue, required: "" }, null, 10, ["value"])) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Native input support "), t.nativeSupport ? (vue.openBlock(), vue.createBlock(vue.Fragment, { key: 9 }, [t.mode == "single" ? (vue.openBlock(), vue.createBlock("input", { key: 0, type: "hidden", name: t.name, value: e.plainValue !== void 0 ? e.plainValue : "" }, null, 8, ["name", "value"])) : (vue.openBlock(true), vue.createBlock(vue.Fragment, { key: 1 }, vue.renderList(e.plainValue, (e2, u2) => (vue.openBlock(), vue.createBlock("input", { type: "hidden", name: `${t.name}[]`, value: e2, key: u2 }, null, 8, ["name", "value"]))), 128))], 64)) : vue.createCommentVNode("v-if", true), vue.createCommentVNode(" Create height for empty input "), vue.createVNode("div", { class: e.classList.spacer }, null, 2)], 42, ["tabindex", "id"]);
  }, L.__file = "src/Multiselect.vue";
  var _style_0 = `.multiselect{position:relative;margin:0 auto;width:100%;display:flex;align-items:center;justify-content:flex-end;box-sizing:border-box;cursor:pointer;outline:none;border:var(--ms-border-width,1px) solid var(--ms-border-color,#d1d5db);border-radius:var(--ms-radius,4px);background:var(--ms-bg,#fff);font-size:var(--ms-font-size,1rem);min-height:calc(var(--ms-border-width, 1px)*2 + var(--ms-font-size, 1rem)*var(--ms-line-height, 1.375) + var(--ms-py, .5rem)*2)}.multiselect.is-open{border-radius:var(--ms-radius,4px) var(--ms-radius,4px) 0 0}.multiselect.is-open-top{border-radius:0 0 var(--ms-radius,4px) var(--ms-radius,4px)}.multiselect.is-disabled{cursor:default;background:var(--ms-bg-disabled,#f3f4f6)}.multiselect.is-active{box-shadow:0 0 0 var(--ms-ring-width,3px) var(--ms-ring-color,rgba(16,185,129,.18823529411764706))}.multiselect-multiple-label,.multiselect-placeholder,.multiselect-single-label{display:flex;align-items:center;height:100%;position:absolute;left:0;top:0;pointer-events:none;background:transparent;line-height:var(--ms-line-height,1.375);padding-left:var(--ms-px,.875rem)}.multiselect-placeholder{color:var(--ms-placeholder-color,#9ca3af)}.multiselect-search{width:100%;position:absolute;top:0;bottom:0;left:0;right:0;outline:none;box-sizing:border-box;border:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;font-size:inherit;font-family:inherit;background:var(--ms-bg,#fff);border-radius:var(--ms-radius,4px);padding-left:var(--ms-px,.875rem)}.multiselect-search::-webkit-search-cancel-button,.multiselect-search::-webkit-search-decoration,.multiselect-search::-webkit-search-results-button,.multiselect-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-tags{flex-grow:1;flex-shrink:1;display:flex;flex-wrap:wrap;margin:var(--ms-tag-my,.25rem) 0 0;padding-left:var(--ms-py,.5rem);align-items:center}.multiselect-tag{background:var(--ms-tag-bg,#10b981);color:var(--ms-tag-color,#fff);font-size:var(--ms-tag-font-size,.875rem);line-height:var(--ms-tag-line-height,1.25rem);font-weight:var(--ms-tag-font-weight,600);padding:var(--ms-tag-py,.125rem) 0 var(--ms-tag-py,.125rem) var(--ms-tag-px,.5rem);border-radius:var(--ms-tag-radius,4px);margin-right:var(--ms-tag-mx,.25rem);margin-bottom:var(--ms-tag-my,.25rem);display:flex;align-items:center;white-space:nowrap}.multiselect-tag.is-disabled{padding-right:var(--ms-tag-px,.5rem);background:var(--ms-tag-bg-disabled,#9ca3af);color:var(--ms-tag-color-disabled,#fff)}.multiselect-tag-remove{display:flex;align-items:center;justify-content:center;padding:var(--ms-tag-remove-py,.25rem) var(--ms-tag-remove-px,.25rem);margin:var(--ms-tag-remove-my,0) var(--ms-tag-remove-mx,.125rem);border-radius:var(--ms-tag-remove-radius,4px)}.multiselect-tag-remove:hover{background:rgba(0,0,0,.06274509803921569)}.multiselect-tag-remove-icon{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;background-color:currentColor;opacity:.8;display:inline-block;width:.75rem;height:.75rem}.multiselect-tags-search-wrapper{display:inline-block;position:relative;margin:0 var(--ms-tag-mx,4px) var(--ms-tag-my,4px);flex-grow:1;flex-shrink:1;height:100%}.multiselect-tags-search-copy{visibility:hidden;white-space:pre-wrap;display:inline-block;height:1px;width:100%}.multiselect-tags-search{position:absolute;left:0;right:0;top:0;bottom:0;border:0;-webkit-appearance:none;-moz-appearance:none;outline:none;padding:0;font-size:inherit;font-family:inherit;box-sizing:border-box;width:100%;appearance:none}.multiselect-tags-search::-webkit-search-cancel-button,.multiselect-tags-search::-webkit-search-decoration,.multiselect-tags-search::-webkit-search-results-button,.multiselect-tags-search::-webkit-search-results-decoration{-webkit-appearance:none}.multiselect-spinner{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 512 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M456.433 371.72l-27.79-16.045c-7.192-4.152-10.052-13.136-6.487-20.636 25.82-54.328 23.566-118.602-6.768-171.03-30.265-52.529-84.802-86.621-144.76-91.424C262.35 71.922 256 64.953 256 56.649V24.56c0-9.31 7.916-16.609 17.204-15.96 81.795 5.717 156.412 51.902 197.611 123.408 41.301 71.385 43.99 159.096 8.042 232.792-4.082 8.369-14.361 11.575-22.424 6.92z'/%3E%3C/svg%3E");-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;background-color:var(--ms-spinner-color,#10b981);width:1rem;height:1rem;z-index:10;margin:0 var(--ms-px,.875rem) 0 0;-webkit-animation:multiselect-spin 1s linear infinite;animation:multiselect-spin 1s linear infinite;flex-shrink:0;flex-grow:0}.multiselect-clear{padding:0 var(--ms-px,.875rem) 0 0;position:relative;z-index:10;opacity:1;transition:.3s;flex-shrink:0;flex-grow:0;display:flex}.multiselect-clear:hover .multiselect-clear-icon{background-color:var(--ms-clear-color-hover,#000)}.multiselect-clear-icon{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M207.6 256l107.72-107.72c6.23-6.23 6.23-16.34 0-22.58l-25.03-25.03c-6.23-6.23-16.34-6.23-22.58 0L160 208.4 52.28 100.68c-6.23-6.23-16.34-6.23-22.58 0L4.68 125.7c-6.23 6.23-6.23 16.34 0 22.58L112.4 256 4.68 363.72c-6.23 6.23-6.23 16.34 0 22.58l25.03 25.03c6.23 6.23 16.34 6.23 22.58 0L160 303.6l107.72 107.72c6.23 6.23 16.34 6.23 22.58 0l25.03-25.03c6.23-6.23 6.23-16.34 0-22.58L207.6 256z'/%3E%3C/svg%3E");background-color:var(--ms-clear-color,#999);display:inline-block;transition:.3s}.multiselect-caret,.multiselect-clear-icon{-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain;width:.625rem;height:1.125rem}.multiselect-caret{transform:rotate(0);transition:transform .3s;-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 320 512' fill='currentColor' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z'/%3E%3C/svg%3E");background-color:var(--ms-caret-color,#999);margin:0 var(--ms-px,.875rem) 0 0;position:relative;z-index:10;flex-shrink:0;flex-grow:0;pointer-events:none}.multiselect-caret.is-open{transform:rotate(180deg);pointer-events:auto}.multiselect-dropdown{position:absolute;left:calc(var(--ms-border-width, 1px)*-1);right:calc(var(--ms-border-width, 1px)*-1);bottom:0;transform:translateY(100%);border:var(--ms-dropdown-border-width,1px) solid var(--ms-dropdown-border-color,#d1d5db);margin-top:calc(var(--ms-border-width, 1px)*-1);max-height:15rem;overflow-y:scroll;-webkit-overflow-scrolling:touch;z-index:100;background:var(--ms-dropdown-bg,#fff);display:flex;flex-direction:column;border-radius:0 0 var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px);outline:none}.multiselect-dropdown.is-top{transform:translateY(-100%);top:var(--ms-border-width,1px);bottom:auto;flex-direction:column-reverse;border-radius:var(--ms-dropdown-radius,4px) var(--ms-dropdown-radius,4px) 0 0}.multiselect-dropdown.is-hidden{display:none}.multiselect-options{padding:0;margin:0;list-style:none;display:flex;flex-direction:column;max-height:var(--ms-max-height,10rem)}.multiselect-options.is-top{flex-direction:column-reverse}.multiselect-group{padding:0;margin:0;@apply p-0 m-0;}.multiselect-group-label{padding:var(--ms-group-label-py,.3rem) var(--ms-group-label-px,.75rem);font-size:.875rem;font-weight:600;background:#e5e7eb;color:#374151;cursor:default;line-height:var(--ms-group-label-line-height,1.375);display:flex;box-sizing:border-box;text-decoration:none;align-items:center;justify-content:flex-start;text-align:left}.multiselect-group-label.is-pointable{cursor:pointer}.multiselect-group-label.is-pointed{background:var(--ms-group-label-bg-pointed,#d1d5db);color:var(--ms-group-label-color-pointed,#374151)}.multiselect-group-label.is-selected{background:var(--ms-group-label-bg-selected,#059669);color:var(--ms-group-label-color-selected,#fff)}.multiselect-group-label.is-disabled{background:var(--ms-group-label-bg-disabled,#f3f4f6);color:var(--ms-group-label-color-disabled,#d1d5db);cursor:not-allowed}.multiselect-group-label.is-selected.is-pointed{background:var(--ms-group-label-bg-selected-pointed,#0c9e70);color:var(--ms-group-label-color-selected-pointed,#fff)}.multiselect-group-label.is-selected.is-disabled{background:var(--ms-group-label-bg-selected-disabled,#75cfb1);color:var(--ms-group-label-color-selected-disabled,#d1fae5)}.multiselect-group-options{padding:0;margin:0}.multiselect-option{padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem);font-size:var(--ms-option-font-size,1rem);line-height:var(--ms-option-line-height,1.375);cursor:pointer;display:flex;box-sizing:border-box;text-decoration:none;align-items:center;justify-content:flex-start;text-align:left}.multiselect-option.is-pointed{background:var(--ms-option-bg-pointed,#f3f4f6);color:var(--ms-option-color-pointed,#1f2937)}.multiselect-option.is-selected{background:var(--ms-option-bg-selected,#10b981);color:var(--ms-option-color-selected,#fff)}.multiselect-option.is-disabled{background:var(--ms-option-bg-disabled,#fff);color:var(--ms-option-color-disabled,#d1d5db);cursor:not-allowed}.multiselect-option.is-selected.is-pointed{background:var(--ms-option-bg-selected-pointed,#26c08e);color:var(--ms-option-color-selected-pointed,#fff)}.multiselect-option.is-selected.is-disabled{background:var(--ms-option-bg-selected-disabled,#87dcc0);color:var(--ms-option-color-selected-disabled,#d1fae5)}.multiselect-no-options,.multiselect-no-results{padding:var(--ms-option-py,.5rem) var(--ms-option-px,.75rem);color:var(--ms-empty-color,#4b5563)}.multiselect-fake-input{background:transparent;position:absolute;left:0;right:0;bottom:-1px;width:100%;height:1px;border:0;padding:0;font-size:0;outline:none}.multiselect-fake-input:active,.multiselect-fake-input:focus{outline:none}.multiselect-spacer{display:none}@-webkit-keyframes multiselect-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}@keyframes multiselect-spin{0%{transform:rotate(0)}to{transform:rotate(1turn)}}
`;
  var _style_1 = "#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}\n";
  const _sfc_main = vue.defineComponent({
    components: { Multiselect: L, HelloWorld: _sfc_main$1 },
    data() {
      return {
        value: null,
        items: [],
        searchInput: "",
        options: ["Batman", "Robin", "Joker"]
      };
    },
    methods: {
      searchChangeHandler(val) {
        this.searchInput = val;
      }
    },
    setup() {
      return {
        defineComponent: vue.defineComponent,
        HelloWorld: _sfc_main$1
      };
    }
  });
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_Multiselect = vue.resolveComponent("Multiselect");
    return vue.openBlock(), vue.createBlock(_component_Multiselect, {
      modelValue: _ctx.value,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => _ctx.value = $event),
      options: _ctx.options,
      searchable: true
    }, null, 8, ["modelValue", "options"]);
  }
  _sfc_main.styles = [_style_0, _style_1];
  _sfc_main.render = _sfc_render;
  const WasteWidget = vue.defineCustomElement(_sfc_main);
  function register(tagName = "waste-widget") {
    console.log('inside register');
    customElements.define(tagName, WasteWidget);
  }
  exports2.WasteWidget = WasteWidget;
  exports2.register = register;
  Object.defineProperty(exports2, "__esModule", { value: true });
  exports2[Symbol.toStringTag] = "Module";
});
