# Base stage with common dependencies
FROM node:lts-alpine AS base
WORKDIR /usr/src/app
COPY package*.json ./


# Development stage
FROM base AS development
# Install dev dependencies
RUN npm ci
COPY . .
EXPOSE 4000
CMD ["npm", "run", "dev"]

# Build stage for production
FROM base AS build
COPY . .
RUN npm run build

# Production stage
FROM base AS production
# Copy only built files and production dependencies
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 4000
CMD ["node", "dist/server.js"]