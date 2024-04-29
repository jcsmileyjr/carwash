'use client'
import AppHeader from "../components/appHeader/appHeader";
import CTAButton from "../components/ctaButton/ctaButton";
import BackButton from "../components/backButton/backButton";
import PageTitle from "../components/pageTitle/pageTitle";
import Image from 'next/image';
import Calendar from '../../images/calendar.png';
import WhatToDoIssue from '../lib/whatToDoIssue.json';
import { useState } from 'react';
import moment from 'moment'; // NPM module that converts date objects to strings
import {v4 as uuidv4} from 'uuid'; // NPM module that creates a random ID number

export default function FoundIssue() {
    const [date, setDate] = useState(moment().format("YYYY-MM-DD")); 
    const [content, setContent] = useState("");

    // TODO: Create a function that creates a default issue object with the specified current date.
    const handleSubmit = () => {
        let defaultIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
        defaultIssue.date = date;
        defaultIssue.issueID = uuidv4();
        defaultIssue.content = content;
        defaultIssue.logType = 'maintenance';
        return JSON.stringify(defaultIssue);
    }

    return (
        <main className="md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white">
            <AppHeader />
            <PageTitle content="Log an Issue" />
            <div className="m-12 flex flex-col gap-8">
                <div className='flex flex-row'>
                    <Image priority={false} src={Calendar} width={40} height={30} alt="" className='h-8 mr-4 self-end' />
                    <input data-testid="date" aria-label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)}  className="border-b-4 border-black w-full bg-white text-black"/>
                </div>
                <textarea data-testid="content" aria-label="Content" value={content} onChange={(e) => setContent(e.target.value)} cols={40} rows={15} className="border-4 border-black text-black" placeholder="Describe the problem in 100 characters or less. " />
            </div>
            <CTAButton content="Save" route="/" appData={handleSubmit()} />
            <BackButton content="Don't Save, Go Back" route="/" />
        </main>
    )
};