import React, { useEffect, useState } from "react";
import { Col, Row, Spinner } from "reactstrap";
import axiosConfig from "../../../axiosConfig";
import swal from "sweetalert";

const AnalyticsDashboard = () => {
  const [userSize, setUserSize] = useState(null);
  const [assetSize, setAssetSize] = useState(null);
  const [nomineeSize, setNomineeSize] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [assetRes, userRes, nomineeRes] = await Promise.all([
          axiosConfig.get("/admin/get-list"),
          axiosConfig.get("/user-list"),
          axiosConfig.get("/asset/nominee-list"),
        ]);

        setAssetSize(assetRes.data?.Field?.length || 0);
        setUserSize(userRes.data?.User?.length || 0);

        const oldList = nomineeRes.data?.NomineeList || [];
        const newList = oldList.flatMap((item) =>
          item.nominee.map((nominee) => ({ ...item, nominee }))
        );
        setNomineeSize(newList.length || 0);
      } catch (error) {
        swal("Something Went Wrong", error.message, "error");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Row className="match-height">
        <Col lg="4" md="12">
          <div className="cssforselectdashboarddiv">
            <button className="cssfordashboardbutton">
              <span>TOTAL Asset</span>
              <br />
              {loading ? (
                <Spinner size="sm" color="primary" />
              ) : (
                <span>{assetSize}</span>
              )}
            </button>
          </div>
        </Col>
        <Col lg="4" md="12">
          <div className="cssforselectdashboarddiv">
            <button className="cssfordashboardbutton">
              <span>TOTAL REGISTERED USER</span>
              <br />
              {loading ? (
                <Spinner size="sm" color="primary" />
              ) : (
                <span>{userSize}</span>
              )}
            </button>
          </div>
        </Col>
        <Col lg="4" md="12">
          <div className="cssforselectdashboarddiv">
            <button className="cssfordashboardbutton">
              <span>TOTAL Nominee</span>
              <br />
              {loading ? (
                <Spinner size="sm" color="primary" />
              ) : (
                <span>{nomineeSize}</span>
              )}
            </button>
          </div>
        </Col>
      </Row>
    </>
  );
};

export default AnalyticsDashboard;
