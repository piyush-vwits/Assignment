import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';
import { UserComponentComponent } from './user-component/user-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    BindingComponent,
    UserComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent ]
})
export class AppModule { }
