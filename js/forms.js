/*Add the JavaScript here for the function billingFunction().  It is responsible for setting and clearing the fields in Billing Information */
function billingFunction(){
    if(document.getElementById('same').checked){
      
      var name=document.getElementById('shippingName').value;
      document.getElementById('billingName').value=name;
      var zip=document.getElementById('shippingZip').value;
      document.getElementById('billingZip').value=zip;
      }
    else{
      document.getElementById('billingName').value="";
      document.getElementById('billingZip').value="";
    }
  }
  /*
  alternate way
function billingFunction(){
    if(same.checked){
      billingName.value=shippingName.value;
      billingZip.value=shippingZip.value;
    }
    else{
      billingName.value="";
      billingZip.value="";
      
    }
  }
another way
  function billingFunction(){
	var check = document.getElementById('same');
	var name = document.getElementById('shippingName');
	var zip = document.getElementById('shippingZip');

	if(check.checked == true){
		document.getElementById('billingName').setAttribute("value",name.value);
		document.getElementById('billingZip').setAttribute("value", zip.value);	
	}else{
		document.getElementById('billingName').setAttribute("value","");
		document.getElementById('billingZip').setAttribute("value", "");
	}
}
  */