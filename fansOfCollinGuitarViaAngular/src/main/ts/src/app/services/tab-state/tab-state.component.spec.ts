import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabStateComponent } from './tab-state.component';

describe('TabStateComponent', () => {
  let component: TabStateComponent;
  let fixture: ComponentFixture<TabStateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabStateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
