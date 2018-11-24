# webpack-installer
[![npm][npm]][npm-url]
[![dependencies][dependencies]][dependencies-url]
[![code style: prettier][prettier]][prettier-url]


**webpack-installer** is an installer to easily generate webpack configs.


## Installation

```bash
npm install -g webpack-installer
```


## Usage

Just type `webpack-installer` in the root directory of your project.
You can start a fresh project with **webpack-installer** or update an existing one with a well-thought-out way of using webpack.

<div float="left">
  <img src="docs/images/usage/screen_1.png" alt="IDE Screen 1" height="200">
  <img src="docs/images/usage/screen_2.png" alt="IDE Screen 2" height="200">
  <img src="docs/images/usage/screen_3.png" alt="IDE Screen 3" height="200">
  <img src="docs/images/usage/screen_4.png" alt="IDE Screen 4" height="200">
  <img src="docs/images/usage/screen_5.png" alt="IDE Screen 5" height="200">
  <img src="docs/images/usage/screen_6.png" alt="IDE Screen 6" height="200">
  <img src="docs/images/usage/screen_7.png" alt="IDE Screen 7" height="200">
</div>


## Info

I will add more boilerplates for different situation / libraries. But I dont know about each library its dependencies etc. so PRs with new boilerplates are always welcome. I am also planning on adding a customize mode where you can create custom configs within the installer.


## Bugs

There still might be a lot of bugs since I just started this project. I am gratefull for any help / PRs.


## How can I add my boilerplate?

### Step 1

First of all you have to take a look at `installer/files.json`. In this example we add a boilerplate to the vanilla boilerplates.
The structure of `files.json` represents the hierarchy of the installer menu, so add an object at the place where you want your boilerplate to be displayed in the installer. The key has to be the name of your boilerplate. 
You can define the `devDependencies` and `dependencies` of your boilerplate here. Those will get automatically installed in the generation process of your boilerplate.

<img src="docs/images/contributing/files_json.png" alt="files.json">

### Step 2

Then you have to take a look at `installer/setup.json`.  This file is responsible for making your boilerplate visible in the CLI. Its the same as in the `files.json` file. The structure represents the hierarchy of the installer. You have to add an object at the right place with to keys: `input` and `nested`. In the `input` key you have to put the name of your boilerplate that you also used in the `files.json`. In the `nested` key just put an empty array.

<img src="docs/images/contributing/setup_json.png" alt="setup.json">

### Step 3

Your almost done! You only have to add your boilerplate files to `configs/boilerplates/`. Same as usual, paste it at the right place, like in the `files.json` and `setup.json`.
In this case we want the boilerplate to be under `configs/boilerplates/vanilla`. Keep in mind the folder name of your boilerplate has to inline with names you provided in the other configuration files.

<img src="docs/images/contributing/boilerplate.png" alt="Boilerplate">


Thanks to the [@TheLarkInn](https://twitter.com/thelarkinn) for inspiring and motivating me to this project.


[npm]: https://img.shields.io/npm/v/webpack-installer.svg?style=flat-square
[npm-url]: https://npmjs.com/package/webpack-installer
[dependencies]: https://img.shields.io/david/Marvin1003/webpack-installer.svg?style=flat-square
[dependencies-url]: https://david-dm.org/Marvin1003/webpack-installer
[prettier]: https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square
[prettier-url]: https://github.com/prettier/prettier