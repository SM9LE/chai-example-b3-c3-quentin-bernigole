const Cube = require('../src/app').Cube;
const Triangle = require('../src/app').Triangle;
const expect = require('chai').expect;
const assert = require('chai').assert;

// Tests Cube

describe('Testing the Cube Functions', function() {
    it('1. The side length of the Cube', function (done) {
        let c1 = new Cube(2);
        expect(c1.getSideLength()).to.equal(2);
        done();
    });

    it('2. The surface area of the Cube', function (done) {
        let c2 = new Cube(5);
        expect(c2.getSurfaceArea()).to.equal(150);
        done();
    });

    it('3. The volume of the Cube', function (done) {
        let c3 = new Cube(7);
        expect(c3.getVolume()).to.equal(343);
        done();
    });
},

// Test Triangles

describe('Testing the Triangle Functions', function() {
    it('1. Is it a right-angled Triangle', function(done) {
        let t1 = new Triangle(4, 3, 2);
        let t2 = new Triangle(4, 3, 5);
        assert.equal(t1.isRightAngledTriangle(), false);
        assert.equal(t2.isRightAngledTriangle(), true);
        done();
    });

    it('2. The surface area of right-angled Triangle', function(done) {
        let t3 = new Triangle(4, 3, 5);
        expect(t3.getSurfaceRightAngledTriangle()).to.equal(6);
        done();
    });

    it('3. Is it an isoceles Triangle', function(done) {
        let t4 = new Triangle(5, 5, 3);
        let t5 = new Triangle (6, 6, 6);
        let t6 = new Triangle(3, 4, 4);
        assert.equal(t4.isIsocelesTriangle(), true);
        assert.equal(t5.isIsocelesTriangle(), true);
        assert.equal(t6.isIsocelesTriangle(), false);
        done();
    });

    it('4. The surface area of any Triangle', function(done) {
        let t7 = new Triangle(5, 2, 2, 3);
        expect(t7.getSurfaceAnyTriangle()).to.equal(7.5);
        done();
    });

}));