import {Component, ViewChild} from '@angular/core';
import { Renderer2, ElementRef,  } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
testarr:any =['Tomatoes','Cucumbers'];
  displayFruits=true;
  displayBerries=true;
  @ViewChild('vegetables')  vegetables: ElementRef;

constructor(public renderer:Renderer2){

}


 // showHideList(){
 //
 //    this.renderer.setStyle(this.vegetables.nativeElement, 'background-color','red');
 //   this.renderer.addClass(this.vegetables.nativeElement,'hiddenElement');
 //   //console.log(this.vegetables.nativeElement);
 //
 // }

  showHideList(el:ElementRef){

    this.renderer.addClass(el,'hiddenElement');

  }

  showHideListViewChild(){


      //  this.renderer.setStyle(this.vegetables.nativeElement, 'background-color','red');
    this.renderer.addClass(this.vegetables.nativeElement,'hiddenElement');



  }

  showHideCloshure(el:ElementRef){

   let shhdlist=false;



    this.renderer.addClass(el,'hiddenElement');

  }

}
