webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        styles: ["\n    md-card {\n      max-width: 40%;\n      margin: 2em auto;\n    }\n  "],
        template: "\n    <md-card>\n      <md-card-title>Courses Catalog</md-card-title>\n      <md-card-content>\n        <router-outlet></router-outlet>\n      </md-card-content>\n    </md-card>\n  ",
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__not_found_component__ = __webpack_require__("../../../../../src/app/not-found-component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__courses_course_module__ = __webpack_require__("../../../../../src/app/courses/course.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var routes = [
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* NotFoundComponent */] },
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_7__not_found_component__["a" /* NotFoundComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot(routes),
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__courses_course_module__["a" /* CourseModule */],
        ],
        providers: [
            { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* HashLocationStrategy */] },
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course-list-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course__ = __webpack_require__("../../../../../src/app/courses/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__course__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_actions__ = __webpack_require__("../../../../../src/app/courses/course.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseListItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseListItemComponent = (function () {
    function CourseListItemComponent(courseActions) {
        this.courseActions = courseActions;
    }
    CourseListItemComponent.prototype.selectCourse = function () {
        // this.courseActions.selectCourse(this.course.id);
    };
    return CourseListItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__course__["Course"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__course__["Course"]) === "function" && _a || Object)
], CourseListItemComponent.prototype, "course", void 0);
CourseListItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-list-item',
        styles: ["\n    md-icon {\n      color: rgba(0, 0, 0, 0.54);\n    }\n\n    md-list-item md-chip-list.course-list-item__topics-chips {\n      margin-top: 0.3em;\n    }\n  "],
        template: "\n    <md-divider></md-divider>\n    <md-list-item routerLink=\"/courses/{{course.id}}\" (click)=\"selectCourse()\">\n      <md-icon md-list-icon class=\"material-icons\">library_books</md-icon>\n      <h3 md-line> {{ course.name }} </h3>\n      <md-chip-list md-line class=\"course-list-item__topics-chips\" *ngIf=\"!!course.topics\">\n        <md-chip *ngFor=\"let topic of course.topics\">{{ topic }}</md-chip>\n      </md-chip-list>\n    </md-list-item>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */]) === "function" && _b || Object])
], CourseListItemComponent);

var _a, _b;
//# sourceMappingURL=course-list-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_actions__ = __webpack_require__("../../../../../src/app/courses/course.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CourseListComponent = (function () {
    function CourseListComponent(courseActions, ngRedux) {
        this.courseActions = courseActions;
        this.ngRedux = ngRedux;
        this.filteredCourses$ = ngRedux.select(this.filteredCoursesSelector);
    }
    CourseListComponent.prototype.updateCoursesFilter = function (event) {
        var filterText = event.target.value;
        this.courseActions.filterCourses(filterText);
    };
    CourseListComponent.prototype.filteredCoursesSelector = function (state) {
        return state.courses.filter(function (course) {
            var filterText = state.coursesFilter.toLowerCase();
            return course.name.toLowerCase().indexOf(filterText) > -1
                || course.topics.findIndex(function (topic) { return topic.toLowerCase().indexOf(filterText) > -1; }) > -1;
        });
    };
    return CourseListComponent;
}());
CourseListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-list',
        styles: ["\n    .filter-container {\n      width: 50%;\n    }\n\n    .float-right {\n      float: right;\n    }\n\n    .no-courses {\n      margin-top: 1em;\n      text-align: center;\n    }\n\n    button[md-fab] md-icon {\n      vertical-align: middle;\n    }\n  "],
        template: "\n    <md-input-container class=\"filter-container\">\n      <input mdInput placeholder=\"Filter courses\" (input)=\"updateCoursesFilter($event)\">\n    </md-input-container>\n    <button md-fab class=\"float-right\" routerLink=\"/courses/new\">\n      <md-icon class=\"material-icons\">add</md-icon>\n    </button>\n    <md-nav-list class=\"course-list\">\n      <course-list-item *ngFor=\"let course of (filteredCourses$ | async)\" [course]=\"course\"></course-list-item>\n      <div *ngIf=\"(filteredCourses$ | async).length === 0\" class=\"no-courses\">\n        <md-divider></md-divider>\n        <h3>No courses to display</h3>\n      </div>\n    </md-nav-list>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _b || Object])
], CourseListComponent);

