const {connect} = require('mongoose');

connect('mongodb://localhost:27017/',{dbName: 'user_crud'}).then((c) => {
    console.log('Database connected successfully');
    
}).catch(err => {
    console.error('Error while connecting to database',err);
    
})