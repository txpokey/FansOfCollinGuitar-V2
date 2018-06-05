import { ClassScheduleModule } from './class-schedule.module';

describe('ClassScheduleModule', () => {
  let classScheduleModule: ClassScheduleModule;

  beforeEach(() => {
    classScheduleModule = new ClassScheduleModule();
  });

  it('should create an instance', () => {
    expect(classScheduleModule).toBeTruthy();
  });
});
