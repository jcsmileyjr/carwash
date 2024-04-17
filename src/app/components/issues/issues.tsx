import Issue from '../../Types/issue';
import Image from 'next/image';
import LightBulb from '../../../images/bulb-icon-yellow.png';

/**
 * Renders a list of issues.
 *
 * @param {Object} issue - The issue object.
 * @param {Issue} issue.issue - The issue data.
 * @return {JSX.Element} The rendered list of issues.
 */
const Issues = ({issue, summaryList}: {issue: Issue, summaryList: boolean}) => {
    return (
        <div className='mx-12'>
            {Object.keys(issue).map((key) => {
                if (summaryList === true) {
                    if (key === 'pickTrash' || key === 'cleanVacuum' || key === 'dumpTrashCans' || key === 'checkBayEquipment') {
                        const action = issue[key];
                        return (
                            <div className='flex flex-row justify-start gap-4 my-2' key={key}>
                                <Image priority={false} src={LightBulb} width={20} height={5} alt="" className='h-6' />
                                <p>{action.content}</p>
                            </div>
                        )
                    }    
                } else if (summaryList === false) {
                    if (key === 'mowLawn' || key === 'checkBayEquipment') {                        
                        const action = issue[key];
                        return (
                            <div className='flex flex-row justify-start gap-4 my-2' key={key}>
                                <Image priority={false} src={LightBulb} width={20} height={5} alt="" className='h-6' />
                                <p>{action.content}</p>
                            </div>
                        )
                    }
                }               
            })}
        </div>
    )
}

export default Issues;