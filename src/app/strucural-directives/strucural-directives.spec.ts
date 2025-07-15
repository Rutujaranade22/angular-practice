import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrucuralDirectives } from './strucural-directives';

describe('StrucuralDirectives', () => {
  let component: StrucuralDirectives;
  let fixture: ComponentFixture<StrucuralDirectives>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StrucuralDirectives]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrucuralDirectives);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
