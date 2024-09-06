import { Injectable } from '@angular/core';
import { Invoice } from '../models/invoice';
import { invoiceData } from '../data/invoice.data';
<<<<<<< HEAD
=======
import { Item } from '../models/item';
>>>>>>> master

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  private invoice: Invoice = invoiceData;

  constructor() { }

  getInvoice(): Invoice {
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

<<<<<<< HEAD
=======
  remove(id: number): Invoice {
    this.invoice.items = this.invoice.items.filter(item => item.id != id);
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

  save(item: Item):Invoice {
    this.invoice.items = [... this.invoice.items, item]
    const total = this.calculateTotal();
    return {... this.invoice, total};
  }

>>>>>>> master
  calculateTotal() {
    //let total = 0;
    //this.invoice.items.forEach(item => {
    //  total += item.total();
    //});
    //return total;
<<<<<<< HEAD
    return this.invoice.items.reduce((total, item) => total + item.total(), 0)
=======
    return this.invoice.items.reduce((total, item) => total + (item.price * item.quantity), 0)
>>>>>>> master
  }
}
