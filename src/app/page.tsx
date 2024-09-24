"use client"
import { useState, FC } from 'react';
import Form from '../components/Form';
import Explanation from '../components/Explanation';
import Loading from '../components/Loading';
import Results from '../components/Results';
import api from '../services/api';
import { Filters } from '../types/filters';
import { BacktestResults } from '../types/results';
// import axios from 'axios';

const Home: FC = () => {
  const [loading, setLoading] = useState(false);
  const [tickers, setTickers] = useState<string[]>([]);
  const [backtestResults, setBacktestResults] = useState<BacktestResults | null>(null);

  const handleFormSubmit = async (filters: Filters) => {
    setLoading(true);
    try {
      console.log(filters)
      const response = await api.post('/empresas_perenes', { filters });
      // const response = await axios.post("http://127.0.0.1:5000/empresas_perenes", {filters}

      // )
      const filteredTickers = response.data;
      console.log(response.data)
      setTickers(filteredTickers);

      const backtestResponse = await api.post('/backtest', { tickers: filteredTickers });
      setBacktestResults(backtestResponse.data);
    } catch (error) {
      console.error('Erro ao obter dados:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center">
      {/* Cabeçalho */}
      <header className="bg-[#121212] shadow w-full">
        <div className="max-w-7xl mx-auto py-4 px-6">
          <h1 className="text-2xl font-bold text-center">Filtros Fundamentalistas</h1>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="w-full max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex-1">
        {/* Caixa com bordas arredondadas */}
        <div className="bg-[#202020] p-6 rounded-lg shadow-lg">
          {/* Formulário e Explicação */}
          <div className="flex flex-col lg:flex-row lg:space-x-8">
            {/* Formulário */}
            <div className="w-full lg:w-1/2">
              <Form onSubmit={handleFormSubmit} loading={loading} />
            </div>
            {/* Explicação */}
            <div className="w-full lg:w-1/2 mt-6 lg:mt-0">
              <Explanation />
            </div>
          </div>
        </div>

        {/* Estado de carregamento ou resultados */}
        <div className="mt-6 w-full">
          {loading && (
            <div className="bg-[#202020] p-6 rounded-lg shadow-lg">
              <Loading />
            </div>
          )}
          {!loading && tickers.length > 0 && backtestResults && (
            <div className="bg-[#202020] p-6 rounded-lg shadow-lg">
              <Results tickers={tickers} backtestResults={backtestResults} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Home;
