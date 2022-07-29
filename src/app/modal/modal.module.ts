import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { NativeScriptCommonModule } from '@nativescript/angular';
import { ModalRoutingModule } from './modal-routing.module';
import { ModalComponent } from './modal.component';

@NgModule({
  imports: [NativeScriptCommonModule, ModalRoutingModule],
  declarations: [ModalComponent],
  exports: [ModalRoutingModule],
  schemas: [NO_ERRORS_SCHEMA],
})
export class ModalModule { }
