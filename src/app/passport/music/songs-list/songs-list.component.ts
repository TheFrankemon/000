import { Component, Input } from '@angular/core';
import { SongType } from 'src/app/types';

@Component({
  selector: 'app-songs-list',
  templateUrl: './songs-list.component.html',
  styleUrls: ['./songs-list.component.scss']
})
export class SongsListComponent {
  @Input() songs: SongType[] = [];

  isEdgeItem(index: number): boolean {
    const items = document.querySelectorAll('.song-item');
    const item = items[index];
    
    if (!item) return false;
    
    const rect = item.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const edgeThreshold = 300;
    const distanceFromRight = viewportWidth - rect.right;
    
    return distanceFromRight < edgeThreshold;
  }
}
