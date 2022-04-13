const express = require('express');
const userRouter = require('./Routes/UserRouter');
const loginRouter = require('./Routes/LoginRouter');
const categoriesRouter = require('./Routes/CategoriesRouter');

const app = express();
app.use(express.json());

app.use('/user', userRouter);
app.use('/login', loginRouter);
app.use('/categories', categoriesRouter);

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.listen(3000, () => console.log('ouvindo porta 3000!'));
