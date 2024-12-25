
let all_btn = document.querySelectorAll(".btn") ;
let n = document.getElementById("next") ;
let q = document.getElementById("top") ;
let con = document.querySelector(".container") ;
let s = document.getElementById("start") ;
let submit_ans = document.getElementById("submit");
let head = document.getElementById("header") ;



s.addEventListener("click",()=>{

    con.style.visibility="visible" ;
    nextQuestion() ;
    updateOptions() ;
    s.style.visibility="hidden";
    head.style.visibility="hidden" ;

    alert("Select option only one time ! ") ;
})


// converting nodes of button in array 
let index = 0 ; // for tracking the questions 

options_button = Array.from(all_btn) ;
const questions = [

    {text:"Who win the Champion Trophy 2017 ?",ans:"Pakistan"},
    {text:" winner of 2007 T20 Worldcup ?",ans:"Pakistan"},
    {text:"Who is the winner of 2015 ODI Worldcup ?",ans:"Austrailia"},
    {text:" Winner of 2022 T20 Worldcup ?",ans:"England"},
    {text:"Who is the winner of 2021 T20 Worldcup ?",ans:"Austrailia"}
]



let o_index = 0 ; // to track options index 
options = [

    
    {
        o2 : ["Pakistan","India","England","West Indies"]
    } ,
    

    {
        o2 : ["Pakistan","India","Nepal","West Indies"]
    } ,
    
    {
        o2 : ["Austrailia","India","New Zealand","West Indies"]
    } ,
    
    {
        o2 : ["Pakistan","Afghanistan","England","Nether land"]
    } ,
    {
        o2 : ["Zimbabwawe","India","Nepal","Austrailia"]
    } 

]



let score = 0 ;


function updateOptions(){

    
    for (let i = 0; i <=3; i++) {

      
        
        options_button[i].innerText = options[o_index].o2[i] ;
        
    }
    o_index++ ;

    

}
function nextQuestion(){


 
    q.innerText = questions[index].text ;
    index++ ;
    submit++ ;
    if(submit==6){

        submit_ans.style.visibility="visible";
    }
      


 

}

let submit = 1 ;
if (submit==5) {
    
    submit_ans.style.visibility="visible" ;
}
next.addEventListener("click",()=>{


    if (index==5) {

        alert("this is last question !")
    }
    all_btn.forEach((buttons)=>{

        buttons.disabled = false ;
        buttons.style.backgroundColor="rgb(239, 243, 246)";
        buttons.style.color="black";
    })
   
    nextQuestion() ;
    updateOptions();
    
    
    

    

})

let ans_tracking = 0 ; // to track ans 
let color = false ; // track styling for buttons


 
let click = false ;
all_btn.forEach((b,index)=>{

    

    b.addEventListener("click",()=>{

        all_btn[index].style.backgroundColor="black";
        all_btn[index].style.color="white";
        n.style.visibility="visible" ;

        if (b.innerText==questions[ans_tracking].ans) {

            score++ ;
        }
        ans_tracking++ ;

      

        
    })
   
})



submit_ans.addEventListener("click",()=>{

    alert(`yours Score ${score}`) ;
    alert("Thank you sooo much !!!!")
    window.location.reload() ;
   
})






