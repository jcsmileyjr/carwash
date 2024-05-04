import CTAGroup from '../ctaGroup/ctaGroup';
import WhatToDo from '../whatToDo/whatToDo';
import Logs from '../logs/logs';
import Issue from '../../Types/issue';
//import getMaintenanceData from '../../utils/getMaintenanceData';
import {createClient} from '@sanity/client';

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

const client = createClient({
    projectId: process.env.LOCAL_PROJECT_ID,
    dataset: 'production',
    useCdn: true, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
})

export default async function Dashboard({newIssue}: {newIssue: string}) {
    const maintenanceData = await client.fetch<Issue[]>(
        `*[_type == "issue"]`,
        {},
        {
          // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
          cache: 'force-cache',
          next: {tags: ['pages']},
        },
      )
    //const maintenanceData = await getMaintenanceData() as Issue[];
    //console.log("data", maintenanceData);

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