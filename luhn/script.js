validCard(1234567890123456); //should be false
validCard(4408041234567893); //should be true
validCard(38520000023237); //should be true
validCard(4222222222222); //should be true


      <?php require_once ('index.php'); ?>


      <input class="input" type="number" value="$num"></input><br/>
      <button onclick="validCard($num);">Test Number</button>


      <?php
      $num = num;
      ?>

$num = $_POST['num'];
