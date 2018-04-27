webpackJsonp([5],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IssPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/**
 * Generated class for the IssPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IssPage = /** @class */ (function () {
    function IssPage(storage) {
        var _this = this;
        this.storage = storage;
        this.timer = window.setInterval(function (data) { return data = _this.getFromStorage('issLocation'); }, 60000);
        this.getFromStorage("issLocation");
    }
    IssPage.prototype.getFromStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key).then(function (data) { return _this.location = data; })];
                    case 1:
                        _a.sent();
                        this.date = new Date(this.location[0].timestamp * 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    IssPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-iss',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/iss/iss.html"*/'<!--\n  Generated template for the IssPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>ISS Relative Locator</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngFor= "let iss of location">\n\n  <google-map [latitude]="iss.latitude" [longitude]="iss.longitude">\n\n  </google-map>\n\n  <ion-card>\n    <ion-item>\n\n      <ion-icon name="locate" item-start large ></ion-icon>\n      <h2>Relative Location</h2>\n      <p>Latitude: {{iss.latitude}}}</p>\n      <p>Longitude: {{iss.longitude}}</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon name="clock" item-left large ></ion-icon>\n      <h2>Time of Last Ping</h2>\n      <p>{{date.getUTCHours()}}:{{date.getUTCMinutes()}}  UTC</p>\n    </ion-item>\n\n\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/iss/iss.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]) === "function" && _a || Object])
    ], IssPage);
    return IssPage;
    var _a;
}());

//# sourceMappingURL=iss.js.map

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var HomePage = /** @class */ (function () {
    function HomePage(storage) {
        this.storage = storage;
        this.getFromStorage('picture');
        this.defaultImage = new Picture("0", "Steve Mazlin, Mark Hanson, Warren Keller, Rex Parker, Tommy Tse, \n" +
            "and Peter Proulx (SSRO / PROMPT / CTIO)", "Carved by a bright young star in Orion's dusty molecular clouds, NGC 2023 is often overlooked in favor of the nearby dramatic silhouette of the Horsehead Nebula. In its own right it is seen as a beautiful star forming emission and reflection nebula though, a mere 1500 light-years distant. Surprisingly colorful and complex filaments are detailed in this rare NGC 2023 portrait. Scattered points of emission are also from the region's Herbig-Haro objects, associated with the energetic jets from newborn stars. The sharp telescopic view spans about 10 light-years at the estimated distance of NGC 2023. Off the right edge of the frame lies the more familiar cosmic Horsehead.", "NGC 2023 in the Horsehead's Shadow", "assets/imgs/Horsehead.jpg");
    }
    // Add local storage for image
    HomePage.prototype.getFromStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key).then(function (data) { return _this.pictureFromStorage = data; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>\n      Picture of the Day\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content *ngFor="let picture of pictureFromStorage">\n  <!-- Add if blocks for actual picture of the day when it is created -->\n\n  <img src={{picture.hdurl}}>\n\n  <div padding>\n    <p>\n      <b>\n        {{picture.title}}\n      </b>\n    </p>\n    <p>\n      {{picture.explanation}}\n    </p>\n    <p>\n      <b>Copyright</b> <br>\n      {{picture.copyright}}\n    </p>\n  </div>\n</ion-content>\n\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

var Picture = /** @class */ (function () {
    function Picture(_picId, _copyright, _explanation, _title, _hdurl) {
        this._picId = _picId;
        this._copyright = _copyright;
        this._explanation = _explanation;
        this._title = _title;
        this._hdurl = _hdurl;
    }
    Object.defineProperty(Picture.prototype, "picId", {
        get: function () {
            return this._picId;
        },
        enumerable: true,
        configurable: true
    });
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
    Object.defineProperty(Picture.prototype, "hdurl", {
        get: function () {
            return this._hdurl;
        },
        enumerable: true,
        configurable: true
    });
    return Picture;
}());
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(79);
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
            selector: 'page-launch-info',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-info/launch-info.html"*/'<!--\n  Generated template for the LaunchInfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Launch Info</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <google-map [latitude] ="launchItem.padLatitude" [longitude] = "launchItem.padLongitude">\n\n  </google-map>\n  <div>\n    <button (click)="openWikiPage(launchItem.rocketWebpage)">\n    <b>Rocket:</b> {{launchItem.rocket}}\n  </button>\n    <br>\n    <button (click)="openWikiPage(launchItem.payloadWebPage)">\n      <b>Payload:</b> {{launchItem.payload}}\n    </button>\n    <br>\n    {{launchItem.date}}\n    <br>\n    {{launchItem.location}}\n    <br><br>\n    {{launchItem.description}}\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/launch-info/launch-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */]])
    ], LaunchInfoPage);
    return LaunchInfoPage;
}());

