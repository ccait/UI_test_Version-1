import React from "react";
import {useNavigate} from 'react-router-dom';
import { Menu } from 'antd';
import {PieChartOutlined,MailOutlined,DesktopOutlined} from '@ant-design/icons';

function Nav(){
    const navigate = useNavigate();
    return(
        <div>
            <Menu
            flex='auto'
            mode="horizontal"
            theme=" dark"
            onClick={({key}) => {
                navigate(key);
            }}
            items={[
                {label: "Home", key:'/', icon:<DesktopOutlined />},
                {label: "HPCR", key:'/hpcr/*', icon:<PieChartOutlined/>},
                {label: "Support", key:'/support', icon:<MailOutlined/>}
            ]}>
            </Menu>
        </div>
    );

}

export default Nav;