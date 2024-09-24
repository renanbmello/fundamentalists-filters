export interface BacktestResult {
    average_return: number;
    ibov_return: number;
    chart: string;
  }
  
  export interface BacktestResults {
    [key: string]: BacktestResult;
  }
  