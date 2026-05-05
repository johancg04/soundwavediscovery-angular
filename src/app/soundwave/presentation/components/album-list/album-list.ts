import { Component, input } from '@angular/core';
import { Album } from '../../../domain/model/album.entity';
import { AlbumItem } from '../album-item/album-item';

@Component({
  selector: 'app-album-list',
  imports: [AlbumItem],
  templateUrl: './album-list.html',
  styleUrl: './album-list.css',
})
export class AlbumList {
  albums = input.required<Array<Album>>();
}
