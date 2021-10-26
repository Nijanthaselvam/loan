import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoancalComponent } from './loancal.component';

describe('LoancalComponent', () => {
  let component: LoancalComponent;
  let fixture: ComponentFixture<LoancalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoancalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoancalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
