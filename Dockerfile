#  Build Stage 
FROM node:20-alpine AS build

# Required working directory name
WORKDIR /verma_bhumika_ui_garden

# Copy and install dependencies
COPY package*.json ./
RUN npm ci

# Copy the rest of the project and build production files
COPY . .
RUN npm run build

# Production Stage 
FROM node:20-alpine AS run

# Same working directory
WORKDIR /verma_bhumika_ui_garden

# Install 'serve' to host the CRA build
RUN npm install -g serve

# Copy build output from previous stage
COPY --from=build /verma_bhumika_ui_garden/build ./build

# Expose port 8083 (as required)
EXPOSE 8083

# Start the production server
CMD ["serve", "-s", "build", "-l", "8083"]
