import React, { useCallback, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
  CCol,
  CRow,
  CCard,
  CCardHeader,
  CCardBody,
  CForm,
  CFormGroup,
  CLabel,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupAppend,
  CInputGroupText,
  CInvalidFeedback,
  CSelect,
  CButton,
} from "@coreui/react";
import toast from "react-hot-toast";
import { Loading } from "../../components/loading";
import { AttractivePlaceAction } from "../../redux/actions";

const UserForm = () => {
  const [loading, setLoading] = useState(false);

  const history = useHistory();

  const dispatch = useDispatch();

  const item = useSelector((store) => store.AttractivePlaceReducer.item);

  const {
    errors,
    formState: { isSubmitted, isDirty, isValid },
    handleSubmit,
    register,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(
      yup.object().shape({
        name: yup.string().required(),
        country: yup.string().required(),
        price: yup
          .number()
          .positive()
          .test({
            name: "price",
            message: "${path} must be a currency amount with two decimals",
            test: (value) => (value + "").match(/^\d+\.\d{0,2}$/),
          })
          .required(),
        stars: yup
          .number()
          .positive()
          .test({
            name: "stars",
            message: "${path} must be a currency amount with two decimals",
            test: (value) => (value + "").match(/^\d+\.\d{0,1}$/),
          })
          .required(),
      })
    ),
  });

  const { params } = useRouteMatch();

  const fetchData = useCallback(
    (id) => {
      setLoading(true);

      dispatch(AttractivePlaceAction.show(id))
        .then((res) => {
          toast.success(res.message);
          setLoading(false);
        })
        .catch((err) => {
          toast.error(err.message);
          setLoading(false);
        });
    },
    [dispatch]
  );

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("country", data.country);
    formData.append("image", data.image);
    formData.append("price", data.price);
    formData.append("stars", data.stars);
    formData.append("status", data.status);

    dispatch(
      data.id === ""
        ? AttractivePlaceAction.save(formData)
        : AttractivePlaceAction.edit(data.id, formData)
    )
      .then((res) => {
        toast.success(res.message);
        reset();
      })
      .catch((err) => {
        toast.error(err.message);
        reset(data);
      });
  };

  useEffect(() => {
    if (params.id) fetchData(params.id);
  }, [params, fetchData]);

  useEffect(() => (item ? reset(item) : reset()), [item, reset]);

  return (
    <CForm onSubmit={handleSubmit(onSubmit)}>
      <CRow>
        {loading ? (
          <CCol>
            <CCard>
              <CCardHeader className="card-header-flex">
                <strong>Atractivo turístico</strong>
              </CCardHeader>
              <CCardBody>
                <Loading />
              </CCardBody>
            </CCard>
          </CCol>
        ) : (
          <React.Fragment>
            <CInput type="hidden" name="id" innerRef={register()} />

            <CCol md="7">
              <CCard>
                <CCardHeader className="card-header-flex">
                  <strong>Atractivo turístico</strong>
                </CCardHeader>
                <CCardBody>
                  <CFormGroup>
                    <CLabel>
                      Nombre <span className="text-danger">*</span>
                    </CLabel>
                    <CInput
                      name="name"
                      placeholder="Hawaii"
                      invalid={errors.name && true}
                      innerRef={register()}
                    />
                    <CInvalidFeedback>{errors.name?.message}</CInvalidFeedback>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>
                      País <span className="text-danger">*</span>
                    </CLabel>
                    <CInput
                      name="country"
                      placeholder="USA"
                      invalid={errors.country && true}
                      innerRef={register()}
                    />
                    <CInvalidFeedback>
                      {errors.country?.message}
                    </CInvalidFeedback>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>Imagen</CLabel>
                    <CInput
                      name="image"
                      placeholder="https://"
                      innerRef={register()}
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>
                      Precio <span className="text-danger">*</span>
                    </CLabel>
                    <CInputGroup className={errors.price ? "is-invalid" : null}>
                      <CInputGroupPrepend>
                        <CInputGroupText>S/.</CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        name="price"
                        placeholder="0.00"
                        invalid={errors.price && true}
                        innerRef={register()}
                      />
                    </CInputGroup>
                    <CInvalidFeedback>{errors.price?.message}</CInvalidFeedback>
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel>
                      Estrellas <span className="text-danger">*</span>
                    </CLabel>
                    <CInput
                      name="stars"
                      placeholder="0.0"
                      invalid={errors.stars && true}
                      innerRef={register()}
                    />
                    <CInvalidFeedback>{errors.stars?.message}</CInvalidFeedback>
                  </CFormGroup>
                </CCardBody>
              </CCard>
            </CCol>
            <CCol md="5">
              <CCard>
                <CCardHeader className="d-flex align-items-center justify-content-between">
                  <strong>Estado del producto</strong>
                </CCardHeader>
                <CCardBody>
                  <CFormGroup>
                    <CSelect custom name="status" innerRef={register()}>
                      <option value="ACTIVE">Activo</option>
                      <option value="DRAFT">Borrador</option>
                    </CSelect>
                  </CFormGroup>

                  <CButton
                    type="submit"
                    color="success"
                    disabled={!isDirty || !isValid || isSubmitted}
                  >
                    {!params.id
                      ? isSubmitted
                        ? "Guardando..."
                        : "Guardar"
                      : isSubmitted
                      ? "Actualizando..."
                      : "Actualizar"}
                  </CButton>
                  <CButton
                    type="reset"
                    color="dark"
                    variant="outline"
                    onClick={() => {
                      dispatch(AttractivePlaceAction.clean());
                      history.push("/attractive-places");
                    }}
                  >
                    Cancelar
                  </CButton>
                </CCardBody>
              </CCard>
            </CCol>
          </React.Fragment>
        )}
      </CRow>
    </CForm>
  );
};

export default UserForm;
