(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<!--Preloader-->\r\n<div id=\"hideMe\">\r\n  <div id=\"loader-wrapper\">\r\n    <div id=\"loader\">\r\n      <div class=\"loader-1 loader-outter\">\r\n        <div class=\"loader-1 loader-inner\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<header>\r\n\r\n  <!-- Navbar -->\r\n  <nav class=\"navbar is-fixed-top\" [ngClass]=\"{'main__header-dark': darkModeActive}\">\r\n\r\n    <!-- Tabs -->\r\n    <header class=\"main__header\">\r\n      <div class=\"navbar-brand columns is-mobile\">\r\n        <a class=\"navbar-item column logo-tjd\" [class.hidden] = \"darkModeActive\" href=\"#home-content\">\r\n          <img class=\"center-text\" src=\"src/images/Capture.JPG\">\r\n        </a>\r\n        <h3 class=\"navbar-item column title\" [class.colorchange]=\"darkModeActive\" [class.textalignment]=\"darkModeActive\">\r\n          TYLER D'SILVA\r\n        </h3>\r\n\r\n        <a (click) = \"toggleMenu()\" role=\"button\" class=\"navbar-burger\" aria-label=\"menu\" aria-expanded=\"false\">\r\n          <span aria-hidden=\"true\"></span>\r\n          <span aria-hidden=\"true\"></span>\r\n          <span aria-hidden=\"true\"></span>\r\n        </a>\r\n        <div *ngIf=\"Width > 1024\" class=\"navbar-menu column\">\r\n          <div class=\"navbar-end\">\r\n            <div class=\"navbar-item\">\r\n              <div class=\"field is-grouped\">\r\n                <a class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\" href=\"#about-me\">About Me</a>\r\n                <a class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\" href=\"#experiences\">Experience</a>\r\n                <a class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\" href=\"#projects\">Projects</a>\r\n                <a class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\" target=\"_blank\" href=\"src/resume/Tyler-D'Silva-Software.pdf\">Resume</a>\r\n                <div class=\"mode-toggle__container\">\r\n                  <span class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\">Light</span>\r\n\r\n                  <label class=\"toggle-button__container\">\r\n                    <input (click)=\"modeToggleSwitch()\" type=\"checkbox\" class=\"mode-toggle__input\"/>\r\n                    <span [ngClass]=\"{'mode-toggle__bg-checked': darkModeActive}\" class=\"mode-toggle__bg\"></span>\r\n                    <span [ngClass]=\"{'mode-toggle__circle-checked': darkModeActive}\" class=\"mode-toggle__circle\"></span>\r\n                  </label>\r\n\r\n\r\n                  <span class=\"mode-toggle__text control\" [class.colorchange]=\"darkModeActive\">Dark</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </header>\r\n\r\n    </nav>\r\n  </header>\r\n\r\n  <main class=\"main__container\">\r\n    <div class=\"main-container__bg\" [ngClass]=\"{'main-container__bg-dark': darkModeActive}\"></div>\r\n    <router-outlet></router-outlet>\r\n  </main>\r\n\r\n  <!-- <footer class=\"main__footer\">\r\n    <small class=\"copyright__text\">Copyright © 2018 Tyler D'Silva</small>\r\n  </footer> -->\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n@import url(\"https://fonts.googleapis.com/css?family=Open+Sans:400,700\");\n@import url(\"https://fonts.googleapis.com/css?family=Merriweather:400,700\");\n/* Fonts from Google Fonts - more at https://fonts.google.com */\nbody {\n  background-color: white;\n  font-family: \"Open Sans\", sans-serif;\n  padding: 5px 25px;\n  font-size: 18px;\n  margin: 0;\n  color: #444; }\n.root-container {\n  width: 100vw;\n  height: 100vh;\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: auto;\n      grid-template-columns: auto;\n  -ms-grid-rows: 0fr auto;\n      grid-template-rows: 0fr auto;\n  position: relative; }\nh1 {\n  font-family: \"Merriweather\", serif;\n  font-size: 32px;\n  -webkit-animation-name: example;\n  /* Safari 4.0 - 8.0 */\n  -webkit-animation-duration: 4s;\n  /* Safari 4.0 - 8.0 */\n  animation-name: example;\n  animation-duration: 4s; }\na {\n  color: #4a4a4a; }\n/* Safari 4.0 - 8.0 */\n@-webkit-keyframes example {\n  from {\n    color: white; }\n  to {\n    color: black; } }\n/* Standard syntax */\n@keyframes example {\n  from {\n    color: white; }\n  to {\n    color: black; } }\n#hideMe {\n  moz-animation: cssAnimation 0s ease-in 3s forwards;\n  /* Firefox */\n  webkit-animation: cssAnimation 0s ease-in 3s forwards;\n  /* Safari and Chrome */\n  o-animation: cssAnimation 0s ease-in 3s forwards;\n  /* Opera */\n  -webkit-animation: cssAnimation 0s ease-in 3s forwards;\n          animation: cssAnimation 0s ease-in 3s forwards;\n  -webkit-animation-fill-mode: forwards;\n  animation-fill-mode: forwards; }\n@keyframes cssAnimation {\n  to {\n    width: 0;\n    height: 0;\n    visibility: hidden; } }\n@-webkit-keyframes cssAnimation {\n  to {\n    width: 0;\n    height: 0;\n    visibility: hidden; } }\n#loader-wrapper {\n  display: block;\n  position: fixed;\n  width: 100%;\n  height: 100%;\n  background-color: #222;\n  z-index: 1000;\n  top: 0;\n  left: 0; }\n.dropdown_container {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n  pointer-events: none;\n  z-index: 31; }\n.dropdown_container-active {\n  pointer-events: auto; }\n.dropdown_container::before {\n  content: '';\n  cursor: pointer;\n  position: absolute;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #0c1066;\n  opacity: 0;\n  will-change: opacity; }\n.dropdown_container-active::before {\n  opacity: 0.3; }\n.dropdown {\n  box-sizing: border-box;\n  -webkit-transform: translateX(-103%);\n          transform: translateX(-103%);\n  position: relative;\n  top: 0;\n  left: 0;\n  z-index: 10;\n  width: 100%;\n  background-color: white;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 2fr 4fr 1fr;\n      grid-template-rows: 2fr 4fr 1fr;\n  grid-gap: 1rem;\n  will-change: transform; }\n.dropdown-active {\n  -webkit-transform: none;\n          transform: none; }\na:hover {\n  color: grey; }\n.navbar {\n  padding: 0rem 2rem;\n  height: 52px;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  display: block; }\n.center-text {\n  margin-right: 352px; }\n.hidden {\n  display: none; }\n.logo-tjd {\n  padding-top: 20px; }\nh3 {\n  font-size: 1.17em;\n  -webkit-margin-before: 1em;\n  -webkit-margin-after: 1em;\n  -webkit-margin-start: 0px;\n  -webkit-margin-end: 0px;\n  font-weight: bold; }\n.title {\n  text-transform: uppercase;\n  letter-spacing: .1rem;\n  display: inline;\n  margin: .5rem 0; }\n.textalignment {\n  text-align: inherit !important; }\n.colorchange {\n  color: white; }\n.navbar-item {\n  font-family: 'Ubuntu', sans-serif;\n  text-align: center; }\n.control {\n  font-family: 'Ubuntu', sans-serif;\n  padding-top: 4px; }\n.toggle-button__container {\n  cursor: pointer;\n  position: relative;\n  margin: 0 0.5rem; }\n.mode-toggle__input {\n  -webkit-appearance: none;\n  -moz-appearance: none; }\n.mode-toggle__bg {\n  height: 1rem;\n  width: 2rem;\n  border-radius: 0.5rem;\n  background-color: rgba(0, 0, 0, 0.5);\n  display: inline-block;\n  transition: background-color 300ms linear; }\n.mode-toggle__circle {\n  height: 1.30rem;\n  width: 1.30rem;\n  background-color: #2B244D;\n  position: absolute;\n  top: -0.2rem;\n  border-radius: 50%;\n  box-shadow: 0 0 0 rgba(0, 0, 255, 0.5);\n  transition: left 300ms linear;\n  left: 0.1rem; }\n.main__header-dark {\n  background-color: #2B244D; }\n.mode-toggle__circle-checked {\n  background-color: white;\n  left: 1rem; }\n.mode-toggle__bg-checked {\n  background-color: #FF0070; }\n.mode-toggle__text {\n  font-size: 0.8rem;\n  text-transform: uppercase;\n  letter-spacing: 0.1rem;\n  padding-right: 8px; }\n.main-container__bg {\n  height: 100vh;\n  width: 100vw;\n  margin-top: 52px;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: -2;\n  opacity: 0;\n  background: white;\n  transition: opacity 300ms linear; }\n.main-container__bg-dark {\n  opacity: 1;\n  background: linear-gradient(to bottom, #B290FF, #2E1D65);\n  transition: opacity 300ms linear; }\n.main__footer {\n  background: transparent;\n  position: absolute;\n  bottom: 1rem;\n  left: 1.5rem;\n  z-index: 100; }\n.copyright__text {\n  letter-spacing: 0.1rem;\n  color: white; }\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(ui) {
        this.ui = ui;
        this.title = 'my-website';
        this.Width = window.screen.width;
        this.showMenu = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.ui.darkModeState.subscribe(function (value) {
            _this.darkModeActive = value;
        });
    };
    AppComponent.prototype.toggleMenu = function () {
        this.showMenu = !this.showMenu;
    };
    AppComponent.prototype.modeToggleSwitch = function () {
        this.ui.darkModeState.next(!this.darkModeActive);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/aboutme/aboutme.component */ "./src/app/pages/aboutme/aboutme.component.ts");
