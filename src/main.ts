import { app, BrowserWindow, Tray, Menu, ipcMain, shell, Notification, nativeImage } from 'electron';
import * as path from 'path';

class SeuPostMeuLikeApp {
  private mainWindow: BrowserWindow | null = null;
  private tray: Tray | null = null;
  private isQuiting = false;

  constructor() {
    this.initializeApp();
  }

  private initializeApp(): void {
    // Configurações para melhor compatibilidade
    app.commandLine.appendSwitch('disable-gpu-sandbox');
    app.commandLine.appendSwitch('disable-software-rasterizer');
    
    // Aguarda o app estar pronto
    app.whenReady().then(() => {
      this.createWindow();
      this.createTray();
      this.setupAppEvents();
    });

    // Quit quando todas as janelas são fechadas (exceto no macOS)
    app.on('window-all-closed', () => {
      if (process.platform !== 'darwin') {
        app.quit();
      }
    });

    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) {
        this.createWindow();
      }
    });

    // Previne múltiplas instâncias
    const gotTheLock = app.requestSingleInstanceLock();
    if (!gotTheLock) {
      app.quit();
    } else {
      app.on('second-instance', () => {
        if (this.mainWindow) {
          if (this.mainWindow.isMinimized()) this.mainWindow.restore();
          this.mainWindow.focus();
          this.mainWindow.show();
        }
      });
    }
  }

  private createWindow(): void {
    this.mainWindow = new BrowserWindow({
      width: 500,
      height: 750,
      minWidth: 450,
      minHeight: 700,
      frame: false, // Remove bordas e barra de título
      transparent: false,
      resizable: true,
      icon: this.getIconPath(),
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true,
        preload: path.join(__dirname, 'preload.js')
      },
      show: false, // Não mostrar até estar pronto
      alwaysOnTop: false
    });

    // Carrega o arquivo HTML
    this.mainWindow.loadFile(path.join(__dirname, '../assets/index.html'));

    // Mostra a janela quando estiver pronta
    this.mainWindow.once('ready-to-show', () => {
      this.mainWindow?.show();
    });

    // Minimizar para systray ao invés de fechar
    this.mainWindow.on('close', (event) => {
      if (!this.isQuiting) {
        event.preventDefault();
        this.mainWindow?.hide();
        return false;
      }
    });

    // Abrir links externos no navegador padrão
    this.mainWindow.webContents.setWindowOpenHandler(({ url }) => {
      shell.openExternal(url);
      return { action: 'deny' };
    });

    // DevTools em modo desenvolvimento
    if (process.argv.includes('--dev')) {
      this.mainWindow.webContents.openDevTools();
    }
  }

  private createTray(): void {
    const trayIcon = this.getTrayIcon();
    this.tray = new Tray(trayIcon);

    const contextMenu = Menu.buildFromTemplate([
      {
        label: 'Mostrar Aplicativo',
        click: () => {
          this.showWindow();
        }
      },
      {
        label: 'Ocultar Aplicativo',
        click: () => {
          this.hideWindow();
        }
      },
      { type: 'separator' },
      {
        label: 'Sobre',
        click: () => {
          this.showAbout();
        }
      },
      { type: 'separator' },
      {
        label: 'Sair',
        click: () => {
          this.quitApp();
        }
      }
    ]);

    this.tray.setToolTip('Seu Post Meu Like');
    this.tray.setContextMenu(contextMenu);

    // Duplo clique no tray para mostrar/ocultar
    this.tray.on('double-click', () => {
      if (this.mainWindow?.isVisible()) {
        this.hideWindow();
      } else {
        this.showWindow();
      }
    });
  }

  private setupAppEvents(): void {
    // Evento antes de sair
    app.on('before-quit', () => {
      this.isQuiting = true;
    });
    
    // Handlers IPC
    this.setupIpcHandlers();
  }
  
  private setupIpcHandlers(): void {
    // Handler para notificações
    ipcMain.handle('show-notification', async (event, { title, body }) => {
      if (Notification.isSupported()) {
        new Notification({ title, body }).show();
      }
    });
    
    // Handler para minimizar para tray
    ipcMain.handle('minimize-to-tray', async () => {
      this.hideWindow();
    });
    
    // Handler para minimizar janela
    ipcMain.handle('minimize-window', async () => {
      if (this.mainWindow) {
        this.mainWindow.minimize();
      }
    });
    
    // Handler para fechar app
    ipcMain.handle('close-app', async () => {
      this.quitApp();
    });
    
    // Handler para obter versão
    ipcMain.handle('get-app-version', async () => {
      return app.getVersion();
    });
  }

  private showWindow(): void {
    if (this.mainWindow) {
      this.mainWindow.show();
      this.mainWindow.focus();
    }
  }

  private hideWindow(): void {
    if (this.mainWindow) {
      this.mainWindow.hide();
    }
  }

  private showAbout(): void {
    const aboutWindow = new BrowserWindow({
      width: 500,
      height: 300,
      resizable: false,
      minimizable: false,
      maximizable: false,
      parent: this.mainWindow || undefined,
      modal: true,
      webPreferences: {
        nodeIntegration: false,
        contextIsolation: true
      }
    });

    aboutWindow.loadFile(path.join(__dirname, '../assets/about.html'));
    aboutWindow.setMenu(null);
  }

  private quitApp(): void {
    this.isQuiting = true;
    app.quit();
  }

  private getIconPath(): string {
    // Usar a imagem do logo como ícone do aplicativo
    return path.join(__dirname, '../assets/youpostmylike-transparent.png');
  }

  private getTrayIcon(): Electron.NativeImage {
    // Usar a mesma imagem do logo para a systray
    const iconPath = path.join(__dirname, '../assets/youpostmylike-transparent.png');
    const image = nativeImage.createFromPath(iconPath);
    
    // Redimensionar para o tamanho apropriado do tray (16x16 ou 32x32)
    const resizedImage = image.resize({ width: 16, height: 16 });
    
    if (process.platform === 'darwin') {
      resizedImage.setTemplateImage(true);
    }
    
    return resizedImage;
  }
}

// Inicializar a aplicação
new SeuPostMeuLikeApp();