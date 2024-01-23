<h1 align="center">Genjutsu Stack</h1>

<p align="center">Made by ⚡Sieutoc</p>

<p align="center" width="100%">
    <img src="https://i.imgflip.com/8d069s.jpg" />
</p>

## Features

This template includes the following:

- Expo 50 (with React Native 0.73)
- TypeScript
- ESLint
- Prettier

## Getting Started

### For Development

- We use `npm` package manager. We should let yarn rest in peace.

### Clone the project

You can either use this template by:

- Click the **"Use this template"** button and follow the instruction
- Or using the script below:

```bash
npx tiged websitesieutoc/genjutsu your-project
```

Then, search and replace `genjutsu` with your project slug.

### Install dependencies

```bash
cd your-project
npm install
```

## Setup project

For the first time, you need to create a project on Expo:

- Go to your organization projects page: `https://expo.dev/accounts/<your-org>/projects`
- Create new project. It will show the next step, or you can copy the project ID.
- Run the `eas init` to connect your project with Expo. Get `eas-cli` [here](https://docs.expo.dev/build/setup/#install-the-latest-eas-cli).
- It will ask you to overwrite the old ID. You should answer `Y` (Yes).

```bash
eas init --id <your-project-id>
```

Then, run the iOS simulator

```bash
npm run ios
```

Happy development! :tada:

## Production

Make sure you change at least these things before submitting to App store:

- Change your scheme in `app.config.ts`
- Setup your secrets and environment variables
