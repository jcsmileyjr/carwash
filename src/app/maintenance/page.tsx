"use client"
import AppHeader from "../components/appHeader/appHeader";
import CTAButton from "../components/ctaButton/ctaButton";
import BackButton from "../components/backButton/backButton";
import PageTitle from "../components/pageTitle/pageTitle";
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
    let defaultIssue = createDefaultIssue();

    const [date, setDate] = useState(defaultIssue.date);
    const [pickTrash, setPickTrash] = useState(false);
    const [cleanVacuum, setCleanVacuum] = useState(false);
    const [dumpTrashCans, setDumpTrashCans] = useState(false);
    const [checkBayEquipment, setCheckBayEquipment] = useState(false);
    const [mowLawn, setMowLawn] = useState(false);
    const [checkVacuumHoses, setCheckVacuumHoses] = useState(false);

    const handleSubmit = () => {
       const results = {
            "issueID":  uuidv4(),
            "date":date,
            "logType": "action",
            "content": null,
            "pickTrash": {
                content: defaultIssue['pickTrash'].content,
                checked: pickTrash
            },
            "cleanVacuum": {
                content: defaultIssue['cleanVacuum'].content,
                checked: cleanVacuum
            },
            "dumpTrashCans": {
                content: defaultIssue['dumpTrashCans'].content,
                checked: dumpTrashCans
            },
            "checkBayEquipment": {
                content: defaultIssue['checkBayEquipment'].content,
                checked: checkBayEquipment
            },
            "mowLawn": {
                content: defaultIssue['mowLawn'].content,
                checked: mowLawn
            },
            "checkVacuumHoses": {
                content: defaultIssue['checkVacuumHoses'].content,
                checked: checkVacuumHoses
            }
        }
        return JSON.stringify(results);
    }

    return (
        <main className='md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white'>
            <AppHeader />
            <PageTitle content="Record Maintenance" />
            <div className="m-12 flex flex-col gap-8">
                <div className='flex flex-row'>
                    <Image priority={false} src={Calendar} width={40} height={30} alt="" className='h-8 mr-4 self-end' />
                    <input data-testid="date" aria-label="Date" type="date" value={date} onChange={(e) => setDate(e.target.value)}  className="border-b-4 border-black w-full bg-white text-black"/>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="pickTrash" type="checkbox" checked={pickTrash} onChange={(e) => setPickTrash(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black"/>
                    <label htmlFor="pickTrash" className='pl-4 w-4/5 text-black'>{defaultIssue['pickTrash'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="cleanVacuum" type="checkbox" checked={cleanVacuum} onChange={(e) => setCleanVacuum(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black text-black"/>  
                    <label htmlFor="cleanVacuum"  className='pl-4 w-4/5 text-black'>{defaultIssue['cleanVacuum'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="dumpTrashCans" type="checkbox" checked={dumpTrashCans} onChange={(e) => setDumpTrashCans(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black"/>
                    <label htmlFor="dumpTrashCans" className='pl-4 w-4/5 text-black'>{defaultIssue['dumpTrashCans'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="checkBayEquipment" type="checkbox" checked={checkBayEquipment} onChange={(e) => setCheckBayEquipment(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black"/>
                    <label htmlFor="checkBayEquipment" className='pl-4 w-4/5 text-black'>{defaultIssue['checkBayEquipment'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="mowLawn" type="checkbox" checked={mowLawn} onChange={(e) => setMowLawn(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black"/>
                    <label htmlFor="mowLawn" className='pl-4 w-4/5 text-black'>{defaultIssue['mowLawn'].content}</label>
                </div>
                <div className='flex flex-row align-center'>
                    <input id="checkVacuumHoses" type="checkbox" checked={checkVacuumHoses} onChange={(e) => setCheckVacuumHoses(e.target.checked)} className="h-8 w-8 self-center border-4 border-solid border-black accent-goldYellow text-black"/>
                    <label htmlFor="checkVacuumHoses" className='pl-4 w-4/5 text-black'>{defaultIssue['checkVacuumHoses'].content}</label>
                </div> 
            </div>
            <CTAButton content="Save" route="/" appData={handleSubmit()} />
            <BackButton content="Don't Save, Go Back" route="/"/>
        </main>
    );
}
//