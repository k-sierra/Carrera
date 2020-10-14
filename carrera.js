import Corredor from "./corredor.js"
export default class Carrera{
    constructor(distancia){
    this.distancia=distancia;
    this.dist1=0;
    this.dist2=0;
    this.cor1=new Corredor("Tortuga");
    this.cor2=new Corredor("Liebre");
}
avance(){
    let k=1+Math.floor(Math.random()*10);
    let s=1+Math.floor(Math.random()*100);
    if (k<=5){
      this.dist1+=3;
    } else if (k>=5&&k<=8){
      this.dist1+=1;
    } else{
      this.dist1-=6;
    }
    if (s<=20){
      this.dist2+=0;
    } else if (s>=21&&s<=40){
      this.dist2+=9;
    } else if (s>=41&&s<=50){
      this.dist2-=12;
    } else if (s>=51&&s<=85){
      this.dist2+=1;
    } else{
      this.dist2-=2;
    }
}
comienzo(){
    let gan=0;
    while (gan==0){
        this.avance();
        if (this.dist1<this.distancia&&this.dist2<this.distancia){
        console.log(`${this.cor1.nombre}, posicion: ${this.dist1}`);
        console.log(`${this.cor2.nombre}, posicion: ${this.dist2}`);
        console.log('- - - - - - - - - - - - - - -');
        } else if (this.dist1>=this.distancia){
            gan=1;
        } else if (this.dist2>=this.distancia){
            gan=2;
        } else{
          gan=3;
        }
    }
    if (gan==1){
        console.log(`${this.cor1.nombre} victoriosa`);
    } else if(gan==2){
        console.log(`${this.cor2.nombre} victoriosa`);
    } else{
        console.log("Empate, ambas victoriosas");
    }
  }
}