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
var posts_service_1 = require('../services/posts.service');
var PostListsComponent = (function () {
    function PostListsComponent(_postService) {
        this._postService = _postService;
        this.title = 'Hello';
    }
    PostListsComponent.prototype.getPosts = function () {
        var _this = this;
        this._postService
            .getPosts()
            .then(function (posts) { return _this.posts = posts; })
            .catch(function (error) { return _this.error = error; });
    };
    PostListsComponent.prototype.ngOnInit = function () {
        this.getPosts();
    };
    PostListsComponent = __decorate([
        core_1.Component({
            selector: 'post-list',
            templateUrl: 'app/views/post-lists.component.html',
            providers: [posts_service_1.PostsService]
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService])
    ], PostListsComponent);
    return PostListsComponent;
}());
exports.PostListsComponent = PostListsComponent;
//# sourceMappingURL=post-list.component.js.map