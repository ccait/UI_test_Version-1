import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {useNavigate} from 'react-router-dom';
import CreateDB from "./CreateDB";
import CreateTable from "./CreateTable";
import DisplayDB from "./DisplayDB";
import CreateAlgoTable from "./CreateAlgoTable";
import DeleteDB from "./DeleteDB";
import Start from "./Start";
import HPCRResult from "./HPCRResult";
import { Menu } from 'antd';
import {SnippetsFilled, DeleteFilled, EditFilled, ControlFilled, PlayCircleFilled, DatabaseFilled} from '@ant-design/icons';



function HPCR(){
    const navigate = useNavigate();
    return(
        <div style={ {display:'flex', flexDirection:'row'}}>
            <Menu
            theme="light"
            onClick={({key}) => {
                navigate(key);
            }
            }
            items={[
                {label: "Create Database", key:'/hpcr/createDB', icon:<SnippetsFilled />},
                {label: "Upload Tables", key:'/hpcr/updateDB',icon:<EditFilled />},
                {label: "Display Current Database", key:'/hpcr/displayDB', icon:<DatabaseFilled />},
                {label: "Delete Database", key:'/hpcr/deleteDB',icon:<DeleteFilled />},
                {label: "Specify Algo", key:'/hpcr/createAlgo',icon:<ControlFilled />},
                {label: "Start", key:'/hpcr/start/',icon:<PlayCircleFilled />}
            ]}>

            </Menu>
            <HPCRContent/>

        </div>
    );
};

function HPCRContent(){
    return (
        <div>
            <Routes>
            <Route path="createDB" element={<CreateDB/>} />
              <Route path="updateDB" element={<CreateTable/>} />
              <Route path="displayDB" element={<DisplayDB/>} />
              <Route path="deleteDB" element={<DeleteDB/>} />
              <Route path="createAlgo" element={<CreateAlgoTable/>} />
              <Route path="start" element={<Start/>} />
              <Route path="result" element={<HPCRResult/>}/>
            </Routes>
            
        </div>
    );

};
export default HPCR;
