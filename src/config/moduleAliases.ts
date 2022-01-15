import moduleAlias from 'module-alias';

import * as path from 'path';

const { NODE_ENV } = process.env;

const rootDirectory = path.resolve(__dirname, '../../');

const projectFilesDirectoryByEnvironments: Record<string, string> = {
  development: 'src',
  production: 'dist',
};

const projectFilesDirectory =
  projectFilesDirectoryByEnvironments[String(NODE_ENV)] ||
  projectFilesDirectoryByEnvironments.development;

moduleAlias.addAliases({
  '@src': path.join(rootDirectory, projectFilesDirectory),
  '@tests': path.join(rootDirectory, 'tests'),
});
