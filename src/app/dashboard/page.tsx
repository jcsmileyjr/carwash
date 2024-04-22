import CTAGroup from '../components/ctaGroup/ctaGroup';
import WhatToDo from '../components/whatToDo/whatToDo';
import Logs from '../components/logs/logs';
import Issue from '../Types/issue';
import getMaintenanceData from '../utils/getMaintenanceData';

export default async function Dashboard({newIssue}: {newIssue: string}) {
    const maintenanceData = await getMaintenanceData() as Issue[];
    if (newIssue !== "" && newIssue !== undefined) {
        const convertedIssueToJSON = JSON.parse(newIssue);
        maintenanceData.push(convertedIssueToJSON)
    }
    
    return (
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
            <Logs maintenanceLogs={maintenanceData} />
        </main>
    );
}