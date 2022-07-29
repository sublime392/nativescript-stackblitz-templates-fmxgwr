import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { NativeScriptCommonModule, NativeScriptModule } from '@nativescript/angular'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { ItemsComponent } from './item/items.component'
import { ItemDetailComponent } from './item/item-detail.component'
import { ModalComponent } from './modal/modal.component'
import { NativeDialogModule } from '@nativescript/angular/lib/cdk/dialog/dialog-module'

@NgModule({
  bootstrap: [AppComponent],
  imports: [NativeScriptModule,NativeScriptCommonModule, AppRoutingModule,NativeDialogModule],
  declarations: [AppComponent, ItemsComponent, ItemDetailComponent, ModalComponent],
  providers: [],
  schemas: [NO_ERRORS_SCHEMA],
})
export class AppModule {}
