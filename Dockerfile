# Stage 0 - Build Front End Asset
FROM node:13.12.0-alpine as build

WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build 

# stage 1 - Serve Front End Assest
FROM fholzer/nginx-brotli:v1.12.2
#fholzer/nginx-brotli:latest


WORKDIR /etc/nginx
ADD nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/build /usr/share/nginx/html 

EXPOSE 443
CMD ["nginx", "-g", "daemon off;"]
 
# docker build -t paulruigrok/react_website:latest .
## the dot in the end specifies to find to dockerfile in the current directory

# port 8080 free? not sure...
# docker run -p 8080:443 paulruigrok/react_website:latest
