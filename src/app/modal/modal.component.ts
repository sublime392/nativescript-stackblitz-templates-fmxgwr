import { Component, Inject, OnDestroy, OnInit, Optional, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute, ActivationStart } from '@angular/router';
import { NativeDialogRef, NativeDialogService, NATIVE_DIALOG_DATA, PageRouterOutlet, RouterExtensions } from '@nativescript/angular';
import { take } from 'rxjs/operators';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'ns-modal',
  templateUrl: `./modal.component.html`,
})
export class ModalComponent implements OnInit, OnDestroy {
  id = Math.floor(Math.random() * 1000);
  @ViewChild(PageRouterOutlet, { static: false }) outlet?: PageRouterOutlet;

  constructor(@Optional() private ref: NativeDialogRef<ModalComponent>,
    private nativeDialog: NativeDialogService,
    protected activeRoute: ActivatedRoute,
    protected routerExtensions: RouterExtensions,
    @Inject(NATIVE_DIALOG_DATA) public data: any,
    private vcRef: ViewContainerRef) {

    console.log('MODAL CONSTRUCT');
    // this.subscriptions.push(
    // this.routerExtensions.router.events.subscribe(e => {
    //   if (e instanceof ActivationStart && e.snapshot.outlet === 'modal') {
    //     console.log('modal root deactivate on nav start');
    //     this.outlet?.deactivate();
    //   }

    // });
    // );

  }

  openNewModal() {
    this.nativeDialog.open(ModalComponent);
    // this.modalDialog.showModal(ModalComponent, {
    //   viewContainerRef: this.vcRef
    // });
  }
  ngOnInit() {
    console.log('MODAL INIT');
    console.log(this.data);
    this.routerExtensions.navigate([{ outlets: { modal: [this.data.url] } }], {
      // relativeTo: this.activeRoute,
      // state: this.context.state
    });
  }

  ngOnDestroy() {
    console.log('modal destroy');
    // this.outlet?.deactivate();
    // this.outlet?.detach();
  }

  onActivate(componentReference: any) {
    console.log('activated');
    componentReference.responseEmitter().pipe(take(1)).subscribe((data: any) => {
      console.log('response emitted:');
      console.log(data);
      // timer(1).subscribe(val => {
      console.log('modal root close callback emitting');
      // this.outlet?.deactivate();
      this.routerExtensions.navigate([{ outlets: { modal: null } }]).then(() => {
        this.ref.close(data);
      });
      // this.ref.close(data);
      // this.params.closeCallback(data, this.context.url);
      // });

    });
  }
}
