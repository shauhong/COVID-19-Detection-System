import React from "react";
import './Details.css';


function Details(){

    return(
        <div className="page">
            
 
            <div className="header">
                
                <h4 className="title">
                    <b>LIU YU XIN</b>
                </h4>
                <div className="buttons">
                    <button className="editButton">Edit</button>
                    <button className="deleteButton">Delete</button>
                </div>
                
            </div>


            
            <div className="Flexbox">
                <div className="image">
                    <img src="https://wx3.sinaimg.cn/mw690/ec074f36gy1gljviraraeg20ex0ba7wn.gif"></img>
                </div>

               
                <table className="table">
                    <tr>
                        <th color="black">NRIC No.</th>
                        <th>970420-33-0320</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Age</th>
                        <th>23</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Gender</th>
                        <th>Female</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Adress</th>
                        <th>Guizhou, Guiyang.</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Contact No.</th>
                        <th>183201314</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Hospital</th>
                        <th>Chimelong Hospital</th>
                    </tr>
                    <tr>
                        <th classname="Butir">Result</th>
                        <th>Negative</th>
                    </tr>
                    

                </table>
            
        </div>

        </div>


    )

}

export default Details;