import { Component, OnDestroy } from '@angular/core';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { HomeComponent } from '../home/home.component';
import { DialogoComponent } from '../shared/dialogo/dialogo.component';

@Component({
  selector: 'app-overlay',
  templateUrl: './overlay.component.html',
  styleUrls: ['./overlay.component.css']
})
export class OverlayComponent implements OnDestroy {
  constructor(public dialogService: DialogService, private confirmationService: ConfirmationService, private messageService: MessageService) { }

  dialogo() {
    this.confirmationService.confirm({
      message: '¿Quieres eliminar este registro?',
      header: 'Confirmación eliminar',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.messageService.add({ severity: 'info', summary: 'Aceptado', detail: 'Registro eliminado' });
      },
      reject: (type: ConfirmEventType) => {
        switch (type) {
          case ConfirmEventType.REJECT:
            this.messageService.add({ severity: 'error', summary: 'Cancelado', detail: 'Has cancelado la operación' });
            break;
          case ConfirmEventType.CANCEL:
            this.messageService.add({ severity: 'warn', summary: 'Cerrado', detail: 'Has cerrado la pestaña' });
            break;
        }
      }
    });
  }

  dialogoVisible: boolean = false;
  mostrarDialogoSimple() {
    this.dialogoVisible = true;
  }
  public ref!: DynamicDialogRef;

  dialogoDinamico() {
    this.ref = this.dialogService.open(DialogoComponent, {
      header: 'DialogoComponent',
      width: '70%',
      contentStyle: { overflow: 'auto' },
      baseZIndex: 10000,
      maximizable: true
    });

    this.ref.onClose.subscribe(() => {
      this.messageService.add({ severity: 'info', summary: 'Diálogo cerrado', detail: 'El diálogo se ha cerrado desde otro componente' });
    });

    this.ref.onMaximize.subscribe((value) => {
      this.messageService.add({ severity: 'info', summary: 'Maximizado', detail: `maximized: ${value.maximized}` });
    });
  }

  ngOnDestroy() {
    if (this.ref) {
      this.ref.close();
    }
  }
}
