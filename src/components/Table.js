import React from 'react';
import './Table.css';

const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = React.useState(config);

  const sortedItems = React.useMemo(() => {
    let sortableItems = [...items];
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
      });
    }
    return sortableItems;
  }, [items, sortConfig]);

  const requestSort = (key) => {
    let direction = 'ascending';
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
  };

  return { items: sortedItems, requestSort, sortConfig };
};

const ProductTable = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(props.products);
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  return (
    <table>
      <caption>Scheduled Events</caption>
      <thead>
        <tr>
          <th>
            <button
              type='button'
              onClick={() => requestSort('status')}
              className={getClassNamesFor('status')}
            >
              Status
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('date')}
              className={getClassNamesFor('date')}
            >
              Date
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('time')}
              className={getClassNamesFor('time')}
            >
              Time
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('duration')}
              className={getClassNamesFor('duration')}
            >
              Duration
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('store')}
              className={getClassNamesFor('store')}
            >
              Store
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>{item.status}</td>
            <td>{item.date}</td>
            <td>{item.time}</td>
            <td>{item.duration}</td>
            <td>{item.store}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default function App() {
  return (
    <div className='App'>
      <ProductTable
        products={[
          {
            id: 1,
            status: 'Scheduled',
            date: '12/15/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Tribeca',
          },
          {
            id: 2,
            status: 'Scheduled',
            date: '12/17/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Upper West Side',
          },
          {
            id: 3,
            status: 'Scheduled',
            date: '12/16/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Columbus Circle',
          },
          {
            id: 4,
            status: 'Scheduled',
            date: '12/15/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Tribeca',
          },
          {
            id: 5,
            status: 'Scheduled',
            date: '12/17/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Upper West Side',
          },
          {
            id: 6,
            status: 'Scheduled',
            date: '12/16/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Columbus Circle',
          },
          {
            id: 7,
            status: 'Scheduled',
            date: '12/22/2021',
            time: '3:00',
            duration: '4 hours',
            store: 'Whole Foods Market Tribeca',
          },
        ]}
      />
    </div>
  );
}
