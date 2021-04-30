import buildDiff from '../build-difference.js';
import stylish from './stylish.js';
import plain from './plain.js';
import json from './json.js';

const formatters = [plain, stylish, json];

const genDiff = (file1, file2, formatter = 'stylish') => {
  const index = formatters.map((n) => n.name).indexOf(formatter);
  const currFormat = formatters[index];
  return currFormat(buildDiff(file1, file2));
};

export default genDiff;
