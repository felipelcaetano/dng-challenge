import { StringUtilsHelper } from './helpers/string-utils.helper'
import { LetterCounter } from './functions/letter-counter.func'
import * as readline from 'readline'

const stringUtilsHelper = new StringUtilsHelper()
const letterCounter = new LetterCounter(stringUtilsHelper)

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

rl.question('Provide a text to calculate duplicated letters: ', (message) => {
    if (message === '') {
        throw Error('Provide a valid text!')
    }

    const response = letterCounter.countDuplicatedsOnly(message)
    console.log(`Duplicated letters:\n ${JSON.stringify(response, null, 2)}`)
    rl.close()
})
