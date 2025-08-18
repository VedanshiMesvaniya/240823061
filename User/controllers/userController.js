
const fs = require('fs');
const path = require('path');

const dataFile = path.join(__dirname, '../data/data.json');
let users = [];

exports.index = (req, res) => {
  //display all data from data.json
  res.json(users);
};

if (fs.existsSync(dataFile)) {
  const raw = fs.readFileSync(dataFile, 'utf8') || '[]';
  users = JSON.parse(raw);
}

exports.index = (req, res) => {
  res.send('User API');
};

exports.store = (req, res) => {
  const { name, email, mobile } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: 'name and email are required' });
  }

  const newUser = {
    id: Date.now(),
    name,
    email,
    mobile: mobile || ''
  };

  users.push(newUser);
  fs.writeFileSync(dataFile, JSON.stringify(users, null, 2));

  res.status(201).json(newUser);
}