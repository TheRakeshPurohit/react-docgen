import type { NodePath } from '@babel/traverse';
import type Documentation from '../Documentation.js';
import type { ComponentNode } from '../resolver/index.js';

export { default as componentDocblockHandler } from './componentDocblockHandler.js';
export { default as componentMethodsHandler } from './componentMethodsHandler.js';
export { default as componentMethodsJsDocHandler } from './componentMethodsJsDocHandler.js';
export { default as defaultPropsHandler } from './defaultPropsHandler.js';
export { default as displayNameHandler } from './displayNameHandler.js';
export { default as codeTypeHandler } from './codeTypeHandler.js';
export { default as propDocblockHandler } from './propDocblockHandler.js';
export { default as propTypeCompositionHandler } from './propTypeCompositionHandler.js';
export {
  propTypeHandler,
  contextTypeHandler,
  childContextTypeHandler,
} from './propTypeHandler.js';

export type Handler = (
  documentation: Documentation,
  componentDefinition: NodePath<ComponentNode>,
) => void;
