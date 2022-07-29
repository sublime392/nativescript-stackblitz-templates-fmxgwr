import { Component, OnInit } from '@angular/core'
import { NativeDialogService } from '@nativescript/angular'
import { ModalComponent } from '../modal/modal.component'

import { Item } from './item'
import { ItemService } from './item.service'

@Component({
  selector: 'ns-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit {
  items: Array<Item>

  constructor(private itemService: ItemService, private nativeDialog: NativeDialogService) {}

  ngOnInit(): void {
    this.items = this.itemService.getItems()
  }
  openModal() {
    const ref = this.nativeDialog.open(ModalComponent);
    ref.afterOpened().subscribe(() => console.log('after openend'));
    ref.beforeClosed().subscribe((result) => console.log('beforeClosed', result));
    ref.afterClosed().subscribe((result) => console.log('afterClosed', result));
    // setTimeout(() => ref.close('result!'), 1000);
  }

}
