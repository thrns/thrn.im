declare module 'bun:test' {
  type Assertion = {
    toContain(expected: string): void;
    toBe(expected: unknown): void;
    toBeLessThanOrEqual(expected: number): void;
  };

  export function describe(name: string, fn: () => void): void;
  export function test(name: string, fn: () => void): void;
  export function expect(actual: unknown): Assertion;
}
