# Programa servidor API-REST do CRUD de Aluno utilizando Node.js e Vercel Postgres.

- O projeto foi desenvolvido no VSCodde deve ser chamado aluno_nodejs_v1_vercel.
- Programa cliente está no projeto "cadastroaluno_reactjs_v1_vercel".
- Programa servidor web que cria o webservice na posta 8000.
- Implementação do serviço utilizando REST e os métodos GET, POST, PUT e DELETE.
- A pasta src contêm os fontes do projeto.
- Os dados de configuração da integração com o banco de dados estão no arquivo src/dbconfig.js.
- A tabela aluno possui os campos alunoId, nome e cpf.

- Dependências:    
    - express,
    - cors,
    - dotenv
    - @vercel/postgres.

- Execução:    
   <pre><code>npm start</code></pre>

- Atualização:

   Caso o diretório "node_modules" tenha sido apagado basta executar o comando npm a seguir para recriar a pasta e os arquivos das dependências.
   <pre><code>npm update</code></pre>

- Arquivos em src:
    - index.js - Programa principal com o servidor Express.
    - alunorecurso.js - Contêm os métodos de acesso aos recursos do banco de dados.
    - dbconfig.js - Contêm as configurações e conexão com o banco de dados.
    - servicos.js - Contêm as rotas aos métodos de acesso ao banco de dados.

- Vercel   
    https://cadastroaluno-nodejs-v1-vercel.vercel.app/    