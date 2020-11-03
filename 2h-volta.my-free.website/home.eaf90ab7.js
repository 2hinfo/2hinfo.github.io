!function n(a, c, s) { function u(t, e) { if (!c[t]) { if (!a[t]) { var i = "function" == typeof require && require; if (!e && i) return i(t, !0); if (l) return l(t, !0); var o = new Error("Cannot find module '" + t + "'"); throw o.code = "MODULE_NOT_FOUND", o } var r = c[t] = { exports: {} }; a[t][0].call(r.exports, function (e) { return u(a[t][1][e] || e) }, r, r.exports, n, a, c, s) } return c[t].exports } for (var l = "function" == typeof require && require, e = 0; e < s.length; e++)u(s[e]); return u }({ 1: [function (e, t, i) { "use strict"; function o(e, t) { for (var i = 0; i < t.length; i++) { var o = t[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } function r(e) { return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) { return typeof e } : function (e) { return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e })(e) } function h(e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") } function n(e, t) { return !t || "object" !== r(t) && "function" != typeof t ? function (e) { if (void 0 !== e) return e; throw new ReferenceError("this hasn't been initialised - super() hasn't been called") }(e) : t } function a(e) { var i = "function" == typeof Map ? new Map : void 0; return (a = function (e) { if (null === e || !function (e) { return -1 !== Function.toString.call(e).indexOf("[native code]") }(e)) return e; if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== i) { if (i.has(e)) return i.get(e); i.set(e, t) } function t() { return c(e, arguments, u(this).constructor) } return t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), s(t, e) })(e) } function c(e, t, i) { return (c = function () { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Date.prototype.toString.call(Reflect.construct(Date, [], function () { })), !0 } catch (e) { return !1 } }() ? Reflect.construct : function (e, t, i) { var o = [null]; o.push.apply(o, t); var r = new (Function.bind.apply(e, o)); return i && s(r, i.prototype), r }).apply(null, arguments) } function s(e, t) { return (s = Object.setPrototypeOf || function (e, t) { return e.__proto__ = t, e })(e, t) } function u(e) { return (u = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) { return e.__proto__ || Object.getPrototypeOf(e) })(e) } function m(e) { return e.replace(/ /g, "") } var l = "STORE20", d = function () { function e() { return h(this, e), n(this, u(e).apply(this, arguments)) } return function (e, t) { if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(t && t.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), t && s(e, t) }(e, a(Error)), e }(), p = function () { function f(e, t) { var i = this; h(this, f), this.settings = this.builderApi = e, this.fetch = e.fetch, this.isTestMode = window.self !== window.top || !!this.settings.editor, this.isForPreview = e.isForPreview, this.isRuntimeSite = t.isRuntimeSite, this.config = t, this.localPickupFulfillmentType = 3; var o = e.getGlobalColorsWithContrast && e.getGlobalColorsWithContrast(); if (o) this.colors = { buttonColor: m(o.buttonBackground), buttonTextColor: m(o.buttonText), backgroundColor: m(o.background), textColor: m(o.text), title: m(o.title) }; else { var r = e.getGlobalColors() || {}, n = r.accent, a = r.text, c = r.background, s = n && n[0], u = s && "rgb(".concat(n[0].join(","), ")"), l = s && e.getTextColorForBackground && e.getTextColorForBackground(s), d = a && "rgb(".concat(a.join(","), ")"), p = c && "rgb(".concat(c.join(","), ")"); this.colors = { buttonColor: u, buttonTextColor: l, backgroundColor: p, textColor: d, title: d } } this.data = { needToCreateStore: !0, needToSetup: !0 }, t.isThumbnail ? this.data.needToCreateStore = !1 : setTimeout(function () { return i.initializeStore() }, 1) } return function (e, t, i) { t && o(e.prototype, t), i && o(e, i) }(f, [{ key: "reinitializeStore", value: function () { return this.settings.editor.refreshAppMarketData(), this.initializeStore() } }, { key: "initializeStore", value: function () { var i = this; this.didGetStoreInfo = !1; var e = this.settings.resolveAppmarketApp(l); return this.storeInitializingPromise = e.then(function (e) { if (!e) throw new Error("Store has not been created"); i.app = e, i.instanceJwt = e && e.instance_jwt, i.instanceId = e && e.instance_id, i.shopApiUrl = i.getUrlByAppName(e.url, "st-shop-api"), i.storeApiUrl = i.getUrlByAppName(e.url, "st-edit-api"), i.shopUrl = i.getUrlByAppName(e.url, "st-shop"); var t = window.self !== window.top; if (70 <= e.setup_status) i.settings.addScriptFromAppmarketApp(l), i.settings.customHeaderButtons.add("cart_button", '<div><i class="fa fa-shopping-cart"></i><span class="cartContent pl-1"></span></div>'), i.settings.customHeaderButtons.forEach("cart_button", function (e) { i.cartButton = e, i.cartButton.length = 1, i.didCartInitialization || i.initializeCart() }), i.data.needToCreateStore = !1, i.data.needToSetup = !1, i.settings.getAllChildFeatures().forEach(function (e) { return e.doStoreDataCall(!0) }); else { if (!t) throw new d; i.settings.getAllChildFeatures().forEach(function (e) { e.doStoreDataCall(!1), e.renderOverlay && e.renderOverlay() }) } }).then(function () { return Promise.all(i.app ? [i.fetchStoreSettings()] : []) }).then(function () { i.didGetStoreInfo = !0, i.settings.getAllChildFeatures().forEach(function (e) { return e.onDidGetStoreInfo(!0) }) }).catch(function (e) { i.didGetStoreInfo = !0; var t = e.constructor === d; i.data.needToCreateStore = !t, i.data.needToSetup = !0, i.settings.getAllChildFeatures().forEach(function (e) { return e && e.onInitError && e.onInitError(t) }), t || console.warn("CATCHERR", e) }), this.storeInitializingPromise } }, { key: "initializeCart", value: function () { if (this.cartButton && !this.didCartInitialization && (this.didCartInitialization = !0, window.AMStore = window.AMStore || { q: [], init: function () { window.AMStore.q.push(["init", arguments]) }, reInit: function () { window.AMStore.q.push(["reInit", arguments]) }, addToCart: function () { window.AMStore.q.push(["addToCart", arguments]) }, openShoppingCart: function () { window.AMStore.q.push(["openShoppingCart", arguments]) }, closeShoppingCart: function () { window.AMStore.q.push(["closeShoppingCart", arguments]) } }, window.AMStore)) { window.AMStore.init({ testMode: this.isTestMode, isPublished: !1, instanceJwt: this.instanceJwt, domain: this.shopUrl, openCartAutomatically: !0, language: window._site && window._site.language, style: this.colors, elements: { amountLabel: this.cartButton.querySelectorAll(".cartContent"), cart: "" } }); var e = document.querySelector("header .button-cart") || this.cartButton; e && e.addEventListener("click", function () { window.AMStore.openShoppingCart() }) } } }, { key: "dispose", value: function () { this.settings.customHeaderButtons.remove("cart_button") } }, { key: "afterRenderCustomHeaderButton", value: function () { } }, { key: "getUrlByAppName", value: function (e, t) { var i = e.match(/^https?:\/\/[^\/]+/i); return 0 < i.length ? i[0].replace("st-shop", t) : null } }, { key: "fetchStoreSettings", value: function () { var t = this; return this.fetch("".concat(this.shopApiUrl, "/v1.0/settings?instanceId=").concat(encodeURIComponent(this.instanceId))).then(function (e) { return e.json() }).then(function (e) { t.data.currencySymbol = e.supportedCurrencies && e.supportedCurrencies.items[0].symbol, t.data.currencyCode = e.supportedCurrencies && e.supportedCurrencies.items[0].code, t.builderApi.editor && !t.config.isThumbnail && t.builderApi.editor.storeModelProperty("currencySymbol", t.data.currencySymbol, !1, !0) }) } }, { key: "formatPrice", value: function (e) { var t = e.basePrice && e.basePrice.toFixed(2), i = e.price && e.price.toFixed(2), o = e.discountPercentage; return o && !Number.isInteger(o) && (o = o.toFixed(2)), { productPrice: t, discountedPrice: i, discountPercentage: o } } }, { key: "createOrSetupStoreCTA", value: function (e, t) { var i = this; this.productListLoader = e.querySelector(".productListLoader"), this.productListRow = e.querySelector(".storeProductRow"); var o = e.querySelector(".ui-sortable"); if (o && this.settings.editor && !this.isForPreview) { o.innerHTML += '<div class="kv-edit-selector d-none" data-control-type="remote-list"><div class="kv-edit-selector-buttons"><i class="material-icons kv-editor-button" data-icon-type="settings">settings</i></div></div>'; var r = e.querySelector(".kv-edit-selector"); o.classList.add("createStoreArea"), o.addEventListener("mouseover", function (e) { o.classList.add("kv-hover"), r.classList.remove("d-none") }), o.addEventListener("mouseout", function (e) { o.classList.remove("kv-hover"), r.classList.add("d-none") }); var n = e.querySelectorAll(".kv-control"); n && n.forEach(function (e, t, i) { e.classList.add("d-none") }); var a = o.querySelectorAll(".content-image"); a && a.forEach(function (e, t, i) { var o = e.getAttribute("data-src-retina"); o && (e.setAttribute("style", 'background-image:url("'.concat(o, '")')), e.className = "content-image") }), r && r.addEventListener("click", function (e) { i.createStore(t) }) } } }, { key: "createStore", value: function (e) { var o = this, r = 0 < arguments.length && void 0 !== e ? e : function () { o.reinitializeStore() }; this.productListLoader && this.productListLoader.classList.remove("d-none"), this.productListRow && this.productListRow.classList.add("d-none"); function t() { o.settings.editor.showDashboard(l, { onClose: function () { var e = o.data, t = e.needToCreateStore, i = e.needToSetup; r({ needToCreateStore: t, needToSetup: i }) }, onSetupReady: function () { o.data.needToCreateStore = !1, o.data.needToSetup = !1 }, route: "", queryParams: { ee: 1 }, fullscreen: !0 }) } this.data.needToCreateStore ? this.settings.editor.ensureSavedSite(function () { o.settings.editor.createStore(t) }) : t() } }, { key: "getDemoData", value: function () { return [{ id: "0000", name: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), title: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), description: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), shortDescription: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), sku: null, stock: null, discountPercentage: 10, banner: this.builderApi.localize("editorTemplates.features.store.productBanner1"), image: { value: "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60" }, discountedPrice: 63, productPrice: 58.33, basePrice: 63, price: 58.33, deepLink: { title: this.builderApi.localize("editorTemplates.layouts.store.addToCart"), href: this.settings.getPageUri("store/product-detail") + "/" }, isTaxable: !0, isPickup: !1, productType: 1, images: [{ source: "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60", sizes: null, isStock: !0 }], productCategoryIds: null, options: this.getDemoOptionData(), taxExPrice: 46.5, taxExFromPrice: 50, originalPrice: 46.5, originalFromPrice: 50 }, { id: "1111", name: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), title: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), description: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), shortDescription: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), sku: null, stock: null, discountPercentage: 0, banner: null, image: { value: "https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=500&q=60" }, images: [{ source: "https://images.unsplash.com/photo-1494498902093-87f291949d17?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc45a906096bd3d1a8ff018e75d4f43a&auto=format&fit=crop&w=500&q=60", sizes: null, isStock: !0 }], deepLink: { title: this.builderApi.localize("editorTemplates.layouts.store.addToCart"), href: this.settings.getPageUri("store/product-detail") + "/" }, options: null, discountedPrice: 70, productPrice: 58.33 }, { id: "0000", name: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), title: this.builderApi.localize("editorTemplates.features.store.demoProductTitle"), description: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), shortDescription: this.builderApi.localize("editorTemplates.features.store.demoProductDescription"), sku: null, stock: null, discountPercentage: null, banner: null, image: { value: "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60" }, images: [{ source: "https://images.unsplash.com/photo-1494261951946-b0c26b70410c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=7148f93943d52d36939fd621c24b2d44&auto=format&fit=crop&w=500&q=60", sizes: null, isStock: !0 }], deepLink: { title: this.builderApi.localize("editorTemplates.layouts.store.addToCart"), href: this.settings.getPageUri("store/product-detail") + "/" }, options: null, discountedPrice: 100, productPrice: 100 }] } }, { key: "getDemoOptionData", value: function () { return [{ optionId: "2985", name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName1"), variantType: 1, choices: [{ choiceId: "12058", inStock: !0, name: "#0000ff", color: "#0000ff", productId: "pv_146412_12058", selected: !1 }, { choiceId: "12059", inStock: !0, name: "#000", color: "#000", productId: "pv_146412_12059", selected: !1 }, { choiceId: "12060", inStock: !0, name: "#556b2f", color: "#556b2f", productId: "pv_146412_12060", selected: !1 }, { choiceId: "12061", inStock: !1, name: "#ffffff", color: "#ffffff", productId: "pv_146412_12061", selected: !1 }] }, { optionId: "2986", name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName3"), variantType: 2, choices: [{ choiceId: "12062", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice1"), color: "", productId: "pv_146412_12062", selected: !1, hover: null }, { choiceId: "12063", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice2"), color: "", productId: "pv_146412_12063", selected: !1, hover: null }, { choiceId: "12064", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice3"), color: "", productId: "pv_146412_12064", selected: !1, hover: null }, { choiceId: "12065", inStock: !1, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName3Choice4"), color: "", productId: "pv_146412_12065", selected: !1, hover: null }] }, { optionId: "2987", name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName2"), variantType: 3, choices: [{ choiceId: "12066", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice1"), color: "", productId: "pv_146412_12066", selected: !1, hover: null }, { choiceId: "12067", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice2"), color: "", productId: "pv_146412_12067", selected: !1, hover: null }, { choiceId: "12068", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice3"), color: "", productId: "pv_146412_12068", selected: !1, hover: null }, { choiceId: "12069", inStock: !0, name: this.builderApi.localize("editorTemplates.features.productDemoData.variantName2Choice4"), color: "", productId: "pv_146412_12069", selected: !1, hover: null }] }] } }]), f }(); window.__features = window.__features || {}, window.__features["store-core"] = p }, {}] }, {}, [1]), function n(a, c, s) { function u(t, e) { if (!c[t]) { if (!a[t]) { var i = "function" == typeof require && require; if (!e && i) return i(t, !0); if (l) return l(t, !0); var o = new Error("Cannot find module '" + t + "'"); throw o.code = "MODULE_NOT_FOUND", o } var r = c[t] = { exports: {} }; a[t][0].call(r.exports, function (e) { return u(a[t][1][e] || e) }, r, r.exports, n, a, c, s) } return c[t].exports } for (var l = "function" == typeof require && require, e = 0; e < s.length; e++)u(s[e]); return u }({ 1: [function (e, t, i) { "use strict"; function o(e, t) { for (var i = 0; i < t.length; i++) { var o = t[i]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o) } } function a(e, t, i) { return t in e ? Object.defineProperty(e, t, { value: i, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = i, e } var r = function () { function n(e, t, i) { var o = this; !function (e, t) { if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function") }(this, n), a(this, "getRenderModel", function () { return {} }), a(this, "triggerWindowEvent", function () { o.recheckMode && o.recheckMode() }), this.isRuntimeSite = t.isRuntimeSite, this.builderApi = e, this.currentElementWidth = 0, this.checkTimeout = 0; var r = !this.editor && window.self !== window.top; this.resizeWaitTimeout = r ? 0 : 300, "undefined" != typeof window && (window._zoomUpdateEvents = window._zoomUpdateEvents || [], window._zoomUpdateEvents.push(this.triggerWindowEvent)) } return function (e, t, i) { t && o(e.prototype, t), i && o(e, i) }(n, [{ key: "registerWindowEvent", value: function () { } }, { key: "unregisterWindowEvent", value: function () { if ("undefined" != typeof window && window._zoomUpdateEvents) { var e = window._zoomUpdateEvents.indexOf(this.triggerWindowEvent); 0 <= e && window._zoomUpdateEvents.splice(e, 1) } } }, { key: "dispose", value: function () { this.recheckMode = null, this.unregisterWindowEvent() } }, { key: "afterRender", value: function (e, t) { var i = this, o = t.querySelector(".navigation") || t, r = o.querySelectorAll("li"); (r || r.length) && (this.checkMobileMode(o), this.setHeaderHeight(e, t), window.addEventListener("resize", function () { i.__resizeTimeout && window.clearTimeout(i.__resizeTimeout), i.__resizeTimeout = window.setTimeout(function () { i.checkMobileMode(o), i.setHeaderHeight(e, t) }, i.resizeWaitTimeout) }), this.recheckMode = this.builderApi.debounce(function () { i.checkMobileMode(o), i.setHeaderHeight(e, t) }, 300)) } }, { key: "setHeaderHeight", value: function (e, t) { if (!e.model.cover && this.isRuntimeSite && t.parentElement) { var i = t.parentElement.querySelector(".header-container"); if (i) { var o = t.parentElement.querySelector(".kv-check-scroll"); if (!o) return; var r, n = o.clientHeight, a = o.children[0].clientHeight; r = o === i ? a : Math.max(n, a), i.style.minHeight = "".concat(r, "px") } } } }, { key: "getNavigationWidth", value: function (e) { var t = 0; return e.forEach(function (e) { t += e.offsetWidth }), t + 40 } }, { key: "determineContainerWidth", value: function (e, t) { var i = e.querySelector("nav") || e, o = e.querySelector('[data-dynamic-navigation-element="logo"]'), r = e.querySelector('[data-dynamic-navigation-element="calltoactionbutton"]'), n = r ? r.offsetWidth : 0, a = o ? o.offsetWidth : 0, c = i.offsetWidth - n; return { containerSize: c, logoWidth: a, ctaWidth: n, headerWith: e.offsetWidth, navigationToWide: t + a + n >= e.offsetWidth - 20, headerToWide: c + a >= e.offsetWidth } } }, { key: "shouldMinimizeMenu", value: function (e) { if (window.innerWidth < 991) return !0; var t = e.querySelectorAll("li"); this.currentElementWidth = this.getNavigationWidth(t); var i = this.determineContainerWidth(e, this.currentElementWidth), o = i.containerSize, r = i.headerToWide, n = i.navigationToWide; return o < 100 || r || n } }, { key: "checkMobileMode", value: function (e) { var t = document.querySelector("section") || e, i = document.querySelector(".check-mobile"); if (i = i || e, window.innerWidth < 991) i.classList.contains("mobile") || i.classList.add("mobile"); else { i.classList.remove("mobile"); var o = this.shouldMinimizeMenu(t), r = i.classList; o && r.add("mobile"), o || r.remove("mobile") } } }, { key: "updateProperty", value: function () { } }]), n }(); window.__features = window.__features || {}, window.__features.navigation = r }, {}] }, {}, [1]), window._featureSettings = { "store-core": { settings: { isGlobal: !0 } }, navigation: { settings: {} } };