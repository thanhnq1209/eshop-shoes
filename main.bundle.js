webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });



/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (data) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'Accounts/token', this.formatData(data))
            .map(function (response) {
            var tokenObject = response.json();
            return tokenObject;
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService.prototype.formatData = function (data) {
        var returnData = '';
        var count = 0;
        for (var i in data) {
            if (count == 0) {
                returnData += i + '=' + data[i];
            }
            else {
                returnData += '&' + i + '=' + data[i];
            }
            count = count + 1;
        }
        return returnData;
    };
    AuthenticationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/category.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CategoryService = (function () {
    function CategoryService(http) {
        this.http = http;
    }
    CategoryService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    CategoryService.prototype.create = function (category) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Create', category, this.jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.update = function (category) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Update', category, this.jwt()).map(function (response) { return response.json(); });
    };
    CategoryService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/Delete?Id=' + id, this.jwt()).map(function (response) { return response; });
    };
    CategoryService.prototype.getAllForProduct = function () {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'categories/GetAllForProduct')
            .map(function (response) { return response.json(); });
    };
    // private helper methods
    CategoryService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    CategoryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], CategoryService);
    return CategoryService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__authentication_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__category_service__ = __webpack_require__("../../../../../src/app/_services/category.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__category_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pager_service__ = __webpack_require__("../../../../../src/app/_services/pager.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__pager_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_service__ = __webpack_require__("../../../../../src/app/_services/product.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_3__product_service__["a"]; });






/***/ }),

/***/ "../../../../../src/app/_services/pager.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagerService; });
// import * as _ from './node_modules/underscore/underscore';
var PagerService = (function () {
    function PagerService() {
    }
    PagerService.prototype.range = function (start, end) {
        var array = [];
        for (var i = start; i <= end; i++) {
            array.push(i);
        }
        return array;
    };
    PagerService.prototype.getPager = function (totalPages, totalItems, currentPage, pageSize) {
        if (currentPage === void 0) { currentPage = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        // calculate total pages
        currentPage += 1;
        var startPage, endPage;
        if (totalPages <= 10) {
            // less than 10 total pages so show all
            startPage = 1;
            endPage = totalPages;
        }
        else {
            // more than 10 total pages so calculate start and end pages
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            }
            else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            }
            else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }
        // calculate start and end item indexes
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);
        // create an array of pages to ng-repeat in the pager control
        var pages = this.range(startPage, endPage);
        // return object with all pager properties required by the view
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    };
    return PagerService;
}());



/***/ }),

