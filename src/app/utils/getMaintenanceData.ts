
export default async function getMaintenanceData () {
    const response = await fetch('http://localhost:3000/dashboard/api');  
    const data = await response.json();  
    return data;
}