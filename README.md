# Chat App: a real time chat application
![](/ReadMe_images/logo.jpg)

This repo is for displaying sensor data. It uses python backend with FastAPI framework + React frontend.

The app gets sensor data from the backend and displays it.

# Tech Stack 📚

**Client:** JavaScript, ReactJS

**Server:** Python, FastAPI

**Other:** Docker


# Configuring the repo for the first time and running the application

## Docker

To be able to run this project you will need Docker installed on your computer. Docker installation instructions: `https://www.docker.com/products/docker-desktop/`

The instructions below will allow you to run this project on your local computer using **docker-compose**

1. Run the following command in the terminal to download a copy of the repo to your local machine

```bash
  git clone https://github.com/cmuranda/sensors-react.git
```

2. After the project repo is downloaded navigate into the project directory

```bash
  cd sensors-react
```

4. Type the command below to create and start the container in detached mode and build the image

```bash
  docker-compose up -d --build
```

At this point the container with the app should be running in your local computer

Services are running on **Port 3000** (front-end React), **Port 4200** (back-end REST). Please make sure you have no other app running on these ports


5. Open a browser to the local host **http://localhost:3000/** and start enjoying the app. Please note that for numeric data, there is a zooming and panning capability that can be achieved by mouse scrolling and holding and move mouse sideways respectively.

# Screenshots

The following images are the screenshots of the displays.

![](/ReadMe_images/original_numeric.png)

![](/ReadMe_images/text.png)

