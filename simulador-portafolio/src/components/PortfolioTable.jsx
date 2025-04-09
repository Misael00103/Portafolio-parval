import React from 'react';

function PortfolioTable({ investments }) {
  const totalInvestment = investments.reduce((sum, inv) => sum + inv.amount, 0);

  return (
    <div className="w-full bg-white p-4 sm:p-6 rounded-lg shadow-md">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-2">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800">Inversiones del Cliente</h2>
        <div className="text-sm text-gray-600 w-full sm:w-auto bg-gray-50 p-2 rounded-md sm:bg-transparent sm:p-0">
          Total: <span className="font-semibold">${totalInvestment.toLocaleString()}</span>
        </div>
      </div>
      
      <div className="block sm:hidden">
        <div className="space-y-3">
          {investments.length === 0 ? (
            <div className="text-center text-gray-500 py-4 bg-gray-50 rounded-md">
              No hay inversiones registradas
            </div>
          ) : (
            investments.map((inv) => (
              <div key={inv.id} className="bg-gray-50 p-4 rounded-md border border-gray-100">
                <div className="font-medium text-gray-900 mb-3 text-lg">{inv.asset}</div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="text-gray-600 text-sm">Monto:</div>
                  <div className="text-right font-medium text-gray-900">${inv.amount.toLocaleString()}</div>
                  <div className="text-gray-600 text-sm">Rentabilidad:</div>
                  <div className={`text-right font-medium ${inv.profitability >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {inv.profitability}%
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>

      <div className="hidden sm:block overflow-x-auto">
        <table className="w-full min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-gray-600">Activo</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Monto ($)</th>
              <th className="px-4 py-3 text-right text-sm font-semibold text-gray-600">Rentabilidad (%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {investments.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                  No hay inversiones registradas
                </td>
              </tr>
            ) : (
              investments.map((inv) => (
                <tr key={inv.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{inv.asset}</td>
                  <td className="px-4 py-3 text-sm text-right text-gray-900">
                    ${inv.amount.toLocaleString()}
                  </td>
                  <td className="px-4 py-3 text-sm text-right">
                    <span className={`font-medium ${inv.profitability >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {inv.profitability}%
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PortfolioTable;