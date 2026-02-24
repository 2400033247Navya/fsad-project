## SafeHaven – Domestic Violence Support & Gender Equality Platform

SafeHaven is a responsive React.js web application designed to help combat domestic violence and promote gender equality.  
This project demonstrates **role-based access**, **protected routes**, and **mock JWT authentication** implemented entirely on the front end.

### Features

- **Role-based authentication (front end demo)**
  - Victim / Survivor
  - Community User / Ally
  - Police
  - Administrator
- **Secure-ish demo auth**
  - Mock JWT token stored in `localStorage`
  - Protected routes using React Router and an `AuthContext`
- **Victim dashboard**
  - Emergency help card with quick-call button
  - Legal rights information
  - Support services and hotlines
  - Demo “secure chat” (client-side only)
  - Health and safety risk awareness section
- **Police dashboard**
  - Case overview statistics
  - Case list with priority, status, aliases, and assignment
  - Ability to update case status (Open / Under Investigation / Closed)
- **Administration dashboard**
  - User overview statistics (victims, police, admins, etc.)
  - User list and simple local user creation
  - Reports table stub for incidents/system reports
- **Community user dashboard**
  - Awareness & education cards
  - Anonymous concern submission stored locally in the browser
- **Responsive UI & basic accessibility**
  - Works on desktop, tablet, and mobile
  - Semantic headings, ARIA labels for key sections

### Project structure (key files)

- `index.html` – Vite entry HTML
- `vite.config.mjs` – Vite configuration
- `src/main.jsx` – React entry point
- `src/App.jsx` – Application shell and routing
- `src/context/AuthContext.jsx` – Auth state, login/logout, current user
- `src/services/authService.js` – Mock JWT token creation and localStorage
- `src/routes/ProtectedRoute.jsx` – Route guard by auth + role
- `src/pages/LoginPage.jsx` – Login form with role selection
- `src/pages/VictimDashboard.jsx` – Victim features
- `src/pages/UserDashboard.jsx` – Community user / ally features
- `src/pages/PoliceDashboard.jsx` – Police case management
- `src/pages/AdminDashboard.jsx` – Admin user & report management
- `src/styles/global.css` – Global and layout styling

### How to run the project

1. **Install dependencies**

   ```bash
   cd "c:\Users\User\OneDrive\Desktop\FSAD PROJECT"
   npm install
   ```

2. **Start the development server**

   ```bash
   npm run dev
   ```

3. **Open in your browser**

   Vite will show you a local URL (usually `http://localhost:5173`). Open it in your browser to use SafeHaven.

### Demo login accounts

On the login page you can use the following usernames with **any non-empty password** and the corresponding role:

- Victim: `victim_demo`
- User / Ally: `user_demo`
- Police: `police_demo`
- Admin: `admin_demo`

### Security notes (important)

- This project is **front-end only**. All “security” is for demonstration:
  - The JWT is **fake** and generated fully in the browser.
  - There is **no real backend, database, or encryption** configured.
  - Data is stored in `localStorage` or in-memory only.
- **Do not** use this code as-is for real-world victims or production systems.
- A real deployment would require:
  - A secure backend using HTTPS, strong authentication, and access control.
  - Proper database storage with encryption at rest.
  - Audit logs and monitoring.
  - Threat modelling for abuser access, device compromise, and metadata protection.

### Next steps / possible extensions

- Add a real backend (Node/Express, Django, etc.) with a database.
- Integrate real-time secure chat using end-to-end encryption and WebSockets.
- Implement SMS/WhatsApp integrations for emergency alerts.
- Connect to verified NGO / government APIs for up-to-date legal and support resources.

