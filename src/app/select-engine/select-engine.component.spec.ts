import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectEngineComponent } from './select-engine.component';

describe('SelectEngineComponent', () => {
  let component: SelectEngineComponent;
  let fixture: ComponentFixture<SelectEngineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectEngineComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectEngineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
