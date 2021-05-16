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

const makeSut = (): { sut: LetterCounter; stringUtilsStub: StringUtils } => {
    const stringUtilsStub = makeStringUtils()
    return {
        sut: new LetterCounter(stringUtilsStub),
        stringUtilsStub,
    }
}

describe('LetterCounter.countDuplicatedsOnly', () => {
    test('Should call StringUtils.groupByLetter with correct values', () => {
        const { sut, stringUtilsStub } = makeSut()
        const groupByLetterSpy = jest.spyOn(stringUtilsStub, 'groupByLetter')

        sut.countDuplicatedsOnly('any_message')
        expect(groupByLetterSpy).toBeCalledWith('any_message')
        expect(groupByLetterSpy).toBeCalledTimes(1)
    })

    test('Should return only duplcated letters', () => {
        const { sut } = makeSut()

        const dplicated = sut.countDuplicatedsOnly('test message')
        expect(dplicated).toEqual({
            t: 2,
            e: 3,
            s: 3,
        })
    })

    test('Should return empty object as response when no duplicated provided', () => {
        const { sut, stringUtilsStub } = makeSut()

        const fakeGroup = new Map<string, number>()
        fakeGroup.set('a', 1)
        fakeGroup.set('b', 1)
        fakeGroup.set('c', 1)
        fakeGroup.set('d', 1)
        fakeGroup.set('e', 1)
        fakeGroup.set('f', 1)
        fakeGroup.set('g', 1)
        stringUtilsStub.groupByLetter = () => fakeGroup

        const dplicated = sut.countDuplicatedsOnly('abcdefg')
        expect(dplicated).toEqual({})
    })

    test('Should return empty object as response when empty message provided', () => {
        const { sut, stringUtilsStub } = makeSut()

        stringUtilsStub.groupByLetter = () => new Map<string, number>()

        const dplicated = sut.countDuplicatedsOnly('')
        expect(dplicated).toEqual({})
    })

    test('Should throw when StringUtils.groupByLetter throws', () => {
        const { sut, stringUtilsStub } = makeSut()

        stringUtilsStub.groupByLetter = () => {
            throw Error('any_error')
        }

        expect(() => {
            sut.countDuplicatedsOnly('any_message')
        }).toThrowError('any_error')
    })
})
