import React, { useState } from 'react';
import { CSVLink, CSVDownload } from 'react-csv';

const csvData = [
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
];

const DownloadCSV = () => {
  const [file, setFile] = useState(false);

  const download = () => {
    setFile(true);
    setTimeout(() => {
      setFile(false);
    }, 1000);
  };

  return (
    <>
      <button onClick={() => download()}>
        {/* <CSVLink data={csvData} target='_blank'> */}
        Download CSV
        {/* </CSVLink> */}
      </button>
      {file === true && <CSVDownload data={csvData} target='_blank' />}
    </>
  );
};

export default DownloadCSV;
