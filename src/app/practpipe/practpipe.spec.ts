import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practpipe } from './practpipe';

describe('Practpipe', () => {
  let component: Practpipe;
  let fixture: ComponentFixture<Practpipe>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practpipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practpipe);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
