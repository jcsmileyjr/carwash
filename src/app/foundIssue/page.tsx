'use client'
import AppHeader from "../components/appHeader/appHeader";
import CTAButton from "../components/ctaButton/ctaButton";
import BackButton from "../components/backButton/backButton";
import Image from 'next/image';
import Calendar from '../../images/calendar.png';
import { useState } from 'react';
import moment from 'moment'; // NPM module that converts date objects to strings

export default function FoundIssue() {
    const [date, setDate] = useState(moment().format("YYYY-MM-DD"));

    return (
        <main className="md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white">
            <AppHeader />
            <h1 className="mt-4 text-xl font-bold underline text-gray-900 text-center">Log an Issue</h1>
            <div className="m-12 flex flex-col gap-8">
                <div className='flex flex-row'>
                    <Image priority={false} src={Calendar} width={40} height={30} alt="" className='h-8 mr-4 self-end' />
                    <input aria-label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)}  className="border-b-4 border-black w-full"/>
                </div>
                <textarea cols={40} rows={15} className="border-4 border-black" placeholder="Describe the problem in 100 characters or less. " />
            </div>
            <CTAButton content="Save" route="/" />
            <BackButton content="Don't Save, Go Back" route="/"/>
        </main>
    )
};