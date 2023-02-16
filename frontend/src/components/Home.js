import React from "react";
import Instructions from "./Instructions";
function Home(){
    return(
        <section>
        <div class="container-fluid">
            <h1 class="mt-5">Welcome</h1>
            <p> Before using the HPCR let us go throught Instructions first:</p>
        </div>
        <Instructions/>
    </section>
    )
   
};
export default Home;