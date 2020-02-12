#!/usr/bin/env node

/*****************************************************************
 * Create new typescript-react-native-starter project.
 * created by Lim Kyungmin, 02/10/2020
 *****************************************************************/

const path = require('path');
const starter = require('../lib/typescript-react-native-starter');
const destination = getDest(process.argv[2]);

function getDest(destFolder) {
  destFolder = destFolder || 'typescript-react-native-starter';
  return path.join(process.cwd(), destFolder);
};

starter(destination);
