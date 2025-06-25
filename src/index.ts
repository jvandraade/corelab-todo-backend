import express from 'express';
import cors from 'cors';
import todoRoutes from './routes/todoRoutes'; 

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/todos', todoRoutes); 

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
