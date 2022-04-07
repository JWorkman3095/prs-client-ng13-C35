import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const configFile = "./assets/config.json";

@Injectable({
  providedIn: 'root'
})
export class AppInitService {

  config: any;

  constructor(
    private http: HttpClient
  ) { }

  // app-init.service
  getSettings() {
    this.http.get(configFile).subscribe(
      (res) => {
        console.debug(res);
        this.config = res;
      }
    )
  }

}
