# Dockerfile

# Estágio 1: Base com Node.js e LaTeX
FROM node:18-slim

# Instala o texlive
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
    texlive-latex-base \
    texlive-latex-recommended \
    texlive-fonts-recommended \
    texlive-lang-portuguese \
    && apt-get clean && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./

RUN npm install --omit=dev # --omit=dev em vez de --production é a prática moderna

COPY ./dist ./dist

EXPOSE 3000

# Alterado para iniciar o novo arquivo de servidor
CMD [ "node", "dist/server.js" ]