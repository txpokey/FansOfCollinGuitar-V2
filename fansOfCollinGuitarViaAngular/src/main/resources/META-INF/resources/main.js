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
		var e = new Error('Cannot find module "' + req + '".');
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // { path: 'welcome', component: WelcomeComponent },
    { path: 'welcome', redirectTo: 'guitarNews', pathMatch: 'full' },
    { path: '', redirectTo: 'guitarNews', pathMatch: 'full' },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"guitar-dept-body-flex-container\">\n  <header>\n    <guitar-header></guitar-header>\n  </header>\n  <main>\n    <router-outlet></router-outlet>\n  </main>\n  <footer>\n    <guitar-footer></guitar-footer>\n  </footer>\n</div>\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _features_features_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./features/features.module */ "./src/app/features/features.module.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _pipes_pipes_common_pipes_common_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/pipes-common/pipes-common.module */ "./src/app/pipes/pipes-common/pipes-common.module.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"]
            ],
            imports: [
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModule"].forRoot(),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _features_features_module__WEBPACK_IMPORTED_MODULE_5__["FeaturesModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"],
                _pipes_pipes_common_pipes_common_module__WEBPACK_IMPORTED_MODULE_9__["PipesCommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/features/classroom/class-schedule/GuitarClassSchedulePlanner.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/GuitarClassSchedulePlanner.ts ***!
  \*********************************************************************************/
/*! exports provided: GUITAR_PROGRAM_COURSE_SCHEDULE, MUSIC_DEPT_CATALOG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITAR_PROGRAM_COURSE_SCHEDULE", function() { return GUITAR_PROGRAM_COURSE_SCHEDULE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIC_DEPT_CATALOG", function() { return MUSIC_DEPT_CATALOG; });
/* harmony import */ var _constants_2018_spring_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/2018/spring/GuitarClassSchedulePlanner */ "./src/app/features/classroom/class-schedule/constants/2018/spring/GuitarClassSchedulePlanner.ts");

var GUITAR_PROGRAM_COURSE_SCHEDULE = [
    _constants_2018_spring_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_0__["GUITAR_PROGRAM_SCHEDULE_2018_SPRING"]
];
var MUSIC_DEPT_CATALOG = [
    _constants_2018_spring_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_0__["MUSIC_DEPT_CATALOG_2018_SPRING"]
];


/***/ }),

/***/ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.css":
/*!***************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.css ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-header,\n.fix-padding-problem {\n  /*$card-spacer-y: 0 0 ;*/\n  /*$card-spacer-x: 0 0 ;*/\n  padding: 0 0 0 0;\n}\n.guitar-dept-column-header {\n  background-color: #ffc107 !important;\n  background-color: wheat !important;\n  padding: 0 0 0 0;\n}\n\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.html":
/*!****************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.html ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<section>\n  <div *ngFor=\"let schoolTerm of musicCatalogReportData.semestersByYearsFound\">\n    <div *ngFor=\"let musicDiscipline of schoolTerm.discipline; index as index\">\n      <p>\n        <a class=\"guitar-dept-display-flex-wrap  Grid-cell guitar-dept-column-header\"  data-toggle=\"collapse\" href=\"#collapseExample{{index}}\" role=\"button\"\n           aria-expanded=\"false\">\n          {{schoolTerm.schoolSemester}}&nbsp;{{schoolTerm.schoolYear}}&nbsp;:&nbsp; {{musicDiscipline}}\n        </a>\n      </p>\n      <div class=\"collapse\" id=\"collapseExample{{index}}\">\n        <div class=\"card card-body\">\n          <music-catalog-entry\n            [inputKey]=\"assembleMusicCatalogElementInputKey( { schoolTerm: schoolTerm , discipline: musicDiscipline } )\"></music-catalog-entry>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts ***!
  \**************************************************************************************************************/
/*! exports provided: ClassSchedulePlannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassSchedulePlannerComponent", function() { return ClassSchedulePlannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClassSchedulePlannerComponent = /** @class */ (function () {
    function ClassSchedulePlannerComponent(service, config) {
        this.service = service;
        this.referenceDictionary = null;
        this.musicCatalogReportData = {};
        this.guitarSectionReportData = {};
        config.closeOthers = false;
        config.type = 'transparent';
    }
    ClassSchedulePlannerComponent.prototype.ngOnInit = function () {
        this.musicDeptCatalog = this.service.getMusicDeptCatalog();
        this.guitarProgramSchedule = this.service.getGuitarProgramCourseSchedule();
        this.computeGuitarProgramReportData();
        this.computeMusicCalalogReportData();
        this.referenceDictionary = this.computeReferenceDictionaryMap();
        console.log("scheduleComponent is HERE!");
    };
    ClassSchedulePlannerComponent.prototype.hashKey = function (key) {
        return this.service.hashKey(key);
    };
    ClassSchedulePlannerComponent.prototype.findClassesFromMusicCatalogBySchoolTermAsArray = function (lookupKey) {
        var ret0 = this.musicCatalogReportData.groupBy.get(this.hashKey(lookupKey));
        var ret = ret0.payload;
        return ret;
    };
    ClassSchedulePlannerComponent.prototype.findClassesFromGuitarProgramScheduleBySchoolTermAsArray = function (lookupKey) {
        var ret = this.guitarSectionReportData.groupBy.get(this.hashKey(lookupKey));
        // let ret = ret0.payload;
        return ret;
    };
    ClassSchedulePlannerComponent.prototype.computeReferenceDictionaryMap = function () {
        var map = new Map();
        map.set('schoolYear', 'year');
        map.set('schoolSemester', 'semester');
        map.set('discipline', 'discipline');
        map.set('Subj', 'discipline');
        map.set('Crse', 'course');
        map.set('course', 'course');
        map.set('class', 'course');
        map.set('name', 'className');
        map.set('Title', 'className');
        map.set('Sec', 'section');
        map.set('schoolTermLabel', 'schoolTermLabel');
        map.set('payload', 'payload');
        return map;
    };
    ClassSchedulePlannerComponent.prototype.assembleMusicCatalogElementInputKey = function (inputReceived) {
        var candidate = { semester: inputReceived.schoolTerm.schoolSemester, year: inputReceived.schoolTerm.schoolYear, discipline: inputReceived.discipline };
        return candidate;
    };
    ClassSchedulePlannerComponent.prototype.computeGuitarProgramReportData = function () {
        var _this = this;
        var yearsFound = new Set(this.guitarProgramSchedule.map(function (obj) { return obj.schoolYear; }));
        var semestersFound = new Set(this.guitarProgramSchedule.map(function (obj) { return obj.schoolSemester; }));
        var guitarGroupBy = new Map();
        var musicGroupBy = new Map();
        this.guitarProgramSchedule.forEach(function (obj) {
            return obj.payload.forEach(function (pay) {
                _this.computeGroupByMapForGuitarSections(obj, pay, guitarGroupBy);
                _this.computeGroupByMapForMusicCoursesUsingGuitarProgramData(obj, pay, musicGroupBy);
            });
        });
        this.guitarSectionReportData.yearsFound = yearsFound;
        this.guitarSectionReportData.semestersFound = semestersFound;
        this.guitarSectionReportData.groupBy = guitarGroupBy;
        this.guitarSectionReportData.musicCatalogGroupBy = musicGroupBy;
        return;
    };
    ClassSchedulePlannerComponent.prototype.computeGroupByMapForGuitarSections = function (obj, pay, g) {
        var musicKey = { schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: pay.Subj };
        var guitarKey = {
            schoolSemester: obj.schoolSemester,
            schoolYear: obj.schoolYear,
            discipline: pay.Subj,
            course: pay.Crse
        };
        var guitarKeyAsObject = {
            schoolSemester: obj.schoolSemester,
            schoolYear: obj.schoolYear,
            discipline: pay.Subj,
            course: pay.Crse
        };
        var hash = this.hashKey(guitarKey);
        var withGKey = guitarKey['gKeyAsObject'] = guitarKeyAsObject;
        var withMKey = guitarKey['mKeyAsObject'] = musicKey;
        var newPay = guitarKey['pay'] = pay;
        var discovered = g.get(hash);
        var depth = Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(discovered) ? (discovered = []).push(guitarKey) : discovered.push(guitarKey);
        var revalue = g.set(hash, discovered);
        var allKeysNow = Array.from(g.keys());
        var count = allKeysNow.length;
        return;
    };
    ClassSchedulePlannerComponent.prototype.computeGroupByMapForMusicCoursesUsingGuitarProgramData = function (obj, pay, g) {
        var musicKey = { schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: pay.Subj };
        var guitarKey = {
            schoolSemester: obj.schoolSemester,
            schoolYear: obj.schoolYear,
            discipline: pay.Subj,
            course: pay.Crse
        };
        var guitarKeyAsObject = {
            schoolSemester: obj.schoolSemester,
            schoolYear: obj.schoolYear,
            discipline: pay.Subj,
            course: pay.Crse
        };
        var musicKeyHash = this.hashKey(musicKey);
        var guitarKeyHash = this.hashKey(guitarKey);
        var withGKey = guitarKey['gKeyAsObject'] = guitarKeyAsObject;
        var withMKey = guitarKey['mKeyAsObject'] = musicKey;
        var newPay = guitarKey['pay'] = pay;
        var discovered = g.get(musicKeyHash);
        var depth = Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(discovered) ? (discovered = new Map()).set(guitarKeyHash, guitarKey) : discovered.set(guitarKeyHash, guitarKey);
        var revalue = g.set(musicKeyHash, discovered);
        var allKeysNow = Array.from(g.keys());
        var count = allKeysNow.length;
        return;
    };
    ClassSchedulePlannerComponent.prototype.computeMusicCalalogReportData = function () {
        this.computerMusicCatalogReportSemesterByYearsData();
        this.computerMusicCatalogReportGroupByData();
    };
    ClassSchedulePlannerComponent.prototype.computerMusicCatalogReportSemesterByYearsData = function () {
        // let collector: any[] = [];
        var yearsFound = new Set(this.musicDeptCatalog.map(function (obj) { return obj.schoolYear; }));
        var semestersFound = new Set(this.musicDeptCatalog.map(function (obj) { return obj.schoolSemester; }));
        var projectionOnDiscipline = new Set(this.musicDeptCatalog.map(function (obj) {
            // let groupByDiscipline = [];
            var disciplines = new Set(obj.payload.map(function (data) { return data.discipline; }));
            var sortedDisciplines = Array.from(disciplines).sort();
            var item = { schoolSemester: obj.schoolSemester, schoolYear: obj.schoolYear, discipline: sortedDisciplines };
            return item;
        }));
        this.musicCatalogReportData.yearsFound = yearsFound;
        this.musicCatalogReportData.semestersFound = semestersFound;
        this.musicCatalogReportData.semestersByYearsFound = Array.from(projectionOnDiscipline);
        return;
    };
    ClassSchedulePlannerComponent.prototype.computerMusicCatalogReportGroupByData = function () {
        var _this = this;
        var groupByCandidate = new Map();
        this.musicDeptCatalog.forEach(function (term) {
            term.payload.forEach(function (termPayloadItem) {
                if (termPayloadItem.relevent) {
                    _this.computeMusicDepartmentCatalogGroupByItemFromTermPayloadItem(term, termPayloadItem, groupByCandidate);
                }
            });
            console.log("watchTheTerm:> " + term);
        });
        this.musicCatalogReportData.groupBy = groupByCandidate;
        return;
    };
    ClassSchedulePlannerComponent.prototype.computeMusicDepartmentCatalogGroupByItemFromTermPayloadItem = function (term, termPayloadItem, groupByCandidate) {
        var hashInput = {
            schoolSemester: term.schoolSemester,
            schoolYear: term.schoolYear,
            discipline: termPayloadItem.discipline
        };
        var hashKey = this.hashKey(hashInput);
        var discovered = groupByCandidate.get(hashKey);
        // console.log( "watchTheHashKey:> " + hashKey );
        var depth = Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(discovered) ? (discovered = {
            hashInput: hashInput,
            payload: [termPayloadItem]
        }) : discovered.payload.push(termPayloadItem);
        // console.log( "watchTheDiscovery:> " + discovered );
        groupByCandidate.set(hashKey, discovered);
        return;
    };
    ClassSchedulePlannerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'class-schedule-planner',
            template: __webpack_require__(/*! ./class-schedule-planner.component.html */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.html"),
            providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]],
            styles: [__webpack_require__(/*! ./class-schedule-planner.component.css */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbAccordionConfig"]])
    ], ClassSchedulePlannerComponent);
    return ClassSchedulePlannerComponent;
}());



/***/ }),

/***/ "./src/app/features/classroom/class-schedule/class-schedule.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/class-schedule.module.ts ***!
  \****************************************************************************/
/*! exports provided: ClassScheduleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClassScheduleModule", function() { return ClassScheduleModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _music_catalog_entry_music_catalog_entry_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./music-catalog-entry/music-catalog-entry.component */ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.ts");
/* harmony import */ var _course_schedule_entry_course_schedule_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./course-schedule-entry/course-schedule-entry.component */ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.ts");
/* harmony import */ var _class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./class-schedule-planner/class-schedule-planner.component */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ClassScheduleModule = /** @class */ (function () {
    function ClassScheduleModule() {
    }
    ClassScheduleModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"]
            ],
            declarations: [_music_catalog_entry_music_catalog_entry_component__WEBPACK_IMPORTED_MODULE_2__["MusicCatalogEntryComponent"], _course_schedule_entry_course_schedule_entry_component__WEBPACK_IMPORTED_MODULE_3__["CourseScheduleEntryComponent"], _class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_4__["ClassSchedulePlannerComponent"]],
            exports: [_music_catalog_entry_music_catalog_entry_component__WEBPACK_IMPORTED_MODULE_2__["MusicCatalogEntryComponent"], _course_schedule_entry_course_schedule_entry_component__WEBPACK_IMPORTED_MODULE_3__["CourseScheduleEntryComponent"], _class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_4__["ClassSchedulePlannerComponent"]]
        })
    ], ClassScheduleModule);
    return ClassScheduleModule;
}());



/***/ }),

/***/ "./src/app/features/classroom/class-schedule/constants/2018/spring/GuitarClassSchedulePlanner.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/constants/2018/spring/GuitarClassSchedulePlanner.ts ***!
  \*******************************************************************************************************/
/*! exports provided: GUITAR_PROGRAM_SCHEDULE_2018_SPRING, MUSIC_DEPT_CATALOG_2018_SPRING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITAR_PROGRAM_SCHEDULE_2018_SPRING", function() { return GUITAR_PROGRAM_SCHEDULE_2018_SPRING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUSIC_DEPT_CATALOG_2018_SPRING", function() { return MUSIC_DEPT_CATALOG_2018_SPRING; });
var GUITAR_PROGRAM_SCHEDULE_2018_SPRING = {
    "schoolTermLabel": "Spring 2018 Credit",
    "schoolYear": 2018,
    "schoolSemester": "spring",
    "payload": [
        {
            "active": true,
            "CRN": -1,
            "Subj": "Subject",
            "Crse": -1,
            "Sec": "Section",
            "Cred": 1,
            "Title": "Title",
            "Days": "Days",
            "Time": "Time",
            "calendar": "Calendar",
            "Location": "Location",
            "Cap": 20,
            "Rem": -2,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Instructor"
        },
        {
            "active": true,
            "CRN": 21797,
            "Subj": "MUSI",
            "Crse": 1116,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Sight Singing & Ear Training I",
            "Days": "TR",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 16,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 21874,
            "Subj": "MUSI",
            "Crse": 1116,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Sight Singing & Ear Training I",
            "Days": "MF",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 20,
            "Rem": 17,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Peter C Weise (P)"
        },
        {
            "active": true,
            "CRN": 21934,
            "Subj": "MUSI",
            "Crse": 1117,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Sight Singing & Ear Training II",
            "Days": "MF",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 20,
            "Rem": 14,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 31234,
            "Subj": "MUSI",
            "Crse": 1181,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Class Piano I",
            "Days": "MWF",
            "Time": "11:00 am-11:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 13,
            "Rem": 11,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Natalya Nikolayerna Pitts (P)"
        },
        {
            "active": true,
            "CRN": 31235,
            "Subj": "MUSI",
            "Crse": 1181,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Class Piano I",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 13,
            "Rem": 10,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 31242,
            "Subj": "MUSI",
            "Crse": 1182,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Class Piano II",
            "Days": "MWF",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 13,
            "Rem": 7,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 21947,
            "Subj": "MUSI",
            "Crse": 1183,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Voice Class",
            "Days": "TR",
            "Time": "01:00 pm-01:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 20,
            "Rem": 16,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Laura Emmaline Bray (P)"
        },
        {
            "active": true,
            "CRN": 30894,
            "Subj": "MUSI",
            "Crse": 1183,
            "Sec": "S70",
            "Cred": 1,
            "Title": "Class Voice I",
            "Days": "R",
            "Time": "06:00 pm-07:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 20,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "William Kenneth Hughes (P)"
        },
        {
            "active": true,
            "CRN": 32395,
            "Subj": "MUSI",
            "Crse": 1192,
            "Sec": "C01",
            "Cred": 1,
            "Title": "Guitar Class",
            "Days": "T",
            "Time": "04:00 pm-05:50 pm",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 20,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 31246,
            "Subj": "MUSI",
            "Crse": 1192,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Class Guitar I",
            "Days": "MW",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 14,
            "Rem": 12,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Fernand T Vera (P)"
        },
        {
            "active": true,
            "CRN": 21952,
            "Subj": "MUSI",
            "Crse": 1192,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Class Guitar I",
            "Days": "TR",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 14,
            "Rem": 14,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Nathaniel Miles Earhart (P)"
        },
        {
            "active": true,
            "CRN": 32728,
            "Subj": "MUSI",
            "Crse": 1192,
            "Sec": "S03",
            "Cred": 1,
            "Title": "Guitar Class",
            "Days": "S",
            "Time": "10:00 am-12:00 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 20,
            "Rem": 18,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Vanessa Jane Corder (P)"
        },
        {
            "active": true,
            "CRN": 31585,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "C01",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "TR",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 24,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Allison K Block (P)"
        },
        {
            "active": true,
            "CRN": 29570,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "P01",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "MWF",
            "Time": "08:00 am-08:50 am",
            "calendar": "01/16-05/13",
            "Location": "PC J117",
            "Cap": 20,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Forest Randolph Kinnett (P)"
        },
        {
            "active": true,
            "CRN": 27067,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "P02",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "TR",
            "Time": "11:30 am-12:45 pm",
            "calendar": "01/16-05/13",
            "Location": "PC J117",
            "Cap": 20,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Forest Randolph Kinnett (P)"
        },
        {
            "active": true,
            "CRN": 27066,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "MWF",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 31403,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "S02",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "TR",
            "Time": "10:00 am-11:15 am",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 25,
            "Rem": 23,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katrina Carlson Rushing (P)"
        },
        {
            "active": true,
            "CRN": 30217,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "S70",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "TR",
            "Time": "05:30 pm-06:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC D113",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 30218,
            "Subj": "MUSI",
            "Crse": 1303,
            "Sec": "S71",
            "Cred": 3,
            "Title": "Fundamentals of Music",
            "Days": "W",
            "Time": "06:00 pm-08:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 25,
            "Rem": 22,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 21680,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "C01",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Alicja Irena Usarek (P)"
        },
        {
            "active": true,
            "CRN": 25213,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "C03",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "08:30 am-09:45 am",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Michael J Morey (P)"
        },
        {
            "active": true,
            "CRN": 25214,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "C04",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "10:00 am-11:15 am",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 17,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Michael J Morey (P)"
        },
        {
            "active": true,
            "CRN": 27495,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "C05",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 22,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kimberly Coulter Harris (P)"
        },
        {
            "active": true,
            "CRN": 31586,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "CY1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "M",
            "Time": "01:00 pm-02:20 pm",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Alicja Irena Usarek (P)"
        },
        {
            "active": true,
            "CRN": 21694,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "P01",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 28,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P)"
        },
        {
            "active": true,
            "CRN": 24398,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "P02",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 28,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P)"
        },
        {
            "active": true,
            "CRN": 21696,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "P03",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MW",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "PC J117",
            "Cap": 28,
            "Rem": 21,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 24414,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "P04",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "08:30 am-09:45 am",
            "calendar": "01/16-05/13",
            "Location": "PC J117",
            "Cap": 28,
            "Rem": 26,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 24401,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "P1H",
            "Cred": 3,
            "Title": "Music Appreciation - Honors",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 18,
            "Rem": 16,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Forest Randolph Kinnett (P)"
        },
        {
            "active": true,
            "CRN": 32849,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "RY1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "W",
            "Time": "10:00 am-11:20 am",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 21,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Nicholas Bradburn Bober (P)"
        },
        {
            "active": true,
            "CRN": 21697,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "08:00 am-08:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 28,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 21960,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S02",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 27,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 21966,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S03",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 27,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 27496,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S04",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MWF",
            "Time": "11:00 am-11:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 24,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 24396,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S05",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Dawn Astrid DeRycke (P), Olga Vasilyevna Amelkina "
        },
        {
            "active": true,
            "CRN": 27642,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S06",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "04:30 pm-05:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Dawn Astrid DeRycke (P)"
        },
        {
            "active": true,
            "CRN": 28820,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S08",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "TR",
            "Time": "11:30 am-12:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 25,
            "Rem": 21,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 32858,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S10",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "S",
            "Time": "09:00 am-12:00 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": false,
            "CRN": 32698,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S15",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MW",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 0,
            "Rem": 0,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 21970,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S70",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "M",
            "Time": "07:00 pm-09:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 29,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Pedro A Haley (P)"
        },
        {
            "active": true,
            "CRN": 21971,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "S75",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "R",
            "Time": "07:00 pm-09:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC A242",
            "Cap": 30,
            "Rem": 28,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 32754,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "SH1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MW",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC D118",
            "Cap": 18,
            "Rem": 12,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 26061,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WC1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 3,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kimberly Coulter Harris (P)"
        },
        {
            "active": true,
            "CRN": 26067,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WP1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 17,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P)"
        },
        {
            "active": true,
            "CRN": 26064,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WS1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 23,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "William L McGinney (P)"
        },
        {
            "active": false,
            "CRN": 26065,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WS2",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 0,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Hidetoshi Fukuchi (P)"
        },
        {
            "active": true,
            "CRN": 26066,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WS3",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "William L McGinney (P)"
        },
        {
            "active": true,
            "CRN": 26075,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WX1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "03/19-05/12",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 22,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P)"
        },
        {
            "active": true,
            "CRN": 26074,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "WXP",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "03/19-05/12",
            "Location": "TBA",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P)"
        },
        {
            "active": true,
            "CRN": 32624,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "XCZ",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": "MW",
            "Time": "10:00 am-11:30 am",
            "calendar": "01/29-05/12",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 25,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Alicja Irena Usarek (P)"
        },
        {
            "active": true,
            "CRN": 26068,
            "Subj": "MUSI",
            "Crse": 1306,
            "Sec": "XW1",
            "Cred": 3,
            "Title": "Music Appreciation",
            "Days": " ",
            "Time": "TBA",
            "calendar": "03/19-05/12",
            "Location": "TBA",
            "Cap": 50,
            "Rem": 41,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kimberly Coulter Harris (P)"
        },
        {
            "active": true,
            "CRN": 31003,
            "Subj": "MUSI",
            "Crse": 1307,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Introduction to Music Literature",
            "Days": "W",
            "Time": "06:00 pm-08:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC D112",
            "Cap": 20,
            "Rem": 18,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 31587,
            "Subj": "MUSI",
            "Crse": 1310,
            "Sec": "C70",
            "Cred": 3,
            "Title": "American Music",
            "Days": "W",
            "Time": "06:00 pm-08:50 pm",
            "calendar": "01/16-05/13",
            "Location": "CC A217",
            "Cap": 25,
            "Rem": 24,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 27976,
            "Subj": "MUSI",
            "Crse": 1310,
            "Sec": "P02",
            "Cred": 3,
            "Title": "American Music",
            "Days": "TR",
            "Time": "10:00 am-11:15 am",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 28,
            "Rem": 23,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron James West (P), James Brett Adams "
        },
        {
            "active": true,
            "CRN": 30793,
            "Subj": "MUSI",
            "Crse": 1310,
            "Sec": "P03",
            "Cred": 3,
            "Title": "American Music",
            "Days": "MWF",
            "Time": "11:00 am-11:50 am",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 25,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Forest Randolph Kinnett (P)"
        },
        {
            "active": true,
            "CRN": 31681,
            "Subj": "MUSI",
            "Crse": 1310,
            "Sec": "P04",
            "Cred": 3,
            "Title": "American Music",
            "Days": "MW",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "PC L135",
            "Cap": 25,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Forest Randolph Kinnett (P)"
        },
        {
            "active": true,
            "CRN": 29550,
            "Subj": "MUSI",
            "Crse": 1310,
            "Sec": "S04",
            "Cred": 3,
            "Title": "American Music",
            "Days": "TR",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC D113",
            "Cap": 25,
            "Rem": 19,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Nicholas Bradburn Bober (P)"
        },
        {
            "active": true,
            "CRN": 29078,
            "Subj": "MUSI",
            "Crse": 1311,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Music Theory I",
            "Days": "MWF",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 21979,
            "Subj": "MUSI",
            "Crse": 1311,
            "Sec": "S02",
            "Cred": 3,
            "Title": "Music Theory I",
            "Days": "TR",
            "Time": "10:00 am-11:15 am",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 14,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 21980,
            "Subj": "MUSI",
            "Crse": 1312,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Music Theory II",
            "Days": "TR",
            "Time": "10:00 am-11:15 am",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 25,
            "Rem": 21,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Brian J Allison (P)"
        },
        {
            "active": true,
            "CRN": 21983,
            "Subj": "MUSI",
            "Crse": 2117,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Sight Singing & Ear Training IV",
            "Days": "MF",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 13,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 31243,
            "Subj": "MUSI",
            "Crse": 2182,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Class Piano IV",
            "Days": "MWF",
            "Time": "10:00 am-10:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 13,
            "Rem": 10,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Brian J Allison (P)"
        },
        {
            "active": true,
            "CRN": 31397,
            "Subj": "MUSI",
            "Crse": 2182,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Class Piano IV",
            "Days": "TR",
            "Time": "08:30 am-09:45 am",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 13,
            "Rem": 13,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Natalya Nikolayerna Pitts (P)"
        },
        {
            "active": true,
            "CRN": 21991,
            "Subj": "MUSI",
            "Crse": 2312,
            "Sec": "S01",
            "Cred": 3,
            "Title": "Music Theory IV",
            "Days": "MWF",
            "Time": "09:00 am-09:50 am",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 25,
            "Rem": 17,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 26390,
            "Subj": "MUEN",
            "Crse": 1121,
            "Sec": "S70",
            "Cred": 1,
            "Title": "Jazz Lab Band",
            "Days": "TR",
            "Time": "04:00 pm-05:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 20,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kevin Lee McNerney (P)"
        },
        {
            "active": true,
            "CRN": 28032,
            "Subj": "MUEN",
            "Crse": 1122,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Symphonic Wind Ensemble",
            "Days": "MW",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 35,
            "Rem": 26,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Garry Windel Evans (P)"
        },
        {
            "active": true,
            "CRN": 31086,
            "Subj": "MUEN",
            "Crse": 1131,
            "Sec": "S01",
            "Cred": 1,
            "Title": "New Music Ensemble",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B113",
            "Cap": 7,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 22105,
            "Subj": "MUEN",
            "Crse": 1132,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Keyboard Ensemble",
            "Days": "MW",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B154",
            "Cap": 12,
            "Rem": 12,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Brian J Allison (P)"
        },
        {
            "active": true,
            "CRN": 22107,
            "Subj": "MUEN",
            "Crse": 1135,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Expressions Combo",
            "Days": "MF",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 10,
            "Rem": 10,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Peter C Weise (P)"
        },
        {
            "active": true,
            "CRN": 22108,
            "Subj": "MUEN",
            "Crse": 1137,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Guitar Ensemble",
            "Days": "MW",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 16,
            "Rem": 16,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Fernand T Vera (P)"
        },
        {
            "active": true,
            "CRN": 31089,
            "Subj": "MUEN",
            "Crse": 1137,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Guitar Ensemble",
            "Days": "TR",
            "Time": "11:30 am-12:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 10,
            "Rem": 10,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Fernand T Vera (P)"
        },
        {
            "active": true,
            "CRN": 22109,
            "Subj": "MUEN",
            "Crse": 1137,
            "Sec": "S70",
            "Cred": 1,
            "Title": "Guitar Ensemble",
            "Days": "T",
            "Time": "06:00 pm-08:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 16,
            "Rem": 16,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Nathaniel Miles Earhart (P)"
        },
        {
            "active": true,
            "CRN": 25473,
            "Subj": "MUEN",
            "Crse": 1139,
            "Sec": "S01",
            "Cred": 1,
            "Title": "String Ensemble",
            "Days": "TR",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 25,
            "Rem": 22,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Matson Alan Topper (P)"
        },
        {
            "active": true,
            "CRN": 22162,
            "Subj": "MUEN",
            "Crse": 1140,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Jazz Combo",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 10,
            "Rem": 10,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Peter C Weise (P)"
        },
        {
            "active": true,
            "CRN": 22165,
            "Subj": "MUEN",
            "Crse": 1140,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Jazz Combo",
            "Days": "MW",
            "Time": "04:00 pm-05:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 12,
            "Rem": 12,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kevin Lee McNerney (P)"
        },
        {
            "active": true,
            "CRN": 22167,
            "Subj": "MUEN",
            "Crse": 1140,
            "Sec": "S70",
            "Cred": 1,
            "Title": "Jazz Combo",
            "Days": "R",
            "Time": "07:00 pm-09:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B150",
            "Cap": 12,
            "Rem": 12,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kevin Lee McNerney (P)"
        },
        {
            "active": true,
            "CRN": 22170,
            "Subj": "MUEN",
            "Crse": 1142,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Expressions Vocal Jazz Ensemble",
            "Days": "MW",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": ""
        },
        {
            "active": true,
            "CRN": 22171,
            "Subj": "MUEN",
            "Crse": 1151,
            "Sec": "S01",
            "Cred": 1,
            "Title": "A Capella Pop Group",
            "Days": "TR",
            "Time": "01:00 pm-02:15 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 20,
            "Rem": 20,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 29074,
            "Subj": "MUEN",
            "Crse": 1152,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Opera Theatre Ensemble",
            "Days": "MW",
            "Time": "02:30 pm-03:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B187",
            "Cap": 35,
            "Rem": 35,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Laura Emmaline Bray (P)"
        },
        {
            "active": true,
            "CRN": 26389,
            "Subj": "MUEN",
            "Crse": 1153,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Chamber Choir",
            "Days": "TR",
            "Time": "11:30 am-12:45 pm",
            "calendar": "01/16-05/13",
            "Location": "SC B180",
            "Cap": 40,
            "Rem": 40,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Katherine W Morgan (P)"
        },
        {
            "active": true,
            "CRN": 26172,
            "Subj": "MUAP",
            "Crse": 1101,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Violin",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Matson Alan Topper (P)"
        },
        {
            "active": true,
            "CRN": 32056,
            "Subj": "MUAP",
            "Crse": 1105,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Viola",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Matson Alan Topper (P)"
        },
        {
            "active": true,
            "CRN": 28891,
            "Subj": "MUAP",
            "Crse": 1113,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Double Bass",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "TBA",
            "Cap": 1,
            "Rem": 1,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Chengyin Lu (P)"
        },
        {
            "active": true,
            "CRN": 31078,
            "Subj": "MUAP",
            "Crse": 1129,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Clarinet",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Rebecca Lynn Wenck (P)"
        },
        {
            "active": true,
            "CRN": 32074,
            "Subj": "MUAP",
            "Crse": 1158,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Drum Set",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Eugene D Glover (P)"
        },
        {
            "active": true,
            "CRN": 22045,
            "Subj": "MUAP",
            "Crse": 1161,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Guitar",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Fernand T Vera (P)"
        },
        {
            "active": true,
            "CRN": 30028,
            "Subj": "MUAP",
            "Crse": 1161,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Secondary Applied Music-Guitar",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Nathaniel Miles Earhart (P)"
        },
        {
            "active": true,
            "CRN": 32068,
            "Subj": "MUAP",
            "Crse": 1161,
            "Sec": "S03",
            "Cred": 1,
            "Title": "Secondary Applied Music-Guitar",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 31092,
            "Subj": "MUAP",
            "Crse": 1162,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Jazz Guitar",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Peter C Weise (P)"
        },
        {
            "active": true,
            "CRN": 22050,
            "Subj": "MUAP",
            "Crse": 1169,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Piano",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Brian J Allison (P)"
        },
        {
            "active": true,
            "CRN": 22054,
            "Subj": "MUAP",
            "Crse": 1169,
            "Sec": "S03",
            "Cred": 1,
            "Title": "Secondary Applied Music-Piano",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Natalya Nikolayerna Pitts (P)"
        },
        {
            "active": true,
            "CRN": 30899,
            "Subj": "MUAP",
            "Crse": 1177,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Harp",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 22059,
            "Subj": "MUAP",
            "Crse": 1181,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Voice",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Laura Emmaline Bray (P)"
        },
        {
            "active": true,
            "CRN": 32069,
            "Subj": "MUAP",
            "Crse": 1181,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Secondary Applied Music-Voice",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Casey Lee Carter (P)"
        },
        {
            "active": true,
            "CRN": 28905,
            "Subj": "MUAP",
            "Crse": 1187,
            "Sec": "S01",
            "Cred": 1,
            "Title": "Secondary Applied Music-Composition",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 32047,
            "Subj": "MUAP",
            "Crse": 1187,
            "Sec": "S02",
            "Cred": 1,
            "Title": "Secondary Applied Music-Composition",
            "Days": "W",
            "Time": "TBA",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 31087,
            "Subj": "MUAP",
            "Crse": 2201,
            "Sec": "S02",
            "Cred": 2,
            "Title": "Concentration Applied Music-Violin",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Matson Alan Topper (P)"
        },
        {
            "active": true,
            "CRN": 32057,
            "Subj": "MUAP",
            "Crse": 2205,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Viola",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Matson Alan Topper (P)"
        },
        {
            "active": true,
            "CRN": 31093,
            "Subj": "MUAP",
            "Crse": 2209,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Cello",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Jiahui Zhang (P)"
        },
        {
            "active": true,
            "CRN": 32844,
            "Subj": "MUAP",
            "Crse": 2213,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Double Bass",
            "Days": "TBA",
            "Time": "01/16-05/13",
            "calendar": "TBA",
            "Location": "5",
            "Cap": 5,
            "Rem": 0,
            "WLCap": 0,
            "WLRem": "TBA",
            "Instructor": ""
        },
        {
            "active": true,
            "CRN": 32021,
            "Subj": "MUAP",
            "Crse": 2215,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Electric Bass",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Il Young Heo (P)"
        },
        {
            "active": true,
            "CRN": 27728,
            "Subj": "MUAP",
            "Crse": 2217,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Flute",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Jennifer Lain Wheeler (P)"
        },
        {
            "active": true,
            "CRN": 29993,
            "Subj": "MUAP",
            "Crse": 2229,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Clarinet",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Rebecca Lynn Wenck (P)"
        },
        {
            "active": true,
            "CRN": 22079,
            "Subj": "MUAP",
            "Crse": 2233,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Saxophone",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 6,
            "Rem": 6,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Kevin Lee McNerney (P)"
        },
        {
            "active": true,
            "CRN": 26166,
            "Subj": "MUAP",
            "Crse": 2237,
            "Sec": "S02",
            "Cred": 2,
            "Title": "Concentration Applied Music-Trumpet",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Rachel Leah Madden (P)"
        },
        {
            "active": true,
            "CRN": 30034,
            "Subj": "MUAP",
            "Crse": 2245,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Trombone",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron Christian Rader (P)"
        },
        {
            "active": true,
            "CRN": 32030,
            "Subj": "MUAP",
            "Crse": 2249,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Baritone",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Aaron Christian Rader (P)"
        },
        {
            "active": true,
            "CRN": 32075,
            "Subj": "MUAP",
            "Crse": 2257,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Percussion",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Dana Difilippantonio (P)"
        },
        {
            "active": true,
            "CRN": 22085,
            "Subj": "MUAP",
            "Crse": 2258,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Drum Set",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 9,
            "Rem": 9,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Eugene D Glover (P)"
        },
        {
            "active": true,
            "CRN": 22086,
            "Subj": "MUAP",
            "Crse": 2261,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Guitar",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 9,
            "Rem": 9,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Fernand T Vera (P)"
        },
        {
            "active": true,
            "CRN": 26905,
            "Subj": "MUAP",
            "Crse": 2261,
            "Sec": "S03",
            "Cred": 2,
            "Title": "Concentration Applied Music-Guitar",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Olga Vasilyevna Amelkina (P)"
        },
        {
            "active": true,
            "CRN": 22089,
            "Subj": "MUAP",
            "Crse": 2262,
            "Sec": "S02",
            "Cred": 2,
            "Title": "Concentration Applied Music-Jazz Guitar",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 9,
            "Rem": 9,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Peter C Weise (P)"
        },
        {
            "active": true,
            "CRN": 22091,
            "Subj": "MUAP",
            "Crse": 2269,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Piano",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 9,
            "Rem": 9,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Brian J Allison (P)"
        },
        {
            "active": true,
            "CRN": 30898,
            "Subj": "MUAP",
            "Crse": 2277,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Harp",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 22097,
            "Subj": "MUAP",
            "Crse": 2281,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Voice",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 9,
            "Rem": 9,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Laura Emmaline Bray (P)"
        },
        {
            "active": true,
            "CRN": 27833,
            "Subj": "MUAP",
            "Crse": 2281,
            "Sec": "S04",
            "Cred": 2,
            "Title": "Concentration Applied Music-Voice",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "Casey Lee Carter (P)"
        },
        {
            "active": true,
            "CRN": 26189,
            "Subj": "MUAP",
            "Crse": 2287,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Composition",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        },
        {
            "active": true,
            "CRN": 31259,
            "Subj": "MUAP",
            "Crse": 2288,
            "Sec": "S01",
            "Cred": 2,
            "Title": "Concentration Applied Music-Electroacoustic Composition",
            "Days": "W",
            "Time": "12:00 pm-12:50 pm",
            "calendar": "01/16-05/13",
            "Location": "SC ",
            "Cap": 5,
            "Rem": 5,
            "WLCap": 0,
            "WLRem": "0",
            "Instructor": "TBA"
        }
    ]
};
var MUSIC_DEPT_CATALOG_2018_SPRING = {
    "schoolTermLabel": "Spring 2018 Credit",
    "schoolYear": 2018,
    "schoolSemester": "spring",
    "payload": [
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1116,
            "name": "Sight Singing & Ear Training I "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1117,
            "name": "Sight Sing & Ear Training II "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1181,
            "name": "Piano Class I "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1182,
            "name": "Piano Class II "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1183,
            "name": "Voice Class "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1192,
            "name": "Guitar Class "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1303,
            "name": "Fundamentals of Music "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1306,
            "name": "Music Appreciation "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1307,
            "name": "Music Literature "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1310,
            "name": "American Music "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1311,
            "name": "Music Theory I "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 1312,
            "name": "Music Theory II "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 2117,
            "name": "Sight Sing & Ear Training IV "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 2182,
            "name": "Piano Class IV "
        },
        {
            "relevent": true,
            "discipline": "MUSI",
            "class": 2312,
            "name": "Music Theory IV "
        },
        {
            "relevent": true,
            "discipline": "MUEN",
            "class": 1121,
            "name": "Jazz Lab Band "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1122,
            "name": "Symphonic Wind Ensemble "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1131,
            "name": "New Music Ensemble "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1132,
            "name": "Keyboard Ensemble "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1135,
            "name": "Expressions Combo "
        },
        {
            "relevent": true,
            "discipline": "MUEN",
            "class": 1137,
            "name": "Guitar Ensemble "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1139,
            "name": "String Ensemble "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1140,
            "name": "Jazz Combo "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1142,
            "name": "Expressions Vocal Jazz Ensbl "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1151,
            "name": "A Capella Pop Group "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1152,
            "name": "Opera Theatre Ens "
        },
        {
            "relevent": false,
            "discipline": "MUEN",
            "class": 1153,
            "name": "Chamber Choir "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1101,
            "name": "Applied Music Violin "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1105,
            "name": "Applied Music Viola "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1113,
            "name": "Applied Music Double Bass "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1129,
            "name": "Applied Music Clarinet "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1158,
            "name": "Applied Music Drum Set "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 1161,
            "name": "Applied Music Guitar "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 1162,
            "name": "Applied Music Jazz Guitar "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1169,
            "name": "Applied Music Piano "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1177,
            "name": "Applied Music Harp "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 1181,
            "name": "Applied Music Voice "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 1187,
            "name": "Applied Music Composition "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2201,
            "name": "Concentration App Music-Violin "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2205,
            "name": "Concentration App Music-Viola "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2209,
            "name": "Concentration App Music-Cello "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2213,
            "name": "Concentrat App Mus-Double Bass "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2215,
            "name": "Concentr App Mus-Electric Bass "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2217,
            "name": "Concentration App Music-Flute "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2229,
            "name": "Concentrat App Music-Clarinet "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2233,
            "name": "Concentration App Mus-Saxophon "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2237,
            "name": "Concentrat App Music-Trumpet "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2245,
            "name": "Concentrat App Music-Trombone "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2249,
            "name": "Concentrat App Music-Baritone "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2257,
            "name": "Concentrat App Mus-Percussion "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2258,
            "name": "Concentrat App Music-Drum Set "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 2261,
            "name": "Concentration App Music-Guitar "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 2262,
            "name": "Concentrat App Mus-Jazz Guitar "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2269,
            "name": "Concentration App Music-Piano "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2277,
            "name": "Concentration App Music-Harp "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2281,
            "name": "Concentration App Music-Voice "
        },
        {
            "relevent": true,
            "discipline": "MUAP",
            "class": 2287,
            "name": "Concentrat App Mus-Composition "
        },
        {
            "relevent": false,
            "discipline": "MUAP",
            "class": 2288,
            "name": "Conc App Mus-Electroacoust Com"
        }
    ]
};


/***/ }),

