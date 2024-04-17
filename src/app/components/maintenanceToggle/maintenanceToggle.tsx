"use client"
import {useState} from 'react';
import Image from 'next/image';
import CaretUp from '../../../images/caret-up-icon.png';
import CaretDown from '../../../images/caret-down-icon.png';
import Issues from '../issues/issues';
import Issue from '../../Types/issue';

const MaintenanceToggle = ({issue} : {issue: Issue}) => {
    const [openLog, setOpenLog] = useState(false);
    console.log(issue);

    return (
        <div>
            <details open={openLog} onToggle={() => setOpenLog(!openLog)}>
                <summary className="list-none">
                    <div className='flex justify-start relative mt-4'>
                        <h1 className='text-xl font-bold'> {issue.date} </h1>
                        {!openLog && <Image priority={false} src={CaretUp} width={15}  alt="" className='absolute top-2 left-40' />}
                        {openLog && <Image priority={false} src={CaretDown} width={15}  alt="" className='absolute top-2 left-40' />}
                    </div>
                </summary>
                <Issues issue={issue} imageType='hammer' />
            </details>
        </div>
    );

}

export default MaintenanceToggle;