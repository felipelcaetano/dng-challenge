module.exports = {
    collectCoverageFrom: [
        '<rootDir>/**/*.ts',
        '!<rootDir>/**/*index.ts',
        '!<rootDir>/dist/**',
    ],
    coverageDirectory: 'coverage',
    testEnvironment: 'node',
    testMatch: ['<rootDir>/**/*.spec.ts'],
    transform: {
        '.+\\.ts$': 'ts-jest',
    },
    coverageThreshold: {
        global: {
            branches: 90,
            functions: 90,
            lines: 90,
            statements: 90,
        },
    },
    testResultsProcessor: 'jest-junit',
}
