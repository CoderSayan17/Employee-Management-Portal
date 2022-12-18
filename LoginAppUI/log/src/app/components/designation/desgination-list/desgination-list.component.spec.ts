import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesginationListComponent } from './desgination-list.component';

describe('DesginationListComponent', () => {
  let component: DesginationListComponent;
  let fixture: ComponentFixture<DesginationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesginationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesginationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
