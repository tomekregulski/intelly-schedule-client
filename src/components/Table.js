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
      <thead>
        <tr>
          <th
            style={{
              // display: 'flex',
              // flexDirection: 'row',
              // alignItems: 'center',
              // justifyContent: 'center',
              margin: '0 auto',
            }}
          >
            <input
              style={{
                // display: 'flex',
                // flexDirection: 'row',
                // alignItems: 'center',
                // justifyContent: 'center',
                margin: '0 32%',
              }}
              type='checkbox'
            />
          </th>
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
              Date and Time
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
              Venue
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('brand')}
              className={getClassNamesFor('brand')}
            >
              Brand
            </button>
          </th>
          <th>
            <button
              type='button'
              onClick={() => requestSort('campaign')}
              className={getClassNamesFor('campaign')}
            >
              Campaign
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {items.map((item) => (
          <tr key={item.id}>
            <td>
              <input type='checkbox' value={item.id} />
            </td>
            <td>{item.status}</td>
            <td>
              {item.date} @ {item.time}
            </td>
            <td>
              {item.duration.split(':')[0]} hrs{' '}
              {' ' + item.duration.split(':')[1]} min
            </td>
            <td>{item.venue}</td>
            <td>{item.brand}</td>
            <td>{item.campaign}</td>
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
            duration: '4:00',
            venue: 'Whole Foods Market Tribeca',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 2,
            status: 'Scheduled',
            date: '12/17/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Upper West Side',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 3,
            status: 'Scheduled',
            date: '12/16/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Columbus Circle',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 4,
            status: 'Scheduled',
            date: '12/15/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Tribeca',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 5,
            status: 'Scheduled',
            date: '12/17/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Upper West Side',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 6,
            status: 'Scheduled',
            date: '12/16/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Columbus Circle',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
          {
            id: 7,
            status: 'Scheduled',
            date: '12/22/2021',
            time: '3:00',
            duration: '4:00',
            venue: 'Whole Foods Market Tribeca',
            brand: 'Simmer',
            campaign: 'Simmer Demos',
          },
        ]}
      />
    </div>
  );
}
