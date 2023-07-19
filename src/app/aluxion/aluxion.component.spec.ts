import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AluxionComponent } from './aluxion.component';

describe('AluxionComponent', () => {
  let component: AluxionComponent;
  let fixture: ComponentFixture<AluxionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AluxionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AluxionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
