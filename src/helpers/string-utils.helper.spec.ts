import { StringUtilsHelper } from './string-utils.helper'

const makeSut = (): StringUtilsHelper => {
    return new StringUtilsHelper()
}

describe('StringUtilsHelper.groupByLetter', () => {
    test('Should return group of letters properly', () => {
        const sut = makeSut()
        const response = sut.groupByLetter('test message')
        const expectedMap = new Map<string, number>()
        expectedMap.set('t', 2)
        expectedMap.set('e', 3)
        expectedMap.set('s', 3)
        expectedMap.set(' ', 1)
        expectedMap.set('m', 1)
        expectedMap.set('a', 1)
        expectedMap.set('g', 1)
        expect(response).toEqual(expectedMap)
    })
})
