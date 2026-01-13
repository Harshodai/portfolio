FROM node:20-alpine

WORKDIR /app

COPY package.json ./

# Install dependencies
RUN npm install

COPY . .

# Expose port
EXPOSE 5173

# Start the application
CMD ["npm", "run", "dev", "--", "--host"]
