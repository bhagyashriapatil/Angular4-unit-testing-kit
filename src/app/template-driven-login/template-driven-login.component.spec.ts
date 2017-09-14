import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';                //debugger come from angular/core
import { By } from '@angular/platform-browser'; 
import { TemplateDrivenLoginComponent } from './template-driven-login.component';
import { FormsModule, ReactiveFormsModule }  from '@angular/forms';

describe('TemplateDrivenLoginComponent', () => {
  let component: TemplateDrivenLoginComponent;
  let fixture: ComponentFixture<TemplateDrivenLoginComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;
  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenLoginComponent ],
      imports: [ReactiveFormsModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenLoginComponent);
    component = fixture.componentInstance;
        
    fixture.detectChanges();
  });

  it("called Add mtd",()=>{
    // arrange
    const initialValue = component.data;
    console.log("component log here",initialValue.length);

    // act
    // component.add();
    fixture.detectChanges();
    const newval = component.add();
    // console.log("compo newval here",newval.length);

    // assert
    expect(initialValue.length).toBe(newval.length);
    
  })

  it("called update mtd", ()=>{
    // arrange
    const updateVal = component.update();
    console.log("updateVal component.data",updateVal, component.data);

    // act
    // component.update();
    // fixture.detectChanges();

    // // assert
    // expect()
  })

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
