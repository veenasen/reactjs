import React, {PureComponent} from "react";
import jsPDF from 'jspdf'
export default class PdfGenerator extends PureComponent{
    constructor(props){
        super(props)
        this.state={

        }
    }

    jsPdfGenerator=()=>{
        var doc=new jsPDF('p','pt')
        doc.text(20,20,'Hello Everyone')
        doc.setFont('courier');
        // doc.setFontType('normal');
        doc.text(20,30,'This is the Example Program For PDF Generator in React JS')
        doc.save("generated.pdf")
    }
    render(){
        return(
           <>
           <h1>PDF Generator Example</h1>
           <button style={{backgroundColor:"yellow",color:"red", height:"50px"}} onClick={this.jsPdfGenerator}>Generate PDF</button>
           </> 
        )
    }
}