import { StringUtils } from "../interfaces/string-utils.interface"

export interface CountDuplicatedsResult extends Map<string, number> {}

export class LetterCounter {

  constructor(private readonly stringUtils: StringUtils) {
  }

  public countDuplicatedsOnly = (message: string): CountDuplicatedsResult => {
    const groups = this.stringUtils.groupByLetter(message)

    const response: CountDuplicatedsResult = new Map()
    
    groups.forEach((value: number, key: string) => {
      if(key.trim() || value >= 2) {
        response.set(key, value)
      }
    })

    return response
  }
}