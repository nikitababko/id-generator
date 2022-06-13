import { expect, assert } from 'chai';

import { uuidv4, shortIdGenerator } from './index';

describe('ID generator', () => {
   describe('uuidv4', () => {
      it("Value to be exists'", () => {
         assert.exists(
            uuidv4(),
            'Value is not exists or equal to null/undefined'
         );
      });

      it("Value length to be '37'", () => {
         expect(uuidv4()).to.be.length(36);
      });

      it("Value type to be 'string'", () => {
         assert(typeof uuidv4() === 'string', 'Value type is not a string');
      });
   });

   describe('shortIdGenerator', () => {
      it("Value to be exists'", () => {
         assert.exists(
            shortIdGenerator(),
            'Value is not exists or equal to null/undefined'
         );
      });

      it("Value length to be '7' if length agrument equal to 7", () => {
         expect(shortIdGenerator(7)).to.be.length(7);
      });

      it("Value type to be 'string'", () => {
         assert(
            typeof shortIdGenerator() === 'string',
            'Value type is not a string'
         );
      });
   });
});
