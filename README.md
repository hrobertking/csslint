# This is a fork of the original CSSLint.

You can get to the original
* [on github](https://github.com/CSSLint/csslint)
* [on npmjs](https://www.npmjs.com/package/csslint)

## Changes

### Core
Changes to the CSSLint core in this fork
* fix an bug that shows "undefined" evidence when the reported line shifts the array index beyond the boundary
* allow options to be passed from the configuration file or command line to the `init` function of a rule

Changes to the core have been tested with the node.js command line, but have not been tested with any other environments.

### Rules
Additional rules added in this fork
* accessibility
* background-color
* color-contrast
* lowercase
* no-filter
* no-tabs
* obsolete-properties
* rules-max
* selector-pattern
* transparent-color
