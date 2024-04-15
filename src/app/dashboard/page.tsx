import WhatToDoIssue from '../lib/whatToDoIssue.json';
import CTAGroup from '../components/ctaGroup/ctaGroup';
// import IssueType from '../Types/issue';

export default function Dashboard() {
    return(
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
        </main>
    )
}

// Notes
// export default function Dashboard({WhatToDoIssue}: {WhatToDoIssue: IssueType}) {