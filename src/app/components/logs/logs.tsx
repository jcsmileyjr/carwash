

import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';
import CaretUp from '../../../images/caret-up-icon.png';
import CaretDown from '../../../images/caret-down-icon.png';
import Issues from '../issues/issues';
import Issue from '../../Types/issue';
import MaintenanceToggle from '../maintenanceToggle/maintenanceToggle';

const sortIssuesByIssueID = (logs : Issue[]) => {
    return logs.sort((a, b) => b.issueID - a.issueID);
}

const Logs = ({maintenanceLogs} : {maintenanceLogs: Issue[]}) => {

    const sortedMaintenanceLogs = sortIssuesByIssueID(maintenanceLogs);

    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <h1 className='text-xl font-bold text-center'> Maintenance Logs </h1>
            <div className='flex justify-center gap-2'>
                <Image priority={false} src={QuestionMark} width={10} height={5} alt="" className='' />
                <p className='text-xs'>Expand to see last 30 logs</p>
            </div>
            <MaintenanceToggle issue={sortedMaintenanceLogs[0]} />
            {/* <Issues issue={collapseIssue} imageType='lightbulb' /> */}
        </section>
    );
}

// numArray.sort((a, b) => b - a);

export default Logs;