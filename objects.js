//1. Using dot and bracket notation modify the existing object values to replace the information with your own
//2. Iterate over the object to console.log the property or key names.

var me = {
	'name': 'Jake Overall',
	'age': 29,
	'hair color': 'brown'
};


function modify(obj) {
	me.name = 'Steven'
	me.age = 26
	me['hair color'] = 'brown'
	console.log(me)
}
modify(me)


