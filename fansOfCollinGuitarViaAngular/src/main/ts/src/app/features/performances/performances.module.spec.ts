import { PerformancesModule } from './performances.module';

describe('PerformancesModule', () => {
  let performancesModule: PerformancesModule;

  beforeEach(() => {
    performancesModule = new PerformancesModule();
  });

  it('should create an instance', () => {
    expect(performancesModule).toBeTruthy();
  });
});
