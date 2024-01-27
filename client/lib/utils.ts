// serverURI
export const serverURI =
  process.env.NODE_ENV === "production"
    ? process.env.NEXT_PUBLIC_SERVER_URI_PROD
    : process.env.NEXT_PUBLIC_SERVER_URI;

// MONGO_URI
export const mongoURI =
  process.env.NODE_ENV === "production"
    ? process.env.MONGO_URI_PROD
    : process.env.MONGO_URI;
