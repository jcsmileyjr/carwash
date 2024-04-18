import Dashboard from './dashboard/page';
import AppHeader from './components/appHeader/appHeader';
import Issue from './Types/issue';
import WhatToDoIssue from './lib/whatToDoIssue.json';

export default function Home({searchParams}: {searchParams: Issue}) {
  return (
    <div className="flex min-h-screen flex-col p-1 bg-white">
      <AppHeader />
      <Dashboard newIssue={searchParams} />
    </div>
  )
}
