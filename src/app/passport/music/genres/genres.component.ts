import { Component, Input } from '@angular/core';
import { GenreType } from 'src/app/types';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  @Input() genres: GenreType[] = [];

  getGenreColor(genreName: string): string {
    const colorMap: { [key: string]: string } = {
      // Rock & Alternative
      'Rock': '#4ECDC4',
      'Alternative Rock': '#45B7D1',
      'Alternative Metal': '#96CEB4',
      'Nu Metal': '#FF6B6B',
      'Indie': '#FFEAA7',
      'Emo': '#FF6B9D',
      'Pop Punk': '#FF9F43',
      'Rap Metal': '#A55EEA',
      'Indie Rock': '#26DE81',
      'Metal': '#2C2C54',
      'Grunge': '#8B4513',
      'Post-grunge': '#CD853F',
      'Garage Rock': '#D2691E',
      'Punk': '#DC143C',
      'Hardcore Punk': '#B22222',
      'Hardcore': '#8B0000',
      'Blues Rock': '#4169E1',
      
      // Electronic
      'Electronic': '#FF6B6B',
      'Vaporwave': '#FF69B4',
      'Trance': '#00CED1',
      'Progressive Trance': '#20B2AA',
      'Progressive House': '#32CD32',
      'French House': '#FFD700',
      'Synthwave': '#FF6B9D',
      'Soundtrack': '#9370DB',
      'Chillwave': '#87CEEB',
      'Synthpop': '#FF1493',
      'Electro': '#00BFFF',
      
      // Other
      'Classical': '#FFEAA7',
      'Sea Shanties': '#4682B4',
      'Stoner Rock': '#8FBC8F'
    };
    
    return colorMap[genreName] || '#374fff'; // Default color if genre not found
  }
}
