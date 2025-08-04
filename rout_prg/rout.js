const express= require('express');
const app = express();
const port = 3020;

app.use(express.json());

let users = [
  { id: 1, name: 'Vedu' },
  { id: 2, name: 'Devi' },
  { id: 3, name: 'Nancy' },
  { id: 4, name: 'Siva' },
  { id: 5, name: 'Karthik' }
];

//Get All data
app.get('/users', (req, res) => {
  res.json(users);
});

//Get data by ID
app.get('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const user = users.find(u => u.id === userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).send('User not found');
  }
});

//Add new user
app.post('/store', (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Error: Name is required.' });
  }

  const newUser = {
    id: users.length ? Math.max(...users.map(u => u.id)) + 1 : 1,
    name: name,
  };

  users.push(newUser);
  res.status(201).json(newUser);
});

//Update user by ID
app.put('/update/:id', (req, res) => { 
  const userId = parseInt(req.params.id, 10);
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({ message: 'Error: Name is required.' });
  }

  const userIndex = users.findIndex(u => u.id === userId);
  if (userIndex !== -1) {
    users[userIndex].name = name;
    res.json(users[userIndex]);
  } else {
    res.status(404).send('User not found');
  }
});

//Delete user by ID
app.delete('/delete/:id', (req, res) => {
  const userId = parseInt(req.params.id, 10);
  const userIndex = users.findIndex(u => u.id === userId);

  if (userIndex !== -1) {
    users.splice(userIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('User not found');
  }
}
);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});