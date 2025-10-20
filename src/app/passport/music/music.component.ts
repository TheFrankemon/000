import { Component, OnInit } from '@angular/core';
import { JsonHttpService } from 'src/app/json-http.service';
import { MusicType, ArtistType, SongType, GenreType } from 'src/app/types';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {
  musicData: MusicType | null = null;
  topArtists: ArtistType[] = [];
  allSongs: SongType[] = [];
  genres: GenreType[] = [];
  loading = true;
  activeTab: 'artists' | 'songs' | 'genres' = 'artists';
  selectedArtist: ArtistType | null = null;

  constructor(
    private jsonHttpService: JsonHttpService,
  ) { }

  async ngOnInit() {
    this.musicData = await this.jsonHttpService.getMusicData();
    
    if (this.musicData) {
      this.genres = this.musicData.genres;
      this.topArtists = this.musicData.artists.slice(0, 20);
      this.allSongs = this.musicData.songs;
    }

    this.loading = false;
  }

  onArtistHover(artist: ArtistType | null) {
    this.selectedArtist = artist;
  }
}
