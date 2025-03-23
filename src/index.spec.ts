import { describe, expect, it } from 'vitest'
import { hexId, uuidv4 } from './index.ts'

describe('ID generator', () => {
    describe('uuidv4', () => {
        it('should return a defined, non‑null value', () => {
            const id = uuidv4()
            expect(id).toBeDefined()
            expect(id).not.toBeNull()
        })

        it('should produce a 36‑character string', () => {
            expect(uuidv4()).toHaveLength(36)
        })

        it('should return a string', () => {
            expect(uuidv4()).toBeTypeOf('string')
        })
    })

    describe('hexId', () => {
        it('should return a defined, non‑null value', () => {
            const id = hexId()
            expect(id).toBeDefined()
            expect(id).not.toBeNull()
        })

        it('should produce the correct length when provided', () => {
            expect(hexId(7)).toHaveLength(7)
        })

        it('should return a string', () => {
            expect(hexId()).toBeTypeOf('string')
        })
    })
})
