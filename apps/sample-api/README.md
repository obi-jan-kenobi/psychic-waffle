# Sample API

A sample Node.js/Express API application for the monorepo.

## Development

```bash
npm install
npm run dev
```

The API will be available at `http://localhost:3000`

## Available Endpoints

- `GET /health` - Health check
- `GET /api/v1/hello?name=<name>` - Simple greeting endpoint
- `POST /api/v1/data` - Echo endpoint for testing POST requests

## Building

```bash
npm run build
```

## Testing

```bash
npm test
```

## Docker

```bash
docker build -t sample-api:latest .
docker run -p 3000:3000 sample-api:latest
```