/***/ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.css":
/*!*************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.css ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.html":
/*!**************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.html ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let courseBySections of findClassSectionsByKey( {\n      schoolSemester: semester,\n      schoolYear: year,\n      discipline: discipline,\n      course: course\n    } )\">\n  <div class=\"guitar-dept-display-flex-wrap Grid-bordered Grid-cell\">\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{courseBySections.pay.CRN}}\n    </div>\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{courseBySections.pay.Sec}}\n    </div>\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{courseBySections.pay.Days}}\n    </div>\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{courseBySections.pay.Time}}\n    </div>\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">\n      {{courseBySections.pay.Location}}\n    </div>\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">\n      {{courseBySections.pay.Instructor}}\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.ts":
/*!************************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.ts ***!
  \************************************************************************************************************/
/*! exports provided: CourseScheduleEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseScheduleEntryComponent", function() { return CourseScheduleEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-schedule-planner/class-schedule-planner.component */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CourseScheduleEntryComponent = /** @class */ (function () {
    function CourseScheduleEntryComponent(planner) {
        this.planner = planner;
    }
    CourseScheduleEntryComponent.prototype.ngOnInit = function () {
        this.processInputKey(this.guitarCourse, this.guitarCourseKey);
    };
    // let guitarKey = {
    //   schoolSemester: obj.schoolSemester,
    //   schoolYear: obj.schoolYear,
    //   discipline: pay.Subj,
    //   course: pay.Crse
    // };
    CourseScheduleEntryComponent.prototype.findClassSectionsByKey = function (key) {
        var headersForDisplayColumns = [{ pay: this.provideHeadersForDisplayColumns() }];
        var contentArray = this.planner.findClassesFromGuitarProgramScheduleBySchoolTermAsArray(key);
        var candidate = [];
        candidate.push.apply(candidate, headersForDisplayColumns);
        candidate.push.apply(candidate, contentArray);
        return candidate;
    };
    CourseScheduleEntryComponent.prototype.processInputKey = function (guitarCourse, guitarCourseKey) {
        this.discipline = guitarCourseKey.discipline;
        this.semester = guitarCourseKey.semester;
        this.year = guitarCourseKey.year;
        this.course = guitarCourse.class;
        this.className = guitarCourseKey.name;
    };
    CourseScheduleEntryComponent.prototype.provideHeadersForDisplayColumns = function () {
        return HEADERS_FOR_DISPLAY_COLUMNS;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CourseScheduleEntryComponent.prototype, "guitarCourse", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], CourseScheduleEntryComponent.prototype, "guitarCourseKey", void 0);
    CourseScheduleEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'course-schedule-entry',
            template: __webpack_require__(/*! ./course-schedule-entry.component.html */ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.html"),
            styles: [__webpack_require__(/*! ./course-schedule-entry.component.css */ "./src/app/features/classroom/class-schedule/course-schedule-entry/course-schedule-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_1__["ClassSchedulePlannerComponent"]])
    ], CourseScheduleEntryComponent);
    return CourseScheduleEntryComponent;
}());

var HEADERS_FOR_DISPLAY_COLUMNS = {
    "Select": "Select",
    "CRN": "CRN",
    "Subj": "Subject",
    "Crse": "Course",
    "Sec": "Section",
    "Cred": 1,
    "Title": "Title",
    "Days": "Days",
    "Time": "Time",
    "Dates": "Calendar",
    "Location": "Location",
    "Cap": 20,
    "Rem": -2,
    "WLCap": 0,
    "WLRem": "0",
    "Instructor": "Instructor"
};


/***/ }),

/***/ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.css":
/*!*********************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.css ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/*body {*/\n  /*text-align: initial ;*/\n  /*}*/\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.html":
/*!**********************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n  *ngFor=\"let guitarCourse of findClasses( inputKey ) \">\n  <div >\n    <div (click)=\"openBackDropCustomClass(guitarCourse,content)\">\n      <div  class=\"guitar-dept-display-flex-wrap Grid-bordered Grid-cell guitar-dept-display-flex-row\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarCourse.class}}</div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarCourse.name}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<ng-template #content let-c=\"close\" let-d=\"dismiss\">\n  <div class=\"modal-header\">\n    <div class=\"modal-title\">\n      <div class=\"guitar-dept-display-flex-column guitar-dept-display-flex-wrap Grid-cell\">\n        Course By Section\n        <div class=\"guitar-dept-display-flex-row guitar-dept-display-flex-wrap Grid-cell\">\n\n          <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{year}}</div>\n          <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{semester}}</div>\n\n        </div>\n\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell guitar-dept-column-header guitar-dept-display-flex-row\">\n          <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{discipline}}\n          </div>\n          <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarCourse.class}}\n          </div>\n        </div>\n      </div>\n\n    </div>\n    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button>\n  </div>\n  <div class=\"modal-body\">\n    <course-schedule-entry [guitarCourse]=\"guitarCourse\" [guitarCourseKey]=\"{ semester:  semester , year: year , discipline: discipline }\"></course-schedule-entry>\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\n  </div>\n</ng-template>\n\n"

/***/ }),

/***/ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.ts":
/*!********************************************************************************************************!*\
  !*** ./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.ts ***!
  \********************************************************************************************************/
/*! exports provided: MusicCatalogEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MusicCatalogEntryComponent", function() { return MusicCatalogEntryComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../class-schedule-planner/class-schedule-planner.component */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MusicCatalogEntryComponent = /** @class */ (function () {
    function MusicCatalogEntryComponent(planner, modalService) {
        this.planner = planner;
        this.modalService = modalService;
    }
    MusicCatalogEntryComponent.prototype.ngOnInit = function () {
        // let myPlan = this.planner.musicCatalogReportData;
        // this.isLookupInScope();
        this.processInputKey(this.inputKey);
    };
    MusicCatalogEntryComponent.prototype.findClasses = function (key) {
        var myLookup = this.planner.findClassesFromMusicCatalogBySchoolTermAsArray(key);
        return myLookup;
    };
    MusicCatalogEntryComponent.prototype.processInputKey = function (inputReceived) {
        this.discipline = inputReceived.discipline;
        this.semester = inputReceived.semester;
        this.year = inputReceived.year;
    };
    MusicCatalogEntryComponent.prototype.openBackDropCustomClass = function (guitarCourse, content) {
        this.guitarCourse = guitarCourse;
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], MusicCatalogEntryComponent.prototype, "inputKey", void 0);
    MusicCatalogEntryComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'music-catalog-entry',
            template: __webpack_require__(/*! ./music-catalog-entry.component.html */ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.html"),
            styles: [__webpack_require__(/*! ./music-catalog-entry.component.css */ "./src/app/features/classroom/class-schedule/music-catalog-entry/music-catalog-entry.component.css")]
        }),
        __metadata("design:paramtypes", [_class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_1__["ClassSchedulePlannerComponent"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], MusicCatalogEntryComponent);
    return MusicCatalogEntryComponent;
}());



/***/ }),

/***/ "./src/app/features/classroom/faculty/GuitarFaculty.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/classroom/faculty/GuitarFaculty.ts ***!
  \*************************************************************/
/*! exports provided: GUITARFACULTY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARFACULTY", function() { return GUITARFACULTY; });
var GUITARFACULTY = {
    "title": "Guitar Studies Faculty",
    "payload": [
        {
            "name": "Vanessa Corder",
            "url": "../assets/html/bio/vanessa/VC-bio.html",
            "image": "../assets/html/bio/vanessa/VC-image.jpg"
        },
        {
            "name": "Nathaniel Earhart",
            "url": "../assets/html/bio/nathaniel/NE-bio.html",
            "image": "../assets/html/bio/nathaniel/NE-image.jpg"
        },
        {
            "name": "Dr. Olga Amelkina-Vera",
            "url": "../assets/html/bio/olga/OAV-bio.html",
            "image": "../assets/html/bio/olga/OAV-image.jpg"
        },
        {
            "name": "Dr. Fernand Vera",
            "url": "../assets/html/bio/fernand/FV-bio.html",
            "image": "../assets/html/bio/fernand/FV-image.png"
        }
    ]
};


/***/ }),

/***/ "./src/app/features/classroom/faculty/faculty.component.css":
/*!******************************************************************!*\
  !*** ./src/app/features/classroom/faculty/faculty.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/classroom/faculty/faculty.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/features/classroom/faculty/faculty.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  faculty animator Container  -->\n<section id=\"guitar-dept-faculty-section\" >\n  <div *ngIf=\"isReady()\">\n    <div class=\"guitar-dept-news-media-content-title Grid-bordered-bottom\">\n      {{guitarDepartmentFaculty.title}}\n    </div>\n    <div id=\"setup-faculty-content-blocks\" class=\"guitar-dept-display-flex-row guitar-dept-display-flex-wrap guitar-dept-flex-space-around\">\n      <div\n        *ngFor=\"let guitarInstructor of (guitarDepartmentFaculty.payload  | filterByObject: { url: '!#0' }); index as index\"\n        class=\"guitar-dept-display-flex-row\">\n        <div id=\"setup-faculty-content-single-block\" class=\"guitar-dept-display-flex-column\">\n          <div *ngIf=\"teacherTab.showTab(index)\"\n               [ngClass]=\"{ 'active':teacherTab.isSet(index) }\">\n            <img class=\"guitar-dept-media-faculty-image padded-above\"\n                 (click)=\"teacherTab.setTab(index)\" src=\"{{guitarInstructor.image}}\">\n            <div class=\"guitar-dept-faculty-media-label padded-right\">{{guitarInstructor.name}}</div>\n          </div>\n        </div>\n        <!--<div *ngIf=\"teacherTab.isSet(index)\" class=\"guitar-dept-display-flex-row\"-->\n        <!--ng-include=\"guitarInstructor.url\">-->\n        <!--</div>-->\n        <include-template *ngIf=\"teacherTab.isSet(index)\" class=\"guitar-dept-display-flex-row\"\n                          [requestedUrl]=\"guitarInstructor.url\">\n        </include-template>\n      </div>\n    </div>\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/features/classroom/faculty/faculty.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/features/classroom/faculty/faculty.component.ts ***!
  \*****************************************************************/
/*! exports provided: FacultyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultyComponent", function() { return FacultyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
/* harmony import */ var _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tab-state/tab-state.component */ "./src/app/services/tab-state/tab-state.component.ts");
/* harmony import */ var _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/include-template/include-template.component */ "./src/app/services/include-template/include-template.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var setupUri = "/assets/json/teacherBiography-controller.json";
var FacultyComponent = /** @class */ (function (_super) {
    __extends(FacultyComponent, _super);
    function FacultyComponent(teacherTab, service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.teacherTab = teacherTab;
        _this.service = service;
        return _this;
    }
    FacultyComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.guitarDepartmentFaculty = candidate;
            ret = true;
        }
        return ret;
    };
    FacultyComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-faculty',
            template: __webpack_require__(/*! ./faculty.component.html */ "./src/app/features/classroom/faculty/faculty.component.html"),
            providers: [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"], _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__["IncludeTemplateComponent"]],
            styles: [__webpack_require__(/*! ./faculty.component.css */ "./src/app/features/classroom/faculty/faculty.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], FacultyComponent);
    return FacultyComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/features/classroom/textbooks/GuitarBooks.ts":
/*!*************************************************************!*\
  !*** ./src/app/features/classroom/textbooks/GuitarBooks.ts ***!
  \*************************************************************/
/*! exports provided: GUITARBOOKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARBOOKS", function() { return GUITARBOOKS; });
var GUITARBOOKS = {
    "title": "Textbooks",
    "payload": [
        {
            "name": "Textbook Title",
            "author": "Author",
            "date": "publishedDate",
            "edition": "Edition",
            "ISBN": "ISBN-13",
            "image": "#0",
            "url": "null"
        },
        {
            "name": "The Beginning Guitar Method",
            "author": "Fernand T. Vera & Olga Amelkina-Vera",
            "date": "2012",
            "edition": "Vol 1., 5th Edition",
            "ISBN": "#0",
            "image": "../assets/images/textbooks/vera.vol1.ed5.jpg",
            "url": "../assets/html/textbooks/veraMethod.vol1.html"
        },
        {
            "name": "The Beginning Guitar Method",
            "author": "Fernand T. Vera",
            "date": "2015",
            "edition": "Vol. 2, 2nd Edition",
            "ISBN": "#0",
            "image": "../assets/images/textbooks/vera.vol2.ed2.jpg",
            "url": "../assets/html/textbooks/veraMethod.vol2.html"
        },
        {
            "name": "MUSI 1303 : Music Fundamentals",
            "author": "Collin College Music Department",
            "date": "2017",
            "edition": "Academic 2017-2018",
            "ISBN": "#0",
            "image": "../assets/images/textbooks/musicFundamentals--2017.jpg",
            "url": "../assets/html/textbooks/musicFundamentals.html"
        },
        {
            "name": "Music in Theory and Practice",
            "author": "Benward & Saker",
            "date": "2014",
            "edition": "Vol. 1, 9th Edition",
            "ISBN": "9780078025150",
            "image": "../assets/images/textbooks/benward-saker.theory.textbook.jpg",
            "url": "../assets/html/textbooks/benward-saker.html"
        },
        {
            "name": "Music in Theory and Practice",
            "author": "Benward & Saker",
            "date": "2014",
            "edition": "Vol. 1 Workbook, 9th Edition",
            "ISBN": "9780077493318",
            "image": "../assets/images/textbooks/benward-saker.theory.workbook.jpg",
            "url": "../assets/html/textbooks/benward-saker-workbook.html"
        },
        {
            "name": "Julio S. Sagreras Guitar Lessons",
            "author": "Julio S. Sagreras",
            "date": "1996",
            "edition": "Books 1-3",
            "ISBN": "9780786627233",
            "image": "../assets/images/textbooks/sagreras.jpg",
            "url": "../assets/html/textbooks/sagreras.html"
        },
        {
            "name": "On Practicing",
            "author": "Ricardo Iznaola",
            "date": "2001",
            "edition": "1st Edition",
            "ISBN": "9780786658732",
            "image": "../assets/images/textbooks/RI-practice.jpg",
            "url": "../assets/html/textbooks/iznaola-practice.html"
        },
        {
            "name": "Pumping Nylon",
            "author": "Scott Tennant",
            "date": "2016",
            "edition": "2nd Edition",
            "ISBN": "9781470631383",
            "image": "../assets/images/textbooks/pumpingNylon.jpg",
            "url": "../assets/html/textbooks/pumpingNylon.html"
        }
    ]
};


/***/ }),

/***/ "./src/app/features/classroom/textbooks/textbooks.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/features/classroom/textbooks/textbooks.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/classroom/textbooks/textbooks.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/features/classroom/textbooks/textbooks.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  guitar news container  -->\n<section id=\"guitar-dept-news-section\" >\n<div *ngIf=\"isReady()\">\n  <div class=\"guitar-dept-news-media-content-title Grid-bordered-bottom\">\n    {{textbooks?.title}}\n  </div>\n  <div id=\"setup-news-content-blocks\" class=\"guitar-dept-display-flex-row guitar-dept-display-flex-wrap guitar-dept-flex-space-around\">\n    <div *ngFor=\"let guitarTextbookModel of (textbooks?.payload  | filterByObject: { image: '!#0' }); index as index \"\n         class=\"guitar-dept-display-flex-row\">\n      <div (click)=\"textbookTab.setTab(index)\" id=\"setup-news-content-single-block\"\n           class=\"guitar-dept-display-flex-column\">\n        <div *ngIf=\"textbookTab.showTab(index)\">\n          <img class=\"guitar-dept-media-news-image padded-above\"\n               src=\"{{guitarTextbookModel.image}}\">\n          <div class=\"guitar-dept-news-media-label padded-right\">{{guitarTextbookModel.name}}</div>\n          <div class=\"guitar-dept-news-media-label padded-right\">{{guitarTextbookModel.author}}</div>\n          <div class=\"guitar-dept-news-media-label padded-right\">{{guitarTextbookModel.edition}}</div>\n        </div>\n      </div>\n      <include-template *ngIf=\"textbookTab.isSet(index)\" class=\"guitar-dept-display-flex-row\"\n                        [requestedUrl]=\"guitarTextbookModel.url\">\n      </include-template>\n    </div>\n  </div>\n</div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/features/classroom/textbooks/textbooks.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/features/classroom/textbooks/textbooks.component.ts ***!
  \*********************************************************************/
/*! exports provided: TextbooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextbooksComponent", function() { return TextbooksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
/* harmony import */ var _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/tab-state/tab-state.component */ "./src/app/services/tab-state/tab-state.component.ts");
/* harmony import */ var _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/include-template/include-template.component */ "./src/app/services/include-template/include-template.component.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var setupUri = "/assets/json/textbooks-controller.json";
var TextbooksComponent = /** @class */ (function (_super) {
    __extends(TextbooksComponent, _super);
    function TextbooksComponent(textbookTab, service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.textbookTab = textbookTab;
        _this.service = service;
        return _this;
    }
    TextbooksComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.textbooks = candidate;
            ret = true;
        }
        return ret;
    };
    TextbooksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-books',
            template: __webpack_require__(/*! ./textbooks.component.html */ "./src/app/features/classroom/textbooks/textbooks.component.html"),
            providers: [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"], _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__["IncludeTemplateComponent"]],
            styles: [__webpack_require__(/*! ./textbooks.component.css */ "./src/app/features/classroom/textbooks/textbooks.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], TextbooksComponent);
    return TextbooksComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/features/features-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/features-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: FeaturesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesRoutingModule", function() { return FeaturesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news/news.component */ "./src/app/features/news/news.component.ts");
/* harmony import */ var _lists_events_events_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists/events/events.component */ "./src/app/features/lists/events/events.component.ts");
/* harmony import */ var _lists_links_links_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lists/links/links.component */ "./src/app/features/lists/links/links.component.ts");
/* harmony import */ var _classroom_textbooks_textbooks_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./classroom/textbooks/textbooks.component */ "./src/app/features/classroom/textbooks/textbooks.component.ts");
/* harmony import */ var _classroom_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./classroom/faculty/faculty.component */ "./src/app/features/classroom/faculty/faculty.component.ts");
/* harmony import */ var _classroom_class_schedule_class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./classroom/class-schedule/class-schedule-planner/class-schedule-planner.component */ "./src/app/features/classroom/class-schedule/class-schedule-planner/class-schedule-planner.component.ts");
/* harmony import */ var _performances_ut_play_lists_by_channel_play_lists_by_channel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./performances/ut/play-lists-by-channel/play-lists-by-channel.component */ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: 'guitarCoursesBySchoolTerm', component: _classroom_class_schedule_class_schedule_planner_class_schedule_planner_component__WEBPACK_IMPORTED_MODULE_7__["ClassSchedulePlannerComponent"] },
    { path: 'guitarEvents', component: _lists_events_events_component__WEBPACK_IMPORTED_MODULE_3__["EventsComponent"] },
    { path: 'guitarFaculty', component: _classroom_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_6__["FacultyComponent"] },
    { path: 'guitarLinks', component: _lists_links_links_component__WEBPACK_IMPORTED_MODULE_4__["LinksComponent"] },
    { path: 'guitarNews', component: _news_news_component__WEBPACK_IMPORTED_MODULE_2__["NewsComponent"] },
    { path: 'guitarPerformances', component: _performances_ut_play_lists_by_channel_play_lists_by_channel_component__WEBPACK_IMPORTED_MODULE_8__["PlayListsByChannelComponent"] },
    { path: 'guitarTextbooks', component: _classroom_textbooks_textbooks_component__WEBPACK_IMPORTED_MODULE_5__["TextbooksComponent"] }
];
var FeaturesRoutingModule = /** @class */ (function () {
    function FeaturesRoutingModule() {
    }
    FeaturesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], FeaturesRoutingModule);
    return FeaturesRoutingModule;
}());



