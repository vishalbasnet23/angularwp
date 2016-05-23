"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var header_component_1 = require('./components/header.component');
var post_list_component_1 = require('./components/post-list.component');
var sidebar_component_1 = require('./components/sidebar.component');
var footer_component_1 = require('./components/footer.component');
var posts_service_1 = require('./services/posts.service');
var AppComponent = (function () {
    function AppComponent(postsService) {
        this.postsService = postsService;
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-blog',
            templateUrl: 'app/views/main.component.html',
            directives: [header_component_1.HeaderComponent, post_list_component_1.PostListsComponent, sidebar_component_1.SidebarComponent, footer_component_1.FooterComponent],
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map