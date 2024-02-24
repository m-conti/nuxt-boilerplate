
const timeUnits = {
  millisecond: 1,
  second: 1_000,
  minute: 60_000,
  hour: 3_600_000,
  day: 86_400_000,
  week: 604_800_000,
  month: 2_592_000_000,
  year: 31_536_000_000,
};

export const timeConvert = (time: number, from: keyof typeof timeUnits, to: keyof typeof timeUnits = 'second'): number => (time * timeUnits[from] / timeUnits[to]);
