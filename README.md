# Programa servidor API-REST do CRUD de Aluno utilizando Node.js e Vercel Postgres.

## Descrição
- O projeto foi desenvolvido no VSCodde deve ser chamado aluno_nodejs_v1_vercel.
- Programa cliente está no projeto "cadastroaluno_reactjs_v1_vercel".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela aluno possui os campos alunoId, nome e cpf.

## Dependências
    - express,
    - cors,
    - dotenv
    - @vercel/postgres.

## Execução
   <pre><code>npm start</code></pre>

## Atualização:
   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>

## Arquivos fontes do projeto em src
- index.js - Programa principal com o servidor Express.
- alunorecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
- dbconfig.js - Contêm as configurações e conexão com o banco de dados.
- servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

## Vercel   
    https://cadastroaluno-nodejs-v1-vercel.vercel.app/    

## Serviços
    Substitua localhost:8080 pelo endereço do servidor.

- Serviço que retorna via GET a lista de alunos.<br>
    http://localhost:8000/alunos

- Serviço que retorna via GET um aluno.<br>
    substitua \<ID\> por um id de um aluno.<br>
    http://localhost:8000/aluno/<ID\>

- Serviço que insere via POST um aluno.<br>
    http://localhost:8000/aluno<br>
    Enviar um JSON com os campos alunoId, nome, curso e cpf.
    Content-Type: application/json -d {"alunoId":"1","nome":"Pedro","curso":"Computação","cpf":"45678912399"}

- Serviço que atualiza via PUT um aluno.<br>
    http://localhost:8000/aluno<br>
    Enviar um JSON com os campos alunoId, nome, curso e cpf.
    Content-Type: application/json -d {"alunoId":"1", "nome":"Pedro","curso":"Computação","cpf":"45678912399"}
    
- Serviço que exclui via DELETE um aluno.<br>
    Substitua \<ID\> por um id de um aluno.<br>
    http://localhost:8000/aluno/<ID\>
