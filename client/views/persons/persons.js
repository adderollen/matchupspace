Template.persons.onCreated(function() {
	this.subscribe('persons')

})

Template.persons.helpers({
	persons: function() {
		return Persons.find()
	}
})

Template.signup.onRendered(function() {
	$('.slider').noUiSlider({
		start: 0,
		connect: "lower",
		range: {
			'min': 0,
			'max': 100
		},
		format: wNumb({
			decimals: 0
		})
	});
	$('#devslider').Link('lower').to($('.devvalue'))
	$('#designslider').Link('lower').to($('.designvalue'))
	$('#visionaryslider').Link('lower').to($('.visionaryvalue'))
})

Template.signup.events({
	'submit form': function(evt, instance) {
		evt.preventDefault();
		var name = evt.target.name.value;
		var email = evt.target.email.value;
		var devskill = parseInt(evt.target.devskill.value);
		var designskill = parseInt(evt.target.designskill.value);
		var visionaryskill = parseInt(evt.target.visionaryskill.value);
		var skills = evt.target.skills.value;
		Persons.insert({
			name: name,
			email: email,
			devskill: devskill,
			designskill: designskill,
			visionaryskill: visionaryskill,
			skills: skills
		})

		Router.go('/teams')
	}
})