import React from 'react'
import '../App.css'

const fetchdata = () => {
    const contacturl = 'https://api.rootnet.in/covid19-in/contacts'
    fetch(contacturl)
        .then(response => response.json())
        .then(response => showdata(response))
    function showdata(response) {
        let z = response.data.contacts.primary.number;
        let A = response.data.contacts.regional;
        // console.log(A);
        // const p = A.map((item) => {
            
        //     return (item.loc)
            
            
        // }
        // );
        
        // console.log(p);
let bt=document.getElementsByClassName('bt');
bt[0].style.display='none';
let scroll1=document.getElementsByClassName('scroll1');
scroll1[0].style.display='block';

       
            for (var i = 0; i < response.data.contacts.regional.length; i++) {
                var title = response.data.contacts.regional[i].loc;
                var number = response.data.contacts.regional[i].number;
                                
                // var desc = data[key][i].Description;
                // var price = data[key][i].Price;
                var badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `

                <table class="table1" data-aos="slide-right"> 
                <tr>
                <td> ${title} </td>
                
                
                <td  class="trn"> ${number} </td>
                </table>
                </tr>
                
                `
                       
                    
                    console.log(title);

             document.getElementById('kaka1').appendChild(badge);
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
        <div id="kaka1" data-aos="fade-in">
            <h1 className="text-align"> contact helpline number information for all the States and Union
Territories</h1>
            <button className="bt" onClick={fetchdata} >Click here</button>
            <h4 className="text-align scroll1">(Scroll down for more)</h4>
            <h1> State <span style={{fontSize:'1.8rem',color:'dodgerblue',marginLeft: '122px'}}> Number</span></h1>
            
                    </div>
    )
}

export default Fetch
