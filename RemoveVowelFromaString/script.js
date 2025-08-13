const RemoveVowel=(str)=>{
     return str.split('').filter((v)=>{
        return v!="a" && v!="e" && v!="i"&&v!="o" &&v!="u" &&v!="A" &&v!="E" &&v!="I" &&v!="O" &&v!="U"
    }).join("")
    
    
}

console.log(RemoveVowel('This website is for losers LOL!'))