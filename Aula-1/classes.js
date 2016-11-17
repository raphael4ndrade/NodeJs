class Person{
    constructor(id){
        this.id = id;
    }

    getId(){
        return this.id;
    }
}

/* Não é possível criar variáveis dentro das classes a não ser especificamente dentro de um método,
*  desta forma sempre a forma alternativa é definir a variável fora do escopo da classe. Para a ES7
*  está sendo avaliado a inclusão disso no escopo da classe. */
let registredID = [];

class Student extends Person{
    constructor(name, age){
        super(0);
        this.name = name;
        this.age = age;

        this.grades = [];       
        this.course = "Default course";

        this.generateId();                      //especificar com o 'this'.
    }

    generateId(){
        let id = parseInt(Math.random() * 100); /* parseInt(x) para converter em inteiro! */
        if(id in registredID){
           console.log("Id %d já registrada...", id);
        } else{
            registredID.push(id);
            super.id = id; /* acessando variável no escopo da super-classe*/
        }
    }

    addGrade(grade){
        this.grades.push(grade);
    }
}

class Professor extends Person{
    constructor(name, course){
        super(0);
        this.name = name;
        this.course = course;
    }
}

//Verificando a funcionalidade do 'instanceof'
let studentA = new Student("Ana", 19);
let studentB = new Student("João", 18);
let professor = new Professor("Donald", "Engenharia Civil");

console.log(studentA instanceof Person);    //true
console.log(studentB instanceof Professor); //false
console.log(professor instanceof Student);  //false

//Imprimir no console as IDs registradas na lista registredID
for(let id in registredID)                  
    console.log(registredID[id]);