import CopyWebpackPlugin = require('copy-webpack-plugin');
import * as chalk from 'chalk';
import { readRcSync } from '../utils/readRc';
import { MissingParamException } from '../exceptions/missing-param.exception';
import { BaseException } from '../exceptions/base.exception';
import type { RcFile } from '../interfaces/rc.interface';

export function CopyMetristsFiles(
  resolvePaths?: Pick<RcFile, 'resolvePath' | 'resolvePathBuild'>,
) {
  try {
    const { resolvePath, resolvePathBuild } =
      resolveParamsWithOrWithoutRc(resolvePaths);

    return new CopyWebpackPlugin({
      patterns: [
        {
          from: resolvePath,
          to: resolvePathBuild ?? resolvePath,
        },
      ],
    });
  } catch (e) {
    if (e instanceof BaseException) {
      console.error(chalk.red(e.getMessage()));
    }
    throw e;
  }
}

function resolveParamsWithOrWithoutRc(
  resolvePaths?: Pick<RcFile, 'resolvePath' | 'resolvePathBuild'>,
) {
  if (
    !resolvePaths ||
    !resolvePaths?.resolvePath ||
    !resolvePaths?.resolvePathBuild
  ) {
    const rc = readRcSync();
    if (rc) {
      return {
        resolvePath: resolvePaths?.resolvePath ?? rc.resolvePath,
        resolvePathBuild: resolvePaths?.resolvePathBuild ?? rc.resolvePathBuild,
      };
    } else {
      if (!resolvePaths?.resolvePath) {
        throw new MissingParamException({ parameters: 'resolvePath' });
      }
    }
  }

  return {
    ...resolvePaths,
  };
}
