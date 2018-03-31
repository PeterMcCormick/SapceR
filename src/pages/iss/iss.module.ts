import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IssPage } from './iss';

@NgModule({
  declarations: [
    IssPage,
  ],
  imports: [
    IonicPageModule.forChild(IssPage),
  ],
})
export class IssPageModule {}
