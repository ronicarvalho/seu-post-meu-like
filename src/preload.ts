import { contextBridge, ipcRenderer } from 'electron';

// API exposta para o renderer process
contextBridge.exposeInMainWorld('electronAPI', {
  // Métodos para comunicação com o processo principal
  platform: process.platform,
  
  // Métodos para notificações
  showNotification: (title: string, body: string) => {
    return ipcRenderer.invoke('show-notification', { title, body });
  },
  
  // Métodos para janela
  minimizeToTray: () => {
    return ipcRenderer.invoke('minimize-to-tray');
  },
  
  minimizeWindow: () => {
    return ipcRenderer.invoke('minimize-window');
  },
  
  closeApp: () => {
    return ipcRenderer.invoke('close-app');
  },
  
  // Métodos para sistema
  getAppVersion: () => {
    return ipcRenderer.invoke('get-app-version');
  },
  
  // Listeners para eventos do main process
  onUpdateAvailable: (callback: () => void) => {
    ipcRenderer.on('update-available', callback);
  },
  
  onUpdateDownloaded: (callback: () => void) => {
    ipcRenderer.on('update-downloaded', callback);
  },
  
  // Remover listeners
  removeAllListeners: (channel: string) => {
    ipcRenderer.removeAllListeners(channel);
  }
});

// Tipos para TypeScript
declare global {
  interface Window {
    electronAPI: {
      platform: string;
      showNotification: (title: string, body: string) => Promise<void>;
      minimizeToTray: () => Promise<void>;
      minimizeWindow: () => Promise<void>;
      closeApp: () => Promise<void>;
      getAppVersion: () => Promise<string>;
      onUpdateAvailable: (callback: () => void) => void;
      onUpdateDownloaded: (callback: () => void) => void;
      removeAllListeners: (channel: string) => void;
    };
  }
}