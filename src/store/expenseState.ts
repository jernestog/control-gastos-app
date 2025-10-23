import { create } from "zustand";
import { persist} from "zustand/middleware"
import { BalanceState,  Transaction } from "../interfaces/interfaces";

export const useExpenseState = create<BalanceState>()(
           persist( (set) => ({
            transactions :[],
            balance : 0,
            income : 0,
            expense : 0,
            
            getBalance : () => set(state => ({
                ...state,
                balance : Math.round( state.transactions.reduce((acc, transaction) => (acc + transaction.amount), 0) *100 ) / 100
            })) ,
            getIncome : () => set (state => ({
                ...state,
                income  : Math.round( state.transactions.filter(transaction => transaction.concept === 'income').reduce((acc, transaction) => (acc + transaction.amount), 0) * 100 ) /100
            })),
            getExpense : () => set (state => ({
                ...state,
                expense  : Math.floor( ( state.transactions.filter(transaction => transaction.concept === 'expense').reduce((acc, transaction) => (acc + transaction.amount), 0) ) * -1 * 100 ) / 100
            })),
            cleanBalance : (mount:number) => set (state => ({
                ...state,
                balance : mount,
                income : mount,
                expense : mount,
                transactions : []
            })),
            addTransaction: (transaction : Transaction)  => set( state => ({
                ...state,
                transactions : [...state.transactions, transaction]
            }))
           
        }),{
            name : 'expenseStorage'
        }

        )
        );
    
