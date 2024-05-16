import Issue from '../../Types/issue';
import Image from 'next/image';
import LightBulb from '../../../images/bulb-icon-yellow.png';
import Hammer from '../../../images/hammer-icon.png';
import Warning from '../../../images/warning-icon.png';

/**
 * Renders a list of issues.
 *
 * @param {Object} issue - The issue object.
 * @param {Issue} issue.issue - The issue data.
 * @param {string} issue.imageType - determine if the image should be a hammer or lightbulb
 * @return {JSX.Element} The rendered list of issues.
 */
const Issues = ({issue, imageType}: {issue: Issue, imageType: string}) => {
    if (issue.logType === "maintenance") {
        return (
            <div className='flex flex-row justify-start gap-4 my-2 mx-12' key={issue.issueID}>
                <Image priority={false} src={Warning} width={20} height={5} alt="" className='h-6 self-center' />
                <p className='text-black'>{issue.content}</p>
            </div>
        )
    } else {
        return (
            <div className='mx-12'>
                {Object.keys(issue).map((key) => {
                    if (key === 'pickTrash' || key === 'cleanVacuum' || key === 'dumpTrashCans' || key === 'checkBayEquipment' || key === 'mowLawn' || key === 'checkVacuumHoses' || key === 'checkVacuumCoinAccepter') {
                        const action = issue[key];
                        if(action.checked === true) {
                            return (
                                <div className='flex flex-row justify-start gap-4 my-2' key={key}>
                                    {imageType === 'hammer' &&
                                        <Image priority={false} src={Hammer} width={20} height={5} alt="" className='h-6' />
                                    }
                                    {imageType === 'lightbulb' &&
                                        <Image priority={false} src={LightBulb} width={20} height={5} alt="" className='h-6' />
                                    }
                                    <p className='text-black'>{action.content}</p>
                                </div>
                            )
                        }
                    }
                })}
            </div>
        )
    }
}

export default Issues;