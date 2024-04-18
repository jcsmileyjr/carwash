import AppHeader from "../components/appHeader/appHeader";
import CTAButton from "../components/ctaButton/ctaButton";

// Testing below
import WhatToDoIssue from '../lib/whatToDoIssue.json';
function createTestIssue() {
    const expandIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
    expandIssue.pickTrash.checked = true;
    expandIssue.logType = "action";
    expandIssue.issueID = 1001;
    return expandIssue;
}

export default function Maintenance () {
    const testIssue = createTestIssue();
    return (
        <main className='md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white'>
            <AppHeader />
            <h1 className="mt-4 text-xl font-bold underline text-gray-900 text-center">Maintenance Wizard</h1>
            <CTAButton content="Done" route="/" appData={testIssue} />
        </main>
    );
}