/* harmony import */ var _pages_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/experiences/experiences.component */ "./src/app/pages/experiences/experiences.component.ts");
/* harmony import */ var _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/projects/projects.component */ "./src/app/pages/projects/projects.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _pages_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _pages_aboutme_aboutme_component__WEBPACK_IMPORTED_MODULE_6__["AboutMeComponent"],
                _pages_experiences_experiences_component__WEBPACK_IMPORTED_MODULE_7__["ExperiencesComponent"],
                _pages_projects_projects_component__WEBPACK_IMPORTED_MODULE_8__["ProjectsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [
                _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_4__["UiService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/pages/aboutme/aboutme.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutme/aboutme.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"aboutme__wrapper\">\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs *ngIf=\"!darksMode\">\r\n      <linearGradient id=\"ddd\" x2=\"0\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#00FF9B\"/>\r\n        <stop offset=\"1\" stop-color=\"#003EFF\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <defs *ngIf=\"darksMode\">\r\n      <linearGradient id=\"ddd\" x2=\"0\" y2=\"1\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#ff8b8b\"/>\r\n        <stop offset=\"1\" stop-color=\"#6676ff\"/>\r\n      </linearGradient>\r\n    </defs>\r\n\r\n    <circle cx=\"-50\" cy=\"517\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"1\" y2=\"20\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#003EFF\"/>\r\n        <stop offset=\"1\" stop-color=\"#00FF9B\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"1000\" cy=\"0\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"1\" y2=\"20\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#003EFF\"/>\r\n        <stop offset=\"1\" stop-color=\"#00FF9B\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"1800\" cy=\"500\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"1\" y2=\"20\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#003EFF\"/>\r\n        <stop offset=\"1\" stop-color=\"#00FF9B\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"-50\" cy=\"800\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"1\" y2=\"20\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#003EFF\"/>\r\n        <stop offset=\"1\" stop-color=\"#00FF9B\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"500\" cy=\"1200\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"background-gradient__circle\" viewBox=\"4572 73 1328 1328\">\r\n    <defs>\r\n      <linearGradient id=\"ddd\" x2=\"1\" y2=\"20\" gradientUnits=\"objectBoundingBox\">\r\n        <stop offset=\"0\" stop-color=\"#003EFF\"/>\r\n        <stop offset=\"1\" stop-color=\"#00FF9B\"/>\r\n      </linearGradient>\r\n    </defs>\r\n    <circle cx=\"1400\" cy=\"1000\" r=\"664\" fill=\"url(#ddd)\" transform=\"translate(4500 73)\"/>\r\n  </svg>\r\n\r\n  <svg class=\"back__button\" *ngIf=\"state != 0\" (click)=\"backClick()\" viewBox=\"4085 152 98.5 126\">\r\n    <defs>\r\n      <style>.a {\r\n        fill: #2b244d;\r\n      }\r\n      .b {\r\n        fill: rgba(0, 0, 0, 0);\r\n      }\r\n      .b, .c {\r\n        stroke: #fff;\r\n        stroke-width: 2px;\r\n      }\r\n      .c {\r\n        fill: none;\r\n      }\r\n      .d {\r\n        fill: #fff;\r\n        font-size: 15px;\r\n        font-family: SegoeUI, Segoe UI;\r\n        letter-spacing: 0.4em;\r\n      }</style>\r\n    </defs>\r\n    <g transform=\"translate(3980)\">\r\n      <circle class=\"a\" cx=\"39\" cy=\"39\" r=\"39\" transform=\"translate(105 152)\"/>\r\n      <line class=\"b\" x1=\"80\" transform=\"translate(123.5 190.5)\"/>\r\n      <line class=\"b\" y1=\"26\" x2=\"26\" transform=\"translate(123.5 164.5)\"/>\r\n      <line class=\"c\" x1=\"26\" y1=\"27\" transform=\"translate(123.5 190.5)\"/>\r\n      <text class=\"d\" transform=\"translate(117 274)\">\r\n        <tspan x=\"0\" y=\"0\">BACK</tspan>\r\n      </text>\r\n    </g>\r\n  </svg>\r\n\r\n  <div class=\"aboutme__modalwrapper\">\r\n    <section class=\"modal__header\">\r\n        <h1 *ngIf=\"state === 0\" class=\"modal__title\">ABOUT ME</h1>\r\n        <h1 *ngIf=\"state === 1\" class=\"modal__title\">TECHNOLOGY</h1>\r\n        <h1 *ngIf=\"state === 2\" class=\"modal__title\">SPORTS</h1>\r\n        <h1 *ngIf=\"state === 3\" class=\"modal__title\">MUSIC</h1>\r\n        <h1 *ngIf=\"state === 4\" class=\"modal__title\">SOCCER</h1>\r\n        <h1 *ngIf=\"state === 5\" class=\"modal__title\">TENNIS</h1>\r\n        <h1 *ngIf=\"state === 6\" class=\"modal__title\">HOCKEY</h1>\r\n        <h1 *ngIf=\"state === 7\" class=\"modal__title\">TAEKWONDO</h1>\r\n    </section>\r\n    <main class=\"modal__content\">\r\n      <div *ngIf=\"state === 0\">\r\n      <h1>I am a 2A Systems Design Engineer at the University of Waterloo. I love to apply my problem solving and critical thinking skills to new experiences. I am willing to learn new things that are interesting and that help make an impact. In the future, I hope to continue a career in software development and apply my knowledge to making new ideas and experiences a reality. Currently, I am looking for an intership to learn and apply knowledge and gain practical experience in development.\r\nIn my spare time, I like to learn new languages and trying to design new projects to help increase my experience. For extracurricular activities, I am very passionate and competitive about tennis, and love playing the clarinet.</h1>\r\n      <div *ngIf=\"state === 0\" class=\"modal__container\">\r\n      <section class=\"modal__card\" (click)=\"techOnClick()\">\r\n          <h1>TECHNOLOGY</h1>\r\n          <img class=\"modal__images\" src=\"src/images/technology.png\">\r\n        </section>\r\n        <section class=\"modal__card\" (click)=\"sportsOnClick()\">\r\n          <h1>SPORTS</h1>\r\n          <img class=\"modal__images\" src=\"src/images/sports.jpg\">\r\n        </section>\r\n        <section class=\"modal__card\" (click)=\"musicOnClick()\">\r\n          <h1>MUSIC</h1>\r\n          <img class=\"modal__images\" src=\"src/images/music.jpg\">\r\n        </section>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 1\">\r\n      <ul>\r\n        <li class=\"technology-list\">- I started to code when I was introduced to Vex Robotics through the team and courses</li>\r\n        <li class=\"technology-list\">- In Vex Robotics, we are tasked to design robots to fulfill a various challenge, and to compete against other robots</li>\r\n        <li class=\"technology-list\">- My first year I completed the challenge “Nothing But Net” in which we shoot balls into nets, we made it to Provincials.  The next challenge was “Starstruck” which we throw stars and cubes over a wall and get our robots to hang</li>\r\n        <li class=\"technology-list\">- I was one of the teams coders and learned many software and engineering concepts</li>\r\n        <li class=\"technology-list\">- From these experiences, I started to take online courses to develop my first website using HTML and CSS</li>\r\n        <li class=\"technology-list\">- I have gone forward with taking university courses such as Digital Computation in C++ and applying my knowledge through coop experiences and projects</li>\r\n        <li><b>Certifications: </b><u class=\"certification-click\" (click)=\"robotC()\">RobotC for VEX Programming from Carnegie Mellon University</u> , <u class=\"certification-click\" (click)=\"cssBasic()\">W3C CSS Basics</u></li>\r\n      </ul>\r\n      <div class=\"robotwrapper\">\r\n        <img src=\"src/images/Robot.jpg\" alt=\"src/images/technology.png\" class=\"robot\">\r\n        <img src=\"src/images/web1.JPG\" alt=\"src/images/Robot.jpg\" class=\"robot\">\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 2\">\r\n      <ul>\r\n        <li class=\"technology-list\">I have played many sports throughout my life, they teach me teamwork and how to be competitive</li>\r\n        <li class=\"technology-list\">These are the sports I currently do:</li>\r\n        <div *ngIf=\"state === 2\" class=\"sports__container\">\r\n        <section class=\"modal__card\" (click)=\"soccerOnClick()\">\r\n            <h1>SOCCER</h1>\r\n            <img class=\"modal__images\" src=\"src/images/soccer.png\">\r\n          </section>\r\n          <section class=\"modal__card\" (click)=\"hockeyOnClick()\">\r\n            <h1>HOCKEY</h1>\r\n            <img class=\"modal__images\" src=\"src/images/hockey.jpg\">\r\n          </section>\r\n          <section class=\"modal__card\" (click)=\"tennisOnClick()\">\r\n            <h1>TENNIS</h1>\r\n            <img class=\"modal__images\" src=\"src/images/tennis.gif\">\r\n          </section>\r\n          <section class=\"modal__card\" (click)=\"tkdOnClick()\">\r\n            <h1>TAEKWONDO</h1>\r\n            <img class=\"modal__images\" src=\"src/images/taekwondo.jpg\">\r\n          </section>\r\n        </div>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 3\">\r\n      <ul>\r\n        <li class=\"technology-list\">- Music has been a big part of my life</li>\r\n        <li class=\"technology-list\">- I completed my Grade 6 piano and moved on to the clarinet in high school</li>\r\n        <li class=\"technology-list\">- I participated in the Etobicoke Youth Band for two years, a senior Community band that one auditions for</li>\r\n        <li class=\"technology-list\">- We played an enriched repertoire of music and received first place at the Kiwanis Music Festival</li>\r\n        <li class=\"technology-list\">- I was selected as a sectional leader in the Grade 10 trip band, which performed at many schools, and community centres in Chicago</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 4\">\r\n      <ul>\r\n      <li class=\"technology-list\">- I have played soccer for more than 15 years, I played house league soccer for many years during the summer while growing up</li>\r\n      <li class=\"technology-list\">- Playing soccer taght me teamwork, the competitive edge and to helped me stay active</li>\r\n      <li class=\"technology-list\">- I continue to do it as an intramural sport at UW</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 5\">\r\n      <ul>\r\n      <li class=\"technology-list\">- I do tennis lessons every summer, every day since I was 9 years old at Thorncrest Community Village</li>\r\n      <li class=\"technology-list\">- As I first picked up a racquet I have loved the game and in high school started to play it throughout the winter at Eglington Flats</li>\r\n    </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 6\">\r\n      <ul>\r\n        <li class=\"technology-list\">- I have played house league hockey for a number of years starting from the age of 7 yrs old</li>\r\n        <li class=\"technology-list\">- Playing the game has taught me teamwork, determination, and commitment</li>\r\n        <li class=\"technology-list\">- Recently, I have switched to ball hockey and play in the Goan Hockey Leauge</li>\r\n      </ul>\r\n    </div>\r\n\r\n    <div *ngIf=\"state === 7\">\r\n      <ul>\r\n        <li class=\"technology-list\">- The newest sport I've taken up is a martial art</li>\r\n        <li class=\"technology-list\">- It is a martial art of discipline, skill, and technique</li>\r\n        <li class=\"technology-list\">- I am practicing taekwondo during my coop terms</li>\r\n      </ul>\r\n    </div>\r\n    </main>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/aboutme/aboutme.component.scss":
/*!******************************************************!*\
  !*** ./src/app/pages/aboutme/aboutme.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".aboutme__wrapper {\n  margin-right: auto;\n  /* 1 */\n  margin-left: auto;\n  /* 1 */\n  max-width: 960px;\n  /* 2 */\n  padding-right: 10px;\n  /* 3 */\n  padding-left: 10px;\n  /* 3 */\n  height: 100vh;\n  width: 100vw; }\n\n.background-gradient__circle {\n  position: absolute;\n  right: 0;\n  height: inherit;\n  width: inherit; }\n\n.light-circle {\n  color: #00FF9B; }\n\n.aboutme__modalwrapper {\n  height: 85%;\n  width: 65%;\n  border-radius: 1rem;\n  position: absolute;\n  z-index: 3;\n  display: -ms-grid;\n  display: grid;\n  margin-top: 93px !important;\n  margin: auto;\n  justify-items: center; }\n\n.modal__header {\n  background-image: linear-gradient(rgba(131, 131, 255, 0.5), rgba(255, 255, 255, 0.5));\n  color: #fff;\n  top: 0;\n  width: 100%;\n  height: 80%;\n  border-top-left-radius: 1rem;\n  border-top-right-radius: 1rem;\n  -ms-grid-column: 1;\n      grid-column-start: 1;\n  -ms-grid-column-span: 2;\n  grid-column-end: 3;\n  -ms-grid-row: row1-start;\n      grid-row-start: row1-start;\n  -ms-grid-row-span: NaN;\n  grid-row-end: 4; }\n\n.modal__content {\n  width: 100%;\n  padding: 2rem;\n  margin-top: 177px;\n  -ms-grid-column: 1;\n  -ms-grid-column-span: 2;\n  grid-column: 1 / span 2;\n  grid-row: third-line / 4;\n  background-color: #fff;\n  border-bottom-left-radius: 1rem;\n  border-bottom-right-radius: 1rem; }\n\n.modal__title {\n  color: white;\n  text-align: center;\n  padding-top: 50px;\n  font-size: 40px;\n  font-weight: bolder;\n  padding-bottom: 2rem; }\n\n.modal__underline {\n  background: 0 0;\n  border-radius: 5px;\n  height: 5px;\n  box-shadow: 0 3rem 0 0 #fff;\n  margin: auto;\n  width: 20%; }\n\n.modal__container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[3];\n      grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(auto-fill, 1fr);\n  align-items: center;\n  justify-items: center;\n  height: 372px; }\n\n.sports__container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: (1fr)[4];\n      grid-template-columns: repeat(4, 1fr);\n  grid-template-rows: repeat(auto-fill, 1fr);\n  align-items: center;\n  justify-items: center;\n  height: 372px; }\n\n.modal__card {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 1fr;\n      grid-template-columns: 1fr;\n  -ms-grid-rows: 1fr 1fr 1fr;\n      grid-template-rows: 1fr 1fr 1fr;\n  box-shadow: 0 0 2rem rgba(0, 0, 255, 0.1);\n  justify-items: center;\n  padding: 2rem;\n  margin: -2rem;\n  width: 85%;\n  height: 72%;\n  cursor: pointer;\n  background-color: #fff;\n  border-radius: 1.75rem;\n  -webkit-animation: 1.25s ease-in-out fadein;\n          animation: 1.25s ease-in-out fadein; }\n\n.modal__images {\n  height: 142px; }\n\n.back__button {\n  position: absolute;\n  top: 8rem;\n  left: 2.25rem;\n  width: 5rem;\n  cursor: pointer;\n  z-index: 3; }\n\n.technology-list {\n  padding-bottom: 15px; }\n\n.sport-list {\n  padding-left: 20px; }\n\n.robotwrapper {\n  padding-top: 10px;\n  display: flex;\n  flex-direction: row; }\n\n.robot {\n  display: block;\n  height: 150px;\n  margin: auto; }\n\n.certification-click {\n  cursor: pointer; }\n"

/***/ }),

