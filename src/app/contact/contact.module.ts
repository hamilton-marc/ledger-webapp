import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ContactListComponent } from './contact-list.component';
import { ContactService } from './contact.service';
import { ContactEntryComponent } from './contact-entry/contact-entry.component';

const contactRouting: ModuleWithProviders = RouterModule.forChild([
  { path: 'contacts', component: ContactListComponent },
  { path: 'contact', component: ContactEntryComponent }
]);

@NgModule({
  imports: [
    CommonModule,
    contactRouting,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContactListComponent,
    ContactEntryComponent
  ],
  providers: [
    ContactService
  ]
})
export class ContactModule { }
