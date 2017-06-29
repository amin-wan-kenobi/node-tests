const utils = require('./utils.js');
const expect = require('expect');

describe('Utils', () => {
    it('should add two numbers', () => {
        var res = utils.add(33, 11);
        expect(res).toBe(44).toBeA('number');
        //Above means we assert our value is 44
    });

    it('should suare a number', () => {
        var res = utils.square(9);
        expect(res).toBe(81).toBeA('number');
    });

    it('should subtrack two numbers', () => {
        var res = utils.sub(20, 10);
        expect(res).toBe(10).toBeA('number');
    });

    it('should get a full name and return a user object', () => {
        var user = { location: 'Canada', age: 36 };
        var res = utils.setName(user, 'Amin Ameri');
        expect(res)
            .toBeA('object')
            .toInclude({ firstName: 'Amin', lastName: 'Ameri' })
    });

    describe('Async Utils', () => {
        it('should asynce square a number', (done) => {
            utils.asyncSquar(5, (sum) => {
                expect(sum)
                    .toBeA('number')
                    .toBe(25);
                done();
            });
        });

        it('should async add two numbers', (done) => {
            utils.asyncAdd(3, 4, (sum) => {
                expect(sum)
                    .toBeA('number')
                    .toBe(7);
                done();
            })
        });
    });

});

// it('should expect some values', () => {
//     expect(12).toNotBe(12);
//     expect({name: 'Amin'}).toEqual({name: 'Amin'});
//     expect([2,3,4]).toInclude(2);
//     expect([2,3,4]).toExclude(5);
//     expect({
//         name: 'Amin',
//         age: 36,
//         location: 'Canada'
//     }).toInclude({
//         age: 36
//     })
// });

