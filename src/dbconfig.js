/**
 * Configurações e conexão com o banco de dados.
 */

// Import bibliotecas
const { sql } = require ('@vercel/postgres');

const dotenv = require('dotenv');
dotenv.config();

/**
 * Cria uma conexão com o banco de dados.
 * @returns 
 */
async function createDbConnection() {
    
  console.log("Conexão com PostgreSQL foi estabelecida");

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
      await db`CREATE TABLE aluno (
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

module.exports = createDbConnection();