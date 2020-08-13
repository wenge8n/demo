import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Device } from '../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:3001/api"

  constructor(public http: HttpClient) { }

  get(url) {
    let apiURL = this.baseURL + url;

    return this.http.get(apiURL);
  }

  post(url, param) {
    let apiURL = this.baseURL + url;

    return this.http.post(apiURL, param);
  }
}
