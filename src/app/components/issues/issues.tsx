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
const Issues = ({issue}: {issue: Issue}) => {
    return (
        <div className='mx-12'>
            {Object.keys(issue).map((key) => {
                if(key === 'pickTrash' || key === 'cleanVacuum' || key === 'dumpTrashCans' || key === 'mowLawn' || key === 'checkVacuumHoses' || key === 'checkBayEquipment') {
                    const action = issue[key];
                    return (
                        <div className='flex flex-row justify-start gap-4 my-2' key={key}>
                            <Image priority={false} src={LightBulb} width={20} height={5} alt="" className='' />
                            <p>{action.content}</p>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Issues;