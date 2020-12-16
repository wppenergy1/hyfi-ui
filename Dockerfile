FROM node:10-alpine
ENV NODE_ENV="production"
# ENV PUBLIC_URL="https://explorer.plutuscap.com/api/v1/address/"
COPY . /app
WORKDIR /app
RUN apk --no-cache add git
RUN rm yarn.lock
RUN yarn
EXPOSE 3000
CMD ["npm", "run", "serve"]