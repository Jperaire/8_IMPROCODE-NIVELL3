# SPRINT 8 - IMPROCODE ACTUALIZAR PENDIENTE!!!!!!!!!

## 📄 Descripció

Es tracta d'una aplicació amb React que utilitza diferents plugins habituals en projectes reals de clients: mapes, calendaris i gràfics.

Les funcionalitats principals inclouen:

* Menú amb enrutament a diferents seccions
* Mapa interactiu amb ubicacions (MapBox)
* Calendari per afegir, editar i eliminar esdeveniments (FullCalendar)
* Gràfics amb dades estadístiques (Chart.js)
* CRUD complet a Firestore
* Filtratge per categories al mapa
* Hosting del projecte

---

## 💻 Tecnologies Utilitzades

* [React](https://react.dev/)
* [Firebase (Firestore & Hosting)](https://firebase.google.com/)
* [Mapbox GL JS](https://docs.mapbox.com/mapbox-gl-js/)
* [FullCalendar React](https://fullcalendar.io/docs/react)
* [Chart.js](https://www.chartjs.org/)
* [React Router DOM](https://reactrouter.com/)
* [Vercel](https://vercel.com/) o Firebase Hosting
* [SonarCloud](https://sonarcloud.io/) per auditoria de codi

---

## 📋 Requisits

* Node.js >= 18.x
* npm >= 9.x
* Compte a [Firebase](https://firebase.google.com/)
* API Key de [Mapbox](https://account.mapbox.com/)

---

## 🛠️ Instal·lació

1. **Clona el repositori:**

   ```bash
   git clone https://github.com/el_teu_usuari/nom-projecte.git
   cd nom-projecte
   ```

2. **Instal·la les dependències:**

   ```bash
   npm install
   ```

3. **Configura Firebase:**

   * Crea un projecte a [Firebase Console](https://console.firebase.google.com/)
   * Afegeix la configuració a `src/firebase/config.js`:

     ```js
     export const firebaseConfig = {
       apiKey: "API_KEY",
       authDomain: "PROJECT_ID.firebaseapp.com",
       projectId: "PROJECT_ID",
       storageBucket: "PROJECT_ID.appspot.com",
       messagingSenderId: "SENDER_ID",
       appId: "APP_ID"
     };
     ```

4. **Configura Mapbox:**

   * Afegeix la teva API Key al fitxer `.env`:

     ```
     VITE_MAPBOX_TOKEN=la_teva_api_key
     ```

---

## ▶️ Execució

```bash
npm run dev
```

Accedeix a l’aplicació des de: [http://localhost:5173](http://localhost:5173)

---

## 🌐 Desplegament

### Opció 1: **Firebase Hosting**

```bash
npm run build
firebase init hosting
firebase deploy
```

### Opció 2: **Vercel**

1. Accedeix a [https://vercel.com](https://vercel.com)
2. Importa el teu repositori de GitHub
3. Configura variables d'entorn si cal (MAPBOX, etc.)
4. Fes el deploy automàtic

---

## 🤝 Contribucions

Gràcies per voler contribuir!

1. Fes un *fork* del projecte
2. Crea una nova branca (`git checkout -b feature/nou-feature`)
3. Fes els teus canvis i puja (`git commit -am 'Afegeix nova funcionalitat'`)
4. Fes *push* a la branca (`git push origin feature/nou-feature`)
5. Obre una *pull request*

---
