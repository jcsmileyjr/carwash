import Link from 'next/link';

const BackButton = ({content, route}:{content: string, route: string}) => {
    return (
        <Link href={{ pathname: route}} className="mt-4 inline-flex items-center justify-center hover:uppercase px-5 py-3 text-base font-medium text-black w-1/2 mx-auto ">
            {content}
        </Link>
    );
}

export default BackButton;
