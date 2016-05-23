import { Component, OnInit } from '@angular/core';
// import { RouteParams } from '@angular/router-deprecated';
import { Posts } from '../services/posts';
import { PostsService } from '../services/posts.service';

@Component({
    selector: 'post-list',
    templateUrl: 'app/views/post-lists.component.html',
    providers: [PostsService]
})

export class PostListsComponent implements OnInit {
    posts: Posts[];
    error: any;
    title = 'Hello';
    constructor(private _postService: PostsService) { }
    getPosts() {
        this._postService
            .getPosts()
            .then( posts => this.posts = posts )
            .catch( error => this.error = error);

    }
    ngOnInit() {
        this.getPosts();
    }
}
