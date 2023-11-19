# Jarod Hargreaves Site — v2

## Setup

Install the dependencies:

```bash
npm i
```

## Development

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

Start Slice Machine on `http://localhost:9999`:

```bash
npm run slicemachine
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build on `http://localhost:8788`:

```bash
npm run serve
```


## Optimising videos for web

720p:
```bash
ffmpeg -i <input> -an -vf "scale=720:-1,pad=ceil(iw/2)*2:ceil(ih/2)*2" -r 30 -crf 26 -preset veryslow <output>

```