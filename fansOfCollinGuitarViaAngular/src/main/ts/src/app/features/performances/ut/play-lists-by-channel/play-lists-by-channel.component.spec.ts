import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayListsByChannelComponent } from './play-lists-by-channel.component';

describe('PlayListsByChannelComponent', () => {
  let component: PlayListsByChannelComponent;
  let fixture: ComponentFixture<PlayListsByChannelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayListsByChannelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayListsByChannelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
