import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RevenueCard } from './components/RevenueCard';

function App() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <RevenueCard title="Amount Pending" amount="93,100" orderCount={13} />
    </div>
  );
}

export default App;

