import './PetCard.css';
export default function PetCard({pet,customer}){
    return(
        <div className=" sizeContainer card ">
            <div>
            Pet Owner : {customer.firstName} {customer.lastName}
            </div>

            <div>
             Pet Name : {pet.petName}
            </div>
            
        
        </div>
    )
}