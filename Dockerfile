# Build stage 
FROM node:20-alpine AS build
WORKDIR /verma_bhumika_ui_garden

# Copy manifest files and install deps (tolerant of peer-deps)
COPY package.json package-lock.json ./
RUN npm ci --legacy-peer-deps --no-audit --no-fund \
  || npm install --legacy-peer-deps --no-audit --no-fund

# Copy source and build CRA
COPY . .
RUN npm run build

FROM node:20-alpine AS run
WORKDIR /verma_bhumika_ui_garden
RUN npm i -g serve

# Copy CRA build output
COPY --from=build /verma_bhumika_ui_garden/build ./build

EXPOSE 8083
CMD ["serve", "-s", "build", "-l", "8083"]
