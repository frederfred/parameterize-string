const test = require('tape');
const parameterize = require('../src/index');

/* eslint-disable no-multi-spaces */
const testStrings = {
  stringToParameterized: {
    options: {
      separator: '-',
      preserveCase: false,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'donald-e-knuth' },
      { input: 'Random text with *(bad)* characters', output: 'random-text-with-bad-characters' },
      { input: 'Allow_Under_Scores',                  output: 'allow_under_scores' },
      { input: 'Trailing bad characters!@#',          output: 'trailing-bad-characters' },
      { input: '!@#Leading bad characters',           output: 'leading-bad-characters' },
      { input: 'Squeeze   separators',                output: 'squeeze-separators' },
      { input: 'Test with + sign',                    output: 'test-with-sign' },
    ],
  },
  stringToParameterizedPreserveCase: {
    options: {
      separator: '-',
      preserveCase: true,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'Donald-E-Knuth' },
      { input: 'Random text with *(bad)* characters', output: 'Random-text-with-bad-characters' },
      { input: 'Allow_Under_Scores',                  output: 'Allow_Under_Scores' },
      { input: 'Trailing bad characters!@#',          output: 'Trailing-bad-characters' },
      { input: '!@#Leading bad characters',           output: 'Leading-bad-characters' },
      { input: 'Squeeze   separators',                output: 'Squeeze-separators' },
      { input: 'Test with + sign',                    output: 'Test-with-sign' },
    ],
  },
  stringToParameterizeWithNoSeparator: {
    options: {
      separator: null,
      preserveCase: false,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'donaldeknuth' },
      { input: 'With-some-dashes',                    output: 'with-some-dashes' },
      { input: 'Random text with *(bad)* characters', output: 'randomtextwithbadcharacters' },
      { input: 'Trailing bad characters!@#',          output: 'trailingbadcharacters' },
      { input: '!@#Leading bad characters',           output: 'leadingbadcharacters' },
      { input: 'Squeeze   separators',                output: 'squeezeseparators' },
      { input: 'Test with + sign',                    output: 'testwithsign' },
    ],
  },
  stringToParameterizePreserveCaseWithNoSeparator: {
    options: {
      separator: null,
      preserveCase: true,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'DonaldEKnuth' },
      { input: 'With-some-dashes',                    output: 'With-some-dashes' },
      { input: 'Random text with *(bad)* characters', output: 'Randomtextwithbadcharacters' },
      { input: 'Trailing bad characters!@#',          output: 'Trailingbadcharacters' },
      { input: '!@#Leading bad characters',           output: 'Leadingbadcharacters' },
      { input: 'Squeeze   separators',                output: 'Squeezeseparators' },
      { input: 'Test with + sign',                    output: 'Testwithsign' },
    ],
  },
  stringToParameterizeWithUnderscore: {
    options: {
      separator: '_',
      preserveCase: false,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'donald_e_knuth' },
      { input: 'Random text with *(bad)* characters', output: 'random_text_with_bad_characters' },
      { input: 'With-some-dashes',                    output: 'with-some-dashes' },
      { input: 'Retain_underscore',                   output: 'retain_underscore' },
      { input: 'Trailing bad characters!@#',          output: 'trailing_bad_characters' },
      { input: '!@#Leading bad characters',           output: 'leading_bad_characters' },
      { input: 'Squeeze   separators',                output: 'squeeze_separators' },
      { input: 'Test with + sign',                    output: 'test_with_sign' },
    ],
  },
  stringToParameterizePreserceCaseWithUnderscore: {
    options: {
      separator: '_',
      preserveCase: true,
    },
    tests: [
      { input: 'Donald E. Knuth',                     output: 'Donald_E_Knuth' },
      { input: 'Random text with *(bad)* characters', output: 'Random_text_with_bad_characters' },
      { input: 'With-some-dashes',                    output: 'With-some-dashes' },
      { input: 'Allow_Under_Scores',                  output: 'Allow_Under_Scores' },
      { input: 'Trailing bad characters!@#',          output: 'Trailing_bad_characters' },
      { input: '!@#Leading bad characters',           output: 'Leading_bad_characters' },
      { input: 'Squeeze   separators',                output: 'Squeeze_separators' },
      { input: 'Test with + sign',                    output: 'Test_with_sign' },
    ],
  },
  stringToParameterizedAndNormalized: {
    options: {
      separator: '-',
      preserveCase: false,
    },
    tests: [
      { input: 'Malmö',                               output: 'malmo' },
      { input: 'Garçons',                             output: 'garcons' },
      { input: 'Ærøskøbing',                          output: 'aeroskobing' },
      { input: 'Aßlar',                               output: 'asslar' },
      { input: 'Japanese: 日本語',                     output: 'japanese' },
    ],
  },
};
/* eslint-enable no-multi-spaces */

Object.keys(testStrings).forEach((key) => {
  test(key, (assert) => {
    const cases = testStrings[key];

    cases.tests.forEach((obj) => {
      const actual = parameterize(obj.input, cases.options);
      const expected = obj.output;

      assert.equal(actual, expected);
    });

    assert.end();
  });
});
