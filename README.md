# webpack-installer

**webpack-installer** is an installer to easily generate webpack configs.

## Installation

```bash
npm install -g webpack-installer
```


## Usage

Just type `webpack-installer` in the root directory of your project.
You can start a fresh project with **webpack-installer** or update an existing one with a well-thought-out way of using webpack.

## Info

I will add more boilerplates for different situation / libraries. But I dont know about each library its dependencies etc. so PRs with new boilerplates are always welcome. I am also planning on adding a customize mode where you can create custom configs within the installer.

## Bugs

There still might be a lot of bugs since I just started this project. I am gratefull for any help / PRs.

## Disclaimer

** This is an alpha version. I recommend you to play it safe and backup your project files before using this tool **

## Contributing

If you want to add a boilerplate take a look at the structure of `installer/files.json`. There you define the name, dependencies and presets of your boilerplate. In `installer/setup.json` you have to add the name, matching the one you defined in `installer/files.json` to make it available to the installer. At last you have to add your config to `configs/boilerplates/` and the optional presets to `configs/presets/`.
Take a look at `configs/boilerplates/vanilla/minimal` to see how you config needs to be structured. This approach is heavily inspired by [@TheLarkInn](https://twitter.com/thelarkinn)
