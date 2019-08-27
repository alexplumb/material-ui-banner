# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.3.1] - 2019-08-27
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
