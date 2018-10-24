import { TestBed } from '@angular/core/testing';

import { GreetingsService, PEOPLE } from './greetings.service';

describe('GreetingsService', () => {
  let service: GreetingsService;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.get(GreetingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#getObservableValue should return value from observable',
  (done: DoneFn) => {
  service.getPeopleToGreet().subscribe(value => {
    expect(value).toBe(PEOPLE);
    done();
  });
});

});
