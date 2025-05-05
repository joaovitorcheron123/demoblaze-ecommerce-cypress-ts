export function given(description: string, fn: () => void) {
    it(`GIVEN ${description}`, fn);
}
  
export function when(description: string, fn: () => void) {
    it(`WHEN ${description}`, fn);
}
  
export function then(description: string, fn: () => void) {
    it(`THEN ${description}`, fn);
}
  
export function and(description: string, fn: () => void) {
    it(`AND ${description}`, fn);
}