import React, { useState } from "react";

function InvestmentForm({ onAddInvestment }) {
  const [asset, setAsset] = useState("");
  const [amount, setAmount] = useState("");
  const [profitability, setProfitability] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    if (!asset.trim()) {
      setError("Por favor ingrese el nombre del activo");
      return;
    }

    if (!amount || amount <= 0) {
      setError("Por favor ingrese un monto válido");
      return;
    }

    if (!profitability) {
      setError("Por favor ingrese la rentabilidad esperada");
      return;
    }

    const newInvestment = {
      asset: asset.trim(),
      amount: Number(amount),
      profitability: Number(profitability),
    };

    onAddInvestment(newInvestment);
    setAsset("");
    setAmount("");
    setProfitability("");
  };

  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-4 sm:mb-6">Nueva Inversión</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Activo
          </label>
          <input
            type="text"
            value={asset}
            onChange={(e) => setAsset(e.target.value)}
            className="w-full p-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Ej. Acciones TSLA"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Monto ($)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="w-full p-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Ej. 1000"
            min="0"
            step="0.01"
          />
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Rentabilidad (%)
          </label>
          <input
            type="number"
            step="0.1"
            value={profitability}
            onChange={(e) => setProfitability(e.target.value)}
            className="w-full p-2.5 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Ej. 5.5"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm py-2 px-3 bg-red-50 rounded-md">
            {error}
          </div>
        )}

        <button
          type="submit"
          className="w-full bg-primary text-white p-2.5 rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary text-sm font-medium"
        >
          Agregar Inversión
        </button>
      </form>
    </div>
  );
}

export default InvestmentForm;