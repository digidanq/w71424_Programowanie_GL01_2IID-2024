// Zad 1

const ksiazka ={
	tytul: "Detective",
	autor: "Jan Kowalski",
	rokWydania: 1967,
};

function opisKsiazke(ksiazka){
	return `${ksiazka.tytul} - ${ksiazka.autor} (${ksiazka.rokWydania})`;
}

console.log(opisKsiazke(ksiazka));

// Zad 2

const student = {
	imie: "Anna",
	nazwisko: "Kowalska",
	nrAlbumu: "w71234",
	oceny:{
		matematyka: 4.5,
		informatyka: 5,
		fizyka: 3.5,
	}
};

const ocenySum = student.oceny.matematyka + student.oceny.informatyka + student.oceny.fizyka;
const srednia = ocenySum / 3;

console.log(`Imie - ${student.imie} \nNazwisko - ${student.nazwisko} \nNrAlbumu - ${student.nrAlbumu} \nŚrednia ocen: ${srednia}\n`); 

//Zad 3

const samohod = {
	marka: "Toyota",
	model: "Corolla Sedan",
	rokProdukcji: "2024",
	kolor: "785 Dark Teal",
	predkosc: 0,

	zwiekszPredkosc(wartosc){
		this.predkosc += wartosc;
	},
	
	zmniejszPredkosc(wartosc){
		this.predkosc = Math.max(0, this.predkosc - wartosc);
	},

	informacje(){
		return `Marka - ${this.marka} \nModel - ${this.model} \nRok produkcji - ${this.rokProdukcji} \nKolor - ${this.kolor} \nPrędkość - ${this.predkosc} km/h`;
	}
};

samohod.zwiekszPredkosc(50);
console.log(samohod.informacje());

// Zad 5

const prostokat = {
  a: 5,
  b: 5,

  pole() {
    return this.a * this.b;
  },

  obwod() {
    return 2 * (this.a + this.b);
  },

  czyKwadrat() {
    return this.a === this.b;
  }
};

console.log(`Pole: ${prostokat.pole()} \nObwód: ${prostokat.obwod()} \nKwadrat: ${prostokat.czyKwadrat()}`);

