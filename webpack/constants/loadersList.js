/**
 * Created by: Andrey Polyakov (andrey@polyakov.im)
 */
import {resolve} from 'path';

import MiniCssExtractPlugin from 'mini-css-extract-plugin';

import {isDev, isDevServer, isProd} from '../env';
import resources from '../resources/sassResources';

export const cssLoader = {
    loader: 'css-loader',
    options: {
        sourceMap: isProd,
    },
};

export const cssModulesLoader = {
    ...cssLoader,
    options: {
        sourceMap: isDev,
        modules: {
            exportLocalsConvention: 'camelCaseOnly',
            localIdentName: '[local]__[hash:base64:5]',
        },
    },
};

export const sassLoader = [
    {
        loader: 'sass-loader',
        options: {
            sourceMap: true,
        },
    },
    resources.length
        ? {
              loader: 'sass-resources-loader',
              options: {
                  resources,
              },
          }
        : null,
];

export const postCssLoader = {
    loader: 'postcss-loader',
    options: {
        config: {
            path: __dirname,
        },
        sourceMap: isProd,
    },
};

export const miniCssExtractLoader = isProd
    ? {
          loader: MiniCssExtractPlugin.loader,
          options: {
              hmr: isDevServer,
          },
      }
    : 'style-loader';

export const lessLoader = {
    loader: 'less-loader',
    options: {
        sourceMap: true,
        lessOptions: {
            javascriptEnabled: true,
        },
    },
};

export const typingsCssModulesLoader = {
    loader: '@teamsupercell/typings-for-css-modules-loader',
    options: {
        banner:
            '// autogenerated by typings-for-css-modules-loader. \n// Please do not change this file!',
        formatter: 'prettier',
    },
};

export const resolveUrlLoader = {
    loader: 'resolve-url-loader',
    options: {
        sourceMap: true,
    },
};

export const babelLoader = {
    loader: 'babel-loader',
    options: {
        configFile: resolve(__dirname, '../../.babelrc.js'),
    },
};
