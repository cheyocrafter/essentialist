import { validateTimeRange } from './index';

describe('military time validator', () => {
  it('it knows that "25:00 - 12:23" is invalid b/c of the start time', () => {
    const input = "25:00 - 12:23";
    const result = validateTimeRange(input);
    expect(result).toBeFalsy();
  });

  it('it knows that "23:00 - 23:56" is valid', () => {
    const input = "23:00 - 23:56";
    const result = validateTimeRange(input);
    expect(result).toBeTruthy();
  });

  it('it knows that "01:12 - 14:32" is valid', () => {
    const input = "01:12 - 14:32";
    const result = validateTimeRange(input);
    expect(result).toBeTruthy();
  });
});
