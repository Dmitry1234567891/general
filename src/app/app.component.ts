import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tmp:any;

  carName:string;
  colorCar:string;
  engineCapacity:number;
  yachtClass:number;
  state:boolean;
  stateYacht:string;
  carVisibleHide:string; // hidden visible List Cars
  yachtVisibleHide:string;  // hidden visible List Yahts

    cars :{name: string, color: string, enrgcapacity: number }[]=[];
    yachts:{yclass:number, state: boolean}[]=[];

   // arrayForshow :any[] =['carName'];
  arrayForShow :any[] =[];

  constructor(){
    this.state=false;
    this.carVisibleHide='none';
    this.yachtVisibleHide='none';


  }

  showToDisplay(show: number, itis:string){

    this.arrayForShow[show]=itis;
//this.cars.push({name:itis});
//console.log(this.cars[0].name);
    //this.tmp= itis;

    //console.log(this.tmp);
    //this.show=carN;
  }

  addcarName(carN:string){
    this.carName=carN;
   // this.cars[0].name=carN;
    //console.log(this.cars[0].name);
  }



   addcarColor(colorC:string){
    this.colorCar=colorC;
  }

  addcarengineCapacity(engineC:number){
    this.engineCapacity=engineC;
  }

  addYachtClass(ycl:number){
    this.yachtClass=ycl;

  }

  addState(st:string){
    this.stateYacht=st;
  }


  listCarVisibleHide(){

     if(this.carVisibleHide==='none'){
       this.carVisibleHide='block';
     }else{
       this.carVisibleHide='none';
     }

  }

  listYachtVisibleHide(){
    if(this.yachtVisibleHide==='none'){
      this.yachtVisibleHide='block';
    }else{
      this.yachtVisibleHide='none';
    }
  }

  addProducts(){

    this.cars.push({name: this.carName, color: this.colorCar, enrgcapacity: this.engineCapacity });
    this.yachts.push({yclass:this.yachtClass, state: this.state});

console.log(this.cars[0].name+' '+ this.cars[0].color+" "+ this.cars[0].enrgcapacity);
  }
  // setData(set:string , data:string){
  //   this.set=data;
  // }
}
