//
// поменял местами яблоко из левой руки с грушей из правой руки.
let left= "apl";
let right="pear";
let table;
//
//1.из левой руки яблоко кладем на стол.
table=left;
console.log(table);
//2.из правой руки грушу кладем в левую руку.
left=right;
console.log(left);
//3.правой рукой берем со стола яблоко.
right=table;
console.log(left);
console.log(right);