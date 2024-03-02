import './DoctorCard.css';
export default function DoctorCard({doctor}){
    return(
        <div className=" sizeContainer card ">
            <div>
            {doctor.name} 
            </div>

            <div>
             {doctor.description}
            </div>
            
        
        </div>
    )
}