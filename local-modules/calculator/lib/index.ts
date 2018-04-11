class Calculator {
  a: number
  b: number
  constructor(a: number, b: number) {
    this.a = a
    this.b = b
  }
  add(): number { return this.a + this.b }
  subtract(): number { return this.a - this.b }
}

export { Calculator }