/***/ }),

/***/ "./src/app/features/features.module.ts":
/*!*********************************************!*\
  !*** ./src/app/features/features.module.ts ***!
  \*********************************************/
/*! exports provided: FeaturesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeaturesModule", function() { return FeaturesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _features_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./features-routing.module */ "./src/app/features/features-routing.module.ts");
/* harmony import */ var _news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news/news.component */ "./src/app/features/news/news.component.ts");
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../layout/layout.module */ "./src/app/layout/layout.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _pipes_pipes_common_pipes_common_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../pipes/pipes-common/pipes-common.module */ "./src/app/pipes/pipes-common/pipes-common.module.ts");
/* harmony import */ var _lists_events_events_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lists/events/events.component */ "./src/app/features/lists/events/events.component.ts");
/* harmony import */ var _lists_links_links_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lists/links/links.component */ "./src/app/features/lists/links/links.component.ts");
/* harmony import */ var _classroom_textbooks_textbooks_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./classroom/textbooks/textbooks.component */ "./src/app/features/classroom/textbooks/textbooks.component.ts");
/* harmony import */ var _classroom_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./classroom/faculty/faculty.component */ "./src/app/features/classroom/faculty/faculty.component.ts");
/* harmony import */ var _classroom_class_schedule_class_schedule_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./classroom/class-schedule/class-schedule.module */ "./src/app/features/classroom/class-schedule/class-schedule.module.ts");
/* harmony import */ var _performances_performances_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./performances/performances.module */ "./src/app/features/performances/performances.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var FeaturesModule = /** @class */ (function () {
    function FeaturesModule() {
    }
    FeaturesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _layout_layout_module__WEBPACK_IMPORTED_MODULE_4__["LayoutModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_5__["ServicesModule"],
                _pipes_pipes_common_pipes_common_module__WEBPACK_IMPORTED_MODULE_6__["PipesCommonModule"],
                _classroom_class_schedule_class_schedule_module__WEBPACK_IMPORTED_MODULE_11__["ClassScheduleModule"],
                _performances_performances_module__WEBPACK_IMPORTED_MODULE_12__["PerformancesModule"],
                _features_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeaturesRoutingModule"]
            ],
            declarations: [_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], _lists_events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"], _lists_links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"], _classroom_textbooks_textbooks_component__WEBPACK_IMPORTED_MODULE_9__["TextbooksComponent"], _classroom_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_10__["FacultyComponent"]],
            exports: [_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"], _features_routing_module__WEBPACK_IMPORTED_MODULE_2__["FeaturesRoutingModule"], _lists_events_events_component__WEBPACK_IMPORTED_MODULE_7__["EventsComponent"], _lists_links_links_component__WEBPACK_IMPORTED_MODULE_8__["LinksComponent"], _classroom_textbooks_textbooks_component__WEBPACK_IMPORTED_MODULE_9__["TextbooksComponent"], _classroom_faculty_faculty_component__WEBPACK_IMPORTED_MODULE_10__["FacultyComponent"]]
        })
    ], FeaturesModule);
    return FeaturesModule;
}());



/***/ }),

/***/ "./src/app/features/lists/events/GuitarEvent.ts":
/*!******************************************************!*\
  !*** ./src/app/features/lists/events/GuitarEvent.ts ***!
  \******************************************************/
/*! exports provided: GUITAREVENTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITAREVENTS", function() { return GUITAREVENTS; });
var GUITAREVENTS = [
    {
        "name": "2018 Spring Guitar Events at Collin College",
        "date": "Date",
        "time": "Time",
        "where": "Location/Room",
        "event": "Events"
    },
    {
        "name": "Guitar Get Together",
        "date": "1/19/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Guitar Get Together",
        "date": "2/2/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "6th Annual Collin College Guitar Festival",
        "date": "2/9/2018-2/11/2018 (Fri-Sun)",
        "time": "4:30pm (Fri) -- 3pm (Sun)",
        "where": "Conference Center Spring Creek",
        "event": "Collin College Guitar Festival"
    },
    {
        "name": "6th Annual Collin College Guitar Festival",
        "date": "2/9/2018",
        "time": "7pm",
        "where": "Conference Center Spring Creek",
        "event": "Faculty Concert: Kithara Duo (Collin College Guitar Festival)"
    },
    {
        "name": "6th Annual Collin College Guitar Festival",
        "date": "2/10/2018",
        "time": "3pm",
        "where": "C104 Spring Creek",
        "event": "Alumni Guitar Recital (Collin College Guitar Festival)"
    },
    {
        "name": "6th Annual Collin College Guitar Festival",
        "date": "2/10/2018",
        "time": "7pm",
        "where": "Conference Center Spring Creek",
        "event": "Faculty Concert: Quattro Palos (Collin College Guitar Festival)"
    },
    {
        "name": "6th Annual Collin College Guitar Festival",
        "date": "2/11/2018",
        "time": "3pm",
        "where": "Conference Center Spring Creek",
        "event": "Student Concert (Collin College Guitar Festival)"
    },
    {
        "name": "Guitar Get Together",
        "date": "2/23/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Guitar Get Together",
        "date": "3/9/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Guitar Get Together",
        "date": "3/23/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Guitar Get Together",
        "date": "4/6/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Guitar Artist Showcase",
        "date": "4/10/2018",
        "time": "7pm",
        "where": "The ARTS Gallery Spring Creek",
        "event": "Guitar Artist Showcase"
    },
    {
        "name": "Guitar Ensembles Concert",
        "date": "4/17/2018",
        "time": "7pm",
        "where": "JAT Spring Creek",
        "event": "Guitar Ensembles Concert"
    },
    {
        "name": "Guitar Get Together",
        "date": "4/27/2018",
        "time": "1-3pm",
        "where": "C104 Spring Creek",
        "event": "Guitar Get Together"
    },
    {
        "name": "Solo Guitar Concert",
        "date": "5/1/2018",
        "time": "7pm",
        "where": "The ARTS Gallery Spring Creek",
        "event": "Solo Guitar Concert"
    }
];


/***/ }),

/***/ "./src/app/features/lists/events/events.component.css":
/*!************************************************************!*\
  !*** ./src/app/features/lists/events/events.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/lists/events/events.component.html":
/*!*************************************************************!*\
  !*** ./src/app/features/lists/events/events.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"guitar-dept-events-section\">\n  <div *ngIf=\"isReady()\">\n    <div class=\"guitar-dept-display-flex-column\" >\n      <div class=\"guitar-dept-display-flex-wrap Grid-cell guitar-dept-column-header\" >\n        {{guitarProgramEvents[0].name}}\n      </div>\n      <div *ngFor=\"let guitarProgramEvent of guitarProgramEvents\"\n           class=\"Grid Grid-bordered guitar-dept-display-flex-row\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarProgramEvent.date}}</div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarProgramEvent.time}}</div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarProgramEvent.where}}</div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarProgramEvent.event}}</div>\n      </div>\n    </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/features/lists/events/events.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/features/lists/events/events.component.ts ***!
  \***********************************************************/
/*! exports provided: EventsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsComponent", function() { return EventsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var setupUri = "/assets/json/guitarEvents-controller.json";
var EventsComponent = /** @class */ (function (_super) {
    __extends(EventsComponent, _super);
    function EventsComponent(service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.service = service;
        return _this;
    }
    EventsComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.guitarProgramEvents = candidate;
            ret = true;
        }
        return ret;
    };
    EventsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-events',
            template: __webpack_require__(/*! ./events.component.html */ "./src/app/features/lists/events/events.component.html"),
            styles: [__webpack_require__(/*! ./events.component.css */ "./src/app/features/lists/events/events.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], EventsComponent);
    return EventsComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/features/lists/links/GuitarLinks.ts":
/*!*****************************************************!*\
  !*** ./src/app/features/lists/links/GuitarLinks.ts ***!
  \*****************************************************/
/*! exports provided: GUITARLINKS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARLINKS", function() { return GUITARLINKS; });
var GUITARLINKS = [
    {
        "label": "Internal Links",
        "payload": [
            {
                "label": "Music Department",
                "url": "http://www.collin.edu/department/music/"
            },
            {
                "label": "Music Library",
                "url": "http://collin.libguides.com/music"
            },
            {
                "label": "Music Department Calendar",
                "url": "http://www.collin.edu/department/music/Info_Pages/musicevents.html"
            },
            {
                "label": "Technical Jury Form",
                "url": "../assets/pdf/JuryForms--2017-Fall.zip"
            },
            {
                "label": "Final Jury Form",
                "url": "../assets/pdf/JuryForms--2017-Fall.zip"
            }
        ]
    },
    {
        "label": "External Links",
        "payload": [
            {
                "label": "Allegro Guitar Society",
                "url": "http://guitarsociety.org/"
            },
            {
                "label": "Guitar Foundation of America",
                "url": "http://www.guitarfoundation.org/"
            },
            {
                "label": "Los Angeles Guitar Academy (LAGA)",
                "url": "https://onlineguitaracademy.net/"
            },
            {
                "label": "Regional Symposiums: Guitar Foundation of America",
                "url": "http://www.guitarfoundation.org/?page=RegionalSymposiums"
            },
            {
                "label": "Sheet Music Plus",
                "url": "http://www.sheetmusicplus.com/"
            },
            {
                "label": "Strings by Mail",
                "url": "http://www.stringsbymail.com/"
            },
            {
                "label": "Texas Guitar Competition and Festival",
                "url": "http://www.utdallas.edu/ah/programs/arts/musi/guitarcomp.html"
            },
            {
                "label": "UTD Guitar Series",
                "url": "http://www.utdallas.edu/ah/events/events-music.html#guitar"
            }
        ]
    },
    {
        "label": "In Memoriam",
        "payload": [
            {
                "label": "Collin College Mourns Passing of Music Professor",
                "url": "http://www.collin.edu/news/PressReleases/2011-2012/20120223sabineMadriguera.html"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/features/lists/links/links.component.css":
/*!**********************************************************!*\
  !*** ./src/app/features/lists/links/links.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/lists/links/links.component.html":
/*!***********************************************************!*\
  !*** ./src/app/features/lists/links/links.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  guitarProgramLinks Container  -->\n<section id=\"guitar-program-links-section\">\n  <div *ngIf=\"isReady()\">\n    <div class=\"guitar-dept-display-flex-column\">\n      <div class=\"Grid-column-collection\" *ngFor=\"let guitarProgramLink of guitarProgramLinks\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell guitar-dept-column-header\">\n          {{guitarProgramLink.label}}\n        </div>\n        <div *ngFor=\"let guitarProgramLinkDetails of guitarProgramLink.payload\"\n             class=\"guitar-dept-display-flex-wrap Grid-bordered guitar-dept-display-flex-row\">\n          <a href=\"{{guitarProgramLinkDetails.url}}\" target=\"_blank\">\n            <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">\n              {{guitarProgramLinkDetails.label}}\n            </div>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n"

/***/ }),

/***/ "./src/app/features/lists/links/links.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/features/lists/links/links.component.ts ***!
  \*********************************************************/
/*! exports provided: LinksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LinksComponent", function() { return LinksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var setupUri = "/assets/json/links-controller.json";
var LinksComponent = /** @class */ (function (_super) {
    __extends(LinksComponent, _super);
    function LinksComponent(service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.service = service;
        return _this;
    }
    LinksComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.guitarProgramLinks = candidate;
            ret = true;
        }
        return ret;
    };
    LinksComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-links',
            template: __webpack_require__(/*! ./links.component.html */ "./src/app/features/lists/links/links.component.html"),
            styles: [__webpack_require__(/*! ./links.component.css */ "./src/app/features/lists/links/links.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], LinksComponent);
    return LinksComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/features/news/GuitarNewsConfig.ts":
/*!***************************************************!*\
  !*** ./src/app/features/news/GuitarNewsConfig.ts ***!
  \***************************************************/
/*! exports provided: GUITARNEWS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARNEWS", function() { return GUITARNEWS; });
/* Defines the news data */
var GUITARNEWS = {
    "title": "Spring 2018 Highlights",
    "payload": [
        {
            "test": false,
            "name": "2018 Spring Guitar Events at Collin College",
            "date": "Date",
            "time": "Time",
            "where": "Location/Room",
            "event": "Events",
            "image": "Photo",
            "url": "#0"
        },
        {
            "test": true,
            "name": "6th Annual Collin College Guitar Festival",
            "date": "2/09/2018-2/11/2018",
            "time": "--",
            "where": "Spring Creek",
            "event": "6th Annual Collin College Guitar Festival",
            "image": "../assets/images/news/2018/spring/current/CCGF2018.jpg",
            "url": "../assets/html/news/2018/spring/current/guitarFestival-news.html"
        },
        {
            "test": true,
            "name": "Fan Club Website: Updated for Spring 2018",
            "date": "1/8/2018",
            "time": "12am",
            "where": "internet",
            "event": "Using Collin College Guitar Studies Website",
            "image": "../assets/images/header/guitarStudies.light-logo.jpg",
            "url": "../assets/html/news/2018/spring/current/guitarWebsite-news.html"
        }
    ]
};


/***/ }),

/***/ "./src/app/features/news/news.component.css":
/*!**************************************************!*\
  !*** ./src/app/features/news/news.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/news/news.component.html":
/*!***************************************************!*\
  !*** ./src/app/features/news/news.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  guitar news container  -->\n<section id=\"guitar-dept-news-section\">\n  <div *ngIf=\"isReady()\">\n\n    <div class=\"guitar-dept-news-media-content-title Grid-bordered-bottom\">\n      {{guitarProgramNews.title}}\n    </div>\n    <div id=\"setup-news-content-blocks\" class=\"guitar-dept-display-flex-row guitar-dept-display-flex-wrap guitar-dept-flex-space-around\">\n      <div *ngFor=\"let guitarNewsModel of (guitarProgramNews.payload | filterByObject:  { url: '!#0' }); index as index\"\n           class=\"guitar-dept-display-flex-row\">\n        <div id=\"setup-news-content-single-block\" class=\"guitar-dept-display-flex-column\">\n          <div *ngIf=\"tabStates.showTab(index)\"\n               [ngClass]=\"{'active':tabStates.isSet(index)}\">\n            <img class=\"guitar-dept-media-news-image padded-above\"\n                 (click)=\"tabStates.setTab(index)\" src=\"{{guitarNewsModel.image}}\">\n            <div class=\"guitar-dept-news-media-label padded-right\">{{guitarNewsModel.name}}</div>\n            <div class=\"guitar-dept-news-media-label padded-right\">{{guitarNewsModel.date}}</div>\n          </div>\n        </div>\n        <include-template *ngIf=\"tabStates.isSet(index)\" class=\"guitar-dept-display-flex-row\"\n                          [requestedUrl]=\"guitarNewsModel.url\">\n        </include-template>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/features/news/news.component.ts":
/*!*************************************************!*\
  !*** ./src/app/features/news/news.component.ts ***!
  \*************************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tab-state/tab-state.component */ "./src/app/services/tab-state/tab-state.component.ts");
/* harmony import */ var _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/include-template/include-template.component */ "./src/app/services/include-template/include-template.component.ts");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var setupUri = "/assets/json/news-controller--2018.summer.json";
var NewsComponent = /** @class */ (function (_super) {
    __extends(NewsComponent, _super);
    function NewsComponent(tabStates, service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.tabStates = tabStates;
        _this.service = service;
        return _this;
    }
    NewsComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.guitarProgramNews = candidate;
            ret = true;
        }
        return ret;
    };
    NewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-news',
            template: __webpack_require__(/*! ./news.component.html */ "./src/app/features/news/news.component.html"),
            providers: [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_3__["FileAsSourceForJsonService"], _services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_1__["TabStateComponent"], _services_include_template_include_template_component__WEBPACK_IMPORTED_MODULE_2__["IncludeTemplateComponent"]],
            styles: [__webpack_require__(/*! ./news.component.css */ "./src/app/features/news/news.component.css")]
        }),
        __metadata("design:paramtypes", [_services_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_1__["TabStateComponent"], _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_3__["FileAsSourceForJsonService"]])
    ], NewsComponent);
    return NewsComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_3__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/features/performances/performances.module.ts":
/*!**************************************************************!*\
  !*** ./src/app/features/performances/performances.module.ts ***!
  \**************************************************************/
/*! exports provided: PerformancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PerformancesModule", function() { return PerformancesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ut_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ut/play-list/play-list.component */ "./src/app/features/performances/ut/play-list/play-list.component.ts");
/* harmony import */ var _ut_play_lists_by_channel_play_lists_by_channel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ut/play-lists-by-channel/play-lists-by-channel.component */ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PerformancesModule = /** @class */ (function () {
    function PerformancesModule() {
    }
    PerformancesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_ut_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_2__["PlayListComponent"], _ut_play_lists_by_channel_play_lists_by_channel_component__WEBPACK_IMPORTED_MODULE_3__["PlayListsByChannelComponent"]],
            exports: [_ut_play_list_play_list_component__WEBPACK_IMPORTED_MODULE_2__["PlayListComponent"], _ut_play_lists_by_channel_play_lists_by_channel_component__WEBPACK_IMPORTED_MODULE_3__["PlayListsByChannelComponent"]]
        })
    ], PerformancesModule);
    return PerformancesModule;
}());



/***/ }),

/***/ "./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistQuery.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistQuery.ts ***!
  \****************************************************************************************/
