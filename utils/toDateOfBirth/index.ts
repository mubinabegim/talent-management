import moment from "moment"

export const toDobFormat = (date_or_time?: string) => {
    return moment(date_or_time).format('DD MMM YYYY');
}