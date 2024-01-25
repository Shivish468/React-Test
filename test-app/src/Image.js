function Image( props ) {
    return ( 
        <div className="image-box">
            <img alt="" src={props.src} />
        </div>
    );    
}
export default Image;