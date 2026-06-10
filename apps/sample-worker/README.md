# Sample Worker

A sample Node.js worker-style service for the monorepo.

## Development

```bash
npm install
npm run dev
```

The service will be available at `http://localhost:3000`

## Available Endpoints

- `GET /health` - Health check
- `GET /api/v1/status` - Worker status and uptime
- `POST /api/v1/jobs` - Accept a job payload (returns 202)

## Building

```bash
npm run build
```

## Docker

```bash
docker build -t sample-worker:latest .
docker run -p 3000:3000 sample-worker:latest
```

test
