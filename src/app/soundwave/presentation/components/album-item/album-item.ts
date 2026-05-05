import { Component, inject, input } from '@angular/core';
import { Album } from '../../../domain/model/album.entity';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader, MatCardImage,
  MatCardSubtitle,
  MatCardTitle,
  MatCardTitleGroup
} from '@angular/material/card';
import { TranslatePipe } from '@ngx-translate/core';
import { MatButton, MatIconButton } from '@angular/material/button';

@Component({
  selector: 'app-album-item',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitleGroup,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatCardActions,
    TranslatePipe,
    MatButton,
    MatIconButton,
    MatCardImage,
  ],
  templateUrl: './album-item.html',
  styleUrl: './album-item.css',
})
export class AlbumItem {
  album = input.required<Album>();

  private snackBar = inject(MatSnackBar);

  protected getAlbumImage(): string {
    return this.album().image.find(img => img.size === 'extralarge')?.['#text'] ?? '';
  }

  async share() {
    const shareUrl = this.album()?.url;
    const shareData = {
      title: `${this.album()?.name} — ${this.album()?.artist.name}`,
      url: shareUrl,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        this.snackBar.open('Shared successfully!', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Sharing failed', 'Close', { duration: 3000 });
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        this.snackBar.open('URL copied to clipboard', 'Close', { duration: 3000 });
      } catch (error) {
        this.snackBar.open('Copying failed', 'Close', { duration: 3000 });
      }
    }
  }
}
