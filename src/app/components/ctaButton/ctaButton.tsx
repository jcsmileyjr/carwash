
const CTAButton = ({content}:{content: string}) => {
    return (
        <button type="button" className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-base font-medium text-white hover:bg-indigo-700">
            {content}
        </button>
    );
}

export default CTAButton;