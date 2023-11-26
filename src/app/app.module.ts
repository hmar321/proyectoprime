import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from './app.component';
import { appRoutingProviders, routing } from './app.routing';
import { DataComponent } from './components/data/data.component';
import { FormComponent } from './components/form/form.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { OverlayComponent } from './components/overlay/overlay.component';
//primeng
import { ConfirmationService, MessageService } from 'primeng/api';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { DialogService, DynamicDialogModule } from 'primeng/dynamicdialog';
import { FieldsetModule } from 'primeng/fieldset';
import { ImageModule } from 'primeng/image';
import { MessagesModule } from 'primeng/messages';
import { MultiSelectModule } from 'primeng/multiselect';
import { TabMenuModule } from 'primeng/tabmenu';
import { ToastModule } from 'primeng/toast';
import { TooltipModule } from 'primeng/tooltip';
import { DialogoComponent } from './components/shared/dialogo/dialogo.component';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FormComponent,
    DataComponent,
    OverlayComponent,
    HomeComponent,
    DialogoComponent,

  ],
  imports: [
    BrowserModule,
    routing,
    BrowserAnimationsModule,
    TabMenuModule,
    ImageModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    AutoCompleteModule,
    CalendarModule,
    CheckboxModule,
    ColorPickerModule,
    DropdownModule,
    MultiSelectModule,
    ConfirmDialogModule,
    ToastModule,
    MessagesModule,
    FieldsetModule,
    DialogModule,
    DynamicDialogModule,
    TooltipModule,
    TableModule,
    InputTextModule,
  ],
  providers: [
    appRoutingProviders,
    MessageService,
    ConfirmationService,
    DialogService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
