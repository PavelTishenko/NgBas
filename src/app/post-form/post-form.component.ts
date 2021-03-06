import { Component, OnInit, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { IPost } from '../app.component';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<IPost> = new EventEmitter<IPost>();

  @ViewChild('titleInput', {static: false}) inputRef: ElementRef;

  title = '';
  text = '';
  constructor() { }

  ngOnInit() {
  }

  addPost() {
    if (this.text.trim() && this.title.trim()) {
      const post: IPost = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = '';
    }
  }

  focuseTitle() {
    this.inputRef.nativeElement.focus();

  }

}
