import React from 'react';
import './Table.scss';

export interface Column {
  dataKey: string;
  label: string;
}

interface Props {
  columns: Column[];
  rows: any[];
  uniqueRowIdentifier: string;
}

export default function Table({ columns, rows, uniqueRowIdentifier }: Props) {
  return (
    <table className="table">
      <thead className="header">
        <tr className="row">
          {columns.map(({ dataKey, label }) => (
            <th className="cell" key={dataKey}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row[uniqueRowIdentifier]} className="row">
            {columns.map(({ dataKey }) => (
              <td key={dataKey} className="cell">
                {row[dataKey]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
