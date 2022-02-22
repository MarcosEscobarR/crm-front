import {useState} from "react";
import {listCompanies} from "../../services/companyService";
import {CompanyModel} from "../../models/Company";
interface Props {
  data: CompanyModel[]
}

export default function Index({data}: Props) {
  const [mensaje, setMensaje]= useState('hola')
  const [mensaje2, setMensaje2]= useState('hola')
  
  const handleClick = () => {
    setMensaje2('que tal')
  }
  
  return <>
    <p>{ mensaje}</p>
    {
    }
    
    <button onClick={handleClick}>Saluda</button>
    <p>{mensaje2}</p>
  </>
}
 export async function getServerSideProps() {
   const data = await listCompanies()
   
   return {props: data}
 }