var _a, _b;
//# sourceMappingURL=course-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.actions.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_store__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return COURSES_ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return COURSES_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return COURSES_FETCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return COURSE_SELECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return COURSE_SELECT_NEW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return COURSE_CREATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return COURSE_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return COURSE_REMOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return COURSE_CLEAR_SELECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseActions; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var COURSES_ADD = 'COURSES_ADD';
var COURSES_FILTER = 'COURSES_FILTER';
var COURSES_FETCH = 'COURSES_FETCH';
var COURSE_SELECT = 'COURSE_SELECT';
var COURSE_SELECT_NEW = 'COURSE_SELECT_NEW';
var COURSE_CREATE = 'COURSE_CREATE';
var COURSE_UPDATE = 'COURSE_UPDATE';
var COURSE_REMOVE = 'COURSE_REMOVE';
var COURSE_CLEAR_SELECTION = 'COURSE_CLEAR_SELECTION';
var CourseActions = (function () {
    function CourseActions(ngRedux) {
        this.ngRedux = ngRedux;
    }
    CourseActions.prototype.coursesFetch = function (courses) {
        return this.ngRedux.dispatch({ type: COURSES_FETCH, payload: courses });
    };
    CourseActions.prototype.addCourses = function (courses) {
        return this.ngRedux.dispatch({ type: COURSES_ADD, payload: courses });
    };
    CourseActions.prototype.filterCourses = function (filterText) {
        return this.ngRedux.dispatch({ type: COURSES_FILTER, payload: filterText });
    };
    CourseActions.prototype.selectCourse = function (courseId) {
        return this.ngRedux.dispatch({ type: COURSE_SELECT, payload: courseId });
    };
    CourseActions.prototype.selectNewCourse = function () {
        return this.ngRedux.dispatch({ type: COURSE_SELECT_NEW });
    };
    CourseActions.prototype.createCourse = function (course) {
        return this.ngRedux.dispatch({ type: COURSE_CREATE, payload: course });
    };
    CourseActions.prototype.updateCourse = function (course) {
        return this.ngRedux.dispatch({ type: COURSE_UPDATE, payload: course });
    };
    CourseActions.prototype.removeCourse = function (courseId) {
        return this.ngRedux.dispatch({ type: COURSE_REMOVE, payload: courseId });
    };
    CourseActions.prototype.clearCourseSelection = function () {
        return this.ngRedux.dispatch({ type: COURSE_CLEAR_SELECTION });
    };
    return CourseActions;
}());
CourseActions = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_redux_store__["NgRedux"]) === "function" && _a || Object])
], CourseActions);

