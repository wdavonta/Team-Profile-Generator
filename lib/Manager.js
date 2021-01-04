class Manager{
    constructor(officenumber) {
        this.officenumber = officenumber;
    }

    getOfficeNumber() {
        return this.officenumber;
    }

    getRole(){
        return "Employee"
    }
}







module.exports = Manager;