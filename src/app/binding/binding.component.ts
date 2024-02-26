import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrl: './binding.component.css'
})
export class BindingComponent {

  propertyName:string='Avisa';
  price:number=35000;
  imagePath:string="data:image/png;base64,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";
  colspan:number=2;
  rowspan:number=2;
  pageHeader:string="Prop Shop";
  boldclass:string='';
  italicclass:string='';
  colors:string='';
  ApplyBoldClass:boolean=true;
  Applyitalicclass:boolean=true;
  Applycolorclass:boolean=false;

  showpropdetails:boolean=true;
  AddClasses()
  {
    let classes={
   boldclass:this.ApplyBoldClass,
   italicclass:this.Applyitalicclass,
   colors:this.Applycolorclass
        };
    return classes;
  }

  AddStyle()
  {
    let styles={
      'font-style':'italic',
      'color':'green',
      'background-color':'pink',
      'font-name':'caliber',
      'font-size.px':12
    };
    return styles;
  }

  onclick():void
  {
console.log("button is clicked");
  }

  toggle():void{
     this.showpropdetails=!this.showpropdetails;
  }

}