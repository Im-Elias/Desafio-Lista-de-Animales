//Constructor padre
class Propietario {
  constructor(nombre, direccion, telefono) {
    this.nombre = nombre;
    this.direccion = direccion;
    this.telefono = telefono;
  }
  datosPropietario() {
    return `<ul>
                <li>El nombre del dueño es ${this.nombre}.</li>
                <li>El domicilio es ${this.direccion}.</li>
                <li>Número telefonico de contacto es ${this.telefono}.</li>        
                <li>El tipo de animal es un ${this._tipo}.</li>
                <li>El nombre de la mascota es ${this._nombreMascota}.</li>
                <li>Enfermedad: ${this._enfermedad}.</li>
            </ul>`;
  }
}

//Constructor hijo
class Animal extends Propietario {
  constructor(nombre, direccion, telefono, tipo) {
    super(nombre, direccion, telefono);
    this._tipo = tipo;
  }
  get tipo() {
    return `El tipo de animal es un: ${this.tipo}`;
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
      document.querySelector("#resultado").innerHTML = perro.datosPropietario();
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
      document.querySelector("#resultado").innerHTML = gato.datosPropietario();
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
      document.querySelector("#resultado").innerHTML =
        conejo.datosPropietario();
      break;
  }
});
