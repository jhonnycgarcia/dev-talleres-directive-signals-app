import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective implements OnInit {

  private htmlElement?: ElementRef<HTMLElement>;

  constructor(
    private el: ElementRef<HTMLElement>
  ) {
    console.log('constructor', this.el);
    this.htmlElement = this.el;
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

}