/***/ "./src/app/pages/aboutme/aboutme.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/aboutme/aboutme.component.ts ***!
  \****************************************************/
/*! exports provided: AboutMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutMeComponent", function() { return AboutMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutMeComponent = /** @class */ (function () {
    function AboutMeComponent(ui) {
        this.ui = ui;
        this.state = 0;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darksMode = isDark;
        });
    };
    AboutMeComponent.prototype.techOnClick = function () {
        this.state = 1;
    };
    AboutMeComponent.prototype.sportsOnClick = function () {
        this.state = 2;
    };
    AboutMeComponent.prototype.musicOnClick = function () {
        this.state = 3;
    };
    AboutMeComponent.prototype.soccerOnClick = function () {
        this.state = 4;
    };
    AboutMeComponent.prototype.tennisOnClick = function () {
        this.state = 5;
    };
    AboutMeComponent.prototype.hockeyOnClick = function () {
        this.state = 6;
    };
    AboutMeComponent.prototype.tkdOnClick = function () {
        this.state = 7;
    };
    AboutMeComponent.prototype.backClick = function () {
        if (this.state >= 4)
            this.state = 2;
        else
            this.state = 0;
    };
    AboutMeComponent.prototype.robotC = function () {
        window.open('https://cs2n.org/shared_achievement/UserMilestone/915c1f9d86cd', '_blank');
    };
    AboutMeComponent.prototype.cssBasic = function () {
        window.open('https://courses.edx.org/certificates/0b3da00dde9d4a0eb7e4a36ee78e7ec1', '_blank');
    };
    AboutMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-aboutme',
            template: __webpack_require__(/*! ./aboutme.component.html */ "./src/app/pages/aboutme/aboutme.component.html"),
            styles: [__webpack_require__(/*! ./aboutme.component.scss */ "./src/app/pages/aboutme/aboutme.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], AboutMeComponent);
    return AboutMeComponent;
}());



/***/ }),

