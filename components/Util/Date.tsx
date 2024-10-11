import { FC } from "react";
import { IDate } from "../../constants/Interface";

const getFormattedDate: FC<IDate> = (date) => {
    // const year = String(  )
    // const month = String(  + 1)
    // const day = String (  )
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate() + 1}`;
}

export function getdateminusdays(date: Date, days: number) {
    return new Date (date.getFullYear(), date.getMonth(), date.getDay() - days)
}


export default getFormattedDate