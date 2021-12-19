# Spartan theme for jsonresume [![npm version](https://badge.fury.io/js/jsonresume-theme-spartan-extended.svg)](https://badge.fury.io/js/jsonresume-theme-spartan-extended)

_Forked from [jsonresume-theme-spartan](https://www.npmjs.com/package/jsonresume-theme-spartan) by Francesco Esposito_

This is an extended version of the json resume theme spartan. There was a couple things I didn't like about the original theme and wanted it to support some custom fields in the resume too.

## Getting started

This is a theme for JSON Resume. It is available via npm:

```BASH
npm install jsonresume-theme-spartan-extended
```

### Exporting resume with the theme

Install the JSONResume cli tool

```BASH
npm install -g resume-cli
```

Create export the resume files you need.

```BASH
# For a html file
resume export --theme spartan-extended resume.html
# For a pdf file
resume export --theme spartan-extended resume.pdf
```

Check out the [examples](#Examples) below.

## Changes to original

- Contact details

  - Made address format better for australian addresses
  - Made country code automatically resolve to long country name

- About

  - Fixed up some paragraph separation issues with new lines
  - Updated some styling

- Experience

  - Updated the formating of Job tittles and employment dates
  - Updated handling of current job status to display "Present"
  - Automatic calculation of employment length
  - Styling for employment highlights

- Education

  - Improved handling of present education

- Skills

  - Added optional summary line for skill

## Examples

|                       HTML Full                       |                     HTML Mobile                     |
| :---------------------------------------------------: | :-------------------------------------------------: |
| ![html example desktop](./images/example-desktop.png) | ![html example mobile](./images/example-mobile.png) |
