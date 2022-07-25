


import logo from "../assets/logo.jpg"
import "./header.css"
import React,{useState} from "react";
import { Modal, Button } from 'antd';
import 'antd/dist/antd.css';


import  "../views/home.css"
import { Form, Input, Checkbox } from 'antd';
import { MailFilled, LockOutlined , UserOutlined,PhoneOutlined } from '@ant-design/icons';



const Header = () => {
        const onFinish = (values) => {
          console.log('Success:', values);
        };
      
        const onFinishFailed = (errorInfo) => {
          console.log('Failed:', errorInfo);
        };
      
        const [isModalVisible, setIsModalVisible] = useState(false);
        const [ismyModalVisible, setIsmyModalVisible] = useState(false);
        const showModal = () => {
          setIsModalVisible(true);
        };
      
        const handleOk = () => {
          setIsModalVisible(false);
        };
      
        const handleCancel = () => {
          setIsModalVisible(false);
          // signign
          
      
      
        };
      
        const showMyModal = () => {
          setIsmyModalVisible(true);
      
        };
        const myModalOk = () => {
          setIsmyModalVisible(false);
        };
        const myModalCancel = () => {
          setIsmyModalVisible(false);
          
      
      
        };
        return (
        <div className="header">
                <img src={logo}  style={{width:"20%" }}/>
                <div className="navbar-right">
                        <div className="home-bar">
                                {/* <a href="../">Home</a>
                                <a href="../about">About us</a>
                                <a href="/login">Pharmacies</a> */}
                        </div>
                        <div className="sign-up">

                                
                                
                                
                        
                                <a href="#"onClick={showModal}>Sign up</a>
                                <a href="# "onClick={showMyModal}>Login</a>
                                <div className="search-div">
                                <Modal title="PLEASE REGISTER HERE!!!!" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}   style={{  backgroundColor: "black" }}>
      
      
        
      <Form

name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"

style={{

marginTop:"10px",
marginLeft: "50px",
color: "white"}}

>
<Form.Item
label=""
name="username"
rules={[{ required: true, message: 'Please input your username!' }]}
style={{ width: "352px",  }}
>
<Input prefix={<UserOutlined />} placeholder=" please enter your username " />
</Form.Item>
<Form.Item
label=""
name="id"
rules={[{ required: true, message: 'Please input your id!' }]}
style={{ width: "352px",  }}
>
<Input prefix={<MailFilled className="site-form-item-icon" />} placeholder=" lpease enter your id " type="id" />

</Form.Item>
<Form.Item
label=""
name="number"
rules={[{ required: true, message: 'Please enter your phone number' }]}
style={{ width: "352px",  }}
>
<Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="  please enter your phone number" type="string" />
</Form.Item>



<Form.Item
label=""
name="password"
rules={[{ required: true, message: 'Please enter your password!' }]}
style={{ width: "352px",  }}
>
<Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="please enter  password" type="password" />}
type="password"
placeholder="Password"
/>
</Form.Item>

{/* <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
<Checkbox>Remember me</Checkbox>
</Form.Item> */}

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
<Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"black" }} >
 Submit
</Button>
</Form.Item>
</Form>

   </Modal>
   <Modal title=" Login here HERE!!" visible={ismyModalVisible} onOk={myModalOk} onCancel={myModalCancel}  style={{  backgroundColor: "black" }}>
      
      
      
         <Form

name="basic"
labelCol={{ span: 8 }}
wrapperCol={{ span: 16 }}
initialValues={{ remember: true }}
onFinish={onFinish}
onFinishFailed={onFinishFailed}
autoComplete="off"

style={{
 
  marginTop:"10px",
  marginLeft: "50px",
  color: "white"}}

>


<Form.Item
label=""
name="number"
rules={[{ required: true, message: 'Please enter your phone number' }]}
style={{ width: "352px",  }}
>
<Input prefix={<PhoneOutlined className="site-form-item-icon" />} placeholder="  please enter your phone number" type="string" />
</Form.Item>


    
<Form.Item
  label=""
  name="password"
  rules={[{ required: true, message: 'Please enter your password!' }]}
  style={{ width: "352px",  }}
>
  <Input.Password  

prefix={<LockOutlined className="site-form-item-icon" placeholder="email or phone number" type="email" />}
type="password"
placeholder="Password"
/>
</Form.Item>

<Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
  <Checkbox>Remember me</Checkbox>
</Form.Item>

<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
  <Button type="primary" htmlType="submit"style={{ width: "160px", height: "40px", marginLeft: "2%", marginTop: "1px" ,background:"black" }} >
    Submit
  </Button>
</Form.Item>
</Form>

      </Modal>
                                </div>
                        </div>
                </div>
        </div>)
}
export default Header;