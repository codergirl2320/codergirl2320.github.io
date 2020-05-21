<?php

$num = $_POST['num'];

function validCard($num){
  $str = strval($num);
  $split = str_split($str);
  $count = count($split);
    if($count % 2 === 0){
      foreach($split as $key => $value){
        if($key % 2 === 0){
          $x = $value * 2;
          if($x > 9){
            $strTwo = strval($x);
            $splitTwo = str_split($strTwo);
            $array[] = $splitTwo;
          } else {
            $array[] = $x;
          }
        } else {
          $x = $value;
          $array[] = $x;
        }
      }
    } elseif ($count % 2 !== 0){
      foreach($split as $key => $value){
        if($key % 2 !== 0){
          $x = $value * 2;
          if($x > 9){
            $strTwo = strval($x);
            $splitTwo = str_split($strTwo);
            $array[] = $splitTwo;
          } else {
            $array[] = $x;
          }
        } else {
          $x = $value;
          $array[] = $x;
        }
      }
    }
  $output_array_obj = new RecursiveIteratorIterator(new RecursiveArrayIterator($array));
  $output_array = iterator_to_array($output_array_obj, false);
  $sum = array_sum($output_array);
    if($sum % 10 === 0){
      echo "<h1 style='color:#8C837B; text-align:center; padding: 200px;'>" . 'This IS a valid card number.' . "</h1>";
    } else {
      echo "<h1 style='color:#8C837B; text-align:center; padding: 200px;'>" . 'This is NOT a valid card number.' . "</h1>";
  }
};

validCard($num)
?>
