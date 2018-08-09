# webpack-setup #
**webpack-setup** is an installer to easily generate webpack configs.

## Installation
Npm
```npm install -g webpack-setup```

Yarn
```yarn global add webpack-setup```

## Info
For now there is only one boilerplate - minimial - available. I will add more for different situation / libraries. I am also planning on adding a customize mode where you can create custom configs with the installer.

## Bugs
There still might be a lot of bugs since I just started this project. I am gratefull for any help / PRs.

## Contributing
If you want to add a boilerplate take a look at the structure of `lib/data/files.json`. There you define the name, dependencies and presets of your boilerplate. In `lib/data/setup.json` you have to add the name, matching the one you defined in `lib/data/files.json` to make it available to the installer. At last you have to add your config to `lib/files/boilerplate/` and the optional presets to `lib/files/presets/`.
Take a look at `lib/files/boilerplate/minimial` to see how you config needs to be structured. This approach is heavily inspired by [@TheLarkInn](https://twitter.com/thelarkinn)