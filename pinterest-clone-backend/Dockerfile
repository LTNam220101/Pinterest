FROM node:18-alpine
WORKDIR /user/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN yarn install
# If you are building your code for production
# RUN yarn ci --only=production
COPY . .
RUN yarn run build

EXPOSE 3000
CMD [ "node", "dist/main" ]
