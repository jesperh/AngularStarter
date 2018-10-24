import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { GreeterComponent } from './greeter.component';
import { GreetingsComponent } from '../greetings.component';
import { SharedModule } from '../../shared/shared.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('GreeterComponent', () => {
  let component: GreeterComponent;
  let fixture: ComponentFixture<GreeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreeterComponent, GreetingsComponent ],
      imports: [RouterTestingModule, SharedModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
