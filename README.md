# Fulltimeforce - Fullstack

## Description

Application to see the commits history of my repository.
And also interact with my Api made with NestJs

## **Dependencies**

### **Frontend**

- [Angular 12+](https://angular.io/)

### **Backend**

- [Node](https://nodejs.org/en/)
- [NestJS](https://nestjs.com/)

# **SETUP**

## **Frontend (Part)**

### **1.1 navigate to `frontend/` directory.**

```
#  navigate to git-logs-front
$ cd git-logs-front
```

### **2. then install dependencies & run angular serve**

In terminal - command

```
# install dependencies
$ npm install
# serve frontend
& ng serve
```

<br>

## **Backend (Part)**

### **1.1 navigate to `git-logs-back/` directory.**

```
cd git-logs-back/
```

#### **1.2 change environment variables.**

- Go to src/common/environments folder and edit environment variables en each file

```
DATABASE_HOST=your_database_host
DATABASE_PORT=your_database_port
DATABASE_NAME=your_database_name
```

### **2. then install dependencies & run dev**

In terminal - command

```
#  navigate to git-logs-back
$ cd git-logs-back
# install dependencies
$ npm install
# start server
$ npm start `or` $ npm run start:dev
```

# **VIEW IN BROWSER**

Just go to http://localhost:4200
