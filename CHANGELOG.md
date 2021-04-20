# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [2.1.0-next] - 2021-04-20
### Changed
- [Added some more properties to the StaticBanner API](https://github.com/alexplumb/material-ui-banner/issues/14)

## [2.0.1-next] - 2020-12-08
### Changed
- Replace React.memo with React.forwardRef and pass ref to the Collapse component

## [2.0.0-next] - 2020-12-04
### Changed
- Updated all peerDependencies to support material-ui 5 (alpha 18)
- Updated properties and styling to match material-ui 5 syntax
### Fixed
- Mobile UI for the demo page

## [1.4.2] - 2019-12-06
### Changed
- All styles are now correctly scoped to `MuiBanner` - i.e. `MuiBanner.label` for the purposes of theme overrides

## [1.4.1] - 2019-12-05
### Changed
- Updated spacing to more closely match material design specification
### Fixed
- Fixed an issue with buttons stacking when using StaticBanner

## [1.4.0] - 2019-12-05
### Added
- [Added support for `dismissButtonProps` property](https://github.com/alexplumb/material-ui-banner/pull/7)
- [Added more information to the README](https://github.com/alexplumb/material-ui-banner/issues/9)
### Changed
- Instead of defining an arbitrary width, use the new [`Container`](https://material-ui.com/components/container/) API. Note that by default the the container has a `maxWidth` of `lg`, which is wider than the previous hard-coded width of 1100px
- Refactor base `MuiBanner` component as a hook

## [1.3.1] - 2019-08-27
### Removed
- [Removed `@material-ui/styles` dependency](https://github.com/alexplumb/material-ui-banner/issues/5)

## [1.3.0] - 2019-05-28
### Changed
- Added support for material-ui 4

## [1.2.0] - 2019-04-03
### Added
- Added `paperProps` and `cardProps` to help people extend components a little easier
### Fixed
- Fixed some property definitions
- [Fixed an issue where the banner was getting cut off on certain browser sizes](https://github.com/alexplumb/material-ui-banner/issues/1)
### Changed
- [The `CardActions` component will no longer render if no buttons are present](https://github.com/alexplumb/material-ui-banner/issues/3)

## [1.1.4] - 2019-03-22
### Changed
- Slightly optimized build size

## [1.1.2] - 2018-12-11
### Added
- Added support for buttonProps, buttonComponent, and iconProps to StaticBanner

## [1.1.0] - 2018-12-07
### Added
- Added support for the buttonProps, buttonComponent, and iconProps properties
### Changed
- Added @material-ui/core to webpack exclusions
- Updated webpack build process to be usable on Windows

## [1.0.0] - 2018-10-27
### Added
- Initial release
