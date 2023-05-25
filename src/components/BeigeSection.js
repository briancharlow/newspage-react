// components/BeigeSection.js

import React from 'react';

function BeigeSection() {
  return (
    <>
      <div className="beige beige1">
        <div className="smallImg beigeSub">
          <img src="images/image-retro-pcs.jpg" alt="" />
        </div>
        <div className="beigeText beigeSub">
          <h2>01</h2>
          <h4>Reviving Retro PCs</h4>
          <p>What happens when old PCs are given modern upgrades?</p>
        </div>
      </div>
      <div className="beige beige2">
        <div className="smallImg beigeSub">
          <img src="images/image-top-laptops.jpg" alt="" />
        </div>
        <div className="beigeText beigeSub">
          <h2>02</h2>
          <h4>Top 10 Laptops of 2022</h4>
          <p>Our best picks for various needs and budgets.</p>
        </div>
      </div>
      <div className="beige beige3"> 
        <div className="smallImg beigeSub">
          <img src="images/image-gaming-growth.jpg" alt="" />
        </div>
        <div className="beigeText beigeSub">
          <h2>03</h2>
          <h4>The Growth of Gaming</h4>
          <p>How the pandemic has sparked fresh opportunities.</p>
        </div>
      </div>
    </>
  );
}

export default BeigeSection;
