import { useState } from "react"
import "./Comment.css"
import CommentsForm from "./CommentsForm";


export default function Comment(){
    let [comments, setComments] = useState([{
        username: "@sk",
        remarks: "great job!",
        rating: 4
    }]);

    let addNewComment = (comment) => {
        setComments((currComments) => [...currComments, comment]);
        console.log("added new comment");
    };

    return (
    <>
    <div>
        <h3>All Comments!</h3>
        {comments.map((comments,idx)=>(
            <div className="comment" key={idx}>
            <span>{comments.remarks}</span>
            &nbsp;
            <span>(rating = {comments.rating})</span>
            <p>-{comments.username}</p>
        </div>
        ))}
        
    </div>
    <hr />
    <CommentsForm addNewComment={addNewComment}/>
    </>
    )
}