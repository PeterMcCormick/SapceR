<<<<<<< HEAD
webpackJsonp([2],{
=======
webpackJsonp([1],{
>>>>>>> master

/***/ 109:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 109;

/***/ }),

<<<<<<< HEAD
/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/launch-info/launch-info.module": [
		271,
		1
	],
	"../pages/launch-list/launch-list.module": [
		272,
=======
/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/iss/iss.module": [
		271,
>>>>>>> master
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
<<<<<<< HEAD
webpackAsyncContext.id = 150;
=======
webpackAsyncContext.id = 149;
>>>>>>> master
module.exports = webpackAsyncContext;

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.defaultImage = new Picture("Steve Mazlin, Mark Hanson, Warren Keller, Rex Parker, Tommy Tse, \n" +
            "and Peter Proulx (SSRO / PROMPT / CTIO)", "Carved by a bright young star in Orion's dusty molecular clouds, NGC 2023 is often overlooked in favor of the nearby dramatic silhouette of the Horsehead Nebula. In its own right it is seen as a beautiful star forming emission and reflection nebula though, a mere 1500 light-years distant. Surprisingly colorful and complex filaments are detailed in this rare NGC 2023 portrait. Scattered points of emission are also from the region's Herbig-Haro objects, associated with the energetic jets from newborn stars. The sharp telescopic view spans about 10 light-years at the estimated distance of NGC 2023. Off the right edge of the frame lies the more familiar cosmic Horsehead.", "NGC 2023 in the Horsehead's Shadow", "assets/imgs/Horsehead.jpg");
        // Add picture of the day call
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Picture of the Day\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <!-- Add if blocks for actual picture of the day when it is created -->\n\n  <img src={{defaultImage.location}}>\n\n  <div padding>\n    <p>\n      <b>\n        {{defaultImage.title}}\n      </b>\n    </p>\n    <p>\n      {{defaultImage.explanation}}\n    </p>\n    <p>\n      <b>Copyright</b> <br>\n      {{defaultImage.copyright}}\n    </p>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

var Picture = /** @class */ (function () {
    function Picture(_copyright, _explanation, _title, _location) {
        this._copyright = _copyright;
        this._explanation = _explanation;
        this._title = _title;
        this._location = _location;
    }
    Object.defineProperty(Picture.prototype, "copyright", {
        get: function () {
            return this._copyright;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "explanation", {
        get: function () {
            return this._explanation;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Picture.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    return Picture;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LaunchInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchInfoPage = /** @class */ (function () {
    function LaunchInfoPage(navCtrl, navParams, inAppBrowser) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.inAppBrowser = inAppBrowser;
        this.launchItem = navParams.data;
    }
    LaunchInfoPage.prototype.openWikiPage = function (page) {
        this.inAppBrowser.create(page);
    };
    LaunchInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-info',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-info/launch-info.html"*/'<!--\n  Generated template for the LaunchInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Launch Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div>\n    <button (click)="openWikiPage(launchItem.rocketWebpage)">\n    <b>Rocket:</b> {{launchItem.rocket}}\n  </button>\n    <br>\n    <button (click)="openWikiPage(launchItem.payloadWebPage)">\n      <b>Payload:</b> {{launchItem.payload}}\n    </button>\n    <br>\n    {{launchItem.date}}\n    <br>\n    {{launchItem.location}}\n    <br><br>\n    {{launchItem.description}}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-info/launch-info.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]) === "function" && _c || Object])
    ], LaunchInfoPage);
    return LaunchInfoPage;
    var _a, _b, _c;
}());

//# sourceMappingURL=launch-info.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssPage = /** @class */ (function () {
    function IssPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IssPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IssPage');
    };
    IssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iss',template:/*ion-inline-start:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/pages/iss/iss.html"*/'<!--\n  Generated template for the IssPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ISS Relative Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <google-map></google-map>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-icon name="locate" item-start large ></ion-icon>\n      <h2>Relative Location</h2>\n      <p>Latitude: 28.4803</p>\n      <p>Longitude: -80.5421</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="clock" item-left large ></ion-icon>\n      <h2>Time of Last Ping</h2>\n      <p>12:37 PM est</p>\n    </ion-item>\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/pages/iss/iss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]])
    ], IssPage);
    return IssPage;
}());

//# sourceMappingURL=iss.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);
>>>>>>> master


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

<<<<<<< HEAD
/***/ 219:
=======
/***/ 218:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(273);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_iss_iss__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_google_map_google_map__ = __webpack_require__(270);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









<<<<<<< HEAD

=======
>>>>>>> master
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__["a" /* LaunchInfoPage */]
=======
                __WEBPACK_IMPORTED_MODULE_8__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_7__pages_iss_iss__["a" /* IssPage */]
>>>>>>> master
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
<<<<<<< HEAD
                        { loadChildren: '../pages/launch-info/launch-info.module#LaunchInfoPageModule', name: 'LaunchInfoPage', segment: 'launch-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-list/launch-list.module#LaunchListPageModule', name: 'LaunchListPage', segment: 'launch-list', priority: 'low', defaultHistory: [] }
