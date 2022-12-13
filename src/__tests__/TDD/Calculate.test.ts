


export function MultiplyBy10(number: number): number {
    return number * 10;
};

describe('Calculation Tests', () => {
   
it('Calling MultiplyBy10 expected to be 10', () => {
     //Arrange
    const number = 5;
    const expected = 50;
    //Act
    const actual = MultiplyBy10(number);
    //assert
    expect(actual).toBe(expected);
})


})


