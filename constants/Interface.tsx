import { ReactNode } from "react"

export interface IAllExpenses {

}

export interface IRecentExpenses {
    
}

export interface IManageExpenses {
    route? : any
    navigation? : any
}

export interface IExpensesOutput {
    expenses? : any
    expensesperiod? : any
    fallbacktext: string
}

export interface IExpensesSummary {
    expenses? : any
    periodname? : any
}

export interface IExpensesList {
    expenses? : any
}

export interface IExpensesItem {
    date? : any
    id? : string
    amount? : number
    description? : string
}

export interface IDate {
    getFullYear(): Date
    getMonth(): any
    getDate(): any
    toISOString(): any
    date? : Date
}

export interface IIconButton {
    name? : any,
    size? : number,
    color? : string
    onPress? : any
}

export interface IButton {
    style? : any
    children? : ReactNode
    onPress? : () => void
    mode? : any
}

export interface IExpenseForm {
    onCancel?: () => void,
    submitButtonLabel?: string
    onSubmit?: any
    defaultValues?: any
}

export interface IInput {
    isvalid?: any
    label? : string
    description?: string
    amount?: number
    date?: Date
    textinputconfig?: any
    style?: any
}

export interface ISearch {
    searchedItem?: any
}

export interface IstoreExpense {
    expenseData?: () => any
}

export interface ILoading {
    message?: string
}