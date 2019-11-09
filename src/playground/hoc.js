import React from 'react';
import ReactDOM from 'react-dom';

const Info=(props)=>(
    <div>
        <h1>info</h1>
        <p>this is info:{props.info}</p>
    </div>
);

const withAminWarning=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAdmin && <p>This is private info.Please dont share</p>}
            <WrappedComponent {...props}/>

        </div>
    );
};

const requireAthentication=(WrappedComponent)=>{
    return (props)=>(
        <div>
            {props.isAuthenticated ? 
                (<WrappedComponent {...props}/>):
                (<p>Please login to view the info</p>)}
        </div>
    );
};

const AdminInfo=withAminWarning(Info);
const AuthInfo=requireAthentication(Info);
// ReactDOM.render(<AdminInfo isAdmin={true} info='these are some details'/>,document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info='these are some details'/>,document.getElementById('app'));
ReactDOM.render(<Counter />,document.getElementById('app'));