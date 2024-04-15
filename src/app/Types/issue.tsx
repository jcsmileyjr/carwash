
export default interface Issue {
    issueID: number,
	date: string,
	logType: 'maintenance' | 'action',
	content: string | null,
	pickTrash: {
			content: 'Pick up trash',
			checked: boolean
	},
	cleanVacuum: {
        content: 'Pick up trash',
        checked: boolean
    },
    dumpTrashCans: {
			content: 'Pick up trash',
			checked: boolean
	},
    mowLawn: {
			content: 'Pick up trash',
			checked: boolean
	},
    checkVacuumHoses: {
			content: 'Pick up trash',
			checked: boolean
	},
    checkBayEquipment: {
			content: 'Pick up trash',
			checked: boolean
	},
};