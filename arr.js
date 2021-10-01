const countries = [
    'ALBANIA',
    'BOLIVIA',
    'CANADA',
    'DENMARK',
    'ETHIOPIA',
    'FINLAND',
    'GERMANY',
    'HUNGARY',
    'IRELAND',
    'JAPAN',
    'KENYA'
];

function createArrayOfArrays(countries)
{
   
   let map1= countries.map((country) => {
        let arr=country.substr(0,3).toUpperCase();
        return [country,arr,country.length];

    }
        )
        return map1;
}
console.log(createArrayOfArrays(countries));


 