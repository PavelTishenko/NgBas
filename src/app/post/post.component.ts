import { Component, OnInit, Input, ContentChild, ElementRef, OnDestroy, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { IPost } from '../app.component';



@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush, // изменение стратегии определения изменений
  encapsulation: ViewEncapsulation.None
})
export class PostComponent implements OnInit, OnDestroy {
  @Input() post: IPost;
  @ContentChild('info', { static: true }) infoRef: ElementRef
  @Output() onRemove: EventEmitter<number> = new EventEmitter<number>();
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
