import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicbrainzService {
  apiUrl = 'http://localhost:1337/jazz-artists';

  constructor(private http: HttpClient) { }

  getJazzArtists() {
    return this.http.get(this.apiUrl);
  }
}
