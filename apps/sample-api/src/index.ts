import express, { Express, Request, Response } from 'express';

const app: Express = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy' });
});

app.get('/api/v1/hello', (req: Request, res: Response) => {
  const name = req.query.name || 'World';
  res.json({ message: `Hello, ${name}!` });
});

app.post('/api/v1/data', (req: Request, res: Response) => {
  const data = req.body;
  res.json({ received: data, timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Sample API listening on port ${port}`);
});
