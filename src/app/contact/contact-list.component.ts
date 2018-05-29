import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { Router } from '@angular/router';

import { Contact } from '../shared/models/contact.model';
import { ContactType } from '../shared/models/contact-type.enum';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = <Contact[]>[];
// ContactType: typeof ContactType = ContactType;

  constructor(
    private router: Router,
    private contactService: ContactService
  ) { }

  refresh() {
    this.contactService.getContacts()
      .subscribe(contacts => this.contacts = contacts,
                 error => console.log(error),
                 () => {});
  }

  ngOnInit() {
    this.refresh();
  }

  onNewContact() {
    this.router.navigateByUrl('/contact');
  }

  onDeleteContact(contact: Contact) {
    this.contactService.deleteContact(contact);
    this.refresh();
  }

}
