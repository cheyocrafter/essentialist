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

  describe('valid time range', () => {
    it.each([
      ["23:00 - 23:56"],
      ["01:12 - 14:32"],
      ["22:00 - 23:12"],
    ])
    ('it knows that "%s" is valid', (input) => {
      expect(validateTimeRange(input)).toBe(true);
    });
  });
  
});