/***/ "./src/app/pages/experiences/experiences.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/experiences/experiences.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"experiencewrapper\" [class.dark]=\"darksExpMode\">\r\n<div class=\"experience-content\">\r\n  <div class=\"job-content\">\r\n    <div class=\"job-wrapper\">\r\n      <img class=\"job-image\" src=\"src/images/SOTI.jpg\">\r\n      <div class=\"job-description\">My position as a Junior Software Developer at SOTI has further increased my knowledge with new leading technologies and web applications,\r\n        practicing with front end technologies such as Angular5, TypeScript, and Bulma.\r\n        This experience has advanced my education to take theoretical courses and computationally practice them. With this opportunity,\r\n        I have also experienced the purpose of a practical design, and to write clean formatted code.</div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"job-content job-2\">\r\n    <div class=\"job-wrapper\">\r\n      <img class=\"job-image\" src=\"src/images/groupby.png\" alt=\"\">\r\n      <div class=\"job-description\">I am currently a Full Stack Developer at Groupby Inc.  I have expanded my technical and communication skills\r\n      to practice a different framework and learn new languages such as regular expressions, Riot.js and Node.js.  We practice Agile development, so there is consistent\r\n    communication between members of the team.  Through this experience I have learned that code isn't only about finding a solution but looking from different perspectives\r\n  to find solution that has the best performance, as well to constantly quality check your code to find bugs and make a responsive, lightweight design.</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/experiences/experiences.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/pages/experiences/experiences.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".experiencewrapper {\n  width: 100%;\n  height: 100%; }\n\n.dark {\n  opacity: 1;\n  background: linear-gradient(to bottom, #B290FF, #2E1D65);\n  transition: opacity 300ms linear; }\n\n.experience-content {\n  box-sizing: border-box;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1400px;\n  padding-top: 93px;\n  padding-left: 30px;\n  padding-right: 30px;\n  height: 100%; }\n\n.job-content {\n  background-color: #f2f2f2;\n  overflow: hidden;\n  padding-left: 36px;\n  padding-right: 36px;\n  position: relative;\n  border-radius: 1rem;\n  height: 350px; }\n\n.job-2 {\n  margin-top: 93px; }\n\n.job-wrapper {\n  display: flex;\n  padding: 50px; }\n\n.job-image {\n  border-radius: 1rem;\n  height: 250px; }\n\n.job-description {\n  padding-left: 50px;\n  padding-top: 10px;\n  line-height: 50px; }\n"

/***/ }),

/***/ "./src/app/pages/experiences/experiences.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/experiences/experiences.component.ts ***!
  \************************************************************/
