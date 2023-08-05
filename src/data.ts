export enum ReportType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

interface Data {
  report: {
    id: string;
    source: string;
    amount: number;
    created_at: Date;
    updated_at: Date;
    type: ReportType;
  }[];
}

export const data: Data = {
  report: [
    {
      id: 'uuid1',
      source: 'Salary',
      amount: 7500,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid2',
      source: 'Salary',
      amount: 2322,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.INCOME,
    },
    {
      id: 'uuid3',
      source: 'Food',
      amount: 70,
      created_at: new Date(),
      updated_at: new Date(),
      type: ReportType.EXPENSE,
    },
  ],
};

data.report.push({
  id: 'uuid',
  source: 'Salary',
  amount: 7500,
  created_at: new Date(),
  updated_at: new Date(),
  type: ReportType.INCOME,
});
