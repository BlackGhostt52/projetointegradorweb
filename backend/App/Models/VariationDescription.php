<?php
    namespace App\Models;

    use App\Models\Crud;
    use App\Models\Core;

    class VariationDescription extends Crud
    {
        protected $core = null;
        public $table = 'VARIACAODESCRICAO';
        private $filters = null;
        protected $pk  = 'id';
        public $db;
       

        public function __construct(){
            $this->db = new Core();
        }

  

        // echo "Teste";  

        

        // public function create()
        // {
        //     $this->core->create();
        // }

        
        
    }