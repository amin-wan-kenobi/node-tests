const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');

describe('App', () => {
    var db = {
        saveUser: expect.createSpy(),
        loadMessage: expect.createSpy()
    };

    app.__set__('db', db);

    // it('should call the spy correctly', () => {
    //     var spy = expect.createSpy();
    //     spy();
    //     expect(spy).toHaveBeenCalled();
    //     spy('Amin', 25);
    //     expect(spy).toHaveBeenCalledWith('Amin', 25);
    // });

    it('should call userSave and loadMessage with user object and simple text', () => {
        var email = 'someEmail';
        var password = 'SomePassword';
        app.handleSignup(email, password);
        expect(db.saveUser).toHaveBeenCalledWith({email, password});
        expect(db.loadMessage).toHaveBeenCalledWith('Test Message');
    });
    
});