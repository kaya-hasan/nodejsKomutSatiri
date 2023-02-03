const arguments = process.argv.slice(2)

function daireAlani(yaricap){
    let alan = Math.PI*yaricap*yaricap;
    console.log(`Yaricapi ${yaricap} olan dairenin alani: ${alan}`);
}

daireAlani(arguments[0]*1);