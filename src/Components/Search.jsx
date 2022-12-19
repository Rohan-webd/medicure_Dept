import React from 'react'
import "../Css/Search.css";
import "../Assets/search.png";
import Cross from "../Assets/cross.png";
const Search = () => {
  return (
    <>
        <div class="Search_Container">
        <div class="prev_pages">
            <p>Medical Darpan > Search > <span>FabiFlu Tablet</span></p>
        </div>
        <div class="search_box">
                <form>
                <input type="text" placeholder="Search Your Medicine" value="Paracetamol"/>
                <button type="submit" value="Search">Search</button>
                </form>
        </div>
        <div class="Display_Results">
            <p>Paracetamol <span>( 128 products )</span></p>
          <button>Aceclofenac <img src={Cross} alt="cross" /></button>
          <button>500 mg  <img src={Cross} alt="cross" /></button>
          <a href="#New">Remove all</a>
        </div>
    </div>
    </>
  )
}

export default Search