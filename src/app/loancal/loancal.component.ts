import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loancal',
  templateUrl: './loancal.component.html',
  styleUrls: ['./loancal.component.css']
})
export class LoancalComponent implements OnInit {
  selectedValue:any = 0;
  pAmount:Number = 0;
  month:Number = 0;
  roi:Number = 0;
  interest:number = 0;


  constructor() { }

  ngOnInit(): void {
   
  
  }
  cha(val:any){
    this.selectedValue = val;
  }

  calculate(p:any,m:any,r:any){
    this.pAmount=p;
    this.month=m;
    this.roi=r;
    this.interest=(Number(this.pAmount))*(Number(this.month))*(Number(this.roi))/(100*12);
    this.interest=Math.ceil(this.interest)
    console.log(this.interest)


  }
  reset(){
    this.pAmount=0;
    this.month=0;
    this.roi=0;
    this.interest=0

  }

}
