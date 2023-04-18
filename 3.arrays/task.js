function compareArrays(arr1, arr2) {
  return arr1.length === arr2.length && arr1.every((element, i) => element === arr2[i]);
}

function getUsersNamesInAgeRange(users, gender) {
  let result = users.filter(user => user.gender === gender).map(user => 
  user.age).reduce((acc, item, index, arr) => acc + item / arr.length, 0);
  return result;  
}