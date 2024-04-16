import CTAGroup from '../components/ctaGroup/ctaGroup';
import WhatToDo from '../components/whatToDo/whatToDo';

export default function Dashboard() {
    return(
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
        </main>
    )
}

// Notes
// export default function Dashboard({WhatToDoIssue}: {WhatToDoIssue: IssueType}) {