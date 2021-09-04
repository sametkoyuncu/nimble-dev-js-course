# get an operating system
# install node runtime
FROM node:14.4.0-alpine3.11
# cd wekkcopy files to app folder
WORKDIR /app
# copy package files 
COPY package.json package-lock.json ./
# install npn dependencies
RUN npm install
# copy files docker 
COPY . .
# 
EXPOSE 3000
# run application
CMD ["npm", "start"]