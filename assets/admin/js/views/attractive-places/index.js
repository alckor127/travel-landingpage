import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  CCol,
  CRow,
  CCard,
  CCardBody,
  CCardHeader,
  CButton,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import toast from "react-hot-toast";
import { confirm } from "../../components/confirm";
import { Loading } from "../../components/loading";
import { AttractivePlaceAction } from "../../redux/actions";

const AttractivePlaces = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const data = useSelector((store) => store.AttractivePlaceReducer.data);

  const fetchData = useCallback(() => {
    setLoading(true);

    dispatch(AttractivePlaceAction.list({ status: ["ACTIVE", "DRAFT"] }))
      .then((res) => {
        toast.success(res.message);
        setLoading(false);
      })
      .catch((err) => {
        toast.error(err.message);
        setLoading(false);
      });
  }, [dispatch]);

  useEffect(() => fetchData(), [fetchData]);

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader className="d-flex align-items-center justify-content-between">
            <strong>Atractivos turísticos</strong>
            <div className="card-header-actions">
              <CButton
                color="primary"
                onClick={() => history.push("/attractive-places/new")}
              >
                Agregar
              </CButton>{" "}
              <CButton variant="ghost" color="dark">
                Importar
              </CButton>
            </div>
          </CCardHeader>
          <CCardBody>
            {loading ? (
              <Loading />
            ) : (
              <table border="1" width="100%">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>País</th>
                    <th>Precio</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 ? (
                    data.map((item, idx) => (
                      <tr key={idx}>
                        <td>{item.name}</td>
                        <td>{item.country}</td>
                        <td>{item.price}</td>
                        <td>
                          <CButton
                            color="dark"
                            size="sm"
                            onClick={() =>
                              history.push(`/attractive-places/edit/${item.id}`)
                            }
                          >
                            <CIcon name="bi-pencil" size="sm" />
                          </CButton>
                          <CButton
                            color="danger"
                            size="sm"
                            onClick={() => {
                              confirm(
                                "Remove record",
                                "Are you sure you want to remove this record?"
                              )
                                .then(() => {
                                  dispatch(
                                    AttractivePlaceAction.remove(item.id)
                                  )
                                    .then((res) => {
                                      toast.success(res.message);
                                    })
                                    .catch((err) => {
                                      toast.error(err.message);
                                    });
                                })
                                .catch(() => console.log("Confirm cancel"));
                            }}
                          >
                            <CIcon name="bi-trash" size="sm" />
                          </CButton>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="100">No hay registros.</td>
                    </tr>
                  )}
                </tbody>
              </table>
            )}
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default AttractivePlaces;
