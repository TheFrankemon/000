import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ArtistType } from 'src/app/types';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss']
})
export class ArtistsComponent {
  @Input() artists: ArtistType[] = [];
  @Input() selectedArtist: ArtistType | null = null;
  @Output() artistHover = new EventEmitter<ArtistType | null>();

  getArtistBarWidth(index: number) {
    const widths = [100, 85, 90, 125, 95, 80, 88, 70, 92, 78, 87, 82, 89, 76, 91, 93, 96, 79, 88, 81];
    return widths[index % widths.length];
  }

  onArtistHover(artist: ArtistType | null) {
    this.artistHover.emit(artist);
  }

  getBarColor(index: number): string {
    const colors = [
      '#EF2564', // Hot Pink
      '#CE4DF9', // Purple
      '#8BDD44', // Green
      '#F8C514', // Yellow
      '#28C1F6', // Blue
      '#EF2564', // Hot Pink
      '#CE4DF9', // Purple
      '#8BDD44', // Green
      '#F8C514', // Yellow
      '#28C1F6', // Blue
      '#EF2564', // Hot Pink
      '#CE4DF9', // Purple
      '#8BDD44', // Green
      '#F8C514', // Yellow
      '#28C1F6', // Blue
      '#EF2564', // Hot Pink
      '#CE4DF9', // Purple
      '#8BDD44', // Green
      '#F8C514', // Yellow
      '#28C1F6'  // Blue
    ];
    return colors[index % colors.length];
  }
}
