import { MilitaryTimeValidator } from "./index";

describe('military time validator', () => {
  it("should be able to tell that the 'MilitaryTimeValidator' class is defined", () => {
    expect(MilitaryTimeValidator).toBeDefined();
  });

  it.each([
    { timeRange: "01:38 - 22:33",  expected: true, message: "valid" },
    { timeRange: "03:15 - 18:45",  expected: true, message: "valid" },
    { timeRange: "07:30 - 16:15",  expected: true, message: "valid" },
    { timeRange: "12:00 - 23:59",  expected: true, message: "valid" },
    { timeRange: "06:45 - 14:30",  expected: true, message: "valid" },
    { timeRange: "00:00 - 07:00",  expected: true, message: "valid" },
    { timeRange: "14:00 - 22:00",  expected: true, message: "valid" },
    { timeRange: "08:30 - 17:45",  expected: true, message: "valid" },
    { timeRange: "02:00 - 12:00",  expected: true, message: "valid" },
    { timeRange: "23:00 - 01:00",  expected: true, message: "valid" },
    { timeRange: "19:00 - 23:00",  expected: true, message: "valid" },
    { timeRange: '25:15 - 18:45',  expected: false, message: "invalid" }, 
    { timeRange: '12:00 - 60:59',  expected: false, message: "invalid" }, 
    { timeRange: '24:00 - 00:00',  expected: false, message: "invalid" }, 
    { timeRange: '12:60 - 13:45',  expected: false, message: "invalid" }, 
    { timeRange: '09:00 - 100:00', expected: false, message: "invalid" }, 
    { timeRange: '400:00 - 500:00', expected: false, message: "invalid" }, 

    { timeRange: "01:38 -22:33",  expected: false, message: "invalid" },
    { timeRange: "-03:15 - 18:45",  expected: false, message: "invalid" },
    { timeRange: "16:15 07:30",  expected: false, message: "invalid" },
    { timeRange: "16:15.07:30",  expected: false, message: "invalid" },
    { timeRange: "16:15",  expected: false, message: "invalid" },
  ])
  ('should return "$timeRange" is "$message"', ({ timeRange, expected }) => {
    // arrange
    const militaryTimeValidator = new MilitaryTimeValidator();

    // act 
    const actual = militaryTimeValidator.isValidRange(timeRange);

    // assert 
    expect(actual).toBe(expected);
  });
});


