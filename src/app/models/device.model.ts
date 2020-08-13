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
