import {environment} from '../../../environments/environment';
import {Injectable} from '@angular/core';

@Injectable({providedIn: 'root'})

export class LogoDevApi {
  baseUrl= environment.logoProviderApiBaseUrl;
  apikey = environment.logoProviderPublishableKey;

  constructor() {}

  getUrlToLogo(url: string): string{
    return `${this.baseUrl}${new URL(url).hostname}?token=${this.apikey}`;
  }
}
