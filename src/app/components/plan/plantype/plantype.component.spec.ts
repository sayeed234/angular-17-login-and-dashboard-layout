import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantypeComponent } from './plantype.component';

describe('PlantypeComponent', () => {
  let component: PlantypeComponent;
  let fixture: ComponentFixture<PlantypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantypeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlantypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
