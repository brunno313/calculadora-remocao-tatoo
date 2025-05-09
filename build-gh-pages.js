#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs/promises';
import path from 'path';

// Este script executa o build da aplicação para o GitHub Pages
async function buildForGitHubPages() {
  console.log('🚀 Iniciando build para GitHub Pages...');
  
  try {
    // Executar o build usando a configuração específica
    await executeCommand('npx vite build --config vite.config.client.js');
    
    // Criar arquivo .nojekyll para evitar processamento Jekyll
    await fs.writeFile(path.join('dist', '.nojekyll'), '');
    
    // Modificar o index.html para adicionar script de redirecionamento de hash
    console.log('Modificando o index.html para suportar hash routing...');
    let indexHtml = await fs.readFile(path.join('dist', 'index.html'), 'utf8');
    
    // Adicionar script para redirecionar URLs sem hash para URLs com hash
    const hashRoutingScript = `
    <script>
      // Script para garantir que rotas funcionem no GitHub Pages usando hash routing
      (function() {
        // Se não houver hash na URL e não for a raiz, redirecionar para a versão com hash
        if (!window.location.hash && window.location.pathname !== '/') {
          var path = window.location.pathname;
          // Remove a barra inicial para evitar //#/
          if (path.startsWith('/')) {
            path = path.substring(1);
          }
          // Redirecionar para hash URL
          window.location.replace(window.location.origin + '/#/' + path);
        }
      })();
    </script>
    `;
    
    // Inserir o script antes do fechamento do </head>
    indexHtml = indexHtml.replace('</head>', hashRoutingScript + '</head>');
    await fs.writeFile(path.join('dist', 'index.html'), indexHtml);
    
    // Criar arquivo de redirecionamento simples (index.html) para SPA
    // Reutilizar o indexHtml já modificado
    await fs.writeFile(path.join('dist', '404.html'), indexHtml);
    
    console.log('✅ Build concluído com sucesso!');
    console.log('');
    console.log('Para fazer o deploy no GitHub Pages:');
    console.log('1. Crie um repositório no GitHub');
    console.log('2. Ative o GitHub Pages nas configurações do repositório');
    console.log('3. Configure para usar a branch "gh-pages" ou da sua preferência');
    console.log('4. Envie o conteúdo da pasta "dist" para o repositório');
    console.log('');
    console.log('Ou use a GitHub Action configurada no arquivo .github/workflows/deploy.yml');
    
  } catch (error) {
    console.error('❌ Erro durante o build:', error);
    process.exit(1);
  }
}

// Função para executar comandos shell
function executeCommand(command) {
  return new Promise((resolve, reject) => {
    console.log(`Executando: ${command}`);
    
    const childProcess = exec(command, (error, stdout, stderr) => {
      if (error) {
        console.error(`Erro: ${error.message}`);
        reject(error);
        return;
      }
      
      if (stderr) {
        console.log(`stderr: ${stderr}`);
      }
      
      resolve(stdout.trim());
    });
    
    // Mostrar output em tempo real
    childProcess.stdout.pipe(process.stdout);
    childProcess.stderr.pipe(process.stderr);
  });
}

// Executar o script
buildForGitHubPages();