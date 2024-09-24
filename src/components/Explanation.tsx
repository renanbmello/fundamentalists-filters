import {FC} from 'react';

const Explanation: FC = () => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold mb-4">Indicadores Fundamentalistas</h2>
      <div>
        <strong>P/L (Preço/Lucro):</strong> Indica o tempo de retorno do investimento.
      </div>
      <div>
        <strong>P/VPA (Preço/Valor Patrimonial):</strong> Compara o preço da ação com seu valor contábil.
      </div>
      <div>
        <strong>Dividend Yield:</strong> Retorno em dividendos sobre o preço da ação.
      </div>
      <div>
        <strong>Margem Líquida:</strong> Lucro líquido sobre a receita total.
      </div>
      <div>
        <strong>ROE (Return on Equity):</strong> Retorno sobre o patrimônio líquido.
      </div>
      <div>
        <strong>Dívida/Patrimônio:</strong> Relação entre a dívida total e o patrimônio líquido.
      </div>
    </div>
  );
};

export default Explanation;
