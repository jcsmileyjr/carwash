import Dashboard from './components/dashboard/dashboard';
import AppHeader from './components/appHeader/appHeader';
import Issue from './Types/issue';
import WhatToDoIssue from './lib/whatToDoIssue.json';

export default function Home({searchParams}: {searchParams: {query?: string}}) {
  const query = searchParams.query || "";
  return (
    <div className="flex min-h-screen flex-col p-1 bg-white">
      <AppHeader />
      <Dashboard newIssue = {query} />
    </div>
  )
}
