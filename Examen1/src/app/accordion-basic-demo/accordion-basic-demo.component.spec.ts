import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionBasicDemoComponent } from './accordion-basic-demo.component';

describe('AccordionBasicDemoComponent', () => {
  let component: AccordionBasicDemoComponent;
  let fixture: ComponentFixture<AccordionBasicDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccordionBasicDemoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionBasicDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
