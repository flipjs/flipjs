var expect = require('chai').expect
var flipjs = require('../src/index')

describe('flipjs', function () {
  describe('isEmpty', function () {
    it('should return true when empty', function () {
      expect(flipjs.isEmpty({})).to.be.true
      expect(flipjs.isEmpty([])).to.be.true
      expect(flipjs.isEmpty('')).to.be.true
    })
    it('should return false when not empty', function () {
      expect(flipjs.isEmpty({not: 'empty'})).to.be.false
      expect(flipjs.isEmpty(['not empty'])).to.be.false
      expect(flipjs.isEmpty('not empty')).to.be.false
    })
  })
  describe('capitalize', function () {
    it('should capitalize a word', function () {
      expect(flipjs.capitalize('chris')).to.be.equal('Chris')
    })
    it(
      'should return an empty string when no params passed to it',
      function () {
        expect(flipjs.capitalize()).to.be.equal('')
      }
    )
  })
})
