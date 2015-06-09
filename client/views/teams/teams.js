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
		evt.preventDefault()
		var name = evt.target.name.value
		var email = evt.target.email.value;
		var need = [];
		var dev = $('#dev').prop('checked')
		var design = $('#designer').prop('checked')
		var visionary = $('#visionary').prop('checked')
		if(dev) {need.push('Developer')}
		if(design) {need.push('Designer')}
		if(visionary) {need.push('Visionary')}
		var needs = evt.target.needs.value;
		if(need.length == 0) {
			confirm("You forgot to choose what you need! Pick either Developer, Designer, Visionary, or multiple of them!")
		} else {
			Teams.insert({
				name: name,
				email: email,
				need: need,
				specialNeeds: needs
			})
		}
		Router.go('/persons')
	}
})