/***/ "../../../../../src/app/_services/product.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
    }
    ProductService.prototype.getAll = function (sort, page, amount, keysearch) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/GetAll?sort=' + sort + '&page=' + page + '&amount=' + amount + '&keysearch=' + keysearch)
            .map(function (response) { return response.json(); });
    };
    ProductService.prototype.create = function (formData) {
        return this.http.post(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Create', formData, this.jwtFormData()).map(function (response) { return response.json(); });
    };
    ProductService.prototype.update = function (product) {
        return this.http.put(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Update', product, this.jwt()).map(function (response) { return response.json(); });
    };
    ProductService.prototype.delete = function (id) {
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Delete?Id=' + id, this.jwt()).map(function (response) { return response; });
    };
    ProductService.prototype.getById = function (id) {
        return this.http.get(__WEBPACK_IMPORTED_MODULE_2__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/getById?Id=' + id, this.jwt()).map(function (response) { return response.json(); });
    };
    // private helper methods
    ProductService.prototype.jwt = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({
            'Content-Type': 'application/json'
        });
        return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
    };
    ProductService.prototype.jwtFormData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'multipart/form-data');
        headers.append('Accept', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return options;
    };
    ProductService.prototype.getFormUrlEncoded = function (toConvert) {
        var formBody = [];
        for (var property in toConvert) {
            var encodedKey = encodeURIComponent(property);
            var encodedValue = encodeURIComponent(toConvert[property]);
            formBody.push(encodedKey + '=' + encodedValue);
        }
        return formBody.join('&');
    };
    ProductService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], ProductService);
    return ProductService;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".select2-search__field{\r\n    border: none !important;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"jumbotron\">\n    <div class=\"container\">\n        <div class=\"col-sm-8 col-sm-offset-2\">\n            <alert></alert>\n            \n        </div>\n    </div>\n</div> -->\n\n<div class=\"wrapper\">\n\n  <header class=\"main-header\">\n    <!-- Logo -->\n    <a href=\"index2.html\" class=\"logo\">\n      <!-- mini logo for sidebar mini 50x50 pixels -->\n      <span class=\"logo-mini\">\n        <b>A</b>LT</span>\n      <!-- logo for regular state and mobile devices -->\n      <span class=\"logo-lg\">\n        <b>Admin</b>LTE</span>\n    </a>\n    <!-- Header Navbar: style can be found in header.less -->\n    <nav class=\"navbar navbar-static-top\">\n      <!-- Sidebar toggle button-->\n      <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n        <span class=\"sr-only\">Toggle navigation</span>\n      </a>\n\n      <div class=\"navbar-custom-menu\">\n        <ul class=\"nav navbar-nav\">\n          <!-- Messages: style can be found in dropdown.less-->\n          <li class=\"dropdown messages-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-envelope-o\"></i>\n              <span class=\"label label-success\">4</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 4 messages</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <!-- start message -->\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Support Team\n                        <small>\n                          <i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <!-- end message -->\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        AdminLTE Design Team\n                        <small>\n                          <i class=\"fa fa-clock-o\"></i> 2 hours</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Developers\n                        <small>\n                          <i class=\"fa fa-clock-o\"></i> Today</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"assets/img/user3-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Sales Department\n                        <small>\n                          <i class=\"fa fa-clock-o\"></i> Yesterday</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <div class=\"pull-left\">\n                        <img src=\"assets/img/user4-128x128.jpg\" class=\"img-circle\" alt=\"User Image\">\n                      </div>\n                      <h4>\n                        Reviewers\n                        <small>\n                          <i class=\"fa fa-clock-o\"></i> 2 days</small>\n                      </h4>\n                      <p>Why not buy a new awesome theme?</p>\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">See All Messages</a>\n              </li>\n            </ul>\n          </li>\n          <!-- Notifications: style can be found in dropdown.less -->\n          <li class=\"dropdown notifications-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-bell-o\"></i>\n              <span class=\"label label-warning\">10</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 10 notifications</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-warning text-yellow\"></i> Very long description here that may not fit into the page and may cause design problems\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-users text-red\"></i> 5 new members joined\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-shopping-cart text-green\"></i> 25 sales made\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"fa fa-user text-red\"></i> You changed your username\n                    </a>\n                  </li>\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all</a>\n              </li>\n            </ul>\n          </li>\n          <!-- Tasks: style can be found in dropdown.less -->\n          <li class=\"dropdown tasks-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <i class=\"fa fa-flag-o\"></i>\n              <span class=\"label label-danger\">9</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"header\">You have 9 tasks</li>\n              <li>\n                <!-- inner menu: contains the actual data -->\n                <ul class=\"menu\">\n                  <li>\n                    <!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Design some buttons\n                        <small class=\"pull-right\">20%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li>\n                    <!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Create a nice theme\n                        <small class=\"pull-right\">40%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-green\" style=\"width: 40%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">40% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li>\n                    <!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Some task I need to do\n                        <small class=\"pull-right\">60%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-red\" style=\"width: 60%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                          <span class=\"sr-only\">60% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                  <li>\n                    <!-- Task item -->\n                    <a href=\"#\">\n                      <h3>\n                        Make beautiful transitions\n                        <small class=\"pull-right\">80%</small>\n                      </h3>\n                      <div class=\"progress xs\">\n                        <div class=\"progress-bar progress-bar-yellow\" style=\"width: 80%\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\"\n                          aria-valuemax=\"100\">\n                          <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                      </div>\n                    </a>\n                  </li>\n                  <!-- end task item -->\n                </ul>\n              </li>\n              <li class=\"footer\">\n                <a href=\"#\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- User Account: style can be found in dropdown.less -->\n          <li class=\"dropdown user user-menu\">\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n              <span class=\"hidden-xs\">Alexander Pierce</span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <!-- User image -->\n              <li class=\"user-header\">\n                <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n                <p>\n                  Alexander Pierce - Web Developer\n                  <small>Member since Nov. 2012</small>\n                </p>\n              </li>\n              <!-- Menu Body -->\n              <li class=\"user-body\">\n                <div class=\"row\">\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Followers</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Sales</a>\n                  </div>\n                  <div class=\"col-xs-4 text-center\">\n                    <a href=\"#\">Friends</a>\n                  </div>\n                </div>\n                <!-- /.row -->\n              </li>\n              <!-- Menu Footer-->\n              <li class=\"user-footer\">\n                <div class=\"pull-left\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n                </div>\n                <div class=\"pull-right\">\n                  <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n                </div>\n              </li>\n            </ul>\n          </li>\n          <!-- Control Sidebar Toggle Button -->\n          <li>\n            <a href=\"#\" data-toggle=\"control-sidebar\">\n              <i class=\"fa fa-gears\"></i>\n            </a>\n          </li>\n        </ul>\n      </div>\n    </nav>\n  </header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <aside class=\"main-sidebar\">\n    <!-- sidebar: style can be found in sidebar.less -->\n    <section class=\"sidebar\">\n      <!-- Sidebar user panel -->\n      <div class=\"user-panel\">\n        <div class=\"pull-left image\">\n          <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n        </div>\n        <div class=\"pull-left info\">\n          <p>Alexander Pierce</p>\n          <a href=\"#\">\n            <i class=\"fa fa-circle text-success\"></i> Online</a>\n        </div>\n      </div>\n      <!-- search form -->\n      <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n        <div class=\"input-group\">\n          <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n          <span class=\"input-group-btn\">\n            <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\">\n              <i class=\"fa fa-search\"></i>\n            </button>\n          </span>\n        </div>\n      </form>\n      <!-- /.search form -->\n      <!-- sidebar menu: : style can be found in sidebar.less -->\n      <ul class=\"sidebar-menu\">\n        <li class=\"header\">MAIN NAVIGATION</li>\n        <li class=\"treeview\">\n          <a href=\"#\">\n            <i class=\"fa fa-files-o\"></i>\n            <span>Layout Options</span>\n            <span class=\"pull-right-container\">\n              <span class=\"label label-primary pull-right\">4</span>\n            </span>\n          </a>\n          <ul class=\"treeview-menu\">\n            <li>\n              <a href=\"pages/layout/top-nav.html\">\n                <i class=\"fa fa-circle-o\"></i> Top Navigation</a>\n            </li>\n            <li>\n              <a href=\"pages/layout/boxed.html\">\n                <i class=\"fa fa-circle-o\"></i> Boxed</a>\n            </li>\n            <li>\n              <a href=\"pages/layout/fixed.html\">\n                <i class=\"fa fa-circle-o\"></i> Fixed</a>\n            </li>\n            <li>\n              <a href=\"pages/layout/collapsed-sidebar.html\">\n                <i class=\"fa fa-circle-o\"></i> Collapsed Sidebar</a>\n            </li>\n          </ul>\n        </li>\n        <li>\n          <a [routerLink]=\"['/categories']\">\n            <i class=\"fa fa-th\"></i>\n            <span>Loại sản phẩm</span>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/products']\">\n            <i class=\"fa fa-pie-chart\"></i>\n            <span>Danh sách sản phẩm</span>\n          </a>\n        </li>\n        <li>\n          <a [routerLink]=\"['/create-product']\">\n            <i class=\"fa fa-plus\"></i>\n            <span>Thêm sản phẩm</span>\n          </a>\n        </li>\n      </ul>\n    </section>\n    <!-- /.sidebar -->\n  </aside>\n\n  <!-- Content Wrapper. Contains page content -->\n  <div class=\"content-wrapper\">\n    <!-- Content Header (Page header) -->\n    <section class=\"content-header\">\n      <h1>\n        Dashboard\n        <small>Control panel</small>\n      </h1>\n      <ol class=\"breadcrumb\">\n        <li>\n          <a href=\"#\">\n            <i class=\"fa fa-dashboard\"></i> Home</a>\n        </li>\n        <li class=\"active\">Dashboard</li>\n      </ol>\n    </section>\n\n    <!-- Main content -->\n    <section class=\"content\">\n      <!-- Small boxes (Stat box) -->\n      <div class=\"row\">\n        <router-outlet></router-outlet>\n      </div>\n\n    </section>\n    <!-- /.content -->\n  </div>\n  <!-- /.content-wrapper -->\n  <footer class=\"main-footer\">\n    <div class=\"pull-right hidden-xs\">\n      <b>Version</b> 2.3.5\n    </div>\n    <strong>Copyright &copy; 2014-2016\n      <a href=\"http://almsaeedstudio.com\">Almsaeed Studio</a>.</strong> All rights reserved.\n  </footer>\n\n  <!-- Control Sidebar -->\n  <aside class=\"control-sidebar control-sidebar-dark\">\n    <!-- Create the tabs -->\n    <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n      <li>\n        <a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\">\n          <i class=\"fa fa-home\"></i>\n        </a>\n      </li>\n      <li>\n        <a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\">\n          <i class=\"fa fa-gears\"></i>\n        </a>\n      </li>\n    </ul>\n    <!-- Tab panes -->\n    <div class=\"tab-content\">\n      <!-- Home tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-home-tab\">\n        <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n                <p>Will be 23 on April 24th</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-user bg-yellow\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Frodo Updated His Profile</h4>\n\n                <p>New phone +1(800)555-1234</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-envelope-o bg-light-blue\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Nora Joined Mailing List</h4>\n\n                <p>nora@example.com</p>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <i class=\"menu-icon fa fa-file-code-o bg-green\"></i>\n\n              <div class=\"menu-info\">\n                <h4 class=\"control-sidebar-subheading\">Cron Job 254 Executed</h4>\n\n                <p>Execution time 5 seconds</p>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n        <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n        <ul class=\"control-sidebar-menu\">\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Custom Template Design\n                <span class=\"label label-danger pull-right\">70%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Update Resume\n                <span class=\"label label-success pull-right\">95%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-success\" style=\"width: 95%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Laravel Integration\n                <span class=\"label label-warning pull-right\">50%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-warning\" style=\"width: 50%\"></div>\n              </div>\n            </a>\n          </li>\n          <li>\n            <a href=\"javascript:void(0)\">\n              <h4 class=\"control-sidebar-subheading\">\n                Back End Framework\n                <span class=\"label label-primary pull-right\">68%</span>\n              </h4>\n\n              <div class=\"progress progress-xxs\">\n                <div class=\"progress-bar progress-bar-primary\" style=\"width: 68%\"></div>\n              </div>\n            </a>\n          </li>\n        </ul>\n        <!-- /.control-sidebar-menu -->\n\n      </div>\n      <!-- /.tab-pane -->\n      <!-- Stats tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n      <!-- /.tab-pane -->\n      <!-- Settings tab content -->\n      <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n        <form method=\"post\">\n          <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Report panel usage\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Some information about this general settings option\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Allow mail redirect\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Other sets of options are available\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Expose author name in posts\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n\n            <p>\n              Allow the user to show his name in blog posts\n            </p>\n          </div>\n          <!-- /.form-group -->\n\n          <h3 class=\"control-sidebar-heading\">Chat Settings</h3>\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Show me as online\n              <input type=\"checkbox\" class=\"pull-right\" checked>\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Turn off notifications\n              <input type=\"checkbox\" class=\"pull-right\">\n            </label>\n          </div>\n          <!-- /.form-group -->\n\n          <div class=\"form-group\">\n            <label class=\"control-sidebar-subheading\">\n              Delete chat history\n              <a href=\"javascript:void(0)\" class=\"text-red pull-right\">\n                <i class=\"fa fa-trash-o\"></i>\n              </a>\n            </label>\n          </div>\n          <!-- /.form-group -->\n        </form>\n      </div>\n      <!-- /.tab-pane -->\n    </div>\n  </aside>\n  <!-- /.control-sidebar -->\n  <!-- Add the sidebar's background. This div must be placed\n                 immediately after the control sidebar -->\n  <div class=\"control-sidebar-bg\"></div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.constant.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = (function () {
    function AppSettings() {
    }
    AppSettings.API_ENDPOINT = 'http://localhost:17453/api/';
    AppSettings.API_ENDPOINT_IMAGE = 'http://localhost:17453';
    return AppSettings;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__ = __webpack_require__("../../../../ng2-ckeditor/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__categories_index__ = __webpack_require__("../../../../../src/app/categories/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__products_index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__create_product_index__ = __webpack_require__("../../../../../src/app/create-product/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__product_detail_index__ = __webpack_require__("../../../../../src/app/product-detail/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// service












// const heroesRoutes: Routes = [
//   { path: '', component: HomeComponent},
//   { path: 'login', component: LoginComponent },
//   // otherwise redirect to home
//   { path: '**', redirectTo: '' }
// ];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_12__home_index__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_index__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_14__categories_index__["a" /* CategoriesComponent */],
                __WEBPACK_IMPORTED_MODULE_15__products_index__["a" /* ProductsComponent */],
                __WEBPACK_IMPORTED_MODULE_16__create_product_index__["a" /* CreateProductComponent */],
                __WEBPACK_IMPORTED_MODULE_17__product_detail_index__["a" /* ProductDetailComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormsModule"],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_routing__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_ckeditor__["CKEditorModule"],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_8_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_9_ng2_slim_loading_bar__["a" /* SlimLoadingBarModule */].forRoot()
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_10__guards_index__["a" /* AuthGuard */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["a" /* AuthenticationService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["b" /* CategoryService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["c" /* PagerService */],
                __WEBPACK_IMPORTED_MODULE_6__services_index__["d" /* ProductService */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_11__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__categories_index__ = __webpack_require__("../../../../../src/app/categories/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__products_index__ = __webpack_require__("../../../../../src/app/products/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__create_product_index__ = __webpack_require__("../../../../../src/app/create-product/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_detail_index__ = __webpack_require__("../../../../../src/app/product-detail/index.ts");








var appRoutes = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_4__categories_index__["a" /* CategoriesComponent */] },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_5__products_index__["a" /* ProductsComponent */] },
    { path: 'create-product', component: __WEBPACK_IMPORTED_MODULE_6__create_product_index__["a" /* CreateProductComponent */] },
    { path: 'product-detail/:id', component: __WEBPACK_IMPORTED_MODULE_7__product_detail_index__["a" /* ProductDetailComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/categories/categories.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\r\n    <div class=\"box box-success\">\r\n        <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Tạo thêm loại sản phẩm</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body\">\r\n            <form name=\"form\" (ngSubmit)=\"f.form.valid && CreateCategory()\" #f=\"ngForm\" novalidate>\r\n                <!-- text input -->\r\n                <div class=\"form-group\">\r\n                    <label>Tên loại sản phẩm</label>\r\n                    <input type=\"text\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"category.Name\" #Name=\"ngModel\" required>\r\n                    <div *ngIf=\"f.submitted && !firstName.valid\" class=\"help-block\">Name is required</div>\r\n                </div>\r\n\r\n                <!-- textarea -->\r\n                <div class=\"form-group\">\r\n                    <label>Mô tả</label>\r\n                    <textarea class=\"form-control\" rows=\"3\" name=\"Description\" [(ngModel)]=\"category.Description\" #Description=\"ngModel\"></textarea>\r\n                </div>\r\n            </form>\r\n        </div>\r\n        <!-- /.box-body -->\r\n        <div class=\"box-footer\">\r\n            <button type=\"\" (click)=\"CreateCategory()\" class=\"btn btn-primary\">{{nameBtnCreate}}</button>\r\n            <button id=\"btn-cancel\" type=\"\" (click)=\"cancelUpdate()\" class=\"btn btn-default\">Hủy</button>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"col-md-8\">\r\n    <div class=\"box box-info\">\r\n        <div class=\"box-header\">\r\n            <h3 class=\"box-title\">Danh sách loại sản phẩm</h3>\r\n\r\n            <div class=\"box-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                    <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                    <div class=\"input-group-btn\">\r\n                        <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body table-responsive no-padding\">\r\n            <table class=\"table table-hover\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>STT</th>\r\n                        <th width=\"15%\">Tên loại</th>\r\n                        <th>Mô tả</th>\r\n                        <th width=\"15%\">Hành động</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                        <td>{{page * amount + i + 1}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Description}}</td>\r\n                        <td>\r\n                            <button class=\"btn btn-sm btn-info\" (click)=\"UpdateCategory(item)\">Sửa</button>\r\n                            <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button>\r\n                        </td>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\r\n            <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                        <i class=\"fa fa-arrow-circle-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.box-body -->\r\n    </div>\r\n    <!-- /.box -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/categories/categories.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = (function () {
    function CategoriesComponent(router, categoryService, pagerService, toastr, vcr) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.toastr = toastr;
        this.categories = [];
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.toastr.setRootViewContainerRef(vcr);
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.nameBtnCreate = 'Tạo';
        this.isUpdating = false;
        this.keysearch = '';
    }
    CategoriesComponent.prototype.ngOnInit = function () {
        $('#btn-cancel').hide();
        this.loadAllCategories(this.sort, this.page, this.amount, this.keysearch);
    };
    CategoriesComponent.prototype.loadAllCategories = function (sort, page, amount, keysearch) {
        var _this = this;
        this.categoryService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            _this.categories = data.Data;
            _this.pagedItems = data.Data;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
        });
    };
    CategoriesComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllCategories(this.sort, page - 1, this.amount, this.keysearch);
    };
    CategoriesComponent.prototype.CreateCategory = function () {
        var _this = this;
        if (this.isUpdating) {
            this.category.Id = this.idUpdate;
            this.categoryService.update(this.category).subscribe(function (data) {
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.category.Name = '';
                _this.category.Description = '';
                _this.isUpdating = false;
                _this.nameBtnCreate = 'Tạo';
                $('#btn-cancel').hide();
                _this.toastr.success('Cập nhật loại sản phẩm thành công!', 'Thành Công!');
            });
        }
        else {
            this.categoryService.create(this.category).subscribe(function (data) {
                _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
                _this.category.Name = '';
                _this.category.Description = '';
                _this.toastr.success('Tạo loại sản phẩm thành công!', 'Thành Công!');
            });
        }
    };
    CategoriesComponent.prototype.UpdateCategory = function (item) {
        this.category.Name = item.Name;
        this.category.Description = item.Description;
        this.nameBtnCreate = 'Sửa';
        this.idUpdate = item.Id;
        this.isUpdating = true;
        $('#btn-cancel').show();
    };
    CategoriesComponent.prototype.cancelUpdate = function () {
        this.category.Name = '';
        this.category.Description = '';
        this.nameBtnCreate = 'Tạo';
        this.idUpdate = '';
        this.isUpdating = false;
        $('#btn-cancel').hide();
    };
    CategoriesComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        this.categoryService.delete(id).subscribe(function (data) {
            _this.loadAllCategories(_this.sort, _this.page, _this.amount, _this.keysearch);
            _this.toastr.info('Xóa loại sản phẩm thành công!', 'Thành Công!');
        });
    };
    CategoriesComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    CategoriesComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    CategoriesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/categories/categories.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/categories/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__categories_component__ = __webpack_require__("../../../../../src/app/categories/categories.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__categories_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/create-product/create-product.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"box box-info\">\r\n        <div class=\"box-header with-border\">\r\n            <h3 class=\"box-title\">Tạo thêm sản phẩm mới</h3>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <!-- form start -->\r\n        <form class=\"form-horizontal\">\r\n            <div id=\"uploading\">\r\n                <div class=\"clearfix\">\r\n                    <span class=\"pull-left\">Uploading...</span>\r\n                    <small style=\"margin-left: 30px;\" class=\"\">{{progressUpload}} %</small>\r\n                </div>\r\n                <div class=\"progress xs\">\r\n                    <div id=\"progess-load\" class=\"progress-bar progress-bar-green\" style=\"width: 90%;\"></div>\r\n                </div>\r\n            </div>\r\n            <div class=\"box-body\">\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Tên sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"text\" name=\"Name\" [(ngModel)]=\"product.Name\" class=\"form-control\" id=\"\" placeholder=\"Tên sản phẩm...\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Số lượng có sẵn</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"number\" name=\"Quantity\" [(ngModel)]=\"product.Quantity\" class=\"form-control\" id=\"\" placeholder=\"Số lượng\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Loại sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <select class=\"form-control\" id=\"select2-categories\" multiple=\"multiple\">\r\n                            <option *ngFor=\"let item of categories; let i = index\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Mô tả cho sản phẩm</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <ckeditor [(ngModel)]=\"product.Description\" name=\"description\" debounce=\"500\">\r\n                            <p>Hello\r\n                                <strong>world</strong>\r\n                            </p>\r\n                        </ckeditor>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <label for=\"\" class=\"col-sm-2 control-label\">Hình ảnh</label>\r\n                    <div class=\"col-sm-10\">\r\n                        <input type=\"file\" class=\"form-control\" multiple (change)=\"onChange($event)\">\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- /.box-body -->\r\n            <div class=\"box-footer\">\r\n                <button type=\"submit\" class=\"btn btn-default\">Hủy</button>\r\n                <button type=\"\" (click)=\"createProduct()\" class=\"btn btn-info pull-right\">Tạo sản phẩm</button>\r\n            </div>\r\n            <!-- /.box-footer -->\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/create-product/create-product.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProductComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateProductComponent = (function () {
    function CreateProductComponent(router, categoryService, pagerService, productService, toastr, vcr) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.toastr = toastr;
        this.categories = [];
        this.product = {};
        this.description = 'Mô tả cho sản phẩm';
        this.toastr.setRootViewContainerRef(vcr);
    }
    CreateProductComponent.prototype.ngOnInit = function () {
        $('#uploading').hide();
        this.progressUpload = 0;
        $('#select2-categories').select2();
        this.loadAllCatagories();
    };
    CreateProductComponent.prototype.loadAllCatagories = function () {
        var _this = this;
        this.categoryService.getAllForProduct().subscribe(function (data) {
            _this.categories = data;
        });
    };
    CreateProductComponent.prototype.createProduct = function () {
        var _this = this;
        $('#uploading').show();
        var selectedCates = $("#select2-categories").val();
        this.product.Description = $('<div/>').text(this.product.Description).html();
        this.product.CategoryIds = selectedCates;
        var formData = new FormData();
        for (var i = 0; i < this.images.length; i++) {
            formData.append('files', this.images[i], this.images[i].name);
        }
        formData.append('objCreateProductModel', JSON.stringify(this.product));
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    _this.toastr.success('Tạo sản phẩm thành công!', 'Thành công!');
                    _this.router.navigate(['/products']);
                }
                else {
                    _this.toastr.error('Lỗi trong quá trình tạo sản phẩm!', 'Oops!');
                }
            }
        };
        xhr.upload.onprogress = function (event) {
            _this.progressUpload = Math.round(event.loaded / event.total * 100);
            $('#progess-load').css('width', _this.progressUpload + '%');
        };
        xhr.open("POST", __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT + 'products/Create', true);
        xhr.send(formData);
        // 
    };
    CreateProductComponent.prototype.onChange = function (event) {
        var eventObj = event;
        var target = eventObj.target;
        var files = target.files;
        this.images = files;
    };
    CreateProductComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/create-product/create-product.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* ProductService */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], CreateProductComponent);
    return CreateProductComponent;
}());



/***/ }),

