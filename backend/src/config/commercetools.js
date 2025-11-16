import fetch from "node-fetch";
import { createClient } from "@commercetools/sdk-client";
import { createAuthMiddlewareForClientCredentialsFlow } from "@commercetools/sdk-middleware-auth";
import { createHttpMiddleware } from "@commercetools/sdk-middleware-http";
import { createLoggerMiddleware } from "@commercetools/sdk-middleware-logger";
import { config } from "./env.js";

export const ctClient = createClient({
  middlewares: [
    createAuthMiddlewareForClientCredentialsFlow({
      host: config.ct.authUrl,
      projectKey: config.ct.projectKey,
      credentials: {
        clientId: config.ct.clientId,
        clientSecret: config.ct.clientSecret,
      },
      scopes: [config.ct.scopes],
      fetch,
    }),
    createHttpMiddleware({
      host: config.ct.apiUrl,
      fetch,
    }),
    createLoggerMiddleware(),
  ],
});
