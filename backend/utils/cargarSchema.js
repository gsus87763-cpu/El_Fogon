const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const CONEXION = {
  host: 'sakura.proxy.rlwy.net',
  port: 33427,
  user: 'root',
  password: 'zlReyYaFuiKMcDrrwOiGLueyJMFNnqrD',
  multipleStatements: true
};

async function ejecutar() {
  const rutaSchema = path.join(__dirname, '..', 'schema.sql');
  const sql = fs.readFileSync(rutaSchema, 'utf8');

  console.log('Conectando a', CONEXION.host + ':' + CONEXION.port, '...');
  const conexion = await mysql.createConnection(CONEXION);

  console.log('Ejecutando schema.sql (puede tardar unos segundos)...');
  await conexion.query(sql);

  console.log('Listo. La base "el_fogon" fue creada con sus tablas y datos de ejemplo.');
  await conexion.end();
  process.exit(0);
}

ejecutar().catch((err) => {
  console.error('Error al cargar el schema:', err.message);
  process.exit(1);
});