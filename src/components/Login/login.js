import React,{useState} from 'react';
import {Link} from 'react-router-dom';
import "../Login/login.css"
import { Form, Input, Button, Checkbox, Row, Col, Select } from 'antd';

const layout = {
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 16,
  },
};

const Login = () => {
  const[username, setUserName] = useState("")
  const onFinish = values => {
    console.log('Success:', values);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  const handleLogin =() => {
    //Success
    localStorage.setItem("token",username)
    window.location = "/Public"
  }


  return (
    <React.Fragment>
        <Row>
            <Col span={10} className="left-col">
                <div className="left-col-2">
                <Button type="text" className="login-header">NewsWeb</Button>
                <h3 className="left-col-content"></h3>
                </div>    
            </Col>
            <Col span={14} className="right-col">
                <div className="top-row">
                    <div className="left-buttons">
                        <Button type="primary" className="reg-button">Not yet registered? Register Now</Button>
                        
                    </div>
                </div>
            
        <div className="login-field">
            <h2 style={{color:"#ffffff"}}>Login</h2>
        <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}  
      >
        <Input onChange={e => setUserName(e.target.value)} />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      
      <Form.Item {...tailLayout} name="remember" valuePropName="checked">
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit" style={{width:140}} onClick={handleLogin}>
          Login
        </Button>
        <Button type="text" className="forget-password">Forget Your Password?</Button>
      </Form.Item>
      <Form.Item {...tailLayout}>
      <Link className="register-now"> Or <a href="../../Registation/Registation">register now!</a></Link>
      </Form.Item>
    </Form>
    </div>
    </Col>
  </Row>
    </React.Fragment>
  );
};


export default Login