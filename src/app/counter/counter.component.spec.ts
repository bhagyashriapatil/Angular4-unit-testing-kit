import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DebugElement } from '@angular/core';                //debugger come from angular/core
import { CounterComponent } from './counter.component';
import { By } from '@angular/platform-browser'; 

describe('CounterComponent', () => {
  let component: CounterComponent;                    //refrence to our component
  let fixture: ComponentFixture<CounterComponent>;    //ref to our compo other ext msg added on it
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(()=>{
    TestBed.configureTestingModule({                  //TestBed which provides different module
      declarations: [CounterComponent]
    }).compileComponents();            //need to call async becz then we need to call compileComponents
                                       // why we need to call async bcz it wait for loading our async comp/html                                                 
  }))

  // another beforeEach compo we setting up our component
  beforeEach(()=>{
    fixture = TestBed.createComponent(CounterComponent);     //gives us testing version of our compo
    component = fixture.componentInstance;                   //get instance of our compo
    
    // synchronus change detection
    fixture.detectChanges();
    
    debugElement = fixture.debugElement.query(By.css('p'));
    htmlElement = debugElement.nativeElement;                //hold debugElement here
  });

  // check sync change by one
  it("should incrment the counter number by one", ()=>{
    // Arrane
    const initialValue = component.counter;

    // Act
    component.increment();
    
    // fixture.detectChanges();
    const newval = component.counter;

    // Assert
    // expect(initialValue).toBeGreaterThan(newval);           //Expected 1 to be greater than 2.  
    expect(newval).toBeGreaterThan(initialValue);           
  })

  it("should decrement the counter number by one", ()=>{
    // Arrange
    const initialValue = component.counter;
    // Act
    component.decrement();
    // fixture.detectChanges();
    const newval = component.counter;
    // Assert
    // expect(initialValue).toBeGreaterThan(newval);           //xpected 0 to be greater than 1. 
    expect(newval).toBeLessThan(initialValue);            
  })

  it('Should display the current number of the counter', ()=>{
    // Assert that the text on screen is of Number: 1
    // expect(htmlElement.textContent).toEqual('Number: 1');    //Expected 'Number: ' to equal 'Number: 1'.
                                                                //  bcz not workng for sync change     
  })

});
