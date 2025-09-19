import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "  hello world  ",
        expected: ["hello", "world"],
    },
    {
        input: " ThiS   IS   myTesT data!!! ",
        expected: ["this", "is", "mytest", "data!!!"],
    },
    {
        input: "FALSE TRUE false true  FaLsE  tRuE 1 0 ",
        expected: ["false", "true", "false", "true", "false", "true", "1", "0"],
    },
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
