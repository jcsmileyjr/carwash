import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';
import Issues from '../issues/issues';

export default function WhatToDo() {
    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <details>
                <summary>
                    <h1 className='text-xl text-center font-bold mt-4'>What To Do</h1>
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
