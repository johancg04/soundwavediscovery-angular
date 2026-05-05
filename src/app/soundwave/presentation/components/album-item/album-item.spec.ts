import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumItem } from './album-item';

describe('AlbumItem', () => {
  let component: AlbumItem;
  let fixture: ComponentFixture<AlbumItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AlbumItem],
    }).compileComponents();

    fixture = TestBed.createComponent(AlbumItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
