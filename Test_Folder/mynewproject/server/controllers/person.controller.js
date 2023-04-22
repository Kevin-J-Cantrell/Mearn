
const Person = require('../model/person.model');    /* this is new */
module.exports.index = (req, res) => {
    res.json({
        message: "Hello World"
    });
}
          /* The method below is new */
module.exports.createPerson = (req, res) => {
    // Mongoose's "create" method is run using our Person model to add a new person to our db's person collection.
    // req.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client
    console.log(req.body)
    Person.create(req.body) //This will use whatever the body of the client's req sends over
        .then(person => res.json(person))
        .catch(err => res.json(err));
}
module.exports.getAllPeople = (req, res) => {
    Person.find({})
        .then(persons => {
            console.log(persons); //console logs are optional, but they are highly recommended for troubleshooting!
            res.json(persons);
        })
        .catch(err => {
            console.log(err)
            res.json(err)
        })
}