import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Contacts, Contact, ContactField, ContactName, ContactFieldType, ContactAddress, ContactFindOptions } from 'ionic-native';

@Component({
  selector: 'page-contacts-test',
  templateUrl: 'contacts-test.html'
})
export class ContactsTestPage {

  contactToBeFound: any;
  contactsFound: Array<any>;
  search: boolean;
  selects: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contactToBeFound = '';
    this.contactsFound = new Array<any>();
    this.search = false;
    this.selects = new Array<any>();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContactsTestPage');
  }

  selectAll(check: any) {
    //console.log(check.checked);
    let size: number = this.contactsFound.length;
    for (let i = 0; i < size; i++) {
      this.contactsFound[i].checked = check.checked;
      //console.log(JSON.stringify(this.contactsFound[i]));
    }
  }

  save() {
    //this.navCtrl.push(AddcontactPage);
  }

  getItems(ev: any) {
    // this.find('');
    // set val to the value of the searchbar
    let val = ev.target.value;
    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      console.log(val);
      this.find(val);
    }
  }

  find(val: string): void {
    this.search = false;

    Contacts.find(["phoneNumbers", "displayName", "givenName"], { filter: val })
      .then((contacts) => {
        this.contactsFound = contacts;
        let size: number = this.contactsFound.length;
        // for (let i = 0; i < size; i++) {
        //   this.contactsFound[i].checked = false;
        // }
        //alert(JSON.stringify(contacts[0]));
        console.log(JSON.stringify(contacts));
      }, (err) => {
        console.log(JSON.stringify(err));
      });

    if (this.contactsFound.length == 0) {
      this.contactsFound.push({ displayName: 'Contato não encontrado' });
    }

    this.search = true;
  };



}
