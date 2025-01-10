# Desafio Técnico Estágio em Desenvolvimento de Software - SciCrop


## Descrição

O desafio persiste na criação de um mini sistema de blog com as funcionalidades de listagem, criação, e deleção de publicações. 

## Executar localmente

### Pré requisitos

Para rodar o projeto, você precisará de uma única ferramenta previamente instalada:

- [Docker](https://docs.docker.com/desktop/setup/install/windows-install/) - *já incluso docker-compose*

### Clonando o repositório 

Para baixar o repositório localmente, basta utilizar o seguinte comando em seu terminal de preferência:

```bash
$ git clone https://github.com/gabrielmendesdev/project-blog-system.git
```

### Rodando o projeto

<p>Uma vez que instalado o docker e <i>docker-compose</i> com sucesso (ambos são instalados no link acima), para rodar todo o projeto é bem simples! Basta utilizar o seguinte comando no terminal:</p>

<p><strong>IMPORTANTE:</strong> o ecossistema do projeto utiliza as portas 3000, 3001 e 3306, então certifique-se que não há nenhum outro serviço utilizando essas portas.</p>

```bash
# navegando até a pasta do projeto
$ cd ./blog-system-project

# inicializando os projetos e banco de dados
$ docker-compose up -d
```

Pronto! Assim que todos os containers forem inicializados, você pode acessar a interface da aplicação pelo endereço http://localhost:3000

## Decisões técnicas relevantes

- <strong>Deleção lógica no banco de dados</strong>: Para esse projeto optei por utilizar a deleção lógica das publicações para que as deleções indevidas possam ser revertidas caso necessário. Essa escolha também auxilia para manter uma auditoria de quando as publicações foram deletadas.

- <strong>Utilização de containers</strong>: Sempre que possível gosto de utilizar docker para componentizar minhas aplicações. Nesse caso fica muito simples subir todo o ecossistema de uma só vez, além de não precisar instalar e configurar diversas dependências no computador para conseguir rodar o projeto.

- <strong>Escolha do Next.js</strong>: Optei por utilizar next para a construção da interface visual pois é um framework completo, com diversas possibilidades diferentes de implementação, junto da sua execução via server-side, montando os componentes antes da renderização total da página.

- <strong>Shadcn</strong>: Utilizei a biblioteca shadcn para a construção de componentes pré moldados, porém, sem estilização. Diferentemente de bibliotecas como Material UI, React-Bootstrap entre outros, em que a biblioteca inteira é baixada no projeto onde não utilizamos diversos componentes, em shadcn só baixamos em nossos projetos os componentes que iremos utilizar. Com o bonus de que, os componentes são alocados em uma pasta externa as dependências do projeto, sendo assim, tendo suas lógicas e estilizações fácilmente modificadas para a melhor adaptação em nossa lógica e projeto.

- <strong>Formulários com zod e react-hook-form</strong>: Optei por utilizar em conjunto essas 2 libs, que são espetacularmente escaláveis. Com o zod, temos a facilidade em criar diversos tipos de regras para nossos formulários, como limite de caracteres, caracteres não permitidos, campos obrigatórios entre muitos outros benefícios. Junto com o react-hook-form, temos a praticidade de resgatar os valores dos campos de nosso formulário sem a necessidade de criar diversos e repetidos gerenciadores de estados, reduzindo drásticamente o código e facilitando sua legibilidade. 

- <strong>Husky, Lint-Staged e Commitlint</strong>: Utilizado somente em ambiente de desenvolvimento, as ferramentas como Husky e Lint-staged, possibilitam a execução de diversos scripts antes da realização de commits, pushs, e afins. Junto também adicionei o commitlint, que nos permite padrozinar as mensagens de commits deixando nosso projeto muito mais sustentável a longo prazo e evitando que código mal desenvolvido ou mensagens pouco explicativas subam em nosso projeto.


## Implementação e aprendizados para o futuro

<p>Para o lado do servidor, o projeto está utilizando a biblioteca <a href="https://sequelize.org/">Sequelize</a> como ORM para que a interação com o banco de dados seja mais simples e eficaz.</p>

<p>Também foi utilizado o <a href="https://expressjs.com/pt-br/">Express</a> para a criação do servidor, e ele foi escolhido pela sua simplicidade em implementar.</p>

<p>Para o futuro, talvez seja interessante explorar mais os middlewares do Express, como criar funções que auxiliariam na autenticação de usuários, por exemplo. Ou até mesmo utilizar um framework para criar algo mais robusto, como o NestJS. Outro ponto que achei interessante mas que não tive tempo de explorar mais e implementar, foi sobre as <i>migrations</i> do Sequelize. Dessa maneira a própria aplicação ficaria responsável por criar as tabelas que ela precisa no banco de dados.</p>

<p>Para o lado do cliente, creio que seja interessante futuramente adicionar autenticações e sistema de login, e também dividir entre usuários e admnistradores, para que a permissão de deletar e criar posts seja funcionalidade apenas dos admins. Talvez uma autenticação JWT, com as informações do usuário sendo manipuladas através do NextAuth trariam consistência a aplicação.</p>