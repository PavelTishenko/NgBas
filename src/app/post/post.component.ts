import { Component, OnInit, Input, ContentChild, ElementRef, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { IPost } from '../app.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: IPost;
  @ContentChild('info', { static: true }) infoRef: ElementRef
  @Output() onRemove = new EventEmitter<number>();
  constructor() { }

  removePost() {
    this.onRemove.emit(this.post.id);
  }

  ngOnInit() {
    console.log(this.infoRef.nativeElement);
  }

  ngOnDestroy(): void {

  }

}
