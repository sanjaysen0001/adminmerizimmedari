import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  FormGroup,
  Form,
  Input,
  Button,
  Label,
} from "reactstrap";
import fgImg from "../../../assets/img/pages/forgot-password.png";
import { history } from "../../../history";
import "../../../assets/scss/pages/authentication.scss";
import { Route } from "react-router-dom";
import OtpInput from "react-otp-input";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

class ForgotPassword extends React.Component {
  state = {
    mobile: "",
    email: "",
    errorValidation: "please enter correct mobile number",
    isError: false,
    forgetScreen: false,
    emailotp: "",
    verifyOTP: "",
    forgetpass: false,
    newPass: "",
    confirmPass: "",
  };
  handleChangePassword = (e) => {
    e.preventDefault();

    if (this.state.newPass === this.state.confirmPass) {
      const LatestPass = {
        password: this.state.newPass,
        cnfmPassword: this.state.confirmPass,
      };
      axiosConfig
        .post(`/admin/updatePassword/${this.state.adminId}`, LatestPass)
        .then((response) => {
          console.log(response.data);
          swal("Pasword Change SuccessFully");
          this.props.history.push("/pages/login");
        })
        .catch((error) => {
          swal("Something Went Wrong");
        });
    } else {
      swal("Both Password  Must be same!");
    }
  };
  handlechange = (e) => {
    e.preventDefault();
    this.setState({ isError: false });
    this.setState({ [e.target.name]: e.target.value });
  };

  handleVerifyOtp = async (e) => {
    e.preventDefault();

    const payload = {
      otp: this.state.emailotp,
    };
    axiosConfig
      .post(`/admin/varify-otp/${this.state.adminId}`, payload)
      .then((response) => {
        swal("OTP has been sent to Your Mail Id", "Please Verify OTP");
        this.setState({ forgetpass: true });
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  handleOtp = async (e) => {
    e.preventDefault();
    const payload = {
      email: this.state.email,
    };
    axiosConfig
      .post("/admin/forgetPassword", payload)
      .then((response) => {
        // debugger;
        console.log(response.data.data._id);
        this.setState({ adminId: response.data.data._id });
        this.setState({ forgetScreen: true });
        // this.props.history.push(
        //   "/pages/otp-verify/?&mobile=" + mobile + "&id=" + response.data._id
        // );
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  render() {
    return (
      <Row className="m-0 justify-content-center">
        <Col
          sm="8"
          xl="7"
          lg="10"
          md="8"
          className="d-flex justify-content-center"
        >
          <Card className="bg-authentication rounded-0 mb-0 w-100">
            <Row className="m-0">
              <Col
                lg="6"
                className="d-lg-block d-none text-center align-self-center"
              >
                <img src={fgImg} alt="Img" />
              </Col>
              {this.state.forgetScreen ? (
                this.state.forgetpass ? (
                  <>
                    <Col lg="6" md="12" className="p-0">
                      <Card className="rounded-0 mb-0 px-2 py-1">
                        <CardHeader className="pb-1">
                          <CardTitle>
                            <h4 className="mb-0">Enter New Password</h4>
                          </CardTitle>
                        </CardHeader>
                        {/* <p className="px-2 auth-title">
       Please enter your Email and we'll send you OTP, for reset your password.
     </p> */}
                        <CardBody className="pt-1 pb-0">
                          <Form>
                            <Label>New Password</Label>
                            <Input
                              type="password"
                              name="newPass"
                              value={this.state.newPass}
                              placeholder="Password"
                              onChange={this.handlechange}
                            />
                            <Label>Confirm Password</Label>
                            <Input
                              type="password"
                              name="confirmPass"
                              placeholder="Confirm Password"
                              value={this.state.confirmPass}
                              onChange={this.handlechange}
                            />
                            <div className="float-md-right d-block my-2">
                              <Button.Ripple
                                color="primary"
                                type="submit"
                                className="px-75 btn-block"
                                onClick={this.handleChangePassword}
                              >
                                Change Password
                              </Button.Ripple>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col lg="6" md="12" className="p-0">
                      <Card className="rounded-0 mb-0 px-2 py-1">
                        <CardHeader className="pb-1">
                          <CardTitle>
                            <h4 className="mb-0">Enter Your OTP</h4>
                          </CardTitle>
                        </CardHeader>
                        {/* <p className="px-2 auth-title">
       Please enter your Email and we'll send you OTP, for reset your password.
     </p> */}
                        <CardBody className="pt-1 pb-0">
                          <Form>
                            <OtpInput
                              containerStyle="true inputdata"
                              inputStyle="true inputdataone"
                              className="otpinputtype"
                              value={this.state.emailotp}
                              name="emailotp"
                              onChange={(otp) =>
                                this.setState({ emailotp: otp })
                              }
                              numInputs={6}
                              renderSeparator={<span>-</span>}
                              renderInput={(props) => (
                                <input className="inputs" {...props} />
                              )}
                            />
                            <div className="float-md-right d-block mb-1">
                              <Button.Ripple
                                color="primary"
                                type="submit"
                                className="px-75 btn-block"
                                onClick={this.handleVerifyOtp}
                              >
                                Verify OTP
                              </Button.Ripple>
                            </div>
                          </Form>
                        </CardBody>
                      </Card>
                    </Col>
                  </>
                )
              ) : (
                <>
                  {" "}
                  <Col lg="6" md="12" className="p-0">
                    <Card className="rounded-0 mb-0 px-2 py-1">
                      <CardHeader className="pb-1">
                        <CardTitle>
                          <h4 className="mb-0">Recover your password</h4>
                        </CardTitle>
                      </CardHeader>
                      <p className="px-2 auth-title">
                        Please enter your Email and we'll send you OTP, for
                        reset your password.
                      </p>
                      <CardBody className="pt-1 pb-0">
                        <Form>
                          <FormGroup className="form-label-group">
                            <Input
                              type="email"
                              name="email"
                              value={this.state.email}
                              onChange={this.handlechange}
                              placeholder="Email"
                              required
                            />
                            <Label>Email</Label>
                          </FormGroup>
                          <div className="float-md-left d-block mb-1">
                            <Route
                              render={({ history }) => (
                                <Button.Ripple
                                  color="primary"
                                  outline
                                  className="px-75 btn-block"
                                  onClick={() =>
                                    this.props.history.push("/pages/login")
                                  }
                                >
                                  Back to Login
                                </Button.Ripple>
                              )}
                            />
                          </div>
                          <div className="float-md-right d-block mb-1">
                            <Button.Ripple
                              color="primary"
                              type="submit"
                              className="px-75 btn-block"
                              onClick={this.handleOtp}
                            >
                              Recover Password
                            </Button.Ripple>
                          </div>
                        </Form>
                      </CardBody>
                    </Card>
                  </Col>
                </>
              )}
            </Row>
          </Card>
        </Col>
      </Row>
    );
  }
}
export default ForgotPassword;
