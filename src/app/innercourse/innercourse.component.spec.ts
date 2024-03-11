import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InnercourseComponent } from './innercourse.component';

describe('InnercourseComponent', () => {
  let component: InnercourseComponent;
  let fixture: ComponentFixture<InnercourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InnercourseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InnercourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
