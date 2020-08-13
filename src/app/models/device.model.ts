import { Deserializable } from './deserializable.model';

export const STATUS = ['Critical', 'Degraded', 'OK', 'Inactive', 'Unknown'];

export const STATUS_COLORS = [
  'deeppink',
  'orange',
  'limegreen',
  'black',
  'gray',
];

export enum Status {
  Critical = 0,
  Degraded,
  OK,
  Inactive,
  Unknown,
}

export class Device {
  id: number;
  name?: string;
  vendor?: string;
  status?: Status;
}

// mock
export const DEVICES: Array<Device> = [
  {
    id: 0,
    name: 'Galaxy Z Fold2 5G',
    vendor: 'Samsung',
    status: Status.Critical,
  },
  {
    id: 1,
    name: 'Galaxy Note20 Ultra 5G',
    vendor: 'Samsung',
    status: Status.Degraded,
  },
  {
    id: 2,
    name: 'Galaxy Note20 Ultra',
    vendor: 'Samsung',
    status: Status.Inactive,
  },
  {
    id: 3,
    name: 'Galaxy A01 Core',
    vendor: 'Samsung',
    status: Status.Critical,
  },
  { id: 4, name: 'Galaxy S20+', vendor: 'Samsung', status: Status.OK },
  { id: 5, name: 'Enjoy 20 Pro', vendor: 'Huawei', status: Status.OK },
  { id: 6, name: 'P40 lite 5G', vendor: 'Huawei', status: Status.Unknown },
  { id: 7, name: 'Y8s', vendor: 'Huawei', status: Status.Degraded },
  { id: 8, name: 'Y6p', vendor: 'Huawei', status: Status.Critical },
  { id: 9, name: 'nova 7 5G', vendor: 'Huawei', status: Status.OK },
  { id: 10, name: 'P40', vendor: 'Huawei', status: Status.Unknown },
  { id: 11, name: 'Mate X', vendor: 'Huawei', status: Status.Inactive },
  { id: 12, name: 'iPhone SE', vendor: 'Apple', status: Status.Inactive },
  { id: 13, name: 'iPad Pro 12.9', vendor: 'Apple', status: Status.OK },
  {
    id: 14,
    name: 'iPhone 11 Pro Max',
    vendor: 'Apple',
    status: Status.Critical,
  },
  { id: 15, name: 'iPhone 11 Pro', vendor: 'Apple', status: Status.OK },
  { id: 16, name: 'iPhone XS', vendor: 'Apple', status: Status.Inactive },
  { id: 17, name: 'iPhone 8 Plus', vendor: 'Apple', status: Status.Critical },
  { id: 18, name: 'Mi 10 Ultra', vendor: 'Xiaomi', status: Status.Degraded },
  { id: 19, name: 'Redmi 9 Prime', vendor: 'Xiaomi', status: Status.OK },
  { id: 20, name: 'Redmi 9C', vendor: 'Xiaomi', status: Status.Inactive },
  { id: 21, name: 'Mi 10 Pro 5G', vendor: 'Xiaomi', status: Status.OK },
  { id: 22, name: 'S1 Prime', vendor: 'vivo', status: Status.OK },
  { id: 23, name: 'S7 5G', vendor: 'vivo', status: Status.Unknown },
  { id: 24, name: 'iQOO U1', vendor: 'vivo', status: Status.OK },
  { id: 25, name: 'Y51s', vendor: 'vivo', status: Status.Inactive },
  { id: 26, name: 'V19 Neo', vendor: 'vivo', status: Status.OK },
];
