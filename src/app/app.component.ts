import { Component } from '@angular/core';
import { Directive, Renderer2, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
testarr:any =['Tomatoes','Cucumbers'];
  displayFruits=true;
  displayBerries=true;

renderer:Renderer2;
element:ElementRef;

 showHideList(nameElem){

   this.element=nameElem;
   this.renderer.addClass(this.element.nativeElement, 'hiddenElement');


 }
}
