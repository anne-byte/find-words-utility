import { findWords } from '../src';

describe('findWords function', () => {
  it('returns valid English words from input', () => {
    const input = 'oogd';
    const expectedOutput: string[] = ['good', 'god', 'dog', 'goo', 'do', 'go'];
    const result = findWords(input);
    expect(result).toEqual(expectedOutput);
  });

  it('handles empty input', () => {
    const input = '';
    const expectedOutput: string[] = [];
    const result = findWords(input);
    expect(result).toEqual(expectedOutput);
  });
});