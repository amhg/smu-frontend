export class Employee {
  id: string;
  firstName: string;
  lastName: string;

  constructor() {
    this.id = '';
    this.firstName = '';
    this.lastName = '';
  }
}

export class LoginMessage {
  message: string;
  status: boolean;
  rfc: string;

  constructor() {
    this.message = '';
    this.status = false;
    this.rfc = '';
  }
}

class Perfil {
  ocupacion: string;
  area: string;
  puesto: string;
  cluesreal: string;
  perfilHospital: Hospital;

  constructor() {
    this.ocupacion = '';
    this.area = '';
    this.puesto = '';
    this.cluesreal = '';
    this.perfilHospital = new Hospital();
  }
}

class Hospital {
  jurisdiccion: string;
  descripcion: string;

  constructor() {
    this.jurisdiccion = '';
    this.descripcion = '';
  }
}

export class Persona {
  curp: string;
  rfc: string;
  nombre: string;
  apellido1: string;
  apellido2: string;
  perfil: Perfil;

  constructor() {
    this.curp = '';
    this.rfc = '';
    this.nombre = '';
    this.apellido1 = '';
    this.apellido2 = '';
    this.perfil = new Perfil();
  }
}

/*
export class RegistroPersonal {
  curp: string;
  registroPersonal: timeTracking

  constructor(c : string, rp:timeTracking ) {
    this.curp = c;
    this.registroPersonal = rp;
  }
}
*/


export class timeTracking {
  registryType: string;
  date: string;
  time: string;

  constructor(registryType : string, date:string, time:string ) {
    this.registryType = '';
    this.date = '';
    this.time = '';
  }
}

