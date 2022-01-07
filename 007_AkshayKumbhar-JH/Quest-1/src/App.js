import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

export default function App() {
  return (
    <>
      <MyChatApp />
    </>
  );
}

function MyChatApp() {

  const parent = "container-fluid";
  const header = "row bg-secondary text-light";
  const headstyle = "d-flex align-items-center p-3";
  const inputfield= "row mt-2";
  const chatstyle1 = "alert alert-secondary border-secondary text-light";
  const chatstyle2 = "text-end alert alert-secondary border-secondary text-dark";
  const studentName = "Akshay Kumbhar";
  const studentId= "210940520007";
  
  const [list, setList] = useState([]);
  const [text, setText]= useState("");

  const getText = () => {
    let newText = e.target.value;
    setText(newText);
  };

  const sendMsg = () => {
    if(text !=="") {
      let newList = [...list, text];
      setList(newList);
    }
  };

  return (
    <div className={parent}>
      <div className={header}>
        <div className={headerstyle}>
            <h2>MyChatApp</h2>
            <h6 className="m-0 ms-2">
              by {studentName} / {studentId};
            </h6>
        </div>
      </div>
      <div className={inputfield}>
        <div>
          <input classname="w-75 p-4" style={{"borderRadius":"10px"}} type="text" placeholder='Lets Chat Here..' onChange={getText}/>
          <input classname="p-4 ms-2" style={{"borderRadius":"10px",width:"130px"}} type="button" value="SEND" onClick={sendMsg}/>
        </div>
      </div>
      <div>
        {list.map(item, index) => {
          if (index % 2 === 0) {
            return (
              <div key={index} className={chatstyle1}>{item}</div>
            );
          } else {
            return(
              <div key={index} className={chatstyle2}>{item}</div>
            );
          }
        }
      </div>
    </div>
  ); 
};

