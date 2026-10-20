// let arr = [2,8,4,3,1,26,14,89,9];
// let buffer=null;
// //
// for (let i=0;i<arr.length;i++){
//     for(let j=i+1;j<arr.length;j++){
//        if( arr[i]>arr[j]){
//         buffer=arr[i];
//         arr[i]=arr[j];
//         arr[j]=buffer;
//        }

//     }

    
// };
// console.log (arr)
//
//
let arr = [2,8,4,3,1,26,14,89,9];
let buffer=null;
//
for (let i=0;i<arr.length;i++){
    for(let j=i+1;j<arr.length;j++){
       if( arr[i]<arr[j]){
        buffer=arr[i];
        arr[i]=arr[j];
        arr[j]=buffer;
       }

    }

    
};
console.log (arr)