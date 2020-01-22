import { Component } from '@angular/core';

export interface IPost{
  title: string,
  text: string,
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: IPost[] = [
    {title: 'I want to learn ng components', text:'This is text', id:1},
    {title: 'Next block', text:'About directives and pipes', id:2},
  ];

  updatePosts(post: IPost){
    this.posts.unshift(post);
    // console.log('Post', post);

  }
}
