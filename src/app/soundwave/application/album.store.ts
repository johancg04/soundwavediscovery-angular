import { computed, inject, Injectable, signal } from '@angular/core';
import { Album } from '../domain/model/album.entity';
import { AlbumApi } from '../infrastructure/album-api';

@Injectable({ providedIn: 'root' })

export class AlbumStore {
  private albumsSignal = signal<Album[]>([]);
  private albumsApi = inject(AlbumApi);

  readonly albums = computed(() => this.albumsSignal());

  private _currentAlbum!: Album;

  get currentAlbum(): Album {
    return this._currentAlbum;
  }

  set currentAlbum(value: Album) {
    this._currentAlbum = value;
  }

  loadAlbums() {
    if (this.albumsSignal().length === 0) {
      this.albumsApi.getAlbums().subscribe(albums => {
        this.albumsSignal.set(albums);
        this._currentAlbum = albums[0];
      });
    }
  }
}
