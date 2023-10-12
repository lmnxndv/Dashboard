import React from 'react'

const Header = () => {
  return (
    <div className='OfficeHeader'>
        <div className="header-address">
        <h2>Dallas Office</h2>
        <span>View details</span>
        </div>
        <div className="header-text">
            <p><strong>40</strong> shared desks <strong>+39</strong> private offices </p>
            <p>Maximum capacity: <strong>96 people</strong></p>
        </div>
    </div>
  )
}

export default Header