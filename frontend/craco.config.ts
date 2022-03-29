import { resolve } from 'path';
import { pathsToModuleNameMapper } from 'ts-jest';
import { compilerOptions } from './tsconfig.paths.json';

export default {
  webpack: {
    alias: {
      '@assets': resolve(__dirname, 'src/assets'),
      '@components': resolve(__dirname, 'src/components'),
      '@containers': resolve(__dirname, 'src/containers'),
      '@store': resolve(__dirname, 'src/store'),
      '@contexts': resolve(__dirname, 'src/contexts'),
      '@hooks': resolve(__dirname, 'src/hooks'),
      '@pages': resolve(__dirname, 'src/pages'),
      '@api': resolve(__dirname, 'src/libs/api'),
      '@ui': resolve(__dirname, 'src/libs/ui'),
      '@models': resolve(__dirname, 'src/libs/models'),
      '@constants': resolve(__dirname, 'src/libs/constants'),
      '@utils': resolve(__dirname, 'src/libs/utils'),
    },
  },
  jest: {
    configure: {
      preset: 'ts-jest',
      moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
        prefix: '<rootDir>/src/',
      }),
    },
  },
};
