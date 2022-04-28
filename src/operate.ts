export function operate(a: number, b: number, operation:string): number {
    switch (operation) {
        case '+': return a + b;
        case '-': return a - b;
        case '*': return a * b;
        case '/': return a / b;
        default: throw "invalid mode";
    }
}