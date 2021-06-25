import PDFfile from "./images/Jerry-Nutt.pdf"

const Contact = () => {
    console.log("a great opertunity to work in an enviroment to progress into a fullstack role //jquery bootstrap")
    return(
<div className='pdf'>
<embed src={PDFfile} type="application/pdf" width="80%" height="600px" /></div>
    );

    
}
export default Contact