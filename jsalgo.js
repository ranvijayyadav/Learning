// unique sort in js using caching

const uniqueSort=  (arr)=>{
  const breadcrumbs ={};
  const resut =[];
  for(let i=0;i<arr.length;i++){
    if(!breadcrumbs[arr[i]]){
      resut.push(arr[i]);
      breadcrumbs[arr[i]]= true;
    }
  }
  return resut.sort((a,b)=>a-b);
}
let a =uniqueSort([1,28,1,2,3,12,2,4,12,13,12,45,1,7,4,3,2]);
console.log(a);
for(let i=0; i<a.length;i++){
  console.log(a[i]);
}
