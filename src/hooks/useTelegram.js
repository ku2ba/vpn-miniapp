import { useState, useEffect } from 'react';

export const useTelegram = () => {
  const [user, setUser] = useState(null);
  const [webApp, setWebApp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.log('Checking Telegram WebApp...');
    console.log('window.Telegram:', window.Telegram);
    
    // Проверяем, что мы в Telegram WebApp
    if (window.Telegram && window.Telegram.WebApp) {
      console.log('Telegram WebApp found!');
      const tg = window.Telegram.WebApp;
      
      // Инициализируем WebApp
      tg.ready();
      tg.expand();
      
      // Получаем данные пользователя
      const userData = tg.initDataUnsafe?.user;
      console.log('User data from Telegram:', userData);
      
      if (userData) {
        setUser({
          id: userData.id,
          firstName: userData.first_name,
          lastName: userData.last_name,
          username: userData.username,
          languageCode: userData.language_code,
          isPremium: userData.is_premium || false
        });
      }
      
      setWebApp(tg);
      setIsLoading(false);
    } else {
      console.log('Not in Telegram WebApp, using test data');
      // Если не в Telegram, создаем заглушку для разработки
      setUser({
        id: 123456789,
        firstName: 'Test',
        lastName: 'User',
        username: 'testuser',
        languageCode: 'ru',
        isPremium: false
      });
      setIsLoading(false);
    }
  }, []);

  const sendData = (data) => {
    if (webApp) {
      webApp.sendData(JSON.stringify(data));
    }
  };

  const showAlert = (message) => {
    if (webApp) {
      webApp.showAlert(message);
    } else {
      alert(message);
    }
  };

  const showConfirm = (message, callback) => {
    if (webApp) {
      webApp.showConfirm(message, callback);
    } else {
      const result = confirm(message);
      callback(result);
    }
  };

  const close = () => {
    if (webApp) {
      webApp.close();
    }
  };

  return {
    user,
    webApp,
    isLoading,
    sendData,
    showAlert,
    showConfirm,
    close
  };
};
