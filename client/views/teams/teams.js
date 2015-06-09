Template.teams.onCreated(function() {
	this.subscribe('teams')
})

Template.teams.helpers({
	teams: function() {
		if(Teams.find().fetch().length == 0) {
			return false
		} else {
			return Teams.find();
		}
		
	}
})

Template.teamsignup.events({
	'submit form': function(evt, instance) {
		event.preventDefault()
		var name = evt.target.name.value
		console.log(name)
	}
})