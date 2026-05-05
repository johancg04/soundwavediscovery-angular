export interface AlbumImage {
  '#text': string;
  size: string;
}

export interface AlbumArtist {
  name: string;
  url: string;
}

export interface AlbumAttr {
  rank: string;
}

export interface AlbumResponse {
  name: string;
  url: string;
  artist: AlbumArtist;
  image: AlbumImage[];
  '@attr': AlbumAttr;
}

export interface AlbumResource {
  name: string;
  url: string;
  artist: AlbumArtist;
  image: AlbumImage[];
  attr: AlbumAttr;
}

export interface AlbumListResponse {
  albums: {
    album: AlbumResponse[];
  };
}
