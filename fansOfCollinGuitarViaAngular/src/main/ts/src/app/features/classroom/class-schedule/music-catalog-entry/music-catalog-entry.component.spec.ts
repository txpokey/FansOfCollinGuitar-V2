import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicCatalogEntryComponent } from './music-catalog-entry.component';

describe('MusicCatalogEntryComponent', () => {
  let component: MusicCatalogEntryComponent;
  let fixture: ComponentFixture<MusicCatalogEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicCatalogEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicCatalogEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
