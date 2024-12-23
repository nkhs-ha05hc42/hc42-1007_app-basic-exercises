let sum=0;
let count=0;
for (let i = 1; i <=100; i++)
    {
        count=count+1
        if(i%2===0)
        {
            sum=sum+count;

        }
        if(sum>50)
        {
            break
        }
    }
console.log(count)
console.log(sum)