export const oidcConfig = {
  authority: import.meta.env.VITE_PING_AUTHORITY,
  client_id: import.meta.env.VITE_PING_CLIENT_ID,
  redirect_uri: import.meta.env.VITE_PING_REDIRECT_URI,
  response_type: "code",
  scope: "openid profile email",
  post_logout_redirect_uri: import.meta.env.VITE_PING_LOGOUT_REDIRECT_URI,
};
