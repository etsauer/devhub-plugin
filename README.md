# Backstage/RHDH Plugin Development Environment

## Running this instance

```
yarn install
yarn dev
```

## Creating this Backstage Instance from Scratch

```
npx @backstage/create-app@latest
...give it a <name>
cd <name>
yarn dev
```

## Creating a new plugin in your backstage instance

```
yarn new --select plugin
...give it a <name>
yarn dev (run plugin inside backstage instance)
# OR..
cd plugins/<name>
yarn install
yarn start
```