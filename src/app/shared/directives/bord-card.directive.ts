import {Directive, ElementRef, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[appBordCard]'
})
export class BordCardDirective {

  @Input('appBordCard') borderColor;

  GREY_COLOR='#606060';
  GREEN_COLOR='#7FFFD4';
  constructor( private  element: ElementRef) {
    this.setBorder(this.GREY_COLOR);
    this.serHeight(180);
  }

  private setBorder(color:string):void{
    const border ='solid 4px ' +color;
    this.element.nativeElement.style.border= border;
  }
  private serHeight(height:number){
    this.element.nativeElement.style.height= height;
  }

  @HostListener('mouseenter') onMouseEnter(){
    this.setBorder(this.borderColor || this.GREEN_COLOR)

  }
  @HostListener('mouseleave') onMouseLeave(){
    this.setBorder( this.GREY_COLOR)

  }

}
