# Guia de Deploy no GitHub Pages

Este guia explica como fazer o deploy da Calculadora de Remoção de Tatuagem no GitHub Pages.

## Opção 1: Deploy Automático com GitHub Actions (Recomendado)

1. **Crie um repositório no GitHub**
   - Crie um novo repositório no GitHub ou use um existente
   - Anote o nome do seu repositório, por exemplo: `username/tattoo-removal-calculator`

2. **Adicione os arquivos ao repositório**
   - Clone seu repositório: `git clone https://github.com/username/tattoo-removal-calculator.git`
   - Copie todos os arquivos deste projeto para a pasta do repositório clonado
   - Faça commit e push dos arquivos:
     ```
     git add .
     git commit -m "Initial commit"
     git push origin main
     ```

3. **Configure o GitHub Pages**
   - Vá para as configurações do seu repositório no GitHub
   - Na seção "Pages", selecione:
     - Source: GitHub Actions
   - O workflow que criamos já está configurado no arquivo `.github/workflows/deploy.yml`

4. **Pronto!**
   - O GitHub Actions irá construir e publicar automaticamente seu site
   - Após a conclusão do workflow, seu site estará disponível em: `https://username.github.io/tattoo-removal-calculator`

## Opção 2: Deploy Manual

Se preferir fazer o deploy manualmente:

1. **Construa o projeto**
   - Execute o script de build para GitHub Pages:
     ```
     node build-gh-pages.js
     ```
   - Isso irá gerar uma pasta `dist` com os arquivos para deploy

2. **Publique no GitHub Pages**
   - Use o método de sua preferência para publicar a pasta `dist` no GitHub Pages:
     - Criar uma branch gh-pages manualmente
     - Usar ferramentas como `gh-pages` npm package
     - Ou outro método de sua escolha

## Solução de Problemas

1. **Rotas não funcionam após deploy**
   - A aplicação já está configurada para usar hash routing (`/#/`)
   - Verifique se você está acessando URLs com o formato: `https://username.github.io/tattoo-removal-calculator/#/sua-rota`

2. **Estilos ou imagens não carregam**
   - Verifique se o arquivo `vite.config.client.js` tem `base: './'` configurado
   - Certifique-se de que todas as importações de recursos usam caminhos relativos

3. **Erros de CORS ou API**
   - Lembre-se que no GitHub Pages só é possível hospedar aplicações front-end estáticas
   - Se for necessário um backend, considere:
     - Usar serviços como Netlify Functions, Vercel ou AWS Lambda
     - Criar um API Gateway para seu backend existente

## Personalização

Para personalizar a URL do seu site:

1. **Domínio personalizado**
   - Adicione um arquivo `CNAME` na pasta `dist` com seu domínio personalizado
   - Configure os registros DNS do seu domínio para apontar para o GitHub Pages
   - No GitHub, adicione seu domínio personalizado nas configurações do Pages

2. **Subdiretório diferente**
   - Se quiser hospedar em um subdiretório diferente, atualize a configuração `base` no arquivo `vite.config.client.js`
   - Por exemplo: `base: '/novo-diretorio/'`