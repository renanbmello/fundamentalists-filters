import {FC} from 'react';
import { BacktestResults } from '../types/results';

interface ResultsProps {
  tickers: string[];
  backtestResults: BacktestResults;
}

const Results: FC<ResultsProps> = ({ tickers, backtestResults }) => {
  return (
    <div className="space-y-6 bg-[#202020]">
      <div className="bg-[#202020]">
        <h2 className="text-xl font-bold mb-2">Empresas Filtradas:</h2>
        <ul className="list-disc list-inside pl-4">
          {tickers.map((ticker) => (
            <li key={ticker}>{ticker}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2 className="text-xl font-bold mb-4">Resultados do Backtest:</h2>
        {Object.keys(backtestResults).map((period) => (
          <div key={period} className="mb-6">
            <h3 className="text-lg font-semibold">{period}</h3>
            <p>
              <strong>Retorno Médio:</strong> {backtestResults[period].average_return.toFixed(2)}%
            </p>
            <p>
              <strong>Retorno do Ibovespa:</strong> {backtestResults[period].ibov_return.toFixed(2)}%
            </p>
            <img
              src={`data:image/png;base64,${backtestResults[period].chart}`}
              alt={`Gráfico ${period}`}
              className="mt-2 w-full h-auto rounded-md border border-gray-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
