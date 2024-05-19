import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/compat/database'
import { Enterprise } from './enterprise';
import { City } from './city';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {
  enterpriseListRef?: AngularFireList<any>;
  cityListRef?: AngularFireList<any>;
  bdRef?: AngularFireObject<any>;

  constructor(private db: AngularFireDatabase) { }

  createEnterprise(enterprise: Enterprise) {
    return this.enterpriseListRef?.push({
      name: enterprise.name,
      date: enterprise.date,
      address: enterprise.address,
      type: enterprise.type,
      occ: enterprise.occ,
      city_id: enterprise.city_id
    });
  }
  
  createCity(city: City) {
    return this.cityListRef?.push({
      id: city.id,
      name: city.name
    });
  }

  getRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + id);
    console.log("bdRef=" + this.bdRef.snapshotChanges());
    return this.bdRef;
  }

  // true - enterprise
  // false - city
  getRecordList(bd: string, op: boolean) {
    if (op) {
      this.enterpriseListRef = this.db.list('/' + bd);
      return this.enterpriseListRef;
    } else {
      this.cityListRef = this.db.list('/' + bd);
      return this.cityListRef;
    }
  }

  updateEnterprise(id: string, enterprise: Enterprise, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      name: enterprise.name,
      date: enterprise.date,
      address: enterprise.address,
      type: enterprise.type,
      occ: enterprise.occ,
      city_id: enterprise.city_id
    });
  }

  updateCity(id: string, city: City, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    return this.bdRef.update({
      id: city.id,
      name: city.name
    });
  }

  deleteRecord(id: string, bd: string) {
    this.bdRef = this.db.object('/' + bd + '/' + id);
    this.bdRef.remove();
  }
}
