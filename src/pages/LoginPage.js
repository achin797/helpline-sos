import React from 'react';
import {Row, Col} from 'antd';
import logo from '../assets/logo.png';
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";

function LoginPage({register}) {

  return (
    <div className="login-root">
      <Row>
        <Col className="login-container" span={12}>
          <img style={{maxWidth: '50%', maxHeight: '50%'}} src={logo} alt="HelplineSOS logo" />
          {register ? (<RegistrationForm/>) : (<LoginForm/>)}
        </Col>
        <Col span={12}>Insert filler image/text here</Col>
      </Row>
    </div>
  );
}

export default LoginPage;