/*! exports provided: YOU_TUBE_PLAYLISTS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOU_TUBE_PLAYLISTS", function() { return YOU_TUBE_PLAYLISTS; });
var YOU_TUBE_PLAYLISTS = [
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Nb4x1jxaD66uMNEBDHxNq8iHrC4\"",
        "pageInfo": {
            "totalResults": 6,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/qFUXnqxs5YgD6zs59taYO9ExLFQ\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-27T19:15:24.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Milonga Simple: Eduardo Baranzano, performers: Lauren Adams & Ryan Grounds",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wRfchUNOg4s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wRfchUNOg4s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wRfchUNOg4s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wRfchUNOg4s/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "wRfchUNOg4s"
                    }
                },
                "contentDetails": {
                    "videoId": "wRfchUNOg4s",
                    "videoPublishedAt": "2017-09-27T19:13:30.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/TL0D0D07tWgWLz1N4KrpQ-Yvu_c\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-27T19:15:24.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "La Paloma: Sebastian Iradier, performers: 6 O'Clock Ensemble",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lEl9ZN1HXHY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lEl9ZN1HXHY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lEl9ZN1HXHY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lEl9ZN1HXHY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "lEl9ZN1HXHY"
                    }
                },
                "contentDetails": {
                    "videoId": "lEl9ZN1HXHY",
                    "videoPublishedAt": "2017-09-27T19:13:30.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/qAg3zbmj7iumpYb3yf3BLEf2nzY\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-27T19:15:24.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Noel's Galliard: William Brade, performers: 6 O'Clock Ensemble",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8eEf402LWf4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8eEf402LWf4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8eEf402LWf4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8eEf402LWf4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "8eEf402LWf4"
                    }
                },
                "contentDetails": {
                    "videoId": "8eEf402LWf4",
                    "videoPublishedAt": "2017-09-27T19:13:30.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/DlfyOor5XE_s41ifx2mUcsuCnw4\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T19:15:24.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Burleske: Leopold Mozart, performers: 6 O'Clock Ensemble",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a24zlj0FtlQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a24zlj0FtlQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a24zlj0FtlQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/a24zlj0FtlQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "a24zlj0FtlQ"
                    }
                },
                "contentDetails": {
                    "videoId": "a24zlj0FtlQ",
                    "videoPublishedAt": "2017-09-27T19:13:30.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/cj1KaNwQZjTItJNvANqW7zDi87I\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T19:15:24.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Andantino in G Major: Mauro Giuliani, performers: 6 O'Clock Ensemble",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yXVFE8cLqiI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yXVFE8cLqiI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yXVFE8cLqiI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/yXVFE8cLqiI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "yXVFE8cLqiI"
                    }
                },
                "contentDetails": {
                    "videoId": "yXVFE8cLqiI",
                    "videoPublishedAt": "2017-09-27T19:13:30.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LYDgNhhz0V7n8KcF5p59onxRW3g\"",
                "id": "UEx2aGtLMTgyN05EeDlqSGpuelFrUXo0MHB4MWtMNXBrZy4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-28T03:41:44.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Las Gaviotas: Mexican Traditional, performers: Lauren Adams & Ryan Grounds",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eavOpCu62Kw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eavOpCu62Kw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eavOpCu62Kw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/eavOpCu62Kw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "eavOpCu62Kw"
                    }
                },
                "contentDetails": {
                    "videoId": "eavOpCu62Kw",
                    "videoPublishedAt": "2017-09-28T03:41:43.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/3TyeMU8htnN2TKwp3Zh3DU1IkvM\"",
        "pageInfo": {
            "totalResults": 14,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/xEJr5N63b91uehGcXbQ3TZt4gFI\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Concerto in G Major I Allegro: Antonio Vivaldi, performer: Festival Guitar Orchestra",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "JF_UVUkGe7Y"
                    }
                },
                "contentDetails": {
                    "videoId": "JF_UVUkGe7Y",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/YO_qHQO_i3daP2jf_w85JvU_Xlc\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Concerto in G Major II Andante: Antonio Vivaldi, performer: Festival Guitar Orchestra",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7ZVIFYKpN6E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7ZVIFYKpN6E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7ZVIFYKpN6E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7ZVIFYKpN6E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "7ZVIFYKpN6E"
                    }
                },
                "contentDetails": {
                    "videoId": "7ZVIFYKpN6E",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/OaZAA0I8f7eiVGmUYzwUJ0nJgIc\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Concerto in G Major III Allegro: Antonio Vivaldi, performer: Festival Guitar Orchestra",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eA8loWiDGzY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eA8loWiDGzY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eA8loWiDGzY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/eA8loWiDGzY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "eA8loWiDGzY"
                    }
                },
                "contentDetails": {
                    "videoId": "eA8loWiDGzY",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/FBbej-SSUhqGqnTItrVF4ioC91g\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Concerto in G Major III Allegro - part 2: Antonio Vivaldi, performer: Festival Guitar Orchestra",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CPpvDMzxRaE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CPpvDMzxRaE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CPpvDMzxRaE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CPpvDMzxRaE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "CPpvDMzxRaE"
                    }
                },
                "contentDetails": {
                    "videoId": "CPpvDMzxRaE",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Iao0qIFr_iISiVVDGGUmQ2mGd-A\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 12: Heitor Villa-Lobos, performer: Jonno Garver",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cP6TBRhTIac/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cP6TBRhTIac/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cP6TBRhTIac/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cP6TBRhTIac/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "cP6TBRhTIac"
                    }
                },
                "contentDetails": {
                    "videoId": "cP6TBRhTIac",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/fbRwCE5TIHL49yIqqL9F0Pya82Q\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonata K 322: Domenico Scarlatti, performer: Jonno Garver",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4fcrzKa5sV4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4fcrzKa5sV4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4fcrzKa5sV4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4fcrzKa5sV4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4fcrzKa5sV4"
                    }
                },
                "contentDetails": {
                    "videoId": "4fcrzKa5sV4",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/7Hh_bbH53wl0zOmPT6IQ4HdQ-44\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allegro Solemne from LaCatedral: Agustin Barrios, performer: Eliza Balmuth",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wKALoPZnajo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wKALoPZnajo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wKALoPZnajo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wKALoPZnajo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "wKALoPZnajo"
                    }
                },
                "contentDetails": {
                    "videoId": "wKALoPZnajo",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/8fYKDRrYrxBrHEFsfpkym2hSjP0\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Caprice No 2: Luigi Legnani, performer: Eliza Balmuth",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WetqI-8Grzo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WetqI-8Grzo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WetqI-8Grzo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/WetqI-8Grzo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "WetqI-8Grzo"
                    }
                },
                "contentDetails": {
                    "videoId": "WetqI-8Grzo",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/0FQTV-0KqcM6w0iQfNi1aMEsZ4Y\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude from BWV 996: J. S. Bach, performer: Magdiel Zuniga",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hGgUhbV0E_k/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hGgUhbV0E_k/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hGgUhbV0E_k/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hGgUhbV0E_k/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "hGgUhbV0E_k"
                    }
                },
                "contentDetails": {
                    "videoId": "hGgUhbV0E_k",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4iXIhDJU6Czlf9WOHYyKqcDc9zU\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonata K 322: Domenico Scarlatti, performer: Sean McCrary",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ASa0uk9OhzQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ASa0uk9OhzQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ASa0uk9OhzQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ASa0uk9OhzQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ASa0uk9OhzQ"
                    }
                },
                "contentDetails": {
                    "videoId": "ASa0uk9OhzQ",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/jpShAyjKJ_FlzZYmAjwz1hp3AlE\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Vals Venezolana I & II: Antonio Lauro, performer: Sean McCrary",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/7UMMRVUoMVo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/7UMMRVUoMVo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/7UMMRVUoMVo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/7UMMRVUoMVo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "7UMMRVUoMVo"
                    }
                },
                "contentDetails": {
                    "videoId": "7UMMRVUoMVo",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/r7IOm_ZyqqsfGypY7ARbQObDYzE\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 7 Op1 in D major: Mauro Giuliani, performer: Cory Sams",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Qsg1RfDro80/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Qsg1RfDro80/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Qsg1RfDro80/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Qsg1RfDro80/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Qsg1RfDro80"
                    }
                },
                "contentDetails": {
                    "videoId": "Qsg1RfDro80",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/YG244uZP-UdyoCwA5jXwZoHXTtA\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "By Candlelight: Andrew York, performer: Josh Smith",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Efh7nirIrI0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Efh7nirIrI0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Efh7nirIrI0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Efh7nirIrI0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Efh7nirIrI0"
                    }
                },
                "contentDetails": {
                    "videoId": "Efh7nirIrI0",
                    "videoPublishedAt": "2017-09-27T18:57:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/s8uXVwmRa9qtwNTDiqxvJLGIceU\"",
                "id": "UEx2aGtLMTgyN05EenhBUEFpSTgzX2VBYWZMdkJUQ1BXUi4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:59:15.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fantasia Original: JoseVinas, performer: Jiaxin Zhang",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/oxS9JO5_LcA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/oxS9JO5_LcA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/oxS9JO5_LcA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "oxS9JO5_LcA"
                    }
                },
                "contentDetails": {
                    "videoId": "oxS9JO5_LcA",
                    "videoPublishedAt": "2017-09-27T18:57:56.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/PtpQhlfgMwWz6vd0_pTvCNTV3kQ\"",
        "pageInfo": {
            "totalResults": 16,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/VIZa_DoE1QnRDMyRoEqLptdxB3w\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude No1: Villa Lobos, performer: Cory Sams",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dx-RIui8ndo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dx-RIui8ndo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dx-RIui8ndo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dx-RIui8ndo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "dx-RIui8ndo"
                    }
                },
                "contentDetails": {
                    "videoId": "dx-RIui8ndo",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/FnYf4NtKEeLj6-FQ3Rb4-_OcPVI\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Gigue in A Major: Brescianello, performer: Cory Sams",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a1YgmfSDiB4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a1YgmfSDiB4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a1YgmfSDiB4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/a1YgmfSDiB4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "a1YgmfSDiB4"
                    }
                },
                "contentDetails": {
                    "videoId": "a1YgmfSDiB4",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Xuby37NX9gmMzIZERD_nRnSiLsY\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Torija: Torroba, performer: Christine Wood",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hbJQ0ZZvG4Y/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hbJQ0ZZvG4Y/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hbJQ0ZZvG4Y/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hbJQ0ZZvG4Y/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "hbJQ0ZZvG4Y"
                    }
                },
                "contentDetails": {
                    "videoId": "hbJQ0ZZvG4Y",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/38u83eYleo65hX9bcAUdQ-N1K2E\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in A Major Op60 No13: Carcassi, performer: Josh Smith",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dewetnJEnQg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dewetnJEnQg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dewetnJEnQg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "dewetnJEnQg"
                    }
                },
                "contentDetails": {
                    "videoId": "dewetnJEnQg",
                    "videoPublishedAt": "2017-09-27T18:34:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iyVKiXaXvTi_0qnXUz_b6I3_i1I\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in C Major Op1 No1: Giuliani, performer: Josh Smith",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VlBQDr15U7w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VlBQDr15U7w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VlBQDr15U7w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "VlBQDr15U7w"
                    }
                },
                "contentDetails": {
                    "videoId": "VlBQDr15U7w",
                    "videoPublishedAt": "2017-09-27T18:34:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/tiRnO2_UcjyOHqcWWKYNiFgSTZU\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in D Major: Carcassi, performer: Eddie McGrath",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/kZ1Px5jf-IY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/kZ1Px5jf-IY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/kZ1Px5jf-IY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/kZ1Px5jf-IY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "kZ1Px5jf-IY"
                    }
                },
                "contentDetails": {
                    "videoId": "kZ1Px5jf-IY",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Vh3uOOPrjLDNyyeX4kIEF_rlNto\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in A Major: Carcassi, performer: Eddie McGrath",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sxL29Clap5o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sxL29Clap5o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sxL29Clap5o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/sxL29Clap5o/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "sxL29Clap5o"
                    }
                },
                "contentDetails": {
                    "videoId": "sxL29Clap5o",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/OxjYFPvR9Q66LGFw3frg2FATxcA\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudios XIV: Brouwer, performer: Daniel Tatem",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uh8eBMG0OIY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uh8eBMG0OIY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uh8eBMG0OIY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/uh8eBMG0OIY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "uh8eBMG0OIY"
                    }
                },
                "contentDetails": {
                    "videoId": "uh8eBMG0OIY",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/p8hR7sI6US84ZJ5H1YQ_ukjA1S0\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudios VIII: Brouwer, performer: Daniel Tatem",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dRV2_URPQXE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dRV2_URPQXE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dRV2_URPQXE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dRV2_URPQXE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "dRV2_URPQXE"
                    }
                },
                "contentDetails": {
                    "videoId": "dRV2_URPQXE",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/weY2zaGS5Zu3mJtH8qIHkevgL1g\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Zapateado: Spanish Traditional, performer: Lauren Adams",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/p0589PueErw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/p0589PueErw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/p0589PueErw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "p0589PueErw"
                    }
                },
                "contentDetails": {
                    "videoId": "p0589PueErw",
                    "videoPublishedAt": "2017-09-27T18:34:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LKTD7gaMnt0w6zXTUgvV5gFQfNc\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in A minor Op50 No13: Giuliani, performer: Lauren Adams",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/i5mDCgMcVqA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/i5mDCgMcVqA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/i5mDCgMcVqA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/i5mDCgMcVqA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "i5mDCgMcVqA"
                    }
                },
                "contentDetails": {
                    "videoId": "i5mDCgMcVqA",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/KF2rr24PLZXnurEqbUBbxVgdr-c\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in C Major Op1 No1: Giuliani, performer: Enrique Armas",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ntadJn8JXWc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ntadJn8JXWc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ntadJn8JXWc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ntadJn8JXWc"
                    }
                },
                "contentDetails": {
                    "videoId": "ntadJn8JXWc",
                    "videoPublishedAt": "2017-09-27T18:34:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/yjcsfQKfO_TxF49otkAXrY3-FQc\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude in D minor: Carulli, performer:  Pierce Grimm",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0GTpf1yFV9I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0GTpf1yFV9I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0GTpf1yFV9I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "0GTpf1yFV9I"
                    }
                },
                "contentDetails": {
                    "videoId": "0GTpf1yFV9I",
                    "videoPublishedAt": "2017-09-27T18:34:34.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/PD4L83_I20BFCpS_9s1FS7tFleo\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No76 in D major: Sagreras, performer: Ryan Grounds",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ImYaI647yfc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ImYaI647yfc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ImYaI647yfc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ImYaI647yfc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ImYaI647yfc"
                    }
                },
                "contentDetails": {
                    "videoId": "ImYaI647yfc",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/o1V6I9Ctge5urIQ50eTcI2gppOM\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No70 in E minor: Sagreras, performer: Ryan Grounds",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/u3TiCxFGKeg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/u3TiCxFGKeg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/u3TiCxFGKeg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/u3TiCxFGKeg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "u3TiCxFGKeg"
                    }
                },
                "contentDetails": {
                    "videoId": "u3TiCxFGKeg",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/nrM3sAMJ804Y3UnTok0NEEQeVSI\"",
                "id": "UEx2aGtLMTgyN05EemIzUDRQX25PRm1VLU83M2hXbjY0My5EQUE1NTFDRjcwMDg0NEMz",
                "snippet": {
                    "publishedAt": "2017-09-27T18:36:34.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude in A minor: Carulli, performer: Ryan Grounds",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PrbfRuUqbdw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PrbfRuUqbdw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PrbfRuUqbdw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PrbfRuUqbdw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "PrbfRuUqbdw"
                    }
                },
                "contentDetails": {
                    "videoId": "PrbfRuUqbdw",
                    "videoPublishedAt": "2017-09-27T18:34:33.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/gLqtw1LPQ3_AEXKCj0wgb8xXf80\"",
        "pageInfo": {
            "totalResults": 2,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rx1imVOLZjZKvI8HR1cMxq_yZkM\"",
                "id": "UEx2aGtLMTgyN05Eejg0T08wWHo1MFZQYjRtWmJjTzgxRS41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-27T17:20:37.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "World Premieres: Ninochka & Austin Tango",
                    "description": "Ninochka (World Premiere): Olga Amelkina-Vera\nAustin Tango (World Premiere): Roland Dyens\nperformed by: 2009 Guitars Galore! Festival Finale Orchestra",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-T96Zz72TNk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-T96Zz72TNk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-T96Zz72TNk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-T96Zz72TNk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/-T96Zz72TNk/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDz84OO0Xz50VPb4mZbcO81E",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "-T96Zz72TNk"
                    }
                },
                "contentDetails": {
                    "videoId": "-T96Zz72TNk",
                    "videoPublishedAt": "2017-09-27T17:20:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bA_JW9MHIjeuH-LzeNQOn0heW94\"",
                "id": "UEx2aGtLMTgyN05Eejg0T08wWHo1MFZQYjRtWmJjTzgxRS4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-27T17:20:37.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "One O'Clock Guitar Ensemble at Austin 2009 04 25",
                    "description": "Three Selections: John Dowland\n- Lady Laiton's Alman\n- Awake Sweet Love\n- Mrs. Nichols' Almain\nAllegro: George Philipp Telemann\nWhat Would Michael Kelsey Do?: Mark Anthony Cruz \nOne O'Clock Ensemble: Cassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, Roland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.\nSabine Madriguera, Director",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/i8_kA9szsHo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/i8_kA9szsHo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/i8_kA9szsHo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/i8_kA9szsHo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/i8_kA9szsHo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDz84OO0Xz50VPb4mZbcO81E",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "i8_kA9szsHo"
                    }
                },
                "contentDetails": {
                    "videoId": "i8_kA9szsHo",
                    "videoPublishedAt": "2017-09-27T17:20:36.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/VfXy-dv_pTI26R0EH_0v8_Ue0bM\"",
        "pageInfo": {
            "totalResults": 6,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/FRubAmXNdLHj7M_X1I5EPVmgwNA\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-27T16:35:40.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allegro  G.P. Telemann (1681-1767)",
                    "description": "Collin College One O'Clock Guitar Ensemble\nSabine Madriguera, Director\nPerformers: Cassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vD-X8nKQ8yE"
                    }
                },
                "contentDetails": {
                    "videoId": "vD-X8nKQ8yE",
                    "videoPublishedAt": "2017-09-27T16:11:10.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/TxNq4_kzEYMxGanOFN78U9humNM\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-27T16:39:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Awake Sweet Love: John Dowland (1563-1626)",
                    "description": "2009 Spring Ensemble\nDirector: Sabine Madriguera\nCollin College One O'Clock Ensemble:\nCassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BJxr7_hUsFY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BJxr7_hUsFY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BJxr7_hUsFY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/BJxr7_hUsFY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/BJxr7_hUsFY/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BJxr7_hUsFY"
                    }
                },
                "contentDetails": {
                    "videoId": "BJxr7_hUsFY",
                    "videoPublishedAt": "2017-09-27T16:39:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/2yZlDBFO4Bs5zuxpQuy0aruC1AU\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-27T16:39:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Ninochka:  Olga Amelkina-Vera",
                    "description": "2009 Spring Ensemble\nDirector: Sabine Madriguera\nCollin College One O'Clock Ensemble:\nCassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/61lkhMFffW8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/61lkhMFffW8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/61lkhMFffW8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/61lkhMFffW8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/61lkhMFffW8/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "61lkhMFffW8"
                    }
                },
                "contentDetails": {
                    "videoId": "61lkhMFffW8",
                    "videoPublishedAt": "2017-09-27T16:39:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/tsK7K4C1X_ycQGFaIvjO6vgM19s\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T16:39:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Lady Laiton's Alman: John Dowland (1563-1626)",
                    "description": "2009 Spring Ensemble\nDirector: Sabine Madriguera\nCollin College One O'Clock Ensemble:\nCassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/cW--U-NSXDE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/cW--U-NSXDE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/cW--U-NSXDE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/cW--U-NSXDE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/cW--U-NSXDE/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "cW--U-NSXDE"
                    }
                },
                "contentDetails": {
                    "videoId": "cW--U-NSXDE",
                    "videoPublishedAt": "2017-09-27T16:39:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/6vqd7pBCjh0kjue9kJgfN4fYw08\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T16:39:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Mrs  Nichols' Almain: John Dowland (1563-1626)",
                    "description": "2009 Spring Ensemble\nDirector: Sabine Madriguera\nCollin College One O'Clock Ensemble:\nCassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9fH1eggeP30/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9fH1eggeP30/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9fH1eggeP30/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9fH1eggeP30/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/9fH1eggeP30/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "9fH1eggeP30"
                    }
                },
                "contentDetails": {
                    "videoId": "9fH1eggeP30",
                    "videoPublishedAt": "2017-09-27T16:39:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/3gRNZ9HFDHdsoMdMXvj-i5VodmU\"",
                "id": "UEx2aGtLMTgyN05EelRnTTVDNlN5aUJQd1VjYTY2alo1ei4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-27T16:39:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "What Would Michael Kelsey Do:  Mark Anthony Cruz",
                    "description": "2009 Spring Ensemble\nDirector: Sabine Madriguera\nCollin College One O'Clock Ensemble:\nCassandra Andrews, Blake Burleson, Russell Callison, Sean Chilson, Suvanee Chirachanchai, \nRoland Dunderdale, Steven Fry, Eddie Healy, Erin Johnson, Joshua MIlls.",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HUkwEmWetuo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HUkwEmWetuo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HUkwEmWetuo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HUkwEmWetuo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HUkwEmWetuo/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "HUkwEmWetuo"
                    }
                },
                "contentDetails": {
                    "videoId": "HUkwEmWetuo",
                    "videoPublishedAt": "2017-09-27T16:39:48.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4VGT-pOQ4ugT_QPc7W014oRGkUA\"",
        "pageInfo": {
            "totalResults": 32,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ish16iLp049KKBGg2ooiG_FcK2Y\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 9: Leo Brouwer,  Performer: Sean Chilson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/awwgiNifGiY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/awwgiNifGiY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/awwgiNifGiY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "awwgiNifGiY"
                    }
                },
                "contentDetails": {
                    "videoId": "awwgiNifGiY",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4tKGhX04NelvcObaT3U6AGyet84\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Caprice No.29: Luigi Legnani,  Performer: Sean Chilson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BjgE2TsfTBs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BjgE2TsfTBs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BjgE2TsfTBs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BjgE2TsfTBs"
                    }
                },
                "contentDetails": {
                    "videoId": "BjgE2TsfTBs",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/MJmweYjumVZhzqlMtUNFtVgR0Yg\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Caprice No.2: Luigi Legnani,  Performer: Sean Chilson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fcuJ0gzhz5o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fcuJ0gzhz5o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fcuJ0gzhz5o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "fcuJ0gzhz5o"
                    }
                },
                "contentDetails": {
                    "videoId": "fcuJ0gzhz5o",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/vhrpteJyjyI4FM_ELsO7tB4y7ho\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Se lo M'accorgo: Anon. arr by O. Chilesotti,  Performer: Sean Chilson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WIU-JoOg-1o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WIU-JoOg-1o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WIU-JoOg-1o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "WIU-JoOg-1o"
                    }
                },
                "contentDetails": {
                    "videoId": "WIU-JoOg-1o",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bzJK6B8b3WrKlaYKLEjofMaCrTY\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Danza: Anon. arr by O. Chilesotti,  Performer: Sean Chilson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jEt8-iuepxU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jEt8-iuepxU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jEt8-iuepxU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "jEt8-iuepxU"
                    }
                },
                "contentDetails": {
                    "videoId": "jEt8-iuepxU",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/cr8ijQwTaB0c0pmHLFn5wI_qyro\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Preludio & Ostinato: Siegrfried Mueller,  Performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/xt4D0Zqt_2E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/xt4D0Zqt_2E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/xt4D0Zqt_2E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "xt4D0Zqt_2E"
                    }
                },
                "contentDetails": {
                    "videoId": "xt4D0Zqt_2E",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LzZvzjmUaP0ohbEytukB1gjcrRw\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No.1: Heitor Villa-Lobos,  Performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YbOOneZ-rXA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YbOOneZ-rXA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YbOOneZ-rXA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "YbOOneZ-rXA"
                    }
                },
                "contentDetails": {
                    "videoId": "YbOOneZ-rXA",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/OK4wExrOlFlS2AGzvdNejYbgNwA\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "25 Gavotte Dana",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bWFgjow1mWE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bWFgjow1mWE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bWFgjow1mWE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "bWFgjow1mWE"
                    }
                },
                "contentDetails": {
                    "videoId": "bWFgjow1mWE",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/SDLC1vvZ3u4Ymep7DR5LmWw84i0\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "24 Sarabande Dana",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AW4zITquWqc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AW4zITquWqc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AW4zITquWqc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "AW4zITquWqc"
                    }
                },
                "contentDetails": {
                    "videoId": "AW4zITquWqc",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/O8Fy8MIiqi4tgMjzUzQF1cJrqlY\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Canary Jig: Anon. arr by F. Noad,  Performer: Zachery Herrmann",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vW2CA5BDqSc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vW2CA5BDqSc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vW2CA5BDqSc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vW2CA5BDqSc"
                    }
                },
                "contentDetails": {
                    "videoId": "vW2CA5BDqSc",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/wd6idcI-RTpABaJcv1vkpgwgQ8Q\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in A minor: Fernando Carulli,  Performer: Zachery Herrmann",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/o9bUBHBgUgg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/o9bUBHBgUgg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/o9bUBHBgUgg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "o9bUBHBgUgg"
                    }
                },
                "contentDetails": {
                    "videoId": "o9bUBHBgUgg",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/B631ok0qZe_TPp3Qj8CjnqlL8sA\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio Op.6 No.11: Fernando Sor,  Performer: Erin Johnson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/KUDYrxT4gCQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/KUDYrxT4gCQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/KUDYrxT4gCQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "KUDYrxT4gCQ"
                    }
                },
                "contentDetails": {
                    "videoId": "KUDYrxT4gCQ",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/m7jPDmQHoKcc2WlZ95EbDXNuRyc\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "The Shoemaker's Wife: John Dowland,  Performer: Erin Johnson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MtAmL40f1uM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MtAmL40f1uM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MtAmL40f1uM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "MtAmL40f1uM"
                    }
                },
                "contentDetails": {
                    "videoId": "MtAmL40f1uM",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/_AuXIZtg-hjyGKm9IyBQfjBjZFE\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5EQUE1NTFDRjcwMDg0NEMz",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Monferrina Op.12 No.3: Mauro Giuliani,  Performer: Shankar Venkatraman",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/v3dYNuDlN70/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/v3dYNuDlN70/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/v3dYNuDlN70/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "v3dYNuDlN70"
                    }
                },
                "contentDetails": {
                    "videoId": "v3dYNuDlN70",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/B5BlSkoC3jqjBefmAqOkBlrjt-U\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi41QTY1Q0UxMTVCODczNThE",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Andante Op.241 No.18: Fernando Carulli,  Performer: Shankar Venkatraman",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XQtq6hq5cFE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XQtq6hq5cFE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XQtq6hq5cFE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "XQtq6hq5cFE"
                    }
                },
                "contentDetails": {
                    "videoId": "XQtq6hq5cFE",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/MItd06SMUxBxRKxbL5qksu1YOl4\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4yMUQyQTQzMjRDNzMyQTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Segeduilla: Julio Sagreras,  Performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5pyz-bEzgGM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5pyz-bEzgGM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5pyz-bEzgGM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "5pyz-bEzgGM"
                    }
                },
                "contentDetails": {
                    "videoId": "5pyz-bEzgGM",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Mf2_9aYrTDYsaltmI35bH0B3WbI\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi45RTgxNDRBMzUwRjQ0MDhC",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in B minor: Fernando Sor,  Performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YaRJHjhqEDQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YaRJHjhqEDQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YaRJHjhqEDQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "YaRJHjhqEDQ"
                    }
                },
                "contentDetails": {
                    "videoId": "YaRJHjhqEDQ",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Cy68fqcXCYTzHtKHtMFmiwqfuro\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5ENDU4Q0M4RDExNzM1Mjcy",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio 11: Leo Brouwer,  Performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ruUwLAffGVE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ruUwLAffGVE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ruUwLAffGVE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ruUwLAffGVE"
                    }
                },
                "contentDetails": {
                    "videoId": "ruUwLAffGVE",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/K3fXp7nm6PEWCQT-xQFR6G2Jd5Q\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4yMDhBMkNBNjRDMjQxQTg1",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio 6: Leo Brouwer,  Performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WHxixujJHqM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WHxixujJHqM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WHxixujJHqM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "WHxixujJHqM"
                    }
                },
                "contentDetails": {
                    "videoId": "WHxixujJHqM",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/AEj0sufejwhPbxc6T9PtMO2VAiE\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5GM0Q3M0MzMzY5NTJFNTdE",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio 12: Leo Brouwer,  Performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ud0N5rt560g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ud0N5rt560g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ud0N5rt560g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ud0N5rt560g"
                    }
                },
                "contentDetails": {
                    "videoId": "ud0N5rt560g",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/qrTez2JpW-BEqFXdfHqhew0SAfk\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4zRjM0MkVCRTg0MkYyQTM0",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Gigue: Robert de Visee,  Performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/EgGbBsh83-E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/EgGbBsh83-E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/EgGbBsh83-E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 20,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "EgGbBsh83-E"
                    }
                },
                "contentDetails": {
                    "videoId": "EgGbBsh83-E",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/a4-dFr4WegOAQkNfvqDfsFCDEIc\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi45NzUwQkI1M0UxNThBMkU0",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Bourree: Robert de Visee,  Performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/72THmQqkkUQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/72THmQqkkUQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/72THmQqkkUQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 21,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "72THmQqkkUQ"
                    }
                },
                "contentDetails": {
                    "videoId": "72THmQqkkUQ",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/VxNlXbYv3XnKVkpkQYR4cJ2V2Cw\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5DNzE1RjZEMUZCMjA0RDBB",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Saraband: Robert de Visee,  Performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6RCDp9JNrDI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6RCDp9JNrDI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6RCDp9JNrDI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 22,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "6RCDp9JNrDI"
                    }
                },
                "contentDetails": {
                    "videoId": "6RCDp9JNrDI",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/-ddD2lIWhqqCPggJp_nvC_r97B8\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi43MTI1NDIwOTMwQjIxMzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allemand: Robert de Visee,  Performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/UKt8e9KaARo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/UKt8e9KaARo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/UKt8e9KaARo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 23,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "UKt8e9KaARo"
                    }
                },
                "contentDetails": {
                    "videoId": "UKt8e9KaARo",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/dhcyML1V3NZiwzcEasl61OVqtsg\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5DQ0MyQ0Y4Mzg0M0VGOEYw",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude: Robert de Visee,  Performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/i6Z_gZ8f_rM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/i6Z_gZ8f_rM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/i6Z_gZ8f_rM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 24,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "i6Z_gZ8f_rM"
                    }
                },
                "contentDetails": {
                    "videoId": "i6Z_gZ8f_rM",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iEHTkuFzOoYF-z2J0N_2zzTzarw\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4yQUE2Q0JEMTk4NTM3RTZC",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Seis Milonga: Ernesto Cordero,  Performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/E-3GOmqz_70/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/E-3GOmqz_70/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/E-3GOmqz_70/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 25,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "E-3GOmqz_70"
                    }
                },
                "contentDetails": {
                    "videoId": "E-3GOmqz_70",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/5uIfWONurikdLS-TylAFzY9dh8g\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5DMkU4NTY1QUFGQTYwMDE3",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Capricho Arabe: Francisco Tarrega,  Performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/k3tK787awdQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/k3tK787awdQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/k3tK787awdQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 26,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "k3tK787awdQ"
                    }
                },
                "contentDetails": {
                    "videoId": "k3tK787awdQ",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/BgBOEK59JwyyU93C7zrNT4TwwSo\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi44Mjc5REFBRUE2MTdFRDU0",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio VI: Leo Brouwer,  Performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vGJ9jm_UFDc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vGJ9jm_UFDc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vGJ9jm_UFDc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 27,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vGJ9jm_UFDc"
                    }
                },
                "contentDetails": {
                    "videoId": "vGJ9jm_UFDc",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Nw26rKkACPNdVpJzjN3Y5tPCWPk\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi43NDhFRTgwOTRERTU4Rjg3",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fantasia 8: Don Luys Milan,  Performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yGGgNo0h1ZE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yGGgNo0h1ZE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yGGgNo0h1ZE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 28,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "yGGgNo0h1ZE"
                    }
                },
                "contentDetails": {
                    "videoId": "yGGgNo0h1ZE",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/qpXpT3iaT2A8BIHnJN9C0cbRzXA\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi41QUZGQTY5OTE4QTREQUU4",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:25.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fantasia 2: Don Luys Milan,  Performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/feqxhPKLGrg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/feqxhPKLGrg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/feqxhPKLGrg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 29,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "feqxhPKLGrg"
                    }
                },
                "contentDetails": {
                    "videoId": "feqxhPKLGrg",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/L_enB0VaUqd1w2lS8CSZoygL9VY\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi4zRDBDOEZDOUM0MDY5NEEz",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:54.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Variations on La Folia: Francois de Fossa,  Performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HIF-PYGyO2U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HIF-PYGyO2U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HIF-PYGyO2U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 30,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "HIF-PYGyO2U"
                    }
                },
                "contentDetails": {
                    "videoId": "HIF-PYGyO2U",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/jv3nSsYYNhgqEszvo0QBVPRtXrk\"",
                "id": "UEx2aGtLMTgyN05EenpBdEJEVXpOLWh2T1pfMUFiQi1BMi5CMEQ2Mjk5NTc3NDZFRUNB",
                "snippet": {
                    "publishedAt": "2017-09-27T04:02:54.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Pezzo Tedessco: Anonymous,  Performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5Q87DjI_BsQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5Q87DjI_BsQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5Q87DjI_BsQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
                    "position": 31,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "5Q87DjI_BsQ"
                    }
                },
                "contentDetails": {
                    "videoId": "5Q87DjI_BsQ",
                    "videoPublishedAt": "2017-09-27T04:00:48.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/DN9jvPfDPwVJOBicdFrOCtp2jYg\"",
        "pageInfo": {
            "totalResults": 33,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/xsSUy4qbIw5J4DPvrdp8XhAoIBw\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 1: Heitor Villa-Lobos, performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/90AUIVzbrCY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/90AUIVzbrCY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/90AUIVzbrCY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "90AUIVzbrCY"
                    }
                },
                "contentDetails": {
                    "videoId": "90AUIVzbrCY",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Hoa73tFGZNdiXjeL6WnTdZV2bFk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Gymnopedies 1 & 2: Erik Satie, performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zwBpCLIOjMQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zwBpCLIOjMQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zwBpCLIOjMQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "zwBpCLIOjMQ"
                    }
                },
                "contentDetails": {
                    "videoId": "zwBpCLIOjMQ",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/lm0SNDF5y0NpvbxhVR5oy6evjMk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "The Frog Galliard: John Dowland, performer: Erin Johnson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ppOV2-gIRg4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ppOV2-gIRg4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ppOV2-gIRg4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ppOV2-gIRg4"
                    }
                },
                "contentDetails": {
                    "videoId": "ppOV2-gIRg4",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/OR2l1EemWg7sobaOw_DnR_wobH8\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5EQUE1NTFDRjcwMDg0NEMz",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Shoe Maker's Wife: John Dowland, performer: Erin Johnson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4Ktb21u5wPI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4Ktb21u5wPI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4Ktb21u5wPI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4Ktb21u5wPI"
                    }
                },
                "contentDetails": {
                    "videoId": "4Ktb21u5wPI",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/MUDJlqPhTkO2yjQiH1eTkPnWYQE\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS41QTY1Q0UxMTVCODczNThE",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No.20: Leo Brouwer, performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/k8d7kUoIBlI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/k8d7kUoIBlI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/k8d7kUoIBlI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "k8d7kUoIBlI"
                    }
                },
                "contentDetails": {
                    "videoId": "k8d7kUoIBlI",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/9JEXMuUdoTyEF_E-4jdu3zzKjqU\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4yMUQyQTQzMjRDNzMyQTMy",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Farewell: Sergio Assad, performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wWYdKgcr4Jo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wWYdKgcr4Jo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wWYdKgcr4Jo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "wWYdKgcr4Jo"
                    }
                },
                "contentDetails": {
                    "videoId": "wWYdKgcr4Jo",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/kN06QYYYnMiT3PQ1Vh4hd59YixU\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS45RTgxNDRBMzUwRjQ0MDhC",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "I Stern: Mark Anthony Cruz, performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/j7ZfqD3X3q4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/j7ZfqD3X3q4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/j7ZfqD3X3q4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "j7ZfqD3X3q4"
                    }
                },
                "contentDetails": {
                    "videoId": "j7ZfqD3X3q4",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LoVffwDJ7w4r2ZILCpkmaMDQduo\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5ENDU4Q0M4RDExNzM1Mjcy",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude Op.31 No.21: Fernando Sor, performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/sjmSXDvZseQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/sjmSXDvZseQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/sjmSXDvZseQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "sjmSXDvZseQ"
                    }
                },
                "contentDetails": {
                    "videoId": "sjmSXDvZseQ",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/DEWc6vQI81Dz0vPq8SD5vPIvGlk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4yMDhBMkNBNjRDMjQxQTg1",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude Op.6 No.2: Fernando Sor, performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/X_dKVfBtqQE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/X_dKVfBtqQE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/X_dKVfBtqQE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "X_dKVfBtqQE"
                    }
                },
                "contentDetails": {
                    "videoId": "X_dKVfBtqQE",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rng-6I4VxTKDgtdIvoTptuflypg\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5GM0Q3M0MzMzY5NTJFNTdE",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No.4: Mark Anthony Cruz, performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/t9V8AQORkj4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/t9V8AQORkj4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/t9V8AQORkj4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "t9V8AQORkj4"
                    }
                },
                "contentDetails": {
                    "videoId": "t9V8AQORkj4",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/KyHgT88gnmLEuH9Xpl2n7oY8PSw\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4zRjM0MkVCRTg0MkYyQTM0",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in E minor: Francisco Tarrega, performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ObMRYIUXv-g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ObMRYIUXv-g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ObMRYIUXv-g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ObMRYIUXv-g"
                    }
                },
                "contentDetails": {
                    "videoId": "ObMRYIUXv-g",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/UWLp_CRKcLZKynZJTMZfFLG9w1E\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS45NzUwQkI1M0UxNThBMkU0",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Lagrima: Francisco Tarrega, performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ny0R6p7yVIQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ny0R6p7yVIQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ny0R6p7yVIQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Ny0R6p7yVIQ"
                    }
                },
                "contentDetails": {
                    "videoId": "Ny0R6p7yVIQ",
                    "videoPublishedAt": "2017-09-27T03:21:36.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/dK9Hs6cJDtE0kCsxNXvJSaTH5CI\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5DNzE1RjZEMUZCMjA0RDBB",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Adelita: Francisco Tarrega, performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/eA3nTyZzZNc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/eA3nTyZzZNc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/eA3nTyZzZNc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "eA3nTyZzZNc"
                    }
                },
                "contentDetails": {
                    "videoId": "eA3nTyZzZNc",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iSrd2NYdHF6qxp01Rxdi4PfVolk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS43MTI1NDIwOTMwQjIxMzNG",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Stony Creek Blues: Maria Linnemann, performer: Shankar Ventrakaman",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/a7XaEfzZ6Wk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/a7XaEfzZ6Wk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/a7XaEfzZ6Wk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "a7XaEfzZ6Wk"
                    }
                },
                "contentDetails": {
                    "videoId": "a7XaEfzZ6Wk",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Vfrv2e_fC7wHKtwc9Td2zlo6OCQ\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5DQ0MyQ0Y4Mzg0M0VGOEYw",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Studie No.12: Johann Kaspar Mertz, performer: Shankar Ventrakaman",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_SZGzkacxx8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_SZGzkacxx8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_SZGzkacxx8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "_SZGzkacxx8"
                    }
                },
                "contentDetails": {
                    "videoId": "_SZGzkacxx8",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/A7vhzZmL-XkBndnqc_miJJvUqKY\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4yQUE2Q0JEMTk4NTM3RTZC",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Cascais: Robert Evans, performer: Shankar Ventrakaman",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Q6FBH2FOlZg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Q6FBH2FOlZg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Q6FBH2FOlZg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Q6FBH2FOlZg"
                    }
                },
                "contentDetails": {
                    "videoId": "Q6FBH2FOlZg",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/V_1ygWCsr1xPP0IbuHJ5n5OC8hQ\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5DMkU4NTY1QUFGQTYwMDE3",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Tango Maria Francisco: Tarrega, performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/3yoM3ADWfVU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/3yoM3ADWfVU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/3yoM3ADWfVU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "3yoM3ADWfVU"
                    }
                },
                "contentDetails": {
                    "videoId": "3yoM3ADWfVU",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/RuDDfRqU3tumWJoO8wOXoKxQwdU\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS44Mjc5REFBRUE2MTdFRDU0",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No.15: Leo Brouwer , performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GueN3TeeEwk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GueN3TeeEwk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GueN3TeeEwk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "GueN3TeeEwk"
                    }
                },
                "contentDetails": {
                    "videoId": "GueN3TeeEwk",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Tfbm6OgdVSuQu5x0zIzhzHl_A-s\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS43NDhFRTgwOTRERTU4Rjg3",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Study: Julio Sagreras, performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BEH-xTWuDJc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BEH-xTWuDJc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BEH-xTWuDJc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BEH-xTWuDJc"
                    }
                },
                "contentDetails": {
                    "videoId": "BEH-xTWuDJc",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/hvsHbexdIlH7lv4whDzZWpZROaQ\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS41QUZGQTY5OTE4QTREQUU4",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 1: Jana Obovska,  performer: Roland Dunderdale",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vXSMFf3tje0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vXSMFf3tje0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vXSMFf3tje0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vXSMFf3tje0"
                    }
                },
                "contentDetails": {
                    "videoId": "vXSMFf3tje0",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/06ZJOIUTCxCpC8iV1QlAgCVWZcE\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4zRDBDOEZDOUM0MDY5NEEz",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 8: Jana Obovska,  performer: Roland Dunderdale",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Y3vZZVH6K8A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Y3vZZVH6K8A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Y3vZZVH6K8A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 20,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Y3vZZVH6K8A"
                    }
                },
                "contentDetails": {
                    "videoId": "Y3vZZVH6K8A",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/q3E-fAVAtynreq62aG-nHZYurgM\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5CMEQ2Mjk5NTc3NDZFRUNB",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Larghetto Op.50 No.17: Mauro Guiliani, performer: Roland Dunderdale",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iRooHHJXexM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iRooHHJXexM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iRooHHJXexM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 21,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "iRooHHJXexM"
                    }
                },
                "contentDetails": {
                    "videoId": "iRooHHJXexM",
                    "videoPublishedAt": "2017-09-27T03:21:35.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Sd4Ncfh2vabuQMIwrCLeo5KeB_g\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS42MTI4Njc2QjM1RjU1MjlG",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Romance: Anonymous  performer:  Azhar Unwala",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/g1Iz20kkf9M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/g1Iz20kkf9M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/g1Iz20kkf9M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 22,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "g1Iz20kkf9M"
                    }
                },
                "contentDetails": {
                    "videoId": "g1Iz20kkf9M",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/p2K0dav-C2JmNiCLydp9OQ1ihD8\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS45RjNFMDhGQ0Q2RkFCQTc1",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Andantino: Mauro Guiliani,  performer:  Azhar Unwala",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/XPSionf6mfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/XPSionf6mfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/XPSionf6mfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 23,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "XPSionf6mfU"
                    }
                },
                "contentDetails": {
                    "videoId": "XPSionf6mfU",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/uouwcG00l5lZfsRpIJUGjShqUV4\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS40QTA3NTU2RkM1QzlCMzYx",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No.10: Carlo Domeniconi,  performer:  Ariana Zhang",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JwFlQWsIAmM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JwFlQWsIAmM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JwFlQWsIAmM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 24,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "JwFlQWsIAmM"
                    }
                },
                "contentDetails": {
                    "videoId": "JwFlQWsIAmM",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/m10bVsOFWp_aeYMSUDnz3Dlm2jU\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5BRjJDODk5REM0NjkzMUIy",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Adagio: Johann Kaspar Mertz,  performer:  Ariana Zhang",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/O6GK3XZgf4U/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/O6GK3XZgf4U/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/O6GK3XZgf4U/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 25,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "O6GK3XZgf4U"
                    }
                },
                "contentDetails": {
                    "videoId": "O6GK3XZgf4U",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/d4mfGQWZ-SS002itVisncQri8B0\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4xOTEzQzhBQzU3MDNDNjcz",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Waltz & Andantino: Fernando Carulli,  performer:  Luke Sampeck",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/uMOQjjbFBnM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/uMOQjjbFBnM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/uMOQjjbFBnM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 26,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "uMOQjjbFBnM"
                    }
                },
                "contentDetails": {
                    "videoId": "uMOQjjbFBnM",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/AwNzNIhkpzouey0n1rUgIyTgklI\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5GNDg1Njc1QzZERjlFRjE5",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Romanza & Vals: Bartolome Calatuyd,  performer:  Blake Burleson",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/W4NW7W2rfvY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/W4NW7W2rfvY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/W4NW7W2rfvY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 27,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "W4NW7W2rfvY"
                    }
                },
                "contentDetails": {
                    "videoId": "W4NW7W2rfvY",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rMhz7diwEJU-vwg21VH9w0iLXfo\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4zQzFBN0RGNzNFREFCMjBE",
                "snippet": {
                    "publishedAt": "2017-09-27T03:26:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Variations on La Folia: Francois de Fossa, Performer: Vicky",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/men0flWZF18/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/men0flWZF18/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/men0flWZF18/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 28,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "men0flWZF18"
                    }
                },
                "contentDetails": {
                    "videoId": "men0flWZF18",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/M4uIb6_jVOCR3cWLZ-fN4ldzne4\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5DNkMwRUI2MkI4QkI4NDFG",
                "snippet": {
                    "publishedAt": "2017-09-27T03:27:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Andantino Op.2 No.3: Fernando Sor,  performer: Jonathan Sonnier",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GqwAZcLPV9s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GqwAZcLPV9s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GqwAZcLPV9s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 30,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "GqwAZcLPV9s"
                    }
                },
                "contentDetails": {
                    "videoId": "GqwAZcLPV9s",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/W-K713eWZoRRwob3GTMdEb_I4xk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS5DRUQwODMxQzUyRTlGRkY3",
                "snippet": {
                    "publishedAt": "2017-09-27T03:27:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonata in D Allegro: Santiago de Murcia,  performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/i1QyPwC1ISk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/i1QyPwC1ISk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/i1QyPwC1ISk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 31,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "i1QyPwC1ISk"
                    }
                },
                "contentDetails": {
                    "videoId": "i1QyPwC1ISk",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/eCLzo5UkQSDsN3W0lcrHiwYKfgk\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS41MzY4MzcwOUFFRUU3QzEx",
                "snippet": {
                    "publishedAt": "2017-09-27T03:27:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonata in D Grave: Santiago de Murcia,  performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-ePZJ3pdhN0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-ePZJ3pdhN0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-ePZJ3pdhN0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 32,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "-ePZJ3pdhN0"
                    }
                },
                "contentDetails": {
                    "videoId": "-ePZJ3pdhN0",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ltfnlnosVSTrXNrmbE-hYkOEcGo\"",
                "id": "UEx2aGtLMTgyN05EeGZRQ2MyUGNRWUxJYV9yaWp3QkdHZS4yQjZFRkExQjFGODk3RUFD",
                "snippet": {
                    "publishedAt": "2017-09-27T03:27:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonata in D Allegro: Santiago de Murcia,  performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HUsm3ogp9Ss/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HUsm3ogp9Ss/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HUsm3ogp9Ss/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
                    "position": 33,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "HUsm3ogp9Ss"
                    }
                },
                "contentDetails": {
                    "videoId": "HUsm3ogp9Ss",
                    "videoPublishedAt": "2017-09-26T21:21:20.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/C6U9_1fizgYJ_rczY22Df28Slew\"",
        "pageInfo": {
            "totalResults": 29,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/lC_s1yNx1Lmz622fjt27hnzWNx4\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:48.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Study No. 12: J.K. Mertz , performer: Zachery Sharp",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4gULVCW88N4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4gULVCW88N4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4gULVCW88N4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4gULVCW88N4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4gULVCW88N4"
                    }
                },
                "contentDetails": {
                    "videoId": "4gULVCW88N4",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Pw6ma5b720tIp4ltq2_b8LcJcJI\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:48.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Romance: J.K. Mertz, performer: Paulinus Cheung",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nswcSFpLwzo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nswcSFpLwzo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nswcSFpLwzo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/nswcSFpLwzo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "nswcSFpLwzo"
                    }
                },
                "contentDetails": {
                    "videoId": "nswcSFpLwzo",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Utbhj1sq9w9Z9bdsaPRtrIvM9pk\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:48.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude Op50 No3: Mauro Giuliani , performer: Luke Sampeck",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/r3VgomMZaaY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/r3VgomMZaaY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/r3VgomMZaaY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/r3VgomMZaaY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "r3VgomMZaaY"
                    }
                },
                "contentDetails": {
                    "videoId": "r3VgomMZaaY",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bVMZBcn9V227sRHCGtcxmK2leME\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:48.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Andantino: Ferdinando Carulli , performer: Paulinus Cheung",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Xkid_c88l9g/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Xkid_c88l9g/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Xkid_c88l9g/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Xkid_c88l9g/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Xkid_c88l9g"
                    }
                },
                "contentDetails": {
                    "videoId": "Xkid_c88l9g",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/QKwaF9vq3pOFANQkLCBW7OHIKBA\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:48.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in G minor: Dionisio Aguado , performer: Luke Sampeck",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hFU8_inTSXw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hFU8_inTSXw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hFU8_inTSXw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hFU8_inTSXw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "hFU8_inTSXw"
                    }
                },
                "contentDetails": {
                    "videoId": "hFU8_inTSXw",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ElDrx9HRqV3pHAY-ldBFzLtH2mE\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Squares Suspended (2009): Andrew York , performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Oc9OIz_IIYE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Oc9OIz_IIYE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Oc9OIz_IIYE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Oc9OIz_IIYE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Oc9OIz_IIYE"
                    }
                },
                "contentDetails": {
                    "videoId": "Oc9OIz_IIYE",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/fM1ulb65ZgNv2XhhihMUr02VFbM\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Camilla: Maria Linnemann , performer: Zachery Herrmann",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hOnd5n8qsk8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hOnd5n8qsk8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hOnd5n8qsk8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hOnd5n8qsk8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "hOnd5n8qsk8"
                    }
                },
                "contentDetails": {
                    "videoId": "hOnd5n8qsk8",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/TtfxZcJdWoO3bCZUcLtiSkd_LbE\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etudes in A major: Dionisio Aguado  , performer: Zachery Herrmann",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dJz6tepYHks/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dJz6tepYHks/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dJz6tepYHks/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/dJz6tepYHks/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "dJz6tepYHks"
                    }
                },
                "contentDetails": {
                    "videoId": "dJz6tepYHks",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/hsovg5C1DSmhfno7R4jVxkUAjRo\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in G major: Dionisio Aguado , performer: Zachery Sharp",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Yx4Bn1nL4j0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Yx4Bn1nL4j0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Yx4Bn1nL4j0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Yx4Bn1nL4j0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Yx4Bn1nL4j0"
                    }
                },
                "contentDetails": {
                    "videoId": "Yx4Bn1nL4j0",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bzEDymF7fl33oAPZvMst2_rmmg8\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fantasia No. 8 Luys Milan , performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/J7L8UbtkEtw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/J7L8UbtkEtw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/J7L8UbtkEtw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/J7L8UbtkEtw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "J7L8UbtkEtw"
                    }
                },
                "contentDetails": {
                    "videoId": "J7L8UbtkEtw",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/mv2S5Mty7ZV3U7Kzwf5kqCu6spY\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Gymnopedie: No. 3 Erik Satie , performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/PGNl7rAYvLs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/PGNl7rAYvLs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/PGNl7rAYvLs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/PGNl7rAYvLs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "PGNl7rAYvLs"
                    }
                },
                "contentDetails": {
                    "videoId": "PGNl7rAYvLs",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/sD0llgQP0qCNSQ9IKTTGPJEGvbE\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:49.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "II Ricercare: Siegfried Mueller , performer: Russell Callison",
                    "description": "II Ricercare, from Sonata for Solo Guitar: Siegfried Mueller, performer: Russell Callison",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SVgKx8Bw30I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SVgKx8Bw30I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SVgKx8Bw30I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SVgKx8Bw30I/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SVgKx8Bw30I"
                    }
                },
                "contentDetails": {
                    "videoId": "SVgKx8Bw30I",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/9jwUJUykFWreDqVAP5E3PgyK75w\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No. 8: Leo Brouwer , performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fX3DML7rTVE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fX3DML7rTVE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fX3DML7rTVE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/fX3DML7rTVE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "fX3DML7rTVE"
                    }
                },
                "contentDetails": {
                    "videoId": "fX3DML7rTVE",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iy8cXfSGaEVVRS-1MFg76iJ1NEU\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5EQUE1NTFDRjcwMDg0NEMz",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude 20: Leo Brouwer  , performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/47FWj092tDo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/47FWj092tDo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/47FWj092tDo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/47FWj092tDo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "47FWj092tDo"
                    }
                },
                "contentDetails": {
                    "videoId": "47FWj092tDo",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/9-YCAxJGSsdOE5qGqymPU8ZJ3Do\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS41QTY1Q0UxMTVCODczNThE",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude Op. 31 No. 21: Fernando Sor , performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/KWC-qixjlQQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/KWC-qixjlQQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/KWC-qixjlQQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/KWC-qixjlQQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "KWC-qixjlQQ"
                    }
                },
                "contentDetails": {
                    "videoId": "KWC-qixjlQQ",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ShhtmFvs1nEqds-JmnYRp8DknHE\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4yMUQyQTQzMjRDNzMyQTMy",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Nocturne: Carl Henze  , performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0A0rrkHd8x8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0A0rrkHd8x8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0A0rrkHd8x8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0A0rrkHd8x8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "0A0rrkHd8x8"
                    }
                },
                "contentDetails": {
                    "videoId": "0A0rrkHd8x8",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/v9_2KsUz7QmbjAE5OUXWloL9q4w\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS45RTgxNDRBMzUwRjQ0MDhC",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "First Soleares: Trad. Flamenco   , performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/KZ28Zf79NAc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/KZ28Zf79NAc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/KZ28Zf79NAc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/KZ28Zf79NAc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "KZ28Zf79NAc"
                    }
                },
                "contentDetails": {
                    "videoId": "KZ28Zf79NAc",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/nFVjzbgHhX6TS4nMNyXwzg4aL1w\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5ENDU4Q0M4RDExNzM1Mjcy",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:50.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Lagrima: Francisco Tarrega  , performer: Suvanee Chirachanchai",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/NcTCilGNd7M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/NcTCilGNd7M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/NcTCilGNd7M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/NcTCilGNd7M/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "NcTCilGNd7M"
                    }
                },
                "contentDetails": {
                    "videoId": "NcTCilGNd7M",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/IeuGQmuLFoWDFVhiIQWzTgwBiQo\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4yMDhBMkNBNjRDMjQxQTg1",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:51.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No. 9: Leo Brouwer , performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CXwFqoMPnG4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CXwFqoMPnG4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CXwFqoMPnG4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CXwFqoMPnG4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 20,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "CXwFqoMPnG4"
                    }
                },
                "contentDetails": {
                    "videoId": "CXwFqoMPnG4",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/qFJeYREfNZpR9jYksNbiwXdGiik\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5GM0Q3M0MzMzY5NTJFNTdE",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:51.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Woven World: Andrew York , performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SP3dfTqtQzY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SP3dfTqtQzY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SP3dfTqtQzY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SP3dfTqtQzY/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 21,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SP3dfTqtQzY"
                    }
                },
                "contentDetails": {
                    "videoId": "SP3dfTqtQzY",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/nlzvQqYGXuBLfHqVA8FcBca4FKA\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4zRjM0MkVCRTg0MkYyQTM0",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:51.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in A: Dionisio Aguado , performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FWtMgDvFYTI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FWtMgDvFYTI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FWtMgDvFYTI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/FWtMgDvFYTI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 22,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "FWtMgDvFYTI"
                    }
                },
                "contentDetails": {
                    "videoId": "FWtMgDvFYTI",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/UJWGS72-0eHqXBhCZty5NvhjtDY\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS45NzUwQkI1M0UxNThBMkU0",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:51.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No. 6: Mark Cruz  , performer: Cassandra Andrews",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZG7mzl9NHLU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZG7mzl9NHLU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZG7mzl9NHLU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ZG7mzl9NHLU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 23,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ZG7mzl9NHLU"
                    }
                },
                "contentDetails": {
                    "videoId": "ZG7mzl9NHLU",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/MpzUleZ6wMLyVh1YpmAerxHt5rw\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5DNzE1RjZEMUZCMjA0RDBB",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:51.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Estudio Sencillo XV: Leo Brouwer  , performer: Anoosh Farvardin",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZC7AOL_S4u0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZC7AOL_S4u0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZC7AOL_S4u0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ZC7AOL_S4u0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 24,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ZC7AOL_S4u0"
                    }
                },
                "contentDetails": {
                    "videoId": "ZC7AOL_S4u0",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/JI4V4B62c1-M3W5Dbxs7EhqAT78\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS43MTI1NDIwOTMwQjIxMzNG",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:52.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Stern, from Tribute in D minor: Mark Cruz , performer: Russell Callison",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/twUNPU9eZy4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/twUNPU9eZy4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/twUNPU9eZy4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/twUNPU9eZy4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 25,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "twUNPU9eZy4"
                    }
                },
                "contentDetails": {
                    "videoId": "twUNPU9eZy4",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4ILTee0ZtoaWlzpDJn_I-gbA924\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5DQ0MyQ0Y4Mzg0M0VGOEYw",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:52.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Warp-Aspect 2: Andrew York , performer: Jay Armstrong",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/d23kM_-Jlyw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/d23kM_-Jlyw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/d23kM_-Jlyw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/d23kM_-Jlyw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 26,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "d23kM_-Jlyw"
                    }
                },
                "contentDetails": {
                    "videoId": "d23kM_-Jlyw",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/uVM3-EBLotOuATGZAQy3nC7Cq9Q\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS4yQUE2Q0JEMTk4NTM3RTZC",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:53.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude No. 7: Leo Brouwer , performer: Steven Fry",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pRxvD5zzJk0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pRxvD5zzJk0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pRxvD5zzJk0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pRxvD5zzJk0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 27,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "pRxvD5zzJk0"
                    }
                },
                "contentDetails": {
                    "videoId": "pRxvD5zzJk0",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/3bVQ27kuWx8WsXuHIhvJKJFyC6I\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS5DMkU4NTY1QUFGQTYwMDE3",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:53.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude No. 1: Heitor Villa-Lobos , performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ggnCUmlWSGs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ggnCUmlWSGs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ggnCUmlWSGs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/ggnCUmlWSGs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 28,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ggnCUmlWSGs"
                    }
                },
                "contentDetails": {
                    "videoId": "ggnCUmlWSGs",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/zIv7xGgHAXF90OYr6DaafNK_slo\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS44Mjc5REFBRUE2MTdFRDU0",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:53.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Rumores de la Caleta: Isaac Albeniz , performer: Joshua Mills",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/AiUim5z_jls/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/AiUim5z_jls/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/AiUim5z_jls/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/AiUim5z_jls/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 29,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "AiUim5z_jls"
                    }
                },
                "contentDetails": {
                    "videoId": "AiUim5z_jls",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/UxZ88BMvAnydDWpQFhvxcNOsOyI\"",
                "id": "UEx2aGtLMTgyN05EdzczczlEVHNLRFQ1bEpGcUlLZFJWNS43NDhFRTgwOTRERTU4Rjg3",
                "snippet": {
                    "publishedAt": "2017-09-26T20:56:54.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Etude in E minor: Dionisio Aguado , performer: Luke Sampeck",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vv5K5UP9Rhs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vv5K5UP9Rhs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vv5K5UP9Rhs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/vv5K5UP9Rhs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
                    "position": 30,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vv5K5UP9Rhs"
                    }
                },
                "contentDetails": {
                    "videoId": "vv5K5UP9Rhs",
                    "videoPublishedAt": "2017-09-26T20:56:47.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/abKEDKw_JV1s47XZq-imcukrFpA\"",
        "pageInfo": {
            "totalResults": 5,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/QSuTkTKtzqsW4nOupxxEkre32EY\"",
                "id": "UEx2aGtLMTgyN05EeGF2b1dUZzA2WTNzNEN2RXNXcmpkZC41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-26T17:33:56.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2016 Fall Six pm Ensemble",
                    "description": "Caro Mio Ben: Tommaso Giordani, arr. Bob Makowski\nO Cessate di Piagarmi: Alessandro Scarlatti, arr. Bob Makowski\nYesterday: Paul McCartney and John Lennon\nSix O’Clock Guitar Ensemble: \nDirected by Nathaniel Earhart\nSteven Barrett, Dale Bynum, Fred Hsiao, Bob Makowski, Carol Speed\n\nNovember 15th 2016; 7:00 pm; John Anthony Theater, Spring Creek Campus",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "5m1Ql9m9to4"
                    }
                },
                "contentDetails": {
                    "videoId": "5m1Ql9m9to4",
                    "videoPublishedAt": "2017-09-26T17:33:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/hwQocpq6djDeJXJ8wisYpbos6wc\"",
                "id": "UEx2aGtLMTgyN05EeGF2b1dUZzA2WTNzNEN2RXNXcmpkZC4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-26T17:33:56.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2016 Summer Six pm Guitar Ensemble",
                    "description": "Sonata No. 8, Op. 13, Adagio Cantabile: Ludwig van Beethoven\nAll Blues: Miles Davis\nEvery Breath You Take: The Police\n6pm Evening Summer Guitar Ensemble: \nSteve Barrett, Dale Bynum, Fred Hsiao, Bob Makowski, Carol Speed\nDirected by: Nathaniel Earhart\n\nFriday, August 5th 2016 7:00 pm C-104, SCC",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HoXbD-wFjvs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HoXbD-wFjvs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HoXbD-wFjvs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HoXbD-wFjvs/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HoXbD-wFjvs/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "HoXbD-wFjvs"
                    }
                },
                "contentDetails": {
                    "videoId": "HoXbD-wFjvs",
                    "videoPublishedAt": "2017-09-26T17:33:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/CWQid2xuBA1_2rOz5GfRZMCgFPU\"",
                "id": "UEx2aGtLMTgyN05EeGF2b1dUZzA2WTNzNEN2RXNXcmpkZC4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-28T20:01:20.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2016 Fall 1130 am Ensemble",
                    "description": "11:30am Guitar Ensemble: Directed by Dr. Fernand Vera\nNewcastle: Anonymous, Arr. Avatar of Catsprey\nBalletfrom Terpsichore: Michael Practorious\nTaconeado: Mexican Folk Song\nRondo from Trio Facile, Op. 26: Leonard de Call\nperformed by: Tyler Barnes, Alton Chan, Kathryn Lagrave, Josh Smith",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/guYFMVWjMs0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/guYFMVWjMs0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/guYFMVWjMs0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/guYFMVWjMs0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/guYFMVWjMs0/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "guYFMVWjMs0"
                    }
                },
                "contentDetails": {
                    "videoId": "guYFMVWjMs0",
                    "videoPublishedAt": "2017-09-28T20:01:19.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Yk4n_QjrABzfpD6PkcGm9JJk8u8\"",
                "id": "UEx2aGtLMTgyN05EeGF2b1dUZzA2WTNzNEN2RXNXcmpkZC41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-10-05T17:39:32.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fall 2016 One O'Clock Guitar Ensemble",
                    "description": "Welcome: Turlough O’ Carolan:\nCapricho Catalan: Issac Albeniz\nVen, Ven: Fernand Vera\nTico Tico No Fuba: Zequinha de Abreu\nOne O’ Clock Guitar Ensemble: Directed by Dr. Fernand Vera\nperformedBy: Enrique Armas, Randall Groves, Malik Qayumov, Jim Vincent, Thomas Vanderzyde, Janie Vermillion",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1wpvjDUNSmg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1wpvjDUNSmg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1wpvjDUNSmg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1wpvjDUNSmg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1wpvjDUNSmg/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "1wpvjDUNSmg"
                    }
                },
                "contentDetails": {
                    "videoId": "1wpvjDUNSmg",
                    "videoPublishedAt": "2017-10-05T17:39:32.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/IGU9ZIl4eMZJZLRcNjpMFaZfyX4\"",
                "id": "UEx2aGtLMTgyN05EeGF2b1dUZzA2WTNzNEN2RXNXcmpkZC4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-10-05T17:40:38.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Fall 2016 Guitar Artists' Showcase",
                    "description": "Lessons in C major and E minor: Julio Sargeras\nEtude No. 3, Op. 60 in A Major: Matteo Carassi\nTwo Etudes in A minor: Ferdinando Carulli\nSaltarello: Vincenzo Galilei\nperformedBy: Janie Vermillion\n.................\nPrelude VI: Manuel Maria Ponce\nLa Paloma: Sebastian Iradier, arr Francisco Tarrega\nperformedBy: Josh Smith\n.................\nPreludio “Saudade” & Andante Religios:\nfrom La Catedral - Agustín Barrios Mangoré \nperformedBy: Randall Groves\n.................\nUn Dia de Noviembre: Leo Brouwer\nAdelita and Rosita: Francisco Tarrega\nperformedBy: Thomas Vanderzyde\n.................\nEstudio No. XX from Estudios Sencillos: Leo Brouwer\nEtude XI: Hector Villa-Lobos\nperformedBy: Malik Qayumov\n.................\nRobin Is To The Greenwood Gone: John Dowland\nQueen Elizabeth’s Galliard: John Dowland\nPrelude, BWV 999: J.S. Bach\nperformedBy: Jim Vincent",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Mbk4LCedaX8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Mbk4LCedaX8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Mbk4LCedaX8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Mbk4LCedaX8"
                    }
                },
                "contentDetails": {
                    "videoId": "Mbk4LCedaX8",
                    "videoPublishedAt": "2017-10-05T17:40:37.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LDusSXSKM0rDpficgBE3KI-8vW8\"",
        "pageInfo": {
            "totalResults": 30,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/_NdV0MSod28CjWPOfX0GG4-vdBw\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5DQ0MyQ0Y4Mzg0M0VGOEYw",
                "snippet": {
                    "publishedAt": "2017-09-26T18:45:53.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Modinha - Composer: Celso Machado",
                    "description": "2010 Spring Semester: Modinha - Composer: Celso Machado\nZachary Sharp & Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "YyXL4tkgXfs"
                    }
                },
                "contentDetails": {
                    "videoId": "YyXL4tkgXfs",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/O-dmrf395qX5AuWBZRVpLOrdf2k\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4yQUE2Q0JEMTk4NTM3RTZC",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: One O'Clock Guitar Ensemble - Yarou, Yarou!",
                    "description": "2010 Spring Semester: One O'Clock Guitar Ensemble - Yarou, Yarou!\n(Arr. by Maurizi & Thorlaksson)\nDirector: Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_Zta4NGb0qo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_Zta4NGb0qo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_Zta4NGb0qo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "_Zta4NGb0qo"
                    }
                },
                "contentDetails": {
                    "videoId": "_Zta4NGb0qo",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/stCXxFs1Pmg2kohz-IUl58kvrrM\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5DMkU4NTY1QUFGQTYwMDE3",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Song - Composer: Mauro Giuliani",
                    "description": "2010 Spring Semester: Song - Composer: Mauro Giuliani\nBrandi Estwick, voice; Cassandra Andrews, guitar",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ija6KnR2sY8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ija6KnR2sY8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ija6KnR2sY8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Ija6KnR2sY8"
                    }
                },
                "contentDetails": {
                    "videoId": "Ija6KnR2sY8",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/IGNcOYd4txRJgUdWIli6TjmcWHY\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby44Mjc5REFBRUE2MTdFRDU0",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Serenade - Composer: Christoph Kirschbaum",
                    "description": "2010 Spring Semester: One O'Clock & Six O'Clock Guitar Ensembles\nSerenade - Composer: Christoph Kirschbaum\nDirector: Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/DcOqf4cQl_0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/DcOqf4cQl_0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/DcOqf4cQl_0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "DcOqf4cQl_0"
                    }
                },
                "contentDetails": {
                    "videoId": "DcOqf4cQl_0",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/eLESjvghrPSQfc8TXpj8N0rCA2I\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby43NDhFRTgwOTRERTU4Rjg3",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: One O'Clock & Six O'Clock Guitar Ensembles",
                    "description": "2010 Spring Semester: One O'Clock & Six O'Clock Guitar Ensembles\nConcertino on the Folias - Composer: Olga Amelkina-Vera\nDirector: Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FbbUskoUOp4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FbbUskoUOp4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FbbUskoUOp4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "FbbUskoUOp4"
                    }
                },
                "contentDetails": {
                    "videoId": "FbbUskoUOp4",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/BnBtCzq6R9suDMHGWBirHy_aKtc\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby41QUZGQTY5OTE4QTREQUU4",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Come Again - Composer: John Downland",
                    "description": "2010 Spring Semester: Come Again - Composer: John Downland\nDavid Marek, voice; Cassandra Andrews, guitar",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Wl7FpLAKEfU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Wl7FpLAKEfU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Wl7FpLAKEfU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Wl7FpLAKEfU"
                    }
                },
                "contentDetails": {
                    "videoId": "Wl7FpLAKEfU",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/fQh6AahFVPdEL8IIP8fll_oPh0A\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4zRDBDOEZDOUM0MDY5NEEz",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Blue House Guitar Group",
                    "description": "2010 Spring Semester: Blue House Guitar Group\nDirector: Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/IfQgr_6DNE4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/IfQgr_6DNE4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/IfQgr_6DNE4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "IfQgr_6DNE4"
                    }
                },
                "contentDetails": {
                    "videoId": "IfQgr_6DNE4",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/SJ8uodTVkD75sK_eL5pjM4fpUkE\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5CMEQ2Mjk5NTc3NDZFRUNB",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester: Quartet Guitar Ensemble",
                    "description": "2010 Spring Semester: Quartet Guitar Ensemble\nBerceuse - Composer: Isaac Albeniz\nHellish Tattoo of the Heart - Composer: Olga Amelkina-Vera\nThe Chippewyan Naildance - Composer: Annette Kruisbrink\nMembers: Cassandra Andrews, Russell Callison, Steven Fry, Joshua Mills",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/C0xu21cgHCA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/C0xu21cgHCA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/C0xu21cgHCA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "C0xu21cgHCA"
                    }
                },
                "contentDetails": {
                    "videoId": "C0xu21cgHCA",
                    "videoPublishedAt": "2017-09-26T18:45:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/024R21ZOPubsQagJeLE1YD3CshI\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby42MTI4Njc2QjM1RjU1MjlG",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar IV SCC Healy 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar IV (Spring Creek Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Ucb-B0P2eMs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Ucb-B0P2eMs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Ucb-B0P2eMs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Ucb-B0P2eMs"
                    }
                },
                "contentDetails": {
                    "videoId": "Ucb-B0P2eMs",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iLTWaGRwkPOGLiJnK9NwtddVSl8\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby45RjNFMDhGQ0Q2RkFCQTc1",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar I SCC Vera 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/WVrVXJl53bI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/WVrVXJl53bI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/WVrVXJl53bI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "WVrVXJl53bI"
                    }
                },
                "contentDetails": {
                    "videoId": "WVrVXJl53bI",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/IfewJfDfTwuGDOgzGXiwpt8hHgw\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby40QTA3NTU2RkM1QzlCMzYx",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar I SCC Nye 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Randall Nye",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iY4LfwkpCqk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iY4LfwkpCqk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iY4LfwkpCqk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "iY4LfwkpCqk"
                    }
                },
                "contentDetails": {
                    "videoId": "iY4LfwkpCqk",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ufwc6JSfuQQEQEQXg42MfCqf7Bg\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5BRjJDODk5REM0NjkzMUIy",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar I SCC Madriguera 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Sabine Madriguera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lagMYopv24E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lagMYopv24E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lagMYopv24E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "lagMYopv24E"
                    }
                },
                "contentDetails": {
                    "videoId": "lagMYopv24E",
                    "videoPublishedAt": "2017-09-26T18:25:34.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/F3nuUj_tXS56PA8qiHqto8Eok3Q\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4xOTEzQzhBQzU3MDNDNjcz",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar II SCC Vera 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar II (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/b7cB162VJKY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/b7cB162VJKY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/b7cB162VJKY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "b7cB162VJKY"
                    }
                },
                "contentDetails": {
                    "videoId": "b7cB162VJKY",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/P3A-ewzoUaVfM_SZ8Z8WQcPLvf0\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5GNDg1Njc1QzZERjlFRjE5",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar II SCC Healy 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar II (Spring Creek Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GmKZBBe0vMY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GmKZBBe0vMY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GmKZBBe0vMY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "GmKZBBe0vMY"
                    }
                },
                "contentDetails": {
                    "videoId": "GmKZBBe0vMY",
                    "videoPublishedAt": "2017-09-26T18:25:34.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/wZKFI-ax4ExJEpwI1hDruiNVVbQ\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4zQzFBN0RGNzNFREFCMjBE",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar II PRC Vera 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar II (Preston Ridge Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9V0I2-fVCFM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9V0I2-fVCFM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9V0I2-fVCFM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "9V0I2-fVCFM"
                    }
                },
                "contentDetails": {
                    "videoId": "9V0I2-fVCFM",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/HRyoYxqeMxNRlwgc4e1wJfHZozg\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby45NkVENTkxRDdCQUFBMDY4",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Class Guitar I CPC Healy 2010 04 28",
                    "description": "2010 Spring Semester: Class Guitar I (Central Park Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GboRuO6dK9s/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GboRuO6dK9s/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GboRuO6dK9s/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "GboRuO6dK9s"
                    }
                },
                "contentDetails": {
                    "videoId": "GboRuO6dK9s",
                    "videoPublishedAt": "2017-09-26T18:25:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/tiiBRMwM10ZSh6o1gqbcVcPfOYk\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5DNkMwRUI2MkI4QkI4NDFG",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Zachary Sharp",
                    "description": "Larghetto alla siciliana Ferdinando Carulli\nToada Celso Machado",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Shhi04GGDEI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Shhi04GGDEI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Shhi04GGDEI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Shhi04GGDEI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Shhi04GGDEI"
                    }
                },
                "contentDetails": {
                    "videoId": "Shhi04GGDEI",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/MPeqVu_55KF2lBh9gYXlexn3aT4\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5DRUQwODMxQzUyRTlGRkY3",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Zach Hermann",
                    "description": "Pavane Gaspar Sanz\nAndante in A Ferdinando Carulli",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/fyaqqo9cBLE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/fyaqqo9cBLE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/fyaqqo9cBLE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/fyaqqo9cBLE/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "fyaqqo9cBLE"
                    }
                },
                "contentDetails": {
                    "videoId": "fyaqqo9cBLE",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/IlvVJ9TLqad3hTMRVQJHc_5aQak\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby41MzY4MzcwOUFFRUU3QzEx",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Vicki Portch",
                    "description": "Notturno Francesco Tarranto",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8fjv4jZps14/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8fjv4jZps14/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8fjv4jZps14/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8fjv4jZps14/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "8fjv4jZps14"
                    }
                },
                "contentDetails": {
                    "videoId": "8fjv4jZps14",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/e6-HLy2jne_0U6mNqa2-8r3XMKU\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4yQjZFRkExQjFGODk3RUFD",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Suvanee Chirachanchai",
                    "description": "Adagio in A minor Dionisio Aguado\nMalaguena Traditional, arr. by Scott Tennant",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/16cdzbWJM_4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/16cdzbWJM_4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/16cdzbWJM_4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/16cdzbWJM_4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "16cdzbWJM_4"
                    }
                },
                "contentDetails": {
                    "videoId": "16cdzbWJM_4",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/uF6kWUA4NGH64BHcG2h0-A5wed4\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4yQUJFNUVCMzVDNjcxRTlF",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Steven Fry",
                    "description": "Torma de Alba Federico Moreno-Torroba\nEtude Op. 60, No. 9 Matteo Carcassi\n\"From Suite 74\nII. Fast ein Blues\nI. Sehr frech\" Bernd Junghanns",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qcntRxo0k_A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qcntRxo0k_A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qcntRxo0k_A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/qcntRxo0k_A/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 20,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "qcntRxo0k_A"
                    }
                },
                "contentDetails": {
                    "videoId": "qcntRxo0k_A",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/m5JK3hc3USf0zEvbygpbTUEicoA\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby40QzRDOEU0QUYwNUIxN0M1",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Ryan Goodman",
                    "description": "Sarabande in E minor Lodovico Roncalli\nBinicium #15 & 16 Franz Just\nEtude Op. 60, No. 2 Matteo Carcassi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SDGKRryN3BQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SDGKRryN3BQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SDGKRryN3BQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SDGKRryN3BQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 21,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SDGKRryN3BQ"
                    }
                },
                "contentDetails": {
                    "videoId": "SDGKRryN3BQ",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/E5aD0CgZ8-FlypRnbsApxlLZY4s\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby41RTNBREYwMkI5QzU3RkY2",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Russell Callison",
                    "description": "Gute Nacht - Theme, Variation 1 & 2 Martin Raetz\nEtude No. 2 Heitor Villa -Lobos\nEtude Op. 31, No. 20 Fernando Sor\nEmergence Andrew York",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/KUAPp3-DGFo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/KUAPp3-DGFo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/KUAPp3-DGFo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/KUAPp3-DGFo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 22,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "KUAPp3-DGFo"
                    }
                },
                "contentDetails": {
                    "videoId": "KUAPp3-DGFo",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/VFRRfd06_xbxHQQSIut9P36jX-A\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby5ENjI1QUI0MDI5NEQzODFE",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Paul Martel",
                    "description": "Etude in A minor Ferdinando Carulli",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8rdrW1e31GM/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8rdrW1e31GM/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8rdrW1e31GM/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/8rdrW1e31GM/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 23,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "8rdrW1e31GM"
                    }
                },
                "contentDetails": {
                    "videoId": "8rdrW1e31GM",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/vcIfhFroTdsyWkYQWnH6DQXONEs\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby44QzVGQUU2QjE2NDgxM0M4",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Luke Sampeck",
                    "description": "Bourree Robert de Visee\nAllegretto Dionisio Aguado",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/324_BfwU4Ks/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/324_BfwU4Ks/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/324_BfwU4Ks/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/324_BfwU4Ks/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 24,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "324_BfwU4Ks"
                    }
                },
                "contentDetails": {
                    "videoId": "324_BfwU4Ks",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/8H9i5PYxYhVT3htNaPPfj_i8E_0\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4xMzgwMzBERjQ4NjEzNUE5",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Joshua Mills",
                    "description": "\"From Partita in E minor \nI. Entree\nII. Menuet\nIII. Siciliana\" G.A. Brescianello\nPrelude, BWV 999 Johann Sebastian Bach\nEtude Op. 60, No. 7 Matteo Carcassi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/MPJYVpJ8rfQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/MPJYVpJ8rfQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/MPJYVpJ8rfQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/MPJYVpJ8rfQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 25,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "MPJYVpJ8rfQ"
                    }
                },
                "contentDetails": {
                    "videoId": "MPJYVpJ8rfQ",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/U3v8AvEfWVvV0LBkkm8F8epjvKA\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby4zMEQ1MEIyRTFGNzhDQzFB",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Jay Armstrong",
                    "description": "Preludio Triston Maximo Diego Pujol\nTristango en Vos Maximo Diego Pujol",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/lHXzcmOqqCc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/lHXzcmOqqCc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/lHXzcmOqqCc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/lHXzcmOqqCc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 26,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "lHXzcmOqqCc"
                    }
                },
                "contentDetails": {
                    "videoId": "lHXzcmOqqCc",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/n1YUw5bN68_0_7WaH3Rd-tXJh0g\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby42Qzk5MkEzQjVFQjYwRDA4",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Cassandra Andrews",
                    "description": "Etude No. 1 from Six Contrapuntal Etudes Mark A. Cruz\nPrelude from First Cello Suite J.S. Bach\nEtude XX Leo Brouwer",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/hd1_6-62atk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/hd1_6-62atk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/hd1_6-62atk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/hd1_6-62atk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 27,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "hd1_6-62atk"
                    }
                },
                "contentDetails": {
                    "videoId": "hd1_6-62atk",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/dcsoFji-G2r8bYK5ergFriBiHX8\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby41NTZEOThBNThFOUVGQkVB",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Ariana Zhang",
                    "description": "Serenade - Theme, Variation 1 & 2 Martin Raetz\nCamilla Maria Linnemann",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/-Wjn7--s9r0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/-Wjn7--s9r0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/-Wjn7--s9r0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/-Wjn7--s9r0/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 28,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "-Wjn7--s9r0"
                    }
                },
                "contentDetails": {
                    "videoId": "-Wjn7--s9r0",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/LepvYTG76JAKsGpt4J-mjcpt2Vc\"",
                "id": "UEx2aGtLMTgyN05EeEdGcU9LUlRtYlNxTFUyZW53VmFwby43NERCMDIzQzFBMERCMEE3",
                "snippet": {
                    "publishedAt": "2017-09-26T18:47:01.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Spring Semester Anoosh Farvardin",
                    "description": "Study Julio Sagreras\nAlegrias Traditional Flamenco",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VhKXO64pUZw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VhKXO64pUZw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VhKXO64pUZw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/VhKXO64pUZw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
                    "position": 29,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "VhKXO64pUZw"
                    }
                },
                "contentDetails": {
                    "videoId": "VhKXO64pUZw",
                    "videoPublishedAt": "2017-09-26T02:01:24.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bgcBI9-Pad2TQ3oeE2nX-bpQ2KA\"",
        "pageInfo": {
            "totalResults": 10,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/r0dajDQtB3Hovx35zukU7TOpFrU\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-26T00:44:45.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester 6PM Ensemble",
                    "description": "Directed by Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/405hhppN_b4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/405hhppN_b4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/405hhppN_b4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "405hhppN_b4"
                    }
                },
                "contentDetails": {
                    "videoId": "405hhppN_b4",
                    "videoPublishedAt": "2017-09-24T18:56:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/vWmgvimpB2uOCa3nQPA5dusMx6M\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-26T00:45:56.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester 1PM Ensemble",
                    "description": "Directed by Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JZqsnXlnf9E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JZqsnXlnf9E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JZqsnXlnf9E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "JZqsnXlnf9E"
                    }
                },
                "contentDetails": {
                    "videoId": "JZqsnXlnf9E",
                    "videoPublishedAt": "2017-09-24T18:56:48.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/lnYpq0ULdqVqdvQoF54iT-fpTyU\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I TR SCC Vera",
                    "description": "2011 Spring Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/L3Ol8OIeL6I/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/L3Ol8OIeL6I/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/L3Ol8OIeL6I/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "L3Ol8OIeL6I"
                    }
                },
                "contentDetails": {
                    "videoId": "L3Ol8OIeL6I",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/dIK6RLe0Cjh1A2uaFp2lmnjeduc\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I PRC Wilder",
                    "description": "2011 Spring Semester: Class Guitar I (Preston Ridge Campus)\nInstructor: James Wilder",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/u6V9iaNYVkI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/u6V9iaNYVkI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/u6V9iaNYVkI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "u6V9iaNYVkI"
                    }
                },
                "contentDetails": {
                    "videoId": "u6V9iaNYVkI",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/J3kgEkQNTCWwC-OoA5MLqrSRiLM\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I MW SCC Vera",
                    "description": "2011 Spring Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/JQjWRlBPoJ0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/JQjWRlBPoJ0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/JQjWRlBPoJ0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "JQjWRlBPoJ0"
                    }
                },
                "contentDetails": {
                    "videoId": "JQjWRlBPoJ0",
                    "videoPublishedAt": "2017-09-25T19:12:32.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/wZGDDkiA2qBMvAytEHYn2Z7mXDQ\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I M SCC Vera",
                    "description": "2011 Spring Semester: Class Guitar I \n(Monday evening - Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/f_5C2nDUUPs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/f_5C2nDUUPs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/f_5C2nDUUPs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "f_5C2nDUUPs"
                    }
                },
                "contentDetails": {
                    "videoId": "f_5C2nDUUPs",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/RMiAxi56RPkvM7GfFHZvxrkjpSI\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class II SCC Vera",
                    "description": "2011 Spring Semester: Class Guitar II (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/FeEkXiu-3Rs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/FeEkXiu-3Rs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/FeEkXiu-3Rs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "FeEkXiu-3Rs"
                    }
                },
                "contentDetails": {
                    "videoId": "FeEkXiu-3Rs",
                    "videoPublishedAt": "2017-09-25T19:12:32.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bFKH5YMstMrawiTdEeY88B2EkP8\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class II PRC Vera",
                    "description": "2011 Spring Semester: Class Guitar II (Preston Ridge Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6bFUhS7Vd-A/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6bFUhS7Vd-A/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6bFUhS7Vd-A/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "6bFUhS7Vd-A"
                    }
                },
                "contentDetails": {
                    "videoId": "6bFUhS7Vd-A",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/AhCZsaf3DWBSOAAVvBGwe-2cn3k\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I CPC Wilder",
                    "description": "2011 Spring Semester: Class Guitar I (Central Park Campus)\nInstructor: James Wilder",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZkzcJ-cW5ck/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZkzcJ-cW5ck/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZkzcJ-cW5ck/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ZkzcJ-cW5ck"
                    }
                },
                "contentDetails": {
                    "videoId": "ZkzcJ-cW5ck",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Q4l7dH8yOij2j_ZFWFEEkF2VaOs\"",
                "id": "UEx2aGtLMTgyN05EeEhXNGhKZTFZUmQ2N2R0R0xJVjZ6Sy41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-26T20:14:05.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Class I CPC Healy",
                    "description": "2011 Spring Semester: Class Guitar I (Central Park Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/nRFmWb_uW78/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/nRFmWb_uW78/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/nRFmWb_uW78/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "nRFmWb_uW78"
                    }
                },
                "contentDetails": {
                    "videoId": "nRFmWb_uW78",
                    "videoPublishedAt": "2017-09-25T19:12:31.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Q-5IiB5IbKN57XMynIFC0p9Rwww\"",
        "pageInfo": {
            "totalResults": 9,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/QmGjUou10wts3P9mttOyPBlPYqo\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:38.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Cordoba Isaac Albeniz",
                    "description": "2009 Fall Semester: One O'Clock Guitar Ensemble\nCordoba - Composer: Isaac Albeniz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "zi9x4TfHrO4"
                    }
                },
                "contentDetails": {
                    "videoId": "zi9x4TfHrO4",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rHMZnFMTIt3D0WdEQCGdunYJVQk\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:38.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Marsch der Priester Mozart",
                    "description": "2009 Fall Semester: Six O'Clock Guitar Ensemble\nMarsch der Priester - Composer: W.A. Mozart arr. Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/UmWDnFf-YmY/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/UmWDnFf-YmY/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/UmWDnFf-YmY/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "UmWDnFf-YmY"
                    }
                },
                "contentDetails": {
                    "videoId": "UmWDnFf-YmY",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/9I1oRdb6mMVTVXtQtq125YUncY8\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:38.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allmand William Brade",
                    "description": "2009 Fall Semester: One O'Clock Guitar Ensemble\nAllmand - Composer: William Brade",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/iDUvcYmZFt8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/iDUvcYmZFt8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/iDUvcYmZFt8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "iDUvcYmZFt8"
                    }
                },
                "contentDetails": {
                    "videoId": "iDUvcYmZFt8",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rmgKgjUlvwd4HOWHH_l3UkfAxis\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Aloe John Dowland",
                    "description": "2009 Fall Semester: Six O'Clock Guitar Ensemble\nAloe - Composer: John Dowland arr. R. Nye",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Jefbj25VT_0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Jefbj25VT_0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Jefbj25VT_0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Jefbj25VT_0"
                    }
                },
                "contentDetails": {
                    "videoId": "Jefbj25VT_0",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/9A---Kg3Y9v7-qbbe09f_LgooZk\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Berceuse Isaac Albeniz",
                    "description": "2009 Fall Semester: One O'Clock Guitar Ensemble\nBerceuse - Composer: Isaac Albeniz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/2KcSsJ5ChQk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/2KcSsJ5ChQk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/2KcSsJ5ChQk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "2KcSsJ5ChQk"
                    }
                },
                "contentDetails": {
                    "videoId": "2KcSsJ5ChQk",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/etfLZ64rf3A-ji54NxQed0IzDtU\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonate in E 3 Sarabande Antonio Vivaldi",
                    "description": "2009 Fall Semester: One O'Clock Guitar Ensemble\nSonate in E, Sarabande - Composer: Antonio Vivaldi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ZsKzC2ogXro/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ZsKzC2ogXro/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ZsKzC2ogXro/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ZsKzC2ogXro"
                    }
                },
                "contentDetails": {
                    "videoId": "ZsKzC2ogXro",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/mT-_b0FVaQBZEMwlZMUBm-ea8Yc\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "El Ultimo Minuto Eddie Healy",
                    "description": "2009 Fall Semester: Six O'Clock Guitar Ensemble\nEl Ultimo Minuto - Composer: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/r_H0zinn3zs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/r_H0zinn3zs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/r_H0zinn3zs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "r_H0zinn3zs"
                    }
                },
                "contentDetails": {
                    "videoId": "r_H0zinn3zs",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/c1ZOZMFfy0F0bsYrpXco0qGgtMU\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Quartet Eddie Healy",
                    "description": "2009 Fall Semester: Six O'Clock Guitar Ensemble\nQuartet - Composer: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/evP2tiwaIZ8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/evP2tiwaIZ8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/evP2tiwaIZ8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "evP2tiwaIZ8"
                    }
                },
                "contentDetails": {
                    "videoId": "evP2tiwaIZ8",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/K73jmnXoBEQFfd5jFTwzLaWdPiA\"",
                "id": "UEx2aGtLMTgyN05EeXJuajMzalhwdVd0elQ3WnNYNEp3eC45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-24T22:26:39.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Sonate in E 2 Allemanda Antonio Vivaldi",
                    "description": "2009 Fall Semester: One O'Clock Guitar Ensemble\nSonate in E, Allemanda - Composer: Antonio Vivaldi",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SU1Rl7S0nVs/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SU1Rl7S0nVs/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SU1Rl7S0nVs/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SU1Rl7S0nVs"
                    }
                },
                "contentDetails": {
                    "videoId": "SU1Rl7S0nVs",
                    "videoPublishedAt": "2017-09-24T22:26:38.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/2gKYv4o2-7dEVAQStHh471Hmunk\"",
        "pageInfo": {
            "totalResults": 9,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/zoULtYGsUyXWp79Ev_3dKk0HlRY\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "What Would Michael Kelsey Do",
                    "description": "2008 Fall Semester: One O'Clock Guitar Ensemble - What Would Michael Kelsey Do?\n(Composer: Mark Anthony Cruz)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "pzd-XUKlB7w"
                    }
                },
                "contentDetails": {
                    "videoId": "pzd-XUKlB7w",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/sLxDteACK-qWdhqutxBYnHbxXK4\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Waverunner",
                    "description": "2008 Fall Semester: Class Guitar I - Waverunner\n(Composer: Matthew Hinsley)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/vxqL4FxYT04/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/vxqL4FxYT04/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/vxqL4FxYT04/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "vxqL4FxYT04"
                    }
                },
                "contentDetails": {
                    "videoId": "vxqL4FxYT04",
                    "videoPublishedAt": "2017-09-24T22:02:26.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/CuOUv8NMitxo4zQRLf3Ra9x2JL4\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Prelude No 1",
                    "description": "2008 Fall Semester: One O'Clock Guitar Ensemble - Prelude No. 1\n(Composer: J. S. Bach, arr. by F. Kimlicko)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/TTVnOyslqeE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/TTVnOyslqeE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/TTVnOyslqeE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "TTVnOyslqeE"
                    }
                },
                "contentDetails": {
                    "videoId": "TTVnOyslqeE",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/rF7l06cDjo7fxJj44wchjU-BdwU\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Nocturne",
                    "description": "2008 Fall Semester: Class Guitar I - Nocturne\n(Composer: Johann Kaspar Mertz, arr. by Hinsley)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/ovvc5cSIbwA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/ovvc5cSIbwA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/ovvc5cSIbwA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "ovvc5cSIbwA"
                    }
                },
                "contentDetails": {
                    "videoId": "ovvc5cSIbwA",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/nWdxIXNdkUYe0SIL4LA8IM4FeCQ\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Invocation",
                    "description": "2008 Fall Semester: Six O'Clock Guitar Ensemble - Invocation\n(Composer: Eddie Healy)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SVLu1GN1EvE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SVLu1GN1EvE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SVLu1GN1EvE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SVLu1GN1EvE"
                    }
                },
                "contentDetails": {
                    "videoId": "SVLu1GN1EvE",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/miERhQfbaFQgii5emsmFtSgTFJI\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Exchanges",
                    "description": "2008 Fall Semester: One O'Clock Quartet - Exchanges\n(Composer: Mark Anthony Cruz)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/YyuINqKXkCA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/YyuINqKXkCA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/YyuINqKXkCA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "YyuINqKXkCA"
                    }
                },
                "contentDetails": {
                    "videoId": "YyuINqKXkCA",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/TcjDG-04LcGK1MOPKwW8E96LFLE\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allemanda Op4 No5",
                    "description": "2008 Fall Semester: Six O'Clock Trio - Allemanda Op.4, No.5\n(Composer: Archangelo Corelli, arr. by Randall Nye)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_ftvrw7VZm8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_ftvrw7VZm8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_ftvrw7VZm8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "_ftvrw7VZm8"
                    }
                },
                "contentDetails": {
                    "videoId": "_ftvrw7VZm8",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/e6e-GKHCbM1HZaz4lHzCy4iUoeU\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Allegro",
                    "description": "2008 Fall Semester: One O'Clock Guitar Ensemble - Allegro\n(Composer: G.P. Telemann)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/yRJEMYMYGLg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/yRJEMYMYGLg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/yRJEMYMYGLg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "yRJEMYMYGLg"
                    }
                },
                "contentDetails": {
                    "videoId": "yRJEMYMYGLg",
                    "videoPublishedAt": "2017-09-24T22:02:26.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/gU5eUif39XQucENrMCRDbsu_k8c\"",
                "id": "UEx2aGtLMTgyN05EeXNRODVsZWhMMjZDNkFLVjZaNXQ4Vy45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-26T21:04:33.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "Air on the G String",
                    "description": "2008 Fall Semester: One O'Clock Quartet - Air on the G String\n(Composer: J.S. Bach, arr. by L. Levesque)",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/afLIvodSK8M/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/afLIvodSK8M/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/afLIvodSK8M/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "afLIvodSK8M"
                    }
                },
                "contentDetails": {
                    "videoId": "afLIvodSK8M",
                    "videoPublishedAt": "2017-09-24T22:02:25.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/KNbPKvfk16rQXeCsudjCI6oCp7Q\"",
        "pageInfo": {
            "totalResults": 4,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ZQ2w5rCPnGXZl06D_T8pK8oxxu4\"",
                "id": "UEx2aGtLMTgyN05Ed3RlRjFBS0FMS3Q0TVJ4WkQyTmlvMy41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-24T21:33:35.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2017 Solo Summer Guitar Concert",
                    "description": "Performer: Jessica Gorden\nEtude 65, 45 and 48: Julio Sagreras\nFolias de Espana: Traditional, arr. Fernand Vera\n...................\nPerformer: Carol Speed\nEtude No. 84 in E minor: Julio Sagreras\nPrelude in A minor: Ferdinando Carulli\n...................\nPerformer: Sarah Serfling\nEtude 65: Julio Sagreras\n...................\nPerformer: Keith Bailey\nEtude No. 16, Op.100: Mauro Giuliani\n...................\nPerformer: Aki Wada\nLa Alborada: Fernand Vera\nEtude No. 2 in A minor: Matteo Carcassi\n...................\nPerformer: Auturo Saracho\nAndante in A minor: Ferdinando Carulli\nToccata, Mazurka: Christopher Parkening\n...................\nPerformer: Jim Vincent\nValsa-Choro from Suite Populaire Bresilienne: Heitor Villa-Lobos\nPrelude from BWV 998: J.S. Bach\n...................\nPerformer: Randall Groves\nRomance: Felix Mendelssohn arr. Francisco Tarrega\nCapricho Arabe: Francisco Tarrega",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/6LQHIlicMpw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/6LQHIlicMpw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/6LQHIlicMpw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/6LQHIlicMpw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/6LQHIlicMpw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwteF1AKALKt4MRxZD2Nio3",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "6LQHIlicMpw"
                    }
                },
                "contentDetails": {
                    "videoId": "6LQHIlicMpw",
                    "videoPublishedAt": "2017-09-24T21:33:34.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/-mNj0bWZH2XgxhF7vADJzELk4T8\"",
                "id": "UEx2aGtLMTgyN05Ed3RlRjFBS0FMS3Q0TVJ4WkQyTmlvMy4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-26T00:13:14.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2017 Summer Ensemble Guitar Concert",
                    "description": "Sound of Silence: Garfunkel/Simon\nSpanish Dance No.2: Enrique Granados\nAlla Baita: Jesus Guridi\n\nEvening Summer Guitar Ensemble: Keith Bailey, Steve Barret, Dale Bynum, Fred Hsiao, Auturo Saracho, Aiko Saracho, Sarah Serfling, Carol Speed, John Winsor\n\nDirected: Nathaniel Earhart",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Eg19zrzDZNw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Eg19zrzDZNw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Eg19zrzDZNw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Eg19zrzDZNw/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/Eg19zrzDZNw/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwteF1AKALKt4MRxZD2Nio3",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Eg19zrzDZNw"
                    }
                },
                "contentDetails": {
                    "videoId": "Eg19zrzDZNw",
                    "videoPublishedAt": "2017-09-24T21:33:33.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/0bGnsdSuND-fjlZjEsT9LNSIS2k\"",
                "id": "UEx2aGtLMTgyN05Ed3RlRjFBS0FMS3Q0TVJ4WkQyTmlvMy4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-26T00:50:03.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2017 Spring Solo Guitar Concert",
                    "description": "",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1fJy0lWnGeI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1fJy0lWnGeI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1fJy0lWnGeI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1fJy0lWnGeI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/1fJy0lWnGeI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwteF1AKALKt4MRxZD2Nio3",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "1fJy0lWnGeI"
                    }
                },
                "contentDetails": {
                    "videoId": "1fJy0lWnGeI",
                    "videoPublishedAt": "2017-09-26T00:50:02.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/P0x03RNnU1DtD4a9-mJ0jSvU5XI\"",
                "id": "UEx2aGtLMTgyN05Ed3RlRjFBS0FMS3Q0TVJ4WkQyTmlvMy41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-28T17:32:00.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2017 Spring Semester Ensemble & Solo Concert",
                    "description": "Lullaby: John Dowland\nBalletdes Sorciers: Michael Praetorius\nMaskerade: Pieter van der Staak\nVals Venezolano No. 2: Antonio Lauro, arr. Fernand Vera\n\n11:30am Guitar Ensemble: Jessica Gorden, Justin Holloway, Kathryn Lagrave, Josh Smith, Akinori Wada, Jonathan Winsor\n\nDirector: Dr. Fernand Vera\n...................\nThe Giant in the Woods: Catalan Folk Song\nMenuet and Trio: Leonhard von Call\nEl Condor Pasa: David A. Robles\n\nSix O’ Clock Guitar Ensemble: Keith Bailey, Steven Barrett, Dale Bynum, Fred Hsiao, Arturo Saracho, Sarah Serfling, Carol Speed\n\nDirector: Nathaniel Earhart\n...................\nKaleidoscope Barcarolle:  April Montez Seals\nCantina Band Music: John Williams, arr. Alejandro Montiel\nQuintango: Derrick Horne\nOverture to The Barber of Seville: Gioacchino Rossini, arr. Babak Rostami\n\nOne O’ Clock Guitar Ensemble: Enrique Armas, Jay Armstrong, Alton Chan, Randall Groves, Malik Qayumov, Thomas Vanderzyde, Janie Vermillion, Jim Vincent\n\nDirector: Dr. Fernand Vera\n===================\nPerformer: Jessica Gorden\nEtude 65, 45 and 48: Julio Sagreras\nFolias de Espana: Traditional, arr. Fernand Vera\n...................\nPerformer: Carol Speed\nEtude No. 84 in E minor: Julio Sagreras\nPrelude in A minor: Ferdinando Carulli\n...................\nPerformer: Sarah Serfling\nEtude 65: Julio Sagreras\n...................\nPerformer: Keith Bailey\nEtude No. 16, Op.100: Mauro Giuliani\n...................\nPerformer: Aki Wada\nLa Alborada: Fernand Vera\nEtude No. 2 in A minor: Matteo Carcassi\n...................\nPerformer: Auturo Saracho\nAndante in A minor: Ferdinando Carulli\nToccata, Mazurka: Christopher Parkening\n...................\nPerformer: Jim Vincent\nValsa-Choro from Suite Populaire Bresilienne: Heitor Villa-Lobos\nPrelude from BWV 998: J.S. Bach\n...................\nPerformer: Randall Groves\nRomance: Felix Mendelssohn arr. Francisco Tarrega\nCapricho Arabe: Francisco Tarrega",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/HbygwXwyUVI/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/HbygwXwyUVI/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/HbygwXwyUVI/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/HbygwXwyUVI/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        },
                        "maxres": {
                            "url": "https://i.ytimg.com/vi/HbygwXwyUVI/maxresdefault.jpg",
                            "width": 1280,
                            "height": 720
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwteF1AKALKt4MRxZD2Nio3",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "HbygwXwyUVI"
                    }
                },
                "contentDetails": {
                    "videoId": "HbygwXwyUVI",
                    "videoPublishedAt": "2017-09-28T17:31:59.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/28K8ETr9HNFU6nmrVPYfnJkgStg\"",
        "pageInfo": {
            "totalResults": 22,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/0Qr2EYzjfSeJNbifIlPaETm6Dhs\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Zach Sharp",
                    "description": "Etude Op. 60, No. 2: Matteo Carcassi\nEstudio & Largrima: Francisco Tarrega",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/0HptXKcw4Js/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/0HptXKcw4Js/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/0HptXKcw4Js/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/0HptXKcw4Js/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "0HptXKcw4Js"
                    }
                },
                "contentDetails": {
                    "videoId": "0HptXKcw4Js",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4tJD_xtj3SsKhIemUpNZyZAEDCY\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester William Vulcan",
                    "description": "Etude Op. 60 No. 9: Matteo Carcassi\nEtude: Damas\nSounds of Bells: Guimares",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/z3JkNDP3eOA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/z3JkNDP3eOA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/z3JkNDP3eOA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/z3JkNDP3eOA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "z3JkNDP3eOA"
                    }
                },
                "contentDetails": {
                    "videoId": "z3JkNDP3eOA",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/WIXjinFMK-69M4MvvJMh09E3jB8\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester William Cameron Poe",
                    "description": "Etude No. 6: Ferdinando Carulli\nAria Guiseppe: Antonio Brescianello\nCarnival Dances I & II: Martin Raetz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/GDg8uY9KVso/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/GDg8uY9KVso/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/GDg8uY9KVso/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/GDg8uY9KVso/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "GDg8uY9KVso"
                    }
                },
                "contentDetails": {
                    "videoId": "GDg8uY9KVso",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/OjBEgU7aaI9BXAfTMrihS1mYheU\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Vicki Portch",
                    "description": "Study: Alexander Bellow",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CN6h_Pw5QJk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CN6h_Pw5QJk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CN6h_Pw5QJk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/CN6h_Pw5QJk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "CN6h_Pw5QJk"
                    }
                },
                "contentDetails": {
                    "videoId": "CN6h_Pw5QJk",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/vPVhl7msX2YV6iufMp1FQwV-AHc\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Suvanee Chirachanchai",
                    "description": "Menuet & Bourree: Anonymous\nNostalgia: Petite Melodie: Julio Sagreras",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Op-xCPaLTu8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Op-xCPaLTu8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Op-xCPaLTu8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/Op-xCPaLTu8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Op-xCPaLTu8"
                    }
                },
                "contentDetails": {
                    "videoId": "Op-xCPaLTu8",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/FLerfVyl1XZHf9wtOLCn5n_pMIw\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Peter Tran",
                    "description": "Studies 65 & 74: Julio Sagreras\nCanario: Carlo Calvi\nStudy in E minor: Francisco Tarrega\nMalaguena: Traditional\nSpanish Sketch: Martin Raetz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/SG3kukAzrOQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/SG3kukAzrOQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/SG3kukAzrOQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/SG3kukAzrOQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "SG3kukAzrOQ"
                    }
                },
                "contentDetails": {
                    "videoId": "SG3kukAzrOQ",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/tq36G7oBSLnFOQ2lJpzB5OgUYh0\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Marlene Vazquez Barroso",
                    "description": "Swing en La:         J. M. Mourat\nIberian Dance: Traditional Melody, Arr. Michael Connor",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/enD2eFZvqDo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/enD2eFZvqDo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/enD2eFZvqDo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/enD2eFZvqDo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "enD2eFZvqDo"
                    }
                },
                "contentDetails": {
                    "videoId": "enD2eFZvqDo",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/nz06vTTUwecMd8K9IiLY7VVtZNU\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Luke Sampeck",
                    "description": "Larghetto, Grazioso, Maestoso:  Mauro Giuliani\nEtudes Simples X & IX:                 Leo Brouwer",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/rugZj7JNlNU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/rugZj7JNlNU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/rugZj7JNlNU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/rugZj7JNlNU/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "rugZj7JNlNU"
                    }
                },
                "contentDetails": {
                    "videoId": "rugZj7JNlNU",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/gHbZm3Mo7T3epAtxXJ682zF0ng4\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Jose Torres",
                    "description": "Etudes 82 & 80: Julio Sagreras\nEtudes Simples 1 & 2: Leo Brouwer\nPrelude 12: Ferdinando Carulli\nEtudes Op. 31, No. 4 & 6: Fernando Sor",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wzYfZu1VZUo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wzYfZu1VZUo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wzYfZu1VZUo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wzYfZu1VZUo/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "wzYfZu1VZUo"
                    }
                },
                "contentDetails": {
                    "videoId": "wzYfZu1VZUo",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/TQLXBbmg-u5WxYy3p9y6WxtwdYo\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Jay Armstrong",
                    "description": "Maria: Francisco Tarrega\nEtude: Johann Kasper Mertz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/qdbi11LEngQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/qdbi11LEngQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/qdbi11LEngQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/qdbi11LEngQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "qdbi11LEngQ"
                    }
                },
                "contentDetails": {
                    "videoId": "qdbi11LEngQ",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/RWmXeEcPvmQpdPhdfxQNeq84Qns\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Gary Bradford",
                    "description": "Packington's Pound:  Anonymous\nEtude No. 10 \"Les Advocats Mysterieux:  Gerald Garcia",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/QwdVoLxPZYc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/QwdVoLxPZYc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/QwdVoLxPZYc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/QwdVoLxPZYc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "QwdVoLxPZYc"
                    }
                },
                "contentDetails": {
                    "videoId": "QwdVoLxPZYc",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/DNVreSZUSiYIc5XcTMB_4dtyT4Q\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Dustin Herres",
                    "description": "Andante Op. 241, No. 18: Ferdinando Carulli \nEtudes Simples No. 1 & 5: Leo Brouwer",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Tlj7zAHKAuE/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Tlj7zAHKAuE/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Tlj7zAHKAuE/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Tlj7zAHKAuE"
                    }
                },
                "contentDetails": {
                    "videoId": "Tlj7zAHKAuE",
                    "videoPublishedAt": "2017-09-26T01:42:21.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/fDzOQfIR4GfogeR768zUg0KDfaI\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I SCC Vera",
                    "description": "2010 Fall Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/NHRG62kSXk0/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/NHRG62kSXk0/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/NHRG62kSXk0/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "NHRG62kSXk0"
                    }
                },
                "contentDetails": {
                    "videoId": "NHRG62kSXk0",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/kf0XgMXqJZbiv7E-6dGMfTTKgVw\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I SCC Nye",
                    "description": "2010 Fall Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Randall Nye",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/k44UcCSVQcg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/k44UcCSVQcg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/k44UcCSVQcg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "k44UcCSVQcg"
                    }
                },
                "contentDetails": {
                    "videoId": "k44UcCSVQcg",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/17yS5TcPw0C4MNEDMDjt3p7wg2g\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi41Mzk2QTAxMTkzNDk4MDhF",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I SCC Madriguera",
                    "description": "2010 Fall Semester: Class Guitar I (Spring Creek Campus)\nInstructor: Sabine Madriguera\nGuest Conductor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/bm7GvWgCa54/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/bm7GvWgCa54/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/bm7GvWgCa54/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 14,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "bm7GvWgCa54"
                    }
                },
                "contentDetails": {
                    "videoId": "bm7GvWgCa54",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/sXnun4bDY-1H7ivGlbcOfNfoT1s\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5EQUE1NTFDRjcwMDg0NEMz",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I PRC Wilder",
                    "description": "2010 Fall Semester: Class Guitar I (Preston Ridge Campus)\nInstructor: James Wilder",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VUoBOPqILxU/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VUoBOPqILxU/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VUoBOPqILxU/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 15,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "VUoBOPqILxU"
                    }
                },
                "contentDetails": {
                    "videoId": "VUoBOPqILxU",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/dwK6jWrh_edzVhoC4m1Ro709ZFU\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi41QTY1Q0UxMTVCODczNThE",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I PRC Vera",
                    "description": "2010 Fall Semester: Class Guitar I (Preston Ridge Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/Tir4YP9YZPw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/Tir4YP9YZPw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/Tir4YP9YZPw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 16,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "Tir4YP9YZPw"
                    }
                },
                "contentDetails": {
                    "videoId": "Tir4YP9YZPw",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/05yq8ZXVLaZckolEze8XeI8L9Zo\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4yMUQyQTQzMjRDNzMyQTMy",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class II SCC Vera",
                    "description": "2010 Fall Semester: Class Guitar II (Spring Creek Campus)\nInstructor: Fernand Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pz6PzBDAB54/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pz6PzBDAB54/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pz6PzBDAB54/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 17,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "pz6PzBDAB54"
                    }
                },
                "contentDetails": {
                    "videoId": "pz6PzBDAB54",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/a7bW959DiA4G2Q7JsasGXCNcDq8\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi45RTgxNDRBMzUwRjQ0MDhC",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 FallSemester Class II SCC Healy",
                    "description": "2010 Fall Semester: Class Guitar II (Spring Creek Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/8lJ-5c8bPgw/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/8lJ-5c8bPgw/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/8lJ-5c8bPgw/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 18,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "8lJ-5c8bPgw"
                    }
                },
                "contentDetails": {
                    "videoId": "8lJ-5c8bPgw",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/EL6YL1Dzjur__u9iFKSEvCAxyQs\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5ENDU4Q0M4RDExNzM1Mjcy",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class III SCC Healy",
                    "description": "2010 Fall Semester: Class Guitar III (Spring Creek Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/z0P213PkLjo/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/z0P213PkLjo/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/z0P213PkLjo/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 19,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "z0P213PkLjo"
                    }
                },
                "contentDetails": {
                    "videoId": "z0P213PkLjo",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/iyKNh8K4MhjadSkOQTJkWcsYNdc\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi4yMDhBMkNBNjRDMjQxQTg1",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I CPC Wilder",
                    "description": "2010 Fall Semester: Class Guitar I (Central Park Campus)\nInstructor: James Wilder",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/CWaAoOM_Wxg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/CWaAoOM_Wxg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/CWaAoOM_Wxg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 20,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "CWaAoOM_Wxg"
                    }
                },
                "contentDetails": {
                    "videoId": "CWaAoOM_Wxg",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Utpnucl9bcVN-A4Tb5ncrVeLXuw\"",
                "id": "UEx2aGtLMTgyN05Ed2dSVHdXUEV3eEoybGpvbEdFcTVWRi5GM0Q3M0MzMzY5NTJFNTdE",
                "snippet": {
                    "publishedAt": "2017-09-26T02:17:31.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2010 Fall Semester Class I CPC Healy",
                    "description": "2010 Fall Semester: Class Guitar I (Central Park Campus)\nInstructor: Eddie Healy",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/dUwn4k8MEqk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/dUwn4k8MEqk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/dUwn4k8MEqk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
                    "position": 21,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "dUwn4k8MEqk"
                    }
                },
                "contentDetails": {
                    "videoId": "dUwn4k8MEqk",
                    "videoPublishedAt": "2017-09-26T01:22:51.000Z"
                }
            }
        ]
    },
    {
        "kind": "youtube#playlistItemListResponse",
        "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/bHH4-WTSkgZScCvZuBgwC1kIDts\"",
        "pageInfo": {
            "totalResults": 14,
            "resultsPerPage": 50
        },
        "items": [
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/FrT2bykBiSMG554xu5zIva9ORDw\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC41NkI0NEY2RDEwNTU3Q0M2",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Will Vulcan",
                    "description": "Fantasia No. 1 & 4:  Francesco da Milano\nEtude No. 3, Op. 60 in A major: Matteo Carcassi\nUn Dia de Noviembre: Leo Brouwer",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 0,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "wwsgivJ6n8o"
                    }
                },
                "contentDetails": {
                    "videoId": "wwsgivJ6n8o",
                    "videoPublishedAt": "2017-09-15T04:03:47.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/piwAdxnOqI_mUifPjWA25q_RC0A\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC4yODlGNEE0NkRGMEEzMEQy",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Vicki Portch",
                    "description": "Prelude in C major: Ferdinando Carulli\nPushkin's Winter: Olga Amelkina-Vera",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/1l3Vyqlzi54/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/1l3Vyqlzi54/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/1l3Vyqlzi54/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/1l3Vyqlzi54/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 1,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "1l3Vyqlzi54"
                    }
                },
                "contentDetails": {
                    "videoId": "1l3Vyqlzi54",
                    "videoPublishedAt": "2017-09-15T04:03:45.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/G7Zfk8HJ8GD-TqKcukBMrLWEHL8\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC4wMTcyMDhGQUE4NTIzM0Y5",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Uriel Arellano",
                    "description": "Etude 50 in A minor: Julio Sagreras\nEtude 52 in A minor: Julio Sagreras \nEtude 53 in C minor: Julio Sagreras \nEtude 56 in G minor: Julio Sagreras",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/x5BzLnN2bdQ/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/x5BzLnN2bdQ/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/x5BzLnN2bdQ/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/x5BzLnN2bdQ/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 2,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "x5BzLnN2bdQ"
                    }
                },
                "contentDetails": {
                    "videoId": "x5BzLnN2bdQ",
                    "videoPublishedAt": "2017-09-15T04:03:41.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/v9C2DVyS0C-pMJRtiVhhIaZAvqw\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC41MjE1MkI0OTQ2QzJGNzNG",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Suvanee Chirachanchai",
                    "description": "Vaghe Bellezze (Pale Beauty): Renaissance Anonymous\nSarabande: Johann Anton Losy van Losinthal\nTiempo de Zamba: Julio Sagreras",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/gspB7T1SBfg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/gspB7T1SBfg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/gspB7T1SBfg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/gspB7T1SBfg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 3,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "gspB7T1SBfg"
                    }
                },
                "contentDetails": {
                    "videoId": "gspB7T1SBfg",
                    "videoPublishedAt": "2017-09-24T18:56:49.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Z98UE7Zzb4lpXxM2ij-xh58s86M\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC4wOTA3OTZBNzVEMTUzOTMy",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester PeterTran",
                    "description": "Tiempo de Zamba: Julio Sagreras\nAdelita: Franscisco Tarrega\nLagrima: Franscisco Tarrega  \nNocturne No. 2, Op. 4: Johann Kaspar Mertz",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4CHePK5TIKc/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4CHePK5TIKc/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4CHePK5TIKc/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/4CHePK5TIKc/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 4,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4CHePK5TIKc"
                    }
                },
                "contentDetails": {
                    "videoId": "4CHePK5TIKc",
                    "videoPublishedAt": "2017-09-24T18:56:50.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/_1UgNVCISteAipBT9tSCpNGq9PQ\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC4xMkVGQjNCMUM1N0RFNEUx",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Natalia Link",
                    "description": "Etude No. 3 Op.60 in A Major: Matteo Carcassi\nRosita: Franscisco Tarrega",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/_RTg5bkyPg8/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/_RTg5bkyPg8/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/_RTg5bkyPg8/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/_RTg5bkyPg8/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 5,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "_RTg5bkyPg8"
                    }
                },
                "contentDetails": {
                    "videoId": "_RTg5bkyPg8",
                    "videoPublishedAt": "2017-09-24T18:55:55.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/CXh0v5XOlxfnQzEMwtF1WlTwUsE\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC41MzJCQjBCNDIyRkJDN0VD",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Luke Sampeck",
                    "description": "Etude 1, Op. 38 in A minor: Napoleon Coste\nVariations on the theme from \"Jeannot et Colin\", Theme Variation 1 & 3: Mauro Giuliani",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/BAcMD6OISdg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/BAcMD6OISdg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/BAcMD6OISdg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/BAcMD6OISdg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 6,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "BAcMD6OISdg"
                    }
                },
                "contentDetails": {
                    "videoId": "BAcMD6OISdg",
                    "videoPublishedAt": "2017-09-24T18:56:50.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/scxCvqD4VmVfMQVCNiF7KW9PleM\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC5DQUNERDQ2NkIzRUQxNTY1",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Leo Santibanez",
                    "description": "Etude 68 in C minor: Julio Sagreras\nEtude 73 in A minor: Julio Sagreras \nEtude 76 in D minor: Julio Sagreras",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/pVtVxJwHT-E/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/pVtVxJwHT-E/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/pVtVxJwHT-E/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/pVtVxJwHT-E/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 7,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "pVtVxJwHT-E"
                    }
                },
                "contentDetails": {
                    "videoId": "pVtVxJwHT-E",
                    "videoPublishedAt": "2017-09-24T18:56:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ho011993dPcQVZptMwk3jQVgt54\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC45NDk1REZENzhEMzU5MDQz",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Josh Smith",
                    "description": "Etude 49 in A minor: Julio Sagreras\nEtude 65 in C major: Julio Sagreras",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/9lMVAWdKCc4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/9lMVAWdKCc4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/9lMVAWdKCc4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/9lMVAWdKCc4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 8,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "9lMVAWdKCc4"
                    }
                },
                "contentDetails": {
                    "videoId": "9lMVAWdKCc4",
                    "videoPublishedAt": "2017-09-24T18:56:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/JeuhpQQzF2JV1CuD6pD0Q4vxw2U\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC5GNjNDRDREMDQxOThCMDQ2",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Jose Torres",
                    "description": "Etude No. 1, Op. 35 in C major: Fernando Sor\nEtude No. 15, Op. 60 in C major: Matteo Carcassi\nLagrima: Fransciso Tarrega\nVals: Fransciso Tarrega \nPrelude No. 3 & 4: Heitor Villa-Lobos",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/tLI6D0jMya4/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/tLI6D0jMya4/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/tLI6D0jMya4/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/tLI6D0jMya4/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 9,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "tLI6D0jMya4"
                    }
                },
                "contentDetails": {
                    "videoId": "tLI6D0jMya4",
                    "videoPublishedAt": "2017-09-24T18:56:51.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/RQNHbLC9NfRnqk1Bo9cwa1N660c\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC40NzZCMERDMjVEN0RFRThB",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Jonno Garver",
                    "description": "Etude 74 in A minor Julio Sagreras\nEtude 82 in E minor \nEtude 83 in D minor \nWaltz: Ferdinando Carulli",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/v4DYMH5pwYg/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/v4DYMH5pwYg/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/v4DYMH5pwYg/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/v4DYMH5pwYg/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 10,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "v4DYMH5pwYg"
                    }
                },
                "contentDetails": {
                    "videoId": "v4DYMH5pwYg",
                    "videoPublishedAt": "2017-09-24T18:56:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/am-N2tykDwOWdrRJzJm0MnLQkbA\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC5EMEEwRUY5M0RDRTU3NDJC",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Jay Armstrong",
                    "description": "Etude No. 16: Leo Brouwer\nVals No. 3, Op. 8: Agustin Barrios Mangore\nSunburst: Andrew York",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/4OFfrcg4xzA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/4OFfrcg4xzA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/4OFfrcg4xzA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 11,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "4OFfrcg4xzA"
                    }
                },
                "contentDetails": {
                    "videoId": "4OFfrcg4xzA",
                    "videoPublishedAt": "2017-09-24T18:56:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/mvoLYK7yoxi0hXayP3GSammdXoY\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC45ODRDNTg0QjA4NkFBNkQy",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Cory Sams",
                    "description": "Etude 84 in E minor: Julio Sagreras\nVals: Bartolome Calatayud\nGreensleeves: Renaissance Anonymous",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/VMmxDGl8-lA/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/VMmxDGl8-lA/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/VMmxDGl8-lA/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/VMmxDGl8-lA/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 12,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "VMmxDGl8-lA"
                    }
                },
                "contentDetails": {
                    "videoId": "VMmxDGl8-lA",
                    "videoPublishedAt": "2017-09-24T18:56:52.000Z"
                }
            },
            {
                "kind": "youtube#playlistItem",
                "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/kgJBsfMsBTu_oGaobExl7Izv7c8\"",
                "id": "UEx2aGtLMTgyN05EeUV4SHhlRWZwYUZjdXdNUzRQdzc0MC4zMDg5MkQ5MEVDMEM1NTg2",
                "snippet": {
                    "publishedAt": "2017-09-15T04:10:41.000Z",
                    "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                    "title": "2011 Spring Semester Anoosh Farvardin",
                    "description": "Etude 5 in E minor: Julio Sagreras\nZapateado: Esteban de Sanlucar",
                    "thumbnails": {
                        "default": {
                            "url": "https://i.ytimg.com/vi/jHPsneiRHkk/default.jpg",
                            "width": 120,
                            "height": 90
                        },
                        "medium": {
                            "url": "https://i.ytimg.com/vi/jHPsneiRHkk/mqdefault.jpg",
                            "width": 320,
                            "height": 180
                        },
                        "high": {
                            "url": "https://i.ytimg.com/vi/jHPsneiRHkk/hqdefault.jpg",
                            "width": 480,
                            "height": 360
                        },
                        "standard": {
                            "url": "https://i.ytimg.com/vi/jHPsneiRHkk/sddefault.jpg",
                            "width": 640,
                            "height": 480
                        }
                    },
                    "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                    "playlistId": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
                    "position": 13,
                    "resourceId": {
                        "kind": "youtube#video",
                        "videoId": "jHPsneiRHkk"
                    }
                },
                "contentDetails": {
                    "videoId": "jHPsneiRHkk",
                    "videoPublishedAt": "2017-09-24T18:56:53.000Z"
                }
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistsByChannelQuery.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistsByChannelQuery.ts ***!
  \**************************************************************************************************/
