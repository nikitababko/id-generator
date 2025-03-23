# ID generator &middot; ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Usage example

-  uuidv4

   ```tsx
   import React from 'react';
   import { uuidv4 } from '@nikitababko/id-generator';

   import { AppProps } from './App.types.ts';

   export const App: React.FC<AppProps> = ({ users }) => {
      return (
         <div>
            {users.map((item) => (
               <div key={uuidv4()}> {/* d9c5f9f9-a7c3-ef9e-62cb-17ceea52001f */}
                  <p>{item.name}</p>
                  <p>{item.age}</p>
               </div>
            ))}
         </div>
      );
   };
   ```

-  hexId

  ```tsx
  import React from 'react';
  import { hexId } from '@nikitababko/id-generator';

  import { AppProps } from './App.types.ts';

  export const App: React.FC<AppProps> = ({ users }) => {
     return (
        <div>
           {users.map((item) => (
              <div key={hexId()}> {/* 2e69814173 */}
                 <p>{item.name}</p>
                 <p>{item.age}</p>
              </div>
           ))}
        </div>
     );
  };
  ```

## Installation

Installation is done using the `npm` or `yarn` or `pnpm`

- npm - `npm i @nikitababko/id-generator`

- yarn - `yarn add @nikitababko/id-generator`

- pnpm - `pnpm i @nikitababko/id-generator`

## License

[MIT](./LICENSE.md)
