class Orang {
  constructor(name) {
    this.name = name;
    console.log("object has been create " + name);
  }

  makan() {
    console.log("sedang makan");
  }

  static jalan() {
    console.log("sedang jalan");
  }
}

class Pekerjaan extends Orang {
  constructor(name) {
    super(name); //* object has been created edi
  }
}

// const edi = new Orang("Edi Hartono");
// console.log(edi.name);

const programer = new Pekerjaan("edi");
programer.makan(); //* sedang makan

Orang.jalan(); //* sedang jalan