/*! exports provided: YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE", function() { return YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE; });
var YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE = {
    "channelTitle": "Student Performances",
    "kind": "youtube#playlistListResponse",
    "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/1vD-ME6Xg5bMut8G_iNmvQnDMyg\"",
    "pageInfo": {
        "totalResults": 16,
        "resultsPerPage": 25
    },
    "items": [
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/QPa0pBF52ty0LjdrRnK7eM6zmbQ\"",
            "id": "PLvhkK1827NDx9jHjnzQkQz40px1kL5pkg",
            "snippet": {
                "publishedAt": "2017-09-27T19:08:20.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2014 Spring Semester Ensemble",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/wRfchUNOg4s/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/wRfchUNOg4s/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/wRfchUNOg4s/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/wRfchUNOg4s/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2014 Spring Semester Ensemble",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 6
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/YmjNByVgYCsCOvY8Iln_tDJgrSg\"",
            "id": "PLvhkK1827NDzxAPAiI83_eAafLvBTCPWR",
            "snippet": {
                "publishedAt": "2017-09-27T18:40:46.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2014 Guitar Festival",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/JF_UVUkGe7Y/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2014 Guitar Festival",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 14
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/xvcONZFqeAaWjo86n-WdSRAYsEE\"",
            "id": "PLvhkK1827NDzb3P4P_nOFmU-O73hWn643",
            "snippet": {
                "publishedAt": "2017-09-27T17:34:16.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2013 Fall Semester Solo",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/dx-RIui8ndo/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/dx-RIui8ndo/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/dx-RIui8ndo/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/dx-RIui8ndo/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2013 Fall Semester Solo",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 16
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/KRC10rvswaACf3Qg7zTBopgoFe4\"",
            "id": "PLvhkK1827NDz84OO0Xz50VPb4mZbcO81E",
            "snippet": {
                "publishedAt": "2017-09-27T17:14:33.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Guitars Galore Festival",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/-T96Zz72TNk/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/-T96Zz72TNk/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/-T96Zz72TNk/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/-T96Zz72TNk/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/-T96Zz72TNk/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Guitars Galore Festival",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 2
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/vMyQjfAZhHRrGla2IPa7hJ09msc\"",
            "id": "PLvhkK1827NDzTgM5C6SyiBPwUca66jZ5z",
            "snippet": {
                "publishedAt": "2017-09-27T16:32:29.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Spring Semester Ensemble",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/vD-X8nKQ8yE/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Spring Semester Ensemble",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 6
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/Ey0UkYx_6XKyVPFDtrDGyFLvbsk\"",
            "id": "PLvhkK1827NDzzAtBDUzN-hvOZ_1AbB-A2",
            "snippet": {
                "publishedAt": "2017-09-27T03:32:08.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Spring Semester Solo",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/awwgiNifGiY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/awwgiNifGiY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/awwgiNifGiY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Spring Semester Solo",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 32
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/P3jQ5f5aSvPCx-yE6pVfB5dvKIM\"",
            "id": "PLvhkK1827NDxfQCc2PcQYLIa_rijwBGGe",
            "snippet": {
                "publishedAt": "2017-09-26T21:00:48.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Summer Semester Solo",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/90AUIVzbrCY/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/90AUIVzbrCY/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/90AUIVzbrCY/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Summer Semester Solo",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 34
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/ZpccFtEWLNj38MF_9wS08UpR2_U\"",
            "id": "PLvhkK1827NDw73s9DTsKDT5lJFqIKdRV5",
            "snippet": {
                "publishedAt": "2017-09-26T20:25:20.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Fall Semester Solo",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/4gULVCW88N4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/4gULVCW88N4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/4gULVCW88N4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/4gULVCW88N4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Fall Semester Solo",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 31
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/4cRCW0lZ_Saa66APV4PImxV_OFo\"",
            "id": "PLvhkK1827NDxavoWTg06Y3s4CvEsWrjdd",
            "snippet": {
                "publishedAt": "2017-09-26T17:17:28.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2016 Guitar Concerts",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/5m1Ql9m9to4/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2016 Guitar Concerts",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 5
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/c5yipW90ERgs8hFZ3JPQclcs2rc\"",
            "id": "PLvhkK1827NDxGFqOKRTmbSqLU2enwVapo",
            "snippet": {
                "publishedAt": "2017-09-26T01:47:06.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2010 Spring Semester",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/YyXL4tkgXfs/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2010 Spring Semester",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 30
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/b22w7aMuo-x7cS92rueMtTpM4Gg\"",
            "id": "PLvhkK1827NDxHW4hJe1YRd67dtGLIV6zK",
            "snippet": {
                "publishedAt": "2017-09-25T19:02:35.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2011 Spring Semester Ensemble",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/405hhppN_b4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/405hhppN_b4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/405hhppN_b4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2011 Spring Semester Ensemble",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 10
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/cEQ7rhOuemKkIeyyTmmtdeEHhd4\"",
            "id": "PLvhkK1827NDyrnj33jXpuWtzT7ZsX4Jwx",
            "snippet": {
                "publishedAt": "2017-09-24T22:16:31.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2009 Fall Semester Ensemble",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/zi9x4TfHrO4/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2009 Fall Semester Ensemble",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 9
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/_RptnIGkN2cTESrsVQquDQBevjM\"",
            "id": "PLvhkK1827NDysQ85lehL26C6AKV6Z5t8W",
            "snippet": {
                "publishedAt": "2017-09-24T21:50:21.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2008 Fall Semester",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/pzd-XUKlB7w/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2008 Fall Semester",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 9
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/zzURvwj-B1Dfx0d0EptwtqMmHng\"",
            "id": "PLvhkK1827NDwteF1AKALKt4MRxZD2Nio3",
            "snippet": {
                "publishedAt": "2017-09-24T19:14:18.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2017 Guitar Concerts",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/6LQHIlicMpw/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/6LQHIlicMpw/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/6LQHIlicMpw/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/6LQHIlicMpw/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    },
                    "maxres": {
                        "url": "https://i.ytimg.com/vi/6LQHIlicMpw/maxresdefault.jpg",
                        "width": 1280,
                        "height": 720
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2017 Guitar Concerts",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 4
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/V7g6XVgpJHrwGwfywRCyU_RxSr4\"",
            "id": "PLvhkK1827NDwgRTwWPEwxJ2ljolGEq5VF",
            "snippet": {
                "publishedAt": "2017-09-15T04:12:52.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2010 Fall Semester",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/0HptXKcw4Js/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/0HptXKcw4Js/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/0HptXKcw4Js/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/0HptXKcw4Js/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2010 Fall Semester",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 22
            }
        },
        {
            "kind": "youtube#playlist",
            "etag": "\"VPWTmrH7dFmi4s1RqrK4tLejnRI/0l45msp3y-uTVZtZxRdLQKQiLP4\"",
            "id": "PLvhkK1827NDyExHxeEfpaFcuwMS4Pw740",
            "snippet": {
                "publishedAt": "2017-09-15T03:27:05.000Z",
                "channelId": "UCYkk_DU_k1sWyOw_fy6Raug",
                "title": "2011 Spring Semester Solo",
                "description": "",
                "thumbnails": {
                    "default": {
                        "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/default.jpg",
                        "width": 120,
                        "height": 90
                    },
                    "medium": {
                        "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/mqdefault.jpg",
                        "width": 320,
                        "height": 180
                    },
                    "high": {
                        "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/hqdefault.jpg",
                        "width": 480,
                        "height": 360
                    },
                    "standard": {
                        "url": "https://i.ytimg.com/vi/wwsgivJ6n8o/sddefault.jpg",
                        "width": 640,
                        "height": 480
                    }
                },
                "channelTitle": "CollinCountyGuitarStudiesStudentRecitalArchives",
                "localized": {
                    "title": "2011 Spring Semester Solo",
                    "description": ""
                }
            },
            "contentDetails": {
                "itemCount": 14
            }
        }
    ]
};


/***/ }),

