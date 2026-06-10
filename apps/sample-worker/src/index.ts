import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'healthy', service: 'sample-worker' });
});

app.get('/api/v1/status', (_req: Request, res: Response) => {
  res.json({
    service: 'sample-worker',
    uptimeSeconds: Math.floor(process.uptime()),
    timestamp: new Date().toISOString(),
  });
});

app.post('/api/v1/jobs', (req: Request, res: Response) => {
  const jobId = `job-${Date.now()}`;
  res.status(202).json({
    jobId,
    payload: req.body,
    status: 'accepted',
    timestamp: new Date().toISOString(),
  });
});

app.listen(port, () => {
  console.log(`Sample worker listening on port ${port}`);
});
