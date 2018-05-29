import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileAsSourceForJsonComponent } from './file-as-source-for-json.component';

describe('FileAsSourceForJsonComponent', () => {
  let component: FileAsSourceForJsonComponent;
  let fixture: ComponentFixture<FileAsSourceForJsonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileAsSourceForJsonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileAsSourceForJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