/***/ "./src/app/features/performances/ut/play-list/play-list.component.css":
/*!****************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-list/play-list.component.css ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/features/performances/ut/play-list/play-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-list/play-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"guitar-dept-display-flex-column\">\n  <div class=\"guitar-dept-display-flex-wrap Grid-bordered Grid-cell guitar-dept-column-header\">\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{requestedPlaylist.snippet.title}}</div>\n  </div>\n</div>\n<div class=\"guitar-dept-display-flex-column\">\n  <div *ngFor=\"let playlistVideoMember of playlistGroupBy.get(requestedPlaylist.id)\"\n       class=\"guitar-dept-display-flex-wrap guitar-dept-display-flex-column\">\n    <div class=\"guitar-dept-display-flex-wrap Grid-bordered Grid-cell guitar-dept-display-flex-column\">\n      <a target=\"_blank\"\n         href=\"https://youtu.be/{{playlistVideoMember.contentDetails.videoId}}\" class=\"guitar-dept-display-flex-row\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{playlistVideoMember.snippet.title}}\n        </div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">\n          <img src=\"{{playlistVideoMember.snippet.thumbnails.default.url}}\">\n        </div>\n      </a>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/features/performances/ut/play-list/play-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-list/play-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: PlayListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListComponent", function() { return PlayListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayListComponent = /** @class */ (function () {
    function PlayListComponent(service) {
        this.service = service;
        this.playlistQuery = null;
        this.playlistGroupBy = null;
    }
    PlayListComponent.prototype.ngOnInit = function () {
        var fbar = this.service.getPerformancesPlaylists();
        this.playlistQuery = fbar;
        var foo = this.computePlaylistGroupBy();
        this.playlistGroupBy = foo;
        var bar = this.sortPlaylistGroupBy();
        this.playlistGroupBy = bar;
    };
    PlayListComponent.prototype.sortPlaylistGroupBy = function () {
        var candidate = new Map();
        var playlistGroupBy = this.playlistGroupBy;
        var allGroupByKeysIterator = playlistGroupBy.keys();
        var allGroupByKeysAsArray = Array.from(playlistGroupBy.keys());
        for (var _i = 0, allGroupByKeysAsArray_1 = allGroupByKeysAsArray; _i < allGroupByKeysAsArray_1.length; _i++) {
            var key = allGroupByKeysAsArray_1[_i];
            var setDiscovered = playlistGroupBy.get(key);
            var sortedArray = Array.from(setDiscovered).sort(function (x, y) { return x.snippet.title.localeCompare(y.snippet.title); });
            var sortedSet = new Set(sortedArray);
            candidate.set(key, sortedSet);
        }
        return candidate;
    };
    PlayListComponent.prototype.computePlaylistGroupBy = function () {
        var candidate = new Map();
        var allPlaylistsInChannel = this.playlistQuery;
        for (var _i = 0, allPlaylistsInChannel_1 = allPlaylistsInChannel; _i < allPlaylistsInChannel_1.length; _i++) {
            var playlist = allPlaylistsInChannel_1[_i];
            var itemsArray = playlist.items;
            for (var _a = 0, itemsArray_1 = itemsArray; _a < itemsArray_1.length; _a++) {
                var playlistItem = itemsArray_1[_a];
                var snippet = playlistItem.snippet;
                var playlistItemPlaylistId = snippet.playlistId;
                var setDiscovered = candidate.get(playlistItemPlaylistId);
                var sideEffectOfAddingPlaylistMemberVideo = Object(util__WEBPACK_IMPORTED_MODULE_2__["isUndefined"])(setDiscovered) ? (setDiscovered = new Set().add(playlistItem)) : setDiscovered.add(playlistItem);
                candidate.set(playlistItemPlaylistId, setDiscovered);
                // console.log(playlist) ;
            }
            // console.log(playlist) ;
        }
        return candidate;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], PlayListComponent.prototype, "requestedPlaylist", void 0);
    PlayListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ut-play-list',
            template: __webpack_require__(/*! ./play-list.component.html */ "./src/app/features/performances/ut/play-list/play-list.component.html"),
            styles: [__webpack_require__(/*! ./play-list.component.css */ "./src/app/features/performances/ut/play-list/play-list.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], PlayListComponent);
    return PlayListComponent;
}());



/***/ }),

