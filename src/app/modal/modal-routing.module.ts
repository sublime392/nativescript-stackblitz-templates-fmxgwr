import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { NativeScriptRouterModule } from '@nativescript/angular';
import { ItemsComponent } from '../item/items.component';

const routes: Routes = [
  // { path: '', redirectTo: '/challenge', pathMatch: 'full' },

  { path: 'itemsm', outlet: 'modal', component: ItemsComponent },
];

@NgModule({
  imports: [NativeScriptRouterModule.forChild(routes)],
  exports: [NativeScriptRouterModule]
})
export class ModalRoutingModule { }
