FROM node:18.2.0-bullseye-slim AS build-env

ENV LC_ALL=C.UTF-8

RUN apt-get update && \
    apt-get install -y \
    curl \
    git
