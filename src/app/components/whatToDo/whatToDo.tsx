"use client"
import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
// import QuestionMark from '../../../images/question-mark-icon.png';
import Issues from '../issues/issues';
import CaretUp from '../../../images/caret-up-icon.png';
import CaretDown from '../../../images/caret-down-icon.png';
import {useState} from 'react';

/**
 * Creates an expanded Issue object based on the initial WhatToDoIssue.
 * @return {Object} The expanded issue object.
 */
function createexpandIssue() {
    const expandIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
    expandIssue.pickTrash.checked = true;
    expandIssue.cleanVacuum.checked = true;
    expandIssue.dumpTrashCans.checked = true;
    expandIssue.checkBayEquipment.checked = true;
    return expandIssue;
}

/**
 * Creates a collapsed Issue object based on the initial WhatToDoIssue.
 * @return {Object} The collapsed issue object.
 */
function createCollapseIssue() {
    const collapseIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
    collapseIssue.mowLawn.checked = true; 
    collapseIssue.checkVacuumHoses.checked = true;
    collapseIssue.checkVacuumCoinAccepter.checked = true;
    return collapseIssue;
}


/**
 * Renders the 'What To Do' section with expandable details for issues.
 * @return {JSX.Element} The JSX element representing the 'What To Do' section.
 */
export default function WhatToDo() {
    const [openSummary, setOpenSummary] = useState(false);
    const expandIssue = createexpandIssue();
    const collapseIssue = createCollapseIssue();

    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <details open={openSummary} onToggle={() => setOpenSummary(!openSummary)}>
                <summary className="list-none" >
                    <div className='flex justify-center relative mt-4'>
                        <h1 className='text-xl text-black font-bold'> What To Do </h1>
                        {!openSummary &&
                            <Image priority={false} src={CaretDown} width={15}  alt="" className='absolute top-2 end-12' />
                        }
                        {openSummary &&
                            <Image priority={false} src={CaretUp} width={15}  alt="" className='absolute top-2 end-12' />
                        }                        
                    </div>
                    <div className='flex justify-center gap-2'>
                        {/* <Image priority={false} src={QuestionMark} width={10} height={5} alt="" className='' /> */}
                        <p className='text-xs text-black'>Expand to see All</p>
                    </div>
                    <Issues issue={expandIssue} imageType='lightbulb' />
                </summary>
                <Issues issue={collapseIssue} imageType='lightbulb' />
            </details>
        </section>
    )
}
