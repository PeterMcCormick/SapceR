import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LaunchInfoPage } from './launch-info';

@NgModule({
  declarations: [
    LaunchInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(LaunchInfoPage),
  ],
})
export class LaunchInfoPageModule {}
