class Team {
    constructor() {
    }
}
class Developer extends Team {
    constructor(name, surname) {
        super();
        this.name = name;
        this.surname = surname;
    }
    push() {
    }
    upSkill() {
    }
    commit() {
    }
}
class FrontEndDeveloper extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "FrontEnd";
    }
    createSite() {
    }
    createКequest() {
    }
    writeBack() {
    }
}
class BackEndDeveloper extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "BackEnd";
    }
    createBD() {
    }
    createAPI() {
    }
    writeFront() {
    }
}
class DevOps extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "Devops";
    }
    release() {
    }
    deploy() {
    }
}
class PM extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "PM";
    }
    checkTask() {
    }
    createTask() {
    }
    meetup() {
    }
}
class QA extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "QA";
    }
    tests() {
    }
    writeTest() {
    }
    bugreport() {
    }
}
class BusinessAnalytic extends Developer {
    constructor(name, surname) {
        super(name, surname);
        this.job = "Business Analyst";
    }
    analytic() {
    }
    meetup() {
    }
    createTask() {
    }
}
class Task {
    constructor(title, text, status, created, executor) {
        this.title = title;
        this.text = text;
        this.status = status;
        this.created = created;
        this.executor = executor;
    }
    setStatus(worker, newStatus) {
        if (worker == this.executor) {
            this.status = newStatus;
        }
        else {
            console.log("No access");
        }
    }
    getStatus() {
        return this.status;
    }
}
const employee1 = new PM("Vika", "Turchaninova");
const employee2 = new BusinessAnalytic("Ann", "Pit");
const task1 = new Task("meetup", "create an appointment", "In progress", employee1, employee2);
console.log(task1);
task1.setStatus(employee1, "pm");
console.log(task1.getStatus());
//# sourceMappingURL=task.js.map