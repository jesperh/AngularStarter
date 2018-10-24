import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { of, Observable } from 'rxjs';

import { GreetingsComponent } from './greetings.component';
import { SharedModule } from '../shared/shared.module';
import { GreetingsService, PEOPLE } from './greetings.service';


class MockGreetingsService {
  displayedColumns: string[] = ['name'];
  dataSource = [];
  getPeopleToGreet = () => {
    return of(PEOPLE);
  }
}

describe('GreetingsComponent', () => {
  let component: GreetingsComponent;
  let service: GreetingsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GreetingsComponent ],
      providers: [GreetingsComponent, {provide: GreetingsService, useClass: MockGreetingsService}],
      imports: [SharedModule]
    });

    component = TestBed.get(GreetingsComponent);
    service = TestBed.get(GreetingsService);
  }));

  beforeEach(() => {
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an empty datasource after construction', () => {
    expect(component.dataSource).toEqual([]);
  });

  it('should have its datasource populated after Angular calls ngOnInit', () => {
    component.ngOnInit();
    expect(component.dataSource).toEqual(PEOPLE);
  });

});
