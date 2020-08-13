import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import {
  Device,
  Status,
  STATUS,
  STATUS_COLORS
} from '../../models/device.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.scss']
})
export class DeviceComponent implements OnInit {
  status = STATUS;
  device: Device;

  constructor(private route: ActivatedRoute, private apiService: ApiService) {}

  ngOnInit(): void {
    let deviceId = +this.route.snapshot.paramMap.get('deviceId');
    this.apiService.getDevices().subscribe((devices) => {
      this.device = devices.filter((device) => {
        return device.id === deviceId;
      })[0];
    });
  }

  getColor(index) {
    return STATUS_COLORS[index];
  }
}
