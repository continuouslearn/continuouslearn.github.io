FROM ubuntu:20.04 

ARG DEBIAN_FRONTEND=noninteractive

RUN apt-get update && apt-get install -y golang-go

WORKDIR /app

COPY app.go .

RUN CGO_ENABLED=0 go build -o  /mygo

EXPOSE 8888

CMD [ "/mygo" ]