var _a;
//# sourceMappingURL=course.actions.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_service__ = __webpack_require__("../../../../../src/app/courses/course.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseComponent; });
/* unused harmony export allTopicsTransformer */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CourseComponent = (function () {
    function CourseComponent(courseService, route) {
        var _this = this;
        this.courseService = courseService;
        this.route = route;
        this.route.paramMap.subscribe(function (paramsMap) {
            var id = paramsMap.get('id');
            _this.courseService.selectCourse(id);
        });
    }
    CourseComponent.prototype.save = function () {
        var _this = this;
        this.selectedCourse$.subscribe(function (course) {
            _this.courseService.saveCourse(course);
            _this.courseService.unselectCourse();
        });
    };
    CourseComponent.prototype.remove = function () {
        var _this = this;
        this.selectedCourse$.subscribe(function (course) {
            _this.courseService.removeCourse(course);
            _this.courseService.unselectCourse();
        });
    };
    return CourseComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select"])('selectedCourse'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _a || Object)
], CourseComponent.prototype, "selectedCourse$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["select$"])('courses', allTopicsTransformer),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"]) === "function" && _b || Object)
], CourseComponent.prototype, "allTopics$", void 0);
CourseComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'course-form',
        styles: ["\n    .course-form {\n      width: 100%;\n    }\n\n    md-input-container {\n      width: 100%;\n    }\n\n    md-select {\n      width: 100%;\n    }\n\n    /* Hack to fix md-select's font-size: 16px; and align with margins introduced with md-input-container */\n    :host /deep/ .mat-select-trigger {\n      font-size: inherit;\n      margin-top: 1em;\n      margin-bottom: 1em;\n    }\n\n    .buttons-container {\n      margin-top: 1em;\n    }\n\n    .button-remove {\n      float: right;\n    }\n  "],
        template: "\n    <form class=\"course-form\" connect=\"selectedCourse\">\n      <div *ngIf=\"(selectedCourse$ | async).id\">\n        <md-input-container class=\"course-form__md-input-container\">\n          <input mdInput name=\"id\" ngModel placeholder=\"ID\" readonly disabled>\n        </md-input-container>\n      </div>\n\n      <div>\n        <md-input-container class=\"course-form__md-input-container\">\n          <input mdInput name=\"name\" ngModel placeholder=\"Name\" required>\n        </md-input-container>\n      </div>\n\n      <div class=\"course-form__topic-md-select-container\">\n        <md-select name=\"topics\" ngModel placeholder=\"Topics\" [multiple]=\"true\">\n          <md-option *ngFor=\"let topic of (allTopics$ | async)\" [value]=\"topic\">{{topic}}</md-option>\n        </md-select>\n      </div>\n\n      <div class=\"buttons-container\">\n        <button md-raised-button color=\"accent\" routerLink=\"/courses\" (click)=\"save()\">Save</button>\n        <button md-button routerLink=\"/courses\" type=\"reset\">Cancel</button>\n        <button md-button routerLink=\"/courses\" type=\"reset\" (click)=\"remove()\" class=\"button-remove\"\n                *ngIf=\"(selectedCourse$ | async).id\">Remove\n        </button>\n      </div>\n    </form>\n  ",
    }),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__course_service__["a" /* CourseService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _d || Object])
], CourseComponent);

function allTopicsTransformer(courses$) {
    return courses$.map(function (courses) {
        var topics = __WEBPACK_IMPORTED_MODULE_4_lodash__["flatMap"](courses, function (course) { return course.topics; });
        return __WEBPACK_IMPORTED_MODULE_4_lodash__["uniq"](topics).sort();
    });
}
var _a, _b, _c, _d;
//# sourceMappingURL=course.component.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__course_component__ = __webpack_require__("../../../../../src/app/courses/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__course_list_component__ = __webpack_require__("../../../../../src/app/courses/course-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__course_list_item_component__ = __webpack_require__("../../../../../src/app/courses/course-list-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__course_actions__ = __webpack_require__("../../../../../src/app/courses/course.actions.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__course_service__ = __webpack_require__("../../../../../src/app/courses/course.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__course_routes__ = __webpack_require__("../../../../../src/app/courses/course.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store__ = __webpack_require__("../../../../../src/app/store/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var CourseModule = (function () {
    function CourseModule(courseService) {
        this.courseService = courseService;
        courseService.fetchCourses();
    }
    return CourseModule;
}());
CourseModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__course_component__["a" /* CourseComponent */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__course_list_component__["a" /* CourseListComponent */],
            __WEBPACK_IMPORTED_MODULE_9__course_list_item_component__["a" /* CourseListItemComponent */],
            __WEBPACK_IMPORTED_MODULE_7__course_component__["a" /* CourseComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(__WEBPACK_IMPORTED_MODULE_12__course_routes__["a" /* routes */]),
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MdListModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MdInputModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["d" /* MdChipsModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_material__["f" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_13__store__["a" /* StoreModule */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_11__course_service__["a" /* CourseService */],
            __WEBPACK_IMPORTED_MODULE_10__course_actions__["a" /* CourseActions */],
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11__course_service__["a" /* CourseService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__course_service__["a" /* CourseService */]) === "function" && _a || Object])
], CourseModule);

