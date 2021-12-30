import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjDialogComponent } from './proj-dialog.component';

describe('ProjDialogComponent', () => {
  let component: ProjDialogComponent;
  let fixture: ComponentFixture<ProjDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
