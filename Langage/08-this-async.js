const contact1 = {
  prenom: 'Romain',
  hello: function() {
    const _this = this;
    setTimeout(function () {
      console.log(`Bonjour je m'appelle ${_this.prenom}`);
    }, 1000);
  },
};

contact1.hello(); // Bonjour je m'appelle Romain


const contact2 = {
  prenom: 'Romain',
  hello: function() {
    console.log(`Bonjour je m'appelle ${this.prenom}`);
  },
  helloAsync: function() {
    setTimeout(this.hello.bind(this), 1000);
  }
};

contact2.helloAsync(); // Bonjour je m'appelle undefined

const contact3 = {
  prenom: 'Romain',
  hello() {
    setTimeout(() => {
      console.log(`Bonjour je m'appelle ${this.prenom}`);
    }, 1000);
  },
};

contact3.hello(); // Bonjour je m'appelle Romain
