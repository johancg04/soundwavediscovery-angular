export class AlbumImage {
  '#text': string = '';
  size: string = '';
}

export class AlbumArtist {
  name: string = '';
  url: string = '';
}

export class AlbumAttr {
  rank: string = '';
}

export class Album {
  name: string = '';
  url: string = '';
  artist: AlbumArtist = new AlbumArtist();
  image: AlbumImage[] = [];
  attr: AlbumAttr = new AlbumAttr();
}
