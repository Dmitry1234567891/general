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

  ////cars :{name: string, color: string, enrgcapacity: number }[]=[];

  cars :{name: string, color: string, enrgcapacity: number }[]=[{name:'',color:'',enrgcapacity:null}];

  yachts:{yclass:number, state: boolean}[]=[];

  // arrayForshow :any[] =['carName'];
  arrayForShow :any[] =[];

  constructor(){
    this.state=false;
    this.carVisibleHide='none';
    this.yachtVisibleHide='none';


  }
/////////////////////////////////////////////////////////////////////////////////////
  setValForFieldInObject(isIndex:number, nameField:string, event){

    switch (nameField) {

      case "name":
        this.cars[isIndex].name=event.target.value;
        break;

      case "color":
        this.cars[isIndex].color=event.target.value;
        break;

      case "enrgcapacity":
        this.cars[isIndex].enrgcapacity=event.target.value;
        break;

    }
    console.log(this.cars);
}

addcar(){
this.cars.push({name:'',color:'',enrgcapacity:null});
}
  delcar(isIndex:number){
    this.cars.splice(isIndex,1);

    console.log(this.cars);
  }

////////////////////////////////////////////////////////////////////////







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
