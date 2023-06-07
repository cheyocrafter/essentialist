import { validateTimeRange } from './index';

describe('military time validator', () => {
  it('it knows that "25:00 - 12:23" is invalid b/c of the start time', () => {
    const input = "25:00 - 12:23";
    const result = validateTimeRange(input);
    expect(result).toBeFalsy();
  });
});
