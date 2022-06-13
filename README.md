# ID generator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Examples

-  uuidv4

   ```tsx
   import React from 'react';
   import { uuidv4 } from '@nikitababko/id-generator'; // d9c5f9f9-a7c3-ef9e-62cb-17ceea52001f

   import { AppProps } from './App.types.ts';

   export const App: React.FC<AppProps> = ({ users }) => {
      return (
         <div>
            {users.map((item) => (
               <div key={uuidv4()}>
                  <p>{item.name}</p>
                  <p>{item.age}</p>
               </div>
            ))}
         </div>
      );
   };
   ```

## Installation

Install my-project with `npm` or `yarn`

-  npm - `yarn add @nikitababko/id-generator`

-  yarn - `npm install @nikitababko/id-generator`

## License

[MIT](./LICENSE)
