const findMypet = (nama) => {
    let hewan = [];

    const pets = myPet.map((pet) => {
        if (nama === pet) {
            hewan = nama;
        }
    });
    console.log(hewan + "ada di ruangan 1");
};

const myPet = ["ayam", "ikan", "iguana", "kecoak"];

findMypet("ayam");
