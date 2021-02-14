import React from 'react'
import '../App.css'

const fetchdata = () => {
    const contacturl = 'https://api.rootnet.in/covid19-in/hospitals/beds'
    fetch(contacturl)
        .then(response => response.json())
        .then(response => showdata(response))
    function showdata(response) {
       
let bt=document.getElementsByClassName('bt');
bt[0].style.display='none';
       
            for (var i = 0; i < response.data.regional.length; i++) {
                var state = response.data.regional[i].state;
                var hospitals = response.data.regional[i].ruralHospitals;
                var beds =response.data.regional[i].ruralBeds;
                var urbanhospital =response.data.regional[i].urbanHospitals;
                var urbanbeds =response.data.regional[i].urbanBeds;
                var totalHospitals =response.data.regional[i].totalHospitals;
                var totalBeds =response.data.regional[i].totalBeds;

                
                                
                // var desc = data[key][i].Description;
                // var price = data[key][i].Price;
                var badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `

                <table class="table2" data-aos="fade-right"> 
                
                
                <td> ${state} </td>
                

                <tr> 
                <td class="trn"> Rural Hospitals <span class="highlight"> ${hospitals} </span></td>
                </tr>
                <tr>
                <td class="trn">Rural Beds <span class="highlight"> ${beds}</span> </td>
                </tr>
                <tr>
                <td class="trn">Urban Hospitals<span class="highlight"> ${urbanhospital} </span></td>
                </tr>
                <tr>
                <td class="trn">Urban Beds<span class="highlight"> ${urbanbeds}</span> </td>
                </tr>
                <tr>
                <td class="trn">Total Hospitals <span class="highlight">${totalHospitals}</span> </td>
                </tr>
                <tr>
                <td class="trn"> Total Beds<span class="highlight"> ${totalBeds}</span> </td>
                </tr>
                
                
                </table>
                                
                `
                       
                    

             document.getElementById('kaka2').appendChild(badge);
            }
        
        // for(let i=0;i<p.length;i++)
        // {
        //     let kaka = document.getElementById('kaka');
        //     let z=p[i]
        //     kaka.innerHTML=`
        //     ${p[i]}
        //     `
        //  }
    }

}

const Fetch = () => {


    return (
        <div id="kaka2">
            <h1 className="text-align">Bed Count of each state and territory</h1>
            <button className="bt" onClick={fetchdata} >Click here</button>
            <h1> State <span style={{fontSize:'1.8rem',color:'dodgerblue',marginLeft: '122px'}}> </span></h1>
            
                    </div>
    )
}

export default Fetch
