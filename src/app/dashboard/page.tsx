import CTAGroup from '../components/ctaGroup/ctaGroup';
import WhatToDo from '../components/whatToDo/whatToDo';
import Logs from '../components/logs/logs';
import DummyIssues from '../lib/dummyIssues.json';

export default function Dashboard() {
    return(
        <main className='md:w-1/2 md:mx-auto'>
            <CTAGroup />
            <WhatToDo />
            <Logs maintenanceLogs={DummyIssues} />
        </main>
    )
}

// Notes
// export default function Dashboard({WhatToDoIssue}: {WhatToDoIssue: IssueType}) {