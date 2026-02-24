const STORAGE_KEY = "safehaven_auth";
const USERS_KEY = "safehaven_users";

const MOCK_USERS = [
  { id: 1, username: "victim_demo", role: "victim", name: "Anonymous Victim" },
  { id: 2, username: "user_demo", role: "user", name: "Concerned Citizen" },
  { id: 3, username: "police_demo", role: "police", name: "Officer A." },
  { id: 4, username: "admin_demo", role: "admin", name: "System Admin" }
];

function createFakeJwt(payload) {
  const header = btoa(JSON.stringify({ alg: "HS256", typ: "JWT" }));
  const body = btoa(JSON.stringify(payload));
  const signature = btoa("safehaven-demo");
  return `${header}.${body}.${signature}`;
}

function getRegisteredUsers() {
  try {
    const raw = window.localStorage.getItem(USERS_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed;
  } catch (e) {
    return [];
  }
}

function saveRegisteredUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function getStoredAuth() {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw);
  } catch (e) {
    return null;
  }
}

export async function loginRequest({ username, password, role }) {
  await new Promise((resolve) => setTimeout(resolve, 400));

  const safeUsername = String(username || "").toLowerCase();

  let match =
    MOCK_USERS.find(
      (u) => u.username.toLowerCase() === safeUsername && u.role === role
    ) || null;

  if (!match) {
    const users = getRegisteredUsers();
    const regUser = users.find(
      (u) => u.username.toLowerCase() === safeUsername && u.role === role
    );

    if (regUser && password && regUser.password === password) {
      match = {
        id: regUser.id,
        username: regUser.username,
        role: regUser.role,
        name: regUser.name
      };
    }
  }

  if (!match || !password) {
    throw new Error("Invalid credentials for selected role.");
  }

  const token = createFakeJwt({
    sub: match.id,
    username: match.username,
    role: match.role,
    iat: Date.now()
  });

  const auth = { user: match, token };
  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
  return auth;
}

export function registerUser({ username, password, role, name }) {
  const safeUsername = String(username || "").trim();
  const safeName = String(name || "").trim() || safeUsername;
  const safeRole = role || "user";

  if (!safeUsername || !password) {
    throw new Error("Username and password are required.");
  }

  const users = getRegisteredUsers();

  const exists = users.some(
    (u) =>
      u.username.toLowerCase() === safeUsername.toLowerCase() &&
      u.role === safeRole
  );

  if (exists) {
    throw new Error("An account with this username and role already exists.");
  }

  const newUser = {
    id: Date.now(),
    username: safeUsername,
    password,
    role: safeRole,
    name: safeName
  };

  const updated = [...users, newUser];
  saveRegisteredUsers(updated);

  return {
    id: newUser.id,
    username: newUser.username,
    role: newUser.role,
    name: newUser.name
  };
}

export function logoutRequest() {
  try {
    window.localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    // ignore
  }
}

