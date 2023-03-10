import React from 'react'
import {HeaderPage} from "../../components/Admin/"
import {TableVigilancia} from "../../components/Vigilancia/TableVigilancia"
import {CargaVigilancia} from "../Vigilancia"
import {useUser} from "../../hooks"
import {Button,Form} from "semantic-ui-react"
import { useFormik } from "formik";
import { Link, useLocation } from "react-router-dom";
import {ModalBasic} from "../../components/Common/ModalBasic"
import { useEffect,useState } from 'react'
import "./HomeAdmin.scss"
import Swal from "sweetalert2";

export function HomeAdmin() {
    const {getUsers,loading,users,setUsers,deleteUser,getempleadoId,auth} = useUser()
    const [titleModal, setTitleModal] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [contentModal, setContentModal] = useState(null);
    const [refetch, setRefetch] = useState(false)
    const { pathname } = useLocation();
    console.log(users)
    useEffect(() => {
        getUsers();
      }, []);
      
      
    const openCloseModal = () => {
        setShowModal((prev) => !prev);
      };
      const onRefetch = () => setRefetch((prev) => !prev);

      // const addUser = () => {
      //   setTitleModal("Nuevo Usuario");
      //   setContentModal(
      //     <AddUser
      //       onClose={openCloseModal}
      //       Refetch = {onRefetch}
      //       // addUser={addUser}
      //     />
      //   );
      //   openCloseModal();
      // };
      
      const onDeleteUser = async (data) => {
        try {
          Swal.fire({
            icon: "question",
            iconColor: "lightblue",
            title: "Eliminar Usuario",
            text: "¿Estas seguro que quieres eliminar este empleado?",
            showCancelButton: true,
            showConfirmButton: true,
            confirmButtonText: "confirmar",
            cancelButtonText: "cancelar",
            reverseButtons: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
          }).then(async (result) => {
            if (result.isConfirmed) {
              await deleteUser(data.id);
              console.log("hola mundo")
              window.location.reload()
              // setUsers(null);
    
              Swal.fire({
                title: "Empleado Eliminado!",
                text: "El empleado fue eliminado",
                icon: "success",
                showConfirmButton: true,
                timer: 3000,
              });
            }
          });
        } catch (error) {
          console.error(error);
        }
      };
      const formik = useFormik({
        // initialValues: initialValues(),
        // validationSchema: Yup.object(newSchame()),
        validateOnChange: false,
        onSubmit: async (formValue) => {
          try {
            } catch (error) {
            console.error(error);
          }
        },
      });
  return (
    <>
          
          <HeaderPage title="VIGILANCIAS"/>
          <div className='header-page-vigilancia'>
          <div className="formulario-buscar">
              <Form
                className="add-edit-user-form"
                onSubmit={formik.handleSubmit}
              >
                <div className="contenido-buscar-recargar">
                  <div className="contenido-formulario-buscar">
                    <div style={{ marginRight: "20px" }}>
                      <Form.Input
                        // name="num_doc"
                        placeholder="Id vigilancia"
                        type="number"
                        // value={formik.values.num_doc}
                        // onChange={formik.handleChange}
                        // error={formik.errors.num_doc}
                      />
                    </div>

                    <div className="boton-buscar">
                      <Button type="submit" content={"Buscar"} primary fluid />
                    </div>
                  </div>

                  <div>
                  </div>
                </div>
              </Form>
            </div>
              <div className='agregar'>
              <Button 
               as={Link}
               to={"/admin/carga/vigilancia"}
               active={pathname === "/admin/carga/vigilancia"}
              positive onClick={()=> <CargaVigilancia/>}>
                {"AGREGAR NUEVA VIGILANCIA"}
              </Button>
              </div>
              
         </div>
      <TableVigilancia 
                    // users={users}
                    // onDeleteUser={onDeleteUser}
      />
      <ModalBasic
            show={showModal}
            title={titleModal}
            children={contentModal}
            onClose={openCloseModal}
          />
    </>
  )
}
