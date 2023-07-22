import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TestingAreaComponent } from './testing-area.component';

describe('TestingAreaComponent', () => {
  let component: TestingAreaComponent;
  let fixture: ComponentFixture<TestingAreaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestingAreaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TestingAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
