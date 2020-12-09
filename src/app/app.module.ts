import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [BrowserModule, IonicModule.forRoot()],
  bootstrap: [MyApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    Camera
  ]
})
export class AppModule {}