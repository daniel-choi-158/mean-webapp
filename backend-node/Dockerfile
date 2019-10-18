#base image
FROM node:latest

# Create app directory
WORKDIR /app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json /app

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

# Bundle app source
COPY . /app

#Your app binds to port 8081 so you'll use the EXPOSE instruction to have it mapped by the docker daemon:
EXPOSE 3000

CMD npm run start:server