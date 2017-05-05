function Person(nombre, edad, hobbies){
  this.nombre = nombre;
  this.edad = edad;
  this.hobbies = hobbies;
}
var arrPerson= [
                new Person("Fernanda Zamora", "30", ["Escuchar música", "Hacer fotografías", "Pensar en el existencialismo"]), 
                new Person("Valentina Miranda", "26", ["Dibujar","ver anime y series", "Cocinar"]), 
                new Person("Cindialy Berrios", "23", ["Trekking","Escuchar música", "Deporte"]),
                new Person("Esperanza Lucero", "25", ["Fotografía", "Leer", "Dormir"]),
                new Person("Natalia Villalobos","30", ["Tocar batería"]),
                new Person("Diana Villasmil","29", ["Ver series Coreanas", "Cantar", "Escuchar música"])
                ];


var lista = document.getElementById('lista');

arrPerson.forEach(function(person) {
  var str = '<span><strong>Nombre: </strong>' + person.nombre + '<br/><strong>Edad: </strong>' + person.edad + 
            '<br/><strong>Hobbies: </strong><br/><ul style="display: inline-block;">';

  person.hobbies.forEach(function(hobby){
    str += '<li>' + hobby + '</li>';
  });

  str += '</ul><br/></span>';

  lista.innerHTML += str;
})






 
 
