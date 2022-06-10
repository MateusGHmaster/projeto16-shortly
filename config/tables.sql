CREATE TABLE "users" (
    "id" SERIAL PRIMARY key,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL UNIQUE,
    "password" TEXT NOT NULL
);

CREATE TABLE "sessions" (
    "id" SERIAL PRIMARY KEY,
    "token" TEXT NOT NULL UNIQUE,
    "userId" INTEGER NOT NULL REFERENCES users(id)
);

CREATE TABLE "urls" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES users(id),
    "oldURL" TEXT NOT NULL,
    "newURL" TEXT UNIQUE NOT NULL,
    "createdAt" timestamp with time zone DEFAULT NOW() NOT NULL
);


