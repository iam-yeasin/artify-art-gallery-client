# ARTIFY – A CREATIVE ARTWORK SHOWCASE PLATFORM

## 🌟 Project Theme

**Artify** is an **online art-sharing platform** where artists can upload, display, and explore creative works. Users can curate favorites, connect through appreciation, and interact with a modern, clean UI designed for art lovers.

---

## 🔗 Live Site

- **Client Side**: [Artify Live](https://artify-art-gallery.web.app)
- **Server Side**: [Artify API](https://artify-gallery-server-side.vercel.app)

---

## ⚡ Key Features

- **Authentication**:
  - Login/Register with **Email & Password** or **Google**.
  - Password validation (uppercase, lowercase, min 6 characters).
  - Toast notifications for success/error feedback.

- **Artwork Management**:
  - **Add Artwork**: Upload with image, title, category, medium, description, dimensions, price, and visibility (public/private).
  - **Explore Artworks**: Search by title/artist, filter by category, and view all public artworks.
  - **Artwork Details**: Full details, artist info, like button (MongoDB `$inc`), and add to favorites.
  - **My Gallery**: CRUD operations (update/delete with confirmation).
  - **My Favorites**: View and unfavorite artworks.

- **UI/UX Highlights**:
  - **Banner/Slider**: 3+ slides for trending art/artists.
  - **Featured Artworks**: 6 most recent artworks (MongoDB `sort()` + `limit()`).
  - **Extra Sections**: Top Artists of the Week, Community Highlights.
  - **404 Page**: Creative design without navbar/footer.
  - **Theme Toggle**: Dark/light mode with `localStorage` persistence.
  - **Responsive Design**: Mobile, tablet, and desktop compatibility.

- **Technical Implementations**:
  - **Loading Spinner**: While fetching data.
  - **Private Routes**: Logged-in users stay authenticated on reload.
  - **Toast/SweetAlert**: For all user feedback.
  - **Grid Layout**: Uniform card sizes for artworks.
  - **Libraries Used**: React Simple Typewriter, React Awesome Reveal.

---

## 🛠️ Technologies Used

### **Frontend**
- **React.js**: Core framework.
- **React Router**: Navigation.
- **Firebase Auth + Hosting**: Authentication and hosting.
- **Tailwind CSS**: Styling.
- **React Toastify**: Notifications.
- **Swiper.js**: Image slider/carousel.
- **React Simple Typewriter**: Animated text.
- **React Awesome Reveal**: Animations.
- **SweetAlert2**: Confirmation dialogs.

### **Backend**

- **Node.js + Express**: Server framework.
- **MongoDB**: Database (CRUD, `$inc` for likes, `$push`/`$pull` for favorites).
- **Firebase Admin SDK**: Token verification.
- **CORS**: Cross-origin requests.
- **dotenv**: Environment variables.

### **Hosting**

- **Client**: Firebase.
- **Server**: Vercel.

---

## 📂 Project Structure

### **Client Side**

```
src/
├── components/
│   ├── Navbar/
│   ├── Footer/
│   ├── Banner/
│   ├── MyLink/
│   ├── firebase/
│   └── ...
├── pages/
│   ├── Home/
│   ├── ExploreArtworks/
│   ├── AddArtwork/
│   ├── ArtworkDetails/
│   ├── MyGallery/
│   ├── MyFavorites/
│   └── 404/
├── context/
│   └── AuthContext.jsx
│   └── AuthProvider
├── hooks/
│   └── usehooks.jsx
└── App.js
```

### **Server Side**

```
├── index.js
├── .env
├── artifyKey.json
└── package.json
```

---

## 🚀 Setup & Installation

### ⚡ **Client Side**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/iam-yeasin/artify-client.git
   ```

2. **Install dependencies**:

   ```bash
   npm install
   ```

3. **Set up Firebase**:
   - Add your Firebase config in `firebase.config.js`.
   - Enable Google Auth in Firebase Console.

4. **Run the app**:

   ```bash
   npm run dev
   ```

### 📡 **Server Side**

1. **Clone the repository**:

   ```bash
   git clone https://github.com/iam-yeasin/artify-server.git
   ```

2. **Install dependencies**:

   ```bash
   npm install express cors mongodb firebase-admin dotenv
   ```

3. **Set up Firebase Admin**:
   - Download `artifyKey.json` and place it in the root.

4. **Run the server**:

   ```bash
   nodemon index.js
   ```

---

## 🔥 Challenges Implemented

1. **Like System**: MongoDB `$inc` for increasing like counts.
2. **Filter System**: Filter artworks by category.
3. **Theme Toggle**: Dark/light mode with `localStorage`.
4. **Libraries Integrated**: React Simple Typewriter, React Awesome Reveal.

---

## 📜 License

This project is proprietary to [iam-yeasin](https://github.com/iam-yeasin).

---