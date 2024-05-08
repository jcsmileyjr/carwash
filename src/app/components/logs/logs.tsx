import Issue from '../../Types/issue';
import MaintenanceToggle from '../maintenanceToggle/maintenanceToggle';
import moment from 'moment'; // NPM module that converts date objects to strings

/**
 * Sorts an array of Issue objects by their date property in descending order.
 * Combines dates with the same issue type.
 * If the sorted array has more than 30 elements, it returns a slice of the first 30 elements.
 *
 * @param {Issue[]} logs - The array of Issue objects to be sorted.
 * @return {Issue[]} - The sorted array of Issue objects, or a slice of the first 30 elements if the sorted array has more than 30 elements.
 */
const sortIssuesByIssueID = (logs : Issue[]) => {
    let sortedLogs = logs.sort((a, b) => moment(b.date, 'YYYY-MM-DD').diff(moment(a.date, 'YYYY-MM-DD')));
    if (sortedLogs.length > 30) {
        return sortedLogs.slice(0,30);
    } else {
        combineLogs(sortedLogs);
        return sortedLogs;
    }
}


/**
 * Get a combined list of sorted logs
 * Compare two logs for the same date. If the dates are the same, then combine them.
 * Combine by checking all the properties.
 * @param logs - The array of logs to combine.
 * @return void
 */
const combineLogs = (logs : Issue[]) => {
    let sortedlogs: Issue[] = [];
    // Loop through the logs array, two values at a time.
    for (let i = 0; i < logs.length; i++) {
        for (let j = i + 1; j < logs.length; j++) {
            if (moment(logs[i].date).isSame(logs[j].date)) { // Checking if the dates are the same
                if(logs[i].logType !== logs[j].logType) { // If the log types are different, push the first one into the new array
                    sortedlogs.push(logs[i]);
                } else {
                    if(logs[i].logType === 'action') {
                        let newIssue: Issue = combineActionIssues(logs[i], logs[j]); // Combine action issues
                        logs.splice(j, 1); // Remove the second issue
                        sortedlogs.splice(i, 0, newIssue); // Remove the first issue and replace with new combined issue
                    } else { 
                        let newIssue: Issue = combineMaintenanceIssues(logs[i], logs[j]);
                        logs.splice(j, 1);
                        sortedlogs.splice(i, 0, newIssue);
                    }
                }
            } else {
                sortedlogs.push(logs[i]);
            }   
        }    
    }
}

/**
 * Combines the action issues from two Issue objects by sorting through the object keys.
 *
 * @param {Issue} issueA - The first Issue object.
 * @param {Issue} issueB - The second Issue object.
 * @return {Issue} - The combined Issue object.
 */
const combineActionIssues = (issueA: Issue, issueB: Issue) => {
    for (const [key, value] of Object.entries(issueA)) {
        if (key === 'pickTrash' || key === 'cleanVacuum' || key === 'dumpTrashCans' || key === 'checkBayEquipment' || key === 'mowLawn' || key === 'checkVacuumHoses') {
            if(issueB[key].checked === true) {
                issueA[key].checked = true;
            }
        }
    }
    return issueA;        
}

const combineMaintenanceIssues = (issueA: Issue, issueB: Issue) => {
    issueA.content = issueA.content + '. ' + issueB.content;
    return issueA;        
}

/**
 * Renders the Logs component that displays the sorted maintenance logs.
 *
 * @param {Object} props - The props object.
 * @param {Issue[]} props.maintenanceLogs - The array of maintenance logs to be sorted.
 * @return {JSX.Element} The rendered Logs component.
 */
const Logs = ({maintenanceLogs} : {maintenanceLogs: Issue[]}) => {
    const sortedMaintenanceLogs = sortIssuesByIssueID(maintenanceLogs);
    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <h1 className='text-xl font-bold text-center mt-4 text-black'> Maintenance Logs </h1>
            <div className='flex justify-center gap-2'>
                {/* <Image priority={false} src={QuestionMark} width={10} height={5} alt="" className='' /> */}
                <p className='text-xs text-black'>Last 30 logs</p>
            </div>
            {
                sortedMaintenanceLogs.map((issue) => {
                    return <MaintenanceToggle key={issue.issueID} issue={issue} />;
                })
            }
        </section>
    );
}

export default Logs;