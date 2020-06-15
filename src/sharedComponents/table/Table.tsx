import React, { useState } from 'react';
import './Table.scss';

export type SortStrategy = 'string' | 'number';

export interface Column {
  dataKey: string;
  label: string;
}

interface Props {
  columns: Column[];
  rows: any[];
  uniqueRowIdentifier: string;
  initialSortDataKey: string;
}

export default function Table({
  columns,
  rows,
  uniqueRowIdentifier,
  initialSortDataKey,
}: Props) {
  const initialSortColumn =
    columns.find((column) => column.dataKey === initialSortDataKey) ||
    columns[0];
  const [sortBy, setSortBy] = useState<Column>(initialSortColumn);
  const [asc, setAsc] = useState<boolean>(true);
  const sortedRows = sortRows(rows, sortBy, asc);
  const onSort = (column: Column) => {
    if (column.dataKey === sortBy.dataKey) {
      setAsc(!asc);
    } else {
      setSortBy(column);
    }
  };

  return (
    <table className="table">
      <thead className="header">
        <tr className="row">
          {columns.map((column) => (
            <th className="cell" key={column.dataKey}>
              <div
                className="header-cell-inner-wrapper"
                onClick={onSort.bind(null, column)}
              >
                {column.label}
                <div className="sort-icon" />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedRows.map((row) => (
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

function sortRows(rows: any[], sortBy: Column, asc: boolean): any[] {
  return rows.sort((a, b) => {
    const aValue = a[sortBy.dataKey];
    const bValue = b[sortBy.dataKey];

    if (asc) {
      if (aValue > bValue) return 1;
      if (aValue < bValue) return -1;
    } else {
      if (aValue > bValue) return -1;
      if (aValue < bValue) return 1;
    }

    return 0;
  });
}
