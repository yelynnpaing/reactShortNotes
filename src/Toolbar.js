import React from "react";

const styles = {
    toolbar:{
        marginBottom : 20, 
        border: "3px solid black"
    },
    dark:{
        backgroundColor:"cyan", 
        padding:20,
        color: "white"
    }
}

//class component
class Toolbar extends React.Component{
    render(){
        return(
            // <div style={{backgroundColor:"cyan", fontSize:20, padding:30}}> //inline CSS
            <div style={styles.dark, styles.toolbar}>
               {this.props.children}
            </div>
        )
    }
}

export default Toolbar;