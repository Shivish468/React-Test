import Image from "./Image";

function DogCard(props) {
    let title = "This is a DogCard";
    return (
        <>
        <h2 style={
            {
                fontSize: '15px', 
                color: 'blue'
            }
        }>
            {title}
        </h2>
        <div>
            <h3>{props.name}</h3>
            <Image src={props.image} />
        </div>
        </>
    );
}
export default DogCard;