var _a;
//# sourceMappingURL=course.module.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course_component__ = __webpack_require__("../../../../../src/app/courses/course.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_list_component__ = __webpack_require__("../../../../../src/app/courses/course-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });


var routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' },
    { path: 'courses', component: __WEBPACK_IMPORTED_MODULE_1__course_list_component__["a" /* CourseListComponent */] },
    { path: 'courses/new', component: __WEBPACK_IMPORTED_MODULE_0__course_component__["a" /* CourseComponent */] },
    { path: 'courses/:id', component: __WEBPACK_IMPORTED_MODULE_0__course_component__["a" /* CourseComponent */] },
];
//# sourceMappingURL=course.routes.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_actions__ = __webpack_require__("../../../../../src/app/courses/course.actions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CourseService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var URL = 'assets/courses.json';
var CourseService = (function () {
    function CourseService(http, courseActions) {
        this.http = http;
        this.courseActions = courseActions;
    }
    CourseService.prototype.getCourses = function () {
        return this.http.get(URL).map(function (response) { return response.json(); });
    };
    CourseService.prototype.fetchCourses = function () {
        var _this = this;
        this.getCourses().subscribe(function (courses) { return _this.courseActions.coursesFetch(courses); });
    };
    CourseService.prototype.selectCourse = function (id) {
        if (id === 'new') {
            this.courseActions.selectNewCourse();
        }
        else {
            this.courseActions.selectCourse(+id);
        }
    };
    CourseService.prototype.unselectCourse = function () {
        this.courseActions.clearCourseSelection();
    };
    CourseService.prototype.saveCourse = function (course) {
        if (course.id) {
            this.courseActions.updateCourse(course);
        }
        else {
            this.courseActions.createCourse(course);
        }
    };
    CourseService.prototype.removeCourse = function (course) {
        this.courseActions.removeCourse(course.id);
    };
    return CourseService;
}());
CourseService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__course_actions__["a" /* CourseActions */]) === "function" && _b || Object])
], CourseService);

var _a, _b;
//# sourceMappingURL=course.service.js.map

/***/ }),

/***/ "../../../../../src/app/courses/course.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=course.js.map

/***/ }),

/***/ "../../../../../src/app/courses/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course__ = __webpack_require__("../../../../../src/app/courses/course.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__course___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__course__);
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_CLEAR_SELECTION")) __webpack_require__.d(__webpack_exports__, "COURSE_CLEAR_SELECTION", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_CLEAR_SELECTION"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_SELECT_NEW")) __webpack_require__.d(__webpack_exports__, "COURSE_SELECT_NEW", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_SELECT_NEW"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_CREATE")) __webpack_require__.d(__webpack_exports__, "COURSE_CREATE", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_CREATE"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_SELECT")) __webpack_require__.d(__webpack_exports__, "COURSE_SELECT", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_SELECT"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSES_FILTER")) __webpack_require__.d(__webpack_exports__, "COURSES_FILTER", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSES_FILTER"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSES_ADD")) __webpack_require__.d(__webpack_exports__, "COURSES_ADD", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSES_ADD"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSES_FETCH")) __webpack_require__.d(__webpack_exports__, "COURSES_FETCH", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSES_FETCH"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_UPDATE")) __webpack_require__.d(__webpack_exports__, "COURSE_UPDATE", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_UPDATE"]; });
/* harmony namespace reexport (by used) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_0__course__, "COURSE_REMOVE")) __webpack_require__.d(__webpack_exports__, "COURSE_REMOVE", function() { return __WEBPACK_IMPORTED_MODULE_0__course__["COURSE_REMOVE"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__course_actions__ = __webpack_require__("../../../../../src/app/courses/course.actions.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_CLEAR_SELECTION", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_SELECT_NEW", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["c"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_CREATE", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["d"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_SELECT", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["e"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSES_FILTER", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["f"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSES_ADD", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["g"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSES_FETCH", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["h"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_UPDATE", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["i"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "COURSE_REMOVE", function() { return __WEBPACK_IMPORTED_MODULE_1__course_actions__["j"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__course_service__ = __webpack_require__("../../../../../src/app/courses/course.service.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__course_component__ = __webpack_require__("../../../../../src/app/courses/course.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__course_list_item_component__ = __webpack_require__("../../../../../src/app/courses/course-list-item.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__course_list_component__ = __webpack_require__("../../../../../src/app/courses/course-list.component.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__course_routes__ = __webpack_require__("../../../../../src/app/courses/course.routes.ts");
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__course_module__ = __webpack_require__("../../../../../src/app/courses/course.module.ts");
/* unused harmony namespace reexport */








