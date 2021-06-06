import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForLocationService {

  constructor() { }
  getLocationService(): Promise<any> {
    return new Promise((resolve, _reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude })

      })
    })
  }
}
