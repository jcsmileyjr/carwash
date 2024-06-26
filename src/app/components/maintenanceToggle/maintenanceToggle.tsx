"use client"
import {useState} from 'react';
import Image from 'next/image';
import CaretUp from '../../../images/caret-up-icon.png';
import CaretDown from '../../../images/caret-down-icon.png';
import Issues from '../issues/issues';
import Issue from '../../Types/issue';
import moment from 'moment'; // NPM module that converts date objects to strings

/**
 * Renders the Maintenance Toggle component used in the Logs component.
 *
 * @param {Issue} issue - The issue object containing maintenance information.
 * @return {JSX.Element} The JSX element representing the Maintenance Toggle component.
 */
const MaintenanceToggle = ({issue} : {issue: Issue}) => {
    const [openLog, setOpenLog] = useState(false);
    return (
        <div>
            <details open={openLog} onToggle={() => setOpenLog(!openLog)}>
                <summary className="list-none marker-text-white marker-bg-white appearance-none">
                    <div className='flex justify-start relative mt-4 mx-12'>
                        <h1 className='text-xl font-bold text-black underline'> {moment(issue.date, "YYYY-MM-DD").format("M/D/YYYY")} </h1>
                        {!openLog && <Image priority={false} src={CaretDown} width={15}  alt="" className='absolute top-2 left-40' />}
                        {openLog && <Image priority={false} src={CaretUp} width={15}  alt="" className='absolute top-2 left-40' />}
                    </div>
                </summary>
                <div className='ml-4'>
                    {issue.logType === "action" && <Issues issue={issue} imageType='hammer' />}
                    {issue.logType === "maintenance" && <Issues issue={issue} imageType='warning' />}
                </div>
            </details>
        </div>
    );

}

export default MaintenanceToggle;