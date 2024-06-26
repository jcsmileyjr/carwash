import CTAGroup from '../ctaGroup/ctaGroup';
import WhatToDo from '../whatToDo/whatToDo';
import Logs from '../logs/logs';
import Issue from '../../Types/issue';
//import getMaintenanceData from '../../utils/getMaintenanceData'; // Keeping this here for reference
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
    projectId: process.env.NEXT_PUBLIC_SANITY_API_PROJECT_ID,
    dataset: 'production',
    useCdn: false, // set to `false` to bypass the edge cache
    apiVersion: '2023-05-03', // use current date (YYYY-MM-DD) to target the latest API version
    token: process.env.NEXT_PUBLIC_SANITY_API_TOKEN,
})

const getMaintenanceData = async () : Promise<Issue[]> => {
    return await client.fetch<Issue[]>(
        `*[_type == "issue"]`,
        {},
        {
          // You can set any of the `cache` and `next` options as you would on a standard `fetch` call
          cache: 'no-store',
          next: {tags: ['pages']},
        },
    )
}

export default async function Dashboard({newIssue}: {newIssue: string}) {
    const maintenanceData = await getMaintenanceData();

    if (newIssue !== "" && newIssue !== undefined) {
        const convertedIssueToJSON = JSON.parse(newIssue);
        if (!isDuplicateIssue(convertedIssueToJSON, maintenanceData)) {
            // Add the new issue to the database
            await client.create({
                _type: 'issue',
                ...convertedIssueToJSON,
            })

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