"use client"
import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';
import Issues from '../issues/issues';
import CaretUp from '../../../images/caret-up-icon.png';
import CaretDown from '../../../images/caret-down-icon.png';
import {useState} from 'react';

export default function WhatToDo() {
    const [openSummary, setOpenSummary] = useState(false);

    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <details open={openSummary} onToggle={() => setOpenSummary(!openSummary)}>
                <summary className="list-none" >
                    <div className='flex justify-center relative mt-4'>
                        <h1 className='text-xl font-bold'> What To Do </h1>
                        {!openSummary &&
                            <Image priority={false} src={CaretUp} width={15}  alt="" className='absolute top-2 end-12' />
                        }
                        {openSummary &&
                            <Image priority={false} src={CaretDown} width={15}  alt="" className='absolute top-2 end-12' />
                        }                        
                    </div>
                    <div className='flex justify-center gap-2'>
                        <Image priority={false} src={QuestionMark} width={10} height={5} alt="" className='' />
                        <p className='text-xs'>Expand to see All</p>
                    </div>
                    <Issues issue={WhatToDoIssue} summaryList={true} />
                </summary>
                <Issues issue={WhatToDoIssue} summaryList={false}  />
            </details>
        </section>
    )
}
