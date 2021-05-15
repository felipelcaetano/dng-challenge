import { LetterCounter } from './letter-counter.func'
import { StringUtils } from '../interfaces/string-utils.interface'

const makeStringUtils = (): StringUtils => {
  class StringUtilsStub implements StringUtils {
    groupByLetter = (message: string): Map<string, number> => {
      const fakeGroup = new Map<string, number>()
      fakeGroup.set('t', 2)
      fakeGroup.set('e', 3)
      fakeGroup.set('s', 3)
      fakeGroup.set(' ', 1)
      fakeGroup.set('m', 1)
      fakeGroup.set('a', 1)
      fakeGroup.set('g', 1)
      return fakeGroup
    }
  }

  return new StringUtilsStub()
}

const makeSut = (): LetterCounter => {
  const stringUtils = makeStringUtils()
  return new LetterCounter(stringUtils)
}

describe('LetterCounter.countDuplicatedsOnly', () => {
  test('', () => {
    const sut = makeSut()
  });
});