/***/ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n.dark-modal .modal-content {\n  background-color: #292b2c;\n  color: white;\n}\n.dark-modal .close {\n  color: white;\n}\n.light-blue-backdrop {\n  background-color: #5cb3fd;\n}\n"

/***/ }),

/***/ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"guitar-program-courses-by-school-term-section\">\n  <div class=\"guitar-dept-display-flex-column\">\n    <div class=\"guitar-dept-display-flex-wrap  Grid-cell guitar-dept-column-header\">\n      {{channelQueryResponseSorted.channelTitle}}\n    </div>\n    <div *ngFor=\"let guitarPlaylist of channelQueryResponseSorted.items\"\n         class=\"guitar-dept-display-flex-wrap  guitar-dept-display-flex-row\">\n      <div (click)=\"openBackDropCustomClass(guitarPlaylist,content)\"\n           class=\"guitar-dept-display-flex-wrap Grid-bordered Grid-cell\">\n        <img src=\"{{guitarPlaylist.snippet.thumbnails.medium.url}}\" alt=\"{{guitarPlaylist.snippet.title}}\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarPlaylist.snippet.title}}</div>\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">{{guitarPlaylist.snippet.description}}</div>\n      </div>\n    </div>\n  </div>\n  <ng-template #content let-c=\"close\" let-d=\"dismiss\">\n    <div class=\"modal-header\">\n      <div class=\"modal-title\">\n        <div class=\"guitar-dept-display-flex-wrap  Grid-cell\">\n          Playlist Contents\n        </div>\n      </div>\n      <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"d('Cross click')\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n    </div>\n    <div class=\"modal-body\">\n      <ut-play-list [requestedPlaylist]=\"guitarPlaylist\"></ut-play-list>\n    </div>\n    <div class=\"modal-footer\">\n      <button type=\"button\" class=\"btn btn-light\" (click)=\"c('Close click')\">Close</button>\n    </div>\n  </ng-template>\n</section>\n\n"

