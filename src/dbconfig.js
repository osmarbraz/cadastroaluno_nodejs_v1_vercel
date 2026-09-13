/**
 * Configurações e conexão com o banco de dados.
 */

// Importa a biblioteca dotenv, responsável por carregar
// as variáveis de ambiente armazenadas no arquivo .env
const dotenv = require('dotenv');

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
function createDbConnection() {
    
  // Carrega as variáveis do arquivo .env para o objeto process.env
  dotenv.config();

  // Essa função permite estabelecer a conexão com um banco
  // de dados PostgreSQL hospedado no Neon.
  const { neon } = require('@neondatabase/serverless');

  // Cria a conexão com o banco de dados utilizando a string
  // de conexão armazenada na variável de ambiente DATABASE_URL.
  const sql = neon(process.env.DATABASE_URL);
    
  console.log("Conexão com PostgreSQL foi estabelecida");

  //Cria a tabela do banco de dados.
  createTable(sql);  

  return sql;
}

/**
 * Cria a tabela de aluno se não existir.
 * 
 * @param {*} db 
 */
async function createTable(db) {
     try {
      await db`CREATE TABLE IF NOT EXISTS aluno (
            alunoId INTEGER, 
            nome VARCHAR(100), 
            curso VARCHAR(50), 
            cpf VARCHAR(11), 
            CONSTRAINT pk_aluno PRIMARY KEY (alunoId));`;
      console.log("Tabela aluno criada");
    } catch (error) {
      console.log("Tabela já existe");
    }
  }

// Inicializa a conexão e criação da tabela
module.exports = createDbConnection(); 