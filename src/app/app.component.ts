import { Component } from '@angular/core';
import { MusicbrainzService } from './musicbrainz.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'jazz-history';
  artists: any[] = [];

  constructor(private musicbrainzService: MusicbrainzService) {
    this.fetchJazzArtists();
  }

  fetchJazzArtists() {
    this.musicbrainzService.searchArtists('jazz').subscribe((data: any) => {
      this.artists = data.artists;
    });
  }
}
