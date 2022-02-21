# NextJS `outputFileTracingRoot` file tree Reproduction

This repo is based on the Turborepo starter (to help stay on brand lol)

## Repro instructions

1. `yarn install`
2. `yarn build`

Once you have executed these two commands, you can view the file directory tree of `apps/repro/.next/standalone`. This directory tree will look like the following:

```none
.next/standalone
├── apps
│   └── repro
│       ├── package.json
│       └── server.js
├── node_modules
```

In a working project the file directory tree will look like the following:

```none
.next/standalone
├── node_modules
├── package.json
└── server.js
```
