import { environment } from '../../../environments/environment';
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlbumListResponse } from './album-response';
import { map, Observable } from 'rxjs';
import { AlbumAssembler } from './album-assembler';
import { Album } from '../domain/model/album.entity';

@Injectable({ providedIn: 'root' })

export class AlbumApi {
  private baseUrl = environment.soundwaveProviderApiBaseUrl;
  private endpoint = environment.soundwaveProviderSoundwaveEndpointPath;

  private http = inject(HttpClient);

  getAlbums(): Observable<Album[]> {
    return this.http.get<AlbumListResponse>(`${this.baseUrl}${this.endpoint}`).pipe(
      map(response => AlbumAssembler.toEntitiesFromResponse(response.albums.album))
    );
  }
}
