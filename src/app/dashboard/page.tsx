import CTAGroup from '../components/ctaGroup/ctaGroup';
import WhatToDo from '../components/whatToDo/whatToDo';
import Logs from '../components/logs/logs';
// import DummyIssues from '../lib/dummyIssues.json';
import Issue from '../Types/issue';

async function getMaintenanceData () {
    const response = await fetch('http://localhost:3000/dashboard/api');  
    const data = await response.json();  
    return data;
}

export default async function Dashboard() { 
    const maintenanceData = await getMaintenanceData() as Issue[];
    return (
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
            <Logs maintenanceLogs={maintenanceData} />
        </main>
    );
}


// Notes
// export default function Dashboard({WhatToDoIssue}: {WhatToDoIssue: IssueType}) {