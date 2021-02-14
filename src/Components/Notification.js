import React from 'react'
import './css/notification.css'

const fetchdata = () => {
    const contacturl = 'https://api.rootnet.in/covid19-in/notifications'
    fetch(contacturl)
        .then(response => response.json())
        .then(response => showdata(response))
    function showdata(response) {
     
        // console.log(A);
        // const p = A.map((item) => {
            
        //     return (item.loc)
            
            
        // }
        // );
        
        // console.log(p);
let bt=document.getElementsByClassName('bt');
let scroll1=document.getElementsByClassName('scroll1');
bt[0].style.display='none';
scroll1[0].style.display='block';

for (var i = 1; i < response.data.notifications.length; i++) {
    var title = response.data.notifications[i].title;
    var titlesubs=title.slice(11,)
    var number = response.data.notifications[i].link;
    var dates=response.data.notifications[i].title;
    var subs=dates.slice(0,10);
    
                // var desc = data[key][i].Description;
                // var price = data[key][i].Price;
                var badge = document.createElement('div');
                badge.className = 'badge';
                badge.innerHTML = `

                <table class="table" data-aos="fade-left"> 
                <tr>
                <td class="date"> ${subs} </td>
                <td>  ${titlesubs}  </td>
                
                
                <td  class="trn"> <a href="${number}">${number} </a> </td>
                
                </table>
                </tr>
                
                `
                       
                    
                    document.getElementById('kaka').appendChild(badge);
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

const Notification = () => {


    return (
        <div id="kaka" data-aos="fade-right">
            <h1 className="text-align"> notification and advisories information for all the States and Union
Territories </h1>
            <button className="bt" onClick={fetchdata} >Click here</button>
        <h4 className="text-align scroll1">(Scroll down for more)</h4>
            <h1> Date  <span style={{fontSize:'1.8rem',color:'dodgerblue'}}> Notification </span> <span style={{fontSize:'1.8rem',color:'dodgerblue',marginLeft: '422px'}}> Link</span></h1>
            
                    </div>
    )
}

export default Notification
