import React from 'react'
import './SubNav.css'
import Arrow from '../../assets/Arrow'
import bannerImage from '../../assets/Screenshot 2025-01-30 113352.png'

const SubNav = () => {
  return (
    <div className="bannerParentDiv">
      <div className="bannerChildDiv">
        <div className="menuBar">
          <div className="categoryMenu">
            <span>ALL CATEGORIES</span>
            <Arrow />
          </div>
          <div className="otherQuickOptions">
            <span>Cars</span>
            <span>Motorcycles</span>
            <span>Mobile Phones</span>
            <span>For Sale: Houses & Apartments</span>
            <span>Scooters</span>
            <span>Commercial & Other Vehicles</span>
            <span>For Rent: Houses & Apartments</span>
          </div>
        </div>
        <div className="banner">
          <img
            src={bannerImage}
            alt="OLX Banner"
          />
        </div>
      </div>
    </div>
  )
}

export default SubNav;
