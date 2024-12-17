import React, {useState} from 'react'

export default function ThemeChanger() {
    const [condition, setCondition] = useState(true);

    function changeTheme() {
        setCondition(!condition);
    }
    return (
    <div style={{backgroundColor: condition ? "white" : "black", color: condition ? "black" : "white"}}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia totam, molestias vero optio fuga voluptatum repellat quasi officia quam perferendis enim recusandae ipsam suscipit iure beatae. Aperiam aliquid consectetur harum temporibus molestias totam quis velit quasi fuga, soluta placeat voluptatum et nemo? Veniam enim eligendi ut eius, assumenda et.</p>
        <button onClick={changeTheme}>{condition ? "Switch to Dark Mode!" : "Switch to Light Mode!"}</button>
    </div>
)}




// import React, {useState} from 'react'
// export default function ThemeChanger() {
//     const [color, setColor] = useState("black");
//     const [bgColor, setBgColor] = useState("white");
//     const [condition, setCondition] = useState(true);
    
//     function setTheme() {
//         if(condition) {
//             setColor("white");
//             setBgColor("black");
//             setCondition(false);
//         }
//         else {
//             setColor("black");
//             setBgColor("white");
//             setCondition(true);
//         }
//     }

//   return (
//     <div style={{backgroundColor: bgColor, color: color}}>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid quia totam, molestias vero optio fuga voluptatum repellat quasi officia quam perferendis enim recusandae ipsam suscipit iure beatae. Aperiam aliquid consectetur harum temporibus molestias totam quis velit quasi fuga, soluta placeat voluptatum et nemo? Veniam enim eligendi ut eius, assumenda et.</p>
//         <button onClick={setTheme}>{condition ? "Switch to Dark Mode!" : "Switch to Light Mode!"}</button>
//     </div>
//   )
// }


