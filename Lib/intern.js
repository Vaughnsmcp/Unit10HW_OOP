
'use strict';

const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, schoolName) {
        super(name, id, email)
        this.shcoolName = schoolName;
    }
    getRole() { return 'Intern' }

    getSchoolName() {return this.schoolName} 

    }



module.exports = Intern;