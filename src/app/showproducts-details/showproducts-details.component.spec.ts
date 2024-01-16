import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowproductsDetailsComponent } from './showproducts-details.component';

describe('ShowproductsDetailsComponent', () => {
  let component: ShowproductsDetailsComponent;
  let fixture: ComponentFixture<ShowproductsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowproductsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ShowproductsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
