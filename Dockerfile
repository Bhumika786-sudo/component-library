# Build stage
FROM node:18-alpine AS build

# Set working directory
WORKDIR /bhumika_verma_ui_garden_build_checks

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy all project files
COPY . .

# Build the production app (skip tests in Docker)
RUN npm run build

# Production stage
FROM nginx:alpine

# Copy built files to nginx
COPY --from=build /bhumika_verma_ui_garden_build_checks/build /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8018
EXPOSE 8018

# Start nginx
CMD ["nginx", "-g", "daemon off;"]