//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/not-found-component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var NotFoundComponent = (function () {
    function NotFoundComponent() {
    }
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'not-found',
        template: "\n    <div>\n      <h1>404: Not Found</h1>\n    </div>\n  ",
    })
], NotFoundComponent);

//# sourceMappingURL=not-found-component.js.map

/***/ }),

/***/ "../../../../../src/app/store/app.store.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__ = __webpack_require__("../../../../@angular-redux/form/dist/source/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_redux_form___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__ = __webpack_require__("../../../../@angular-redux/store/lib/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_redux_store___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__angular_redux_store__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_redux__ = __webpack_require__("../../../../redux/es/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger__ = __webpack_require__("../../../../redux-logger/dist/redux-logger.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_redux_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_redux_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reducers__ = __webpack_require__("../../../../../src/app/store/reducers/index.ts");
/* unused harmony export INITIAL_STATE */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var INITIAL_STATE = {
    courses: __WEBPACK_IMPORTED_MODULE_5__reducers__["a" /* coursesInitialState */],
    coursesFilter: __WEBPACK_IMPORTED_MODULE_5__reducers__["b" /* coursesFilterInitialState */],
    selectedCourse: __WEBPACK_IMPORTED_MODULE_5__reducers__["c" /* selectedCourseInitialState */],
};
var nestedReducers = { courses: __WEBPACK_IMPORTED_MODULE_5__reducers__["d" /* courses */], coursesFilter: __WEBPACK_IMPORTED_MODULE_5__reducers__["e" /* coursesFilter */], selectedCourse: __WEBPACK_IMPORTED_MODULE_5__reducers__["f" /* selectedCourse */] };
var rootReducers = [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["defaultFormReducer"])(), __WEBPACK_IMPORTED_MODULE_5__reducers__["g" /* selectedCourseRootReducer */]];
var middlewares = [];
var enhancers = [];
var StoreModule = (function () {
    function StoreModule(ngRedux, devTools) {
        this.ngRedux = ngRedux;
        this.devTools = devTools;
        var reducer = __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["composeReducers"].apply(void 0, rootReducers.concat([__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_redux__["combineReducers"])(nestedReducers)]));
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["isDevMode"])()) {
            middlewares.push(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_redux_logger__["createLogger"])());
            if (devTools.isEnabled()) {
                enhancers.push(devTools.enhancer());
            }
        }
        ngRedux.configureStore(reducer, INITIAL_STATE, middlewares, enhancers);
    }
    return StoreModule;
}());
StoreModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["NgReduxFormModule"],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgReduxModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_redux_form__["NgReduxFormModule"],
        ],
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["NgRedux"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["DevToolsExtension"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_redux_store__["DevToolsExtension"]) === "function" && _b || Object])
], StoreModule);

var _a, _b;
//# sourceMappingURL=app.store.js.map

/***/ }),

/***/ "../../../../../src/app/store/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_store__ = __webpack_require__("../../../../../src/app/store/app.store.ts");
/* unused harmony reexport AppState */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__app_store__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/common.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony export (immutable) */ __webpack_exports__["a"] = reduce;

