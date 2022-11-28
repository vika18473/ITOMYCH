class Team{
    job?:string
    constructor(){

    }
}

class Developer extends Team{
    name: string
    surname: string
    constructor(name:string, surname:string){
        super()
        this.name = name
        this.surname = surname
    }
    push(){

    }
    upSkill(){

    }
    
}

class FrontEndDeveloper extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "FrontEnd"
    }

    createSite() {

    }

    writeBack(){

    }
}

class BackEndDeveloper extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "BackEnd"
  
    }

    createBD() {

    }

    createAPI() {

    }

}

class DevOps extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname)
        this.job = "Devops"
    }

    release() {

    }

    deploy() {

    }
}

class PM extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "PM";
    }

    checkTask() {

    }

    meetup() {

    }
}

class QA extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "QA";
    }

    writeTest() {

    }

    bugreport() {

    }
}

class BusinessAnalytic extends Developer {

    constructor(name: string, surname: string) {
        super(name, surname);
        this.job = "Business Analyst";
    }

    analytic() {

    }

    meetup() {

    }
}

class Task{
    title:string
    text:string
    status:string
    created:object
    executor:object
    constructor(title:string, text:string, status:string, created:object, executor:object){
        this.title = title
        this.text = text
        this.status = status
        this.created = created
        this.executor = executor
    }
    setStatus(worker:object,newStatus:string){
        if(worker == this.executor){
            this.status = newStatus
        }else{
            console.log("No access")
        }
    }
    getStatus():string{
        return this.status
    }
}


const employee1 = new PM("Vika","Turchaninova")
const employee2 = new BusinessAnalytic("Ann","Pit")

const task1 = new Task("meetup","create an appointment" , "In progress" , employee1 , employee2)

console.log(task1)

task1.setStatus(employee1, "pm")

console.log(task1.getStatus())