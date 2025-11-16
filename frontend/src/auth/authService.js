import { UserManager, WebStorageStateStore } from "oidc-client-ts";
import { oidcConfig } from "./authConfig";

const userManager = new UserManager({
  ...oidcConfig,
  userStore: new WebStorageStateStore({ store: window.localStorage }),
});

// Redirect to Ping login
export function login() {
  return userManager.signinRedirect();
}

// Ping logout redirect
export function logout() {
  return userManager.signoutRedirect();
}

// Handle callback from Ping
export async function handleCallback() {
  try {
    const user = await userManager.signinRedirectCallback();
    return user;
  } catch (err) {
    console.error("Callback failed:", err);
    return null;
  }
}

// Retrieve user from storage
export function getUser() {
  return userManager.getUser();
}
