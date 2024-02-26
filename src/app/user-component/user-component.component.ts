import { Component } from '@angular/core';

@Component({
  selector: 'app-user-component',
  templateUrl: './user-component.component.html',
  styleUrl: './user-component.component.css'
})
export class UserComponentComponent {
  name:string='Piyush';
  email:string='piyush.katariya@volkswagen.co.in';
  ApplyBoldClass:boolean=true;
  Applyitalicclass:boolean=true;
  Applycolorclass:boolean=false;
  public newName:string='';
  showpropdetails:boolean=true;
  editUser():void
  {
    console.log("Button is clicked")
  }
  AddClasses()
  {
    let classes={
   boldclass:this.ApplyBoldClass,
   italicclass:this.Applyitalicclass,
   colors:this.Applycolorclass
        };
    return classes;
  }
  AddNameStyle()
  {
    let styles={
      'color':'blue',
      'background-color':'yellow',
      'font-name':'caliber',
      'font-size.px':15
    };
    return styles;
  }
  AddEmailStyle()
  {
    let styles={
      'font-style':'italic',
      'color':'red',
      'background-color':'yellow',
      'font-name':'caliber',
      'font-size.px':14
    };
    return styles;
  }
  toggleDetails(){
    this.showpropdetails=!this.showpropdetails;
 }
}
