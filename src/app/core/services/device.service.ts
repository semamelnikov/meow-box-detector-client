import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BASE_URL } from '../../../environments/environment';
import { Token } from '../model/device.model';

const SOUND_URL = '/device/sound';

@Injectable({
  providedIn: 'root'
})
export class DeviceService {

  readonly userTokenKey = 'userToken';

  constructor(private http: HttpClient) {
  }

  getUserToken(): string {
    return localStorage.getItem(this.userTokenKey);
  }

  changeDeviceSoundStatus() {
    const token = { value: this.getUserToken() } as Token;
    return this.http.post(BASE_URL + SOUND_URL + '/change', token);
  }

  getDeviceSoundStatus() {
    const token = { value: this.getUserToken() } as Token;
    return this.http.post(BASE_URL + SOUND_URL + '/status', token);
  }
}
