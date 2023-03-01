let myStudies = ['Algebra', 'JavaScript', 'Python', 'Animation'];

for (let i = 0; i <myStudies.length; i++) {
console.log(myStudies[i])
}

let myFav = 'Software Development';

if (myFav == myStudies[3]) {
  console.log('this is my favorite subject')
}
else if (myFav == myStudies[0]){
  console.log('Algebra is a great subject')
}
else {
  console.log('This subject doesnt match')
}