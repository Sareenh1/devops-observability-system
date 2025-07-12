# Use official Node.js 14 image
FROM node:14

# Create app directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy app source
COPY . .

# Expose the app port
EXPOSE 3000

# Start the application
CMD ["node", "server.js"]
