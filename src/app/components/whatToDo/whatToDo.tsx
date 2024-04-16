import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';
import Issues from '../issues/issues';

export default function WhatToDo() {
    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <div>
                <h1 className='text-xl text-center'>What To Do</h1>

            </div>
            <div className='flex justify-center gap-2 m-h-2'>
                <Image priority={false} src={QuestionMark} alt="" className='h-6' />
                <p className='text-xs'>Expand to see All</p>
            </div>
            <Issues issue={WhatToDoIssue}  />
        </section>
    )
}
