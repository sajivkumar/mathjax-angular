import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MathjaxLibComponent } from './mathjax-lib.component';

describe('MathjaxLibComponent', () => {
  let component: MathjaxLibComponent;
  let fixture: ComponentFixture<MathjaxLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MathjaxLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MathjaxLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
