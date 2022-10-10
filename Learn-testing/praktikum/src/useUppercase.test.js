import { renderHook } from '@testing-library/react';
import { useUppercase } from './useUppercase';


describe('when renddered', () => {
    it("returns current initial value, upercased", () => {
        const { result } = renderHook(
            () => useUppercase("Test string"));
        
            expect(result.current.value).toEqual("TESTING STRING")
        })
    })
    
