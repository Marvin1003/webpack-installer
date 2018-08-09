# webpack-installer

**webpack-installer** is an installer to easily generate webpack configs.

## Installation

Npm
** Not yet published - soon **

## Usage

Just type `webpack-installer` in the root directory of your project.
You can start a fresh project with **webpack-installer** or update an existing one with a well-thought-out way of using webpack.

## Info

For now there is only one boilerplate - minimial - available. I will add more for different situation / libraries. I am also planning on adding a customize mode where you can create custom configs with the installer.

## Bugs

There still might be a lot of bugs since I just started this project. I am gratefull for any help / PRs.

## Disclaimer

** This is an alpha version. I recommend you to play it safe and backup your project files before using this tool **

## Contributing

If you want to add a boilerplate take a look at the structure of `lib/data/files.json`. There you define the name, dependencies and presets of your boilerplate. In `lib/data/setup.json` you have to add the name, matching the one you defined in `lib/data/files.json` to make it available to the installer. At last you have to add your config to `lib/files/boilerplate/` and the optional presets to `lib/files/presets/`.
Take a look at `lib/files/boilerplate/minimial` to see how you config needs to be structured. This approach is heavily inspired by [@TheLarkInn](https://twitter.com/thelarkinn)
