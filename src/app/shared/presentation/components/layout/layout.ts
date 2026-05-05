import {Component, inject, OnInit} from '@angular/core';
import {MatSidenavContainer, MatSidenavContent} from '@angular/material/sidenav';
import {MatToolbar} from '@angular/material/toolbar';
import {LanguageSwitcher} from '../language-switcher/language-switcher';
import {Footer} from '../footer/footer';
import {TranslatePipe} from '@ngx-translate/core';
import {AlbumStore} from '../../../../soundwave/application/album.store';
import {LogoDevApi} from '../../../infrastructure/logo-dev-api';
import {environment} from '../../../../../environments/environment';
import {AlbumList} from '../../../../soundwave/presentation/components/album-list/album-list';

@Component({
  selector: 'app-layout',
  imports: [
    MatSidenavContainer,
    MatSidenavContent,
    MatToolbar,
    LanguageSwitcher,
    Footer,
    TranslatePipe,
    AlbumList
  ],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout implements OnInit {
  protected store = inject(AlbumStore)
  protected readonly albums = this.store.albums
  private logoApi = inject(LogoDevApi)
  protected logoUrl = ''

  constructor() {
    this.logoUrl = this.logoApi.getUrlToLogo(environment.soundwaveProviderApiBaseUrl);
  }
    ngOnInit(): void {
      this.store.loadAlbums()
    }
}
