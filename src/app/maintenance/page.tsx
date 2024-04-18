import AppHeader from "../components/appHeader/appHeader";
export default function Maintenance () {
    return (
        <main className='md:w-1/2 md:mx-auto flex min-h-screen flex-col p-1 bg-white'>
            <AppHeader />
            <h1 className="mt-4 text-xl font-bold underline text-gray-900 text-center">Maintenance Wizard</h1>
        </main>
    );
}