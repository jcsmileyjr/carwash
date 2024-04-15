import Image from 'next/image'
import Dashboard from './dashboard/page'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col p-1 bg-white">
      <Dashboard />
    </div>
  )
}
