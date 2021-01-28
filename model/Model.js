
let soal_hitungan = JSON.parse(`[{
	"type": "radio",
	"soal": "Siapakah penemu baling-baling bambu",
	"a": "Doraemon",
	"b": "hanif",
	"c": "nobita",
	"d": "naruto",
	"kunci": "a",
	"score": 20
}, {
	"type": "checkbox",
	"soal": "pilihlah 3 yang benar mengenai aqil",
	"option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
	"kunci": ["Manusia", "Anggota Avenger"],
	"score": 20
}, {
	"type": "essay",
	"soal": "Buat gambar bintang lima dengan menggunakan coding javascript looping",
	"kunci": "*****",
	"score": 20
}]`);


let soal_bebas = JSON.parse(`[{
	"type": "radio",
	"soal": "Siapakah penemu baling-baling bambu",
	"a": "Doraemon",
	"b": "hanif",
	"c": "nobita",
	"d": "naruto",
	"kunci": "a",
	"score": 20
}, {
	"type": "checkbox",
	"soal": "pilihlah 3 yang benar mengenai aqil",
	"option": ["Trainer Juara Coding", "Manusia", "Anggota Avenger"],
	"kunci": ["Manusia", "Anggota Avenger"],
	"score": 20
}, {
	"type": "essay",
	"soal": "Buat gambar bintang lima dengan menggunakan coding javascript looping",
	"kunci": "*****",
	"score": 20
},{
	"type": "radio",
	"soal": "Siapakah anggota BlackPink",
	"a": "lisa",
	"b": "rossi",
	"c": "jenong",
	"d": "isoo",
	"kunci": "a",
	"score": 20
},{
	"type": "checkbox",
	"soal": "pilihlah hero avenger",
	"option": ["Hulk", "Iron Man", "Wiro Sableng"],
	"kunci": ["Hulk", "Iron Man"],
	"score": 20
},{
	"type": "radio",
	"soal": "Siapakah yang pernah dicupang aqil ",
	"a": "chelsea islan",
	"b": "lisa",
	"c": "jenong",
	"d": "isoo",
	"kunci": "a",
	"score": 20
}]`);

module.exports.data= [{type : "bebas", data: soal_bebas, image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2lHaLRIdiBEQctEaWhJPDDn6nPJH0rwm95w&usqp=CAU",description:"Soal pengetahuan umum"}, {type:"hitungan", data:soal_hitungan, image:"https://cdn.idntimes.com/content-images/community/2019/08/calculator-385506-960-720-5762849e0ede2c709ca3c39cd7f4ca73_600x400.jpg",description:"Kumpulan soal-soal hitungan"}]
