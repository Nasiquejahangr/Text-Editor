import React from 'react'

function Alert(props) {


//capitalize first letter
const cap = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
}




    return (
        <>

       {props.alert &&  <div className="container my-3">
        <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert"
        // style={{
        //     color: props.mode === 'dark' ? 'blue' : 'yellow',
        //     backgroundColor: props.mode === 'dark' ? 'yellow' : 'blue'
        // }}
        >
                <strong>
                   {cap(props.alert.type)}
                </strong>:{props.alert.msg}
            
                
            </div>
        </div>

       }
        </>
    )
}

export default Alert
