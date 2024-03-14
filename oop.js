class Orang {
  constructor(name) {
    this.name = name;
    console.log("object has been created"); //* object has been created
  }

  makan() {
    console.log("sedang makan"); //* sedang makan
  }

  static jalan() {
    console.log("sedang jalan"); //* sedang jalan
  }
}

class Pekerjaan extends Orang {
  constructor(name) {
    super(name); //* object has been created
  }
}

// const edi = new Orang("Edi Hartono");
// console.log(edi.name);

const programer = new Pekerjaan("edi");
programer.makan(); //* sedang makan
