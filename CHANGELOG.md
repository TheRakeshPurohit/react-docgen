# Changelog

## 1.0.0 (2022-06-13)


### ⚠ BREAKING CHANGES

* `resolveToValue` will not create a `MemberExpression` for targets ending in destructuring. It will now simply resolve to the `Identifier` inside the destructuring. Use new helper `isDestructuringAssignment` to further check this identifier.
* The helpers `resolveObjectValuesToArray` and `resolveObjectKeysToArray` return now `string[]` instead of a `NodePath`

### Features

* **babel:** Support new topLevelAwait plugin in babel parser ([c73fbb9](https://github.com/TheRakeshPurohit/react-docgen/commit/c73fbb9cd16c3fd7643b836fa96e4b71c7173702))
* **flow:** don't resolve imported types in spread ([05bf0ba](https://github.com/TheRakeshPurohit/react-docgen/commit/05bf0ba3b9160901487865b8896cfe1f8fd2eef2))
* **methods:** support static methods on function components ([72a2344](https://github.com/TheRakeshPurohit/react-docgen/commit/72a234467c26caace8fc0ad0d11677c6e98d1421))
* Migrate to TypeScript ([7b35e6f](https://github.com/TheRakeshPurohit/react-docgen/commit/7b35e6f1336c6c606b194b2d0e70376e9c1c0a9d))
* Remove building out of scope AST Nodes from resolveToValue ([5bcf56c](https://github.com/TheRakeshPurohit/react-docgen/commit/5bcf56c6f7d2d8118adc1ed80573f2e3555455cb))
* **typescript:** skip private methods ([#409](https://github.com/TheRakeshPurohit/react-docgen/issues/409)) ([ea7d203](https://github.com/TheRakeshPurohit/react-docgen/commit/ea7d203b346f1a1f081ec814ea54a46c35728051))
* use @babel/generate to serialise AST nodes w/o loc in `printValue` ([#482](https://github.com/TheRakeshPurohit/react-docgen/issues/482)) ([6f220dc](https://github.com/TheRakeshPurohit/react-docgen/commit/6f220dcc365d029730df6c1ce8787a20a845d0b0)), closes [#481](https://github.com/TheRakeshPurohit/react-docgen/issues/481)


### Bug Fixes

* avoid circular reference when resolving name from within assignment ([04f573f](https://github.com/TheRakeshPurohit/react-docgen/commit/04f573f762c469af526728de129479b50b3eb8b9))
* bail when function returns are recursive instead of stack overflowing ([13a8de9](https://github.com/TheRakeshPurohit/react-docgen/commit/13a8de9eac8c55225dc4287ec177b4a28a7e3e2d))
* be more strict about detecting react class components ([#397](https://github.com/TheRakeshPurohit/react-docgen/issues/397)) ([b3601b6](https://github.com/TheRakeshPurohit/react-docgen/commit/b3601b6849ae19423087596790920c205df845ed))
* **browser:** Disable fs importer when used in browsers ([8ec67a3](https://github.com/TheRakeshPurohit/react-docgen/commit/8ec67a3409928852640e383d1505225cc9f007da))
* Change path inside the npm package back to `dist`. ([73d4b93](https://github.com/TheRakeshPurohit/react-docgen/commit/73d4b938ee70b6c1be9901a301b306551c1083dc))
* Correctly detect index access types in typescript ([#400](https://github.com/TheRakeshPurohit/react-docgen/issues/400)) ([85ea6a5](https://github.com/TheRakeshPurohit/react-docgen/commit/85ea6a518c837e209043d9dac1505f60e8dd33b6))
* Correctly handle ObjectTypeSpreadProperty in object type annotations ([#593](https://github.com/TheRakeshPurohit/react-docgen/issues/593)) ([395f338](https://github.com/TheRakeshPurohit/react-docgen/commit/395f338ab8aa3f1d9e1c0f5a81dadd0ce00eb7d5))
* **defaultProps:** Resolve local spreads in defaultProps ([cc14018](https://github.com/TheRakeshPurohit/react-docgen/commit/cc14018d33115687138fb1df8c09ace1c9df3f39))
* **deps:** update dependency cli-table to v0.3.6 ([64033e6](https://github.com/TheRakeshPurohit/react-docgen/commit/64033e61f5f65af1964f603e3f9e80b494f48de4))
* Ensure componentMethodsHandler ignores private properties ([#440](https://github.com/TheRakeshPurohit/react-docgen/issues/440)) ([9683e67](https://github.com/TheRakeshPurohit/react-docgen/commit/9683e67fbe8b29dcd5e6e74d233b7ee4fca3efa0))
* Expand index types correctly ([#369](https://github.com/TheRakeshPurohit/react-docgen/issues/369)) ([c1dce84](https://github.com/TheRakeshPurohit/react-docgen/commit/c1dce849fdb98459dfe9b308c33acdddb5d1392e))
* Fix remaining tests after migration to TS ([36c6478](https://github.com/TheRakeshPurohit/react-docgen/commit/36c6478fb213ca8d8b857f88da2fd9a482aec923))
* Fix typescript types for parsing ([34c55ac](https://github.com/TheRakeshPurohit/react-docgen/commit/34c55ac1d663cc604f4f548018d78e02e081a797))
* **flow:** don't add names of spread generics to "composes" ([7716025](https://github.com/TheRakeshPurohit/react-docgen/commit/7716025a7daebf9141958c1d181c49fd316fb510))
* **flow:** Fix to Flow Maximum Callstack exceeded error on recursive generic structs ([#428](https://github.com/TheRakeshPurohit/react-docgen/issues/428)) ([2c42e8c](https://github.com/TheRakeshPurohit/react-docgen/commit/2c42e8cd4ff50faa56277066e6654c2515c674be))
* **flow:** support empty type ([#431](https://github.com/TheRakeshPurohit/react-docgen/issues/431)) ([0fa71de](https://github.com/TheRakeshPurohit/react-docgen/commit/0fa71de972db443d52f863d448645426053d2b5f))
* handle docblock on out-of-line forwardRef ([d71c3d2](https://github.com/TheRakeshPurohit/react-docgen/commit/d71c3d2711720d58f835cd16e0b0eabaf5b1ee03))
* Handle ObjectTypeSpreadProperties which are not resolvable ([4b8b721](https://github.com/TheRakeshPurohit/react-docgen/commit/4b8b721e6332185c0964a35329108ccdb64f8bb8))
* Hocs resolving intermediate values ([#378](https://github.com/TheRakeshPurohit/react-docgen/issues/378)) ([53a7a55](https://github.com/TheRakeshPurohit/react-docgen/commit/53a7a5522ab587cf8f21f0a681c902e5e91d2b5b))
* Ignore methods in `Object.value()` calls ([4fc5b21](https://github.com/TheRakeshPurohit/react-docgen/commit/4fc5b21d899990681287c8d9d70771b7361ec41e))
* **imports:** visit paths, not nodes ([a718cbd](https://github.com/TheRakeshPurohit/react-docgen/commit/a718cbddf031244006077ea53a59c7144febce8d))
* infer displayName given forwardRef() node ([f9d5490](https://github.com/TheRakeshPurohit/react-docgen/commit/f9d5490b1f358ae4faad5190a563e33cd05ea9b9))
* New tests and fix for expressionTo with Spread and Methods ([5f3da8c](https://github.com/TheRakeshPurohit/react-docgen/commit/5f3da8c892fd052db470d0a44d13c704eef4d011))
* Remove obsolete id check ([66961d8](https://github.com/TheRakeshPurohit/react-docgen/commit/66961d868fb09cbf2a96ea5a4edec602602851b3))
* Remove usage of ast-type builders ([17c8a9c](https://github.com/TheRakeshPurohit/react-docgen/commit/17c8a9c123e0b699e96137e8714cd57fe6200e0c))
* support forwardRef with out of line argument ([#430](https://github.com/TheRakeshPurohit/react-docgen/issues/430)) ([b5e6d97](https://github.com/TheRakeshPurohit/react-docgen/commit/b5e6d97d9fbabf0b233109afd8f7befec98071eb))
* **traverse:** only visit paths, not nodes ([b34977a](https://github.com/TheRakeshPurohit/react-docgen/commit/b34977abf1ee9a7620236a3d43f6bd9b7538260f))
* type inference on forwardRef components ([#392](https://github.com/TheRakeshPurohit/react-docgen/issues/392)) ([8f8d09b](https://github.com/TheRakeshPurohit/react-docgen/commit/8f8d09bffb171e1d0e523c635d7974420f0cc2f5))
* **typescript:** Do not forward typeParameters when using resolved Path ([e960d8c](https://github.com/TheRakeshPurohit/react-docgen/commit/e960d8cad8cdc870b8e0025c32f471ff379e54bf))
* **typescript:** Support type as expressions and type assertions ([44f5e55](https://github.com/TheRakeshPurohit/react-docgen/commit/44f5e5553c83525b7284d97936a7029c26855846))


### Performance Improvements

* Switch from async to neo-async ([ad64da7](https://github.com/TheRakeshPurohit/react-docgen/commit/ad64da7eb465eaa835d1a25f37a1f5be67649f80))
