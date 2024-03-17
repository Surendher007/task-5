
// for in method

const jsonObject = {
    "name": "surendher",
    "age": 23,
    "city": "Thanjavur"
  };
  
  for (let key in jsonObject) {
    console.log(key + ": " + jsonObject[key]);
  }
  
// for of method

const jsonObject1 = {
    "name": "Nithish",
    "age": 24,
    "city": "chennai"
  };
  
  for (const value of Object.values(jsonObject1)) {
    console.log(value);
  }

// forEach method
  
  const jsonObject2 = {
    "name": "imman",
    "age": 23,
    "city": "kadalur"
  };
  
  Object.keys(jsonObject2).forEach(key => {
    console.log(key + ": " + jsonObject2[key]);
  });
  