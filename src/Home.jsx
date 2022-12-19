import React from 'react'
import "./Css/Home.css";
import Cross from "./Assets/cross.png";
import Medicine from "./Assets/Med.jpg";
import plane from "./Assets/paper-plane.png";
const Home = () => {
  return (
    <>
        <div class="Home_Container">
    <div class="Left_home">
        <div class="Selector">
            <div class="Title">
                <h2>Related Category</h2>
            </div>
            <ul>
                <li>Paracetamol Tablets</li>
                <li>Paracetamol Syrup</li>
                <li>Paracetamol Powder</li>
                <li><button>Aceclofenac <img src={Cross} alt="cross" /></button></li>
                <li>Magaladrate Simethicone Oral Suspension</li>
                <li>Mefenamic Paracetamol Syrup</li>
            </ul>
        </div>
        <div class="Selector">
            <div class="Title"><h2>Related Brands</h2></div>
            <ul>
                <li>Cipmol Paracetamol</li>
                <li>Pandal Paracetamol Tablets</li>
                <li>Combiflam</li>
                <li>Crocin Tablets</li>
                <li>Calpol Paracetamol Tablets</li>
                <li>Sumo Tablet</li>
            </ul>
        </div>
        <div class="Selector">
            <div class="Title"><h2>Buisness Type</h2></div>
            <ul>
                <li>WholeSaler</li>
                <li>Manufacturer</li>
                <li>Retailer</li>
             <li>Exporter</li>
            </ul>
        </div>
        <div class="Selector">
            <div class="Title"><h2>Strength</h2></div>
            <ul>
                <li><button>500 mg <img src={Cross} alt="cross" /></button></li>
                <li>650 mg</li>
            </ul>
        </div>
        <div class="Selector">
            <div class="Title"><h2>Manufacturer</h2></div>
            <ul>
                <li>Intas Pharmaceutical ltd</li>
                <li>Alkem Laboratories ltd</li>
            </ul>
        </div>
        <div class="Selector">
            <div class="Title_p"><h2>Prescription / Non Prescription</h2></div>
            <ul>
                <li>Intas Pharmaceutical ltd</li>
                <li>Alkem Laboratories ltd</li>
            </ul>
        </div>

    </div>
    <div class="Main_home">
          
<div class="grid-container">
    <div class="grid-item">
     <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
     <div class="Medicine_text">
        <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
        <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
        <h2>
            Glenmark Pharmaceutical Limited
        </h2>
        <p>PARVAT PATIYA , SURAT , GUJARAT</p>
     </div>
     <hr id="Strt_line" />
     <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
     <div class="bottm_St"></div>
      </div>
      <div class="grid-item">
        <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
        <div class="Medicine_text">
           <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
           <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
           <h2>
               Glenmark Pharmaceutical Limited
           </h2>
           <p>PARVAT PATIYA , SURAT , GUJARAT</p>
        </div>
        <hr id="Strt_line" />
        <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
        <div class="bottm_St"></div>
         </div>
         <div class="grid-item">
            <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
            <div class="Medicine_text">
               <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
               <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
               <h2>
                   Glenmark Pharmaceutical Limited
               </h2>
               <p>PARVAT PATIYA , SURAT , GUJARAT</p>
            </div>
            <hr id="Strt_line" />
            <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
            <div class="bottm_St"></div>
             </div>
             <div class="grid-item">
                <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
                <div class="Medicine_text">
                   <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
                   <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
                   <h2>
                       Glenmark Pharmaceutical Limited
                   </h2>
                   <p>PARVAT PATIYA , SURAT , GUJARAT</p>
                </div>
                <hr id="Strt_line" />
                <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
                <div class="bottm_St"></div>
                 </div>
                 <div class="grid-item">
                    <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
                    <div class="Medicine_text">
                       <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
                       <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
                       <h2>
                           Glenmark Pharmaceutical Limited
                       </h2>
                       <p>PARVAT PATIYA , SURAT , GUJARAT</p>
                    </div>
                    <hr id="Strt_line" />
                    <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
                    <div class="bottm_St"></div>
                     </div>
                     <div class="grid-item">
                        <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
                        <div class="Medicine_text">
                           <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
                           <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
                           <h2>
                               Glenmark Pharmaceutical Limited
                           </h2>
                           <p>PARVAT PATIYA , SURAT , GUJARAT</p>
                        </div>
                        <hr id="Strt_line" />
                        <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
                        <div class="bottm_St"></div>
                         </div>
                         <div class="grid-item">
                            <div class="Medicine_pic"><img src={Medicine} alt="" /></div>
                            <div class="Medicine_text">
                               <h2>Favipiravir 400mg (Fabiflu) Tablets</h2>
                               <p id="Rate">Rs 1,775 <span><b>/</b> Stripe</span></p>
                               <h2>
                                   Glenmark Pharmaceutical Limited
                               </h2>
                               <p>PARVAT PATIYA , SURAT , GUJARAT</p>
                            </div>
                            <hr id="Strt_line" />
                            <div class="contact_supp"><img src={plane} alt="" /><p>Contact Supplier</p></div>
                            <div class="bottm_St"></div>
                             </div>
    </div>
    </div>



</div>
    </>
  )
}

export default Home