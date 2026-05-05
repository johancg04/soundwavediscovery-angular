import { Album } from '../domain/model/album.entity';
import { AlbumResource, AlbumResponse } from './album-response';

export class AlbumAssembler {

  static toEntityFromResource(resource: AlbumResource): Album {
    return {
      name: resource.name,
      url: resource.url,
      artist: {
        name: resource.artist?.name ?? '',
        url: resource.artist?.url ?? '',
      },
      image: resource.image?.map(img => ({
        '#text': img['#text'] ?? '',
        size: img.size ?? '',
      })) ?? [],
      attr: {
        rank: resource.attr?.rank ?? '',
      },
    };
  }

  static toEntitiesFromResponse(response: AlbumResponse[]): Album[] {
    return response.map(album => this.toEntityFromResource({
      ...album,
      attr: album['@attr'],
    }));
  }
}