//# sourceMappingURL=launch-info.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LaunchListPage; });
/* unused harmony export LaunchItem */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__launch_info_launch_info__ = __webpack_require__(105);
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
 * Generated class for the LaunchListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LaunchListPage = /** @class */ (function () {
    function LaunchListPage(navCtrl) {
        this.navCtrl = navCtrl;
        var mockRocketForTesting1 = new LaunchItem("GSLV Mk II", "GSAT-6A", "March 29, 2018 11:26:00 UTC", "Satish Dhawan Space Centre Second Launch Pad", "GSAT-6A is an Indian geostationary communications satellite for multi-media mobile applications. Weighing about 2000 kg, satellite is expected to operate in orbit for 9 years.", "https://en.wikipedia.org/wiki/Geosynchronous_Satellite_Launch_Vehicle", "https://en.wikipedia.org/wiki/GSAT-6A", "13.719900", "80.230400");
        var mockRocketForTesting2 = new LaunchItem("Soyuz-2-1v", "VNIIEM EMKA", "March 29, 2018 16:30:00 UTC", "43/3 (43L), Plesetsk Cosmodrome, Russia", "The payload for the Soyuz-2-1v launch is a small reconnaissance satellite developed by VNIIEM and known by the acronym EMKA (\"Experimental Small Space Apparatus\"). Launch was originally scheduled for October and then slipped to November, December and eventually January due to technical problems with the payload.", "https://en.wikipedia.org/wiki/Soyuz-2-1v", "http://www.russianspaceweb.com/emka.html", "62.927300", "40.450000");
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]])
    ], LaunchListPage);
    return LaunchListPage;
}());

var LaunchItem = /** @class */ (function () {
    function LaunchItem(_rocket, _payload, _date, _location, _description, _rocketWebpage, _payloadWebPage, _padLatitude, _padLongitude) {
        this._rocket = _rocket;
        this._payload = _payload;
        this._date = _date;
        this._location = _location;
        this._description = _description;
        this._rocketWebpage = _rocketWebpage;
        this._payloadWebPage = _payloadWebPage;
        this._padLatitude = _padLatitude;
        this._padLongitude = _padLongitude;
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
    Object.defineProperty(LaunchItem.prototype, "padLatitude", {
        get: function () {
            return this._padLatitude;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LaunchItem.prototype, "padLongitude", {
        get: function () {
            return this._padLongitude;
        },
        enumerable: true,
        configurable: true
    });
    return LaunchItem;
}());

//# sourceMappingURL=launch-list.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeoplePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__ = __webpack_require__(79);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



/**
 * Generated class for the PeoplePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PeoplePage = /** @class */ (function () {
    function PeoplePage(inAppBrowser, storage) {
        this.inAppBrowser = inAppBrowser;
        this.storage = storage;
        this.getFromStorage('people');
    }
    PeoplePage.prototype.openWikiPage = function (page) {
        this.inAppBrowser.create(page);
    };
    PeoplePage.prototype.getFromStorage = function (key) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.storage.get(key).then(function (data) { return _this.peopleFromStorage = data; })];
                    case 1:
                        _a.sent();
                        this.numOfPeople = this.peopleFromStorage.length;
                        return [2 /*return*/];
                }
            });
        });
    };
    PeoplePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-people',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/pages/people/people.html"*/'<!--\n  Generated template for the PeoplePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>People in Space</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n    <ion-card>\n      <ion-card-header>\n        ( {{ numOfPeople }} ) &nbsp;\n        <ion-icon name="people" item-start></ion-icon>\n        &nbsp; Nauts in Space &nbsp;\n        <ion-icon name="planet" item-start></ion-icon>\n      </ion-card-header>\n      <div>\n      <ion-list>\n\n        <button *ngFor="let person of peopleFromStorage" ion-item padding (click)="openWikiPage(person.wikiPage)">\n\n          <ion-icon name="person" item-start ></ion-icon>\n          {{person.name}}\n        </button>\n      </ion-list>\n     </div>\n    </ion-card>\n</ion-content>\n\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/pages/people/people.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__ionic_native_in_app_browser__["a" /* InAppBrowser */], __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], PeoplePage);
    return PeoplePage;
}());

//# sourceMappingURL=people.js.map

/***/ }),

