
let qrText = document.getElementById('qrText');
let qrImg = document.getElementById('qrImg');
let qrBox = document.getElementById('qrBox');


function generateCode() {
    if (qrText.value.length > 0) {
        document.getElementById('qrBox').style.display = "block";
        qrImg.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        
    }else{
        document.getElementById('qrBox').style.display = "none";
        alert('You should enter value');
    };
};


qrText.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("btn").click();
  };
});
