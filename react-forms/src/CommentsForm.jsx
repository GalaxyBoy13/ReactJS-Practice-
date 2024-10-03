import { useState } from "react"

export default function CommentsForm({addNewComment}){
    let [formData, setFormData] = useState({
        username:"",
        remarks:"",
        rating: 0
    });
    
    let handleInputChange = (event) =>{
        setFormData((currData) => {
            return {...currData, [event.target.name]:event.target.value};
        });
    };

    let handleSubmit = () =>{
        console.log(formData);
        addNewComment(formData);
        event.preventDefault();
        setFormData({
            username:"",
            remarks:"",
            rating: 0
        })
    }

    return(
        <div><h4>Give a Comment!</h4>
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label> <br />
            <input type="text" placeholder="username" value={formData.username} onChange={handleInputChange} id="username" name="username"/>
            <br /> <br />
            <label htmlFor="remarks">Remarks</label> <br />
            <textarea value={formData.remarks} placeholder="Add Remarks" onChange={handleInputChange} id="remarks" name="remarks"></textarea>
            <br /> <br />
            <label htmlFor="rating">Rating</label> <br />
            <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
            <br /> <br />
            <button>Add Comment</button>
        </form>
        </div>
    )
}