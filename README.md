# 🚀 Seu Post Meu Like

Aplicativo multiplataforma moderno com suporte completo ao systray (bandeja do sistema), desenvolvido com Electron, TypeScript e Node.js.

## ✨ Recursos

- 🖥️ **Multiplataforma**: Funciona no Windows, macOS e Linux
- 🔔 **Systray**: Ícone na bandeja do sistema com menu contextual
- 📱 **Interface Moderna**: Design responsivo e intuitivo
- 🔔 **Notificações**: Notificações nativas do sistema
- ⚡ **TypeScript**: Código type-safe e mais seguro
- 🎨 **UI Moderna**: Interface com gradientes e animações suaves

## 🛠️ Tecnologias Utilizadas

- **Electron** - Framework para aplicações desktop
- **TypeScript** - JavaScript com tipagem estática
- **Node.js** - Runtime JavaScript
- **HTML5/CSS3** - Interface moderna e responsiva

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Instalação e Execução

### 1. Clone o repositório
```bash
git clone <url-do-repositorio>
cd seu-post-meu-like
```

### 2. Instale as dependências
```bash
npm install
```

### 3. Execute em modo desenvolvimento
```bash
npm run dev
```

### 4. Compile o TypeScript
```bash
npm run build
```

### 5. Execute a versão compilada
```bash
npm start
```

## 📦 Build para Distribuição

### Build para todas as plataformas
```bash
npm run dist
```

### Build apenas para empacotamento
```bash
npm run pack
```

Os arquivos de distribuição serão gerados na pasta `release/`.

## 🎯 Funcionalidades do Systray

### Windows
- Ícone na bandeja do sistema (system tray)
- Menu contextual com opções:
  - Mostrar/Ocultar aplicativo
  - Sobre
  - Sair
- Duplo clique para mostrar/ocultar janela

### macOS
- Ícone na barra de menu
- Suporte a ícones template (adapta ao tema)
- Menu contextual nativo

### Linux
- Ícone na bandeja do sistema
- Compatível com diferentes ambientes desktop

## 🔧 Estrutura do Projeto

```
seu-post-meu-like/
├── src/
│   ├── main.ts          # Processo principal do Electron
│   └── preload.ts       # Script de preload para comunicação segura
├── assets/
│   ├── index.html       # Interface principal
│   ├── about.html       # Página sobre
│   ├── icon.svg         # Ícone principal
│   └── tray-icon.svg    # Ícone do systray
├── dist/                # Arquivos TypeScript compilados
├── release/             # Builds de distribuição
├── package.json         # Configurações do projeto
├── tsconfig.json        # Configurações do TypeScript
└── README.md           # Este arquivo
```

## 🎨 Personalização

### Alterando Ícones
- **Ícone principal**: Substitua `assets/icon.svg`
- **Ícone do systray**: Substitua `assets/tray-icon.svg`

### Modificando a Interface
- **HTML**: Edite `assets/index.html`
- **Estilos**: CSS está incorporado no HTML para facilitar
- **Funcionalidades**: Adicione lógica em `src/main.ts`

### Configurações do Build
Edite a seção `build` no `package.json` para personalizar:
- Nome do aplicativo
- Ícones por plataforma
- Configurações de instalador

## 🔒 Segurança

O aplicativo segue as melhores práticas de segurança do Electron:
- Context isolation habilitado
- Node integration desabilitado no renderer
- Preload script para comunicação segura
- Remote module desabilitado

## 🐛 Solução de Problemas

### Ícone não aparece no systray
- Verifique se os arquivos de ícone existem
- No Linux, certifique-se de que o ambiente desktop suporta systray

### Aplicativo não inicia
- Verifique se o Node.js está instalado corretamente
- Execute `npm install` para instalar dependências
- Verifique se não há erros de compilação TypeScript

### Notificações não funcionam
- No Windows: Verifique as configurações de notificação
- No macOS: Permita notificações nas configurações do sistema
- No Linux: Certifique-se de que o serviço de notificações está ativo

## 📝 Scripts Disponíveis

- `npm run build` - Compila TypeScript
- `npm run start` - Inicia aplicação compilada
- `npm run dev` - Modo desenvolvimento com DevTools
- `npm run pack` - Empacota sem criar instalador
- `npm run dist` - Cria build completo para distribuição

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 🙏 Agradecimentos

- [Electron](https://electronjs.org/) - Framework incrível para apps desktop
- [TypeScript](https://typescriptlang.org/) - JavaScript que escala
- Comunidade open source por todas as ferramentas fantásticas

---

**Desenvolvido com ❤️ usando Electron + TypeScript**