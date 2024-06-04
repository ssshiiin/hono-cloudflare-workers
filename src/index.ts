import { Hono } from 'hono';

const app = new Hono(); // ①
app.get('/', (c) => c.text('Hello 🔥')); // ②

export default app; // ③
