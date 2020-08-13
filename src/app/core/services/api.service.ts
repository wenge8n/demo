import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Device, DEVICES } from '../../models/device.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  devices: Array<Device>; // should implement i.e NgRx

  constructor() {}

  getDevices(): Observable<Device[]> {
    return of(DEVICES);
  }
}
