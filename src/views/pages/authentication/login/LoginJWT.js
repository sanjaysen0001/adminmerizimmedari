import React from "react";
import { Link } from "react-router-dom";

import { CardBody, FormGroup, Form, Input, Button, Label } from "reactstrap";
import "../../../../assets/scss/pages/authentication.scss";
import Checkbox from "../../../../components/@vuexy/checkbox/CheckboxesVuexy";
import { Mail, Lock, Check } from "react-feather";
import { loginWithJWT } from "../../../../redux/actions/auth/loginActions";
import { connect } from "react-redux";
import { Route } from "react-router-dom";
import OtpInput from "react-otp-input";
import swal from "sweetalert";
import axiosConfig from "../../../../axiosConfig";
class LoginJWT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailotp: "",
      ShowScreen: false,
      showDashBoard: false,
    };
  }

  // handleSubmitOTP = async (e) => {
  //   e.preventDefault();
  //   let adminId = localStorage.getItem("AdminId");
  //   let payload = {
  //     otp: this.state.emailotp,
  //   };
  //   await axiosConfig
  //     .post(`/admin/varify-otp/${adminId}`, payload)
  //     .then((res) => {
  //       if (res.status == 200) {
  //         localStorage.setItem("ad-token", res.data.token);
  //         localStorage.setItem("AdminData", JSON.stringify(res.data));
  //         swal("Submittted Successfully");
  //         window.location.replace("/#");
  //       } else if (res.status == 204) {
  //         swal("Something Went wrong");
  //       } else {
  //         swal("Something Went wrong");
  //       }
  //     })
  //     .catch((err) => {
  //       swal("Invalid OTP");
  //     });
  // };
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  handleLogin = (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
      password: this.state.password,
    };
    axiosConfig
      .post("/admin/signin", payload)
      .then((response) => {
        if (response.status === 200) {
          // this.setState({ ShowScreen: true });
          localStorage.setItem("ad-token", response.data.Admin?.token);
          localStorage.setItem("AdminData", JSON.stringify(response.data));
          localStorage.setItem("AdminId", response.data.Admin._id);
          console.log(response.data);
          window.location.replace("/#");
          swal("Login Successfully");
        } else if (response.status === 204 || response.status === 400) {
          swal("Some Thing went Wrong");
        } else {
          swal("Some Thing went Wrong");
        }
      })

      .catch((error) => {
        swal(
          "error!",
          "Invalied! Please Enter Valid Email. or Password",
          "error"
        );
      });
    window.location.replace("/#");
  };
  render() {
    return (
      <React.Fragment>
        <CardBody className="pt-1">
          {/* {this.state.ShowScreen ? (
            <>
              <OtpInput
                containerStyle="true inputdata"
                inputStyle="true inputdataone"
                className="otpinputtype"
                value={this.state.emailotp}
                name="emailotp"
                onChange={(otp) => this.setState({ emailotp: otp })}
                numInputs={6}
                renderSeparator={<span>-</span>}
                renderInput={(props) => <input className="inputs" {...props} />}
              />
              <div className="float-md-right d-block my-2">
                <Button
                  onClick={this.handleSubmitOTP}
                  color="primary"
                  className="px-75 btn-block"
                >
                  Verify OTP
                </Button>
              </div>
            </>
          ) : ( */}
          <>
            <Form onSubmit={this.handleLogin}>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Input
                  type="email"
                  name="email"
                  placeholder="E-mail "
                  value={this.state.email}
                  onChange={this.handlechange}
                  // required
                />
                <div className="form-control-position">
                  <Mail size={15} />
                </div>
                <Label>Email </Label>
              </FormGroup>
              <FormGroup className="form-label-group position-relative has-icon-left">
                <Input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={this.handlechange}
                  // required
                />
                <div className="form-control-position">
                  <Lock size={15} />
                </div>
                <Label>Password</Label>
              </FormGroup>
              <FormGroup className="d-flex justify-content-between align-items-center">
                <Checkbox
                  color="primary"
                  icon={<Check className="vx-icon" size={16} />}
                  label="Remember me"
                  defaultChecked={false}
                  onChange={this.handleRemember}
                  // required
                />
                <div className="float-right">
                  <Link to="/pages/forgot-password">Forgot Password?</Link>
                </div>
              </FormGroup>
              <div className="d-flex justify-content-between">
                <Route
                  render={({ history }) => (
                    <Button.Ripple color="primary" type="submit">
                      Login
                    </Button.Ripple>
                  )}
                />
              </div>
            </Form>
          </>
          {/* )} */}
        </CardBody>
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    values: state.auth.login,
  };
};
export default connect(mapStateToProps, { loginWithJWT })(LoginJWT);
