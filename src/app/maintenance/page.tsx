"use client"
import AppHeader from "../components/appHeader/appHeader";
import CTAButton from "../components/ctaButton/ctaButton";
import Issue from '../Types/issue';
import Image from 'next/image';
import Calendar from '../../images/calendar.png';
import WhatToDoIssue from '../lib/whatToDoIssue.json';
import { useState} from 'react';
import moment from 'moment'; // NPM module that converts date objects to strings
import {v4 as uuidv4} from 'uuid'; // NPM module that creates a random ID number


/**
 * Creates a default issue object with the specified current date.
 *
 * @return {Issue} The default issue object.
 */
function createDefaultIssue() {
    let defaultIssue = JSON.parse(JSON.stringify(WhatToDoIssue));
    defaultIssue.date = moment().format("YYYY-MM-DD");
    return defaultIssue;
}

export default function Maintenance () {    
    const defaultIssue = createDefaultIssue();
    const randomID = uuidv4();

    const [date, setDate] = useState(defaultIssue.date);
    const [pickTrash, setPickTrash] = useState(false);
    const [cleanVacuum, setCleanVacuum] = useState(false);
    const [dumpTrashCans, setDumpTrashCans] = useState(false);
    const [checkBayEquipment, setCheckBayEquipment] = useState(false);
    const [mowLawn, setMowLawn] = useState(false);
    const [checkVacuumHoses, setCheckVacuumHoses] = useState(false);

    return (
        <main className='md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white'>
            <AppHeader />
            <h1 className="mt-4 text-xl font-bold underline text-gray-900 text-center">Maintenance Wizard</h1>
            <div className="m-12 flex flex-col gap-8">
                <div className='flex flex-row'>
                    <Image priority={false} src={Calendar} width={40} height={30} alt="" className='h-8 mr-4 self-end' />
                    <input type="date" value={date} onChange={(e) => setDate(e.target.value)}  className="border-b-4 border-black w-full"/>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={pickTrash} onChange={(e) => setPickTrash(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>
                    <label className='pl-4 w-4/5'>{defaultIssue['pickTrash'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={cleanVacuum} onChange={(e) => setCleanVacuum(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>  
                    <label className='pl-4 w-4/5'>{defaultIssue['cleanVacuum'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={dumpTrashCans} onChange={(e) => setDumpTrashCans(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>
                    <label className='pl-4 w-4/5'>{defaultIssue['dumpTrashCans'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={checkBayEquipment} onChange={(e) => setCheckBayEquipment(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>
                    <label className='pl-4 w-4/5'>{defaultIssue['checkBayEquipment'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={mowLawn} onChange={(e) => setMowLawn(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>
                    <label className='pl-4 w-4/5'>{defaultIssue['mowLawn'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input type="checkbox" checked={checkVacuumHoses} onChange={(e) => setCheckVacuumHoses(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow"/>
                    <label className='pl-4 w-4/5'>{defaultIssue['checkVacuumHoses'].content}</label>
                </div> 
            </div>
            <CTAButton content="Done" route="/" 
                appData={
                    {
                        date: date,
                        issueID: randomID,
                        logType: "action",
                        content: null,
                        pickTrash: {
                            content: defaultIssue['pickTrash'].content,
                            checked: pickTrash
                        },
                        cleanVacuum: {
                            content: defaultIssue['cleanVacuum'].content,
                            checked: cleanVacuum
                        },
                        dumpTrashCans: {
                            content: defaultIssue['dumpTrashCans'].content,
                            checked: dumpTrashCans
                        },
                        checkBayEquipment: {
                            content: defaultIssue['checkBayEquipment'].content,
                            checked: checkBayEquipment
                        },
                        mowLawn: {
                            content: defaultIssue['mowLawn'].content,
                            checked: mowLawn
                        },
                        checkVacuumHoses: {
                            content: defaultIssue['checkVacuumHoses'].content,
                            checked: checkVacuumHoses
                        }
                    }
                } 
            />
        </main>
    );
}
//