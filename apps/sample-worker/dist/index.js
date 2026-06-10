"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
app.use(express_1.default.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'healthy', service: 'sample-worker' });
});
app.get('/api/v1/status', (_req, res) => {
    res.json({
        service: 'sample-worker',
        uptimeSeconds: Math.floor(process.uptime()),
        timestamp: new Date().toISOString(),
    });
});
app.post('/api/v1/jobs', (req, res) => {
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
//# sourceMappingURL=index.js.map