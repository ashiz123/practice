let str = "RaceCar"
let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

let len = str.length;

function checkPalindrome(cleanedStr, n)
{
   let left  = 0;
   let right =  n-1;

   while(left < right)
   {
    if(cleanedStr[left] != cleanedStr[right]){
        console.log(false);
        return;
    }

      left++;
      right--;  
   }

   console.log(true);
   return;

}

checkPalindrome(cleanedStr, len)