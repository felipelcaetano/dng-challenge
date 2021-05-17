import { StringUtils } from '../interfaces/string-utils.interface'

export class StringUtilsHelper implements StringUtils {
    public groupByLetter = (message: string): Map<string, number> => {
        return message
            .split('')
            .map((letter: string): Map<string, number> => {
                const map = new Map()
                map.set(letter, 1)
                return map
            })
            .reduce((prev: Map<string, number>, curr: Map<string, number>) => {
                const currEntries = curr.entries().next().value

                if (prev.has(currEntries[0])) {
                    let currResult = prev.get(currEntries[0]) ?? 0
                    currResult += Number(currEntries[1])
                    prev.set(currEntries[0], currResult)
                    return prev
                } else {
                    prev.set(currEntries[0], 1)
                    return prev
                }
            }, new Map<string, number>())
    }
}
