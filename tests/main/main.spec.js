const chain = require("chai");
chain.should();
const electron = require('electron');
const app = electron.app;

describe('main tests', () => {
    it('should test app.getVersion()', () => {
        const version = app.getVersion();
        version.should.be.a('string');
        version.should.not.be.empty;
    });
});