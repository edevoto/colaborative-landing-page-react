const Cards = (props) => {
    const imagen = 'https://picsum.photos/id/237/300/200';
    
    return (
         <div className="col-12 col-sm-6 col-md-3">
         <div className="card my-2">
             <img src={props.img} alt="" className="card-img-top" />
             <div className="card-body">
                 <h5 className="text-center">{props.title}</h5>
                 <p className="text-center">{props.cardContent}</p>
                 <div className="d-flex justify-content-center">
                     <button className="btn btn-primary">{props.btnContent}</button>
             </div>
         </div>
     </div>
     </div>
    )
}
export default Cards;