import { Posts } from './posts'
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()

export class PostsService {
    private postsUrl = 'http://localhost/github-ang/wp-json/wp/v2/posts';
    // public Posts = [];
    constructor(private http: Http ) { }
    private handleError(error: any) {
        console.error('An error occured', error);
        return Promise.reject(error.message || error);
    }
    getPosts(): Promise<Posts[]> {
        return this.http.get(this.postsUrl)
                    .toPromise()
                    .then( function(response) {
                        return response.json();
                    })
                    .catch(this.handleError);
    }
}
