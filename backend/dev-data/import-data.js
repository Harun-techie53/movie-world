require('dotenv').config();
const fs = require('fs');
const connectDB = require('../config/db');
const Movie = require('../models/movieModel');

//Database connection
connectDB();

// //Read the data from file system
const movies = JSON.parse(fs.readFileSync(`${__dirname}/movies-data.json`, 'utf-8'));

const importData = async () => {
    try {
        await Movie.create(movies);
        console.log('Data is successfully imported!');
        process.exit();
    } catch (err) {
        console.log(err.message);
    }
}

const deleteData = async () => {
    try {
        await Movies.deleteMany();
        console.log('Data is successfully deleted!');
        process.exit();
    } catch (err) {
        console.log(err.message);
    }
}


if(process.argv[2] === '--import') {
    importData();
} else if(process.argv[2] === '--delete') {
    deleteData();
}