/***/ "../../../../../src/app/create-product/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__create_product_component__ = __webpack_require__("../../../../../src/app/create-product/create-product.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__create_product_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "Home nè"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.loadAllUsers();
    };
    HomeComponent.prototype.deleteUser = function (id) {
    };
    HomeComponent.prototype.loadAllUsers = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/home/home.component.html")
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"f.form.valid && login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !username.valid }\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>\r\n        </div>\r\n        <div class=\"form-group\" [ngClass]=\"{ 'has-error': f.submitted && !password.valid }\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/register']\" class=\"btn btn-link\">Register</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
    }
    LoginComponent.prototype.ngOnInit = function () {
        console.log('thành');
        // reset login status
        this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.model.grant_type = 'password';
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            localStorage.setItem('currentUser', JSON.stringify(data.access_token));
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/login/login.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AuthenticationService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__product_detail_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n        <div class=\"box box-info\">\r\n            <div class=\"box-header with-border\">\r\n                <h3 class=\"box-title\">Chi tiết sản phẩm</h3>\r\n            </div>\r\n            <!-- /.box-header -->\r\n            <!-- form start -->\r\n            <form class=\"form-horizontal\" *ngIf=\"loadedContent\">\r\n                <div class=\"box-body\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Tên sản phẩm</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"text\" name=\"Name\" [(ngModel)]=\"product.Name\" class=\"form-control\" id=\"\" placeholder=\"Tên sản phẩm...\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Số lượng có sẵn</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <input type=\"number\" name=\"Quantity\" [(ngModel)]=\"product.Quantity\" class=\"form-control\" id=\"\" placeholder=\"Số lượng\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Loại sản phẩm</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <select class=\"form-control\" id=\"select2-categories-detail\" multiple=\"multiple\">\r\n                                <option *ngFor=\"let item of categories; let i = index\" value=\"{{item.Id}}\">{{item.Name}}</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                        <label for=\"\" class=\"col-sm-2 control-label\">Mô tả cho sản phẩm</label>\r\n                        <div class=\"col-sm-10\">\r\n                            <ckeditor [(ngModel)]=\"product.Description\" name=\"description\" debounce=\"500\">\r\n                                <p>Hello\r\n                                    <strong>world</strong>\r\n                                </p>\r\n                            </ckeditor>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-2 control-label\">Hình ảnh</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <span style=\"margin-right: 3px;\" *ngFor=\"let item of product.ProductImages\">\r\n                                    <img class=\"image-detail\" style=\"max-width: 90px; max-height: 60px;\" src=\"{{item.Path}}\" />\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                    <div class=\"form-group\">\r\n                            <label for=\"\" class=\"col-sm-2 control-label\">Thêm hình ảnh</label>\r\n                            <div class=\"col-sm-10\">\r\n                                <input type=\"file\" class=\"form-control\" multiple (change)=\"onChange($event)\">\r\n                            </div>\r\n                        </div>\r\n                </div>\r\n                <!-- /.box-body -->\r\n                <div class=\"box-footer\">\r\n                    <button type=\"submit\" class=\"btn btn-default\">Hủy</button>\r\n                    <button type=\"\" (click)=\"createProduct()\" class=\"btn btn-info pull-right\">Tạo sản phẩm</button>\r\n                </div>\r\n                <!-- /.box-footer -->\r\n            </form>\r\n        </div>\r\n    </div>"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductDetailComponent = (function () {
    function ProductDetailComponent(productService, categoryService, route, toastr, vcr) {
        this.productService = productService;
        this.categoryService = categoryService;
        this.route = route;
        this.toastr = toastr;
        this.categories = [];
        this.toastr.setRootViewContainerRef(vcr);
        this.loadedContent = false;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        this.id = this.route.snapshot.params['id'];
        this.loadAllCatagories();
        this.getInfoProduct(this.id);
    };
    ProductDetailComponent.prototype.loadAllCatagories = function () {
        var _this = this;
        this.categoryService.getAllForProduct().subscribe(function (data) {
            _this.categories = data;
            setTimeout(function () {
                $('#select2-categories-detail').select2();
            }, 100);
        });
    };
    ProductDetailComponent.prototype.getInfoProduct = function (id) {
        var _this = this;
        this.productService.getById(id).subscribe(function (product) {
            product.Description = $('<div/>').html(product.Description).text();
            ;
            _this.product = product;
            _this.loadedContent = true;
            /// set value selected categories
            var selectedCates = [];
            _this.product.Categories.forEach(function (e) {
                selectedCates.push(e.Id);
            });
            setTimeout(function () {
                $('#select2-categories-detail').select2().val(selectedCates).trigger('change');
            }, 100);
            _this.product.ProductImages.forEach(function (image) {
                image.Path = __WEBPACK_IMPORTED_MODULE_4__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
            });
        });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i.toString(),
            template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_index__["d" /* ProductService */], __WEBPACK_IMPORTED_MODULE_1__services_index__["b" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".image-detail{\r\n    padding: 5px;\r\n    border: 1px solid green;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/products/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__products_component__ = __webpack_require__("../../../../../src/app/products/products.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__products_component__["a"]; });



/***/ }),

/***/ "../../../../../src/app/products/products.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\">\r\n    <div class=\"box box-success\">\r\n        <div class=\"box-header\">\r\n            <h3 class=\"box-title\">Danh sách sản phẩm</h3>\r\n\r\n            <div class=\"box-tools\">\r\n                <div class=\"input-group input-group-sm\" style=\"width: 150px;\">\r\n                    <input type=\"text\" name=\"table_search\" [(ngModel)]=\"keysearch\" class=\"form-control pull-right\" placeholder=\"Tìm kiếm\">\r\n\r\n                    <div class=\"input-group-btn\">\r\n                        <button type=\"\" (click)=\"goSearch()\" class=\"btn btn-default\">\r\n                            <i class=\"fa fa-search\"></i>\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- /.box-header -->\r\n        <div class=\"box-body table-responsive no-padding\">\r\n            <ng2-slim-loading-bar color=\"red\" height=\"3px\"></ng2-slim-loading-bar>\r\n            <table class=\"table table-hover\">\r\n                <tbody>\r\n                    <tr>\r\n                        <th>STT</th>\r\n                        <th width=\"15%\">Tên sản phẩm</th>\r\n                        <th width=\"10%\">Số lượng</th>\r\n                        <th>Loại sản phẩm</th>\r\n                        <th>Hình ảnh</th>\r\n                        <th>Hành động</th>\r\n                    </tr>\r\n                    <tr *ngFor=\"let item of pagedItems; let i = index\">\r\n                        <td>{{i + 1}}</td>\r\n                        <td>{{item.Name}}</td>\r\n                        <td>{{item.Quantity}}</td>\r\n                        <td>\r\n                            <span style=\"margin-right: 3px;\" *ngFor=\"let cate of item.Categories\" class=\"label label-success\">{{cate.Name}}</span>\r\n                        </td>\r\n                        <td>\r\n                            <span style=\"margin-right: 3px;\" *ngFor=\"let image of item.ProductImages\">\r\n                                <img style=\"max-width:80px; max-height:50px;\" src=\"{{image.Path}}\" />\r\n                            </span>\r\n                        </td>\r\n                        <td>\r\n                            <button class=\"btn btn-sm btn-info\" (click)=\"detailProduct(item.Id)\">Sửa</button>\r\n                            <!-- <button class=\"btn btn-sm btn-danger\" (click)=\"DeteleCategory(item.Id)\">Xóa</button> -->\r\n                        </td>\r\n                    </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n        <div class=\"box-footer clearfix\">\r\n            <div class=\"input-group input-group-sm pull-left\" style=\"width: 150px;\">\r\n                <input class=\"form-control\" [(ngModel)]=\"gopage\" name=\"table_search\" placeholder=\"Tới trang\" type=\"text\">\r\n                <div class=\"input-group-btn\">\r\n                    <button class=\"btn btn-default\" (click)=\"gotoPage()\" type=\"\">\r\n                        <i class=\"fa fa-arrow-circle-right\"></i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n            <ul *ngIf=\"pager.pages && pager.pages.length\" class=\"pagination pagination-sm no-margin pull-right\">\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(1)\">First</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === 1}\">\r\n                    <a (click)=\"setPage(pager.currentPage - 1)\">Previous</a>\r\n                </li>\r\n                <li *ngFor=\"let page of pager.pages\" [ngClass]=\"{active:pager.currentPage === page}\">\r\n                    <a (click)=\"setPage(page)\">{{page}}</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.currentPage + 1)\">Next</a>\r\n                </li>\r\n                <li [ngClass]=\"{disabled:pager.currentPage === pager.totalPages}\">\r\n                    <a (click)=\"setPage(pager.totalPages)\">Last</a>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n        <!-- /.box-body -->\r\n    </div>\r\n    <!-- /.box -->\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/products/products.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_constant__ = __webpack_require__("../../../../../src/app/app.constant.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__ = __webpack_require__("../../../../ng2-slim-loading-bar/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProductsComponent = (function () {
    function ProductsComponent(router, categoryService, pagerService, productService, slimLoadingBarService) {
        this.router = router;
        this.categoryService = categoryService;
        this.pagerService = pagerService;
        this.productService = productService;
        this.slimLoadingBarService = slimLoadingBarService;
        this.products = [];
        this.category = {};
        this.allDatas = {};
        this.pager = {};
        this.sort = 'Name';
        this.page = 0;
        this.amount = 10;
        this.keysearch = '';
    }
    ProductsComponent.prototype.ngOnInit = function () {
        this.loadAllProducts(this.sort, this.page, this.amount, this.keysearch);
    };
    ProductsComponent.prototype.loadAllProducts = function (sort, page, amount, keysearch) {
        var _this = this;
        this.slimLoadingBarService.start(function () {
            console.log('Loading complete');
        });
        this.productService.getAll(sort, page, amount, keysearch).subscribe(function (data) {
            data.Data.forEach(function (e) {
                e.ProductImages.forEach(function (image) {
                    image.Path = __WEBPACK_IMPORTED_MODULE_3__app_constant__["a" /* AppSettings */].API_ENDPOINT_IMAGE + image.Path.substr(1);
                });
            });
            _this.products = data.Data;
            _this.pagedItems = data.Data;
            _this.allDatas = data;
            _this.pager = _this.pagerService.getPager(_this.allDatas.TotalPage, _this.allDatas.TotalRecord, page, _this.amount);
            _this.page = page;
            _this.slimLoadingBarService.complete();
        });
    };
    ProductsComponent.prototype.setPage = function (page) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
        this.loadAllProducts(this.sort, page - 1, this.amount, this.keysearch);
    };
    ProductsComponent.prototype.detailProduct = function (id) {
        this.router.navigateByUrl('/product-detail/' + id);
    };
    ProductsComponent.prototype.DeteleCategory = function (id) {
        var _this = this;
        this.categoryService.delete(id).subscribe(function (data) {
            _this.loadAllProducts(_this.sort, _this.page, _this.amount, _this.keysearch);
        });
    };
    ProductsComponent.prototype.gotoPage = function () {
        if (this.gopage != "") {
            this.setPage(+this.gopage);
        }
        else {
            this.setPage(1);
        }
    };
    ProductsComponent.prototype.goSearch = function () {
        this.setPage(1);
    };
    ProductsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            moduleId: module.i,
            template: __webpack_require__("../../../../../src/app/products/products.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* CategoryService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["c" /* PagerService */],
            __WEBPACK_IMPORTED_MODULE_2__services_index__["d" /* ProductService */], __WEBPACK_IMPORTED_MODULE_4_ng2_slim_loading_bar__["b" /* SlimLoadingBarService */]])
    ], ProductsComponent);
    return ProductsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map