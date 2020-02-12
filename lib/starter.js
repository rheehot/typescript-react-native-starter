/*****************************************************************
 * Create new typescript-react-native-starter project.
 * created by Lim Kyungmin, 02/10/2020
 *****************************************************************/

const path = require('path');
const editJsonFile = require('edit-json-file');
const { exec } = require('child_process');
const ncp = require('ncp').ncp;
const ora = require('ora');
const chalk = require('chalk');
const { promisify } = require('util');
const asyncExec = promisify(exec);

async function createProject(projectName) {
  let spinner;

  try {
    console.log('[ 1 / 3 ] 🔍  copying project...');
    console.log('[ 2 / 3 ] 🚚  fetching dependencies...');

    await copyProjectFiles(projectName);
    await updatePackageJson(projectName);
    const dependencies = await getDependencies();

    console.log('[ 3 / 3 ] 🔗  linking dependencies...');
    console.log('\u001b[2m──────────────\u001b[22m');

    spinner = ora('Install modules...\n');
    spinner.start();

    await installDependencies(projectName, dependencies, spinner);

    spinner.succeed(chalk`{green Complete setup project}`);
  } catch (error) {
    spinner.fail(chalk`{red Please leave this error as an issue}`);
    console.error(error);
  }
}

function copyProjectFiles(destination) {
  const prjFolder = './default';
  const source = path.join(__dirname, prjFolder);

  return new Promise((resolve, reject) => {
    ncp.limit = 16;
    ncp(source, destination, function(err) {
      if (err) reject(err);
      resolve();
    });
  });
}

async function updatePackageJson(destination) {
  let file = editJsonFile(destination + '/package.json', { autosave: true });
  file.set('name', path.basename(destination));
}

async function getDependencies() {
  let dependencies = 
  'axios base-64 bugsnag-react-native react react-native react-native-fast-image react-native-gesture-handler react-native-iphone-x-helper ' +
  'react-native-modal react-native-permissions react-native-reanimated react-native-screens react-native-splash-screen react-native-svg ' +
  'react-native-tab-view react-native-vector-icons react-native-webview react-navigation react-navigation-stack react-navigation-tabs rn-fetch-blob';

  let devDependencies = 
  '@react-native-community/async-storage @types/react-native-vector-icons @react-native-community/eslint-config ' + 
  '@babel/core @babel/runtime babel-jest babel-plugin-root-import ' +
  '@types/jest @types/lodash @types/react @types/react-native @types/react-native-snap-carousel @types/react-test-renderer ' +
  '@typescript-eslint/eslint-plugin @typescript-eslint/parser eslint eslint-config-airbnb eslint-config-prettier eslint-config-react-native-shinpei eslint-plugin-import ' +
  'eslint-plugin-json eslint-plugin-jsx-a11y eslint-plugin-prettier eslint-plugin-react eslint-plugin-react-hooks eslint-plugin-react-native ' +
  'prettier tslib typescript jest metro-react-native-babel-preset react-test-renderer';

  return { dependencies, devDependencies };
}

async function installDependencies(destination, { dependencies, devDependencies }, spinner) {
  const options = { cwd: destination };

  spinner.text = 'Install dependencies...';
  await asyncExec('npm i -s ' + dependencies, options);
  
  spinner.text = 'Install devDependencies...';
  await asyncExec('npm i -D ' + devDependencies, options);
}

module.exports = createProject;
