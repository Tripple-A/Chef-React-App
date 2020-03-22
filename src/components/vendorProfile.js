import React from 'react';

const VendorProfile = ({match}) => {
    
    const id = match.params.user_id
    return(
        <div>In order to show up-to-date products to customers,please constantly 
            update your profile with your information</div>
    )
}

export default VendorProfile