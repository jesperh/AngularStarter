import { GreetingsModule } from './greetings.module';

describe('GreetingsModule', () => {
  let firstFeatureModule: GreetingsModule;

  beforeEach(() => {
    firstFeatureModule = new GreetingsModule();
  });

  it('should create an instance', () => {
    expect(firstFeatureModule).toBeTruthy();
  });
});
