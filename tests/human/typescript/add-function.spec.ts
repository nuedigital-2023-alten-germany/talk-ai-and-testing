import { add } from "../../../src/typescript/simple/add-function-limited";

describe("add function", () => {
  describe("adding two valid numbers", () => {
    it("should return the sum of the two numbers", () => {
      expect(add(-4, 7)).toBe(3);
    });
  });

  describe("adding two invalid numbers", () => {
    it("should throw an Error", () => {
      expect(() => add(12, 2387)).toThrowError("Parameters too big");
    });
  });

  describe("Limit analysis", () => {
    describe("adding the maximum valid numbers", () => {
      it("should return the sum of the two numbers", () => {
        expect(add(10, 10)).toBe(20);
      });

      it("should return the sum of the two numbers", () => {
        expect(add(9.999999999, 9.999999999)).toBe(19.999999998);
      });
    });

    describe("adding the minimum invalid numbers", () => {
      it("should throw an Error", () => {
        expect(() => add(10.00000001, 10.00000001)).toThrowError(
          "Parameters too big"
        );
      });
    });

    describe("adding negative Infinity", () => {
      it("should return  -Infinity", () => {
        expect(add(-Infinity, -Infinity)).toBe(-Infinity);
      });
    });

    describe("adding Infinity", () => {
      it("should throw an Error", () => {
        expect(() => add(Infinity, Infinity)).toThrowError(
          "Parameters too big"
        );
      });
    });
  });

  describe("Combinatorial testing", () => {
    it("should return the value adding 9.99 and 9.99", () => {
      expect(add(9.99, 9.99)).toBe(19.98);
    });

    it("should return the value adding 10.00 and 10.00", () => {
      expect(add(10.0, 10.0)).toBe(20);
    });

    it("should throw adding 10.01 and 10.01", () => {
      expect(() => add(10.01, 10.01)).toThrowError();
    });

    it("should throw adding 9.99 and 10.01", () => {
      expect(() => add(9.99, 10.01)).toThrowError();
    });

    it("should throw adding 10.01 and 10.00", () => {
      expect(() => add(10.01, 10.0)).toThrowError();
    });

    it("should throw adding 10.0 and 10.01", () => {
      expect(() => add(10.0, 10.01)).toThrowError();
    });

    it("should return the value adding 10.00 and 9.99", () => {
      expect(add(10.0, 9.99)).toBeCloseTo(19.99);
    });

    it("should return the value adding 9.99 and 10.0", () => {
      expect(add(9.99, 10.0)).toBeCloseTo(19.99);
    });
  });

  describe("adding non decimal numbers", () => {
    describe("adding octal numbers", () => {
      it("should return the value adding two valid numbers", () => {
        expect(add(0o11, 0o6)).toBe(15);
      });

      it("should throw adding two invalid numbers", () => {
        expect(() => add(0o13, 0o16)).toThrowError();
      });
    });

    describe("adding binary numbers", () => {
      it("should return the value adding two valid numbers", () => {
        expect(add(0b101, 0b111)).toBe(12);
      });

      it("should throw adding two invalid numbers", () => {
        expect(() => add(0b100110001010, 0b11100011)).toThrowError();
      });
    });
  });
});
