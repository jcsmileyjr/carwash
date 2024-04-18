import CTAGroup from '../components/ctaGroup/ctaGroup';
import WhatToDo from '../components/whatToDo/whatToDo';
import Logs from '../components/logs/logs';
// import DummyIssues from '../lib/dummyIssues.json';
import Issue from '../Types/issue';
import getMaintenanceData from '../utils/getMaintenanceData';

export default async function Dashboard({newIssue}: {newIssue: Issue}) {
    const maintenanceData = await getMaintenanceData() as Issue[];
    if(Object.keys(newIssue).length !== 0) {
        const foundIssue = JSON.parse(Object.keys(newIssue)[0]);
        maintenanceData.push(foundIssue)
    }
    return (
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
            <Logs maintenanceLogs={maintenanceData} />
        </main>
    );
}