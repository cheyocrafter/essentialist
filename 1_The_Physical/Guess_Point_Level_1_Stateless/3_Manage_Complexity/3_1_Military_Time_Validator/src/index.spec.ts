import { validateTimeRange } from './index';

describe('military time validator', () => {
  describe("invalid time range", () => {
    it.each([
      ["25:00 - 12:23"],
      ["23:59 - 23:40"],
    ])
    ('it knows that "%s" is invalid', (input) => {
      expect(validateTimeRange(input)).toBe(false);
    });
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