=======
                        { loadChildren: '../pages/iss/iss.module#IssPageModule', name: 'IssPage', segment: 'iss', priority: 'low', defaultHistory: [] }
>>>>>>> master
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
<<<<<<< HEAD
                __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__["a" /* LaunchInfoPage */]
=======
                __WEBPACK_IMPORTED_MODULE_7__pages_iss_iss__["a" /* IssPage */]
>>>>>>> master
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

<<<<<<< HEAD
/***/ 270:
=======
/***/ 269:
>>>>>>> master
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
<<<<<<< HEAD
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_launch_list_launch_list__ = __webpack_require__(50);
=======
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_iss_iss__ = __webpack_require__(194);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        var _this = this;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pages = [
                { title: "Picture of the Day", component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
<<<<<<< HEAD
                { title: "Launch List", component: __WEBPACK_IMPORTED_MODULE_5__pages_launch_list_launch_list__["a" /* LaunchListPage */] }
=======
                { title: "Another Page", component: "" },
                { title: "ISS Location", component: __WEBPACK_IMPORTED_MODULE_5__pages_iss_iss__["a" /* IssPage */] }
>>>>>>> master
            ];
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose *ngFor="let page of pages" ion-item (click)="openPage(page)">\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

<<<<<<< HEAD
/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchListPage; });
/* unused harmony export LaunchItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launch_info_launch_info__ = __webpack_require__(195);
=======
/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
>>>>>>> master
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

<<<<<<< HEAD


/**
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchListPage = /** @class */ (function () {
    function LaunchListPage(navCtrl) {
        this.navCtrl = navCtrl;
        var mockRocketForTesting1 = new LaunchItem("GSLV Mk II", "GSAT-6A", "March 29, 2018 11:26:00 UTC", "Satish Dhawan Space Centre Second Launch Pad", "GSAT-6A is an Indian geostationary communications satellite for multi-media mobile applications. Weighing about 2000 kg, satellite is expected to operate in orbit for 9 years.", "https://en.wikipedia.org/wiki/Geosynchronous_Satellite_Launch_Vehicle", "https://en.wikipedia.org/wiki/GSAT-6A");
        var mockRocketForTesting2 = new LaunchItem("Soyuz-2-1v", "VNIIEM EMKA", "March 29, 2018 16:30:00 UTC", "43/3 (43L), Plesetsk Cosmodrome, Russia", "The payload for the Soyuz-2-1v launch is a small reconnaissance satellite developed by VNIIEM and known by the acronym EMKA (\"Experimental Small Space Apparatus\"). Launch was originally scheduled for October and then slipped to November, December and eventually January due to technical problems with the payload.", "https://en.wikipedia.org/wiki/Soyuz-2-1v", "http://www.russianspaceweb.com/emka.html");
        this.testArray = [mockRocketForTesting1, mockRocketForTesting2];
        this.nav = navCtrl;
    }
    LaunchListPage.prototype.openPage = function (launch) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__launch_info_launch_info__["a" /* LaunchInfoPage */], launch);
    };
    LaunchListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-launch-list',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-list/launch-list.html"*/'<!--\n  Generated template for the LaunchListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Launch List</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card *ngFor="let launch of testArray" padding-vertical="10" (click)="openPage(launch)">\n    <div padding-vertical="3">\n      <b>Rocket:</b> {{launch.rocket}}\n      <br>\n      <b>Payload:</b> {{launch.payload}}\n      <br padding-vertical="2">\n      {{launch.date}}\n      <br padding-vertical="2">\n      {{launch.location}}\n    </div>\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-list/launch-list.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object])
    ], LaunchListPage);
    return LaunchListPage;
    var _a;
}());

var LaunchItem = /** @class */ (function () {
    function LaunchItem(_rocket, _payload, _date, _location, _description, _rocketWebpage, _payloadWebPage) {
        this._rocket = _rocket;
        this._payload = _payload;
        this._date = _date;
        this._location = _location;
        this._description = _description;
        this._rocketWebpage = _rocketWebpage;
        this._payloadWebPage = _payloadWebPage;
    }
    Object.defineProperty(LaunchItem.prototype, "rocket", {
        get: function () {
            return this._rocket;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "payload", {
        get: function () {
            return this._payload;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "date", {
        get: function () {
            return this._date;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "location", {
        get: function () {
            return this._location;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "description", {
        get: function () {
            return this._description;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "rocketWebpage", {
        get: function () {
            return this._rocketWebpage;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "payloadWebPage", {
        get: function () {
            return this._payloadWebPage;
        },
        enumerable: true,
        configurable: true
    });
    return LaunchItem;
}());

//# sourceMappingURL=launch-list.js.map

/***/ })

},[196]);
=======
var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMapComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(28.4803, -80.5421);
        var mapOptions = {
            center: coords,
            zoom: 11,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: coords
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])("map"),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "mapElement", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google-map',template:/*ion-inline-start:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/components/google-map/google-map.html"*/'<div #map id="map"></div>\n'/*ion-inline-end:"/Users/petermccormick/Dev/SpaceApp/SpaceR/src/components/google-map/google-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ })

},[195]);
>>>>>>> master
//# sourceMappingURL=main.js.map