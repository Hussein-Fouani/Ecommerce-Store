import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewImagesDiaglogComponent } from './view-images-diaglog.component';

describe('ViewImagesDiaglogComponent', () => {
  let component: ViewImagesDiaglogComponent;
  let fixture: ComponentFixture<ViewImagesDiaglogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ViewImagesDiaglogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewImagesDiaglogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
