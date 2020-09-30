import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SheptechContactService {
  private _endpoint: string = 'https://mailthis.to/drescherwe@vcu.edu';
  constructor(private _http: HttpClient) { }

  sendContactEmail(input) {
    return this._http.post(this._endpoint, input, {responseType: 'text'});
  }
}
