import React, {useState, Component} from 'react';
import '../styles/collapse.css';

const Collapsible=(props)=>{
    const [open, setOpen] = useState(false);
    
    const togglePanel=(e)=>{
        setOpen(!open);
    }
    
    return (
        <div>
            <div class="inside">
                <button onClick={(e)=>{togglePanel(e)}} className='header'>
                    toggle
                </button>
                    {open ? ( 
                <div className='content'>
                    
                    Testeksjalefemnlwfkef
                </div>
            ) : null}
            </div>
        </div>
        );
    }
// const Collapsible=(props)=>{
//     const [open, setOpen] = useState(false);
//     // constructor(props){
//     // super(props);
//     // this.state = {
//     // open: false
//     // }

//     const togglePanel=(e)=>{
//         setOpen(!open);
//     }
//     // this.togglePanel = this.togglePanel.bind(this);
//     // }

//     // togglePanel(e){
//     // this.setState({open: !this.state.open})
//     // }
    
//     return (
//         <div>
//             <div class="inside">
//                 <button onClick={(e)=>{togglePanel(e)}} className='header'>
//                     toggle</button>
//                     {open ? (
//                     // {this.state.open ? (
//                 <div className='content'>
                    
//                     Testeksjalefemnlwfkef
//                 </div>
//             ) : null}
//             </div>
//         </div>
//         );
    
//     }


    // constructor(props){
    //     super(props);
    //     this.state = {
    //     open: false
    //     }
    //     this.togglePanel = this.togglePanel.bind(this);
    //     }
        
    //     togglePanel(e){
    //     this.setState({open: !this.state.open})
    //     }
    //     render() {
    //     return (
    //         <div>
    //             <div class="inside">
    //                 <button onClick={(e)=>this.togglePanel(e)} className='header'>
    //                     toggle</button>
    //                     {this.state.open ? (
    //                 <div className='content'>
    //                     {/* {this.props.children} */}
    //                     Testeksjalefemnlwfkef
    //                 </div>
    //             ) : null}
    //             </div>
    //         </div>
    //         );
    //     }
    //     }
export default Collapsible;