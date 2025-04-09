import React from 'react';
import { useState } from "react";
import Header from "./components/Header";
import PortfolioTable from "./components/PortfolioTable";
import PortfolioCharts from "./components/PortfolioCharts";
import InvestmentForm from "./components/InvestmentForm";

function App() {
  const [investments, setInvestments] = useState([
    { id: 1, asset: "Acciones AAPL", amount: 5000, profitability: 8.5 },
    { id: 2, asset: "Bonos TES", amount: 3000, profitability: 4.2 },
  ]);

  const addInvestment = (newInvestment) => {
    setInvestments([...investments, { id: investments.length + 1, ...newInvestment }]);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="container mx-auto px-4 py-6 sm:py-8">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-4 sm:gap-6">
          <div className="xl:col-span-4">
            <InvestmentForm onAddInvestment={addInvestment} />
          </div>
          <div className="xl:col-span-8 space-y-4 sm:space-y-6">
            <PortfolioTable investments={investments} />
            <PortfolioCharts investments={investments} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;