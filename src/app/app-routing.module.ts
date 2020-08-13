import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OverviewComponent } from './pages/overview/overview.component';
import { StatusComponent } from './pages/status/status.component';
import { DeviceComponent } from './pages/device/device.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/devices',
    pathMatch: 'full'
  },
  {
    path: 'devices',
    component: OverviewComponent
  },
  {
    path: 'devices/status/:status',
    component: StatusComponent
  },
  {
    path: 'devices/:deviceId',
    component: DeviceComponent
  },
  // Fallback when no prior routes is matched
  { path: '**', redirectTo: '/devices', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
