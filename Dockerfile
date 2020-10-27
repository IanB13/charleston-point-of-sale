# build environment
FROM node:latest as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci 
RUN npm install react-scripts@latest -g
COPY . ./
RUN npm run build
RUN npm install -g serve
CMD ["serve", "-s", "build"]