function reduce(reducers, state, type, payload) {
    var reducer = reducers[type];
    if (reducer && __WEBPACK_IMPORTED_MODULE_0_lodash__["isFunction"](reducer)) {
        return reducer(state, payload);
    }
    else {
        return state;
    }
}
//# sourceMappingURL=common.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/courses.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__("../../../../../src/app/store/reducers/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses__ = __webpack_require__("../../../../../src/app/courses/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coursesInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = courses;


var coursesInitialState = [];
var coursesReducers = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSES_ADD"]] = function (state, courses) {
        return state.concat(courses);
    },
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSES_FETCH"]] = function (state, courses) {
        return courses.slice();
    },
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_CREATE"]] = function (state, course) {
        var newCourse = Object.assign({}, course, { id: state.length + 1 });
        return state.concat([newCourse]);
    },
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_UPDATE"]] = function (state, updatedCourse) {
        return state.map(function (course) { return course.id === updatedCourse.id ? updatedCourse : course; });
    },
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_REMOVE"]] = function (state, courseId) {
        return state.filter(function (course) { return course.id !== courseId; });
    },
    _a);
function courses(state, _a) {
    if (state === void 0) { state = coursesInitialState; }
    var type = _a.type, payload = _a.payload;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* reduce */])(coursesReducers, state, type, payload);
}
var _a;
//# sourceMappingURL=courses.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/coursesFilter.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__("../../../../../src/app/store/reducers/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses__ = __webpack_require__("../../../../../src/app/courses/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coursesFilterInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = coursesFilter;


var coursesFilterInitialState = '';
var coursesFilterReducers = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSES_FILTER"]] = function (state, filterText) {
        return filterText;
    },
    _a);
function coursesFilter(state, _a) {
    if (state === void 0) { state = coursesFilterInitialState; }
    var type = _a.type, payload = _a.payload;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* reduce */])(coursesFilterReducers, state, type, payload);
}
var _a;
//# sourceMappingURL=coursesFilter.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__courses__ = __webpack_require__("../../../../../src/app/store/reducers/courses.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__courses__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_0__courses__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__coursesFilter__ = __webpack_require__("../../../../../src/app/store/reducers/coursesFilter.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__coursesFilter__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_1__coursesFilter__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectedCourse__ = __webpack_require__("../../../../../src/app/store/reducers/selectedCourse.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__selectedCourse__["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__selectedCourse__["b"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__selectedCourse__["c"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/store/reducers/selectedCourse.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__common__ = __webpack_require__("../../../../../src/app/store/reducers/common.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__courses__ = __webpack_require__("../../../../../src/app/courses/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectedCourseInitialState; });
/* harmony export (immutable) */ __webpack_exports__["b"] = selectedCourse;
/* harmony export (immutable) */ __webpack_exports__["c"] = selectedCourseRootReducer;


var selectedCourseInitialState = {
    name: '',
    topics: []
};
function getInitialState(state) {
    return selectedCourseInitialState;
}
var selectedCourseReducers = (_a = {},
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_CLEAR_SELECTION"]] = getInitialState,
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_SELECT_NEW"]] = getInitialState,
    _a[__WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_CREATE"]] = getInitialState,
    _a);
function selectedCourse(state, _a) {
    if (state === void 0) { state = selectedCourseInitialState; }
    var type = _a.type, payload = _a.payload;
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__common__["a" /* reduce */])(selectedCourseReducers, state, type, payload);
}
function selectedCourseRootReducer(state, _a) {
    var type = _a.type, payload = _a.payload;
    if (type === __WEBPACK_IMPORTED_MODULE_1__courses__["COURSE_SELECT"]) {
        var course = state.courses.find(function (c) { return c.id === payload; });
        return Object.assign({}, state, { selectedCourse: course });
    }
    return state;
}
var _a;
//# sourceMappingURL=selectedCourse.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map