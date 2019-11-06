import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule, 
  MatSidenavModule, 
  MatIconModule, 
  MatFormFieldModule,
  MatDialogModule,
  MAT_DIALOG_DATA,
  MatInputModule } from '@angular/material';
import { DevExtremeModule } from 'devextreme-angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



import { ListGridviewComponent } from './list-gridview/list-gridview.component';
import { NewItemModalComponent } from './modals/new-item-modal/new-item-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ListGridviewComponent,
    NewItemModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    DevExtremeModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatFormFieldModule,
    MatDialogModule,
    MatInputModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [
    NewItemModalComponent
  ]
})
export class AppModule { }
