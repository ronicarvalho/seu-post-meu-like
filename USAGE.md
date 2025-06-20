# 📖 Como Usar o Seu Post Meu Like

## 🚀 Início Rápido

### Opção 1: Usando NPM (Recomendado)
```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Ou compilar e executar
npm run build
npm start
```

### Opção 2: Usando o Script Batch (Windows)
```bash
# Duplo clique no arquivo start.bat
# Ou execute no terminal:
start.bat
```

## 🎯 Funcionalidades Principais

### 1. Systray (Bandeja do Sistema)
- **Ícone na bandeja**: O aplicativo aparece na bandeja do sistema
- **Menu contextual**: Clique direito no ícone para acessar opções
- **Duplo clique**: Mostra/oculta a janela principal
- **Minimizar**: Fechar a janela minimiza para a bandeja

### 2. Interface Principal
- **Design moderno**: Interface com gradientes e animações
- **Responsiva**: Adapta-se a diferentes tamanhos de tela
- **Botões funcionais**:
  - Minimizar para Systray
  - Testar Notificação
  - Informações do App

### 3. Notificações
- **Nativas**: Usa o sistema de notificações do SO
- **Multiplataforma**: Funciona em Windows, macOS e Linux
- **Teste**: Botão para testar notificações

## 🔧 Personalização

### Alterando Ícones
1. **Ícone principal**: Substitua `assets/icon.svg`
2. **Ícone do systray**: Substitua `assets/tray-icon.svg`
3. **Formatos suportados**: SVG (recomendado), PNG, ICO

### Modificando a Interface
1. **HTML**: Edite `assets/index.html`
2. **CSS**: Estilos estão no próprio HTML
3. **JavaScript**: Lógica do frontend no final do HTML

### Configurando o Aplicativo
1. **Nome**: Altere em `package.json`
2. **Versão**: Atualize em `package.json`
3. **Descrição**: Modifique em `package.json`

## 🐛 Solução de Problemas

### Aplicativo não inicia
1. Verifique se o Node.js está instalado
2. Execute `npm install` para instalar dependências
3. Compile com `npm run build`
4. Tente executar com `npm start`

### Ícone não aparece na bandeja
1. **Windows**: Verifique se a bandeja está habilitada
2. **Linux**: Certifique-se de que o ambiente desktop suporta systray
3. **macOS**: O ícone aparece na barra de menu superior

### Notificações não funcionam
1. **Windows**: Verifique configurações de notificação
2. **macOS**: Permita notificações nas configurações
3. **Linux**: Verifique se o serviço de notificações está ativo

### Erros de GPU (Comuns no Windows)
```
ERROR:gpu_process_host.cc(991)] GPU process exited unexpectedly
```
- **Solução**: Estes erros são comuns e geralmente não afetam o funcionamento
- **Alternativa**: Use `--disable-gpu` como argumento do Electron

## 📦 Build para Distribuição

### Build Simples
```bash
npm run pack
```

### Build Completo com Instalador
```bash
npm run dist
```

### Arquivos Gerados
- **Windows**: `.exe` e instalador NSIS
- **macOS**: `.dmg`
- **Linux**: `.AppImage`, `.deb`, `.rpm`

## 🔒 Segurança

O aplicativo segue as melhores práticas:
- ✅ Context isolation habilitado
- ✅ Node integration desabilitado no renderer
- ✅ Preload script para comunicação segura
- ✅ Remote module desabilitado
- ✅ Links externos abrem no navegador padrão

## 🎨 Temas e Cores

### Paleta de Cores Principal
- **Primário**: `#667eea` (Azul)
- **Secundário**: `#764ba2` (Roxo)
- **Gradiente**: Linear de azul para roxo
- **Texto**: `#333` (Escuro) / `#fff` (Claro)

### Modificando Cores
Edite as variáveis CSS no arquivo `assets/index.html`:
```css
:root {
  --primary-color: #667eea;
  --secondary-color: #764ba2;
  --text-color: #333;
}
```

## 📱 Responsividade

O aplicativo é responsivo e funciona bem em:
- **Desktop**: 1200x800 (padrão)
- **Tablet**: 768px e acima
- **Mobile**: 480px e acima (se necessário)

## 🔄 Atualizações

Para implementar atualizações automáticas:
1. Adicione `electron-updater` às dependências
2. Configure o servidor de atualizações
3. Implemente a lógica de verificação

## 📞 Suporte

Se encontrar problemas:
1. Verifique este guia primeiro
2. Consulte o `README.md`
3. Verifique os logs do console
4. Abra uma issue no repositório

---

**Desenvolvido com ❤️ usando Electron + TypeScript**