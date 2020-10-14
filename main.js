import Carrera from "./carrera.js"
class Main{
  constructor(){
  this.carrera=new Carrera(90);
}
  comienzoCarrera(){
    this.carrera.comienzo();
  }
}
let app=new Main();
app.comienzoCarrera();