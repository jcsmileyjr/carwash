import {DummyIssues} from '../dashboard/api/dummyIssues';
export default async function getMaintenanceData () {
    console.log('hello', process.env.LOCAL_PROJECT_ID);
    return DummyIssues;
    // const response = await fetch('http://localhost:3000/dashboard/api');  
    // const data = await response.json();  
    //return data;
}