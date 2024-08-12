import { getData } from './lib/service.js';

    document.addEventListener('DOMContentLoaded', async () => {
      try {
        const users = await getData();
        const userList = document.getElementById('result');

        users.forEach(user => {
          const li = document.createElement('li');
          li.textContent = user.name;
          userList.appendChild(li);
        });
      } catch (error) {
        console.error("Kullanıcılar alınırken bir hata oluştu:", error);
      }
    });