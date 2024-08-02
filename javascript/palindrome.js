var palindrome,duplicate,a,temp=0
palindrome=234;
duplicate=palindrome;

while(palindrome>0){
    a=palindrome%10;
    palindrome=parseInt(palindrome/10);
    temp=(temp*10)+a
}
if (temp == duplicate)  
    {  
    console.log( "It is a Palindrome Number");  
    }  
    else  
    {  
    console.log("it is not a Palindrome Number");  
    }  