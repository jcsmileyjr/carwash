import WhatToDoIssue from '../lib/whatToDoIssue.json';
// import IssueType from '../Types/issue';

export default function Dashboard() {
    return(
        <main className=''>
            <h1>Dashboard</h1>
            <p>{WhatToDoIssue.pickTrash.content}</p>
        </main>
    )
}

// Notes
// export default function Dashboard({WhatToDoIssue}: {WhatToDoIssue: IssueType}) {