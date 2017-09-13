import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenLoginComponent } from './template-driven-login.component';

describe('TemplateDrivenLoginComponent', () => {
  let component: TemplateDrivenLoginComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
