import CTAGroup from '../ctaGroup/ctaGroup';
import WhatToDo from '../whatToDo/whatToDo';
import Logs from '../logs/logs';
import Issue from '../../Types/issue';
import getMaintenanceData from '../../utils/getMaintenanceData';

/**
 * Checks if an issue is a duplicate by comparing its issueID with the issueIDs of all the issues in the issueArray.
 *
 * @param {Issue} issue - The issue to check for duplicates.
 * @param {Issue[]} issueArray - The array of issues to compare against.
 * @return {boolean} Returns true if the issue is a duplicate, false otherwise.
 */
const isDuplicateIssue = (issue: Issue, issueArray: Issue[]) => {
    return issueArray.some((existingIssue) => existingIssue.issueID === issue.issueID);
}

export default async function Dashboard({newIssue}: {newIssue: string}) {
    const maintenanceData = await getMaintenanceData() as Issue[];
    if (newIssue !== "" && newIssue !== undefined) {
        const convertedIssueToJSON = JSON.parse(newIssue);
        if (!isDuplicateIssue(convertedIssueToJSON, maintenanceData)) {
            maintenanceData.push(convertedIssueToJSON)
        }
    }

    
    return (
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
            <Logs maintenanceLogs={maintenanceData} />
        </main>
    );
}