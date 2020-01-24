const users = [ 
    {
        "id": 1,
        "first_name": "Raul",
        "last_name": "Wynter",
        "email": "rwynter0@google.com"
    },
    {
        "id": 2,
        "first_name": "Demetri",
        "last_name": "Dakin",
        "email": "ddakin1@google.com"
    },
    {
        "id": 3,
        "first_name": "Lira",
        "last_name": "Collishaw",
        "email": "lcollishaw2@google.com"
    },
    {
        "id": 4,
        "first_name": "Jennette",
        "last_name": "O'Brollachain",
        "email": "jobrollachain3@msn.com"
    },
    {
        "id": 5,
        "first_name": "Annaliese",
        "last_name": "Marishenko",
        "email": "amarishenko4@msn.com"
    },
    {
        "id": 6,
        "first_name": "Delano",
        "last_name": "Millins",
        "email": "dmillins5@yahoo.com"
    },
    {
        "id": 7,
        "first_name": "Allister",
        "last_name": "Rizzetti",
        "email": "arizzetti6@yahoo.com"
    },
    {
        "id": 8,
        "first_name": "Yul",
        "last_name": "Slite",
        "email": "yslite7@yahoo.com"
    },
    {
        "id": 9,
        "first_name": "Stu",
        "last_name": "Liveing",
        "email": "sliveing8@devmountain.com"
    },
    {
        "id": 10,
        "first_name": "Carla",
        "last_name": "Gisbye",
        "email": "cgisbye9@devmountain.com"
    }
]

module.exports = { // exports a single object with the properties getAll and getOne that happen to be functions (remember that functions in an object are called methods). These methods do stuff to our data and send a response to the frontend using the res parameter.
    getAll: function(req, res) {
        //have this function return all users 

        // res.sendStatus(200) // use to send only a status back to the front without sending any data
        // res.status(200).send(users) // use to send a status code along with data, but be aware that if the data that is being sent is not an object that it will be converted to HTML. Again, this can cause problems if the other end requesting is expecting a JSON object.
        res.status(200).json(users) // use to send a status code along with data that will ensure to be a json object 
    },
    getOne: function(req, res) {
        
        // return one user when given a user's id
        let result = users.filter(user => user.id == req.params.userId);
        if (result[0]) {
            res.status(200).json(result[0]);
        } else {
            res.sendStatus(400);
        }
    }
}
