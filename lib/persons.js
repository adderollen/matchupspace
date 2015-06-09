Persons = new Mongo.Collection('persons')

if(Meteor.isServer) {
	Meteor.publish('persons', function () {
		return Persons.find();
	})
}