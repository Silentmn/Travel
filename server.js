import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import cors from "cors";
import path from "path";
import { fileURLToPath } from 'url';
import cookieParser from 'cookie-parser';
import jwt  from 'jsonwebtoken';

const app = express();
const port = 3000;

const db = new pg.Client({
  user:"postgres",
  host:"localhost",
  database:"travelshadhu",
  password:"silentman@123",
  port:5432,
});
 
db.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());
app.use(cookieParser());

const secretKey = 'your_jwt_secret';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.get('/data', async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM tour');
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});


app.get('/plans', async (req, res) => {
    const { travel_spot_type, min_budget, max_budget, days } = req.query;

    let query = 'SELECT * FROM tour WHERE 1=1';
    const values = [];
    let valueIndex = 1;

    if (travel_spot_type) {
        query += ` AND site_type = $${valueIndex++}`;
        values.push(travel_spot_type);
    }
    if (min_budget) {
        query += ` AND price >= $${valueIndex++}`;
        values.push(min_budget);
    }
    if (max_budget) {
        query += ` AND price <= $${valueIndex++}`;
        values.push(max_budget);
    }
    if (days) {
        query += ` AND days = $${valueIndex++}`;
        values.push(days);
    }

    try {
        const result = await db.query(query, values);
        res.json(result.rows);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/tours/:id', async (req, res) => {
    const { id } = req.params;

    try {
        // Query your database to fetch tour details based on the ID
        const query = 'SELECT * FROM tour WHERE t_id = $1';
        const result = await db.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ success: false, message: 'Tour not found' });
        }

        const tour = result.rows[0];
        res.status(200).json(tour);
    } catch (error) {
        console.error('Error fetching tour details:', error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});




app.post('/signup', async (req, res) => {
    const { fullName, email, phone, birthDate, gender, address, country, city, password } = req.body;
     console.log(req.body);
    try {
        const result = await db.query(
            'INSERT INTO users (name, email, ph_no, dob, gender, address, country, city, password) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
            [fullName, email, phone, birthDate, gender, address, country, city, password]
        );
        res.status(201).send({ success: true, message: 'User registered successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).send({ success: false, message: 'Error registering user' });
    }
});


app.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    try {
        const userQuery = 'SELECT * FROM users WHERE email = $1';
        const result = await db.query(userQuery, [email]);

        if (result.rows.length === 0) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const user = result.rows[0];

        if (password !== user.password) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        const token = jwt.sign({ id: user.id, email: user.email }, secretKey, { expiresIn: '1d' });

        // Respond with user data and token
        res.cookie('authToken', token, { httpOnly: true, maxAge: 24 * 60 * 60 * 1000 }); // 1 day
        res.status(200).json({ success: true, message: 'Signed in successfully', user: {name:user.name, email: user.email, phone:user.ph_no, Date_of_Birth:user.dob, gender:user.gender, address:user.address, country:user.country, city:user.city, t_id:user.t_id} });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
});


app.use('/images', express.static(path.join(__dirname, 'public/image')));

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  }); 