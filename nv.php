<?php
session_start();
if(isset($_POST['name'])){
    $name=$_POST ['location'];
    $name=$_POST ['date'];
    $name=$_POST ['guests'];
}else{
   header('search tour:hom.html')
}