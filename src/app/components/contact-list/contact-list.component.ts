import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ContactService} from "../../services/contact.service";
import {Contact} from "../../models/Contact";

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  public contacts:Contact[] = [] as Contact[];
  public errorMessage:string | undefined;

  @Output() sendContact = new EventEmitter();

  constructor(private contactService:ContactService) { }

  ngOnInit(): void {
    this.contactService.getAllContacts().subscribe((data) => {
      this.contacts = data;
    }, (error) => {
      this.errorMessage = error;
    })
  }

 public selectContact(contact: Contact) {
    this.sendContact.emit(contact);
  }
}
