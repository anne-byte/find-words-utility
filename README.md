# findWords Utility

The `findWords` utility is a TypeScript function that takes a string of letters as input and returns a list of valid English words that can be created using those letters.

## Table of Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The `findWords` utility is designed to help you find valid English words that can be formed using a given set of letters. It can be useful for word games, puzzles, or any scenario where you need to find words from a set of characters.

## Installation

To use the `findWords` utility in your TypeScript project, you can follow these steps:

1. Clone or download this repository: https://github.com/anne-byte/find-words-utility.

2. Navigate to the project directory:

cd find-words-utility

npm install

npm run build

## Usage
The findWords function takes a single argument, which is a string of letters. It then returns an array of valid English words that can be formed using those letters.

import { findWords } from './dist/findWords';

const input = 'oogd';
const validWords = findWords(input);
console.log(validWords); // Output: ['good', 'god', 'dog', 'goo', 'do', 'go']

## Examples
Here's an example of how to use the findWords utility:

import { findWords } from './dist/findWords';

const input = 'oogd';
const validWords = findWords(input);
console.log(validWords); // Output: ['good', 'god', 'dog', 'goo', 'do', 'go']

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvements, please feel free to submit a pull request or open an issue in this repo: https://github.com/anne-byte/find-words-utility.

## License
This project is licensed under the MIT License.
