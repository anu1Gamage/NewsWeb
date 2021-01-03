import React, { useState } from 'react';
import {
  Form,
  Input,
  Tooltip,
  Cascader,
  Select,
  Row,
  Col,
  Checkbox,
  Button,
  AutoComplete,
} from 'antd';
import { QuestionCircleOutlined } from '@ant-design/icons';
import '../../App.css';
import '../Registation/Registation.css';


const { Option } = Select;
const AutoCompleteOption = AutoComplete.Option;

const formItemLayout = {
    labelCol: {
      xs: { span: 24 },
      sm: { span: 8 },
    },
    wrapperCol: {
      xs: { span: 24 },
      sm: { span:16 },
    },
  };
  const tailFormItemLayout = {
    wrapperCol: {
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
  };

  

export default function Registation(){

    const RegistrationForm = () => {
        const [form] = Form.useForm();
    };
      
        const onFinish = values => {
          console.log('Received values of form: ', values);
        };
      
        const prefixSelector = (
          <Form.Item name="prefix" noStyle>
            <Select style={{ width: 70 }}>
              <Option value="94">+94</Option>
              <Option value="87">+87</Option>
            </Select>
          </Form.Item>
        );
      
        const [autoCompleteResult, setAutoCompleteResult] = useState([]);
      
        const onWebsiteChange = value => {
          if (!value) {
            setAutoCompleteResult([]);
          } else {
            setAutoCompleteResult(['.com', '.org', '.net'].map(domain => `${value}${domain}`));
          }
        };
      
        const websiteOptions = autoCompleteResult.map(website => ({
          label: website,
          value: website,
        }));
      



    return (
        <>
        <Row className="form-v4">
	        <div className="page-content">
		        <div className="form-v4-content">
			        <div className="form-left">
				        <h4 className="form-left-heading">INFOMATION</h4>
				        <p className="text-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed. Diam volutpat commodo.</p>
				        <p className="text-2"><span>Eu ultrices:</span> Vitae auctor eu augue ut. Malesuada nunc vel risus commodo viverra. Praesent elementum facilisis leo vel.</p>
				        <div className="form-left-last">
                        <Button type="primary"><a>Have an account</a></Button>
				        </div>
			        </div>

                    <div className="form-details">
                        <h4>REGISTER FORM</h4>
                        <div class="form-group">
                            <Form
                                {...formItemLayout}
                               
                                name="register"
                                onFinish={onFinish}
                                scrollToFirstError
                                >
                                <Form.Item
                                    name="email"
                                    label="E-mail"
                                    rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    name="password"
                                    label="Password"
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                    ]}
                                    hasFeedback
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="confirm"
                                    label="Confirm Password"
                                    dependencies={['password']}
                                    hasFeedback
                                    rules={[
                                    {
                                        required: true,
                                        message: 'Please confirm your password!',
                                    },
                                    ({ getFieldValue }) => ({
                                        validator(rule, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject('The two passwords that you entered do not match!');
                                        },
                                    }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>

                                <Form.Item
                                    name="nickname"
                                    label={
                                    <span>
                                        Nickname&nbsp;
                                        <Tooltip title="What do you want others to call you?">
                                        <QuestionCircleOutlined />
                                        </Tooltip>
                                    </span>
                                    }
                                    rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                                >
                                    <Input />
                                </Form.Item>

                                

                                <Form.Item
                                    name="phone"
                                    label="Phone Number"
                                    rules={[{ required: true, message: 'Please input your phone number!' }]}
                                >
                                    <Input addonBefore={prefixSelector} style={{ width: '100%' }} />
                                </Form.Item>

                                

                                <Form.Item label="Captcha" extra="We must make sure that your are a human.">
                                    <Row gutter={8}>
                                    <Col span={12}>
                                        <Form.Item
                                        name="captcha"
                                        noStyle
                                        rules={[{ required: true, message: 'Please input the captcha you got!' }]}
                                        >
                                        <Input />
                                        </Form.Item>
                                    </Col>
                                    <Col span={12}>
                                        <Button>Get captcha</Button>
                                    </Col>
                                    </Row>
                                </Form.Item>

                                <Form.Item
                                    name="agreement"
                                    valuePropName="checked"
                                    rules={[
                                    {
                                        validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject('Should accept agreement'),
                                    },
                                    ]}
                                    {...tailFormItemLayout}
                                >
                                    <Checkbox>
                                    I have read the <a href="">agreement</a>
                                    </Checkbox>
                                </Form.Item>
                                <Form.Item {...tailFormItemLayout}>
                                    <Button type="primary" htmlType="submit">
                                    Register
                                    </Button>
                                </Form.Item>
                                </Form>

                        </div>

                    </div>
                </div>
             </div>
        </Row>

        </>
    )
}


