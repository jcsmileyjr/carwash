import Link from 'next/link';
import Issue from "../../../app/Types/issue";
const CTAButton = ({content, route, appData}:{content: string, route: string, appData?: Issue}) => {
    const convertedAppData = JSON.stringify(appData);
    return (
        <Link href={{ pathname: route, query: convertedAppData }} className="inline-flex items-center justify-center rounded-md border border-transparent bg-goldYellow hover:bg-slate-900 px-5 py-3 text-base font-medium text-black hover:text-goldYellow w-1/2 mx-auto shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]">
            {content}
        </Link>
    );
}

export default CTAButton;