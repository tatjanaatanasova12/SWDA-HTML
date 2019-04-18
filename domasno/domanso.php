<?php

class MobilePhone {
    public $height;
    private $width;
    private $model;


public function __construct($m){
    $this->model = $m;
}

public function answer(){
    echo "In case the phone rigns,please answer it ";
}
public function call(){
    echo "In case of emergency, call 911";
}
public function setWidth($w){
   $this->width=$w;
}
public function getWidth(){
    return $this->width;
}
}

$mp1 = new MobilePhone('Samsung Galaxy S10');
$mp1->height = 149;
$mp1->setWidth (70.4);
print_r($mp1);

$mp2 = new MobilePhone ('Samsung Galaxy S10+');
$mp2->height =16.26;
$mp2->setWidth (74.1);
print_r($mp2);

// ..............................

class Roommates{
    private $name;
    private $capacity;
    private $beds;

    public static $BED_SINGLE = 'single';
    public static $BED_DOUBLE = 'double';
    
    public function __construct($n) {
        $this->name =$n;
    }
    public function __destruct(){
        echo '<br/> According to the calendar ' . $this->name . 'has to clean the apartemnet and buy wine this Wednesday';
        
    }
    public function setCapacity ($c){
        $this->capacity =$c;
    }
}

public function setBeds($b){
    $bt = ['single','double'];
    if(in_array($b, $bt)){
    $this->beds = $b;
    }
}
public function getName(){
    return $this->name;
}
public function getCapacity(){
    return $this->capacity;
    }
    public function getBeds(){
        return $this->beds;
    }
}
$r1= new Roommates('Martina');
$r1->setCapacity(2);
$r1->setBeds(Roommates::$BED_DOUBLE);

$r2= new Roommates ('Monika');
$r2->setCapacity(1);
$r2->setBeds(Roommates::$BED_SINGLE);

print_r($r2);

// .........................................

abstract class Clothes{
    protected $materialOfclothes;
    protected $size;

    public function setMaterialOfClothes($m) {
        $this->materialOfClothes = $m;
    }
    public function setSize($s){
        $this->size=$s;
    }
    public function getSize(){
        return $this->size;
    }
    public function getMaterialOfClothes(){
        return $this->materialOfClothes;
    }
}
class Blouse extends Clothes {
    private $colour;
}
public function setColour($c) {
    $this->colour = $c;
}
}
$b1 =new Blouse;
$b1->setMaterialOfClothes('cotton');
$b1->setSiza('s');
$b1->setColour('white');


?>
