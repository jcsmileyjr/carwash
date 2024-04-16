import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';

export default function WhatToDo() {
    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <div>
                <h1 className='text-xl text-center'>What To Do</h1>

            </div>
            <div className='flex justify-center gap-2'>
                <Image priority={false} src={QuestionMark} width={10} height={10} alt="" className='' />
                <p className='text-xs'>Expand to see All</p>
            </div>
            
        </section>
    )
}
