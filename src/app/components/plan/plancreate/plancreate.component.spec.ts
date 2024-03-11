import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlancreateComponent } from './plancreate.component';

describe('PlancreateComponent', () => {
  let component: PlancreateComponent;
  let fixture: ComponentFixture<PlancreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlancreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlancreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
