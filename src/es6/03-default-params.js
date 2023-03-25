function newUser(name, age, country) {
    var name = name || 'Kevin';
    var age = age || 22;
    var country = country || 'MX';
    console.log(name, age, country);
}

newUser();
newUser('Ricardo', 23, 'CO')


function newAdmin(name = 'Kevin', age = 23, country = 'Mx'){
    console.log(name, age, country);
}

newAdmin();