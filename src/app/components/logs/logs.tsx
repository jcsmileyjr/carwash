import Issue from '../../Types/issue';
import MaintenanceToggle from '../maintenanceToggle/maintenanceToggle';
import moment from 'moment'; // NPM module that converts date objects to strings

/**
 * Sorts an array of Issue objects by their date property in descending order.
 * If the sorted array has more than 30 elements, it returns a slice of the first 30 elements.
 *
 * @param {Issue[]} logs - The array of Issue objects to be sorted.
 * @return {Issue[]} - The sorted array of Issue objects, or a slice of the first 30 elements if the sorted array has more than 30 elements.
 */
const sortIssuesByIssueID = (logs : Issue[]) => {
    let sortedLogs = logs.sort((a, b) => moment(b.date, 'DD-MM-YYYY').diff(moment(a.date, 'DD-MM-YYYY')));
    if (sortedLogs.length > 30) {
        return sortedLogs.slice(0,30);
    } else {
        return sortedLogs;
    }
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
            <h1 className='text-xl font-bold text-center mt-4'> Maintenance Logs </h1>
            <div className='flex justify-center gap-2'>
                {/* <Image priority={false} src={QuestionMark} width={10} height={5} alt="" className='' /> */}
                <p className='text-xs'>Last 30 logs</p>
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