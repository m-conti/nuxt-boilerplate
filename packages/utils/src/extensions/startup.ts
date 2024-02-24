
import { clientSide, serverSide } from '../libraries/Runtime';
import { setPrototypes } from './set-prototypes';

import * as ArrayExtensions from './Array';
import * as FunctionExtensions from './Function';
import * as NumberExtensions from './Number';
import * as ObjectExtensions from './Object';
import * as AllExtensions from './All';
import * as StringExtensions from './String';
import * as ElementExtensions from './Element';

const setPrototypesAll = () => {
  setPrototypes(Object, AllExtensions);
  setPrototypes(Object, ObjectExtensions);
  setPrototypes(Array, ArrayExtensions);
  setPrototypes(Function, FunctionExtensions);
  setPrototypes(Number, NumberExtensions);
  setPrototypes(String, StringExtensions);
};

const setPrototypesServer = () => {

};

const setPrototypesClient = () => {
  setPrototypes(Element, ElementExtensions);
  setPrototypes(Document, ElementExtensions);
};


export default () => {
  setPrototypesAll();

  if (clientSide)
    setPrototypesClient();
  if (serverSide)
    setPrototypesServer();
};