/*! exports provided: ExperiencesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExperiencesComponent", function() { return ExperiencesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ExperiencesComponent = /** @class */ (function () {
    function ExperiencesComponent(ui) {
        this.ui = ui;
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darksExpMode = isDark;
        });
    };
    ExperiencesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-experiences',
            template: __webpack_require__(/*! ./experiences.component.html */ "./src/app/pages/experiences/experiences.component.html"),
            styles: [__webpack_require__(/*! ./experiences.component.scss */ "./src/app/pages/experiences/experiences.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], ExperiencesComponent);
    return ExperiencesComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css\">\r\n<script src=\"https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.js\"></script>\r\n<script src=\"https://unpkg.com/ionicons@4.1.1/dist/ionicons.js\"></script>\r\n<div id=\"home-content\" class=\"home-content\" [ngClass]=\"{'home-dark': darkMode}\">\r\n  <div *ngIf=\"innerWidth > 1024\" class=\"column is-mobile\" id=\"messenger\" [ngClass]=\"{'home-dark': darkMode}\">I am life long learner with a passion for technology!\r\n    <div class=\"home-content-icons\">\r\n      <a href=\"https://www.linkedin.com/in/tyler-d-silva-583b66163\" class=\"buttons\"[ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-social-linkedin\"></i></a>\r\n      <a href=\"https://github.com/tylerdsilva/\" class=\"buttons\" [ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-social-github\"></i></a>\r\n      <a href=\"../../src/resume/Tyler-D'Silva-Software.pdf\" class=\"buttons\" [ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-document\"></i></a>\r\n    </div>\r\n  </div>\r\n  <div *ngIf=\"innerWidth <= 1024\" class=\"columns is-desktop\">\r\n    <div class=\"column\">\r\n      <div class=\"columns is-mobile\">\r\n        <div class=\"column\" id=\"messenger\" [ngClass]=\"{'home-dark': darkMode}\">\r\n          I am life long learner with a passion for technology!\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"home-content-icons column\">\r\n      <div class=\"columns is-mobile\">\r\n        <div class=\"column icons\">\r\n          <a href=\"https://www.linkedin.com/in/tyler-d-silva-583b66163\" class=\"buttons column\"[ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-social-linkedin\"></i></a>\r\n        </div>\r\n        <div class=\"column icons\">\r\n          <a href=\"https://github.com/tylerdsilva/\" class=\"buttons column\" [ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-social-github\"></i></a>\r\n        </div>\r\n        <div class=\"column icons\">\r\n          <a href=\"../../src/resume/Tyler-D'Silva-Software.pdf column\" class=\"buttons\" [ngClass]=\"{'home-dark': darkMode}\" target=\"_blank\"><i class=\"ion-document\"></i></a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"columns is-mobile animation\">\r\n    <svg class=\"svg_animation\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 1100 800\">\r\n      <g fill=\"none\" fill-rule=\"evenodd\">\r\n        <path stroke=\"#31B495\" d=\"M781.02 488.77v69.78c0 1.08-.88 1.96-1.97 1.96l-135.12-.04c-1.09 0-2.6.62-3.38 1.39l-39.23 38.96a5.52 5.52 0 0 1-3.37 1.4h-75.38a1.97 1.97 0 0 1-1.97-1.97v-33.5\"/>\r\n        <path stroke=\"#F4D21F\" d=\"M674.88 355.57l45.54-45.24a5.42 5.42 0 0 0 1.39-3.35l-.06-10.38c0-1.08-.63-2.58-1.4-3.35l-43.38-43.07a1.94 1.94 0 0 1 0-2.77l82.83-82.25a5.52 5.52 0 0 1 3.37-1.4l44.94.1c1.08 0 2.6-.62 3.37-1.37L952.5 22.65\"/>\r\n        <path stroke=\"#1AACA8\" d=\"M507-76.68v265.47a4 4 0 0 0 4 3.99H566c1.08 0 1.97.88 1.97 1.96v147.5c0 1.08-.63 2.59-1.4 3.35l-47.9 47.4a5.45 5.45 0 0 0-1.4 3.34c0 2.25.64 3.76 1.4 4.53l53.82 53.26c.77.76 1.76 1.39 2.19 1.39.43 0 .79.88.79 1.96v70.17c0 1.07-.89 1.96-1.97 1.96l-85.81-.04c-1.09 0-2.6.62-3.38 1.39l-1.55 1.54a5.52 5.52 0 0 1-3.38 1.4h-9.29\"/>\r\n        <path stroke=\"#1F8C43\" d=\"M8 127.82v391.06a4.04 4.04 0 0 0 4 4.04L140.8 524\"/>\r\n        <path stroke=\"#1AA5D0\" d=\"M894.01 374l49.8-49.44a5.52 5.52 0 0 1 3.37-1.4h92.41c1.09 0 2.6.63 3.38 1.4l27.18 26.99\"/>\r\n        <path stroke=\"#1AA5D0\" d=\"M894.01 374l49.8-49.44a5.52 5.52 0 0 1 3.37-1.4h92.41c1.09 0 2.6.63 3.38 1.4l27.18 26.99\"/>\r\n        <path stroke=\"#1F8C43\" d=\"M755.16 213.9l70.82.04c1.08 0 2.6-.63 3.37-1.4l91.61-90.97a5.52 5.52 0 0 1 3.37-1.39h77.07l-71.29-72.13a5.45 5.45 0 0 1-1.4-3.35V16.87\"/>\r\n        <path stroke=\"#9DCA40\" d=\"M261.78-52.44l11.16 11.08c.77.77 1.4 2.28 1.4 3.35V-5L156.7 111.03l-85.4 84.8a5.45 5.45 0 0 0-1.4 3.35v100.67c0 1.08.89 1.96 1.97 1.96h50.4c1.09 0 1.98.88 1.98 1.96l.07 26.92c0 1.07.9 1.96 1.98 1.96l335.73.13c1.09 0 1.98.88 1.98 1.96v36.79l-42.99 43.78a5.52 5.52 0 0 1-3.37 1.4H385.2\"/>\r\n        <path stroke=\"#DA5A98\" d=\"M564.8 549.64v17.76c0 1.08-.64 2.59-1.4 3.35L382.28 750.6a5.52 5.52 0 0 1-3.38 1.39h-109.1c-1.09 0-1.97.88-1.97 1.96v23.37c0 1.07-.9 1.96-1.98 1.96h-83.54c-1.08 0-1.97.88-1.97 1.96v45.8c0 1.07.89 1.95 1.97 1.95h29.89c1.08 0 1.97.88 1.97 1.96v51.07c0 1.08.63 2.59 1.4 3.35l10.32 10.25c.77.76 2.29 1.39 3.37 1.39h111.77c1.09 0 1.34.62.57 1.39M482.82 656H630.9\"/>\r\n        <path stroke=\"#E5683E\" d=\"M440.53 245.87l-31.7 31.48a5.52 5.52 0 0 1-3.37 1.39h-62.37c-1.09 0-2.6.62-3.38 1.39l-2.68 3.66-264.59.02c-1.08 0-2.6-.63-3.37-1.4l-47.3-46.97a5.52 5.52 0 0 0-3.37-1.39h-57.47l-1.12-34.61c0-1.08-.63-2.59-1.4-3.35l-66.54-65.94\"/>\r\n        <path stroke=\"#9F83B6\" d=\"M705.31 221.73h7.83c1.09 0 2.6.63 3.37 1.4l45.8 45.6c.78.76 1.4 2.27 1.4 3.35v13.94c0 1.08.46 1.96 1.03 1.98.56 0 1.03.9 1.03 1.98v10.77l-.15 110.84c0 1.08-.89 1.96-1.98 1.96H628.32c-1.08 0-2.6-.63-3.37-1.4l-12.2-12.12a5.52 5.52 0 0 0-3.38-1.39h-46.18a2 2 0 0 0-2 1.96l-.17 26.74c0 1.08-.63 2.59-1.4 3.35l-8.82 8.76a5.52 5.52 0 0 1-3.37 1.39l-26.65-.06c-1.09 0-2.6.62-3.38 1.39l-48.1 47.78a5.52 5.52 0 0 1-3.38 1.39h-16.37l-79.45-.02c-1.09 0-2.6.63-3.36 1.39L220.71 639.06a5.47 5.47 0 0 1-3.35 1.4H31.06\"/>\r\n        <path stroke=\"#BC6D21\" d=\"M145.43 99.41L289.6 243.5c.77.76 2.29 1.39 3.37 1.39h146.76c1.09 0 2.6.62 3.38 1.39l31.93 31.71c.77.77 1.4 2.27 1.4 3.35V474.1c0 1.08-.63 2.59-1.4 3.35l-7.6 7.54a5.52 5.52 0 0 1-3.36 1.4h-20.62l-20.67 20.97-2.78 2.78L289.37 640a5.45 5.45 0 0 0-1.4 3.35l.16 177.85\"/>\r\n        <path stroke=\"#DA1817\" d=\"M318.82 380.62h94.88c1.09 0 2.6.63 3.38 1.39l14.97 14.87c.77.76 2.29 1.39 3.37 1.39h72.99c1.08 0 2.6.63 3.35 1.39l58.57 58.53c.77.77 2.27 1.4 3.35 1.4h103.37c1.08 0 1.97-.89 1.97-1.97v-14.7c0-1.09-.89-1.97-1.97-1.97l-6.7.02H630.1a1.97 1.97 0 0 1-1.97-1.96v-57c0-1.08-.63-2.59-1.4-3.35l-14.58-14.48a5.45 5.45 0 0 1-1.4-3.35v-17.3c0-1.07-.63-2.58-1.4-3.34L597 327.92a5.52 5.52 0 0 0-3.37-1.39h-17.4c-1.09 0-2.6-.62-3.38-1.39l-41.8-41.5a5.52 5.52 0 0 0-3.37-1.4h-41.34\"/>\r\n        <path stroke=\"#9F9FA0\"/>\r\n        <path stroke=\"#74BB63\" d=\"M855.2 194.4h59.84c1.09 0 1.97.89 1.97 1.96v28.74c0 1.08.64 2.59 1.4 3.35l50.96 50.6c.77.76 1.4 2.27 1.4 3.35v101.47l105.2 104.27\"/>\r\n        <path stroke=\"#DA5A98\" d=\"M638.46 305.73L651 293.29c.77-.74.77-2 0-2.76l-31.35-31.13c-.76-.74-.76-2 0-2.76l18.53-18.4a5.52 5.52 0 0 1 3.37-1.39l160.41-.2 423.37 1.2c1.08 0 1.97.89 1.97 1.96v71.5\"/>\r\n        <path stroke=\"#BC6D21\" d=\"M438.61 486.03h-18.54c-1.08 0-2.6-.63-3.37-1.4l-74.94-74.41a5.52 5.52 0 0 0-3.37-1.4h-38.57c-1.08 0-2.6-.62-3.37-1.38l-47-46.68-36.58-.04-57 71.59a5.45 5.45 0 0 0-1.4 3.35v23.9\"/>\r\n        <path stroke=\"#74BB63\" d=\"M882.06 358.97l-46.92 46.6a5.52 5.52 0 0 1-3.38 1.39h-94.64c-1.09 0-2.6-.63-3.38-1.4l-30.6-30.33a5.52 5.52 0 0 0-3.36-1.4l-34.94.04c-1.08 0-2.6.63-3.37 1.4l-29.57 29.36a5.52 5.52 0 0 1-3.37 1.39l-14.55-14.35a5.63 5.63 0 0 0-3.42-1.4l-156.97-.25c-1.11 0-2.65.63-3.43 1.4l-27.85 27.61a5.52 5.52 0 0 1-3.38 1.4H-23.82l-88.65.2-12.44 12.35\"/>\r\n        <path stroke=\"#2283BC\" d=\"M292.9 643.74l59.56-59.12a5.52 5.52 0 0 1 3.37-1.39h23.93c1.08 0 2.6-.63 3.37-1.39l46.53-46.21a5.52 5.52 0 0 1 3.38-1.4h33.53l153.67-.01c1.08 0 1.97-.88 1.97-1.96V420.01c0-1.07-.63-2.58-1.4-3.35l-38.64-38.37a5.45 5.45 0 0 1-1.4-3.35v-51.52c0-1.08-.64-2.59-1.4-3.35L468.91 210.39a5.52 5.52 0 0 0-3.38-1.4l-180.49.2\"/>\r\n        <path stroke=\"#DA5A98\" d=\"M484.13 548.71h-37.09c-1.08 0-2.6.63-3.37 1.4l-69.02 68.54c-.77.76-.77 2 0 2.76l28.09 27.78c.77.76 2.29 1.39 3.37 1.39h62.41\"/>\r\n        <path stroke=\"#31B495\" d=\"M520.82 561.7v-4.74c0-1.08-.89-1.96-1.98-1.96h-13.21c-1.09 0-2.6-.62-3.37-1.39l-43.36-42.88a5.45 5.45 0 0 1-1.4-3.35v-190.4c0-1.08.63-2.6 1.4-3.36l20.89-20.74a5.45 5.45 0 0 0 1.4-3.35v-95.4c0-1.08-.63-2.58-1.4-3.35L292.4 4.7l-.6-40.88c0-1.08-.62-2.58-1.4-3.35L278.8-51.07\"/>\r\n        <path stroke=\"#1EB2D8\" d=\"M275.76 745h99.28c1.09 0 2.6-.63 3.38-1.4l174.33-172.75a5.52 5.52 0 0 1 3.38-1.4h46.75c1.08 0 2.6-.62 3.35-1.38l51.47-51.46a5.42 5.42 0 0 0 1.38-3.35V311.29c0-1.07-.63-2.58-1.4-3.35l-51.84-51.3a5.52 5.52 0 0 0-3.38-1.4h-17.95a1.97 1.97 0 0 1-1.97-1.95v-44.47c0-1.07-.89-1.96-1.97-1.96h-88.63a1.97 1.97 0 0 1-1.97-1.96v-19.2c0-1.07-.64-2.58-1.4-3.34L309.87 4.92\"/>\r\n        <path stroke=\"#F4D21F\" d=\"M1002.65 123.83H926.5c-1.08 0-2.6.62-3.37 1.39l-92.28 91.46a5.52 5.52 0 0 1-3.37 1.39l-131.87-.08c-1.09 0-2.6.63-3.37 1.37l-51.9 51.19c-.77.76-.77 2 0 2.76l21.22 21.1c.77.76 1.4 2.27 1.4 3.35v15.69\"/>\r\n        <path stroke=\"#BE2F39\" d=\"M672.51 437.64h54.25c1.08 0 2.6.63 3.37 1.4l49.04 48.7c.77.76 2.29 1.38 3.37 1.38h45.16c1.08 0 2.6-.62 3.37-1.39L914.39 405a5.52 5.52 0 0 1 3.37-1.4h42.22c1.08 0 2.6.63 3.37 1.4l100.8 100.1\"/>\r\n        <path stroke=\"#E5683E\" d=\"M672.51 434.31h55.63c1.08 0 2.6.63 3.37 1.4l49.14 48.8c.77.76 2.29 1.38 3.37 1.38l41.9-.04c1.08 0 2.6-.62 3.37-1.39l62.08-61.68a5.45 5.45 0 0 0 1.4-3.35l-.1-268.18c0-1.08-.63-2.59-1.4-3.35l-99.8-99.28a5.52 5.52 0 0 0-3.37-1.39H422.62c-1.08 0-2.6.63-3.37 1.4L260.28 206.3a5.52 5.52 0 0 1-3.38 1.39H127.3c-1.08 0-2.6.62-3.37 1.39l-36.71 36.45a5.45 5.45 0 0 0-1.4 3.35v185.1\"/>\r\n        <path stroke=\"#1EB2D8\" d=\"M410.1 713.73l17.53 17.42c.77.76 2.29 1.39 3.37 1.39h42.02c1.09 0 2.6-.63 3.37-1.4l26.02-25.83 123.2-.31\"/>\r\n        <path/><path stroke=\"#2283BC\" d=\"M307.34 907.08c.77-.77.52-1.4-.57-1.4H108.29a1.97 1.97 0 0 1-1.98-1.95V743.59c0-1.08.9-1.96 1.98-1.96h264.38c1.09 0 2.6-.63 3.38-1.4l23.75-23.58c.77-.76.77-2 0-2.76l-80.84-80.1c-.77-.76-.51-1.4.57-1.4h137.53c1.09 0 2.6-.62 3.38-1.38l53.63-53.26a5.52 5.52 0 0 1 3.37-1.4l88.57-.2c1.09 0 2.6-.62 3.38-1.38l55.6-55.22a5.45 5.45 0 0 0 1.4-3.35V409.93c0-1.08.9-1.96 1.98-1.96h29c1.08 0 2.6-.63 3.37-1.4l43.32-43.01a5.52 5.52 0 0 1 3.37-1.4h6.11c1.09 0 2.6-.62 3.38-1.38l53.12-52.76a5.52 5.52 0 0 1 3.37-1.39h13.6c1.08 0 2.6.63 3.37 1.4L892.79 370c.77.77 2.29 1.4 3.37 1.4h74.06c1.08 0 2.6.62 3.37 1.38l93.97 93.5\"/>\r\n        <path stroke=\"#E6632A\" d=\"M647.56 429.46v-33.62c0-1.08-.63-2.59-1.4-3.35l-31.45-31.22a5.52 5.52 0 0 0-3.37-1.4h-36.87c-1.08 0-2.6.63-3.37 1.4l-74.35 73.83a5.52 5.52 0 0 1-3.37 1.39H440.9a1.97 1.97 0 0 1-1.98-1.96v-71.5c0-1.08-.88-1.96-1.97-1.96H9.3c-1.08 0-2.6.63-3.37 1.4l-37.9 37.62a5.52 5.52 0 0 1-3.37 1.4h-57c-1.1 0-2.61.62-3.38 1.38l-13.2 13.1a5.52 5.52 0 0 1-3.37 1.4h-13.2\"/><path stroke=\"#F4D21F\" d=\"M219.9 357h144.49l76.54.13c1.08 0 1.97.88 1.97 1.96v71.7c0 1.08.89 1.96 1.97 1.96h46.36c1.08 0 2.6-.63 3.37-1.4l74.35-74a5.52 5.52 0 0 1 3.37-1.4h192.33c1.09 0 2.6-.62 3.37-1.38l43.58-43.28a5.52 5.52 0 0 1 3.37-1.39h10.6c1.08 0 2.6.63 3.37 1.4l62.65 62.2c.77.77 2.29 1.4 3.37 1.4h73.87c1.09 0 2.6.63 3.38 1.4l94.12 93.47 9.27.57c.84 0 2.17-.62 2.93-1.39l104.08-89.36a1.97 1.97 0 0 1 2.78 0l6.3 6.25\"/><path stroke=\"#9DCA40\" d=\"M599.92 564.19a6.6 6.6 0 0 0 4.04-1.67l47.94-47.6a6.5 6.5 0 0 0 1.67-4.01V313.84c0-1.3-.75-3.1-1.67-4.02l-47.94-47.6a6.6 6.6 0 0 0-4.04-1.66h-97.84a6.6 6.6 0 0 0-4.05 1.66l-47.93 47.6a6.5 6.5 0 0 0-1.68 4.02v197.07c0 1.29.75 3.1 1.68 4.01l47.93 47.6a6.6 6.6 0 0 0 4.05 1.67h97.84z\"/>\r\n        <path stroke=\"#1EB2D8\" d=\"M648.25 527.17v33.3c0 1.08-.63 2.58-1.4 3.35l-87.37 86.76c-.77.76-.51 1.39.57 1.39h70.82\"/><path stroke=\"#BC6D21\" d=\"M476.04 273.32v-18.86c0-1.08-.63-2.59-1.4-3.35l-30.9-30.68a5.52 5.52 0 0 0-3.37-1.4H274.62\"/><path stroke=\"#9F83B6\" d=\"M923.43 372.6V119.09c0-1.07-.64-2.58-1.4-3.34L757.4-47.74a5.52 5.52 0 0 0-3.37-1.39H351.57c-1.09 0-2.6.63-3.38 1.4L310.5-10.3\"/>\r\n        <path stroke=\"#ED8E3F\" d=\"M317-49.77L304.42-37.3a5.58 5.58 0 0 0-1.42 3.35l-.36 21.45a5.3 5.3 0 0 0 1.36 3.35L493.36 178.9c.77.76 1.4 2.27 1.4 3.35v18.41c0 1.08.89 1.96 1.97 1.96h87.86c1.09 0 1.98.88 1.98 1.96v34.67c0 1.08.88 1.96 1.97 1.96h23.3c1.08 0 2.6.63 3.37 1.4l46.16 45.83c.77.77 1.4 2.28 1.4 3.35v138.64l.07 84.4c0 1.08-.63 2.6-1.38 3.35l-53.63 53.27a5.52 5.52 0 0 1-3.37 1.39H557.9c-1.08 0-2.6.63-3.37 1.39L380.57 746.98a5.52 5.52 0 0 1-3.38 1.39H112.47c-1.09 0-1.97.88-1.97 1.96v93.24c0 1.08-.9 1.96-1.98 1.96h-224.54\"/>\r\n        <path stroke=\"#DA5A98\" d=\"M415.07 612.97l63.3-62.86a5.52 5.52 0 0 1 3.37-1.4h124.67c1.08 0 2.6-.6 3.37-1.37l28.23-27.83a5.35 5.35 0 0 0 1.4-3.33V478.2c0-1.07.89-1.96 1.97-1.96H694c1.09 0 1.97-.88 1.97-1.95v-52.11c0-1.08.64-2.59 1.4-3.35l29.57-29.37a5.45 5.45 0 0 0 1.4-3.35v-76c0-1.08.9-1.96 1.98-1.96h37.9a4 4 0 0 0 4-4v-29.3c0-1.08.63-2.59 1.4-3.35l35.35-35\"/><path stroke=\"#1AA5D0\" d=\"M893.1 374.7L847.5 420a5.52 5.52 0 0 1-3.37 1.38H618.66c-1.09 0-2.6-.62-3.37-1.39l-81.65-81.08a5.52 5.52 0 0 0-3.37-1.39H384.49c-1.08 0-2.6.63-3.37 1.4l-17.14 17.02\"/>\r\n        <path stroke=\"#55B549\" d=\"M288.52 640.2h-46.9c-1.09 0-1.98.88-1.98 1.95v26.65c0 1.07-.89 1.95-1.97 1.95h-89.32\"/><path stroke=\"#D3C452\" d=\"M281.34 229.6l9.65 9.59c.77.76 2.29 1.39 3.37 1.39l146.76-.2c1.09 0 2.6.63 3.38 1.37l115.95 114c.77.76.77 1.99 0 2.75l-37.2 37.05a1.96 1.96 0 0 0 0 2.78l49.62 49.28c.77.77 2.3 1.4 3.38 1.4h138.28c1.08 0 2.6.62 3.37 1.39l37.26 37c.77.76 2.3 1.4 3.38 1.4h21.7\"/>\r\n        <path stroke=\"#9DCA40\" d=\"M-116.02 841.87h216.77c1.09 0 1.97-.89 1.97-1.96v-99.83c0-1.08.9-1.96 1.98-1.96h266.24c1.08 0 2.6-.62 3.37-1.39l20.18-20.04c.77-.76.77-2.02 0-2.76l-78.7-78.2a5.45 5.45 0 0 1-1.4-3.35v-1.57c0-1.07.88-1.96 1.97-1.96l139.22.02c1.09 0 2.6-.62 3.38-1.39l53.7-53.48a4.86 4.86 0 0 1 2.8-1.39c.76 0 1.41-.88 1.41-1.96v-6.62\"/><path stroke=\"#B00D7C\" d=\"M317.92 257.82l73.16 72.65c.77.77 1.4 2.27 1.4 3.35v45.25c0 1.08.63 2.59 1.4 3.35l12.02 11.93c.77.77 2.28 1.4 3.37 1.4h9.86c1.09 0 2.6-.63 3.38-1.4l6.29-6.25a5.52 5.52 0 0 1 3.37-1.39h85.81c1.08 0 2.6-.62 3.37-1.39l63.1-62.66a5.52 5.52 0 0 1 3.38-1.4h161.56c1.08 0 1.97.89 1.97 1.96v178.66c0 1.07-.63 2.58-1.4 3.35l-11.42 11.34a5.52 5.52 0 0 1-3.38 1.39H529.03a1.97 1.97 0 0 1-1.98-1.96v-73.07c0-1.07-.88-1.96-1.97-1.96h-88.26a1.97 1.97 0 0 1-1.97-1.95V406.5c0-1.08-.89-1.96-1.97-1.96-1.99 0-3.5-.63-4.28-1.4l-7.44-7.38\"/><path stroke=\"#DA5A98\" d=\"M650.42-78.35v211.36c0 1.08.63 2.59 1.4 3.35l46.73 46.4c.77.77 1.4 2.28 1.4 3.36v35.79l-2.49-.14c-.75 0-1.97.63-2.74 1.4l-18.32 18.19a5.45 5.45 0 0 0-1.4 3.35v116.95c0 1.07.63 2.58 1.38 3.35l46.53 46.58a5.42 5.42 0 0 1 1.38 3.35l-.02 30.34c0 1.08-.63 2.59-1.4 3.35l-4.91 4.88a5.52 5.52 0 0 1-3.37 1.4H599.52c-1.08 0-1.97.87-1.97 1.95v36c0 1.08-.89 1.96-1.97 1.96h-92.71c-1.09 0-2.6.63-3.38 1.4l-19.58 19.45a5.52 5.52 0 0 1-3.38 1.39h-63.61\"/>\r\n        <path stroke=\"#1EB2D8\" d=\"M281.48 745v84.33c0 1.08-.89 1.96-1.97 1.96h-57.48c-1.09 0-1.98.88-1.98 1.96v10.36c0 1.08-.88 1.96-1.97 1.96H110.52\"/>\r\n        <path stroke=\"#F5C739\" d=\"M10.95 362.32l113.4 112.62c.78.77 2.3 1.4 3.38 1.4h36.12c1.08 0 2.6.62 3.37 1.38l205.45 204.03c.77.76 2.29 1.39 3.37 1.39l62.74.03h29.53c1.09 0 2.6.63 3.37 1.4l16.36 16.23c.77.77 2.29 1.4 3.37 1.4h134.34\"/><path stroke=\"#31B495\" d=\"M275.82 590.44l24.44-24.27a5.52 5.52 0 0 1 3.37-1.4h121.52c1.08 0 2.6.63 3.37 1.4l34.32 34.08c.77.77 2.3 1.4 3.38 1.4h54.36\"/><path stroke=\"#AD7D20\" d=\"M633.41 278.74l-21.36-21.22a5.45 5.45 0 0 1-1.4-3.35V-78.58\"/>\r\n        <path stroke=\"#1F8C43\" d=\"M754.4 192.02v20.11c0 1.08-.9 1.96-1.98 1.96h-94.49c-1.08 0-2.6.63-3.37 1.4l-50.28 49.93a5.45 5.45 0 0 0-1.4 3.35v56.41c0 1.08.63 2.59 1.4 3.35l10.63 10.56c.77.76 1.4 2.27 1.4 3.35v121.45c0 1.08-.89 1.96-1.97 1.96H429.6c-1.08 0-2.6-.62-3.37-1.39l-21.2-21.06-15.77 14.8a5.52 5.52 0 0 1-3.37 1.38H282.15c-1.08 0-2.6.63-3.37 1.37l-62.1 61.3a5.5 5.5 0 0 1-3.37 1.37h-69.85c-1.09 0-2.6.63-3.37 1.4l-68.22 67.73a5.52 5.52 0 0 1-3.37 1.4H34.1c-1.09 0-2.6.62-3.38 1.38l-61.64 61.22a5.45 5.45 0 0 0-1.4 3.35v98.02c0 1.08-.89 1.96-1.97 1.96h-30.76c-1.08 0-2.6.63-3.37 1.4l-48.29 47.95\"/>\r\n        <path stroke=\"#74BB63\" d=\"M184.55 422.03v34.09c0 1.07-.63 2.58-1.4 3.35l-56.48 55.88a5.52 5.52 0 0 1-3.37 1.4H-34.6\"/>\r\n        <path stroke=\"#E5683E\" d=\"M980.12 416.59l-15.05-14.95a5.52 5.52 0 0 0-3.38-1.4h-46.04c-1.08 0-2.6.63-3.37 1.4l-14.5 14.4c-.77.76-1.4.5-1.4-.57v-34.93c0-1.08-.63-2.58-1.4-3.35l-2.48-2.47\"/>\r\n        <path stroke=\"#DA5A98\" d=\"M826.77 238.25v54.43c0 1.08.63 2.59 1.4 3.35l86.38 85.78c.77.77 2.29 1.4 3.37 1.4h98.61c1.09 0 2.6-.63 3.36-1.4l22.6-22.8a5.47 5.47 0 0 1 3.36-1.39h106.38c1.08 0 1.97-.88 1.97-1.96l.04-95.24c0-1.08.89-1.96 1.97-1.96h39.02c1.09 0 1.97.88 1.97 1.96v48.1\"/><path stroke=\"#E6632A\" d=\"M12.87 361.05h-5c-1.1 0-2.61-.63-3.38-1.4l-17.72-17.58a5.52 5.52 0 0 0-3.37-1.4h-16.9c-1.09 0-2.6-.62-3.38-1.38l-55.64-55.26a5.52 5.52 0 0 0-3.38-1.4h-15.19\"/>\r\n\r\n        <path stroke=\"#3EB373\" d=\"M959.23 126.08l19.2 19.06c.76.76 2.28 1.39 3.36 1.39h177.42c1.09 0 1.97.88 1.97 1.96v100.84a3 3 0 0 0 3 3h36.42c1.08 0 1.97.88 1.97 1.96v54.65\"/><path stroke=\"#2765B0\" d=\"M33.17 798.75h242.12c1.08 0 1.97-.88 1.97-1.96V672.9c0-1.08-.89-1.96-1.97-1.96h-30.12a1.97 1.97 0 0 1-1.98-1.96v-26.76c0-1.07-.88-1.96-1.97-1.96h-20.87\"/><path stroke=\"#EB9D12\" d=\"M458.48 496.1h9.55c1.09 0 2.6-.63 3.37-1.4l48.23-47.83a5.52 5.52 0 0 1 3.38-1.39h24.26c1.08 0 2.6.63 3.37 1.39l23.26 23.1c.77.76 2.29 1.39 3.37 1.39h111.06c1.09 0 1.97-.88 1.97-1.96v-54.46c0-1.08-.63-2.59-1.4-3.33l-20.35-20.04-2.8-2.76-1.17-1.16a5.52 5.52 0 0 0-3.37-1.39h-11.66a1.97 1.97 0 0 1-1.97-1.96V310.6c0-1.08.88-1.96 1.97-1.96h77.38\"/><path stroke=\"#9DCA40\" d=\"M-34.94 402.19v111.19c0 1.07.63 2.58 1.4 3.35l49.06 48.71c.76.77 2.28 1.4 3.37 1.4h21.8c1.08 0 2.6.62 3.37 1.39l113 112.22c.78.77 2.3 1.4 3.38 1.4h170.6c1.08 0 1.97.87 1.97 1.95v60.41\"/>\r\n      </g>\r\n    </svg>\r\n  </div>\r\n  <div class=\"columns is-mobile\">\r\n    <div *ngIf=\"!darkMode\" class=\"arrow-down column\"></div>\r\n    <div *ngIf=\"darkMode\" class=\"white-arrow-down column\"></div>\r\n  </div>\r\n</div>\r\n<div id=\"about-me\">\r\n  <app-aboutme></app-aboutme>\r\n</div>\r\n<div id=\"experiences\">\r\n  <app-experiences></app-experiences>\r\n</div>\r\n<div id=\"projects\">\r\n  <app-projects></app-projects>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.scss":
/*!************************************************!*\
  !*** ./src/app/pages/home/home.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#about-me {\n  position: relative;\n  height: 100vh;\n  width: 100vw; }\n\n#experiences {\n  position: relative;\n  height: 100vh;\n  width: 100vw; }\n\n#projects {\n  position: relative;\n  height: 95vh;\n  width: 100vw; }\n\n#messenger {\n  text-align: center;\n  position: relative;\n  color: #4a4a4a;\n  margin-top: 100px;\n  font-family: monospace;\n  font-size: 25px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.9);\n  padding-bottom: 38px; }\n\n.home-dark {\n  color: #FFF !important; }\n\n.arrow-dark {\n  color: #FFF; }\n\n.arrow-dark .arrow-down::after {\n    border-right-color: #FFF !important;\n    border-bottom-color: #FFF !important; }\n\n.home-content {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  width: 100%;\n  height: 95vh; }\n\n.home-content-icons {\n  margin-top: 20px;\n  padding-left: 70px; }\n\n.svg_animation {\n  width: 100%;\n  height: 500px; }\n\n.animation {\n  display: flex;\n  flex-grow: 2;\n  position: relative; }\n\n.buttons {\n  display: unset;\n  margin-right: 100px;\n  margin-top: 8px;\n  color: #363636; }\n\na.buttons:hover {\n  color: grey; }\n\n.ion-social-linkedin {\n  font-size: 35px; }\n\n.ion-social-github {\n  font-size: 35px; }\n\n.ion-document {\n  font-size: 35px; }\n\n.icons {\n  text-align: center; }\n\n.home-content-arrow {\n  position: absolute;\n  top: 90%;\n  left: 50%; }\n\nsvg {\n  width: 30px;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-name: fadeInDown;\n          animation-name: fadeInDown;\n  -webkit-animation-fill-mode: both;\n          animation-fill-mode: both;\n  -webkit-animation-duration: 1s;\n          animation-duration: 1s; }\n\nsvg:hover {\n  color: #3273dc; }\n\nbody {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  overflow: hidden;\n  width: 100%;\n  height: 100%; }\n\n#arrow-down {\n  position: absolute;\n  left: 50%;\n  font-size: 40px;\n  bottom: 20px; }\n\n/* ----------------------------\r\nHeader Icon Hover Effects\r\n-------------------------------- */\n\n.buttons {\n  -webkit-animation: btn 5s 1;\n          animation: btn 5s 1; }\n\n@-webkit-keyframes btn {\n  0% {\n    color: transparent;\n    background-color: transparent;\n    color: transparent;\n    margin-bottom: 20px;\n    border: 1px solid transparent; }\n  30% {\n    color: transparent;\n    background-color: .4;\n    border: 1px solid transparent;\n    margin-bottom: 125px; }\n  85% {\n    margin-bottom: 20px; } }\n\n@keyframes btn {\n  0% {\n    color: transparent;\n    background-color: transparent;\n    color: transparent;\n    margin-bottom: 20px;\n    border: 1px solid transparent; }\n  30% {\n    color: transparent;\n    background-color: .4;\n    border: 1px solid transparent;\n    margin-bottom: 125px; }\n  85% {\n    margin-bottom: 20px; } }\n\n.buttons:link,\n.buttons:visited {\n  border: 1px solid transparent;\n  color: #4a4a4a;\n  transition: background-color 0.2s, color 0.2s; }\n\n.buttons:hover,\n.buttons:active {\n  border: 1px solid transparent;\n  color: #5cbdaa;\n  background-color: transparent; }\n\n.arrow-down {\n  margin: 0 auto;\n  text-align: center; }\n\n.arrow-down::after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  margin-top: 764px !important;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-right: 4px solid black;\n  border-bottom: 4px solid black;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-animation: 3s arrow infinite ease;\n  animation: 3s arrow infinite ease; }\n\n@-webkit-keyframes arrow {\n  0%, 100% {\n    top: 50px; }\n  50% {\n    top: 80px; } }\n\n.white-arrow-down {\n  margin: 0 auto;\n  text-align: center; }\n\n.white-arrow-down::after {\n  content: \"\";\n  width: 10px;\n  height: 10px;\n  position: absolute;\n  margin-top: 704px !important;\n  margin: auto;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  border-right: 4px solid #FFF;\n  border-bottom: 4px solid #FFF;\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n  -webkit-animation: 3s arrow infinite ease;\n  animation: 3s arrow infinite ease; }\n"

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! animejs */ "./node_modules/animejs/anime.min.js");
/* harmony import */ var animejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(animejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(ui) {
        this.ui = ui;
        this.innerWidth = 0;
    }
    HomeComponent.prototype.onResize = function (event) {
        this.innerWidth = window.innerWidth;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.innerWidth = window.innerWidth;
        var pathEls = document.querySelectorAll('path');
        for (var i = 0; i < pathEls.length; i++) {
            var pathEl = pathEls[i];
            var offset = animejs__WEBPACK_IMPORTED_MODULE_1___default.a.setDashoffset(pathEl);
            pathEl.setAttribute('stroke-dashoffset', offset);
            animejs__WEBPACK_IMPORTED_MODULE_1___default()({
                targets: pathEl,
                strokeDashoffset: [offset, 0],
                duration: animejs__WEBPACK_IMPORTED_MODULE_1___default.a.random(1000, 3000),
                delay: animejs__WEBPACK_IMPORTED_MODULE_1___default.a.random(0, 2000),
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine',
                autoplay: true
            });
        }
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darkMode = isDark;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:resize', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], HomeComponent.prototype, "onResize", null);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/pages/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/pages/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_2__["UiService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/pages/projects/projects.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"projectswrapper\" [class.dark]=\"darksProjMode\">\r\n<h1 id=\"title\" [class.darktitle]=\"darksProjMode\">Projects</h1>\r\n<div class=\"wrap\">\r\n<div class=\"tile\">\r\n  <img src='https://images.unsplash.com/photo-1464054313797-e27fb58e90a9?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=996&q=80'/>\r\n  <div class=\"text\">\r\n  <h1>Lorem ipsum.</h1>\r\n  <h2 class=\"animate-text\">More lorem ipsum bacon ipsum.</h2>\r\n  <p class=\"animate-text\">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>\r\n<div class=\"dots\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  </div>\r\n </div>\r\n\r\n\r\n<div class=\"tile\">\r\n  <img src='https://images.unsplash.com/photo-1458668383970-8ddd3927deed?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1004&q=80'/>\r\n  <div class=\"text\">\r\n  <h1>Lorem ipsum.</h1>\r\n  <h2 class=\"animate-text\">More lorem ipsum bacon ipsum.</h2>\r\n  <p class=\"animate-text\">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>\r\n<div class=\"dots\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  </div>\r\n </div>\r\n\r\n  <div class=\"tile\">\r\n  <img src='https://images.unsplash.com/photo-1422393462206-207b0fbd8d6b?dpr=1&auto=format&crop=entropy&fit=crop&w=1500&h=1000&q=80'/>\r\n  <div class=\"text\">\r\n  <h1>Lorem ipsum.</h1>\r\n  <h2 class=\"animate-text\">More lorem ipsum bacon ipsum.</h2>\r\n  <p class=\"animate-text\">Bacon ipsum dolor amet pork belly tri-tip turducken, pancetta bresaola pork chicken meatloaf. Flank sirloin strip steak prosciutto kevin turducken. </p>\r\n<div class=\"dots\">\r\n    <span></span>\r\n    <span></span>\r\n    <span></span>\r\n  </div>\r\n  </div>\r\n </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.scss":
/*!********************************************************!*\
  !*** ./src/app/pages/projects/projects.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#title {\n  text-align: center;\n  position: relative;\n  color: #4a4a4a;\n  font-family: monospace;\n  font-size: 25px;\n  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.9);\n  padding-bottom: 38px; }\n\n.dark {\n  opacity: 1;\n  background: linear-gradient(to bottom, #B290FF, #2E1D65);\n  transition: opacity 300ms linear; }\n\n.darktitle {\n  color: #FFF !important; }\n\n.projectswrapper {\n  width: 100%;\n  height: 100%;\n  padding-top: 93px; }\n\n.wrap {\n  margin: 93px auto 0 auto;\n  width: 100%;\n  display: flex;\n  align-items: space-around;\n  max-width: 1200px; }\n\n.tile {\n  width: 380px;\n  height: 380px;\n  margin: 10px;\n  background-color: #99aeff;\n  display: inline-block;\n  background-size: cover;\n  position: relative;\n  cursor: pointer;\n  transition: all 0.4s ease-out;\n  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.44);\n  overflow: hidden;\n  color: white;\n  font-family: 'Roboto'; }\n\n.tile img {\n  height: 100%;\n  width: 100%;\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 0;\n  transition: all 0.4s ease-out; }\n\n.tile .text {\n  /*   z-index:99; */\n  position: absolute;\n  padding: 30px;\n  height: calc(100% - 60px); }\n\n.tile h1 {\n  font-weight: 300;\n  margin: 0;\n  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3); }\n\n.tile h2 {\n  font-weight: 100;\n  margin: 20px 0 0 0;\n  font-style: italic;\n  -webkit-transform: translateX(200px);\n          transform: translateX(200px); }\n\n.tile p {\n  font-weight: 300;\n  margin: 20px 0 0 0;\n  line-height: 25px;\n  /*   opacity:0; */\n  -webkit-transform: translateX(-200px);\n          transform: translateX(-200px);\n  transition-delay: 0.2s; }\n\n.animate-text {\n  opacity: 0;\n  transition: all 0.6s ease-in-out; }\n\n.tile:hover {\n  /*   background-color:#99aeff; */\n  box-shadow: 0px 35px 77px -17px rgba(0, 0, 0, 0.64);\n  -webkit-transform: scale(1.05);\n          transform: scale(1.05); }\n\n.tile:hover img {\n  opacity: 0.2; }\n\n.tile:hover .animate-text {\n  -webkit-transform: translateX(0);\n          transform: translateX(0);\n  opacity: 1; }\n\n.dots {\n  position: absolute;\n  bottom: 20px;\n  right: 30px;\n  margin: 0 auto;\n  width: 30px;\n  height: 30px;\n  color: currentColor;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-around; }\n\n.dots span {\n  width: 5px;\n  height: 5px;\n  background-color: currentColor;\n  border-radius: 50%;\n  display: block;\n  opacity: 0;\n  transition: opacity 0.5s ease, -webkit-transform 0.4s ease-out;\n  transition: transform 0.4s ease-out, opacity 0.5s ease;\n  transition: transform 0.4s ease-out, opacity 0.5s ease, -webkit-transform 0.4s ease-out;\n  -webkit-transform: translateY(30px);\n          transform: translateY(30px); }\n\n.tile:hover span {\n  opacity: 1;\n  -webkit-transform: translateY(0px);\n          transform: translateY(0px); }\n\n.dots span:nth-child(1) {\n  transition-delay: 0.05s; }\n\n.dots span:nth-child(2) {\n  transition-delay: 0.1s; }\n\n.dots span:nth-child(3) {\n  transition-delay: 0.15s; }\n\n@media (max-width: 1000px) {\n  .wrap {\n    flex-direction: column;\n    width: 400px; } }\n"

/***/ }),