/***/ 118:
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
webpackEmptyAsyncContext.id = 118;

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		287,
		4
	],
	"../pages/iss/iss.module": [
		286,
		3
	],
	"../pages/launch-info/launch-info.module": [
		288,
		2
	],
	"../pages/launch-list/launch-list.module": [
		289,
		1
	],
	"../pages/people/people.module": [
		290,
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
webpackAsyncContext.id = 160;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestServiceProvider = /** @class */ (function () {
    function RestServiceProvider(http) {
        this.http = http;
        this.url = "http://localhost:8080/";
    }
    RestServiceProvider.prototype.get = function (domain) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.http.get(this.url + domain).toPromise().then(function (data) { return _this.data = data; })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, this.data];
                }
            });
        });
    };
    RestServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RestServiceProvider);
    return RestServiceProvider;
}());

//# sourceMappingURL=rest-service.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_iss_iss__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_people_people__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_google_map_google_map__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rest_service_rest_service__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_common_http__ = __webpack_require__(204);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__["a" /* LaunchInfoPage */],
                __WEBPACK_IMPORTED_MODULE_12__components_google_map_google_map__["a" /* GoogleMapComponent */],
                __WEBPACK_IMPORTED_MODULE_10__pages_iss_iss__["a" /* IssPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_people_people__["a" /* PeoplePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/iss/iss.module#IssPageModule', name: 'IssPage', segment: 'iss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-info/launch-info.module#LaunchInfoPageModule', name: 'LaunchInfoPage', segment: 'launch-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/launch-list/launch-list.module#LaunchListPageModule', name: 'LaunchListPage', segment: 'launch-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/people/people.module#PeoplePageModule', name: 'PeoplePage', segment: 'people', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_14__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_iss_iss__["a" /* IssPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_people_people__["a" /* PeoplePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_launch_list_launch_list__["a" /* LaunchListPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_launch_info_launch_info__["a" /* LaunchInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_in_app_browser__["a" /* InAppBrowser */],
                __WEBPACK_IMPORTED_MODULE_13__rest_service_rest_service__["a" /* RestServiceProvider */],
                Storage
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_launch_list_launch_list__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_iss_iss__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_people_people__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rest_service_rest_service__ = __webpack_require__(203);
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
    function MyApp(platform, statusBar, splashScreen, storage, apiCaller) {
        var _this = this;
        this.storage = storage;
        this.apiCaller = apiCaller;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */];
        this.timerForISSCall = window.setInterval(function (data) { return _this.issLocationTimer = _this.apiCaller.get("iss_location"); }, 60000);
        this.timerForISSStorage = setInterval(function (data) { return data = _this.storage.set('issLocation', _this.issLocationTimer); }, 60000);
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
            _this.pages = [
                { title: "Picture of the Day", component: __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */] },
                { title: "Launch List", component: __WEBPACK_IMPORTED_MODULE_6__pages_launch_list_launch_list__["a" /* LaunchListPage */] },
                { title: "ISS Location", component: __WEBPACK_IMPORTED_MODULE_7__pages_iss_iss__["a" /* IssPage */] },
                { title: "People in Space", component: __WEBPACK_IMPORTED_MODULE_8__pages_people_people__["a" /* PeoplePage */] },
            ];
            var issLocation = _this.apiCaller.get("iss_location");
            var picture = _this.apiCaller.get("nasa_pic_of_day");
            var people = _this.apiCaller.get("people_in_space");
            _this.storage.set('issLocation', issLocation);
            _this.storage.set('picture', picture);
            _this.storage.set('people', people);
        });
    }
    MyApp.prototype.openPage = function (page) {
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Nav */]) === "function" && _a || Object)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n  <ion-content>\n    <ion-list>\n      <button menuClose *ngFor="let page of pages" ion-item (click)="openPage(page)">\n        {{page.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n</ion-menu>\n\n<ion-nav id="nav" #content [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_9__rest_service_rest_service__["a" /* RestServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__rest_service_rest_service__["a" /* RestServiceProvider */]) === "function" && _f || Object])
    ], MyApp);
    return MyApp;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GoogleMapComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var GoogleMapComponent = /** @class */ (function () {
    function GoogleMapComponent() {
    }
    GoogleMapComponent.prototype.ngOnInit = function () {
        this.initMap();
    };
    GoogleMapComponent.prototype.initMap = function () {
        var coords = new google.maps.LatLng(this.latitude, this.longitude);
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
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "latitude", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], GoogleMapComponent.prototype, "longitude", void 0);
    GoogleMapComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'google-map',template:/*ion-inline-start:"/Users/anthonyjordan/Dev/SpaceR/src/components/google-map/google-map.html"*/'<div #map id="map"></div>\n'/*ion-inline-end:"/Users/anthonyjordan/Dev/SpaceR/src/components/google-map/google-map.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], GoogleMapComponent);
    return GoogleMapComponent;
}());

//# sourceMappingURL=google-map.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map