import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncludeTemplateComponent } from './include-template.component';

describe('IncludeTemplateComponent', () => {
  let component: IncludeTemplateComponent;
  let fixture: ComponentFixture<IncludeTemplateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncludeTemplateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncludeTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
