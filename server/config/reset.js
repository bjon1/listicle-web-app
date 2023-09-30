import { pool } from './database.js';
import './dotenv.js';
import { mobs } from '../data/mobs.js';



const createMobsTable = async () => {
    const createTableQuery = `
        DROP TABLE IF EXISTS mobs;

        CREATE TABLE IF NOT EXISTS mobs (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            image VARCHAR(255) NOT NULL,
            description TEXT NOT NULL,
            health INTEGER NOT NULL
        );  
    `

    try {
        await pool.query(createTableQuery);
        console.log('Table created successfully');
    } catch(error) {
        console.error("Table could not be created", error);
    }
}


const seedMobsTable = async () => {
    await createMobsTable();

    mobs.forEach((mob) => {
        const insertQuery = `INSERT INTO mobs (name, image, description, health) VALUES ($1, $2, $3, $4)`;

        const values = [
            mob.name,
            mob.image,
            mob.description,
            mob.health
        ];

        pool.query(insertQuery, values, (err, res) => {
            if(err) {
                console.error('Error inserting data', err);
                return;
            }   
            console.log(`Data inserted successfully`);
        })
    })
}

seedMobsTable();

