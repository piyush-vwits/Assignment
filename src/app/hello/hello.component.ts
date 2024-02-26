import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  message:string="Greetings User";
  count:number=0

  public userInput:string='';



  // methods
  showMessage():void{
    alert(this.message);
  }
  incrementCounter():void{
    this.count++;
  }
}
