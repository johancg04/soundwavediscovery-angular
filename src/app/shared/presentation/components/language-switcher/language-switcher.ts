import { Component } from '@angular/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [
    MatButtonToggleGroup,
    MatButtonToggle
  ],
  templateUrl: './language-switcher.html',
  styleUrl: './language-switcher.css',
})
export class LanguageSwitcher {
  currentLanguage : string;
  languages = ['en','es'];

  constructor(private translate: TranslateService) {
    this.translate.use('en')
    this.currentLanguage = translate.getCurrentLang();
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}
