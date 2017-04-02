# Angular Scaffolding

This is an Angular scaffolding guide using latest Angular CLI with recommended options. My aim is to minimize Googling for setting up frequently desired features.

## Pre-requisite

+ Latest stable Node.js, [n](https://github.com/tj/n) is the recommended Node.js version manager
+ Install [Angular CLI](https://cli.angular.io/)

## Set Yarn as the default package manager

Do you use [Yarn](https://github.com/yarnpkg/yarn)? You can [set Yarn as the default package manager](https://medium.com/@beeman/using-yarn-with-angular-cli-db2e318e43c5) when you scaffold Angular using Angular CLI [1].

`ng set --global packageManager=yarn`

## Initialize an app with Angular CLI

First of all, install [Angular CLI](https://cli.angular.io/).

Then, run following command to let CLI do all the base scaffolding work for you. Angular CLI will generate build script, root app module, unit/e2e testing integration, environments, etc.

`ng new PROJECT_NAME`

Optional arguments, [see more](https://www.sitepoint.com/understanding-component-architecture-angular/):

- `--style=scss`: Use SCSS instead of CSS 
- `--routing=true`: Include Router
- `--inline-style=true`: Do not generate stylesheet files
- `--inline-template=true` Do not auto-generate template files

