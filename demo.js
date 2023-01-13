const isPrime=(num)=> {
    for (let i = 0; i < num; i++) { 
        if(num%i==0)
        {
            return false;
        }
      } 
      return true
  }

const isArmstrong=(num)=>
  {
    let count;
    while(num>0)
    {
        count+=Math.pow(num%10,3);
        num/=10;
    }
    if(count==num)
        return true;
    else
      return false;
  }

  console.log(isPrime(3));