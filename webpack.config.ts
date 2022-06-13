const path = require('path');

module.exports = {
   mode: 'production',
   entry: {
      index: './src/index.ts',
   },
   output: {
      filename: '[name].js',
      path: path.resolve(__dirname, 'dist'),
      library: 'nikitababko-id-generator',
      libraryTarget: 'umd',
      umdNamedDefine: true,
      clean: true,
      globalObject: 'this',
   },
   resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx'],
   },
   module: {
      rules: [
         {
            use: [
               {
                  loader: 'ts-loader',
                  options: {
                     configFile: 'tsconfig.production.json',
                  },
               },
            ],
            test: /\.(ts|tsx)?$/,
            exclude: /node_modules/,
         },
      ],
   },
};
