const enhancer = require('./enhancer.js');

const { repair, fail, succeed } = require('./enhancer.js');


// test away!

describe('the enhancer module', () => {
    // success function test 
    describe('the succeed function', () => {
        it('items enhancement should increase by an increment of 1', () => {

            // Arrange
            const expected = {
                name: "broad sword",
                durability: 100,
                enhancement: 14
            };

            // Act
            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 13
            };

            // Assert
            expect(succeed(item)).toEqual(expected);
        });

        // test
        it('item with an enhancement of 20 will remain the same', () => {

            // Arrange
            const expected = {
                name: "broad sword",
                durability: 100,
                enhancement: 20
            }

            // Act
            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 20
            };

            // Assert
            expect(succeed(item)).toEqual(expected)
        });
    });

    // fail function test
    describe('the fail function', () => {
        it('will return item with -5 durability', () => {

            // Arrange
            const expected = {
                name: "broad sword",
                durability: 95,
                enhancement: 11
            };

            // Act
            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 11
            };

            // Assert
            expect(fail(item)).toEqual(expected);
        });

        it('will return item with -10 durability', () => {

            // Arrange
            const expected = {
                name: "broad sword",
                durability: 90,
                enhancement: 15
            };

            // Act
            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 15
            };

            // Assert
            expect(fail(item)).toEqual(expected);
        });

        it('will return item with -10 durability and -1 enhancement', () => {

            // Arrange
            const expected = {
                name: "broad sword",
                durability: 90,
                enhancement: 17
            };

            // Act
            const item = {
                name: "broad sword",
                durability: 100,
                enhancement: 18
            };

            // Assert
            expect(fail(item)).toEqual(expected);
        });
    });

    // repair function test
    describe('the repair function', () => {
        it('items durability should return to 100 after it is repaired', () => {
             // Arrange
               const expected = {
                name: "broad sword",
                durability: 100,
                enhancement: 20
            };
            
            // Act
              const item = {
                name: "broad sword",
                durability: 30,
                enhancement: 20
            };

            // Assert
            expect(repair(item)).toEqual(expected);
        });
    });
});