/***/ "./src/app/pages/projects/projects.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/projects/projects.component.ts ***!
  \******************************************************/
/*! exports provided: ProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsComponent", function() { return ProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/ui/ui.service */ "./src/app/services/ui/ui.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProjectsComponent = /** @class */ (function () {
    function ProjectsComponent(ui) {
        this.ui = ui;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        var _this = this;
        window.scrollTo(0, 0);
        this.ui.darkModeState.subscribe(function (isDark) {
            _this.darksProjMode = isDark;
        });
    };
    ProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-projects',
            template: __webpack_require__(/*! ./projects.component.html */ "./src/app/pages/projects/projects.component.html"),
            styles: [__webpack_require__(/*! ./projects.component.scss */ "./src/app/pages/projects/projects.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_ui_ui_service__WEBPACK_IMPORTED_MODULE_1__["UiService"]])
    ], ProjectsComponent);
    return ProjectsComponent;
}());



/***/ }),

/***/ "./src/app/services/ui/ui.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/ui/ui.service.ts ***!
  \*******************************************/
/*! exports provided: UiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UiService", function() { return UiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UiService = /** @class */ (function () {
    function UiService() {
        // TODO: if the user is signed in get the default value from Firebase
        this.darkModeState = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
    }
    UiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UiService);
    return UiService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\tyler\Desktop\tylerdsilva.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map