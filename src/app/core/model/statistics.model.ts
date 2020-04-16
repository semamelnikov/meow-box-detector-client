export class Cat {
  id: number;
  name: string;
  weight: number;
  age: number;
  breed: string;
  deviceId: number;
  userId: number;
}

export enum DayTime {
  Morning,
  Day,
  Evening,
  Night,
}

export class CountAggregationResult {
  name: string;
  value: number;
}

export class TotalCatInfo {
  userName: string;
  cat: Cat;
}

export class Statistics {
  year: TotalCatInfo;
  month: TotalCatInfo;
  day: TotalCatInfo;
  allTime: TotalCatInfo;
  monthTopTen: TotalCatInfo[];
  yearTopHundred: TotalCatInfo[];
  monthAggregationByDayTime: CountAggregationResult[];
  aggregationByBreed: CountAggregationResult[];
  yearDetectionAggregationByMonth: CountAggregationResult[];
}
