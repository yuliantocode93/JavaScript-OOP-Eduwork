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
    super(name); //* object has been created tomo
  }
  makan() {
    console.log("sedang makan mie ayam");
  }
}

// const edi = new Orang("Edi Hartono");
// console.log(edi.name);

const programer = new Pekerjaan("tomo");
programer.makan(); //* sedang makan mie ayam

Orang.jalan(); //* sedang jalan
