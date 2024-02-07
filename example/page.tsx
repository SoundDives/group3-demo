'use client'
import { LineChart, Line, Tooltip, XAxis, YAxis } from 'recharts';
import { useEffect, useState } from 'react';

const staticData = [
    {
      "year": "1900",
      "pop": 254
    },
    {
      "year": "1910",
      "pop": 150
    },
    {
      "year": "1920",
      "pop": 1213
    },
    {
      "year": "1930",
      "pop": 1071
    },
    {
      "year": "1940",
      "pop": 1177
    },
    {
      "year": "1950",
      "pop": 7658
    },
    {
      "year": "1960",
      "pop": 12809
    },
    {
      "year": "1970",
      "pop": 61196
    },
    {
      "year": "1980",
      "pop": 73903
    },
    {
      "year": "1990",
      "pop": 86874
    },
    {
      "year": "2000",
      "pop": 109569
    },
    {
      "year": "2010",
      "pop": 122363
    },
    {
      "year": "2020",
      "pop": 151854
    }
  ];

export default function Home() {
  const [data, setData] = useState<{}[]>([])
  useEffect(() => {
    setData(staticData);
  },[]);
  
  return (
    <>
      <LineChart width={400} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="year"/>
        <YAxis/>
        <Line isAnimationActive={false} type="monotone" dataKey="pop" stroke="#8884d8" />
        <Tooltip/>
      </LineChart>
    </>
  );
}
