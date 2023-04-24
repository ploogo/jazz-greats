import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MusicbrainzService {
  apiUrl = 'https://musicbrainz.org/ws/2/';

  constructor(private http: HttpClient) { }

  searchArtists(query: string) {
    const searchUrl = `${this.apiUrl}artist/?query=${query}&fmt=json`;
    return this.http.get(searchUrl);
  }
}
