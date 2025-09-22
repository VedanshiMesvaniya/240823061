const {Sequelize}= require('sequelize');


const sequelize = new Sequelize('node_db',"root","",{
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate()
    .then(()=>{
        console.log('Connection has been established successfully.');
    })
    .catch(err=>{
        console.error('Unable to connect to the database:', err);
    });


const users= sequelize.define('users',{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        primaryKey:true,
        allowNull:false
    },
    fullname:{
        type:Sequelize.STRING,
        allowNull:false 
    },
    email:{
        type:Sequelize.STRING,
        allowNull:false,
        unique:true,
    },
    gender:{
        type:Sequelize.STRING,
        allowNull:false,

    }
});

sequelize.sync()
.then(()=>{
    console.log('User table created successfully!');
})
.catch(err=>{
    console.error('Unable to create table :',err);
});

users.create({
    fullname:'vedu mesvaniya',
    email:'vedasnhi@gmail.com',
    gender:'female'
});
users.create({
    fullname:'devi siddhapara',
    email:'devi.siddhapara@gmail.com',
    gender:'female'
});
users.create({
    fullname:'Tanjiro kamado',
    email:'tanjiro.kamado@gmail.com',
    gender:'male'
});



users.findAll()
.then(users=>{
    console.log("All users: ",users);

})
.catch(err=>{
    console.error('Error retrieving users:',err);
});



users.update({fullname:'vedanshi mesvaniya'},{where:{id:1}})
.then(()=>{
    console.log("User updated successfully");
})
.catch(err=>{
    console.error('Error updating user:',err);
}); 


users.findByPk(1)
.then(user=>{
    console.log("User found: ",user);
})
.catch(err=>{
    console.error('Error finding user:',err);
});


users.destroy({where:{id:1}})
.then(()=>{
    console.log("User deleted successfully");
})
.catch(err=>{
    console.error('Error deleting user:',err);
});