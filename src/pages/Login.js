import React from 'react';
import {Button, Row, Col, Form, Input, Checkbox} from 'antd';
import logo from '../assets/logo.png';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

function Login() {
  return (
    <div className="login-root">
      <Row>
        <Col className="login-container" span={12}>
          <img style={{maxWidth: '50%', maxHeight: '50%'}} src={logo} alt="HelplineSOS logo" />

          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: true,
            }}
            // onFinish={onFinish}
            onFinish={() => console.log("finished")}
          >
            <Form.Item
              name="username"
              rules={[
                {
                  required: true,
                  message: 'Please input your Username!',
                },
              ]}
            >
              <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
              className="login-password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your Password!',
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
        </Col>
        <Col span={12}>Insert filler image/text here</Col>
      </Row>
    </div>
  );
}

export default Login;
