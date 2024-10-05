import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx'; // importamos la libreria


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{
    provide: RouteReuseStrategy, useClass: IonicRouteStrategy,
  }, EmailComposer ], // aqui anexamos la libreria 
  bootstrap: [AppComponent],
})
export class AppModule { }
