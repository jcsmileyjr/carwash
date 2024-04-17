import WhatToDoIssue from '../../lib/whatToDoIssue.json';
import Image from 'next/image';
import QuestionMark from '../../../images/question-mark-icon.png';
import Issues from '../issues/issues';
import CaretUp from '../../../images/caret-up-icon.png';

export default function WhatToDo() {
    return (
        <section className="flex flex-col border-dashed border-t-2 border-slate-500">
            <details>
                <summary className="list-none" >
                    <div className='flex justify-center relative mt-4'>
                        <h1 className='text-xl font-bold'> What To Do </h1>
                        <Image priority={false} src={CaretUp} width={15}  alt="" className='absolute top-2 end-12' />
                    </div>
                    <div className='flex justify-center gap-2'>
                        <Image priority={false} src={QuestionMark} width={5} height={5} alt="" className='' />
                        <p className='text-xs'>Expand to see All</p>
                    </div>
                    <Issues issue={WhatToDoIssue} summaryList={true} />
                </summary>
                <Issues issue={WhatToDoIssue} summaryList={false}  />
            </details>
        </section>
    )
}
