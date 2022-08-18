# Parkinson's Dashboard

Idiomas:

- [Inglês](README.md)

---

O Parkinson's Dashboard é uma aplicação web que provê dois modulos:

- UPDRS[^1]
- Sensor

Cada um dos módulos dispõe de uma tela composta de gráficos e tabelas que auxiliam o usuário a visualizar dados coletados pelos respectivos métodos.

## Instalando

O Parkinson's Dashboard necessita de uma API[^2] e uma base de dados para funcionar corretamente. Este repositório contêm somente a interface de usuário do projeto, por isso, é necessário configurar a API e a base de dados, que podem ser encontradas em:

- [API](<(https://github.com/infocbra/parkinson-dashboard-api)>)
- [Base de dados](https://github.com/infocbra/sidabi)

No repositório existe um arquivo chamado `.env-example` que precisa ser configurado antes da inicialização.

```Shell
VUE_APP_API_BASE_URL=<your_api_host>         <------ Mudar para url da sua API
VUE_APP_API_PORT=<your_api_port>             <------ Mudar para porta da sua API
VUE_APP_JWT_SECRET=your_secret               <------ Mudar para sua Secret Key
```

Depois de alterar o valor das variáveis para suas configurações, renomeiei o arquivo para `.env`.

O `Dockerfile` também precisa de algumas mudanças nas variáveis de ambiente.

```Docker
ENV VUE_APP_API_BASE_URL="YOUR_API_URL"       <------ Mudar para url da sua API
ENV VUE_APP_API_PORT="YOUR_API_PORT"          <------ Mudar para porta da sua API
ENV VUE_APP_JWT_SECRET="YOUR_SECRET_KEY"      <------ Mudar para sua Secret Key
```

> É importante observar que a _secret key_ precisa ser a mesma nas configurações da API.
> Você pode utilizar o [RandomKeygen](https://randomkeygen.com/) para gerar sua _secret key_, ou criar a sua.

Se você quiser utilizar utilizar o `docker-compose.yml` é preciso alterar algumas configurações.

```yaml
dashboard-api:
  image: sensor-dashboard/sensor-dashboard-api:latest
  depends_on:
    - sidabi
  ports:
    - "5000:5000"
  networks:
    - dashboard-network
  volumes:
    - dashboard-volume:/var/files:ro
  environment:
    - DATABASE_URL=<YOUR_DB_URL>              <------ Mudar para sua url do banco de dados
    - SECRET_KEY=<YOUR_SECRET_KEY>            <------ Mudar para sua Secret Key
    - FILE_LOCATION=/var/files/
```

Se você tiver problemas utilizando o container gerado pelo `Dockerfile` ou `docker-compose.yml` revise suas variáveis de ambiente, provavelmente, o _container_ não está conseguindo reconhecer alguma das urls configuradas.

Por fim, instale as dependências.

```
npm install
```

> Observe que para rodar este comando você precisa do `npm` instalado na sua máquina.
> Dê uma olhada nas configurações no [npm Docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm).

### Rodando o projeto

---

Vamos começar compilando o projeto para desenvolvimento:

```
npm run serve
```

Agora, o servidor deve estar disponível em http://localhost:8080/.

### Compilando e minificando para produção

```
npm run build
```

### Linter e fixar arquivos

```
npm run lint
```

[^1]: Unified Parkinson's Disease Rating Scale
[^2]: Application programming interface
