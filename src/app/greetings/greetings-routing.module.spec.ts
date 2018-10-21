import { GreetingsRoutingModule } from './greetings-routing.module';

describe('GreetingsRoutingModule', () => {
  let firstFeatureRoutingModule: GreetingsRoutingModule;

  beforeEach(() => {
    firstFeatureRoutingModule = new GreetingsRoutingModule();
  });

  it('should create an instance', () => {
    expect(firstFeatureRoutingModule).toBeTruthy();
  });
});
