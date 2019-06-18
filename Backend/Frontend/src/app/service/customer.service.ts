import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Customer} from '../dto/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCustomer(): Observable<Customer[]>{
    return this.http.get<Customer[]>('http://localhost:8081/ang_pos/customer');
  }
}
