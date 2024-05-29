/**
 * Métodos de acesso aos dados de aluno no banco de dados.
 */

// Import das bibliotecas próprias
const db = require("./dbconfig");

const { sql } = require ('@vercel/postgres');

// Retorna uma lista com todos os alunos
const getLista = async (request, response) => {   
   
    const { rows } = await sql`SELECT alunoId, nome, curso, cpf FROM aluno ORDER BY alunoId;`;

    response.status(200).json(rows);
 
};

// Procura um aluno pelo id
const getAluno = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);

    const { rows } = await sql`SELECT alunoid, nome, curso, cpf FROM aluno WHERE alunoid = ${alunoId};`;

    response.status(200).json(rows[0]);
};

// Insere um novo aluno
const inserir = async (request, response) => {
    const { alunoId, nome, curso, cpf } = request.body ;  
    
    const { rows } = await sql`INSERT INTO aluno (alunoid, nome, curso, cpf) VALUES (${alunoId}, ${nome}, ${curso}, ${cpf});`;

    response.status(201).json({ message: `Aluno inserido com alunoId: ${alunoId}` })
    
};

// Altera um aluno pelo alunoId
const alterar = async (request, response) => {    
    const alunoId = parseInt(request.params.alunoId);
    const { nome, curso, cpf } = request.body;    

    const { rows } = await sql`UPDATE CLIENTE SET nome = ${nome}, curso = ${curso}, cpf = ${cpf} WHERE alunoid = ${alunoId};`;
    
    response.status(200).json( { message: `Aluno alterado com alunoId: ${alunoId}` });    
};
   

// Exclui um aluno pelo alunoId
const excluir = async (request, response) => {
    const alunoId = parseInt(request.params.alunoId);

    const { rows } = await sql`DELETE FROM aluno WHERE alunoid = ${alunoId};`;

    response.status(200).json( { message: `Aluno excluído com alunoId: ${alunoId}` });
};

// Exporta as funções
module.exports = {
    getLista,
    getAluno,
    inserir,
    alterar,
    excluir
};