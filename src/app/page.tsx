import Image from 'next/image'
import Dashboard from './dashboard/page';
import AppHeader from './components/appHeader/appHeader';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-1 bg-white">
      <AppHeader />
      <Dashboard />
    </div>
  )
}