/***/ }),

/***/ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: PlayListsByChannelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayListsByChannelComponent", function() { return PlayListsByChannelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PlayListsByChannelComponent = /** @class */ (function () {
    function PlayListsByChannelComponent(service, modalService) {
        this.service = service;
        this.modalService = modalService;
        this.channelQueryResponse = null;
        this.channelQueryResponseSorted = null;
        this.guitarPlaylist = null;
    }
    PlayListsByChannelComponent.prototype.ngOnInit = function () {
        var foo = this.service.getPerformancesByYearBySemester();
        this.channelQueryResponse = foo;
        var sortedClone = new MySortedClone(foo);
        this.channelQueryResponseSorted = sortedClone;
    };
    PlayListsByChannelComponent.prototype.openBackDropCustomClass = function (guitarPlaylist, content) {
        this.guitarPlaylist = guitarPlaylist;
        this.modalService.open(content, { backdropClass: 'light-blue-backdrop' });
    };
    PlayListsByChannelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'ut-play-list-by-channel',
            template: __webpack_require__(/*! ./play-lists-by-channel.component.html */ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.html"),
            styles: [__webpack_require__(/*! ./play-lists-by-channel.component.css */ "./src/app/features/performances/ut/play-lists-by-channel/play-lists-by-channel.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], PlayListsByChannelComponent);
    return PlayListsByChannelComponent;
}());

var MySortedClone = /** @class */ (function () {
    function MySortedClone(clonee) {
        this.channelTitle = clonee.channelTitle;
        this.kind = clonee.kind;
        this.etag = clonee.etag;
        this.pageInfo = clonee.pageInfo;
        this.items = this.sortPlaylistGroupBy(clonee.items);
    }
    MySortedClone.prototype.sortPlaylistGroupBy = function (clonee) {
        var candidate = [];
        clonee.forEach(function (member) { return candidate.push(member); });
        var sortedArray = Array.from(candidate).sort(function (x, y) { return -(x.snippet.title.localeCompare(y.snippet.title)); });
        return sortedArray;
    };
    return MySortedClone;
}());


/***/ }),

/***/ "./src/app/layout/carousel/carousel.component.css":
/*!********************************************************!*\
  !*** ./src/app/layout/carousel/carousel.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/carousel/carousel.component.html":
/*!*********************************************************!*\
  !*** ./src/app/layout/carousel/carousel.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--guitar department carousel-->\n<div id=\"carouselPickers\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"7500\" >\n  <div class=\"carousel-inner\" >\n    <div *ngFor=\"let slide of carouselSlideDeck; first as isFirst\"\n         [ngClass]=\"{'carousel-item': true , 'animate-repeat': true, 'active' : isFirst }\" >\n      <img src=\"../assets/images/carousel/{{slide}}R.jpg\" alt=\"carouselSlideDeck {{slide}}\" >\n    </div>\n  </div>\n</div>\n<script>\n  //    this will cause animation to auto start, assuming you place it in the right spot in the flow of interpreting this code\n  $('.carousel').carousel().next();\n</script>\n"

/***/ }),

/***/ "./src/app/layout/carousel/carousel.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/layout/carousel/carousel.component.ts ***!
  \*******************************************************/
/*! exports provided: CarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselComponent", function() { return CarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CarouselComponent = /** @class */ (function () {
    function CarouselComponent() {
    }
    CarouselComponent.prototype.ngOnInit = function () {
        console.log("carouselSlideDeck:carousel.onInit> " + this.carouselSlideDeck);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CarouselComponent.prototype, "carouselSlideDeck", void 0);
    CarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-carousel',
            template: __webpack_require__(/*! ./carousel.component.html */ "./src/app/layout/carousel/carousel.component.html"),
            styles: [__webpack_require__(/*! ./carousel.component.css */ "./src/app/layout/carousel/carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CarouselComponent);
    return CarouselComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer/FooterConfig.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/footer/FooterConfig.ts ***!
  \***********************************************/
/*! exports provided: GUITARFOOTER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARFOOTER", function() { return GUITARFOOTER; });
/* Defines the footer data */
var GUITARFOOTER = [
    {
        "label": "Guitar Studies Social Media Contacts",
        "runtime": ["guitar-dept-display-flex-column", "guitar-dept-display-flex-nowrap"],
        "payload": [
            {
                "label": "Faculty",
                "icon": "fa fa-graduation-cap",
                "logo": "#0",
                "url": "mailto:fvera@collin.edu"
            },
            {
                "label": "Facebook",
                "icon": "fa fa-facebook",
                "logo": "#0",
                "url": "https://www.facebook.com/groups/419901974694874/"
            },
            {
                "label": "You Tube",
                "icon": "fa fa-youtube",
                "logo": "#0",
                "url": "https://www.youtube.com/channel/UCBb4mtRZixug9VaNYIePxOQ"
            },
            {
                "label": "Instagram",
                "icon": "fa fa-instagram",
                "logo": "#0",
                "url": "https://www.instagram.com/collincollegemusic/"
            },
            {
                "label": "help",
                "icon": "fa fa-info-circle",
                "logo": "#0",
                "url": "../html/news/misc/guitarHowTo-news.html"
            },
            {
                "label": "webmaster",
                "icon": "fa fa-envelope-o",
                "logo": "#0",
                "url": "mailto:tritonpi-collinguitarwebmaster0@yahoo.com"
            }
        ]
    },
    {
        "label": "Guitar Competition Sponsors",
        "runtime": ["guitar-dept-display-flex-row", "guitar-dept-display-flex-wrap"],
        "payload": [
            {
                "label": "Los Angeles Guitar Academy",
                "icon": "#0",
                "logo": "../assets/images/sponsors/LAGA-logos/LAGA.email-image.png",
                "url": "https://onlineguitaracademy.net/"
            },
            {
                "label": "Savarez",
                "icon": "#0",
                "logo": "../assets/images/sponsors/Savarez/Savarez-logo.jpg",
                "url": "http://www.savarez.com/"
            },
            {
                "label": "Strings by Mail",
                "icon": "#0",
                "logo": "../assets/images/sponsors/StringsbyMail/StringsbyMail-logo.jpg",
                "url": "http://www.stringsbymail.com/"
            },
            {
                "label": "Category Software",
                "icon": "#0",
                "logo": "../assets/images/sponsors/categorySoftware/categorySoftware.wTitle-logo.jpg",
                "url": "#0"
            }
        ]
    }
];


/***/ }),

/***/ "./src/app/layout/footer/footer.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/footer/footer.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"guitar-dept-footer-section\" class=\"guitar-debt-sticky-footer\">\n  <div *ngIf=\"isReady()\">\n\n    <div\n      class=\"guitar-dept-display-flex-row\" style=\"justify-content: space-between\">\n      <div *ngFor='let footerModel of guitarProgramFooter' class=\"padded-right\">\n        <div class=\"Grid  Grid-cell \">\n          {{footerModel.label}}\n        </div>\n        <nav>\n          <ul class=\"emasculated-ul {{footerModel.runtime.join(' ')}}\">\n            <li *ngFor=\"let guitarProgramLink of footerModel.payload\" class=\"guitar-dept-text-button\">\n              <a href=\"{{guitarProgramLink.url}}\" target=\"_blank\">\n                <div class=\"guitar-dept-footer-text-button\">\n                  <i *ngIf=\"hasIcon(guitarProgramLink)\"\n                     class=\"{{guitarProgramLink.icon}}\">\n                    {{guitarProgramLink.label}}\n                  </i>\n                </div>\n                <img *ngIf=\"hasLogo(guitarProgramLink)\"\n                     alt=\"{{guitarProgramLink.label}}\"\n                     class=\"guitar-dept-footer-media-image\"\n                     src=\"{{guitarProgramLink.logo}}\">\n              </a>\n            </li>\n          </ul>\n        </nav>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n"

/***/ }),

/***/ "./src/app/layout/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EMPTY_URL = '#0';
// const setupUri  = "/assets/json/footer-controller.json" ;
var setupUri = "http://localhost:8080/fans/footer";
var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.service = service;
        _this.hasIcon = function (candidateLink) {
            return EMPTY_URL !== candidateLink.icon;
        };
        _this.hasLogo = function (candidateLink) {
            return EMPTY_URL !== candidateLink.logo;
        };
        return _this;
    }
    FooterComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.guitarProgramFooter = candidate;
            ret = true;
        }
        return ret;
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer/footer.component.html"),
            providers: [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]],
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/layout/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], FooterComponent);
    return FooterComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/layout/header/HeaderConfig.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/header/HeaderConfig.ts ***!
  \***********************************************/
/*! exports provided: GUITARHEADER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GUITARHEADER", function() { return GUITARHEADER; });
/* Defines the footer data */
var GUITARHEADER = {
    "title": "Fan Club: Collin College Guitar Studies",
    "targets": [
        {
            "label": "News",
            "url": "guitarNews"
        },
        {
            "label": "Classes",
            "url": "guitarCoursesBySchoolTerm"
        },
        {
            "label": "TEXTBOOKS",
            "url": "guitarTextbooks"
        },
        {
            "label": "Events",
            "url": "guitarEvents"
        },
        {
            "label": "Performances",
            "url": "guitarPerformances"
        },
        {
            "label": "LINKS",
            "url": "guitarLinks"
        },
        {
            "label": "faculty",
            "url": "guitarFaculty"
        }
    ]
};


/***/ }),

/***/ "./src/app/layout/header/header.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/header/header.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/header/header.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/header/header.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--  Guitar Department Header -->\n<section id=\"masthead-controller-context\">\n  <div *ngIf=\"isReady()\">\n\n    <div id=\"masthead\" class=\"guitar-dept-masthead\">\n      <img src=\"../assets/images/header/guitarStudies.light-logo.jpg\"\n           alt=\"{{title}}\">\n\n      <div id=\"sub-masthead\" class=\"guitar-dept-submasthead\">\n        <div class=\"guitar-dept-masthead-org-banner\">{{title}}</div>\n        <guitar-carousel [carouselSlideDeck]='carouselSlideDeck'></guitar-carousel>\n        <guitar-navbar [targets]='targets'></guitar-navbar>\n      </div>\n    </div>\n\n  </div>\n\n</section>\n\n<!--src=\"https://s3-us-west-2.amazonaws.com/s.cdpn.io/1423180/guitar_program.png\"-->\n\n"

/***/ }),

/***/ "./src/app/layout/header/header.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/file-as-source-for-json/file-as-source-for-json.service */ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var carouselSlideDeck = [0, 1, 2];
// const setupUri  = "/assets/json/header-controller.json" ;
var setupUri = "http://localhost:8080/fans/header";
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(service) {
        var _this = _super.call(this, setupUri, service.getHttpClient()) || this;
        _this.service = service;
        _this.carouselSlideDeck = carouselSlideDeck;
        return _this;
    }
    HeaderComponent.prototype.isReady = function () {
        var ret = false;
        if (this.getNetworker().isReady()) {
            var candidate = this.getNetworker().getPayload();
            this.targets = candidate.targets;
            this.title = candidate.title;
            ret = true;
        }
        return ret;
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header/header.component.html"),
            providers: [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]],
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/layout/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["FileAsSourceForJsonService"]])
    ], HeaderComponent);
    return HeaderComponent;
}(_services_file_as_source_for_json_file_as_source_for_json_service__WEBPACK_IMPORTED_MODULE_1__["GuitarApiComponentBaseClass"]));



/***/ }),

/***/ "./src/app/layout/layout.module.ts":
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/*! exports provided: LayoutModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutModule", function() { return LayoutModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ "./src/app/layout/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/layout/footer/footer.component.ts");
/* harmony import */ var _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./carousel/carousel.component */ "./src/app/layout/carousel/carousel.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/layout/navbar/navbar.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LayoutModule = /** @class */ (function () {
    function LayoutModule() {
    }
    LayoutModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]],
            exports: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"], _carousel_carousel_component__WEBPACK_IMPORTED_MODULE_4__["CarouselComponent"], _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"]]
        })
    ], LayoutModule);
    return LayoutModule;
}());



/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.css":
/*!****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.html":
/*!*****************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <ul class=\"navigation-buttons emasculated\">\n    <li *ngFor=\"let target of targets\">\n      <a href=\"{{target.url}}\">\n        <div class=\"guitar-dept-nav-button\">{{target.label}}</div>\n      </a>\n    </li>\n  </ul>\n</nav>\n"

/***/ }),

/***/ "./src/app/layout/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/layout/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
        console.log("navbar:onInit:targets:> " + this.targets);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], NavbarComponent.prototype, "targets", void 0);
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'guitar-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/layout/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/layout/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/pipes/pipes-common/filter-by-object.pipe.ts":
/*!*************************************************************!*\
  !*** ./src/app/pipes/pipes-common/filter-by-object.pipe.ts ***!
  \*************************************************************/
/*! exports provided: FilterByObjectPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterByObjectPipe", function() { return FilterByObjectPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterByObjectPipe = /** @class */ (function () {
    function FilterByObjectPipe() {
    }
    FilterByObjectPipe.prototype.transform = function (value, args) {
        var _this = this;
        return value.filter(function (v) {
            return _this.transformx0(v, args);
        });
    };
    FilterByObjectPipe.prototype.transformx0 = function (value, args) {
        var ret = false;
        for (var akey in args) {
            var candidate = false;
            if (value.hasOwnProperty(akey)) {
                var inverter = false;
                var input = value[akey];
                var filterRaw = args[akey];
                var filter = filterRaw;
                if (typeof filterRaw === 'string') {
                    if (0 === filterRaw.search("!")) {
                        filter = filterRaw.slice(1);
                        inverter = true;
                    }
                }
                candidate = filter == input;
                ret = inverter ? !candidate : candidate;
            }
        }
        return ret;
    };
    FilterByObjectPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'filterByObject'
        })
    ], FilterByObjectPipe);
    return FilterByObjectPipe;
}());



/***/ }),

/***/ "./src/app/pipes/pipes-common/pipes-common.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pipes/pipes-common/pipes-common.module.ts ***!
  \***********************************************************/
/*! exports provided: PipesCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PipesCommonModule", function() { return PipesCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _filter_by_object_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./filter-by-object.pipe */ "./src/app/pipes/pipes-common/filter-by-object.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PipesCommonModule = /** @class */ (function () {
    function PipesCommonModule() {
    }
    PipesCommonModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            declarations: [_filter_by_object_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByObjectPipe"]],
            exports: [_filter_by_object_pipe__WEBPACK_IMPORTED_MODULE_2__["FilterByObjectPipe"]]
        })
    ], PipesCommonModule);
    return PipesCommonModule;
}());



/***/ }),

/***/ "./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/services/file-as-source-for-json/file-as-source-for-json.service.ts ***!
  \*************************************************************************************/
/*! exports provided: GuitarApiComponentBaseClass, GuitarApiObserver, FileAsSourceForJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuitarApiComponentBaseClass", function() { return GuitarApiComponentBaseClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuitarApiObserver", function() { return GuitarApiObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileAsSourceForJsonService", function() { return FileAsSourceForJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _layout_footer_FooterConfig__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout/footer/FooterConfig */ "./src/app/layout/footer/FooterConfig.ts");
/* harmony import */ var _layout_header_HeaderConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../layout/header/HeaderConfig */ "./src/app/layout/header/HeaderConfig.ts");
/* harmony import */ var _features_news_GuitarNewsConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../features/news/GuitarNewsConfig */ "./src/app/features/news/GuitarNewsConfig.ts");
/* harmony import */ var _features_lists_events_GuitarEvent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../features/lists/events/GuitarEvent */ "./src/app/features/lists/events/GuitarEvent.ts");
/* harmony import */ var _features_lists_links_GuitarLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../features/lists/links/GuitarLinks */ "./src/app/features/lists/links/GuitarLinks.ts");
/* harmony import */ var _features_classroom_textbooks_GuitarBooks__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../features/classroom/textbooks/GuitarBooks */ "./src/app/features/classroom/textbooks/GuitarBooks.ts");
/* harmony import */ var _features_classroom_faculty_GuitarFaculty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../features/classroom/faculty/GuitarFaculty */ "./src/app/features/classroom/faculty/GuitarFaculty.ts");
/* harmony import */ var _features_classroom_class_schedule_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../features/classroom/class-schedule/GuitarClassSchedulePlanner */ "./src/app/features/classroom/class-schedule/GuitarClassSchedulePlanner.ts");
/* harmony import */ var _features_performances_ut_constants_2018_spring_YouTubePlaylistsByChannelQuery__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../features/performances/ut/constants/2018/spring/YouTubePlaylistsByChannelQuery */ "./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistsByChannelQuery.ts");
/* harmony import */ var _features_performances_ut_constants_2018_spring_YouTubePlaylistQuery__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../features/performances/ut/constants/2018/spring/YouTubePlaylistQuery */ "./src/app/features/performances/ut/constants/2018/spring/YouTubePlaylistQuery.ts");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! util */ "./node_modules/util/util.js");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_12__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};













var footerSetupUrl = "../../assets/json/footer-controller.json";
var headerSetupUrl = "../../assets/json/header-controller.json";
var booksSetupUri = "/assets/json/textbooks-controller.json";
var GuitarApiComponentBaseClass = /** @class */ (function () {
    function GuitarApiComponentBaseClass(setupUri, clientStub) {
        this.setupUri = setupUri;
        this.clientStub = clientStub;
    }
    GuitarApiComponentBaseClass.prototype.ngOnInit = function () {
        var clientStub = this.getHttpClient();
        var agent = new GuitarApiObserver(this.setupUri, clientStub);
        this.lookupAgent = agent;
        var spun = agent.spinUp();
        console.log("spinup is HERE:> " + spun);
    };
    GuitarApiComponentBaseClass.prototype.getNetworker = function () {
        return this.lookupAgent;
    };
    GuitarApiComponentBaseClass.prototype.getHttpClient = function () {
        return this.clientStub;
    };
    return GuitarApiComponentBaseClass;
}());

var GuitarApiObserver = /** @class */ (function () {
    function GuitarApiObserver(uri, clientStub) {
        this.uri = uri;
        this.clientStub = clientStub;
        var candidate = this.supplyObserver(clientStub, uri);
        this.observable = candidate;
    }
    GuitarApiObserver.prototype.isDefined = function (underTest) {
        var candidate = Object(util__WEBPACK_IMPORTED_MODULE_12__["isUndefined"])(underTest);
        return !candidate;
    };
    GuitarApiObserver.prototype.isReady = function () {
        return this.isDefined(this.getPayload());
    };
    GuitarApiObserver.prototype.getObserver = function () {
        return this.observable;
    };
    GuitarApiObserver.prototype.getPayload = function () {
        return this.payload;
    };
    GuitarApiObserver.prototype.supplyObserver = function (http, uri) {
        var observe = http.get(uri, { observe: 'response', responseType: 'json' });
        return observe;
    };
    GuitarApiObserver.prototype.spinUp = function () {
        var _this = this;
        this.getObserver().forEach(function (dat) {
            _this.payload = dat.body;
            console.log("guitarObserver:spinUp> " + dat);
        });
        return this.isReady();
    };
    return GuitarApiObserver;
}());

var FileAsSourceForJsonService = /** @class */ (function () {
    function FileAsSourceForJsonService(_http) {
        this._http = _http;
    }
    // ngOnInit(): void {
    //   console.log("FileAsSourceForJsonService is HERE: NEVER RUNS");
    // }
    FileAsSourceForJsonService.prototype.getHttpClient = function () {
        return this._http;
    };
    FileAsSourceForJsonService.prototype.hashKey = function (key) {
        var hashKey = "";
        for (var k in key) {
            hashKey += key[k] + '|';
        }
        return hashKey;
    };
    FileAsSourceForJsonService.prototype.getHeaderSetUp = function () {
        // return this.privateGetHeaderSetUpFromArray();  //  WORKS : not used
        return this.privateGetHeaderSetUpFromHttp(); //  WORKS : not used
    };
    FileAsSourceForJsonService.prototype.getFooterSetUp = function () {
        // return this.privateGetFooterSetUpFromArray();  // WORKS
        return this.privateGetFooterSetUpFromHttp();
    };
    FileAsSourceForJsonService.prototype.getBooksSetUp = function () {
        // return this.privateGetBooksSetUpFromArray();  // WORKS : not used
        // return this.privateGetBooksSetUpFromHttp();  // WORKS : NOT used
    };
    FileAsSourceForJsonService.prototype.getEventsSetUp = function () {
        return this.privateGetEventsSetUpFromArray(); // WORKS : not used
        // return this.privateGetEventsSetUpFromHttp(); // STUB
    };
    FileAsSourceForJsonService.prototype.getFacultySetUp = function () {
        return this.privateGetFacultySetUpFromArray(); // WORKS : not used
        // return this.privateGetEventsSetUpFromHttp(); // STUB
    };
    FileAsSourceForJsonService.prototype.getGuitarProgramCourseSchedule = function () {
        return this.privateGetGuitarProgramCourseScheduleSetUpFromArray(); // WORKS
    };
    FileAsSourceForJsonService.prototype.getLinksSetUp = function () {
        return this.privateGetLinksSetUpFromArray(); // WORKS : not used
        // return this.privateGetEventsSetUpFromHttp(); // STUB
    };
    FileAsSourceForJsonService.prototype.getMusicDeptCatalog = function () {
        return this.privateGetMusicDeptCatalogSetUpFromArray(); // WORKS
    };
    FileAsSourceForJsonService.prototype.getNewsFeed = function () {
        return this.privateGetNewsFeedFromArray(); // WORKS : not used
    };
    FileAsSourceForJsonService.prototype.getPerformancesByYearBySemester = function () {
        return this.privatePerformancesByYearBySemester(); // WORKS
    };
    FileAsSourceForJsonService.prototype.getPerformancesPlaylists = function () {
        return this.privatePerformancePlaylists(); // WORKS
    };
    FileAsSourceForJsonService.prototype.privateGetHeaderSetUpFromHttp = function () {
        var myAny = this._http.get(headerSetupUrl, { observe: 'response', responseType: 'json' });
        return myAny;
    };
    // IFooterConfig
    FileAsSourceForJsonService.prototype.privateGetFooterSetUpFromHttp = function () {
        var myAny = this._http.get(footerSetupUrl, { observe: 'response', responseType: 'json' });
        console.log(myAny);
        return myAny;
    };
    FileAsSourceForJsonService.prototype.privateGetBooksSetUpFromHttp = function () {
        var observe = this._http.get(booksSetupUri, { observe: 'response', responseType: 'json' });
        return observe;
    };
    // private handleError(err: HttpErrorResponse) {
    // }
    // private privateGetEventsSetUpFromHttp(): Observable<HttpResponse<IFooterConfig[]>> {
    //   let myAny: any = this._http.get<IFooterConfig[]>(footerSetupUrl,
    //     {observe: 'response', responseType: 'json'});
    //   return myAny;
    // }
    FileAsSourceForJsonService.prototype.privateGetBooksSetUpFromArray = function () {
        return _features_classroom_textbooks_GuitarBooks__WEBPACK_IMPORTED_MODULE_7__["GUITARBOOKS"];
    };
    FileAsSourceForJsonService.prototype.privateGetEventsSetUpFromArray = function () {
        return _features_lists_events_GuitarEvent__WEBPACK_IMPORTED_MODULE_5__["GUITAREVENTS"];
    };
    FileAsSourceForJsonService.prototype.privateGetFacultySetUpFromArray = function () {
        return _features_classroom_faculty_GuitarFaculty__WEBPACK_IMPORTED_MODULE_8__["GUITARFACULTY"];
    };
    FileAsSourceForJsonService.prototype.privateGetLinksSetUpFromArray = function () {
        return _features_lists_links_GuitarLinks__WEBPACK_IMPORTED_MODULE_6__["GUITARLINKS"];
    };
    FileAsSourceForJsonService.prototype.privateGetMusicDeptCatalogSetUpFromArray = function () {
        return _features_classroom_class_schedule_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_9__["MUSIC_DEPT_CATALOG"];
    };
    FileAsSourceForJsonService.prototype.privateGetGuitarProgramCourseScheduleSetUpFromArray = function () {
        return _features_classroom_class_schedule_GuitarClassSchedulePlanner__WEBPACK_IMPORTED_MODULE_9__["GUITAR_PROGRAM_COURSE_SCHEDULE"];
    };
    FileAsSourceForJsonService.prototype.privateGetNewsFeedFromArray = function () {
        return _features_news_GuitarNewsConfig__WEBPACK_IMPORTED_MODULE_4__["GUITARNEWS"];
    };
    FileAsSourceForJsonService.prototype.privateGetHeaderSetUpFromArray = function () {
        return _layout_header_HeaderConfig__WEBPACK_IMPORTED_MODULE_3__["GUITARHEADER"];
    };
    FileAsSourceForJsonService.prototype.privateGetFooterSetUpFromArray = function () {
        return _layout_footer_FooterConfig__WEBPACK_IMPORTED_MODULE_2__["GUITARFOOTER"];
    };
    ;
    FileAsSourceForJsonService.prototype.privatePerformancesByYearBySemester = function () {
        return _features_performances_ut_constants_2018_spring_YouTubePlaylistsByChannelQuery__WEBPACK_IMPORTED_MODULE_10__["YOU_TUBE_PLAYLISTS_BY_CHANNEL_RESPONSE"];
    };
    FileAsSourceForJsonService.prototype.privatePerformancePlaylists = function () {
        return _features_performances_ut_constants_2018_spring_YouTubePlaylistQuery__WEBPACK_IMPORTED_MODULE_11__["YOU_TUBE_PLAYLISTS"];
    };
    FileAsSourceForJsonService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
        // export class FileAsSourceForJsonService implements OnInit {
        ,
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FileAsSourceForJsonService);
    return FileAsSourceForJsonService;
}());



/***/ }),

/***/ "./src/app/services/include-template/include-template.component.css":
/*!**************************************************************************!*\
  !*** ./src/app/services/include-template/include-template.component.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/include-template/include-template.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/services/include-template/include-template.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"isContentLoaded()\">\n  <div [innerHtml]=\"runTimeContent\"></div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/services/include-template/include-template.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/services/include-template/include-template.component.ts ***!
  \*************************************************************************/
/*! exports provided: IncludeTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncludeTemplateComponent", function() { return IncludeTemplateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var IncludeTemplateComponent = /** @class */ (function () {
    function IncludeTemplateComponent(_http) {
        this._http = _http;
    }
    IncludeTemplateComponent.prototype.ngOnInit = function () {
        this.privateGetContent();
        console.log("includeTemplateComponent loaded");
    };
    IncludeTemplateComponent.prototype.isContentLoaded = function () {
        return undefined !== this.runTimeContent;
    };
    IncludeTemplateComponent.prototype.getContent = function () {
        return this.runTimeContent;
    };
    IncludeTemplateComponent.prototype.privateGetContent = function () {
        var _this = this;
        var observed = this.privateGetTemplateContentFromHttp();
        var content = "BOOYA!";
        observed.subscribe(function (payload) { return _this.runTimeContent = payload; });
        return content;
    };
    IncludeTemplateComponent.prototype.privateGetTemplateContentFromHttp = function () {
        var myAny;
        myAny = this._http.get(this.requestedUrl, { observe: 'body', responseType: 'text' });
        return myAny;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], IncludeTemplateComponent.prototype, "requestedUrl", void 0);
    IncludeTemplateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'include-template',
            template: __webpack_require__(/*! ./include-template.component.html */ "./src/app/services/include-template/include-template.component.html"),
            styles: [__webpack_require__(/*! ./include-template.component.css */ "./src/app/services/include-template/include-template.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IncludeTemplateComponent);
    return IncludeTemplateComponent;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab-state/tab-state.component */ "./src/app/services/tab-state/tab-state.component.ts");
/* harmony import */ var _include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./include-template/include-template.component */ "./src/app/services/include-template/include-template.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            // declarations: [FileAsSourceForJsonService, TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
            // declarations: [TabStateComponent, FilterByObjectPipe, IncludeTemplateComponent],
            declarations: [_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__["IncludeTemplateComponent"]],
            // exports: [TabStateComponent, IncludeTemplateComponent, FilterByObjectPipe]
            exports: [_tab_state_tab_state_component__WEBPACK_IMPORTED_MODULE_2__["TabStateComponent"], _include_template_include_template_component__WEBPACK_IMPORTED_MODULE_3__["IncludeTemplateComponent"]]
        })
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/tab-state/tab-state.component.css":
/*!************************************************************!*\
  !*** ./src/app/services/tab-state/tab-state.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/services/tab-state/tab-state.component.html":
/*!*************************************************************!*\
  !*** ./src/app/services/tab-state/tab-state.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<p>-->\n  <!--tab-state works!-->\n<!--</p>-->\n"

/***/ }),

/***/ "./src/app/services/tab-state/tab-state.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/services/tab-state/tab-state.component.ts ***!
  \***********************************************************/
/*! exports provided: TabStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabStateComponent", function() { return TabStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TabStateComponent = /** @class */ (function () {
    function TabStateComponent() {
        this.notify = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.NO_TAB_ACTIVE = -1;
        this.tab = this.NO_TAB_ACTIVE;
        this.activeTab = this.tab;
    }
    TabStateComponent.prototype.ngOnInit = function () {
        console.log("tabbed state machine loaded");
    };
    TabStateComponent.prototype.privateSetTab = function (newTabID) {
        return this.activeTab = this.tab = newTabID; // TODO : nice to return old value, but not needed..
    };
    TabStateComponent.prototype.tabReset = function () {
        return this.privateSetTab(this.NO_TAB_ACTIVE);
    };
    TabStateComponent.prototype.showTab = function (checkTab) {
        return (this.isSet(checkTab) || this.tab === this.NO_TAB_ACTIVE);
    };
    TabStateComponent.prototype.isSet = function (checkTab) {
        return this.tab === checkTab;
    };
    TabStateComponent.prototype.setTab = function (candidateTab) {
        this.privateSetTab(this.isSet(candidateTab) ? this.tabReset() : candidateTab);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], TabStateComponent.prototype, "notify", void 0);
    TabStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __webpack_require__(/*! ./tab-state.component.html */ "./src/app/services/tab-state/tab-state.component.html"),
            styles: [__webpack_require__(/*! ./tab-state.component.css */ "./src/app/services/tab-state/tab-state.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TabStateComponent);
    return TabStateComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        console.log("WelcomeComponent is HERE");
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], WelcomeComponent);
    return WelcomeComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/mak/var/work/project/punisher/edu.collin/dev.collin/angularFanClub/fansOfCollinGuitarViaAngular/src/main/ts/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map