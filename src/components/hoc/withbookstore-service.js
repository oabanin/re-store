import React from 'react';

const WithBookstoreService = (WrappedComponent) => {
    return class extends React.Component{
        render(){
            return (<WrappedComponent {...this.props}/>)
        }
    }
}

export default WithBookstoreService;