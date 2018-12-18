import { Component } from '@angular/core';
import { Renderer2, ElementRef, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
testarr:any =['Tomatoes','Cucumbers'];
  displayFruits=true;
  displayBerries=true;

 //renderer:Renderer2;
//element:ElementRef;

constructor(private renderer:Renderer2,private element:ElementRef){

}

ngOnInit(){

 // this.renderer.addClass(this.element.nativeElement, 'hiddenElement');
}
 showHideList(nameElem){

    const u =this.renderer.selectRootElement('#vegetables');
    this.renderer.setStyle(u, 'color', 'red');
   console.log(this.element.nativeElement);



 }
}
