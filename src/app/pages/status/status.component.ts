import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Device, STATUS, STATUS_COLORS } from '../../models/device.model';
import { ApiService } from '../../core/services/api.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  status = STATUS;
  devices: Device[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    const status = +this.route.snapshot.paramMap.get('status');
    this.apiService.post('/getDevices', { status: status }).subscribe((res: any) => {
      console.log(res)
      if (res.success) {
        this.devices = res.data;
      }
    });
  }

  getColor(index) {
    return STATUS_COLORS[index];
  }

  navigateToDevice(deviceId: number) {
    this.router.navigate([`/devices/${deviceId}`]);
  }
}
