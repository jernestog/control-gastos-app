type conceptType = 'expense' | 'income'

export interface Transaction {
    id: string
    desc: string
    amount : number
    concept : conceptType
}

export interface BalanceState {
    transactions : Transaction[],
    balance : number
    income : number
    expense : number
    getBalance : () => void
    cleanBalance : (mount:number) => void
    getIncome : () => void
    getExpense : () => void
    addTransaction: (transaction : Transaction) => void
}

//Inputs Fields Interface

export interface InputsFieds {
    inputDesc : string
    inputAmount : string
    inputConcept : conceptType
} 