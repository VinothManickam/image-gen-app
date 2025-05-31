
---

## 📄 `image-gen-client/README.md`

````markdown
# AI Image Generator Client

This is the frontend of the AI Image Generator application, built using **Next.js** and **Auth0** for authentication. It allows users to log in, input text prompts, and view AI-generated images powered by OpenAI’s DALL·E API via the backend server.

---

## 🚀 Features

- ✅ Next.js App Router structure
- 🔐 Auth0 Authentication
- 🖼️ Generate images with OpenAI DALL·E
- 📡 Connects to Express.js backend via API
- ☁️ Deployed on [Render](https://image-gen-client.onrender.com)

---

## 🛠️ Installation (Local Development)

### Prerequisites

- Node.js v20 or higher
- Valid Auth0 credentials
- Running backend API server (`image-gen-server`)

### 1. Clone the Repository

```bash
git clone git@github.com:VinothManickam/ai-image-generator-client.git
cd ai-image-generator-client
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
AUTH0_CLIENT_ID=<your-auth0-client-id>
AUTH0_SECRET=<your-auth0-client-secret>
AUTH0_ISSUER=https://<your-tenant>.us.auth0.com
NEXTAUTH_URL=http://localhost:3000
NEXT_PUBLIC_BACKEND_URL=http://localhost:5000
```

> Replace `<your-auth0-client-id>`, `<your-auth0-client-secret>`, and `<your-tenant>` accordingly.

---

### 4. Run the Development Server

```bash
npm run dev
```

App will be available at [http://localhost:3000](http://localhost:3000)

---

## ✅ Usage

1. Go to `http://localhost:3000`
2. Log in via Auth0
3. Enter a text prompt (e.g. "sunset over ocean")
4. Click "Generate Image"
5. View the generated AI image
6. Log out when done

---

## 🧪 Testing

```bash
npm test
```

> Add your own tests using Jest or Playwright (optional)

---

## 🌐 Deployment

### Hosted on Render

* **Live URL**: [https://image-gen-client.onrender.com](https://image-gen-client.onrender.com)

### Render Deployment Settings

* **Environment Variables**:

  ```env
  AUTH0_CLIENT_ID=<your-auth0-client-id>
  AUTH0_SECRET=<your-auth0-client-secret>
  AUTH0_ISSUER=https://<your-tenant>.us.auth0.com
  NEXTAUTH_URL=https://image-gen-client.onrender.com
  NEXT_PUBLIC_BACKEND_URL=https://image-gen-server-gpwb.onrender.com
  ```

* **Build Command**:

  ```bash
  npm install && npm run build
  ```

* **Start Command**:

  ```bash
  npm start
  ```

---

## ⚙️ Auth0 Configuration

In the Auth0 Dashboard:

* **Allowed Callback URLs**:

  ```
  https://image-gen-client.onrender.com/api/auth/callback/auth0
  ```

* **Allowed Logout URLs**:

  ```
  https://image-gen-client.onrender.com
  ```

* **Allowed Web Origins**:

  ```
  https://image-gen-client.onrender.com
  ```

---

## 📁 Project Structure

```
ai-image-generator-client/
├── app/                 # App router pages
├── components/          # Reusable UI components
├── styles/              # CSS Modules / Tailwind
├── public/              # Static assets
├── .env.local           # Local environment variables
├── next.config.js       # Next.js config
└── package.json
```

---

## 📌 Notes

* Ensure the backend server is running and accessible at the URL in `NEXT_PUBLIC_BACKEND_URL`.
* Make sure your Auth0 settings match the deployed and local callback URLs.
* The frontend uses `fetch` to call the `/api/generate` endpoint exposed by the backend.

---

## 🧠 Technologies Used

* **Next.js**
* **Auth0**
* **Tailwind CSS** (optional)
* **OpenAI API (DALL·E)**
* **Render (Deployment)**

---

## 🙋‍♂️ Author

**Vinoth Manickam**

* GitHub: [@VinothManickam](https://github.com/VinothManickam)
* Live Demo: [https://image-gen-client.onrender.com](https://image-gen-client.onrender.com)

---

```

---


```
