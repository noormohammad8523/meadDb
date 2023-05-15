const university =()=>{
fetch('http://universities.hipolabs.com/search?country=United+States')
.then(res => res.json())
.then(data=> console.log(data))
};

university();