import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../../models/contact.model';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact: Contact = { name: '', phones: [], emails: [], addresses: [] };
  id: number = 0;

  constructor(
    private api: ApiService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = +this.route.snapshot.params['id'];
    if (this.id) {
      this.api.getContact(this.id).subscribe(data => {
        this.contact = data;
      });
    }
  }

  saveContact(): void {
    if (!this.isValidContact()) {
      return;
    }
    if (this.id) {
      this.api.updateContact(this.id, this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    } else {
      this.api.createContact(this.contact).subscribe(() => {
        this.router.navigate(['/contacts']);
      });
    }
  }

  isValidContact(): boolean {
    for (let phone of this.contact.phones) {
      if (!/^\d{8}$/.test(phone.phone)) {
        alert('Teléfono debe ser de 8 dígitos.');
        return false;
      }
    }
    for (let email of this.contact.emails) {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.email)) {
        alert('Email debe tener un formato válido.');
        return false;
      }
    }
    return true;
  }

  regresar(){
    this.router.navigate(['/contacts']);
  }

  removePhone(index: number): void {
    this.contact.phones.splice(index, 1);
  }

  removeEmail(index: number): void {
    this.contact.emails.splice(index, 1);
  }

  removeAddress(index: number): void {
    this.contact.addresses.splice(index, 1);
  }

}
