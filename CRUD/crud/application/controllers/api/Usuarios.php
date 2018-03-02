<?php

    defined('BASEPATH') OR exit('No direct script access allowed');
    require APPPATH . '/libraries/REST_Controller.php';

    class Usuarios  extends REST_Controller
    {
        public function __construct(){
            parent::__construct();

            $this->load->database();
            $this->load->helper('url');
        }

        public function obtener_get($id=0){
            $usuarios = [];
            if($id>0)
                $this->db->where('id', $id);
            $usuarios = $this->db->get('usuarios')->result_array();

            if(!empty($usuarios)){
                $this->set_response([
                    'status' => TRUE,
                    'message' => '',
                    'result' => $usuarios],
                    REST_Controller::HTTP_OK); //200 
            }
            else {
                $this->set_response([
                    'status' => FALSE,
                    'message' => 'Usuarios no encontrados',
                    'result' => []],
                    REST_Controller::HTTP_NOT_FOUND); //404 
            }
        }

        public function eliminar_delete($id){
            $this->db->where('id',$id);
            $this->db->delete('usuarios');

            $this->set_response([
                    'id' => $id,
                    'message' => 'Registro eliminado',
                    'result' => []],
                    REST_Controller::HTTP_OK); //202
        }

        public function insertar_post(){
            $data = file_get_contents("php://input");
            $usuarios = json_decode($data);
            $this->db->insert('usuarios',$usuarios);
            $usuarios->id = $this->db->insert_id();

            $this->set_response($usuarios,REST_Controller::HTTP_CREATED); //201
        }

        public function actualizar_put(){
            $data = file_get_contents("php://input");
            $usuarios = json_decode($data);
            $this->db->where('id', $usuarios->id);
            $this->db->update('usuarios',$usuarios);
            $this->set_response([
                    'id' => $usuarios->id,
                    'message' => 'Registro actualizado',
                    'result' => []],
                    REST_Controller::HTTP_OK); //202

        }

    }
    


?> 