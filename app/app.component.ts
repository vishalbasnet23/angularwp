import { Component } from '@angular/core';
import { HeaderComponent } from './components/header.component';
import { PostListsComponent } from './components/post-list.component';
import { SidebarComponent } from './components/sidebar.component';
import { FooterComponent } from './components/footer.component';
import { PostsService } from './services/posts.service';
@Component({
    selector: 'my-blog',
    templateUrl: 'app/views/main.component.html',
    directives: [HeaderComponent, PostListsComponent, SidebarComponent, FooterComponent],
    providers: [PostsService]
})
export class AppComponent {
    constructor(private postsService: PostsService) {}

}
