
export default interface Issue {
    issueID: string,
	date: string,
	logType: string,
	content: string | null,
	pickTrash: {
			content: string,
			checked: boolean
	},
	cleanVacuum: {
        content: string,
        checked: boolean
    },
    dumpTrashCans: {
			content: string,
			checked: boolean
	},
    mowLawn: {
			content: string,
			checked: boolean
	},
    checkVacuumHoses: {
			content: string,
			checked: boolean
	},
    checkBayEquipment: {
			content: string,
			checked: boolean
	},
    checkVacuumCoinAccepter: {
		content: string,
		checked: boolean
	},	
};