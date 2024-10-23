//  Interface ka feature help karta object ke type assign karny main 
interface MyCar {
    make:string
    model:number
    spec:{

    }
}
 //TYPE INTERSECTION MAIN  do obeject ko merge kar ke ek object main rakhna ho
 type student ={
    studentname:string
    rollno:number| string
 }
 type teacher = {
    teachername:string
    experience: number
 }

 const ClassRoom: teacher & student ={
    teachername:"Ali",
    experience: 4,
    rollno:12345,
    studentname:"Owais"
 }
 console.log(ClassRoom);

 // ([][])double square bracket ka mtlb hai ke is main array ke andar array hai
 const fruits:string [][] = [
    ["mango", "peach"],
    ["watermelon", "banana"]
 ]

 // number in array  
 const one:(number| string)[]=[
    45,65,
    "ali","Jawwad"
 ]

 const nested :(number| string)[][]=[
    [45,65],
    ["ali", "Jawwad"]
 ]

 // LOOPS jab apko koi kam bar bar karwana ho ya koi bhi cyclr/repetation karwany ho
  // 1.FOR LOOP: jab koi asa senario ajaye jis main humay E nding Point pata ho to wahn For Loop chalyga
  // method : 
  // 1. three experession
  // 2. starting point
  // 3. ending point
  // 4. step to reach ending point

  for(let i = 10; i<=25; i=i+5){
    console.log(i);
  }

  for(let i = 10; i<=25; i=i*2){
    console.log(i);
  }

  for(let i=5; i>=0; i--){
    console.log(i)
  }

  for(let a=5; a<=15; a++){
   console.log(`${a}"kacha papar Pakka papar`);
  }

  // WHILE LOOP: jab koi asa senario aja ye jis main Ending point pata he nhi ho to wahn per while loop use hoga
  //Method:
  // 1. outside loop var decelare
  // 2. within round bracket
  // 3. step to reach ending point

  let a=1 // STARTING POINT
  while(a <=10){//ENDING POINT
    console.log(a);
    a++
  }
  
  let b=10 // STARTING POINT
  while(b >=1){//ENDING POINT
    console.log(b);
    b--
  }
  
  let c=10
  while(c>=0){
    console.log(a);
    a--
    if(a==0)
        console.log("Happy New Year");
  }

  let persons =["badar","shahmer","rizwan","kholi"]
  console.log(persons.length);

for(let i=0; i < persons.length; i++){
   console.log(persons[i]);
   persons[0]
   persons[1]
}

// FOR OF LOOP 

for(let players of persons){
   console.log(players)
}

// Feature of type script "ENUMS" jab apko phely sy he pata ho ke values kiya hongye

enum direction { 
  NORTH= "NORTH",
  SOUTH="SOUTH",
  EAST="EAST",
  WEST="WEST"
}
const compass:direction=direction.NORTH
console.log(compass);

enum timeslots {
    morning="9 to 12",
    afternoon="2 to 5",
    evening="7 to 10"
}
const times:timeslots=timeslots.morning
console.log(times);