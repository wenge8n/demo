import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {
  Device,
  Status,
  STATUS,
  STATUS_COLORS
} from '../../models/device.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  status = STATUS;
  devices: Device[];
  totalCount: number;
  counts: number[];

  constructor(private router: Router, private apiService: ApiService) {}

  ngOnInit(): void {
    this.getDevices();
  }

  getDevices() {
    this.apiService.getDevices().subscribe((devices) => {
      this.devices = devices;
      this.totalCount = devices.length;
      let critical = 0,
        degraded = 0,
        ok = 0,
        inactive = 0,
        unknown = 0;
      this.devices.forEach((device) => {
        switch (device.status) {
          case Status.Critical:
            critical++;
            break;
          case Status.Degraded:
            degraded++;
            break;
          case Status.OK:
            ok++;
            break;
          case Status.Inactive:
            inactive++;
            break;
          case Status.Unknown:
            unknown++;
            break;
          default:
            break;
        }
      });
      this.counts = [critical, degraded, ok, inactive, unknown];
    });
  }

  getColor(index) {
    return STATUS_COLORS[index];
  }

  getWidth(index) {
    return (this.counts[index] * 100) / this.totalCount + '%';
  }

  navigateToStatus(state) {
    this.router.navigate([`devices/status/${state}`]);
  }
}
