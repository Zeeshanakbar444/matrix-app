function matrixSumSubtract(e){
    let inputOfm1 = document.getElementsByName('m1')
    let inputOfm2 = document.getElementsByName('m2')
    let result = document.getElementsByName('mr');
    
    // console.log(inputOfm1)
    for(let i = 0 ; i < inputOfm1.length ;  i++){
        if(e.submitter.innerText.toLowerCase() === 'sum')
        result[i].value= Number(inputOfm1[i].value) + Number(inputOfm2[i].value)
        else
        result[i].value= Number(inputOfm1[i].value) - Number(inputOfm2[i].value)
    }
        }

