import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';
import '../../styles/common.scss';
// import LoginForm from './LoginForm';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      idValue: '',
      pwValue: '',
      isValid: false,
    };
  }

  handleIdInput = e => {
    this.setState({
      idValue: e.target.value,
    });
  };

  handlePwInput = e => {
    this.setState({
      pwValue: e.target.value,
    });
  };

  checkValid = e => {
    const { idValue, pwValue } = this.state;
    const validId = idValue.includes('@');
    const validPw = pwValue.length >= 6;
    validId && validPw
      ? this.setState({ isValid: true })
      : this.setState({ isValid: false });
  };

  loginValidation = () => {
    this.state.isValid
      ? this.props.history.push('/main')
      : (this.state.idValue = ''); // 여기서부턴 유효성 검사 추후 추가 예정
    this.state.pwValue = '';
    this.state.alert =
      '입력한 사용자 이름을 사용하는 계정을 찾을 수 없습니다. 사용자 이름을 확인하고 다시 시도하세요.';
  };
  enterValidation = e => {
    if (e.key === 'Enter' && this.state.isValid) {
      this.props.history.push('/Main-KyungHyun');
    }
  };

  render() {
    const { idValue, pwValue } = this.state;
    return (
      <div className="KyungHyunLogin">
        <header>
          <h1>
            <b>instagram</b>
          </h1>
          <div className="main-function">
            <form className="login-form" method="POST">
              <input
                className="id"
                placeholder="전화번호, 사용자 이름 또는 이메일"
                type="text"
                onChange={this.handleIdInput}
                onKeyUp={this.checkValid}
                onKeyDown={this.enterValidation}
                value={idValue}
                name="idValue"
              />

              <input
                className="pw"
                placeholder="비밀번호"
                type="password"
                onChange={this.handlePwInput}
                onKeyUp={this.checkValid}
                onKeyDown={this.enterValidation}
                value={pwValue}
                name="pwValue"
              />
              <button
                className={this.state.isValid ? 'valid' : 'login'}
                type="button"
                onClick={this.loginValidation}
              >
                <div>로그인</div>
              </button>
              <div className="else">
                <div className="line" />
                <div className="text-else">또는</div>
                <div className="line" />
              </div>
              <div className="login-box">
                <a className="fb-login" href="https://bit.ly/3A8zOJw">
                  <span className="fb-login-icon" />
                  <span className="fb-login-text">Facebook으로 로그인</span>
                </a>
              </div>
            </form>
            <p>{this.state.alert}</p>
            <a className="forgot-pw" href="https://bit.ly/3k5tzjV" tabIndex={0}>
              비밀번호를 잊으셨나요?
            </a>
          </div>
        </header>
        <div className="sign-in">
          <p className="ask-have-account">
            계정이 없으신가요?
            <a className="underline" href="https://bit.ly/3lAcNt1">
              <span>가입하기</span>
            </a>
          </p>
        </div>
        <div className="download-app">
          <p className="download-app-text">앱을 다운로드하세요.</p>
          <div className="download-link-box">
            <a className="apple-download-link" href="https://apple.co/3C9n1XB">
              <img
                className="download-img"
                src="https://bit.ly/3htHluZ"
                alt="App Store"
              />
            </a>
            <a href="https://bit.ly/38ZWLlZ">
              <img
                className="download-img"
                src="https://bit.ly/3nzQvtE"
                alt="Google Play"
              />
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
