import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';

import { Contact } from '../shared/models/contact.model';
import { ContactType } from '../shared/models/contact-type.enum';

@Injectable()
export class ContactService {
  private static contacts: Contact[] = null;
  private serviceUrl = './mock-api/contacts/contacts.json';
  private newContactId = 10;

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    if (ContactService.contacts == null) {
      return this.http.get<Contact[]>(this.serviceUrl)
      .do(data => console.log('All: ' + JSON.stringify(data)))
      .do(data => ContactService.contacts = data)
      .catch(this.handleError);
    }

    return Observable.of(ContactService.contacts);
  }

  createContact(newContact: Contact) {
    newContact.id = this.newContactId++;
//  newContact.numberCode = String(newContact.id).padStart(3, '0');

    ContactService.contacts.push(newContact);
  }

  deleteContact(contact: Contact) {
    const deleteIndex = ContactService.contacts.indexOf(contact);

    if (deleteIndex > -1) {
      ContactService.contacts.splice(deleteIndex, 1);
    }
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';

    if (err.error instanceof Error) {
        // A client-side or network error occurred. Handle it accordingly.
        errorMessage = `An error occurred: ${err.error.message}`;
    } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }

    console.error(errorMessage);
    return Observable.throw(errorMessage);
  }

}
