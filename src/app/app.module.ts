import { NgModule, APP_INITIALIZER } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule , HttpClient } from "@angular/common/http";

import { AppComponent } from './app.component';

function myFunc(httpClient: HttpClient)
{
	return () => {  //anonymous function start
			return Promise.resolve(true)
				.then( _ => {alert("1");})
				.then( _ => {alert("2");})
				.then( _ => {alert("3");})
				.then( _ => {alert("4");})
				;
		     } 	//anonymous function end
}



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, 
    HttpClientModule
  ],
  providers: [
	{
	provide : APP_INITIALIZER, 
	useFactory : myFunc, 
	multi : true, 
	deps : [HttpClient]
	}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
