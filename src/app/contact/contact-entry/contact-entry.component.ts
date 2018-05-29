import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { Contact, ContactType } from '../../shared/models';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-entry',
  templateUrl: './contact-entry.component.html',
  styleUrls: ['./contact-entry.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactEntryComponent implements OnInit {
  contactEntryForm: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private contactService: ContactService
  ) { }

  ngOnInit() {
    this.contactEntryForm = this.formBuilder.group({
      'name':             ['Staples', Validators.required],
      'description':      ['Office supply store'],
      'accountNumber':    ['123'],
      'address':          ['4240 S Arizona Ave, Chandler, AZ 85248'],
      'type':             ['Vendor', Validators.required],
      'defaultCategory':  ['Office Supplies']
    });
  }

  saveContact() {
    if (!this.contactEntryForm.valid) {
      alert(`Some of your entries are missing or invalid, please correct them`);
      return;
    }

    const contact: Contact = {
      'id' : 0,

      'name' : this.contactEntryForm.value.name,
      'description' : this.contactEntryForm.value.description,
      'accountNumber' : this.contactEntryForm.value.accountNumber,

      'address' : this.contactEntryForm.value.address,
      'type' : ContactType.Vendor,
      'defaultCategory' : this.contactEntryForm.value.defaultCategory,

      'createdAt' : new Date(),
      'updatedAt' : new Date()
    };

    this.contactService.createContact(contact);
    this.router.navigateByUrl('/contacts');
  }
}
