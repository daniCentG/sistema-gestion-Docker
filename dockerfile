# Imagen de Node.js
FROM node:22.12.0

#Directorio de trabajo
WORKDIR /app

#Archivos necesarios para la Aplicación
COPY package*.json ./

# Instalar dependencias de compilación
RUN apt-get update && apt-get install -y \
  build-essential \
  python3 \
  && rm -rf /var/lib/apt/lists/*

#Instalar dependecias
RUN npm install

#Copiar resto de los archivos de la Aplicación
COPY . .

#Variables de entorno
ENV NODE_ENV=development

#Exponer el puerto de escucha
EXPOSE 3000

#Comando para inicar la aplicación
CMD ["node", "server.js"]
