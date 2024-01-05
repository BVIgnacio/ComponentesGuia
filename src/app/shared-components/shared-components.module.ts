import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NuevoComponent } from '../nuevo/nuevo.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  declarations: [NuevoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[NuevoComponent]
})
export class SharedComponentsModule { }