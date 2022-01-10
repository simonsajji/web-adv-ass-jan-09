let f=fetch("http://127.0.0.1:5500/Advanced-FE-Assignments/assignment-kbc-fetch/kbc.json");
let opts=document.getElementsByClassName("options");
let container=document.getElementById("container");

f.then((a)=> {
    // console.log(a);
    return a.json();
}).then((p) => {
    let ob=p.question_list;
        const keys=Object.keys(ob);
        const values=Object.values(ob);
        console.log(values.length);
        let i=0;
        let counter=0;
        function loop(){
            
            
            if(i>=values.length){
                return;
            }
            console.log(values[i].question);
            let q=document.getElementById("q");
            q.innerText=values[i].question;
            // console.log(values[i].options);
            correct_ans=values[i].correct_answer;
            
            for(j=0;j<values[i].options.length;j++){
                
                
                opts[j].innerText=values[i].options[j];
                opts[0].style.backgroundColor="rgba(7, 7, 7, 0.4)";
                opts[1].style.backgroundColor="rgba(7, 7, 7, 0.4)";
                opts[2].style.backgroundColor="rgba(7, 7, 7, 0.4)";
                opts[3].style.backgroundColor="rgba(7, 7, 7, 0.4)";
                
                opts[j].addEventListener("click",function(event){
                    let e=event.target;
                    
                    let index=check_index(e.innerText,correct_ans);
                  
                    if(index==j){
                        console.log("correct_answer");
                        e.style.backgroundColor="green";
                        counter=counter+1000;
                        let price=document.getElementById("price");
                        price.innerText=counter;
                        console.log(i);
                        if(i>=values.length){
                            container.style.display="none";
                            let win=document.getElementById("win");
                            win.style.display="flex";
                            document.getElementById("money").innerText=price.innerText
                            

                        }
                        else{
                            setInterval(function(){
                                
                                if(opts[0].style.backgroundColor!="green" || opts[1].style.backgroundColor!="green" || opts[2].style.backgroundColor!="green" || opts[2].style.backgroundColor!="green" || opts[3].style.backgroundColor!="green"){
                                   ++i;
                                    loop();
                                }
                                else{
                                    
                                    setTimeout(function(){
                                        container.style.display="none";
                                        let loss=document.getElementById("loss");
                                        loss.style.display="flex";
                                        let price=document.getElementById("price");
                                        price.innerText=0;
                
                                    },500);
                                }
                            },10000);

                        }
                        
                        
                       

                        
                    }
                    else{
                        e.style.backgroundColor="red";

                        console.log("wrong answer");
                        setTimeout(function(){
                            container.style.display="none";
                            let loss=document.getElementById("loss");
                            loss.style.display="flex";
                            let price=document.getElementById("price");
                            price.innerText=0;

                        },500);
                        

                        
                        
                    }
                })
            }

            
            
            
            
        }

        loop();

        
            
        

       

        
    
        

    
})

function check_index(option,correct_answer){
    if(option==correct_answer){
        return j;

    }
    else{
        return NaN;
    }
        
    
}