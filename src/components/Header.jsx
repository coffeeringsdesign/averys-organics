import React from 'react'

function Header(){
  return (
    <div className="div-styles">
      <style jsx>{`
        .div-styles {
          height: 100px;
          background-color: #87B38D;
          width: auto;
          display: flex;
          align-items: center;
          border-bottom: 2px solid #2e4831;
        },
        .header-styles {
          font-family: Montserrat;
        }
        .ul-styles {
          font-family: Montserrat;
          list-style: none;
        }
        .ul-styles li {
          display: inline;
          padding: 15px;
        }
      `}</style>
      <h1 className="header-styles">Avery's Organics</h1>
      <ul className="ul-styles">
        <li>About Us</li>
        <li>Order</li>
      </ul>
    </div>
  )
}

export default Header
