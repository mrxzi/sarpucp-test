import mysql from 'mysql2/promise';

// Parse the DATABASE_URL
const dbUrl = process.env.DATABASE_URL || 'mysql://u53_oiXambs0YR:EjRk1PTmxYL!gh!bO7MQpgaq@204.10.193.119:3306/s53_sarp';
const url = new URL(dbUrl);

// Create connection pool with enhanced configuration
const pool = mysql.createPool({
  host: url.hostname,
  user: url.username,
  password: url.password,
  database: url.pathname.substring(1), // Remove leading slash
  port: parseInt(url.port),
  waitForConnections: true,
  connectionLimit: 20, // Increased from 10
  queueLimit: 0,
  enableKeepAlive: true,
  keepAliveInitialDelay: 10000,
  connectTimeout: 10000, // 10 seconds
  idleTimeout: 60000, // Idle connection timeout in milliseconds
});

// Test the connection
pool.getConnection()
  .then(connection => {
    console.log('Database connection established successfully');
    connection.release();
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

// Handle pool errors
pool.on('connection', (connection) => {
  connection.on('error', (err) => {
    console.error('Unexpected error on database connection:', err);
  });
});

export default pool; 