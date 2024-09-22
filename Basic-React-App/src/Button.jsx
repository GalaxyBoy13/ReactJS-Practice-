function handleClick(event){
    console.log("Hello, World!");
    console.log(event);
}
function handleMouseover(){
    console.log("Bye, World!");
}

function handleDblClick(){
    console.log("you double clicked");
}

export default function Button(){
    return (
    <div>
        <button onClick={handleClick}>Click me!</button>
        <p onMouseOver={handleMouseover}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laudantium sint non quibusdam hic rerum ipsa laboriosam voluptatum est quae natus asperiores, similique consequatur recusandae, nobis modi nulla incidunt dolore.</p>
        <button onDoubleClick={handleDblClick}>Double click me!</button>
    </div>
    );
}