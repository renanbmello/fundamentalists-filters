import { useState, FC, ChangeEvent, FormEvent } from 'react';
import { Filters } from '../types/filters';

interface FormProps {
  onSubmit: (filters: Filters) => void;
  loading: boolean;
}

const defaultFilters: Filters = {
    pl: [0, 15],
    pvp: [0, 1],
    dy: [0.04, 1],
    mrgliq: [0.10, 1],
    roe: [0.10, 1],
    divbpatr: [0, 1],
};

const Form: FC<FormProps> = ({ onSubmit, loading }) => {
  const [filters, setFilters] = useState<Filters>(defaultFilters);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    key: keyof Filters,
    index: 0 | 1
  ) => {
    const value = parseFloat(e.target.value);
    setFilters((prevFilters) => ({
      ...prevFilters,
      [key]: prevFilters[key].map((v, i) => (i === index ? value : v)),
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onSubmit(filters);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {Object.keys(filters).map((key) => (
        <div key={key} className="flex items-center space-x-2">
          <label className="w-24 font-medium">{key.toUpperCase()}</label>
          <div className="flex items-center space-x-2">
          <input
            type="number"
            step="any"
            value={filters[key as keyof Filters][0]}
            onChange={(e) => handleChange(e, key as keyof Filters, 0)}
            className="border border-gray-300 p-2 rounded-md w-20 text-center text-black"
            placeholder="Mínimo"
            />
          <input
            type="number"
            step="any"
            value={filters[key as keyof Filters][1]}
            onChange={(e) => handleChange(e, key as keyof Filters, 1)}
            className="border border-gray-300 p-2 rounded-md  w-20 text-center text-black"
            placeholder="Máximo"
          />
          </div>
        </div>
      ))}
      <button
            type="submit"
            className="w-full bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-200"
            disabled={loading}
            >
            {loading ? 'Carregando...' : 'Filtrar Empresas'}
            </button>
    </form>
  );
};

export default Form;
