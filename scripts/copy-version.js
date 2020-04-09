const fs = require('fs')
const path = require('path');

const PATH_MAIN_PACKAGE_JSON = path.resolve(__dirname, '../package.json');
const PATH_ELECTRON_PACKAGE_JSON = path.resolve(__dirname, '../electron/package.json');
const PATH_PUBLIC_VERSION_FILE = path.resolve(__dirname, '../src/public/version.json');
const SCRIPT_FILENAME = path.basename(__filename);

let currentVersion = require(PATH_MAIN_PACKAGE_JSON).version;
let mustUpdate = false;

const writeVersionToFile = (version, filename) => {
  let data = fs.readFileSync(filename, 'utf8');
  data = data.replace(/\"version\":\s*\"(.+?)\"/g, `"version": "${version}"`);
  fs.writeFileSync(filename, data, 'utf8');
}

const updateVersion = () => {
  currentVersion = getNextVersion(currentVersion);
  writeVersionToFile (currentVersion, PATH_MAIN_PACKAGE_JSON);
};

const copyVersion = () => {
  writeVersionToFile (currentVersion, PATH_ELECTRON_PACKAGE_JSON);
  writeVersionToFile (currentVersion, PATH_PUBLIC_VERSION_FILE);
};

const getNextVersion = (version) => {
  const parts = version.split('.');
  ++parts[2];
  return parts.join('.');
};

const printHelp = () => {
  console.log(`\nusage: node ${SCRIPT_FILENAME} [--update]`)
};

const checkArgs = (args) => {
  if (args.length < 2 || args.length > 3)
    return false;

  if ( args.length === 3 && args[2] !== '--update' )
    return false;

  mustUpdate = ( args.length === 3 && args[2] === '--update' );

  return true
};

const main = (args) => {
  if (!checkArgs(args)) {
    printHelp()
    return;
  }

  if ( mustUpdate )
    updateVersion();

  copyVersion();
};

main (process.argv);
