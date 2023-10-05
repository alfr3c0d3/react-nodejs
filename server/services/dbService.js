import sql from 'mssql/msnodesqlv8.js';
import { stringifyJson, toCamelCase } from '../utils/objectHandler.js';
import { Logger } from '../utils/customLogger.js';

// Create a connection pool and export the connect function
const pool = new sql.ConnectionPool({
  database: "MonstersDb",
  server: "localhost\\SQLEXPRESS",
  driver: "msnodesqlv8",
  options: {
    trustedConnection: true,
  },
});

const executeQuery = async (query) => {
  let conn;
  try {
    // Acquire a connection from the pool
    conn = await pool.connect();

    // Query the database or perform operations here
    const { recordset: data } = await conn.query(query);
    return toCamelCase(data);
  } catch (err) {
    Logger.error('Error executing SQL query: ', stringifyJson(err));
    throw new Error(err);
  } finally {
    // Release the connection back to the pool
    if (conn) {
      conn.release();
    }
  }
}

export default executeQuery;
