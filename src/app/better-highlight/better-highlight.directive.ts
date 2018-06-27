import { Directive,Renderer2,ElementRef,OnInit, HostListener,HostBinding ,Input} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
	@Input() defaultColor:string="transparent";
	@Input() highlighedColor:string="blue";
	@HostBinding('style.backgroundColor') backgroundcolor:string;

  constructor(private elementRef:ElementRef, private randerer:Renderer2) { }

  ngOnInit(){
  	//this.randerer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  	this.backgroundcolor=this.defaultColor;
  }
  @HostListener('mouseenter') mouseover(event:Event){
  	//this.randerer.setStyle(this.elementRef.nativeElement,'font-size','50px');
  	this.backgroundcolor=this.highlighedColor;//use this if you use @HostBiding
  }
    @HostListener('mouseleave') mouseleave(event:Event){
  	/*this.randerer.setStyle(this.elementRef.nativeElement,'backgroundColor','blue');
  	this.randerer.setStyle(this.elementRef.nativeElement,'font-size','16px');*/
  	this.backgroundcolor=this.defaultColor;//use this if you use @HostBiding
  }
}
