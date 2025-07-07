import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// import axios from 'axios';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();

// Serve frontend static files
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// Example API route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

// Fallback for React Router
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist/index.html'));
});

app.listen(4000, () => {
    console.log('Server is running on port 4000');
  });
  
export default app;
