//Constructor padre
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `El nombre del dueño es ${this.nombre}.
El domicilio es ${this.direccion}.
Número telefonico de contacto es ${this.telefono}.`;
  }
}

//Constructor hijo
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es: ${this._tipo}`;
  }
}

//Constructor nieto
class Mascota extends Animal {
  constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
    super(nombre, direccion, telefono, tipo);
    this._nombreMascota = nombreMascota;
    this._enfermedad = enfermedad;
  }
  get nombreMascota() {
    return this._nombreMascota;
  }
  get enfermedad() {
    return this._enfermedad;
  }
  set nombreMascota(_newNombreMascota) {
    this._nombreMascota = _newNombreMascota;
  }
  set enfermedad(_newEnfermedad) {
    this._enfermedad = _newEnfermedad;
  }
}

//Captura de datos e impresión
document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const nombrePropietario = document.querySelector("#propietario").value;
  const telefono = document.querySelector("#telefono").value;
  const direccion = document.querySelector("#direccion").value;
  const nombreMascota = document.querySelector("#nombreMascota").value;
  const tipoAnimal = document.querySelector("#tipo").value;
  const enfermedad = document.querySelector("#enfermedad").value;

  switch (tipoAnimal) {
    case "perro":
      const perro = new Mascota(
        nombrePropietario,
        direccion,
        telefono,
        tipoAnimal,
        nombreMascota,
        enfermedad
      );
      document.querySelector("#resultado").innerHTML = `<ul>
        <li>${perro.datosPropietario()}</li>
        <li>${perro.tipo}, mientras que el nombre de la mascota es ${
        perro.nombreMascota
      } y la enfermedad es ${perro.enfermedad}.</li>
      </ul>`;
      break;
    case "gato":
      const gato = new Mascota(
        nombrePropietario,
        direccion,
        telefono,
        tipoAnimal,
        nombreMascota,
        enfermedad
      );
      document.querySelector("#resultado").innerHTML = `<ul>
        <li>${gato.datosPropietario()}</li>
        <li>${gato.tipo}, mientras que el nombre de la mascota es ${
        gato.nombreMascota
      } y la enfermedad es ${gato.enfermedad}.</li>
      </ul>`;
      break;
    case "conejo":
      const conejo = new Mascota(
        nombrePropietario,
        direccion,
        telefono,
        tipoAnimal,
        nombreMascota,
        enfermedad
      );
      document.querySelector("#resultado").innerHTML = `<ul>
        <li>${conejo.datosPropietario()}</li>
        <li>${conejo.tipo}, mientras que el nombre de la mascota es ${
        conejo.nombreMascota
      } y la enfermedad es ${conejo.enfermedad}.</li>
      </ul>`;
      break;
  }
});
