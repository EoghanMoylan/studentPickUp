# Student Pick Up Webapp (Mini Proj)


This is repo contains both the BE and FE projects for the Student Pick Up mini project. 
Additional setup info (such as docker commands) can be found below or in the /scripts&other dir, you'll also find a postman collection here if you want to test some of the calls yourself.
You can also find some diagrams in the /Docs dir. If you want a full list of students, classrooms and car regs you can find them under their respective JSON files in the BE dir. 

I've also included some car regs below to get you started without needing to go searching for them. 

# How to Use

(by hitting the "_Refresh Data_" button in the toolbar you will update all the data in the DB, resetting everything to their default values, this is just for you to reset and test as you need. It is not intended to be production viable).

Start by going here : 
Some car regs to get you started :
```
    {
        "carReg" : "11-C-22",
        "studentID" : "1"
    },
    {
        "carReg" : "12231-C-22",
        "studentID" : "2"
    },
    {
        "carReg" : "11-D-12",
        "studentID" : "3"
    },
    {
        "carReg" : "14-D-12",
        "studentID" : "3"
    },
    {
        "carReg" : "711-G-92",
        "studentID" : "20"
    },
    {
        "carReg" : "144-D-08",
        "studentID" : "21"
    },
    {
        "carReg" : "881-C-22",
        "studentID" : "22"
    },
    {
        "carReg" : "1221-C-15",
        "studentID" : "23"
    },
    {
        "carReg" : "111-KL-14",
        "studentID" : "24"
    }
```

## To Install BE

This was built using a docker container running postgres, but it is possible to substitute this with another DB or a DB not running within docker.

To install and run the docker instance of postgres that is compatible with the `.env` you have been sent, run the following commands : 
`docker pull postrges`

Followed by

`docker run --name postgresDB -p 5432:5432 -e POSTGRES_USER=postgresUser -e POSTGRES_PASSWORD=postgresPW -e POSTGRES_DB=postgresDB -d postgres`

`npm i`

You may need to run the follwing also.
`npm i -g pg`

Include a `.env` to include in your /BE directory.

Install Sequelize-cli 

`npm i -g sequelize-cli`

and now run the migrations

`sequelize db:migrate`

Now start the server 

`node index.js`

## To Install FE

`npm i`

To start : 

`ng serve` 

## Testing
You will find some unit tests under `BE/test/all.test.js`
(I only created a few, in a production environment these would be much more extensive)

# Links

(this is all hosted on AWS behind Nginx)

Link to demo version : http://ec2-54-185-106-5.us-west-2.compute.amazonaws.com/
