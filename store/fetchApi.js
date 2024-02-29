
let cardlist = document.querySelector("#Cardcontainer")
const Base_URL= "http://127.0.0.1:5500/data/"
export async function fetchData(endpoint){
                   try{
                    let res = await fetch(Base_URL+endpoint +".json" ,{
                                        method:"GET",
                                        headers:{
                                                            "Content-Type":"application/json",
                                        },
                    });
                    let data = await res.json();
                    return data;
                    

                   }catch(error){
                                        console.error(error)
                   }

                    
}