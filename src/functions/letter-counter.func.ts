import { StringUtils } from '../interfaces/string-utils.interface'

// export interface CountDuplicateResult extends Map<string, number> {}
export interface CountDuplicateResult {
    [letter: string]: number
}

export class LetterCounter {
    constructor(private readonly stringUtils: StringUtils) {}

    public countDuplicateOnly = (message: string): CountDuplicateResult => {
        const groups = this.stringUtils.groupByLetter(message)

        let response: CountDuplicateResult = {}

        groups.forEach((value: number, key: string) => {
            if (key?.trim() !== '' && value >= 2) {
                response = { ...response, [key]: value }
            }
        })

        return response
    }
}
