<?php

$id= $_REQUEST['id']; 
$quote= $_REQUEST['quote']; 

$tk = getToken();


$url = "https://www.zohoapis.com/crm/v2/Quotes/$id";
$fields = json_encode(array("data" => array(["Aprova_o_cliente" => "Sim"])));

$headers = array(
    'Content-Type: application/json',
    sprintf('Authorization: Zoho-oauthtoken %s', $tk)
);


$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
curl_setopt($ch, CURLOPT_POSTFIELDS, $fields);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 60);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);

curl_exec($ch);
curl_close($ch);  


function getToken() {
  $curl = curl_init();  
  curl_setopt_array($curl, [
    CURLOPT_URL => "https://accounts.zoho.com/oauth/v2/token?refresh_token=1000.6a3480766bb40f245f39ab5594e0fbe8.d17139000800bfb254a570c558ccfbca&client_id=1000.L94GOE3FTF0ANDOR6LN2U3Q9K6XLMA&client_secret=539c11063c5ef2a8e2da5c07285fe9a40bd19f12f1&grant_type=refresh_token",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "",
  ]);
    
  $response = curl_exec($curl);
  $restk = json_decode($response);
  $tk = $restk->access_token;
  
  return $tk;
     
}

?>






<!-- HTML 4 -->
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<!-- HTML5 -->
<meta charset="utf-8"/>


<center>
<p>&nbsp;</p>
<p>&nbsp;</p>    
<table style="border-collapse: collapse; width: 800px;" border="0">
<tbody>
<tr>
<td style="width: 100%; text-align: center;">
<p><img style="float: left;" src="http://nestrental.com.br/images/logo-nestrental_new.png" alt="" width="152" height="56" /></p>
</td>
</tr>
<tr>
</tr>
<tr>
<td style="width: 100%; text-align: center;">
<p>&nbsp;</p>      
<p><strong>Seu Pedido está sendo processado</strong></p>
<p>&nbsp;</p>
</td>
</tr>
<tr>
<td style="width: 100%;">
<p>Recebemos sua confirma&ccedil;&atilde;o de aprova&ccedil;&atilde;o do <strong>or&ccedil;amento Nr: <?php echo $quote; ?> </strong>e seu pedido esta sendo processado</p>
<p>Em breve voc&ecirc; recebera um e-mail para assinar eletronicamente o contrator de loca&ccedil;&atilde;o.</p>
<p>Em caso de duvida, entre em contato conosco atrav&eacute;s do telefone <strong>0800 555 1015.</strong></p>
</td>
</tr>
</tbody>
</table>
<p style="text-align: center;">&nbsp;</p>
    
<div style="visibility: hidden">    