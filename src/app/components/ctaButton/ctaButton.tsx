
const CTAButton = ({content}:{content: string}) => {
    return (
        <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-goldYellow hover:bg-slate-900 px-5 py-3 text-base font-medium text-black hover:text-goldYellow w-1/2 mx-auto">
            {content}
        </button>
    );
}

export default CTAButton;