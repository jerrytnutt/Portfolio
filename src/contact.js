import PDFfile from "./images/Jerry-Nutt.pdf"

const Contact = () => {
  return(
         <div className='pdf'>
           <embed src={PDFfile} type="application/pdf" width="80%" height="600px" />
         </div>
    );  
}
export default Contact